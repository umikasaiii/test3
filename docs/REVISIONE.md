# Revisione di affidabilità e profondità delle lezioni

## Fase 1 — audit deterministico (fatto)
`node tools/audit-depth.js [materia]` misura per argomento: parole, pagine, esempi, elenchi, esercizi, tipi di esercizio, domande di verifica, opzioni duplicate.

Risultati (665 argomenti, non vengono contati le pillole):

| Materia | Parole medie per argomento | Argomenti con segnalazioni |
|---|---|---|
| Sport | 1 564 | 0 |
| Moto | 1 401 | 0 |
| F1 | 1 356 | 0 |
| Cultura | 1 335 | 34 su 116 (28 con pochi esempi) |
| Strategia | 1 230 | 8 su 51 (pochi esempi) |
| Cyber | 1 067 | 1 su 48 |
| Mentale | 774 | 7 su 16 |
| **Judo e lotta** | **489** | **65 su 65** (testo breve, poche pagine, pochi esempi) |
| Inglese / Giapponese | 462 / 338 | tutti: lezioni di lingua per natura brevi, con molte carte, ascolti ed esercizi (la soglia non si applica) |

Conclusione: la profondità strutturale è buona nelle materie tecniche; **il judo è la materia più superficiale** e la cultura generale ha molti argomenti senza esempi.

## Fase 2 — validità dei contenuti (da fare)
Non è automatizzabile del tutto. Metodo proposto, per materia:
1. Un agente rilegge un campione (20% degli argomenti, scelto per stadio) cercando affermazioni errate, obsolete o non verificabili, numeri incoerenti, esempi fuorvianti.
2. Ogni segnalazione è classificata: errore certo / dubbio / da verificare con fonte esterna.
3. Gli errori certi si correggono; i dubbi restano nel registro per la tua verifica con fonti esterne.
4. Nessuna correzione senza che il testo corretto passi la validazione e i test.
Limite: un agente che ricontrolla a memoria ha gli stessi limiti di chi ha scritto. Non sostituisce un revisore umano esperto.

## Fase 2 — esito (campione del ~20% per materia, fatta da agenti a memoria, senza fonti esterne)
| Materia | Letti per intero | Errori certi corretti | Registro |
|---|---|---|---|
| Sport | 14/69 | 2 (EPA/EPO; potenza critica 11–18%) | registro-revisione-sport.md |
| Moto | 15/72 | 3 (pressione gomme 1,95 bar; «quasi il doppio»; TT 1907 St John's) | registro-revisione-moto.md |
| Cultura | 26/116 | 2 refusi (tossine; si preme) | registro-revisione-cultura.md |
| Cyber | 12/48 | 0 | registro-revisione-cyber.md |
| F1 | 18/70 | 6 (conversione kW→hp, forza 19 200 N, pareggio 14,2 s, 161 hp, carburante 2014/2020, «Quattro» strumenti) | registro-revisione-f1.md |
| Strategia | 12/51 | 2 (quattro vie di patta; matto con Cavallo/pedone) | registro-revisione-strategia.md |
| Mentale | 7/16 | 2 (FBI-CIA-NASA 10 lettere; filtri diversi 95/5 vs 90/10) | registro-revisione-mentale.md |
| Judo | 22/65 | 0 | registro-revisione-judo.md |

Totale: 126 argomenti su ~500 letti per intero; 17 correzioni. Non rivisti: Inglese e Giapponese (lezioni di lingua; i contenuti nuovi N3/C1 restano senza revisione di madrelingua) e l'80% degli altri argomenti. I dubbi e le voci «da verificare con fonte esterna» restano nei registri per la tua verifica. Lacune di profondità del judo (regole e punteggi IJF, gradi, Gokyo, lavoro a terra, storia) segnalate, non riscritte.
