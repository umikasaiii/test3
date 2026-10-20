# SkillTree Academy 1.3.0 — progressione guidata

Consegna del mandato «V5». Il lavoro è stato fatto sui **sorgenti del repository** (`src/`, che `tools/build.js` unisce in un unico `index.html`); il file «SkillTree Academy (5).html» citato nel mandato non era presente nel repository.

## Funzionalità implementate

| Area | Cosa fa davvero |
|---|---|
| **Livelli richiudibili** (tutte le materie, anche Judo, Allenamento mentale e Strategic Mastery) | Materia → Livello → Argomento → Attività. Ogni livello è un blocco `<details>` con progresso (completati/verificati/da ripassare). All'apertura si espande solo il livello consigliato; l'argomento successivo è marcato «Prossimo». La scelta manuale dell'utente si conserva (solo se diversa dal predefinito). |
| **Hub dell'argomento** | Sezioni richiudibili Lezioni · Esercizi · Laboratori · Simulazioni · Verifiche (+ Missione reale per Strategic Mastery). Le categorie vuote non compaiono. «Prossimo passo consigliato» in testa. Ripasso programmato e data del ritest in fondo. |
| **Contextual Practice Engine** (`src/core/activity.js`) | Collegamenti argomento → pratica basati su regole per argomento (≈ 340 argomenti su 755 hanno almeno una pratica pertinente; gli altri non ne mostrano, per scelta). 19 laboratori + 42 scenari a turni = 61 attività con competenza, durata, difficoltà e condizione di completamento. |
| **Pratica consigliata dopo la lezione** | A fine lezione compare «Pratica consigliata per consolidare questa lezione» con nome, competenza, durata, difficoltà, stato, «Inizia» e «Più tardi». Solo se la lezione è letta e i prerequisiti dell'argomento sono soddisfatti. |
| **Stati persistenti** | Da iniziare · In corso · Completata · Da ripassare, salvati in `state.act` (rientra in backup/esportazione/importazione). Per ogni attività: id stabile, stato, ultimo tentativo, tentativi, ultimo punteggio, migliore, data di completamento, elementi svolti, giorni di attività. |
| **Completamento automatico** | Registrato alla fine reale di: caso Deduction, partita Adaptive Opponent, scenario Crisis/Comunicazione, situazione Combat, esercizio Cyber, esercizio Programming (superati i test), piano/duello/safety car F1, studio Sport, scenario di conversazione EN/JA, sintesi Cross, revisione STRATEGOS, partita di simulazione a turni, sessione Cognitive/Decision/Sport. Forecasting: dopo almeno 8 intervalli. |
| **Conferma manuale** | Solo per le attività senza condizione verificabile (Listening Lab, Audio): pulsante «Segna come completata (conferma manuale)», con richiesta di conferma; il record riporta `manual: true`, nessun esito di prestazione. |
| **Completamento ≠ padronanza** | «Completata» significa lezione letta + esercizi svolti (o attività conclusa). La padronanza resta quella già esistente (Verificato / Mantenuto) e compare come tag separato; «Competenza non ancora verificata» finché manca. Un'attività conclusa con risultato sotto il criterio diventa «Da ripassare». |
| **Home — Pratica consigliata** | Sotto le tre missioni, al massimo due proposte (materia, nome, competenza, durata, motivazione, stato, Inizia, Più tardi). Priorità: lezioni recenti → risultati insufficienti → argomenti in consolidamento → simulazioni mai affrontate → consolidamento dopo ≥10 giorni. Non riproposte: completate con buon risultato, rinviate (3 giorni), con prerequisiti non soddisfatti. Nascosta se non c'è nulla. Strategic Mastery entra solo se già avviata. |
| **Ripassi in Home** | Riga «Ripassi in scadenza: N» nella card delle missioni. La regola esistente (precedenza fino al 30% del tempo nella missione di lingua) non è cambiata. |
| **Strategic Mastery** | «Continua Strategic Mastery» in testa al hub (verifica differita STRATEGOS in scadenza → prossimo modulo/esercizio → pratica collegata → verifica di livello), conteggio sedute degli ultimi 7 giorni (consigliate 2 + 1 facoltativa, 20–30 min). La verifica di livello (soglia 70%) è in fondo a ogni livello. |
| **STRATEGOS a cinque stati** | Missione assegnata → Pianificazione completata → **Applicazione dichiarata** (nuovo passo) → Esito registrato → Revisione completata. L'esito si registra solo dopo la dichiarazione di applicazione; «aperta» non conta come verificata. Le istanze precedenti restano valide (dichiarazione implicita). |
| **Multi-Move Simulator** | Corretto: il pulsante del laboratorio apriva una schermata vuota; ora apre l'elenco dei 42 scenari per materia. |

## Riquadri rimossi
Rimossi il rendering **e** i dati (`stageNote`) dei riquadri sui livelli didattici in Inglese, Giapponese, Judo e Strategic Mastery; il riquadro «indicatori in-app / B2» della schermata Prove B2; i riquadri su pronuncia/scrittura in Shadowing, Risposta spontanea e Scrittura; le frasi sul significato degli stage in Progresso e nell'hub Judo. **Le regole non sono cambiate**: completare le lezioni non assegna il B2 (verificato da test).

**Rimossi anche, su richiesta successiva dell'utente:** avvisi di sicurezza e di limite degli strumenti (gesti judo da verificare con un istruttore, stop in caso di dolore, ambiente isolato del Cyber Lab, Combat Lab, disclaimer Sport Lab e F1 Lab, limiti della Conversazione, nota del Lab Audio).

**Restano** soltanto avvisi tecnici operativi: file://, voci di sintesi mancanti, Python non disponibile, nota dinamica sui minuti del piano.

## Test eseguiti (reali)
Vedi `docs/v5/TEST-REPORT.md`.

## Limiti noti
- Il file «(5).html» non era nel repository: modifiche applicate ai sorgenti e `index.html` ricostruito.
- I collegamenti argomento→pratica sono regole scritte a mano e non riviste da un esperto: ≈ 340/755 argomenti hanno una pratica; non esiste ancora un laboratorio per JavaScript come argomento (non c'è una lezione JS): il Programming Lab è collegato solo ad algoritmi e sicurezza del codice.
- La durata di una pratica **non** è registrata (non misurabile in modo affidabile con l'attività reale); il campo esiste ma resta vuoto.
- Il completamento di Forecasting richiede ≥ 8 intervalli; i tentativi del Forecasting contano gli intervalli, non le sessioni.
- «Da ripassare» per un'attività = ultimo tentativo sotto il criterio dell'attività (soglie: 0,70 simulazioni a turni, 0,67 situazioni/conversazioni, 0,75 avversari, 0,60 sessioni libere). Non è uno spaziamento nel tempo.
- Non c'è un albero visivo delle competenze né una cronologia dei miglioramenti.
- Testato solo in Chromium (360×740, anche con CPU 4× più lenta); Android e Safari reali non provati. I componenti sono `<details>` nativi, quindi compatibili in linea di principio.
- Spazio: `index.html` ≈ 15,74 MB su 16 MB.
