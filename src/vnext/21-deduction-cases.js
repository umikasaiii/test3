/* vNext M3 — Deduction Lab: casi (set pilota). Ogni caso supera D.validate (soluzione coerente con le plausibilità dichiarate). */
(function (ST) {
  'use strict';
  const D = ST.sma.deduction;
  const K = (id, cost, ask, text, lik) => ({ id, cost, ask, text, lik });

  D.add({ id: 'ded-sito-lento', level: 'L1', title: 'Il sito che rallenta', budget: 5,
    intro: 'Il sito di un negozio online è lento da tre giorni. Il titolare vuole sapere da dove cominciare a intervenire. Hai un budget di verifica limitato: scegli bene quali controlli fare.',
    hyps: [{ id: 'db', text: 'Il database è sovraccarico' }, { id: 'net', text: 'La rete del provider ha un problema' }, { id: 'img', text: 'Le pagine pesano troppo (immagini non ottimizzate)' }, { id: 'bot', text: 'Un traffico anomalo (bot) sta saturando il sito' }],
    truth: 'img', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Gli utenti segnalano lentezza soprattutto sulla pagina catalogo; la pagina contatti è veloce.', { db: 0.6, net: 0.15, img: 0.8, bot: 0.3 }),
      K('k2', 1, 'Misura il tempo di risposta del server', 'Il server risponde in 90 ms anche mentre gli utenti lamentano la lentezza.', { db: 0.1, net: 0.5, img: 0.9, bot: 0.15 }),
      K('k3', 1, 'Controlla il peso della pagina catalogo', 'La pagina catalogo carica 48 immagini da circa 2 MB ciascuna.', { db: 0.3, net: 0.3, img: 0.95, bot: 0.3 }),
      K('k4', 1, 'Guarda il grafico delle richieste', 'Il traffico è nella norma: nessun picco di richieste negli ultimi giorni.', { db: 0.7, net: 0.8, img: 0.8, bot: 0.05 }),
      K('k5', 2, 'Prova altri siti dello stesso provider', 'Altri siti ospitati dallo stesso provider si aprono a velocità normale.', { db: 0.8, net: 0.1, img: 0.8, bot: 0.7 }),
      K('k6', 2, 'Controlla il carico del database', 'Il processore del database è al 20% di utilizzo.', { db: 0.05, net: 0.8, img: 0.8, bot: 0.5 }),
      K('k7', 1, 'Prova dall’ufficio con fibra veloce', 'Dalla fibra dell’ufficio la pagina catalogo impiega comunque 6 secondi a comparire per intero.', { db: 0.3, net: 0.15, img: 0.9, bot: 0.4 }),
      K('k8', 1, 'Prova dal telefono con i dati mobili', 'Dal telefono con i dati mobili la pagina impiega 14 secondi.', { db: 0.3, net: 0.5, img: 0.9, bot: 0.3 })
    ],
    explain: 'Le prove più utili sono quelle che separano le ipotesi: un server che risponde in fretta (k2) e un carico del database basso (k6) allontanano database e rete; il peso della pagina (k3) e il fatto che la lentezza resta anche con fibra veloce (k7) indicano le immagini. Un buon investigatore non si ferma alla prima ipotesi plausibile: sceglie verifiche che potrebbero smentirla. Le plausibilità usate per il calcolo sono stime didattiche.' });

  D.add({ id: 'ded-documento-modificato', level: 'L1', title: 'Chi ha cambiato il budget?', budget: 5,
    intro: 'Giovedì pomeriggio una cifra del budget in un documento condiviso è passata da 12.000 a 21.000 €. La piattaforma registra soltanto l’account del team, non la persona. Quattro colleghi avevano accesso: Anna, Bruno, Carla e Dario. Distingui fatti verificati, testimonianze e supposizioni.',
    hyps: [{ id: 'a', text: 'Anna' }, { id: 'b', text: 'Bruno' }, { id: 'c', text: 'Carla' }, { id: 'd', text: 'Dario' }],
    truth: 'c', start: ['k1'],
    clues: [
      K('k1', 0, '', 'La modifica è avvenuta giovedì fra le 15:00 e le 16:00, dalla rete dell’ufficio o da un accesso remoto: il registro non lo distingue ancora.', { a: 0.8, b: 0.8, c: 0.8, d: 0.8 }),
      K('k2', 1, 'Controlla il registro della videochiamata', 'Anna era in videochiamata con un cliente dalle 14:30 alle 16:30 (registro della chiamata).', { a: 0.03, b: 0.9, c: 0.9, d: 0.9 }),
      K('k3', 1, 'Controlla il badge di Bruno', 'Il badge registra l’uscita di Bruno alle 14:52 e nessun rientro.', { a: 0.9, b: 0.15, c: 0.9, d: 0.9 }),
      K('k4', 2, 'Chiedi l’indirizzo IP della modifica', 'L’indirizzo IP della modifica appartiene alla rete dell’ufficio.', { a: 0.9, b: 0.1, c: 0.9, d: 0.9 }),
      K('k5', 1, 'Ascolta Dario', 'Dario dice di aver visto Carla al computer con il documento aperto verso le 15:20.', { a: 0.2, b: 0.2, c: 0.8, d: 0.3 }),
      K('k6', 1, 'Ascolta Carla', 'Carla dichiara di non aver toccato il documento e di essere stata in riunione alle 15:00.', { a: 0.9, b: 0.9, c: 0.4, d: 0.9 }),
      K('k7', 2, 'Chiedi il verbale della sala riunioni', 'Il verbale della sala riunioni indica che la riunione di Carla è finita alle 14:55.', { a: 0.4, b: 0.4, c: 0.8, d: 0.4 }),
      K('k8', 1, 'Guarda la cronologia delle versioni', 'La cifra modificata è nel capitolo di cui Carla è responsabile; Dario non ha incarichi su quel capitolo.', { a: 0.3, b: 0.3, c: 0.8, d: 0.2 })
    ],
    explain: 'Un fatto verificato (registro della chiamata, badge, IP, verbale) pesa più di una testimonianza, che può essere errata o interessata. Qui due fatti escludono quasi del tutto Anna e Bruno; la testimonianza di Dario da sola non basta, ma insieme alla smentita del verbale sulla dichiarazione di Carla e alla responsabilità sul capitolo rende Carla l’ipotesi di gran lunga più probabile. «Molto probabile» non è «dimostrato»: la conclusione resta soggetta a nuove prove (per esempio una verifica diretta con Carla).' });

  D.add({ id: 'ded-batteria', level: 'L2', title: 'La batteria che si scarica', budget: 5,
    intro: 'Da due settimane lo smartphone di un collega si scarica in poche ore anche con lo schermo spento. Prima di spendere soldi per una batteria nuova vuoi capire la causa. Ogni test ha un costo in tempo.',
    hyps: [{ id: 'batt', text: 'La batteria è degradata' }, { id: 'app', text: 'Un’app consuma in background' }, { id: 'cab', text: 'Il caricabatterie è difettoso' }, { id: 'heat', text: 'Il telefono si surriscalda' }],
    truth: 'app', start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il telefono passa dal 100% al 20% in circa 5 ore con lo schermo quasi sempre spento.', { batt: 0.6, app: 0.8, cab: 0.3, heat: 0.4 }),
      K('k2', 1, 'Controlla la salute della batteria', 'Le impostazioni indicano una capacità massima del 93% rispetto a quella originale.', { batt: 0.08, app: 0.85, cab: 0.8, heat: 0.8 }),
      K('k3', 1, 'Guarda il consumo per app', 'Il consumo per app mostra un’app di navigazione al 41%, con accesso alla posizione «sempre».', { batt: 0.2, app: 0.95, cab: 0.2, heat: 0.3 }),
      K('k4', 1, 'Osserva la ricarica notturna', 'La carica notturna arriva sempre al 100% con tempi normali.', { batt: 0.5, app: 0.8, cab: 0.15, heat: 0.7 }),
      K('k5', 1, 'Tocca il telefono durante l’uso', 'Il telefono non risulta caldo e non compaiono avvisi di temperatura.', { batt: 0.6, app: 0.7, cab: 0.6, heat: 0.1 }),
      K('k6', 3, 'Spegni la posizione per quell’app per un giorno', 'Dopo aver tolto l’accesso «sempre» alla posizione, in una giornata il consumo scende a circa il 25%.', { batt: 0.15, app: 0.9, cab: 0.2, heat: 0.25 }),
      K('k7', 2, 'Prova un altro caricabatterie', 'Con un caricabatterie diverso la durata non cambia.', { batt: 0.8, app: 0.85, cab: 0.05, heat: 0.8 }),
      K('k8', 1, 'Riavvia il telefono', 'Dopo un riavvio la durata torna normale per mezza giornata, poi peggiora di nuovo.', { batt: 0.15, app: 0.6, cab: 0.3, heat: 0.3 })
    ],
    explain: 'La salute della batteria al 93% (k2) rende poco credibile l’ipotesi «batteria» e il consumo per app (k3) punta direttamente su un’app in background. Il test d’intervento (k6) è il più costoso ma anche il più decisivo, perché cambia la causa e osserva l’effetto: è la differenza fra una correlazione e una prova causale. Non serve spendere per gli altri test se l’ipotesi migliore ha già superato la soglia che ti sei dato.' });

  D.add({ id: 'ded-vendite-calo', level: 'L3', title: 'Perché sono calate le vendite?', budget: 4, open: true,
    intro: 'In un negozio le vendite sono scese del 12% rispetto allo scorso anno. Il titolare ti chiede una diagnosi. Le informazioni a disposizione sono poche e ambigue: concludere o sospendere il giudizio è una decisione da motivare.',
    hyps: [{ id: 'prezzo', text: 'Il prezzo è percepito come troppo alto' }, { id: 'stag', text: 'Un calo stagionale/del contesto, indipendente dal negozio' }, { id: 'conc', text: 'Un concorrente ha aperto nelle vicinanze' }, { id: 'qual', text: 'La qualità o il servizio sono peggiorati' }],
    start: ['k1'],
    clues: [
      K('k1', 0, '', 'Il calo riguarda sia l’incasso totale sia il numero di scontrini, ma con più forza i clienti occasionali.', { prezzo: 0.6, stag: 0.6, conc: 0.7, qual: 0.55 }),
      K('k2', 1, 'Confronta i mesi dello scorso anno', 'Nello stesso periodo dello scorso anno c’era già un calo del 4% rispetto all’anno precedente.', { prezzo: 0.55, stag: 0.7, conc: 0.5, qual: 0.55 }),
      K('k3', 1, 'Chiedi ai clienti abituali', 'Tre clienti abituali su cinque intervistati dicono di aver «provato anche il nuovo negozio in via Verdi».', { prezzo: 0.45, stag: 0.35, conc: 0.75, qual: 0.5 }),
      K('k4', 1, 'Controlla i prezzi', 'I prezzi sono saliti del 6% in un anno, più dell’inflazione media del settore (3%).', { prezzo: 0.7, stag: 0.5, conc: 0.55, qual: 0.5 }),
      K('k5', 2, 'Leggi le recensioni online', 'Le recensioni sono nel complesso positive; due su venti citano tempi di attesa più lunghi.', { prezzo: 0.6, stag: 0.6, conc: 0.55, qual: 0.4 }),
      K('k6', 2, 'Confronta con negozi simili in città', 'Due negozi simili in altre zone della città riportano un calo di circa il 5%.', { prezzo: 0.5, stag: 0.7, conc: 0.45, qual: 0.5 })
    ],
    explain: 'Con questi dati nessuna ipotesi domina: più cause possono coesistere (il calo del contesto, il prezzo, la nuova apertura) e le prove disponibili sono tutte ambigue. Concludere con sicurezza sarebbe un errore di ragionamento anche se, per caso, indovinasse. Sospendere il giudizio non significa non decidere: significa indicare quale prova mancante sarebbe più utile (per esempio il confronto fra clienti persi e clienti che comprano ancora, o un test di prezzo su una parte dei prodotti) e quale azione a basso costo intraprendere nel frattempo.' });
})(window.ST = window.ST || {});
