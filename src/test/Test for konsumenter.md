---
title: Test for konsumenter
---

## Krav til testgjennomføring
Konsumenten har ansvar for egen testgjennomføring. Test for konsumenter må fokusere på å avdekke at forventede forretningsregler trigges korrekt basert på aktuelle hendelser. For henvendelser til prosjektet benytt folkeregister-operasjonssenter@skatteetaten.no. 
 
## Krav til testmiljø og testdata
Konsumenter som skal teste mot modernisert folkeregister må teste fra testmiljø som utelukkende har syntetiske testdata. De som per i dag ikke har syntetiske testmiljø må etablere dette. Oppkobling mot testmiljøet skjer via maskinporten, og krever virksomhetssertifikat, pass på at på at du har et gyldig testsertfikat, les mer om sikkerhet og virksomhetssertifikater her: https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/sikkerhet/

## Avslutning av test og oppstart i produksjon
Konsumenter skal etter avsluttet testperiode, og i forkant av oppstart produksjon oppsummere testen. Oppsummeringen skal vise hva som er testet, samt status etter gjennomført test inkludert oversikt over feil og mangler. Konsumenten skal på skatteetatens forespørsel fremlegge dokumentasjon på hvordan integrasjonen er testet. 
Tidspunkt for oppstart i produksjon besluttes i samråd med prosjektet, ref. Standardvilkår for utlevering av opplysninger fra Folkeregisteret, bilag 1, punkt 1.3.2.

## Søk i testdata: Tenor testdatasøk
Tenor testdatasøk gir deg muligheten til å søke i testpersonene fra syntetisk folkeregister, og er et nyttig verktøy i arbeidet med å lage integrasjon mot Folkeregisteret. Testpersonene henter du ved å integrere mot konsumenttestmiljøet til folkeregisteret. Testdatasøket lar deg søke på ulike egenskaper ved testpersonene enten via et webgrensesnitt med enkelt eller avansert søk, eller via et API. Se mer informasjon på https://www.skatteetaten.no/skjema/testdata/
