---
title: Test for konsumenter
---

## Krav til testgjennomføring
Konsumenten har ansvar for egen testgjennomføring. Test for konsumenter må fokusere på å avdekke at forventede forretningsregler trigges korrekt basert på aktuelle hendelser.
 
## Krav til testmiljø og testdata
Konsumenter som skal integrasjonsteste mot modernisert folkeregister må teste fra testmiljø som utelukkende har syntetiske testdata. De som per i dag ikke har syntetiske testmiljø må etablere dette. Oppkobling mot testmiljøet skjer via maskinporten, og krever virksomhetssertifikat, pass på at på at du har et gyldig testsertfikat, les mer om sikkerhet og virksomhetssertifikater her: https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/sikkerhet/

Oversikt over testmiljøer og produksjon finnes [her](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/endepunkter/). Legg merke til at for konsumenter finnes det to testmiljøer. Playground er primært rettet mot test av framtidig funksjonalitet, mens konsumenttest er primært test av funksjonalitet dagens produksjon besitter.

## Avslutning av test og oppstart i produksjon
Konsumenter skal etter avsluttet testperiode, og i forkant av oppstart produksjon oppsummere integrasjonstesten. Konsumenten kan bli forespurt om å fremlegge dokumentasjon på hvordan integrasjonen er testet. 


## Søk i testdata: Tenor testdatasøk
Tenor testdatasøk gir deg muligheten til å søke i testpersonene fra syntetisk folkeregister, og er et nyttig verktøy i arbeidet med å lage integrasjon mot Folkeregisteret. Testpersonene henter du ved å integrere mot konsumenttestmiljøet til folkeregisteret. Testdatasøket lar deg søke på ulike egenskaper ved testpersonene enten via et webgrensesnitt med enkelt eller avansert søk, eller via et API. Se mer informasjon på https://www.skatteetaten.no/skjema/testdata/

## Folkeregisteret tilbyr syntetiske testdata fra et eget testmiljø for konsumenter
Formålet med det syntetiske Folkeregisteret er å understøtte integrasjonstest for konsumenter av data fra Folkeregisteret.
De syntetiske testpersonene tilbys fra et eget testmiljø for konsumenter, der vi tilbyr simulering av hendelser via Folkeregisterets konsumenttjenester.
Tenor testdatasøk er integrert mot rettighetspakken offentlig-med-hjemmel, og har tilgang til alle testpersonene fra syntetisk Folkeregister.

Det syntetiske Folkeregisteret består av i overkant av 1 million syntetiske testpersoner med syntetiske fødsels- og d-nummer, der vi har plusset på +80 på måneden.
Testpersonene er navngitt med adjektiv og substantiv – f.eks. "Vakker blomst". 

## Behov og innspill
Har du behov og innspill til syntetisk folkeregister og utvidede søkemuligheter i Tenor testdatasøk?
Send dette inn via [Kontakt oss om deling av data - Skatteetaten](https://www.skatteetaten.no/deling/kontakt/)

