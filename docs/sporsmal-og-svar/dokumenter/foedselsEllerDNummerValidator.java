import static java.lang.Integer.parseInt;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.stream.IntStream;

public class foedselsEllerDNummerValidator {
    private static final int[] vekter_k1 = { 3, 7, 6, 1, 8, 9, 4, 5, 2 };
    private static final int[] vekter_k2 = { 5, 4, 3, 2, 7, 6, 5, 4, 3, 2 };
    private static final int[] gyldigRest_k1 = { 0, 1, 2, 3 };
    private static final int gyldigRest_k2 = 0;
    private static final Integer[] dNummerSifre = { 4, 5, 6, 7 };

    /**
     * Validerer et fødsels-eller-d-nummer(1964 og 2032-type) ved å sjekke kontrollsifrene iht.
     * <a href="https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/nytt-fodselsnummer-fra-2032/">...</a>
     *
     * @param fnrdnr 11-siffret fødsels-eller-D-nummer som skal valideres.
     * @return true hvis fødsels-eller-D-nummer er gyldig, ellers false
     */
    private static boolean validerKontrollsifferFoedselsEllerDnummer(String fnrdnr) {
        final int[] sifre = konverterTilIntArray(fnrdnr);
        final int gitt_k1 = sifre[9];
        final int gitt_k2 = sifre[10];

        final int[] grunnlag_k1 = Arrays.copyOfRange(sifre, 0, vekter_k2.length);
        final int vektet_k1 = IntStream.range(0, vekter_k1.length)
            .map(i -> grunnlag_k1[i] * vekter_k1[i])
            .sum();

        final int beregnetRestSiffer_k1 = (vektet_k1 + gitt_k1) % 11;

        if (Arrays.stream(gyldigRest_k1).noneMatch(siffer -> siffer == beregnetRestSiffer_k1)) {
            return false;
        }

        final int[] grunnlag_k2 = Arrays.copyOfRange(sifre, 0, vekter_k2.length);
        final int vektet_k2 = IntStream.range(0, vekter_k2.length)
            .map(i -> grunnlag_k2[i] * vekter_k2[i])
            .sum();

        final int beregnetRestSiffer_k2 = (vektet_k2 + gitt_k2) % 11;

        return beregnetRestSiffer_k2 == gyldigRest_k2;
    }

    /**
     * Konverterer en streng til et array av heltall.
     *
     * @param streng strengen som skal konverteres
     * @return array av heltall
     */
    private static int[] konverterTilIntArray(String streng) {
        int[] ints = new int[streng.length()];

        for (int i = 0; i < streng.length(); i++) {
            ints[i] = parseInt(streng.substring(i, i + 1));
        }
        return ints;
    }

    /**
     * Validerer at gitt ID har gyldig format og dato før den kaller selve valideringen.
     *
     * @param gittNummer  ID-nummer som skal valideres.
     * @param erSyntetisk Angir om ID-nummeret er syntetisk.
     * @return true hvis ID-nummeret er gyldig, ellers kaster en IllegalArgumentException.
     * @throws IllegalArgumentException hvis ID-nummeret har ugyldig format eller ikke er gyldig bygget opp.
     */
    private static boolean validerInput(String gittNummer, boolean erSyntetisk) {
        boolean gyldigFormat = gittNummer.matches("^\\d{11}$");

        if (!gyldigFormat) {
            throw new IllegalArgumentException("Ugyldig format: ID må være 11 sifre");
        }

        String dato = gittNummer.substring(0, 6);

        if (erDnummer(gittNummer)) {
            int dagSiffer = Character.getNumericValue(dato.charAt(0));
            dato = (dagSiffer - 4) + dato.substring(1, 6);
        }

        if (erSyntetisk) {
            int maanedSiffer = Character.getNumericValue(dato.charAt(2));
            if (maanedSiffer < 8) {
                throw new IllegalArgumentException("Ugyldig format: " + gittNummer + " syntetiske nummer må ha 8 eller 9 på indeks 2");
            }
            // utled kalenderdato fra syntetisk nummer
            dato = dato.substring(0, 2) + (maanedSiffer - 8) + dato.substring(3, 6);
        }

        if (!erDatoGyldig(dato)) {
            throw new IllegalArgumentException(
                "Ugyldig format: " + gittNummer + " har ugyldig dato " + dato + " i formatet ddMMyy");
        }

        if (!validerKontrollsifferFoedselsEllerDnummer(gittNummer)) {
            throw new IllegalArgumentException(
                "Ugyldig ID: " + gittNummer + " er ikke gyldig bygget opp som " + (erSyntetisk ? "syntetisk" : "reelt") + " nummer");
        }
        return true;
    }

    /**
     * Sjekker om et gitt nummer er et D-nummer.
     *
     * @param gittNummer Nummeret som skal sjekkes.
     * @return true hvis nummeret er et D-nummer, ellers false.
     */
    private static boolean erDnummer(String gittNummer) {
        return Arrays.asList(dNummerSifre).contains(Character.getNumericValue(gittNummer.charAt(0)));
    }

    /**
     * Sjekker om en gitt dato finnes på en kalender. Da århundre ikke lengre vil kunne utledes av
     * 2032-fødselsnumre, antas alle datoer å være etter år 2000.
     *
     * @param dato Datoen som skal sjekkes i formatet ddMMyy.
     * @return true hvis datoen er gyldig, ellers false.
     */
    private static boolean erDatoGyldig(String dato) {
        final String aarhundre = "20";
        final String aar = dato.substring(4, 6);
        final String maaned = dato.substring(2, 4);
        final String dag = dato.substring(0, 2);
        final boolean erSkuddag = "2902".equals(dag + maaned);
        if (erSkuddag && !erSkuddaar(aar)) {
            return false;
        }
        try {
            LocalDate.parse(dag + maaned + aarhundre + aar, DateTimeFormatter.ofPattern("ddMMyyyy"));
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    /**
     * Utleder om et gitt år er et skuddår basert på kun to sifre. Dette medfører at man ikke
     * kan vite hvilket århundre det gjelder, så velger å anse '00' som skuddåret 2000.
     * Dette er grunnet i det ikke lengre vil være mulig å utlede århundre av 2032-fødselsnumre.
     *
     * @param aar Året som skal sjekkes i formatet 'yy'.
     * @return true hvis året er et skuddår, ellers false.
     */
    private static boolean erSkuddaar(String aar) {
        return Integer.parseInt(aar) % 4 == 0;
    }

    public static void main(String[] args) {
        // eksempelkjøring
        System.out.println(validerFoedselsnummer("20036914700", "Gyldig reelt 1964-fødselsnummer", false));
    }

    private static String validerFoedselsnummer(String foedselsnummer, String tittel, boolean erSyntetisk) {
        System.out.println("\n" + tittel);
        try {
            if (validerInput(foedselsnummer, erSyntetisk)) {
                return "Gyldig ID: " + foedselsnummer + " er gyldig bygget opp som " + (erSyntetisk ? "syntetisk" : "reelt") + " nummer";
            }
        } catch (IllegalArgumentException e) {
            return e.getMessage();
        }
        return null;
    }
}