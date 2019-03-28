---
title: Informasjonsmodell
---

# Modeller

Her beskrives versjon 5 av modellen.

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



## Strukturmodeller

Strukturmodellen er en logisk modell som benyttes som mal for kontruksjonsmodeller og har derfor ofte mer generaliserte entiteter enn konstruksjonsmodellene.

* [Folkeregisterperson med adresse](../modeller/1450278727.jpg)
* [Adressetyper](../modeller/1515074003.jpg)
* [Folkeregisterperson med personrelasjon](../modeller/1457707670.jpg)
* [Folkeregisterperson med dødsfall](../modeller/1434703879.jpg)
* [Folkeregisterperson med fødsel](../modeller/1461333199.jpg)
* [Folkeregisterperson med innflytting](../modeller/1461334707.jpg)
* [Folkeregisterperson med kjerneinformasjon](../modeller/1461335462.jpg)
* [Folkeregisterperson med sivilstand](../modeller/1486742267.jpg)
* [Folkeregisterperson med kontaktopplysninger for dødsbo](../modeller/1486990410.jpg)
* [Folkeregisterperson med identitet](../modeller/1486995006.jpg)
* [Folkeregisterperson med utflytting](../modeller/1487338698.jpg)
* [Folkeregisterperson med navn](../modeller/1487778967.jpg)

# Endringslogg

## Beskrivelse av endringer i informasjonsmodellen mellom versjon 4.0 og 5.0

### Generelle registerelementer

**_Registermetadata_**

Egenskapen gyldighetstidspunkt er blitt valgfri siden migrert informasjon fra DSF ikke alltid gir informasjon om dette.

**_Registerendring_**

Kodelisten har fått nytt element, _opphøre_.

### Adresse

**_Bostedsadresse_**

_Bostedsadresse_ har fått en ny valgegenskap, _ukjentBosted_ med entitetstype _UkjentBosted_, hvor _UkjentBosted_ har valgfri egenskap _bostedskommune_.

Egenskapen _adresseIdFraMatrikkelen_ har endret navn til _adresseIdentifikatorFraMatrikkelen_.

Kretser vil likevel bli lagret på bostedsadressen siden distribusjonsmodellens arkitektur hindrer oppslag i matrikkelen ved behov. Kretsene er: _grunnkrets_, _stemmekrets_, _skolekrets_ og _kirkekrets_.

**_Oppholdsadresse_**

Egenskapen _oppholdsadresse_ for _Folkeregisterperson_ var feilaktig en valgegenskap med multiplisitet 1. Egenskapen er nå ikke en valgegenskap og multiplisiteten er 0..*.

**_Matrikkeladresse_**

Egenskapen _matrikkeladressenavn_ er byttet med _adressetilleggsnavn_ og egenskapen _poststed_ er lagt til i entiteten _Matrikkeadresse_.

**_Kontaktadresse_**

Kontaktadresse har nå ingen valgegenskaper, men to valgfrie og en påkrevet.

Kontaktadresse har egenskapen vegadresse som før, men denne er av entitetstype _VegadresseForPost_ som er en forenklet versjon av _Vegadresse_ og er valgfri.

Kontaktadresse har en ny påkrevet egenskap, _postadresseIFrittFormat_, som måtte opprettes pga. migrasjon av ustrukturerte postadresser fra DSF. Egenskapen _postadresseIFrittFormat_ vil bli oppdatert på grunnlag av endringer i de valgfrie strukturerte entitetene _VegadresseForPost_ eller _Postboksadresse_ slik at denne alltid vil finnes i personmodellen.

Kontaktadresse har ikke lenger _matrikkeladresse_ som egenskap.

**_KontaktadresseIUtlandet_**

KontaktadresseIUtlandet har fått en ny egenskap, _internasjonalAdresseIFrittFormat_, pga. migrasjon av ustrukturerte postadresser i utlandet fra DSF. Egenskapen _internasjonalAdresseIFrittFormat_ vil bli oppdatert på grunnlag av endringer i den valgfrie strukturerte entiteten InternasjonalAdresse slik at denne alltid vil finnes i personmodellen.

**_Adressenummer_**

Datatypen er endret ved at egenskapene _nummer_ og _bokstav_ har får navnene hhv. _husnummer_ og _husbokstav_.

**_Adressetype_**

Koden _kontaktadresse_ er endret til _postadresse_ og Koden _kontaktadresseIUtlandet_ er endret til _postadresseIUtlandet_.

**_Adressegradering_**

Kodelisten _Adressegradering_ har endret kodeverdien _sperretAdresseFortrolig_ til _fortrolig_ og _sperretAdresseStrengtFortrolig_ til _strengtFortrolig_.

**_GraderingAvAdresse_**

Egenskapen _adressebeskyttelse_ er innført for å beskrive beskyttelsesnivået for en person uavhengig av adressetype. Egenskapen _graderingsnivå_ kan således kun ha verdiene _ugradert_, _fortrolig_, _strengtFortrolig_.

### Dødsfall

Egenskapen _dødsdato_ i entiteten _Dødsfall_ har fått multiplisitet 0..1 siden dødsdato ikke alltid er registert i DSF.

### Fødsel

Informasjon om alle fødsler i inn- og utland er samlet i entiteten _Fødsel_. Egenskapen _fødekommuneINorge_ er lagt inn i _entiteten Fødsel_.

Egenskapen _fødselINorge_ med entitet _FødselINorge_ er ikke lenger et tillegg til _Fødsel_, men en egen egenskap for Folkeregisterperson. _FødselINorge_ er for spesiell informasjon fra norske fødsler. Her er den gamle kodelisten for rekkefølgenummer erstattet med _rekkefølgenummer_ av typen _Heltall_ hvor man benytter den gamle verdisettene (12=første tvilling osv.). Videre er _fødekommune_ lagt inn i _Fødsel_ som _fødekommuneINorge_. Egenskapen _antallBarnIFlerfødsel_ er fjernet da verdien ligger i _rekkefølgenummer_.

### Identitet

**_Statsborgerskap_**

Entiteten _Statsborgerskap_ har fått ny egenskap, _ervervsdato_.

På grunn av dette så har selve egenskapen statsborgerskap for _Folkeregisterperson_ fått endret multiplisitet fra 1 til 0..* og egenskapen _statsborgerskap_ i entiteten _Statsborgerskap_ fått multiplisitet 1. Dette for å ivareta flere gjeldende statsborgerskap.

**_Personidentifikasjon_**

Folkeregisterperson sin egenskap _annenIdentifikasjon_ er blitt byttet ut med egenskapene _utenlandskPersonidentifikasjon_ og _utlendingsmyndighetenesIdentifikasjonsnummer_.

### Innflytting

**_InnflyttingTilNorge_**

Egenskapen _fraflyttingssted_ har endret navn til _fraflyttingsstedIUtlandet_.

### Kontaktopplysninger for dødsbo

**_KontaktadresseForDødsbo_**

Egenskapen _poststed_ er fjernet og egenskapene _poststedsnavn_ og _postnummer_ er kommet inn.

### Navn

Navnet til egenskapen _opprinneligNavn_ er byttet til _originaltNavn_ siden sistnevntes betydning er riktigere for det navnet som ble presenter ved ankomst til Norge.

### Personrelasjon

Personrelasjonsmodellen er fullstendig endret og spesialisert til fire områder: Foreldreansvar, Familierelasjon, Verge - inkludert representant for mindreårig asylsøker og Stadfestet fremtidsfullmakt. De to sistnevnte er fortsatt under stor endring.


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


