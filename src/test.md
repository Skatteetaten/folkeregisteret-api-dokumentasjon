---
title: Test
---

# Test i modernisert Folkeregister
 
Eksterne som skal sende inn opplysninger til folkeregisteret (produsenter), og hente data fra Folkeregisteret skal gjennomføre test før oppstart i produksjon.
 
Det er etablert to testmiljø for test av integrasjon mot modernisert folkeregister:
 
* Produsenttest: Testmiljø for aktører som produserer opplysninger inn til Folkeregisteret. Produsentene sender inn meldinger og verifiserer tilbakemelding.
* Konsumenttest: Testmiljø for de som skal hente data fra Folkeregisteret.
 
Testmiljøene skal kun benyttes etter avtale med prosjektet
Frem til sommeren 2020 vil prosjektet fokusere på de som er produsenter, samt et utvalg av prioriterte konsumenter. 
 
# Testplanlegging
Prosjektet har egne oppstartsmøter der man enig om felles plan. Etter oppstartsmøtet har man egne møter med fokus på testplanlegging, der tema bl.a. er plan for testgjennomføringen, hvilke scenarier som bør testes og testdata. Hva som skal testes vil variere ut i fra funksjonelt område.  
I planleggingsmøtene må man også få opp en plan for hva som kan testes når, og man bør se på om det er områder med høy risiko, og som man bør ha ekstra fokus på.
 
# Krav til testmiljø
Eksterne som skal teste mot modernisert folkeregister må teste fra testmiljø som utelukkende har syntetiske testdata. De som per i dag ikke har syntetiske testmiljø må etablere dette.
De som er både produsenter og konsumenter anbefales å teste produsentrollen og konsumentrollen fra separate testmiljø.
 
# Oppkobling
Oppkobling mot testmiljøet krever virksomhetssertifikat. Les mer om sikkerhet og virksomhetssertifikater her: https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/sikkerhet/
Vi anbefaler etablere grensesnitt mot testmiljø og produksjonsmiljø tidlig. Erfaringer tilsier at dette ofte kan ta noe kalendertid å få på plass. 
Pass på at på at du har et gyldig testsertifikat, da testsertifikatene som regel har en dato for hvor lenge de er gyldige.
 
 
Les mer om test for konsumenter og produsenter på undersidene.
