---
title: Test for konsumenter
---

## Krav til testgjennomføring
Konsumenten har ansvar for egen testgjennomføring. Test for konsumenter må fokusere på å avdekke at forventede forretningsregler trigges korrekt basert på aktuelle hendelser.
 
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

Merk at den nye testbefolkningen vil erstatte den gamle, dvs. de testpersonene som finnes per i dag vil bli slettet i forbindelse med innføring av syntetiske personidentifikatorer.

 	
Tidsplan:
* 19. januar: Ny testbefolkning er tilgjengelig i Folkeregisterets testmiljø "playground" og i Tenor testdatasøk sitt testmiljø "utv1".
* 1. februar: Ny testbefolkning er tilgjengelig i konsumenttest og i Tenor testdatasøk.
 	
Hva må konsumentene gjøre i forkant av dette?
* Gjøre seg klar til å hente ny versjon av testbefolkningen, og slette den gamle.
* Gjøre det mulig å motta fnr og dnr med +80 på måned.
* Hente fødselsdato fra eget felt i modernisert folkeregister.

Under følger noen eksempler på syntetiske fnr og dnr. (Fnr teller ned på individsifrene, mens dnr teller opp.)
Eksemplene er laget direkte i en generator, og det er derfor ikke mulig å slå de opp i noe system.
 
| Fødselsdato | Kjønn | Fødselsnummer | D-nummer |
|----------|-------|-------|-------|
| 17.11.2020 |	Mann |	17912099997 |	57912075186 |
| 29.02.2020	| Kvinne	| 29822099635	| 69822075096 |
| 05.04.2003	| Kvinne	| 05840399895	| 45840375084 |
| 12.02.1994	| Mann	| 12829499914	| 52829400197 |
| 12.10.1952 |	Mann	| 12905299938 |	52905200100 |
| 21.08.1936	| Kvinne	| 21883649874 |	61883600222 |
| 21.12.1897 |	Kvinne	| 21929774873	| 61929750062 |
