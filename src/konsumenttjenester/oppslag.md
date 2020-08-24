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

Tjenesten støtter fonetisk søk og oppslag på historiske navn og adresser.
  
**Definisjoner**
Rett til treff: betyr at dersom denne kombinasjonen av søkekriterier er angitt så har du retten til å få utlevert et treff tilbake
Entydig: betyr at søkekriteriene kun skal matche én person i hele registeret
Treff: betyr at dersom søkekriteriene som er angitt finner kun én person (entydig) og kombinasjonen av kriterier gir rett til treff, så får du utlevert resultatet. Det er fullt mulig å angi flere søkekriterier enn de kriteriene som gir rett til treff for å snevre inn søket. 

**Minimumsinformasjon i søket:**
  * Fødselsnummer og navn (fornavn og etternavn)
  *	Fødselsdato og navn (fornavn og etternavn) 
  * Navn (fornavn og etternavn) og adresse (Gatenavnet, eller minst 3 tegn fra begynnelsen av det. Kombineres med husnummer dersom adressen har husnummer og/eller bokstav, og teller som én uavhengig opplysning til sammen.
  * Navn (fornavn og etternavn) og postnummer

Rettighetspakkene Offentlig med hjemmel og Finans vil i tillegg kunne benytte utenlandskpersonidentifikasjon eller legitimasjonsdokument i kombinasjon med fornavn og etternavn. Offentlig med hjemmel kan også benytte  utlendingsmyndighetenesIdentifikasjonsnummer  i kombinasjon med fornavn og etternavn som et entydig søk.

Eksempel på entydig søk på gitte kriterier: 
`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/entydigsoek?foedselsdato=19551228&navn=Arne%20gran&postnummer=5089&adressenavn=adolph%20bergs%20vei&husnummer=14&soekFonetisk=true"`
<br>
**Eksempler på kombinasjoner som gir rett til treff:**

| Opplysning	| Beskrivelse	| Eksempel |
|-------------|--------------------------------------|--------------------------------------|
|Navn og identifikasjonsnummer	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt	| ?navn=Arne%20Hansen&identifikasjonsnummer=13108138812 |
|Navn og fødselsdato	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt |	?navn=Arne%20Hansen&foedselsdato=19811013
|Navn og gateadresse	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt. Gatenavnet, eller minst 3 tegn fra begynnelsen av det. Kombineres med husnummer og teller som én uavhengig opplysning til sammen. Parameteren husnummer kan utelates dersom adressen ikke har noe husnummer. Ellers påkrevd for rett til treff	| ?navn=Arne%20Hansen&adressenavn=Økernveien&husnummer=10B
|Navn og postnummer	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt | ?navn=Arne%20Hansen&postnummer=1251 |
| *Følgende gjelder kun for rettighetspakkene Offentlig med hjemmel og Finans*		|
|Navn og utenlandskpersonidentifikasjon	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt. Inkludert landkode i utenlandskpersonidentifikasjon slik: <landkode>- <personnummer>	| ?navn=Arne%20Hansen&utenlandskpersonidentifikasjon=ARG-8766523769 |
|Navn og legitimasjonsdokument	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt. Inkludert landkode i legitimasjonsdokument slik: <landkode>-<dokumentnummer> |  ?navn=Arne%20Hansen&legitimasjonsdokument=DNK-7545367 |
|Navn og utlendingsmyndighetenesIdentifikasjonsnummer	| Må være minst ett fornavn og ett etternavn. Fonetisk eller eksakt. | ?navn=Arne%20Hansen&utlendingsmyndighetenesIdentifikasjonsnummer=87676437682 |


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

