---
title: Test for konsumenter
---

## Krav til testgjennomføring
Konsumenten har ansvar for egen testgjennomføring. Test for konsumenter må fokusere på å avdekke at forventede forretningsregler trigges korrekt basert på aktuelle hendelser.
 
## Krav til testmiljø og testdata
Konsumenter som skal integrasjonsteste mot modernisert folkeregister må teste fra testmiljø som utelukkende har syntetiske testdata. De som per i dag ikke har syntetiske testmiljø må etablere dette. 

Oversikt over testmiljøer og produksjon finnes [her](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/endepunkter/). Legg merke til at for konsumenter finnes det to testmiljøer. Playground er primært rettet mot test av framtidig funksjonalitet, mens konsumenttest er primært test av produksjonslik funksjonalitet.

Oppkobling mot testmiljøet skjer via maskinporten, og krever virksomhetssertifikat, pass på at på at du har et gyldig testsertfikat, les mer om sikkerhet og virksomhetssertifikater [her](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/sikkerhet/).

## Test av fremtidig funksjonalitet
Playground er et testmiljø der vi tilbyr test av fremtidig funksjonalitet: https://folkeregisteret-api-konsument-playground.sits.no/
Testpersonene i playground er basert på en kopi av syntetisk folkeregister, men det vil ikke være synkronisert med testpersonene i konsumenttestmiljøet. Det finnes per nå ikke en egen søkeløsning for playground. Dette er noe vi vurderer å tilby på sikt.
Vi publiserer lister med testdata som kan brukes i de aktuelle scenariene og informerer om endringene i forkant via [Nyheter](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/nyheter/)

## Syntetisk folkeregister og integrasjonstest
Det syntetiske folkeregisteret er tilgjengelig via testmiljøet konsumenttest, som er det primære testmiljøet for integrasjonstest: https://folkeregisteret-api-konsument.sits.no/

Konsumenttest er et testmiljø med produksjonslike API og funksjonalitet.
Her tilbyr vi simulering av hendelser via Folkeregisterets konsumenttjenester. I noen tilfeller legger vi ut endringer og ny funksjonalitet i konsumenttestmiljøet ca. to uker før endringen inntreffer i produksjon. Vi varsler i så fall om dette via [Nyheter](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/nyheter/).
 
Formålet med det syntetiske Folkeregisteret er å understøtte integrasjonstest for konsumenter av data fra Folkeregisteret. Det syntetiske Folkeregisteret består av i overkant av 1 million syntetiske testpersoner. Testpersonene er navngitt med adjektiv og substantiv – f.eks. "Vakker blomst". Tenor testdatasøk er integrert mot rettighetspakken offentlig-med-hjemmel, og har tilgang til alle testpersonene fra syntetisk Folkeregister.

#### Syntetiske fødsels- og d-nummer
Personene har syntetiske fødsels- og d-nummer, der vi har plusset på +80 på måneden.
En syntetisk testperson "født" 01.11.2024 vil få 019124 som fødselsdato.
Kontrollsifferene er beregnet etter at +80 er lagt til måneden, slik at de syntetiske fødsels- og d-numrene oppfyller krav til modulus11.

## Søk i testdata: Tenor testdatasøk
Tenor testdatasøk gir deg muligheten til å søke i testpersonene fra syntetisk folkeregister, og er et nyttig verktøy i arbeidet med å lage integrasjon mot Folkeregisteret. Testpersonene henter du ved å integrere mot konsumenttestmiljøet til folkeregisteret. Testdatasøket lar deg søke på ulike egenskaper ved testpersonene enten via et webgrensesnitt med enkelt eller avansert søk, eller via et API. Se mer informasjon på  https://www.skatteetaten.no/skjema/testdata/

Se også tips til avansert søk for Folkeregisteret [på](https://skatteetaten.github.io/testnorge-tenor-dokumentasjon/brukerveiledning/). 

## Behov og innspill
Har du behov og innspill til syntetisk folkeregister og utvidede søkemuligheter i Tenor testdatasøk?
Send dette inn via [Kontakt oss om deling av data - Skatteetaten](https://www.skatteetaten.no/deling/kontakt/)

## Avslutning av test og oppstart i produksjon
Konsumenter skal etter avsluttet testperiode, og i forkant av oppstart produksjon oppsummere integrasjonstesten. Konsumenten kan bli forespurt om å fremlegge dokumentasjon på hvordan integrasjonen er testet. 
