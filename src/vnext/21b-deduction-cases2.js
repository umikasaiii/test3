/* vNext M3 — Deduction Lab: casi (secondo set). Ogni caso supera D.validate; le plausibilità (lik) sono stime didattiche dell’autore. */
(function (ST) {
  'use strict';
  const D = ST.sma.deduction;
  const K = (id, cost, ask, text, lik) => ({ id, cost, ask, text, lik });

  /* ---------- L0 ---------- */
  D.add({ id: 'ded-pianta-giallo', level: 'L0', title: 'La pianta che ingiallisce', budget: 4,
    intro: 'Un ficus in casa perde foglie da due settimane. Vuoi capire la causa prima di cambiare qualcosa. Ogni controllo costa un po’ di tempo: scegli quelli che separano meglio le ipotesi.',
    hyps: [{ id: 'acqua', text: 'Troppa acqua (terriccio sempre bagnato)' }, { id: 'luce', text: 'Poca luce' }, { id: 'para', text: 'Parassiti sulle foglie' }, { id: 'freddo', text: 'Correnti d’aria fredda' }],
    truth: 'acqua', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Le foglie più basse sono gialle e afflosciate, poi cadono.', { acqua: 0.7, luce: 0.6, para: 0.4, freddo: 0.5 }),
      K('k2', 1, 'Tocca il terriccio a qualche centimetro di profondità', 'A 3 cm di profondità il terriccio è fradicio, anche se l’ultima annaffiatura risale a quattro giorni fa.', { acqua: 0.9, luce: 0.5, para: 0.3, freddo: 0.3 }),
      K('k3', 1, 'Guarda il sottovaso', 'Nel sottovaso c’è acqua stagnante da giorni.', { acqua: 0.9, luce: 0.35, para: 0.3, freddo: 0.3 }),
      K('k4', 1, 'Guarda sotto le foglie', 'Sotto le foglie non ci sono insetti, ragnatele né appiccicume.', { acqua: 0.8, luce: 0.8, para: 0.08, freddo: 0.8 }),
      K('k5', 1, 'Controlla dove sta la pianta', 'La pianta è a un metro da una finestra a sud e riceve molta luce per gran parte della giornata.', { acqua: 0.8, luce: 0.1, para: 0.8, freddo: 0.8 }),
      K('k6', 2, 'Misura la temperatura vicino alla pianta', 'Vicino alla pianta il termometro segna 20 °C stabili e non si sente nessuna corrente.', { acqua: 0.8, luce: 0.8, para: 0.8, freddo: 0.08 }),
      K('k7', 2, 'Estrai la pianta dal vaso e guarda le radici', 'Le radici sono scure, molli e con odore di marcio.', { acqua: 0.95, luce: 0.2, para: 0.25, freddo: 0.2 }),
      K('k8', 1, 'Chiedi a chi se ne occupa come la annaffia', 'Chi se ne occupa dice di annaffiarla ogni due giorni «per sicurezza».', { acqua: 0.9, luce: 0.4, para: 0.4, freddo: 0.4 })
    ],
    explain: 'Il segno più utile è quello che appare solo se l’ipotesi è vera: terriccio fradicio dopo quattro giorni (k2), acqua nel sottovaso (k3) o radici molli (k7) sono molto più probabili con troppa acqua che con le altre cause. Le verifiche «negative» (niente insetti, luce abbondante, nessuna corrente) servono a escludere, ma da sole non indicano la causa. Con un budget corto conviene scegliere prima le prove economiche che separano di più. I valori di plausibilità sono stime dell’autore, non misure.' });

  D.add({ id: 'ded-lampada-spenta', level: 'L0', title: 'La lampada che non si accende', budget: 4,
    intro: 'La lampada da scrivania di casa non si accende. Prima di buttarla vuoi capire dove sta il guasto. Lavora solo con prove semplici e sicure: non aprire nulla con la spina inserita.',
    hyps: [{ id: 'lamp', text: 'La lampadina è bruciata' }, { id: 'int', text: 'L’interruttore sul filo è guasto' }, { id: 'presa', text: 'La presa non ha corrente' }, { id: 'cavo', text: 'Il cavo è danneggiato' }],
    truth: 'int', start: ['k1'],
    clues: [
      K('k1', 0, '', 'La lampada da scrivania non si accende, ma le altre luci della stanza funzionano.', { lamp: 0.8, int: 0.7, presa: 0.4, cavo: 0.6 }),
      K('k2', 1, 'Prova la lampadina in un’altra lampada', 'La stessa lampadina, messa in un’altra lampada, si accende.', { lamp: 0.03, int: 0.9, presa: 0.9, cavo: 0.9 }),
      K('k3', 1, 'Collega un caricatore alla stessa presa', 'Un caricatore collegato alla stessa presa funziona regolarmente.', { lamp: 0.8, int: 0.8, presa: 0.05, cavo: 0.8 }),
      K('k4', 1, 'Guarda il cavo da fuori', 'Il cavo è integro, senza tagli né schiacciamenti visibili.', { lamp: 0.8, int: 0.8, presa: 0.8, cavo: 0.2 }),
      K('k5', 1, 'Premi l’interruttore sul filo', 'L’interruttore sul filo ha un clic diverso dal solito ed è lento, come allentato.', { lamp: 0.3, int: 0.85, presa: 0.3, cavo: 0.4 }),
      K('k6', 2, 'Guarda la lampadina da vicino', 'La lampadina non è annerita né rotta, ma questo non prova che funzioni.', { lamp: 0.4, int: 0.8, presa: 0.8, cavo: 0.8 }),
      K('k7', 3, 'Fai misurare la continuità del filo da chi ha lo strumento (lampada scollegata)', 'Lo strumento segna interruzione proprio nell’interruttore sul filo, non nel cavo.', { lamp: 0.1, int: 0.95, presa: 0.1, cavo: 0.1 })
    ],
    explain: 'Il metodo è escludere un componente alla volta con prove economiche: spostare la lampadina (k2) e provare la presa con un altro apparecchio (k3) tolgono di mezzo due ipotesi in un solo passo ciascuno. L’aspetto del cavo e della lampadina (k4, k6) dice poco, perché un guasto interno non si vede; la misura di continuità (k7) è la più decisiva ma anche la più costosa. Le plausibilità sono stime dell’autore e non sostituiscono un controllo di un tecnico qualificato.' });

  /* ---------- L1 ---------- */
  D.add({ id: 'ded-foglio-totale', level: 'L1', title: 'Il totale che non torna', budget: 4,
    intro: 'In un foglio di calcolo delle spese il totale mostrato non coincide con la somma fatta a mano. Il responsabile vuole sapere che cosa controllare, in che ordine e con quale costo.',
    hyps: [{ id: 'rif', text: 'La formula non include tutte le righe' }, { id: 'testo', text: 'Alcuni importi sono salvati come testo' }, { id: 'dup', text: 'C’è una riga duplicata' }, { id: 'arr', text: 'Differenza dovuta all’arrotondamento visualizzato' }],
    truth: 'rif', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il totale mostrato è 18.460 €, mentre la somma a mano della colonna degli importi dà 18.800 €.', { rif: 0.6, testo: 0.6, dup: 0.2, arr: 0.08 }),
      K('k2', 1, 'Guarda la formula del totale', 'La formula del totale è =SOMMA(C2:C41), ma i dati arrivano fino alla riga 42.', { rif: 0.95, testo: 0.3, dup: 0.3, arr: 0.3 }),
      K('k3', 1, 'Controlla l’allineamento delle celle', 'Una sola cella della colonna, da 12 €, è allineata a sinistra come se fosse testo.', { rif: 0.45, testo: 0.6, dup: 0.45, arr: 0.45 }),
      K('k4', 2, 'Cerca righe duplicate', 'Non ci sono righe duplicate: ogni numero di fattura compare una sola volta.', { rif: 0.8, testo: 0.8, dup: 0.05, arr: 0.8 }),
      K('k5', 1, 'Mostra più decimali', 'Con quattro decimali nessun importo differisce di più di 0,005 € da quello visibile.', { rif: 0.8, testo: 0.8, dup: 0.8, arr: 0.04 }),
      K('k6', 2, 'Leggi l’importo dell’ultima riga', 'La riga 42, fuori dall’intervallo della somma, contiene una fattura da 340 €.', { rif: 0.9, testo: 0.25, dup: 0.25, arr: 0.25 }),
      K('k7', 1, 'Chiedi a chi ha compilato il foglio', 'Il collega ricorda di aver «aggiunto qualche riga in fondo» la settimana scorsa.', { rif: 0.7, testo: 0.4, dup: 0.4, arr: 0.3 })
    ],
    explain: 'La differenza di 340 € è troppo grande per l’arrotondamento (k5 lo esclude a basso costo) e il segno è quello di un importo mancante, non doppio. L’indizio fuorviante è k3: una cella da 12 € come testo sembra spiegare qualcosa, ma non può produrre 340 €; conviene sempre chiedersi «la dimensione dell’effetto torna con la causa?». Guardare la formula (k2) costa poco ed è molto informativo. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-ordine-fermo', level: 'L1', title: 'L’ordine che non parte', budget: 4,
    intro: 'Un cliente ha ordinato nove giorni fa un prodotto con consegna promessa in tre giorni. Devi capire dove si è bloccato l’ordine. Le fonti hanno costi e affidabilità diversi: i registri contano più delle impressioni.',
    hyps: [{ id: 'pag', text: 'L’ordine è bloccato in attesa di verifica del pagamento' }, { id: 'prod', text: 'Il prodotto è esaurito' }, { id: 'corr', text: 'Il corriere è in ritardo' }, { id: 'ind', text: 'L’indirizzo non è valido' }],
    truth: 'pag', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il tracciamento del cliente mostra ancora solo «ordine ricevuto»: nessuna spedizione risulta avviata.', { pag: 0.7, prod: 0.6, corr: 0.15, ind: 0.4 }),
      K('k2', 1, 'Chiedi al corriere se ha l’etichetta', 'Il corriere non ha alcuna etichetta per questo ordine: non ha mai ritirato nulla.', { pag: 0.9, prod: 0.9, corr: 0.05, ind: 0.6 }),
      K('k3', 1, 'Controlla la giacenza in magazzino', 'Il prodotto è disponibile: 40 pezzi, 2 dei quali riservati a questo ordine.', { pag: 0.85, prod: 0.06, corr: 0.85, ind: 0.85 }),
      K('k4', 2, 'Leggi lo stato interno dell’ordine', 'Lo stato interno è «in attesa di verifica del pagamento» dal giorno dell’ordine.', { pag: 0.95, prod: 0.1, corr: 0.1, ind: 0.1 }),
      K('k5', 1, 'Chiedi all’assistenza clienti', 'Un operatore dell’assistenza dice: «Dovrebbe essere già partito, il corriere è solo lento».', { pag: 0.4, prod: 0.4, corr: 0.8, ind: 0.4 }),
      K('k6', 1, 'Verifica l’indirizzo di consegna', 'L’indirizzo è completo e superato dal controllo automatico.', { pag: 0.8, prod: 0.8, corr: 0.8, ind: 0.1 }),
      K('k7', 3, 'Chiedi al circuito di pagamento l’esito', 'Il circuito di pagamento segnala una richiesta di autenticazione rimasta senza risposta del cliente.', { pag: 0.9, prod: 0.25, corr: 0.25, ind: 0.25 }),
      K('k8', 1, 'Guarda altri ordini dello stesso giorno', 'Tre ordini di altri prodotti fatti lo stesso giorno con altri metodi di pagamento sono già stati consegnati.', { pag: 0.6, prod: 0.5, corr: 0.4, ind: 0.5 })
    ],
    explain: 'Due fonti si contraddicono: l’assistenza dice «è partito, il corriere è lento», mentre il corriere dice che non ha mai ritirato nulla. La seconda è un registro oggettivo e vale più di un’impressione (k2 contro k5): se il corriere non ha l’etichetta, non può essere in ritardo. Poi la giacenza (k3) esclude il prodotto esaurito e lo stato interno (k4) indica il blocco. L’esito del circuito di pagamento (k7) conferma ma costa di più e non serve se hai già k4. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-file-spostato', level: 'L1', title: 'Il file sparito dalla cartella', budget: 4,
    intro: 'In un team un preventivo è sparito dalla cartella condivisa. Nessuno ammette di averlo toccato e le versioni dei fatti non coincidono. Distingui i registri dalle testimonianze.',
    hyps: [{ id: 'canc', text: 'Qualcuno lo ha cancellato' }, { id: 'spost', text: 'È stato spostato in un’altra cartella' }, { id: 'perm', text: 'I permessi sono cambiati e Marta non lo vede più' }, { id: 'sync', text: 'È un problema di sincronizzazione sul computer di Marta' }],
    truth: 'spost', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Marta non trova più il file «Preventivo_Rossi.xlsx» nella cartella condivisa del team.', { canc: 0.5, spost: 0.6, perm: 0.4, sync: 0.4 }),
      K('k2', 1, 'Fai controllare a un altro collega', 'Luca, dal suo computer, non vede il file nella cartella.', { canc: 0.8, spost: 0.8, perm: 0.25, sync: 0.1 }),
      K('k3', 1, 'Guarda il cestino condiviso', 'Il cestino condiviso è vuoto: nessun file eliminato negli ultimi 30 giorni.', { canc: 0.08, spost: 0.85, perm: 0.85, sync: 0.85 }),
      K('k4', 2, 'Cerca per nome in tutto lo spazio del team', 'La ricerca per nome trova un file con quel nome in «Archivio/2025/Clienti».', { canc: 0.1, spost: 0.9, perm: 0.3, sync: 0.3 }),
      K('k5', 1, 'Ascolta Giorgio', 'Giorgio afferma di non aver toccato nulla: «io non sposto mai i file».', { canc: 0.5, spost: 0.4, perm: 0.5, sync: 0.5 }),
      K('k6', 1, 'Ascolta Elena', 'Elena dice di aver «riordinato un po’ l’archivio» martedì sera.', { canc: 0.35, spost: 0.8, perm: 0.3, sync: 0.3 }),
      K('k7', 3, 'Leggi il registro delle attività', 'Il registro mostra uno spostamento del file martedì alle 18:40, senza nessuna eliminazione.', { canc: 0.03, spost: 0.95, perm: 0.3, sync: 0.3 }),
      K('k8', 1, 'Controlla la cronologia dei permessi', 'Nessun cambio di permessi sulla cartella da tre mesi.', { canc: 0.8, spost: 0.8, perm: 0.06, sync: 0.8 })
    ],
    explain: 'Un altro collega che non vede il file (k2) allontana il problema locale di sincronizzazione; il cestino vuoto (k3) rende improbabile la cancellazione; i permessi invariati (k8) escludono il resto. La testimonianza di Giorgio (k5) è una smentita generica che non discrimina, mentre quella di Elena (k6) è più specifica ma resta una dichiarazione: la prova forte è il registro (k7), il più costoso. Qui la ricerca per nome (k4) costa meno e dà già molto. Le plausibilità sono stime dell’autore.' });

  /* ---------- L2 ---------- */
  D.add({ id: 'ded-app-lenta', level: 'L2', title: 'L’app che rallenta dopo il rilascio', budget: 5,
    intro: 'Dopo il rilascio di martedì la schermata ordini di un’app passa da 0,4 a 2,5 secondi. Il team ha poco tempo: ogni verifica ha un costo e alcune sono molto più informative di altre.',
    hyps: [{ id: 'query', text: 'Una query del database è diventata lenta' }, { id: 'mem', text: 'C’è una perdita di memoria sul server' }, { id: 'api', text: 'Un servizio esterno risponde lentamente' }, { id: 'cache', text: 'La cache non funziona più bene' }],
    truth: 'api', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Dopo il rilascio di martedì la schermata ordini impiega 2,5 secondi invece di 0,4.', { query: 0.7, mem: 0.4, api: 0.5, cache: 0.5 }),
      K('k2', 1, 'Guarda il grafico della memoria', 'La memoria del server è stabile al 55% da una settimana, senza crescita.', { query: 0.8, mem: 0.06, api: 0.8, cache: 0.8 }),
      K('k3', 1, 'Guarda dove passa il tempo di una richiesta', 'Il tempo di attesa della risposta del servizio di spedizioni è di 2,1 secondi per richiesta.', { query: 0.15, mem: 0.25, api: 0.95, cache: 0.2 }),
      K('k4', 2, 'Controlla le query lente del database', 'Le query più lente del database durano 30 ms, come prima del rilascio.', { query: 0.05, mem: 0.8, api: 0.8, cache: 0.6 }),
      K('k5', 1, 'Guarda il tasso di successo della cache', 'Il tasso di successo della cache è sceso dal 92% all’85%.', { query: 0.45, mem: 0.4, api: 0.5, cache: 0.7 }),
      K('k6', 3, 'Contatta il fornitore del servizio di spedizioni', 'Il fornitore conferma una latenza elevata sui suoi sistemi dal giorno del rilascio.', { query: 0.2, mem: 0.2, api: 0.9, cache: 0.2 }),
      K('k7', 1, 'Prova una schermata che non usa il servizio', 'La schermata profilo, che non chiama il servizio spedizioni, risponde in 0,4 s come prima.', { query: 0.5, mem: 0.15, api: 0.9, cache: 0.5 }),
      K('k8', 2, 'Riavvia i server di prova', 'Dopo il riavvio dei server la lentezza della schermata ordini resta identica.', { query: 0.8, mem: 0.1, api: 0.9, cache: 0.6 })
    ],
    explain: 'La misura del tempo per componente (k3) è la più informativa e costa poco: dice dove passa il tempo, invece di indovinare. Il calo della cache dal 92% all’85% (k5) è un indizio fuorviante: sembra spiegare la lentezza ma un 7% non può produrre un aumento di oltre sei volte. Anche la contraddizione fra le query veloci (k4) e la lentezza totale spinge fuori dal database. Provare una schermata che non usa il servizio (k7) è un piccolo esperimento di confronto. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-rumore-auto', level: 'L2', title: 'Il ronzio che cresce con la velocità', budget: 5,
    intro: 'Un’auto fa un ronzio che aumenta con la velocità. Qui non si tratta di riparare nulla: è un esercizio di ragionamento su quali osservazioni distinguono le cause. La decisione finale spetta sempre a un’officina.',
    hyps: [{ id: 'pneu', text: 'Pneumatici usurati o sbilanciati' }, { id: 'freni', text: 'Pastiglie dei freni usurate' }, { id: 'cusc', text: 'Cuscinetto di una ruota' }, { id: 'scar', text: 'Parte dello scarico allentata' }],
    truth: 'cusc', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il ronzio comincia intorno ai 50 km/h e cresce con la velocità.', { pneu: 0.5, freni: 0.3, cusc: 0.8, scar: 0.3 }),
      K('k2', 1, 'Verifica se cambia premendo il freno', 'Premendo il freno il rumore non cambia.', { pneu: 0.8, freni: 0.15, cusc: 0.8, scar: 0.8 }),
      K('k3', 1, 'Verifica da fermo accelerando', 'Accelerando a vettura ferma il ronzio non compare.', { pneu: 0.85, freni: 0.85, cusc: 0.85, scar: 0.08 }),
      K('k4', 1, 'Verifica in curva', 'Il ronzio aumenta nelle curve verso destra e si riduce in quelle verso sinistra.', { pneu: 0.3, freni: 0.2, cusc: 0.85, scar: 0.2 }),
      K('k5', 2, 'Guarda il battistrada a veicolo fermo', 'Il battistrada anteriore sinistro è consumato in modo un po’ irregolare.', { pneu: 0.75, freni: 0.35, cusc: 0.5, scar: 0.35 }),
      K('k6', 3, 'Chiedi un controllo in officina con ruota sollevata', 'In officina, a ruota sollevata, l’anteriore sinistra gira con un po’ di gioco e un suono ruvido.', { pneu: 0.1, freni: 0.1, cusc: 0.95, scar: 0.1 }),
      K('k7', 1, 'Chiedi al passeggero da dove arriva', 'Il passeggero dice che «sembra venire da dietro».', { pneu: 0.4, freni: 0.3, cusc: 0.4, scar: 0.6 }),
      K('k8', 2, 'Controlla la pressione dei pneumatici', 'La pressione è corretta e uguale su tutte le ruote.', { pneu: 0.35, freni: 0.8, cusc: 0.8, scar: 0.8 })
    ],
    explain: 'Le prove più informative separano le cause per come il rumore cambia: non dipende dal freno (k2), non compare da fermo (k3, esclude lo scarico) ed è influenzato dalla curva (k4), un segno che il carico su una ruota conta. Il battistrada irregolare (k5) è fuorviante: favorisce gli pneumatici, ma un cuscinetto che lavora male può consumarli allo stesso modo. Il parere del passeggero (k7) è un’impressione poco affidabile sulla direzione di un suono. Il controllo in officina (k6) costa di più ma è la prova diretta. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-accesso-notturno', level: 'L2', title: 'Download notturno da un account', budget: 5,
    intro: 'Il sistema di allarme di un’azienda fittizia segnala che l’account di una collega ha scaricato 200 documenti alle 03:10 da un indirizzo straniero. Analisi difensiva: capire che cosa è successo per decidere come proteggere l’account. Le fonti hanno affidabilità diverse.',
    hyps: [{ id: 'phish', text: 'Credenziali rubate con phishing' }, { id: 'riuso', text: 'Password riutilizzata, trapelata da un altro sito' }, { id: 'insider', text: 'La collega stessa, da casa, a insaputa dell’IT' }, { id: 'falso', text: 'Falso allarme del sistema' }],
    truth: 'riuso', start: ['k1'],
    clues: [
      K('k1', 0, '', 'L’allarme segnala 200 download dall’account della collega alle 03:10 da un indirizzo IP straniero.', { phish: 0.6, riuso: 0.6, insider: 0.3, falso: 0.3 }),
      K('k2', 1, 'Controlla il registro dei file', 'Il registro dei file conferma i 200 download, con nomi di file reali.', { phish: 0.8, riuso: 0.8, insider: 0.8, falso: 0.05 }),
      K('k3', 1, 'Controlla il filtro della posta', 'Il filtro della posta non ha registrato email sospette recapitate o cliccate dalla collega nelle ultime due settimane.', { phish: 0.15, riuso: 0.8, insider: 0.6, falso: 0.7 }),
      K('k4', 2, 'Cerca l’indirizzo email negli elenchi di violazioni pubbliche', 'L’indirizzo email della collega compare in una violazione di un sito esterno di otto mesi fa, con la password in chiaro.', { phish: 0.3, riuso: 0.9, insider: 0.3, falso: 0.3 }),
      K('k5', 1, 'Chiedi al tecnico di turno', 'Il tecnico di turno dice di aver visto la collega «collegata in VPN verso le tre».', { phish: 0.2, riuso: 0.2, insider: 0.7, falso: 0.2 }),
      K('k6', 1, 'Controlla il registro della VPN', 'Il registro della VPN non mostra nessuna sessione della collega quella notte.', { phish: 0.8, riuso: 0.8, insider: 0.1, falso: 0.8 }),
      K('k7', 2, 'Chiedi alla collega', 'La collega dice di dormire a quell’ora e di usare «la stessa password lunga dappertutto».', { phish: 0.4, riuso: 0.85, insider: 0.1, falso: 0.4 }),
      K('k8', 3, 'Verifica l’autenticazione a due fattori', 'Il secondo fattore non era attivo sull’account.', { phish: 0.8, riuso: 0.85, insider: 0.6, falso: 0.6 })
    ],
    explain: 'Due fonti si contraddicono: il tecnico ricorda di aver visto la collega in VPN (k5), ma il registro della VPN (k6) dice di no. Un registro vale più di un ricordo, soprattutto notturno. Poi il filtro della posta (k3) indebolisce il phishing, mentre la violazione pubblica con password in chiaro (k4) e l’abitudine di riuso (k7) sostengono la password trapelata. L’assenza del secondo fattore (k8) rende l’attacco possibile ma non discrimina fra le cause. Le plausibilità sono stime dell’autore; la risposta pratica, in ogni caso, è cambiare la password e attivare il secondo fattore.' });

  /* ---------- L3 ---------- */
  D.add({ id: 'ded-discrepanza-cassa', level: 'L3', title: 'La discrepanza di 270 euro', budget: 5,
    intro: 'In una piccola contabilità fittizia il saldo del registro supera di 270 € quello della banca a fine mese. Il contabile ti chiede da dove cominciare a cercare. I controlli hanno costi molto diversi e alcuni indizi sembrano rilevanti più di quanto siano.',
    hyps: [{ id: 'tras', text: 'Errore di trascrizione (cifre scambiate)' }, { id: 'dop', text: 'Un movimento registrato due volte' }, { id: 'omes', text: 'Un movimento bancario non registrato' }, { id: 'cambio', text: 'Differenza di cambio su un pagamento in valuta' }],
    truth: 'tras', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il saldo del registro supera di 270 € quello della banca; registro ed estratto conto hanno lo stesso numero di movimenti (62).', { tras: 0.8, dop: 0.1, omes: 0.1, cambio: 0.6 }),
      K('k2', 1, 'Cerca un movimento da 270 €', 'Nessun movimento da 270 € compare né nel registro né in banca.', { tras: 0.8, dop: 0.1, omes: 0.1, cambio: 0.8 }),
      K('k3', 1, 'Controlla se la differenza è multipla di 9', 'La differenza di 270 € è un multiplo di 9, come accade quando si scambiano due cifre vicine.', { tras: 0.9, dop: 0.12, omes: 0.12, cambio: 0.12 }),
      K('k4', 3, 'Confronta uno per uno i 62 movimenti', 'Il movimento n. 37 è 1.520 € nel registro e 1.250 € in banca.', { tras: 0.95, dop: 0.04, omes: 0.04, cambio: 0.1 }),
      K('k5', 1, 'Guarda i bonifici in valuta', 'Nel mese c’è un bonifico in dollari convertito con un cambio diverso da quello usato in contabilità.', { tras: 0.45, dop: 0.45, omes: 0.45, cambio: 0.75 }),
      K('k6', 1, 'Calcola l’effetto massimo del cambio', 'Sul bonifico in dollari la differenza di cambio possibile è di al massimo 12 €.', { tras: 0.8, dop: 0.8, omes: 0.8, cambio: 0.05 }),
      K('k7', 1, 'Chiedi al contabile', 'Il contabile ricorda di aver «ricopiato a mano alcuni importi dall’estratto».', { tras: 0.7, dop: 0.3, omes: 0.3, cambio: 0.3 }),
      K('k8', 2, 'Cerca movimenti con stessa data e importo', 'Non ci sono due movimenti con stessa data e stesso importo.', { tras: 0.8, dop: 0.05, omes: 0.8, cambio: 0.8 })
    ],
    explain: 'L’indizio fuorviante è il bonifico in dollari (k5): attira l’attenzione, ma la dimensione dell’effetto (k6, al massimo 12 €) non può produrre 270 €. Un buon ragionamento controlla sempre se la causa ha l’ordine di grandezza giusto. Il test dei multipli di 9 (k3) è economico e molto informativo; l’uguale numero di movimenti (k1) allontana già duplicazioni e omissioni. Il confronto riga per riga (k4) è la prova diretta ma costa molto: conviene farlo solo se gli altri indizi lasciano dubbi. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-app-flashcard', level: 'L3', title: 'L’app di flashcard funziona?', budget: 5, open: true,
    intro: 'In una classe 24 studenti hanno usato per un mese un’app di flashcard; 26 no. Il gruppo con l’app ha una media migliore e qualcuno vorrebbe già concludere che «l’app funziona». Valuta quanto il disegno dello studio permette di concludere.',
    hyps: [{ id: 'app', text: 'L’app ha migliorato i risultati' }, { id: 'sel', text: 'Hanno scelto l’app gli studenti già più forti o motivati' }, { id: 'ore', text: 'Chi ha usato l’app ha semplicemente studiato più ore' }, { id: 'test', text: 'Il test finale favoriva un gruppo' }],
    start: ['k1'],
    clues: [
      K('k1', 0, '', 'Nel test finale la media del gruppo con l’app è 7,4, quella degli altri 26 è 6,6.', { app: 0.7, sel: 0.7, ore: 0.6, test: 0.4 }),
      K('k2', 1, 'Chiedi come sono stati formati i gruppi', 'Gli studenti hanno scelto da soli se usare l’app.', { app: 0.6, sel: 0.9, ore: 0.6, test: 0.6 }),
      K('k3', 1, 'Confronta i voti del test precedente', 'Il gruppo con l’app aveva già media 7,0 nel test precedente, contro 6,5 degli altri.', { app: 0.5, sel: 0.85, ore: 0.5, test: 0.5 }),
      K('k4', 2, 'Misura le ore di studio', 'I due gruppi dichiarano ore di studio simili (circa 5 a settimana), ma sono dati autodichiarati.', { app: 0.6, sel: 0.5, ore: 0.3, test: 0.5 }),
      K('k5', 2, 'Controlla com’è stato fatto il test', 'Il test finale era identico per i due gruppi e corretto senza conoscere il gruppo.', { app: 0.6, sel: 0.6, ore: 0.6, test: 0.1 }),
      K('k6', 1, 'Correggi per il punto di partenza', 'Tenendo conto del punto di partenza resta un vantaggio di circa 0,3 punti, con grande incertezza.', { app: 0.6, sel: 0.5, ore: 0.45, test: 0.35 }),
      K('k7', 3, 'Cerca uno studio con assegnazione casuale', 'Un piccolo studio con assegnazione casuale in un’altra scuola mostra +0,2 punti, con intervallo da -0,3 a +0,7.', { app: 0.6, sel: 0.5, ore: 0.5, test: 0.5 })
    ],
    explain: 'Il caso è aperto: i gruppi si sono formati da soli (k2) e partivano già da livelli diversi (k3), quindi confondere l’effetto dell’app con la selezione è molto facile. Le ore autodichiarate (k4) sono un dato debole; la correzione per il punto di partenza (k6) riduce il vantaggio a una cifra piccola e incerta. Nessuna ipotesi supera una soglia solida. La prova mancante più utile è un confronto con assegnazione casuale e un campione più ampio (k7 lo avvicina, ma è piccolo): finché manca, la risposta giusta è sospendere il giudizio e dire quale prova serve. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-calo-punti', level: 'L3', title: 'Perché la squadra segna meno?', budget: 5,
    intro: 'Una squadra giovanile fittizia di basket segna in media 58 punti nelle ultime cinque partite, contro i 71 delle prime otto. L’allenatore e il capitano danno spiegazioni diverse. Cerca prove che le distinguano, senza fermarti alla spiegazione più comoda.',
    hyps: [{ id: 'avv', text: 'Avversarie più forti' }, { id: 'stan', text: 'Calendario troppo fitto' }, { id: 'form', text: 'Assenza del playmaker titolare' }, { id: 'tatt', text: 'La nuova difesa a zona toglie ritmo' }],
    truth: 'form', start: ['k1'],
    clues: [
      K('k1', 0, '', 'La squadra ha segnato in media 58 punti nelle ultime 5 partite, contro 71 nelle prime 8.', { avv: 0.5, stan: 0.5, form: 0.6, tatt: 0.5 }),
      K('k2', 1, 'Guarda la classifica delle avversarie', 'Due delle ultime cinque avversarie erano fra le prime tre della classifica; le altre tre sono a metà classifica.', { avv: 0.55, stan: 0.4, form: 0.4, tatt: 0.4 }),
      K('k3', 1, 'Guarda il calendario', 'Le ultime 5 partite si sono giocate a intervalli normali, una a settimana.', { avv: 0.8, stan: 0.1, form: 0.8, tatt: 0.8 }),
      K('k4', 2, 'Guarda le statistiche per giocatore', 'Il playmaker titolare, che segnava e serviva più assist, ha saltato tutte e cinque le ultime partite per impegni di studio.', { avv: 0.3, stan: 0.3, form: 0.95, tatt: 0.3 }),
      K('k5', 1, 'Ascolta l’allenatore', 'L’allenatore dice che il calo dipende dalla nuova difesa a zona, introdotta tre settimane fa, che «toglie ritmo».', { avv: 0.4, stan: 0.4, form: 0.45, tatt: 0.85 }),
      K('k6', 1, 'Ascolta il capitano', 'Il capitano dice che «da quando manca il playmaker non troviamo più i tiri aperti».', { avv: 0.3, stan: 0.3, form: 0.8, tatt: 0.4 }),
      K('k7', 2, 'Confronta i punti subiti', 'I punti subiti sono rimasti stabili: 61 prima, 62 ora.', { avv: 0.35, stan: 0.8, form: 0.8, tatt: 0.15 }),
      K('k8', 1, 'Confronta i tiri tentati', 'I tiri tentati per partita sono scesi da 62 a 54, mentre la percentuale di realizzazione è quasi uguale.', { avv: 0.4, stan: 0.4, form: 0.7, tatt: 0.5 }),
      K('k9', 3, 'Guarda le partite contro avversarie deboli senza il playmaker', 'Contro le avversarie di metà classifica, senza il playmaker, la squadra ha segnato comunque solo 57 punti.', { avv: 0.15, stan: 0.4, form: 0.85, tatt: 0.4 })
    ],
    explain: 'Due testimonianze di parte si contraddicono: l’allenatore difende la propria scelta tattica (k5) e il capitano indica l’assenza (k6). Le statistiche sono più affidabili delle spiegazioni: il playmaker assente (k4), i punti subiti invariati (k7, la difesa non è peggiorata) e il calo anche contro avversarie deboli (k9) puntano alla formazione. La classifica (k2) è un indizio fuorviante: due avversarie forti non spiegano tutto il calo. Anche così «assenza del playmaker» resta una stima, non una certezza. Le plausibilità sono stime dell’autore; il caso non riguarda consigli medici.' });

  /* ---------- L4 ---------- */
  D.add({ id: 'ded-fonte-62', level: 'L4', title: 'Il 62% delle famiglie con la fibra', budget: 5,
    intro: 'Un blog scrive che «il 62% delle famiglie della regione usa la fibra». Devi decidere se fidarti di quel dato. Tracciare la fonte originale costa tempo: scegli le verifiche che distinguono fra dato sbagliato, vecchio o fraintendimento.',
    hyps: [{ id: 'ok', text: 'Il dato è corretto così com’è' }, { id: 'old', text: 'Il dato era giusto ma è obsoleto' }, { id: 'mis', text: 'Il dato esiste ma è stato frainteso (riguarda altro)' }, { id: 'inv', text: 'Il dato è inventato' }],
    truth: 'mis', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Un articolo di blog dice: «il 62% delle famiglie della regione usa la fibra».', { ok: 0.5, old: 0.5, mis: 0.5, inv: 0.3 }),
      K('k2', 1, 'Cerca la fonte citata', 'L’articolo cita un rapporto dell’autorità di settore del 2025, senza collegamento.', { ok: 0.6, old: 0.6, mis: 0.6, inv: 0.1 }),
      K('k3', 2, 'Trova il rapporto originale', 'Il rapporto esiste e riporta il 62% come «copertura in fibra» delle abitazioni, non come famiglie con un abbonamento.', { ok: 0.1, old: 0.2, mis: 0.95, inv: 0.03 }),
      K('k4', 1, 'Controlla la data', 'Il rapporto è di marzo 2025, l’articolo di ottobre 2025.', { ok: 0.7, old: 0.15, mis: 0.7, inv: 0.5 }),
      K('k5', 1, 'Cerca altri siti che citano il dato', 'Altri tre siti riportano la stessa frase, nelle stesse parole.', { ok: 0.8, old: 0.6, mis: 0.7, inv: 0.7 }),
      K('k6', 1, 'Guarda i precedenti dell’autore', 'L’autore ha scritto altri tre articoli di tecnologia citando le fonti in modo corretto.', { ok: 0.6, old: 0.5, mis: 0.5, inv: 0.2 }),
      K('k7', 3, 'Scrivi all’ufficio stampa dell’autorità', 'L’ufficio stampa risponde che il 62% è la copertura e invita a non confondere «copertura» con «abbonati».', { ok: 0.05, old: 0.1, mis: 0.95, inv: 0.05 }),
      K('k8', 2, 'Cerca un’indagine indipendente', 'Un’indagine indipendente stima fra il 29% e il 33% le famiglie con un abbonamento in fibra.', { ok: 0.1, old: 0.3, mis: 0.85, inv: 0.3 })
    ],
    explain: 'Il fatto che altri tre siti ripetano la frase (k5) sembra una conferma ma è quasi privo di valore: spesso copiano la stessa fonte, quindi non è un controllo indipendente. Il confine fra «dato vero ma frainteso» e «dato falso» si vede solo risalendo al documento originale (k3) o a una fonte indipendente (k8). La data (k4) esclude l’obsolescenza ma non il fraintendimento. Una fonte dichiarata (k2) esclude l’invenzione ma non le altre cause. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-muffa-angolo', level: 'L4', title: 'La macchia di muffa nell’angolo', budget: 5, open: true,
    intro: 'In una camera compare una macchia di muffa nell’angolo di una parete esterna. Come esercizio di ragionamento (non una perizia): le prove sono ambigue e le cause possibili sono diverse. Decidi se concludere o indicare quale controllo manca.',
    hyps: [{ id: 'cond', text: 'Condensa per scarsa ventilazione e parete fredda' }, { id: 'inf', text: 'Infiltrazione da una tubazione' }, { id: 'ris', text: 'Umidità che risale dal terreno' }, { id: 'tetto', text: 'Infiltrazione dal tetto o da una grondaia' }],
    start: ['k1'],
    clues: [
      K('k1', 0, '', 'Una macchia scura di circa 40×60 cm si trova in un angolo, a circa 1,8 m da terra, su una parete esterna.', { cond: 0.7, inf: 0.4, ris: 0.1, tetto: 0.5 }),
      K('k2', 1, 'Chiedi quando è comparsa', 'La macchia è comparsa in inverno e peggiora dopo le docce lunghe.', { cond: 0.7, inf: 0.4, ris: 0.3, tetto: 0.4 }),
      K('k3', 1, 'Chiedi dopo la pioggia', 'Dopo due giorni di pioggia forte l’umidità sembra aumentare, ma erano anche giorni molto freddi.', { cond: 0.55, inf: 0.4, ris: 0.5, tetto: 0.7 }),
      K('k4', 1, 'Misura l’umidità dell’aria', 'Un igrometro dà il 72% di umidità nella camera chiusa durante la notte con due persone.', { cond: 0.65, inf: 0.5, ris: 0.5, tetto: 0.5 }),
      K('k5', 1, 'Chiedi al vicino del piano di sopra', 'Il vicino del piano di sopra dice di non avere perdite, ma che «una volta il tubo del bagno gocciolava».', { cond: 0.4, inf: 0.6, ris: 0.3, tetto: 0.3 }),
      K('k6', 3, 'Misura l’umidità a contatto sulla parete', 'Un igrometro a contatto mostra umidità alta solo in circa 30 cm intorno alla macchia, normale altrove.', { cond: 0.6, inf: 0.5, ris: 0.2, tetto: 0.5 }),
      K('k7', 1, 'Guarda i bordi della macchia', 'Intorno alla macchia ci sono aloni giallastri con bordo netto.', { cond: 0.35, inf: 0.7, ris: 0.4, tetto: 0.7 }),
      K('k8', 2, 'Guarda la parete interna accanto', 'La parete interna adiacente è asciutta e senza macchie.', { cond: 0.6, inf: 0.5, ris: 0.45, tetto: 0.55 }),
      K('k9', 3, 'Fai una termografia', 'La termografia mostra una zona fredda in quell’angolo, compatibile con un ponte termico ma anche con umidità nel muro.', { cond: 0.55, inf: 0.5, ris: 0.15, tetto: 0.5 })
    ],
    explain: 'La condensa è la spiegazione più naturale (k2, k4), ma gli aloni con bordo netto (k7) e la memoria del vicino (k5) tengono vive le infiltrazioni, e la pioggia (k3) è confusa con il freddo. Anche le misure a contatto (k6, k9) sono compatibili con più cause. Nessuna ipotesi arriva a una soglia solida: concludere sarebbe un salto. La prova mancante più utile è un monitoraggio dell’umidità e della temperatura per alcuni giorni, insieme a un controllo diretto della tubazione e del tetto da parte di un tecnico. Le plausibilità sono stime dell’autore; il caso non è una perizia.' });

  /* ---------- L5 ---------- */
  D.add({ id: 'ded-conversione-calo', level: 'L5', title: 'La conversione che crolla', budget: 5,
    intro: 'Dopo il rilascio del nuovo design di un negozio online, la conversione registrata dal sito cala da 3,0% a 2,1%. Il marketing è convinto che il design sia peggiore. Distingui un fenomeno reale da un artefatto di misura, usando fonti indipendenti e costi molto diversi.',
    hyps: [{ id: 'track', text: 'Il tracciamento degli acquisti non registra più alcuni ordini' }, { id: 'rid', text: 'Il nuovo design ha peggiorato davvero la conversione' }, { id: 'traf', text: 'È cambiato il tipo di traffico (visite meno qualificate)' }, { id: 'stag', text: 'Calo stagionale' }, { id: 'filt', text: 'Un filtro di analisi conta ora più visite' }],
    truth: 'track', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il sito registra una conversione del 2,1% nella settimana dopo il nuovo design, contro il 3,0% della precedente.', { track: 0.6, rid: 0.7, traf: 0.5, stag: 0.4, filt: 0.4 }),
      K('k2', 1, 'Confronta con gli ordini del gestionale', 'Il gestionale (fonte indipendente) registra 535 ordini questa settimana contro 540 della precedente.', { track: 0.9, rid: 0.1, traf: 0.25, stag: 0.3, filt: 0.85 }),
      K('k3', 1, 'Guarda sessioni e ordini registrati dal sito', 'Le sessioni registrate sono 18.000 in entrambe le settimane; gli ordini registrati dal sito sono 378 contro 540.', { track: 0.95, rid: 0.3, traf: 0.2, stag: 0.3, filt: 0.1 }),
      K('k4', 3, 'Ispeziona la pagina di conferma con gli strumenti per sviluppatori', 'Nella nuova pagina di conferma l’evento «acquisto» non viene più inviato quando si paga con carta (funziona con bonifico).', { track: 0.97, rid: 0.05, traf: 0.05, stag: 0.05, filt: 0.05 }),
      K('k5', 1, 'Chiedi al responsabile marketing', 'Il responsabile marketing sostiene che il nuovo design «è meno chiaro» e che i clienti si perdono.', { track: 0.4, rid: 0.8, traf: 0.4, stag: 0.4, filt: 0.4 }),
      K('k6', 1, 'Guarda la provenienza del traffico', 'La quota di traffico da ricerca a pagamento è passata dal 20% al 24%.', { track: 0.4, rid: 0.4, traf: 0.6, stag: 0.4, filt: 0.4 }),
      K('k7', 1, 'Confronta con lo stesso periodo dell’anno scorso', 'Lo scorso anno, nella stessa settimana, il tasso era 2,9% rispetto al 3,0% della precedente.', { track: 0.7, rid: 0.7, traf: 0.7, stag: 0.1, filt: 0.7 }),
      K('k8', 2, 'Fai un ordine di prova con la carta', 'Un ordine di prova con carta, fatto dal team, non compare nelle statistiche del sito ma è nel gestionale.', { track: 0.97, rid: 0.2, traf: 0.2, stag: 0.2, filt: 0.2 }),
      K('k9', 1, 'Controlla i filtri di analisi', 'Nessuna modifica ai filtri di analisi dal mese scorso.', { track: 0.8, rid: 0.8, traf: 0.8, stag: 0.8, filt: 0.05 })
    ],
    explain: 'Il segnale decisivo è un dato indipendente dal sito: gli ordini del gestionale quasi invariati (k2) rendono implausibile un calo reale. Poi il confronto fra sessioni invariate e ordini registrati in calo (k3) esclude cambiamenti di traffico e di filtro. La prova diretta (k4, k8) conferma ma costa di più. Il parere del marketing (k5) è un’opinione e il piccolo aumento del traffico a pagamento (k6) è debole: non spiegano un calo del 30%. Verificare la misura prima di discutere il design è il punto. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-test-ab', level: 'L5', title: 'Il test A/B fermato troppo presto', budget: 5, open: true,
    intro: 'In un test A/B su 4.000 visitatori la versione B converte il 5,4% contro il 5,0% della A. Il team di prodotto vuole adottare B subito. Valuta se le prove permettono di concludere o se manca un controllo.',
    hyps: [{ id: 'b', text: 'B è davvero migliore' }, { id: 'caso', text: 'La differenza è dovuta al caso' }, { id: 'nov', text: 'Effetto novità temporaneo' }, { id: 'seg', text: 'B funziona solo su telefono' }, { id: 'bias', text: 'Assegnazione ai gruppi sbilanciata' }],
    start: ['k1'],
    clues: [
      K('k1', 0, '', 'La versione B converte il 5,4% contro il 5,0% della A (+0,4 punti) su 4.000 visitatori.', { b: 0.6, caso: 0.6, nov: 0.5, seg: 0.5, bias: 0.4 }),
      K('k2', 1, 'Chiedi come è stato fermato il test', 'Il test è stato fermato dopo 6 giorni perché «B stava vincendo», invece dei 14 previsti.', { b: 0.5, caso: 0.75, nov: 0.6, seg: 0.5, bias: 0.5 }),
      K('k3', 1, 'Guarda l’intervallo di incertezza', 'L’intervallo di incertezza della differenza va da -0,9 a +1,7 punti percentuali.', { b: 0.5, caso: 0.8, nov: 0.5, seg: 0.5, bias: 0.5 }),
      K('k4', 2, 'Controlla come sono stati assegnati i visitatori', 'Il 58% dei visitatori è stato assegnato a B e il 42% ad A, mentre l’assegnazione doveva essere 50/50.', { b: 0.4, caso: 0.4, nov: 0.4, seg: 0.4, bias: 0.85 }),
      K('k5', 2, 'Separa i risultati per dispositivo', 'Su telefono B converte il 6,5% contro il 5,1% (circa 1.400 visite); su computer il 4,7% contro il 4,9%.', { b: 0.4, caso: 0.35, nov: 0.4, seg: 0.8, bias: 0.4 }),
      K('k6', 1, 'Guarda l’andamento giorno per giorno', 'Il vantaggio di B è di +1,2 punti nei primi due giorni e di +0,1 negli ultimi due.', { b: 0.35, caso: 0.55, nov: 0.85, seg: 0.4, bias: 0.4 }),
      K('k7', 3, 'Esegui un test A/A (due versioni identiche)', 'Un test A/A sullo stesso sistema, con lo stesso numero di visitatori, mostra una differenza di +0,3 punti fra due versioni identiche.', { b: 0.5, caso: 0.85, nov: 0.5, seg: 0.5, bias: 0.5 }),
      K('k8', 1, 'Chiedi al team di prodotto', 'Il team è convinto che B sia migliore perché «è più bella».', { b: 0.6, caso: 0.45, nov: 0.45, seg: 0.45, bias: 0.45 })
    ],
    explain: 'Il caso è aperto: il test è stato fermato quando B era in vantaggio (k2), l’intervallo include lo zero (k3) e un test A/A (k7) mostra che differenze simili nascono per caso. In più l’assegnazione sbilanciata (k4) è un campanello d’allarme sul metodo e il vantaggio che si riduce nel tempo (k6) suggerisce un effetto novità. La differenza per dispositivo (k5) è un’analisi a posteriori su sottogruppi, facilmente casuale. La prova mancante è un test completo, con durata e dimensione decise prima, assegnazione controllata e confronto per dispositivo pianificato. Le plausibilità sono stime dell’autore.' });

  D.add({ id: 'ded-router-riavvii', level: 'L5', title: 'Il router che si riavvia da solo', budget: 5, open: true,
    intro: 'Un router domestico si riavvia da solo una o due volte a settimana, a orari diversi, da tre settimane. Hai cinque ipotesi, fonti di affidabilità diversa e verifiche di costo molto diverso. Valuta se puoi concludere o se serve una prova che ancora manca.',
    hyps: [{ id: 'alim', text: 'L’alimentatore è difettoso' }, { id: 'calore', text: 'Il router si surriscalda nel mobiletto' }, { id: 'firm', text: 'Un difetto del firmware aggiornato di recente' }, { id: 'linea', text: 'Disturbi sulla linea del provider' }, { id: 'sovr', text: 'Troppi dispositivi collegati' }],
    start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il router si riavvia circa una o due volte a settimana, a orari diversi, da tre settimane.', { alim: 0.6, calore: 0.5, firm: 0.5, linea: 0.3, sovr: 0.4 }),
      K('k2', 1, 'Controlla la data dell’ultimo aggiornamento', 'Il firmware è stato aggiornato quattro settimane fa, una settimana prima del primo riavvio.', { alim: 0.5, calore: 0.5, firm: 0.75, linea: 0.5, sovr: 0.5 }),
      K('k3', 1, 'Tocca il router', 'Il router è in un mobiletto chiuso ma al tatto è solo tiepido.', { alim: 0.5, calore: 0.4, firm: 0.5, linea: 0.5, sovr: 0.5 }),
      K('k4', 1, 'Chiedi al provider i registri di linea', 'Il provider dice di non vedere errori di linea registrati negli orari dei riavvii.', { alim: 0.75, calore: 0.75, firm: 0.75, linea: 0.15, sovr: 0.75 }),
      K('k5', 1, 'Conta i dispositivi collegati', 'I dispositivi collegati sono 11, come da mesi.', { alim: 0.7, calore: 0.7, firm: 0.7, linea: 0.7, sovr: 0.35 }),
      K('k6', 3, 'Prova un alimentatore in prestito per qualche giorno', 'Con un alimentatore in prestito, nei sei giorni seguenti non ci sono riavvii.', { alim: 0.9, calore: 0.45, firm: 0.45, linea: 0.45, sovr: 0.45 }),
      K('k7', 1, 'Leggi il registro del router', 'Dopo ogni riavvio il registro riporta solo «avvio di sistema», senza messaggi di errore precedenti.', { alim: 0.65, calore: 0.5, firm: 0.4, linea: 0.35, sovr: 0.35 }),
      K('k8', 2, 'Guarda a che ora avvengono i riavvii', 'Quattro dei sei riavvii sono avvenuti fra le 15 e le 19.', { alim: 0.45, calore: 0.6, firm: 0.4, linea: 0.35, sovr: 0.55 }),
      K('k9', 2, 'Misura la temperatura nel mobiletto', 'Dopo tre ore con le ante chiuse il mobiletto misura 34 °C; il manuale indica una temperatura massima di 40 °C.', { alim: 0.75, calore: 0.15, firm: 0.75, linea: 0.75, sovr: 0.75 })
    ],
    explain: 'I problemi intermittenti sono difficili perché ogni prova negativa può dipendere dal tempo di osservazione: sei giorni senza riavvii (k6) potrebbero capitare anche per caso, con riavvii ogni tre-cinque giorni. Il registro (k7) che mostra solo «avvio di sistema» è compatibile con un’interruzione di alimentazione, ma non la dimostra. Il mobiletto sotto i 40 °C (k9) indebolisce il surriscaldamento; i dispositivi invariati (k5) indeboliscono il sovraccarico; la linea (k4) è una fonte esterna. Resta aperto: la prova mancante è una prova prolungata con alimentatore sostituito e registro attivo per almeno un paio di settimane. Le plausibilità sono stime dell’autore.' });
})(window.ST = window.ST || {});
