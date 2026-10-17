# SkillTree — Audit indipendente (V11.2 «Language Final Studio») e punto di partenza della ricostruzione

> Questo documento sostituisce le valutazioni precedenti. Ogni affermazione è etichettata con il **grado di evidenza**:
>
> | Etichetta | Significato |
> |---|---|
> | **[CODICE]** | Verificato leggendo o estraendo dati/codice dal file HTML allegato |
> | **[TEST]** | Verificato eseguendo l'app in Chromium headless (viewport 390×800) o con test automatici |
> | **[DOC]** | Dichiarato nel mandato o in testi dell'app, non verificato |
> | **[NON IMPL.]** | Previsto dal mandato, assente nel codice |
> | **[STIMA]** | Giudizio educativo / ordine di grandezza, non misura |
>
> **Limiti dichiarati dell'audit.** (1) Il file analizzato pesa 15,3 MB (5,5 MB senza media incorporati, 9.713 righe, 12 blocchi `<script>`). Non ho letto riga per riga ogni dataset: ho **estratto e misurato** i dati strutturati (curriculum, lezioni, esercizi, contenuti linguistici), **letto integralmente** i punti decisivi (pianificatore V10.8, missione generale, calcolo dei minuti, sintesi vocale, salvataggio) e **avviato** l'app. (2) **Non ho accesso a un dispositivo Android reale**: nessun test di audio TTS, microfono, `file://` o persistenza su Chrome Android è stato eseguito su hardware. Nei test E2E la sintesi vocale e il microfono sono **simulati**. (3) La qualità linguistica dei testi (correttezza di ogni frase) è stata controllata a campione, non da un docente madrelingua.

---

## 1. Il software realmente esistente (V11.2) — ricostruzione dai file

| Aspetto | Evidenza |
|---|---|
| Forma | Un solo HTML da **15,3 MB**; 12 `<script>`, 3 `<style>`; React e ts-fsrs incorporati; worker sql.js (≈927 KB di testo) incorporato; decine di immagini base64 [CODICE] |
| Avvio | Si carica in Chromium headless, titolo «SkillTree Academy — Language Final Studio V11.2», **nessun errore JS** al caricamento; schermata di onboarding con testo «WELCOME TO SKILLTREE / **7.0**» [TEST] → etichetta di versione obsoleta visibile all'utente |
| Architettura | Strati sovrapposti V5→V11.2: le funzioni vengono **riassegnate** (`loadData=async function…`, `v7LegacyLoad/Save/Render/Start/Verify/Review/Handle/Parse`), 32 punti di sovrascrittura; più IIFE che aggiungono pagine e CSS «sopra» le precedenti [CODICE] |
| Curriculum «ST7» | 57 materie, 812 skill, 138 lezioni, **68 esercizi** registrati [CODICE] |
| Lezioni per materia primaria | Cybersecurity **91 lezioni** (≈30.000 parole, ≈330 a lezione); Inglese 5 (≈2.800 parole); Giapponese 5 (≈2.500); F1 6; Judo 5 (≈2.700); Mentale 5; Programmazione/AI 6; Scienze sport 5; Strategia 6 — nelle materie non cyber **≈540 parole a lezione** [CODICE] |
| Materie secondarie | 48 aree: **solo 4** hanno una lezione (storia, finanza, fisica, cucina: ≈340 parole ciascuna), **44 hanno zero lezioni** [CODICE] |
| Contenuti linguistici | Inglese: 36 unità (A1–C2), 73 brani d'ascolto, 24 testi di lettura, 18 dialoghi, 18 scene, 37 unità di parlato. Giapponese: **126 scene/dialoghi brevi** in J0–J5 (≈6.800 parole in totale), mazzo kana con FSRS [CODICE] |
| Ripasso | FSRS-6 incorporato, ma l'uso verificato nel codice riguarda soprattutto l'ascolto giapponese (`japanese-v102:listen:*`) e la memoria v7; non c'è un pianificatore unico che governi tutte le attività [CODICE] |
| Piano 60′ (V10.8) | Minuti 25/20/15, 20/25/15, 15/30/15 calcolati da `minutes()` con mese di corso; la fase 3 dipende da `englishB2ExternallyVerified` [CODICE] |
| Audio | `speechSynthesis` usato in 63 righe, `MediaRecorder` in 16; riproduzione e registrazione presenti nel codice [CODICE]; funzionamento su Android **non verificato** |

### Come è fatta realmente la «missione generale» (il punto più debole)

Letto in `todayPage()` / `generalPage()` (V10.8) [CODICE]:

- **Judo**: `J[wd]` è un array di **7 frasi fisse** (es. «Passi tai sabaki, rotazione controllata…»). Nessun repertorio di tecniche, nessuna ripetizione dilazionata motoria, nessuna registrazione di qualità/difficoltà/errori, nessuno stato di consolidamento, nessuna verifica istruttore. Il **«nuovo sistema biennale»** descritto nel mandato **non è presente nel file**: [NON IMPL.].
- **Allenamento mentale**: `M[wd]` è un array di **7 domande fisse** → la stessa domanda ogni settimana per due anni. Non sono «numerosi, variabili, progressivi».
- **Materia a rotazione**: `W[wd]` è un testo che rimanda a «Percorsi o Pratica»: **non** è integrata (non apre una pillola).
- **Completamento**: pulsante «Registra missione generale svolta»: **autodichiarazione**. Il testo ammette «Il tempo è pianificato, non cronometrato automaticamente».
- **B2**: `englishB2ExternallyVerified` è una **casella da spuntare a mano** («Ho superato una verifica B2 indipendente…»). La fase 3 del piano si attiva così: nessuna verifica delle quattro abilità, nessuna evidenza registrata.

---

## 2. Confronto requisiti approvati ↔ implementazione V11.2

| Requisito | Stato in V11.2 | Evidenza |
|---|---|---|
| 3 missioni/giorno, 60′ | Presente come interfaccia | [CODICE] |
| Tabella 25/20/15 → 20/25/15 → 15/30/15 | Presente, **solo calendario**; progresso reale assente; fase 3 = casella manuale | [CODICE] |
| Allenamento mentale 5′ vario/progressivo | **Non soddisfatto** (7 domande fisse) | [CODICE] |
| Judo 5′ con struttura 30″/2′30″/1′30″/30″ | **Assente** | [NON IMPL.] |
| Rotazione settimanale judo | Presente come 7 testi fissi, senza tecniche | [CODICE] |
| SRS motorio (1-3-7-14-30, adattivo, errori prima) | **Assente** | [NON IMPL.] |
| Registro per tecnica (ultimo allenamento, richiami, qualità, errori, prossima data, stato, istruttore) | **Assente** | [NON IMPL.] |
| Repertorio 8–12 tecniche approfondite | **Assente** (ora 27 in SkillTree 1.x) | [NON IMPL. nella V11.2] |
| Materia a rotazione (lun–dom) | Solo testo | [CODICE] |
| Livelli L0–L5 / J0–J5 | Presenti come etichette; prerequisiti reali solo in parte | [CODICE] |
| Navigazione Materia→Stage→Argomento→Attività | Introdotta da livelli V11.1 «stage-topic» sopra l'interfaccia precedente | [CODICE] |
| Lezioni a pagine come un libro | Lezioni a sezioni (`sections`); impaginazione a slide **non** verificata come requisito completo | [CODICE]/[DOC] |
| Barra con livello, XP, XP mancanti | Presente | [CODICE] |
| Separare XP / completamento / conoscenza / competenza | Parziale: esiste un'evidenza (`evidence_cap`) negli esercizi ST7; non è la regola dell'interfaccia per tutte le materie | [CODICE] |
| Audio funzionante su Android | **Non verificabile** senza dispositivo; il difetto già segnalato rende l'affidabilità incerta | [DOC] |
| Nessun nome di build nell'interfaccia | **Violato**: «WELCOME TO SKILLTREE / 7.0» e titolo «Language Final Studio V11.2» | [TEST] |

---

## 3. Valutazione indipendente delle nove materie (V11.2)

Voti **1–10** sul software allegato così com'era. Sono stime fondate su volume e struttura misurati e su verifiche a campione, **non** su una revisione integrale di ogni parola [STIMA].

