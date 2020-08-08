---
title: Håndtering av xml i content-type
date: 2020-08-08
---

Trisdag 11. august prodsetter vi noen endringer på konsumenttjenestene våre. Håndteringen av content-type har vært noe mangelfull i alle rettighetspakkene bortsett fra offentlig med hjemmel. Dette er nå utbedret slik at hvis konsumenten oppgir at de ønsker å motta responsen i  xml-format så vil de få det også. 
I tillegg er det rettet en feil der vi oppga responsen til å være i Json, mens svaret var i xml-format. Feilen inntraff kun når requesten ble sendt inn uten accept-header. Til slutt er det også lagt til rette for at tjenesten /v1/personer/soek nå også kan levere svar i xlm-format.  

For konsumenter som har spesifisert ønsket format i accept-header og mottatt svar på samme format er oppførselen uendret. 
