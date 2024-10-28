---
title: Sletting av gamle hendelser og persondokumenter 20241028
date: 2024-10-28T10:50:00+01
---

Folkeregisteret vil begynne å slette gamle hendelser, hendelsesdokumenter og persondokumenter. Årsaken til slettingen er å hindre at ytelsen på tjenestene reduseres og hindre unødvendig datavekst. 

For hendelser vil vi slette hendelser som er eldre enn tre år. Dette betyr at hvis konsumenter av tjenestene forsøker å slå opp hendelser som er eldre enn tre år vil det gis en feilmelding: 
«Det er oppgitt ulovlig sekvensnummer. Sekvensnummer kan ikke være mere enn 36 måneder gammelt». Http status 406.  Denne endringen vil treffe alle rettighetspakker. 

Rettighetspakken «Offentlig og privat med hjemmel» har mulighet til å gjøre oppslag på hendelsesdokumenter og historiske persondokumenter. Hendelsesdokumenter som er eldre enn 3 år vil slettes. Persondokumenter som har vært historiske enn mer en tre år vil også slettes. Forsøk på oppslag på eldre hendelsesdokumenter eller eldre historiske persondokumenter vil medføre feilmelding med httpstatus = 400. 

Persondokumenter som er gjeldende vil selvfølgelig fortsatt inneholde historisk informasjon i henhold til kravene i rettighetspakkene. 

Endringen gjennomføres i to steg. I første steg vil vi implementere feilmeldinger, men ikke foreta sletting. Når vi har erfaring fra perioden med feilmeldinger, vil vi utføre sletting.  