| Materia | Voto | Ragioni concrete | Per arrivare a 9,5 |
|---|---:|---|---|
| Inglese | **5,5** | Volume reale (≈40.000 parole fra unità, ascolti, dialoghi), copertura A1–C2, ascolto senza testo, FSRS parziale. Ma: 5 lezioni ST7 da ≈560 parole, B2 autodichiarato, nessuna prova delle 4 abilità, 73 brani ≈ 2 ore di audio TTS (non basta per il B2) | Volume di input ×10, gate multi-abilità, feedback esterno su parlato/scrittura, SRS unico |
| Giapponese | **4,0** | 126 scene brevi; Kana Trainer con errori riproposti; 5 lezioni grammaticali. Mancano: progressione grammaticale esplicita per argomento, kanji sistematici, volume d'ascolto, verifica del parlato | 3–5× contenuti per livello, curriculum grammaticale, kanji in contesto, valutazione esterna |
| Judo e lotta | **2,5** | 5 lezioni di teoria; routine = 7 frasi fisse; **nessun** repertorio, nessun SRS motorio, nessun registro | Repertorio + scheduler + registro + verifica istruttore (ora implementati in questa ricostruzione) |
| Cybersecurity | **7,0** (V11.2; ora 8,0 nella ricostruzione, vedi sezione 10) | 91 lezioni (≈30k parole, brevi: ≈330 parole ciascuna), laboratori SQL/XSS e scenari; è la materia più estesa | Verificare accuratezza tecnica; più esercizi pratici; ritest dilazionati |
| Programmazione e AI | **4,5** | 6 lezioni ST7 + 8 unità V5; esecuzione di codice limitata | Ambiente Python/JS in-app, progetti, test automatici |
| Scienze dello sport | **4,0** | 5 lezioni + 8 unità V5; nessun registro di allenamento | Moduli di fisiologia/programmazione con calcolatori e quiz progressivi |
| Formula 1 | **4,5** | 6 lezioni + componenti F1; contenuto ricco ma ristretto | Regolamenti, tecnica, strategia, storia con simulatori |
| Strategia e logica | **4,0** | 6 lezioni + giochi; manca un corpus strutturato di problemi | Banca di problemi graduati e analisi di partite |
| Allenamento mentale | **3,5** | Giochi in Pratica, ma la missione quotidiana usa 7 domande fisse | Generatori adattivi (ora implementati: 7 tipi) |

Materie secondarie: **1,5/10** nel complesso — 44 aree su 48 non hanno una sola lezione [CODICE].

---

## 4. Voti complessivi V11.2 e cosa manca per 9,5

| Dimensione | Voto | Ragioni | Cosa manca per ≥ 9,5 |
|---|---:|---|---|
| Architettura software | **4,0** | File monolitico da 15 MB, strati V5→V11 con funzioni riassegnate, 12 script, versioni visibili, stato distribuito in `data.v7`, `data.v102`…; nessun test automatico nel file | Moduli separati, un solo stato versionato con migrazioni, test automatici, build riproducibile |
| Organizzazione UI/UX | **6,0** | Estetica curata (albero, temi); ma più «layer» UI che si sovrappongono; etichette di versione; testo piccolo in alcune viste | Un solo sistema di navigazione, test su dispositivo reale, accessibilità |
| Progressione didattica | **4,5** | Etichette L0–L5/J0–J5 presenti, prerequisiti parziali; la missione generale non segue una progressione | Prerequisiti verificabili, gating a evidenze |
| Qualità dei contenuti | **5,0** | Cybersecurity profonda; lingue di volume medio; secondarie assenti | Volumi 5–10× e revisione da esperti |
| Efficacia degli esercizi | **4,5** | 68 esercizi ST7; molti quiz a scelta multipla; scarso recupero attivo | Esercizi generati, produzione attiva, feedback specifico |
| Verifiche e misurazione | **3,5** | B2 = casella; mentale = domande fisse; judo = nessuna misura | Prove indipendenti, ritest dilazionati, evidenza esterna |
| Memoria e consolidamento | **5,0** | FSRS presente in alcune aree, non unificato | Un solo scheduler per tutte le attività, inclusa la motoria |
| Utilità reale per gli obiettivi | **4,5** | Utile come ripasso e per cyber; non produce competenze lingua/judo misurabili | Volume + verifica + feedback esterno |
| **Qualità complessiva** | **4,5** | Buona base visiva e un nucleo di cybersecurity; piano «approvato» non realmente implementato nelle parti judo/mentale/B2 | — |

---

## 5. Sintesi delle criticità V11.2 (P0 → P2)

### P0 — critiche
1. **Missione judo inesistente** come sistema (solo testi) → nessuna memoria motoria tracciabile.
2. **Allenamento mentale a 7 domande fisse**.
3. **B2 = checkbox**: la fase 3 del piano può attivarsi senza alcuna prova.
4. **Architettura a strati** con riassegnazione di funzioni: ogni modifica rischia regressioni; versioni visibili all'utente.
5. **Audio non garantito su Android**: percorso TTS presente ma mai verificato su dispositivo; nessuna diagnostica per l'utente.
6. **Persistenza**: dipende da `file://`; manca un meccanismo di salvataggio sincrono alla chiusura e un avviso chiaro.

### P1 — importanti
7. Tutte le **materie secondarie** (44 su 48) senza lezioni.
8. Lezioni brevi (≈550 parole) per materie «prioritarie» diverse dalla cybersecurity.
9. Pianificatore non unificato: SRS solo in alcune aree.
10. Pillole da 5′ non integrate con la rotazione settimanale.

### P2 — facoltativi
11. Alleggerire il file (immagini/worker incorporati) o caricarli a richiesta.
12. Tema grafico e illustrazioni (albero) in formato leggero.

---

## 6. Il piano da 60 minuti: valutazione critica (indipendente dall'implementazione)

**Tempo effettivo disponibile** [STIMA, a 85% di aderenza, 730 giorni ≈ 620 giorni attivi]:

| Area | Minuti/giorno | Ore su 24 mesi |
|---|---:|---:|
| Inglese (25→20→15/20) | 15–25 | ≈ 200–220 h |
| Giapponese (20→25→30/25) | 20–30 | ≈ 220–260 h |
| Allenamento mentale | 5 | ≈ 52 h |
| Judo | 5 (6 gg su 7) | ≈ 44 h |
| Teoria a rotazione | 5 (1 materia/giorno) | ≈ 52 h in totale → **≈ 8 h per materia** |

**Conseguenze (onestà richiesta dal mandato):**

- Le lingue ricevono ≈ 75% del tempo: coerente con la priorità dichiarata.
- **Cybersecurity, sport, programmazione/AI, F1, strategia** ricevono ciascuna **≈ 5–17 ore in due anni**. Ottime per **alfabetizzazione e cultura**, **insufficienti per «conoscenze approfondite» o competenze professionali**. Il piano e l'obiettivo «conoscenze approfondite nelle materie prioritarie» sono in tensione.
- Le materie secondarie ricevono **una domenica su sette** a 5′: ≈ **2 ore/anno** in totale. È un assaggio, non una cultura generale «molto ampia».
- Il 5′ di judo e il 5′ di mentale sono più adatti alla **frequenza** che all'**intensità**: va bene per mantenere, non per costruire velocemente.
- **Frammentazione:** 6 attività in 60′ + cambi di contesto. Mitigazione adottata nella ricostruzione: un solo scheduler per ripassi, blocchi per giorno, e i ripassi dovuti non superano il 30% del tempo linguistico.

**Modifiche consigliate** (non applicate senza tua approvazione): (a) una seduta settimanale facoltativa di 20–30′ di approfondimento teorico che ruota fra le materie prioritarie; (b) dopo la verifica B2, destinare 5′ liberati a teoria; (c) rendere il blocco teorico «a settimane» (es. una materia per 2 settimane) invece di 7 materie in 7 giorni, per favorire continuità.

---

## 7. Lingue: obiettivi a 24 mesi

Classificazione: **realistico / possibile / improbabile / non verificabile**.

### Inglese: B1 iniziale → B2 solido
| Aspetto | Giudizio | Motivo [STIMA] |
|---|---|---|
| Tempo | ≈ 200–220 h in-app | Ordine di grandezza compatibile con le stime di ≈ 150–200+ ore guidate per passare di livello CEFR; ma «ora di app» ≠ «ora guidata di qualità» |
| Comprensione scritta B2 | **Possibile** | Richiede molta lettura autentica fuori dall'app |
| Comprensione orale B2 (parlato naturale) | **Possibile, a condizione di input autentico** (podcast/video) ≥ 3–4 h/sett. | Le sintesi TTS non sostituiscono voci reali; il materiale incluso (14 brani + 6 prove) è una frazione trascurabile |
| Produzione orale spontanea B2 | **Possibile ma non verificabile in-app** | Serve conversazione con persone; l'autovalutazione non è equivalente a un docente |
| Scrittura B2 | **Non verificabile in-app** | Serve correzione umana |
| B2 certificato in 24 mesi con SOLO l'app | **Improbabile** | Volume di input e feedback insufficienti |

