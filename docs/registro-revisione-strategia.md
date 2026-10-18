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
