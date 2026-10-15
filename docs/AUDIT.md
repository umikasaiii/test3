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
