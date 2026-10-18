# Registro di revisione affidabilità: campione di lezioni di inglese

Campione: 14 lezioni `eng-…` (su 86, circa 16%) più i 5 dialoghi `dl-en-4…8`, letti per intero (pagine, esempi, esercizi, verifica, ascolti, letture, dettati, shadowing, speaking; per i brani con voce, anche il testo). Focus: C1 (lettura, ascolto, scrittura), B2 grammatica, falsi amici, phrasal verbs, idiomi, registro.

Classificazione: ERRORE CERTO (corretto nel sorgente) / DUBBIO (naturalezza, preferenza, uso variabile: non toccato) / DA VERIFICARE CON MADRELINGUA O FONTE ESTERNA.

Lo script `tools/validate-content.js` dà «Contenuti validi» dopo le modifiche (restano solo gli avvisi preesistenti «test ripete un esercizio»).

## Lezioni esaminate

| Livello | id | File |
|---|---|---|
| L2 | eng-l2-false-friends-italian | en-z2.js |
| L2 | eng-l2-mixed-conditionals-wish | en-y.js |
| L3 | eng-l3-inversion-emphasis | en-z1.js |
| L3 | eng-l3-participle-clauses | en-x-l3.js |
| L4 | eng-l4-phrasal-2 | en-x-l4.js |
| L4 | eng-l4-idioms | en-x-l4.js |
| L4 | eng-l4-hypothetical | en-l4-l5.js |
| L5 | eng-l5-register | en-l4-l5.js |
| L6 (C1 lettura) | eng-l6-inference-stance | en-c1-lettura.js |
| L6 (C1 lettura) | eng-l6-tfng-paragraph-order | en-c1-lettura.js |
| L6 (C1 ascolto) | eng-l6-hedging-markers-listening | en-c1-ascolto.js |
| L6 (C1 ascolto) | eng-l6-connected-speech | en-c1-ascolto.js |
| L6 (C1 scrittura) | eng-l6-cohesion-register | en-c1-scrittura.js |
| L6 (C1 scrittura) | eng-l6-italian-errors-checklist | en-c1-scrittura.js |
| B1–B2 | dl-en-4, dl-en-5, dl-en-6, dl-en-7, dl-en-8 | dialogues.js |

## Segnalazioni

