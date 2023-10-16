---
title: Fylkes og kommuneendringer 2024
---
Følgende områder skal splittes opp med gjeldende fra 01.01.2024:
* Viken deles i tre nye fylker: Østfold, Akershus og Buskerud.
* Vestfold og Telemark deles i to nye fylker: Vestfold og Telemark.
* Troms og Finnmark deles i to nye fylker: Troms og Finnmark
* Ålesund kommune deles i to kommuner: Ålesund og Haram

<b>Omfang av endringer i Folkeregisteret:</b>

Det er minimum 2,1 millioner endringer på adresser i Folkeregisteret. Det er primært kommunenummer som endres. Endringene kommer fra Kartverket, matrikkelen.

| Område | Bostedsadresse | Oppholdsadresse | Delt bosted |
| ------------- | ------------- | ------------- | ------------- |
| Troms og Finmark | 243 462 | 6 987 | 183 |
| Vestfold og Telemark | 429 775 | 7 133  | 267  |
| Viken | 1 296 491 | 29 974  | 804  |
| Ålesund | 67 647 | 1 094  | 29  |
| Totalt | 2 037 375 | 45 188  | 1 283  |

Ved endringen kommer man til å oppdatere endringer direkte noe som medfører at registeret er utført i løpet av 10 timer. Det er innkommet ett spesifikt krav fra NAV. Det medfører at de er ferdig med innlesing av endringen innen 2.januar 24 kl 08.00. Ved endringen kommer man til å etterstrebe innmeldte krav til at informasjon er lest inn. Det håndteres ved at de ulike rettighetspakke får oppdatert informasjon i rekkefølge der de prioriterte får informasjon først. 

Kritiske produsent-tjenester skal stort sett være kjørende. Det kan blant annet gjelde tildeling av fødselsnr, dnr-rekvisisjon, annullere dødsfall, adressegradering. Andre produsent-tjenester kan være utilgjengelig inntil registeret er oppdatert.

<b>Konsumenter av Folkeregisteret:</b>
Endringen kan medfører ekstraordinær trafikk mot delingstjenestene gitt at man gjør oppslag basert på hendelser. I tillegg er det viktig at normale oppslag fungerer som normalt, dvs som ikke gjøres basert på endringen. Derfor er det viktig at hver konsument vurderer følgende:
* Periodisk vask og store uttrekk bør vente hvis de ikke er kritiske
* Konsument må kunne håndtere feilsituasjoner og prøve på nytt, det innebære aktiv backoff-strategi der man ikke spamer tjenestene automatisk
* Spre lasten, ikke gjør mange parallelle kall. Å spre lasten og antall kall vil bidra til en vellykket gjennomføring

Folkeregisteret vil gjøre tilpasninger for å håndtere økende trafikk, men oppfordrer til å gjennomføre tiltak som beskrevet over. Man kommer til å utføre aktiv trafikkstyring for å sikre at tjenestene er tilgjengelig.

<b>Testing:</b>

Ekstern test for konsumeter er tilgjengelig fra midten av oktober 2023
* Eget miljø, dvs konsument playground, se [her](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/endepunkter/)
* Testbestand på ca 1 million berørte persober
* Autentisering skjer som normalt vha maskinporten
* Sekvensnummer for endringen blir publisert på [nyheter](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/nyheter/)

[Lenke til mer informasjon fra regjeringen](https://www.regjeringen.no/no/tema/kommuner-og-regioner/kommunestruktur/nye-kommune-og-fylkesnummer-fra-1.-januar-2024/id2924701)

<b>Spørsmål og svar:</b>

| Nummer | Spørsmål | Svar |
| ------------- | ------------- | ------------- |
| 1 | Vi mottar oppdateringer ved hjelp av hendelseslisten. Hvordan vil dette løses? | Det sendes fortløpende hendelser om dette fra kl 00.05 den 1. januer 24 og utover til det er ferdig, antar ca 32 timer |
| 2 | Når vil Folkeregisteret være oppdatert med nye kommunenummer for adressene som endres? | Rettighetspakkene oppdateres i rekkefølge innenfor innmeldte krav og behov  |
| 3 | Vi bruker ikke hendelseslisten, blir vi påvirket da? | Oppslagstjenestene vil være tilgjengelige både via nettleser og maskin-til-maskin. Man anbefaler å utsette periodisk vask til noen dager etter endringen  |
