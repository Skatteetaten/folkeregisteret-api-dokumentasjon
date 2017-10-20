---
title: Mottak
---

# Grensesnittbeskrivelse
Innsending av informasjon til Folkeregisteret gjøres gjennom denne REST-tjenesten. Hvert dokument som kan sendes inn er representert som en egen ressurs. For å sende inn et dokument brukes kommandoen POST mot riktig URL med dokumentet som body i innsendingen.

Tjenestenes endepunkt:

`POST {miljø}/folkregisteret/tilbakemelding/api/{ressurs}`

## Ressurser
| ressurs | kontrakt | status |
|---------|----------|--------|
| rekvisisjon_av_dnummer| [xsd](../kontrakter/RekvisisjonAvDNummer_1.0.xsd) | produksjon |
| rekvisisjon_av_dnummer_v3 | [xsd](../kontrakter/RekvisisjonAvDNummer_3.0.xsd) | produksjon |
| rekvisisjon_av_dnummmer_v4 | [xsd](../kontrakter/RekvisisjonAvDNummer_4.0.xsd) | produksjon |
| rekvisisjon_av_dnummer_v4_vedlegg | [xsd](../kontrakter/RekvisisjonAvDNummer_4.0.xsd) | produksjon |
| doedsfall_v1 | [xsd](../kontrakter/MeldingOmDoedsfall_v1.0.xsd) | test |
| endring_av_dnummerperson_v2 | [xsd](../kontrakter/MeldingOmEndringAvPersonMedDNummer_v2.0.xsd) | test |
| foedsel_v1 | [xsd](../kontrakter/Foedselsmelding_1.0.xsd) | test |
| kontaktopplysninger_doedsbo_v1 | [xsd](../kontrakter/MeldingOmKontaktopplysningerForDoedsbo_v1.0.xsd) | test |

Her finner du egen  [xsd for kryptografisk signatur](../kontrakter/DigitalSignatur.xsd) av meldingene.

## Eksempler

Curl-kommando som kan benyttes for å teste tjenesten:

`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkeregisteret/mottak/api/rekvisisjon_av_dnummer_v4"`

### Statuskode 202
Sammen med statuskode 202 kommer en datastruktur som ser slik ut:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<meldingMottatt>
  <folkeregisterReferanse>47956f5b-fa1e-447d-a62d-b6714bc1f120</folkeregisterReferanse>
  <avsendersMeldingsidentifikator>unik-3efaf50b2a19</avsendersMeldingsidentifikator>
</meldingMottatt>
```
### Feilkoder
Hvis statuskode ikke 202men man får svar fra applikasjonen, så returneres en datastruktur som ser slik ut

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<folkeregisterFeilmelding>
  <httpStatus>403</httpStatus>
  <alvorlighetsgrad>WARNING</alvorlighetsgrad>
  <feilkode>ske.folkeregister.mottak.infrastructure.exceptions.KonsumentManglerTilgangException</feilkode>
  <feilmelding>Produsent har ikke tilgang til å sende inn D_NUMMER_REKVISISJON_V4</feilmelding>
  <tilleggsinformasjon>
  </tilleggsinformasjon>
</folkeregisterFeilmelding>
```

| HTTP Statuskode |  Forklaring |
|----------|-------|
| 400 | Innsendt melding er ikke gyldig XML, validerer ikke iht. XSD eller informasjon sendt i Authorization-header er ugyldig. |
| 401 | Autentiseringsinformasjon mangler. |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten. |
| 404 | Feil uri brukt. |
| 406 | Oppgitt Accept-header inneholder ikke 'application/xml'.|
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres. |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |

## Miljøer

| Miljø | URL | 
|-------|-----|
| Test| https://folkeregisteret-api-ekstern.sits.no/ | 
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ |  