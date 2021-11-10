---
title: Utvidelse av D-nummerserien
---

**Behov for å utvide D-nummerserien**
Skatteetaten har i forbindelse med KVU for ny personidentifikator besluttet å øke kapasiteten på individnumrene for D-nummerpopulasjonen. Årsaken er at man ikke skal gå tom for D-numre i 2029. Serien vil holde fram til ny identifikator kommer i 2032, samt at færre personer vil få avvikende fødselsdato i D-nummeret med reell fødselsdato. For å øke kapasiteten vil Skatteetaten ved tildeling av nye D-numre benytte ubenyttede nummerserier fra perioden 1859-1899 og 1900-1939.

Tabellen under viser endringen:

| Første siffer i individnummer | Født | Individnummer | Kapasitet pr. dag | Kommentar |
| :--- | :--- | :--- | :--- | :--- |
|5 | 1858-1899 | 500-599 | 82 | Svært få d-numre – serien 600-999 flyttes til 1900-tallet. |
| 0,1 | 1900-1939 | 000-199 | 164 | Få d-numre, serien 200-499 flyttes til 2000-tallet. |
| 0,1,2,3,4,6,7,8,9 | 1940-1999 | 000-499, 600-999 | 738 | Fortsatt mange tildelinger – utvider med serien 600-999 fra 1800-tallet. |
| 2,3,4,5,6,7,8,9 | 2000-2039 | 200-999 | 656 | Mange tildelinger – utvider med serien 200-499 fra 1900-tallet. |

Konsumenter som benytter individnummeret til å utlede korrekt fødselsår for D-nummerpersoner må endre sine systemløsninger. 
Endringen er lagt ut i testmiljøet konsument-playground.
I playground finner du testpersoner med dnr som er generert med utvidelsen (NB! husk at det i testmiljøene er lagt til +80 på måned, det vil det ikke være i produksjon):

Født 1940:
* 41814061033 
* 41814065640
* 41814075603

Født 2000:
* 41810021827
* 41810025091
* 41810034422


Endringen ble lagt ut i konsumenttestmiljøet 20.oktober 2021, og er planlagt lagt ut i produksjon 16. november 2021.

