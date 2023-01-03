---
title: Brukerveiledning for systemleverandører
---

## Veileder for systemleverandører, oppkobling til FREG på vegne av en konsument
For systemleverandører som har behov for løpende å hente oppdateringer av folkeregisteropplysninger på vegne av sine kunder (konsument), tilbyr Skatteetaten generell tilgang til [konsumenttjenestene i Folkeregisteret](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/konsumenttjenester/) (FREG). 
FREG er basert på at systemleverandøren integrerer sine systemer mot delingstjenestene ved bruk av FREGs selvbetjeningsfunksjonalitet. I tillegg må systemleverandøren ha etablert en integrasjon mot Maskinporten for autorisasjon mot FREG. Tilganger til FREG tildeles ikke ved manuelle prosedyrer. <br/><br/>  

### Dette trenger du:
1.	Avtale med konsument

2.	Bekreftelse på at konsumenten har fått tilgang til folkeregisteropplysninger 

3.	Bekreftelse på at konsumenten har delegert rettighet i Altinn til din virksomhet

4.	Tilgang til Maskinporten 

5.	Tilgang til Folkeregisteret 
<br/><br/>

### Slik går du fram:

#### 1.	Avtale med konsument 
Det må inngås en avtale mellom konsumenten og systemleverandøren. Dersom konsumentens systemleverandør behandler personopplysninger på vegne av konsumenten, skal det i tillegg inngås databehandleravtale i tråd med gjeldende regler i personvernregelverket.<br/><br/>

#### 2.	Bekreftelse på at konsumenten har fått tilgang til folkeregisteropplysninger 
Systemleverandøren bør innhente bekreftelse på at konsument har [søkt](https://www.altinn.no/skjemaoversikt/skatteetaten/soknad-om-tilgang-til-folkeregisteropplysninger/) og fått innvilget tilgang til Folkeregisteret. Det inkluderer å vite hvilke [rettighetspakker](https://www.skatteetaten.no/deling/folkeregisteret/intro/finne-data/) konsumenten har fått tilgang til.  <br/><br/>

#### 3.	Bekreftelse på at konsumenten har delegert rettighet i Altinn til din virksomhet  
Systemleverandøren bør innhente bekreftelse på at konsumenten har [delegert rettighet](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/guide-til-delegering/) til systemleverandøren gjennom Altinn. Det er viktig at konsumenten delegerer rettighet til de rettighetspakkene som konsumenten har fått tilgang til. <br/><br/> 

#### 4.	Tilgang til Maskinporten
Følgende må utføres;

a)	Følge DigDir veiledning for å få tilgang til Maskinporten. 
Gå inn på følgende lenke og følg stegene for å få tilgang til Maskinporten https://samarbeid.digdir.no/maskinporten/ta-i-bruk-maskinporten/97 og videre beskrivelse https://samarbeid.digdir.no/maskinporten/konsument-delegert-til-leverandor/120 

b)	Inngå avtale med DigDir om bruk av Maskinporten (Er vederlagsfritt for systemleverandøren)  

c)	Etabler en tilgang til Maskinporten 

d)	Gjennomfører test av tilgang mot Maskinporten.  
Nærmere informasjon om hvordan du teknisk kan koble deg opp mot Maskinporten finner du her,https://docs.digdir.no/maskinporten_guide_apikonsument.html#registrering-via-samarbeidsportalen

Eventuelle spørsmål til hvordan du etablerer oppkobling til Maskinporten og/eller feil eller avviksmeldinger knyttet til oppkobling og bruk av Maskinporten skal rettes til  servicedesk@digdir.no. <br/><br/>

#### 5.	Tilgang til Folkeregisteret
Følgende må utføres av systemleverandøren;

a)	Lese og sette seg inn i teknisk dokumentasjon og oppkobling mot Folkeregisteret 
   
b)	Følge dokumentasjon for oppkobling og tilgang til testmiljø

c)	Utvikle og teste oppkobling og integrasjon 

Informasjon for alle ovennevnte punkter a til c finner du under siden [konsumenttjenester](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/konsumenttjenester/)

Eventuelle spørsmål til hvordan du etablerer oppkobling til test- og produksjonsmiljø, feil eller avviksmeldinger knyttet til oppkobling og bruk av testmiljø skal sendes inn via kontaktskjema her: https://www.skatteetaten.no/deling/kontakt/. <br/><br/>

### Andre nyttige lenker  

Generell informasjon om Maskinporten finner du her: https://samarbeid.difi.no/felleslosninger/maskinporten

Driftsmeldinger fra Digdir finner du her: https://samarbeid.difi.no/driftsmeldinger



