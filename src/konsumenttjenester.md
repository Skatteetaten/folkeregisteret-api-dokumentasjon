---
title: Konsumenttjenester
---

## Standardtjenester
Denne siden beskriver tjenestene i det nye Folkeregisteret. 
Rettighetspakker og teknisk beskrivelse av tjenestene finnes på siden for hver enkelt tjeneste. Folkeregisterets tjenester er dokumentert på [swaggerhub.](https://app.swaggerhub.com/organizations/Skatteetaten) 

* [Hendelsesliste](../hendelsesliste) er løpende varsling om endringer i Folkeregisteret. Hendelsesliste gir konsumenter mulighet til å oppdatere opplysninger om personer i sitt kunderegister eller sin sakspopulasjon fortløpende. Det vil også være mulig for konsumentene å lage automatisert saksbehandling som initieres av hendelser fra Folkeregisteret, for eksempel avslutning av kundeforhold eller tjeneste ved hendelsen "melding om dødsfall". 
Med tjenesten hendelsesliste får konsumenter varsel hver gang noe endres i Folkeregisteret, hvem det gjelder og hva endringen består i.  Konsumenten får tilgang til informasjon de har hjemmel til, må selv avgjøre om hendelsen er relevant for dem, og gjøre oppslag for å hente mer informasjon om endringen. Tjenesten leveres ved maskin-til-maskin tilkobling. 

* [Oppslag](../oppslag) er søk på en enkeltperson for å se personens folkeregisteropplysninger. Oppslag gir konsumenter muligheten til å hente ut personopplysninger som for eksempel navn, adresse, relasjoner og historikk. Hvilke opplysninger man har tilgang til er avhengig av hvilke rettigheter konsumenten har. Tjenesten kan brukes til å hente oppdaterte opplysninger om en person, eller til å starte en forretningsprosess, som å opprette en ny kunde, fakturere eller starte annen saksbehandling. 
	Oppslag i Folkeregisteret kan gjøres fra et fagsystem, ved maskin-til-maskin tilkobling, eller ved å benytte [Folkeregisterets hjemmeside/portal](https://www.skatteetaten.no/deling/opplysninger/folkeregisteropplysninger/oppslag-i-folkeregisteret/) (menneske-til-maskin). 

* [Uttrekk](../uttrekk) gir konsumenter muligheten til å hente ut opplysninger om et utvalg personer basert på én eller flere kriterier, som for eksempel fødselsår, gatenavn, og kommune, uten å identifisere personene først. Uttrekk er basert på selvbetjening, der konsumenten selv setter opp kriteriene den ønsker for sitt uttrekk på Folkeregisterets portal, og får uttrekk  med de opplysningene som passer disse kriteriene tilbake.
Uttrekk kan brukes til å opprette eller supplere et kunderegister eller en sakspopulasjon, for eksempel alle 6-åringer i en kommune, eller alle beboere i en gate. Tjenesten kan kun benyttes av konsumenter som ikke har krav om entydig identifisering.

Tjenestene er tilgjengelig for maskin-maskin-integrasjon for [virksomheter](https://www.skatteetaten.no/deling/opplysninger/folkeregisteropplysninger/). For å kunne koble seg opp til tjenestene ovenfor, må integrasjon gjøres i henhold til [beskrivelsen under Sikkerhet](../sikkerhet).

### Logging
Den enkelte person i Folkeregisteret har rett til opplysninger om søk foretatt på seg selv. Dette innebærer at alle søk foretatt av konsumenter blir logget, med informasjon om konsumentens navn, organisasjonsnummer, adresse, postnummer, eventuelt land på den virksomheten som har søkt og tidspunkt for søket. 



## Tilgjengelige tjenester
| Tjeneste | Beskrivelse | Tilgjengelig i rettighetspakker | 
|------------|-------------------------------------|----------------|
| personer/{personidentifikator} <br> personer/bulkoppslag |Hensikten med tjenesten er å tillate at konsumenter kan ajourholde sitt kunderegister eller hente ut en gitt mengde med personer. Ved å oppgi opp mot 1 000 fødsels- eller D-nummer. Tjenesten returnerer siste persondokument for individene som er forespurt. | Offentlig og privat med hjemmel, <br> Offentlig uten hjemmel, <br> Finans, <br> Privat uten hjemmel  |
|personer/soek | Hensikten med tjenesten er å tillate konsumentene å søke opp grupper av personer som tilfredsstiller gitte kriterier. Kriteriene er for eksempel kjønn, fødselsår, navn, adresse. I tillegg kan det filtreres på om man skal inkludere døde, gjeldende eller historiske opplysninger, fylkesnummer eller kommunenummer. Tjenesten returnerer max 10 000 treff. Tjenesten returnerer fødsels- eller D-nummer |Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel |
|personer/entydigsoek|Hensikten med tjenesten er å tillate søk på personer ved hjelp av entydige opplysninger. Tjenesten returnerer siste persondokument for en gitt person. |Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator |
|online/oppslag|online webtjeneste som erstattet gammel tjeneste for søk på personer via infotorg.| Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br>Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator  |
|personer/xsd | Beskrivelse av persondokumentet  | Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator  |
|uttrekk/komplett  <br> uttrekk/{jobbid}/batch/{batchnr} |Input til tjenesten er et sekvensnummer. Tjenesten returnerer persondokumenter. Ved å hente opp disse dokumentene gjennom bulkoppslag arkiv kan konsumentene hente ut hele eller deler av bestanden i folkeregisteret. Hvis input er siste sekvensnummer vil konsumentene hente de persondokumentene som pt er gjeldene.  Tjenesten er asynkron og benyttes sammen med bulkoppslag og uttrekk uttrekk/{jobbid}/batch/{batchnr}| Offentlig og privat med hjemmel |
|uttrekk/tilpasset <br> uttrekk/{jobbid}/batch/{batchnr} |Hensikten med tjenesten er å tillate søk på grupper av personer. Personstaustyper er eneste obligatoriske felt. Det kan også søke på kommunenummer fødselsår, dødsår, kjønn, statsborgerskap og sivilstandstype. Tjenesten er asynkron og benyttes sammen med bulkoppslag og uttrekk/{jobbid}/batch/{batchnr}| Offentlig og privat med hjemmel, <br> Offentlig uten hjemmel, <br> Privat uten hjemmel, <br> Finans |
|hendelser/feed|Hensikten med feed er å varsle om de hendelsene som skjer på de forskjellige personene i registeret . Konsumentene sender inn et sekvensnummer og får returnert alle hendelsene som har skjedd i registeret fra og med innsendte sekvensnummer.| Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator  |
|hendelser/siste/sekvensnummer|Hensikten med tjenesten er å gjøre det mulig for konsumentene å finne hvor langt sekvensnummeret er kommet slik at de kan lytte fra feeden til et ønsket tidspunkt. Tjenesten benyttes for ajourhold.| Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator  |
|hendelser/xsd|Beskrivelse av Hendelsesdokument|Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator |
|hendelser/feedxsd|Beskrivelse av hendelsesfeed|Offentlig og privat med hjemmel, <br>Offentlig uten hjemmel, <br>Finans, <br> Privat uten hjemmel, <br>Presse, <br>Privat, <br> Privat uten folkeregisteridentifikator, <br> Presse uten folkeregisteridentifikator |
|personer/bulkoppslag/arkiv <br> personer/arkiv/{dokumentidentifikator} |Hensikten med tjenesten er å tillate konsumentene med tilgang til tjenesten søke på en tidligere eller nåværende tilstand for en gitt person. Persondokumentet inneholder komplette opplysninger på personer på et tidspunkt, men dette trenger ikke være det siste persondokumentet vedkommende har. Fra hendelsesfeed returneres persondokumentet og tjenesten gjør det mulig å søke opp persondokumentet som medførte hendelsen.|Offentlig og privat med hjemmel|
|hendelser/{hendelsesidentifikator} <br> hendelser/bulkoppslag|Mens hendelsesfeeden returnerer en tynn beskrivelse av en hendelse returnerer oppslag på den, eller de, spesifikke hendelsen en mer innholdsrik beskrivelse av hendelsen. Tillater søk på en eller flere hendelsesdokument.|Offentlig og privat med hjemmel|






