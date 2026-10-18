# Registro di revisione affidabilità: campione di lezioni di Strategia e logica

Campione: 12 argomenti su 51 (circa 24%), letti per intero (pagine, esercizi e test), con ricalcolo via Node di giochi in forma normale (equilibri di Nash), Nim e numeri di Grundy, probabilità, Kelly, Bayes, Lanchester e programmazione lineare, e verifica a mano delle posizioni scacchistiche.

Classificazione: ERRORE CERTO (verificabile con conoscenza solida o con il calcolo) / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

## Argomenti esaminati

| Stadio | id | File |
|---|---|---|
| L1 | str-matrici-di-payoff-e-nash | str-l-pensiero.js |
| L2 | str-probabilita-nei-giochi | str-l-giochi.js |
| L2 | str-nim-e-sprague-grundy | str-l-giochi.js |
| L3 | str-scacchi-regole-e-valore-dei-pezzi | str-l-scacchi1.js |
| L3 | str-scacchi-matti-elementari | str-l-scacchi1.js |
| L3 | str-scacchi-finali-essenziali | str-l-scacchi1.js |
| L5 | str-bayes-nelle-decisioni | str-l-decisioni.js |
| L5 | str-kelly-e-gestione-del-rischio | str-l-decisioni.js |
| L7 | str-mil-sun-tzu | str-l-militare.js |
| L7 | str-mil-clausewitz | str-l-militare.js |
| L7 | str-mil-lanchester | str-l-militare.js |
| L8 | str-opt-programmazione-lineare | str-l-ottimizzazione.js |

## Segnalazioni

| id | Pagina / punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| str-scacchi-regole-e-valore-dei-pezzi | p. 6 «Le altre patte» | «La patta può arrivare per cinque vie, oltre allo stallo.» | ERRORE CERTO | L’elenco contiene quattro voci (accordo, triplice ripetizione, cinquanta mosse, materiale insufficiente). | corretto («quattro vie») |
| str-scacchi-matti-elementari | p. 6 «Il matto soffocato» | «Il Cavallo è l’unico pezzo che dà scacco senza poter essere intercettato.» | ERRORE CERTO | Falso con «unico»: anche il pedone, e ogni pezzo che dà scacco da una casella adiacente, non può essere intercettato; contraddice la lezione sulle regole (p. 5: «non è possibile contro il Cavallo, né contro un pedone»). | corretto («Il Cavallo (come il pedone) dà scacco senza poter essere intercettato.») |
| str-mil-clausewitz | p. 1 | «aveva rivisto soltanto il primo libro» | DUBBIO | La nota del 1827 dichiara finito solo il primo capitolo del libro I; la formulazione è imprecisa ma non scorretta nella sostanza. | nessuna modifica |
| str-mil-clausewitz | p. 8 | «i libri più recenti (VI–VIII) rispecchiano un pensiero più maturo» | DA VERIFICARE CON FONTE ESTERNA | Secondo la lettura più diffusa il pensiero più maturo è nelle parti riviste dopo il 1827 (libro I, cap. 1); i libri VI–VIII sono bozze precedenti. Non ho certezza sulla cronologia. | nessuna modifica |
| str-mil-lanchester | p. 6 | «Engel (1954) … Iwo Jima: accordo accettabile» | DA VERIFICARE CON FONTE ESTERNA | Il risultato di Engel è reale; il testo già segnala la discussione successiva. | nessuna modifica |
| str-mil-sun-tzu | p. 6 | «una unità presa al nemico equivale a circa venti trasportate» | DA VERIFICARE CON FONTE ESTERNA | Il testo dichiara che la cifra varia con le traduzioni. | nessuna modifica |
| str-scacchi-matti-elementari | p. 2, p. 3 | «al massimo dieci mosse» (Re+Donna), «sedici» (Re+Torre) | DA VERIFICARE CON FONTE ESTERNA | Valori coerenti con quelli noti (10 e 16), non ricontrollati con tablebase. | nessuna modifica |

## Id modificati

- str-scacchi-regole-e-valore-dei-pezzi (str-l-scacchi1.js)
- str-scacchi-matti-elementari (str-l-scacchi1.js)

## Id senza problemi

