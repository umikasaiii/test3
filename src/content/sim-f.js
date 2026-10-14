/* SkillTree — scenari di simulazione a carte (parte F, sport avanzato): blocchi, altura, dati, ultra-endurance, torneo. Tutto inventato e didattico: nessuna prescrizione medica. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  /* fabbrica: le variabili sono nell'ordine di keys; ogni scelta ha due esiti con probabilità p e 1-p */
  const mk = keys => {
    const f = a => { const r = {}; keys.forEach((k, i) => { if (a[i]) r[k] = a[i]; }); return r; };
    return (label, principle, p, A, tA, B, tB) => ({ label, principle, out: [o(p, f(A), tA), o(Math.round((1 - p) * 1000) / 1000, f(B), tB)] });
  };
  /* l'ordine delle scelte è ruotato in modo deterministico, così la migliore non sta sempre nella stessa posizione */
  const card = (id, lv, text, choices) => { let h = 0; for (let i = 0; i < id.length; i++) h += id.charCodeAt(i) * (i + 1); const r = h % choices.length; return { id, lv, text, choices: choices.slice(r).concat(choices.slice(0, r)) }; };

  /* ---- 1) Blocchi di 16 settimane ---- */
  const c1 = mk(['potenza', 'fatica', 'rischio', 'fiducia']);
  SIM.register({
    id: 'spo-adv-blocchi', subject: 'sport', title: 'Programmazione a blocchi di 16 settimane', icon: '🏋️',
    intro: 'Alleni un atleta d’élite di uno sport di potenza (lanci, sollevamento, sprint) con 16 settimane alla gara principale: blocchi di accumulo, trasmutazione e realizzazione. Ogni scelta sposta potenza specifica, fatica residua, rischio di infortunio e fiducia. I dati di monitoraggio sono rumorosi e gli effetti residui del carico arrivano con ritardo: premia chi legge il trend, non il singolo dato.',
    vars: {
      potenza: { label: 'Potenza specifica', start: 40, min: 0, max: 100 },
      fatica: { label: 'Fatica residua', start: 30, min: 0, max: 100 },
      rischio: { label: 'Rischio di infortunio', start: 15, min: 0, max: 100 },
      fiducia: { label: 'Fiducia e prontezza', start: 55, min: 0, max: 100 }
    },
    weights: { potenza: 1.5, fatica: -0.7, rischio: -1.2, fiducia: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,5 × potenza − 0,7 × fatica − 1,2 × rischio + 0,4 × fiducia',
    cards: [
      card('b-test', 1, 'Settimana 1. Ti servono numeri di partenza affidabili su forza e potenza. Come imposti i test?', [
        c1('Massimale vero su tre alzate nello stesso giorno', 'Specificità del test', 0.4, [6, 14, 8, 3], 'Hai i numeri, ma con gambe e schiena spremute da tre massimali.', [3, 18, 14, -2], 'Il terzo tentativo va male e resta un fastidio lombare.'),
        c1('Salto, velocità del bilanciere e 1RM stimato dal profilo carico-velocità', 'Test sottomassimali', 0.75, [7, 5, 1, 4], 'Dati ripetibili con poco costo: base solida per il blocco.', [5, 6, 2, 1], 'La stima è un po’ imprecisa ma sufficiente per partire.'),
        c1('Niente test: usi i numeri di sei mesi fa', 'Programmazione su dati vecchi', 0.5, [4, 3, 3, 1], 'I carichi vanno quasi bene.', [2, 6, 9, -2], 'Alcuni carichi sono troppo alti rispetto alla forma attuale.')
      ]),
      card('b-accumulo', 1, 'Blocco di accumulo, settimane 1-5. Vuoi costruire la base di forza e massa funzionale.', [
        c1('Volume alto, intensità 70-80%, serie con 2-3 ripetizioni in riserva e progressione graduale', 'Accumulo', 0.75, [7, 10, 2, 3], 'Il lavoro si accumula e i tessuti si adattano: la fatica è alta ma gestibile.', [5, 12, 4, 0], 'Qualche seduta pesante in più del previsto.'),
        c1('Intensità 90%+ fin da subito per essere «specifico»', 'Specificità precoce', 0.4, [9, 12, 10, 3], 'Salgono i massimali, ma articolazioni e tendini pagano.', [4, 16, 18, -3], 'I tessuti non reggono l’intensità senza base: compare un fastidio.'),
        c1('Ogni serie fino al cedimento', 'Volume ad alta fatica', 0.5, [6, 20, 9, -1], 'Stimolo enorme, recupero compromesso.', [4, 24, 13, -4], 'Le sedute successive crollano.')
      ]),
      card('b-hrv', 2, 'Un giorno l’HRV mattutino scende del 9% rispetto al giorno prima. Il resto dei dati è normale.', [
        c1('Cambi subito la seduta in base a quel dato', 'Inseguire il rumore', 0.7, [-3, -3, -1, -2], 'Hai cancellato una seduta utile per una fluttuazione normale.', [1, -3, 0, 0], 'Per caso il dato era davvero il segnale di una giornata no.'),
        c1('Guardi la media mobile a 7 giorni e chiedi all’atleta come si sente', 'Trend e dati soggettivi', 0.8, [4, 1, -1, 3], 'La media è stabile: la seduta si fa e va bene.', [2, 0, -2, 1], 'Il trend è in calo: alleggerisci in modo mirato.'),
        c1('Smetti di guardare i dati di monitoraggio', 'Misurazione', 0.5, [3, 4, 3, 1], 'Per ora va bene.', [1, 7, 8, -2], 'Un calo reale passa inosservato.')
      ]),
      card('b-velocita', 2, 'Nel back squat la tecnica si deteriora nelle ultime ripetizioni di ogni serie e la velocità cala molto.', [
        c1('Completi comunque tutte le ripetizioni previste', 'Aderenza al programma', 0.5, [3, 9, 8, 0], 'Il volume è fatto, ma con ripetizioni di qualità scadente.', [1, 12, 13, -3], 'Le ripetizioni sporche accumulano stress sulla schiena.'),
        c1('Fermi la serie quando la velocità cala del 20% rispetto alla migliore', 'Autoregolazione con la velocità', 0.8, [6, 2, -1, 3], 'Meno ripetizioni ma di qualità: potenza e tecnica ringraziano.', [4, 3, 0, 1], 'Volume un po’ basso, ma recuperabile.'),
        c1('Riduci il carico del 15% per tutto il blocco', 'Prudenza', 0.6, [2, 0, -1, 0], 'Nessun rischio, stimolo modesto.', [1, 1, 0, -2], 'Stimolo insufficiente.')
      ]),
      card('b-interferenza', 3, 'Il preparatore del condizionamento propone tre sedute di corsa lunga a settimana per «avere più fiato».', [
        c1('Le fai subito dopo le sedute pesanti, tre volte', 'Interferenza', 0.4, [4, 14, 6, 1], 'Il fiato migliora ma la potenza ne soffre.', [-2, 18, 8, -3], 'Effetto di interferenza: i guadagni di forza si smorzano.'),
        c1('Due sedute brevi di bici o intervalli, separate dalla forza di 6 ore o in giorni diversi', 'Gestione dell’interferenza', 0.75, [5, 6, 0, 3], 'Condizionamento mantenuto senza intaccare la potenza.', [3, 7, 1, 1], 'Qualche problema organizzativo, ma l’effetto è contenuto.'),
        c1('Niente condizionamento fino alla gara', 'Specificità', 0.6, [4, 0, 1, 0], 'La potenza tiene, ma la capacità di ripetere gli sforzi cala.', [2, 2, 3, -2], 'Fiato scarso nelle sedute lunghe.')
      ]),
      card('b-trasm', 4, 'Fine accumulo. Gli effetti residui della forza massima durano settimane; quelli della resistenza alla forza molto meno. Come imposti la trasmutazione?', [
        c1('Azzeri il volume per recuperare e poi riparti', 'Recupero totale', 0.6, [1, -14, -3, 0], 'Ti senti fresco ma la forza costruita comincia a spegnersi.', [-2, -10, -2, -2], 'Troppa pausa: il ritmo si perde.'),
        c1('Riduci il volume e sposti il lavoro su 85-92% e lavori di potenza specifici', 'Trasmutazione', 0.8, [8, -2, -1, 4], 'La forza accumulata si traduce in potenza: un passaggio ben fatto.', [5, 1, 1, 1], 'Il passaggio è un po’ brusco ma efficace.'),
        c1('Salti la trasmutazione e passi direttamente al picco', 'Sequenziamento', 0.4, [6, 3, 4, 2], 'Ti senti veloce, ma sei meno solido.', [1, 6, 9, -2], 'Il picco arriva su una base non convertita.')
      ]),
      card('b-tendine', 4, 'Dolore al tendine rotuleo a 4/10 durante gli stacchi in salto e le serie pesanti, senza gonfiore.', [
        c1('Ignori e continui: a gara vicina si stringono i denti', 'Segnali di sovraccarico', 0.35, [4, 4, 8, 0], 'Il dolore passa da solo.', [-2, 8, 20, -4], 'Il dolore diventa invalidante.'),
        c1('Modifichi gli esercizi (isometrici e lavori lenti e pesanti), tieni il dolore entro 3/10 e lo monitori', 'Gestione del carico del tendine', 0.8, [5, 3, -5, 3], 'Il tendine tollera il lavoro e la potenza non si ferma.', [3, 4, -2, 1], 'Qualche fastidio, ma sotto controllo.'),
        c1('Ti fermi tre settimane', 'Riposo', 0.6, [-7, -8, -3, -3], 'Il tendine si calma ma perdi un pezzo di preparazione.', [-9, -6, -1, -5], 'Il riposo è lungo e la condizione cala.')
      ]),
      card('b-stagno', 5, 'Il test di potenza intermedio non migliora da tre settimane, mentre il carico è alto.', [
        c1('Aumenti ancora volume e intensità per sfondare', 'Più carico', 0.35, [6, 12, 10, 2], 'Il test migliora, a costo di una fatica enorme.', [0, 18, 15, -4], 'Stagnazione e fatica: peggio di prima.'),
        c1('Cerchi le cause (sonno, energia, carico) e fai un piccolo scarico prima di ripetere il test', 'Analisi delle cause', 0.75, [6, -6, -3, 4], 'Il corpo si ricompone e i valori salgono.', [3, -3, -1, 1], 'Piccolo miglioramento, l’analisi è utile.'),
        c1('Cambi tutto il programma', 'Cambio radicale', 0.5, [3, 5, 6, -1], 'Alcuni stimoli nuovi aiutano.', [-3, 8, 10, -3], 'Perdi il lavoro accumulato e non ne guadagni di nuovo.')
      ]),
      card('b-autoreg', 6, 'Al mattino la velocità del riscaldamento è inferiore dell’8% rispetto al normale, a carico previsto.', [
        c1('Segui il carico programmato: il piano è il piano', 'Aderenza', 0.5, [3, 8, 7, 0], 'Reggi la seduta, ma il costo è alto.', [0, 12, 12, -3], 'Una seduta forzata con prestazione scadente.'),
        c1('Riduci il carico del 5% o togli una serie, tieni la qualità', 'Autoregolazione', 0.8, [5, 2, -1, 3], 'Seduta di qualità, stimolo ben dosato.', [3, 3, 0, 1], 'Un po’ prudente, ma sensato.'),
        c1('Salti la seduta', 'Riposo', 0.6, [-1, -5, -2, -1], 'Recuperi ma perdi lo stimolo.', [-3, -3, 0, -3], 'Il giorno ripreso male.')
      ]),
      card('b-peso', 6, 'Sei 2 kg sopra il limite della tua categoria a sei settimane dalla gara.', [
        c1('Perdi 2 kg in 5 giorni con pasti ridotti e sudorazione', 'Taglio rapido', 0.35, [-1, 8, 10, 0], 'Raggiungi il peso ma con le gambe vuote.', [-6, 14, 16, -4], 'Forza e recupero crollano.'),
        c1('Deficit lieve e graduale in 5-6 settimane, proteine alte e carboidrati attorno agli allenamenti', 'Gestione graduale del peso', 0.8, [5, -1, -2, 3], 'Il peso scende e la forza tiene.', [3, 2, 0, 1], 'Più lento del previsto, ma senza danni.'),
        c1('Ignori il peso e pensi a cosa mangiare solo dopo', 'Pianificazione', 0.5, [3, 3, 3, 0], 'Per ora non cambia nulla.', [0, 4, 8, -3], 'Il problema peggiora in prossimità della gara.')
      ]),
      card('b-taper', 7, 'Realizzazione: mancano due settimane alla gara. L’atleta ha paura di perdere la forma se riduce il lavoro.', [
        c1('Mantieni volume e intensità invariati fino a pochi giorni prima', 'Mancato scarico', 0.35, [3, 6, 7, 1], 'Si sente forte ma non è fresco.', [-1, 12, 12, -2], 'Arriva con la fatica ancora addosso.'),
        c1('Riduci il volume del 40-50% e mantieni intensità e velocità', 'Tapering', 0.8, [9, -12, -4, 4], 'La fatica si scarica e la potenza emerge.', [6, -8, -2, 2], 'Si sente strano, ma in gara ci sarà.'),
        c1('Riduci tutto, intensità compresa', 'Detraining', 0.5, [-1, -16, -3, 1], 'Fresco ma spento.', [-5, -12, -1, -3], 'Perde brillantezza.')
      ]),
      card('b-cmj', 8, 'A cinque giorni dalla gara il salto mattutino è del 5% sotto la media, la velocità nel riscaldamento è normale e l’atleta si sente bene.', [
        c1('Ripeti il test finché non esce un numero buono', 'Selezione dei dati', 0.4, [1, 2, 3, 2], 'Il numero buono arriva ma non significa nulla.', [-2, 3, 4, -2], 'Il test ripetuto affatica e crea confusione.'),
        c1('Leggi insieme salto, velocità, sensazioni e trend e fai solo un piccolo aggiustamento', 'Triangolazione dei dati', 0.8, [4, -3, -1, 4], 'Una lettura equilibrata: nessun allarme, poca correzione.', [2, -1, 0, 2], 'Il piccolo aggiustamento era superfluo ma innocuo.'),
        c1('Rivedi drasticamente lo scarico', 'Reazione eccessiva', 0.6, [-2, -4, -1, -2], 'Perdi un po’ di tono.', [-4, -2, 0, -4], 'Reazione sproporzionata a un dato isolato.')
      ]),
      card('b-pap', 9, 'Riscaldamento di gara: puoi sfruttare la potenziazione post-attivazione, ma l’effetto è molto individuale.', [
        c1('Serie pesanti al 95% a ridosso della prova', 'Potenziamento', 0.35, [6, 8, 5, 1], 'Funziona, ma costa fatica.', [-3, 14, 8, -3], 'Arrivi alla prova affaticato.'),
        c1('Protocollo già provato: una serie a 85-90% con 6-8 minuti di recupero', 'Protocollo individuale', 0.75, [8, 2, 0, 4], 'Ben dosato: la potenza è al massimo.', [5, 3, 1, 2], 'Un po’ meno efficace del solito.'),
        c1('Solo un riscaldamento generico', 'Semplicità', 0.5, [4, 0, 0, 0], 'Sufficiente.', [2, 0, 1, -1], 'Un’occasione persa.')
      ]),
      card('b-fuso', 10, 'La gara è in un paese con 6 ore di fuso. Quando parti?', [
        c1('Arrivi la sera prima per non perdere allenamenti', 'Viaggio', 0.4, [3, 5, 2, 1], 'Per fortuna dormi bene.', [-4, 12, 4, -4], 'Il fuso ti mette a terra.'),
        c1('Arrivi 3-4 giorni prima, con luce e sonno gestiti e routine invariata', 'Adattamento al fuso', 0.75, [5, -1, 0, 4], 'Corpo e testa sono sul posto.', [3, 2, 1, 2], 'Un paio di notti difficili, ma recuperabili.'),
        c1('Sposti il sonno di ore già nella settimana precedente', 'Anticipo drastico', 0.5, [3, 6, 1, 1], 'Funziona abbastanza.', [-1, 10, 3, -2], 'Dormi male prima della gara per l’anticipo.')
      ])
    ]
  });

  /* ---- 2) Campo in altura ---- */
  const c2 = mk(['adattamento', 'fatica', 'rischio', 'morale']);
  SIM.register({
    id: 'spo-adv-altura', subject: 'sport', title: 'Campo in altura di 3 settimane', icon: '🏔️',
    intro: 'Guidi un fondista in un campo di tre settimane a circa 2000 m, seguito da rientro e gara. Adattamento, fatica, rischio (malattia, sovraccarico, carenze) e morale si muovono insieme: spesso la scelta prudente rende di più di quella aggressiva. Nessuna scelta è una prescrizione medica.',
    vars: {
      adattamento: { label: 'Adattamento', start: 25, min: 0, max: 100 },
      fatica: { label: 'Fatica', start: 25, min: 0, max: 100 },
      rischio: { label: 'Rischio di malattia o sovraccarico', start: 20, min: 0, max: 100 },
      morale: { label: 'Morale', start: 60, min: 0, max: 100 }
    },
    weights: { adattamento: 1.5, fatica: -0.7, rischio: -1.3, morale: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,5 × adattamento − 0,7 × fatica − 1,3 × rischio + 0,4 × morale',
    cards: [
      card('a-ferro', 1, 'Prima della partenza gli esami mostrano riserve di ferro al limite inferiore.', [
        c2('Parti senza altro: l’altura «brucia» comunque', 'Prevenzione', 0.4, [3, 2, 4, 1], 'Per ora senti poco.', [-2, 6, 10, -2], 'Si presenta stanchezza insolita fin dai primi giorni.'),
        c2('Ti fai seguire da un medico e un dietista per alimentazione e piano mirato', 'Valutazione professionale', 0.8, [6, 0, -3, 3], 'Reagisci meglio all’altura.', [4, 1, -1, 1], 'Piano un po’ complicato, ma utile.'),
        c2('Prendi integratori ad alte dosi da solo', 'Automedicazione', 0.4, [4, 2, 2, 1], 'Qualche beneficio.', [0, 6, 9, -2], 'Disturbi e dubbi sulla dose.')
      ]),
      card('a-arrivo', 1, 'Arrivato in quota ti senti benissimo e vuoi iniziare con una seduta di soglia come a casa.', [
        c2('Fai subito la soglia: il corpo è pronto', 'Intensità precoce', 0.35, [6, 12, 10, 1], 'Per ora regge.', [-1, 18, 16, -3], 'Mal di testa e sonno disturbato: la quota ha presentato il conto.'),
        c2('Due-tre giorni di carico ridotto, intensità bassa e idratazione', 'Acclimatazione graduale', 0.8, [6, 3, -3, 3], 'Il corpo si adatta senza stress.', [4, 4, -1, 1], 'Un po’ di tempo «perso», ma ben speso.'),
        c2('Riposo completo per quattro giorni', 'Riposo eccessivo', 0.6, [2, -5, -2, -3], 'Ti adatti ma il ritmo si spegne.', [1, -3, 0, -5], 'Annoiato, senza stimoli.')
      ]),
      card('a-sonno', 2, 'Il sonno è frammentato e ti svegli spesso nelle prime notti a 2000 m.', [
        c2('Più caffè e lunghi sonnellini pomeridiani', 'Compensazione', 0.4, [2, 3, 4, 0], 'Reggi la giornata.', [-1, 7, 8, -3], 'Sonno notturno ancora peggiore.'),
        c2('Routine serale, camera buia, sonnellino ≤30 min e caffeina entro mezzogiorno', 'Igiene del sonno', 0.75, [4, -4, -4, 3], 'Il sonno migliora in pochi giorni.', [3, -1, -1, 1], 'Miglioramento lento ma reale.'),
        c2('Ignori il problema', 'Rischio non gestito', 0.5, [2, 4, 5, -1], 'Si assesta da solo.', [0, 8, 9, -3], 'La carenza di sonno si somma al carico.')
      ]),
      card('a-idrata', 2, 'L’aria secca e la quota aumentano le perdite d’acqua: il peso del mattino è sceso dell’1,5%.', [
        c2('Bevi molto, tutto d’un colpo, solo acqua', 'Reidratazione', 0.45, [2, 2, 3, 0], 'Ti senti meglio.', [-1, 5, 7, -2], 'Gonfiore e minzione continua.'),
        c2('Reintegri gradualmente con liquidi e sodio ai pasti e controlli il peso ogni mattina', 'Monitoraggio dell’idratazione', 0.8, [5, -2, -4, 2], 'Il peso torna stabile.', [3, 0, -1, 1], 'Un po’ di attenzione richiesta.'),
        c2('Non cambi nulla', 'Inerzia', 0.5, [1, 4, 5, -1], 'Regge.', [-1, 7, 9, -3], 'La disidratazione cronica pesa sul recupero.')
      ]),
      card('a-soglia', 3, 'Prima seduta di qualità: al ritmo di soglia di casa la frequenza cardiaca è molto più alta.', [
        c2('Tieni lo stesso ritmo di casa', 'Ritmo vs intensità', 0.4, [5, 12, 8, 0], 'Reggi il ritmo ma con sforzo molto elevato.', [-1, 18, 14, -3], 'Sovraccarico: il corpo non rispetta il ritmo.'),
        c2('Tieni la stessa intensità percepita, ritmo più lento del 5-8%', 'Intensità relativa', 0.8, [6, 4, -1, 3], 'Lo stimolo giusto, nessun danno.', [4, 5, 0, 1], 'Più lento dell’attesa, ma ben tollerato.'),
        c2('Solo corsa facile finché non ti abitui', 'Prudenza eccessiva', 0.6, [3, -1, -2, -1], 'Sicuro ma poco stimolante.', [1, 0, 0, -3], 'Si perde un’opportunità.')
      ]),
      card('a-fc', 4, 'Alla settimana 1 la frequenza cardiaca a riposo del mattino è alta di 8 battiti e l’HRV è basso, ma ti senti bene.', [
        c2('Prosegui il programma come previsto', 'Segnali di allarme', 0.45, [4, 8, 8, 1], 'Per fortuna era un picco passeggero.', [-1, 14, 16, -3], 'Sei più stanco di quanto credevi.'),
        c2('Giornata facile, rivedi i sintomi e confronta con i giorni successivi', 'Autoregolazione', 0.8, [4, -4, -4, 3], 'Il valore rientra e prosegui bene.', [3, -2, -1, 1], 'Il segnale era reale: eviti guai.'),
        c2('Riposo completo per cinque giorni', 'Eccesso di cautela', 0.6, [-1, -8, -3, -4], 'Recuperi ma perdi continuità.', [-2, -5, -1, -5], 'Perdi l’adattamento.')
      ]),
      card('a-lhtl', 4, 'Puoi scendere a 1300 m per le sedute veloci, ma il trasferimento costa tempo e fatica.', [
        c2('Tutto in quota: più altura, più adattamento', 'Tutto in quota', 0.4, [6, 10, 7, 1], 'Il corpo reagisce bene.', [1, 15, 12, -3], 'Le sedute veloci sono di scarsa qualità e stancano.'),
        c2('Dormi in quota e fai le sedute veloci più in basso', 'Vivere in alto, allenarsi in basso', 0.75, [7, 5, -1, 3], 'Qualità e adattamento insieme.', [5, 7, 1, 0], 'La logistica ti toglie energie.'),
        c2('Ti trasferisci a quota inferiore per tutto il campo', 'Abbandono della quota', 0.6, [1, -2, -2, 0], 'Più comodo, ma l’adattamento svanisce.', [0, 0, 0, -2], 'Il campo è quasi inutile.')
      ]),
      card('a-raffreddore', 5, 'Mal di gola e naso che cola, senza febbre né dolori diffusi. I compagni di camera stanno bene.', [
        c2('Ti alleni normalmente: «sopra il collo» non conta', 'Sottovalutazione', 0.4, [3, 8, 8, 1], 'Il malessere passa.', [-3, 14, 18, -3], 'Peggiora e coinvolge anche i compagni.'),
        c2('Intensità ridotta, ti isoli dagli altri e osservi i sintomi per 48 ore', 'Gestione dei sintomi', 0.8, [3, 0, -4, 2], 'Il malessere si risolve senza strascichi.', [1, 2, -1, 0], 'Servono giorni, ma niente di grave.'),
        c2('Stop totale per una settimana', 'Stop prolungato', 0.6, [-3, -6, -4, -4], 'Sei guarito ma quasi del tutto fermo.', [-4, -4, -2, -5], 'Perdi tanto per poco.')
      ]),
      card('a-volume', 5, 'Settimana 2: ti senti bene. Il volume può salire del 20%.', [
        c2('Aumenti il volume del 20% per sfruttare lo stato di grazia', 'Sovraccarico', 0.4, [6, 14, 10, 1], 'Il volume fa bene.', [0, 20, 17, -4], 'Troppo, troppo presto: la fatica sale e le difese calano.'),
        c2('Mantieni il volume, riduci l’intensità e struttura i carichi in cicli 2:1', 'Periodizzazione', 0.8, [6, 3, -3, 3], 'Adattamento stabile.', [4, 4, -1, 1], 'Un po’ conservativo.'),
        c2('Riduci il volume del 30%', 'Prudenza', 0.6, [2, -6, -3, -2], 'Recuperi bene ma stimoli poco.', [1, -4, -1, -3], 'Si perde un po’ di condizione.')
      ]),
      card('a-cibo', 6, 'Il dispendio in altura è alto e l’appetito cala. Il peso scende un po’ ogni giorno.', [
        c2('Mangi quando hai fame', 'Alimentazione intuitiva', 0.4, [2, 6, 6, 0], 'Per ora il peso è stabile.', [-1, 10, 11, -3], 'Deficit energetico: stanchezza e malessere.'),
        c2('Orari fissi, carboidrati sufficienti attorno alle sedute e spuntini pronti', 'Disponibilità energetica', 0.8, [6, -2, -4, 3], 'Energie e recupero migliorano.', [4, 0, -2, 1], 'Più impegno che beneficio.'),
        c2('Approfitti per perdere un po’ di grasso', 'Deficit voluto', 0.35, [2, 4, 7, 1], 'Il peso scende senza danni apparenti.', [-3, 12, 15, -3], 'Il recupero crolla e arriva la malattia.')
      ]),
      card('a-test', 7, 'A fine campo vuoi sapere a che punto sei con una prova cronometrata.', [
        c2('Time trial a ritmo gara sulla distanza intera', 'Test massimale', 0.4, [3, 14, 10, 3], 'Hai il dato ma sei provato.', [-2, 20, 16, -3], 'Sei stanco prima del rientro.'),
        c2('Prova sottomassimale (2 × 3 km) con riferimento ai dati del campo', 'Test sottomassimale', 0.8, [5, 3, 0, 3], 'Dati utili con poco costo.', [3, 4, 1, 1], 'Il dato è meno chiaro del previsto.'),
        c2('Niente test', 'Nessuna misura', 0.5, [3, 0, 0, 0], 'Procedi alla cieca.', [1, 1, 2, -2], 'Nessun riferimento per il rientro.')
      ]),
      card('a-ritorno', 8, 'Torni a quota bassa. La risposta è molto variabile: alcuni volano, altri si sentono piatti per qualche giorno.', [
        c2('Gareggi dopo 2 giorni per cogliere il picco', 'Tempismo', 0.4, [6, 6, 4, 2], 'Hai le gambe.', [-3, 12, 8, -3], 'Sei in una giornata di «piattezza».'),
        c2('Qualche giorno facile, una seduta di prova e decisione sulla base della risposta individuale', 'Risposta individuale', 0.8, [7, 0, -2, 3], 'Gareggi quando sei pronto.', [4, 1, 0, 1], 'Qualche giorno in più del necessario.'),
        c2('Aspetti due settimane per sicurezza', 'Attesa lunga', 0.5, [2, -2, 0, -1], 'Mantieni buona parte dell’adattamento.', [-2, -1, 0, -3], 'L’adattamento si è già ridotto.')
      ]),
      card('a-viaggio', 9, 'Il viaggio di rientro prevede un lungo volo e una gara a pochi giorni: il rischio di raffreddori è alto.', [
        c2('Nessuna precauzione particolare', 'Rischio non gestito', 0.5, [3, 3, 5, 0], 'Arrivi a destinazione senza problemi.', [-1, 7, 14, -3], 'Ti ammali proprio in vista della gara.'),
        c2('Igiene delle mani, idratazione, sonno protetto, mascherina in aereo', 'Riduzione del rischio', 0.8, [4, 0, -4, 2], 'Arrivi in forma.', [3, 1, -1, 1], 'Un po’ di fastidio ma nessuna malattia.'),
        c2('Fai una lunga seduta dopo il volo per «sgranchirti»', 'Sforzo post-viaggio', 0.4, [3, 8, 6, 1], 'Ti sblocchi.', [-2, 12, 10, -2], 'Gambe pesanti e sonno spezzato.')
      ]),
      card('a-gara', 10, 'Gara: dopo la partenza il gruppo va forte e senti l’euforia dell’aria «densa».', [
        c2('Parti con il gruppo: sei in forma, approfittane', 'Pacing aggressivo', 0.4, [6, 14, 8, 3], 'Il ritmo regge fino alla fine.', [-2, 22, 12, -3], 'Crolli a metà gara.'),
        c2('Passo costante o leggermente progressivo, senza inseguire il gruppo', 'Pacing', 0.8, [8, 5, 0, 4], 'Gara solida e finale forte.', [5, 6, 1, 1], 'Sei un po’ cauto, ma la gara va bene.'),
        c2('Partenza molto cauta, poi vedi', 'Conservatorismo', 0.6, [3, 2, 0, -1], 'Chiudi bene ma lontano dai migliori.', [1, 3, 1, -3], 'Perdi contatto dal gruppo.')
      ])
    ]
  });

  /* ---- 3) Gestione del carico con dati rumorosi ---- */
  const c3 = mk(['prestazione', 'rischio', 'errori', 'fiducia']);
  SIM.register({
    id: 'spo-adv-dati', subject: 'sport', title: 'Dati rumorosi: GPS, HRV e questionari', icon: '📊',
    intro: 'Sei il responsabile della preparazione di una squadra di sport di squadra con dati di GPS, HRV, questionari di benessere e test di salto. Ogni dato ha un margine di errore: reagire a ogni oscillazione produce «decisioni da rumore» e perdita di fiducia dello staff, ignorare tutto fa salire il rischio. Il punteggio premia prestazione e fiducia, penalizza rischio di infortunio ed errori da interpretazione.',
    vars: {
      prestazione: { label: 'Prestazione della squadra', start: 45, min: 0, max: 100 },
      rischio: { label: 'Rischio di infortunio', start: 20, min: 0, max: 100 },
      errori: { label: 'Decisioni sbagliate da rumore', start: 15, min: 0, max: 100 },
      fiducia: { label: 'Fiducia nello staff e nei dati', start: 50, min: 0, max: 100 }
    },
    weights: { prestazione: 1.4, rischio: -1.1, errori: -1.0, fiducia: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,4 × prestazione − 1,1 × rischio − 1,0 × decisioni sbagliate + 0,5 × fiducia',
    cards: [
      card('d-gps', 1, 'Il GPS indica che un centrocampista ha coperto il 12% in meno di metri ad alta intensità nell’ultima partita.', [
        c3('Gli riduci subito il carico in allenamento', 'Reazione al dato singolo', 0.6, [-2, -1, 7, -2], 'Il calo dipendeva dal ruolo: hai tolto lavoro utile.', [1, -3, 2, 0], 'Per caso aveva bisogno di scarico.'),
        c3('Lo confronti con la sua media individuale e con ruolo e contesto della partita', 'Baseline individuale', 0.8, [4, -2, -3, 4], 'Il calo è nel suo range normale: nessuna azione.', [3, -4, -1, 2], 'Emerge un trend reale: intervieni in modo mirato.'),
        c3('Ignori il dato: «un numero non fa una partita»', 'Scarto dei dati', 0.5, [2, 2, 1, -1], 'Non cambia nulla.', [-1, 6, 4, -3], 'Un calo reale resta inosservato.')
      ]),
      card('d-quest', 1, 'I giocatori compilano il questionario di benessere in fretta e quasi sempre con 3 su 5 in tutto.', [
        c3('Lo abolisci: dati inutili', 'Eliminazione', 0.6, [0, 3, 2, -3], 'Meno rumore ma anche meno informazioni.', [-2, 5, 3, -4], 'Perdi un canale con i giocatori.'),
        c3('Lo semplifichi (5 voci, 1 minuto) e dai un riscontro concreto ai giocatori', 'Qualità dei dati', 0.75, [3, -3, -3, 5], 'Le risposte diventano più sincere e utili.', [2, -1, -1, 2], 'Miglioramento lento ma reale.'),
        c3('Lo rendi obbligatorio con multe per chi non lo compila', 'Coercizione', 0.4, [0, 0, 2, -5], 'Compilano tutti, ma senza sincerità.', [-2, 2, 6, -7], 'Le risposte sono «finte» e crolla la fiducia.')
      ]),
      card('d-hrv', 2, 'L’HRV mattutino di una giocatrice è basso per un solo giorno, mentre i questionari e la media dei sette giorni sono normali.', [
        c3('La fai riposare oggi: meglio prevenire', 'Reazione al rumore', 0.65, [-3, -1, 6, -2], 'Ha saltato una seduta chiave per una fluttuazione.', [0, -3, 2, 0], 'Per caso era stanca davvero.'),
        c3('Usi la media mobile e la sensazione soggettiva: nessun cambio, riguardi domani', 'Trend', 0.8, [4, -1, -3, 3], 'Il dato rientra: avresti sbagliato a intervenire.', [2, -3, -1, 1], 'Il trend scende davvero: intervieni al momento giusto.'),
        c3('Smetti di misurare l’HRV: è troppo variabile', 'Rifiuto della misura', 0.5, [1, 3, 1, -2], 'Per ora non cambia nulla.', [-1, 6, 3, -3], 'Perdi un segnale utile.')
      ]),
      card('d-cmj', 2, 'Il test di salto mostra un -3% su tre giocatori. L’errore tipico del test è del 4%.', [
        c3('Consideri il calo reale e riduci il carico a tutti e tre', 'Soglia sotto l’errore', 0.65, [-2, -1, 6, -2], 'Hai reagito a un cambiamento che non supera il rumore.', [0, -3, 2, 0], 'Per caso il calo era reale.'),
        c3('Confronti con errore tipico e variazione minima significativa e aspetti il prossimo test', 'Errore tipico', 0.8, [4, -2, -3, 4], 'Nessun cambiamento reale: eviti un intervento inutile.', [2, -3, -1, 2], 'Il test successivo conferma il calo: intervieni.'),
        c3('Abbandoni i test di salto', 'Rifiuto della misura', 0.5, [1, 3, 1, -2], 'Per ora va bene.', [-1, 7, 3, -3], 'Perdi un indicatore di fatica neuromuscolare.')
      ]),
      card('d-acwr', 3, 'Il rapporto acuto-cronico di un giocatore è 1,6 dopo una settimana di partita extra.', [
        c3('Regola fissa: oltre 1,5 non si gioca', 'Soglia rigida', 0.5, [-2, -2, 5, -2], 'Lo tieni fuori inutilmente.', [1, -4, 1, 0], 'Per caso la soglia era azzeccata.'),
        c3('Lo usi come segnale: guardi carichi assoluti, intensità e variazioni recenti', 'Interpretazione contestuale', 0.8, [4, -3, -3, 4], 'Decisione ragionata sul singolo.', [3, -2, -1, 2], 'Il quadro è ambiguo ma ben gestito.'),
        c3('Ignori l’indicatore: ha troppi limiti', 'Ignoranza del carico', 0.5, [2, 2, 1, -1], 'Non succede nulla.', [-1, 7, 3, -3], 'Il picco di carico passa senza gestione.')
      ]),
      card('d-soggettivo', 4, 'Un giocatore dice di stare bene, ma i dati oggettivi sono tutti al di sotto della sua media.', [
        c3('Vincono i dati: lo fai riposare senza discutere', 'Dati prima di tutto', 0.5, [0, -1, 4, -4], 'Si sente scavalcato.', [1, -3, 1, -2], 'Il dato era corretto.'),
        c3('Parli con lui, ripeti una misura e decidi insieme una modifica graduale', 'Decisione condivisa', 0.8, [4, -2, -3, 5], 'Il dialogo chiarisce: carico adattato e fiducia più alta.', [3, -3, -1, 3], 'Serve tempo ma la decisione è condivisa.'),
        c3('Vince ciò che dice lui: i dati sono rumorosi', 'Soggettivo prima di tutto', 0.5, [2, 1, 2, 1], 'Sta davvero bene.', [-2, 8, 4, -3], 'Aveva sottovalutato un problema.')
      ]),
      card('d-gpsunita', 4, 'Due unità GPS di fornitori diversi danno distanze leggermente diverse per lo stesso giocatore.', [
        c3('Confronti liberamente i dati tra le unità', 'Confronto senza standard', 0.4, [1, 1, 6, -2], 'Il confronto crea falsi trend.', [0, -1, 2, 0], 'Per caso le differenze sono piccole.'),
        c3('Assegni a ogni giocatore sempre la stessa unità e standardizzi la procedura', 'Standardizzazione', 0.8, [3, -2, -3, 3], 'I trend individuali sono affidabili.', [2, -1, -1, 1], 'Logistica noiosa ma utile.'),
        c3('Fai la media delle due unità', 'Media', 0.5, [2, 0, 1, 0], 'Il risultato è accettabile.', [1, 0, 3, -1], 'La media nasconde le differenze.')
      ]),
      card('d-cruscotto', 5, 'Il cruscotto ha 20 indicatori con il semaforo. Ogni mattina qualcuno è rosso.', [
        c3('Reagisci a ogni rosso', 'Allarmi continui', 0.6, [-2, 0, 8, -3], 'Decisioni continue, quasi sempre inutili.', [0, -2, 3, -1], 'Per caso reagisci bene a un segnale reale.'),
        c3('Selezioni 4 metriche, con soglie che tengono conto dell’errore', 'Pochi indicatori affidabili', 0.8, [4, -3, -3, 4], 'Il cruscotto è leggibile e utile.', [3, -2, -1, 2], 'Selezione imperfetta ma migliore.'),
        c3('Usi il cruscotto solo per il report di fine stagione', 'Uso ritardato', 0.5, [2, 2, 0, -1], 'Non crea problemi.', [-1, 6, 2, -2], 'Perdi segnali tempestivi.')
      ]),
      card('d-congestione', 5, 'Settimana con tre partite in sette giorni: i minuti giocati sono molto diversi tra i giocatori.', [
        c3('Stesso allenamento per tutti', 'Uniformità', 0.5, [1, 3, 2, 0], 'Semplice e passabile.', [-2, 8, 4, -2], 'I titolari si sovraccaricano.'),
        c3('Individualizzi in base a minuti, ruolo e recupero dei singoli', 'Individualizzazione', 0.8, [5, -3, -2, 4], 'Ognuno riceve il carico giusto.', [3, -2, 0, 2], 'Più lavoro, ma funziona.'),
        c3('Riposo per tutti due giorni', 'Riposo collettivo', 0.6, [-1, -3, -1, 0], 'Recuperano ma perdono sintonia.', [-3, -1, 0, -2], 'Perdi qualità di allenamento.')
      ]),
      card('d-infortunio', 6, 'Un giocatore subisce una lesione muscolare. Qualcuno nello staff trova una correlazione con un solo indicatore del GPS.', [
        c3('Adotti subito quell’indicatore come nuova regola per tutta la squadra', 'Correlazione spuria', 0.4, [0, -1, 8, -3], 'Aggiungi una regola basata sul caso.', [1, -2, 3, -1], 'Per caso era davvero utile.'),
        c3('Rivedi l’evento con più fattori (carico, sonno, storia, contesto) senza cercare un colpevole', 'Analisi multifattoriale', 0.8, [3, -3, -3, 4], 'Impari qualcosa di robusto.', [2, -2, -1, 2], 'Il quadro resta incerto ma utile.'),
        c3('Archivi come «sfortuna»', 'Rinuncia all’analisi', 0.5, [1, 2, 1, -1], 'Il caso era davvero sfortuna.', [-1, 5, 3, -3], 'Perdi un’occasione di imparare.')
      ]),
      card('d-modello', 7, 'Un fornitore promette un modello di apprendimento automatico che «predice» gli infortuni al 90%.', [
        c3('Lo adotti come verdetto: se dice stop, si ferma', 'Fiducia cieca', 0.4, [-1, -2, 8, -3], 'Troppi falsi positivi: giocatori fermi senza motivo.', [2, -3, 3, 0], 'Il modello funziona abbastanza.'),
        c3('Lo validi sui tuoi dati, guardi falsi positivi e lo usi come supporto, non come verdetto', 'Validazione', 0.8, [3, -3, -3, 4], 'Capisci cosa può e non può fare.', [2, -2, -1, 2], 'Utile solo in parte, ma senza danni.'),
        c3('Lo rifiuti a priori', 'Scetticismo', 0.5, [1, 1, 0, 0], 'Risparmi soldi.', [-1, 3, 2, -1], 'Perdi un possibile aiuto.')
      ]),
      card('d-report', 8, 'Il tecnico è sommerso di informazioni e chiede decisioni rapide.', [
        c3('Report quotidiano di 40 pagine «per completezza»', 'Sovraccarico informativo', 0.4, [-1, 0, 6, -4], 'Nessuno lo legge davvero.', [0, -1, 3, -2], 'Qualcuno lo legge e trova qualcosa.'),
        c3('Un report di una pagina: trend, incertezza e due decisioni proposte', 'Comunicazione dei dati', 0.8, [5, -2, -3, 5], 'Il tecnico usa le informazioni.', [3, -1, -1, 3], 'Qualche sfumatura persa, ma utile.'),
        c3('Niente report: decidi tu a intuito', 'Autonomia senza trasparenza', 0.5, [2, 1, 2, -2], 'Per ora funziona.', [0, 3, 4, -4], 'Il tecnico non si fida più.')
      ]),
      card('d-finale', 9, 'Vigilia di finale: il giocatore chiave ha salto -6% e HRV basso. Dice di sentirsi bene.', [
        c3('Lo escludi dalla gara', 'Precauzione estrema', 0.5, [-5, -3, 3, -2], 'Perdi il tuo miglior giocatore.', [-3, -4, 1, 0], 'La decisione si rivela giusta.'),
        c3('Lo valuti con test di riscaldamento, sensazioni e staff medico e decidi con lui', 'Valutazione integrata', 0.8, [5, -2, -2, 5], 'La decisione è informata e condivisa.', [3, -3, -1, 3], 'Scegli una gestione prudente dei minuti.'),
        c3('Lo schieri come sempre: i dati sono rumorosi', 'Ignorare i segnali', 0.4, [4, 3, 2, 1], 'Gioca bene.', [-3, 10, 4, -3], 'Si fa male o rende poco.')
      ]),
      card('d-revisione', 10, 'Fine stagione: devi decidere cosa tenere dei protocolli di monitoraggio.', [
        c3('Cambi tutti i protocolli per l’anno prossimo', 'Cambiamento totale', 0.4, [0, 0, 6, -3], 'Rischi di perdere continuità.', [1, -1, 2, 0], 'Per caso migliori molto.'),
        c3('Verifichi cosa ha davvero predetto e cambi solo pochi elementi', 'Valutazione dell’utilità', 0.8, [4, -3, -3, 5], 'Il sistema diventa più semplice e affidabile.', [3, -2, -1, 3], 'Revisione utile ma parziale.'),
        c3('Confermi tutto così com’è', 'Inerzia', 0.5, [2, 1, 1, 0], 'Stabilità.', [0, 3, 3, -2], 'Gli errori si ripetono.')
      ])
    ]
  });

  /* ---- 4) Ultra-endurance di 8 ore ---- */
  const c4 = mk(['energia', 'gi', 'calore', 'morale']);
  SIM.register({
    id: 'spo-adv-ultra', subject: 'sport', title: 'Gara di ultra-endurance di 8 ore', icon: '⏱️',
    intro: 'Gareggi in una prova di otto ore (corsa o ciclismo). Pacing, carboidrati all’ora, sodio, caldo, disturbi gastrointestinali e testa si sommano: la gara si perde spesso nelle prime due ore e si decide nelle ultime due. Nessuna indicazione medica; ciò che non hai provato in allenamento in gara è un rischio.',
    vars: {
      energia: { label: 'Riserva di energia', start: 70, min: 0, max: 100 },
      gi: { label: 'Disturbi gastrointestinali', start: 5, min: 0, max: 100 },
      calore: { label: 'Stress da caldo', start: 10, min: 0, max: 100 },
      morale: { label: 'Tenuta mentale', start: 65, min: 0, max: 100 }
    },
    weights: { energia: 1.4, gi: -0.9, calore: -0.9, morale: 0.6 },
    penalties: [],
    turns: 6, utilText: '1,4 × energia − 0,9 × disturbi GI − 0,9 × stress da caldo + 0,6 × tenuta mentale',
    cards: [
      card('u-cho', 1, 'Pianifichi i carboidrati: l’intestino si può allenare ad assorbire di più.', [
        c4('30 g all’ora: poco rischio', 'Apporto minimo', 0.5, [-2, -2, 0, 0], 'Stomaco tranquillo ma serbatoio che si svuota.', [-5, -1, 0, -1], 'A metà gara cali di energia.'),
        c4('60-80 g all’ora con miscele di glucosio e fruttosio già provate in allenamento', 'Allenamento intestinale', 0.75, [8, 2, 0, 3], 'Energia stabile e nessun problema.', [6, 5, 0, 1], 'Qualche fastidio ma energia buona.'),
        c4('110-120 g all’ora mai provati', 'Dose non testata', 0.35, [9, 8, 0, 2], 'Reggi.', [3, 22, 0, -4], 'Lo stomaco non regge.')
      ]),
      card('u-start', 1, 'Partenza: il gruppo parte forte e il pubblico spinge.', [
        c4('Parti con il gruppo e poi rallenti', 'Partenza aggressiva', 0.4, [-4, 2, 6, 3], 'Hai un ottimo inizio.', [-11, 3, 9, -3], 'Paghi cara la prima ora.'),
        c4('Prima ora a sforzo conservativo, ritmo costante, evitando spunti', 'Pacing', 0.8, [4, 0, -2, 3], 'Tutto sotto controllo e finale forte.', [2, 0, -1, 0], 'Sei un po’ attardato, ma recuperi.'),
        c4('Parti molto lento per 90 minuti', 'Partenza passiva', 0.6, [0, 0, -1, -2], 'Sicuro ma perdi tempo.', [-2, 0, 0, -3], 'Il gap è troppo grande.')
      ]),
      card('u-sodio', 2, 'Il sodio: hai test di sudorazione recenti che mostrano perdite medie-alte.', [
        c4('Nessun sodio, solo acqua', 'Assenza di sodio', 0.4, [0, 2, 1, 0], 'Reggi un po’.', [-4, 6, 7, -3], 'Crampi e malessere crescono.'),
        c4('Sodio proporzionato alla tua sudorazione, nelle bevande e nel cibo', 'Piano personalizzato', 0.8, [4, -2, -3, 3], 'Idratazione ben bilanciata.', [3, 0, -1, 1], 'Funziona, ma serve attenzione.'),
        c4('Grandi dosi di pastiglie di sale «per sicurezza»', 'Eccesso', 0.4, [2, 4, 0, 1], 'Qualche beneficio.', [-1, 14, 3, -3], 'Disturbi di stomaco e sete.')
      ]),
      card('u-bere', 2, 'Come regoli i liquidi nelle prime ore?', [
        c4('Bevi tutto il possibile a ogni stazione', 'Eccesso di liquidi', 0.4, [2, 6, -4, 1], 'Stai fresco.', [-1, 12, -2, -3], 'Gonfiore e senso di pesantezza.'),
        c4('Bevi in base alla sete, con un piano minimo ogni 15-20 minuti', 'Bere a sete con piano', 0.8, [4, -2, -3, 3], 'Idratazione stabile.', [3, 0, -1, 1], 'Un po’ di sete a un tratto.'),
        c4('Bevi pochissimo per non fermarti', 'Restrizione', 0.5, [2, -1, 5, 0], 'Reggi un po’.', [-3, 2, 11, -3], 'Il caldo ti schiaccia.')
      ]),
      card('u-caldo', 3, 'Dopo 3 ore la temperatura sale oltre i 30 gradi e il sole è forte.', [
        c4('Mantieni lo stesso ritmo: hai un piano da seguire', 'Rigidità', 0.4, [3, 2, 8, 1], 'Reggi l’ora di caldo.', [-5, 5, 18, -3], 'Il corpo si surriscalda e crolli.'),
        c4('Riduci il ritmo del 3-5% e ti raffreddi con ghiaccio, spugne e cappellino', 'Gestione del caldo', 0.8, [5, -1, -7, 3], 'Il caldo è gestibile.', [3, 0, -4, 1], 'Un po’ più lento ma sicuro.'),
        c4('Ti fermi 20 minuti all’ombra', 'Sosta lunga', 0.5, [2, -2, -6, -2], 'Recuperi ma perdi minuti.', [0, -1, -3, -4], 'Fatichi a ripartire.')
      ]),
      card('u-nausea', 4, 'Dopo quattro ore compare nausea e un senso di gonfiore.', [
        c4('Continui il piano di carboidrati come previsto', 'Rigidità', 0.4, [3, 4, 2, 1], 'Passa da sola.', [-3, 14, 3, -4], 'Vomito e crollo energetico.'),
        c4('Rallenti 10 minuti, riduci la concentrazione, bevi a piccoli sorsi e riprendi gradualmente', 'Gestione dei disturbi GI', 0.8, [4, -4, -2, 3], 'Lo stomaco si calma.', [2, -2, -1, 1], 'Serve tempo ma recuperi.'),
        c4('Smetti di mangiare per un’ora', 'Digiuno forzato', 0.5, [-4, -3, 0, -1], 'Il malessere passa ma l’energia cala.', [-8, -1, 0, -3], 'L’energia crolla.')
      ]),
      card('u-mente', 4, 'All’ora 4,5 arriva il «muro» mentale: ti chiedi perché sei lì.', [
        c4('Spingi più forte con musica alta per reagire', 'Reazione impulsiva', 0.4, [-2, 2, 4, 4], 'Ti sblocchi.', [-7, 3, 6, -3], 'Bruci energie e ti spegni di nuovo.'),
        c4('Dividi la gara in segmenti, parla con te stesso in modo costruttivo, obiettivo alla prossima stazione', 'Strategie mentali', 0.8, [2, 0, 0, 7], 'La mente si stabilizza.', [1, 0, 0, 4], 'Meno efficace, ma ti tiene in gara.'),
        c4('Lasci andare il ritmo e pensi al ritiro', 'Resa mentale', 0.5, [-3, 0, 0, -3], 'Ti riprendi.', [-6, 0, 1, -8], 'Il morale crolla.')
      ]),
      card('u-salita', 5, 'Una lunga salita ripida a metà gara.', [
        c4('Spingi: è dove si guadagna', 'Sforzo in salita', 0.4, [-3, 3, 7, 3], 'Guadagni qualche posizione.', [-9, 4, 11, -2], 'Paghi cara la salita.'),
        c4('Cammini nei tratti più ripidi e riprendi a correre in piano', 'Camminata strategica', 0.8, [4, -1, -3, 3], 'Risparmi energie preziose.', [3, 0, -2, 1], 'Perdi qualche posizione, ma non l’energia.'),
        c4('Cammini tutta la salita lentamente', 'Eccesso di prudenza', 0.5, [2, 0, -1, -1], 'Ok.', [0, 0, 0, -3], 'Perdi troppo tempo.')
      ]),
      card('u-caffeina', 5, 'Hai caffeina nel kit. Quando e quanto?', [
        c4('Una dose alta all’ora 6 mai provata', 'Dose non testata', 0.35, [6, 7, 0, 6], 'Gran colpo.', [-1, 14, 3, -2], 'Tachicardia e stomaco in subbuglio.'),
        c4('Piccole dosi provate in allenamento, concentrate nelle ultime ore', 'Caffeina pianificata', 0.75, [5, 1, 0, 6], 'Lucidità mantenuta.', [3, 2, 0, 3], 'Beneficio modesto.'),
        c4('Nessuna caffeina', 'Rinuncia', 0.5, [2, 0, 0, 0], 'Resti stabile.', [0, 0, 0, -2], 'Cali di concentrazione.')
      ]),
      card('u-crampi', 6, 'Crampi ai polpacci all’ora 6.', [
        c4('Ingerisci una grossa dose di sale', 'Soluzione unica', 0.35, [1, 7, 0, 1], 'Per caso passano.', [-3, 14, 2, -3], 'Disturbi di stomaco.'),
        c4('Rallenti, allunghi lievemente, fai un check di sodio e carboidrati e riprendi gradualmente', 'Gestione dei crampi', 0.8, [4, -2, -2, 3], 'Si risolvono.', [2, 0, -1, 1], 'Rimangono un po’.'),
        c4('Ti fermi a lungo', 'Sosta lunga', 0.5, [-1, 0, -1, -2], 'Passano.', [-5, 0, 0, -4], 'Ripartire è difficilissimo.')
      ]),
      card('u-iponatremia', 7, 'Ti senti gonfio, il peso sembra salito, hai nausea e mal di testa dopo aver bevuto molta acqua.', [
        c4('Continui a bere piano', 'Inerzia', 0.4, [0, 4, 1, -1], 'Passa.', [-5, 10, 4, -5], 'I sintomi peggiorano.'),
        c4('Riduci l’acqua pura, usi bevande con sodio, rallenti e chiedi aiuto allo staff medico se i sintomi non migliorano', 'Allerta per iponatremia', 0.85, [3, -3, -2, 4], 'Ti ristabilisci.', [1, -1, 0, 1], 'Con il supporto dello staff ti stabilizzi.'),
        c4('Bevi di più per «diluire» il malessere', 'Errore concettuale', 0.3, [1, 4, 0, 1], 'Sembra passare.', [-8, 16, 3, -5], 'Il quadro peggiora seriamente.')
      ]),
      card('u-duello', 8, 'A due ore dalla fine un avversario scatta. Hai ancora gambe, ma non sai quanto.', [
        c4('Rispondi subito: non puoi lasciarlo andare', 'Reazione emotiva', 0.35, [-1, 3, 6, 5], 'Lo prendi e lo stacchi.', [-10, 5, 10, -3], 'Ti spegni e perdi tutto.'),
        c4('Resti sul tuo ritmo e lo riprendi se cede', 'Fedeltà al piano', 0.75, [5, 0, -1, 4], 'Cede, lo riprendi.', [3, 0, 0, 0], 'Resti a distanza, ma finisci forte.'),
        c4('Rallenti per non rischiare', 'Prudenza eccessiva', 0.5, [2, 0, 0, -2], 'Finisci tranquillo.', [0, 0, 0, -4], 'Dei rimpianti.')
      ]),
      card('u-finale', 9, 'Mancano due ore. Le riserve sono scarse ma hai ancora forza.', [
        c4('Parti in sprint già adesso', 'Sprint precoce', 0.3, [-2, 3, 5, 5], 'Funziona.', [-11, 5, 10, -4], 'Salti a due ore dalla fine.'),
        c4('Mantieni il ritmo, curi nutrizione e raffreddamento, e tieni la spinta per l’ultima ora', 'Gestione della riserva', 0.8, [6, -1, -3, 4], 'Finale forte e controllato.', [4, 0, -1, 2], 'Finale buono ma senza guizzi.'),
        c4('Rallenti molto per arrivare', 'Resa', 0.5, [1, 0, -1, -3], 'Arrivi.', [-1, 0, 0, -5], 'Il tempo finale è deludente.')
      ]),
      card('u-allarme', 10, 'Nelle ultime ore senti capogiri, brividi nonostante il caldo e fatichi a concentrarti.', [
        c4('Continui: manca poco, non è il momento di fermarsi', 'Sottovalutare i segnali', 0.3, [2, 3, 3, 3], 'Fai un ultimo sforzo.', [-8, 8, 14, -4], 'Sei in condizioni pericolose.'),
        c4('Ti fermi in stazione, ti raffreddi, mangi e ti fai valutare dallo staff medico prima di decidere', 'Sicurezza prima della classifica', 0.8, [2, -3, -6, 3], 'Ti riprendi in sicurezza, valuti con lo staff.', [-3, -2, -4, -3], 'Lo staff ti consiglia di fermarti: decisione corretta.'),
        c4('Rallenti molto ma continui senza aiuto', 'Compromesso rischioso', 0.4, [1, 1, -1, 1], 'Arrivi.', [-5, 5, 6, -3], 'Peggiori mentre cammini.')
      ])
    ]
  });

  /* ---- 5) Torneo di sport di combattimento in 2 giorni ---- */
  const c5 = mk(['energia', 'lucidita', 'rischio', 'idratazione']);
  SIM.register({
    id: 'spo-adv-torneo', subject: 'sport', title: 'Torneo di combattimento in due giorni', icon: '🥋',
    intro: 'Un atleta affronta un torneo di sport di combattimento in due giorni: pesata, incontri ravvicinati, recupero, idratazione, energia, tattica e rischio di commozione. Le scelte «tagliate» sulla pesata o sul ritiro costano più di quanto sembri. Nessuna indicazione medica: in caso di colpo alla testa decide il personale sanitario.',
    vars: {
      energia: { label: 'Energia disponibile', start: 70, min: 0, max: 100 },
      lucidita: { label: 'Lucidità tattica', start: 65, min: 0, max: 100 },
      rischio: { label: 'Rischio di infortunio', start: 15, min: 0, max: 100 },
      idratazione: { label: 'Idratazione', start: 70, min: 0, max: 100 }
    },
    weights: { energia: 1.3, lucidita: 0.9, rischio: -1.4, idratazione: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,3 × energia + 0,9 × lucidità − 1,4 × rischio + 0,5 × idratazione',
    cards: [
      card('t-pesata', 1, 'La mattina della pesata l’atleta è 1,2 kg sopra il limite della categoria.', [
        c5('Sauna, tute e restrizione di liquidi per scendere subito', 'Taglio rapido', 0.35, [-6, -5, 8, -12], 'Passi la pesata ma con il serbatoio vuoto.', [-12, -9, 14, -20], 'Crampi e vertigini: rischi di essere inadatto a combattere.'),
        c5('Tolleri la gestione: residuo alimentare ridotto, pesata finale con piccoli aggiustamenti senza disidratarti', 'Pesata sicura', 0.75, [3, 3, 1, 1], 'Tutto in regola senza stress.', [1, 2, 2, -2], 'Per qualche etto servono aggiustamenti.'),
        c5('Sali nella categoria superiore', 'Cambio di categoria', 0.5, [4, 2, 3, 3], 'Avversari più pesanti ma tu in forma.', [2, 1, 6, 2], 'Il divario fisico pesa.')
      ]),
      card('t-reid', 1, 'Dopo la pesata hai circa 20 ore prima del primo incontro.', [
        c5('Bevi due litri d’acqua tutti insieme e mangi quanto vuoi', 'Rehydration brusca', 0.4, [2, -1, 2, 4], 'Ti senti meglio.', [-3, -3, 3, 1], 'Gonfiore e stomaco pesante.'),
        c5('Liquidi con sodio e carboidrati in 3-4 ore, pasti familiari ricchi di carboidrati', 'Reidratazione graduale', 0.8, [6, 3, -1, 8], 'Recuperi energia e liquidi.', [4, 2, 0, 5], 'Recuperi bene.'),
        c5('Aspetti la sete e vai a dormire', 'Attesa passiva', 0.5, [0, 0, 2, -2], 'Ti riprendi dormendo.', [-4, -2, 4, -7], 'Parti disidratato.')
      ]),
      card('t-scaldo', 2, 'Hai ancora poco tempo prima del primo incontro: come ti scaldi?', [
        c5('Riscaldamento lungo e intenso per sentirti pronto', 'Eccesso di scaldo', 0.4, [-3, 2, 1, -2], 'Sei carico.', [-8, -2, 3, -4], 'Arrivi già stanco.'),
        c5('15-20 minuti progressivi con attivazione specifica e respirazione', 'Riscaldamento specifico', 0.8, [3, 5, -2, 0], 'Sei in forma e concentrato.', [2, 3, -1, 0], 'Sei pronto ma un po’ freddo.'),
        c5('Nessun riscaldamento per non sprecare energie', 'Salto del riscaldamento', 0.5, [0, -1, 3, 0], 'Parti con calma.', [-1, -4, 7, 0], 'I primi scambi sono pericolosi.')
      ]),
      card('t-pausa', 2, 'Hai 40 minuti tra due incontri.', [
        c5('Dormi in un angolo, senza mangiare né bere', 'Pausa passiva', 0.4, [0, 0, 1, -3], 'Ti riposi.', [-4, -2, 3, -6], 'Ti rialzi svuotato.'),
        c5('Carboidrati facili e liquidi, defaticamento leggero e respirazione, analisi tattica breve', 'Recupero tra gli incontri', 0.8, [6, 4, -1, 5], 'Ripartì con energie e idee chiare.', [4, 2, 0, 3], 'Recuperi parzialmente.'),
        c5('Un pasto abbondante e solido', 'Pasto pesante', 0.4, [3, -1, 1, 2], 'Energia buona.', [-4, -4, 3, 1], 'Digestione pesante.')
      ]),
      card('t-sera', 3, 'Fine primo giorno. Vuoi sfruttare la serata.', [
        c5('Allenamento tecnico extra per correggere i difetti', 'Lavoro extra', 0.4, [-3, 2, 4, -2], 'Correggi un errore.', [-8, -2, 8, -4], 'Aggiungi stanchezza inutile.'),
        c5('Cena con carboidrati e proteine, liquidi, sonno protetto e mobilità leggera', 'Recupero serale', 0.8, [7, 4, -3, 6], 'Il corpo recupera bene.', [4, 2, -1, 3], 'Dormi un po’ male ma meglio così.'),
        c5('Esci con la squadra e rilassi la testa fino a tardi', 'Distrazione', 0.5, [0, 3, 1, -2], 'Sei sereno.', [-6, -3, 3, -5], 'Arrivi stanco al secondo giorno.')
      ]),
      card('t-tattica', 4, 'L’avversario forte ha un clinch molto pesante e porta spesso il combattimento a terra.', [
        c5('Attacchi subito per evitare il clinch', 'Aggressività', 0.4, [-3, 2, 6, -2], 'Lo sorprendi.', [-8, -3, 12, -3], 'Ti esponi ai suoi colpi.'),
        c5('Piano tattico: distanza, ritmi alternati, gestione dell’energia e uscite dal clinch provate', 'Gestione tattica', 0.75, [4, 6, -3, 0], 'Controlli il combattimento.', [2, 3, 0, -1], 'Parità, ma sei sul piano.'),
        c5('Resti passivo e speri nel punteggio', 'Passività', 0.5, [1, 0, 1, 0], 'Resti in gioco.', [-3, -3, 4, -2], 'Perdi di nuovo l’iniziativa.')
      ]),
      card('t-colpo', 5, 'Un colpo alla testa ti lascia stordito per qualche secondo. Dici di stare bene.', [
        c5('Continui: ci sei quasi', 'Sottovalutare i segnali', 0.3, [1, 2, 4, 0], 'Passa in fretta.', [-5, -10, 22, -2], 'Rischi un trauma serio.'),
        c5('Fai fermare l’incontro e chiedi la valutazione del personale sanitario, accettando la decisione', 'Sicurezza prima del risultato', 0.85, [-3, 2, -8, 0], 'Perdi il match ma proteggi la testa.', [-5, 1, -6, 0], 'Torni in forma con calma e senza rischi.'),
        c5('Continui un round e valuti dopo', 'Rinvio della valutazione', 0.3, [1, 0, 4, 0], 'Passa.', [-6, -8, 18, -2], 'Il rischio resta e peggiora.')
      ]),
      card('t-energia', 5, 'Terzo incontro, fatica in aumento. Hai uno spuntino con carboidrati e caffeina già provati.', [
        c5('Usi tutto subito, in un’unica dose', 'Una dose forte', 0.4, [5, 3, 1, 0], 'Sei carico.', [-2, -3, 4, -2], 'Palpitazioni e nervosismo.'),
        c5('Piccole dosi frazionate già testate e liquidi', 'Rifornimento graduale', 0.8, [6, 4, -1, 3], 'Energia stabile.', [4, 2, 0, 2], 'Beneficio contenuto.'),
        c5('Niente: sei già carico di adrenalina', 'Rifiuto del rifornimento', 0.5, [1, 0, 1, -1], 'Ok.', [-5, -3, 3, -3], 'L’adrenalina svanisce e crolli.')
      ]),
      card('t-mano', 6, 'Dolore alla mano dopo un colpo, con leggero gonfiore.', [
        c5('Stringi i denti e continui', 'Ignorare il dolore', 0.4, [1, 0, 3, 0], 'Passa.', [-3, -3, 14, -1], 'Peggiora, forse una frattura.'),
        c5('Fai valutare, ghiaccio e bendaggio protettivo se consentito, e decidi con il personale', 'Valutazione', 0.8, [2, 2, -4, 1], 'Si chiarisce la situazione.', [1, 0, -2, 0], 'Servono alcuni accorgimenti.'),
        c5('Ti ritiri subito senza valutazione', 'Ritiro automatico', 0.5, [-5, -2, -3, 0], 'Eviti rischi.', [-8, -3, -2, 0], 'Perdi l’occasione per poco.')
      ]),
      card('t-semi', 7, 'Hai solo tre ore tra semifinale e finale. Hai fame.', [
        c5('Un pasto abbondante subito', 'Pasto pesante', 0.35, [3, -1, 0, 1], 'Energia alta.', [-6, -5, 4, 0], 'Stomaco pesante.'),
        c5('Spuntini a basso contenuto di fibre e grassi, liquidi con sodio, 20 minuti di riposo', 'Rifornimento tra incontri', 0.8, [6, 4, -2, 6], 'Rimetti il serbatoio.', [4, 2, 0, 4], 'Parti quasi fresco.'),
        c5('Solo acqua per non appesantirti', 'Digiuno', 0.5, [0, 0, 2, 2], 'Reggi.', [-6, -3, 4, 1], 'Finisci le energie.')
      ]),
      card('t-peso2', 8, 'Il secondo giorno c’è una nuova pesata veloce: sei 0,6 kg sopra.', [
        c5('Tagli ancora liquidi con sauna', 'Taglio ripetuto', 0.3, [-4, -3, 8, -10], 'Passi.', [-10, -8, 14, -18], 'Parti molto indebolito.'),
        c5('Mantieni idratazione e alimentazione, usi il margine consentito e non fai ulteriori tagli', 'Margine di sicurezza', 0.8, [4, 3, -2, 3], 'Ok con le regole.', [2, 1, 0, 1], 'Piccole compensazioni.'),
        c5('Salti colazione e liquidi', 'Digiuno', 0.4, [-3, -2, 3, -6], 'Passi.', [-8, -6, 6, -10], 'Sei debole.')
      ]),
      card('t-finale', 9, 'Finale: sei stanco e sotto di poco ai punti a un round dalla fine.', [
        c5('All-in: rischi tutto sull’attacco', 'Rischio massimo', 0.3, [-2, 3, 8, 0], 'Funziona.', [-8, -6, 16, -2], 'Ti scopri e subisci.'),
        c5('Alzi il ritmo con scelte tattiche pulite e priorità di punteggio', 'Gestione tattica', 0.75, [3, 6, -2, 0], 'Recuperi punti.', [1, 3, 1, -1], 'Ci provi senza esporti troppo.'),
        c5('Gestisci e speri nella sorte', 'Passività', 0.4, [1, -1, 0, 0], 'Resti in gioco.', [-3, -4, 3, -2], 'Perdi.')
      ]),
      card('t-ginocchio', 10, 'Dopo una caduta senti il ginocchio instabile, ma è la finale.', [
        c5('Combatti: le finali non si saltano', 'Aderenza al risultato', 0.3, [2, 1, 4, 0], 'Vai avanti.', [-6, -6, 22, -2], 'Rischi un infortunio serio.'),
        c5('Ti fai valutare subito dal personale medico e ti ritiri se non c’è stabilità', 'Salute a lungo termine', 0.85, [-2, 2, -9, 0], 'Il ginocchio è sicuro per proseguire o ti fermi senza danni.', [-4, 1, -7, 0], 'Ti ritiri e proteggi la carriera.'),
        c5('Prendi una pausa di un minuto e vedi come va', 'Attesa', 0.4, [1, 0, 3, 0], 'Ti sembra a posto.', [-4, -3, 12, -1], 'Peggiora al primo scambio.')
      ])
    ]
  });
})(window.ST = window.ST || {});
