---
title: Ytelse og responstider 
---

**(ref. Bruksvilkår for utlevering av folkeregisteropplysninger fra Freg tabell i pkt. 4.3)**

I tabellen under er det inkludert en oversikt over responstid og ytelse per tjeneste (API). Videre er det dokumentert et sett med anbefalte bruksmønstre per tjeneste. Det er viktig at anbefalte bruksmønstre legges til grunn når det utvikles integrasjoner mot FREG. Dette gjelder blant annet ved bruk av hendelsesliste til ajourhold med etterfølgende behov for bulkoppslag.

PS! Ved behov for høyvolum og ekstraordinære kall til enkelttjenester, f.eks ved fullast, skal dette avtales med Freg forvaltning (avtales via kontaktskjema: https://www.skatteetaten.no/deling/kontakt/)

### Throttling (begrensning av forespørsler)
For å sikre stabil drift og redusere risikoen for overbelastning av tjenestene, er det innført throttling på Folkeregisterets API-er.
Det tillates inntil 60 000 forespørsler per minutt per internettadresse. Dersom denne grensen overskrides, vil tjenesten returnere HTTP-statuskode 429 – Too Many Requests.

## Responstider og bruksmønster i produksjon

### Oppslag
| Tjeneste (API) | url | Rettighetspakker | Forventet responstid | Bruksmønster |
| -------------- | --- | ---------------- | -------------------- | ------------ |
| Hent person | v1/personer/{personidentifikator}  | OffentligMedHjemmel <br> Finans <br> OffentligUtenHjemmel <br> PrivatUtenHjemmel | < 500 ms| Benyttes for enkeltoppslag, eks direkte fra et fagsystem.|
| Hent person - bulkoppslag | v1/personer/bulkoppslag | OffentligMedHjemmel <br> Finans<br>  OffentligUtenHjemmel<br> PrivatUtenHjemmel | < 10 s| Benyttes dersom en skal slå opp på mer enn en person, eks relasjonene til en tidligere hentet person eller endrede personer på hendelsesliste. <br> Merk at responstiden øker sammen med antall oppslag i kallet.|
| Søk med treffliste | v1/personer/soek | OffentligMedHjemmel <br> Finans, OffentligUtenHjemmel<br> PrivatUtenHjemmel | < 2 s | Søk med mer enn et treff. Etterfølges av bulkoppslag på identifikasjonsnummer i treffliste |
| Entydig søk | v1/personer/entydigsoek | OffentligMedHjemmel<br> Finans<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel<br> Presse<br> Privat | < 2 s | Dersom en ikke kjenner fnr/dnr eller ikke har tilgang til tjenesten personer/hent vil entydig søk være alternativet. |
| Online oppslag | https://www.skatteetaten.no/deling/folkeregisteret/intro/oppslag/ | OffentligMedHjemmel<br> Finans<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel<br> Presse<br> Privat| ikke spesifisert | Innlogget onlinetjeneste som erstatter dagens søk på personer via Infotorg|
| Personer xsd | v1/personer/xsd|   | < 500 ms| Gir gjeldende XSD-dokument for personopplysninger.|

### Uttrekk
For uttrekk kan hver virksomhet ha maksimalt 10 uttrekksjobber som kjører samtidig.
Hvis denne grensen overskrides, vil nye uttrekk bli avvist med HTTP 429 (Too Many Requests).
| Tjeneste (API) | url | Rettighetspakker | Forventet responstid | Bruksmønster |
| -------------- | --- | ---------------- | -------------------- | ------------ |
| Uttrekk komplett <br><br>Hent uttrekk | v1/uttrekk/komplett <br><br><br> 1/uttrekk/{jobbid}/batch/{batchnr} | OffentligMedHjemmel | Sammensatt: <br> -Hent, batch <br> -Bulkoppslag <br><br> < 10 s bulkoppslag | Bestilling av komplett uttrekk fra Folkeregisteret med angitt sekvensnummer (fra hendelseslisten).|
| Bestill tilpasset uttrekk <br><br> Hent uttrekk <br> | v1/uttrekk/tilpasset <br><br><br> v1/uttrekk/{jobbid}/batch/{batchnr} | OffentligMedHjemmel<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel| Sammensatt: <br>  -Hent, batch <br> -Bulkoppslag <br><br> < 10 s bulkoppslag | Bestilling av uttrekk på personer som møter angitte kriterier (f.eks. bostedskommune, fødselsår, personstatus, statsborgerskap, sivilstand, o.l.).|

### Hendelser

| Tjeneste (API) | url | Rettighetspakker | Forventet responstid | Bruksmønster |
| -------------- | --- | ---------------- | -------------------- | ------------ |
| Hendelsesliste| v1/hendelser/feed| OffentligMedHjemmel <br> Finans<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel<br> Presse<br> Privat| < 500 ms | Lytte på nye hendelser som påfølges av bulkoppslag på Hendelsesdokument og Persondokument. Feks hvert minutt.|
| Siste sekvensnummer| v1/hendelser/siste/sekvensnummer| OffentligMedHjemmel<br> Finans<br> OffentligUtenHjemmel<br> PrivatUtenHjemmel<br> Presse<br> Privat| < 500 ms | Gir siste sekvensnummer (nyeste hendelse) for hendelseslisten.|
| Hendelser xsd| v1/hendelser/xsd|   | < 500 ms | Gir gjeldende XSD-dokument for hendelse|
| Hendelser feed xsd| v1/hendelser/feedxsd|   | < 500 ms| Gir gjeldende XSD-dokument for feed|

### Ajourhold

| Tjeneste (API) | url | Rettighetspakker | Forventet responstid | Bruksmønster |
| -------------- | --- | ---------------- | -------------------- | ------------ |
| Hent hendelsesdokument| v1/hendelser/{hendelsesidentifikator}| OffentligMedHjemmel| < 500 ms | Gir hendelsesdokument med detaljerte opplysninger om registerendringene som følger av hendelsen. |
| Hent hendelsesdokument - bulkoppslag | /v1/hendelser/bulkoppslag| OffentligMedHjemmel| < 10 s | Tilhørende oppslag på hendelsesdokumenter etter lytting på hendelsesliste|
| Hent person - arkiv| /v1/personer/arkiv/{dokumentidentifikator}| OffentligMedHjemmel| < 500 ms | Gir oppdatert personopplysninger for person med fødsels-, eller d-nummer |
| Hent person - arkiv - bulkoppslag| /v1/personer/bulkoppslag/arkiv| OffentligMedHjemmel| < 10 s | Tilhørende oppslag på persondokumenter etter lytting på hendelsesliste |
