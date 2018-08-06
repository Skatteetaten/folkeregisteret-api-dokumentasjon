---
title: Adresser
---

**Vil vi alltid motta matrikkeladresse på personer, og både motta vegadresse og matrikkeladresse der en person har en vegadresse?**

Nei. I strukturmodellen benytter vi `<<valgEgenskap>>`. Her velges én, i en serie med flere alternative valg.
Eksempelvis inneholder Bostedsadresse  tre valg av adressetyper:

1. `vegadresse:Vegadresse`
2. `matrikkeladresse:Matrikkeladresse`
3. `ukjentBosted:UkjentBosted`

Kun én av typene benyttes. Hvilken avhenger av hva slags adresse personen melder flytting på:

1. "Gate/vegadresse" medfører typevalg Vegadresse.
2. "Stedsadresse (med gårds-/bruksnummer)" gir Matrikkeladresse.
3. UkjentBosted benyttes i de tilfeller hvor personen melder at vedkommende har ukjent bosted med mulig kjent kommunetilhørighet.

**Hva er Matrikkeladressenavn?**

Matrikkeladressenavn er eksisterende benevnelse på et "nedarvet bruksnavn eller navn på en institusjon eller bygning,
brukt som del av den offisielle adressen". Matrikkeladressenavn vil  hete "adressetilleggsnavn" i vårt nye folkeregister.

**Må "Adressenummer" alltid må være en del av vegadressen?**

Ja, adressenummer må være en del av vegadressen. Adressenummer består av egenskapene husnummer (obligatorisk) og husbokstav (valgfri)

**Hvordan håndteres adresser som ikke har husnummer?**

En adresse med "adressenavn", men uten husnummer, vil bli godkjent dersom den samsvarer med en adresse i matrikkelen hos Kartverket.

**Hvordan er forholdet mellom oppholdsadresse og bostedsadresse?**

I strukturmodellen viser vi at man kan ha flere historiske adresser,
men man kan kun ha én eller ingen gjeldende adresse for hver av adressetypene;
bostedsadresse, deltBosted, oppholdsadresse, postadresse og postadresseIUtlandet.
Det er et krav om å ha minst 1, totalt sett. I tilfeller der man ikke vet hvor personen bor, vil UkjentBosted benyttes.


**Hvis personer ikke ligger registrert med fast bopel så ligger de i DSF uten adresse. Vil det bli noen endring på det?**

Personer med fødselsnummer vil bli oppført med bostedsadresse av typen ukjentBosted med eller uten kommunenummer.

**Henter Skatteetaten adresser på utenlandske personer via batch ajourhold fra Enhetsregisteret når de ikke har det selv? Og skal dere fortsette å gjøre det?**

Ja

**Kan en person ha kontaktadresse i tillegg til bostedsadresse og oppholdsadresse?**

Ja

**Når man som konsument får informasjon om person som har sperret adresse, strengt fortrolig (betegnet som kode 6 i DSF),
hvilken adresse kommer da?**

Det kommer en postadresse som administreres av Kripos-adresse eller Skatt Nord.
Dette er åpen informasjon. Kripos og Skatt Nord videredistribuerer post til personen.
Altså er personen kontaktbar, men bostedet vil ikke finnes i FREG.

**Hva er definisjonen av "postbokseier"?**

Begrepet er ikke definert ennå, men det vi ønsker å beskrive er eieren (eller enda mer presist; en leier fra Posten)
som disponerer postboksen. Dette feltet kom opp som nødvendig utvidelse ved bl.a. rekvirering av d-nummer.
Her var det ønskelig å skille mellom den som skulle motta postforsendelsen i postboksen og den som faktisk disponerer postboksen
(som oppføres under c/o).

**Er adressegraderinger koblet mot person eller til hvert adresseelement?**

Adressegraderinger er både koblet mot person og adresseelementer.
Hver adressetype vil ha hver sin adressegradering som eget informasjonselement.
Hver type adresse vil likevel ha forskjellige lovlige verdier.
Dette vil bli dokumentert. Den graderingen som er knyttet til personen kalles "adressebeskyttelse" og vil beskrive personens
beskyttelsesbehov og vil ha lovlige verdier "fortrolig" og "strengtFortrolig".

**Er det personen som har gradering på adresse, som fører til forskjellig håndtering av adressene?**

Når personen har adressebeskyttelse "fortrolig" adresse, vil hver av adressene som denne har verdier for,
også være påført med adressegradering "fortrolig". Der en av adressene har graderingen "klientadresse",
gjelder graderingen kun denne adressen fordi adressen selv kan avsløre at personens flyktningsstatus ol.

