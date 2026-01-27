---
title: Uttrekk
---



## Grensesnittbeskrivelse
Uttrekktjenesten gir tilgang til å hente ut et utvalg med personer basert på én eller flere kriterier, som for eksempel sekvensnummer, fødselsår, gatenavn, og kommune. Tjenestene er delt i 3 deler som utføres i rekkefølge:
  1. Bruk uttrekk/komplet eller uttrekk/tilpasset for å bestille ett uttrekk
  2. Bruk uttrekk/hent samme med et batchnummer for å hente resultatet av uttrekket. Resultatet er enten fødsel- eller d-nummer (fra tilpasset uttrekk) eller dokumentID (fra komplett uttrekk)
  3. Bruk [bulkoppslag](../oppslag) for å hente personinformasjon

Merk at JobbID returneres umiddelbart, men batchen er ikke nødvendigvis ferdig umiddelbart. Feilmelding 404 indikerer at jobbID ikke er ferdig. Det anbefales å bygge inn en retry-mekanisme med en delay mellom hvert forsøk.   

Første batch har nummer 0, Komplett uttrekk og tilpasset uttrekk deler batcher i et gitt antall. Den siste batchen vil returnere svaret {}. Dette indikerer at det ikke er flere treff å hente.

Følgende algoritme beskriver flyten for de tre tjenestene:
```
  jobbid = bestillUttrekk(sekvensnummer)

  batchteller = 0
  batch = hentResultat(jobbid, batchteller)

  while (batch.resultat > 0) {
    persondokumenter = hentPersondokumenter(batch)
    // behandle persondokumenter

    batch = hentResultat(jobbid, ++batchteller)
  }
```

## Komplett uttrekk
Hensikten med tjenesten er å tillate konsumenter å hente ned hele registeret fra et gitt tidspunkt. Tidspunktet er representert med et sekvensnummer. Alle persondokumentene som er gyldig ved sekvensnummeret, samt alle etterfølgende endringer vil returneres. 
Tjenesten vil aldri benyttes til daglig vedlikehold av et register, men vil være nyttig i forholdelse med innlasting av en initiell befolkning. 
<br>
<br>

## Tilpasset uttrekk
Hensikten med denne POST-tjenesten er å tillate søk på grupper av personer. 
Hvilke rettighetspakker som tjenesten er tilgjengelig for er beskrevet [her.](../konsumenttjenester)

For uttrekk kan hver virksomhet ha maksimalt 10 uttrekksjobber som kjører samtidig.
Hvis denne grensen overskrides, vil nye uttrekk bli avvist med HTTP 429 (Too Many Requests).
Dette gjelder uavhengig av hvor mange øvrige kall som gjøres mot API-et.

tabellen under beskriver hvilke muligheter for tilpassing av uttrekket som støttes.

|Felt|Beskrivelse av input|
|-----------------|----------------------------------|
|personstatustyper|Gyldig input er: <br> "aktiv", "bosatt", "utflyttet", "doed" og "inaktiv". <br> Personstatusene midlertidig, ikkeBosatt, forsvunnet og fødselsregistrert dekkes av valget "aktiv". |
|bostedskommunenummer|Søk på kommunenummer (fire siffer) kan ikke kombineres med oppholdskommunenummer|
|oppholdskommunenummer|Søk på kommunenummer (fire siffer) kan ikke kombineres med bostedskommunenummer|
|foedselsaarFraOgMed| |
|foedselsaarTilOgMed| |
|doedsaarFraOgMed| | 
|doedsaarTilOgMed| |
|kjoenn| Gyldig input er "kvinne" eller "mann" |
|statsborgerskap| ISO 3166-1 alfa-3 (eksempel: "BGR") |
|sivilstandstype|Gyldig input er: <br> "uoppgitt", "ugift", "gift", "enkeEllerEnkemann“, "skilt", "separert", "registrertPartner", "skiltPartner", "separertPartner", "gjenlevendePartner". |

## Endepunkter
For oppbygging av endepunkter se [her.](../endepunkter)

