/* SkillTree — scenari di simulazione a carte (parte E, sport e scienze motorie): gara, forza, nutrizione, stagione, rientro. Tutto inventato e didattico: nessuna prescrizione medica. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  /* l'ultimo esito prende la probabilità residua, così le p sommano sempre a 1 */
  const ch = (label, principle, out, hint) => { if (out.length > 1) out[out.length - 1].p = Math.round((1 - out.slice(0, -1).reduce((s, x) => s + x.p, 0)) * 1000) / 1000; return hint ? { label, principle, hint, out } : { label, principle, out }; };
  /* l'ordine delle scelte è ruotato in modo deterministico, così la risposta migliore non sta sempre nella stessa posizione */
  const card = (id, lv, text, choices) => { let h = 0; for (let i = 0; i < id.length; i++) h += id.charCodeAt(i) * (i + 1); const r = h % choices.length; return { id, lv, text, choices: choices.slice(r).concat(choices.slice(0, r)) }; };

  /* ---- 1) Preparare una mezza maratona in 12 settimane ---- */
  SIM.register({
    id: 'spo-gara', subject: 'sport', title: 'Preparare una mezza maratona in 12 settimane', icon: '🏃',
    intro: 'Hai 12 settimane per preparare la tua prima mezza maratona, partendo da una base di 25 km di corsa a settimana. Ogni decisione sposta forma aerobica, fatica accumulata, rischio di infortunio e motivazione. Il punteggio premia la forma e la motivazione, penalizza la fatica residua e il rischio di infortunio: arrivare al via in forma ma già al limite non è un buon risultato.',
    vars: {
      forma: { label: 'Forma aerobica', start: 35, min: 0, max: 100 },
      fatica: { label: 'Fatica accumulata', start: 25, min: 0, max: 100 },
      rischio: { label: 'Rischio di infortunio', start: 15, min: 0, max: 100 },
      motivazione: { label: 'Motivazione', start: 65, min: 0, max: 100 }
    },
    weights: { forma: 1.6, fatica: -0.6, rischio: -1.2, motivazione: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,6 × forma − 0,6 × fatica − 1,2 × rischio di infortunio + 0,5 × motivazione',
    cards: [
      card('g-base', 1, 'Settimana 1. Corri 25 km a settimana e vuoi arrivare a 45 km in poche settimane. Quanto sali di volume?', [
        ch('Aumenti il volume del 30% ogni settimana', 'Progressione del carico', [o(0.45, { forma: 9, fatica: 12, rischio: 8, motivazione: 3 }, 'Sali in fretta e ti senti forte, ma tendini e ossa non hanno il tempo di adattarsi.'), o(0.55, { forma: 6, fatica: 16, rischio: 16, motivazione: -4 }, 'Compare un fastidio persistente alla tibia: ritmo troppo veloce per i tessuti.')]),
        ch('Aumenti di circa il 10% a settimana, con una settimana più leggera ogni quarta', 'Sovraccarico progressivo', [o(0.75, { forma: 8, fatica: 7, rischio: 2, motivazione: 3 }, 'Gli adattamenti arrivano senza sorprese: costanza invece di fretta.'), o(0.25, { forma: 5, fatica: 8, rischio: 4, motivazione: 0 }, 'Qualche settimana difficile ma sostenibile.')]),
        ch('Resti a 25 km finché non ti senti pronto', 'Prudenza eccessiva', [o(0.8, { forma: 2, fatica: 0, rischio: 0, motivazione: -2 }, 'Nessun rischio ma anche pochi progressi: il tempo corre.'), o(0.2, { forma: 3, fatica: 1, rischio: 0, motivazione: 0 }, 'Un modesto miglioramento arriva comunque.')])
      ]),
      card('g-ritmo', 1, 'La maggior parte delle tue uscite è a ritmo medio-forte, perché «così ti alleni sul serio». Un amico ti parla del lavoro a bassa intensità.', [
        ch('Continui a correre sempre forte: più duro, più forma', 'Distribuzione dell’intensità', [o(0.5, { forma: 6, fatica: 12, rischio: 6, motivazione: -3 }, 'Arrivi alle uscite chiave già stanco e non recuperi mai davvero.'), o(0.5, { forma: 8, fatica: 9, rischio: 3, motivazione: 0 }, 'Qualche progresso nel breve, ma il piatto si avvicina.')]),
        ch('Circa l’80% del volume facile e il 20% di qualità', 'Allenamento polarizzato', [o(0.7, { forma: 9, fatica: 4, rischio: 1, motivazione: 3 }, 'La base aerobica cresce e le uscite di qualità rendono di più.'), o(0.3, { forma: 6, fatica: 4, rischio: 1, motivazione: 0 }, 'Ti sembra di non allenarti abbastanza ma i dati migliorano lentamente.')]),
        ch('Fai solo ripetute veloci due volte a settimana', 'Specificità', [o(0.4, { forma: 8, fatica: 10, rischio: 8, motivazione: 2 }, 'Migliora la velocità, ma manca la base per reggere 21 km.'), o(0.6, { forma: 4, fatica: 13, rischio: 10, motivazione: -2 }, 'Il corpo non riesce a recuperare fra le sedute intense.')])
      ]),
      card('g-sonno', 2, 'Il lavoro ti costringe a dormire 5-6 ore a notte per due settimane, proprio mentre il carico aumenta.', [
        ch('Mantieni il programma invariato: la disciplina prima di tutto', 'Recupero', [o(0.5, { forma: 3, fatica: 14, rischio: 10, motivazione: -3 }, 'Senza sonno la fatica si accumula e la concentrazione cala.'), o(0.5, { forma: 5, fatica: 10, rischio: 6, motivazione: -1 }, 'Regge, ma a un costo nascosto.')]),
        ch('Riduci il volume del 20% e proteggi il sonno quando puoi', 'Adattamento del carico', [o(0.75, { forma: 4, fatica: 2, rischio: 1, motivazione: 2 }, 'Il corpo assorbe meglio l’allenamento: investimento intelligente.'), o(0.25, { forma: 3, fatica: 4, rischio: 2, motivazione: 0 }, 'Il calo di volume ti fa sentire in ritardo, ma la salute tiene.')]),
        ch('Salti tutte le uscite per una settimana', 'Riposo', [o(0.7, { forma: -2, fatica: -8, rischio: -2, motivazione: -3 }, 'Ti riposi, ma perdi un po’ del lavoro costruito.'), o(0.3, { forma: -3, fatica: -4, rischio: 0, motivazione: -5 }, 'Il sonno non migliora e perdi anche il ritmo.')])
      ]),
      card('g-scarpe', 2, 'Le tue scarpe hanno 900 km. Noti dolore al ginocchio dopo le uscite lunghe. Hai un budget limitato.', [
        ch('Ignori il segnale e vai avanti', 'Segnali di allarme', [o(0.4, { forma: 4, fatica: 3, rischio: 6, motivazione: -1 }, 'Il dolore è lieve e passa da solo.'), o(0.6, { forma: 2, fatica: 5, rischio: 16, motivazione: -5 }, 'Il fastidio peggiora e devi fermarti qualche giorno.')]),
        ch('Cambi le scarpe e riduci per qualche giorno il lungo', 'Gestione del carico', [o(0.7, { forma: 4, fatica: -2, rischio: -4, motivazione: 2 }, 'Il fastidio svanisce con il materiale nuovo e un po’ di scarico.'), o(0.3, { forma: 3, fatica: 0, rischio: 2, motivazione: 0 }, 'Il dolore resta lieve: da monitorare.')]),
        ch('Compri scarpe nuove ma non cambi nulla del programma', 'Attrezzatura', [o(0.55, { forma: 6, fatica: 4, rischio: -2, motivazione: 2 }, 'Il problema era il materiale.'), o(0.45, { forma: 5, fatica: 5, rischio: 6, motivazione: 0 }, 'Il dolore era un segnale di carico, non solo di scarpe.')])
      ]),
      card('g-lungo', 3, 'Sei a metà preparazione. Il tuo lungo più lungo è 14 km e la gara è di 21 km. Vuoi spingerti vicino alla distanza di gara.', [
        ch('Fai un lungo di 22 km per «vedere se ce la fai»', 'Specificità', [o(0.45, { forma: 8, fatica: 18, rischio: 10, motivazione: 5 }, 'Ce la fai e la fiducia sale, ma ti serve una settimana per riprenderti.'), o(0.55, { forma: 5, fatica: 22, rischio: 14, motivazione: -3 }, 'Finisci a pezzi e con un acciacco: la fiducia ne risente.')]),
        ch('Allunghi di 2 km a settimana fino a 17-18 km', 'Progressione graduale', [o(0.75, { forma: 9, fatica: 10, rischio: 3, motivazione: 4 }, 'Arrivi alla soglia dei 18 km senza traumi.'), o(0.25, { forma: 6, fatica: 11, rischio: 5, motivazione: 1 }, 'Un lungo va male, ma recuperi in fretta.')]),
        ch('Resti ai 14 km: in gara l’adrenalina farà il resto', 'Pianificazione', [o(0.4, { forma: 4, fatica: 3, rischio: 1, motivazione: 0 }, 'La gara va bene.'), o(0.6, { forma: 2, fatica: 4, rischio: 2, motivazione: -3 }, 'Cresce l’ansia sul fatto di non aver mai superato i 14 km.')])
      ]),
      card('g-allenamento-pesi', 3, 'Un compagno ti suggerisce di aggiungere due sedute di forza a settimana per migliorare l’economia di corsa e ridurre gli infortuni.', [
        ch('Aggiungi due sedute pesanti a corpo libero e carichi', 'Allenamento di forza per i runner', [o(0.55, { forma: 5, fatica: 8, rischio: -4, motivazione: 1 }, 'Il corpo regge meglio il chilometraggio, ma i muscoli sono stanchi nei primi giorni.'), o(0.45, { forma: 2, fatica: 13, rischio: 2, motivazione: -2 }, 'Le gambe pesanti rovinano le uscite di qualità.')]),
        ch('Una seduta leggera a settimana di rinforzo e stabilità', 'Prevenzione degli infortuni', [o(0.75, { forma: 4, fatica: 3, rischio: -5, motivazione: 2 }, 'Piccolo investimento, buon ritorno sulla robustezza.'), o(0.25, { forma: 3, fatica: 3, rischio: -2, motivazione: 0 }, 'Utile ma poco evidente.')]),
        ch('Niente forza: ogni minuto serve a correre', 'Specificità', [o(0.5, { forma: 6, fatica: 4, rischio: 4, motivazione: 0 }, 'Corri di più ma resti scoperto sui punti deboli.'), o(0.5, { forma: 4, fatica: 5, rischio: 8, motivazione: -1 }, 'Un fastidio ai flessori ti ricorda che sei sbilanciato.')])
      ]),
      card('g-test', 4, 'Un test da 5 km a settimana 6 dice che sei più lento del previsto rispetto all’obiettivo di 1h55.', [
        ch('Alzi il ritmo e inserisci un’uscita in più per recuperare', 'Obiettivi realistici', [o(0.4, { forma: 7, fatica: 12, rischio: 8, motivazione: 2 }, 'Ti spingi molto e qualcosa migliora.'), o(0.6, { forma: 4, fatica: 15, rischio: 12, motivazione: -3 }, 'Troppa pressione: arrivi stanco e demotivato.')]),
        ch('Rivedi l’obiettivo a 2h05 e mantieni il piano', 'Obiettivi realistici', [o(0.8, { forma: 6, fatica: 4, rischio: 1, motivazione: 5 }, 'Un obiettivo raggiungibile ti libera dalla pressione.'), o(0.2, { forma: 5, fatica: 5, rischio: 2, motivazione: 1 }, 'Un po’ di delusione, ma resti sereno.')]),
        ch('Ignori il test: è solo un giorno storto', 'Misurazione', [o(0.35, { forma: 5, fatica: 5, rischio: 3, motivazione: 0 }, 'In effetti il test era distorto dalla stanchezza.'), o(0.65, { forma: 3, fatica: 6, rischio: 5, motivazione: -2 }, 'Continui a forzare senza un dato affidabile su cui basarti.')])
      ]),
      card('g-picco', 4, 'Settimana 9, la settimana con il carico più alto. Senti le gambe pesanti da tre giorni e il battito a riposo è più alto del solito.', [
        ch('Completi comunque la seduta chiave: poche settimane alla gara', 'Segnali di sovrallenamento', [o(0.4, { forma: 6, fatica: 14, rischio: 10, motivazione: 0 }, 'Ce la fai, ma il conto della fatica sale.'), o(0.6, { forma: 3, fatica: 20, rischio: 18, motivazione: -5 }, 'Il corpo non risponde: iniziano i dolori e arriva la stanchezza.')]),
        ch('Alleggerisci la seduta e fai un giorno di recupero in più', 'Autoregolazione', [o(0.75, { forma: 5, fatica: -3, rischio: -3, motivazione: 2 }, 'Il corpo si riprende e puoi proseguire a pieno ritmo.'), o(0.25, { forma: 3, fatica: 0, rischio: 0, motivazione: 0 }, 'Perdi un po’ di ritmo, ma eviti guai.')]),
        ch('Fermi tutto per cinque giorni', 'Riposo', [o(0.7, { forma: -2, fatica: -18, rischio: -10, motivazione: 0 }, 'Ti riposi del tutto, ma sacrifichi parte della forma.'), o(0.4, { forma: -6, fatica: -8, rischio: -2, motivazione: -4 }, 'Troppa pausa: il ritmo si perde e l’ansia cresce.')])
      ]),
      card('g-viaggio', 5, 'Un viaggio di lavoro ti porta in un’altra città per quattro giorni nella settimana 10, con poco tempo e una palestra d’albergo.', [
        ch('Salti tutti gli allenamenti', 'Gestione degli imprevisti', [o(0.6, { forma: -3, fatica: -4, rischio: -1, motivazione: -2 }, 'Un piccolo calo, ma non grave.'), o(0.4, { forma: -5, fatica: -3, rischio: 0, motivazione: -5 }, 'Il senso di colpa pesa più dei giorni persi.')]),
        ch('Due corse brevi e facili sul tapis roulant', 'Minimo efficace', [o(0.8, { forma: 2, fatica: 2, rischio: 0, motivazione: 3 }, 'Mantieni la routine con un carico leggero.'), o(0.2, { forma: 1, fatica: 4, rischio: 2, motivazione: 0 }, 'Un allenamento fatto male su una macchina sconosciuta.')]),
        ch('Recuperi il volume perso con un lungo extra al ritorno', 'Pianificazione', [o(0.4, { forma: 5, fatica: 12, rischio: 9, motivazione: 0 }, 'Il volume è recuperato.'), o(0.6, { forma: 2, fatica: 16, rischio: 14, motivazione: -3 }, 'Troppo carico concentrato in pochi giorni.')])
      ]),
      card('g-affollamento', 6, 'Manca un mese. Un’amica ti propone un test di gara in una mezza di allenamento a ritmo gara, in una settimana già carica.', [
        ch('Fai la mezza di prova a tutta', 'Specificità', [o(0.45, { forma: 6, fatica: 16, rischio: 9, motivazione: 5 }, 'Ottimo test e ottima fiducia, ma il corpo è provato.'), o(0.55, { forma: 3, fatica: 22, rischio: 15, motivazione: -3 }, 'Finisci distrutto: la gara vera si avvicina e le gambe sono ancora a pezzi.')]),
        ch('Corri 10 km a ritmo gara come prova generale', 'Test parziale', [o(0.75, { forma: 6, fatica: 8, rischio: 3, motivazione: 4 }, 'Ottieni un dato utile con un costo gestibile.'), o(0.25, { forma: 4, fatica: 9, rischio: 4, motivazione: 0 }, 'La prova va così così, ma ti insegna cose utili.')]),
        ch('Rinunci alla prova e ti concentri sul recupero', 'Recupero', [o(0.6, { forma: 2, fatica: -5, rischio: -2, motivazione: -1 }, 'Eviti rischi ma resti senza un riferimento sul ritmo.'), o(0.4, { forma: 1, fatica: -3, rischio: 0, motivazione: -3 }, 'Arrivi al tapering senza sapere a che punto sei.')])
      ]),
      card('g-tapering', 7, 'Le ultime due settimane: si inizia lo scarico (tapering). Ti senti pieno di energia e hai paura di perdere la forma se corri meno.', [
        ch('Mantieni il volume pieno fino a pochi giorni prima', 'Tapering', [o(0.35, { forma: 3, fatica: 4, rischio: 6, motivazione: 2 }, 'Ti senti forte ma arrivi al via con fatica residua.'), o(0.65, { forma: 1, fatica: 10, rischio: 10, motivazione: -2 }, 'Arrivi alla gara con le gambe ancora pesanti.')]),
        ch('Riduci il volume del 40-50% mantenendo qualche tratto veloce', 'Tapering', [o(0.8, { forma: 4, fatica: -16, rischio: -5, motivazione: 4 }, 'Le gambe si scaricano e la forma si consolida: arrivi fresco.'), o(0.2, { forma: 2, fatica: -10, rischio: -2, motivazione: 1 }, 'Ti senti strano e un po’ pigro, ma è normale.')]),
        ch('Riduci quasi a zero per due settimane', 'Detraining', [o(0.5, { forma: -4, fatica: -18, rischio: -3, motivazione: 0 }, 'Fresco ma meno brillante.'), o(0.5, { forma: -6, fatica: -14, rischio: -1, motivazione: -3 }, 'Troppo fermo: le gambe «non girano» più.')])
      ]),
      card('g-gara-giorno', 8, 'Il giorno della gara. Dopo due ore di attesa senti l’adrenalina: puoi partire al ritmo che avevi in mente, o più veloce per «prendere margine».', [
        ch('Parti forte per fare margine nei primi chilometri', 'Pacing', [o(0.5, { forma: 14, fatica: 12, rischio: 6, motivazione: 8 }, 'Ti va bene e chiudi con un buon tempo.'), o(0.5, { forma: 3, fatica: 24, rischio: 14, motivazione: -6 }, 'Al km 15 crolli: la partenza troppo forte presenta il conto.')]),
        ch('Ritmo uniforme, leggermente più prudente nei primi 5 km', 'Pacing', [o(0.8, { forma: 9, fatica: 12, rischio: 2, motivazione: 7 }, 'Gara regolare, finale in crescendo: la gestione paga.'), o(0.2, { forma: 6, fatica: 12, rischio: 3, motivazione: 3 }, 'Chiudi bene ma con il rammarico di non aver osato.')]),
        ch('Segui il gruppo del pacer più veloce del tuo obiettivo', 'Obiettivi realistici', [o(0.4, { forma: 7, fatica: 14, rischio: 7, motivazione: 4 }, 'Il gruppo ti trascina e finisci forte.'), o(0.6, { forma: 3, fatica: 22, rischio: 13, motivazione: -4 }, 'Ti spremi presto e cali nel finale.')])
      ]),
      card('g-infortunio', 8, 'A due giorni dalla gara senti un fastidio al polpaccio, non forte ma persistente.', [
        ch('Corri comunque: hai lavorato 12 settimane', 'Costi affondati', [o(0.35, { forma: 5, fatica: 6, rischio: 8, motivazione: 3 }, 'Il fastidio svanisce e la gara va bene.'), o(0.65, { forma: 2, fatica: 12, rischio: 26, motivazione: -8 }, 'Lo strappo si completa a metà gara e ti ritiri.')]),
        ch('Riposo, ghiaccio e un consulto con un fisioterapista, poi decidi', 'Consulto professionale', [o(0.75, { forma: 3, fatica: -4, rischio: -6, motivazione: 3 }, 'Una diagnosi chiara ti permette di scegliere con calma.'), o(0.25, { forma: 1, fatica: -2, rischio: -2, motivazione: -2 }, 'Il consulto ti consiglia di rinunciare: deludente ma sensato.')]),
        ch('Rinunci subito alla gara', 'Prudenza', [o(0.8, { forma: -2, fatica: -6, rischio: -12, motivazione: -3 }, 'Eviti il danno ma perdi l’obiettivo.'), o(0.2, { forma: -3, fatica: -5, rischio: -6, motivazione: -8 }, 'Il polpaccio stava bene: peccato.')])
      ])
    ]
  });

  /* ---- 2) Ciclo di forza e ipertrofia di 12 settimane ---- */
  SIM.register({
    id: 'spo-forza', subject: 'sport', title: 'Ciclo di forza e ipertrofia di 12 settimane', icon: '🏋️',
    intro: 'Sei un praticante intermedio (due anni di allenamento) e prepari un ciclo di 12 settimane per aumentare forza e massa muscolare. Contano la forza, la massa magra, il recupero, la tecnica e la motivazione. Il punteggio premia forza, massa e tecnica, penalizza l’accumulo di fatica non recuperata: allenarsi di più non significa sempre allenarsi meglio.',
    vars: {
      forza: { label: 'Forza', start: 40, min: 0, max: 100 },
      massa: { label: 'Massa muscolare', start: 40, min: 0, max: 100 },
      tecnica: { label: 'Qualità della tecnica', start: 60, min: 0, max: 100 },
      fatica: { label: 'Fatica non recuperata', start: 20, min: 0, max: 100 },
      motivazione: { label: 'Motivazione', start: 70, min: 0, max: 100 }
    },
    weights: { forza: 1.3, massa: 1.1, tecnica: 0.6, fatica: -0.9, motivazione: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,3 × forza + 1,1 × massa + 0,6 × tecnica − 0,9 × fatica + 0,4 × motivazione',
    cards: [
      card('f-prog', 1, 'Settimana 1. Come imposti la progressione dei carichi su squat, panca e stacco?', [
        ch('Aggiungi peso ogni seduta finché riesci', 'Sovraccarico progressivo', [o(0.45, { forza: 8, massa: 3, tecnica: -4, fatica: 12, motivazione: 2 }, 'Per qualche settimana funziona, poi la tecnica si sfalda e i progressi si bloccano.'), o(0.55, { forza: 5, massa: 2, tecnica: -6, fatica: 16, motivazione: -3 }, 'Il carico cresce troppo in fretta: arrivano dolori articolari.')]),
        ch('Progressione a doppia soglia: aumenti il peso quando raggiungi il tetto di ripetizioni', 'Sovraccarico progressivo', [o(0.8, { forza: 8, massa: 5, tecnica: 2, fatica: 6, motivazione: 4 }, 'I progressi sono regolari e misurabili.'), o(0.2, { forza: 5, massa: 3, tecnica: 1, fatica: 7, motivazione: 0 }, 'Qualche settimana di stallo, ma la strada è giusta.')]),
        ch('Resti con gli stessi carichi finché sono facilissimi', 'Stimolo insufficiente', [o(0.85, { forza: 2, massa: 1, tecnica: 4, fatica: 2, motivazione: -3 }, 'Troppo facile per stimolare adattamenti.'), o(0.15, { forza: 4, massa: 2, tecnica: 4, fatica: 2, motivazione: 0 }, 'Un piccolo guadagno nonostante il carico basso.')])
      ]),
      card('f-volume', 1, 'Fino a ora hai fatto 8 serie per gruppo muscolare a settimana. Pensi di aumentare il volume.', [
        ch('Triplichi il volume a 24 serie a settimana', 'Volume di allenamento', [o(0.35, { forza: 4, massa: 8, fatica: 16, motivazione: -1 }, 'La massa risponde, ma con un costo di recupero altissimo.'), o(0.65, { forza: 1, massa: 3, fatica: 24, tecnica: -4, motivazione: -6 }, 'Troppo volume: il recupero non regge e le prestazioni calano.')]),
        ch('Porti il volume a 12-14 serie e controlli la risposta', 'Dose-risposta', [o(0.75, { forza: 6, massa: 8, fatica: 8, motivazione: 3 }, 'La risposta è buona e la fatica sostenibile.'), o(0.25, { forza: 4, massa: 5, fatica: 9, motivazione: 0 }, 'Qualche settimana pesante, ma ci arrivi.')]),
        ch('Resti a 8 serie ma aumenti il carico', 'Qualità contro quantità', [o(0.6, { forza: 6, massa: 3, fatica: 4, motivazione: 1 }, 'La forza cresce, la massa meno.'), o(0.4, { forza: 4, massa: 2, fatica: 4, motivazione: -1 }, 'Il progresso è lento.')])
      ]),
      card('f-tecnica', 2, 'Il tuo squat tende a «cadere in avanti» sotto carico. Un amico esperto te lo fa notare.', [
        ch('Ignori il consiglio: l’importante è il peso', 'Tecnica', [o(0.4, { forza: 5, massa: 2, tecnica: -2, fatica: 6, motivazione: 0 }, 'Il peso sale ma il rischio si accumula.'), o(0.6, { forza: 2, massa: 1, tecnica: -6, fatica: 10, motivazione: -3 }, 'Un dolore alla schiena ti costringe a fermarti.')]),
        ch('Scendi del 15% sul carico per qualche settimana e rifai il movimento con video e cue', 'Tecnica', [o(0.75, { forza: 1, massa: 1, tecnica: 10, fatica: -2, motivazione: 2 }, 'La tecnica migliora e ti prepara a carichi più alti.'), o(0.25, { forza: 0, massa: 0, tecnica: 6, fatica: -1, motivazione: -1 }, 'Il lavoro tecnico è lento ma utile.')]),
        ch('Cambi esercizio: leg press al posto dello squat', 'Selezione esercizi', [o(0.7, { forza: 3, massa: 4, tecnica: 1, fatica: 2, motivazione: 1 }, 'Più stabile e sicuro, ma meno trasferibile.'), o(0.3, { forza: 2, massa: 3, tecnica: -2, fatica: 3, motivazione: -2 }, 'Perdi il pattern motorio senza risolvere il problema.')])
      ]),
      card('f-riposo', 2, 'Hai due giorni di riposo a settimana ma ti senti «in colpa». Un compagno si allena sette giorni su sette.', [
        ch('Passi a sei giorni su sette', 'Recupero', [o(0.35, { forza: 4, massa: 4, fatica: 12, motivazione: 0 }, 'Per un po’ funziona.'), o(0.65, { forza: 1, massa: 2, fatica: 20, tecnica: -3, motivazione: -5 }, 'Il recupero salta e le sedute peggiorano.')]),
        ch('Mantieni quattro sedute e un giorno attivo leggero', 'Recupero', [o(0.8, { forza: 5, massa: 5, fatica: 3, motivazione: 3 }, 'La supercompensazione lavora per te.'), o(0.2, { forza: 4, massa: 3, fatica: 4, motivazione: 0 }, 'Qualche dubbio, ma i progressi continuano.')]),
        ch('Riduci a tre sedute per fare più calma', 'Frequenza', [o(0.6, { forza: 3, massa: 3, fatica: -2, motivazione: 0 }, 'Va bene, ma rallenta un po’.'), o(0.4, { forza: 2, massa: 2, fatica: -2, motivazione: -2 }, 'Il ritmo scende e la costanza ne risente.')])
      ]),
      card('f-proteine', 3, 'Mangi circa 1 g di proteine per kg di peso e il tuo coach ti suggerisce di alzare. Un influencer propone di arrivare a 4 g/kg.', [
        ch('Porti le proteine a 4 g/kg con polveri e integratori', 'Dose-risposta', [o(0.5, { massa: 3, fatica: 0, motivazione: -2 }, 'Costa molto e oltre un certo punto non aggiunge nulla.'), o(0.5, { massa: 2, fatica: 2, motivazione: -3 }, 'Fastidi digestivi e nessun beneficio in più.')]),
        ch('Porti le proteine a circa 1,6-2 g/kg da cibi comuni', 'Evidenza', [o(0.8, { massa: 6, forza: 2, motivazione: 2 }, 'Raggiungi un apporto sufficiente senza eccessi.'), o(0.2, { massa: 4, forza: 1, motivazione: 0 }, 'Qualche difficoltà di organizzazione, ma ci arrivi.')]),
        ch('Resti a 1 g/kg: il resto è marketing', 'Evidenza', [o(0.7, { massa: 1, forza: 0, motivazione: 0 }, 'Il recupero e la sintesi muscolare ne soffrono.'), o(0.3, { massa: 3, forza: 1, motivazione: 0 }, 'Ti basta, in questa fase.')])
      ]),
      card('f-plateau', 4, 'Dopo sei settimane lo stacco è fermo da tre settimane. Provi di tutto.', [
        ch('Aumenti il carico e il volume entrambi', 'Sovraccarico progressivo', [o(0.35, { forza: 7, massa: 3, fatica: 14, motivazione: 2 }, 'Sblocchi il plateau, ma sei sul filo.'), o(0.65, { forza: 2, massa: 1, fatica: 20, tecnica: -4, motivazione: -5 }, 'Il corpo non ha risorse: peggiori.')]),
        ch('Cambi variante dell’esercizio e tocchi la tecnica nella fase debole', 'Specificità', [o(0.65, { forza: 6, massa: 3, tecnica: 5, fatica: 4, motivazione: 3 }, 'Individui il punto debole e lo risolvi.'), o(0.35, { forza: 3, massa: 2, tecnica: 3, fatica: 4, motivazione: 0 }, 'Qualche progresso, ma niente di spettacolare.')]),
        ch('Una settimana di scarico (deload) e poi ripartire', 'Deload', [o(0.7, { forza: 5, massa: 2, fatica: -14, motivazione: 2 }, 'Dopo il riposo i carichi risalgono: il plateau era fatica.'), o(0.3, { forza: 1, massa: 0, fatica: -10, motivazione: -1 }, 'Ti riposi, ma il blocco non si scioglie subito.')])
      ]),
      card('f-motivazione', 4, 'La motivazione cala: le sedute sembrano tutte uguali e i progressi sono lenti.', [
        ch('Stringi i denti: la disciplina vince sempre', 'Motivazione', [o(0.5, { forza: 3, massa: 2, fatica: 4, motivazione: -3 }, 'Vai avanti, ma con fatica e senza gioia.'), o(0.5, { forza: 2, massa: 1, fatica: 6, motivazione: -6 }, 'La noia si trasforma in abbandono.')]),
        ch('Introduci una variante e un obiettivo breve di 3 settimane', 'Obiettivi a breve termine', [o(0.75, { forza: 4, massa: 3, fatica: 3, motivazione: 8 }, 'Un obiettivo vicino riaccende l’interesse.'), o(0.25, { forza: 3, massa: 2, fatica: 3, motivazione: 3 }, 'Un piccolo aiuto, ma niente di più.')]),
        ch('Salti una settimana per ricaricare la testa', 'Riposo', [o(0.6, { forza: 0, massa: 0, fatica: -8, motivazione: 4 }, 'Torni con più voglia.'), o(0.4, { forza: -2, massa: -1, fatica: -6, motivazione: -1 }, 'Il ritmo è perso e rientrare costa.')])
      ]),
      card('f-dolore', 5, 'Senti un dolore acuto e localizzato alla spalla durante la panca, che non passa a riposo.', [
        ch('Continui con carichi leggeri: «si scioglierà»', 'Segnali di allarme', [o(0.3, { forza: 3, massa: 2, fatica: 4, motivazione: 0 }, 'Il dolore passa da solo.'), o(0.7, { forza: -2, massa: 0, tecnica: -4, fatica: 12, motivazione: -6 }, 'Un’infiammazione che peggiora e blocca tutto.')]),
        ch('Sospendi la panca e fai esercizi senza dolore, consultando un fisioterapista se persiste', 'Consulto professionale', [o(0.75, { forza: 1, massa: 1, tecnica: 2, fatica: -2, motivazione: 2 }, 'Continui ad allenarti proteggendo la spalla.'), o(0.25, { forza: -1, massa: 0, tecnica: 1, fatica: -1, motivazione: -2 }, 'Il problema richiede più tempo di quanto pensassi.')]),
        ch('Ti fermi del tutto per un mese', 'Prudenza', [o(0.8, { forza: -2, massa: -1, fatica: -12, motivazione: -1 }, 'Eviti rischi ma perdi parte dei progressi.'), o(0.2, { forza: -6, massa: -4, fatica: -8, motivazione: -6 }, 'La spalla stava bene: sacrificio eccessivo.')])
      ]),
      card('f-test', 5, 'Alla settimana 8 vuoi testare il massimale (1RM) per vedere i progressi.', [
        ch('Provi un 1RM reale in solitaria, senza spotter', 'Sicurezza', [o(0.6, { forza: 9, tecnica: -1, fatica: 6, motivazione: 7 }, 'Nuovo record, ma con rischi.'), o(0.55, { forza: 2, tecnica: -4, fatica: 14, motivazione: -5 }, 'Il tentativo fallisce e ti fai male.')]),
        ch('Stimi il massimale con una serie di 3-5 ripetizioni vicino al cedimento', 'Misurazione', [o(0.8, { forza: 4, tecnica: 1, fatica: 4, motivazione: 4 }, 'Hai un dato affidabile con rischio minimo.'), o(0.2, { forza: 3, tecnica: 1, fatica: 4, motivazione: 1 }, 'La stima è imprecisa ma utile.')]),
        ch('Salti il test e ti fidi delle sensazioni', 'Misurazione', [o(0.5, { forza: 3, fatica: 2, motivazione: 0 }, 'Procedi senza dati.'), o(0.5, { forza: 2, fatica: 3, motivazione: -2 }, 'Non sai se stai davvero migliorando.')])
      ]),
      card('f-integratori', 6, 'Un negozio propone un «pacchetto massa» da 120 € (BCAA, brucia-grassi, booster vari). Hai poco budget.', [
        ch('Compri il pacchetto completo', 'Evidenza', [o(0.7, { massa: 0, motivazione: -3 }, 'Nessun beneficio misurabile e il budget è andato.'), o(0.3, { massa: 1, motivazione: -1 }, 'Un piccolo effetto placebo.')]),
        ch('Usi solo creatina monoidrato (dose standard) e curi pasti e sonno', 'Evidenza', [o(0.75, { forza: 4, massa: 3, motivazione: 2 }, 'La creatina è tra i pochi integratori con buone prove di efficacia.'), o(0.25, { forza: 2, massa: 1, motivazione: 0 }, 'Un piccolo effetto, ma nessun danno.')]),
        ch('Non compri nulla e rispetti solo il piano alimentare', 'Priorità', [o(0.7, { forza: 2, massa: 2, motivazione: 1 }, 'Ottimizzi le basi: sonno, calorie, proteine.'), o(0.3, { forza: 1, massa: 1, motivazione: 0 }, 'Tutto regolare, senza guadagni extra.')])
      ]),
      card('f-sonno-lavoro', 7, 'Un periodo di lavoro intenso ti lascia 5 ore di sonno a notte per due settimane.', [
        ch('Mantieni lo stesso programma: i muscoli non lo sanno', 'Recupero', [o(0.4, { forza: 2, massa: 1, fatica: 8, motivazione: 0 }, 'Per un po’ regge.'), o(0.6, { forza: -2, massa: -2, tecnica: -4, fatica: 16, motivazione: -5 }, 'La prestazione cala e il rischio di infortunio sale.')]),
        ch('Riduci volume del 30% e mantieni l’intensità', 'Deload', [o(0.75, { forza: 2, massa: 0, tecnica: 1, fatica: -6, motivazione: 3 }, 'Manteni il livello con un carico ridotto.'), o(0.25, { forza: 0, massa: -1, fatica: -3, motivazione: 0 }, 'Il compromesso è accettabile.')]),
        ch('Salti due settimane di palestra', 'Riposo', [o(0.6, { forza: -4, massa: -2, fatica: -12, motivazione: -3 }, 'Recuperi ma perdi qualche adattamento.'), o(0.4, { forza: -6, massa: -3, fatica: -8, motivazione: -5 }, 'Il rientro è faticoso e la motivazione scende.')])
      ]),
      card('f-peak', 8, 'Settimana 11. Sei in forma e vuoi un ultimo picco di carico prima di chiudere il ciclo.', [
        ch('Spingi al massimo per tre settimane consecutive', 'Sovraccarico', [o(0.4, { forza: 6, massa: 2, fatica: 12, motivazione: 3 }, 'Chiudi il ciclo con un picco notevole.'), o(0.6, { forza: 1, massa: 0, tecnica: -4, fatica: 22, motivazione: -5 }, 'Il picco si trasforma in crollo: troppo accumulo.')]),
        ch('Settimana di carichi alti seguita da un deload', 'Periodizzazione', [o(0.8, { forza: 6, massa: 2, tecnica: 2, fatica: -8, motivazione: 5 }, 'Il picco arriva a corpo riposato.'), o(0.2, { forza: 4, massa: 1, tecnica: 1, fatica: -5, motivazione: 2 }, 'Un risultato buono, ma meno spettacolare.')]),
        ch('Chiudi subito il ciclo e cambi programma', 'Pianificazione', [o(0.7, { forza: 2, massa: 1, fatica: -6, motivazione: 0 }, 'Un finale tranquillo.'), o(0.3, { forza: 1, massa: 0, fatica: -4, motivazione: -2 }, 'Hai l’impressione di aver lasciato qualcosa sul tavolo.')])
      ]),
      card('f-bilancio', 8, 'Alla fine del ciclo, un compagno ti chiede di preparare un programma più duro e rapido per il prossimo ciclo di 8 settimane.', [
        ch('Più volume, più frequenza, meno riposo', 'Sovraccarico', [o(0.3, { forza: 5, massa: 4, fatica: 12, motivazione: 0 }, 'Un buon risultato iniziale.'), o(0.7, { forza: 1, massa: 1, tecnica: -4, fatica: 20, motivazione: -5 }, 'Il corpo cede e si rischiano infortuni.')]),
        ch('Settimana di transizione e poi un nuovo blocco con focus sulla debolezza principale', 'Periodizzazione', [o(0.8, { forza: 4, massa: 3, tecnica: 3, fatica: -6, motivazione: 5 }, 'Una buona transizione prepara il prossimo ciclo.'), o(0.2, { forza: 3, massa: 2, tecnica: 2, fatica: -4, motivazione: 2 }, 'Qualche dubbio, ma procedi bene.')]),
        ch('Ripeti lo stesso programma: ha funzionato', 'Adattamento', [o(0.5, { forza: 3, massa: 2, fatica: 2, motivazione: -2 }, 'Funziona ancora, ma con rendimenti decrescenti.'), o(0.5, { forza: 1, massa: 1, fatica: 4, motivazione: -4 }, 'Il corpo si è adattato: progressi minimi.')])
      ])
    ]
  });

  /* ---- 3) Alimentazione di un atleta amatoriale ---- */
  SIM.register({
    id: 'spo-nutrizione', subject: 'sport', title: 'Alimentazione di un atleta amatoriale', icon: '🥗',
    intro: 'Sei un ciclista amatoriale che si allena cinque volte a settimana e partecipa a una granfondo fra due mesi. Devi gestire energia, proteine, carboidrati, idratazione e sonno. Il punteggio premia energia disponibile, recupero e prestazione, e penalizza i disturbi gastrointestinali e gli sprechi inutili: l’alimentazione sportiva non è una dieta di restrizione né una corsa agli integratori.',
    vars: {
      energia: { label: 'Energia disponibile', start: 55, min: 0, max: 100 },
      recupero: { label: 'Qualità del recupero', start: 50, min: 0, max: 100 },
      prestazione: { label: 'Prestazione', start: 45, min: 0, max: 100 },
      disturbi: { label: 'Disturbi (gastrici, crampi)', start: 10, min: 0, max: 100 },
      budget: { label: 'Budget residuo', start: 100, min: 0, max: 200, unit: '€' }
    },
    weights: { energia: 0.8, recupero: 1.0, prestazione: 1.4, disturbi: -1.1, budget: 0.1 },
    penalties: [],
    turns: 6, utilText: '0,8 × energia + 1 × recupero + 1,4 × prestazione − 1,1 × disturbi + 0,1 × budget',
    cards: [
      card('n-colazione', 1, 'Prima di un’uscita lunga di mattina non hai molta fame. Cosa fai?', [
        ch('Esci a digiuno per «bruciare più grassi»', 'Disponibilità energetica', [o(0.4, { energia: -4, prestazione: 2, disturbi: 1, recupero: -2 }, 'Per un’uscita facile può andare.'), o(0.6, { energia: -14, prestazione: -6, disturbi: 4, recupero: -6 }, 'Dopo due ore cali e rientri svuotato.')]),
        ch('Un pasto leggero ricco di carboidrati circa due ore prima', 'Carboidrati', [o(0.8, { energia: 8, prestazione: 6, disturbi: 0, recupero: 2 }, 'Parti con energia e gestisci bene lo sforzo.'), o(0.2, { energia: 5, prestazione: 3, disturbi: 4, recupero: 1 }, 'Un po’ di pesantezza, ma l’energia c’è.')]),
        ch('Un pasto abbondante con grassi e fibre un’ora prima', 'Tempistica dei nutrienti', [o(0.35, { energia: 6, prestazione: 2, disturbi: 4, recupero: 0 }, 'Non ti crea problemi.'), o(0.65, { energia: 3, prestazione: -2, disturbi: 14, recupero: -2 }, 'Pesantezza e fastidi all’intestino sui primi chilometri.')])
      ]),
      card('n-acqua', 1, 'Nelle uscite lunghe d’estate bevi pochissimo e hai spesso mal di testa a fine giornata.', [
        ch('Bevi solo quando hai sete', 'Idratazione', [o(0.5, { prestazione: 2, disturbi: 3, energia: -2 }, 'Per sforzi brevi va bene.'), o(0.5, { prestazione: -4, disturbi: 8, energia: -6, recupero: -4 }, 'Nelle uscite lunghe la disidratazione si fa sentire.')]),
        ch('Bevi con regolarità e integri sali minerali nelle uscite lunghe e calde', 'Idratazione', [o(0.8, { prestazione: 5, disturbi: -4, energia: 2, recupero: 3 }, 'Mantieni il rendimento e riduci i crampi.'), o(0.2, { prestazione: 3, disturbi: 1, energia: 1, recupero: 2 }, 'Un piccolo beneficio, con qualche fastidio di troppo.')]),
        ch('Bevi molta acqua semplice in grandi quantità, anche fuori dallo sforzo', 'Eccesso', [o(0.55, { prestazione: 1, disturbi: 2, recupero: 0 }, 'Va bene, ma non cambia molto.'), o(0.45, { prestazione: -2, disturbi: 8, energia: -2 }, 'Troppa acqua senza sali: gonfiore e fastidi.')])
      ]),
      card('n-pasto-dopo', 2, 'Dopo un allenamento duro sei molto stanco e non hai fame, ma domani hai un altro allenamento intenso.', [
        ch('Salti il pasto: mangerai a cena', 'Recupero', [o(0.5, { energia: -4, recupero: -4, prestazione: -1 }, 'Aspetti qualche ora e recuperi lo stesso.'), o(0.5, { energia: -8, recupero: -9, prestazione: -3 }, 'Il giorno dopo le gambe sono vuote.')]),
        ch('Uno spuntino con carboidrati e proteine entro un’ora o due', 'Recupero', [o(0.8, { energia: 6, recupero: 8, prestazione: 2 }, 'Reintegri le scorte e ricostruisci le fibre.'), o(0.2, { energia: 4, recupero: 5, prestazione: 1 }, 'Un beneficio piccolo ma reale.')]),
        ch('Un frullato proteico da 60 g di proteine senza altro', 'Dose-risposta', [o(0.6, { energia: 0, recupero: 3, prestazione: 0, disturbi: 3 }, 'Troppe proteine e pochi carboidrati.'), o(0.4, { energia: 1, recupero: 4, prestazione: 0, disturbi: 5 }, 'Reintegri poco il glicogeno.')])
      ]),
      card('n-peso', 2, 'Un amico ti suggerisce di ridurre drasticamente le calorie per perdere 4 kg in tre settimane «così sali più forte».', [
        ch('Tagli 1000 kcal al giorno', 'Disponibilità energetica', [o(0.3, { energia: -8, prestazione: 3, recupero: -4, disturbi: 4 }, 'Perdi peso ma ti senti spento.'), o(0.7, { energia: -20, prestazione: -9, recupero: -12, disturbi: 8 }, 'Energia bassa, sonno peggiore, allenamenti che si sgonfiano.')]),
        ch('Mantieni l’energia adeguata e ti prefiggi una perdita lenta e graduale, se serve', 'Equilibrio energetico', [o(0.8, { energia: 0, prestazione: 4, recupero: 4, disturbi: -2 }, 'Perdi un po’ di grasso senza compromettere la salute.'), o(0.2, { energia: -2, prestazione: 2, recupero: 2, disturbi: 0 }, 'Il cambiamento è lento ma sostenibile.')]),
        ch('Non pensi al peso e mangi a sensazione', 'Equilibrio energetico', [o(0.6, { energia: 3, prestazione: 2, recupero: 2 }, 'Funziona senza stress.'), o(0.4, { energia: -2, prestazione: 0, recupero: 0, disturbi: 3 }, 'Senza attenzione l’apporto varia troppo.')])
      ]),
      card('n-integratori', 3, 'Un negozio ti propone il pacchetto «prestazione» (brucia-grassi, aminoacidi, booster) a 90 €.', [
        ch('Compri tutto: «non si sa mai»', 'Evidenza', [o(0.75, { prestazione: 0, recupero: 0, disturbi: 3, budget: -90 }, 'Soldi spesi senza effetti misurabili.'), o(0.25, { prestazione: 2, recupero: 1, disturbi: 4, budget: -90 }, 'Un lieve effetto placebo.')]),
        ch('Compri solo caffeina in dose moderata per le gare', 'Evidenza', [o(0.75, { prestazione: 5, disturbi: 3, budget: -5 }, 'Un ergogenico con buone prove, a dosi moderate.'), o(0.25, { prestazione: 3, disturbi: 8, recupero: -3, budget: -5 }, 'Troppa caffeina: ansia e battito accelerato.')]),
        ch('Non compri nulla e investi in cibo di qualità', 'Priorità', [o(0.8, { energia: 4, recupero: 4, prestazione: 2, budget: -15 }, 'Spendi nel posto giusto.'), o(0.2, { energia: 2, recupero: 2, prestazione: 1, budget: -15 }, 'Un buon investimento, ma di modesta resa.')])
      ]),
      card('n-sonno', 3, 'Dormi circa 6 ore a notte e fai uno spuntino notturno. Una nutrizionista ti parla di sonno e recupero.', [
        ch('Continui così: il sonno è un lusso', 'Sonno e recupero', [o(0.5, { recupero: -6, prestazione: -2, energia: -3 }, 'Il recupero ne soffre.'), o(0.5, { recupero: -9, prestazione: -4, energia: -5, disturbi: 3 }, 'Stanchezza cronica e peggiori allenamenti.')]),
        ch('Porti il sonno a 7-8 ore e cena prima, leggera, con carboidrati', 'Sonno e recupero', [o(0.8, { recupero: 9, prestazione: 4, energia: 4 }, 'Il corpo ricostruisce meglio.'), o(0.2, { recupero: 5, prestazione: 2, energia: 2 }, 'Il miglioramento è graduale.')]),
        ch('Prendi un integratore «per dormire»', 'Evidenza', [o(0.6, { recupero: 1, prestazione: 0, budget: -20 }, 'Pochi effetti.'), o(0.4, { recupero: 3, prestazione: 1, disturbi: 3, budget: -20 }, 'Qualche beneficio ma anche effetti collaterali.')])
      ]),
      card('n-carico', 4, 'Entri nella settimana più dura (carico doppio). Come adegui l’alimentazione?', [
        ch('Mantieni la stessa dieta di sempre', 'Periodizzazione nutrizionale', [o(0.4, { energia: -4, prestazione: 0, recupero: -4 }, 'Qualche calo, ma si regge.'), o(0.6, { energia: -14, prestazione: -6, recupero: -10, disturbi: 3 }, 'Il corpo non ha abbastanza energia per sostenere il carico.')]),
        ch('Aumenti i carboidrati in proporzione al carico, anche durante lo sforzo', 'Carboidrati', [o(0.75, { energia: 8, prestazione: 6, recupero: 4, disturbi: 2 }, 'Il carburante è all’altezza del carico.'), o(0.25, { energia: 6, prestazione: 3, recupero: 2, disturbi: 8 }, 'Qualche disturbo intestinale all’inizio.')]),
        ch('Aumenti soprattutto le proteine e riduci i carboidrati', 'Equivoci comuni', [o(0.6, { energia: -4, prestazione: -2, recupero: 2, disturbi: 2 }, 'Il carburante non basta.'), o(0.4, { energia: -2, prestazione: 0, recupero: 3, disturbi: 3 }, 'Qualche beneficio sul recupero ma poca energia.')])
      ]),
      card('n-trasferta', 5, 'Sei in trasferta per una gara: il ristorante dell’hotel ha pasta, fritti e dolci, e il pasto classico del «carico» ti attrae.', [
        ch('Mangi una quantità enorme di pasta per «caricare»', 'Carico di carboidrati', [o(0.45, { energia: 6, prestazione: 2, disturbi: 8 }, 'Parti pieno ma un po’ pesante.'), o(0.55, { energia: 3, prestazione: -3, disturbi: 14 }, 'Gonfiore e fastidi addominali la mattina presto.')]),
        ch('Pasti regolari ricchi di carboidrati semplici da digerire, senza grandi novità', 'Pianificazione', [o(0.8, { energia: 8, prestazione: 5, disturbi: 0 }, 'Scorte piene e intestino tranquillo.'), o(0.2, { energia: 6, prestazione: 3, disturbi: 4 }, 'Un buon carico con piccoli disagi.')]),
        ch('Provi un cibo nuovo consigliato dal compagno di stanza', 'Novità il giorno prima', [o(0.35, { energia: 4, prestazione: 2, disturbi: 3 }, 'Ti va bene.'), o(0.65, { energia: 0, prestazione: -3, disturbi: 15 }, 'Il cibo nuovo non ti piace e dormi male.')])
      ]),
      card('n-gara', 6, 'La mattina della gara hai poco tempo: colazione veloce e partenza fra 90 minuti.', [
        ch('Salti la colazione per evitare problemi allo stomaco', 'Disponibilità energetica', [o(0.4, { energia: -6, prestazione: 0, disturbi: 0 }, 'Sopravvivi a stomaco vuoto per un po’.'), o(0.6, { energia: -14, prestazione: -7, disturbi: 3 }, 'A metà gara ti manca il carburante.')]),
        ch('Colazione abituale testata in allenamento: carboidrati facili, poco grasso e pochi fibre', 'Test in allenamento', [o(0.85, { energia: 8, prestazione: 7, disturbi: 0 }, 'Fai quello che hai già provato: nessuna sorpresa.'), o(0.15, { energia: 6, prestazione: 4, disturbi: 4 }, 'Qualche fastidio, ma tollerabile.')]),
        ch('Una colazione «speciale» consigliata da un forum: molto ricca di proteine', 'Novità il giorno di gara', [o(0.35, { energia: 3, prestazione: 2, disturbi: 4 }, 'Va meglio del previsto.'), o(0.65, { energia: 0, prestazione: -4, disturbi: 12 }, 'La digestione lenta ti appesantisce.')])
      ]),
      card('n-durante', 6, 'Durante la gara di 4 ore, a metà percorso senti calare le energie.', [
        ch('Continui senza mangiare: «ormai manca poco»', 'Carboidrati durante lo sforzo', [o(0.35, { energia: -6, prestazione: -1, disturbi: 2 }, 'Reggi per la spinta mentale.'), o(0.65, { energia: -16, prestazione: -9, disturbi: 4 }, 'Arriva la «crisi di fame» e il ritmo crolla.')]),
        ch('Assumi 60-90 g di carboidrati all’ora con gel, barrette e bevande, a piccole dosi', 'Carboidrati durante lo sforzo', [o(0.75, { energia: 10, prestazione: 8, disturbi: 3 }, 'Il rifornimento regolare mantiene alto il ritmo.'), o(0.25, { energia: 7, prestazione: 5, disturbi: 8 }, 'Efficace ma con qualche fastidio gastrico.')]),
        ch('Bevi tutto in una volta: una grande dose di gel concentrato', 'Tolleranza intestinale', [o(0.35, { energia: 6, prestazione: 3, disturbi: 8 }, 'Un picco di energia.'), o(0.65, { energia: 2, prestazione: -3, disturbi: 16 }, 'Nausea e crampi intestinali.')])
      ]),
      card('n-dopo-gara', 7, 'Subito dopo la gara sei sfinito. Hai due giorni per recuperare prima di riprendere.', [
        ch('Solo birra e pizza per festeggiare', 'Recupero', [o(0.6, { energia: 8, recupero: 4, disturbi: 2, prestazione: 2 }, 'Una serata piacevole.'), o(0.6, { energia: 0, recupero: -7, disturbi: 8 }, 'Il recupero ne soffre e dormi male.')]),
        ch('Carboidrati, proteine, liquidi e sali, poi un pasto normale e una buona notte', 'Recupero', [o(0.8, { energia: 8, recupero: 9, disturbi: -2 }, 'Reintegri bene e riparti presto.'), o(0.2, { energia: 5, recupero: 6, disturbi: 0 }, 'Un recupero buono ma lento.')]),
        ch('Digiuni per «pulire» l’organismo', 'Disponibilità energetica', [o(0.6, { energia: -10, recupero: -8, disturbi: 3 }, 'Peggiori il recupero.'), o(0.4, { energia: -6, recupero: -4, disturbi: 2 }, 'Il corpo si riprende più lentamente.')])
      ]),
      card('n-dopo-bilancio', 8, 'A fine stagione la nutrizionista ti propone un bilancio: come usare il tempo e il budget residui?', [
        ch('Compri un grande set di integratori «per l’anno prossimo»', 'Evidenza', [o(0.8, { prestazione: 0, recupero: 0, budget: -60 }, 'Spesa inutile.'), o(0.2, { prestazione: 1, recupero: 1, budget: -60 }, 'Un piccolo effetto placebo.')]),
        ch('Rivedi il piano con un professionista in base ai dati della stagione', 'Consulto professionale', [o(0.8, { energia: 4, recupero: 5, prestazione: 4, budget: -30 }, 'Ottimizzi dove serve davvero.'), o(0.2, { energia: 2, recupero: 3, prestazione: 2, budget: -30 }, 'Utile ma più modesto del previsto.')]),
        ch('Non cambi nulla: «ha funzionato»', 'Adattamento', [o(0.6, { energia: 1, recupero: 1, prestazione: 1 }, 'Mantieni lo status quo.'), o(0.4, { energia: -2, recupero: -2, prestazione: -1 }, 'Alcuni difetti del piano restano.')])
      ]),
      card('n-sale', 8, 'Un compagno ti racconta di bere acqua senza sali anche durante lo sforzo e di aver avuto vertigini a fine gara.', [
        ch('Bevi il più possibile durante la gara: più acqua, meglio è', 'Eccesso', [o(0.4, { prestazione: 2, disturbi: 4, energia: 0 }, 'Va bene.'), o(0.6, { prestazione: -3, disturbi: 12, energia: -3 }, 'Gonfiore e nausea: troppa acqua senza sali.')]),
        ch('Bevi a piccoli sorsi regolari, con sali nelle gare lunghe e calde', 'Idratazione', [o(0.85, { prestazione: 4, disturbi: -3, energia: 2 }, 'Il bilancio idrico resta stabile.'), o(0.15, { prestazione: 2, disturbi: 2, energia: 0 }, 'Un buon equilibrio con qualche piccolo fastidio.')]),
        ch('Bevi pochissimo per evitare soste e problemi gastrici', 'Idratazione', [o(0.4, { prestazione: 0, disturbi: 2, energia: -3 }, 'Reggi ma con fatica.'), o(0.6, { prestazione: -5, disturbi: 8, energia: -7 }, 'Disidratazione e crampi.')])
      ])
    ]
  });

  /* ---- 4) La stagione di una squadra amatoriale ---- */
  SIM.register({
    id: 'spo-stagione', subject: 'sport', title: 'La stagione di una squadra amatoriale', icon: '⚽',
    intro: 'Alleni una squadra amatoriale di calcio a 7 per una stagione di campionato, con giocatori che lavorano o studiano di giorno. Contano il livello di forma della squadra, l’affiatamento, gli infortuni, il carico di partite e il clima di gruppo. Il punteggio premia risultati (forma) e coesione, penalizza gli infortuni e l’eccesso di carico: vincere a tutti i costi spesso significa perdere giocatori.',
    vars: {
      forma: { label: 'Forma della squadra', start: 50, min: 0, max: 100 },
      coesione: { label: 'Coesione e clima', start: 60, min: 0, max: 100 },
      infortuni: { label: 'Infortuni e giocatori fermi', start: 10, min: 0, max: 100 },
      carico: { label: 'Carico accumulato', start: 25, min: 0, max: 100 },
      classifica: { label: 'Posizione in classifica', start: 40, min: 0, max: 100 }
    },
    weights: { forma: 1.0, coesione: 0.8, infortuni: -1.3, carico: -0.7, classifica: 0.9 },
    penalties: [],
    turns: 6, utilText: '1 × forma + 0,8 × coesione − 1,3 × infortuni − 0,7 × carico + 0,9 × classifica',
    cards: [
      card('s-preparazione', 1, 'Inizio stagione: i giocatori sono fermi da due mesi e hanno condizioni molto diverse. Come imposti le prime settimane?', [
        ch('Test massimale subito e allenamenti durissimi per tutti', 'Progressione del carico', [o(0.4, { forma: 8, coesione: -2, infortuni: 8, carico: 14, classifica: 2 }, 'Qualcuno risponde bene, ma molti si fermano.'), o(0.6, { forma: 4, coesione: -5, infortuni: 16, carico: 20, classifica: 0 }, 'Stiramenti e dolori muscolari: la rosa si assottiglia.')]),
        ch('Progressione graduale su tre settimane con gruppi per livello', 'Individualizzazione', [o(0.75, { forma: 8, coesione: 4, infortuni: 2, carico: 8, classifica: 3 }, 'Tutti arrivano alla prima partita in condizioni accettabili.'), o(0.25, { forma: 5, coesione: 2, infortuni: 4, carico: 9, classifica: 1 }, 'Il lavoro è efficace ma alcuni si sentono trattati con troppa prudenza.')]),
        ch('Solo partitelle: la forma si fa giocando', 'Specificità', [o(0.5, { forma: 5, coesione: 6, infortuni: 6, carico: 8, classifica: 2 }, 'Il gruppo si diverte, ma il carico è irregolare.'), o(0.5, { forma: 3, coesione: 5, infortuni: 10, carico: 10, classifica: 0 }, 'Chi parte da zero si fa male prima degli altri.')])
      ]),
      card('s-presenze', 1, 'Agli allenamenti infrasettimanali vengono in sei su quattordici: lavoro e studio.', [
        ch('Convochi per la partita solo chi si allena sempre', 'Regole e meritocrazia', [o(0.5, { forma: 3, coesione: -6, infortuni: 2, classifica: -2 }, 'Pochi disponibili e molta tensione nel gruppo.'), o(0.5, { forma: 5, coesione: -3, infortuni: 3, classifica: 2 }, 'La regola motiva alcuni, ma ne allontana altri.')]),
        ch('Allenamenti brevi ma intensi in due orari diversi, flessibili', 'Individualizzazione', [o(0.7, { forma: 6, coesione: 5, infortuni: 1, carico: 4, classifica: 2 }, 'Più giocatori partecipano e il gruppo regge.'), o(0.3, { forma: 4, coesione: 3, infortuni: 1, carico: 5, classifica: 0 }, 'Complicato da organizzare, ma utile.')]),
        ch('Allenamento unico, chi non viene resta fuori dalla formazione', 'Regole e meritocrazia', [o(0.5, { forma: 4, coesione: -5, infortuni: 3, classifica: 1 }, 'Il gruppo si divide.'), o(0.5, { forma: 3, coesione: -8, infortuni: 3, classifica: -1 }, 'Alcuni lasciano la squadra.')])
      ]),
      card('s-rotazioni', 2, 'Tre partite in otto giorni. Il tuo undici titolare è molto più forte della panchina.', [
        ch('Giochi sempre con i migliori: si vince ora', 'Rotazioni', [o(0.7, { forma: 6, coesione: -3, infortuni: 6, carico: 10, classifica: 14 }, 'Vinci, ma i titolari sono sempre più stanchi.'), o(0.5, { forma: 2, coesione: -6, infortuni: 14, carico: 18, classifica: 2 }, 'Cala la brillantezza e qualcuno si fa male.')]),
        ch('Alterni i titolari, dando spazio alla panchina nelle partite meno importanti', 'Rotazioni', [o(0.65, { forma: 4, coesione: 6, infortuni: -2, carico: 4, classifica: 4 }, 'Il carico si distribuisce e il gruppo apprezza.'), o(0.35, { forma: 2, coesione: 4, infortuni: -1, carico: 5, classifica: 0 }, 'Perdi punti ma costruisci profondità.')]),
        ch('Fai riposare tutti i titolari in una partita su tre indipendentemente dall’avversario', 'Rotazioni', [o(0.5, { forma: 3, coesione: 3, infortuni: -3, carico: 2, classifica: 1 }, 'Equilibrio buono ma si rischia contro avversari forti.'), o(0.5, { forma: 1, coesione: 2, infortuni: -2, carico: 3, classifica: -3 }, 'Perdi una partita che potevi vincere.')])
      ]),
      card('s-infortunio', 2, 'Il tuo miglior attaccante esce con una distorsione di caviglia lieve e vuole giocare il sabato dopo.', [
        ch('Lo fai giocare: sta bene, dice lui', 'Segnali di allarme', [o(0.4, { forma: 4, coesione: 2, infortuni: 4, classifica: 4 }, 'Gioca bene e non si ripresenta nulla.'), o(0.6, { forma: 0, coesione: -2, infortuni: 16, carico: 4, classifica: 0 }, 'Si ripete l’infortunio, più grave: stagione compromessa.')]),
        ch('Segui un protocollo graduale: riposo, rientro progressivo, valutazione di un fisioterapista', 'Consulto professionale', [o(0.8, { forma: 1, coesione: 3, infortuni: -4, carico: -2, classifica: -1 }, 'Recupera bene e rientra senza ricadute.'), o(0.2, { forma: -1, coesione: 1, infortuni: -2, carico: 0, classifica: -3 }, 'Il recupero è più lento del previsto.')]),
        ch('Lo lasci fuori per un mese per sicurezza', 'Prudenza', [o(0.8, { forma: -2, coesione: 2, infortuni: -10, classifica: -3 }, 'Sicuro ma perdi un pezzo importante a lungo.'), o(0.2, { forma: -4, coesione: -1, infortuni: -3, classifica: -7 }, 'Eccesso di prudenza: la squadra ne soffre.')])
      ]),
      card('s-test', 3, 'Vuoi misurare la condizione della squadra con un test aerobico (es. Yo-Yo) a metà autunno.', [
        ch('Test massimale per tutti il giorno dopo la partita', 'Misurazione', [o(0.4, { forma: 2, coesione: -2, infortuni: 4, carico: 8 }, 'Dati utili ma rischiosi.'), o(0.6, { forma: 0, coesione: -4, infortuni: 10, carico: 14 }, 'Giocatori già stanchi: due distorsioni e tanto malumore.')]),
        ch('Test sottomassimale in un giorno di recupero, per tarare gli allenamenti', 'Misurazione', [o(0.75, { forma: 5, coesione: 3, infortuni: 0, carico: 3, classifica: 1 }, 'Dati utili senza rischi.'), o(0.25, { forma: 3, coesione: 2, infortuni: 1, carico: 4, classifica: 0 }, 'Il test è meno informativo del previsto.')]),
        ch('Nessun test: guardi i giocatori e ti fidi dell’occhio', 'Osservazione', [o(0.5, { forma: 3, coesione: 2, infortuni: 3, carico: 3 }, 'Qualche intuizione buona.'), o(0.5, { forma: 1, coesione: 0, infortuni: 5, carico: 5 }, 'Non vedi chi è davvero in difficoltà.')])
      ]),
      card('s-leader', 3, 'Due giocatori forti litigano nello spogliatoio per il ruolo e la fascia da capitano.', [
        ch('Ignori: sono adulti, si risolverà', 'Clima di squadra', [o(0.35, { coesione: 0, forma: 1 }, 'Si ricuciono da soli.'), o(0.65, { coesione: -10, forma: -3, classifica: -2 }, 'Il clima si guasta e si formano fazioni.')]),
        ch('Parli con entrambi in privato e definisci ruoli chiari', 'Comunicazione', [o(0.75, { coesione: 8, forma: 2, classifica: 1 }, 'I ruoli si chiariscono e il gruppo si compatta.'), o(0.25, { coesione: 3, forma: 1, classifica: 0 }, 'Il chiarimento è parziale ma utile.')]),
        ch('Metti uno dei due in panchina per dare l’esempio', 'Autorità', [o(0.45, { coesione: 2, forma: -2, classifica: -1 }, 'La questione si chiude.'), o(0.55, { coesione: -6, forma: -4, classifica: -3 }, 'Il giocatore si sente punito e il clima peggiora.')])
      ]),
      card('s-calendario', 4, 'Dicembre: cinque partite in dieci giorni, tra campionato e coppa. La rosa è corta.', [
        ch('Giochi tutto con la formazione migliore', 'Gestione del carico', [o(0.4, { forma: 4, coesione: 0, infortuni: 10, carico: 18, classifica: 8 }, 'Resti in corsa su tutti i fronti, ma ti logori.'), o(0.6, { forma: 0, coesione: -3, infortuni: 18, carico: 24, classifica: 3 }, 'Troppe partite: gli infortuni arrivano a raffica.')]),
        ch('Dai priorità al campionato e usi la coppa per le seconde linee', 'Priorità', [o(0.7, { forma: 3, coesione: 3, infortuni: 2, carico: 6, classifica: 5 }, 'Distribuisci il carico e mantieni l’obiettivo principale.'), o(0.3, { forma: 1, coesione: 1, infortuni: 3, carico: 7, classifica: 2 }, 'Esci presto in coppa, ma il campionato resta tuo.')]),
        ch('Chiedi di rinviare due partite, con rischio di sanzioni o di calendario futuro ancora più fitto', 'Negoziazione', [o(0.5, { forma: 2, coesione: 2, infortuni: -4, carico: -4, classifica: 0 }, 'Ottieni respiro.'), o(0.5, { forma: 0, coesione: -2, infortuni: 2, carico: 6, classifica: -3 }, 'Rinvio negato e l’arbitro ti penalizza.')])
      ]),
      card('s-allenamento-leggero', 4, 'Dopo due sconfitte il morale è basso. Un dirigente chiede allenamenti più duri per «punire» il gruppo.', [
        ch('Raddoppi la durata e l’intensità degli allenamenti', 'Gestione del carico', [o(0.3, { forma: 4, coesione: -2, infortuni: 6, carico: 14, classifica: 2 }, 'Si reagisce, ma con fatica.'), o(0.7, { forma: -1, coesione: -8, infortuni: 12, carico: 20, classifica: -2 }, 'Stanchezza e malumori: il peggio.')]),
        ch('Allenamento tecnico-tattico e un colloquio di gruppo sugli errori', 'Clima di squadra', [o(0.7, { forma: 4, coesione: 8, infortuni: 0, carico: 2, classifica: 3 }, 'Capite gli errori e ripartite uniti.'), o(0.3, { forma: 2, coesione: 4, infortuni: 0, carico: 3, classifica: 0 }, 'Utile, ma servono tempo e risultati.')]),
        ch('Nessun cambiamento: le sconfitte capitano', 'Continuità', [o(0.5, { forma: 2, coesione: 0, infortuni: 1, carico: 3, classifica: 1 }, 'Si va avanti senza scosse.'), o(0.5, { forma: 0, coesione: -3, infortuni: 2, carico: 4, classifica: -2 }, 'Il malumore resta senza una risposta.')])
      ]),
      card('s-dolore', 5, 'Un difensore dice di sentire dolore muscolare da giorni ma «non vuole lasciare i compagni» nel derby.', [
        ch('Lo schieri: è il derby', 'Costi affondati', [o(0.4, { forma: 3, coesione: 3, infortuni: 4, classifica: 4 }, 'Gioca bene e il dolore passa.'), o(0.6, { forma: -2, coesione: -2, infortuni: 16, classifica: 0 }, 'Si strappa e salta mezza stagione.')]),
        ch('Lo lasci in panchina, spiegando che la salute viene prima, e lo fai valutare', 'Consulto professionale', [o(0.8, { forma: 0, coesione: 5, infortuni: -4, classifica: -2 }, 'Il gruppo capisce e si fida della tua scelta.'), o(0.2, { forma: -1, coesione: 2, infortuni: -2, classifica: -4 }, 'Perdete e qualcuno borbotta.')]),
        ch('Lo fai giocare pochi minuti', 'Compromesso', [o(0.5, { forma: 2, coesione: 2, infortuni: 2, classifica: 2 }, 'Tutto va bene.'), o(0.5, { forma: 0, coesione: 0, infortuni: 10, classifica: 0 }, 'Basta poco per peggiorare il problema.')])
      ]),
      card('s-giovani', 6, 'Hai due giovani promettenti e inesperti. I veterani chiedono di non rischiarli nelle partite decisive.', [
        ch('Li schieri solo nelle partite facili', 'Sviluppo', [o(0.6, { forma: 2, coesione: 2, infortuni: 1, classifica: 2 }, 'Gestisci con prudenza.'), o(0.4, { forma: 1, coesione: -2, infortuni: 1, classifica: 0 }, 'I giovani si sentono sottovalutati.')]),
        ch('Li inserisci a rotazione, alternando minuti brevi nelle partite importanti', 'Sviluppo', [o(0.65, { forma: 4, coesione: 5, infortuni: 0, carico: -2, classifica: 3 }, 'Crescono in fretta e alleggeriscono i veterani.'), o(0.35, { forma: 1, coesione: 2, infortuni: 1, carico: -1, classifica: -2 }, 'Un errore giovanile costa punti, ma imparano.')]),
        ch('Li metti titolari: sono i migliori del momento', 'Merito', [o(0.45, { forma: 5, coesione: -3, infortuni: 2, classifica: 5 }, 'Rendono ma i veterani si risentono.'), o(0.55, { forma: 1, coesione: -5, infortuni: 3, classifica: 0 }, 'L’inesperienza costa punti e il clima peggiora.')])
      ]),
      card('s-fine-stagione', 7, 'Marzo: la squadra è in lotta per i playoff ma molti giocatori sono stanchi e due sono infortunati.', [
        ch('Spremi tutti nelle ultime partite: ora o mai più', 'Gestione del carico', [o(0.35, { forma: 3, coesione: 2, infortuni: 8, carico: 14, classifica: 10 }, 'Raggiungi i playoff a caro prezzo.'), o(0.65, { forma: -2, coesione: -4, infortuni: 18, carico: 20, classifica: 2 }, 'La squadra si spegne e si fanno male in tanti.')]),
        ch('Alleggerisci gli allenamenti infrasettimanali e punti sulla qualità', 'Tapering', [o(0.7, { forma: 4, coesione: 4, infortuni: -4, carico: -10, classifica: 6 }, 'Arrivi fresco alle partite decisive.'), o(0.3, { forma: 2, coesione: 2, infortuni: -2, carico: -6, classifica: 2 }, 'Il risparmio non basta a cambiare il quadro.')]),
        ch('Cambi tutto: nuovo modulo e nuovi ruoli', 'Cambiamenti in corsa', [o(0.3, { forma: 4, coesione: 2, infortuni: 2, carico: 6, classifica: 6 }, 'Sorprendi gli avversari.'), o(0.7, { forma: -2, coesione: -5, infortuni: 4, carico: 8, classifica: -4 }, 'Nessuno ha automatismi nuovi: confusione.')])
      ]),
      card('s-playoff', 8, 'Playoff: partita secca. Un titolare ha un fastidio, e un altro è al limite di fatica.', [
        ch('Schieri la formazione ideale, fastidi compresi', 'Rischio e premio', [o(0.4, { forma: 3, coesione: 3, infortuni: 6, carico: 6, classifica: 10 }, 'Vinci e la squadra esulta.'), o(0.6, { forma: 0, coesione: -2, infortuni: 16, carico: 10, classifica: 2 }, 'Uno dei due si ferma durante la partita.')]),
        ch('Gestisci con una rotazione mirata e sostituzioni preventive', 'Rotazioni', [o(0.65, { forma: 3, coesione: 4, infortuni: -2, carico: 2, classifica: 7 }, 'La freschezza decide la partita.'), o(0.35, { forma: 1, coesione: 2, infortuni: -1, carico: 3, classifica: 2 }, 'Esci con onore.')]),
        ch('Giochi tutto sull’attacco, rinunciando alle rotazioni', 'Rischio e premio', [o(0.4, { forma: 2, coesione: 3, infortuni: 6, carico: 8, classifica: 8 }, 'Una partita spettacolare e vincente.'), o(0.6, { forma: 0, coesione: -3, infortuni: 12, carico: 12, classifica: -3 }, 'Contropiedi subiti e giocatori distrutti.')])
      ]),
      card('s-ultima', 8, 'Fine stagione. Il club chiede un bilancio: continuare con un calendario fitto o ridurre gli impegni per tutelare i giocatori?', [
        ch('Aumenti gli impegni: più partite, più visibilità', 'Gestione del carico', [o(0.4, { forma: 2, coesione: 2, infortuni: 6, carico: 10, classifica: 4 }, 'Cresce l’esposizione, con il rischio di logorio.'), o(0.6, { forma: -1, coesione: -3, infortuni: 12, carico: 16, classifica: 0 }, 'La rosa non regge e gli abbandoni crescono.')]),
        ch('Mantieni il calendario e aggiungi una settimana di scarico a metà stagione', 'Periodizzazione', [o(0.8, { forma: 4, coesione: 5, infortuni: -3, carico: -6, classifica: 3 }, 'Una stagione equilibrata per tutti.'), o(0.2, { forma: 2, coesione: 3, infortuni: -1, carico: -3, classifica: 1 }, 'Una buona gestione, senza grandi risultati.')]),
        ch('Riduci gli impegni al minimo', 'Prudenza', [o(0.6, { forma: -2, coesione: -2, infortuni: -4, carico: -10, classifica: -4 }, 'Meno rischi ma anche meno stimoli.'), o(0.4, { forma: -3, coesione: -4, infortuni: -3, carico: -8, classifica: -6 }, 'Il gruppo perde interesse.')])
      ])
    ]
  });

  /* ---- 5) Il rientro graduale dopo uno stop ---- */
  SIM.register({
    id: 'spo-rientro', subject: 'sport', title: 'Il rientro graduale dopo uno stop', icon: '🩹',
    intro: 'Dopo uno stop di due mesi per un fastidio muscolare al polpaccio, vuoi tornare ad allenarti. Le variabili contano: la capacità funzionale (cosa riesci a fare), la fiducia nel tuo corpo, il rischio di ricaduta e la costanza. Il punteggio premia capacità e fiducia, penalizza il rischio di ricaduta. Non si tratta di consigli medici: in caso di dolore o dubbi, il riferimento è un professionista della salute.',
    vars: {
      capacita: { label: 'Capacità funzionale', start: 30, min: 0, max: 100 },
      fiducia: { label: 'Fiducia nel proprio corpo', start: 40, min: 0, max: 100 },
      ricaduta: { label: 'Rischio di ricaduta', start: 25, min: 0, max: 100 },
      costanza: { label: 'Costanza', start: 50, min: 0, max: 100 }
    },
    weights: { capacita: 1.3, fiducia: 0.8, ricaduta: -1.6, costanza: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,3 × capacità − 1,6 × rischio di ricaduta + 0,8 × fiducia + 0,5 × costanza',
    cards: [
      card('r-primo', 1, 'È il primo giorno di rientro. Il polpaccio non fa male nelle attività quotidiane, ma non l’hai ancora messo sotto sforzo.', [
        ch('Riparti dal livello di prima: «il corpo ricorda»', 'Progressione del carico', [o(0.3, { capacita: 6, fiducia: 5, ricaduta: 6, costanza: 3 }, 'Ti va bene e senti la forza che torna.'), o(0.7, { capacita: 2, fiducia: -6, ricaduta: 20, costanza: -4 }, 'Il polpaccio si irrigidisce dopo mezz’ora: ricaduta immediata.')]),
        ch('Inizi con il 40% del carico di prima e osservi la risposta nelle 24 ore', 'Rientro progressivo', [o(0.8, { capacita: 5, fiducia: 6, ricaduta: 0, costanza: 5 }, 'La risposta è buona e la fiducia si costruisce.'), o(0.2, { capacita: 3, fiducia: 2, ricaduta: 2, costanza: 2 }, 'Una piccola rigidità, ma sotto controllo.')]),
        ch('Aspetti ancora due settimane per essere sicuro', 'Prudenza', [o(0.8, { capacita: -2, fiducia: -2, ricaduta: 0, costanza: -4 }, 'Altro tempo passa e la forma cala.'), o(0.2, { capacita: 0, fiducia: 1, ricaduta: -2, costanza: -1 }, 'Un recupero ulteriore, utile.')])
      ]),
      card('r-dolore-zero', 1, 'Dopo la prima settimana senti un lieve fastidio durante il lavoro, ma sparisce a riposo. Sul dolore ci sono molte opinioni.', [
        ch('Dolore tollerabile = si può continuare: «senza sacrificio non c’è progresso»', 'Segnali di allarme', [o(0.35, { capacita: 5, fiducia: 2, ricaduta: 4, costanza: 3 }, 'Il fastidio svanisce.'), o(0.65, { capacita: 1, fiducia: -5, ricaduta: 16, costanza: -3 }, 'Il fastidio cresce: non era un buon segnale.')]),
        ch('Riduci il carico finché l’attività è senza dolore e osservi nei giorni seguenti', 'Segnali di allarme', [o(0.8, { capacita: 4, fiducia: 5, ricaduta: -2, costanza: 4 }, 'Il corpo risponde e la fiducia cresce.'), o(0.2, { capacita: 2, fiducia: 2, ricaduta: 2, costanza: 1 }, 'Il fastidio c’è ancora: pazienza.')]),
        ch('Smetti tutto e aspetti che passi del tutto', 'Prudenza', [o(0.7, { capacita: -3, fiducia: -2, ricaduta: -2, costanza: -4 }, 'Eviti la ricaduta ma perdi terreno.'), o(0.3, { capacita: -4, fiducia: -4, ricaduta: 0, costanza: -6 }, 'La paura ti blocca più del dolore.')])
      ]),
      card('r-fisio', 2, 'Dopo due settimane il polpaccio sembra a posto, ma non hai mai fatto una valutazione della causa dell’infortunio.', [
        ch('Non serve: è passato, quindi è guarito', 'Prevenzione', [o(0.4, { capacita: 3, fiducia: 2, ricaduta: 2 }, 'Va tutto bene.'), o(0.6, { capacita: 1, fiducia: -3, ricaduta: 12 }, 'Le cause (debolezza, tecnica, carico) non erano risolte.')]),
        ch('Prenoti una valutazione con un fisioterapista e segui gli esercizi indicati', 'Consulto professionale', [o(0.8, { capacita: 6, fiducia: 7, ricaduta: -6, costanza: 3 }, 'Capisci i punti deboli e li lavori in modo mirato.'), o(0.2, { capacita: 3, fiducia: 3, ricaduta: -2, costanza: 1 }, 'La valutazione non aggiunge molto, ma rassicura.')]),
        ch('Cerchi esercizi su internet e li segui da solo', 'Fonti di informazione', [o(0.5, { capacita: 4, fiducia: 3, ricaduta: 0, costanza: 2 }, 'Qualcosa di utile.'), o(0.5, { capacita: 2, fiducia: 0, ricaduta: 8, costanza: 0 }, 'Esercizi non adatti al tuo caso.')])
      ]),
      card('r-fiducia', 2, 'Hai paura di muoverti normalmente: ogni piccolo tiro ti fa irrigidire e ti blocchi.', [
        ch('Ignori la paura e provi a fare tutto di colpo', 'Esposizione graduale', [o(0.3, { capacita: 4, fiducia: 6, ricaduta: 6 }, 'Ti va bene, ma è una scommessa.'), o(0.7, { capacita: 1, fiducia: -6, ricaduta: 14 }, 'Un piccolo imprevisto ti spaventa ancora di più.')]),
        ch('Esposizione graduale: movimenti sempre più complessi, con obiettivi piccoli e misurabili', 'Esposizione graduale', [o(0.8, { capacita: 5, fiducia: 9, ricaduta: -1, costanza: 4 }, 'La fiducia cresce insieme alla capacità.'), o(0.2, { capacita: 3, fiducia: 4, ricaduta: 1, costanza: 2 }, 'Il processo è lento ma funziona.')]),
        ch('Eviti i movimenti che ti spaventano', 'Evitamento', [o(0.7, { capacita: -1, fiducia: -4, ricaduta: 2, costanza: -2 }, 'La paura si consolida.'), o(0.3, { capacita: 0, fiducia: -2, ricaduta: 0, costanza: 0 }, 'Il problema resta lì.')])
      ]),
      card('r-gruppo', 3, 'Gli amici ti propongono di giocare una partita informale domenica: sono tre settimane che ti alleni a basso carico.', [
        ch('Giochi tutta la partita: «è solo per divertirci»', 'Gestione del carico', [o(0.35, { capacita: 6, fiducia: 7, ricaduta: 6, costanza: 4 }, 'Ti diverti e il polpaccio regge.'), o(0.65, { capacita: 1, fiducia: -7, ricaduta: 20, costanza: -4 }, 'Scatti e cambi di direzione sono troppo per ora.')]),
        ch('Giochi 20 minuti, accordandoti sul ruolo e sui cambi', 'Rientro progressivo', [o(0.75, { capacita: 5, fiducia: 7, ricaduta: 1, costanza: 4 }, 'Un test controllato e un buon segnale.'), o(0.25, { capacita: 3, fiducia: 3, ricaduta: 4, costanza: 1 }, 'Qualche fastidio ma gestibile.')]),
        ch('Rinunci e guardi la partita', 'Prudenza', [o(0.7, { capacita: 0, fiducia: -2, ricaduta: 0, costanza: -2 }, 'Sicuro ma frustrante.'), o(0.3, { capacita: 0, fiducia: -3, ricaduta: -1, costanza: -3 }, 'Ti senti escluso dal gruppo.')])
      ]),
      card('r-progressione', 4, 'Dopo quattro settimane ti senti benissimo. Vuoi accelerare e tornare al volume pieno in una settimana.', [
        ch('Torni subito al volume pieno', 'Progressione del carico', [o(0.3, { capacita: 8, fiducia: 5, ricaduta: 8, costanza: 3 }, 'Il corpo regge.'), o(0.7, { capacita: 3, fiducia: -6, ricaduta: 22, costanza: -3 }, 'Troppo e troppo presto: il polpaccio si arrende.')]),
        ch('Aumenti del 10-15% a settimana, con un test funzionale ogni due settimane', 'Sovraccarico progressivo', [o(0.8, { capacita: 8, fiducia: 6, ricaduta: 0, costanza: 5 }, 'Progresso stabile e misurato.'), o(0.2, { capacita: 5, fiducia: 3, ricaduta: 2, costanza: 2 }, 'Qualche settimana più lenta del previsto.')]),
        ch('Resti sul carico attuale per altri due mesi', 'Prudenza', [o(0.8, { capacita: 4, fiducia: 3, ricaduta: -5, costanza: 0 }, 'Eviti rischi, ma con una forma che non cresce.'), o(0.3, { capacita: 2, fiducia: 1, ricaduta: 0, costanza: -1 }, 'Una piccola crescita, comunque.')])
      ]),
      card('r-sonno-stress', 4, 'Un periodo di stress e poco sonno ti coglie nel pieno del rientro; il polpaccio è un po’ teso al mattino.', [
        ch('Non cambi nulla: il corpo si adatta', 'Recupero', [o(0.4, { capacita: 3, fiducia: 1, ricaduta: 4, costanza: 1 }, 'Regge ancora.'), o(0.6, { capacita: 0, fiducia: -4, ricaduta: 14, costanza: -3 }, 'La tensione diventa fastidio vero.')]),
        ch('Riduci il carico per qualche giorno e dai priorità al sonno e al recupero', 'Recupero', [o(0.8, { capacita: 2, fiducia: 3, ricaduta: -4, costanza: 3 }, 'Il corpo si ricompone e riparti.'), o(0.2, { capacita: 0, fiducia: 1, ricaduta: -1, costanza: 0 }, 'Un giorno perso, ma niente di grave.')]),
        ch('Sostituisci con un allenamento diverso, ma altrettanto impegnativo', 'Gestione del carico', [o(0.5, { capacita: 3, fiducia: 2, ricaduta: 2, costanza: 2 }, 'Cambi carico muscolare ma non il resto.'), o(0.5, { capacita: 1, fiducia: -1, ricaduta: 8, costanza: 0 }, 'Il corpo non recupera lo stesso.')])
      ]),
      card('r-segnale', 5, 'Di notte compare un dolore pungente al polpaccio, con gonfiore e calore evidenti in una gamba sola.', [
        ch('Aspetti qualche giorno: probabilmente è solo un affaticamento', 'Segnali di allarme', [o(0.3, { capacita: 0, fiducia: 0, ricaduta: 2 }, 'Passa da solo.'), o(0.7, { capacita: -4, fiducia: -6, ricaduta: 16, costanza: -4 }, 'Aspettare con sintomi del genere non era saggio.')]),
        ch('Smetti di allenarti e consulti subito un medico', 'Consulto professionale', [o(0.9, { capacita: -1, fiducia: 4, ricaduta: -6, costanza: 1 }, 'Con segnali di allarme la scelta più sicura è chiedere una valutazione.'), o(0.1, { capacita: -2, fiducia: 2, ricaduta: -4, costanza: -1 }, 'Era un falso allarme, ma ora lo sai con certezza.')]),
        ch('Fai un po’ di stretching intenso e continui il programma', 'Autodiagnosi', [o(0.25, { capacita: 1, fiducia: 0, ricaduta: 4 }, 'Sembra migliorare.'), o(0.75, { capacita: -4, fiducia: -7, ricaduta: 20, costanza: -4 }, 'Lo stretching forzato peggiora il quadro.')])
      ]),
      card('r-test-funzionale', 5, 'Dopo sei settimane vuoi sapere se sei davvero pronto per tornare a sprint e cambi di direzione.', [
        ch('Provi uno sprint massimale a freddo per vedere come va', 'Test e rischio', [o(0.4, { capacita: 6, fiducia: 6, ricaduta: 8, costanza: 2 }, 'Ottimo risultato.'), o(0.6, { capacita: 1, fiducia: -6, ricaduta: 18, costanza: -2 }, 'Il polpaccio ti avvisa subito: sei andato troppo oltre.')]),
        ch('Test funzionali progressivi: saltelli, accelerazioni al 70-80%, cambi di direzione controllati', 'Test funzionale', [o(0.8, { capacita: 7, fiducia: 8, ricaduta: -2, costanza: 4 }, 'Ottieni dati chiari e superi i test.'), o(0.2, { capacita: 4, fiducia: 3, ricaduta: 2, costanza: 1 }, 'Un test va meno bene e ti dice dove lavorare.')]),
        ch('Rimandi i test a oltre tre mesi', 'Prudenza', [o(0.7, { capacita: 0, fiducia: -3, ricaduta: 0, costanza: -3 }, 'Il tempo passa e la fiducia cala.'), o(0.3, { capacita: 1, fiducia: -1, ricaduta: -1, costanza: -1 }, 'Un po’ di sicurezza in più.')])
      ]),
      card('r-gara-vicina', 6, 'Una gara a cui tieni è fra tre settimane. Non hai ancora recuperato il volume pieno, ma gli altri si stanno allenando duro.', [
        ch('Fai due settimane di carico molto alto per recuperare', 'Pressione esterna', [o(0.3, { capacita: 8, fiducia: 5, ricaduta: 10, costanza: 3 }, 'Ti rimetti in carreggiata.'), o(0.7, { capacita: 2, fiducia: -6, ricaduta: 22, costanza: -4 }, 'La fretta ti riporta ai box.')]),
        ch('Mantieni la progressione e ridimensioni l’obiettivo: partecipi senza pressioni di tempo', 'Obiettivi realistici', [o(0.8, { capacita: 6, fiducia: 7, ricaduta: 0, costanza: 4 }, 'Partecipi senza pressione e ti diverti.'), o(0.2, { capacita: 4, fiducia: 3, ricaduta: 2, costanza: 1 }, 'Un po’ di rammarico, ma sicuro.')]),
        ch('Rinunci alla gara', 'Prudenza', [o(0.8, { capacita: 2, fiducia: 2, ricaduta: -8, costanza: -1 }, 'Eviti ogni rischio, ma perdi uno stimolo.'), o(0.3, { capacita: 2, fiducia: 0, ricaduta: -2, costanza: -1 }, 'Una scelta sensata, ma con un po’ di rimpianto.')])
      ]),
      card('r-ricaduta', 7, 'Il fastidio al polpaccio ritorna dopo una corsa a ritmo medio: è meno forte di prima, ma lo senti.', [
        ch('Lo ignori: «ormai sono quasi a posto»', 'Segnali di allarme', [o(0.3, { capacita: 2, fiducia: 0, ricaduta: 4 }, 'Sparisce.'), o(0.7, { capacita: -3, fiducia: -6, ricaduta: 18, costanza: -3 }, 'Si ripresenta più forte.')]),
        ch('Torni un passo indietro nel carico e riparli con il fisioterapista', 'Consulto professionale', [o(0.85, { capacita: 2, fiducia: 5, ricaduta: -5, costanza: 3 }, 'La ricaduta si ridimensiona e impari da cosa dipende.'), o(0.15, { capacita: 0, fiducia: 2, ricaduta: -2, costanza: 0 }, 'Ci vuole più tempo del previsto.')]),
        ch('Smetti del tutto per due mesi', 'Prudenza', [o(0.7, { capacita: -3, fiducia: 1, ricaduta: -12, costanza: -3 }, 'Eviti rischi ma azzeri quanto costruito.'), o(0.4, { capacita: -7, fiducia: -5, ricaduta: -2, costanza: -8 }, 'Sei di nuovo al punto di partenza.')])
      ]),
      card('r-consolidamento', 8, 'Dopo tre mesi sei quasi al livello di prima. Il rischio, ora, è tornare «come prima» senza imparare nulla.', [
        ch('Torni agli stessi ritmi e alle stesse abitudini di prima', 'Prevenzione', [o(0.4, { capacita: 6, fiducia: 5, ricaduta: 6, costanza: 2 }, 'Ritorni alla vecchia forma.'), o(0.6, { capacita: 3, fiducia: -2, ricaduta: 14, costanza: -2 }, 'Le stesse cause portano allo stesso infortunio.')]),
        ch('Integri nel programma rinforzo, carichi progressivi e giorni di recupero programmati', 'Prevenzione', [o(0.8, { capacita: 6, fiducia: 7, ricaduta: -5, costanza: 6 }, 'Torni più robusto di prima.'), o(0.2, { capacita: 4, fiducia: 4, ricaduta: -2, costanza: 3 }, 'Qualche fatica nell’organizzare tutto.')]),
        ch('Per sicurezza resti a un livello molto inferiore a quello di prima', 'Prudenza', [o(0.7, { capacita: 0, fiducia: 1, ricaduta: -2, costanza: 0 }, 'Sicuro ma limitato.'), o(0.3, { capacita: 1, fiducia: 0, ricaduta: -1, costanza: -2 }, 'La forma resta bassa.')])
      ]),
      card('r-pressione', 8, 'Un compagno ti dice che «con un dolore così lieve non serve fermarsi» e ti consiglia un antidolorifico da banco prima di ogni allenamento.', [
        ch('Lo prendi prima di ogni uscita: così ti alleni senza pensieri', 'Mascherare i sintomi', [o(0.3, { capacita: 4, fiducia: 3, ricaduta: 6 }, 'Ti senti bene.'), o(0.7, { capacita: 1, fiducia: -5, ricaduta: 18 }, 'Non senti più i segnali di allarme e forzi senza accorgertene.')]),
        ch('Rifiuti, ascolti i segnali e chiedi a un professionista se serve una valutazione', 'Consulto professionale', [o(0.85, { capacita: 3, fiducia: 6, ricaduta: -4, costanza: 3 }, 'Resti lucido sui segnali e ti proteggi.'), o(0.15, { capacita: 1, fiducia: 2, ricaduta: -1, costanza: 0 }, 'Un consulto in più, nulla di grave.')]),
        ch('Interrompi del tutto l’attività per sempre', 'Evitamento', [o(0.7, { capacita: -5, fiducia: -4, ricaduta: -3, costanza: -8 }, 'Sicuro ma rinunci a ciò che ami.'), o(0.3, { capacita: -6, fiducia: -6, ricaduta: -2, costanza: -10 }, 'Il rimpianto cresce.')])
      ])
    ]
  });
})(window.ST = window.ST || {});
