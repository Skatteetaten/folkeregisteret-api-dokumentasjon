---
title: Nytt fødselsnummer 2032
---

# Hva er nytt? 
Nytt fødselsnummer er besluttet innført fra 01.01.2032 for å kunne tildele flere fødselsnumre pr. fødselsdato. Dette betyr at:
- Sifrene for kontrollberegning, kjønn og fødselsdato vil bli tolket på en ny måte
- For fødselsnumre og d-numre utstedt etter 1. januar 2032 endres kontrollberegningen. Det betyr at systemer som bruker kontrollberegning må kunne lese både dagens og ny kontrollberegning parallelt. Den nye kontrollberegningen vil ha flere gyldige verdier enn dagens kontrollberegning, som kun aksepterer sifferet 0. Ny kontrollberegning vil akseptere 0, 1, 2 og 3 som gyldige verdier.
- Opplysning om kjønn må hentes i et eget felt i Folkeregisteret. Nye fødselsnumre og d-numre blir kjønnsnøytrale, og systemene skal ikke lenger utlede kjønn fra numrene.
- For å være sikker på riktig fødselsdato, må også dette hentes fra eget felt i Folkeregisteret. Individnummeret vil ikke lenger angi århundre.
Ingen personer skifter fødselsnummer eller d-nummer. Ny beregning gjelder kun for nye fødselsnummer og d-nummer utstedt etter 1. januar 2032, men vil gjelde for alle nye tildelinger, dvs. også de som er født FØR 01.01.2032. Nytt fødselsnummer og d-nummer vil fremdeles ha elleve sifre. 
# Hvordan beregnes kontrollsifre etter 01.01.2032?
Dagens beregning bruker et predefinert sett av ulike sifre som ganges med hvert enkelt tall i fødselsdatoen og individnummeret (9 tall).<br />
Oppbygging av fødselsnummer<br />
Sifrene for k1 benyttes i denne rekkefølgen: 3, 7, 6, 1, 8, 9, 4, 5, 2<br />
Sifrene for k2 benyttes i denne rekkefølgen: 5, 4, 3, 2, 7, 6, 5, 4, 2<br />
## Beregning k1
Utregning gammel løsning: k1 = 11 - ((d1 x 3 + d2 x 7 +  m1 x 6 + m2 x 1 + å1 x 8 + å2 x 9 + i1 x 4 + i2 x 5 +  i3 x 2) MOD 11)\
Dette gir maksimalt 1 gyldig tall for k1. I ny beregning vil man derimot godta:\
k1 = {11,12,13,14} - ((d1 x 3 + d2 x 7 +  m1 x 3 + m2 x 7 + å1 x 3 + å2 x 7 + i1 x 4 + i2 x 5 +  i3 x 3) MOD 11)\
Det betyr at k1 kan være 4 ulike sifre. Som tidligere forkastes fødselsnummeret hvis kontrollsiffer  k1 blir 10.
## Beregning k2
k2 beregnes likt som før med kun 1 - ett - gyldig siffer:\
k2 = 11 - ((d1 x 5 + d2 x 4 +  m1 x 3 + m2 x 2 + å1 x 7 + å2 x 6 + i1 x 5 + i2 x 4 +  i3 x 3 + k1 x 2) MOD 11)\
På samme måte forkastes fødselsnummeret hvis k2 = 10.
# Eksempler


