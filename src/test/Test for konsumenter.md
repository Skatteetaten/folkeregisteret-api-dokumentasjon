---
title: Test for konsumenter
---

## Krav til testgjennomføring
Konsumenten har ansvar for egen testgjennomføring. Test for konsumenter må fokusere på å avdekke at forventede forretningsregler trigges korrekt basert på aktuelle hendelser. For henvendelser til prosjektet benytt folkeregister-operasjonssenter@skatteetaten.no. 
 
## Krav til testmiljø og testdata
Konsumenter som skal teste mot modernisert folkeregister må teste fra testmiljø som utelukkende har syntetiske testdata. De som per i dag ikke har syntetiske testmiljø må etablere dette. Oppkobling mot testmiljøet skjer via maskinporten, og krever virksomhetssertifikat, pass på at på at du har et gyldig testsertfikat, les mer om sikkerhet og virksomhetssertifikater her: https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/sikkerhet/

## Avslutning av test og oppstart i produksjon
Konsumenter skal etter avsluttet testperiode, og i forkant av oppstart produksjon oppsummere testen. Oppsummeringen skal vise hva som er testet, samt status etter gjennomført test inkludert oversikt over feil og mangler. Konsumenten skal på skatteetatens forespørsel fremlegge dokumentasjon på hvordan integrasjonen er testet. 


## Søk i testdata: Tenor testdatasøk
Tenor testdatasøk gir deg muligheten til å søke i testpersonene fra syntetisk folkeregister, og er et nyttig verktøy i arbeidet med å lage integrasjon mot Folkeregisteret. Testpersonene henter du ved å integrere mot konsumenttestmiljøet til folkeregisteret. Testdatasøket lar deg søke på ulike egenskaper ved testpersonene enten via et webgrensesnitt med enkelt eller avansert søk, eller via et API. Se mer informasjon på https://www.skatteetaten.no/skjema/testdata/

## Syntetisk folkeregister med syntetisk personidentifikator
Vi jobber nå med å lage en ny versjon av testbefolkningen, som vil bestå av testpersoner med syntetiske personidentifikatorer. 
For å vise at det er en syntetisk personidentifikator plusser vi på +80 på måned for både fødsels- og d-numre, og beregner deretter individsiffere.
Kontrollberegningen (modulus11) beholdes uendret slik den foreligger nå.
 	
Foreslått tidsplan:
•	Ny versjon etableres i løpet av desember 2020 i et eget (internt) testmiljø.
•	Test av ny testbefolkning i januar 2021.
•	Tilgjengelig fra konsumenttestmiljøet i slutten av januar 2021. Dato kommuniseres ut i forkant.
 	
Hva må konsumentene gjøre i forkant av dette?
•	Gjøre seg klar til å hente ny versjon av testbefolkningen, og slette den gamle.
•	Gjøre det mulig å motta fnr og dnr med +80 på måned.
•	Hente fødselsdato fra eget felt i modernisert folkeregister.
