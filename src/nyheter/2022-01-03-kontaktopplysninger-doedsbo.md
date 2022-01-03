---
title: Endringer i Kontaktinformasjon for dødsbo – Gjelder privat virksomhet og presse
date: 2022-01-03T15:30:00+01
---

Når kontaktpersonen for et dødsbo er en privatperson, så har privat virksomhet og presse i likhet med de andre rettighetspakkene mottatt fødselsnummer/d-nummer. Siden privat virksomhet og presse ikke har adgang til å gjøre oppslag med fnr/d-nummer, har denne informasjonen ikke vært tilstrekkelig for konsumenter av disse rettighetspakkene.  

Vi har derfor gjort følgende endringer: 
<br/>Dersom entiteten ‘KontaktinformasjonForDoedsbo’ inneholder elementet ‘PersonSomKontakt’ vil dette elementet nå kun ha verdiene ‘foedselsdato’ og ‘personnavn’: 
<br/><xsd:element name="foedselsdato" type="Dato" minOccurs="0"/> 
<br/><xsd:element name="personnavn" type="Personnavn"/> 

‘foedselsEllerDNummer’ blir ikke lenger utlevert for rettighetspakkene privat virksomhet og presse. 

De andre rettighetspakkene er uendret. 

Endringene trer ikraft iløpet av onsdag 5 januar. Endringene medfører ingen hendelser, men ved oppslag på personer med kontaktinformasjon for dødsbo vil ny informasjon utleveres.  
