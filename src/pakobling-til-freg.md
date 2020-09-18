---
title: Påkobling til FREG
---
Alle virksomheter med behov for folkeregisterdata kan koble seg til folkeregisterets konsumenttjenester og oppdatere sine kundedata eller foreta søk og oppslag.

For å dekke ulike behov til tjenester og ulik tilgang til taushetsbelagt informasjon er det satt opp flere rettighetspakker som gir ulik tilgang til data og tjenester. Du kan lese mer om de ulike rettighetspakkene og søke om tilgang til folkeregisteret fra skatteetaten [nettsider](https://www.skatteetaten.no/person/folkeregister/attester-og-opplysninger/folkeregisteropplysninger/). Det er også laget en veileder for valg av rettighetspakke. Veiledern ligger [her.] (https://www.skatteetaten.no/person/folkeregister/om/modernisering/rettighetspakker/)



### Påkobling i utvalgte segmenter
Systemleverandører som leverer tjenester til Helse- og omsorgsektoren, kommuner, eller til Bank- og finanssektoren bes lese informasjon på segmentenes respektive sider før dere starter arbeidet med oppkobling og integrasjon mot modernisert folkeregister(FREG). 

* Norsk Helsenett etablerer ny Persontjeneste for oppslag i folkeregisteret, og alle aktører i helse- og omsorgstjenesten skal benytte denne. https://www.nhn.no/persontjenesten/

* Bits tar segmentansvaret på vegne av finansnæringen for Modernisert Folkeregister, og Finans Norge Forsikringsdrift og Trafikkforsikringsforeningen etablerer, drifter og forvalter den tekniske fellesløsningen for finansbransjen. Les mer her:  https://www.bits.no/project/modernisert-folkeregister/

* KS tar segmentansvaret for kommunal sektor, og etablerer tjenester for kommunene. Les mer her: https://ks-no.github.io/fiks-plattform/modernisert-folkeregister/

Informasjon fra folkeregisteret er tilgjengelig enten via konsumenttjenester eller via en onlineportal. Portalen vil også bli modernisert, men fortsatt kan https://www.infotorg.no/ som kan benyttes.


### Kom igang med maskin-til-maskin-integrasjon 
For Autorisasjon og autentisering av konsumenter benyttes maskinporten. Dere kan lese mer om dette [her:](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/maskinporten/)

De tjenestene som tilbys i de ulike rettighetspakkene er beskrevet på [swaggerhub:](https://app.swaggerhub.com/organizations/Skatteetaten_FREG). Her vil du også finne eksempler på hvordan tjenestene svarer. 

Hvordan endepunkter skal bygges opp er dokumentert [her.](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/endepunkter/)

Det anbefales å begynne å sette opp integrasjon mot de tjenestene med enklest grensesnitt. Gjerne xsd-tjenestene eller tjenesten siste/sekvensnummer. 


### FREG tjenester
[Presentasjon av FREG tjenestene](../dokumenter/Folkeregisterets tjenester.pptx)

### Test og testdata
[Informasjonsvideo om testing og testdata](../dokumenter/04 - Test mot Folkeregisteret.mp4)

[Informasjonsvideo om Tenor](../dokumenter/Informasjonsfilm Tenor.mp4)

### Mer informasjon
For å få informasjon om oppdateringer på våre githubsider følg gjerne denne [RSS-feeden](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/rss.xml) 
