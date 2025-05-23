---
title: Hendelsesliste
---

# Grensesnittbeskrivelse
Hensikten med hendelseslisten er å tillate konsumenter med å holde sitt kunderegister ajour med folkeregisteret og reagere raskt på endringer i registeret. Annullering av dødsfall, registrering av falsk identitet eller tildeling av adressebeskyttelse kan være tidskritisk. 

Tjenesten tilgjengeliggjør endringer i registeretog tilbyr en feed med hendelser. Det er konsumentene som selv styrer sekvens på lesing og hvor mange hendelser man skal lese. Samme hendelser kan leses av flere systemer hos konsumentene og man kan lese hendelser så mange ganger man ønsker. Hendelseslista tilbyr en løs kobling mellom produsent og konsument. Målet er å ha et fleksibelt API for brukerne av Folkeregisterets opplysninger. Konsumentene selv MÅ holde orden på en intern feed-peker som viser hvor langt man har lest i feeden. Hvis konsument har kopier av folkeregisteret er det anbefalt å lese hendelseslisten hyppig med påfølgende oppslag. Dette hindrer opplevde avvik mellom folkeregisteret og eventuelle kunderegister. 

I rettighetspakken "offentlig med hjemmel" kan man i tillegg til å lese feeden, også lese innhold i en enkelt hendelse.

Hendelseslisten kan navigeres gjennom sekvensnummer. Sidestørrelsen som returneres er fast satt til 1000.

Tjenesten er naturlig å se i sammenheng med tjenesten [oppslag](../oppslag). I feeden gis en peker til et persondokument. Dette er en nøkkel man kan bruke til å slå opp personen slik han så ut etter at hendelsen inntraff. Man kan også slå opp personen basert på fødsels- eller d-nummer. I enkelte rettighetspakker vil hendelsen kun inneholde en folkeregisteridentifikator. 

De ulike tjenestene er dokumentert på [swaggerhub.](https://app.swaggerhub.com/organizations/skatteetaten)

Feed er i henhold til [Atom spesifikasjonen](http://www.ietf.org/rfc/rfc4287.txt). 


## Endepunkter
For oppbygging av endepunkter se [her.](../endepunkter)



## Eksempler 
Oppslag i hendelsesliste: <br>
`https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/feed/?seq=1`

Oppslag på en hendelse: <br>
`https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/7d9c19b1-4125-4968-b4dc-09cbaf3ac11f`

Oppslag på xsd: <br>
`https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/xsd`

Eksempel på curl-kommando som kan benyttes for å teste tjenesten: <br>
`curl -v -k -X HEAD 'https://folkeregisteret-api-konsument.sits.no/folkeregisteret/api/privat/v1/hendelser/feed' -H 'accept: application/json' -H 'Content-Type: application/json' -H "Authorization: Bearer $(ditt_token)"`

Eksempel på bulkoppslag på hendelsesdokumenter:
`$ curl -k -v -X POST -d '{"dokumentidentifikator": ["f5446d4445738d5a3dad02276daf8a1f","f5446d4445738d5a3dad02276daf8a1f"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/bulkoppslag/" -H "Authorization: Bearer $(ditt_token)"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml

**Content-Type**

For bulkoppslag gjøres det POST-requester, disse forventer at headeren Content-Type er satt. Det er støtte for application/json og application/xml (default).

**If-None-Match**

Denne verdien skal settes lik **ETag**-header fra siste respons fra tjenesten. Se [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) for mer informasjon om bruk av ETag.

## Eksempler på respons fra tjenesten

### Hendelsesliste - format JSON

```json

[
  {
    "sekvensnummer": 1,
    "hendelse": {
      "folkeregisteridentifikator": "69028400470",
      "hendelsetype": "endringIIdentitetsgrunnlag",
      "hendelsesdokument": "55591b51b20518f4f22bf1edd6aa9f25",
      "persondokument": "8f475708c3d855defca884f4af6e49ae",
      "ajourholdstidspunkt": "2017-06-20T09:26:03.689+02:00"
    }
  },
  {
    "sekvensnummer": 2,
    "hendelse": {
      "folkeregisteridentifikator": "69028400470",
      "hendelsetype": "endringIAnnenIdentifikasjon",
      "hendelsesdokument": "1120bea688fb14a292c244592a1aed76",
      "persondokument": "5c3afb4f5afd2fcfbe2f90a6560903a0",
      "ajourholdstidspunkt": "2017-06-20T09:26:03.689+02:00"
    }
  }
]

```
### Hendelsesliste - format ATOM/XML
```xml

<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>http://folkeregisteret.api.skatteetaten.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/feed</id>
  <title>Offentlig hendelsesliste</title>
  <author>
    <name>Skatteetaten</name>
  </author>
  <link rel='self' type='application/atom+xml' 
     href='http://folkeregisteret.api.skatteetaten.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/feed?seq=1'/>
  <link rel='first' type='application/atom+xml' 
     href='http://folkeregisteret.api.skatteetaten.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/feed?seq=0'/>
  <link rel='next' type='application/atom+xml' 
     href='http://folkeregisteret.api.skatteetaten.no/folkeregisteret/offentlig-med-hjemmel/api/v1/hendelser/feed?seq=1001'/>
  <updated>2017-11-13T13:40:08.485Z</updated>
  <entry xmlns:ns2="folkeregisteret:tilgjengeliggjoering:hendelse:v1">
        <title>Hendelse</title>
        <id>tag:skatteetaten.no,2017-10-10:folkeregisteret:tilgjengeliggjoering:hendelse:v1:1</id>
        <updated>2017-10-10T14:06:57.59Z</updated>
        <content>
              <ns2:lagretHendelse>
                    <ns2:sekvensnummer>1</ns2:sekvensnummer>
                    <ns2:hendelse>
                          <ns2:folkeregisteridentifikator>69028400470</ns2:folkeregisteridentifikator>
                          <ns2:hendelsetype>endringIIdentitetsgrunnlag</ns2:hendelsetype>
                          <ns2:hendelsesdokument>55591b51b20518f4f22bf1edd6aa9f25</ns2:hendelsesdokument>
                          <ns2:persondokument>8f475708c3d855defca884f4af6e49ae</ns2:persondokument>
                          <ns2:ajourholdstidspunkt>2017-06-20T09:26:03.689+02:00</ns2:ajourholdstidspunkt>
                    </ns2:hendelse>
              </ns2:lagretHendelse>
        </content>
  </entry>
  
  <entry xmlns:ns2="folkeregisteret:tilgjengeliggjoering:hendelse:v1">
        <title>Hendelse</title>
        <id>tag:skatteetaten.no,2017-10-10:folkeregisteret:tilgjengeliggjoering:hendelse:v1:2</id>
        <updated>2017-10-10T14:06:57.612Z</updated>
        <content>
              <ns2:lagretHendelse>
                    <ns2:sekvensnummer>2</ns2:sekvensnummer>
                    <ns2:hendelse>
                          <ns2:folkeregisteridentifikator>69028400470</ns2:folkeregisteridentifikator>
                          <ns2:hendelsetype>endringIAnnenIdentifikasjon</ns2:hendelsetype>
                          <ns2:hendelsesdokument>1120bea688fb14a292c244592a1aed76</ns2:hendelsesdokument>
                          <ns2:persondokument>5c3afb4f5afd2fcfbe2f90a6560903a0</ns2:persondokument>
                          <ns2:ajourholdstidspunkt>2017-06-20T09:26:03.689+02:00</ns2:ajourholdstidspunkt>
                    </ns2:hendelse>
              </ns2:lagretHendelse>
        </content>
  </entry>
</feed>

```

### Hendelsesdokument for en endring - format JSON
```json

{
  "dokumentidentifikator": "1120bea688fb14a292c244592a1aed76",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIAnnenIdentifikasjon",
    "ajourholdstidspunkt": "2014-01-02T00:00:00Z",
    "egenskapshendelse": [
      {
        "annenIdentifikasjon": {
          "gyldighetstidspunkt": "2017-04-18T10:32:18.312+02:00",
          "kilde": "kilde",
          "aarsak": "kontroll",
          "identifikasjonsnummer": "1234567890",
          "identifikasjonsnummertype": "utenlandskIdentifikasjonsnummer",
          "utstederland": "SWE"
        },
        "entitet": "annenIdentifikasjon",
        "entitetsendring": "registrereNy"
      }
    ]
  }
}
```

### Hendelsesdokument for en korrigering - format JSON
```json

{
  "dokumentidentifikator": "eb73af9403b0f5702e802ad4f9b8ca4e",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIIdentitetsgrunnlag",
    "ajourholdstidspunkt": "2014-01-04T00:00:00Z",
    "egenskapshendelse": [
      {
        "identitetsgrunnlag": {
          "gyldighetstidspunkt": "2017-04-19T10:32:18.294+02:00",
          "kilde": "korrigert-gjeldende-kilde",
          "identitetsgrunnlagstatus": "kontrollert",
          "dokumentgrunnlag": []
        },
        "entitet": "identitetsgrunnlag",
        "entitetsendring": "korrigere"
      }
    ]
  }
}
```

### Hendelsesdokument for en annullering - format JSON
```json

{
  "dokumentidentifikator": "c0e054f025e56d63b14f91fbb5abcb95",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIAnnenIdentifikasjon",
    "ajourholdstidspunkt": "2014-01-05T00:00:00Z",
    "egenskapshendelse": [
      {
        "entitet": "annenIdentifikasjon",
        "entitetsendring": "annullere"
      }
    ]
  }
}
```

### Hendelsesdokument for en korrigering av historisk informasjon - format JSON
NB: Denne entitetsendringen er ikke benyttet. Det er pt ikke støtte for å sette en entitetsendring til "korrigereHistorisk".  
```json

{
  "dokumentidentifikator": "d1428661e6f2c5c158bf954facdd3ba2",
  "skjemaversjon": "1.0",
  "hendelse": {
    "folkeregisteridentifikator": "16117548867",
    "hendelsestype": "endringIIdentitetsgrunnlag",
    "ajourholdstidspunkt": "2014-01-04T00:00:00Z",
    "egenskapshendelse": [
      {
        "entitet": "identitetsgrunnlag",
        "entitetsendring": "korrigereHistorisk"
      }
    ]
  }
}
```

### Statuskode 304
Statuskode 304 (_not modified_) returneres hvis kallet til tjenesten inkluderte headeren **If-None-Match** og denne er lik den aktuelle ETag for etterspurte ressurs. Det betyr at det ikke er kommet noen nye innslag på feeden siden forrige kall.

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
| 400 | Feil i mottatte data - spesifiseres i retur. |
| 401 | Autentiseringsinformasjon mangler |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten |
| 404 | Feil uri brukt. |
| 406 | Oppgitt Accept-header inneholder ikke 'application/atom+xml', 'application/xml' eller 'application/json', dersom Content-Type er satt ved bulkoppslag så vil returen være lik Content-Type dersom Accept-headeren er tom. |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. | 
