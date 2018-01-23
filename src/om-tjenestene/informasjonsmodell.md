---
title: Informasjonsmodell
---

# Modeller

Her beskrives versjon 4 av modellen.

## Begrepsmodeller

Begrepsmodeller er konseptuelle modeller som beskriver begrepenes sammenheng med hverandre uttrykt ved setninger som uttrykker kunnskap med enkel semantikk. Dette gir et meget godt utgangspunkt for å lage Strukturmodeller som er sammensatt av entiteter og egenskaper på en logisk måte hvor entiteter og egenskaper er basert på begrepene i Begrepsmodellen.

* [Folkeregisterperson med navn](../modeller/18_0_1_5a00172_1452005068403_177360_23285.jpg)
* [Folkeregisterperson med fødsel](../modeller/18_0_1_5a00172_1452005068403_177360_23285.jpg)
* [Folkeregisterperson med adresse](../modeller/18_0_1_5a00172_1452005068403_177360_23285.jpg)
* [Folkeregisterperson med enkel kjerneinformasjon](../modeller/18_0_1_5a00172_1453283686526_815825_39946.jpg)
* [Folkeregisterperson med sivilstand](../modeller/18_0_1_5a00172_1454058654104_983220_43419.jpg)
* [Folkeregisterperson med relasjon](../modeller/18_0_1_5a00172_1454059027092_723196_43915.jpg)
* [Folkeregisterperson med utflytting](../modeller/18_0_1_5a00172_1454070052173_136631_44390.jpg)
* [Folkeregisterperson med dødsfall](../modeller/18_0_1_5a00172_1454314019208_581317_45564.jpg)
* [Folkeregisterperson med innflytting](../modeller/18_0_1_5a00172_1455623625804_592903_30993.jpg)
* [Folkeregisterperson med identitetsgrunnlag](../modeller/18_0_1_5a00172_1455629020847_45096_33261.jpg)
* [Folkeregisterperson med folkeregisteridentifikator](../modeller/18_0_1_5a00172_1455631901173_22467_34203.jpg)



## Strukturmodeller

Strukturmodellen er en logisk modell som benyttes som mal for kontruksjonsmodeller og har derfor ofte mer generaliserte entiteter enn konstruksjonsmodellene.

* [Folkeregisterperson med adresse](../modeller/18_0_1_5a00172_1450278727172_230353_14959.jpg)
* [Folkeregisterperson med personrelasjon](../modeller/18_0_1_5a00172_1457707670494_409007_31677.jpg)
* [Folkeregisterperson med dødsfall](../modeller/18_0_1_5b00175_1434703879388_270554_17720.jpg)
* [Folkeregisterperson med fødsel](../modeller/18_2_5a00172_1461333199284_975812_33312.jpg)
* [Folkeregisterperson med innflytting](../modeller/18_2_5a00172_1461334707302_959492_36953.jpg)
* [Folkeregisterperson med kjerneinformasjon](../modeller/18_2_5a00172_1461335462454_846413_38979.jpg)
* [Folkeregisterperson med sivilstand](../modeller/18_2_5a00172_1486742267042_67085_60133.jpg)
* [Folkeregisterperson med kontaktopplysninger for dødsbo](../modeller/18_2_5a00172_1486990410781_123538_62281.jpg)
* [Folkeregisterperson med identitet](../modeller/18_2_5a00172_1486995006560_52445_64049.jpg)
* [Folkeregisterperson med utflytting](../modeller/18_2_5a00172_1487338698879_978644_54505.jpg)
* [Folkeregisterperson med navn](../modeller/18_2_5a00172_1487778967501_54251_59224.jpg)


## Konstruksjonsmodeller

Konstruksjonsmodellene er basert på Strukturmodellen, men er veldig plattform- og teknologiavhengige og må derfor ta hensyn til styrker og svakheter ved sitt operative miljø.

* [Melding om kontaktopplysninger for dødsbo](../modeller/18_2_5a00172_1485934541192_972218_55110.jpg)
* [Melding om dødsfall](../modeller/18_2_5a00172_1478705212213_605344_40147.jpg)
* [Melding om rekvisisjon av dnummer](../modeller/18_5_5a00172_1499854129681_964831_36130.jpg)
* [Melding om annullering av dødsfall](../modeller/18_5_5a00172_1510835122836_980002_57088.jpg)

# Endringslogg

## Beskrivelse av endringer i informasjonsmodellen mellom versjon 3.0 og 4.0

Endringer i begrepsmodellen beskrives ikke.

### Adresse
Entiteten Folkeregisteradresse er fjernet og alle typer adresser er direkte koblet til Folkeregisterperson.

Entiteten KontaktadresseIUtlandet er innført for å unngå misforståelse mht. valgbarhet mot norske adressetyper for egenskapen postadresseIUtlandet.

Entiteten Adressevalg er innført for å holde kontroll på en persons prefererte kontaktadresse (egenskap preferertKontaktadresse) som er et valg mellom de fire faktiske adressetypene i Registeret.

### Fødsel
Informasjon om alle fødsler i inn- og utland er samlet i entiteten Fødsel. Egenskapen fødselINorge med entitet FødselINorge er et tillegg til Fødsel for spesiell informasjon fra norske fødsler. Her er den gamle kodelisten for rekkefølgenummer erstattet med to egenskaper: antallBarnIFlerfødselen og rekkefølgenummer – begge av typen Heltall.

### Identitet
Entiteten Identifikasjonsdokument har fått egenskapen dokumentkontroll som er av datatypen TekniskDokumentkontroll. TekniskDokumentkontroll inneholder egenskapen dokumentkontrollstatus som er en kodeliste med verdiene kontrollertIdentifikasjonsdokument og ikkeKontrollertIdentifikasjonsdokument som ligger til grunn for identitetsgrunnlagsstatusen for en person.
Navnet til entiteten Kjønn er endret til Personkjønn (teknisk begrensning).

### Kjerneinformasjon
Entiteten Samemantall har fått endret navnet til SametingetsValgmanntall for å spesialisere betydningen enda mer. Likeledes er navnene til egenskapene og kodelistene justert tilsvarende.

### Kontaktopplysninger for dødsbo
Egenskapen adressenErTilAdvokatkontor er fjernet og entiteten AdvokatSomKontakt er opprettet som egen valgegenskap som rolle fra entiteten KontaktinformasjonForDødsbo.

### Oversikt
Modellen for fusjon av personer vha. en relasjonsentitet er fjernet siden prosjektet valgte en annen teknisk måte å håndtere dette i Registeret. Registeret har ingen vedvarende intern personidentifikator for en Folkeregisterperson, men oppretter en ny Folkeregisterperson-entitet for hvert skifte av gyldig Folkeregisteridentifikator. Diagrammet er derfor fjernet.

### Personrelasjon
Egenskapen tidsrom manglet egenskapstype Periode som nå er lagt inn.