str-matrici-di-payoff-e-nash (tutti gli equilibri ricalcolati: 3×3 con (A,X),(B,Y); eliminazione iterata con (M,C) = (5,4); caccia al cervo, chicken, battaglia dei sessi), str-probabilita-nei-giochi (somme dei dadi, binomiale, de Méré 51,8%, roulette, SuperEnalotto 622 614 630), str-nim-e-sprague-grundy (tabella P/N e numeri di Grundy fino a g(10), XOR e mosse vincenti), str-scacchi-finali-essenziali (opposizione, case chiave, quadrato, stallo con pedone di torre, Lucena/Philidor), str-bayes-nelle-decisioni (8,3%, 50%, odds, 45%, 88%, soglia 1/6, EVPI 30), str-kelly-e-gestione-del-rischio (formule, crescite +2,0/+1,5/−0,2%, 6,4%, rovina 13,2% e 1,7%), str-mil-sun-tzu, str-mil-clausewitz (date, calcoli 59%/35%/160 km), str-mil-lanchester (tutte le radici ricalcolate, 1915/1916), str-opt-programmazione-lineare (vertici, valori Z, prezzi ombra, intervallo c in [30,60]).

## Limiti

- Revisione a memoria, senza alcuna fonte esterna né accesso a Internet.
- Campione di 12 argomenti su 51: restano da leggere gli altri 39 (tra cui le lezioni su aste, oligopolio, valore attuale e programmazione dinamica).
- Le posizioni scacchistiche sono state verificate a mano, senza motore né libreria di scacchi.
- Le versioni nei file layer-en/ja non sono state toccate né controllate.

## Seconda revisione

Campione: 21 argomenti nuovi (non presenti nella prima revisione), letti per intero (pagine, esercizi, test). Ricalcolati via Node: Cournot/Bertrand/grim trigger, aste e maledizione del vincitore, VAN/TIR/annuità, PD (monete, zaino, LCS, edit distance), minimax e alfa-beta, strategie miste (rigori, chicken, sasso-carta-forbici), dilemma del prigioniero e soglie di δ, Dijkstra/Kruskal/cammino critico, utilità attesa e Bayes, break-even, MR = MC e Lerner, logistica, Fearon, assegnamento (6 permutazioni), TSP a 5 città (tutti i 12 giri), CPM/PERT e crashing. Posizioni di scacchi verificate con il motore di gioco dell'app (src/core/chess.js): legalità delle mosse, scacchi, matti e risposte dell'avversario. Le classificazioni sono le stesse della prima revisione.

### Argomenti esaminati

str-eco-oligopolio, str-eco-aste-incentivi, str-eco-valore-attuale, str-opt-programmazione-dinamica, str-giochi-a-somma-zero-e-minimax, str-strategie-miste, str-dilemma-del-prigioniero-e-cooperazione, str-alberi-di-gioco-e-valutazione, str-grafi-e-cammini-minimi, str-scacchi-motivi-tattici, str-scacchi-strutture-di-pedoni, str-utilita-e-avversione-al-rischio, str-decisioni-sotto-incertezza, str-eco-costi, str-eco-mercato, str-mil-logistica, str-mil-deterrenza-giochi, str-opt-assegnamento-combinatori, str-opt-pianificazione-progetto, str-scacchi-principi-di-apertura, str-scacchi-scambi-e-squilibri.

### Segnalazioni

| id | Pagina / punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| str-scacchi-principi-di-apertura | p. 7, Giuoco Piano | «Entrambi hanno due pezzi sviluppati» | ERRORE CERTO | Dopo 1.e4 e5 2.Cf3 Cc6 3.Ac4 Cf6 4.d3 Ac5 5.O-O d6 6.c3 O-O il Bianco ha mosso due pezzi minori (Cf3, Ac4) e il Nero tre (Cc6, Cf6, Ac5). | corretto («Il Bianco ha sviluppato due pezzi e il Nero tre; entrambi hanno il Re al sicuro e il centro conteso») |
| str-scacchi-principi-di-apertura | p. 5, Donna in uscita presto | «Cf6 e Cc6 attaccano la Donna» | DUBBIO | Nell'esempio di Dh5 solo Cf6 attacca la donna; Cc6 non attacca h5 (i due Cavalli non controllano mai una casella in comune). Probabile formulazione generica. | nessuna modifica |
| str-scacchi-motivi-tattici | p. 4, scacco di scoperta | «se 1...De6 interponendo, 2.Txe6+» | DUBBIO (non errore) | Verificato col motore: la posizione è corretta e 1.Cc5+ vince la donna. Il Nero può interporre anche con 1...De2 (2.Txe2+ vince lo stesso); il testo cita un solo esempio. | nessuna modifica |
| str-scacchi-motivi-tattici | p. 4, scoperta senza scacco | «1.Cf6+» (es. E5) | nessuna | Verificato: 1.Ce7+ non funziona (1...Dxe7), quindi la risposta unica 1.Cf6+ è corretta. | nessuna |
| str-eco-oligopolio | p. 5 | «la mossa dominante nel gioco isolato è deviare» | DUBBIO | Nel gioco a quantità continue deviare è la risposta ottima al rivale a 22,5, non una strategia dominante in senso stretto; vale per il gioco ridotto a due scelte (collusione / Cournot). | nessuna modifica |
| str-mil-logistica | p. 6 | «oltre 500 km … rifornimento molto difficile» (van Creveld); «fronte di circa 2 000 km» | DA VERIFICARE CON FONTE ESTERNA | Cifre storiche approssimate, già presentate come ordini di grandezza. | nessuna modifica |
| str-mil-deterrenza-giochi | p. 6 | «circa 70 000 testate nel 1986; 12 000 oggi» | DA VERIFICARE CON FONTE ESTERNA | Coerenti con le stime pubbliche a memoria; il testo le definisce ordini di grandezza. | nessuna modifica |

### Id modificati

- str-scacchi-principi-di-apertura (str-l-scacchi1.js): descrizione della posizione finale a p. 7. Il riepilogo EN/JA (layer-en-str.js, layer-ja-str.js) potrebbe contenere la stessa frase e non è stato toccato.

### Id senza problemi

str-eco-oligopolio (equilibri di Cournot, grim trigger δ ≥ 0,529, N = 3), str-eco-aste-incentivi (Vickrey, equivalenza dei ricavi 33,33, maledizione +13,33, bonus b ≥ 50), str-eco-valore-attuale (VAN +227,65, TIR 13,1%, annuità, regola del 72), str-opt-programmazione-dinamica (tutte le tabelle ricalcolate), str-giochi-a-somma-zero-e-minimax (albero a 3 livelli = 5, alfa-beta, gioco di entrata), str-strategie-miste (p = 3/5, q = 1/2, v = 1; rigori p = 4/9, q = 2/3), str-dilemma-del-prigioniero-e-cooperazione (δ ≥ 1/2, 2/5, 2/3), str-alberi-di-gioco-e-valutazione (69 finestre di Forza 4, 5 478 posizioni del tris), str-grafi-e-cammini-minimi (Dijkstra 20/20/11, MST 33 contro albero 38, cammino critico 11), str-scacchi-motivi-tattici (tutte le posizioni legali e le linee verificate col motore: Cc7+, d4, Ta1+, Cc5+, Cf6+, Dd7/Te8#, Td8+/Cf7+, Axf6/Dxh7#, Axd5/Te8#, Légal, matto del barbiere), str-scacchi-strutture-di-pedoni, str-utilita-e-avversione-al-rischio, str-decisioni-sotto-incertezza, str-eco-costi, str-eco-mercato, str-mil-logistica, str-mil-deterrenza-giochi (Fearon 50–70, chicken p = 0,99, δ ≥ 1/3, date della crisi di Cuba), str-opt-assegnamento-combinatori (ottimo 12, TSP 44, NN 48, 2-opt, MST 31), str-opt-pianificazione-progetto (ES/LS, slack, PERT, crashing 200/600/1 100/1 750), str-scacchi-scambi-e-squilibri.

### Id ancora da leggere

str-eco-scambio, str-eco-strategia-impresa, str-errori-strategici-e-pre-mortem, str-mil-ooda-asimmetria, str-mil-principi-guerra, str-negoziazione-e-incentivi, str-opt-grafi, str-opt-multiobiettivo-decisioni-reali, str-opt-ricerca-locale-bandit, str-ottimizzazione-greedy-e-dp, str-pensiero-strategico, str-pianificazione-e-vincoli, str-scacchi-allenamento-e-torneo, str-scacchi-analisi-delle-partite, str-scacchi-colonne-diagonali-e-case-forti, str-scacchi-iniziativa-e-attacco, str-scacchi-metodo-di-calcolo, str-strategia-competitiva

### Limiti

- Revisione a memoria, senza fonti esterne né accesso a Internet.
- Le versioni nei file layer-en/ja non sono state toccate né controllate.
