---
title: Endringer av konsumenttjenester 16. oktober 2021 - 20210611
date: 2021-15-06T08:41:00+02

---

### Produksjonssetting
Endringene i dataene slik de er beskrevet nedenfor vil blir satt i produksjon 16. oktober 2021. Endringene som implementeres vil validere mot historiske persondokument.
Vi vil gjøre tilgjengelig den nye spesifikasjonen i Swaggerhub i god tid før 16 oktober 2021, den nye spesifikasjonen er kompatibel med eksisterende data og kan derfor benyttes før vi sender dataene i henhold til endringene beskrevet nedenfor.

Endringene slik de er beskrevet nedenfor vil være tilgjengelig i konsument playground 17. juni 2021. Det vil bli varslet som en nyhet.

### 1. preferertKontaktadresse
Entiteten PreferertKontaktadresse vil alltid være tom. Entiteten vil angis som utgått/deprecated. 
Feltet vil aldri inneholde noen verdi for gjeldende persondokument. Dersom man gjør oppslag mot et historisk persondokument fra før endringen, vil dokumentet kunne ha preferertKontaktadresse

### 2. Vergemål - omfangetErInnenPersonligOmråde
Attributtet omfangetErInnenPersonligOmråde som ligger under Entiteten VergeRepresentantEllerFullmektig er i dag påkrevd/required (omfangetErInnenPersonligOmråde Boolsk[1]) dette feltet endres til valgfritt/optional (omfangetErInnenPersonligOmråde Boolsk[0]). 
Vi vil altså etter endringen levere entiteten VergeRepresentantEllerFullmektig både med og uten innhold i attributtet omfangetErInnenPersonligOmråde

### 3. Opphold på svalbard - antallTidligereOpphold
Attributtet antallTidligereOpphold som ligger under Entiteten OppholdPåSvalbard er i dag påkrevd/required (antallTidligereOpphold  Heltall[1]) dette feltet endres til valgfritt/optional (antallTidligereOpphold Heltall [0]).
AntallTidligereOpphold vil angis som utgått/deprecated og , feltet vil aldri inneholde noen verdi for gjeldende persondokument. Dersom man gjør oppslag mot et historisk persondokument fra før endringen, vil dokumentet kunne ha antallTidligereOpphold.

### 4. API-spesifikasjon
Frem til nå har har Folkeregisteret dokumentert konsument API både med XSD og Open API Specification (swaggerhub). 
Vi ønsker på sikt fjerne tjenestene som returnerer XSD, og dermed kun tilby den dokumentasjonen som ligger i swaggerhub. 


Spørsmål sendes til: freg.produksjon@skatteetaten.no
Emne: "Endringer konsument-API 16. oktober 2021"
