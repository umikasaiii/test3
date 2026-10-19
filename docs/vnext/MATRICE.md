# Matrice delle funzionalità — vNext (stato finale di questa iterazione, M1–M9)

Legenda: **Implementato** = accessibile dall'interfaccia, usabile, con test automatici passati in questa sessione · **Parziale** = esiste ma con limiti dichiarati · **Non fatto**.
Tutti i conteggi vengono da `node tools/vnext-report.js` (dal codice, non scritti a mano). I sorgenti sono ora integrati in `src/vnext/` e nel build di `index.html`.

| Area del mandato | Stato | Dove | Limiti dichiarati |
|---|---|---|---|
| Strategic Mastery Academy: soggetto facoltativo, L0–L5, 4 pilastri, hub, profilo a 7 dimensioni | Implementato | `00-core.js` | Il profilo non è una misura psicometrica; nessun punteggio unico |
| 24 moduli didattici (4 pilastri × 6 livelli) con esercizi e test | Implementato | `10-…`, `11-…` | Scritti da agenti, verificati nei calcoli; nessuna revisione di esperti |
| Verifica per livello (soglia 70%) | Implementato | `93-levelcheck.js` | Misura conoscenza/comprensione, non applicazione |
| Deduction Lab (20 casi, risolutore bayesiano, costi di verifica, 4 casi aperti) | Implementato | `20-…`, `21-…`, `21b-…` | Le plausibilità degli indizi sono stime dell'autore, dichiarate |
| Multi-Move Strategy Simulator | Implementato (riuso) | `ST.sim` esistente: 42 scenari; `26-multimove.js` lo espone | Non duplicato; vNext aggiunge F1 e processo |
| Adaptive Opponent (5 strategie esplicite, ottimo per forza bruta) | Implementato | `22-opponent.js` | Un solo gioco (dilemma iterato); nessuna «IA» |
| Forecasting & Calibration (curva, Brier, intervalli all'80%) | Implementato | `23-forecast.js` | Esiti dei fatti reali sempre manuali; ≥10 previsioni per un giudizio |
| Crisis Management + Strategic Communication (processo vs esito, manipolazione mai premiata) | Implementato | `24-…`, `25-…` | Solo 4 scenari vNext (2+2); punteggi di processo scelti dall'autore |
| STRATEGOS (7 passi, 20 missioni, diario riusato, 4 classi di evidenza, verifiche 7/30/90, livello da evidenze) | Implementato | `30-…`, `31-…`, `31b-…` | L'app non verifica mai da sola un'abilità reale |
| English Conversation Lab (8 scenari A2–C1) | Implementato | `80-…`, `81-…` | Controlli automatici limitati; nessuna valutazione di pronuncia |
| Japanese Immersion Lab (8 scenari N5–N3, kana/kanji/romaji) | Implementato | `80-…`, `82-…` | Come sopra; letture e formule non riviste da madrelingua |
| Anime/Listening Lab (file locali, SRT/VTT/ASS, velocità, ripetizioni, shadowing, cloze, parole con SRS) | Implementato | `40-listening.js` | Nessun sottotitolo/media incluso; shadowing = confronto manuale |
| Audio e pronuncia | Parziale | `92-audio.js` | Diagnostica reale; nessun feedback automatico di pronuncia (non esiste) |
| Combat Tactical Recognition (8 situazioni L0–L5, schemi SVG, giudizio graduato) | Parziale | `50-…`, `51-…` | Solo teoria tattica; registro motorio separato; video locali con pause non implementati; scritto senza istruttore |
| Cybersecurity Practical Lab (terminale simulato, 10 esercizi) | Implementato | `60-…`, `61-…` | Solo bersagli sintetici e difesa; non è una shell reale |
| Programming & AI Lab (JS in Worker, 12 esercizi, 3 esperimenti) | Parziale | `62-…`, `63-…` | Solo JavaScript: Python NON disponibile (nessun runtime); niente debugger passo-passo generale |
| Formula 1 Strategy Lab (5 scenari, modello sintetico) | Implementato | `70-…`, `71-…` | Dati sintetici dichiarati; nessun dato reale/storico |
| Sport Science Advanced Lab (mesociclo, critica, formule, studi sintetici) | Implementato | `72-sportlab.js` | Non è prescrizione né consulenza medica |
| Cognitive Performance / Strategic Decision Making | Implementato (collegamento) | `91-links.js` | Punteggi restano nell'app esistente; nessuna duplicazione |
| Cross-Disciplinary Lab (6 missioni, parti verificate dai risultati) | Implementato | `90-cross.js` | Esercizio simulato |
| Salvataggio, esportazione, importazione | Implementato | `state.sma` nel backup esistente | Testato export→import in un secondo profilo |
| Offline | Parziale | vedi INTEGRATION | Il service worker va aggiornato dall'integratore |
| Test automatici | Implementato | `vnext/tests/` | Solo Chromium headless |
| Android reale, Safari/iOS reale, TTS nel visualizzatore | Non testabile qui | — | Dichiarato |
