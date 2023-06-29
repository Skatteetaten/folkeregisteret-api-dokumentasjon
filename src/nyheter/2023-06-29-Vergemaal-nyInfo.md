---
title: Informasjon - Vergemål - BegrensningIRettsligHandleevne
date: 2023-06-29T15:05:00+02
---

### Ny informasjon om vergemål og Begrensning i rettslig handleevne

Vi går i produksjon med endringene nedenfor 1. november 2023.

I samarbeid med Statens sivilrettsforvaltning arbeider vi med å utvide registeret med mer detaljert informasjon om Vergemål, samt  innføre «Begrensning i rettslig handleevne» som en ny entitet.

Vi lanserte endringer allerede tilbake i 2022-06-30. Det er en justering siden dette. Det vi tidligere kalte 'Fratatt rettslig handleevne' er nå døpt om til 'Begrensning i rettslig handleevne'. Fratatt ligger i modellen, men vil aldri inneholde data.

Hendelsesbeskrivelser og informasjonsmodell er [oppdatert](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/informasjonsmodell/)

Swaggerhub for personer og hendelser er oppdatert. Endringene i Swagger er bakoverkompatibel, så den kan taes i bruk allerede nå. Gammel OpenAPISpec vil fungere inntil vi deler data i de nye informasjonselementene.
XSD endepunktene til de forskjellige rettighetspakkene vil fortsatt gi eksisterende modell (v.1.5), den blir oppdatert i løpet av august når sommerfrys er over.

Det vil komme data i de nye feltene 1.november. Hvilke rettighetspakker som får tilgang til hvilken informasjon er beskrevet i Informasjonsmodell dokumentet. 

For vergemål er ny informasjon en detaljering av dagens vergemålsomfang ('vergemålEllerFremtidsfullmakt.verge.omfang'), denne informasjonen vil fra produksjonsdato ligge på entiteten 'vergemålEllerFremtidsfullmakt.verge.tjenesteområde'.
Vi flytter også vergens navn til 'vergemålEllerFremtidsfullmakt.verge.navnFødselsdato', som også har støtte for mer identifiserende informasjon.
'omfang og 'navn' blir altså erstattet fra og med produksjonsdato og vi slutter da å levere data i de feltene. 

Begrensning i rettslig handleevne er et nytt informasjonselement som kun har metadata. Dersom en Begrensning i rettslig handleevne er gjeldende har personen en begrensning.

Testdata blir tilgjenegelig i august.
