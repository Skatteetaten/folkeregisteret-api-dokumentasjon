---
title: Endringer på tjenesten "Hent siste sekvensnummer"
date: 2022-04-06T14:30:00+02
---

29. april prodsettes en feilretting på tjenesten hendelser/siste/sekvensnummer. 

Hvis konsumentene av tjenesten angir i header at de ønsker svar i application/json returnerer idag tjenesten kun siste sekvensnummer som et tall. Dette tilfredstiller ikke json-format. 

Etter endringen vil tjenesten returnere svaret i korrekt format. For eksempel: 

{
  "sekvensnummer": 40241
}

Teknisk dokumentasjonen er oppdatert på [swaggerhub.](https://app.swaggerhub.com/home?owner=Skatteetaten_FREG) 

Hvis konsumenten oppgir at de ønsker responsen i plain text eller xml vil dette fungere som før. 
