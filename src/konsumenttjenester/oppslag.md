---
title: Oppslag
---

# Grensesnittbeskrivelse
Oppslagstjenesten gir tilgang til data om en person. Tjenesten tilbyr to former for oppslag. 
   * Siste versjonen av en person. Dette er til enhver tid oppdaterte data om personen i henhold til Folkeregisteret. 
   * En versjonert utgave av en person som har vært eller er gyldig. 

For å nå tjenestene bygges URL opp slik:
{miljø}/folkeregisteret/{rettighetspakke}/{versjon}/{ressurs}(? part = {entitet} & part = {entitet} ...)

## Dataminimering
Ved oppslag mot Folkeregisteret skal konsumentene kunne begrense oppslaget til de personopplysninger som er nødvendige (minimeringsprinsippet) i ulike brukstilfeller. Vi ønsker at konsumentene tar bevisste valg i forhold til databehov og vil derfor begrense opplysningene som utleveres dersom ønskede personopplysninger ikke er oppgitt.

Parameteret *part* benyttes til å spesifisere hvilken informasjon, om en person, man ønsker å ha med i oppslaget. Som entitet kan man peke på hvilken som helst entitet (egenskapsnavn) på toppnivå i modellen for persondokument. I tillegg til å kunne be om eksplisitte entiteter er det lagt opp til samlende resultatsett i henhold til tabellen under:

| \<part\> | Beskrivelse | RP Offentlig med hjemmel | RP Finans og begrenset | Offentlig uten hjemmel / Presse / Privat |
|---------|------------|--------------------------|------------------------|------------------------------------------|
| person-basis | Standardsett av gjeldende og ikke-taushetsbelagte opplysninger: <ul><li>identifikasjonsnummer</li><li><identitetsgrunnlag</li><li>status</li><li>dødsfall</li><li>sivilstand</li><li>fødsel</li><li>statsborgerskap</li><li>kjønn</li><li>navn</li><li>preferertKontaktadresse</li><li>bostedsadresse</li><li>oppholdsadresse</li><li>deltBosted</li><li>postadresse</li><li>postadresseIUtlandet</li><li>adressebeskyttelse</li><li>kontaktinformasjonForDødsbo</li></ul> | Ja | Ja, men uten opplysninger om kontaktopplysninger før dødsbo. | Ja, men uten opplysninger om kontaktopplysninger før dødsbo |
| historikk | Gir gjeldende og historiske verdier for alle personopplysningene som returneres. | Ja | Ja, for navn og adresser | Ja, for navn og adresser |
| identifikasjonsngrunnlag-utvidet | Gir: <ul><li>falskIdentitet</li><li>legitimasjonsdokument</li><li>utenlandskPersonidentifikasjon</ul></li> | Ja | Nei | Nei |
| relasjon-utvidet | Gir: <ul><li>familierelasjon</li><li>foreldreansvar</li><li>vergemålEllerFremtidsfullmakt</ul></li> | Ja | Ja | Nei |
| \<egenskapsnavn\> | I tillegg er det mulig å spesifisere hvert enkelt egenskapsnavn: <ul><li>utlendingsmundighetenesIdentifikasjonsnummer</li><li>innflytting</li><li>utflytting</li><li>fødselINorge</li><li>opphold</li><li>forholdTilSametingetsValgmanntall</li><li>samiskSpråk</ul></li> Det er også mulig å spesifisere enkeltopplysningene fra "person-basis", "identifikasjonsngrunnlag-utvidet" og "relasjon-utvidet" hvis det er behov for å redusere resultatet nærmere. | Ja | Ja, men avhengig av at opplysningen er tilgjengelig i rettighetspakken. | Ja, men avhengig av at opplysningen er tilgjengelig i rettighetspakken. |

Merk at identifikasjonsnummer alltid vil inngå i resultatsettet, uavhengig av hva som spesifiseres (gjelder offentlig med hjemmel, finans og offentlig uten hjemmel).

Dersom part ikke oppgis vil retur innholde samme informasjon som finnes i "person-basis".

