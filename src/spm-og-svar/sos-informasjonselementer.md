---
title: Informasjonselementer
---

**Når er personinformasjon klart i de nye tjenestene?**

Allerede i dag kan man hente ut alle personer og alle endringer i person, samt informasjon om hvorvidt personen er
"Kontrollert" eller "Ikke kontrollert". I tillegg er informasjon om falsk identitet, utenlandske identifikatorer og
utenlandske legitimasjonsdokumenter tilgjengelige. Prosjektet ønsker fortløpende å berike tilbudet med flere personopplysninger.
Migreringen fra DSF er i gang, men det er usikkert hvor raskt vi vil tilgjengeliggjøre informasjonen etter at den er migrert.

**Hva blir nytt eller endret i det nye Folkeregisteret?**

Vi har publisert en oversikt over endringene fra eksisterende til nytt folkeregister på prosjektets sider på github.
Du finner den her: https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/informasjonsfelter-og-statuskoder/

**Finnes en alternativ identifikator eller har alle personer i Folkeregisteret enten et fødselsnummer eller et d-nummer?**

Alle personer som er fullt ut registrert i Folkeregisteret har enten fødselsnummer eller d-nummer. Vi har bestemt at det
ikke vil finnes en egen stabil identifikator for en person uavhengig av Folkeregisteridentifikatoren. Vi registrerer kun
identifiserende informasjon om personer, som ikke har en Folkeregisteridentifikator, men som har en personrelasjon til
registrerte personer. Vi registrerer i tillegg utenlandske identifikasjonsnumre og utlendingsmyndighetenes
identifikasjonsnummer (DUF-nummer) på registrerte personer.

**Hvordan ser informasjonen ut hos FREG når det er kobling mellom folkeregisteridentifikatorer (dublett)?**

Personen som er videreført vil inneholde lenkede koblinger som historiske identfikasjonsnummere. Alle søk på gjeldende,
eller historisk fødsels-/d-nummer vil treffe denne personen.

**Hvem "eier" informasjonen i Folkeregisteret, med ansvar for å oppdatere hva?**

Generelt er det slik at meldinger fra ansvarlig myndighet registreres etter en formell kontroll. For eksempel godtar vi
melding om statsborgerskap når det sendes inn av Utlendingsmyndigheten.  Meldinger fra tredjepart om adresseendring må
saksbehandles av Folkeregisteret, fordi det er Folkeregisteret som er vedtaksmyndighet for bostedssaker. Så dersom noen
sender inn et tips om at en person har flyttet, så vil vi undersøke det.

**Vil man i det moderniserte Folkeregisteret ha  maksimale lengder for navnefelt utover 50 tegn?**

I det moderniserte Folkeregisteret blir navnelengden maks 200 tegn. Delnavn med flere tegn enn 200 vil bli avvist.

**Har dere regler for at hvis si et navn flyter over grensen så benyttes andre felt?**

Ingen navn vil «flyte» over i et annet felt.
