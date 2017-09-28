---
title: Tilbakemelding
---

# Grensesnittbeskrivelse
Folkeregister tilbakemelding tilbyr en hendelsesfeed med informasjon om status på innsendinger. Den kan navigeres gjennom sekvensnummer. 

Tjenestenes endepunkt:

`GET https://<env>:<port>/folkregisteret/tilbakemelding/api/{versjon}/hendelser?seq={startsekvensnummer}&direction={nyere/eldre}&pageSize=100`

Eksempel på curl-kommando som kan benyttes for å teste tjenesten:

`$ curl -k -v -X HEAD --cert datakonsument.cer --key datakonsument.key "https://folkeregisteret-api-ekstern.sits.no/folkregisteret/tilbakemelding/api/v2/hendelser/"`

## Headere

**Accept**

Verdien i denne headeren angir ønsket dataformat. Det er støtte for application/json og application/xml

**If-None-Match**

Denne verdien skal settes lik **ETag**-header fra siste respons fra tjenesten. Se [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) for mer informasjon om bruk av ETag.

## Eksempel på respons fra tjenesten
Under finnes eksempler på respons fra tjenesten.

### Statuskode 200
Sammen med statuskode 200 kommer en datastruktur som ser slik ut:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <id>/folkeregisteret/hendelseslister/api/v2/hendelser</id>
  <title>Privat hendelsesliste for 974760746</title>
  <entry>
    <title>Hendelse i sak</title>
    <id>0</id>
    <updated>2016-12-21T08:43:23.369Z</updated>
    <content type="application/xml">
      <hendelseISakOmTildelingAvDNummer xmlns="folkeregisteret:hendelsesliste:privat:hendelseisakomtildelingavdnummer:v3">
        <sak>
          <saksnummer>117142</saksnummer>
          <opprettet>2016-12-21T08:43:18.173Z</opprettet>
          <avsendersSaksreferanse>f3dbcfe6-d76a-4e68-a5bb-0fc22f548c4e</avsendersSaksreferanse>
          <meldingsreferanse>
            <avsendersMeldingsidentifikator>Skatt-E2E-Test--aa9433ea-87ca-4955-ad2f-20e671c0aef4</avsendersMeldingsidentifikator>
            <folkeregisterReferanse>530e1e97-b3f7-4e87-887a-8b8933aeeb18</folkeregisterReferanse>
          </meldingsreferanse>
        </sak>
        <saksbeslutning>
          <beslutning>avvist</beslutning>
          <beslutningstidspunkt>2016-12-21T08:43:22.068Z</beslutningstidspunkt>
          <skalIkkeTildeleDNummer>
            <begrunnelse>DUF-nummer er i bruk</begrunnelse>
          </skalIkkeTildeleDNummer>
        </saksbeslutning>
      </hendelseISakOmTildelingAvDNummer>
    </content>
  </entry>
  <entry>
    <title>Hendelse i sak</title>
    <id>5</id>
    <updated>2016-12-21T09:01:34.496Z</updated>
    <content type="application/xml">
      <hendelseISakOmTildelingAvDNummer xmlns="folkeregisteret:hendelsesliste:privat:hendelseisakomtildelingavdnummer:v3">
        <sak>
          <saksnummer>117152</saksnummer>
          <opprettet>2016-12-21T09:01:30.687Z</opprettet>
          <avsendersSaksreferanse>201216/fil-7-wf</avsendersSaksreferanse>
          <meldingsreferanse>
            <avsendersMeldingsidentifikator>2112116 - avviksmerknad om dublett og merknad om forkortet navn</avsendersMeldingsidentifikator>
            <folkeregisterReferanse>ab567940-cfd6-4a0d-aec6-44999e5aa4b1</folkeregisterReferanse>
          </meldingsreferanse>
        </sak>
        <sakTilManuellBehandling >
          <saksfrist>2016-12-26</saksfrist>
          <begrunnelse>muligDublett</begrunnelse>
        </sakTilManuellBehandling>
      </hendelseISakOmTildelingAvDNummer>
    </content>
  </entry>
  <entry>
    <title>Hendelse i sak</title>
    <id>6</id>
    <updated>2016-12-21T09:02:03.884Z</updated>
    <content type="application/xml">
      <hendelseISakOmTildelingAvDNummer xmlns="folkeregisteret:hendelsesliste:privat:hendelseisakomtildelingavdnummer:v3">
        <sak>
          <saksnummer>117152</saksnummer>
          <opprettet>2016-12-21T09:01:30.687Z</opprettet>
          <avsendersSaksreferanse>201216/fil-7-wf</avsendersSaksreferanse>
          <meldingsreferanse>
            <avsendersMeldingsidentifikator>2112116 - avviksmerknad om dublett og merknad om forkortet navn</avsendersMeldingsidentifikator>
            <folkeregisterReferanse>ab567940-cfd6-4a0d-aec6-44999e5aa4b1</folkeregisterReferanse>
          </meldingsreferanse>
        </sak>
        <saksbeslutning >
          <beslutning>godkjent</beslutning>
          <beslutningstidspunkt>2016-12-21T09:02:03.857Z</beslutningstidspunkt>
          <skalTildeleDNummer>
            <dNummer>70107300943</dNummer>
            <registreringstidspunkt>2016-12-20T23:00:00Z</registreringstidspunkt>
            <gyldighetstidspunkt>2016-12-20T23:00:00Z</gyldighetstidspunkt>
            <tildeltDnummerAvvikerFraFoedselsdato>false</tildeltDnummerAvvikerFraFoedselsdato>
          </skalTildeleDNummer>
        </saksbeslutning>
      </hendelseISakOmTildelingAvDNummer>
    </content>
  </entry>
  <entry>
    <title>Hendelse i sak</title>
    <id>7</id>
    <updated>2016-12-21T09:03:48.546Z</updated>
    <content type="application/xml">
      <hendelseISakOmTildelingAvDNummer xmlns="folkeregisteret:hendelsesliste:privat:hendelseisakomtildelingavdnummer:v3">
        <sak>
          <saksnummer>117155</saksnummer>
          <opprettet>2016-12-21T09:03:45.379Z</opprettet>
          <avsendersSaksreferanse>201216/fil-8-wf</avsendersSaksreferanse>
          <meldingsreferanse>
            <avsendersMeldingsidentifikator>2112116 - avviksmerknad om dublett og merknad om forkortet navn</avsendersMeldingsidentifikator>
            <folkeregisterReferanse>57471707-69cf-4759-b549-3d3e2d2873fa</folkeregisterReferanse>
          </meldingsreferanse>
        </sak>
        <sakTilManuellBehandling >
          <saksfrist>2016-12-26</saksfrist>
          <begrunnelse>muligDublett</begrunnelse>
        </sakTilManuellBehandling>
      </hendelseISakOmTildelingAvDNummer>
    </content>
  </entry>
  <entry>
    <title>Hendelse i sak</title>
    <id>9</id>
    <updated>2016-12-21T09:39:49.420Z</updated>
    <content type="application/xml">
      <hendelseISakOmTildelingAvDNummer xmlns="folkeregisteret:hendelsesliste:privat:hendelseisakomtildelingavdnummer:v3">
        <sak>
          <saksnummer>117179</saksnummer>
          <opprettet>2016-12-21T09:39:45.451Z</opprettet>
          <avsendersSaksreferanse>Skatt-E2E-Test--acf2b14b-e018-4a15-8e19-32e57b177cc7</avsendersSaksreferanse>
          <meldingsreferanse>
            <avsendersMeldingsidentifikator>Skatt-E2E-Test--67a535d8-a8a1-4729-a0f5-6589cb644b40</avsendersMeldingsidentifikator>
            <folkeregisterReferanse>52e5eb9d-3db1-483a-9af3-6757ba176cae</folkeregisterReferanse>
          </meldingsreferanse>
        </sak>
        <saksbeslutning >
          <beslutning>avvist</beslutning>
          <beslutningstidspunkt>2016-12-21T09:39:48.25Z</beslutningstidspunkt>
          <skalIkkeTildeleDNummer>
            <begrunnelse>DUF-nummer er i bruk</begrunnelse>
          </skalIkkeTildeleDNummer>
        </saksbeslutning>
      </hendelseISakOmTildelingAvDNummer>
    </content>
  </entry>
  <updated>2016-12-21T09:39:49.420Z</updated>
  <link rel='self' href='/folkeregisteret/hendelseslister/api/v2/hendelser/0/nyere/5'/>
  <link rel='first' href='/folkeregisteret/hendelseslister/api/v2/hendelser/0/nyere/5'/>
  <link rel='last' href='/folkeregisteret/hendelseslister/api/v2/hendelser/siste/5'/>
  <link rel='next' href='/folkeregisteret/hendelseslister/api/v2/hendelser/10/nyere/5'/>
</feed>
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
| 401 | Autentiseringsinformasjon mangler |
| 403 | Virksomheten er autentisert men mangler autorisasjon for den angitte tjenesten |
| 404 | Feil uri brukt. |
| 406 | Oppgitt Accept-header inneholder ikke 'application/atom+xml', 'application/xml' eller 'application/json' |
| 429 | For mange kall er gjort på for kort tid. Vent i minimum antall ms. angitt i Retry-After-header før neste request utføres |
| 500 | Feil i tjenesten. Vennligst prøv igjen seinere. |

## Miljøer

| Miljø | URL | 
|-------|-----|
| Test | https://folkeregisteret-api-ekstern.sits.no/ | 
| Produksjon | https://folkeregisteret.api.skatteetaten.no/ |  
