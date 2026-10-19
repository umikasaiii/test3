# Matrice delle funzionalità — vNext (audit iniziale M1, sul codice reale)

Legenda: **Presente** = già utilizzabile e testata · **Parziale** = esiste ma incompleta rispetto al mandato · **Mancante** · **vNext** = stato nel pacchetto separato.
Metodo: lettura dei sorgenti e interrogazione dei moduli con `tests/load.js` (conteggi reali), non da memoria.

| Area del mandato | Stato nell'app (index.html) | Dettaglio verificato | Piano vNext |
|---|---|---|---|
| Struttura e aggancio | Presente | `ST.content` (materia→stage→argomento), `ST.views`/`ST.after`/`ST.acts`, stato unico `A.state` salvato con `storage.save` (IndexedDB con fallback localStorage), migrazioni, backup | Il pacchetto usa solo queste API |
| Evidenze / transfer | Presente | `ST.transfer`: tipi recall/guided/auto/novel/delayed/external, verifiche a 7/30/90 giorni, nessuna padronanza automatica | Riusate con chiavi `sma:<dim>:<id>` |
| Simulatore multi-turno | **Presente** | `ST.sim`: 42 scenari a turni con risorse/vincoli/imprevisti, expectimax e rimpianto per decisione (giudizio sul processo) | Non duplicato: M3 aggiunge avversari adattivi e il confronto di strategie |
| Crisis management | Parziale | Fra i 42 scenari: blackout con 800 persone, squadra di sei persone, crisi diplomatica… ma senza valutazione dedicata del processo | M3: Crisis Lab con rubrica di processo |
| Strategic communication | Parziale | Un solo scenario di negoziazione a quattro punti | M3: laboratorio di ascolto/negoziazione etica |
| Forecasting & calibrazione | Parziale | Diario previsioni, risoluzione manuale, Brier solo su esiti risolti (`transfer.js`, tab «Previsioni»); manca curva di calibrazione e analisi dell'eccesso di sicurezza dedicata | M3: estensione senza duplicare i dati |
| Deduction Lab | **Mancante** | I «casi» esistenti sono casi sport (`ST.cases`), non investigativi | M3: motore con indizi, costi di verifica e soluzione verificabile da un risolutore |
| Adaptive Opponent | **Mancante** | Nessun avversario simulato con strategie differenziate | M3: macchine a stati/teoria dei giochi esplicite |
| STRATEGOS / missioni reali | Parziale | «Decisioni nel mondo reale» (`rwd`, non a tempo), diario decisionale, 8 principi di transfer (`kg`) | M4: protocollo a 7 passi, missioni con esito osservato e retrospettiva |
| Strategic Mastery Academy | **Mancante → vNext M1–M2** | — | Nucleo fatto (vedi CHANGELOG); moduli didattici in M2 |
| Laboratori facoltativi 15/20/30/45 | Presente | `optlab`: cognitive, sport, decision, transfer, cross; elenca come «non ancora disponibili» English Conversation, Japanese Immersion, Anime Listening, Combat Tactical Recognition | M5–M6 |
| English Conversation | Parziale | `ST.dialog`: 10 dialoghi ramificati con punteggio; manca produzione libera con correzione | M5 |
| Japanese Immersion | Parziale | `dialog-ja.js`, `jprod.js` (produzione), kanji N3; dialoghi giapponesi in numero limitato | M5 |
| Anime Listening | **Mancante** | Nessuna importazione di file locali, né controllo velocità (`playbackRate` assente), né elemento video | M5 |
| Audio e pronuncia | Parziale | TTS via `speechSynthesis` (non nel visualizzatore dell'artefatto), `MediaRecorder` per registrare, rilevamento del microfono; nessun feedback automatico di pronuncia (e non va simulato) | M5: confronto manuale, velocità, ripetizione |
| Combat Tactical Recognition | **Mancante** | Teoria judo (73 argomenti), motore motorio; nessun lab di riconoscimento tattico | M6 |
| Cybersecurity Practical Lab | Parziale | Banche (revisione codice, STRIDE, ATT&CK, scenari IR) e generatori; **nessun terminale simulato** né filesystem virtuale | M7 |
| Programming & AI Lab | **Mancante** | Nessun editor, nessuna esecuzione isolata (`Function(`/Worker assenti) | M7 (solo JavaScript isolato; Python dichiarato non disponibile senza runtime) |
| Formula 1 Strategy Lab | Parziale | `ST.f1`: 12 tipi generati (stint, pit strategy, undercut, fuel, ERS…); nessun simulatore di gara con meteo/Safety Car | M7 |
| Sport Science Advanced Lab | Parziale | `ST.sport`/`sport2`: calcoli applicati e casi; manca progettazione guidata di programmi | M7 |
| Cognitive Performance | Presente | 33 tipi mentali, calibrazione, bias, n-back | M8: collegamento all'Academy |
| Strategic Decision Making | Presente | 24 tipi in `ST.strategy` (payoff, EV, alberi, Grundy, LP…) | M8: collegamento, senza duplicare punteggi |
| Cross-Disciplinary | Parziale | Mix di laboratori e problemi di transfer | M8: missioni che richiedono più competenze |
| Backup export/import | Presente | `e2e-backup.js` | Il pacchetto salva in `state.sma` (incluso nel backup) |
| Offline | Presente | File unico + service worker (solo http/https) | Il pacchetto va aggiunto alla cache (vedi INTEGRATION) |
| Test | Presente | 70 test unitari, 4 e2e, smoke di tutte le viste | +8 test vNext + e2e vNext |
| Android / Safari reali | **Non testabile qui** | Solo Chromium headless | Limite dichiarato |
