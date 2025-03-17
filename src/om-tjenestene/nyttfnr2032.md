---
title: Nytt fødselsnummer fra 2032
---

# Hva er nytt? 
Nytt fødselsnummer er besluttet innført fra 01.01.2032 for å kunne tildele flere fødselsnumre pr. fødselsdato. Dette betyr at:
- Sifrene for kontrollberegning, kjønn og fødselsdato vil bli tolket på en ny måte
- For fødselsnumre og d-numre utstedt etter 1. januar 2032 endres kontrollberegningen. Det betyr at systemer som bruker kontrollberegning må kunne lese både dagens og ny kontrollberegning parallelt. Den nye kontrollberegningen vil godta flere gyldige verdier for det første kontrollsifferet enn dagens kontrollberegning.  I dagens kontrollberegning må rest etter moduluskontrollen være lik 0. I ny kontrollberegning vil rest etter moduluskontrollen tillate 0, 1, 2 og 3 som gyldige verdier.
- Opplysning om kjønn må hentes i et eget felt i Folkeregisteret. Nye fødselsnumre og d-numre blir kjønnsnøytrale, og systemene skal ikke lenger utlede kjønn fra numrene.
- For å være sikker på riktig fødselsdato, må også dette hentes fra eget felt i Folkeregisteret. Individnummeret vil ikke lenger angi århundre.
Ingen personer skifter fødselsnummer eller d-nummer. Ny beregning gjelder kun for nye fødselsnummer og d-nummer utstedt etter 1. januar 2032, men vil gjelde for alle nye tildelinger, dvs. også de som er født FØR 01.01.2032. Nytt fødselsnummer og d-nummer vil fremdeles ha elleve sifre. 

# Hvordan beregnes kontrollsifre etter 01.01.2032?
Dagens beregning bruker et predefinert sett av ulike sifre som ganges med hvert enkelt tall i fødselsdatoen og individnummeret (9 tall).
## Oppbygging av fødselsnummer
Sifrene for k1 benyttes i denne rekkefølgen: 3, 7, 6, 1, 8, 9, 4, 5, 2

Sifrene for k2 benyttes i denne rekkefølgen: 5, 4, 3, 2, 7, 6, 5, 4, 3, 2

## Beregning k1
Utregning gammel løsning: k1 = 11 - ((d1 x 3 + d2 x 7 +  m1 x 6 + m2 x 1 + å1 x 8 + å2 x 9 + i1 x 4 + i2 x 5 +  i3 x 2) MOD 11)

Dette gir maksimalt 1 gyldig tall for k1. I ny beregning vil man derimot godta:

k1 = {11,12,13,14} - ((d1 x 3 + d2 x 7 +  m1 x 6 + m2 x 1 + å1 x 8 + å2 x 9 + i1 x 4 + i2 x 5 +  i3 x 2) MOD 11)
Hvis k1 > 11 så blir k1 = k1 - 11, dvs man må trekke fra 11 en gang til
Hvis k1 = 10 så forkastes k1
Hvis k1 < 10 så blir k1 = k1

Det betyr at k1 kan være 4 ulike sifre. Som tidligere forkastes fødselsnummeret hvis kontrollsiffer  k1 blir 10.

## Beregning k2
k2 beregnes likt som før med kun 1 - ett - gyldig siffer:

k2 = 11 - ((d1 x 5 + d2 x 4 +  m1 x 3 + m2 x 2 + å1 x 7 + å2 x 6 + i1 x 5 + i2 x 4 +  i3 x 3 + k1 x 2) MOD 11)

På samme måte forkastes fødselsnummeret hvis k2 = 10.

# Eksempler
## Person født 02.01.2032 får fødselsnummer
Fødselsdato='020132'

Individnummer = '999'  - Planen er å begynne på 999 og telle nedover det gjøres for serien 2000-2031 i dag.

k1 = 11 - ((0x3 + 2x7 + 0x6 + 1x1 + 3x8 + 2x9 + 9x4 + 9x5 + 9x2) MOD 11) = 11 - (156 MOD 11) = 11 - 2 = 9

k1 = 9

k2 = 11 - ((0x5 + 2x4 + 0x3 + 1x2 + 3x7 + 2x6 + 9x5 + 9x4 + 9x3 + 9x2) MOD 11= = 11 - (169 MOD 11) = 11 - 4 = 7

k2 = 7

Fødselsnummer = '02013299997'

Det er ikke besluttet om neste person vil få '02013299903' dvs. neste ledige nummer med '999' som individsiffer eller neste blir '02013299806' med '998' som individsiffer før man begynner overfra igjen. Det antas at hvert indivisiffer vil "fylles opp" med alle mulige k1 før man går til neste individsiffer.

## Person 1 født 30.10.1982 får fødselsnummer i 2032
Fødselsdato = '301082'

Sist brukte individnummer på den datoen er 268. Datoen har også individsifre i serien 750-500 for de som er født i 1882. Men som nevnet over er planen å begynne ny tildeling på '999'

Individsiffer = '999'

k1 = 11 - ((3x3 + 0x7 + 1x6 + 0x1 + 8x8 + 2x9 + 9x4 + 9x5 + 9x2) MOD 11) = 11 - (196 MOD 11) = 11 - 9 = 2

k1 = 2

k2 = 0  (viser ikke utregning her)

Fødselsnummer = '30108299920'

## Person 2 født 30.10.1982 får fødselsnummer i 2032
Fødselsdato = '301082'

Sist brukte individnummer etter ny utregning på den datoen er 999 (det over), men bare ett nummer er brukt på det individsifferet. Det vil da være 2 eller 3 til. 
Prøver med rest = 1.

Individsiffer = '999'

k1 = 12 - ((3x3 + 0x7 + 1x6 + 0x1 + 8x8 + 2x9 + 9x4 + 9x5 + 9x2) MOD 11) = 12 - (196 MOD 11) = 12 - 9 = 3

k1 = 3

k2 = 9  (viser ikke utregning her)

Fødselsnummer = '30108299939'

