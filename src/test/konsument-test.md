---
title: Test - konsumenter
---

# Test - Konsumenter
Obs! Modernisering av folkeregisteret er i en pilotfase. Kun inviterte virksomheter som produserer og bruker folkeregisterdata har mulighet til å benytte seg av API-ene frem til pilotperioden er over. Her finner du [informasjon om moderniseringsprosjektet](../http://www.skatteetaten.no/no/Om-skatteetaten/Om-oss/Prosjekter/modernisering-av-folkeregisteret/).

 
## Testplanlegging
Prosjektet har egne oppstartsmøter med produsenter/konsumenter i forkant av testen. I møtet blir man enig om felles plan. Etter oppstartsmøtet har man egne møter med fokus på test, der tema bl.a. er plan for testgjennomføringen, hvilke scenarier som bør testes og testdatabehov. 

 
## Krav til testgjennomføring
Konsumenten har ansvar for egen testgjennomføring. Test for konsumenter må fokusere på å avdekke at forventede forretningsregler trigges korrekt basert på aktuelle hendelser.
Prosjektet ved testleder er tilgjengelig via test.mf@skatteetaten.no ved behov for oppfølging underveis. 

 
## Krav til testmiljø og testdata
Konsumenter som skal teste mot modernisert folkeregister må teste fra testmiljø som utelukkende har syntetiske testdata. De som per i dag ikke har syntetiske testmiljø må etablere dette.
 
Oppkobling mot testmiljøet krever virksomhetssertifikat, pass på at på at du har et gyldig testsertfikat, les mer om sikkerhet og virksomhetssertifikater her: https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/sikkerhet/

 
## Syntetiske testpersoner og hendelser
I parallell med at Folkeregisteret moderniseres, jobber prosjektet med å etablere et testfolkeregister med syntetiske testpersoner. Planen er å gjøre den syntetiske testbefolkningen tilgjengelig fra august 2019.
 
Testbefolkningen skal lages basert på et representativt utvalg av Norges befolkning, og vil bestå av konstruerte data som ikke har rot i virkeligheten. 
Testpersonene navngis ikke med ekte navn, men med navn som er satt sammen av adjektiv og substantiv – f.eks «Vakker blomst». Testpersonene skal bo på ekte gateadresser og med reelle postnummer og kommunenummer, da det er logikk knyttet til disse. 
 
I arbeidet med å etablere testbefolkningen ønsker vi å jobbe iterativt, og basert på tilbakemeldinger eller funn fra konsumentene vil det fram mot august 2019 sannsynligvis bli behov for å resette dataene i testmiljøet med jevne mellomrom. Dette vil bli varslet i forkant.

 
## Tverretatlig samarbeid om test
Arbeidet med å etablere en representativ, syntetisk testbefolkning, inngår i et pågående tverretatlig samarbeid om test og testdata. De deltakende sektorene har samlet seg bak en løsning for testdata på tvers av nasjonale felleskomponenter, og på tvers av offentlig sektor. Testdata fra det moderniserte Folkeregisteret er første steg på veien mot den foreslåtte løsningen for tverretatlige testdata.
 
 
## Avslutning av test og oppstart i produksjon
Konsumenter skal etter avsluttet testperiode, og i forkant av oppstart produksjon oppsummere testen. 
Oppsummeringen skal vise hva som er testet, samt status etter gjennomført test inkludert oversikt over feil og mangler.
Konsumenten skal på SKEs forespørsel fremlegge dokumentasjon på hvordan integrasjonen er testet. 
 
Tidspunkt for oppstart i produksjon besluttes i samråd med prosjektet, ref. Standardvilkår for utlevering av opplysninger fra Folkeregisteret, bilag 1, punkt 1.3.2.
