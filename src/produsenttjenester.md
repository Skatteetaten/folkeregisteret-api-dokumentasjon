---
title: Produsenttjenester
---

Innsending av informasjon til Folkeregisteret gjøres gjennom REST-tjenesten [Mottak](../mottak). Hvert dokument som kan sendes inn, er representert som en egen ressurs. For å sende inn et dokument brukes kommandoen POST mot riktig URL med dokumentet som body i innsendingen.

Etter vellykket innsending kan produsent bruke tjenesten [Tilbakemelding](../tilbakemelding) for å følge opp Folkeregisterets behandling av innsendt informasjon.

For å kunne koble seg opp til tjenestene ovenfor, må sikkerhetskrav være ivaretatt i henhold til beskrivelse under [Sikkerhet](../sikkerhet).


 