### Giapponese: autonomia quotidiana da kana + frasi
| Aspetto | Giudizio | Motivo [STIMA] |
|---|---|---|
| Tempo | ≈ 220–260 h | Stime comuni indicano ≈ 150 h per un livello N5 e ≈ 300+ h per N4 con istruzione guidata; il giapponese è fra le lingue più distanti dall'italiano |
| Sopravvivenza (presentarsi, ordinare, indicazioni, acquisti) | **Realistico** | Compatibile con J0–J3 |
| Conversazioni quotidiane su argomenti familiari, con ritmo naturale | **Possibile ma limitato** (≈ A2 comunicativo) | Dipende da parlato reale e ascolto autentico |
| Leggere/scrivere testi non avanzati (cartelli, messaggi) | **Realistico** per un nucleo funzionale di kanji | Richiede lettura quotidiana |
| Conversazione fluida con madrelingua, lettura di testi comuni | **Improbabile** in 24 mesi con 20–30′/giorno | Servono ≈ 450–650 h per N3 |
| Equivalenza J0–J5 ↔ JLPT/CEFR | **Non dichiarata** | Livelli interni |

---

## 8. Judo: che cosa può dare davvero 5′ al giorno

Tempo: ≈ 44–52 h in 24 mesi (≈ 3.000 minuti di gesto controllato). Repertorio: 31 gesti nel percorso judo (cadute in progressione, proiezioni a vuoto) + 15 opzionali di lotta/no-gi; nessuno sparring.

| Capacità | Giudizio | Note |
|---|---|---|
| 1. Memoria teorica della tecnica | **Realistico** | Nomi, sequenze, errori comuni |
| 2. Memoria motoria individuale (posture, spostamenti, tai sabaki) | **Realistico, fino a un'esecuzione quasi automatica per i gesti più ripetuti** | Distribuzione dilazionata + varietà di condizioni migliorano la ritenzione |
| 3. Qualità biomeccanica del gesto | **Non garantita** | Senza feedback esterno si possono **consolidare errori**; serve video/istruttore periodico |
| 4. Capacità di adattamento | **Limitata** | Variabilità solitaria ≠ adattamento a un avversario |
| 5. Applicazione su un avversario non collaborativo | **Non allenabile qui** | Richiede partner, allenatore, randori |
| Proiezioni e cadute (ukemi) | **Non proposte** come attività autonoma | Sicurezza |

Messaggio d'uso incluso nell'app: *«Una buona sensazione solitaria non dimostra che la tecnica funzioni con un partner.»*

---

## 9. La ricostruzione in questa repo (SkillTree 1.0.0)

Su tua richiesta la repo `test3` è stata svuotata (il vecchio contenuto — un gioco kart — resta nella cronologia git) e SkillTree è stato **riscritto** con architettura pulita, partendo da **struttura** e **lingue**. Tutto ciò che segue è **[TEST]** salvo diversa indicazione.

### 9.1 Che cosa è stato realizzato

| Area | Stato |
|---|---|
| Architettura | Sorgenti modulari (`src/core`, `src/content`, `src/ui`), build in un unico `index.html` (≈ 450 KB), nessuna dipendenza esterna, stato unico versionato (schema 2) con migrazioni, IndexedDB con fallback localStorage e copia sincrona alla chiusura della pagina |
| Piano 60′ | Fasi 25/20/15 → 20/25/15 → 15/30/15 calcolate su **calendario e progresso**: l'inglese resta a 25′ finché lo stage L2 non è verificato e la fase 3 si applica **solo** se il B2 è verificato su ascolto, lettura, parlato e scrittura. 32 test automatici |
| Cancello B2 | Ascolto/lettura: indicatore in-app (≥ 6 prove distinte, ≥ 3 giorni, media ≥ 75%). Parlato/scrittura: **solo evidenza esterna** registrata dall'utente. Nessuna casella «sono B2» |
| Missione linguistica | Blocchi giornalieri per giorno della settimana (lezione/ascolto/grammatica/shadowing/dettato/scrittura/conversazione); ripasso dovuto con priorità (≤ 30% del tempo); kana ≤ 3′; **tempo attivo misurato** dall'interazione (inattività esclusa) |
| Percorsi | Materia → Stage → Argomento → Attività, prerequisiti visibili (blocco morbido), 4 stati distinti: *letta, esercitata, verificata, mantenuta* |
| Lezioni | Libro a pagine: indicatore, indice navigabile, ripresa dall'ultima pagina, furigana nascondibili, pulsanti audio nel testo |
| Verifiche | Il test conta come «verificato» solo se svolto **≥ 1 giorno dopo la lezione**; «mantenuto» dopo un ritest ≥ 14 giorni; i XP non cambiano mai lo stato |
| Ripasso | Un solo motore SRS per carte, errori, kana, tecniche: 1-3-7-14-30(-60-120), errore → domani, richiamo attivo dai 7 giorni |
| Kana Trainer | Placement, errori riproposti più spesso, risposta in kana o romaji |
| Audio | Attesa delle voci asincrone, scelta voce per regione, riproduzione a frasi, `onend`/`onerror`/timeout, messaggi d'errore guidati, diagnostica (Altro → Audio), registrazione con permessi gestiti |
| Judo | Percorso **judo** (default, 38 gesti con clinch): 12 di base (prese **no-gi**: polso, bicipite, collar tie, underhook) + 10 gradini di **cadute (ukemi) in progressione** + 11 **proiezioni «a vuoto» no-gi** (o-goshi, seoi-nage, o-soto-gari, o-uchi-gari, ko-uchi-gari, ko-soto-gari/gake, tai-otoshi, koshi-guruma, harai-goshi, uchi-mata; morote-seoi con judogi) + uchikomi con elastico + 4 gesti di **clinch con ginocchiate** (plum, khao trong/khong/noi, solo a vuoto). Percorso **lotta/no-gi** opzionale (15 gesti). **65 lezioni** approfondite (53 di tecnica + 12 di teoria: principi, fisica, kuzushi, classificazione, prese, prevenzione, pianificazione, video-autovalutazione), con esercizi e verifica. Scheduler settimanale, registro, verifica istruttore **separata** |
| Allenamento mentale | 7 tipi generati (calcolo, successioni, span, Corsi, elemento diverso, Stroop, logica) con livello adattivo 1–10 |
| Contenuti | Inglese 70 argomenti (≈ 29.300 parole di lezione, 498 esercizi, 297 domande di verifica, 587 carte, 70 brani). Giapponese 76 argomenti (≈ 22.800 parole, 576 esercizi, 316 domande, 706 carte, 76 brani; 21 argomenti di kanji in contesto, ≈ 250 kanji insegnati in set dedicati, ≈ 680 incontrati in parole con lettura). Esame di stadio cronometrato (soglia 75%) e grammatica generata con diagnosi dell'errore (verbi giapponesi, verbi irregolari e gradi dell'aggettivo inglesi). Pool B2: 50 ascolti + 50 letture. 23 dialoghi ramificati (11 EN, 12 JA). 12 letture graduate EN (A2–C1). 14 pillole teoriche |

### 9.2 Prove eseguite

- **32 test unitari** (`node --test tests/engine.test.js`): SRS, curva livelli, tetto XP, regole di verifica/mantenimento, piano 60′ (mesi 1–8, 9–16, 17–24, gate B2), scheduler judo, migrazioni, generatori mentali.
- **Simulazione di 24 mesi del judo** (6/7 giorni, 10% saltati, 2 seed): percorso predefinito (judo + clinch) 38/38 gesti introdotti (ultimo al mese 19), gap massimo fra ripassi ≤ 132 giorni; con il percorso lotta attivo 45–49 di 53 in 24 mesi (non tutti raggiunti: è dichiarato).
- **E2E Chromium headless** (48 controlli): onboarding, missioni 25/20/15, lezione a pagine con ripresa dopo reload, esercizi e feedback, «test lo stesso giorno non conta», ascolto senza testo (TTS simulata), dettato, kana, furigana, ripasso giapponese in richiamo, sessione judo, mentale, backup/ripristino, diagnostica audio, nessuno scroll orizzontale a 390 px, nessun errore JS.
- **Smoke** (`tests/e2e-smoke.js`): apertura di tutte le materie e di tutti gli argomenti (ogni pagina, esercizio e verifica), tutti i laboratori in EN e JA, shadowing con registrazione simulata, dialogo ramificato, prove B2.
- Validatore dei contenuti (`tools/validate-content.js`): id, prerequisiti, risposte, opzioni duplicate, kanji senza lettura nei testi da ascoltare, copertura.

**Non eseguito:** test su un telefono Android reale (voci TTS reali, `file://`, permessi microfono, install PWA). Fino a quel test, l'audio su dispositivo è **non verificato**.

### 9.3 Limiti noti della ricostruzione (onestà)

