/* SkillTree — Judo e lotta libera (percorso opzionale no-gi): 15 lezioni approfondite, solo pratica SOLITARIA "a vuoto".
   Nessun partner, nessuna proiezione: le entrate (single/double-leg) si fermano prima di qualsiasi sollevamento. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;
  // mc con la risposta giusta inserita in posizione `pos` (0-3) tra le tre errate
  const M = (q, right, wrong, pos, why) => { const o = wrong.slice(); o.splice(pos, 0, right); return mc(q, o, pos, why); };
  const O = (q, words, why) => order(q, words, why);
  const F = (q, a, why) => fill(q, a, why);
  const list = a => a.map(x => '- ' + x).join('\n');
  const T = (id, stage, title, summary, objectives, p, exercises, test) => C.addTopic({
    id: 'jud-' + id, subject: 'grp', stage, title, summary, objectives, minutes: 10,
    pages: [
      { h: 'A cosa serve', b: p.goal },
      { h: 'Il principio', b: p.principle },
      { h: 'Passo per passo', b: list(p.steps) + '\n\n> ' + p.example },
      { h: 'Errori comuni e correzioni', b: p.errors.map(e => '- **' + e[0] + '** → ' + e[1]).join('\n') },
      { h: 'Progressioni', b: 'Passa al livello successivo solo se il precedente è pulito e rilassato:\n' + list(p.prog) },
      { h: 'Autoverifica con il video', b: 'Gira un breve video (anche col telefono appoggiato) e controlla questi punti, uno alla volta:\n' + list(p.check) + '\n\nSe un punto non torna, rallenta e correggi solo quello nella serie successiva.' },
      { h: 'Sicurezza', b: p.safety },
      { h: 'Ricapitolando', b: p.recap }
    ],
    exercises, test
  });

  /* ---------------- L0 ---------------- */
  T('wrestle-stance', 'L0', 'Stance da lotta (no-gi) e spostamenti',
    'La posizione di partenza di tutto il percorso: base, mani, peso e shuffle.',
    ['Assumere una stance stabile con peso sull’avampiede e schiena neutra', 'Spostarsi con lo shuffle senza incrociare i piedi', 'Riconoscere e correggere gli errori di base dall’autoverifica video'],
    {
      goal: 'La **stance** (posizione di partenza) è la base di ogni altra lezione: livello, passi, sprawl e ingressi partono da qui e tornano qui. Una stance stabile ti permette di muoverti in ogni direzione senza perdere equilibrio. In questo percorso si lavora **solo a vuoto**, senza partner, e a torso libero (no-gi): niente prese al tessuto.',
      principle: 'Il **baricentro** resta basso e dentro la base d’appoggio. Piedi un po’ più larghi delle spalle, ginocchia flesse, peso sull’**avampiede** (non sui talloni), schiena neutra con il busto leggermente inclinato in avanti. Le mani sono aperte davanti al corpo e i gomiti restano dentro, vicini al tronco. Si lavora con lo **shuffle**: il piede che guida parte per primo, l’altro lo segue riportando la distanza originale, senza incroci né salti.',
      steps: ['Piedi paralleli, poi un piede leggermente avanti: la distanza è quella di un passo corto.', 'Piega le ginocchia come per sederti su uno sgabello basso; il bacino scende, non il busto.', 'Inclina il busto in avanti dal bacino mantenendo la schiena piatta; testa alta, sguardo davanti.', 'Mani aperte all’altezza del petto, gomiti dentro, spalle rilassate.', 'Shuffle: spingi con il piede arretrato, muovi il piede guida di 20-30 cm, poi richiama l’altro piede. Resta basso durante tutto il passo.', 'Cambia direzione (avanti, lato, indietro) senza raddrizzarti e senza incrociare i piedi.'],
      example: 'Quadrato di 1,5 m: shuffle avanti, di lato, indietro, di lato dall’altra parte. Ripeti 5 giri tenendo la stessa altezza del bacino.',
      errors: [['Schiena curva', 'porta il petto avanti e il bacino indietro e in basso; immagina una linea retta dalla nuca al sacro.'], ['Piedi che si incrociano', 'accorcia il passo e fai partire sempre il piede più vicino alla direzione di marcia.'], ['Peso sui talloni', 'sposta il peso sull’avampiede finché senti che potresti sollevare i talloni di un dito.'], ['Mani che scendono', 'tieni gli avambracci davanti al petto, come se reggessi un vassoio leggero.'], ['Testa che oscilla su e giù', 'fissa un punto davanti a te e fai passare l’altezza della testa su una linea orizzontale.']],
      prog: ['Stance ferma per 20 secondi, poi 30, poi 45, senza perdere la forma.', 'Shuffle lento in linea retta, 5 passi avanti e 5 indietro.', 'Quadrato di 1,5 m con cambi di direzione a comando casuale (es. un timer o un metronomo).', 'Alterna stance bassa e alta per 30 secondi ciascuna mantenendo schiena neutra.'],
      check: ['Linea della schiena: la nuca è allineata al bacino, senza gobba.', 'Piedi: non si incrociano mai e il passo è corto e regolare.', 'Altezza della testa: oscilla poco durante lo shuffle.', 'Mani: restano davanti al petto durante tutto il movimento.'],
      safety: '- Superficie piana e non scivolosa; scarpe senza suola ruvida o piedi nudi su tappeto.\n- Ginocchia in linea con le punte dei piedi: non lasciarle cadere verso l’interno.\n- Se senti dolore alle ginocchia o alla schiena, alza leggermente la stance e riduci la durata.\n- Non c’è nulla da verificare con un partner: è un lavoro individuale.',
      recap: 'Stance = base larga, ginocchia flesse, peso sull’avampiede, schiena neutra, mani davanti e gomiti dentro. Lo shuffle muove un piede alla volta senza incroci. Ogni altra tecnica del percorso parte e torna qui.'
    }, [
      M('Dove deve stare il peso nella stance da lotta?', 'Sull’avampiede, in modo da poter partire in ogni direzione', ['Sui talloni', 'Tutto su una gamba tesa', 'Sulle mani'], 0, 'L’avampiede permette di reagire subito.'),
      M('Quale è la distanza corretta tra i piedi?', 'Un po’ più larghi delle spalle', ['Uniti', 'Molto ampia, oltre un metro', 'Incrociati'], 2, 'Una base larga ma gestibile dà stabilità senza bloccare il movimento.'),
      O('Metti in ordine lo shuffle in avanti.', ['spingi con il piede arretrato', 'muovi il piede guida', 'richiama l’altro piede', 'torna alla stance'], 'Il piede guida si muove per primo e il piede arretrato lo segue.'),
      F('Nello shuffle il piede che si muove per primo è il piede ___.', ['guida'], 'È il piede che guida la direzione.'),
      M('Perché i gomiti stanno dentro?', 'Per mantenere la struttura del tronco e le mani davanti', ['Per sembrare più larghi', 'Per tenere le mani alte sopra la testa', 'Non c’è un motivo'], 1, 'Gomiti dentro = struttura e protezione della linea del tronco.'),
      M('Quale errore è tipico della schiena?', 'Curvarla portando il bacino indietro', ['Tenerla neutra', 'Inclinare il busto dal bacino', 'Tenere la testa alta'], 3, 'La schiena curva sposta il peso indietro e riduce la stabilità.'),
      F('Per correggere i piedi che si incrociano si fa un passo più ___.', ['corto'], 'Un passo corto evita l’incrocio.'),
      O('Metti in ordine la costruzione della stance.', ['piedi larghi', 'ginocchia flesse', 'busto inclinato', 'mani davanti'], 'Prima la base, poi il busto e infine le mani.')
    ], [
      M('Come si cambia direzione nello shuffle?', 'Restando bassi e senza incrociare i piedi', ['Raddrizzandosi e saltando', 'Incrociando i piedi', 'Girando la schiena'], 2, 'Il cambio di direzione avviene a livello costante.'),
      M('Quale parte del corpo si abbassa per piegare le ginocchia?', 'Il bacino', ['Solo la testa', 'Solo le spalle', 'Le mani'], 0, 'Si abbassa il bacino come per sedersi.'),
      F('La posizione corretta del busto è inclinato in avanti ma con la schiena ___.', ['neutra', 'piatta'], 'Neutra significa senza gobba né eccessivo arco.'),
      O('Metti in ordine l’autoverifica video.', ['guardo la schiena', 'controllo i piedi', 'osservo la testa', 'guardo le mani'], 'Un punto alla volta, dalla struttura ai dettagli.'),
      M('Che cosa fai se senti dolore alle ginocchia?', 'Alzi la stance e riduci la durata', ['Abbassi di più', 'Acceleri', 'Salti'], 1, 'Si riduce il carico e si controlla la forma.')
    ]);

  /* ---------------- L1 ---------------- */
  T('level-change', 'L1', 'Cambio di livello (level change)',
    'Abbassare e alzare il bacino con la schiena neutra: la base di ogni ingresso.',
    ['Abbassare il bacino piegando le ginocchia mantenendo la schiena neutra', 'Risalire spingendo con le gambe senza scatti', 'Controllare il tempo di discesa e risalita'],
    {
      goal: 'Il **level change** (cambio di livello) è l’abbassamento controllato del bacino partendo dalla stance. È il movimento che precede ogni ingresso e ogni sprawl: farlo bene significa proteggere la schiena e i ginocchi e mantenere l’equilibrio. Qui si pratica **a vuoto**, lentamente, senza partner.',
      principle: 'Si abbassa il **bacino**, non ci si piega in vita. Le ginocchia si flettono e il busto scende insieme al bacino, con la schiena in linea e la testa alta e davanti alle mani. La risalita è una **spinta delle gambe** contro il pavimento: le ginocchia si estendono per prime, il busto segue. Un ritmo lento (circa 3 secondi in discesa, 2 in risalita) insegna al corpo la traiettoria corretta.',
      steps: ['Parti dalla stance, mani davanti.', 'Inspira, fletti le ginocchia e porta il bacino verso il basso come per sederti.', 'Il busto resta in linea con il bacino: la distanza tra spalle e bacino non cambia.', 'Fermati in basso un istante: peso sull’avampiede, testa alta.', 'Espira e spingi con le gambe; non raddrizzare la schiena prima delle ginocchia.', 'Torna alla stance e ripeti.'],
      example: 'Serie di 6 ripetizioni con conteggio: 1-2-3 in discesa, pausa di 1 secondo, 1-2 in risalita.',
      errors: [['Schiena curva / piegarsi in vita', 'fletti prima le ginocchia e tieni il petto aperto; immagina di scendere lungo una parete.'], ['Ginocchia che restano dritte', 'inizia sempre il movimento flettendo le ginocchia, non il busto.'], ['Testa che cade in avanti', 'sguardo orizzontale, nuca allungata.'], ['Peso sui talloni', 'sposta il peso in avanti finché senti l’avampiede.'], ['Risalita a scatti', 'rallenta, spingi in modo continuo e senza saltare.']],
      prog: ['Level change lento con conteggio 3-2.', 'Level change con pausa di 2 secondi nel punto basso.', 'Level change a comando casuale (basso/alto).', 'Level change + due shuffle laterali nel punto basso, senza raddrizzarti.'],
      check: ['Schiena: resta neutra dall’inizio alla fine.', 'Testa: non scende davanti alle mani.', 'Ginocchia: seguono la direzione dei piedi.', 'Ritmo: lo stesso per tutte le ripetizioni.'],
      safety: '- Movimento lento e controllato; niente salti in risalita.\n- Se avverti dolore al ginocchio o alla schiena, riduci la profondità.\n- Mantieni sempre le ginocchia in linea con i piedi.\n- Superficie piana e non scivolosa.',
      recap: 'Level change = abbassare il bacino piegando le ginocchia con schiena neutra e testa alta; risalire spingendo con le gambe. Ritmo lento e continuo. È il ponte tra la stance e gli ingressi.'
    }, [
      M('Che cosa si abbassa nel level change?', 'Il bacino, con le ginocchia flesse', ['Solo la testa', 'Solo le spalle', 'Le mani'], 1, 'Si scende con il bacino, non piegandosi in vita.'),
      M('Quale parte si estende per prima in risalita?', 'Le ginocchia', ['La schiena', 'Il collo', 'Le mani'], 3, 'Le gambe spingono prima del busto.'),
      F('Il ritmo consigliato in discesa è di circa ___ secondi.', ['3', 'tre'], 'Discesa lenta di circa 3 secondi.'),
      O('Ordina il level change.', ['stance', 'fletto le ginocchia', 'pausa in basso', 'spingo con le gambe'], 'Si scende, si ferma e si risale spingendo con le gambe.'),
      M('Quale errore è tipico?', 'Piegarsi in vita con la schiena curva', ['Tenere la testa alta', 'Spingere con le gambe', 'Respirare'], 0, 'Va evitato: protegge schiena e equilibrio.'),
      M('Dove guarda lo sguardo?', 'Davanti, in orizzontale', ['In basso', 'Verso il soffitto', 'Dietro'], 2, 'Testa alta, nuca allungata.'),
      F('La risalita non deve essere a ___.', ['scatti', 'scatto'], 'La spinta deve essere continua.'),
      O('Ordina la progressione.', ['conteggio lento', 'pausa in basso', 'comando casuale', 'shuffle nel punto basso'], 'Dal più semplice al più complesso.')
    ], [
      M('Qual è il vantaggio di una discesa lenta?', 'Impari la traiettoria corretta', ['Fai più velocemente', 'Non serve respirare', 'Puoi saltare'], 1, 'Il ritmo lento costruisce il movimento.'),
      M('Quando raddrizzi la schiena?', 'Dopo aver esteso le ginocchia', ['Prima delle ginocchia', 'Mai', 'Subito all’inizio'], 0, 'La schiena segue le gambe.'),
      F('Il busto scende insieme al ___.', ['bacino'], 'Spalle e bacino si muovono insieme.'),
      O('Ordina l’autoverifica.', ['controllo la schiena', 'controllo la testa', 'controllo le ginocchia', 'controllo il ritmo'], 'Un punto per volta.'),
      M('Che cosa fai se senti dolore al ginocchio?', 'Riduci la profondità', ['Aumenti la velocità', 'Salti', 'Ignori'], 3, 'Meno profondità e più controllo.')
    ]);

  T('penetration-step', 'L1', 'Passo di penetrazione (a vuoto)',
    'Il passo lungo in avanti con ginocchio posteriore vicino al tappeto, controllato e senza impatto.',
    ['Eseguire il passo di penetrazione con ginocchio posteriore controllato', 'Fermarsi nel punto più basso e tornare alla stance', 'Mantenere busto eretto e testa alta durante il passo'],
    {
      goal: 'Il **penetration step** è il passo lungo in avanti che accorcia la distanza dopo il level change. Qui lo alleni **a vuoto**, verso uno spazio vuoto, a velocità controllata: l’obiettivo è la coordinazione tra gambe e bacino, non lo slancio verso un obiettivo.',
      principle: 'Dal level change, il piede guida avanza di un passo lungo mentre il bacino resta basso e il busto eretto sopra di esso. Il **ginocchio posteriore** scende vicino al pavimento ma non lo tocca con forza: la gamba anteriore sostiene il peso, il piede d’appoggio resta stabile. Il movimento si **ferma** nel punto più basso e si ritorna in stance con una spinta del piede anteriore e un recupero della gamba posteriore.',
      steps: ['Parti dalla stance e fai un level change.', 'Dal punto basso, il piede guida avanza di un passo lungo senza alzarsi.', 'Il bacino segue il piede; il busto resta eretto e la testa alta.', 'Il ginocchio posteriore scende a pochi centimetri dal tappeto, senza toccarlo con forza.', 'Fermati un istante: mani davanti, peso sulla gamba anteriore.', 'Spingi con il piede anteriore, recupera la gamba posteriore e torna in stance.'],
      example: 'Tre ripetizioni lente con il piede guida destro, tre con il sinistro, sempre fermandoti in basso per 1 secondo.',
      errors: [['Ginocchio che sbatte a terra', 'rallenta la discesa e ferma il ginocchio a pochi cm dal tappeto.'], ['Schiena curva', 'busto eretto sopra il bacino, petto aperto.'], ['Passo troppo corto', 'allunga il passo finché il ginocchio anteriore è sopra il piede, non oltre.'], ['Peso sui talloni', 'porta il peso sull’avampiede anteriore.'], ['Perdita di equilibrio', 'riduci la velocità e allarga leggermente la base laterale.']],
      prog: ['Passo lento con pausa di 2 secondi in basso.', 'Alternare piede guida destro e sinistro.', 'Penetration step + ritorno in stance in tre tempi.', 'Passo a comando casuale.'],
      check: ['Ginocchio posteriore: non tocca con forza il tappeto.', 'Busto: eretto sopra il bacino.', 'Piede anteriore: stabile, ginocchio sopra la caviglia.', 'Ritorno: in stance senza scatti.'],
      safety: '- Solo a vuoto e a velocità controllata; nessun slancio verso un obiettivo.\n- Il ginocchio posteriore non batte mai sul pavimento: usa un tappeto e fermati prima.\n- Questa è una entrata: è consigliabile una verifica con un istruttore.\n- Se senti dolore al ginocchio, interrompi.',
      recap: 'Penetration step = passo lungo dopo il level change, bacino basso, busto eretto, ginocchio posteriore vicino al tappeto senza impatto. Si ferma in basso e si torna in stance. Solo a vuoto e con istruttore consigliato.'
    }, [
      M('Che cosa non si fa con il ginocchio posteriore?', 'Non lo si sbatte a terra', ['Non lo si piega', 'Non lo si sposta', 'Non lo si usa'], 2, 'Si ferma a pochi cm dal tappeto.'),
      M('Perché ci si ferma nel punto più basso?', 'Per controllare equilibrio e ritorno', ['Per riposare', 'Per accelerare', 'Non serve'], 0, 'La pausa insegna il controllo.'),
      F('Il busto durante il passo resta ___.', ['eretto'], 'Eretto sopra il bacino.'),
      O('Ordina il passo.', ['level change', 'passo lungo', 'ginocchio vicino al tappeto', 'ritorno in stance'], 'Si scende, si avanza, si ferma e si torna.'),
      M('Quale errore sposta il peso indietro?', 'Peso sui talloni', ['Passo lungo', 'Testa alta', 'Mani davanti'], 3, 'Il peso va sull’avampiede.'),
      M('Come deve essere la velocità?', 'Controllata', ['Massima', 'Casuale', 'Esplosiva'], 1, 'Si lavora a velocità controllata.'),
      F('Il ginocchio anteriore sta sopra la ___.', ['caviglia'], 'Sopra la caviglia, non oltre.'),
      O('Ordina la progressione.', ['pausa 2 secondi', 'alternare i piedi', 'tre tempi', 'comando casuale'], 'Dal più semplice al più complesso.')
    ], [
      M('Che tipo di movimento è il penetration step?', 'Un’entrata, da praticare a vuoto', ['Una proiezione', 'Una caduta', 'Una presa'], 2, 'È un ingresso e si fa a vuoto.'),
      M('Chi è consigliabile coinvolgere per verificarlo?', 'Un istruttore', ['Nessuno', 'Uno sconosciuto', 'Un partner senza esperienza'], 0, 'Le entrate vanno verificate con un istruttore.'),
      F('La testa resta ___.', ['alta'], 'Testa alta e sguardo avanti.'),
      O('Ordina l’autoverifica.', ['ginocchio', 'busto', 'piede anteriore', 'ritorno'], 'Un controllo per volta.'),
      M('Che cosa fai se hai dolore al ginocchio?', 'Interrompi', ['Aumenti', 'Salti', 'Acceleri'], 1, 'Si interrompe e si valuta.')
    ]);

  T('hand-fighting', 'L1', 'Hand fighting a vuoto',
    'Gesti rapidi di controllo di polsi e gomiti mantenendo la stance.',
    ['Eseguire gesti brevi di intercettazione con mani alternate', 'Mantenere stance e bacino stabili mentre lavorano le braccia', 'Evitare spalle rigide e ritmo irregolare'],
    {
      goal: 'L’**hand fighting** è il lavoro di mani e braccia per controllare polsi, gomiti e linee del tronco. Qui lo alleni **a vuoto**, immaginando i polsi e i gomiti di un avversario: lavori su timing, coordinazione e stabilità, senza alcun partner e senza afferrare il tessuto (no-gi).',
      principle: 'Le mani lavorano per **gesti brevi** e ben definiti: palmo che spinge, dita che chiudono, polso che ruota. Il lavoro resta **dentro la linea del tronco**, con gomiti vicini al corpo. Le braccia agiscono, ma la stance resta stabile: bacino basso, peso sull’avampiede. Le spalle sono rilassate: se salgono, la struttura si irrigidisce.',
      steps: ['Assumi la stance, mani davanti.', 'Immagina il polso destro dell’avversario e intercettalo con la mano destra: gesto breve, palmo che guida.', 'Ritorna alla posizione neutra e intercetta con la sinistra.', 'Aggiungi la rotazione del polso (come per liberarti da una presa immaginaria) e la chiusura delle dita.', 'Mantieni il bacino basso: non sollevarti durante il gesto.', 'Alterna destra e sinistra con ritmo regolare, respirando.'],
      example: 'Serie di 10 gesti lenti, poi 10 veloci; riposa 30 secondi e ripeti.',
      errors: [['Spalle alzate', 'espira e lascia cadere le spalle; i gomiti restano vicini al corpo.'], ['Braccia rigide', 'rilassa le mani tra un gesto e l’altro, i gesti sono brevi.'], ['Stance persa', 'ricontrolla piedi e bacino a ogni serie.'], ['Ritmo irregolare', 'usa un metronomo o conta ad alta voce.']],
      prog: ['Gesti lenti, uno alla volta.', 'Gesti veloci mantenendo la forma.', 'Hand fighting con un passo di shuffle.', 'Cambio di mano a comando casuale.'],
      check: ['Spalle: non salgono verso le orecchie.', 'Gomiti: restano vicini al tronco.', 'Bacino: non si alza durante il gesto.', 'Ritmo: regolare tra destra e sinistra.'],
      safety: '- Solo a vuoto: non cercare di afferrare o tirare nessuno.\n- Evita di bloccare i gomiti in iperestensione.\n- Fai pause per non affaticare spalle e polsi.\n- Se senti dolore alle spalle, riduci l’ampiezza dei gesti.',
      recap: 'Hand fighting = gesti brevi di mani e polsi dentro la linea del tronco, con stance stabile, spalle rilassate e ritmo regolare. È un lavoro di timing e coordinazione a vuoto.'
    }, [
      M('Dove si concentra il lavoro?', 'Su polsi e linee del tronco, restando in stance', ['Sul tessuto', 'Solo sulle gambe', 'Solo sulla testa'], 1, 'Il lavoro è sulle braccia con stance stabile.'),
      M('Perché evitare le spalle rigide?', 'Per muovere le braccia fluide e rapide', ['Per sembrare più forti', 'Non c’è un motivo', 'Per alzare il bacino'], 0, 'Le spalle rilassate permettono fluidità.'),
      F('I gesti devono essere ___.', ['brevi'], 'Brevi e precisi.'),
      O('Ordina la sequenza.', ['stance', 'intercetto con la destra', 'torno neutro', 'intercetto con la sinistra'], 'Si alternano le mani.'),
      M('Che cosa non si deve perdere mentre lavorano le braccia?', 'La stance', ['Il ritmo respiratorio', 'La posizione dei gomiti in alto', 'La velocità massima'], 2, 'La stance resta stabile.'),
      M('Qual è la correzione per il ritmo irregolare?', 'Usare un metronomo o contare', ['Fare più forza', 'Saltare', 'Chiudere gli occhi'], 3, 'Aiuta a regolarizzare.'),
      F('Si evita la presa al ___.', ['tessuto'], 'Nel no-gi non si usa il tessuto.'),
      O('Ordina la progressione.', ['gesti lenti', 'gesti veloci', 'con shuffle', 'cambio a comando'], 'Dal più semplice al più complesso.')
    ], [
      M('Che cosa si immagina?', 'I polsi e i gomiti dell’avversario', ['Un pallone', 'Una porta', 'Un muro'], 1, 'Si lavora a vuoto.'),
      M('Dove restano i gomiti?', 'Vicini al tronco', ['Alti', 'Dietro', 'Larghi'], 0, 'Gomiti vicini per struttura.'),
      F('Il bacino resta ___.', ['basso'], 'Basso e stabile.'),
      O('Ordina l’autoverifica.', ['spalle', 'gomiti', 'bacino', 'ritmo'], 'Controlli uno per volta.'),
      M('Se senti dolore alle spalle?', 'Riduci l’ampiezza', ['Aumenti la forza', 'Accelera', 'Ignora'], 2, 'Meno ampiezza e più controllo.')
    ]);

  /* ---------------- L2 ---------------- */
  T('pummel-shadow', 'L2', 'Pummeling a vuoto (underhook e overhook)',
    'Alternare underhook e overhook a vuoto, con gambe che sostengono la struttura.',
    ['Distinguere underhook e overhook e le loro posizioni del gomito', 'Spingere con le gambe e non con le braccia', 'Alternare i lati con ritmo regolare'],
    {
      goal: 'Il **pummeling** è l’alternanza di **underhook** (braccio che passa sotto l’ascella) e **overhook** (braccio che passa sopra la spalla). Qui lo pratichi **a vuoto**, senza partner, per allenare coordinazione, ritmo e stance: non si ottiene alcun controllo reale, si impara solo il movimento.',
      principle: 'L’**underhook** ha il gomito basso e vicino al fianco; l’**overhook** passa sopra la spalla opposta. La spinta nasce dalle **gambe**, non dalle braccia: il bacino resta basso e la stance non cambia. Quando cambi lato, un braccio sale e l’altro scende in modo fluido, con spalle rilassate.',
      steps: ['Assumi la stance, mani davanti.', 'Infila la mano destra “sotto” verso l’ascella immaginaria: gomito basso e vicino al fianco.', 'Porta la sinistra “sopra” verso la spalla opposta: overhook.', 'Cambia: la destra sale (overhook), la sinistra scende (underhook).', 'Spingi con le gambe a ogni cambio, senza alzare il bacino.', 'Dopo 10 ripetizioni respira e cambia lato di partenza.'],
      example: 'Serie di 10 cambi lenti, 10 più veloci; poi due shuffle laterali tra una serie e l’altra.',
      errors: [['Braccia rigide', 'rilassa spalle e polsi, il movimento nasce dal bacino.'], ['Gomito che sale', 'tieni il gomito dell’underhook vicino al fianco.'], ['Stance persa', 'ferma la serie e ricontrolla la base.'], ['Ritmo irregolare', 'conta ad alta voce e usa il respiro.']],
      prog: ['Pummeling lento.', 'Pummeling veloce.', 'Pummeling + due shuffle laterali.', 'Cambio lato a comando casuale.'],
      check: ['Gomito dell’underhook: basso e vicino al fianco.', 'Overhook: sopra la spalla opposta.', 'Stance: stabile.', 'Respiro: regolare.'],
      safety: '- Movimenti ampi e rilassati; evita rotazioni brusche delle spalle.\n- A vuoto non esiste resistenza: non forzare le articolazioni.\n- Se senti dolore alla spalla, fermati.\n- Nessuna verifica con partner: è un lavoro di coordinazione.',
      recap: 'Pummeling = alternanza underhook/overhook a vuoto. Gomito basso nell’underhook, spinta dalle gambe, stance stabile, ritmo regolare. Cambia lato dopo 10 ripetizioni.'
    }, [
      M('Che cosa spinge nel pummeling?', 'Le gambe', ['Solo le braccia', 'La testa', 'Il collo'], 0, 'Le gambe sostengono la struttura.'),
      M('Dove sta il gomito dell’underhook?', 'Basso e vicino al fianco', ['Sopra la testa', 'Teso in fuori', 'Dietro la schiena'], 2, 'Gomito basso.'),
      F('L’overhook passa sopra la ___.', ['spalla'], 'Sopra la spalla opposta.'),
      O('Ordina il cambio.', ['underhook destro', 'overhook sinistro', 'inverto i lati', 'respiro'], 'Si alternano le posizioni.'),
      M('Quale errore è tipico?', 'Gomito che sale', ['Spinta dalle gambe', 'Spalle rilassate', 'Ritmo regolare'], 1, 'Il gomito deve restare basso.'),
      M('Quante ripetizioni prima di cambiare lato?', 'Circa 10', ['1', '100', 'Nessuna'], 3, 'Circa 10 ripetizioni.'),
      F('Si lavora a ___, senza partner.', ['vuoto'], 'Pratica a vuoto.'),
      O('Ordina la progressione.', ['lento', 'veloce', 'con shuffle', 'a comando'], 'Dal semplice al complesso.')
    ], [
      M('Quale è la differenza tra underhook e overhook?', 'Sotto l’ascella e sopra la spalla', ['Nessuna', 'Sopra la testa e sotto il piede', 'Dietro la schiena'], 2, 'Underhook sotto, overhook sopra.'),
      M('Che cosa non si cambia?', 'La stance', ['Il lato', 'Il braccio', 'Il piede guida'], 0, 'La stance resta stabile.'),
      F('Il respiro deve essere ___.', ['regolare'], 'Regolare.'),
      O('Ordina l’autoverifica.', ['gomito', 'overhook', 'stance', 'respiro'], 'Un punto per volta.'),
      M('Se senti dolore alla spalla?', 'Ti fermi', ['Acceleri', 'Forzi', 'Ignori'], 1, 'Ci si ferma.')
    ]);

  T('snap-down-shadow', 'L2', 'Snap-down a vuoto',
    'Gesto breve di trazione verso il basso, con tempismo e allineamento.',
    ['Eseguire un gesto breve di snap-down mantenendo il busto eretto', 'Uscire con uno shuffle indietro tornando in stance', 'Controllare ampiezza e ritmo'],
    {
      goal: 'Lo **snap-down** è un gesto di trazione verso il basso della nuca di un avversario immaginario. Lo alleni **a vuoto** per sviluppare **tempismo e allineamento**, senza forza e senza partner: non c’è alcuna applicazione reale.',
      principle: 'Il gesto è **breve e rapido**: le mani scendono a pochi centimetri, il bacino scende leggermente, il busto resta eretto. Non si allunga in avanti: il lavoro è nell’**allineamento** tra mani, spalle e bacino. Dopo il gesto si esce con **shuffle indietro** e si torna in stance.',
      steps: ['Assumi la stance, mani davanti.', 'Immagina la nuca immaginaria davanti a te, all’altezza del petto.', 'Con un gesto breve porta le mani verso il basso di pochi cm e lascia scendere leggermente il bacino.', 'Mantieni busto eretto e testa alta, senza proiettarti in avanti.', 'Esci con uno shuffle indietro.', 'Torna in stance e ripeti.'],
      example: 'Serie di 5 snap lenti, poi 5 veloci, con 30 secondi di pausa.',
      errors: [['Gesto troppo ampio', 'accorcia il gesto: le mani scendono di pochi cm.'], ['Stance persa', 'ricontrolla piedi e bacino dopo ogni ripetizione.'], ['Schiena curva', 'busto eretto, petto aperto.'], ['Ritmo irregolare', 'conta e mantieni una cadenza costante.']],
      prog: ['Snap lenti.', 'Snap veloci.', 'Snap + sprawl controllato.', 'Snap + passo indietro e cambio lato.'],
      check: ['Ampiezza: il gesto resta breve.', 'Busto: eretto.', 'Uscita: shuffle indietro senza saltare.', 'Ritmo: costante.'],
      safety: '- Solo a vuoto: non esiste partner e non si forza il collo di nessuno.\n- Gesti brevi e controllati; non lanciarti in avanti.\n- Se combini con lo sprawl, mantienilo a basso impatto.\n- Se senti dolore alle spalle, riduci l’ampiezza.',
      recap: 'Snap-down a vuoto = gesto breve verso il basso con mani e bacino, busto eretto, uscita con shuffle indietro. Contano tempismo e allineamento, non la forza.'
    }, [
      M('Che cosa conta di più?', 'Tempismo e allineamento', ['La forza massima', 'L’ampiezza', 'La velocità senza controllo'], 1, 'Il gesto è breve e preciso.'),
      M('Come si esce dal gesto?', 'Con shuffle indietro e ritorno in stance', ['Saltando', 'Cadendo', 'Restando fermi'], 0, 'Shuffle indietro.'),
      F('Il gesto deve essere ___.', ['breve'], 'Breve.'),
      O('Ordina la sequenza.', ['stance', 'gesto breve', 'shuffle indietro', 'stance'], 'Si parte e si torna in stance.'),
      M('Quale errore è tipico?', 'Gesto troppo ampio', ['Busto eretto', 'Uscita controllata', 'Ritmo regolare'], 2, 'Il gesto va accorciato.'),
      M('Con chi si pratica?', 'Da soli, a vuoto', ['Con un partner', 'Con un animale', 'Con un bambino'], 3, 'Solo solitaria.'),
      F('Il busto resta ___.', ['eretto'], 'Eretto.'),
      O('Ordina la progressione.', ['lenti', 'veloci', 'con sprawl', 'con cambio lato'], 'Dal semplice al complesso.')
    ], [
      M('Che cosa si abbassa leggermente?', 'Il bacino', ['La testa', 'Le spalle da sole', 'Il collo'], 0, 'Scende il bacino.'),
      M('Che cosa si evita?', 'Allungarsi in avanti', ['Il respiro', 'La stance', 'Lo shuffle'], 1, 'Non ci si allunga.'),
      F('Si pratica a ___.', ['vuoto'], 'A vuoto.'),
      O('Ordina l’autoverifica.', ['ampiezza', 'busto', 'uscita', 'ritmo'], 'Un controllo alla volta.'),
      M('Se combini con lo sprawl?', 'Basso impatto', ['Con salto', 'Con forza', 'A terra'], 2, 'Sprawl sempre a basso impatto.')
    ]);

  T('arm-drag-shadow', 'L2', 'Arm drag a vuoto',
    'Trascinare il braccio immaginario attraverso il corpo creando un angolo con il passo laterale.',
    ['Eseguire l’arm drag a vuoto con passo laterale', 'Tirare con le gambe e il passo, non con la schiena', 'Alternare destra e sinistra con ritmo regolare'],
    {
      goal: 'L’**arm drag** è un gesto in cui il braccio dell’avversario viene portato attraverso il proprio corpo per creare un **angolo**. Qui lo pratichi **a vuoto**, solo per allenare gesto, passo e tempismo: non esiste partner e non si afferma alcuna efficacia pratica.',
      principle: 'Il gesto combina una **presa immaginaria** su polso e tricipite con un **passo laterale** che crea l’angolo. Il bacino resta basso e il busto eretto: la trazione nasce dal passo e dalle gambe, **non dalla schiena**. Le braccia accompagnano il movimento senza irrigidirsi.',
      steps: ['Assumi la stance, mani davanti.', 'Immagina di afferrare il polso e il tricipite del braccio destro dell’avversario.', 'Porta il braccio immaginario attraverso il tuo corpo, davanti al petto.', 'Contemporaneamente fai un piccolo passo laterale per creare angolo.', 'Mantieni bacino basso e busto eretto.', 'Torna in stance e ripeti dall’altro lato.'],
      example: 'Serie di 8 ripetizioni sul lato destro, 8 sul sinistro, ritmo lento e costante.',
      errors: [['Schiena curva', 'busto eretto, petto aperto, tira con il passo.'], ['Stance persa', 'ricontrolla piedi e bacino a ogni ripetizione.'], ['Piedi incrociati', 'passo laterale corto, un piede alla volta.'], ['Braccia rigide', 'rilassa spalle e polsi.']],
      prog: ['Arm drag lento.', 'Arm drag + shuffle laterale.', 'Arm drag + level change.', 'Alternare arm drag e snap-down.'],
      check: ['Passo: laterale e corto.', 'Busto: eretto.', 'Braccia: rilassate.', 'Ritmo: regolare.'],
      safety: '- Solo a vuoto: non si tira nessuno.\n- Passi controllati, senza salti.\n- Evita torsioni brusche della schiena.\n- Se senti dolore alle spalle, riduci l’ampiezza.',
      recap: 'Arm drag a vuoto = gesto di trazione del braccio immaginario + passo laterale per creare angolo. Si tira con le gambe, non con la schiena. Si lavora solo su tempismo e coordinazione.'
    }, [
      M('Che cosa crea il passo laterale?', 'Un angolo', ['Una caduta', 'Una proiezione', 'Una presa al tessuto'], 2, 'Il passo crea angolo.'),
      M('Con che cosa si tira?', 'Con le gambe e il passo', ['Con la schiena', 'Con il collo', 'Con la testa'], 0, 'Non con la schiena.'),
      F('Il busto resta ___.', ['eretto'], 'Eretto.'),
      O('Ordina il gesto.', ['stance', 'braccio attraverso il corpo', 'passo laterale', 'stance'], 'Gesto e passo insieme.'),
      M('Quale errore è tipico?', 'Piedi incrociati', ['Passo corto', 'Busto eretto', 'Ritmo regolare'], 1, 'Evitalo con passo corto.'),
      M('Con chi si pratica?', 'Da soli, a vuoto', ['Con un partner', 'Con un animale', 'Con un bambino'], 3, 'Solo solitaria.'),
      F('Si afferra polso e ___ immaginari.', ['tricipite'], 'Polso e tricipite.'),
      O('Ordina la progressione.', ['lento', 'con shuffle', 'con level change', 'con snap-down'], 'Dal semplice al complesso.')
    ], [
      M('Quale parte del corpo non tira?', 'La schiena', ['Le gambe', 'Il passo', 'Il bacino'], 0, 'La schiena non tira.'),
      M('Che cosa resta basso?', 'Il bacino', ['Le spalle', 'Le mani', 'La testa'], 1, 'Il bacino.'),
      F('Il passo è ___.', ['laterale'], 'Laterale.'),
      O('Ordina l’autoverifica.', ['passo', 'busto', 'braccia', 'ritmo'], 'Uno alla volta.'),
      M('Se senti dolore alle spalle?', 'Riduci l’ampiezza', ['Forza', 'Salta', 'Ignora'], 0, 'Meno ampiezza.')
    ]);

  T('single-leg-entry', 'L2', 'Single-leg: ingresso a vuoto',
    'Solo l’ingresso del single-leg, lentamente e a vuoto, senza alcun sollevamento.',
    ['Eseguire l’ingresso del single-leg a vuoto con passo di penetrazione controllato', 'Fermarsi prima di qualsiasi sollevamento e tornare in stance', 'Mantenere schiena neutra, testa alta e mani davanti'],
    {
      goal: 'Il **single-leg** è una tecnica di attacco a una gamba. In questo percorso si pratica **solo l’ingresso**, **a vuoto**, lentamente: non si solleva nessuna gamba immaginaria e non si simula alcuna proiezione o caduta. L’obiettivo è allenare passo, livello e postura.',
      principle: 'L’ingresso combina **level change** e **penetration step**: il piede guida avanza, il bacino resta basso, il ginocchio posteriore si avvicina al tappeto **senza batterci**. Le mani restano davanti al corpo. Si **ferma il gesto** al punto più basso e si **ritorna in stance** con shuffle. Tutto il movimento è lento, in 3-4 tempi.',
      steps: ['Parti dalla stance con piede guida destro.', 'Level change: ginocchia flesse, schiena neutra.', 'Penetration step: il piede guida avanza di un passo lungo.', 'Mani davanti al corpo, testa alta, busto eretto.', 'Fermati nel punto più basso: **non sollevare nulla**.', 'Spingi con il piede anteriore e torna in stance con shuffle.'],
      example: 'Tre ingressi lenti con piede guida destro, tre con sinistro, 4 tempi ciascuno.',
      errors: [['Schiena curva', 'busto eretto sopra il bacino.'], ['Ginocchio che sbatte', 'rallenta e ferma il ginocchio a pochi cm dal tappeto.'], ['Peso sui talloni', 'porta il peso sull’avampiede.'], ['Perdita di equilibrio', 'riduci la velocità e allarga leggermente la base.']],
      prog: ['Ingresso lentissimo in 4 tempi.', 'Ingresso con piede guida destro e sinistro.', 'Ingresso dopo hand fighting a vuoto.', 'Ingresso + sprawl controllato.'],
      check: ['Fermata: nessun sollevamento.', 'Ginocchio posteriore: non tocca con forza.', 'Schiena: neutra.', 'Ritorno: in stance senza scatti.'],
      safety: '- **Solo ingresso**, a vuoto: nessun sollevamento, nessuna proiezione.\n- Ginocchio posteriore sempre controllato: usa un tappeto.\n- È consigliabile far verificare l’ingresso da un istruttore.\n- Se senti dolore a ginocchio o schiena, fermati.',
      recap: 'Single-leg (solo ingresso) = level change + passo di penetrazione, ginocchio vicino al tappeto senza impatto, mani davanti, stop nel punto basso e ritorno in stance. Nessun sollevamento. Verifica con istruttore consigliata.'
    }, [
      M('Quale parte del single-leg si pratica?', 'Solo l’ingresso, a vuoto', ['Il sollevamento', 'La proiezione', 'La lotta a terra'], 1, 'Si pratica solo l’ingresso.'),
      M('Che cosa si fa nel punto più basso?', 'Ci si ferma e si torna in stance', ['Si solleva', 'Si cade', 'Si salta'], 0, 'Nessun sollevamento.'),
      F('Il ginocchio posteriore non deve ___ a terra.', ['sbattere'], 'Si ferma a pochi cm.'),
      O('Ordina l’ingresso.', ['stance', 'level change', 'passo di penetrazione', 'ritorno in stance'], 'Si scende, avanza e torna.'),
      M('Quale errore sposta il peso indietro?', 'Peso sui talloni', ['Mani davanti', 'Testa alta', 'Schiena neutra'], 2, 'Il peso va sull’avampiede.'),
      M('Chi è consigliabile coinvolgere?', 'Un istruttore', ['Nessuno', 'Un passante', 'Un amico senza esperienza'], 3, 'Le entrate vanno verificate.'),
      F('Si pratica a ___.', ['vuoto'], 'A vuoto.'),
      O('Ordina la progressione.', ['4 tempi', 'destro e sinistro', 'dopo hand fighting', 'con sprawl'], 'Dal semplice al complesso.')
    ], [
      M('Che cosa non si simula?', 'Il sollevamento e la proiezione', ['Il passo', 'Il level change', 'Il ritorno'], 0, 'Mai sollevamento.'),
      M('Come resta la schiena?', 'Neutra', ['Curva', 'Inarcata', 'Ruotata'], 0, 'Neutra.'),
      F('Le mani restano ___ al corpo.', ['davanti'], 'Davanti.'),
      O('Ordina l’autoverifica.', ['fermata', 'ginocchio', 'schiena', 'ritorno'], 'Uno per volta.'),
      M('Se senti dolore?', 'Ti fermi', ['Acceleri', 'Forzi', 'Ignori'], 1, 'Ci si ferma.')
    ]);

  T('double-leg-entry', 'L2', 'Double-leg: ingresso a vuoto',
    'Solo l’ingresso del double-leg a vuoto: livello, passo e braccia davanti, senza sollevamento.',
    ['Eseguire l’ingresso del double-leg a vuoto con livello e passo controllati', 'Fermarsi nel punto basso senza sollevare né cadere', 'Tenere testa alta e laterale alla linea del corpo immaginario'],
    {
      goal: 'Il **double-leg** è un attacco a due gambe. In questo percorso si pratica **solo l’ingresso**, **a vuoto**: nessun sollevamento, nessuna proiezione, nessun impatto del ginocchio. Si allenano livello, passo e posizione della testa.',
      principle: 'L’ingresso combina **level change** e **penetration step**, con le braccia che avvolgono lo **spazio** davanti a te (non un corpo reale). Il bacino resta basso, il busto eretto, la testa **alta e laterale** alla linea del corpo immaginario. Il movimento si **ferma** nel punto basso e si esce con shuffle indietro, tornando in stance.',
      steps: ['Parti dalla stance, mani davanti.', 'Level change con schiena neutra.', 'Penetration step: il piede guida avanza e il ginocchio posteriore si avvicina al tappeto senza toccarlo con forza.', 'Le braccia avvolgono lo spazio davanti alle cosce immaginarie, senza forzare.', 'Fermati nel punto più basso: **non sollevare**.', 'Esci con uno shuffle indietro e torna in stance.'],
      example: 'Quattro ingressi lenti, 4 tempi ciascuno, alternando piede guida destro e sinistro.',
      errors: [['Ginocchio che sbatte', 'rallenta e ferma il ginocchio a pochi cm dal tappeto.'], ['Schiena curva', 'busto eretto, petto aperto.'], ['Testa che cade in avanti', 'sguardo orizzontale, testa laterale alla linea.'], ['Perdita di equilibrio', 'riduci la velocità e allarga la base.']],
      prog: ['Ingresso lento in 4 tempi.', 'Ingresso dopo snap-down a vuoto.', 'Ingresso + uscita + cambio di livello.', 'Ingresso a comando casuale.'],
      check: ['Fermata: nessun sollevamento.', 'Ginocchio: non sbatte.', 'Testa: alta e laterale.', 'Uscita: shuffle indietro controllato.'],
      safety: '- **Solo ingresso**, a vuoto: nessun sollevamento, nessuna caduta.\n- Ginocchio posteriore controllato, su tappeto.\n- È consigliabile la verifica di un istruttore.\n- Se senti dolore a ginocchio o schiena, fermati.',
      recap: 'Double-leg (solo ingresso) = level change + passo di penetrazione, braccia che avvolgono lo spazio, stop nel punto basso e uscita con shuffle. Nessun sollevamento. Verifica con istruttore consigliata.'
    }, [
      M('Che cosa si fa nel punto più basso?', 'Ci si ferma e si torna in stance', ['Si solleva', 'Si cade', 'Si salta'], 1, 'Nessun sollevamento.'),
      M('Dove sta la testa?', 'Alta e laterale alla linea del corpo immaginario', ['Bassa davanti', 'Dietro', 'Ruotata verso il basso'], 0, 'Alta e laterale.'),
      F('Il ginocchio non deve ___ a terra.', ['sbattere'], 'Si ferma a pochi cm.'),
      O('Ordina l’ingresso.', ['level change', 'passo di penetrazione', 'stop in basso', 'shuffle indietro'], 'Si scende, avanza, ferma e esce.'),
      M('Quale errore è tipico?', 'Testa che cade in avanti', ['Testa alta', 'Schiena neutra', 'Uscita controllata'], 2, 'La testa resta alta.'),
      M('Chi è consigliabile coinvolgere?', 'Un istruttore', ['Nessuno', 'Un passante', 'Un amico senza esperienza'], 3, 'Verifica con istruttore.'),
      F('Si pratica a ___.', ['vuoto'], 'A vuoto.'),
      O('Ordina la progressione.', ['4 tempi', 'dopo snap-down', 'con cambio livello', 'a comando'], 'Dal semplice al complesso.')
    ], [
      M('Che cosa non si simula?', 'Il sollevamento', ['Il passo', 'Il level change', 'L’uscita'], 0, 'Mai sollevamento.'),
      M('Come si esce?', 'Con shuffle indietro', ['Saltando', 'Cadendo', 'Restando'], 0, 'Shuffle indietro.'),
      F('Le braccia avvolgono lo ___.', ['spazio'], 'Lo spazio davanti.'),
      O('Ordina l’autoverifica.', ['fermata', 'ginocchio', 'testa', 'uscita'], 'Uno alla volta.'),
      M('Se senti dolore?', 'Ti fermi', ['Acceleri', 'Forzi', 'Ignori'], 1, 'Ci si ferma.')
    ]);

  /* ---------------- L3 ---------------- */
  T('hip-bridge', 'L3', 'Ponte di bacino (hip bridge)',
    'Sollevare il bacino sulle spalle con collo rilassato: mai ponte sulla testa.',
    ['Sollevare il bacino spingendo con i piedi e mantenendo spalle e capo a terra', 'Evitare ogni carico sul collo e sulla testa', 'Scendere lentamente vertebra per vertebra'],
    {
      goal: 'Il **ponte di bacino** (hip bridge) è un movimento di estensione dell’anca da sdraiati. Qui lo alleni come lavoro di mobilità e coordinazione **a vuoto**, appoggiandoti sulle **spalle**: non è un ponte sulla testa e non c’è alcun carico sul collo.',
      principle: 'Sdraiato sulla schiena, piedi vicini ai glutei, braccia lungo i fianchi. **Spingi con i piedi** e solleva il bacino fino a formare una linea tra spalle e ginocchia, contraendo glutei e addome. Le **spalle restano sul tappeto** e il **collo è rilassato**, il capo appoggiato. Si scende lentamente, **vertebra per vertebra**.',
      steps: ['Sdraiati supino su un tappeto, ginocchia flesse, piedi vicini ai glutei.', 'Braccia lungo i fianchi, palmi a terra; collo rilassato.', 'Espira e spingi con i piedi: i glutei si contraggono, il bacino sale.', 'Fermati quando spalle, bacino e ginocchia sono su una linea retta; non inarcare oltre.', 'Mantieni 1-2 secondi, spalle e capo a terra.', 'Scendi lentamente vertebra per vertebra e ripeti.'],
      example: '3 serie da 8 ripetizioni, pausa di 2 secondi in alto, 30 secondi di riposo tra le serie.',
      errors: [['Collo teso o carico sul capo', 'rilassa il collo, spalle e capo restano a terra: non fare mai il ponte sulla testa.'], ['Schiena inarcata oltre la linea', 'ferma il movimento quando la linea è retta; attiva l’addome.'], ['Piedi troppo lontani', 'avvicinali ai glutei: devi poterli toccare con la punta delle dita.'], ['Movimento troppo rapido', 'sali e scendi con controllo.']],
      prog: ['Ponte con pausa di 2 secondi in alto.', 'Ponte con un piede solo, lentamente.', 'Ponte con rotazione leggera del bacino a destra e a sinistra.', 'Serie più lunghe con riposo adeguato.'],
      check: ['Spalle e capo: restano a terra.', 'Collo: rilassato.', 'Linea: spalle-bacino-ginocchia.', 'Discesa: lenta, vertebra per vertebra.'],
      safety: '- Lavora su tappeto o moquette.\n- **Mai ponte sulla testa o con carico sul collo**: si appoggia solo sulle spalle.\n- Se senti dolore al collo o alla schiena, fermati.\n- Movimento lento e controllato.',
      recap: 'Hip bridge = spingere con i piedi e sollevare il bacino sulle spalle, collo rilassato, capo a terra. Mai ponte sulla testa. Sali e scendi lentamente, vertebra per vertebra.'
    }, [
      M('Dove si appoggia il peso nel ponte di bacino?', 'Spalle e piedi, con collo rilassato', ['Sulla testa', 'Sul collo', 'Sulle mani'], 0, 'Il peso va su spalle e piedi.'),
      M('Quale versione NON va fatta?', 'Ponte sulla testa con carico sul collo', ['Ponte con pausa', 'Ponte con un piede', 'Ponte di bacino'], 1, 'Evita il carico sul collo.'),
      F('Si scende vertebra per ___.', ['vertebra'], 'Discesa lenta.'),
      O('Ordina il ponte.', ['piedi vicini ai glutei', 'spingo con i piedi', 'bacino su', 'scendo lentamente'], 'Si sale e si scende lentamente.'),
      M('Quale errore sposta il carico sul collo?', 'Collo teso', ['Piedi vicini', 'Glutei contratti', 'Braccia lungo i fianchi'], 2, 'Il collo deve restare rilassato.'),
      M('Fino a che punto si sale?', 'Fino alla linea spalle-ginocchia', ['Oltre, inarcando', 'Pochissimo', 'Solo con la testa'], 3, 'Non inarcare oltre.'),
      F('Il capo resta ___ a terra.', ['appoggiato'], 'Appoggiato.'),
      O('Ordina la progressione.', ['pausa 2 secondi', 'un piede', 'rotazione', 'serie più lunghe'], 'Dal semplice al complesso.')
    ], [
      M('Con che cosa si spinge?', 'Con i piedi', ['Con la testa', 'Con il collo', 'Con le mani'], 0, 'Spinta dei piedi.'),
      M('Che cosa si contrae?', 'Glutei e addome', ['Solo il collo', 'Solo le spalle', 'Le mani'], 0, 'Glutei e addome.'),
      F('I piedi sono vicini ai ___.', ['glutei'], 'Vicini ai glutei.'),
      O('Ordina l’autoverifica.', ['spalle', 'collo', 'linea', 'discesa'], 'Uno per volta.'),
      M('Se senti dolore al collo?', 'Ti fermi', ['Aumenti', 'Forzi', 'Ignori'], 1, 'Ci si ferma.')
    ]);

  T('sprawl', 'L3', 'Sprawl controllato (a basso impatto)',
    'Allungare le gambe indietro abbassando il bacino fino a circa 10 cm dal tappeto, senza battere.',
    ['Eseguire lo sprawl con discesa controllata del bacino', 'Fermare i fianchi a circa 10 cm dal tappeto, senza battere', 'Tornare in stance con passi di recupero, senza saltare'],
    {
      goal: 'Lo **sprawl** è un movimento in cui le gambe vengono spinte indietro mentre il bacino scende. Qui lo pratichi a **basso impatto**, **a vuoto**: lo scopo è coordinazione e controllo del bacino, non la reazione a un attacco reale.',
      principle: 'Dalla stance, le mani vanno **davanti al corpo**, le gambe si allungano indietro con un passo e il **bacino scende** fino a circa **10 cm dal tappeto**, senza battere. Il collo resta neutro e lo sguardo avanti. Il ritorno è con **passi di recupero**, senza salti: lo sprawl è basso impatto per proteggere polsi, ginocchia e anche.',
      steps: ['Assumi la stance.', 'Porta le mani davanti, poco sotto il petto.', 'Allunga le gambe indietro con un passo e abbassa il bacino.', 'Fermati a circa 10 cm dal tappeto, bacino che non batte.', 'Collo neutro, sguardo avanti, peso su avambracci o mani e punte dei piedi.', 'Recupera con un passo per gamba e torna in stance.'],
      example: 'Sprawl lento in 4 tempi: stance, mani, gambe indietro con stop a 10 cm, recupero.',
      errors: [['Bacino che batte a terra', 'rallenta la discesa e ferma a 10 cm; scegli un tappeto morbido.'], ['Collo teso', 'sguardo avanti, nuca allungata.'], ['Mani non pronte', 'porta le mani davanti prima di allungare le gambe.'], ['Gambe troppo aperte', 'tieni le gambe vicine, larghezza delle anche.'], ['Movimento troppo rapido', 'rallenta e controlla la discesa.']],
      prog: ['Sprawl lento in 4 tempi.', 'Sprawl + level change + ritorno in stance.', 'Tre sprawl a comando casuale.', 'Sprawl con respirazione regolare.'],
      check: ['Bacino: non batte, si ferma a circa 10 cm.', 'Collo: neutro.', 'Mani: davanti al corpo.', 'Ritorno: con passi, senza salto.'],
      safety: '- **Basso impatto**: nessun salto e nessuna discesa che batte i fianchi.\n- Tappeto morbido; polsi e ginocchia non devono subire urti.\n- Se senti dolore ai polsi o alla schiena, fermati.\n- Movimento lento e controllato.',
      recap: 'Sprawl a basso impatto = mani davanti, gambe indietro, bacino che scende fino a circa 10 cm senza battere, collo neutro, ritorno con passi. Controllo prima della velocità.'
    }, [
      M('A che distanza dal tappeto ci si ferma?', 'Circa 10 cm', ['Sul tappeto con forza', 'A un metro', 'Non ci si ferma'], 2, 'Circa 10 cm.'),
      M('Che cosa si controlla per evitare urti?', 'La discesa del bacino', ['Solo la testa', 'Solo i polsi', 'La respirazione'], 0, 'Discesa controllata.'),
      F('Il ritorno avviene con ___ di recupero.', ['passi'], 'Passi.'),
      O('Ordina lo sprawl.', ['stance', 'mani davanti', 'gambe indietro', 'recupero'], 'Si parte e si torna in stance.'),
      M('Quale errore danneggia polsi e ginocchia?', 'Battere il bacino con salto', ['Discesa lenta', 'Collo neutro', 'Mani davanti'], 1, 'Il basso impatto protegge le articolazioni.'),
      M('Dove guarda lo sguardo?', 'Avanti', ['Indietro', 'Verso il basso', 'Verso il soffitto'], 3, 'Sguardo avanti.'),
      F('Il collo resta ___.', ['neutro'], 'Neutro.'),
      O('Ordina la progressione.', ['lento', 'con level change', 'a comando', 'con respiro'], 'Dal semplice al complesso.')
    ], [
      M('Che cosa significa basso impatto?', 'Si ferma il bacino senza battere', ['Si salta più alto', 'Si cade con forza', 'Si usa un materasso'], 0, 'Controllo del bacino.'),
      M('Dove sono le mani?', 'Davanti al corpo', ['Dietro', 'Sopra la testa', 'Sui fianchi'], 0, 'Davanti.'),
      F('Il bacino si ferma a circa ___ cm.', ['10', 'dieci'], '10 cm.'),
      O('Ordina l’autoverifica.', ['bacino', 'collo', 'mani', 'ritorno'], 'Uno per volta.'),
      M('Se senti dolore ai polsi?', 'Ti fermi', ['Acceleri', 'Forzi', 'Ignori'], 1, 'Ci si ferma.')
    ]);

  T('ground-locomotion', 'L3', 'Locomozione a terra (bear crawl e crab walk)',
    'Spostamenti a quattro appoggi: bear crawl e crab walk con controllo di polsi e spalle.',
    ['Eseguire bear crawl con mani sotto le spalle e schiena piatta', 'Eseguire crab walk con bacino alto e passi piccoli', 'Controllare tensione di polsi e spalle'],
    {
      goal: 'Il **bear crawl** (camminata dell’orso) e il **crab walk** (camminata del granchio) sono spostamenti a terra su quattro appoggi. Allenano coordinazione e controllo del corpo; si praticano **da soli**, su un tratto breve di tappeto.',
      principle: 'Nel **bear crawl** le mani sono **sotto le spalle**, le ginocchia a circa 10 cm dal tappeto e la schiena piatta; si muovono insieme mano e piede opposti. Nel **crab walk** il bacino è alto, le mani dietro e i passi piccoli: non si lascia cadere il bacino. In entrambi la **respirazione** è regolare e si controlla la tensione di polsi e spalle.',
      steps: ['Bear crawl: posizione a quattro appoggi, mani sotto le spalle, ginocchia sollevate di circa 10 cm.', 'Muovi mano destra e piede sinistro insieme, poi sinistra e destro.', 'Mantieni schiena piatta e bacino all’altezza delle spalle.', 'Crab walk: siediti, mani dietro con dita verso i piedi, solleva il bacino.', 'Fai passi piccoli alternando braccia e gambe, bacino sempre alto.', 'Respira in modo regolare; fermati se senti dolore.'],
      example: 'Tre tratti da 3 metri di bear crawl, poi tre di crab walk, con 30 secondi di riposo.',
      errors: [['Polsi sotto carico eccessivo', 'sposta il peso sui piedi, riduci la durata, usa la mano a pugno chiuso se i polsi dolgono.'], ['Schiena curva', 'tieni la schiena piatta, addome attivo.'], ['Bacino che cade nel crab', 'spingi con i talloni e contrai i glutei.'], ['Ritmo irregolare', 'conta i passi e procedi lentamente.']],
      prog: ['Bear crawl avanti.', 'Bear crawl indietro e di lato.', 'Crab walk con un passo lungo ogni 3 corti.', 'Alternanza di 10 secondi di bear e 10 di crab.'],
      check: ['Mani: sotto le spalle.', 'Schiena: piatta.', 'Bacino: alto nel crab.', 'Ritmo: regolare.'],
      safety: '- Lavora su tappeto o moquette.\n- Se senti dolore ai polsi o alle spalle, fermati subito.\n- Tratti brevi e riposo adeguato.\n- Non aumentare il carico se la forma peggiora.',
      recap: 'Bear crawl = mani sotto le spalle, ginocchia a circa 10 cm dal tappeto, schiena piatta. Crab walk = bacino alto, mani dietro, passi piccoli. Respiro regolare, stop in caso di dolore ai polsi o alle spalle.'
    }, [
      M('Dove sono le mani nel bear crawl?', 'Sotto le spalle', ['Davanti alla testa', 'Sulle ginocchia', 'Dietro la schiena'], 0, 'Mani sotto le spalle.'),
      M('Che cosa si fa se senti dolore ai polsi?', 'Ci si ferma', ['Si accelera', 'Si aumenta il carico', 'Si cambia solo mano'], 2, 'Stop immediato.'),
      F('Nel crab walk il bacino resta ___.', ['alto'], 'Alto.'),
      O('Ordina il bear crawl.', ['quattro appoggi', 'mano destra piede sinistro', 'mano sinistra piede destro', 'ripeti'], 'Mano e piede opposti.'),
      M('Quale errore è tipico del crab walk?', 'Bacino che cade', ['Passi piccoli', 'Mani dietro', 'Respiro regolare'], 1, 'Il bacino deve restare alto.'),
      M('Quanto distano le ginocchia dal tappeto nel bear crawl?', 'Circa 10 cm', ['Sul tappeto', 'Un metro', 'Non importa'], 3, 'Circa 10 cm.'),
      F('La schiena nel bear crawl resta ___.', ['piatta'], 'Piatta.'),
      O('Ordina la progressione.', ['avanti', 'indietro e lato', 'passo lungo ogni 3', 'alternanza'], 'Dal semplice al complesso.')
    ], [
      M('Quale è la correzione per polsi doloranti?', 'Ridurre la durata e spostare il peso sui piedi', ['Aumentare il carico', 'Saltare', 'Ignorare'], 0, 'Meno carico sui polsi.'),
      M('I passi nel crab walk sono?', 'Piccoli', ['Grandi', 'Saltati', 'Incrociati'], 0, 'Passi piccoli.'),
      F('La respirazione deve essere ___.', ['regolare'], 'Regolare.'),
      O('Ordina l’autoverifica.', ['mani', 'schiena', 'bacino', 'ritmo'], 'Uno per volta.'),
      M('Quando ti fermi?', 'Se senti dolore', ['Mai', 'Sempre dopo 1 passo', 'Solo a fine allenamento'], 0, 'Dolore = stop.')
    ]);

  T('guard-frames', 'L3', 'Frame e recupero della guardia (solo)',
    'Costruire spazio con gli avambracci e lo shrimp, a terra e da soli.',
    ['Costruire un frame con gli avambracci davanti al petto', 'Eseguire lo shrimp portando le ginocchia verso il petto e stendendo il piede', 'Muoversi lentamente con collo rilassato e senza torsioni brusche'],
    {
      goal: 'Il **frame** è una struttura di avambracci davanti al petto che crea spazio e distanza. Insieme allo **shrimp** (spostamento dei fianchi a terra, detto anche hip escape) serve a recuperare spazio nella guardia. Qui è **solo lavoro individuale a vuoto**, immaginando una pressione davanti a te.',
      principle: 'Sdraiato, gli **avambracci** formano due barre davanti al petto con i gomiti **vicini al busto**. Con lo shrimp i fianchi si spostano **lateralmente**, le ginocchia vengono portate verso il petto e un piede si **stende** per creare distanza. Il movimento è lento, il collo rilassato, senza torsioni brusche.',
      steps: ['Sdraiato supino, ginocchia flesse, piedi a terra.', 'Porta gli avambracci davanti al petto, gomiti vicini al busto, palmi aperti.', 'Spingi con il piede e sposta i fianchi lateralmente (shrimp).', 'Porta le ginocchia verso il petto, poi stendi un piede per creare distanza.', 'Torna alla posizione di partenza.', 'Ripeti dall’altro lato.'],
      example: 'Sequenza di 4 tempi: frame, shrimp a destra, recupero, shrimp a sinistra, ripeti 5 volte.',
      errors: [['Collo teso', 'rilassa il collo e appoggia il capo.'], ['Gomiti troppo larghi', 'tieni i gomiti vicini al busto.'], ['Gambe rigide', 'fletti le ginocchia, usa i piedi per spingere.'], ['Spinta insufficiente', 'spingi con il piede e lascia ruotare i fianchi.']],
      prog: ['Frame + shrimp + ritorno in 4 tempi.', 'Sequenza destra e sinistra alternate.', 'Frame da posizione di partenza diversa (anche seduto).', 'Serie più lunghe con respirazione regolare.'],
      check: ['Gomiti: vicini al busto.', 'Collo: rilassato.', 'Fianchi: si spostano lateralmente.', 'Ritorno: alla posizione iniziale.'],
      safety: '- Movimento lento, senza torsioni brusche di collo o schiena.\n- Lavora su tappeto o moquette.\n- Non forzare le anche; se senti dolore, riduci l’ampiezza.\n- Nessun partner: è un lavoro a vuoto.',
      recap: 'Frame = avambracci davanti al petto, gomiti vicini. Shrimp = spostamento laterale dei fianchi con ginocchia al petto e piede teso. Lento, collo rilassato, solo a vuoto.'
    }, [
      M('A che cosa serve il frame?', 'A creare spazio con avambracci e struttura', ['A colpire', 'A fare presa', 'A riposare'], 0, 'Crea spazio e distanza.'),
      M('Qual è l’errore da evitare?', 'Gomiti larghi che perdono struttura', ['Movimento lento', 'Collo rilassato', 'Respiro regolare'], 0, 'Gomiti vicini.'),
      F('Lo shrimp sposta i ___ lateralmente.', ['fianchi'], 'I fianchi.'),
      O('Ordina la sequenza.', ['frame', 'shrimp', 'ginocchia al petto', 'ritorno'], 'Si ripete.'),
      M('Come deve essere il movimento?', 'Lento e controllato', ['Brusco', 'Esplosivo', 'Casuale'], 0, 'Lento.'),
      M('Che cosa si fa con il piede?', 'Si stende per creare distanza', ['Si incrocia', 'Si blocca', 'Si ignora'], 0, 'Si stende.'),
      F('Il collo resta ___.', ['rilassato'], 'Rilassato.'),
      O('Ordina la progressione.', ['4 tempi', 'destra e sinistra', 'da seduto', 'serie lunghe'], 'Dal semplice al complesso.')
    ], [
      M('Con chi si pratica?', 'Da soli, a vuoto', ['Con un partner', 'Con un animale', 'Con un bambino'], 0, 'Solo solitaria.'),
      M('Dove sono i gomiti?', 'Vicini al busto', ['Larghi', 'Dietro', 'Alti'], 0, 'Vicini.'),
      F('Il frame è fatto con gli ___.', ['avambracci'], 'Avambracci.'),
      O('Ordina l’autoverifica.', ['gomiti', 'collo', 'fianchi', 'ritorno'], 'Uno per volta.'),
      M('Se senti dolore alle anche?', 'Riduci l’ampiezza', ['Forza', 'Salta', 'Ignora'], 0, 'Meno ampiezza.')
    ]);

  T('turtle-sit-out', 'L3', 'Sit-out e switch da quattro zampe',
    'Passare una gamba sotto il corpo ruotando il bacino, senza carico sul collo.',
    ['Partire da quattro zampe con mani sotto le spalle', 'Eseguire il sit-out ruotando il bacino senza girare il collo', 'Tornare a quattro zampe e ripetere dall’altro lato'],
    {
      goal: 'Il **sit-out** parte dalla posizione a **quattro zampe** (turtle): una gamba passa sotto il corpo mentre il bacino ruota. Qui è **solo lavoro individuale** per mobilità e coordinazione a terra, a vuoto.',
      principle: 'Mani **sotto le spalle**, ginocchia **sotto i fianchi**. Si fa passare una gamba sotto il corpo ruotando il bacino; il piede opposto resta in appoggio. Il collo **non ruota**: si ruota il bacino. Movimento lento e fluido, **mai trascinare il peso sul collo**.',
      steps: ['A quattro zampe, mani sotto le spalle, ginocchia sotto i fianchi.', 'Sposta il peso sulla mano e il ginocchio destro.', 'Fai passare la gamba sinistra sotto il corpo, ruotando il bacino.', 'Il piede opposto resta in appoggio; il collo resta neutro.', 'Torna a quattro zampe lentamente.', 'Ripeti dall’altro lato.'],
      example: 'Sit-out in 4 tempi, 5 ripetizioni per lato.',
      errors: [['Collo teso', 'guarda in avanti e non ruotare la testa.'], ['Polsi sotto carico eccessivo', 'distribuisci il peso su ginocchia e piedi.'], ['Bacino troppo alto', 'abbassa il bacino e mantieni la schiena neutra.'], ['Movimento troppo rapido', 'rallenta e controlla.']],
      prog: ['Sit-out lento in 4 tempi.', 'Sit-out + stand-up tecnico.', 'Sit-out a comando casuale (destra/sinistra).', 'Sequenza ponte → shrimp → sit-out.'],
      check: ['Mani: sotto le spalle.', 'Collo: neutro.', 'Bacino: ruota fluido.', 'Ritorno: controllato.'],
      safety: '- Movimento lento, senza carico sul collo.\n- Lavora su tappeto o moquette.\n- Se senti dolore ai polsi o alle spalle, fermati.\n- Nessun partner.',
      recap: 'Sit-out = da quattro zampe, una gamba passa sotto il corpo con rotazione del bacino, collo neutro e peso su mani e piedi. Lento, controllato e solo a vuoto.'
    }, [
      M('Dove si appoggia il peso?', 'Su mani e piedi, non sul collo', ['Sul capo', 'Sulle spalle', 'Sul gomito'], 0, 'Mai sul collo.'),
      M('Che cosa ruota?', 'Il bacino, non il collo', ['Il collo', 'La testa', 'Le mani'], 0, 'Il bacino.'),
      F('Si parte a ___ zampe.', ['quattro'], 'Quattro zampe.'),
      O('Ordina il sit-out.', ['quattro zampe', 'gamba sotto il corpo', 'ruoto il bacino', 'torno a quattro zampe'], 'Si ripete.'),
      M('Quale errore è tipico?', 'Collo teso', ['Mani sotto le spalle', 'Movimento lento', 'Bacino fluido'], 0, 'Collo neutro.'),
      M('Come deve essere il movimento?', 'Lento e fluido', ['Brusco', 'Casuale', 'Esplosivo'], 0, 'Lento.'),
      F('Le ginocchia stanno sotto i ___.', ['fianchi'], 'Sotto i fianchi.'),
      O('Ordina la progressione.', ['lento', 'con stand-up', 'a comando', 'in sequenza'], 'Dal semplice al complesso.')
    ], [
      M('Con chi si pratica?', 'Da soli', ['Con un partner', 'Con un animale', 'Con un bambino'], 0, 'Solo solitaria.'),
      M('Dove sono le mani?', 'Sotto le spalle', ['Davanti alla testa', 'Dietro', 'Sulle ginocchia'], 0, 'Sotto le spalle.'),
      F('Il collo resta ___.', ['neutro'], 'Neutro.'),
      O('Ordina l’autoverifica.', ['mani', 'collo', 'bacino', 'ritorno'], 'Uno per volta.'),
      M('Se senti dolore ai polsi?', 'Ti fermi', ['Forzi', 'Salti', 'Ignori'], 0, 'Ci si ferma.')
    ]);

  T('knee-slide', 'L3', 'Knee slide: passaggio della guardia (a vuoto)',
    'Scivolare con il ginocchio lungo una linea immaginaria, busto eretto e ginocchia controllate.',
    ['Scivolare il ginocchio lungo la linea immaginaria mantenendo il busto eretto', 'Fermare il movimento sotto controllo, senza battere il ginocchio', 'Tornare in ginocchio e cambiare lato'],
    {
      goal: 'Il **knee slide** (passaggio con scivolamento del ginocchio) è un movimento di guardia passing. Qui lo pratichi **a vuoto**, immaginando una linea sul tappeto: lo scopo è coordinare ginocchia, bacino e busto, **senza partner**.',
      principle: 'Da in ginocchio, un ginocchio avanza e **scivola** lungo una linea immaginaria sul tappeto; il **busto resta eretto**, la mano libera davanti al corpo. Il piede dietro **spinge** e il bacino segue; il movimento si **ferma** sotto controllo. Le ginocchia si appoggiano sul tappeto in modo controllato, mai sbattute.',
      steps: ['Parti in ginocchio, busto eretto.', 'Porta un ginocchio in avanti.', 'Lascialo scivolare lungo la linea immaginaria.', 'La mano libera resta davanti al corpo; il busto resta eretto.', 'Il piede dietro spinge e il bacino segue.', 'Fermati, torna in ginocchio e cambia lato.'],
      example: 'Knee slide lento in 4 tempi, 5 ripetizioni per lato.',
      errors: [['Schiena curva', 'busto eretto.'], ['Ginocchio che sbatte', 'appoggia con controllo, su tappeto.'], ['Peso sui talloni', 'peso in avanti.'], ['Perdita di equilibrio', 'rallenta e allarga la base.']],
      prog: ['Knee slide lento in 4 tempi.', 'Knee slide + ritorno in stance.', 'Knee slide a comando di lato casuale.', 'Sequenza shrimp → frame → knee slide.'],
      check: ['Busto: eretto.', 'Ginocchio: non sbatte.', 'Mano libera: davanti.', 'Ritorno: controllato.'],
      safety: '- Ginocchia sul tappeto, sempre in modo controllato.\n- Movimento lento; nessun salto.\n- Se senti dolore alle ginocchia, fermati.\n- Nessun partner.',
      recap: 'Knee slide a vuoto = ginocchio che scivola lungo una linea immaginaria, busto eretto, mano libera davanti, piede dietro che spinge. Ginocchia sul tappeto con controllo, mai sbattute.'
    }, [
      M('Che cosa scivola?', 'Il ginocchio lungo la linea immaginaria', ['Le mani', 'La testa', 'Il piede d’appoggio'], 0, 'Il ginocchio.'),
      M('Come resta il busto?', 'Eretto', ['Ripiegato', 'Disteso', 'Ruotato'], 0, 'Eretto.'),
      F('Il piede dietro ___.', ['spinge'], 'Spinge.'),
      O('Ordina il movimento.', ['in ginocchio', 'ginocchio avanti', 'scivolo', 'torno'], 'Si ripete.'),
      M('Quale errore è tipico?', 'Ginocchio che sbatte', ['Busto eretto', 'Mano libera davanti', 'Movimento lento'], 0, 'Controllo.'),
      M('Dove sono le ginocchia?', 'Sul tappeto, in modo controllato', ['Sul pavimento duro', 'In aria', 'Sempre battute'], 0, 'Tappeto.'),
      F('La mano libera resta ___.', ['davanti'], 'Davanti.'),
      O('Ordina la progressione.', ['lento', 'ritorno in stance', 'comando casuale', 'sequenza'], 'Dal semplice al complesso.')
    ], [
      M('Con chi si pratica?', 'Da soli', ['Con un partner', 'Con un animale', 'Con un bambino'], 0, 'Solo solitaria.'),
      M('Che cosa si ferma?', 'Il movimento, sotto controllo', ['Il respiro', 'Il cuore', 'Il tempo'], 0, 'Controllo.'),
      F('Il busto resta ___.', ['eretto'], 'Eretto.'),
      O('Ordina l’autoverifica.', ['busto', 'ginocchio', 'mano', 'ritorno'], 'Uno per volta.'),
      M('Se senti dolore alle ginocchia?', 'Ti fermi', ['Forzi', 'Salti', 'Ignori'], 0, 'Ci si ferma.')
    ]);
})(window.ST = window.ST || {});
