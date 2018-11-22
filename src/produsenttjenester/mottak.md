---
title: Mottak
---

# Grensesnittbeskrivelse
REST-tjeneste for innsending av informasjon til Folkeregisteret. Dokument som kan sendes inn er representert i listen over ressurser under. For å sende inn et dokument brukes kommandoen POST mot riktig URL med dokumentet som body i innsendingen.

Tjenestenes endepunkt: <br>
`POST {miljø}/folkeregisteret/mottak/api/{ressurs}`

## Ressurser
| ressurs | kontrakt | modell | status | tilbakemeldingshendelse |
|---------|----------|--------|--------|-------------------------|
| rekvisisjon_av_dnummer            | [xsd](../kontrakter/RekvisisjonAvDNummer_1.0.xsd)                    | | utgått     | N/A |
| rekvisisjon_av_dnummer_v3         | [xsd](../kontrakter/RekvisisjonAvDNummer_3.0.xsd)                    | | utgått     | N/A |
| rekvisisjon_av_dnummer_v4        | [xsd](../kontrakter/RekvisisjonAvDNummer_4.0.xsd)                    | [jpg](../modeller/1499854129.jpg) | produksjon | HendelserISakOmDNummerRekvisisjon_v4 |
| rekvisisjon_av_dnummer_v4.vedlegg | [xsd](../kontrakter/RekvisisjonAvDNummer_4.0.xsd)                    | | produksjon | HendelserISakOmDNummerRekvisisjon_v4 |
| rekvisisjon_av_dnummer_v5         | [xsd](../kontrakter/RekvisisjonAvDNummer_5.0.xsd)                    | [jpg](../modeller/1511792480.jpg) | produksjon | HendelserISakOmDNummerRekvisisjon_v5 |
| rekvisisjon_av_dnummer_v5.vedlegg         | [xsd](../kontrakter/RekvisisjonAvDNummer_5.0.xsd)                    | [jpg](../modeller/1511792480.jpg) | produksjon | HendelserISakOmDNummerRekvisisjon_v5 |
| doedsfall_v1                      | [xsd](../kontrakter/MeldingOmDoedsfall_v1.0.xsd)                     | [png](../modeller/1478705212.png) | produksjon | HendelserISakOmFolkeregistrering_v1 |
| annullering_av_doedsfall_v1       | [xsd](../kontrakter/MeldingOmAnnulleringAvDoedsfall_v1.0.xsd)        | [jpg](../modeller/1510835122.jpg) | test | HendelserISakOmFolkeregistrering_v1 |
| endring_av_dnummerperson_v2       | [xsd](../kontrakter/MeldingOmEndringAvPersonMedDNummer_v2.0.xsd)     | | produksjon | HendelserISakOmEndringAvDNummerPerson_v1<br><b>Manuell</b>: HendelserISakOmFolkeregistrering_v1 |
| endring_av_dnummerperson_v3       | [xsd](../kontrakter/MeldingOmEndringAvPersonMedDNummer_v3.0.xsd)     | | test | HendelserISakOmEndringAvDNummerPerson_v1<br><b>Manuell</b>: HendelserISakOmFolkeregistrering_v1 |
| foedsel_v1                        | [xsd](../kontrakter/Foedselsmelding_1.0.xsd)                         | | test | HendelserISakOmFolkeregistrering_v1 |
| kontaktopplysninger_doedsbo_v1    | [xsd](../kontrakter/MeldingOmKontaktopplysningerForDoedsbo_v1.0.xsd) | [png](../modeller/1485934541.png) | test | HendelserISakOmFolkeregistrering_v1 |
| separasjon_v1                     | [xsd](../kontrakter/MeldingOmSeparasjon_v1.0.xsd)                    | | test | HendelserISakOmFolkeregistrering_v1 |
| skilsmisse_v1                     | [xsd](../kontrakter/MeldingOmSkilsmisse_v1.0.xsd)                    | | test | HendelserISakOmFolkeregistrering_v1 |
| innflytting_v1                    | [xsd](../kontrakter/MeldingOmInnflytting_v1.0.xsd)                   | | test | HendelserISakOmFolkeregistrering_v1 |

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
Hvis statuskode ikke 202 men man får svar fra applikasjonen, så returneres en datastruktur som ser slik ut

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

## Mutlipart
Innsending av Dnr-rekvisisjon med vedlegg på endepunktene ".vedlegg" må gjøres som en multipart-request.
I all hovedsak er det en ordinær multipart med xml og vedlegg som hver sine deler av requesten men det er to krav:
1) "Name" i Content-disposition for xml og vedlegg må være 'rekvisisjon' og 'vedlegg'.
2) "Filename" i Content-disposition for vedlegg må matche filnavnet som er angitt i xml i feltet 'multipartnavn' for identifikasjonsdokumentet.

Eks:
POST http://folkeregisteret-api-ekstern.sits.no/folkeregisteret/mottak/api/rekvisisjon_av_dnummer_v5.vedlegg HTTP/1.1\
Content-Type: multipart/form-data; boundary=ahmbD7nC0ZRm0ME0uKQXJKQHDWASO_Ur\
Host: folkeregisteret-api-ekstern.sits.no\
Expect: 100-continue\
Accept-Encoding: gzip, deflate\
Proxy-Connection: Keep-Alive\

--ahmbD7nC0ZRm0ME0uKQXJKQHDWASO_Ur\
Content-Disposition: form-data; name="rekvisisjon"; filename="et-eller-annet-dnr_rekv.xml"\
Content-Type: application/xml; charset=ISO-8859-1\
Content-Transfer-Encoding: binary\

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
<rekvisisjonAvDNummer xmlns="folkeregisteret:melding:nyfolkeregisterperson:rekvisisjonavdnummer:v5">
<innsending>
<avsendersMeldingsidentifikator>5a92c247afd2a3f24939.js?5a92c247afd2a3f24939</avsendersMeldingsidentifikator>
<avsendersInnsendingstidspunkt>2018-09-01T15:04:47.719</avsendersInnsendingstidspunkt>
<kildesystem>Skatteplikt</kildesystem></innsending>
<forespoersel>
<kandidat>
<navn>
<fornavn>irriterende</fornavn>
<mellomnavn>treg</mellomnavn>
<etternavn>fotgjenger</etternavn></navn>
...
...
<identifikasjon>
<personidentifikasjon>
<identifikasjonsnummer>01019023939</identifikasjonsnummer>
<identifikasjonsnummertype>utenlandskIdentifikasjonsnummer</identifikasjonsnummertype>
<utstederland>SWE</utstederland>
</personidentifikasjon>
<dokumentgrunnlag>
<identifikasjonsdokumentnummer>11503415812</identifikasjonsdokumentnummer>
<identifikasjonsdokumenttype>diplomatpass</identifikasjonsdokumenttype>
<utstedernavn>Militz</utstedernavn>
<utstederland>RWA</utstederland>
<gyldigFra>2017-05-01</gyldigFra>
<dokumentkopi><multipartnavn>pass2.pdf</multipartnavn></dokumentkopi>  
</dokumentgrunnlag>
</identifikasjon>
...
</rekvisisjonAvDNummer>

--ahmbD7nC0ZRm0ME0uKQXJKQHDWASO_Ur
Content-Disposition: form-data; name="vedlegg1"; filename="pass2.pdf"
Content-Type: text/plain; charset=ISO-8859-1
Content-Transfer-Encoding: binary

%PDF-1.4
 