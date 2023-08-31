---
title: Innføring av throttling 31082023
date: 2023-08-31T15:32:00+02
---
Som nevnt i tidligere varsling kommer man til å innføre rate-limit/throttling på tjenestene. Det er et tiltak for å unngå spamming av tjenester. Den blir satt til 60.000 kall/minutt fra en internettadresse. Svar på kall vil da være http_status 429. Innføreres fra 04.09.2023 og man skal ikke merke endringen.
