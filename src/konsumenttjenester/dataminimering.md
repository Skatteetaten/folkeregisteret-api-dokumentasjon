---
title: Dataminimering
---

Prinsippet om dataminimering er et grunnleggende personverprinsipp og innebærer å begrense mengden innsamlede personopplysninger det som er nødvendig for å realisere formålet.

## Dataminimering i oppslagstjenestene
Ved oppslag mot Folkeregisteret skal konsumentene kunne begrense oppslaget til de personopplysninger som er nødvendige i ulike brukstilfeller. Vi ønsker å legge tilrette for at konsumentene kan ta bevisste valg i forhold til databehov og vil derfor begrense opplysningene som utleveres dersom ønskede personopplysninger ikke er oppgitt.

Dersom part ikke oppgis vil retur innholde samme informasjon som finnes i "person-basis".

Parameteret *part* benyttes til å spesifisere hvilken informasjon, om en person, man ønsker å ha med i oppslaget. Som entitet kan man peke på hvilken som helst entitet (egenskapsnavn) på toppnivå i modellen for persondokument. I tillegg til å kunne be om eksplisitte entiteter er det lagt opp til samlende resultatsett i henhold til tabellen under:

Eksempelvis kan part benyttes slik: /v1/personer/12345612345?part=historikk&part=navn&part=bostedsadresse <br>  Dette vil returnere gjeldende og historiske oppføringer på entitentene navn og bostedsadresse. Med unntak av for rettighetspakken privat vil også identifikasjonsnummer returneres.  


| <part\> | Beskrivelse | RP Offentlig med hjemmel | RP Finans og begrenset | Offentlig uten hjemmel / Privat uten hjemmel | Presse/ Privat|
|---------|------------|------------|------------|------------|------------|
| person-basis | Standardsett av gjeldende og ikke-taushetsbelagte opplysninger: <ul><li>Identifikasjonsnummer</li><li>identitetsgrunnlag</li><li>status</li><li>dødsfall</li><li>sivilstand</li><li>fødsel</li><li>statsborgerskap</li><li>kjønn</li><li>navn</li><li>preferertKontaktadresse</li><li>bostedsadresse</li><li>oppholdsadresse</li><li>deltBosted</li><li>postadresse</li><li>postadresseIUtlandet</li><li>adressebeskyttelse</li><li>kontaktinformasjonForDødsbo</li></ul> | Ja | Ja | Ikke kontaktopplysninger før dødsbo |Ikke  kontaktopplysninger før dødsbo <br> Ikke identifikasjonsnummer | 
| historikk | Gir gjeldende og historiske verdier for alle personopplysningene som returneres. | Ja | Ja, for navn og adresser | Ja, for navn og adresser | Ja, for navn og adresser|
| identitetsgrunnlag-utvidet | Gir: <ul><li>falskIdentitet</li><li>legitimasjonsdokument</li><li>utenlandskPersonidentifikasjon</ul></li> | Ja | Ja | Nei | Nei|
| relasjon-utvidet | Gir: <ul><li>familierelasjon</li><li>foreldreansvar</li><li>vergemålEllerFremtidsfullmakt</ul></li> | Ja | Ja | Nei | Nei |
| <egenskapsnavn\> | I tillegg er det mulig å spesifisere hvert enkelt egenskapsnavn: <ul><li>utlendingsmyndighetenesIdentifikasjonsnummer</li><li>innflytting</li><li>utflytting</li><li>fødselINorge</li><li>opphold</li><li>forholdTilSametingetsValgmanntall</li><li>brukAvSamiskSpråk</ul></li> Det er også mulig å spesifisere enkeltopplysningene fra "person-basis", "identitetsgrunnlag-utvidet" og "relasjon-utvidet" hvis det er behov for å redusere resultatet nærmere. Merk at egenskapsnavnene må angis slik de er definert i den til enhver tid gjeldende skjemadefinisjonen for persondokumentet (eks: fødsel = foedsel). | Ja | Ja, men avhengig av at opplysningen er tilgjengelig i rettighetspakken. | Ja, men avhengig av at opplysningen er tilgjengelig i rettighetspakken. | Ja, men avhengig av at opplysningen er tilgjengelig i rettighetspakken.|

