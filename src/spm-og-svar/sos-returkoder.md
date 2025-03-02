---
title: Returkoder
---
**Feilkoder**

Hvis validering av request feiler i brannmur/WAF vil man få en direkte feilkode i html-format da man ikke treffer backend-tjenesten. Det kan være hvis requesten inneholder script, tegn osv som ikke er tillatt. Man vil da motta en en support id som kan benyttes for å spore hvilken attack type som er funnet.

Tabellen under viser returkoder:
Tabellen under viser endringen:

| HTTP Statuskode | Kommentar |
|:---|:--- |
| 400 | Feil i mottatte data - spesifiseres i retur. |
| 401 | Autentiseringsinformasjon mangler |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten |
| 404 | Feil uri brukt eller at man ikke finner ressursen. Også for søk der data ikke finnes |
| 406 | Oppgitt Accept-header inneholder ikke 'application/atom+xml', 'application/xml' eller 'application/json', dersom Content-Type er satt ved bulkoppslag så vil returen være lik Content-Type dersom Accept-headeren er tom. |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. NB! retry-after skal implementeres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |

Hvis statuskode hverken er 200 eller 304, men man får svar fra applikasjonen, så returneres en datastruktur som ser slik ut

```json

{
  "kode": "FREG-001",
  "melding": "Feil i tjenesten. Vennligst prøv igjen seinere."
}
```
