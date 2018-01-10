# API-dokumentasjon for FREG

Statisk generert API-dokumetansjon for FREG som publiseres under [https://github.com/Skatteetaten/folkeregisteret-api-dokumentasjon]. 

## Redaktører
Skal du være redaktør på siden og leser dette har du allerede ordnet med nødvendige tilganger. Som redaktør er det viktig å vite at det desverre ikke er noe tesmiljø for redaktører som kan vise deg hvordan endringen du gjør vil se ut på sidene i etterkant. Vær derfor varsom og be om hjelp fra en utviklingsressurs (Ørjan Markhus Lillevik eller Espen Myklevoll) dersom du skal gjøre endringer som du trenger å få testet før du legger dem ut.

### Endre på en side
1. Gå til [https://github.com/Skatteetaten/folkeregisteret-api-dokumentasjon/tree/master/src].
2. Logg inn (om du ikke allerede er logget inn).
3. Finn filen du ønsker å editere (du kan klikke den inn i mappene) og klikk på den.
4. Klikk på den lille blyanten. Du er nå i editeirngsmodus.
5. Rediger filen.
6. Klikk på "Commit changes". Endringen din vil da bli lagret. 
7. Det neste som skjer er at endringen plukkes opp av en jobb som kjører hvert 2. minutt, sidene bygges på nytt dersom det finnes endringer. Kontroller at endringen din ble riktig!

### Legge til en nyhet
1. Gå til [https://github.com/Skatteetaten/folkeregisteret-api-dokumentasjon/tree/master/src/driftsstatus-og-nyheter/nyheter].
2. Logg inn (om du ikke allerede er logget inn). 
3. Klikk på en eksisterende nyhet.
4. Klikk på knappen "Raw".
5. Kopier innholdet i filen.
6. Gå til [https://github.com/Skatteetaten/folkeregisteret-api-dokumentasjon/tree/master/src/driftsstatus-og-nyheter/nyheter]
7. Trykk på knappen "Create new file". 
8. Editer title, date og tekst.
9. Skriv et filnavn der det står "Name your file...". Filnavnet må være på formen år-måned-dag, mer presist yyyy-mm-dd.
10. Klikk på "Commit changes". Endringen din vil da bli lagret. 
11. Det neste som skjer er at endringen plukkes opp av en jobb som kjører hvert 2. minutt, sidene bygges på nytt dersom det finnes endringer. Kontroller at endringen din ble riktig!

### Legge til et driftsvarsel
Informasjon kommer...

## Utviklere

### Installer programvare
* Installer [node](https://nodejs.org/en/download/package-manager/)
* Installer [yarn](https://yarnpkg.com/lang/en/docs/install/)

### Bygg
```bash 
yarn install  #Installer avhengigheter i package.json``` 
yarn build    #Kjører byggescript build.js
```
### Kjør
```bash
yarn start #Starter applikcasjonen på http://localhost:4567. Se start.js
```
