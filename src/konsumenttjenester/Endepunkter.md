---
title: Endepunkter
---

## Oppbygging av endepunkter
URL til tjenestene bygges opp på følgende måte: 
{miljø}/folkeregisteret/{rettighetspakke}/{versjon}/{ressurs}

Eksempelvis i konsumenttest for offentlig hjemmel og tjenesten personer/xsd:
`https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/xsd `

## Tilgjengelige miljøer


| Miljø | URL | Beskrivelse |
|----------|-----------------------------------------------------------|----------|
|Playground| https://folkeregisteret-api-konsument-playground.sits.no/ | Framtidig funksjonalitet |
|Konsumenttest| https://folkeregisteret-api-konsument.sits.no/ | Testversjon av funksjonalitet i produksjon |
|Produksjon| https://folkeregisteret.api.skatteetaten.no/ | Live produksjon av Folkeregisteret |

## Tilgjengelige  rettighetspakker

Under finner du en oversikt over hvilke rettighetspakker som er tilgjengelig og hvilke url'er som må benyttes for de ulike pakkene.


| Rettighetspakker | URL | Scope | Swaggerhub |
|--------------------------------------|------------------------------------------|---------------------------------------------------------|-----------------------------------------|
|Offentlig og privat virksomhet med hjemmel|folkeregisteret/offentlig-med-hjemmel/api/|folkeregister:deling/offentligmedhjemmel|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/Offentlig-med-hjemmel/)|
|Offentlig virksomhet uten hjemmel|folkeregisteret/api/offentligutenhjemmel/|folkeregister:deling/offentligutenhjemmel|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/RettighetspakkerUtenTaushetsbelagtOff)|
|Privat virksomhet uten hjemmel| folkeregisteret/api/privatutenhjemmel/|folkeregister:deling/privatutenhjemmel|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/Lesemodell-uten-taushetsbelagt/)|
|Privat virksomhet|folkeregisteret/api/privat/|folkeregister:deling/privat|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/Lesemodell-uten-taushetsbelagt/)|
|Privat virksomhet uten folkeregisteridentifikator| folkeregisteret/api/privatutenfolkeregisteridentifikator/| folkeregister:deling/privatutenfolkeregisteridentifikator| [OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/Lesemodell-uten-taushetsbelagt/)|
|Finans|folkeregisteret/api/finans/|folkeregister:deling/finans|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/LesemodellBegrensetTaushetsbelagt/)|
|Presse|folkeregisteret/api/presse/|folkeregister:deling/presse|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/Lesemodell-uten-taushetsbelagt/)|
|Presse uten folkeregisteridentifikator|folkeregisteret/api/presseutenfolkeregisteridentifikator/|folkeregister:deling/presseutenfolkeregisteridentifikator|[OpenAPI Specification swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_FREG/Lesemodell-uten-taushetsbelagt/)|


## Ressurser

Folkeregisterets tjenester er dokumentert på [swaggerhub.](https://app.swaggerhub.com/organizations/Skatteetaten_FREG) 

