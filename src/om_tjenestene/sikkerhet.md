---
title: Sikkerhet
---

**Modernisering av folkeregisteret er i en pilotfase. Kun inviterte produsenter og konsumenter har mulighet til å benytte seg av API-ene frem til pilotperioden er over.**

# Sikkerhet og autentisering
For å benytte Skatteetatens API trenger man et [X.509]( https://en.wikipedia.org/wiki/X.509) virksomhetssertifikat for kryptering/autentisering. Offentlig godkjente utstedere at virksomhetsertifikater er [Buypass](https://www.buypass.no) og [Commfides](https://www.commfides.com/). Man må også ha tilgang til [Private key](https://en.wikipedia.org/wiki/Public-key_cryptography) som hører til sertifikatet.

**VIKTIG: Private key skal aldri deles med noen, heller ikke Skatteetaten.**

Det finnes virksomhetssertifikater for forskjellige formål. Skatteetaten krever et sertifikat utstedt for kryptering/autentisering. Virksomhetsertifikat utstedt for signering vil ikke virke. *Sjekk at 'Key Usage' er 'critical'. Hvis verdien for 'Key Usage' er non-repudiation er det feil type sertifikat*

Et virksomhetssertifikat inneholder virtksomheten sitt organisasjonsnummer. Virksomhetssertifikatet setter Skatteetaten i stand til å autentisere og autorisere organisasjonen som bruker sertifikatet. Det er virksomhetens organisasjonsnummer som er nøkkelen Skatteetaten forholder seg til. Bruk derfor et virksomhetssertifikat for samme organisasjon som den som har det avtalemessige forholdet med Skatteetaten.

Det kreves at man utfører standard klientsertifikat autententisering. De fleste vanlige HTTP verktøy har støtte for dette. Et eksempel på verktøy man kan bruke er [curl](https://ec.haxx.se/usingcurl-tls.html)q