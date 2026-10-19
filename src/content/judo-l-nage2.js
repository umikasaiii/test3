/* SkillTree — Judo e lotta libera: lezioni approfondite sulle proiezioni «a vuoto» (parte 2).
   Tai-otoshi, harai-goshi, uchi-mata, ko-soto (gari/gake), koshi-guruma, morote-seoi (con judogi), uchikomi con elastico.
   Solo in autonomia: nessun partner, nessuna proiezione reale, nessuna caduta; finale sempre in piedi.
   Il modulo allena forma, ritmo ed equilibrio: non dimostra l’efficacia contro un avversario che resiste. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'grp', minutes: 12 }, o));

  /* ================= TAI-OTOSHI ================= */
  T({ id: 'jud-taiotoshi-full', stage: 'L3', title: 'Tai-otoshi no-gi: il blocco della gamba, a vuoto',
    summary: 'Gesto completo di tai-otoshi (kuzushi–tsukuri–kake) nell’aria: presa no-gi, rotazione, gamba di blocco e ritorno in piedi.',
    objectives: ['Descrivere le tre fasi di tai-otoshi e il ruolo della gamba tesa come «blocco»', 'Eseguire a vuoto il gesto in 4 tempi con presa no-gi, finendo sempre in piedi', 'Riconoscere e correggere gli errori più comuni (gamba non tesa, schiena curva, peso sui talloni)'],
    pages: [
      { h: 'Che cosa è tai-otoshi', b: '**Tai-otoshi** (体落) significa «caduta del corpo». Nella classificazione del Kodokan è una tecnica di **te-waza** (tecniche di mano/braccio): il lavoro principale lo fanno le braccia e la rotazione del busto, non l’anca come in o-goshi.\n\nÈ una proiezione in cui il partner viene fatto passare **sopra una gamba tesa** che blocca il suo piede o la sua caviglia. In questo modulo non c’è nessun partner: alleni il gesto **a vuoto**, nell’aria.' },
      { h: 'Il principio: kuzushi–tsukuri–kake', b: 'Ogni proiezione ha tre fasi:\n- **Kuzushi**: lo squilibrio. Qui il partner immaginario viene portato **in avanti e verso il suo angolo destro** (verso la punta del suo piede destro).\n- **Tsukuri**: la costruzione dell’entrata, cioè passi e rotazione che ti portano nella posizione giusta.\n- **Kake**: l’esecuzione, il momento in cui torsione del busto e blocco della gamba si completano.\n\n> Cue: «porta, entra, ruota». Se salti una fase, il gesto diventa solo un movimento di braccia.' },
      { h: 'La presa no-gi', b: 'Senza judogi non ci sono bavero e manica. In questo percorso usi una presa **over-under no-gi**:\n- la mano sinistra al **polso** (o al bicipite) del partner immaginario: è la mano che guida in avanti (hikite);\n- il braccio destro **sopra il braccio** o in underhook sotto l’ascella: guida la rotazione.\n\nGomiti dentro, spalle basse, avambracci attivi. Simula la presa nell’aria prima di ogni serie: la presa è una struttura, non una tirata di braccia.' },
      { h: 'Piedi e anche, passo dopo passo', b: 'Gesto in 4 tempi, lento:\n- **1. Kuzushi**: la mano sinistra «tira» il polso immaginario in avanti e verso il lato destro.\n- **2. Primo passo**: il piede destro avanza davanti al tuo avversario immaginario, ginocchio morbido.\n- **3. Secondo passo e rotazione**: il piede sinistro arretra ruotando di circa 90°, il busto gira e il bacino resta **sotto** di te, non spinto indietro.\n- **4. Kake**: la gamba destra si **tende** davanti al suo piede (il blocco), il busto ruota e le spalle scendono leggermente verso il basso.\n\nLa gamba tesa non è un calcio: resta bassa e ferma, in contatto «immaginario» con la caviglia.' },
      { h: 'Il finale «a vuoto»', b: 'Il finale è la parte più importante in solitaria:\n- nessuno viene proiettato e tu **non cadi mai**;\n- dopo il kake **fermati** per un secondo con la gamba di blocco tesa e il peso controllato;\n- riporta il piede a terra e torna in **shizentai** (postura naturale), in piedi, con respiro calmo.\n\nSe perdi equilibrio, interrompi e ricomincia. Qui nessuna gamba si muove in alto: il blocco resta a quota caviglia, nell’aria, senza toccare oggetti o persone.' },
      { h: 'Errori comuni e correzioni', b: '- **Gamba di blocco non tesa** → controlla che il ginocchio si estenda davanti a te e che il piede non «cada» a terra.\n- **Schiena curva** → sguardo avanti, petto aperto, mento leggermente rientrato.\n- **Peso sui talloni** → sposta il peso sull’avampiede del piede d’appoggio.\n- **Braccia che tirano senza il busto** → la rotazione parte dal busto, le braccia accompagnano.\n- **Passi saltati o troppo grandi** → rallenta, due piccoli passi bastano.\n- **Perdita di equilibrio** → riduci l’ampiezza e riparti dalla postura.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione** (sempre a vuoto):\n- gesto in 4 tempi, lentissimo;\n- gesto in 3 tempi, più fluido;\n- gesto alternato destra e sinistra, con pausa in piedi fra una ripetizione e l’altra;\n- gesto dopo una presa a vuoto (kumi-kata no-gi).\n\n**Collegamenti** con altri lavori del percorso: la rotazione ricorda seoi-nage (stessa entrata di spalle), ma qui la gamba resta **tesa davanti**, non sotto il partner; il kuzushi in avanti è comune a o-goshi e koshi-guruma. Allenare l’entrata con l’elastico (uchikomi) aiuta a mantenere la forma.' },
      { h: 'Autocontrollo con il video', b: 'Filma il gesto da **davanti** e da **di lato**, a bassa velocità. Controlla:\n- la gamba di blocco è tesa a fine gesto?\n- il bacino resta sotto, la schiena è dritta?\n- finisci in piedi, senza barcollare?\n\nConfronta con le indicazioni di questa lezione. Un video aiuta a vedere errori che non senti, ma **non dimostra** che la tecnica funzionerebbe su un partner reale: per verificare la forma e fare lavoro con partner serve un istruttore.' },
      { h: 'Sicurezza e riepilogo', b: '- Spazio libero di 2 m × 2 m, pavimento non scivoloso, scarpe fuori.\n- Tempo lento, nessuna caduta e nessuna proiezione reale.\n- Fermati con dolore a ginocchia, caviglie o schiena.\n- È consigliabile far verificare la tecnica da un istruttore qualificato.\n\n**Riepilogo**: kuzushi avanti e laterale; due passi con rotazione; gamba destra tesa come blocco; finale in piedi.' }
    ],
    exercises: [
      mc('Che tipo di tecnica è tai-otoshi nella classificazione del Kodokan?', ['Ashi-waza (gambe)', 'Te-waza (mano/braccio)', 'Koshi-waza (anca)', 'Sutemi-waza (sacrificio)'], 1, 'Tai-otoshi è classificato come te-waza.'),
      mc('Che cosa fa la gamba destra in tai-otoshi nel gesto a vuoto?', ['Spazza in alto fino all’altezza del bacino', 'Si tende davanti come blocco', 'Si piega sotto il corpo come una molla', 'Si incrocia dietro l’altra gamba'], 1, 'È un blocco teso, a quota bassa, non un calcio.'),
      order('Metti in ordine le fasi', ['Kuzushi', 'Tsukuri', 'Kake', 'Ritorno in shizentai'], 'Prima squilibrio, poi entrata, esecuzione e ritorno in piedi.'),
      fill('Il blocco della gamba si fa a quota bassa, nell’aria, all’altezza della ___.', ['caviglia'], 'Il blocco è a quota caviglia, senza toccare nulla.'),
      mc('Dove si porta il peso del piede d’appoggio?', ['Sui talloni', 'Sull’avampiede', 'Sul bordo esterno', 'Non conta'], 1, 'Peso sui talloni è un errore: sbilancia indietro.'),
      mc('Quale presa no-gi usi con la mano sinistra?', ['Al polso o al bicipite', 'Al bavero destro del partner', 'Alla cintura del partner', 'Alla caviglia del partner'], 0, 'Senza judogi si controlla il braccio al polso o al bicipite.'),
      order('Ordina il gesto', ['Presa', 'Kuzushi avanti', 'Due passi con rotazione', 'Blocco con la gamba tesa', 'Ritorno in piedi'], 'La sequenza parte dalla presa e termina sempre in piedi.'),
      fill('Se perdi l’equilibrio, il comportamento corretto è ___ e ripartire dalla postura.', ['fermarsi', 'interrompere', 'fermarti'], 'Interrompere e ricominciare, mai insistere.'),
      mc('Quale errore indica una schiena curva?', ['Sguardo ai piedi e petto chiuso', 'Piedi paralleli e ginocchia morbide', 'Gomiti dentro e spalle basse', 'Peso sull’avampiede e sguardo avanti'], 0, 'La schiena curva si accompagna a sguardo in basso e petto chiuso.'),
      mc('Che cosa non dimostra un video del tuo gesto?', ['La forma della postura e la stabilità finale', 'L’efficacia contro un partner che resiste', 'Il ritmo e la regolarità del gesto', 'La stabilità del piede d’appoggio'], 1, 'Il video mostra la forma, non l’efficacia reale.')
    ],
    test: [
      mc('Che cosa significa «tai-otoshi»?', ['Caduta del corpo', 'Spazzata del piede', 'Presa della manica', 'Rotolamento in avanti'], 0, 'Tai = corpo, otoshi = caduta.'),
      mc('Verso dove si porta il partner immaginario nel kuzushi?', ['Indietro sul tallone, verso il suo lato sinistro', 'In avanti e verso il suo lato destro', 'Verso il basso, sulle ginocchia', 'Non si porta: il partner resta fermo'], 1),
      fill('Il gesto termina sempre in ___ (postura naturale).', ['shizentai', 'piedi', 'piedi in shizentai'], 'Si torna in shizentai, in piedi.'),
      mc('Qual è la correzione per «gamba di blocco non tesa»?', ['Estendere il ginocchio davanti a te', 'Piegare di più le ginocchia e il busto', 'Chiudere gli occhi e ripetere il gesto', 'Aumentare la velocità del movimento'], 0),
      mc('Che cosa è consigliabile prima di fare lavoro con partner?', ['La verifica di un istruttore', 'Aumentare la forza delle braccia', 'Saltare il riscaldamento per ripetere', 'Niente: basta il video'], 0),
      order('Ordina le fasi della proiezione', ['Squilibrio', 'Entrata', 'Esecuzione'], 'Kuzushi, tsukuri, kake.')
    ] });

  /* ================= HARAI-GOSHI ================= */
  T({ id: 'jud-harai-goshi-full', stage: 'L3', title: 'Harai-goshi no-gi: equilibrio e tempo lento',
    summary: 'Gesto completo di harai-goshi a vuoto, con enfasi sull’equilibrio su una gamba sola e su un tempo lento e controllato.',
    objectives: ['Spiegare il ruolo dell’anca e della gamba «spazzante» in harai-goshi', 'Eseguire il gesto a vuoto in 4 tempi, con equilibrio sul piede d’appoggio', 'Mantenere la gamba a quota moderata e terminare sempre in piedi'],
    pages: [
      { h: 'Che cosa è harai-goshi', b: '**Harai-goshi** (払腰), «spazzata d’anca», è una tecnica di **koshi-waza** (tecniche d’anca) del Kodokan. Il bacino entra contro il partner e una gamba **spazza** all’indietro-in alto, mentre il busto ruota.\n\nÈ una tecnica **avanzata** perché per un istante stai in **equilibrio su una gamba sola**. Per questo, nel nostro percorso, si allena soprattutto lenta e controllata. Questo modulo è solitario: tutto avviene nell’aria, senza partner.' },
      { h: 'Il principio: kuzushi–tsukuri–kake', b: '- **Kuzushi**: porta il partner immaginario **in avanti**, verso le punte dei suoi piedi, con la mano di guida.\n- **Tsukuri**: passo con il sinistro, **rotazione sul piede d’appoggio** fino ad avere anca e petto vicini a quelli del partner immaginario.\n- **Kake**: la gamba destra **spazza all’indietro** a quota moderata mentre il busto ruota in avanti.\n\n> Regola d’oro: il piede d’appoggio e l’asse del corpo comandano; la gamba che spazza accompagna.' },
      { h: 'La presa no-gi', b: 'Presa **no-gi**: collar tie destro (mano sulla nuca) oppure underhook, e polso sinistro. L’idea è tenere il petto e l’anca **vicini** al partner immaginario.\n\nSimula la presa nell’aria: gomiti dentro, spalle basse. Una presa troppo lontana costringe a gesti ampi e a perdere equilibrio.' },
      { h: 'Il piede d’appoggio, il vero motore', b: 'Gran parte della qualità del gesto sta nella **gamba d’appoggio**:\n- ginocchio **morbido**, mai bloccato;\n- peso sull’**avampiede**, tallone appena leggero;\n- il piede ruota sul posto (pivot) invece di spostarsi;\n- lo sguardo resta in avanti, non ai piedi.\n\nProva senza spazzata: solo passo, pivot e stop in equilibrio per due secondi su una gamba. Se vacilli, usa una parete come appoggio mentale: sai dove sarebbe, ma non la tocchi.' },
      { h: 'La spazzata, a quota moderata', b: 'In 4 tempi, lenti:\n- **1.** kuzushi in avanti con il polso sinistro;\n- **2.** passo con il sinistro e pivot;\n- **3.** anca vicina, busto che comincia a ruotare;\n- **4.** la gamba destra si estende all’indietro, **non oltre l’altezza dell’anca**, nell’aria, senza colpire oggetti o persone.\n\nL’altezza non è l’obiettivo: una gamba altissima fa perdere l’asse. Controllo prima di ampiezza.' },
      { h: 'Il finale «a vuoto»', b: 'Il gesto non completa nessuna proiezione e **non cadi mai**:\n- dopo la spazzata riporta il piede **davanti** a te, a terra, con controllo;\n- ritrova la stance, peso al centro, respiro regolare;\n- torna in shizentai e fermati prima di ripetere.\n\nEsegui poche ripetizioni di qualità, poi pausa. Con affaticamento l’equilibrio cala: è il momento di fermarsi.' },
      { h: 'Errori comuni e correzioni', b: '- **Gamba troppo alta** → riduci l’ampiezza: bassa e controllata.\n- **Schiena curva** → petto aperto, sguardo avanti.\n- **Perdita di equilibrio** → rallenta, ripeti solo passo e pivot.\n- **Peso sui talloni** → spostalo sull’avampiede d’appoggio.\n- **Ginocchio d’appoggio bloccato** → tienilo morbido.\n- **Spazzata prima della rotazione** → prima l’anca, poi la gamba.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione**:\n- solo passo, pivot e stop su una gamba (2 secondi);\n- gesto completo in 4 tempi;\n- gesto lento alternato destra e sinistra;\n- gesto dopo tai sabaki a vuoto.\n\n**Collegamenti**: l’entrata è simile a o-goshi e koshi-guruma; la spazzata della gamba è parente di uchi-mata, ma qui la gamba va **all’indietro** e non all’interno. Il lavoro con elastico (uchikomi) aiuta a ripetere l’entrata.' },
      { h: 'Video, sicurezza e riepilogo', b: 'Filma di lato: vedi altezza della gamba, asse del busto e finale. Un video mostra la forma, **non** dimostra che la tecnica funzionerebbe contro un avversario.\n\n**Sicurezza**: tecnica avanzata a equilibrio su una gamba. Spazio libero, pavimento non scivoloso, tempo lento, fermati con dolore a ginocchio o anca. È consigliabile che un **istruttore** verifichi la forma.\n\n**Riepilogo**: kuzushi avanti; passo, pivot e anca vicina; spazzata bassa-moderata; finale in piedi.' }
    ],
    exercises: [
      mc('A quale categoria del Kodokan appartiene harai-goshi?', ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Ukemi'], 1, 'Harai-goshi è una tecnica d’anca (koshi-waza).'),
      mc('Che cosa conta di più nel gesto a vuoto?', ['L’altezza massima raggiunta dalla gamba', 'L’equilibrio sul piede d’appoggio', 'La velocità del gesto e la forza', 'La forza delle braccia nella presa'], 1, 'Equilibrio e controllo sono prioritari.'),
      order('Ordina il gesto', ['Kuzushi in avanti', 'Passo e pivot', 'Anca vicina', 'Spazzata bassa', 'Ritorno in shizentai'], 'La spazzata arriva dopo l’anca; il finale è sempre in piedi.'),
      fill('La gamba che spazza va a quota ___, mai molto alta.', ['moderata'], 'Si lavora a quota moderata, controllata.'),
      mc('Come deve essere il ginocchio della gamba d’appoggio?', ['Bloccato', 'Morbido', 'Piegato al massimo', 'Ruotato verso l’interno'], 1, 'Un ginocchio bloccato riduce l’equilibrio e stressa l’articolazione.'),
      mc('Perché si dice che harai-goshi è «avanzata»?', ['Perché si usano molti passi in avanti nel gesto', 'Perché richiede equilibrio su una gamba sola', 'Perché si fa solo con il judogi e la cintura', 'Perché è proibita nelle competizioni giovanili'], 1),
      fill('Per allenare l’equilibrio si può restare 2 secondi su una ___ dopo passo e pivot.', ['gamba', 'gamba sola'], 'Stop in equilibrio su una gamba.'),
      mc('Che cosa succede se la gamba va troppo in alto?', ['Si guadagna forza nella spazzata', 'Si perde l’asse del corpo', 'Si migliora il kuzushi', 'Non succede nulla di rilevante'], 1, 'L’ampiezza eccessiva sbilancia.'),
      mc('Qual è il finale corretto del gesto?', ['Cadere sul tappeto dopo la spazzata', 'Piede a terra e ritorno in piedi in shizentai', 'Rotolare in avanti sulla spalla e rialzarsi di scatto', 'Saltare a piedi uniti per finire'], 1, 'Nessuna caduta: si finisce sempre in piedi.'),
      order('Ordina le parti della presa no-gi', ['Collar tie destro', 'Polso sinistro', 'Gomiti dentro', 'Petto vicino'], 'Presa compatta e vicina.')
    ],
    test: [
      mc('Che cosa significa «harai» nel nome?', ['Spazzare', 'Cadere', 'Afferrare', 'Ruotare'], 0, 'Harai = spazzare.'),
      mc('Dove va la spazzata di harai-goshi?', ['All’indietro-in alto, a quota moderata', 'All’interno, a livello del suolo, con il piede', 'In avanti, al livello della cintura', 'Dietro, sopra la testa, a gamba tesa'], 0),
      fill('Il tempo corretto di allenamento è ___ e controllato.', ['lento'], 'Tempo lento.'),
      mc('Se vacilli sul piede d’appoggio, che cosa fai?', ['Accelero per finire il gesto', 'Mi fermo e ripeto solo passo e pivot', 'Alzo di più la gamba per riprendere l’equilibrio', 'Chiudo gli occhi e ripeto il gesto'], 1),
      mc('Che cosa è consigliabile per verificare la forma?', ['Un istruttore qualificato', 'Il solo video che hai registrato', 'Nulla: basta la tua impressione', 'Solo la forza delle gambe'], 0),
      order('Metti in ordine', ['Rotazione sul piede d’appoggio', 'Spazzata', 'Piede a terra'], 'Rotazione, spazzata, ritorno.')
    ] });

  /* ================= UCHI-MATA ================= */
  T({ id: 'jud-uchimata-full', stage: 'L3', title: 'Uchi-mata no-gi: asse e controllo della gamba',
    summary: 'Gesto completo di uchi-mata a vuoto: spazzata interna a quota moderata, equilibrio su un piede e ritorno in piedi.',
    objectives: ['Distinguere uchi-mata (interno coscia) da harai-goshi (spazzata dietro)', 'Eseguire a vuoto il gesto lento con asse del corpo controllato', 'Terminare in piedi, con la gamba a quota moderata e senza colpire nulla'],
    pages: [
      { h: 'Che cosa è uchi-mata', b: '**Uchi-mata** (内股), «all’interno della coscia», è una tecnica di **ashi-waza** (gambe) del Kodokan, spesso eseguita con forte rotazione del busto. La gamba si inserisce **all’interno** della coscia del partner e sale mentre il corpo ruota.\n\nÈ una tecnica **avanzata**: richiede equilibrio su una gamba, coordinazione e controllo dell’asse. Qui non c’è partner: si allena a vuoto, lenti.' },
      { h: 'Il principio: kuzushi–tsukuri–kake', b: '- **Kuzushi**: porta il partner immaginario **in avanti e leggermente di lato**.\n- **Tsukuri**: passo con il sinistro, rotazione, gamba destra **pronta** all’interno della sua coscia.\n- **Kake**: la gamba destra sale **all’interno e all’indietro** a quota moderata, il busto ruota in avanti.\n\n> Il segreto è l’asse: testa, spalle e anca restano allineati sopra il piede d’appoggio.' },
      { h: 'La presa no-gi', b: '**Over-under no-gi**: collar tie destro e polso o underhook sinistro. Il tronco del partner immaginario è vicino al tuo.\n\nSimula la presa con gomiti dentro e spalle basse; il polso sinistro tira, la mano destra guida la rotazione. Non strattonare con le braccia: il movimento nasce dai piedi e dal bacino.' },
      { h: 'Piedi e anche, passo dopo passo', b: 'In 4 tempi:\n- **1.** kuzushi in avanti e di lato;\n- **2.** passo con il sinistro, **ginocchio morbido**;\n- **3.** pivot sul piede d’appoggio, anca che si avvicina;\n- **4.** la gamba destra sale all’interno, **non oltre l’altezza del bacino**, mentre il busto si inclina in avanti di poco.\n\nIl piede d’appoggio è sull’avampiede; il tallone è leggero; lo sguardo resta davanti. Evita i movimenti ampi: più ampiezza significa meno controllo.' },
      { h: 'Differenza con harai-goshi', b: '- **Harai-goshi**: la gamba spazza **all’indietro**, con l’anca a contatto.\n- **Uchi-mata**: la gamba sale **all’interno** e all’indietro, in un movimento a «forbice».\n\nEntrambe richiedono equilibrio su un piede solo, ma in uchi-mata l’inserimento interno è più delicato: se la gamba parte troppo alta, si perde l’asse. Per questo l’altezza resta moderata.' },
      { h: 'Il finale «a vuoto»', b: '- Nessuno viene proiettato e **non cadi**;\n- dopo il kake riporta il piede a terra davanti a te, in modo controllato;\n- torna in shizentai e fermati, respiro calmo;\n- la gamba non deve mai colpire oggetti, pareti o persone: nell’aria, a quota moderata.\n\nSe vacilli, interrompi subito: è meglio perdere una ripetizione che l’equilibrio.' },
      { h: 'Errori comuni e correzioni', b: '- **Gamba troppo alta** → riduci l’ampiezza.\n- **Perdita di equilibrio** → tempo ancora più lento, solo passo e pivot.\n- **Schiena curva** → petto aperto e sguardo avanti.\n- **Sguardo ai piedi** → guarda l’orizzonte.\n- **Peso sui talloni** → sull’avampiede.\n- **Strappo con le braccia** → braccia morbide, il bacino comanda.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione**:\n- solo passo, pivot e stop su una gamba;\n- gesto in 4 tempi lentissimo;\n- gesto alternato destra-sinistra;\n- gesto dopo hikite a vuoto.\n\n**Collegamenti**: come harai-goshi, parte dal kuzushi in avanti; ricorda anche ko-uchi e o-uchi per l’idea di lavoro «all’interno». L’elastico (uchikomi) aiuta a ripetere l’entrata senza completare la tecnica.' },
      { h: 'Video, sicurezza e riepilogo', b: 'Filma da **davanti** e di **lato** a bassa velocità. Verifica altezza della gamba, linea della schiena e finale in piedi. Il video mostra la forma, **non** prova che la tecnica funzioni contro un avversario reale.\n\n**Sicurezza**: tecnica avanzata. Spazio libero 2 m × 2 m, tempo lento, mai oltre la tua stabilità. Fermati con dolore. Una verifica da parte di un **istruttore** è consigliabile.\n\n**Riepilogo**: kuzushi avanti/laterale; passo e pivot; gamba interna a quota moderata; finale in piedi.' }
    ],
    exercises: [
      mc('Che cosa significa uchi-mata?', ['All’interno della coscia', 'Sopra la spalla del partner', 'Sotto il piede d’appoggio', 'Alle spalle del partner'], 0, 'Uchi = interno, mata = coscia.'),
      mc('Quale categoria Kodokan include uchi-mata?', ['Ashi-waza', 'Te-waza', 'Koshi-waza', 'Ne-waza'], 0, 'È una tecnica di gamba.'),
      order('Ordina il gesto', ['Kuzushi avanti e laterale', 'Passo con il sinistro', 'Pivot e anca vicina', 'Gamba interna a quota moderata', 'Piede a terra e shizentai'], 'Il gesto termina sempre in piedi.'),
      fill('In uchi-mata la gamba sale all’___ della coscia immaginaria.', ['interno'], 'Uchi = interno.'),
      mc('Che cosa distingue uchi-mata da harai-goshi?', ['La gamba sale all’interno invece di spazzare dietro', 'In uchi-mata non c’è kuzushi, ma solo sollevamento', 'Uchi-mata si fa solo con il judogi e la cintura', 'Uchi-mata si conclude sempre con una caduta in avanti'], 0),
      mc('Come deve essere l’altezza della gamba?', ['Moderata, non oltre il bacino', 'Il più alta possibile, con forza', 'Sopra la testa, a gamba tesa', 'Rasoterra senza controllo'], 0, 'L’altezza moderata mantiene l’asse.'),
      fill('Se vacilli sul piede d’appoggio, ti ___ e ripeti più lentamente.', ['fermi', 'fermi subito', 'interrompi'], 'Interrompere è la scelta sicura.'),
      mc('Dove va lo sguardo?', ['Ai piedi, per controllare il gesto', 'In avanti, all’orizzonte', 'Al soffitto, con il collo teso', 'A terra dietro di te'], 1, 'Sguardo ai piedi è un errore.'),
      mc('Perché si ripete il gesto in tempo lento?', ['Per mettere in sicurezza l’equilibrio su una gamba sola', 'Perché è molto più facile da vedere per chi ti guarda dal video', 'Per fare più forza muscolare nelle gambe', 'Non c’è motivo: la velocità non cambia nulla'], 0),
      mc('Che cosa non può dimostrare questo modulo?', ['La memoria del gesto, la sequenza e il controllo del ritmo', 'Che la tecnica funziona su un avversario che resiste', 'Il ritmo e la regolarità del movimento', 'L’equilibrio e la postura durante il gesto'], 1)
    ],
    test: [
      mc('Verso dove si porta il partner immaginario?', ['In avanti e leggermente di lato', 'Indietro, sul tallone e verso l’alto', 'Verso il basso, sulle sue ginocchia', 'Non si porta: resta fermo'], 0),
      fill('Il piede d’appoggio sta sull’___, con il tallone leggero.', ['avampiede'], 'Peso sull’avampiede.'),
      mc('Qual è un errore da correggere?', ['Gamba troppo alta', 'Ginocchio morbido', 'Sguardo avanti', 'Respiro regolare'], 0),
      mc('Che cosa è consigliabile per verificare la forma?', ['Un istruttore qualificato', 'Un’app che ne certifica la sicurezza', 'Niente: basta guardare un video', 'Aumentare la velocità dell’esecuzione'], 0),
      mc('Come finisce sempre il gesto?', ['In piedi, in shizentai', 'Con una caduta', 'Con una rotazione a terra', 'Con un salto'], 0, 'Nessuna caduta.'),
      order('Metti in ordine le fasi', ['Squilibrio', 'Entrata', 'Esecuzione'], 'Kuzushi, tsukuri, kake.')
    ] });

  /* ================= KO-SOTO-GARI / KO-SOTO-GAKE ================= */
  T({ id: 'jud-kosoto-full', stage: 'L2', title: 'Ko-soto-gari e ko-soto-gake no-gi: spazzata e gancio',
    summary: 'Due piccole azioni del piede contro il tallone esterno: «gari» (spazzata) e «gake» (gancio), eseguite a vuoto a quota bassissima.',
    objectives: ['Spiegare la differenza fra spazzata (gari) e gancio (gake)', 'Eseguire a vuoto entrambe le versioni a quota bassissima', 'Controllare equilibrio e finale in piedi senza colpire nulla'],
    pages: [
      { h: 'Che cosa sono', b: '**Ko-soto-gari** (小外刈), «piccola spazzata esterna», è una tecnica di **ashi-waza** (gambe) del Kodokan. **Ko-soto-gake** (小外掛), «piccolo gancio esterno», è una tecnica collegata del gruppo ashi-waza, presente anch’essa nel Gokyo. In entrambe il piede agisce sul **tallone esterno** del partner. Qui non c’è partner: gesto a vuoto, in piedi.' },
      { h: 'Gari e gake: la differenza', b: '- **Gari** (刈) = **mietere, spazzare**: il piede **striscia** e spazza via il tallone con un movimento breve e netto.\n- **Gake** (掛) = **agganciare**: il piede **aggancia** il tallone e vi resta un istante, come un gancio.\n\nEntrambi sono piccoli e bassissimi: all’altezza del **tallone**. La differenza è nel **tempo di contatto** (gari: passa e va; gake: aggancia e tiene). Nel gesto a vuoto, nel gake fai una **pausa di un secondo** a fine movimento.' },
      { h: 'Il principio: kuzushi–tsukuri–kake', b: '- **Kuzushi**: porta il partner immaginario **all’indietro, sul tallone destro**, con collar tie e polso.\n- **Tsukuri**: piccolo passo con il sinistro a fianco del suo piede destro, ginocchio morbido, busto eretto.\n- **Kake**: la gamba destra va **all’esterno del suo tallone**, a quota bassissima: spazza (gari) oppure aggancia (gake).\n\nLa forza non arriva dal calcio ma dalla spinta del busto in avanti-giù combinata con l’azione del piede.' },
      { h: 'La presa no-gi', b: 'No-gi: **collar tie destro** (mano sulla nuca) e **polso sinistro**. Il tronco viene guidato all’indietro, senza tirare il braccio verso di te.\n\nSimula la presa: gomiti dentro, spalle basse. Il braccio destro spinge verso il basso e all’indietro, quello sinistro mantiene il controllo del polso.' },
      { h: 'Piedi e anche, passo dopo passo', b: 'In 4 tempi:\n- **1.** collar tie e polso a vuoto, kuzushi indietro;\n- **2.** piccolo passo con il sinistro, ginocchio morbido;\n- **3.** peso sul piede d’appoggio, busto leggermente in avanti;\n- **4.** il piede destro agisce **all’altezza del tallone**: nel gari spazza brevemente, nel gake aggancia e fa una pausa.\n\nAltezza del piede: **a pochi centimetri da terra**. Non è un calcio e non sale mai oltre il ginocchio.' },
      { h: 'Il finale «a vuoto»', b: '- Il piede torna a terra **davanti a te**, in modo controllato;\n- ritrovi la stance, poi shizentai;\n- nessuno cade e **tu non cadi**;\n- il piede non colpisce nulla: controlla che nell’aria non ci siano sedie, pareti o persone.\n\nNel gake, fermati un secondo con il piede «agganciato» nell’aria, poi ritorna.' },
      { h: 'Errori comuni e correzioni', b: '- **Peso sui talloni** → sposta il peso sull’avampiede d’appoggio.\n- **Gamba troppo alta** → quota bassissima, tallone.\n- **Busto che si inclina all’indietro** → petto avanti.\n- **Gesto troppo ampio** → piccolo e breve.\n- **Perdita di equilibrio** → rallenta e riduci l’ampiezza.\n- **Confondere gari e gake** → ripeti la regola: gari spazza, gake aggancia e resta.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione**:\n- gari in 4 tempi lenti;\n- gari alternato destra e sinistra;\n- gake con pausa di un secondo;\n- gari e gake nella stessa serie, alternati.\n\n**Collegamenti**: o-soto-gari lavora allo stesso modo ma in grande e a quota ginocchio; ko-uchi-gari agisce sul tallone interno. Nella combinazione «collar tie → o-soto → ko-soto» la presa è la stessa.' },
      { h: 'Video, sicurezza e riepilogo', b: 'Filma di lato: vedi quota del piede e inclinazione del busto. Il video mostra la forma, **non** dimostra che la tecnica funzionerebbe su un partner che resiste.\n\n**Sicurezza**: spazio libero, piede basso, nessun contatto con oggetti o persone. Con dolore a ginocchio o caviglia, stop. Un **istruttore** può verificare la forma.\n\n**Riepilogo**: kuzushi indietro; piccolo passo; piede basso sul tallone esterno; gari = spazza, gake = aggancia e resta; finale in piedi.' }
    ],
    exercises: [
      mc('Che cosa significa «gari»?', ['Spazzare', 'Agganciare', 'Afferrare', 'Cadere'], 0, 'Gari = spazzare.'),
      mc('Che cosa significa «gake»?', ['Sollevare in alto', 'Agganciare', 'Spingere con la mano', 'Ruotare sul posto'], 1, 'Gake = agganciare.'),
      order('Ordina il gesto', ['Kuzushi indietro', 'Piccolo passo', 'Piede basso sul tallone', 'Ritorno in shizentai'], 'Il gesto termina sempre in piedi.'),
      fill('Il piede lavora a quota ___, all’altezza del tallone.', ['bassissima', 'bassa'], 'Quota bassissima.'),
      mc('Qual è la differenza principale fra gari e gake?', ['Il tempo di contatto: la spazzata passa, il gancio resta', 'La presa: nel gari si usa il bavero, nel gake si afferra la cintura', 'La mano usata: la destra nel gari, la sinistra nel gake', 'Nessuna: sono due nomi della stessa tecnica di spazzata'], 0),
      mc('Qual è la presa no-gi di questo gesto?', ['Collar tie destro e polso sinistro', 'Bavero destro e manica sinistra', 'Cintura con entrambe le mani', 'Nessuna presa: braccia lungo i fianchi'], 0, 'Senza judogi si usano nuca e polso.'),
      mc('Quanto in alto sale il piede?', ['A pochi centimetri da terra', 'Sopra il ginocchio del partner', 'All’altezza della testa', 'All’altezza del bacino del partner'], 0),
      fill('Nel gake si fa una pausa di un ___ a fine gesto.', ['secondo'], 'Pausa di circa un secondo.'),
      mc('Che cosa è un errore tipico?', ['Peso sui talloni', 'Ginocchio morbido', 'Busto eretto', 'Piede basso'], 0),
      order('Ordina le parti della presa', ['Mano destra alla nuca', 'Mano sinistra al polso', 'Gomiti dentro'], 'Presa compatta.')
    ],
    test: [
      mc('A quale categoria Kodokan appartiene ko-soto-gari?', ['Ashi-waza', 'Te-waza', 'Koshi-waza', 'Sutemi-waza'], 0),
      mc('Dove si porta il peso del partner immaginario?', ['Sul tallone destro, all’indietro', 'Sul tallone sinistro, in avanti', 'In avanti, sull’avampiede destro', 'In alto, sulla punta di entrambi i piedi'], 0),
      fill('Il piede torna a terra ___ a te.', ['davanti'], 'Si torna in stance con controllo.'),
      mc('Che cosa non devi mai fare con il piede?', ['Colpire oggetti o persone', 'Tenerlo basso e rilassato', 'Tornare a terra in equilibrio', 'Usare il tallone per agganciare'], 0),
      mc('Che cosa non può dimostrare un gesto fluido a vuoto?', ['Che funzionerebbe contro un avversario', 'Che ricordi correttamente la sequenza dei passi', 'Che hai un buon ritmo nel gesto', 'Che mantieni l’equilibrio durante il gesto'], 0),
      order('Metti in ordine', ['Squilibrio', 'Entrata', 'Esecuzione'], 'Kuzushi, tsukuri, kake.')
    ] });

  /* ================= KOSHI-GURUMA ================= */
  T({ id: 'jud-koshi-guruma-full', stage: 'L3', title: 'Koshi-guruma no-gi: la ruota sull’anca',
    summary: 'Gesto completo di koshi-guruma a vuoto: neck wrap simulato, rotazione sull’anca e ritorno in piedi.',
    objectives: ['Descrivere koshi-guruma come tecnica d’anca con braccio al collo', 'Eseguire a vuoto il gesto in 4 tempi con rotazione stabile', 'Distinguere koshi-guruma da o-goshi e terminare sempre in piedi'],
    pages: [
      { h: 'Che cosa è koshi-guruma', b: '**Koshi-guruma** (腰車), «ruota dell’anca», è una tecnica di **koshi-waza** (anca) del Kodokan. Il partner viene idealmente caricato sull’anca e fatto ruotare **come una ruota** attorno al tuo asse.\n\nNel nostro percorso è no-gi: il braccio avvolge il **collo/nuca** del partner immaginario (neck wrap). Tutto è **simulato nell’aria**, senza partner e senza proiezioni reali.' },
      { h: 'Il principio: kuzushi–tsukuri–kake', b: '- **Kuzushi**: porta il partner **in avanti, sulle punte** dei piedi, con il polso sinistro.\n- **Tsukuri**: passo avanti con il destro, rotazione fino a stare di schiena, ginocchia flesse, **bacino sotto** il suo baricentro; il braccio destro avvolge dietro il collo.\n- **Kake**: estendi ginocchia e anche e ruota le spalle in avanti come una **ruota** sull’anca.\n\n> Immagina un asse verticale: la ruota gira attorno a quell’asse, non si ribalta in avanti.' },
      { h: 'La presa no-gi: neck wrap', b: 'Presa no-gi: braccio destro **intorno al collo/nuca** dell’avversario immaginario (neck wrap), polso sinistro a controllare il braccio.\n\n- Il braccio è **solo simulato**: non afferri nulla.\n- Gomito dentro, spalla bassa.\n- Il petto resta vicino.\n\nÈ la differenza principale rispetto a **o-goshi**, in cui il braccio avvolge la **vita**: in koshi-guruma l’avvolgimento è **al collo**, il che cambia la linea di rotazione.' },
      { h: 'Piedi e anche, passo dopo passo', b: 'In 4 tempi, lenti:\n- **1.** kuzushi con il polso sinistro;\n- **2.** passo avanti con il destro, ginocchio morbido;\n- **3.** pivot sul piede d’appoggio, ginocchia flesse, bacino sotto, schiena dritta;\n- **4.** estensione di ginocchia e anche e rotazione delle spalle.\n\nIl bacino **non si spinge indietro**: resta sotto di te. Il peso non va in avanti: il gesto si ferma quando sei in equilibrio.' },
      { h: 'Il finale «a vuoto»', b: '- Fermati in piedi: **mai caricare il peso in avanti** né lasciarti cadere;\n- riporta i piedi sotto il bacino e torna in shizentai;\n- il braccio al collo si «scioglie» lentamente, senza strappi;\n- respira e controlla l’equilibrio prima di ripetere.\n\nNessuna parte del corpo si muove in alto: tutto avviene a livello di anche e spalle, senza salti.' },
      { h: 'Errori comuni e correzioni', b: '- **Ginocchia dritte** → piegale all’entrata.\n- **Schiena curva** → petto aperto.\n- **Bacino sopra il baricentro immaginario** → portalo più sotto.\n- **Passi saltati** → piccoli passi, senza salti.\n- **Perdita di equilibrio** → riduci l’ampiezza e rallenta.\n- **Spinta in avanti con la testa** → la testa resta in linea con la colonna.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione**:\n- gesto in 4 tempi lenti;\n- gesto alternato destra e sinistra;\n- gesto dopo polso e collar tie a vuoto;\n- gesto con uchikomi elastico (solo entrata, nessuna proiezione).\n\n**Collegamenti**: koshi-guruma e o-goshi condividono l’entrata; koshi-guruma e morote-seoi condividono la ricerca del bacino sotto il baricentro. La combinazione «koshi-guruma → o-goshi → postura» del percorso allena il passaggio fra le due.' },
      { h: 'Video, sicurezza e riepilogo', b: 'Filma di lato e da dietro: verifica schiena, bacino e finale. Il video aiuta a vedere errori, **ma non dimostra** l’efficacia della tecnica su un avversario.\n\n**Sicurezza**: spazio 2 m × 2 m, tempo lento, nessuna caduta. Fermati con dolore a schiena o ginocchia. Un **istruttore** può verificare la forma.\n\n**Riepilogo**: neck wrap simulato; kuzushi avanti; bacino sotto; rotazione come ruota; finale in piedi.' }
    ],
    exercises: [
      mc('Che cosa significa koshi-guruma?', ['Ruota dell’anca', 'Spazzata d’anca', 'Caduta del corpo', 'Ruota del piede'], 0, 'Koshi = anca, guruma = ruota.'),
      mc('Che cosa avvolge il braccio destro in questa versione no-gi?', ['La vita, come in o-goshi', 'Il collo/nuca (neck wrap)', 'La gamba di appoggio', 'Il braccio opposto del partner'], 1, 'Il neck wrap è la presa caratteristica.'),
      order('Ordina il gesto', ['Kuzushi in avanti', 'Passo avanti con il destro', 'Pivot con bacino sotto', 'Rotazione come ruota', 'Ritorno in shizentai'], 'Il finale è sempre in piedi.'),
      fill('Koshi-guruma è una tecnica di ___-waza (tecniche d’anca).', ['koshi'], 'Koshi = anca.'),
      mc('Qual è la differenza con o-goshi?', ['Il braccio avvolge il collo invece della vita', 'Qui non c’è kuzushi, ma solo un sollevamento del partner', 'Si usano i piedi anziché le braccia', 'Si cade sempre in avanti sul tappeto'], 0),
      mc('Dove sta il bacino?', ['Sotto il baricentro del partner immaginario', 'Molto indietro, lontano dal partner e con il busto flesso', 'Sopra la sua testa, con il busto flesso', 'Lontano da lui, con il busto ritto'], 0),
      mc('Come sono le ginocchia nell’entrata?', ['Flesse', 'Bloccate', 'Ruotate verso l’esterno', 'Alzate'], 0),
      fill('Il braccio al collo è solo ___: nessuno viene afferrato.', ['simulato'], 'Si lavora a vuoto.'),
      mc('Che cosa succede se carichi il peso in avanti?', ['Perdi equilibrio', 'Migliora la tecnica', 'Niente', 'Sei più veloce'], 0, 'Mai caricare il peso in avanti.'),
      mc('Perché si ruota «come una ruota»?', ['Il peso passa sull’anca attorno a un asse stabile', 'Per saltare più in alto e atterrare sempre con entrambi i piedi', 'Per cadere in avanti più facilmente', 'Per tirare di più con le braccia sul bavero'], 0)
    ],
    test: [
      mc('A quale famiglia appartiene koshi-guruma?', ['Koshi-waza', 'Ashi-waza (gambe)', 'Te-waza (mani)', 'Ne-waza (terreno)'], 0),
      mc('Qual è il finale corretto?', ['Piedi a terra, in piedi', 'Caduta controllata sul fianco', 'Rotolamento in avanti', 'Salto a piedi uniti'], 0),
      fill('La presa del polso sinistro serve a controllare il ___ immaginario.', ['braccio'], 'Il polso controlla il braccio.'),
      mc('Quale errore corrisponde a «passi saltati»?', ['Passi troppo grandi e sbilanciati', 'Ginocchia morbide e passi corti', 'Schiena dritta e sguardo avanti', 'Passi troppo piccoli e ravvicinati'], 0),
      mc('Che cosa è consigliabile per verificare la forma?', ['Un istruttore qualificato', 'Il solo video che hai registrato', 'Un’app che assegna un punteggio', 'Nulla: basta la tua impressione'], 0),
      order('Metti in ordine le fasi', ['Squilibrio', 'Entrata', 'Esecuzione'], 'Kuzushi, tsukuri, kake.')
    ] });

  /* ================= MOROTE-SEOI-NAGE ================= */
  T({ id: 'jud-morote-seoi-full', stage: 'L3', title: 'Morote-seoi-nage con judogi: la presa a due mani',
    summary: 'Gesto completo di morote-seoi-nage a vuoto, con presa a due mani sul bavero: l’unica proiezione del percorso con judogi.',
    objectives: ['Spiegare «morote» e «seoi» e la presa a due mani sul bavero', 'Eseguire a vuoto il gesto con ginocchia flesse, gomiti sotto le ascelle e finale in piedi', 'Correggere gomiti larghi, schiena curva e piedi lontani dall’asse'],
    pages: [
      { h: 'Che cosa è morote-seoi-nage', b: '**Morote-seoi-nage** (諸手背負投) significa «proiezione caricando sulla schiena con due mani»: **morote** = a due mani, **seoi** = caricare sulla schiena, **nage** = proiezione. Nel Kodokan è una variante di **seoi-nage** classificata fra le tecniche di **te-waza**.\n\nIn questo percorso è **l’unica proiezione con judogi**: tutte le altre sono no-gi. Qui non c’è partner: gesto a vuoto.' },
      { h: 'Il principio: kuzushi–tsukuri–kake', b: '- **Kuzushi**: porta il partner immaginario **in avanti, sulle punte**, con le due mani sul bavero.\n- **Tsukuri**: passo avanti con il destro, pivot, ginocchia flesse, **spalle sotto le sue ascelle**, schiena contro il suo petto immaginario.\n- **Kake**: estendi le gambe e ruota le spalle in avanti; il busto si inclina al massimo di circa **20°** in avanti.\n\n> Il carico passa sulle gambe, non sulla schiena che si piega.' },
      { h: 'La presa con judogi', b: 'Con judogi usi la **presa a due mani (morote)** sul bavero dell’avversario immaginario:\n- le due mani afferrano il bavero all’altezza del petto, con i pollici **dentro** il tessuto;\n- i gomiti stanno **sotto le ascelle**, stretti, non larghi;\n- le spalle sono basse e rilassate.\n\nNel gesto a vuoto simula la presa nell’aria: non tirare con le braccia, la forza arriva dalle gambe e dal bacino. I gomiti larghi sono l’errore più frequente.' },
      { h: 'Piedi e anche, passo dopo passo', b: 'In 4 tempi:\n- **1. Kuzushi**: le due mani portano il tronco in avanti, sulle punte;\n- **2. Passo avanti** con il destro, ginocchio morbido;\n- **3. Pivot** sul piede d’appoggio, ginocchia flesse, spalle sotto le ascelle;\n- **4. Kake**: estensione delle gambe e rotazione delle spalle, busto inclinato di circa 20°.\n\nPiedi **vicini all’asse** del partner immaginario: piedi lontani costringono a piegarsi e a perdere equilibrio.' },
      { h: 'Il finale «a vuoto»', b: '- Nessuno viene proiettato, **non cadi** e non ti pieghi in avanti;\n- dopo il kake torna in shizentai, in piedi, schiena dritta;\n- rilascia la presa nell’aria lentamente;\n- fermati con respiro calmo prima di ripetere.\n\nLe gambe non vanno mai in alto: nessuna spazzata, solo estensione dal basso.' },
      { h: 'Errori comuni e correzioni', b: '- **Schiena curva** → petto aperto e sguardo avanti.\n- **Ginocchia dritte** → piegale all’entrata.\n- **Gomiti larghi** → stringili sotto le ascelle.\n- **Piedi lontani dall’asse** → piccoli passi più vicini.\n- **Perdita di equilibrio** → riduci l’ampiezza e rallenta.\n- **Busto troppo inclinato** → limite di circa 20°.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione**:\n- gesto in 4 tempi, lento;\n- gesto alternato destra e sinistra;\n- gesto dopo kumi-kata a vuoto con judogi;\n- gesto con elastico (solo entrata).\n\n**Collegamenti**: nella versione no-gi di seoi-nage si usano polso e underhook; qui la presa a due mani sul bavero è la differenza chiave. La combinazione «morote-seoi → seoi (no-gi) → tai sabaki» del percorso allena il passaggio fra le due prese.' },
      { h: 'Video, sicurezza e riepilogo', b: 'Filma di lato e di fronte: controlla gomiti, ginocchia e finale. Il video mostra la forma, **non** dimostra che la tecnica funzioni contro un avversario che resiste.\n\n**Sicurezza**: spazio 2 m × 2 m, tempo lento, nessuna caduta. Con dolore a ginocchia o schiena, stop. È consigliabile la verifica da parte di un **istruttore**.\n\n**Riepilogo**: presa a due mani sul bavero; gomiti sotto le ascelle; ginocchia flesse; busto fino a circa 20°; finale in piedi.' }
    ],
    exercises: [
      mc('Che cosa significa «morote»?', ['A una mano', 'A due mani', 'Senza mani', 'Con le gambe'], 1, 'Morote = a due mani.'),
      mc('Che cosa significa «seoi»?', ['Spazzare', 'Caricare sulla schiena', 'Agganciare', 'Ruotare'], 1),
      order('Ordina il gesto', ['Presa a due mani sul bavero', 'Kuzushi in avanti', 'Pivot con ginocchia flesse', 'Estensione e rotazione', 'Ritorno in shizentai'], 'Il finale è sempre in piedi.'),
      fill('Il busto si inclina in avanti al massimo di circa ___ gradi.', ['20', 'venti'], 'Circa 20°.'),
      mc('Dove stanno i gomiti?', ['Sotto le ascelle, stretti', 'Larghi', 'Dietro la schiena', 'Sopra la testa'], 0),
      mc('Perché questa è la «proiezione con judogi»?', ['Usa il bavero a due mani', 'È più facile', 'Non c’è kuzushi', 'Non serve la presa'], 0),
      mc('Che cosa è un errore tipico?', ['Gomiti larghi', 'Ginocchia flesse', 'Sguardo avanti', 'Piedi vicini all’asse'], 0),
      fill('Il carico passa sulle ___, non sulla schiena che si piega.', ['gambe'], 'La forza è delle gambe.'),
      mc('Quanto vicini devono essere i piedi all’asse del partner immaginario?', ['Vicini', 'Molto lontani', 'Non conta', 'Dietro di lui'], 0),
      mc('Che cosa non dimostra questo modulo?', ['Che il gesto funzionerebbe su un avversario che resiste', 'La memoria della sequenza', 'Il ritmo', 'L’equilibrio'], 0)
    ],
    test: [
      mc('Quale proiezione del percorso si fa con judogi?', ['Morote-seoi-nage', 'O-goshi', 'Koshi-guruma', 'Ko-soto-gari'], 0),
      mc('Dove si portano le spalle nel tsukuri?', ['Sotto le ascelle del partner immaginario', 'Sopra la testa', 'Lontano', 'Dietro'], 0),
      fill('Il gesto finisce sempre in ___.', ['piedi', 'shizentai'], 'Mai caduta.'),
      mc('Che cosa fai se perdi equilibrio?', ['Mi fermo e riparto', 'Accelero', 'Mi piego di più', 'Chiudo gli occhi'], 0),
      mc('Che cosa è consigliabile per verificare la forma?', ['Un istruttore qualificato', 'Solo il video', 'Nulla', 'Un punteggio'], 0),
      order('Metti in ordine', ['Squilibrio', 'Entrata', 'Esecuzione'], 'Kuzushi, tsukuri, kake.')
    ] });

  /* ================= UCHIKOMI CON ELASTICO ================= */
  T({ id: 'jud-band-uchikomi', stage: 'L2', title: 'Uchikomi con elastico: ripetizioni senza proiezione',
    summary: 'Ripetere l’entrata (tsukuri) di una tecnica già nota contro la resistenza di un elastico, senza mai completare la proiezione e con ancoraggio sicuro.',
    objectives: ['Spiegare lo scopo dell’uchikomi con elastico e perché non si completa la proiezione', 'Preparare un ancoraggio sicuro e una postazione protetta', 'Eseguire serie brevi di qualità e fermarsi quando la forma peggiora'],
    pages: [
      { h: 'Che cosa è uchikomi', b: '**Uchikomi** (打込) significa «entrare ripetutamente»: si ripete l’**entrata** (tsukuri) di una tecnica fino al punto di kake, **senza completare** la proiezione. Con un **elastico** al posto del partner, alleni forma, ritmo e tenuta della presa in solitaria.\n\nIl modulo non sostituisce un partner e **non dimostra** che la tecnica funzionerebbe su un avversario reale.' },
      { h: 'Scopo e principio', b: 'L’uchikomi lavora sulle **fasi di tsukuri e sull’ingresso al kake**:\n- ripetere l’entrata migliora coordinazione di piedi, bacino e braccia;\n- l’elastico offre una **resistenza** simile al peso del partner, solo per la parte di entrata;\n- il movimento si **ferma** nel punto di kake e si ritorna lentamente.\n\nÈ lavoro di **qualità**, non di quantità: poche ripetizioni precise valgono più di tante frettolose.' },
      { h: 'Ancoraggio e materiale', b: 'Prima di tutto, **sicurezza**:\n- usa un elastico largo (resistenza media) in buone condizioni, senza tagli o usura;\n- fissalo a un **ancoraggio solido**, all’altezza del bacino, testato (es. palo, attacco da palestra): **verifica che non possa cedere**;\n- tieni il **viso lontano dalla linea di tiro**: un elastico che cede o scivola può colpirti;\n- niente nodi improvvisati su oggetti mobili o fragili.\n\n> Controlla sempre l’ancoraggio **prima** di ogni sessione.' },
      { h: 'La presa e la posizione', b: 'Impugna l’altra estremità con la **mano di presa** (tsurite): nel percorso no-gi simula il **polso** o la **nuca**; nel morote-seoi con judogi simula il **bavero**.\n\n- Gomiti dentro, spalle basse.\n- Piedi alla larghezza delle spalle, ginocchia morbide.\n- Spazio libero attorno a te e dietro l’elastico, pavimento non scivoloso.\n\nInizia con **poca tensione**: l’elastico non deve strattonarti.' },
      { h: 'Come si esegue, passo dopo passo', b: 'In 4 fasi:\n- **1.** assumi la presa e verifica la tensione;\n- **2.** esegui l’entrata (passo, pivot, bacino) di una tecnica **già imparata**;\n- **3.** **fermati** nel punto di kake, senza estendere in avanti fino a perdere equilibrio;\n- **4.** rientra **lentamente** in shizentai e ripeti.\n\nL’elastico fa **resistenza**, non lo usi come appoggio. Serie di **5–8 ripetizioni**, poi pausa.' },
      { h: 'Il finale «a vuoto»', b: '- **Nessuna proiezione viene completata**: ti fermi sempre a kake e torni in piedi;\n- non arretrare lasciando che l’elastico ti trascini;\n- rilascia la presa **lentamente**, mai di scatto;\n- se l’elastico vibra o scivola, **interrompi** e rifai la verifica dell’ancoraggio.' },
      { h: 'Errori comuni e correzioni', b: '- **Ancoraggio non sicuro** → ferma tutto e cambia punto.\n- **Qualità che cala nelle ripetizioni** → riduci la serie.\n- **Spalle alzate** → rilassale.\n- **Perdita di equilibrio** → riduci l’ampiezza e la tensione.\n- **Elastico mollato di colpo** → rilascia gradualmente.\n- **Viso sulla linea di tiro** → spostati di lato.' },
      { h: 'Progressioni e collegamenti', b: '**Progressione**:\n- una sola tecnica, serie di 5 con tensione leggera;\n- serie alternata destra e sinistra;\n- serie con due tecniche diverse (ad es. o-goshi e koshi-guruma);\n- serie dopo kumi-kata a vuoto.\n\n**Collegamenti**: l’elastico si applica a **qualsiasi** entrata del percorso (o-goshi, tai-otoshi, harai-goshi, uchi-mata, koshi-guruma, morote-seoi). Per harai-goshi e uchi-mata resta valido: equilibrio e tempo lento prima di tutto.' },
      { h: 'Video, sicurezza e riepilogo', b: 'Filma di lato: controlla presa, linea di schiena e finale in piedi. Il video mostra la forma, **non** l’efficacia reale.\n\n**Sicurezza**: ancoraggio testato, viso fuori dalla linea di tiro, tensione moderata, nessuna caduta. Con dolore a spalla, schiena o ginocchia, stop. È consigliabile che un **istruttore** verifichi forma e attrezzatura.\n\n**Riepilogo**: elastico su ancoraggio solido; entrata ripetuta; stop a kake; nessuna proiezione completata; serie brevi di qualità.' }
    ],
    exercises: [
      mc('Che cosa significa uchikomi?', ['Entrare ripetutamente', 'Cadere', 'Afferrare', 'Spazzare'], 0, 'Uchikomi = entrate ripetute.'),
      mc('Qual è la prima cosa da controllare prima di usare l’elastico?', ['Il colore', 'La solidità dell’ancoraggio', 'La marca', 'La lunghezza'], 1, 'Un ancoraggio che cede è il rischio principale.'),
      order('Ordina le fasi', ['Presa e verifica della tensione', 'Entrata della tecnica', 'Stop nel punto di kake', 'Rientro lento in shizentai'], 'Non si completa mai la proiezione.'),
      fill('Una serie tipica è di 5–8 ripetizioni di ___.', ['qualità'], 'Qualità, non quantità.'),
      mc('Dove si tiene il viso?', ['Sulla linea di tiro', 'Lontano dalla linea di tiro', 'Sopra l’elastico', 'Non conta'], 1),
      mc('Che cosa succede alla proiezione?', ['Non viene mai completata', 'Si completa lentamente', 'Si completa con più forza', 'Si completa a metà'], 0),
      fill('Se la forma peggiora, ti ___.', ['fermi', 'fermi subito', 'fermi e riposi'], 'Si interrompe quando la qualità cala.'),
      mc('Che tipo di elastico si usa?', ['Largo, di resistenza media, in buono stato', 'Sottile e consumato', 'Con nodi', 'Qualunque'], 0),
      mc('Quando si rilascia la presa?', ['Lentamente', 'Di scatto', 'Mai', 'Con un salto'], 0),
      mc('Che cosa non dimostra questo allenamento?', ['L’efficacia contro un avversario reale', 'La ripetizione dell’entrata', 'La coordinazione', 'Il ritmo'], 0)
    ],
    test: [
      mc('A quale altezza si fissa l’elastico?', ['All’altezza del bacino', 'Al soffitto', 'A terra', 'All’altezza dei piedi'], 0),
      fill('Il gesto si ferma nel punto di ___.', ['kake'], 'Si ferma a kake, senza completare.'),
      mc('Che cosa fai se l’elastico scivola?', ['Interrompo e verifico l’ancoraggio', 'Continuo', 'Tiro più forte', 'Lo annodo a un oggetto fragile'], 0),
      mc('Che cosa è consigliabile per verificare forma e attrezzatura?', ['Un istruttore qualificato', 'Nulla', 'Solo la forza', 'Un video senza ancoraggio'], 0),
      mc('Quale presa simuli nel morote-seoi con judogi?', ['Il bavero', 'La cintura', 'Il polso', 'La nuca'], 0),
      order('Metti in ordine', ['Verifica l’ancoraggio', 'Esegui l’entrata', 'Fermati a kake'], 'Sicurezza prima, poi forma.')
    ] });
})(window.ST = window.ST || {});
