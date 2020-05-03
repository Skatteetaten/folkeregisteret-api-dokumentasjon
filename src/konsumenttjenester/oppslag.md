---
title: Oppslag
---

## Grensesnittbeskrivelse
Oppslagstjenesten gir tilgang til data om en person. Tjenesten tilbyr flere former for oppslag. 
   * Siste versjonen av en person. Dette er til enhver tid oppdaterte data om personen i henhold til Folkeregisteret. 
   * En versjonert utgave av en person som har vært eller er gyldig.
   * Entydig søk 
   * Søk med treffliste 

Endepunkter bygges opp i henhold til beskrivelse [her.](../endepunkter) 

Det er mulig å spesifisere hvilke data en ønsker returnert fra oppslaget, dette er nærmere beskrevet på siden om [dataminimering](../dataminimering)
<br>
<br>

## Entydig søk

Entydig søk tillater konsumenter å søke opp personer med forskjellige opplysninger og motta et mer komplett og oppdatert persondokument. <br>

Det er en forutsetning at opplysningene det søkes etter er entydig identifiserende. Søk med opplysninger som matcher flere enn en person vil resultere i feilmelding. <br> 

Tjenesten støtter fonetiske søk og oppslag på historiske navn og adresser.
  
**Minimumsinformasjon i søket:**
  * Fødselsdato og navn (fornavn og etternavn)
  *	Fødselsdato og navn (fornavn og etternavn) 
  * Navn (fornavn og etternavn) og adresse (adressenavn eller postnummer) 

Rettighetspakkene Offentlig med hjemmel og Finans vil i tillegg kunne benytte utenlandskpersonidentifikasjon, legitimasjonsdokument eller utlendingsmyndighetenesIdentifikasjonsnummer i kombinasjon med fornavn og etternavn. 

Eksempel på entydig søk på gitte kriterier: 
`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/entydigsoek?foedselsdato=19551228&navn=Arne%20gran&postnummer=5089&adressenavn=adolph%20bergs%20vei&husnummer=14&soekFonetisk=true"`
<br>
<br>

## Søk med treffliste

Søk med treffliste lister opp personer som tilfredsstiller de kriteriene konsumenten har oppgitt. Det er ingen minimumskombinasjoner eller obligatoriske felter i tjenesten, men hvis kriteriene treffer mer enn 10 000 personer vil tjenesten returner feilmelding om at søket må konkretiseres. Hvis søket ikke kan konkretiseres må det vurderes om konsumenten kan benytte uttrekk/tilpasset. 

Eksempel på søk med treffliste på gitte kriterie
`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/soek?navn=hansen&kjoenn=kvinne&foedselsaarFraOgMed=1950&adressenavn=Langgata&kommunenummer=0301&inkluderOppholdsadresse=true&inkluderDoede=true"`

<br>
<br>

## Curl eksempler på de øvrige tjenestene:  
Eksempel på curl-kommando som kan benyttes for å teste tjenesten:

`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer"`

Oppslag på xsd:

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/xsd"`

Eksempel på uthenting av folkeregisteridentifikator (fødselsnummer og dnummer) med historikk og gjeldende identitetsgrunnlag for en gitt person identifisert med folkeregisteridentifikatoren som settes i URL: 

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/{folkeregiseridentifikator}?part=historikk&part=identitetsgrunnlag"`

Eksempel på bulkoppslag på gitte folkeregisteridentifikatorer:

`$ curl -k -v -X POST --cert datakonsument.cer --key datakonsument.key -d '{"foedselsEllerDNummer": ["{folkeregiseridentifikator}","{folkeregiseridentifikator}"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/bulkoppslag/"`

Eksempel på bulkoppslag på gitte versjoner av persondokumenter:

`$ curl -k -v -X POST --cert datakonsument.cer --key datakonsument.key -d '{"dokumentidentifikator": ["8446cf3bb867bfdb6de9cc9c17f6adf2","8446cf3bb867bfdb6de9cc9c17f6adf2"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/bulkoppslag/arkiv/"`



### Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml.

**Content-Type**

For bulkoppslag gjøres det POST-requester, disse forventer at headeren Content-Type er satt. Det er støtte for application/json og application/xml (default).

