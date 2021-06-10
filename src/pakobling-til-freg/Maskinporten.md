---
title: Maskinporten
---

## Komme i gang med Maskinporten
Folkeregisteret benytter maskinporten som autentiserings- og autorisasjonstjener for maskin-til-maskin grensesnitt. Digitaliseringsdirektoratet har beskrevet overordenet hvordan [API-sikring med maskinporten](https://difi.github.io/felleslosninger/maskinporten_guide_apikonsument.html) gjøres.
Vi anbefaler alle virksomheter å sette seg godt inn i dette rammeverket.

For å komme i gang med testing må det gjøres noen forberedelser hos virksomheten:


### 1. Ta kontakt med Digitaliseringsdirektoratet for å få tilgang til Maskinporten
Bestill tilknytning til maskinporten via [DIFIs samarbeidsportal](https://difi.github.io/felleslosninger/maskinporten_overordnet.html)


### 2. Opprettelse av bruker hos Folkeregisteret.
Dette gjøres hos Folkeregisteret etter at søknad om tilgang er sendt inn og godkjent. Se [veiledning for konsument](paakobling_konsument.md) for nærmere informasjon om utfylling og innsending av søknad. Der skal det blant annet angis hvilken rettighetspakke virksomheten søker tilgang til. Rettighetspakke tilsvarer 'scope' på maskinporten-språk.

All kommunikasjon mellom Virksomheten, Maskinporten og Folkeregisteret går over https med TLS.
Bruk av REST-api'er hos Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetssertifikat

Se mer informasjon om dette her: https://difi.github.io/felleslosninger/oidc_auth_server-to-server-oauth2.html


### 3. Systemmessige klargjøringer
#### Klargjøring fra Folkeregisteret:

Så snart søknad er innvilget, vil Folkeregisteret melde inn virksomhetens organisasjonsnummer og scope (rettighetspakke) til Digitaliseringsdirektoratet.

Følgende scopes er opprettet for å dekke de rettighetspakkene Folkeregisteret tilbyr:
* folkeregister:deling/offentligmedhjemmel
* folkeregister:deling/finans
* folkeregister:deling/offentligutenhjemmel
* folkeregister:deling/privat
* folkeregister:deling/offentligmedhjemmel.segmentansvarlig
* folkeregister:deling/finans.segmentansvarlig
* folkeregister:deling/offentligutenhjemmel.segmentansvarlig


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
Dette gjøres ved å oppdatere Oauth2 klienten som skal ha tilgangen med det nye scopet, via [ID-porten sitt API for selvbetjening av integrasjoner](https://difi.github.io/felleslosninger/oidc_api_admin_maskinporten.html) eller via et brukergrensenitt i samarbeidsportalen.
All kommunikasjon mot Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetsertifikat. For test trenger man et testsertifikat av typen 'signering'. Når dette er gjort kan man begynne å bruke folkeregister-api'ene. Det er viktig at man bruker et sertifikat utstedt av TEST CA hos sertifikattilbyder.


### 4. Bruke folkeregister-api-ene med token fra maskinporten
Overordnet gjøres følgende:

1. Først gjøre et kall til maskinporten for å få et token som kan brukes mot folkeregisteret. Fremgangsmåte er beskrevet på [Difi sine side for hvordan bruke maskinporten som konsument](https://difi.github.io/felleslosninger/maskinporten_guide_apikonsument.html). Merk at "Resource" er valgfri og skal ikke settes for Folkeregisterets API. Dette medfører at audience blir "unspecified" som Folkeregisteret forventer.

2. Tokenet legges ved kallet til folkeregisteret i Authorization header. Tokenet legges ved slik:
```
'Authorization: Bearer <token>'
```

  For de konkrete api-ressursene, se kall [her](../hendelsesliste) og  [her](../oppslag)
3. Folkeregisteret verifisere at virksomheten er den de sier de er (autentisering) og at de har rett til den informasjonen de prøver å hente (autorisering).

4. Hvis alt er OK returneres data iht. forespørselen.

### 5. Hvordan opptre på vegne av en annen virksomhet
Det er mulig for systemleverandører (og andre) å opptre på vegne av andre virksomheter ved oppkobling mot folkeregisteret. Dette innebærer bl.a. at virksomheten må delegere en rettighet til systemleverandøren i Altinn. Difi har
en nærmere beskrivelse av hvordan dette gjøres. [Delegere rettigheter via Altinn](https://difi.github.io/felleslosninger/maskinporten_guide_apikonsument.html#bruke-delegering-via-altinn-autorisasjon).
Selve kallene mot Folkeregisteret vil skje på vanlig måte men tokenet vil inneholde informasjon både om konsument og systemleverandør.
