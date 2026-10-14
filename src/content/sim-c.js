/* SkillTree — scenari di strategia a carte (parte C): guidare una squadra e gestire una piccola attività. Tutto inventato e didattico. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  const ch = (label, principle, out, hint) => hint ? { label, principle, hint, out } : { label, principle, out };
  const card = (id, lv, text, choices) => ({ id, lv, text, choices });

  /* ---- 1) Guidare una squadra di sei persone verso una consegna ---- */
  SIM.register({
    id: 'team', title: 'Guidare una squadra di sei persone verso una consegna', icon: '👥',
    intro: 'Guidi sei persone che devono consegnare un progetto a un cliente fra 30 giorni. Ogni decisione costa o libera tempo e muove produttività, morale e fiducia del gruppo. Il punteggio premia i giorni di margine rimasti (sforare conta come perdita) e la salute della squadra a fine progetto: morale, fiducia e produttività.',
    vars: {
      produttivita: { label: 'Produttività', start: 50, min: 0, max: 100 },
      morale: { label: 'Morale', start: 65, min: 0, max: 100 },
      fiducia: { label: 'Fiducia nel leader', start: 60, min: 0, max: 100 },
      scadenza: { label: 'Giorni residui (negativi = ritardo)', start: 30, min: -40, max: 40, unit: 'gg', tight: true }
    },
    weights: { produttivita: 0.6, morale: 0.4, fiducia: 0.4, scadenza: 1.6 },
    penalties: [],
    turns: 5, utilText: '1,6 × giorni residui (negativi se in ritardo) + 0,6 × produttività + 0,4 × morale + 0,4 × fiducia',
    cards: [
      card('t-conflitto', 1, 'Marta (backend) e Luca (frontend) litigano da una settimana su chi debba adattare l’interfaccia: si rispondono a monosillabi e il lavoro si blocca. Mancano 30 giorni.', [
        ch('Li metti a un tavolo e arbitri subito, decidendo tu', 'Collo di bottiglia', [o(0.75, { scadenza: -1, morale: 3, produttivita: 5 }, 'Decisione chiara, il lavoro riparte; uno dei due borbotta ma accetta.'), o(0.25, { scadenza: -1, morale: -6, fiducia: -4 }, 'Chi perde si sente scavalcato e lo dice agli altri.')]),
        ch('Lasci che si accordino da soli, intervieni solo se peggiora', 'Costo opportunità', [o(0.45, { scadenza: -1, produttivita: 3, fiducia: 3 }, 'Trovano un compromesso e ne escono rafforzati.'), o(0.55, { scadenza: -4, produttivita: -6, morale: -6 }, 'Si ignorano per altri tre giorni e il blocco si allarga.')]),
        ch('Mediazione strutturata: ascolti entrambi separatamente, poi insieme', 'Informazione prima di decidere', [o(1, { scadenza: -3, morale: 5, fiducia: 5 }, 'Costa tre giorni di attenzione ma emerge il vero problema (un requisito ambiguo) e viene risolto.')])
      ]),
      card('t-star', 3, 'Sara, la tua sviluppatrice migliore, lavora da due settimane fino a mezzanotte. Produce il doppio degli altri, ma ieri ha risposto male a un collega e ha l’aria stanca.', [
        ch('Le chiedi di mantenere il ritmo: il progetto lo richiede', 'Ridondanza/buffer', [o(0.55, { produttivita: 8, scadenza: 1, morale: -3 }, 'Regge ancora, guadagni qualche giorno.'), o(0.45, { produttivita: -14, morale: -8, scadenza: -4 }, 'Crolla: tre giorni di malattia e il suo lavoro resta incompiuto.')]),
        ch('La obblighi a staccare due giorni e redistribuisci il suo carico', 'Reversibilità', [o(1, { produttivita: -4, scadenza: -2, morale: 6, fiducia: 5 }, 'Rallenti ora, ma Sara torna lucida e il gruppo vede che ti prendi cura di loro.')]),
        ch('Parli con lei e concordate un orario sostenibile con un obiettivo preciso', 'Informazione prima di decidere', [o(0.7, { produttivita: 2, morale: 4, fiducia: 4, scadenza: -1 }, 'Capisce, riduce le ore senza perdere la qualità.'), o(0.3, { produttivita: -3, morale: 1, scadenza: -2 }, 'Annuisce ma continua a strafare di nascosto.')])
      ]),
      card('t-scope', 4, 'Il cliente chiede una funzione aggiuntiva “piccola”: la stima onesta è 6 giorni di lavoro. Ha già dato segnali di scontento per una consegna precedente.', [
        ch('Accetti senza discutere per tenerlo contento', 'Costo opportunità', [o(0.6, { scadenza: -6, fiducia: -3, morale: -4 }, 'Il cliente è felice, ma la squadra si ritrova sommersa.'), o(0.4, { scadenza: -8, fiducia: -5, morale: -6, produttivita: -4 }, 'La funzione si rivela più complessa del previsto.')]),
        ch('Dici no e proponi di rinviarla a una seconda fase', 'Saper dire di no', [o(0.7, { scadenza: 0, fiducia: 4, morale: 3 }, 'Il cliente accetta la seconda fase, la squadra respira.'), o(0.3, { scadenza: -2, fiducia: -2, morale: -2 }, 'Il cliente si irrita e richiede riunioni di chiarimento.')]),
        ch('Accetti solo in cambio di più tempo e un budget extra', 'Anticipare il secondo ordine', [o(0.5, { scadenza: 3, fiducia: 3, produttivita: 2 }, 'Ottieni una settimana di proroga: il lavoro extra è coperto.'), o(0.5, { scadenza: -3, fiducia: -2, morale: -2 }, 'La trattativa fallisce e perdi due giorni in negoziati.')])
      ]),
      card('t-onboard', 5, 'A due settimane dalla fine il direttore ti assegna un nuovo collega, Davide, bravo ma che non conosce il progetto. Ti chiede di inserirlo subito.', [
        ch('Lo inserisci subito e lo affianchi a Marta', 'Costo opportunità', [o(0.5, { produttivita: -8, scadenza: -3, morale: 2 }, 'Marta perde mezze giornate per spiegare; Davide rende solo alla fine.'), o(0.5, { produttivita: 4, scadenza: 1, morale: 3 }, 'Davide impara in fretta e prende un modulo isolato.')]),
        ch('Gli assegni un compito autonomo e ben circoscritto (documentazione e test)', 'Ridondanza/buffer', [o(0.8, { produttivita: 3, scadenza: -1, morale: 2 }, 'Un compito utile che non intasa nessuno.'), o(0.2, { produttivita: -2, scadenza: -2 }, 'Il compito risulta meno utile del previsto.')]),
        ch('Chiedi al direttore di rinviare il suo arrivo a dopo la consegna', 'Saper dire di no', [o(0.6, { fiducia: 2, morale: 2, scadenza: 0 }, 'Il direttore capisce: nessuna distrazione.'), o(0.4, { fiducia: -5, scadenza: 0 }, 'Il direttore la prende male: sembri poco collaborativo.')])
      ]),
      card('t-delega', 2, 'Hai sei sotto-compiti da distribuire. Carlo, junior, ha chiesto di guidare il modulo di reportistica. Finora ha sempre consegnato in ritardo.', [
        ch('Gli affidi il modulo e non controlli', 'Reversibilità', [o(0.4, { morale: 6, fiducia: 5, produttivita: 4 }, 'Carlo si sente valorizzato e consegna bene.'), o(0.6, { scadenza: -5, produttivita: -5, fiducia: -2 }, 'Consegna in ritardo e il modulo va rifatto in parte.')]),
        ch('Gli affidi il modulo con controlli brevi ogni due giorni', 'Informazione prima di decidere', [o(0.8, { morale: 3, fiducia: 3, produttivita: 3, scadenza: -1 }, 'Il modulo procede, i problemi emergono presto.'), o(0.2, { morale: -2, produttivita: -2, scadenza: -2 }, 'Carlo vive i controlli come sfiducia.')]),
        ch('Tieni il modulo a Marta e gli dai solo compiti di supporto', 'Collo di bottiglia', [o(1, { produttivita: 2, scadenza: -2, morale: -4, fiducia: -2 }, 'Marta è già sovraccarica; Carlo si demotiva.')])
      ]),
      card('t-errore', 7, 'Durante i test scopri che un errore di calcolo, introdotto tre settimane fa, falsa i totali nei report. Il cliente non se n’è ancora accorto e la consegna è tra 12 giorni.', [
        ch('Lo correggi in silenzio, senza dirlo al cliente', 'Anticipare il secondo ordine', [o(0.65, { scadenza: -3, produttivita: -2, fiducia: 1 }, 'Corretto senza clamore; nessuno se ne accorge.'), o(0.35, { scadenza: -4, fiducia: -12, morale: -6 }, 'Il cliente trova lo scarto nei dati vecchi e si sente ingannato.')]),
        ch('Lo segnali subito al cliente con un piano di correzione', 'Informazione prima di decidere', [o(0.8, { scadenza: -4, fiducia: 6, morale: 2 }, 'Il cliente apprezza la trasparenza e concede tempo per il controllo.'), o(0.2, { scadenza: -6, fiducia: -2, morale: -4 }, 'Il cliente si arrabbia e pretende una verifica completa.')]),
        ch('Cerchi chi ha introdotto l’errore e lo richiami davanti a tutti', 'Anticipare il secondo ordine', [o(1, { scadenza: -4, morale: -10, fiducia: -8, produttivita: -3 }, 'La squadra smette di segnalare i propri sbagli.')])
      ]),
      card('t-remoto', 3, 'Metà della squadra vorrebbe lavorare da remoto nelle ultime settimane. La sala riunioni è libera solo tre giorni a settimana e i problemi di integrazione si risolvono meglio di persona.', [
        ch('Tutti in presenza fino alla consegna', 'Reversibilità', [o(0.75, { produttivita: 6, scadenza: 1, morale: -6 }, 'Si decide più in fretta, ma il malumore cresce.'), o(0.25, { produttivita: 2, morale: -10, fiducia: -4 }, 'Due persone si lamentano apertamente degli spostamenti.')]),
        ch('Remoto libero, con un check-in quotidiano di 15 minuti', 'Ridondanza/buffer', [o(0.6, { morale: 5, produttivita: 2, fiducia: 3 }, 'La libertà viene ripagata con puntualità.'), o(0.4, { produttivita: -6, scadenza: -2, morale: 2 }, 'Qualche incomprensione si trascina per giorni.')]),
        ch('Presenza solo per i giorni di integrazione e remoto per il resto', 'Collo di bottiglia', [o(1, { produttivita: 4, morale: 2, fiducia: 2, scadenza: 0 }, 'Un compromesso che tiene insieme le esigenze.')])
      ]),
      card('t-riconoscimento', 1, 'La squadra ha chiuso un modulo difficile con tre giorni di anticipo. Hai un budget minimo di 200 euro e puoi concedere mezza giornata libera.', [
        ch('Offri una cena e ringrazi pubblicamente uno per uno', 'Anticipare il secondo ordine', [o(1, { morale: 9, fiducia: 4, scadenza: -1 }, 'Atmosfera ottima, si perde un pomeriggio.')]),
        ch('Mezza giornata libera per tutti', 'Costo opportunità', [o(0.8, { morale: 6, fiducia: 2, scadenza: -2 }, 'Il gruppo ricarica le energie.'), o(0.2, { morale: 6, scadenza: -2, produttivita: -2 }, 'Il ritmo si perde per un paio di giorni.')]),
        ch('Un semplice grazie in chat e subito al modulo seguente', 'Costo opportunità', [o(0.6, { scadenza: 1, produttivita: 3, morale: -3 }, 'Si guadagna tempo, ma senza entusiasmo.'), o(0.4, { scadenza: 1, morale: -8, fiducia: -3 }, 'Qualcuno nota che il suo sforzo è passato inosservato.')])
      ]),
      card('t-riunioni', 2, 'Il calendario è invaso da riunioni: 11 ore a settimana tra aggiornamenti, sincronizzazioni con il cliente e call interne. Il gruppo comincia a lamentarsene.', [
        ch('Tagli tutto tranne un aggiornamento da 20 minuti al giorno', 'Collo di bottiglia', [o(0.7, { produttivita: 8, scadenza: 2, morale: 3 }, 'Più ore di lavoro vero, meno interruzioni.'), o(0.3, { produttivita: 3, scadenza: 1, fiducia: -5 }, 'Il cliente si sente trascurato e chiede chiarimenti.')]),
        ch('Mantieni tutto per non perdere informazioni', 'Informazione prima di decidere', [o(1, { produttivita: -4, scadenza: -2, morale: -3, fiducia: 2 }, 'Tutti informati, ma il lavoro avanza poco.')]),
        ch('Sposti gli aggiornamenti per iscritto e tieni solo una riunione settimanale', 'Reversibilità', [o(0.65, { produttivita: 6, scadenza: 1, morale: 2 }, 'Funziona bene dopo un paio di giorni di assestamento.'), o(0.35, { produttivita: 1, scadenza: -1, fiducia: -3 }, 'I messaggi scritti vengono letti male e nascono equivoci.')])
      ]),
      card('t-bus', 6, 'Hai notato che solo Marta conosce il modulo di pagamento. Se si ammalasse in questi ultimi giorni il progetto si fermerebbe. Documentare e farlo imparare a un secondo richiede almeno 3 giorni.', [
        ch('Ignori il rischio: c’è troppo da fare', 'Ridondanza/buffer', [o(0.8, { produttivita: 3, scadenza: 0 }, 'Per fortuna Marta resta in salute.'), o(0.2, { produttivita: -12, scadenza: -6, morale: -4 }, 'Marta si ammala per cinque giorni: nessuno sa dove mettere le mani.')]),
        ch('Fai fare un affiancamento a Davide: 3 giorni di Marta dedicati', 'Ridondanza/buffer', [o(1, { scadenza: -3, produttivita: -3, fiducia: 4, morale: 2 }, 'Il rischio è coperto, ma paghi in tempo e in velocità.')]),
        ch('Chiedi a Marta di scrivere una guida in mezza giornata', 'Reversibilità', [o(0.6, { scadenza: -1, fiducia: 2, produttivita: 1 }, 'Una guida sintetica che basta a evitare il disastro.'), o(0.4, { scadenza: -2, morale: -3 }, 'La guida è troppo vaga e Marta si sente messa sotto pressione.')])
      ]),
      card('t-straordinari', 8, 'Mancano 9 giorni e il lavoro accumulato è superiore alla capacità: senza intervento sforerai di 5 giorni. Il direttore ti suggerisce di imporre straordinari per due settimane.', [
        ch('Imponi gli straordinari a tutti', 'Anticipare il secondo ordine', [o(0.55, { scadenza: 4, produttivita: 8, morale: -14, fiducia: -8 }, 'Recuperi i giorni, ma la squadra è esausta.'), o(0.45, { scadenza: 1, produttivita: -4, morale: -18, fiducia: -12 }, 'Gli errori aumentano e due persone minacciano di andarsene.')]),
        ch('Tagli le funzioni non essenziali dopo averle concordate con il cliente', 'Informazione prima di decidere', [o(0.6, { scadenza: 5, morale: 3, fiducia: 2, produttivita: 3 }, 'Il cliente accetta di togliere due funzioni: il resto è fattibile.'), o(0.4, { scadenza: 2, fiducia: -6, morale: -2 }, 'Il cliente rifiuta di tagliare e perdi due giorni nella discussione.')]),
        ch('Chiedi volontari per straordinari limitati e compensati', 'Reversibilità', [o(0.7, { scadenza: 3, produttivita: 5, morale: -3, fiducia: 3 }, 'Tre persone si offrono e il resto tiene il ritmo.'), o(0.3, { scadenza: 1, produttivita: 1, morale: -5, fiducia: -2 }, 'Pochi volontari e qualche tensione.')])
      ]),
      card('t-formazione', 2, 'Un corso interno di due giorni su uno strumento di test automatici potrebbe far risparmiare tempo nelle fasi finali, ma ora ogni giorno conta.', [
        ch('Fai fare il corso a tutta la squadra', 'Costo opportunità', [o(0.65, { scadenza: -2, produttivita: 9, morale: 3 }, 'I test automatici abbreviano le verifiche finali.'), o(0.35, { scadenza: -2, produttivita: 1, morale: 1 }, 'Il corso è troppo generico e serve a poco.')]),
        ch('Mandi solo una persona e lei insegna agli altri a spizzichi', 'Collo di bottiglia', [o(0.7, { scadenza: -1, produttivita: 4, fiducia: 1 }, 'Un buon compromesso.'), o(0.3, { scadenza: -1, produttivita: -1 }, 'Il tempo del formatore pesa sul suo lavoro.')]),
        ch('Rinvii: non c’è tempo per imparare ora', 'Costo opportunità', [o(1, { scadenza: 0, produttivita: -2, morale: -1 }, 'Si va avanti con i metodi consueti.')])
      ]),
      card('t-demo', 4, 'Il cliente chiede una demo intermedia entro tre giorni. Prepararla costa un giorno e mezzo di lavoro, ma farebbe emergere eventuali fraintendimenti prima della fine.', [
        ch('Fai la demo con la versione attuale, anche se incompleta', 'Informazione prima di decidere', [o(0.7, { scadenza: -2, fiducia: 5, produttivita: 3 }, 'Il cliente corregge subito due richieste fraintese: evitati rifacimenti.'), o(0.3, { scadenza: -4, fiducia: -3, morale: -3 }, 'Il cliente chiede cambiamenti sostanziali.')]),
        ch('Rifiuti la demo e consegni tutto alla fine', 'Reversibilità', [o(0.55, { scadenza: 1, produttivita: 3 }, 'Nessun intoppo: guadagni tempo.'), o(0.45, { scadenza: -6, fiducia: -6, morale: -4 }, 'A fine lavoro emerge un fraintendimento grosso: rifacimenti.')]),
        ch('Offri una breve presentazione su diapositive', 'Costo opportunità', [o(1, { scadenza: -1, fiducia: 2 }, 'Il cliente si tranquillizza solo in parte.')])
      ]),
      card('t-uscita', 9, 'Luca ha ricevuto un’offerta da un’altra azienda e te lo confida. Vorrebbe restare, ma chiede un aumento che non puoi concedere da solo; è l’unico a conoscere il frontend.', [
        ch('Prometti di battertelo con la direzione dopo la consegna', 'Anticipare il secondo ordine', [o(0.55, { fiducia: 4, morale: 2, produttivita: 2 }, 'Luca si fida e resta fino alla consegna.'), o(0.45, { fiducia: -8, morale: -4, produttivita: -10, scadenza: -4 }, 'Luca non ci crede, accetta l’offerta e lascia a metà lavoro.')]),
        ch('Porti subito la richiesta alla direzione, anche a costo di sembrare insistente', 'Informazione prima di decidere', [o(0.6, { fiducia: 7, morale: 4, scadenza: -1 }, 'La direzione concede un riconoscimento e Luca resta.'), o(0.4, { fiducia: 1, morale: -3, scadenza: -2 }, 'La direzione rifiuta; Luca resta controvoglia.')]),
        ch('Cominci subito a farlo affiancare da un collega', 'Ridondanza/buffer', [o(1, { produttivita: -4, scadenza: -3, fiducia: -2, morale: -2 }, 'Il rischio si riduce ma Luca si sente sostituito.')])
      ])
    ]
  });

  /* ---- 2) Gestire una piccola attività per un trimestre ---- */
  SIM.register({
    id: 'impresa', title: 'Gestire una piccola attività per un trimestre', icon: '🏪',
    intro: 'Gestisci un negozio di quartiere (un bar-gastronomia) per tre mesi, con 40 mila euro di cassa. Ogni decisione sposta cassa, clienti, reputazione e scorte. Alla fine il punteggio premia la cassa e la solidità dell’attività (clienti e reputazione), e la cassa può andare in rosso (scoperto), che pesa come perdita secca.',
    vars: {
      cassa: { label: 'Cassa', start: 40, min: -30, max: 120, unit: 'k€', tight: true },
      clienti: { label: 'Clienti', start: 50, min: 0, max: 100 },
      reputazione: { label: 'Reputazione', start: 60, min: 0, max: 100 },
      scorte: { label: 'Scorte', start: 50, min: 0, max: 100 }
    },
    weights: { cassa: 2, clienti: 0.8, reputazione: 0.8, scorte: 0.3 },
    penalties: [],
    turns: 5, utilText: '2 × cassa (negativa se in rosso) + 0,8 × clienti + 0,8 × reputazione + 0,3 × scorte',
    cards: [
      card('i-prezzi', 1, 'I costi sono saliti e il margine sui piatti del giorno è sceso al 18%. Puoi ritoccare i prezzi: i clienti abituali sono sensibili ai cambi.', [
        ch('Alzi i prezzi del 10% su tutto', 'Anticipare il secondo ordine', [o(0.5, { cassa: 6, clienti: -6, reputazione: -2 }, 'I clienti accettano con qualche protesta: margini migliori.'), o(0.5, { cassa: 2, clienti: -14, reputazione: -4 }, 'Diversi clienti passano alla concorrenza.')]),
        ch('Ritocchi solo i prodotti a margine basso e tieni fermi i best seller', 'Costo opportunità', [o(0.8, { cassa: 3, clienti: -2 }, 'Piccolo recupero senza scossoni.'), o(0.2, { cassa: 1, clienti: -5, reputazione: -1 }, 'Il cambio si nota comunque.')]),
        ch('Tieni i prezzi e riduci le porzioni del 5%', 'Informazione prima di decidere', [o(0.55, { cassa: 4, clienti: 0, reputazione: 0 }, 'Nessuno se ne accorge.'), o(0.45, { cassa: 3, clienti: -4, reputazione: -8 }, 'Un cliente lo nota e lo scrive online.')])
      ]),
      card('i-promo', 2, 'Una settimana di calo. Pensi a una promozione: due caffè al prezzo di uno per tre giorni, che costa circa 1,5 k€ in margini ma porta traffico.', [
        ch('Lanci la promo su tutto il menu', 'Costo opportunità', [o(0.55, { cassa: -3, clienti: 12, reputazione: 3, scorte: -10 }, 'Il locale si riempie e molti tornano.'), o(0.45, { cassa: -5, clienti: 4, scorte: -8 }, 'Arrivano cacciatori di sconti che non tornano.')]),
        ch('Promo mirata solo alle fasce orarie vuote', 'Collo di bottiglia', [o(0.7, { cassa: -1, clienti: 7, scorte: -4 }, 'Riempi le ore morte con un costo contenuto.'), o(0.3, { cassa: -1, clienti: 2, scorte: -2 }, 'Effetto debole.')]),
        ch('Nessuna promo, aspetti che il traffico torni', 'Reversibilità', [o(0.6, { cassa: 2, clienti: 2 }, 'La settimana successiva si riprende.'), o(0.4, { cassa: -1, clienti: -6, reputazione: -1 }, 'Il calo si prolunga.')])
      ]),
      card('i-ordine', 5, 'Un’azienda del quartiere chiede un catering per 120 persone, tra una settimana: incasso 6 k€, ma servono 30 punti di scorte e due giorni di lavoro extra del personale. Le tue scorte sono già basse.', [
        ch('Accetti e compri subito le scorte necessarie', 'Costo opportunità', [o(0.7, { cassa: 4, reputazione: 8, scorte: -25, clienti: 3 }, 'Il catering riesce bene e arrivano nuovi contatti.'), o(0.3, { cassa: -1, reputazione: -6, scorte: -25 }, 'Un ritardo nelle consegne rovina la serata.')]),
        ch('Accetti con un menu ridotto che usa meno scorte', 'Ridondanza/buffer', [o(0.85, { cassa: 3, reputazione: 4, scorte: -12 }, 'Il cliente è soddisfatto e il margine tiene.'), o(0.15, { cassa: 2, reputazione: -2, scorte: -12 }, 'Il cliente avrebbe voluto più scelta.')]),
        ch('Rifiuti: preferisci concentrarti sul negozio', 'Saper dire di no', [o(1, { cassa: 0, reputazione: -1, clienti: -1 }, 'Perdi l’occasione ma nessun rischio.')])
      ]),
      card('i-concorrente', 4, 'Una catena di bar sta aprendo a 200 metri. Il personale è inquieto e alcuni clienti chiedono se resterai aperto.', [
        ch('Lanci una campagna di fedeltà: tessera con ogni decimo caffè gratis', 'Anticipare il secondo ordine', [o(0.65, { cassa: -2, clienti: 9, reputazione: 4 }, 'I clienti abituali si legano al locale.'), o(0.35, { cassa: -3, clienti: 3, reputazione: 1 }, 'Pochi la usano e il costo pesa.')]),
        ch('Tagli i prezzi per competere', 'Costo opportunità', [o(0.4, { cassa: -3, clienti: 8, reputazione: 1 }, 'Tieni i clienti, ma con margini sottili.'), o(0.6, { cassa: -6, clienti: 3, reputazione: -2 }, 'La catena può permettersi prezzi più bassi: guerra persa.')]),
        ch('Punti sulla qualità: nuovi prodotti locali e servizio curato', 'Informazione prima di decidere', [o(0.6, { cassa: -3, clienti: 4, reputazione: 9, scorte: -5 }, 'Il locale si differenzia e tiene la clientela.'), o(0.4, { cassa: -4, clienti: -3, reputazione: 3, scorte: -5 }, 'La clientela occasionale se ne va.')])
      ]),
      card('i-assenza', 1, 'La tua cameriera più esperta si ammala per due settimane. Il turno del weekend resta scoperto.', [
        ch('Assumi un sostituto a giornata', 'Ridondanza/buffer', [o(0.8, { cassa: -2, reputazione: -1, clienti: 0 }, 'Servizio senza intoppi.'), o(0.2, { cassa: -2, reputazione: -4, clienti: -3 }, 'Il sostituto è inesperto e sbaglia ordinazioni.')]),
        ch('Copri tu il turno, riducendo gli orari serali', 'Collo di bottiglia', [o(1, { cassa: -1, clienti: -5, reputazione: -2 }, 'Perdi la clientela serale per qualche giorno.')]),
        ch('Chiedi a tutto il personale di fare qualche ora in più', 'Reversibilità', [o(0.6, { cassa: -1, reputazione: 0 }, 'Si tiene botta con un po’ di buona volontà.'), o(0.4, { cassa: -1, reputazione: -5, clienti: -2 }, 'Stanchezza e servizio più lento.')])
      ]),
      card('i-fornitore', 3, 'Il fornitore principale di caffè e farine annuncia un rincaro del 12% dal mese prossimo. Un altro fornitore propone prezzi più bassi, ma non lo conosci.', [
        ch('Resti col fornitore storico e accetti il rincaro', 'Costo opportunità', [o(1, { cassa: -3, reputazione: 1 }, 'Nessun rischio ma margini erosi.')]),
        ch('Passi subito al nuovo fornitore', 'Anticipare il secondo ordine', [o(0.55, { cassa: 3, scorte: 3 }, 'La qualità è ottima e risparmi.'), o(0.45, { cassa: 1, scorte: -12, reputazione: -6 }, 'Consegne in ritardo e qualità discontinua.')]),
        ch('Ordini un campione al nuovo e fai un piccolo ordine di prova mantenendo il vecchio', 'Informazione prima di decidere', [o(1, { cassa: -2, scorte: 3, reputazione: 0 }, 'Costo di doppia gestione, ma ora hai un’alternativa verificata.')]),
        ch('Compri scorte extra ora al vecchio prezzo', 'Ridondanza/buffer', [o(0.75, { cassa: -4, scorte: 18 }, 'Hai magazzino a prezzo basso.'), o(0.25, { cassa: -5, scorte: 12, reputazione: -1 }, 'Parte della merce si deteriora.')])
      ]),
      card('i-recensione', 6, 'Una recensione online molto dura (“sporco e personale scortese”) è diventata virale nel quartiere. Alcuni clienti non vengono più.', [
        ch('Rispondi pubblicamente con scuse e un invito a tornare', 'Informazione prima di decidere', [o(0.65, { reputazione: 8, clienti: 4, cassa: -1 }, 'La risposta cortese viene apprezzata.'), o(0.35, { reputazione: -3, clienti: 0 }, 'Il recensore replica e la polemica continua.')]),
        ch('Ignori la recensione e aspetti che passi', 'Reversibilità', [o(0.4, { reputazione: -3, clienti: -3 }, 'Si spegne da sola.'), o(0.6, { reputazione: -12, clienti: -8 }, 'Altre recensioni la seguono.')]),
        ch('Offri una cena gratuita al recensore e un ricontrollo dei locali', 'Costo opportunità', [o(0.55, { cassa: -2, reputazione: 10, clienti: 5 }, 'Il recensore cambia il giudizio.'), o(0.45, { cassa: -2, reputazione: 2, clienti: 0 }, 'Non risponde.')])
      ]),
      card('i-prestito', 7, 'La banca ti offre un prestito di 20 k€ al 6% annuo, rimborsabile in 12 mesi. Potresti usarlo come cuscinetto o per rinnovare le attrezzature.', [
        ch('Accetti e tieni tutto in cassa come cuscinetto', 'Ridondanza/buffer', [o(1, { cassa: 17, reputazione: 0 }, 'Cassa rinforzata, al netto di interessi e rate.')]),
        ch('Accetti e investi in un nuovo banco frigo', 'Costo opportunità', [o(0.6, { cassa: 5, clienti: 8, reputazione: 5, scorte: 8 }, 'Il banco migliora conservazione e presentazione.'), o(0.4, { cassa: 3, clienti: 2, scorte: 5 }, 'L’effetto sulle vendite è modesto.')]),
        ch('Rifiuti: non vuoi debiti', 'Reversibilità', [o(1, { cassa: 0 }, 'Nessun debito, nessun margine di manovra.')])
      ]),
      card('i-stagione', 3, 'Arrivano le settimane di punta (feste e mercatini). Se ti prepari, puoi servire molti più clienti; se sbagli le previsioni, rischi di restare con la merce invenduta o di rimanere a secco.', [
        ch('Fai un grosso ordine di scorte (+30 punti)', 'Ridondanza/buffer', [o(0.6, { cassa: -8, scorte: 28, clienti: 10, reputazione: 3 }, 'Il picco c’è e sei pronto: incassi alti.'), o(0.4, { cassa: -10, scorte: 14, clienti: 3 }, 'Il picco è debole e resta merce.')]),
        ch('Ordini la metà e riordini se serve', 'Informazione prima di decidere', [o(0.7, { cassa: -4, scorte: 14, clienti: 6 }, 'Un buon equilibrio.'), o(0.3, { cassa: -5, scorte: 8, clienti: -2, reputazione: -4 }, 'Finisci i prodotti nel momento migliore.')]),
        ch('Assumi un extra e ordini il minimo', 'Collo di bottiglia', [o(1, { cassa: -3, scorte: 6, clienti: 3, reputazione: 2 }, 'Servizio regolare senza rischi di magazzino.')])
      ]),
      card('i-guasto', 5, 'Il forno principale si rompe: la riparazione costa 1,5 k€ e richiede due giorni; un forno nuovo costerebbe 6 k€ e sarebbe più efficiente.', [
        ch('Ripari il forno', 'Reversibilità', [o(0.65, { cassa: -2, clienti: -3 }, 'Forno di nuovo operativo.'), o(0.35, { cassa: -4, clienti: -6, reputazione: -2 }, 'Il guasto si ripresenta dopo pochi giorni.')]),
        ch('Compri il forno nuovo', 'Costo opportunità', [o(1, { cassa: -6, clienti: -1, reputazione: 2, scorte: 0 }, 'Spesa alta, ma affidabilità e consumi migliori.')]),
        ch('Noleggi un forno per un mese', 'Ridondanza/buffer', [o(0.8, { cassa: -3, clienti: -1 }, 'Il noleggio ti dà tempo.'), o(0.2, { cassa: -4, clienti: -3 }, 'Il noleggio arriva in ritardo.')])
      ]),
      card('i-espansione', 8, 'Si libera il locale accanto: affitto 1,2 k€ al mese, lavori 10 k€. Potresti raddoppiare i posti a sedere, ma la clientela attuale basta appena per il locale che hai.', [
        ch('Prendi il locale e avvii i lavori', 'Anticipare il secondo ordine', [o(0.4, { cassa: -10, clienti: 18, reputazione: 6, scorte: -6 }, 'L’espansione attira nuova clientela.'), o(0.6, { cassa: -14, clienti: 4, reputazione: -2, scorte: -6 }, 'Il locale resta mezzo vuoto e pesano i costi.')]),
        ch('Rifiuti ora e rinvii a dopo il trimestre', 'Reversibilità', [o(1, { cassa: 1, clienti: 0 }, 'Resti con il locale attuale.')]),
        ch('Chiedi di usare il locale solo nel weekend, a prova', 'Informazione prima di decidere', [o(0.6, { cassa: -3, clienti: 7, reputazione: 3 }, 'Il test conferma una domanda reale.'), o(0.4, { cassa: -4, clienti: 1, reputazione: 0 }, 'Poca affluenza: la prova ti evita un grosso errore.')])
      ]),
      card('i-evento', 2, 'La pro loco ti propone di avere uno stand alla sagra del paese: 800 euro per l’iscrizione, con buone possibilità di far conoscere il locale.', [
        ch('Partecipi con uno stand completo', 'Costo opportunità', [o(0.6, { cassa: -1, clienti: 10, reputazione: 5, scorte: -8 }, 'Ottimo ritorno di immagine.'), o(0.4, { cassa: -2, clienti: 3, reputazione: 1, scorte: -8 }, 'Poca gente, giornata faticosa.')]),
        ch('Partecipi solo con un piccolo banco di assaggi', 'Ridondanza/buffer', [o(0.8, { cassa: 0, clienti: 5, reputazione: 3, scorte: -3 }, 'Visibilità a costo contenuto.'), o(0.2, { cassa: 0, clienti: 1, scorte: -3 }, 'Passa inosservato.')]),
        ch('Salti la sagra e investi nella vetrina del negozio', 'Reversibilità', [o(1, { cassa: -1, clienti: 3, reputazione: 2 }, 'Più attrattiva sulla via.')])
      ]),
      card('i-credito', 6, 'Un cliente aziendale importante chiede di pagare a 60 giorni un fornitura da 8 k€. Se rifiuti, probabilmente si rivolge altrove.', [
        ch('Accetti il pagamento a 60 giorni', 'Anticipare il secondo ordine', [o(0.8, { cassa: -2, clienti: 5, reputazione: 3 }, 'Cliente fedele; incasso rimandato.'), o(0.2, { cassa: -8, clienti: 2, reputazione: -3 }, 'Il cliente ritarda ulteriormente.')]),
        ch('Chiedi un acconto del 50% e saldo a 30 giorni', 'Collo di bottiglia', [o(0.6, { cassa: 4, clienti: 3, reputazione: 1 }, 'Il cliente accetta.'), o(0.4, { cassa: 0, clienti: -4, reputazione: -1 }, 'Il cliente rifiuta e se ne va.')]),
        ch('Rifiuti la fornitura', 'Saper dire di no', [o(1, { cassa: 0, clienti: -3, reputazione: -2 }, 'Nessun rischio ma perdi il contatto.')])
      ])
    ]
  });
})(window.ST = window.ST || {});
