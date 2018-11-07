---
title: Test og testdata
---

**Konsumentene får først vite om endringer i tjenestene når ting er produksjonssatt. Kan prosjektet tilgjengeliggjøre
endringer i testmiljøet før man prodsetter, slik at konsumentene kan verifisere endringene?**

Prosjektet jobber smidig og produksjonssetter fortløpende. 

Produsent-test: Ferdig funksjonalitet legges løpende ut i produksjon og i produsenttestmiljøet. Ved større releaser legges dette ut feature-togglet i produksjon, og skrus på i produsent-test. Deretter gjennomfører produsenten en testperiode forut for oppstart i produksjon.

Konsument-test: Ferdig funksjonalitet og nye hendelser legges ut samtidig i test og produksjon. Det er ikke lagt opp til en testperiode i konsumenttestmiljøet før produksjonssetting. Konsumenten må før de tar i bruk en ny hendelse i produksjon gjennomføre nødvendige tester i konsument-test. 


**Vil prosjektet tilby direktemottakere testmiljø og testdata som kan gjenspeile at de i en periode vil lese
personoppdateringer fra både DSF og FREG?**

Dette er etablert i produsenttestmiljøet, og vil kunne opprettholdes og brukes av direktemottakerne. Men det er viktig at testdata fra produsenttestmiljøet ikke spres fra dette miljøet. Testdata i miljøet styret av innsendinger fra produsentene, og prosjektet kan ikke garantere for kvaliteten på testdataene. Det kan unntaksvis være innslag av skarpe data.
