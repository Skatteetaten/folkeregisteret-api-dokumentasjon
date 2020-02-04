---
title: Maskinporten
---

## Komme i gang med Maskinporten
Folkeregisteret benytter maskinporten som autentiserings- og autorisasjonstjener for maskin-til-maskin grensesnitt. Difi har beskrevet overordenet hvordan [API-sikring med maskinporten](https://difi.github.io/felleslosninger/maskinporten_guide_apikonsument.html) gjøres.
Vi anbefaler alle virksomheter å sette seg godt inn i dette rammeverket. 
 
For å komme i gang med testing må det gjøres noen forberelser hos virksomheten:


### 1. Ta kontakt med DIFI for å få tilgang til Maskinporten
Bestill tilknytning til maskinporten via [DIFIs samarbeidsportal](https://samarbeid.difi.no/felleslosninger/maskinporten/ta-i-bruk-maskinporten)


### 2. Sende forespørsel om å bli opprettet som bruker.
  Inntil videre gjøres dette ved manuell kontakt med interessentoppfølger for folkeregisteret. Prosjektet avklarer hvilken rettighetspakke virksomheten skal ha tilgang til. Som oftest er dette basert på hjemmelsgrunnlaget. Les mer om hvilken gruppe virksomheten tilhører: https://www.skatteetaten.no/person/folkeregister/attester-og-opplysninger/folkeregisteropplysninger/.
	
Så snart korrekt rettighetspakke er avklart vil folkeregisteret klargjøre virksomheten i sine systemer.



All kommunikasjon mellom Virksomheten, Maskinporten og Folkeregisteret går over https med TLS
Bruk av REST-api'er hos Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetsserifikat 

Se mer informasjon om dette her: https://difi.github.io/felleslosninger/oidc_auth_server-to-server-oauth2.html


### 3. Systemmessige klargjøringer
#### Klargjøring fra Folkeregisteret:

Så snart korrekt rettighetspakke for virksomheten er avklart, vil Folkeregisteret melde inn virksomhetens organisasjonsnummer og rettighetspakke til DIFI. Rettighetspakken tilsvarer 'scope' på maskinporten-språk.
Foreløpig er det kun laget ett scope som dekker rettighetspakken 'offentlig-med-hjemmel'. Folkeregisteret vil derfor melde inn virksomheten omtrent slik:
```
POST /scopes/access/
{
  "scope": "skatteetaten:medhjemmel",
  "consumer_orgno": "999888999"
}
```
Dette gir virksomheten (med org.nummer 999888999) tilgang til å få tokens fra maskinporten for scopet "skatteetaten:medhjemmel"
#### Klargjøring fra Virksomheten:
Når virksomheten har fått beskjed at tilgangen er opprettet i maskinporten må tilgangen provisjoneres fra den klienten virksomheten skal benytte for å hente data.
Dette gjøres ved å oppdatere Oauth2 klienten som skal ha tilgangen med det nye scopet, via [ID-porten sitt API for selvbetjening av integrasjoner](https://difi.github.io/felleslosninger/oidc_guide_maskinporten.html#4-konfigurere-oauth2-klient) eller via et brukergrensenitt i samarbeidsportalen.  
All kommunikasjon mot Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetsertifikat. For test trenger man et testsertifikat av typen 'signering'. Når dette er gjort kan man begynne å bruke folkeregister-api'ene.

                  
### 4. Bruke folkeregister-api'ene med token fra maskinporten
Overordnet gjøres følgende:

1. Først gjøre et kall til maskinporten for å få et token som kan brukes mot folkeregisteret
   
2. Tokenet legges ved kallet til folkeregisteret i Authorization header. Tokenet legges ved slik:
```
'Authorization: Bearer <token>'
```

  For de konkrete api-ressursene, se kall [her](../hendelsesliste) og  [her](../oppslag)
3. Folkeregisteret verifisere at virksomheten er den de sier de er (autentisering) og at de har rett til den informasjonen de prøver å hente (autorisering).

4. Hvis alt er OK returneres data iht. forespørselen.
		

