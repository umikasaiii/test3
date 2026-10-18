# Registro di revisione affidabilità: campione di lezioni di allenamento mentale

Campione: 7 argomenti su 16, letti per intero (pagine, esercizi e test). Tutti i numeri svolti (calcolo, percentuali, divisibilità, prova del nove, frequenze naturali) sono stati ricontrollati a mano.

Classificazione: ERRORE CERTO / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

| id | Punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| mnt-chunking-e-numeri | p. «Chunking: raggruppare» | «FBI-CIA-NASA invece di 11 lettere sparse» | ERRORE CERTO | F-B-I-C-I-A-N-A-S-A sono 10 lettere (3+3+4). | corretto in «10 lettere» |
| mnt-bias-cognitivi-e-probabilita | p. «Applicare il metodo» | «Stesso filtro, tasso base molto più alto di prima» | ERRORE CERTO | Gli esempi hanno parametri diversi (sensibilità 95% e falsi positivi 5% contro 90% e 10%): non è lo stesso filtro. | corretto in «Qui il tasso base è molto più alto di prima…» |
| mnt-bias-cognitivi-e-probabilita | p. «Il test di riflessione cognitiva» | «Rallentare di 10 secondi è il metodo più efficace» | DUBBIO | Certezza eccessiva: l'efficacia comparativa non è sostenuta da una fonte citata. | nessuna modifica |
| mnt-allenare-bene-evidenze | p. «Pratica intercalata e spaziata» | «studio del 2014 … 72% … contro il 38%» | DA VERIFICARE CON FONTE ESTERNA | Dalla memoria, il 72% contro 38% su studenti di 7th grade con test dopo un intervallo sembra appartenere a Rohrer, Dedrick e Stershic (2015). L'anno potrebbe essere sbagliato. | nessuna modifica; verificare anno e autori |
| mnt-chunking-e-numeri | p. «Esempi svolti», test | «pizza» = 90 (p-zz) | DUBBIO | In italiano «zz» di pizza è un'affricata /ts/ (t+s, cioè 1-0), non una semplice «z» = 0. Dipende dalla convenzione adottata per l'italiano. | nessuna modifica |
| mnt-chunking-e-numeri | p. «Usarlo davvero» | «qualche ora di pratica» | DUBBIO | Stima senza fonte. | nessuna modifica |

Verificato senza rilievi (a memoria): Ebbinghaus (fine Ottocento), Miller «7±2» e Cowan 3-5 blocchi, Simons e colleghi 2016, dichiarazione del 2014 contro le promesse del brain training, Wilson e colleghi 2019 (regola dell'85%), Rohrer e colleghi 2020 (787 studenti), Melby-Lervåg, Redick e Hulme 2016 (87 pubblicazioni), Sala e Gobet 2016, Macnamara e colleghi 2014 (26% nei giochi), Ericsson e Harwell 2019, ACTIVE (25% di diagnosi di demenza in meno, velocità con booster).

## Esito

- Id modificati: `mnt-chunking-e-numeri` (mnt-l-memoria.js), `mnt-bias-cognitivi-e-probabilita` (mnt-l-calcolo.js).
- Id senza problemi: `mnt-memoria-come-funziona`, `mnt-sonno-esercizio-e-limiti`, `mnt-calcolo-trucchi-1`, `mnt-calcolo-trucchi-2`. `mnt-allenare-bene-evidenze` ha solo una voce da verificare.
- Limiti: revisione a memoria, senza fonti esterne né accesso a internet. Le citazioni scientifiche sono state controllate solo per plausibilità; i 9 argomenti non campionati non sono stati letti.

---

## Seconda revisione (6 argomenti)

Letti per intero (pagine, esercizi, test): `mnt-stima-fermi`, `mnt-logica-sillogismi`, `mnt-ragionamento-condizionale`, `mnt-strategia-giochi-nim-minimax`, `mnt-previsione-e-calibrazione`, `mnt-enigmi-strategie-di-soluzione`. Ricalcolati con Node o a mano tutti i numeri: stime e potenze di 10 (10 227, 1 976, 399, 330 km, 58 400 L, 2 740 anni), nim-sum (3-5-6, 1-4-5, 2-4-7, 3-4-5, 5-7, 7-9-12, 1-2-3, 6 XOR 3) e mosse vincenti, gioco di sottrazione, Brier (0,125; 0,09; 0,21; 0,16), frequenze naturali (9/108), odds (25% → 50%, 50% → 80%), SEND+MORE (9567 + 1085 = 10652, unicità di E = 5), sudoku 4×4 (griglia completa e candidati), sequenze, cavalieri e furfanti (tutti i casi). La mossa del tris è stata verificata con una ricerca minimax completa.

| id | punto | citazione breve | classificazione | motivo | azione |
|---|---|---|---|---|---|
| mnt-strategia-giochi-nim-minimax | pagina «Tris: forchette e minacce» (in `mnt-l-strategia.js`) | «Se lui gioca O sul bordo, tu giochi X in un altro angolo: ora hai due linee aperte, una forchetta.» | ERRORE CERTO | Dopo X angolo, O centro, X angolo opposto, un O sul bordo crea subito una minaccia (centro + bordo): X deve bloccarla e giocare un altro angolo fa perdere (minimax: -1 per X con ogni bordo; con il blocco forzato la partita è patta). La forchetta si ottiene quando O gioca in un ANGOLO: la sua minaccia sulla diagonale va bloccata nell'ultimo angolo e X ha tre angoli e due linee aperte. | corretto: ora il testo descrive il caso dell'angolo e precisa che con il bordo si va in parità |
| mnt-ragionamento-condizionale | pagina «Il compito di selezione di Wason» | «Molti scelgono E e 4 (cercano conferme)» | DA VERIFICARE CON FONTE ESTERNA | È l'esito classico riportato nella letteratura (E e 4 o solo E), ma la percentuale non è citata né dichiarata. Il testo dice «molti», quindi nessuna cifra errata. | nessuna modifica |
| mnt-previsione-e-calibrazione | pagina «Che cos'è la calibrazione» | «sei sicuro di sé più di quanto i fatti giustifichino» | DUBBIO | Solo forma («sicuro di te» sarebbe più naturale con «sei»). Nessun problema di contenuto. | nessuna modifica |

Verificato senza rilievi: regole del condizionale e tavola di verità, modus ponens/tollens, conversa e inversa, necessario/sufficiente, negazioni e De Morgan; sillogismi (Barbara, Celarent, Darii, Cesare, medio non distribuito, due premesse negative o particolari, validità contro verità); posizioni perdenti nel gioco di sottrazione e variante misère; minimax con quattro esempi; Brier e calibrazione; crittoaritmetica; sequenze.

**id modificati:** `mnt-strategia-giochi-nim-minimax` (esempio del tris, in `src/content/mnt-l-strategia.js`). Il layer inglese/giapponese (`layer-en-mnt.js`, `layer-ja-mnt.js`) non contiene l'esempio corretto, quindi nessun layer da aggiornare.

**id senza problemi:** `mnt-stima-fermi`, `mnt-logica-sillogismi`, `mnt-ragionamento-condizionale`, `mnt-previsione-e-calibrazione`, `mnt-enigmi-strategie-di-soluzione`.

**id ancora da leggere (3):** `mnt-palazzo-della-memoria`, `mnt-nomi-e-liste`, `mnt-concentrazione-e-attenzione`.

`node tools/validate-content.js`: «Contenuti validi»; `node --check src/content/mnt-l-strategia.js`: ok.