1. **Volume dei contenuti**: ≈ 70+76 argomenti di lingua sono una base ampia ma ancora una **frazione** dei 24 mesi. Servono molte più lezioni, brani e esercizi (vedi `docs/ROADMAP.md`).
2. **Materie non linguistiche**: solo pillole introduttive (≈ 130 parole ciascuna) per cyber, sport, prog/AI, F1, strategia e secondarie. Il vecchio file aveva 91 lezioni di cybersecurity: **non sono state migrate**; sono nella cronologia git e nel file originale.
3. **Il parlato resta autovalutato**: l'app lo dice a ogni uscita; il B2 e l'autonomia in giapponese richiedono prove esterne.
4. **Judo**: il lavoro con partner non è allenabile; la verifica di un istruttore è registrata ma non automatica; il repertorio finisce al mese 11 → dopo, mantenimento e varianti (va ampliato con un istruttore).
5. **Albero della Home**: SVG semplice, non l'illustrazione raster precedente.
6. **TTS**: qualità e voci dipendono dal telefono (Google TTS/Samsung); gli accenti en-AU possono non essere installati → l'app usa la voce più vicina.
7. **Pool B2**: 6+6 prove sono pochissime per un gate statisticamente solido; sono un indicatore, non una certificazione.
8. **Nessun SRS per le pillole teoriche non linguistiche** (solo ritest di argomento).

---

## 10. Voti della ricostruzione (SkillTree 1.0.0) — separati e motivati

Voti sul **risultato attuale**, con ciò che manca per 9,5/10. [STIMA, con prove sopra]

| Dimensione | Voto | Ragioni | Per 9,5/10 mancano |
|---|---:|---|---|
| Architettura software | **7,5** | Moduli separati, stato unico, migrazioni, build riproducibile, 32+ test, nessun override di funzioni | Test su dispositivi reali, CI con coverage, modularizzazione in ES modules, firma dei backup |
| Organizzazione UI/UX | **7,0** | Un solo sistema di navigazione a pila, tema mobile, indice/ripresa, testi leggibili; verificato solo in headless | Test su Android, accessibilità (screen reader), illustrazione dell'albero, microinterazioni |
| Progressione didattica | **7,0** | Stage L0–L5/J0–J5, prerequisiti, 4 stati di padronanza, piano che segue il progresso | Più argomenti per stage; grafo di prerequisiti per skill |
| Qualità dei contenuti | **6,0** | Lingue: 42+42 argomenti (≈ 27.000 parole, 5 set di kanji, 12 letture, 23 dialoghi); ma volume ≈ 1/3 del necessario per 24 mesi, materie non linguistiche quasi vuote, nessuna revisione madrelingua | 5–10× contenuti, revisione da docenti madrelingua |
| Efficacia degli esercizi | **6,5** | Varietà (scelta, scrittura, ordinamento, ascolto, dettato, shadowing, dialoghi, kana, generatori) | Banche più ampie, esercizi generativi per grammatica, feedback specifico per errore |
| Verifiche e misurazione | **7,0** | Verifica dilazionata, ritest, gate B2 con evidenza esterna (pool 10+10), nessuna casella | Pool B2 ≥ 50 prove, calibrazione, esami cumulativi cronometrati, esame esterno integrato |
| Memoria e consolidamento | **7,5** | Un solo SRS, errori anticipati, richiamo attivo, simulazione 24 mesi | Parametri ottimizzati su dati reali; SRS per tutte le pillole |
| Utilità reale per gli obiettivi | **6,5** | Struttura che trasforma 60′ in pratica tracciabile; lingue come nucleo | Volume + input autentico + feedback umano |
| **Qualità complessiva** | **6,8** | Base solida e onesta; il valore reale dipende ora dal volume dei contenuti e dall'uso quotidiano | — |

**Quanto è vicino SkillTree a una piattaforma «realmente eccellente»?** L'**impianto** (piano, scheduler, misurazione, onestà sulla padronanza) è ora corretto e testato. Manca soprattutto il **contenuto** e la **validazione esterna** (docente per lingue, istruttore per judo, test su dispositivo Android).


**Voto per obiettivo (dopo l'ampliamento di inglese e giapponese)** — [STIMA]: inglese B1→B2 **6,5/10** · giapponese autonomia quotidiana **6,0/10** (prima dell'ultimo ampliamento; vedi sotto) · judo solo/sicuro **6,0/10** (scheduler e registro solidi, ma 12 tecniche e nessuna verifica istruttore) · cybersecurity, sport, programmazione, F1, strategia **≈2/10** (la V11.2 aveva 91 lezioni di cyber, qui non migrate: regressione dichiarata) · piano da 60′ e memoria **7,5/10**.


