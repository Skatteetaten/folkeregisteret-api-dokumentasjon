---
title: Oppslag
---

# Grensesnittbeskrivelse
Oppslagstjenesten gir tilgang til data om en person. Tjenesten tilbyr to former for oppslag. 
   * Siste versjonen av en person. Dette er til enhver tid oppdaterte data om personen i henhold til Folkeregisteret. 
   * En versjonert utgave av en person som har vært eller er gyldig. 

For å nå tjenestene bygges URL opp slik:
{miljø}/folkeregisteret/{rettighetspakke}/{versjon}/{ressurs}(? part = {entitet} & part = {entitet} ...)

Parameteret *part* kan brukes til å spesifisere hvilken informasjon, om en person, man ønsker å ha med i oppslaget. Som entitet kan man peke på hvilken som helst entitet på toppnivå i modellen for persondokument. For de entitetene som kan ha historikk, kan man hente ut historikken ved å postfixe parameteret med *-historikk*. En spesialversjon, *part=person* henter all ikke-taushetsbelagt informasjon uten historikk.

## Ressurser
| Ressurs | Beskrivelse | 
|---------|-------------|
|personer/{folkeregisteridentifikator}| Siste versjon av en person | 
|personer/arkiv/{persondokumentidentifikator} | Versjonert utgave av en person |
|personer/xsd| Xsd (kontrakt) for person |

## Rettighetspakker

| Rettighetspakke|Beskrivelse|
|----------------|-----------|
|offentlig-med-hjemmel/api/| Rettighetspakke for offentlige aktører med hjemmel i egen lov som gir rett til folkeregisterdata.

## Miljøer

| Miljø | URL | 
|-------|-----|
| Test| https://folkeregisteret-api-ekstern.sits.no/ | 
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ |  

Eksempel på curl-kommando som kan benyttes for å teste tjenesten:

`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer"`

Oppslag på xsd:

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/xsd"`

Eksempel på uthenting av folkeregisteridentifikator (fødselsnummer og dnummer) med historikk og gjeldende identitetsgrunnlag for en gitt person identifisert med folkeregisteridentifikatoren som settes i URL: 

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/{folkeregiseridentifikator}?part=Folkeregisteridentifikator-historikk&part=Identitetsgrunnlag"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml

## Eksempler på respons fra tjenesten

### Statuskode 200
Eksempel på svar ved oppslag på en arkivert eller oppdatert versjon av en person:
```json

{
  "identifikasjonsnummer": [
    {
      "ajourholdstidspunkt": "2017-09-26T11:08:20.744+02:00",
      "erGjeldende": true,
      "kilde": "SKATTEETATEN",
      "gyldighetstidspunkt": "2017-09-26T11:08:20.744+02:00",
      "status": "iBruk",
      "foedselsEllerDNummer": "69080275560",
      "identifikatortype": "dNummer"
    }
  ],
  "annenIdentifikasjon": [],
  "identitetsgrunnlag": [
    {
      "ajourholdstidspunkt": "2017-09-26T11:08:24.528+02:00",
      "erGjeldende": true,
      "kilde": "skatteetaten",
      "aarsak": "besluttetTildelingAvDNummer",
      "gyldighetstidspunkt": "2017-09-26T11:08:22.918+02:00",
      "identitetsgrunnlagstatus": "ikkeKontrollert",
      "dokumentgrunnlag": []
    }
  ]
}
```

### Feilkoder
Hvis statuskode hverken er 200 eller 304, men man får svar fra applikasjonen, så returneres en datastruktur som ser slik ut

```json

{
  "kode": "FREG-001",
  "melding": "Feil i tjenesten. Vennligst prøv igjen seinere."
}
```

| HTTP Statuskode |  Forklaring |
|----------|-------|
| 401 | Autentiseringsinformasjon mangler |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten |
| 404 | Feil uri brukt. |
| 406 | Oppgitt Accept-header inneholder ikke 'application/xml' eller 'application/json' |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |
