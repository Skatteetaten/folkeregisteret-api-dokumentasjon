---
title: Maskinporten
---

## Komme i gang med Maskinporten
Folkeregisteret benytter maskinporten som autentiserings- og autorisasjonstjener for maskin-til-maskin grensesnitt. Maskinporten er en av Digdirs fellesløsninger og sørger for sikker autentisering og tilgangskontroll for datautveksling mellom virksomheter. Løsningen garanterer identiteten mellom virksomheter og gjør det mulig å binde sammen systemer og utvikle nye tjenester på en effektiv måte. Les mer om [maskinporten](https://samarbeid.digdir.no/maskinporten/maskinporten/25).

For å komme i gang med testing må det gjøres noen forberedelser hos virksomheten:

### 1. Ta kontakt med Digitaliseringsdirektoratet for å få tilgang til Maskinporten
Bestill tilknytning til maskinporten via [DIFIs samarbeidsportal](https://samarbeid.digdir.no/maskinporten/konsument/119)

### 2. Opprette bruker i Samarbeidsportalen
Når avtale med Digdir er opprettet og tilgang er på plass i Altinn, kan du logge på Samarbeidsportalen. Hvis det er første gang du som konsument logger inn på Samarbeidsportalen, må du [opprette en bruker i Samarbeidsportalen](https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html).
* Gå til samarbeid.difi.no
* Trykk på “Min profil” oppe i høyre hjørne.
* Trykk på “Registrer deg” i påloggingsvinduet
* Registrer bruker med din jobbadresse
* Bekreft brukeren ved å trykke på lenken som kommer på epost. (NB! Sjekk søppelpost om ikke eposten kommer frem).

NB! Digdir har egne sider som kan benyttes ved feilsøking der man ikke får generert token, feks [feilsøking](https://docs.digdir.no/docs/Maskinporten/maskinporten_feilsoking). Hvis man fortsatt har problemer ber man at Servicedesk servicedesk@digdir.no kontaktes.

### 3. Opprettelse av bruker hos Folkeregisteret.
Dette gjøres hos Folkeregisteret etter at søknad om tilgang er sendt inn og godkjent. Som konsument trenger du IKKE å gjøre noe her. <br/><br/>
Se [veiledning for konsument](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/veileder-for-konsumenter/) for nærmere informasjon om utfylling og innsending av søknad. Der skal det blant annet angis hvilken rettighetspakke virksomheten søker tilgang til. Rettighetspakke tilsvarer 'scope' på maskinporten-språk.

All kommunikasjon mellom Virksomheten, Maskinporten og Folkeregisteret går over https med TLS.
Bruk av REST-api'er hos Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetssertifikat. Se mer informasjon om dette her: https://docs.digdir.no/maskinporten_auth_server-to-server-oauth2.html


### 4. Systemmessige klargjøringer
#### Klargjøring fra Folkeregisteret:

Så snart søknad er innvilget, vil Folkeregisteret melde inn virksomhetens organisasjonsnummer og scope (rettighetspakke) til Digdir.

Følgende scopes er opprettet for å dekke de rettighetspakkene Folkeregisteret tilbyr:
* folkeregister:deling/offentligmedhjemmel
* folkeregister:deling/offentligmedhjemmel.segmentansvarlig
* folkeregister:deling/finans
* folkeregister:deling/finans.segmentansvarlig
* folkeregister:deling/offentligutenhjemmel
* folkeregister:deling/offentligutenhjemmel.segmentansvarlig
* folkeregister:deling/privatutenhjemmel
* folkeregister:deling/presse
* folkeregister:deling/privat


Folkeregisteret vil derfor melde inn virksomheten omtrent slik:
```
POST /scopes/access/
{
  "scope": "folkeregister:deling/offentligmedhjemmel	",
  "consumer_orgno": "999888999"
}
```
Dette gir virksomheten (med org.nummer 999888999) tilgang til å få tokens fra maskinporten for scopet "folkeregister:deling/offentligmedhjemmel	"

#### Klargjøring fra Virksomheten:
Når virksomheten har fått beskjed at tilgangen er opprettet i maskinporten må tilgangen provisjoneres fra den klienten virksomheten skal benytte for å hente data.
Dette gjøres ved å oppdatere Oauth2 klienten som skal ha tilgangen med det nye scopet, via [ID-porten sitt API for selvbetjening av integrasjoner](https://docs.digdir.no/maskinporten_sjolvbetjening_api.html) eller via et brukergrensenitt i samarbeidsportalen, ref punkt 2 over.
All kommunikasjon mot Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetsertifikat. For test trenger man et testsertifikat av typen 'signering'. Når dette er gjort kan man begynne å bruke folkeregister-api'ene. Det er viktig at man bruker et sertifikat utstedt av TEST CA hos sertifikattilbyder.


### 5. Bruke folkeregister-api-ene med token fra maskinporten
Overordnet gjøres følgende:

1. Først gjøre et kall til maskinporten for å få et token som kan brukes mot folkeregisteret. Fremgangsmåte er beskrevet på [Difi sine side for hvordan bruke maskinporten som konsument](https://docs.digdir.no/maskinporten_guide_apikonsument.html). Merk at "Resource" er valgfri og skal ikke settes for Folkeregisterets API. Dette medfører at audience blir "unspecified" som Folkeregisteret forventer.

2. Tokenet legges ved kallet til folkeregisteret i Authorization header. Tokenet legges ved slik:
```
'Authorization: Bearer <token>'
```
For de konkrete api-ressursene, se kall [her](../hendelsesliste) og  [her](../oppslag)
  
3. Folkeregisteret verifisere at virksomheten er den de sier de er (autentisering) og at de har rett til den informasjonen de prøver å hente (autorisering).

4. Hvis alt er OK returneres data iht. forespørselen.

### 6. Hvordan opptre på vegne av en annen virksomhet
Det er mulig for systemleverandører (og andre) å opptre på vegne av andre virksomheter ved oppkobling mot folkeregisteret. Dette innebærer bl.a. at virksomheten må delegere en rettighet til systemleverandøren i Altinn. Difi har en nærmere beskrivelse av hvordan dette gjøres. [Delegere rettigheter via Altinn](https://docs.digdir.no/maskinporten_guide_apikonsument.html#bruke-delegering-via-altinn-autorisasjon).
Selve kallene mot Folkeregisteret vil skje på vanlig måte men tokenet vil inneholde informasjon både om konsument og systemleverandør.
