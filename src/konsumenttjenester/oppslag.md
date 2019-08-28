---
title: Oppslag
---

# Grensesnittbeskrivelse
Oppslagstjenesten gir tilgang til data om en person. Tjenesten tilbyr to former for oppslag. 
   * Siste versjonen av en person. Dette er til enhver tid oppdaterte data om personen i henhold til Folkeregisteret. 
   * En versjonert utgave av en person som har vært eller er gyldig. 

For å nå tjenestene bygges URL opp slik:
{miljø}/folkeregisteret/{rettighetspakke}/{versjon}/{ressurs}(? part = {entitet} & part = {entitet} ...)

Det er mulig å spesifisere hvilke data en ønsker returnert fra oppslaget, dette er nærmere beskrevet på siden om [dataminimering](../dataminimering)

## Ressurser
| Ressurs | Beskrivelse | 
|---------|-------------|
|personer/{folkeregisteridentifikator}| Siste versjon av en person | 
|personer/entydigsoek| Entydig søk som returnerer siste versjon av en person |
|personer/arkiv/{persondokumentidentifikator} | Versjonert utgave av en person |
|personer/bulkoppslag/| Siste versjon av et sett med personer (gjelder kun rettighetspakke offentlig-med-hjemmel)|
|personer/bulkoppslag/arkiv/| Et sett med versjonerte utgaver av en person (gjelder kun rettighetspakke offentlig-med-hjemmel)|
|personer/xsd| Xsd (kontrakt) for person |

### Om entydig søk
Ved entydig søk må minst en av følgende parametere med entydig identifiserende informasjon være inkludert i URL'en:
* identifikasjonsnummer
* utenlandskpersonidentifikasjon
* legitimasjonsdokument
* utlendingsmyndighetenesIdentifikasjonsnummer

I tillegg må en av følgende ikke identifiserende være oppgitt:
* foedselsdato (gjelder ikke dersom identifikasjonsnummer (fnr/dnr) er oppgitt)
* navn
* adressenavn
* husnummer

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

`$ curl -k -v -X GET --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/{folkeregiseridentifikator}?part=historikk&part=identitetsgrunnlag"`

Eksempel på bulkoppslag på gitte folkeregisteridentifikatorer:

`$ curl -k -v -X POST --cert datakonsument.cer --key datakonsument.key -d '{"foedselsEllerDNummer": ["{folkeregiseridentifikator}","{folkeregiseridentifikator}"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/bulkoppslag/"`

Eksempel på bulkoppslag på gitte versjoner av persondokumenter:

`$ curl -k -v -X POST --cert datakonsument.cer --key datakonsument.key -d '{"dokumentidentifikator": ["8446cf3bb867bfdb6de9cc9c17f6adf2","8446cf3bb867bfdb6de9cc9c17f6adf2"]}' -H "Content-Type: application/json" "https://folkeregisteret-api-konsument.sits.no/folkeregisteret/offentlig-med-hjemmel/api/v1/personer/bulkoppslag/arkiv/"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json (default) og application/xml.

**Content-Type**

For bulkoppslag gjøres det POST-requester, disse forventer at headeren Content-Type er satt. Det er støtte for application/json og application/xml (default).

## Eksempler på respons fra tjenesten

### Statuskode 200
Eksempel på svar ved oppslag på en person (GET .../personer/09052400284):
```json

