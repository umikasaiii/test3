# Test v1.3.0 — eseguiti davvero (Chromium headless 360×740; nessun dispositivo reale)

| Test | Esito |
|---|---|
| `npm test` (engine + vNext + v5): 186 test | 186 superati |
| `node tests/v5/act.test.js` — 26 test: migrazione di salvataggi senza `act`, stati e tentativi, conferma manuale, collegamenti (con casi negativi), prerequisiti, suggerimenti (max 2, rinvio, completate), tre missioni/piano/carte/giornata invariati, livelli e scelta utente, hub argomento, CTA di fine lezione, Home, riquadri rimossi + sicurezza conservata, STRATEGOS a 5 stati, «Continua» | superati |
| `node tests/v5/e2e-v5.js` — browser: 11 materie con livelli richiudibili (1 aperto, tocco ≥44 px, no overflow), apertura/chiusura/persistenza, hub argomento, CTA, avvio → risoluzione reale di un esercizio Cyber → «Completata», riavvio, Home (≤2 proposte, rinvio), ripassi in scadenza con precedenza, conferma manuale, partita Opponent, Strategic Mastery «Continua», esportazione/importazione (anche backup senza `act`), avvisi di sicurezza, B2 non assegnato, render con CPU 4× (≤52 ms), nessun errore JS | superato |
| `tests/vnext/e2e-vnext.js` (aggiornato: nuovo passo «applicazione dichiarata») | superato |
| `tests/e2e.js`, `e2e-lang.js`, `e2e-backup.js`, `e2e-mental.js`, `vnext/perf-vnext.js` | superati |
| `tests/e2e-smoke.js` (tutte le viste, argomenti e laboratori) | superato |
| `validate-content`, `check-layer` | validi (avvisi preesistenti su esercizi ripetuti) |

Non verificato: Android/Safari reali, accessibilità con screen reader/tastiera, correttezza didattica dei collegamenti argomento→pratica (regole scritte a mano, non riviste da esperti).
