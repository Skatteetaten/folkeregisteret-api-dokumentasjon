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


| Rettighetspakker | URL | 
|----------|---------------------------------------------------------|
|Offentlig med hjemmel|folkeregisteret/offentlig-med-hjemmel/api/|
|Finans|folkeregisteret/api/finans/|
|Offentlig uten hjemmel|folkeregisteret/api/offentligutenhjemmel/|
|Privat virksomhet uten hjemmel| folkeregisteret/api/privatutenhjemmel/|
|Privat|folkeregisteret/api/privat/|

## Ressurser
## Tilgjengelige tjenester
| Tjeneste | Tilgjengelig i rettighetspakker | 
|------------------|----------------|
| v1/personer/{personidentifikator} <br> v1/personer/bulkoppslag | Offentlig med hjemmel, <br> Offentlig uten hjemmel, <br> Finans, <br> Privat uten hjemmel |
|v1/personer/soek | Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel |
|v1/personer/entydigsoek|Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Privat |
|v1/personer/xsd | Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br>Privat, <br> Privat uten hjemmel |
|v1/uttrekk/komplett  <br> v1/uttrekk/{jobbid}/batch/{batchnr} | Offentlig med hjemmel |
|v1/uttrekk/tilpasset <br> v1/uttrekk/{jobbid}/batch/{batchnr} |Offentlig med hjemmel, <br> Offentlig uten hjemmel, <br> Privat uten hjemmel |
|v1/hendelser/feed| Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br>Privat, <br> Privat uten hjemmel |
|v1/hendelser/siste/sekvensnummer| Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br>Privat, <br> Privat uten hjemmel |
|v1/hendelser/xsd|Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br>Privat, <br> Privat uten hjemmel|
|v1/hendelser/feedxsd|Offentlig med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br>Privat, <br> Privat uten hjemmel|
|v1/personer/bulkoppslag/arkiv <br> personer/arkiv/{dokumentidentifikator} |Offentlig med hjemmel|
|v1/hendelser/{hendelsesidentifikator} <br> hendelser/bulkoppslag|Offentlig med hjemmel|