{
    "identifikasjonsnummer": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "dsf-folkeregister-synkronisering",
            "gyldighetstidspunkt": "2019-06-05T00:00:00+02:00",
            "status": "iBruk",
            "foedselsEllerDNummer": "09052400284",
            "identifikatortype": "foedselsnummer"
        }
    ],
    "status": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-06-05T09:33:23+02:00",
            "status": "bosatt"
        }
    ],
    "kjoenn": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-06-05T00:00:00+02:00",
            "kjoenn": "kvinne"
        }
    ],
    "foedsel": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-06-05T00:00:00+02:00",
            "foedselsdato": "1924-05-09",
            "foedselsaar": "1924",
            "foedested": "",
            "foedeland": "CAN"
        }
    ],
    "sivilstand": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-06-05T00:00:00+02:00",
            "sivilstand": "gjenlevendePartner"
        }
    ],
    "navn": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-06-05T00:00:00+02:00",
            "fornavn": "FORSTÅELSESFULL",
            "etternavn": "RULLETRAPP"
        }
    ],
    "bostedsadresse": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-05-31T00:00:00+02:00",
            "matrikkeladresse": {
                "bruksenhetsnummer": "",
                "matrikkelnummer": {
                    "kommunenummer": "0301",
                    "gaardsnummer": 0,
                    "bruksnummer": 27,
                    "festenummer": 0
                },
                "undernummer": 0,
                "poststed": {
                    "poststedsnavn": "OSLO",
                    "postnummer": "1163"
                },
                "coAdressenavn": ""
            },
            "adressegradering": "ugradert",
            "flyttedato": "2019-05-31"
        }
    ],
    "postadresse": [
      {
      "hendelsedataId": "445668dc-8aa5-49c6-ad06-8bd2755df897",
      "kilde": "KILDE_DSF",
      "saksreferanse": "SAKSREFERANSE_MIGRERING",
      "erGjeldende": true,
      "gyldighetstidspunkt": "2008-08-08T00:00:00+02:00",
      "postadresseIFrittFormat": {
        "adresselinje": [
          "GATE 22255"
        ],
        "postnummer": "9170",
        "poststed": "LONGYEARBYEN"
       },
       "adressegradering": "UGRADERT"
     }
    ],
    "preferertKontaktadresse": [
    {
      "kilde": "",
      "saksreferanse": "",
      "erGjeldende": true,
      "valg": "POSTADRESSE",
      "adressegradering": "UGRADERT",
      "kontaktadresseIFrittFormat": {
        "adresselinje": [
          "GATE 22255",
          "9170 LONGYEARBYEN"
        ]
      }
    }
  ]    
}
```

Eksempel på dataminimering ved oppslag på en person (GET .../personer/01104200113?part=status):
```json

{
    "identifikasjonsnummer": [
        {
            "ajourholdstidspunkt": "2019-02-07T16:03:19+01:00",
            "erGjeldende": true,
            "kilde": "dsf-folkeregister-synkronisering",
            "gyldighetstidspunkt": "2019-02-07T00:00:00+01:00",
            "status": "iBruk",
            "foedselsEllerDNummer": "01104200113",
            "identifikatortype": "foedselsnummer"
        }
    ],
    "status": [
        {
            "ajourholdstidspunkt": "2019-02-07T16:03:19+01:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Uregistrert person",
            "gyldighetstidspunkt": "2019-02-07T16:03:19+01:00",
            "status": "ikkeBosatt"
        }
    ]
}
```

Eksempel på bulkoppslag med dataminimering (POST .../personer/bulkoppslag/?part=status):
```json

{
  "foedselsEllerDNummer": [
    "29084902258"
  ]
}
```

Svar:

```json

{
    "oppslag": [
        {
            "foedselsEllerDNummer": "29084902258",
            "folkeregisterperson": {
                "identifikasjonsnummer": [
                    {
                        "ajourholdstidspunkt": "2019-04-16T14:38:41.098+02:00",
                        "erGjeldende": true,
                        "kilde": "KILDE_DSF",
                        "status": "iBruk",
                        "foedselsEllerDNummer": "29084902258",
                        "identifikatortype": "foedselsnummer"
                    }
                ],
                "status": [
                    {
                        "ajourholdstidspunkt": "2019-04-16T14:38:41.098+02:00",
                        "erGjeldende": true,
                        "kilde": "KILDE_DSF",
                        "gyldighetstidspunkt": "2019-04-16T14:38:41.098+02:00",
                        "status": "bosatt"
                    }
                ]
            }
        }
    ]
}
```

Eksempel på entydig søk med dataminimering (GET .../personer/entydigsoek?identifikasjonsnummer=09052400284&navn=RULLETRAPP&part=navn):

```json

{
    "identifikasjonsnummer": [
        {
            "ajourholdstidspunkt": "2019-02-07T16:03:19+01:00",
            "erGjeldende": true,
            "kilde": "dsf-folkeregister-synkronisering",
            "gyldighetstidspunkt": "2019-02-07T00:00:00+01:00",
            "status": "iBruk",
            "foedselsEllerDNummer": "09052400284",
            "identifikatortype": "foedselsnummer"
        }
    ],
    "navn": [
        {
            "ajourholdstidspunkt": "2019-06-05T09:33:23+02:00",
            "erGjeldende": true,
            "kilde": "",
            "aarsak": "Innvandring",
            "gyldighetstidspunkt": "2019-06-05T00:00:00+02:00",
            "fornavn": "FORSTÅELSESFULL",
            "etternavn": "RULLETRAPP"
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
| 406 | Oppgitt Accept-header inneholder ikke 'application/xml' eller 'application/json', dersom Content-Type er satt ved bulkoppslag så vil returen være lik Content-Type dersom Accept-headeren er tom og returkoden vil da bli 200. |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |
