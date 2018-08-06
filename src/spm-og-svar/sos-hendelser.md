---
title: Hendelser
---

**Hvordan blir beskrivelsen på statushendelser?**

Prosjektet kommer med funksjonell beskrivelse av statushendelser.
I samtlige statushendelser vil det fremgå om hendelsen er en korrigering, annullering eller endring.

**Hvordan vil prosjektet sørge for en gradvis overgang fra gamle transaksjoner til nye hendelser, så man får testet at
man klarer å kombinere DSF og FREG som kilder?**

Dette er en problemstilling for de som mottar transaksjonsfil direkte fra DSF.
Informasjon om dette ivaretas gjennom direkte dialog med de konsumenter det gjelder.

**Hva er årsaken til at man har prinsippet om at en hendelse kun gjelder en person?**

Brukerne av folkeregisteropplysninger skal gjennom dette prinsippet slippe å tolke hvilke personer som påvirkes av hendelsen.
Ut fra hendelsene kan konsumentene ved behov tolke seg frem til en sammensatt hendelse.

**Hvilken informasjon vil distribueres på hendelseslister?**

Når prosjektet er ferdig, vil alle endringer (hendelser) i personopplysninger distribueres på hendelseslister.

**Forutsettes det at mottaker av hendelseslister med folkeregisteropplysninger har en egen kopi av registeret som
vedlikeholdes, eller kan en hendelse bare være et varsel eller en "trigger" for noe?**

Nei, det forutsettes ikke at man har en egen kopi. All informasjon kan hentes fra Freg gjennom tjenestene vi tilbyr.
Det skal både være mulig å holde et eget kunderegister synkronisert ved hjelp av hendelser og å la en hendelse utløse
(”trigge”) en ny sak i eget fagsystem. Det er opp til den enkelte konsument å benytte disse to alternativene basert på
rettigheter og eget behov.
