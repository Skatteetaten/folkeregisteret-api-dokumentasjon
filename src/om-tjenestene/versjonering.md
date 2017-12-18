---
title: Versjonering
---
Folkeregisteret har som mål at API'er skal være stabile, dvs at oppførsel/data ikke skal endre seg så lenge man spør med samme parametre og mot en bestemt versjon av API’et. Skatteetatens datatjenester er designet for å kunne støtte flere versjoner samtidig. Tjenestene er versjonert gjennom angitt versjon i URL.

# Bakoverkompatible endringer
Nye feltverdier, nye felt i svar og nye valgfrie felt i input vil normalt ikke føre til at det etableres en ny versjon. Det er opp til hver datakonsument å sikre at integrasjonene håndterer slike endringer.

Vi oppfordrer derfor datakonsumenter til å bygge tolerant kode som tåler slike endringer.