---
title: Tilbakemelding
---

# Grensesnittbeskrivelse
Folkeregisterets tilbakemeldingstjeneste tilbyr en hendelsesfeed med informasjon om status på innsendinger. Den kan navigeres gjennom sekvensnummer. 

Tjenestenes endepunkt:

`GET {miljø}/folkeregisteret/tilbakemelding/api/{versjon}/hendelser?seq={startsekvensnummer}&direction={nyere/eldre}&pageSize=100`

Eksempel på curl-kommando som kan benyttes for å teste tjenesten:

`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/tilbakemelding/api/v2/hendelser/"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json og application/xml.

Dersom man velger application/xml brukes følgende kontrakter i svaret fra tjenesten:

Feeden er i henhold til [Atom spesifikasjonen](http://www.ietf.org/rfc/rfc4287.txt). Gyldige elementer (angitt i content-delen av feeden) er 
* [HendelserISakOmFolkeregistrering_v1](../kontrakter/HendelserISakOmFolkeregistrering_1.0.xsd)
* [HendelserISakOmDNummerRekvisisjon_v3](../kontrakter/HendelserISakOmDNummerRekvisisjon_3.0.xsd)
* [HendelserISakOmEndringAvDNummerPerson_v1](../kontrakter/HendelserISakOmEndringAvDNummerPerson_1.0.xsd)

**If-None-Match**

Denne verdien skal settes lik **ETag**-header fra siste respons fra tjenesten. Se [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) for mer informasjon om bruk av ETag.

## Eksempel på respons fra tjenesten
Under finnes eksempler på respons fra tjenesten.

### Statuskode 200
Ved statuskode 200 inneholder *body* i svaret en liste med tilbakemeldinger gitt at det finnes noen å hente som samsvarer med spørringen i URL.

Eksempel på en slik liste med tilbakemeldinger gitt at application/json er angitt header *Accept*.
```json

[
  {
    "title": "Hendelse i sak",
    "id": "5",
    "updated": "2016-12-21T09:01:34.496Z",
    "hendelseinfo": {
      "sak": {
        "saksnummer": "117152",
        "opprettet": "2016-12-21T09:01:30.687Z",
        "avsendersSaksreferanse": "201216/fil-7-wf",
        "meldingsreferanse": {
          "avsendersMeldingsidentifikator": "2112116 - avviksmerknad om dublett og merknad om forkortet navn",
          "folkeregisterReferanse": "ab567940-cfd6-4a0d-aec6-44999e5aa4b1"
        }
      },
      "sakTilManuellBehandling": {
        "saksfrist": "2016-12-26",
        "begrunnelse": "muligDublett"
      }
    }
  },
  {
    "title": "Hendelse i sak",
    "id": "6",
    "updated": "2016-12-21T09:02:03.884Z",
    "hendelseinfo": {
      "sak": {
        "saksnummer": "117152",
        "opprettet": "2016-12-21T09:01:30.687Z",
        "avsendersSaksreferanse": "201216/fil-7-wf",
        "meldingsreferanse": {
          "avsendersMeldingsidentifikator": "2112116 - avviksmerknad om dublett og merknad om forkortet navn",
          "folkeregisterReferanse": "ab567940-cfd6-4a0d-aec6-44999e5aa4b1"
        }
      },
      "saksbeslutning": {
        "beslutning": "godkjent",
        "beslutningstidspunkt": "2016-12-21T09:02:03.857Z",
        "skalTildeleDNummer": {
          "dNummer": "70107300943",
          "registreringstidspunkt": "2016-12-20T23:00:00Z",
          "gyldighetstidspunkt": "2016-12-20T23:00:00Z",
          "tildeltDnummerAvvikerFraFoedselsdato": false
        }
      }
    }
  },
  {
    "title": "Hendelse i sak",
    "id": "7",
    "updated": "2016-12-21T09:03:48.546Z",
    "hendelseinfo": {
      "sak": {
        "saksnummer": "117155",
        "opprettet": "2016-12-21T09:03:45.379Z",
        "avsendersSaksreferanse": "201216/fil-8-wf",
        "meldingsreferanse": {
          "avsendersMeldingsidentifikator": "2112116 - avviksmerknad om dublett og merknad om forkortet navn",
          "folkeregisterReferanse": "57471707-69cf-4759-b549-3d3e2d2873fa"
        }
      },
      "sakTilManuellBehandling": {
        "saksfrist": "2016-12-26",
        "begrunnelse": "muligDublett"
      }
    }
  }
]
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
| 401 | Autentiseringsinformasjon mangler. |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten. |
| 404 | Feil uri brukt. |
| 406 | Oppgitt Accept-header inneholder ikke 'application/atom+xml', 'application/xml' eller 'application/json'. |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres. |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |

## Miljøer

| Miljø | URL | 
|-------|-----|
| Test | https://folkeregisteret-api-ekstern.sits.no/ | 
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ |  