## Ressurser
| Ressurs | Beskrivelse | 
|---------|-------------|
|personer/{folkeregisteridentifikator}| Siste versjon av en person | 
|personer/arkiv/{persondokumentidentifikator} | Versjonert utgave av en person |
|personer/bulkoppslag/| Siste versjon av et sett med personer (gjelder kun rettighetspakke offentlig-med-hjemmel)|
|personer/bulkoppslag/arkiv/| Et sett med versjonerte utgaver av en person (gjelder kun rettighetspakke offentlig-med-hjemmel)|
|personer/xsd| Xsd (kontrakt) for person |

## Rettighetspakker

| Rettighetspakke|Beskrivelse|
|----------------|-----------|
|offentlig-med-hjemmel/api/| Rettighetspakke for offentlige aktører med hjemmel i egen lov som gir rett til folkeregisterdata. |
|offentlig-uten-hjemmel/api/| Rettighetspakke for offentlige aktører uten hjemmel i egen lov.|
|finans-og-begrenset/api/| Rettighetspakke for virksomheter i finansbransjen samt virksomheter med tilgang til enkelte taushetsbelagte opplysninger.|

## Miljøer

| Miljø | URL | 
|-------|-----|
| Produsenttest| https://folkeregisteret-api-ekstern.sits.no/ |
| Konsumenttest | https://folkeregisteret-api-konsument.sits.no/ |
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ |
| Playground | https://folkeregisteret-api-konsument-playground.sits.no/  | 


Eksempel på curl-kommando som kan benyttes for å teste tjenesten:

`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer"`

Oppslag på xsd:

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/xsd"`

Eksempel på uthenting av folkeregisteridentifikator (fødselsnummer og dnummer) med historikk og gjeldende identitetsgrunnlag for en gitt person identifisert med folkeregisteridentifikatoren som settes i URL: 

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/{folkeregiseridentifikator}?part=Folkeregisteridentifikator-historikk&part=Identitetsgrunnlag"`

Eksempel på bulkoppslag på gitte folkeregisteridentifikatorer:

`$ curl -k -v -X POST --cert datakonsument.cer --key datakonsument.key -d '{"foedselsEllerDNummer": ["{folkeregiseridentifikator}","{folkeregiseridentifikator}"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/bulkoppslag/"`

Eksempel på bulkoppslag på gitte versjoner av persondokumenter:

`$ curl -k -v -X POST --cert datakonsument.cer --key datakonsument.key -d '{"dokumentidentifikator": ["8446cf3bb867bfdb6de9cc9c17f6adf2","8446cf3bb867bfdb6de9cc9c17f6adf2"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/bulkoppslag/arkiv/"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml.

**Content-Type

For bulkoppslag gjøres det POST-requester, disse forventer at headeren Content-Type er satt. Det er støtte for application/json og application/xml (default).

## Eksempler på respons fra tjenesten

### Statuskode 200
Eksempel på svar ved oppslag på en arkivert eller oppdatert versjon av en person:
```json

{
  "identifikasjonsnummer": [
    {
      "ajourholdstidspunkt": "2017-09-26T11:08:20.744+02:00",
      "erGjeldende": true,
      "kilde": "SKATTEETATEN",
      "gyldighetstidspunkt": "2017-09-26T11:08:20.744+02:00",
      "status": "iBruk",
      "foedselsEllerDNummer": "69080275560",
      "identifikatortype": "dNummer"
    }
  ],
  "annenIdentifikasjon": [],
  "identitetsgrunnlag": [
    {
      "ajourholdstidspunkt": "2017-09-26T11:08:24.528+02:00",
      "erGjeldende": true,
      "kilde": "skatteetaten",
      "aarsak": "besluttetTildelingAvDNummer",
      "gyldighetstidspunkt": "2017-09-26T11:08:22.918+02:00",
      "identitetsgrunnlagstatus": "ikkeKontrollert",
      "dokumentgrunnlag": []
    }
  ]
}
```

### Feilkoder
Hvis statuskode hverken er 200 eller 304, men man får svar fra applikasjonen, så returneres en datastruktur som ser slik ut

```json

{
  "kode": "FREG-001",
  "melding": "Feil i tjenesten. Vennligst prøv igjen seinere."
}
```

| HTTP Statuskode |  Forklaring |
|----------|-------|
| 401 | Autentiseringsinformasjon mangler |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten |
| 404 | Feil uri brukt. |
| 406 | Oppgitt Accept-header inneholder ikke 'application/xml' eller 'application/json' |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |
