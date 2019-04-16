---
title: Uttrekk
---

Merk at uttrekk pt kun er tilgjengelig for rettighetspakke - offentlig med hjemmel.

# Grensesnittbeskrivelse
Uttrekktjenesten gir tilgang til å hente ut et utvalg med personer basert på én eller flere kriterier, som for eksempel fødselsår, gatenavn, og kommune, uten å identifisere personene først.
Tjenesten er delt i 3 deler som utføres i rekkefølge:
   * Finn tidspunktet uttrekket ønskes fra, representert ved feedsekvensnummer. Eksempelvis siste sekvensnummer på [hendelsesfeeden](../hendelsesliste)
   * Bestille uttrekk basert på et sett med kriterier, bestillingen returnerer en identifikator som benyttes for å hente resultatet.
   * Batchvis henting av resultatet som består av identifikatorer som igjen peker på persondokumenter
   * Benytte [bulkoppslag](../oppslag) for å hente persondokumentene basert på indentifikatorene fra steg 2

Følgende algoritme beskriver flyten for de tre tjenestene:
```
  jobbid = bestillUttrekk(sekvensnummer)

  batchteller = 0
  batch = hentResultat(jobbid, batchteller)

  while (batch.resultat > 0) {
    persondokumenter = hentPersondokumenter(batch)
    // behandle persondokumenter

    batch = hentResultat(jobbid, ++batchteller)
  }
```

For å benytte tjenestene bygges URL opp slik:
   {miljø}/folkeregisteret/offentlig-med-hjemmel/api/{versjon}/{ressurs}

## Ressurser
| Ressurs | Beskrivelse |
|---------|-------------|
|uttrekk/komplett?feedsekvensnr={feedsekvensnummer}| Bestilling av komplett uttrekk av folkeregisteret (0-dags uttrekk) |
|uttrekk/{uttrekk-id}/batch/{batch-id}| Resultat av uttrekk, inneholder opptill 100000 identifikatorer pr batch. |


## Rettighetspakker

| Rettighetspakke|Beskrivelse|
|----------------|-----------|
|offentlig-med-hjemmel/api/| Rettighetspakke for offentlige aktører med hjemmel i egen lov som gir rett til folkeregisterdata. |

## Miljøer

| Miljø | URL |
|-------|-----|
| Produsenttest| https://folkeregisteret-api-ekstern.sits.no/ |
| Konsumenttest | https://folkeregisteret-api-konsument.sits.no/ |
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ |
| Playground | https://folkeregisteret-api-konsument-playground.sits.no/  |

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml.

## Eksempler på respons fra tjenesten

### Statuskode 200
Eksempel på svar ved bestilling av uttrekk:
```json
  {
    "jobbId": "e9ca4d76-2ed7-43bc-bb50-469304df1e1c"
  }
```

Eksempel på svar ved henting av en batch:
```json
  {
    "dokumentidentifikator": [
        "af79a3bea0935c0d6dbd4d3678c4b5cb",
        "454024eccbecf7db138c8135e3ef189f",
        "efb2b7b365f44ddb0aaab61f66b37898",
        "4794503daee1dffb8f5b72cd4b4ef869",
        "932e0744daa5f48e6de7d0df9e798cf2",
        "d7b856e682508205b18d429e0faaf3dc"
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
| 500 | Feil i tjenesten. Vennligst prøv igjen senere. |