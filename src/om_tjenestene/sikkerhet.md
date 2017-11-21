---
title: Sikkerhet
---

**Modernisering av folkeregisteret er i en pilotfase. Kun inviterte produsenter og konsumenter har mulighet til å benytte seg av API-ene frem til pilotperioden er over.**

# Sikkerhet og autentisering
For å benytte Skatteetatens API trenger man et kvalifisert [X.509]( https://en.wikipedia.org/wiki/X.509) virksomhetssertifikat for kryptering/autentisering. Nasjonal kommunikasjonsmyndighet har [oversikt over godkjente tilbydere av kvalifiserte sertifikater](https://www.nkom.no/teknisk/elektronisk-signatur/kvalifisert-sertifikat/registrerte-tilbydere-av-kvalifiserte-sertifikater). I dag er det kun kvalifiserte sertifikater fra Buypass og Commfides som kan benyttes. 

Skatteetaten autoriserer og autentiserer organisasjonen basert på det kvalifiserte virksomhetssertifikatet. Det er virksomhetens organisasjonsnummer som er nøkkelen Skatteetaten forholder seg til. Virksomhetssertifikatet inneholder virtksomhetens *organisasjonsnummer*. Bruk derfor et virksomhetssertifikat som tilhører samme organisasjon som den som har det avtalemessige forholdet med Skatteetaten.

Det finnes virksomhetssertifikater for forskjellige formål. Skatteetaten krever et sertifikat utstedt for kryptering/autentisering. Virksomhetsertifikat utstedt for signering vil ikke virke. *Sjekk at 'Key Usage' er 'critical'. Hvis verdien for 'Key Usage' er non-repudiation er det feil type sertifikat*

Du trenger tilgang til [Private key](https://en.wikipedia.org/wiki/Public-key_cryptography) som hører til sertifikatet. <br>
**VIKTIG: Private key skal aldri deles med noen, heller ikke Skatteetaten.**


Det kreves at man utfører standard klientsertifikat autententisering. De fleste vanlige HTTP verktøy har støtte for dette. Et eksempel på verktøy man kan bruke er [curl](https://ec.haxx.se/usingcurl-tls.html).