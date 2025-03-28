/**
 * Validerer et fødsels-eller-d-nummer(1964 og 2032-type) ved å sjekke kontrollsifrene iht.
 * https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/nytt-fodselsnummer-fra-2032/.
 * @param {string} fnrdnr - 11-siffret fødsels-eller-D-nummer som skal valideres.
 * @returns {boolean} - Returnerer true hvis fødselsnummeret er gyldig, ellers false.
 */
function validerKontrollsifferFoedselsEllerDnummer(fnrdnr) {
    const vekter_k1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    const vekter_k2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    const gyldigRest_k1 = [0, 1, 2, 3];
    const gyldigRest_k2 = 0;

    const sifre = fnrdnr.split('').map(Number);
    const gitt_k1 = sifre.at(9);
    const gitt_k2 = sifre.at(10);

    const grunnlag_k1 = sifre.slice(0, vekter_k1.length);
    const vektet_k1 = grunnlag_k1.reduce((acc, curr, index) => acc + curr * vekter_k1[index], 0)

    const beregnetRestSiffer_k1 = (vektet_k1 + gitt_k1) % 11;

    if (!gyldigRest_k1.includes(beregnetRestSiffer_k1)) {
        return false;
    }

    const grunnlag_k2 = sifre.slice(0, vekter_k2.length);
    const vektet_k2 = grunnlag_k2.reduce((acc, curr, index) => acc + curr * vekter_k2[index], 0)

    const beregnetRestSiffer_k2 = (vektet_k2 + gitt_k2) % 11;

    return beregnetRestSiffer_k2 === gyldigRest_k2;
}

/**
 * Sjekker om et gitt nummer er et D-nummer.
 *
 * @param {string} gittNummer - Nummeret som skal sjekkes.
 * @returns {boolean} - Returnerer true hvis nummeret er et D-nummer, ellers false.
 */
function erDnummer(gittNummer) {
    const dNummerSifre = ['4', '5', '6', '7'];
    return dNummerSifre.includes(gittNummer.at(0));
}

/**
 * Validerer at gitt ID har gyldig format og dato før den kaller selve valideringen.
 * @param {string} gittNummer - ID-nummer som skal valideres.
 * @param {boolean} erSyntetisk - Angir om ID-nummeret er syntetisk.
 * @throws {Error} - Kaster en feil med en spesifikk melding hvis valideringen feiler.
 * @returns {void} - Returnerer void hvis ingen feil.
 */
function validerId(gittNummer, erSyntetisk) {
    const erGyldigFormat = /^\d{11}$/.test(gittNummer);

    if (!erGyldigFormat) {
        throw new Error('Ugyldig format: ID må være 11 sifre');
    }

    let dato = gittNummer.substring(0, 6);

    if (erSyntetisk) {
        // hent kalenderdato fra syntetisk nummer
        const maanedSiffer = parseInt(dato[2], 10);
        if (maanedSiffer < 8) {
            throw new Error(`Ugyldig format: ${gittNummer} datoen i syntetiske nummer må være i formatet dd8Myy eller dd9Myy`);
        }
        const normalisertMnd = maanedSiffer - 8;
        dato = dato.substring(0, 2) + normalisertMnd + dato.substring(3, 6);
    }

    if (erDnummer(gittNummer)) {
        // hent kalenderdato fra d-nummer
        const dagSiffer = parseInt(dato[0], 10);
        dato = (dagSiffer - 4) + dato.substring(1, 6);
    }

    if (!erDatoGyldig(dato)) {
        throw new Error(`Ugyldig format: ${gittNummer} har ugyldig dato ${dato} i formatet ddMMyy`);
    }

    if (!validerKontrollsifferFoedselsEllerDnummer(gittNummer)) {
        throw new Error(`Ugyldig ID: ${gittNummer} er ikke gyldig bygget opp som ${erSyntetisk ? 'syntetisk' : 'reelt'} nummer`);
    }
}

/**
 * Sjekker om en gitt dato finnes på en kalender. Da århundre ikke lengre vil kunne utledes av
 * 2032-fødselsnumre, antas alle datoer å være etter år 2000.
 * @param {string} dato - Datoen som skal sjekkes i formatet ddMMyy.
 * @returns {boolean} - Returnerer true hvis datoen er gyldig, ellers false.
 */
function erDatoGyldig(dato) {
    const aarhundre = '20';
    const aar = dato.substring(4, 6);
    const maaned = dato.substring(2, 4);
    const dag = dato.substring(0, 2);
    const erSkuddag = dag + maaned === '2902';
    if (erSkuddag && !erSkuddaar(aar)) {
        return false;
    }
    return !isNaN(new Date(`${aarhundre}${aar}/${maaned}/${dag}`).getDate());
}

/**
 * Utleder om et gitt år er et skuddår basert på kun to sifre. Dette medfører at man ikke
 * kan vite hvilket århundre det gjelder, så velger å anse '00' som skuddåret 2000.
 * Dette er grunnet i det ikke lengre vil være mulig å utlede århundre av 2032-fødselsnumre.
 * @param {string} aar - Året som skal sjekkes i formatet 'yy'.
 * @returns {boolean} - Returnerer true hvis året er et skuddår, ellers false.
 */
function erSkuddaar(aar) {
    return parseInt(aar, 10) % 4 === 0;
}

/**
 * Henter brukerinput fra DOM, validerer ID-nummeret og oppdaterer resultatet i DOM.
 */
function validerIdFrontend() {
    const gittNummer = document.getElementById('brukerInput').value;
    const erSyntetisk = document.getElementById('syntetisk').checked;

    try {
        validerId(gittNummer, erSyntetisk)
        document.getElementById('resultat').textContent = `Gyldig ID: ${gittNummer} er gyldig bygget opp som ${erSyntetisk ? 'syntetisk' : 'reelt'} nummer`;
        document.getElementById('resultat').style.color = `green`;
    } catch (error) {
        document.getElementById('resultat').textContent = error.message;
        document.getElementById('resultat').style.color = `red`;

    }
}