| id | Punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| eng-l4-idioms | Numero di idiomi dichiarato | «40 idiomi e collocazioni fisse» (summary), «- 40 idiomi comuni divisi per tema» (riepilogo), «Usare 20 idiomi» (obiettivi) | ERRORE CERTO | La lezione ne elenca 24 (8+8+8); tre numeri diversi (40/20/24) per la stessa cosa | Corretto in 24 nei tre punti (en-x-l4.js) |
| eng-l6-italian-errors-checklist | Testo dell'ascolto (modello) | «Three, depend from. It is depend on.» | ERRORE CERTO | «It is depend on» è agrammaticale, in una lezione sugli errori; voleva presentare la forma corretta | Sostituito con «We say depend on.» (en-c1-scrittura.js) |
| eng-l4-phrasal-2 | Conteggio | «30 phrasal verbs» | DUBBIO | I phrasal verbs distinti elencati sono circa 32 (compresa la ripetizione di *point out*): cifra approssimata, non un errore di contenuto | Nessuna |
| eng-l2-mixed-conditionals-wish | en-y.js | «If I ___ harder, I would have a better job now» (risposta: *had studied*; distrattore: *studied*) | DUBBIO | Con *now* il distrattore *studied* può leggersi come secondo condizionale abituale; la risposta voluta (misto) è comunque la più naturale | Nessuna (ambiguità lieve) |
| eng-l3-inversion-emphasis | en-z1.js | «Hardly had we checked in when we heard loud noise.» | DUBBIO | Senza articolo suona poco naturale (*a loud noise / loud noises*) | Nessuna |
| eng-l5-register / eng-l6-hedging-markers-listening | Concordanza di *data* | «The data seems to suggest» (L5) vs «the data seem to suggest» (L6) | DUBBIO | Entrambe le forme sono accettate nell'uso moderno; incoerenza tra lezioni | Nessuna |
| eng-l6-hedging-markers-listening | Affermazione generale | «un so-called detto con tono piatto e lento è quasi sempre ironico» | DUBBIO | «quasi sempre» è troppo categorico | Nessuna |
| eng-l6-hedging-markers-listening | Classificazione di *Mind you* | «Incidentally… / By the way… / Mind you…» tra le digressioni | DUBBIO | *Mind you* introduce una precisazione/concessione, non una digressione; il test lo definisce correttamente «add a qualification» | Nessuna |
| eng-l6-hedging-markers-listening | Coerenza del brano | «…and finally cost… Mind you, there is a cost, and that brings me to my third point.» | DUBBIO | Dopo il primo punto salta al terzo senza il secondo (salute); incoerenza del testo, non di lingua | Nessuna |
| eng-l4-idioms | Esempio guidato | «…had to bite the bullet and arrive at the last minute»; «L'ultimo ostacolo» per *the last straw* | DUBBIO | *Bite the bullet* poco motivato da «arrivare all'ultimo minuto»; resa italiana approssimata | Nessuna |
| eng-l2-false-friends-italian | en-z2.js | «at the university / at home → at university / at home» | DUBBIO | Vale per l'istituzione in senso generale (*at university*, BrE); *at the university* è corretto per un'università specifica | Nessuna |
| eng-l2-false-friends-italian | en-z2.js | «A person who is polite is… (risposta: polite)» | DUBBIO | Domanda quasi tautologica, poco discriminante, ma non errata | Nessuna |
| eng-l6-italian-errors-checklist | Correzione di *informations* | «Many informations → Much information» | DUBBIO | *Much* in frase affermativa è poco naturale (*a lot of information*) | Nessuna |
| eng-l6-cohesion-register | Affermazione generale | «tra i criteri più pesanti in qualsiasi griglia di scrittura» | DUBBIO | Dipende dalla griglia; l'avviso della lezione (griglia interna) è già presente | Nessuna |
| eng-l6-inference-stance | Risposte accettate | «She did not ___ the problem, but merely hinted at it» → state/say/mention | DUBBIO | *mention* non è perfettamente sinonimo di «dire direttamente»; altre risposte plausibili (*explain, address*) non accettate | Nessuna |
| eng-l6-connected-speech | Pronuncia di *can't* | «*can't* /kɑːnt/» | DA VERIFICARE CON MADRELINGUA O FONTE ESTERNA | Vale per l'inglese britannico; negli USA è /kænt/ (la lezione insegna comunque il contrasto con *can* debole) | Nessuna |

## Id modificati

- eng-l4-idioms (en-x-l4.js)
- eng-l6-italian-errors-checklist (en-c1-scrittura.js)

## Id senza problemi riscontrati

eng-l2-mixed-conditionals-wish (solo dubbio lieve), eng-l3-participle-clauses, eng-l4-hypothetical, eng-l6-inference-stance (solo dubbio lieve), eng-l6-tfng-paragraph-order, eng-l6-connected-speech (solo nota sulla varietà), eng-l6-cohesion-register (solo dubbio lieve), eng-l5-register (solo nota su *data*), eng-l3-inversion-emphasis (solo dubbio lieve), eng-l4-phrasal-2 (solo conteggio approssimato), dl-en-4, dl-en-5, dl-en-6, dl-en-7, dl-en-8.

## Controlli e limiti

- Controllo meccanico: `node tools/validate-content.js` («Contenuti validi») e `node --check` sui file toccati.
- Revisione a memoria: nessun madrelingua, nessun dizionario o fonte esterna consultati. Si segnala solo ciò che è verificabile con conoscenza solida della lingua (grafia, regole, quiz con chiave sbagliata, numeri interni incoerenti); i giudizi di naturalezza sono tutti DUBBIO.
- Controllati per intero gli esercizi e le verifiche di ciascuna lezione del campione (chiave della risposta, opzioni con più risposte corrette). Gli ascolti sintetici sono stati letti nel testo, non riascoltati.
- Non esaminate: le altre 72 lezioni inglesi, i file `layer-*.js` e i dialoghi di `src/core/dialog.js` (solo letti i 5 di `dialogues.js`).
- Il campione non permette di concludere sull'affidabilità dell'intero corso: l'assenza di errori in una lezione significa solo «nessun errore trovato a memoria».