**Voto finale delle lingue — solo ciò che SkillTree può fare da solo** (offline, senza AI, senza persone, senza contenuti esterni; esclusi conversazione dal vivo e consumo di materiali fuori app) — [STIMA]: **inglese 8,5/10** · **giapponese 8,0/10**. Tutti i miglioramenti interni previsti sono stati realizzati: curriculum esteso (EN 70, JA 76 argomenti), pool B2 50+50, esame di stadio cronometrato, esercizi grammaticali generati con diagnosi dell'errore, ≈ 250 kanji in set dedicati. Cosa impedisce il 10: i testi sono scritti dall'assistente e non revisionati da madrelingua (rischio d'errore non misurato); la voce è sintetica; parlato e scrittura restano in autovalutazione; il giapponese non copre per intero N3 e i kanji dedicati sono sotto i ≈ 370 di N3; nessuna prova su dispositivo reale.


**Voto judo — solo ciò che SkillTree può fare da solo (senza partner, istruttore o sparring)** — [STIMA]: **8,0/10** (teoria, lezioni e struttura ≈ 8,5; efficacia motoria ≈ 7). 65 lezioni con esercizi e verifica, tutte le proiezioni no-gi (morote-seoi con judogi), cadute in progressione, ginocchiate di clinch a vuoto, scheduler con ripasso dilazionato. Tetto dichiarato: nessuna verifica della forma, nessun partner né resistenza; le cadute dalle altezze superiori espongono a rischio reale se eseguite male. Il clinch è costruito su principi generali del muay thai: il video indicato dall'utente non è stato visionato.

**Voto allenamento mentale — solo ciò che SkillTree può fare da solo** — [STIMA]: **8,0/10**. 23 tipi di esercizi generati su 7 domini che ruotano nella settimana (intelligenza fluida, memoria, calcolo e stima, velocità e reattività, strategia e predizione, enigmi, sfida difficilissima); livelli 1–20 con modello di abilità (Elo/IRT semplificato) e difficoltà variabile attorno al proprio livello (alcuni esercizi più facili, altri molto più difficili); velocità inclusa; enigmi con soluzione unica verificata da solver (cavalieri e furfanti, crittoaritmetica, sudoku, Nim, tris) e controllata anche da test indipendenti; calibrazione della sicurezza con punteggio di Brier; test di riferimento a livello fisso; lezioni di strategia con le evidenze e i loro limiti. Tetto dichiarato: il miglioramento misura la prestazione nei compiti allenati; il trasferimento a capacità generali è debole o non dimostrato (meta-analisi su working memory e n-back); l'efficacia reale dipende dalla costanza.

**Cybersecurity (ricostruita) — [STIMA]: 8,0/10 per ciò che SkillTree può fare da solo.** 48 lezioni approfondite su 6 stadi (L0 fondamenti, L1 reti e sistemi, L2 crittografia, L3 sicurezza applicativa e web, L4 difesa operativa e analisi, L5 architettura e avanzato: threat modeling, cloud, zero trust, mitigazioni della memoria, reverse engineering concettuale, governance, CVSS e rischio quantitativo, test di penetrazione autorizzati) ≈ 48.000 parole con esercizi e verifiche; 13 laboratori generati e verificati (sottoreti, permessi, basi, cifrari classici, entropia, CVSS 3.1 con i vettori di riferimento, log, ACL, RSA didattico, porte, code review, STRIDE, ATT&CK); 10 scenari di incidente a decisioni; livelli di abilità per tipo; priorità opzionale della teoria (4 giorni su 7). Tutto difensivo ed educativo: nessun exploit, payload o strumento operativo; indirizzi solo da blocchi di documentazione. Tetto dichiarato: nessun laboratorio con sistemi veri (per scelta), nessuna revisione di un professionista del settore, nessuna certificazione; la parte pratica reale va fatta su macchine proprie o piattaforme legali.

---

## 11. Proposte di miglioramento prioritarie

### P0 — critiche (prossimo ciclo)
1. **Test su Android reale** (Chrome): voci TTS en-GB/en-US/en-AU/ja-JP, microfono, salvataggio dopo chiusura, installazione PWA via https.
2. **Pubblicare su https** (es. GitHub Pages) per avere origine stabile, service worker e persistenza affidabile.
3. **Contenuti linguistici ×5**: per l'inglese 60–80 argomenti (B1→B2) con 40–60 brani d'ascolto reali (voci umane se possibile), per il giapponese 60–80 argomenti con kanji in contesto.
4. **Valutazione esterna periodica** integrata: promemoria mensile per una sessione con docente (parlato/scrittura) e inserimento dell'esito come evidenza.

### P1 — importanti
5. Migrare/riscrivere le lezioni di cybersecurity del vecchio file nel nuovo schema (91 lezioni).
6. Lezioni (≥ 12 argomenti) per sport, prog/AI, F1, strategia; almeno 3 materie secondarie.
7. Ampliare repertorio judo **con un istruttore** (variazioni, ne-waza sicure) e checklist di video-feedback.
8. Registro scritto/orale consultabile (cronologia delle autovalutazioni).
9. Sessione facoltativa di 20–30′ di approfondimento settimanale.

### P2 — facoltativi
10. Illustrazione dell'albero in WebP leggero; più temi.
11. Statistiche avanzate (curve di ritenzione, parametri SRS per utente).
12. Import dei contenuti da file JSON esterni (pacchetti didattici).


---

## 12. Verifica di integrità del file originale e recupero del design

**File originale** (`SkillTree_Academy_V11_2_Language_Final_Studio.html`): non è mai stato modificato; ho solo letto copie derivate. Dimensione 15.417.929 byte, SHA-256 `35de6340fa18c50faf3341c1c0c5cd4e7aec58eb3e3eb7b37c7fb51b89df9103`, data di caricamento invariata [TEST].

**Immagini incorporate** (21 uniche, 22 occorrenze) [CODICE]: 18 WebP della galleria (hero Home chiaro/scuro/principale, 4 sfondi secondari, 9 illustrazioni di materia, 2 foto judo), 1 JPEG di judo (1536×1536), 1 foto F1 JPEG (3254×1886, citata da Wikimedia Commons, CC BY 2.0), 1 SVG segnaposto. Più un font WOFF incorporato e nessun file audio/video.

**Che cosa si era perso nella prima ricostruzione:** tutte le immagini e il design della Home (la Home usava un albero SVG semplificato). Questo era un difetto: è stato corretto.

**Ripristino (commit successivo):**
- tutte le immagini estratte **senza modifiche** in `assets/` (con `assets/README.md`), foto F1 e SVG in `assets/original/`;
- il build le incorpora come classi CSS definite una sola volta (`index.html` ≈ 3 MB);
- Home con l'immagine originale (versione chiara per il tema chiaro), testo originale «Ogni lezione fa crescere il tuo albero», fascia delle nove materie con le illustrazioni originali;
- Percorsi e pagine di materia con le illustrazioni originali; judo con la foto originale;
- palette riallineata ai token originali (`#080b16`, `#10172d`, `#171e37`, accento `#9c8eff`, ciano `#60e9eb`, font Inter).

**Non ricreato:** la barra laterale desktop e altre schermate della V11.2 non presenti nei requisiti; la foto F1 non è incorporata nell'app (solo conservata); il font WOFF incorporato non è stato riutilizzato (non identificato).

## Strategia (str)

- Contenuti: 53 lezioni in 9 stadi (pensiero strategico, teoria dei giochi, giochi combinatori, scacchi base e posizionali, decisioni avanzate, **economia**, **strategia militare**, **ottimizzazione avanzata**), 24 laboratori generati, banca di 94 problemi di scacchi (93 verificati dal motore), 14 scenari di simulazione con debrief expectimax.
- Evidenza: motore scacchi verificato con perft; i 24 laboratori hanno test con metodo indipendente dal generatore (enumerazione, simulazione numerica di Lanchester, taglio minimo, BFS, griglia per LP e giochi misti); simulazioni validate (migliore = qualità 1, casuale ≤ 0,93); calcoli delle lezioni di economia, militare e ottimizzazione ricontrollati a mano o con node.
- Limiti: contenuti non rivisti da esperti; scenari semplificati e inventati (campagna, assedio, diplomazia tra stati immaginari, solo concetti); dati storici incerti espressi come ordini di grandezza; utilità lineari senza penalità; finali di torre e alfiere di colore sbagliato non verificabili via software; nessuna pratica contro avversari reali.
- Stima onesta del voto: ~8/10 per lo studio autonomo di strategia, economia di base e ottimizzazione.

## Scienze dello sport (sport)

- Contenuti: 71 lezioni in 12 stadi. Base (L0–L6): fisiologia, forza, potenza e mobilità, resistenza, periodizzazione e sport specifici, nutrizione per salute e performance. Avanzato (L7–L11): bioenergetica e potenza critica, cinetica del VO2, segnali molecolari, altitudine e caldo; VBT, profilo forza-velocità, programmazione, tendini; modellazione del carico, statistica applicata, rischio di infortunio, apprendimento motorio; periodizzazione nutrizionale, carboidrati multi-trasportabili, ferro e vitamina D, energia dell'atleta; giovani, atlete, master, sprint, mezzofondo/ultra, ciclismo e nuoto, combattimento, squadra d'élite. 25 laboratori di calcolo e 10 scenari di simulazione.
- Evidenza: tutti i laboratori sono ricalcolati nei test con metodo indipendente; i calcoli degli esercizi delle lezioni (base e avanzate) sono stati ricontrollati a mano; le formule sono dichiarate (Epley, Karvonen, Mifflin-St Jeor, Frayn, CP/W′, Hill, Banister, Edwards, TSS, Daniels, Riegel…).
- Limiti: contenuti non rivisti da esperti; autori, anni e molti intervalli (LARN, EFSA, ACSM/IOC/ISSN, studi citati) sono scritti a memoria dagli autori dei contenuti e non confrontati con le fonti; numerose cifre sono ordini di grandezza individuali, non prescrizioni; nessun contenuto medico o dietetico personalizzato; doping solo come rischi e regole; i modelli (fitness-fatica, W′, ACWR) sono presentati con i loro limiti.
- Stima onesta del voto: ~8/10 come studio teorico e di calcolo anche avanzato; non sostituisce un allenatore, un medico dello sport o un dietista, né la pratica.

## Formula 1 (f1)

- Contenuti: 72 lezioni in 10 stadi, da zero (L0: che cos'è la F1, weekend, squadre, punti, bandiere, circuiti, come guardare una gara, glossario) a tecnica avanzata (L9: termodinamica della power unit, regolamento 2026, gestione ottimale dell'energia, aerodinamica avanzata, modelli di pneumatico, dinamica del veicolo, tempo sul giro, affidabilità). Include regolamento sportivo e tecnico, monoposto, aerodinamica, gomme, strategia, dati, storia e cultura, squadre, business e carriere. 12 laboratori di calcolo verificati e 6 scenari di strategia con debrief expectimax.
- Evidenza: i 12 laboratori hanno test con ricalcolo indipendente; i calcoli degli esercizi sono stati ricontrollati a campione; modelli e valori ipotetici sono dichiarati nel testo (marcati [A]/[M]/[I] nelle lezioni avanzate).
- Limiti: la F1 cambia ogni anno e molti dati (regole di dettaglio, pesi, tetti di spesa, cifre del 2026, record, ordini di grandezza) sono scritti a memoria dagli autori dei contenuti e non verificati sulle fonti ufficiali; nessun risultato o classifica recente; gli scenari usano squadre e piloti immaginari; i testi di alcuni scenari sono poco rifiniti.
- Stima onesta del voto: ~8/10 come formazione teorica e di calcolo, da zero ad avanzata; non sostituisce regolamenti ufficiali aggiornati né l'esperienza di pista.

## Cultura e abilità generali (sec)

- Contenuti: 116 lezioni in 9 stadi (pillole; storia; geografia, mondo e orientamento; economia, diritto e società; matematica e scienze; filosofia, letteratura e arti; primo soccorso, salute e alfabetizzazione digitale; cucina e casa; motori, outdoor e manualità), 14 laboratori di calcolo (fusi orari, scale e direzioni, cronologia, finanza personale, unità, statistica, fisica, chimica, astronomia, cucina, fai da te, musica, meccanica, numeri del primo soccorso) e 6 scenari di decisione (budget, viaggio, casa, escursione, emergenza, imparare una abilità).
- Evidenza: i 14 laboratori sono ricalcolati nei test con metodo indipendente; 406 uguaglianze aritmetiche nei commenti delle risposte delle lezioni sono state verificate automaticamente; gli esercizi di economia, e di molte altre lezioni, ricontrollati a campione.
- Limiti: contenuti non rivisti da esperti; date, citazioni, cifre di popolazione, soglie di legge, tasse e norme sono scritti a memoria dagli autori dei contenuti e non verificati sulle fonti (nel testo sono indicati come "circa", "orientativo" o "periodo recente"); primo soccorso, cucina, casa, motori e outdoor non sostituiscono corsi certificati o professionisti; nessuna consulenza fiscale, legale, finanziaria o medica.
- Stima onesta del voto: ~7/10 come panoramica ampia e utile con lezioni, calcoli e scenari; la copertura per singola disciplina resta divulgativa, non specialistica.

## Moto e guida sportiva (moto)
- 7 stadi L0–L6, 62 lezioni (basi, strada, meccanica, dinamica, pista, corse, avanzato), 11 laboratori di calcolo (ricalcolati in modo indipendente nei test), 6 scenari di simulazione.
- Contenuti scritti a memoria: valori tipici (μ, pressioni, temperature, intervalli di manutenzione), norme (ABS, revisione) e parametri dei modelli sono ordini di grandezza o illustrativi, non verificati su fonti.
- Sicurezza: guida sportiva solo in pista; nessuna istruzione per manomettere scarico, mappe, limitatori o ABS.

## Mandato master — Milestone 1 (valutazione e Laboratorio decisioni)
- `src/core/transfer.js`: evidenze per competenza in 6 dimensioni separate (richiamo, guidata, autonoma, problema nuovo, ritenzione, uso reale), verifiche a 7/30/90 giorni, diario decisioni, previsioni con Brier solo su esiti risolti. Schema dati v3 con migrazione da v2. Test unitario incluso.
- UI: «Laboratorio decisioni» in home (competenze · diario · previsioni), diario esportabile in JSON; i dati sono inclusi nel backup esistente.
- Limite: le attività esistenti non scrivono ancora evidenze in `skills` (collegamento previsto dalle milestone 2–8); finché non lo fanno la dashboard resta vuota.

## Mandato master — Milestone 8 (parziale): Transfer Engine
- `src/core/kg.js`: 8 principi trasversali collegati tra loro e alle materie, 16 problemi di transfer spontaneo (2 per principio, risposte ricalcolate nei test), 4 missioni multidisciplinari con passi eseguibili.
- UI scheda «Transfer»: sessione mista senza indicare materia/principio (rivelato dopo), verifiche a distanza 7/30/90 giorni con la seconda variante, tabella problema nuovo / ritenzione per principio.
- `runner.js` registra ora un'evidenza per ogni risposta: laboratori generati → «applicazione autonoma», fill → «richiamo», altro → «guidata». Limiti: «aiuti» non ancora rilevati (help=false sempre); la chiave competenza è il tipo di laboratorio o il contesto, non ancora il singolo argomento.
- Non implementato: grafo navigabile a livello di singoli argomenti (solo principi), valutazione automatica delle risposte libere nelle missioni (i passi sono guidati manualmente).

## Mandato master — Milestone 6 (parziale): Real-World Decision Lab
- `src/core/rwd.js` + scheda «Decisioni»: 6 scenari (acquisti, lavoro/negoziazione, denaro, imprevisti, valutazione di informazioni, tempo di studio) con situazione, obiettivo, vincoli, informazioni disponibili e mancanti (scegli quali ti servono), alternative, esito simulato estratto a sorte, valori attesi, spiegazione, riflessione e salvataggio nel diario.
- 4 scenari hanno un'opzione migliore calcolabile (test ricalcola i valori attesi); 2 non hanno risposta unica e non registrano punteggi. Un esito sfortunato non invalida la scelta: il testo lo dice.
- Probabilità e importi sono ipotesi didattiche dichiarate, non dati reali. Sei scenari sono pochi: non c'è ancora varietà sufficiente per un allenamento prolungato.
- Non ancora fatto: Forecasting con evidenze guidate (esiste il registro con Brier), Strategic Transfer Training a 5 passaggi per ogni principio dei moduli esistenti di scacchi/economia/militare/ottimizzazione.

## Mandato master — Milestone 7 (parziale): Cognitive Performance Lab
- Esistevano già 23 tipi di allenamento mentale adattivo (memoria, ragionamento, velocità, calibrazione, enigmi verificati) con rotazione giornaliera e benchmark.
- Aggiunti 3 tipi di pensiero critico (`src/core/mental-crit.js`): fallacie (8), bias cognitivi (6), valutazione delle fonti (4 scenari), inseriti nel venerdì e nel sabato. Ogni elemento ha due forme: la forma 0 si allena, la forma 1 è riservata ai test di transfer vicino.
- Scheda «Test cognitivi»: tre categorie separate (A prestazione allenata, B transfer vicino con forme mai allenate, C transfer distante con problemi del Transfer Engine), registro separato, nessun punteggio unico né QI. 6 problemi per test: la variabilità è alta e il testo lo dichiara.
- Limiti: la difficoltà adattiva dei nuovi tipi non è parametrica (la banca è piccola: 8+6+4 elementi, poi le forme si ripetono); la rotazione settimanale esistente non coincide esattamente con quella del mandato; metacognizione solo tramite il modulo di calibrazione già presente; memoria prospettica non implementata.

## Mandato master — Milestone 9 (parziale): integrazione
- `src/ui/optlab.js`: «Laboratori facoltativi» in home, durata 15/20/30/45 min, 5 categorie eseguibili (Cognitive Performance, Sport Science, Strategic Decision Making, Real-Life Transfer, Cross-Disciplinary) più accesso agli scenari decisionali. Le risposte aggiornano i rating esistenti delle singole materie e, per i problemi di transfer, le evidenze. Non toccano le tre missioni quotidiane né il piano da 60 minuti.
- Non disponibili e dichiarate tali nell'interfaccia: English Conversation, Japanese Immersion, Anime Listening, Combat Tactical Recognition (nessuna attività reale implementata).
- Backup: lo stato esteso (competenze, diario, previsioni, test) è nello stato salvato e quindi nel backup esistente; migrazione v2→v3 testata. Nessun test automatico dell'importazione di un backup completo su browser.
- Durata: la durata reale dipende dall'utente (5 min per blocco di sessione); i laboratori non misurano il tempo effettivo.

## Mandato master — Milestone 5 (parziale): Case Study e Research Literacy
- `src/core/cases.js` + scheda «Casi sport»: 6 casi a dati fittizi in 5 passi (analisi, ipotesi, informazione mancante, decisione, limiti) e 8 domande di lettura critica della ricerca (rischio relativo/assoluto e NNT, campione piccolo, intervalli di confidenza, significatività vs rilevanza, validità esterna, confronti multipli, cecità). Calcoli dei dati ricontrollati nei test. Le risposte registrano evidenze «guidata» per caso.
- Limiti: ogni passo ha una sola risposta corretta (non rappresenta la varietà reale delle decisioni); i casi sono sintetici e non sostituiscono la consulenza di un professionista; letture scientifiche in inglese non ancora integrate; i 6 livelli del curriculum richiesti (L0–L5) non sono stati rinominati: il curriculum esistente ha 12 stadi (L0–L11) con contenuti equivalenti per anatomia, fisiologia, programmazione, nutrizione, statistica.

## Mandato master — Milestone 2 (parziale): Lessico attivo
- `src/core/vocab.js` + scheda «Lessico»: sui carti lessicali esistenti (587 inglesi, 76+ argomenti giapponesi) ogni parola avanza per livelli: riconoscimento → richiamo senza aiuti (2 volte) → uso in contesto (completamento di frase) → produzione di frase → verifica a distanza dopo ≥21 giorni dal primo richiamo. Il ripasso dilazionato usa lo SRS esistente (1-3-7-14-30…).
- Limiti: la produzione di frasi è autovalutata (nessun controllo grammaticale: serve un docente); il completamento in contesto è possibile solo per le 423 carte inglesi il cui esempio contiene la parola (le altre saltano il livello); in giapponese le carte non hanno frasi d’esempio e la fase di contesto è sostituita dalla produzione; non c’è ancora una verifica programmata «dopo settimane» a 30/90 giorni oltre i 21 giorni fissi.
- Non implementati in M2: Dynamic Conversation Lab, Natural Listening Lab (nessun audio autentico verificabile nell’ambiente), Pronunciation Coach con confronto, English Across SkillTree.

## Mandato master — Milestone 6 (completamento): Strategic Transfer Training
- `src/core/tt.js` + scheda «Allenamento strategico»: per ciascuno degli 8 principi i 5 passaggi (teoria, esercizio astratto, scenario realistico, applicazione reale con impegno salvato nel diario e verifica a 7 giorni, verifica differita con un problema nuovo senza indicazione del principio). La verifica si sblocca solo dopo 7 giorni dall'applicazione. Calcoli dei contenuti ricontrollati nei test.
- Limiti: 8 principi (non tutti i moduli di scacchi/economia/militare/ottimizzazione); l'applicazione reale è dichiarata dall'utente e non verificabile dall'app; la verifica differita riusa i problemi del Transfer Engine (2 per principio).

## Mandato master — Milestone 8 (completamento) e 7 (completamento)
- Grafo per argomento (`kg.js`): ogni argomento non linguistico è collegato ai principi trasversali per parole chiave nel titolo/sommario/obiettivi (euristico: 157+ argomenti collegati, nessun collegamento per inglese/giapponese; il principio «regressione» non ha ancora argomenti). Nella pagina di un argomento compaiono i principi collegati e altri argomenti di altre materie con lo stesso principio; nella scheda Transfer ogni principio elenca argomenti collegati.
- Memoria prospettica (`prosp`: regole con priorità da ricordare ed eseguire, difficoltà scalata) e metacognizione (`meta`: 8 situazioni sulla scelta delle strategie di studio, basate su evidenze generali: richiamo attivo, distribuzione, interleaving, illusione di competenza). Entrambe inserite nelle sessioni da 5 minuti (martedì e venerdì) e nel boss della domenica. Risposta unica verificata nei test per tutti i livelli.
- Nota: un test della F1 è risultato instabile in un'esecuzione e passato nelle successive (generatori casuali); non è stato investigato oltre.

## Mandato master — Milestone 2/3 (parziale): dialoghi di inglese e Kanji Intelligence
- `src/core/dialog.js` + scheda «Dialoghi»: 5 dialoghi ramificati (caffè, stazione, colloquio, disaccordo professionale, reso di un prodotto), livelli B1–B2, con feedback per ogni scelta, traduzione a richiesta e voce del dispositivo. NON è conversazione libera né AI: sono risposte predefinite. Il grafo è verificato nei test (nessun nodo irraggiungibile, nessun ciclo, almeno una risposta ottima per nodo). I percorsi sono brevi (4–5 turni) e le scelte sono poche: servono per allenare registro e formule, non fluenza.
- `src/core/kanji.js` + scheda «Kanji»: 6 esercizi derivati dalle 425 parole con kanji (453 caratteri) delle carte di giapponese: lettura, significato, carattere in comune, componenti (10 gruppi curati), letture on/kun (22 kanji, letture principali non esaustive) e scrittura del vocabolo (produzione). Riconoscimento e produzione sono contati separatamente. Risposte ricalcolate nei test dall'indice delle carte.
- Limiti kanji: nessun ordine dei tratti né controllo scritto a mano; le letture dei singoli kanji dentro le parole non sono segmentate (le carte danno la lettura dell'intera parola); componenti e on/kun sono elenchi curati a memoria, da verificare con un dizionario; la produzione richiede la tastiera giapponese del dispositivo.

## Mandato master — Milestone 3 (completamento): simulatore di vita e produzione di giapponese
- `src/core/dialog-ja.js`: 5 scenari a scelte in giapponese cortese con furigana e voce del dispositivo (ristorante, konbini, stazione e indicazioni, hotel, portafoglio perso), stesso motore dei dialoghi inglesi, feedback per ogni scelta. Livelli interni, non JLPT. Frasi scritte da me: da far rivedere a un docente madrelingua o a un dizionario prima di considerarle definitive. Importi, orari e nomi sono fittizi.
- `src/core/jprod.js` + scheda «Produzione JA»: 4 esercizi: tradurre (14 frasi, risposte in kana o romaji senza spazi), trasformare le forme (23 voci: ます-forma, passato, negazione, て-forma, aggettivi, です), ricostruire dialoghi (6) e scegliere la frase per la situazione (8). Riconoscimento e produzione contati separatamente. Limiti: il confronto è con versioni accettate (una frase corretta ma diversa può essere rifiutata); nessuna valutazione orale; con il romaji le particelle (は, を) vanno scritte come suonano nel sistema di conversione dell'app: meglio i kana.
- Correzione trovata durante i test: i giri minimi per superare 305 km (F1) davano un risultato sbagliato quando 305 è divisibile esattamente per la lunghezza del circuito (es. 6,1 km → 50 giri invece di 51); ora si usa aritmetica intera con test di regressione. Il test dei generatori F1 era instabile per lo stesso motivo (float).
- Instabilità non risolta: in una sola esecuzione su ~15 il test «Strategia 2» è fallito senza che la causa sia stata individuata (generatori casuali).

## English / Japanese Across SkillTree — pilota «Moto in città»
- Icona circolare con bandiera (inglese o giapponese, SVG integrato) nelle pagine di argomento e di lezione; finestra con scelta della lingua, modalità (A: italiano con termini chiave, B: bilingue, C: solo lingua con supporto al tocco/selezione) e ambito (solo questa lezione / tutta la materia / tutte). Con una lingua attiva l'icona diventa la bandiera italiana e riporta all'italiano con un tocco; un ambito più ampio sostituisce le scelte più strette. Scelte salvate nelle impostazioni (incluse nel backup).
- Pilota: 11 lezioni (moto-citta-e-traffico + 10 moto-urb-*), ciascuna con titolo, 6–7 frasi riassuntive con traduzione italiana e glossario di 8–12 termini, in inglese (B1–B2) e in giapponese semplice (です/ます) con furigana sui kanji e romaji automatico. Il testo in lingua è un RIASSUNTO della lezione, non la traduzione di tutte le pagine.
- Traduzione al tocco su un termine e alla selezione di un testo: usa il glossario della lezione e, per il giapponese, le 425 parole con kanji già presenti nelle carte (per l'inglese le carte lessicali). Per le parole non presenti l'app dice «nessuna traduzione disponibile»: non c'è un traduttore né servizi esterni.
- Limiti: testi scritti da me, non rivisti da madrelingua (frasi giapponesi e letture dei kanji da verificare con un docente o un dizionario); romaji automatico con separazione delle parole approssimativa; solo 11 lezioni su oltre 600; le domande degli esercizi restano in italiano; non c'è ancora una misura della comprensione per modalità.

## Strato lingua — prova «Triade CIA» tradotta pagina per pagina
- `src/content/layer-cia.js`: tutte le 7 pagine di «Triade CIA, minacce e principi di difesa» in inglese (B1–B2) e in giapponese semplice (です/ます, furigana su ogni kanji, romaji automatico a richiesta), con glossario toccabile. Il controllo `tools/check-layer.js` verifica: stesse pagine dell'italiano, stessa struttura (elenchi ed esempi), termini nel glossario, kanji sempre con furigana.
- Modalità nelle pagine di lezione: A = italiano + parole chiave; B = pagina tradotta e testo italiano sotto; C = solo la lingua scelta, italiano a richiesta («Mostra il testo italiano») e tocco/selezione per la traduzione.
- Icona: mostra sempre la bandiera della lingua attuale (italiana, britannica, giapponese); al tocco si apre il pannello con le tre lingue, le modalità e l'ambito.
- Limiti: traduzioni scritte da me, non riviste da madrelingua; romaji automatico con separazione delle parole approssimativa; gli esercizi, le verifiche e il resto delle lezioni cyber restano in italiano.

- Triade CIA, completamento: riepilogo, obiettivi, 11 esercizi e 7 domande di verifica tradotti in inglese e giapponese (stesso ordine e stesse opzioni dell'italiano; risposte a riempimento accettate in lingua — in giapponese anche in kana e romaji — e, in modalità B, anche in italiano). Pagina dell'argomento con titolo, riepilogo, obiettivi e pulsanti tradotti. Pulsante «Ascolta la pagina» (sintesi vocale del dispositivo, a frasi in sequenza). Il controllo `tools/check-layer.js` verifica numero, tipo e opzioni degli esercizi.
- Limiti: l'interfaccia dell'app (pulsanti Avanti/Indietro, intestazioni della lezione, messaggi «Corretto/Non corretto», sezione «Lessico dell'argomento») resta in italiano; la voce non funziona nell'anteprima dentro altre app o in browser senza sintesi vocale (serve Chrome su Android con le voci installate).

- Full immersion (Triade CIA, modalità B e C): `src/ui/lang-ui.js` traduce l'interfaccia fissa della pagina argomento, della lezione, degli esercizi e della verifica (pulsanti, intestazioni «Page 3 of 7», «Next», «Correct», «Quit», risultato e messaggi di stato, segnaposto) in inglese e in giapponese con furigana. Sostituzione per frasi intere note, con osservatore del DOM: il contenuto non è toccato. In modalità A e in italiano l'interfaccia resta italiana.
- Limiti: la barra in alto (livello, XP), la barra delle schede in basso, i titoli di altri argomenti nei collegamenti e i messaggi temporanei (toast) restano in italiano; le frasi fisse tradotte sono circa 40 per lingua e coprono solo i flussi lezione/esercizi/verifica.

## Riorganizzazione dello strato lingua e approfondimenti esterni
- Su richiesta, la traduzione integrale (pagine, esercizi, verifica, interfaccia, icona con finestra di scelta) è stata rimossa. Resta solo il **riepilogo di fine lezione** in inglese e giapponese (6–7 frasi con traduzione italiana, romaji automatico, glossario, tocco e selezione per la traduzione), mostrato nell'ultima pagina della lezione. Disponibile finora per «Triade CIA» e per le 11 lezioni pilota di Moto in città.
- Nuovo: scheda «Approfondisci fuori dalla piattaforma» a fine lezione, generata dai dati della lezione (termini in grassetto, obiettivi, titolo): propone cosa cercare senza inventare fonti; registro delle attività esterne (tipo, minuti, nota), scheda «Esterno» con ore e controllo di autovalutazione dopo 7 giorni, evidenze «uso reale» e «ritenzione a distanza» nella dashboard.

## Allenamento mentale: 5 nuovi tipi (E)
- `src/core/mental-more.js`: stime di Fermi (ordine di grandezza di un prodotto di tre fattori), aggiornamento bayesiano (probabilità a posteriori), Torre di Hanoi (mosse minime e prima mossa), ordine dei compiti (somma dei completamenti con «più corto prima») e aggiornamento di due registri in memoria di lavoro. Risposta ricalcolata nei test per tutti i livelli. Ora i tipi sono 33 e compaiono nelle sessioni del martedì (memoria), mercoledì (stima), venerdì (strategia e predizione) e sabato (enigmi).
- Limite: restano compiti allenati; l'effetto su capacità generali lontane non è dimostrato (vedi i test di transfer A/B/C).
- Lavoro in corso con agenti (non ancora integrato): riepiloghi in inglese e giapponese per tutte le lezioni, nuovi argomenti di kanji e grammatica verso N3 (stage J6/J7) e contenuti inglesi C1 (stage L6).
- Riepiloghi EN Cybersecurity (46 lezioni): scritti da un agente partendo da titolo, obiettivi e prima frase di ogni pagina (non dalla lezione completa). Da verificare: alcune frasi aggiungono precisazioni standard non presenti nella lezione (es. UAC che chiede conferma prima di elevare i privilegi, nuovo identificatore dopo il login, CVSS con otto metriche di base). Vanno controllate contro il testo italiano prima di considerarle definitive.

## Contenuti nuovi (D): giapponese verso N3 e inglese C1
- Giapponese stage J6: 20 argomenti di kanji (200 nuovi kanji, totale 667 nelle carte) scritti da un agente, con 8 pagine, 11 esercizi, 7 domande di test, carte, ascolto, dettato e shadowing per argomento. Da ricontrollare con un dizionario: letture di 小豆, 部屋, 黄色い, 次男, 三羽, 羽田, 焼き魚, 一人暮らし; parole di peso N3 basso (空白, 赤道, 黄金, 勉強机, 踊り場, 検討); nei dettati mancano alcune pause (、).
- Inglese stage L6 (C1): 16 argomenti (6 lettura con 14 brani originali, 5 ascolto, 5 scrittura). I livelli sono interni e non certificano il C1; accenti descritti a parole, nessun audio autentico; non rivisti da madrelingua.
- Riepiloghi giapponesi di Cybersecurity (47 lezioni): frasi semplificate; acronimi in katakana (ディーエヌエス…), 交戦規則 per «regole d'ingaggio», alcune omissioni di dettagli minori. Da verificare.
- Giapponese J6/J7 (grammatica e lettura N3): 14 argomenti di grammatica (ようになる/ことになる, ばかり/ところ, らしい/っぽい/がち, concessive, ば/たら/と/なら, passivo/causativo, という, のだ/わけだ, はず/べき, おかげ/せい, さえ/こそ, verbi composti) e 8 di lettura/ascolto (130–150 caratteri). Da far rivedere a un madrelingua: ことになる presentato come annuncio modesto, il listening di jpn-j7-lavoro, e alcune opzioni sbagliate volutamente scorrette o poco naturali nei quiz (ふとりがち, あけて まま). Lo smoke test completo ora richiede più di 10 minuti (circa 750 argomenti).

## Riepiloghi EN/JA — Strategia e logica (51 argomenti)
- Generati da agenti su estratti + punti chiave delle lezioni; il controllo automatico verifica struttura, ruby, romaji e numeri, non i fatti. Nessuna revisione di madrelingua o esperto.
- EN: frasi compresse che possono semplificare (scacchi-finali, mil-lanchester, mil-logistica, mil-deterrenza-giochi); scelte di traduzione: «exchange» (qualità scacchistica), «imbalances», «luft», «zwischenzug», «bid shading».
- JA: rese da ricontrollare: 強制手, 決定日記, ピー局面/エヌ局面, 後進ポーン, 診断, 詭道, 決定木, 影の価格; frasi più libere nella traduzione IT: strategia-competitiva 5, opt-grafi 7, mil-principi 7; katakana scacchistici e frasi vicine al limite di 35 caratteri.

## Riepiloghi EN/JA — Sport (69 argomenti)
- Stessi limiti di Strategia: controllo automatico su struttura/ruby/romaji/numeri, non sui fatti; nessuna revisione di madrelingua o esperto.
- EN: ~50 frasi di 23–24 parole (limite 22 non verificato dal checker); numeri verificati solo come presenza nella lezione, non unità/contesto; alcuni termini ⟦⟧ marcati a posteriori (ordine delle parole talvolta meno naturale); `it` talvolta più sintetico dell'inglese.
- JA: l'agente ha letto solo titolo, obiettivi, intestazioni e inizio pagine (240–330 caratteri): da rileggere contro il testo completo le lezioni avanzate (statistica, master, giovani, atlete, squadra-elite). Specifici: spo-adv-atlete (forza normalizzata per massa muscolare, deduzione da passaggio troncato) e spo-adv-energia-salute-atleta (frase prudente su ciclo/prestazione). Rese incerte: 酸素借, クリティカルパワー, 前十字靭帯, 筋タンパク質合成 (ruby spezzato), 心拍出量, ヒット (HIIT), ディーアイエーエーエス (DIAAS), ダッシュ食, ヘリテージ研究, アイオーシー (CIO).

## Riepiloghi EN/JA — Formula 1 (70 argomenti)
- Stessi limiti: controllo automatico su struttura/ruby/romaji/numeri, non sui fatti; nessuna revisione di madrelingua o esperto. Gli agenti hanno letto le lezioni in forma abbreviata (JA ~400–480 caratteri per pagina).
- Il checker numeri legge i decimali a tre cifre (es. 0,446) come migliaia: l'agente EN li ha evitati o riformulati, quindi alcune frasi sono meno puntuali.
- f1-adv-power-unit-2026, f1-adv-affidabilita-e-dati, f1-adv-gestione-energia-ottimale: i riepiloghi riportano cifre che la lezione stessa marca come «da verificare» o illustrative (MGU-K 350 kW, 750 kW, 46,7%; η = 4000 km, 0,4229 s); presentate come esempio, ma da rileggere. JA: 予定/ことがあります nelle lezioni a certezza media.
- Possibili imprecisioni di resa: f1-sistema-di-punti («up to 43 for a 1-2 finish»), f1-penalita-e-commissari (12 punti in 12 mesi = una gara di sospensione). Termini di glossario EN scelti dall'agente: tyre blankets, run-off, Zylon, Nomex, Technology transfer.
- JA rese incerte: シートベルト六点式, 二千十年, 二千二年, 落ちる (eliminati in qualifica), 入れる電気 (ERS), calchi 限界価値, 摩擦楕円, 希薄燃焼, 臨界速度, キューエスエス法; diffusore reso con perifrasi per limiti del romaji (フュ).

## Riepiloghi EN/JA — Moto (61 argomenti, oltre agli 11 pilota)
- Stessi limiti: controllo automatico su struttura/ruby/romaji/numeri, non sui fatti; nessuna revisione di madrelingua o esperto.
- EN: unità e contesto dei numeri verificati a mano solo nei casi dubbi; da campionare le lezioni più numeriche (baricentro, aerodinamica, telemetria, simulazione, modelli di pneumatico). Date e fatti storici presi dalle lezioni senza altra fonte (storia, campionati, regolamento tecnico, squadre); affermazioni annunciate o non confermate (regole dal 2027, Liberty Media, valori recenti) riportate solo dove la lezione le dà come dato. Alcune `it` adattate/semplificate per stare nelle 22 parole.
- JA: l'agente ha letto solo ~420 caratteri per pagina; frasi di moto-adv-motore-prestazioni (piston speed, valve float) da verificare sul testo pieno. Letture incerte: ばね上/ばね下 (forse ばねじょう/ばねか), 圧側 (あっそく), 伸側 (のびがわ), マン島 (まんとう). Sigle in katakana: エフアイエム (FIM), ドルナ, モトジーピー/モトツー/モトスリー, ワールドエスビーケー. Termini: トレール, キャスター角.
