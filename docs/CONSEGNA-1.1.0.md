# SkillTree Academy 1.1.0 — report di consegna del mandato master

File: `index.html` (singolo file, circa 11,6 MB, nessuna richiesta di rete). Branch `ccr-148e2016-2ddd9d`. Versione interna 1.1.0, schema dati 3.

## Implementato e raggiungibile dall'interfaccia
Home → «Laboratorio decisioni» (schede) e «Laboratori facoltativi»; pagina di ogni argomento → collegamenti trasversali.
- **Valutazione multidimensionale**: evidenze per competenza in 6 dimensioni separate (richiamo, guidata, autonoma, problema nuovo, ritenzione, uso reale), verifiche a 7/30/90 giorni calcolate, nessun punteggio unico. Il runner registra ogni risposta.
- **Diario delle decisioni** (esportabile in JSON) e **previsioni** con Brier solo su esiti risolti.
- **Transfer Engine**: 8 principi trasversali con 16 problemi senza indicazione della materia, 4 missioni multidisciplinari, **Allenamento strategico in 5 passaggi** con verifica differita bloccata per 7 giorni, **grafo per argomento** (collegamenti per parole chiave, euristico).
- **Real-World Decision Lab**: 6 scenari con esiti simulati e valori attesi (2 senza risposta unica).
- **Allenamento mentale**: pensiero critico (fallacie, bias, fonti), memoria prospettica, metacognizione; **test di transfer A/B/C** separati.
- **Scienze dello sport**: 6 casi in 5 passi e 8 domande di lettura critica della ricerca (curriculum esistente: 12 stadi).
- **Inglese**: Lessico attivo (riconoscimento → richiamo → contesto → produzione autovalutata → verifica a distanza), 5 dialoghi ramificati.
- **Giapponese**: Kanji Intelligence (6 esercizi su 425 parole / 453 kanji), produzione attiva (4 esercizi), simulatore di vita (5 scenari).
- **Laboratori facoltativi** da 15/20/30/45 minuti (5 categorie eseguibili), separati dal piano da 60 minuti.
- Contenuti già presenti conservati (moto con stadio L7 urbano, F1, cultura, strategia, ecc.).

## Parziale
- Dialoghi: percorsi brevi e risposte predefinite (non conversazione libera, non AI).
- Lessico: produzione di frasi autovalutata; verifica a distanza fissa a 21 giorni; il completamento in contesto copre 423 carte inglesi su 587.
- Kanji: componenti (10 gruppi) e letture on/kun (22 kanji) curate a memoria; nessun ordine dei tratti; letture dei singoli kanji dentro le parole non segmentate.
- Transfer: evidenze per tipo di laboratorio o contesto (non per singolo argomento); «aiuti» non rilevati; grafo euristico per parole chiave; il principio «regressione» non ha argomenti collegati.
- Strategia: 8 principi, non tutti i moduli esistenti.
- Mentale: banca pensiero critico piccola (8+6+4 elementi); difficoltà non parametrica per i nuovi tipi; rotazione settimanale diversa da quella del mandato.

## Non implementato
- Natural Listening Lab con accenti e registrazioni autentiche (non verificabili nell'ambiente; resta la sintesi vocale del dispositivo).
- Pronunciation Coach con confronto e punteggi (nessun sistema affidabile: non inventati).
- Anime Listening Lab (importazione di clip e sottotitoli).
- Judo e lotta libera: atlante avanzato, Tactical Recognition, analisi video (decisione dell'utente: non necessari).
- English Across SkillTree (da fare, richiesto come passo successivo).
- Dynamic Conversation Lab con AI locale.

## Test eseguiti (risultati reali)
- Unitari: 66 test, tutti superati (ultima esecuzione); ripetuti più volte. Due instabilità osservate: una era un vero bug dei giri minimi F1 (corretto, con test di regressione); una (test «Strategia 2») è fallita una volta su ~15 esecuzioni senza causa individuata.
- Validazione dei contenuti: «Contenuti validi» (restano avvisi preesistenti su argomenti di strategia, inglese e giapponese).
- Smoke (browser headless): tutte le viste, tutte le materie, ogni laboratorio e le nuove schede: superato.
- E2E completo (browser headless, TTS/microfono simulati): superato.
- Persistenza e backup (`tests/e2e-backup.js`): dati nuovi sopravvivono al ricaricamento, esporta→importa, migrazione di un backup schema 2, rifiuto di un backup più recente: superato.
- Prestazioni (Chromium headless): caricamento circa 0,7 s, apertura di una vista circa 5 ms, heap circa 45 MB, nessuna richiesta esterna.
- NON eseguiti: prova su Android reale, Chrome mobile con voce giapponese reale, microfono reale, installazione come PWA, test con file `.html` aperto da memoria interna del telefono.

## Uso e backup su Android
1. Copia `index.html` sul telefono e aprilo con Chrome (o pubblicalo su https per avere la persistenza più sicura).
2. Dati nel browser (IndexedDB o localStorage): non cancellare i dati del sito.
3. Backup: scheda «Altro» → esporta. Esporta anche il diario (scheda «Laboratorio decisioni» → Diario → Esporta). Fallo almeno una volta a settimana.
4. Un backup vecchio (schema 2) si importa e viene migrato; uno più recente dell'app viene rifiutato.
5. Per il giapponese verifica che il telefono abbia una voce ja-JP; per scrivere kanji serve la tastiera giapponese.
