---
title: Informasjonsmodell
---

# Modeller
Dokumentasjonen nedenfor er manuelt generert og er tiltenkt å gi utfyllende og funksjonell forståelse. Utvikling av integrasjon mot folkeregisterets er anbefalt gjort mot den api-spesifikasjonen som er tilgjengelig på [swaggerhub.](https://app.swaggerhub.com/organizations/Skatteetaten_FREG) 
<br/><br/>

## Informasjonsmodell
[Informasjonsmodellen](../dokumenter/Informasjonsmodell-Modernisering av folkeregisteret.pdf) beskriver informasjonselementene i Folkeregisteret.
<br/><br/>

## Hendelsesbeskrivelser
<B>NB! dokumentet nedenfor er inkludert i Informasjonsmodell dokumentet over fra 05.09.2024.</B><BR>
Beskriver alle hendelsestypene som vil tilgjengeliggjøres fra Folkeregisteret. [Hendelser fra Folkeregisteret](../dokumenter/Hendelser fra Folkeregisteret_v1_8_2023_08_23.pdf).                                                      
<br/><br/>

## Begrepsmodeller

Begrepsmodeller er konseptuelle modeller som beskriver begrepenes sammenheng med hverandre uttrykt ved setninger som uttrykker kunnskap med enkel semantikk. Dette gir et meget godt utgangspunkt for å lage Strukturmodeller som er sammensatt av entiteter og egenskaper på en logisk måte hvor entiteter og egenskaper er basert på begrepene i Begrepsmodellen.

* [Folkeregisterperson med navn](../modeller/1452005068.png)
* [Folkeregisterperson med fødsel](../modeller/1452005271.png)
* [Folkeregisterperson med adresse](../modeller/1452068906.png)
* [Folkeregisterperson med enkel kjerneinformasjon](../modeller/1453283686.png)
* [Folkeregisterperson med sivilstand](../modeller/1454058654.png)
* [Folkeregisterperson med relasjon](../modeller/1454059027.png)
* [Folkeregisterperson med utflytting](../modeller/1454070052.png)
* [Folkeregisterperson med dødsfall](../modeller/1454314019.png)
* [Folkeregisterperson med innflytting](../modeller/1455623625.png)
* [Folkeregisterperson med identitetsgrunnlag](../modeller/1455629020.png)
* [Folkeregisterperson med folkeregisteridentifikator](../modeller/1455631901.png)
* [Folkeregisterperson med postadresse i utlandet](../modeller/1455631902.png)
* [Folkeregisterperson med beskyttelse](../modeller/1455631903.png)
* [Folkeregisterperson med preferert kontaktadresse](../modeller/1455631904.png)
* [Folkeregisterperson med kontaktinformasjon for dødsbo](../modeller/1455631905.png)
<br/><br/>


## Strukturmodeller

Strukturmodellen er en logisk modell som benyttes som mal for kontruksjonsmodeller og har derfor ofte mer generaliserte entiteter enn konstruksjonsmodellene.

* [Folkeregisterperson med adresse](../modeller/1450278727.png)
* [Adressetyper](../modeller/1515074003.png)
* [Folkeregisterperson med personrelasjon](../modeller/1457707670.png)
* [Folkeregisterperson med dødsfall](../modeller/1434703879.png)
* [Folkeregisterperson med fødsel](../modeller/1461333199.png)
* [Folkeregisterperson med innflytting](../modeller/1461334707.png)
* [Folkeregisterperson med kjerneinformasjon](../modeller/1461335462.png)
* [Folkeregisterperson med sivilstand](../modeller/1486742267.png)
* [Folkeregisterperson med kontaktopplysninger for dødsbo](../modeller/1486990410.png)
* [Folkeregisterperson med identitet](../modeller/1486995006.png)
* [Folkeregisterperson med utflytting](../modeller/1487338698.png)
* [Folkeregisterperson med navn](../modeller/1487778967.png)
* [Folkeregisterperson med verge fullmektig og representant](../modeller/1538033146.png)
* [Folkeregisterperson med falsk identitet](../modeller/1543845073.png)
* [Folkeregisterperson med sametingets valgmantall](../modeller/1549296236.png)
* [Folkeregisterperson med samisk språk](../modeller/1549296237.png)
* [Folkeregisterperson med opphold](../modeller/1549296238.png)
<br/><br/>

## Historiske kommunenummer - Kommuner før 1988
Folkeregisteret deler historiske adresser f.eks. historisk Bostedsadresse. 
Vi deler da adressen med kommunenummeret og -navnet som var gjeldende for da personen bodde på adressen.

Siden dette er adresser som går langt tilbake i tid og vi ikke kjenner en kilde som strukturert kunne levere en slik oversikt, har vi manuelt opprettet en XML for kommuner før 1988. Dersom det er til hjelp kan dere laste ned oversikt over kommuner frem til 1988 her:  
[Historiske kommuner før 1988 benyttet i Folkeregisteret](../dokumenter/historiskekommuner.xml)

For kommuner f.o.m. 1988 benytter Folkeregisteret SSB som kilde.



