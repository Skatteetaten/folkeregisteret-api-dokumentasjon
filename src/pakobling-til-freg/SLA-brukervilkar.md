---
title: SLA og brukervilkår
---

## Ytelse og responstider 
**(ref. Bruksvilkår for utlevering av folkeregisteropplysninger fra Freg tabell i pkt. 4.3)**

I tabellen under er det inkludert en oversikt over responstid og ytelse per tjeneste (API). Videre er det dokumentert et sett med anbefalte bruksmønstre per tjeneste. Det er viktig at anbefalte bruksmønstre legges til grunn når det utvikles integrasjoner mot FREG. Dette gjelder blant annet ved bruk av hendelsesliste til ajourhold med etterfølgende behov for bulkoppslag.      
Prosjektet vil arbeide videre med ytterligere testing av responstider og ytelse i Q2. Det vil derfor i perioden fram mot generell åpning for konsumenter Q3 2020 komme oppdateringer til denne tabellen basert på resultatene. 

PS! Ved behov for høyvolum og ekstraordinære kall til enkelttjenester, f.eks ved fullast, skal dette avtales med Freg forvaltning (avtales ved epost til freg.produksjon@skatteetaten.no).

### Tjenestenivå(SLA) for FREG test
For FREG test gjelder følgende tjenestenivå:

|              |               |
| ------------ | ------------- |
|Normal oppetid for tjenestene|Tjenestene er i testmiljøet normalt tilgjengelig i avtalt tidsrom alle dager i året med unntak av kortere stopp for nødvendig teknisk vedlikehold.|
|Driftstid (med driftstjenester og overvåkning)|I tidsrommet: <br>                                                                   - fra 08:00 til 15:45 i perioden 15. september til 14. mai. <br> - fra 08:00 til 15:00 i perioden fra 15. mai til 14. september.|
|Testdata|I testmiljøet skal relevante, syntetisk genererte testdata være tilgjengelig. Det er forventet at spesifikke egenskaper som gjelder den enkelte kunde tilrettelegges for test på kundens side.|
|Komponentversjoner|Versjoner av komponenter i testmiljøet skal normalt være samme versjoner som i produksjonsmiljøet.|

### Oppslag
| Tjeneste (API) | url | Rettighetspakker | Forventet responstid | Bruksmønster |
| -------------- | --- | ---------------- | -------------------- | ------------ |
| Hent person | v1/personer/{personidentifikator}  | OffentligMedHjemmel <br> Finans <br> OffentligUtenHjemmel <br> PrivatUtenHjemmel | < 500 ms| Benyttes for enkeltoppslag, eks direkte fra et fagsystem.|
| Hent person - bulkoppslag | v1/personer/bulkoppslag | OffentligMedHjemmel <br> Finans<br>  OffentligUtenHjemmel<br> PrivatUtenHjemmel | < 10 s| Benyttes dersom en skal slå opp på mer enn en person, eks relasjonene til en tidligere hentet person eller endrede personer på hendelsesliste. <br> Merk at responstiden øker sammen med antall oppslag i kallet.|
| Søk med treffliste | v1/personer/soek | OffentligMedHjemmel <br> Finans, OffentligUtenHjemmel<br> PrivatUtenHjemmel | < 2 s | Søk med mer enn et treff. Etterfølges av bulkoppslag på identifikasjonsnummer i treffliste |
| Entydig søk | v1/personer/entydigsoek | OffentligMedHjemmel<br> Finans<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel<br> Presse<br> Privat | < 2 s | Dersom en ikke kjenner fnr/dnr eller ikke har tilgang til tjenesten personer/hent vil entydig søk være alternativet. |
| Online oppslag | www.skatteetaten.no/soekfolkeregisteret| OffentligMedHjemmel<br> Finans<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel<br> Presse<br> Privat| ikke spesifisert | Innlogget onlinetjeneste som erstatter dagens søk på personer via Infotorg|
| Personer xsd | v1/personer/xsd|   | < 500 ms| Gir gjeldende XSD-dokument for personopplysninger.|

### Uttrekk

| Tjeneste (API) | url | Rettighetspakker | Forventet responstid | Bruksmønster |
| -------------- | --- | ---------------- | -------------------- | ------------ |
| Uttrekk komplett <br>Hent uttrekk | v1/uttrekk/komplett <br> 1/uttrekk/{jobbid}/batch/{batchnr} | OffentligMedHjemmel | Sammensatt: <br> -Hent, batch <br> -Bulkoppslag <br> < 10 s bulkoppslag | Bestilling av uttrekk på personer som møter angitte kriterier (f.eks. bostedskommune, fødselsår, personstatus, statsborgerskap, sivilstand, o.l.).|
| Bestill tilpasset uttrekk <br> Hent uttrekk <br> | v1/uttrekk/tilpasset <br> v1/uttrekk/{jobbid}/batch/{batchnr} | OffentligMedHjemmel<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel| Sammensatt: <br> * Hent, batch <br> * Bulkoppslag <br> < 10 s bulkoppslag | Bestilling av uttrekk på personer som møter angitte kriterier (f.eks. bostedskommune, fødselsår, personstatus, statsborgerskap, sivilstand, o.l.).|
