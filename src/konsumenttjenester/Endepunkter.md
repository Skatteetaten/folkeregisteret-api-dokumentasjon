---
title: Endepunkter
---

## Oppbygging av endepunkter
URL til tjenestene bygges opp på følgende måte: 
{miljø}/folkeregisteret/{rettighetspakke}/{versjon}/{ressurs}

Eksempelvis i konsumenttest for offentlig hjemmel og tjenesten personer/xsd:
`https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/xsd `

## Tilgjengelige miljøer


| Miljø | URL | 
|----------|-----------------------------------------------------------|
|Playground| https://folkeregisteret-api-konsument-playground.sits.no/ |
|Konsumenttest| https://folkeregisteret-api-konsument.sits.no/ |
|Produksjon| https://folkeregisteret.api.skatteetaten.no/ |

## Tilgjengelige  rettighetspakker

Under finner du en oversikt over hvilke rettighetspakker som er tilgjengelig og hvilke url'er som må benyttes for de ulike pakkene.


| Rettighetspakker | URL | Scope |
|------------------------------------------|------------------------------------------|---------------------------------------------------------|
|Offentlig og privat virksomhet med hjemmel|folkeregisteret/offentlig-med-hjemmel/api/|folkeregister:deling/offentligmedhjemmel|
|Offentlig virksomhet uten hjemmel|folkeregisteret/api/offentligutenhjemmel/|folkeregister:deling/offentligutenhjemmel|
|Privat virksomhet uten hjemmel| folkeregisteret/api/privatutenhjemmel/|folkeregister:deling/privatutenhjemmel|
|Privat virksomhet|folkeregisteret/api/privat/|folkeregister:deling/privat|
|Finans|folkeregisteret/api/finans/|folkeregister:deling/finans|
|Presse|folkeregisteret/api/presse/|folkeregister:deling/presse|

## Ressurser

Folkeregisterets tjenester er dokumentert på [swaggerhub.](https://app.swaggerhub.com/organizations/Skatteetaten_FREG) 

