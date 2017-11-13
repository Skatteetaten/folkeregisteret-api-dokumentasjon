---
title: Hendelsesliste
---

# Grensesnittbeskrivelse
Tjenesten tilgjengeliggjør relevante endringer i registeret. Den tilbyr en feed med hendelser. Det er konsumentene som selv styrer sekvens på lesing og hvor mange hendelser man skal lese. Samme hendelser kan leses av flere systemer hos konsumentene og man kan lese hendelser så mange ganger man ønsker. Hendelseslista tilbyr en løs kobling mellom produsent og konsument. Målet er å ha et fleksibelt API for konsumentene. Det eneste konsumentene MÅ holde orden på er en intern feed-peker som viser hvor langt man har lest i feeden.

I tillegg til å lese selve feeden kan man også lese innhold i en enkelt hendelse.

Hendelseslisten kan navigeres gjennom sekvensnummer. Sidestørrelsen som returneres er fast satt til 1000.

Tjenesten er naturlig å se i sammenheng med tjenesten [oppslag](../oppslag). I feeden gis en peker til et persondokument. Dette er en nøkkel man kan bruke til å slå opp personen slik han så ut etter at hendelsen inntraff. 
Man kan også slå opp personen basert på fødsels- eller d-nummer.

For å nå tjenestene bygges URL opp slik:
{miljø}{rettighetspakke}{ressurs}

## Ressurser
|Ressurs|Beskrivelse|
|-------|-----------|
|hendelser/feed/{startsekvensnummer}| Liste over hendelser fra angitt startpunkt |
|hendelser/{hendelsesidentifikator}| Datainnhold i en angitt hendelse |

## Rettighetspakker

| Rettighetspakke|Beskrivelse|
|----------------|-----------|
|offentlig-med-hjemmel/api/| Rettighetspakke for offentlige aktører med hjemmel i egen lov som gir rett til folkeregisterdata.

## Miljøer

|Miljø|URL| 
|-----|---|
| Test| https://folkeregisteret-api-ekstern.sits.no/ | 
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ | 

## Eksempler 
Oppslag i hendelsesliste: <br>
`https://folkeregisteret-api-ekstern.sits.no/offentlig-med-hjemmel/api/1/hendelser/feed/1`

Oppslag på en hendelse: <br>
`https://folkeregisteret-api-ekstern.sits.no/offentlig-med-hjemmel/api/1/hendelser/7d9c19b1-4125-4968-b4dc-09cbaf3ac11f`

Eksempel på curl-kommando som kan benyttes for å teste tjenesten: <br>
`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkregisteret/offentlig-med-hjemmel/api/v1/hendelser/feed/"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml

**If-None-Match**

Denne verdien skal settes lik **ETag**-header fra siste respons fra tjenesten. Se [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) for mer informasjon om bruk av ETag.

## Eksempel på respons fra tjenesten
Under finnes eksempler på respons fra tjenesten.

### Statuskode 200
Eksempel på feed:
```json
[
  {
    "sekvensnummer": 1,
    "skjemaversjon": "1.0",
    "hendelse": {
      "folkeregisteridentifikator": "36925814725",
      "registeroppdatering": "personErOpprettet",
      "hendelsesdokument": "c0134f24-44b1-4ed4-9d21-1c3d796b767e",
      "persondokument": "c29d9303-dfe8-4093-93f6-224662083214",
      "ajourholdstidspunkt": "2017-04-10T15:06:59.244+02:00"
    }
  },
  {
    "sekvensnummer": 2,
    "skjemaversjon": "1.0",
    "hendelse": {
      "folkeregisteridentifikator": "14725836925",
      "registeroppdatering": "personErOpprettet",
      "hendelsesdokument": "52c8697d-c4c5-4bf3-9396-cebe899ed780",
      "persondokument": "92388b93-cf31-45ee-a048-28acb8a02880",
      "ajourholdstidspunkt": "2017-04-10T15:06:59.248+02:00"
    }
  }
]

```

Eksempel på en hendelse for registrering av ny informasjon:
```json
{
  "dokumentidentifikator": "1120bea688fb14a292c244592a1aed76",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIAnnenIdentifikasjon",
    "ajourholdstidspunkt": "2014-01-02T00:00:00Z",
    "egenskapshendelse": [
      {
        "annenIdentifikasjon": {
          "gyldighetstidspunkt": "2017-04-18T10:32:18.312+02:00",
          "kilde": "kilde",
          "aarsak": "kontroll",
          "identifikasjonsnummer": "1234567890",
          "identifikasjonsnummertype": "utenlandskIdentifikasjonsnummer",
          "utstederland": "SWE"
        },
        "entitet": "annenIdentifikasjon",
        "entitetsendring": "registrereNy"
      }
    ]
  }
}
```

Eksempel på en hendelse for korrigering av informasjon:
```json
{
  "dokumentidentifikator": "eb73af9403b0f5702e802ad4f9b8ca4e",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIIdentitetsgrunnlag",
    "ajourholdstidspunkt": "2014-01-04T00:00:00Z",
    "egenskapshendelse": [
      {
        "identitetsgrunnlag": {
          "gyldighetstidspunkt": "2017-04-19T10:32:18.294+02:00",
          "kilde": "korrigert-gjeldende-kilde",
          "identitetsgrunnlagstatus": "kontrollert",
          "dokumentgrunnlag": []
        },
        "entitet": "identitetsgrunnlag",
        "entitetsendring": "korrigere"
      }
    ]
  }
}
```

Eksempel på en hendelse for annullering av informasjon:
```json
{
  "dokumentidentifikator": "c0e054f025e56d63b14f91fbb5abcb95",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIAnnenIdentifikasjon",
    "ajourholdstidspunkt": "2014-01-05T00:00:00Z",
    "egenskapshendelse": [
      {
        "entitet": "annenIdentifikasjon",
        "entitetsendring": "annullere"
      }
    ]
  }
}
```

Eksempel på hendelse for korrigering av historisk informasjon
```json
{
  "dokumentidentifikator": "d1428661e6f2c5c158bf954facdd3ba2",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIIdentitetsgrunnlag",
    "ajourholdstidspunkt": "2014-01-04T00:00:00Z",
    "egenskapshendelse": [
      {
        "entitet": "identitetsgrunnlag",
        "entitetsendring": "korrigereHistorisk"
      }
    ]
  }
}
```

### Statuskode 304
Statuskode 304 (_not modified_) returneres hvis kallet til tjenesten inkluderte headeren **If-None-Match** og denne er lik den aktuelle ETag for etterspurte ressurs. Det betyr at det ikke er kommet noen nye innslag på feeden siden forrige kall.

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
| 406 | Oppgitt Accept-header inneholder ikke 'application/atom+xml', 'application/xml' eller 'application/json' |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. | 