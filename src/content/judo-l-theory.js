/* Judo e lotta — lezioni di teoria (12 argomenti, L0–L5). Tutto in chiave solitaria, «a vuoto»: nessun lavoro con partner nell’app. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'grp', minutes: 12 }, o));

  /* ---------- L0 ---------- */
  T({ id: 'jud-th-principi-del-judo', stage: 'L0', title: 'I principi del judo', summary: 'Jigoro Kano, il Kodokan, i due principi fondamentali e la differenza tra judo e jujutsu.',
    objectives: ['Collocare la nascita del judo e il suo fondatore', 'Spiegare seiryoku zenyo e jita kyoei', 'Distinguere judo e jujutsu senza luoghi comuni'],
    pages: [
      { h: 'Che cos’è il judo', b: 'La parola **judo** (柔道) si compone di **ju** = «cedevole, flessibile» e **do** = «via». Si traduce spesso con **«la via della cedevolezza»**.\n\nÈ una disciplina giapponese di lotta in piedi e a terra, nata a fine Ottocento come **metodo di educazione fisica, mentale e morale**, e solo in seguito diventata anche sport da competizione.\n\n> Il nome dice già l’idea di fondo: non opporre forza a forza, ma adattarsi e usare la spinta dell’altro.' },
      { h: 'Jigoro Kano e il Kodokan', b: 'Il judo fu creato da **Jigoro Kano** (1860–1938), educatore giapponese. Nel **1882** fondò a Tokyo la scuola **Kodokan** (講道館, «luogo per studiare la via»), che esiste ancora oggi ed è il riferimento storico della disciplina.\n\nKano non voleva solo insegnare tecniche: voleva un sistema di allenamento **sicuro, progressivo e utile alla persona**, adatto anche alla scuola.\n\nIl Kodokan è anche l’ente che ha classificato e codificato le tecniche di proiezione (vedi la lezione sulla classificazione).' },
      { h: 'Seiryoku zenyo', b: '**Seiryoku zenyo** (精力善用) significa **«impiego ottimale dell’energia»**, spesso riassunto con *massima efficienza con il minimo sforzo*.\n\nIn pratica:\n- si usano **leva, tempismo e postura** al posto della sola forza muscolare;\n- si evitano movimenti sprecati;\n- si cerca il momento in cui l’altro è già in movimento o già sbilanciato.\n\n> Non significa «fare poco»: significa **non sprecare**. Un gesto efficiente richiede molta pratica per diventare semplice.' },
      { h: 'Jita kyoei', b: '**Jita kyoei** (自他共栄) significa **«prosperità e benessere reciproci»**: si cresce insieme agli altri, non a loro spese.\n\nIl principio spiega perché nel judo:\n- si ringrazia e si saluta chi ci allena;\n- chi è più esperto aiuta chi lo è meno;\n- ci si protegge a vicenda durante l’allenamento (chi proietta cura la caduta del compagno).\n\nNel tuo caso, da solo, il principio vale come **atteggiamento**: rispetto per lo spazio, per il corpo e per i tuoi limiti.' },
      { h: 'Judo e jujutsu', b: 'Prima del judo esistevano in Giappone molte scuole (**ryu**) di **jujutsu**, arti di combattimento tradizionali con proiezioni, leve e altre tecniche. Kano le studiò e ne trasse materiale per il suo sistema.\n\nLe differenze principali:\n- il judo **seleziona** le tecniche in base alla sicurezza di allenamento, eliminando o limitando quelle più pericolose per la pratica regolare;\n- si può praticare **randori** (allenamento libero) in modo relativamente sicuro;\n- ha un **metodo didattico** unitario e una **cornice educativa**.\n\n**Jujutsu** è un nome ombrello per tante scuole diverse: non esiste «il» jujutsu unico. Evita quindi confronti troppo netti.' },
      { h: 'Dal Kodokan allo sport', b: 'Il judo si diffuse nel mondo nel Novecento. Fu **sport olimpico** per la prima volta a **Tokyo 1964** (categorie maschili); le competizioni femminili entrarono nel programma olimpico nel 1992.\n\nLo sport ha fissato regole di arbitraggio, categorie di peso e punteggi. Il rischio è dimenticare l’aspetto educativo: i principi di Kano restano la base anche per chi non compete.\n\nNell’app userai il judo come **allenamento di movimento**: equilibrio, caduta sicura, gesto tecnico. Il combattimento vero richiede sempre un partner e un istruttore.' },
      { h: 'Cosa porti con te', b: '- **Ju**: adattarsi, non irrigidirsi.\n- **Seiryoku zenyo**: efficienza, non forza bruta.\n- **Jita kyoei**: crescere insieme, rispetto.\n- **Kodokan 1882**: l’origine, a Tokyo, di Jigoro Kano.\n\nQuando eseguirai un gesto a vuoto, chiediti: *sto sprecando energia? sono rilassato nelle parti che non lavorano?* È seiryoku zenyo applicato.' }
    ],
    exercises: [
      mc('Che cosa significa «ju» in judo?', ['Forza', 'Cedevole, flessibile', 'Combattimento', 'Cintura'], 1, 'Ju = cedevole; do = via.'),
      mc('Chi fondò il Kodokan?', ['Jigoro Kano', 'Un maestro di karate', 'Un campione olimpico', 'Un samurai del Seicento'], 0, 'Il fondatore fu Jigoro Kano.'),
      mc('In che anno nacque il Kodokan?', ['1764', '1964', '1882', '1938'], 2, 'Il Kodokan fu fondato a Tokyo nel 1882.'),
      mc('Seiryoku zenyo vuol dire...', ['Vincere sempre', 'Impiego ottimale dell’energia', 'Rispetto del maestro', 'Allenarsi ogni giorno'], 1, 'Massima efficienza con minimo sforzo.'),
      mc('Jita kyoei esprime l’idea di...', ['Prosperità e benessere reciproci', 'Superare l’avversario', 'Pratica individuale', 'Forza fisica'], 0, 'Crescere insieme agli altri.'),
      fill('Completa: il judo è «la via della ___».', ['cedevolezza', 'flessibilità'], 'Ju = cedevole, do = via.'),
      fill('Completa: la scuola fondata da Kano si chiama ___.', ['kodokan', 'Kodokan'], 'Il Kodokan, a Tokyo.'),
      order('Metti in ordine il principio', ['massima', 'efficienza', 'con', 'il', 'minimo', 'sforzo'], 'È la sintesi di seiryoku zenyo.'),
      mc('Quale affermazione su judo e jujutsu è corretta?', ['Sono identici', 'Il jujutsu è un nome che raccoglie molte scuole tradizionali', 'Il judo è più antico', 'Il jujutsu non esiste più'], 1, 'Il jujutsu comprende molte scuole (ryu) diverse.')
    ],
    test: [
      mc('Quale è la traduzione più usata di «judo»?', ['La via della cedevolezza', 'L’arte della guerra', 'Il pugno veloce', 'La via della spada'], 0, 'Ju + do.'),
      mc('Dove fu fondato il Kodokan?', ['Osaka', 'Tokyo', 'Kyoto', 'Parigi'], 1, 'A Tokyo.'),
      mc('Quando il judo fu sport olimpico per la prima volta?', ['1896', '1932', '1964', '2000'], 2, 'Tokyo 1964.'),
      fill('Completa: il principio di prosperità reciproca si chiama jita ___.', ['kyoei'], 'Jita kyoei.'),
      mc('Che cosa NON significa seiryoku zenyo?', ['Evitare sprechi di energia', 'Usare leva e tempismo', 'Usare sempre la massima forza', 'Essere efficienti'], 2, 'Non è forza bruta, è efficienza.')
    ] });

  T({ id: 'jud-th-etichetta-e-sicurezza', stage: 'L0', title: 'Etichetta e sicurezza', summary: 'Il saluto (rei), lo spazio, il riscaldamento, i segnali di stop e le regole per allenarsi da solo.',
    objectives: ['Spiegare il significato del rei', 'Preparare spazio e corpo prima di allenarti', 'Riconoscere i segnali che impongono di fermarti'],
    pages: [
      { h: 'Rei: il saluto', b: '**Rei** (礼) significa **saluto, rispetto, cortesia**. Nel judo ci si inchina all’ingresso e all’uscita dal tatami, all’inizio e alla fine di ogni esercizio con un compagno e al maestro.\n\nIl saluto non è servilismo: è il modo con cui si dice «ho rispetto per te, per il luogo e per il rischio che condividiamo».\n\nDa solo puoi mantenere un piccolo rituale: **inchino a inizio e fine sessione**. Segnala al cervello «ora inizia l’attenzione» e aiuta a chiudere bene.' },
      { h: 'Lo spazio', b: 'Prima di cominciare controlla l’ambiente:\n- **superficie**: tappeto, tatami o materasso spesso, antiscivolo; mai pavimento duro per le cadute;\n- **spazio libero** attorno a te di almeno un braccio disteso in ogni direzione, senza mobili, spigoli, oggetti da calpestare;\n- **soffitto** abbastanza alto, se alzi le braccia;\n- **luce** sufficiente, temperatura non troppo bassa.\n\nTogli orologi, anelli, collane. Unghie corte. Calzini antiscivolo solo se sul tappeto non scivolano: meglio piedi nudi su superfici adatte.' },
      { h: 'Riscaldamento', b: 'Un riscaldamento di **5–8 minuti** riduce il rischio di strappi e rende i gesti più precisi:\n- **mobilità articolare**: collo (movimenti lenti), spalle, polsi, anche, ginocchia, caviglie;\n- **attivazione**: marcia sul posto, saltelli leggeri, passi laterali;\n- **attivazione del core** e dei glutei: ponte, plank breve;\n- **rotazione della colonna**, lenta e senza strappi.\n\nIl collo si muove sempre **lento e controllato**: niente rotazioni brusche o forzate.' },
      { h: 'Segnali di stop', b: 'Fermati subito, **senza tentare di finire la serie**, se compare:\n- **dolore acuto** o puntorio, soprattutto a collo, schiena, ginocchia, polsi;\n- **formicolio, intorpidimento, perdita di forza** a braccia o gambe;\n- **giramenti di testa, nausea, vista offuscata**, mal di testa dopo un urto;\n- **fiato mozzo** insolito, dolore al petto;\n- sensazione di **instabilità** o di perdere il controllo.\n\nDopo un colpo alla testa o sintomi che non passano: smetti per quel giorno e, se persistono, **consulta un medico**.' },
      { h: 'Regole per l’allenamento solitario', b: '- **Tutto a vuoto**: nessuno viene proiettato e tu non cadi da altezza.\n- Le **cadute** seguono una progressione: **sdraiato → seduto → accovacciato → in piedi**. Sali solo se il gradino precedente è consolidato.\n- **Mento sul petto** in ogni caduta all’indietro o laterale.\n- Lavora **lento prima, veloce poi**: la precisione precede l’intensità.\n- **Non allenarti** con stanchezza estrema, febbre, dolore o dopo troppo poco sonno.\n- Mai in sovrappeso di fatica: la qualità cala e il rischio sale.' },
      { h: 'Che cosa non fare mai da solo', b: '- Non provare **proiezioni reali** su altre persone senza istruttore.\n- Non **gettarti** su pavimento duro «per provare».\n- Non fare **strangolamenti, leve, tecniche di collo** su te stesso o su altri: richiedono controllo e stop condivisi (il segnale di resa).\n- Non imitare tecniche viste online con **cadute dall’alto**.\n\n> In judo, il segnale di resa è battere due volte con mano o piede; chi lo riceve **molla subito**. È una regola di sicurezza fondamentale per il lavoro in coppia, che l’app non ti chiede.' },
      { h: 'Chiudere la sessione', b: 'Termina con **2–3 minuti di defaticamento**: respirazione lenta, stretching leggero di spalle, anche, polpacci. Bevi acqua.\n\nAnnota se hai avvertito **qualche fastidio**: il diario serve anche a notare segnali che si ripetono. Se un fastidio torna per più sedute, riduci il carico o fermati.\n\nPoi l’ultimo **rei**: ringrazia il luogo e te stesso per l’impegno.' }
    ],
    exercises: [
      mc('Che cosa significa rei?', ['Saluto, rispetto', 'Punto', 'Cintura', 'Caduta'], 0, 'Rei = saluto e cortesia.'),
      mc('Per le cadute la superficie giusta è...', ['Pavimento in piastrelle', 'Tatami o materasso spesso', 'Erba bagnata', 'Parquet lucido'], 1, 'Mai su superfici dure.'),
      mc('Quale segnale impone lo stop immediato?', ['Leggero caldo', 'Formicolio a un braccio', 'Un po’ di sudore', 'Sete lieve'], 1, 'Formicolio o intorpidimento sono segnali di stop.'),
      mc('Qual è l’ordine giusto di progressione delle cadute?', ['In piedi → sdraiato', 'Sdraiato → seduto → accovacciato → in piedi', 'Accovacciato → sdraiato', 'Subito in piedi'], 1, 'Si sale solo dopo aver consolidato il gradino precedente.'),
      mc('Il collo nel riscaldamento si muove...', ['Con rotazioni rapide', 'Lento e controllato', 'Mai', 'Forzando a fine corsa'], 1, 'Movimenti lenti, mai strappi.'),
      fill('Completa: in ogni caduta all’indietro il ___ va sul petto.', ['mento'], 'Protegge la testa.'),
      fill('Completa: le proiezioni nell’app si eseguono «a ___».', ['vuoto'], 'Gesto completo, senza partner.'),
      order('Ordina la sessione', ['saluto', 'riscaldamento', 'lavoro', 'defaticamento', 'saluto'], 'Rei, preparazione, lavoro, chiusura, rei.'),
      mc('Dopo un colpo alla testa con mal di testa persistente...', ['Si continua piano', 'Si smette e, se persiste, si consulta un medico', 'Si aumenta il carico', 'Si beve un caffè e si riparte'], 1, 'Si interrompe l’attività.')
    ],
    test: [
      mc('Quanto spazio libero serve attorno a te?', ['Nessuno', 'Almeno un braccio disteso in ogni direzione', 'Solo davanti', 'Solo sopra'], 1, 'Evita urti con oggetti.'),
      mc('Quando ci si inchina?', ['Mai da soli', 'All’inizio e alla fine della sessione', 'Solo in gara', 'Solo al maestro'], 1, 'Il rituale vale anche da solo.'),
      mc('Quale di queste cose NON si fa da soli?', ['Riscaldarsi', 'Respirare', 'Provare proiezioni reali su altri senza istruttore', 'Ripetere un gesto a vuoto'], 2, 'Le proiezioni reali richiedono istruttore.'),
      fill('Completa: dopo la sessione si fa il ___.', ['defaticamento', 'stretching'], 'Chiusura con respirazione e stretching.'),
      mc('Con fatica estrema e dolore, la scelta migliore è...', ['Allenarsi lo stesso', 'Rimandare o ridurre', 'Raddoppiare le serie', 'Provare cadute più alte'], 1, 'Qualità e sicurezza prima di tutto.')
    ] });

  /* ---------- L1 ---------- */
  T({ id: 'jud-th-fisica-della-proiezione', stage: 'L1', title: 'Fisica della proiezione', summary: 'Baricentro, base d’appoggio, leva, momento torcente e perché si abbassa il bacino.',
    objectives: ['Definire baricentro e base d’appoggio', 'Spiegare leva e momento torcente applicati a una proiezione', 'Giustificare la postura bassa'],
    pages: [
      { h: 'Il baricentro', b: 'Il **baricentro** (centro di massa) è il punto in cui si può pensare concentrato tutto il peso del corpo. In piedi, in posizione eretta, si trova circa **a livello del bacino**, un poco sotto l’ombelico.\n\nSe il baricentro si sposta, il corpo deve **compensare** (un passo, un movimento delle braccia) per non cadere.\n\n> Nel judo non «spingi» un corpo: lo costringi a sistemare il baricentro dove non può più farlo.' },
      { h: 'Base d’appoggio e stabilità', b: 'La **base d’appoggio** è l’area racchiusa dai punti di contatto con il suolo (piedi e spazio tra di essi). Un corpo è **stabile** finché la **proiezione verticale del baricentro cade dentro la base**.\n\nQuindi si è più stabili se:\n- i piedi sono **più larghi** (base più ampia);\n- il baricentro è **più basso**;\n- il peso è ben distribuito.\n\nSi è meno stabili in punta di piedi o con i piedi uniti, specie se spinti nella direzione stretta (avanti-indietro con piedi in fila).' },
      { h: 'Fuori dalla base', b: 'Perdere l’equilibrio significa che il baricentro **esce dalla base**. Si può ottenere in due modi:\n- **spostare il baricentro** (tirare, spingere);\n- **ridurre o spostare la base** (spazzare o bloccare un piede, come nelle tecniche di gamba).\n\nIl vantaggio maggiore si ha **quando l’altro è già in movimento**: il suo passo sposta la base e lo rende più vulnerabile.\n\nQuesto «momento di rottura dell’equilibrio» si chiama **kuzushi**; lo approfondiremo nella lezione sulle otto direzioni.' },
      { h: 'La leva', b: 'Una **leva** è un’asta che ruota attorno a un **fulcro**. Il **braccio** della forza è la distanza tra fulcro e punto in cui applichi la forza.\n\nIn una proiezione d’anca (es. o-goshi) il tuo **bacino è il fulcro**: tiri l’altro in modo che il suo peso sia sopra o oltre il fulcro, poi la rotazione lo porta via.\n\nPiù il punto di applicazione è **lontano dal fulcro**, minore è la forza necessaria per ottenere lo stesso effetto. Per questo le **prese** e la posizione delle mani contano tanto.' },
      { h: 'Il momento torcente', b: 'Il **momento torcente** (o momento di una forza) è il prodotto **forza × braccio**: misura quanto una forza tende a far **ruotare** un corpo.\n\nUna proiezione efficace è soprattutto una **rotazione** attorno a un punto (anca, gamba, spalla), non una spinta lineare.\n\n- **Coppia**: una mano tira, l’altra spinge, in direzioni opposte, e produce rotazione.\n- Una **forza lungo la linea del fulcro** non fa ruotare.\n\n> Per questo molte tecniche usano tirare con una mano e spingere con l’altra: sembrano due azioni, sono una sola rotazione.' },
      { h: 'Perché il bacino sta in basso', b: 'Abbassare il bacino (flettendo le ginocchia, con schiena eretta) serve a:\n- **abbassare il proprio baricentro**: più stabilità e controllo;\n- **entrare sotto** il baricentro dell’altro, per sollevare o ruotare con le gambe, più potenti della schiena;\n- ridurre il **braccio di leva** tra il tuo bacino e il suo, cioè il tuo fulcro lavora vicino al suo peso;\n- proteggere la **schiena**: lavora il quadricipite, non la zona lombare.\n\n**Mai** piegare la schiena in avanti con le gambe tese: aumenta il rischio e riduce l’efficienza.' },
      { h: 'Da questa lezione al lavoro a vuoto', b: 'Quando fai un gesto a vuoto controlla:\n1. **Baricentro**: resta sopra la tua base fino all’ultimo istante utile?\n2. **Base**: i piedi sono larghi quanto basta?\n3. **Fulcro**: sai dove ruota il gesto (anca, gamba)?\n4. **Altezza**: ginocchia flesse, schiena eretta?\n\nFare un gesto bene significa **rispettare la fisica**: nessuna tecnica funziona contro di essa.' }
    ],
    exercises: [
      mc('Dove si trova circa il baricentro di una persona in piedi?', ['Nella testa', 'A livello del bacino', 'Nei piedi', 'Nelle spalle'], 1, 'Circa a livello del bacino.'),
      mc('Un corpo è stabile finché...', ['È fermo', 'La proiezione del baricentro cade dentro la base d’appoggio', 'Ha i piedi uniti', 'È in punta di piedi'], 1, 'Baricentro dentro la base.'),
      mc('Per aumentare la stabilità conviene...', ['Piedi uniti', 'Base più larga e baricentro più basso', 'Alzarsi in punta', 'Irrigidire il collo'], 1, 'Più larga la base, più basso il baricentro.'),
      mc('Il momento torcente è...', ['Forza × braccio', 'Forza ÷ tempo', 'Peso × velocità', 'Massa ÷ distanza'], 0, 'Forza per braccio di leva.'),
      mc('In una proiezione d’anca il fulcro è...', ['Il piede', 'Il bacino', 'Il collo', 'Il polso'], 1, 'Il bacino fa da fulcro.'),
      fill('Completa: perdere l’equilibrio significa che il baricentro esce dalla ___ d’appoggio.', ['base'], 'Esce dalla base.'),
      fill('Completa: abbassare il bacino protegge la ___ lombare.', ['schiena', 'zona'], 'Lavorano le gambe, non la schiena.'),
      order('Ordina la catena', ['kuzushi', 'ingresso', 'rotazione', 'proiezione'], 'Prima si rompe l’equilibrio, poi si entra e si ruota.'),
      mc('Perché una mano tira e l’altra spinge?', ['Per estetica', 'Per creare una coppia che fa ruotare', 'Per stancare', 'Non serve'], 1, 'La coppia genera rotazione.')
    ],
    test: [
      mc('Quando è più facile sbilanciare qualcuno?', ['Quando è fermo e largo', 'Quando è già in movimento', 'Quando è seduto', 'Mai'], 1, 'Il movimento sposta la base.'),
      mc('Più il punto di applicazione è lontano dal fulcro...', ['Serve più forza', 'Serve meno forza', 'Non cambia', 'La leva non funziona'], 1, 'Braccio più lungo, meno forza.'),
      fill('Completa: il momento di rottura dell’equilibrio si chiama ___.', ['kuzushi'], 'Kuzushi.'),
      mc('Quale postura è corretta per entrare in una proiezione?', ['Schiena curva e gambe tese', 'Ginocchia flesse e schiena eretta', 'Punta dei piedi', 'Testa bassa e collo rigido'], 1, 'Lavorano le gambe.'),
      mc('Una forza applicata lungo la linea del fulcro...', ['Fa ruotare molto', 'Non produce rotazione', 'Raddoppia il momento', 'Rompe l’equilibrio'], 1, 'Braccio zero, momento zero.')
    ] });

  T({ id: 'jud-th-kuzushi-otto-direzioni', stage: 'L1', title: 'Kuzushi: le otto direzioni', summary: 'Rompere l’equilibrio: le otto direzioni, il tempismo e come riconoscerle nel gesto a vuoto.',
    objectives: ['Elencare le otto direzioni di kuzushi', 'Collegare direzione e tipo di tecnica', 'Applicare il concetto al lavoro a vuoto'],
    pages: [
      { h: 'Che cos’è il kuzushi', b: '**Kuzushi** (崩し) significa **rompere, far crollare** l’equilibrio. Nel judo la proiezione si struttura in tre fasi: **kuzushi** (sbilanciare), **tsukuri** (entrare e prepararsi), **kake** (eseguire).\n\nSenza kuzushi una tecnica diventa un confronto di forza. Con un buon kuzushi servono meno energia e meno rischio.\n\nIl kuzushi non è un movimento a sé: **nasce nell’ingresso** e prosegue durante la tecnica.' },
      { h: 'Le otto direzioni', b: 'Si parla di **happo no kuzushi**, cioè le otto direzioni:\n1. **avanti**\n2. **indietro**\n3. **destra**\n4. **sinistra**\n5. **avanti a destra**\n6. **avanti a sinistra**\n7. **indietro a destra**\n8. **indietro a sinistra**\n\nSono le quattro direzioni cardinali e le quattro diagonali attorno al corpo. Le **diagonali** sono quelle in cui il corpo è più vulnerabile, perché la base è più stretta.' },
      { h: 'Direzione e tecnica', b: 'Ogni famiglia di tecniche funziona meglio con certe direzioni:\n- **avanti / avanti in diagonale**: le tecniche d’anca e di spalla (**o-goshi**, **seoi-nage**, **tai-otoshi**);\n- **indietro / indietro in diagonale**: le tecniche di falciata (**o-soto-gari**, **o-uchi-gari**, **ko-uchi-gari**);\n- **laterali**: spazzate e ganci.\n\nIl principio è lo stesso: portare il baricentro **fuori dalla base** nella direzione in cui la tecnica lo accompagna.\n\n> Una buona regola: scegli la direzione che *l’altro ti offre*, non quella che vorresti tu.' },
      { h: 'Tempismo', b: 'Sbilanciare qualcuno fermo e ben piantato è faticoso. Il momento ideale è quando:\n- l’altro **fa un passo** (il peso passa da un piede all’altro);\n- l’altro **spinge** (puoi accompagnare la spinta);\n- l’altro **tira** (puoi cedere e seguire).\n\nQuesto è il senso di *ju*: cedere per poi dirigere. Il tempismo si allena con **ripetizioni lente**, poi con ritmo variabile.\n\nDa solo, immagina la reazione dell’altro e lavora il **ritmo**: ingresso, pausa, ingresso.' },
      { h: 'Kuzushi con il tuo corpo', b: 'Il kuzushi funziona solo se **tu** sei equilibrato. Controlla:\n- **postura**: schiena lunga, spalle rilassate, ginocchia morbide;\n- **piedi**: larghezza delle spalle, peso sulla parte anteriore del piede;\n- **sguardo**: orizzonte, non i piedi;\n- **respiro**: regolare, non trattenuto.\n\nSe perdi l’equilibrio mentre lo fai, non stai applicando kuzushi: stai solo spostando te stesso.' },
      { h: 'Come lavorare a vuoto', b: '- **Direzione**: scegli una direzione e disegna con il corpo il percorso (passo, rotazione, estensione).\n- **Visualizza** il baricentro dell’altro e il punto in cui lo porti.\n- **Ritmo lento**: 5 secondi per il gesto, poi 3, poi 2.\n- **Fermo-immagine**: fermati a metà gesto e controlla postura e piedi.\n- **Ripeti** 8–10 volte, poi cambia direzione.\n\nIl lavoro a vuoto non dimostra l’efficacia contro un avversario che resiste: costruisce **forma e ritmo**.' },
      { h: 'Errori frequenti', b: '- **Tirare con le braccia** invece di muovere il corpo: la forza si disperde.\n- **Piegare la schiena** al posto delle ginocchia.\n- **Fissare i piedi** con lo sguardo: la testa cade in avanti e si perde l’equilibrio.\n- **Fermare il respiro**: irrigidisce il corpo e riduce la fluidità.\n- Scegliere **sempre la stessa direzione**: si resta prevedibili.' }
    ],
    exercises: [
      mc('Quante sono le direzioni di kuzushi classiche?', ['Quattro', 'Sei', 'Otto', 'Dodici'], 2, 'Happo no kuzushi: otto direzioni.'),
      mc('Qual è l’ordine delle tre fasi?', ['Kake, tsukuri, kuzushi', 'Kuzushi, tsukuri, kake', 'Tsukuri, kake, kuzushi', 'Kuzushi, kake, tsukuri'], 1, 'Sbilanciare, entrare, eseguire.'),
      mc('Quali direzioni rendono il corpo più vulnerabile?', ['Le diagonali', 'Solo avanti', 'Solo indietro', 'Nessuna'], 0, 'Le diagonali hanno la base più stretta.'),
      mc('Il momento ideale per sbilanciare è quando l’altro...', ['Dorme', 'Si muove o fa un passo', 'Ha i piedi larghi e fermi', 'Guarda altrove'], 1, 'Il movimento sposta la base.'),
      mc('O-soto-gari lavora tipicamente su una direzione...', ['In avanti', 'All’indietro (diagonale)', 'Solo laterale', 'Verso il basso'], 1, 'Falciata esterna con kuzushi indietro.'),
      fill('Completa: «kuzushi» significa rompere l’___.', ['equilibrio'], 'Rottura dell’equilibrio.'),
      fill('Completa: la fase di ingresso si chiama ___.', ['tsukuri'], 'Tsukuri.'),
      order('Ordina le fasi', ['kuzushi', 'tsukuri', 'kake'], 'Sbilanciare, entrare, eseguire.'),
      mc('Perché lo sguardo non deve andare ai piedi?', ['Per eleganza', 'Perché la testa cade in avanti e si perde equilibrio', 'Per rispetto', 'Non importa'], 1, 'Lo sguardo guida la postura.')
    ],
    test: [
      mc('Come si dice «otto direzioni» in giapponese?', ['Happo no kuzushi', 'Gokyo', 'Randori', 'Rei'], 0, 'Happo no kuzushi.'),
      mc('Un buon kuzushi richiede che tu sia...', ['Rigido', 'Equilibrato', 'Veloce a tutti i costi', 'Basso a terra'], 1, 'Prima il tuo equilibrio.'),
      mc('Quale errore è tipico?', ['Tirare solo con le braccia', 'Respirare', 'Piegare le ginocchia', 'Guardare l’orizzonte'], 0, 'Il corpo deve muoversi, non solo le braccia.'),
      fill('Completa: le direzioni sono quattro cardinali e quattro ___.', ['diagonali'], 'Otto in tutto.'),
      mc('Nel lavoro a vuoto la tecnica del kuzushi va fatta...', ['Sempre a massima velocità', 'Prima lenta, poi più rapida', 'Con salti', 'Senza controllo'], 1, 'Forma prima, velocità dopo.')
    ] });

  /* ---------- L2 ---------- */
  T({ id: 'jud-th-classificazione-nage-waza', stage: 'L2', title: 'Classificazione delle tecniche di proiezione', summary: 'Nage-waza e katame-waza, le famiglie te/koshi/ashi/sutemi e la struttura del Gokyo.',
    objectives: ['Distinguere nage-waza e katame-waza', 'Collocare le tecniche dell’app nella famiglia giusta', 'Descrivere la struttura del Gokyo'],
    pages: [
      { h: 'Waza: le tecniche', b: '**Waza** (技) significa «tecnica». Il Kodokan divide le tecniche in due grandi gruppi:\n- **Nage-waza**: tecniche di **proiezione**;\n- **Katame-waza**: tecniche di **controllo** a terra (immobilizzazioni, strangolamenti, leve articolari).\n\nCon *atemi-waza* (colpi) si indica un terzo gruppo, che nel judo si pratica solo nei kata e non nella pratica sportiva.\n\nNell’app si lavora con **gesti a vuoto** delle proiezioni e con movimenti a terra individuali.' },
      { h: 'Nage-waza: tachi-waza e sutemi-waza', b: 'Le proiezioni si dividono in:\n- **Tachi-waza**: tecniche **in piedi**, con il corpo di chi proietta che resta eretto;\n- **Sutemi-waza**: tecniche **di sacrificio**, in cui chi proietta si lascia cadere (*sutemi* = «gettare via il corpo»).\n\nIl tachi-waza si suddivide in **te-waza**, **koshi-waza**, **ashi-waza**. Il sutemi-waza in **ma-sutemi-waza** (caduta sulla schiena) e **yoko-sutemi-waza** (caduta sul fianco).' },
      { h: 'Te, koshi, ashi', b: '- **Te-waza** (mano/braccio): il lavoro principale è delle braccia e delle spalle, es. **seoi-nage**, **tai-otoshi**.\n- **Koshi-waza** (anca/bacino): il bacino fa da fulcro, es. **o-goshi**, **koshi-guruma**, **harai-goshi**.\n- **Ashi-waza** (gamba/piede): falciate, spazzate, ganci, es. **o-soto-gari**, **o-uchi-gari**, **ko-uchi-gari**, **ko-soto-gari**, **uchi-mata**.\n\nLa classificazione si basa sulla **parte del corpo che agisce di più**; nella pratica ogni tecnica usa tutto il corpo.' },
      { h: 'Katame-waza', b: '**Katame-waza** comprende:\n- **Osaekomi-waza**: immobilizzazioni;\n- **Shime-waza**: strangolamenti;\n- **Kansetsu-waza**: leve alle articolazioni.\n\nIl lavoro a terra, **ne-waza**, ha un forte contenuto di movimento (spostamenti, ponti, frame) che puoi allenare da solo, come fanno i moduli **bridge, sit-out, frame** dell’app. L’applicazione reale delle tecniche di controllo richiede un partner e un istruttore.' },
      { h: 'Il Gokyo', b: 'Il **Gokyo no waza** è l’elenco ufficiale del Kodokan delle tecniche di proiezione fondamentali. **Go** = cinque, **kyo** = gruppo o «insegnamento»: **cinque gruppi** (dai-ikkyo, dai-nikyo, … dai-gokyo).\n\nCiascun gruppo contiene **otto tecniche**, per un totale di **quaranta**. Le tecniche sono ordinate in base a difficoltà didattica e non per famiglie.\n\nIl Kodokan ha poi aggiunto altre tecniche in un elenco supplementare (*Shinmeisho no waza*).' },
      { h: 'Le tecniche dell’app', b: 'Nell’app incontri queste proiezioni, in versione **a vuoto**:\n- **O-goshi** (koshi-waza)\n- **Koshi-guruma** (koshi-waza)\n- **Harai-goshi** (koshi-waza)\n- **Seoi-nage** e **Morote-seoi-nage** (te-waza)\n- **Tai-otoshi** (te-waza)\n- **O-soto-gari**, **O-uchi-gari**, **Ko-uchi-gari**, **Ko-soto-gari** (ashi-waza)\n- **Uchi-mata** (ashi-waza)\n\nO-goshi, o-soto-gari, o-uchi-gari, seoi-nage compaiono nel primo gruppo del Gokyo; ko-soto-gari, ko-uchi-gari, koshi-guruma, tai-otoshi, harai-goshi e uchi-mata nel secondo.' },
      { h: 'Perché serve una classificazione', b: 'Conoscere le famiglie aiuta a:\n- **riconoscere somiglianze**: due tecniche della stessa famiglia hanno ingressi simili;\n- **pianificare l’allenamento**: alternare tecniche diverse riduce le ripetizioni monotone;\n- **comunicare** con istruttori e compagni usando lo stesso linguaggio.\n\nIl nome giapponese è corto e preciso: *o* = grande, *ko* = piccolo, *gari* = falciata, *goshi* = anca, *nage* = proiezione. Imparare i suffissi permette di capire molti nomi nuovi.' }
    ],
    exercises: [
      mc('Nage-waza indica...', ['Le immobilizzazioni', 'Le proiezioni', 'Gli strangolamenti', 'Il saluto'], 1, 'Nage = lanciare, proiettare.'),
      mc('Quale è una tecnica di koshi-waza?', ['O-soto-gari', 'O-goshi', 'Ko-uchi-gari', 'Uchi-mata'], 1, 'Goshi = anca.'),
      mc('Seoi-nage appartiene a...', ['Te-waza', 'Ashi-waza', 'Koshi-waza', 'Katame-waza'], 0, 'Il braccio è protagonista.'),
      mc('Le tecniche di sacrificio si chiamano...', ['Sutemi-waza', 'Te-waza', 'Osaekomi-waza', 'Gari'], 0, 'Sutemi-waza.'),
      mc('Quante tecniche ha il Gokyo?', ['Venti', 'Quaranta', 'Cento', 'Otto'], 1, 'Cinque gruppi da otto.'),
      mc('Il suffisso «gari» indica...', ['Anca', 'Falciata', 'Presa', 'Caduta'], 1, 'Es. o-soto-gari = grande falciata esterna.'),
      fill('Completa: le tecniche di controllo a terra si chiamano ___-waza.', ['katame'], 'Katame-waza.'),
      fill('Completa: «ashi» significa ___.', ['gamba', 'piede'], 'Ashi = gamba/piede.'),
      order('Ordina la gerarchia', ['waza', 'nage-waza', 'tachi-waza', 'ashi-waza'], 'Dal generale al particolare.')
    ],
    test: [
      mc('O-uchi-gari è una tecnica di...', ['Koshi-waza', 'Ashi-waza', 'Te-waza', 'Sutemi-waza'], 1, 'Falciata con la gamba.'),
      mc('Quale non è una famiglia di tachi-waza?', ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Shime-waza'], 3, 'Shime-waza è katame-waza.'),
      fill('Completa: il Gokyo è composto da cinque ___.', ['gruppi', 'gruppo'], 'Cinque gruppi da otto tecniche.'),
      mc('Il suffisso «goshi» rimanda a...', ['Anca', 'Collo', 'Polso', 'Ginocchio'], 0, 'Goshi/koshi = anca.'),
      mc('Quale tecnica dell’app è di te-waza?', ['Tai-otoshi', 'Harai-goshi', 'O-uchi-gari', 'Koshi-guruma'], 0, 'Tai-otoshi usa soprattutto le braccia.')
    ] });

  T({ id: 'jud-th-prese-gi-e-no-gi', stage: 'L2', title: 'Prese con e senza judogi', summary: 'Colletto, underhook, overhook, controllo di polso e bicipite, neck wrap, doppia presa al bavero e tecniche collegate.',
    objectives: ['Distinguere le prese con judogi e senza', 'Associare le prese alle tecniche dell’app', 'Capire come le prese cambiano l’efficacia'],
    pages: [
      { h: 'Perché le prese contano', b: 'La **presa** è il collegamento tra te e l’altro: attraverso di essa **trasmetti kuzushi** e controlli la distanza. Senza presa, nessuna proiezione.\n\nNel judo si lavora con il **judogi** (la divisa, con bavero e maniche), che offre molte prese. Nella lotta, nel grappling no-gi e nelle arti di clinch si lavora **senza giacca**: si afferrano corpo, braccia e testa.\n\nIn questa lezione vedi le prese principali e le tecniche dell’app che le usano. Nell’app tutto è **a vuoto**: simuli la presa nell’aria.' },
      { h: 'Con judogi: bavero e manica', b: 'La presa classica del judo:\n- **mano al bavero** (kumi-kata): una mano afferra il bavero, in genere all’altezza della clavicola;\n- **mano alla manica**: l’altra mano afferra la manica all’altezza del gomito o del polso.\n\nDa qui si gestiscono la distanza e la rotazione. **Seoi-nage**, **o-goshi**, **harai-goshi**, **tai-otoshi** nascono tipicamente da questa configurazione.\n\nLa **doppia presa al bavero** (*morote*, due mani) si usa in **morote-seoi-nage**: entrambe le mani controllano il bavero e il bacino entra sotto.' },
      { h: 'Senza judogi: collare e testa', b: 'Senza giacca si usano prese al corpo:\n- **collar tie** (presa alla nuca): una mano sul collo o sulla nuca dell’altro, per controllarne la testa e la postura;\n- **neck wrap** (avvolgere il collo): il braccio passa attorno al collo; usato in clinch;\n- **plum clinch**: due mani intrecciate dietro la nuca, con i gomiti vicini, tipico della **muay thai**.\n\nIl controllo del **capo** è importante: dove va la testa va il corpo. **Mai** forzare il collo: nell’app queste prese sono solo simulate.' },
      { h: 'Underhook e overhook', b: '- **Underhook**: il tuo braccio passa **sotto** l’ascella dell’altro, con la mano che cerca la schiena o la scapola. Dà **controllo del tronco** e permette di avvicinarsi.\n- **Overhook**: il tuo braccio passa **sopra** il braccio dell’altro e lo blocca contro di te.\n\nIl **pummeling** (nell’app: *pummel a vuoto*) allena a cambiare tra underhook e overhook con fluidità.\n\nL’underhook è molto utile per **o-goshi senza giacca**, **koshi-guruma no-gi** e per le entrate di lotta.' },
      { h: 'Controllo di polso e bicipite', b: 'Altre prese comuni senza giacca:\n- **polso** (wrist control): serve a bloccare o guidare la mano dell’altro;\n- **bicipite** (bicep tie): si afferra la parte alta del braccio per **trascinare o spostare**; utile per **arm drag** e per angoli di ingresso;\n- **hand fighting**: la lotta per le prese, nel quale si cerca di prendere la presa migliore e togliere quella dell’altro.\n\nL’app ha moduli dedicati a **hand fighting** e **arm drag** a vuoto.' },
      { h: 'Quali tecniche, quali prese', b: '- **Seoi-nage, tai-otoshi, harai-goshi, o-goshi** (con judogi): bavero + manica.\n- **Morote-seoi-nage**: doppia presa al bavero.\n- **O-soto-gari, o-uchi-gari, ko-uchi-gari**: bavero e manica, ma anche prese al corpo.\n- **Koshi-guruma no-gi, ko-soto-gari/gake no-gi**: collare o underhook senza giacca.\n- **Single-leg, double-leg**: nessuna presa di giacca, si lavora su gambe e bacino.\n- **Clinch plum**: nuca a due mani, per ginocchiate e controllo di testa.\n\nLa presa **determina il kuzushi** che puoi creare.' },
      { h: 'Principi generali', b: '- **Presa rilassata finché serve**: chiudi la mano solo al momento di tirare.\n- **Spalle morbide**: tirare con le sole braccia stanca presto.\n- **Gomiti vicini al corpo**: più controllo, meno leve a sfavore.\n- **Postura prima della presa**: se sei sbilanciato, la presa ti trascina.\n- **Cambiare presa** è normale: l’altro reagisce.\n\nNel lavoro a vuoto concentrati su **posizione delle mani e dei gomiti** e sul legame con i piedi.' }
    ],
    exercises: [
      mc('Qual è la presa classica del judo con judogi?', ['Nuca a due mani', 'Bavero e manica', 'Doppia gamba', 'Cintura'], 1, 'Una mano al bavero, una alla manica.'),
      mc('Che cos’è un underhook?', ['Braccio sopra il braccio avversario', 'Braccio sotto l’ascella dell’altro', 'Presa al polso', 'Presa alla cintura'], 1, 'Underhook = sotto.'),
      mc('Quale presa tipica della muay thai usa due mani dietro la nuca?', ['Overhook', 'Plum clinch', 'Bicep tie', 'Morote'], 1, 'Plum clinch.'),
      mc('Morote-seoi-nage usa...', ['Presa a una mano', 'Doppia presa al bavero', 'Nessuna presa', 'Presa alle gambe'], 1, 'Morote = due mani.'),
      mc('Quale modulo allena il passaggio underhook/overhook?', ['Sprawl', 'Pummeling a vuoto', 'Hip bridge', 'Ukemi'], 1, 'Pummel a vuoto.'),
      mc('Il collar tie controlla soprattutto...', ['I piedi', 'La testa e la postura', 'La cintura', 'Le ginocchia'], 1, 'Dove va la testa va il corpo.'),
      fill('Completa: la lotta per ottenere la presa migliore si chiama hand ___.', ['fighting'], 'Hand fighting.'),
      fill('Completa: il braccio sopra il braccio dell’altro è un ___hook.', ['over'], 'Overhook.'),
      order('Ordina le fasi', ['presa', 'kuzushi', 'ingresso', 'proiezione'], 'La presa permette di sbilanciare.')
    ],
    test: [
      mc('Quale tecnica nasce da bavero e manica?', ['Seoi-nage', 'Single-leg', 'Sprawl', 'Sit-out'], 0, 'Seoi-nage.'),
      mc('Il bicep tie serve a...', ['Controllare e spostare il braccio', 'Proteggere il collo', 'Cadere meglio', 'Respirare'], 0, 'Trascina e sposta.'),
      mc('Quale non è una presa senza judogi?', ['Collar tie', 'Underhook', 'Bavero', 'Neck wrap'], 2, 'Il bavero c’è solo con la giacca.'),
      fill('Completa: la presa classica con judogi si dice kumi-___.', ['kata'], 'Kumi-kata.'),
      mc('Una presa troppo rigida...', ['Stanca presto', 'È sempre meglio', 'Non cambia', 'È obbligatoria'], 0, 'Presa e spalle morbide finché serve.')
    ] });

  T({ id: 'jud-th-ukemi-fisiologia-e-prevenzione', stage: 'L2', title: 'Ukemi: fisiologia e prevenzione', summary: 'Collo, spalle, polsi, colonna, distribuzione dell’impatto, segnali d’allarme e criteri di stop.',
    objectives: ['Spiegare come l’ukemi distribuisce l’impatto', 'Riconoscere i punti vulnerabili del corpo', 'Applicare i criteri di stop'],
    pages: [
      { h: 'A che cosa serve l’ukemi', b: '**Ukemi** (受身) significa «ricevere con il corpo». È l’insieme delle **cadute sicure**. Serve a:\n- **distribuire** l’impatto su una superficie ampia;\n- **dissipare** l’energia nel tempo (battuta, rotolamento);\n- **proteggere** testa, collo, colonna e articolazioni.\n\nSi dice spesso che l’ukemi è la **prima tecnica** del judo: senza cadere bene non si può imparare in sicurezza il resto.' },
      { h: 'Collo e testa', b: 'Il collo sostiene la testa (4–5 kg) e protegge midollo e vertebre cervicali. In ogni caduta:\n- **mento sul petto** (all’indietro e laterale): la testa non tocca il tappeto;\n- lo sguardo va **all’ombelico** o alla cintura;\n- collo **attivo ma non rigido**.\n\nUna testa che si scuote o che colpisce il suolo può causare traumi anche gravi. Per questo la progressione parte da **sdraiato**, dove l’altezza è minima.' },
      { h: 'Spalle e braccia', b: 'La **battuta** del braccio è ciò che assorbe parte dell’energia:\n- il braccio colpisce il tappeto a **30–45°** dal corpo, **palmo in giù**;\n- si usa **tutto l’arto**, dall’avambraccio alla spalla, non solo la mano;\n- le braccia **non si puntano** a terra per frenare la caduta: è il modo più comune di farsi male (polso, gomito, clavicola).\n\nIn caso di rotolamento in avanti, il braccio disegna un **arco** e la spalla, non la testa, tocca il tappeto.' },
      { h: 'Polsi, gomiti e mani', b: 'Il polso si fa male quando si **«mette la mano» per frenare** una caduta. Evitalo:\n- non estendere il braccio rigido sotto di te;\n- fai **sempre** una battuta decisa con tutto il braccio;\n- scaldati i polsi prima della sessione (cerchi lenti, flessioni dolci).\n\nSe un polso fa male dopo l’allenamento e **non passa**, fermati e fai valutare da un medico.' },
      { h: 'Schiena e colonna', b: 'La colonna vertebrale assorbe urti ma non deve essere **colpita** direttamente. Per questo:\n- nella caduta all’indietro la schiena si **arrotonda** (cifosi controllata) e il bacino scende per primo;\n- il contatto avviene **in sequenza**, dal bacino verso le scapole, non in blocco;\n- le gambe restano **sollevate** e non battono bruscamente a terra.\n\nUna schiena rigida e dritta all’impatto è un rischio di compressione. Se dopo una caduta senti **dolore lungo la colonna**, stop.' },
      { h: 'Come si distribuisce l’impatto', b: 'L’energia non si elimina: si **spalma** su tempo e superficie.\n- **Tempo**: più lunga la durata dell’impatto, minore la forza di picco; per questo si rotola o si «rotola e batte».\n- **Superficie**: più ampia la zona di contatto (avambraccio, schiena, fianco), minore la pressione.\n- **Espirazione**: espirare durante la battuta evita il blocco del respiro e riduce il rischio di restare senza fiato.\n\n> Per questo *una caduta bassa fatta bene* vale più di una caduta alta fatta male.' },
      { h: 'Segnali d’allarme e criteri di stop', b: 'Fermati e **non riprovare nello stesso giorno** se:\n- dolore acuto a collo, schiena, polsi, spalle o ginocchia;\n- formicolio, intorpidimento o debolezza;\n- giramenti di testa, nausea, mal di testa dopo un urto;\n- senso di instabilità o paura incontrollata.\n\nRimanda se sei molto stanco, malato o hai dormito poco.\n\nSe **non riesci a eseguire correttamente il gradino attuale**, non salire al successivo: torna indietro. Con sintomi che persistono, consulta un **medico**.' }
    ],
    exercises: [
      mc('Ukemi significa...', ['Attaccare', 'Ricevere con il corpo', 'Saltare', 'Proiettare'], 1, 'Cadere in sicurezza.'),
      mc('In quale posizione deve stare il mento in una caduta all’indietro?', ['Verso il soffitto', 'Sul petto', 'A destra', 'In avanti sporgente'], 1, 'Protegge la testa.'),
      mc('Con quale angolo si batte il braccio?', ['0°', '30–45° dal corpo', '90° sopra la testa', 'Non si batte'], 1, 'Battuta con tutto il braccio.'),
      mc('Quale errore provoca spesso infortuni al polso?', ['Battere con il braccio', 'Mettere la mano per frenare', 'Espirare', 'Mento sul petto'], 1, 'Mai puntare la mano a terra.'),
      mc('Quale caduta è più sicura da imparare per prima?', ['Da in piedi', 'Da sdraiato', 'Da una sedia', 'Da una scala'], 1, 'Altezza minima.'),
      mc('Distribuire l’impatto significa...', ['Eliminare l’energia', 'Estenderla su più tempo e superficie', 'Ignorarla', 'Cadere più forte'], 1, 'Si spalma l’energia.'),
      fill('Completa: durante la battuta si deve ___.', ['espirare', 'espirare'], 'L’espirazione evita il blocco del respiro.'),
      fill('Completa: con formicolio a un braccio dopo una caduta, si fa ___.', ['stop', 'stop'], 'Segnale di allarme.'),
      order('Ordina il criterio', ['gradino', 'consolidato', 'poi', 'si', 'sale'], 'Si sale solo se il livello precedente è solido.')
    ],
    test: [
      mc('Quale zona NON deve toccare il tappeto in una caduta all’indietro?', ['Schiena', 'Testa', 'Braccia', 'Bacino'], 1, 'La testa resta sollevata.'),
      mc('La schiena nella caduta all’indietro è...', ['Rigida e dritta', 'Arrotondata', 'Iperestesa', 'Piegata di lato'], 1, 'Arrotondata.'),
      mc('Dopo un colpo alla testa con nausea...', ['Continui', 'Smetti e, se persiste, consulti un medico', 'Ripeti più alto', 'Bevi caffè'], 1, 'Stop.'),
      fill('Completa: le braccia non si ___ a terra per frenare.', ['puntano', 'appoggiano'], 'Si battono, non si puntano.'),
      mc('Se non riesci a eseguire bene il gradino attuale...', ['Sali comunque', 'Torni al gradino precedente', 'Aumenti la velocità', 'Salti il riscaldamento'], 1, 'La progressione è condizionata alla qualità.')
    ] });

  /* ---------- L3 ---------- */
  T({ id: 'jud-th-allenamento-solo-pianificazione', stage: 'L3', title: 'Allenamento solitario: pianificazione', summary: 'Sessioni da 5 minuti, ripetizione distribuita, diario degli errori, recupero e mobilità.',
    objectives: ['Costruire una routine breve e regolare', 'Applicare la ripetizione distribuita alle abilità motorie', 'Tenere un diario degli errori e pianificare il recupero'],
    pages: [
      { h: 'Il valore dei 5 minuti', b: 'Cinque minuti di pratica **mirata e regolare** battono un’ora ogni tanto. Il sistema nervoso consolida le abilità motorie con la **ripetizione frequente**, soprattutto se c’è sonno tra una sessione e l’altra.\n\nUna sessione breve ha un vantaggio: **non arrivi stanco**, quindi la qualità del gesto resta alta.\n\nStruttura tipica:\n- 1 min: riscaldamento e rei;\n- 3 min: lavoro mirato su 1–2 gesti;\n- 1 min: respiro, nota nel diario.' },
      { h: 'Ripetizione distribuita', b: 'La **ripetizione distribuita** (*spaced practice*) significa rivedere un’abilità a intervalli crescenti: dopo un giorno, tre giorni, una settimana.\n\nRispetto al «tutto in una volta» (*massed practice*):\n- la ritenzione a lungo termine è **migliore**;\n- all’inizio sembra più difficile, e **proprio questo** rafforza l’apprendimento.\n\nL’app applica questo principio programmando i **ripassi**. Tu puoi aggiungere variabilità: stesso gesto, **ritmo o direzione diversi**.' },
      { h: 'Pratica variata', b: 'Ripetere sempre lo stesso identico movimento produce prestazioni buone *oggi*, ma meno trasferibili. Alternare **varianti** (velocità, direzione, altezza, lato) costringe il cervello a ricostruire il gesto ogni volta, e lo rende più robusto.\n\nEsempio per una sessione:\n- 3 ripetizioni di o-soto-gari a sinistra;\n- 3 di o-uchi-gari;\n- 3 di o-soto-gari a destra.\n\nSi chiama **pratica intervallata** (*interleaved*): sembra meno fluida, ma funziona meglio.' },
      { h: 'Il diario degli errori', b: 'Annota in 1–2 righe:\n- **cosa** hai eseguito;\n- **quale errore** hai notato (es. «piedi troppo vicini»);\n- **una sola correzione** per la prossima volta.\n\nRileggi il diario ogni settimana: se lo **stesso errore** ricorre, quello è il tuo prossimo obiettivo.\n\nNon cercare di correggere cinque cose insieme: la **soglia attentiva** è limitata. Un errore alla volta.' },
      { h: 'Recupero e sonno', b: 'L’adattamento avviene **fuori** dall’allenamento:\n- **sonno**: consolida la memoria motoria; 7–9 ore per gli adulti sono un riferimento comune;\n- **intervalli**: lascia almeno un giorno senza lavoro ad alta intensità se ti senti affaticato;\n- **idratazione e alimentazione** adeguate.\n\nSegni di recupero insufficiente: dolori persistenti, irritabilità, calo della qualità del gesto, sonno disturbato. In questi casi **riduci il carico**.' },
      { h: 'Mobilità', b: 'Una buona **mobilità** di anche, caviglie, spalle e colonna toracica rende i gesti più ampi e sicuri.\n\nIdee brevi:\n- **anche**: affondi dinamici, rotazioni a ginocchio piegato;\n- **spalle**: cerchi con le braccia, apertura del petto;\n- **colonna toracica**: rotazioni da quadrupedia;\n- **caviglie**: ginocchio verso la parete.\n\nMobilità e forza si completano: la flessibilità senza controllo non protegge. Fai movimenti **attivi**, senza forzare a dolore.' },
      { h: 'Un piano settimanale d’esempio', b: '- **Lun**: caduta (gradino consolidato) + 1 gesto a vuoto.\n- **Mar**: mobilità + footwork.\n- **Mer**: 2 gesti a vuoto in alternanza.\n- **Gio**: riposo o camminata.\n- **Ven**: ripasso del gesto più debole.\n- **Sab**: sessione variata.\n- **Dom**: riposo e lettura del diario.\n\nSe salti un giorno, **riprendi senza recuperare**: non raddoppiare. La costanza vince sull’intensità.' }
    ],
    exercises: [
      mc('Perché sono utili sessioni brevi e frequenti?', ['Perché sono più facili da saltare', 'Perché consolidano meglio le abilità motorie', 'Perché richiedono meno attenzione', 'Perché sostituiscono il sonno'], 1, 'Frequenza e qualità.'),
      mc('La ripetizione distribuita consiste nel...', ['Ripetere tutto in un’ora', 'Rivedere a intervalli crescenti', 'Non ripetere mai', 'Ripetere solo il gesto facile'], 1, 'Intervalli crescenti.'),
      mc('La pratica intervallata (interleaved) è...', ['Alternare gesti diversi nella stessa sessione', 'Un solo gesto per ore', 'Allenarsi dormendo', 'Allenarsi senza pause'], 0, 'Alternare.'),
      mc('Quanti errori conviene correggere per volta?', ['Cinque', 'Tutti', 'Uno', 'Nessuno'], 2, 'La soglia attentiva è limitata.'),
      mc('Segnale di recupero insufficiente:', ['Sonno regolare', 'Dolori persistenti e calo di qualità', 'Fame', 'Voglia di allenarsi'], 1, 'Riduci il carico.'),
      mc('Dopo un giorno saltato conviene...', ['Raddoppiare il carico', 'Riprendere normalmente', 'Smettere', 'Cambiare disciplina'], 1, 'Non recuperare a forza.'),
      fill('Completa: l’adattamento si consolida soprattutto durante il ___.', ['sonno', 'riposo'], 'Il recupero conta.'),
      fill('Completa: nel diario annoti una sola ___ per la prossima volta.', ['correzione'], 'Un errore, una correzione.'),
      order('Ordina la sessione da 5 minuti', ['riscaldamento', 'lavoro', 'respiro', 'nota'], 'Struttura breve.')
    ],
    test: [
      mc('Quale vantaggio ha la pratica variata?', ['Gesto più robusto e trasferibile', 'Meno attenzione', 'Meno memoria', 'Nessuno'], 0, 'Costringe il cervello a ricostruire il gesto.'),
      mc('Mobilità senza controllo...', ['Protegge sempre', 'Non basta a proteggere', 'È dannosa', 'Basta da sola'], 1, 'Serve anche forza.'),
      mc('Quanto sonno è un riferimento comune per un adulto?', ['3–4 ore', '7–9 ore', '12 ore', 'Non conta'], 1, 'Circa 7–9 ore.'),
      fill('Completa: quando lo stesso errore ricorre nel diario, è il tuo prossimo ___.', ['obiettivo'], 'Priorità di lavoro.'),
      mc('Con dolore articolare persistente...', ['Aumenti il volume', 'Riduci il carico e valuti', 'Ignori', 'Aggiungi cadute'], 1, 'Ascolta i segnali.')
    ] });

  T({ id: 'jud-th-clinch-muay-thai-principi', stage: 'L3', title: 'Clinch nella muay thai: principi', summary: 'Che cos’è il plum clinch, contesto regolamentare, equilibrio e postura, sicurezza.',
    objectives: ['Definire il plum clinch', 'Spiegare il ruolo di equilibrio e postura', 'Conoscere i limiti di sicurezza dell’allenamento solitario'],
    pages: [
      { h: 'Che cos’è il clinch', b: 'Il **clinch** è il corpo a corpo a distanza ravvicinata in cui i due atleti si controllano a vicenda con le mani e il tronco. Nella **muay thai**, l’arte da combattimento thailandese, è una parte importante del sistema.\n\nIl **plum clinch** (in thai *chap kho*, «presa al collo») è la forma più nota: le mani **intrecciate dietro la nuca** dell’altro, i gomiti stretti, per controllare la **testa**, la postura e le distanze, e per colpire con **ginocchiate**.' },
      { h: 'Contesto regolamentare', b: 'Le **regole variano** a seconda di federazione, paese e tipo di incontro, perciò è meglio verificare quelle in vigore nella gara o palestra che ti interessa.\n\nIn linea generale, in competizione:\n- il clinch è **ammesso**, ma deve avere **un’azione**: se non c’è, l’arbitro separa gli atleti;\n- sono consentiti controllo, ginocchiate e proiezioni entro i limiti previsti;\n- molte regole **vietano o limitano** alcune azioni.\n\nNell’app non si lavora con partner: tutto resta a vuoto.' },
      { h: 'Postura', b: 'Per un buon clinch **a vuoto**:\n- **schiena lunga**, bacino sotto le spalle;\n- **ginocchia leggermente flesse**, piedi a larghezza di spalle, uno leggermente avanti;\n- **gomiti vicini**, mani alte;\n- **sguardo avanti**, non ai piedi.\n\nUna postura alta e arrotondata è instabile e espone il collo. Una postura **compatta e radicata** è il fondamento del controllo.' },
      { h: 'Equilibrio', b: 'Nel clinch l’equilibrio si decide in modo **dinamico**:\n- il **baricentro** deve restare sopra la tua base;\n- i **passi** sono piccoli e continui, senza incrociare i piedi;\n- con una ginocchiata si sposta il peso su una gamba: **solo se l’altra gamba è radicata**.\n\nLe regole del baricentro e della base valgono come nelle proiezioni di judo: puoi rivedere la lezione sulla fisica della proiezione.' },
      { h: 'Ginocchiate: a vuoto', b: 'Nell’app incontri tre ginocchiate:\n- **khao trong**: diretta, verso l’alto e avanti;\n- **khao khong**: curva, ad arco;\n- **khao noi**: corta, in clinch ravvicinato.\n\nLa **potenza** viene dall’anca che si spinge in avanti, non dal solo movimento della gamba. A vuoto si lavorano **forma, ritmo e equilibrio** su una gamba, tenendo il busto stabile.' },
      { h: 'Sicurezza', b: '- **Collo**: le prese alla nuca possono sollecitare le vertebre cervicali. A vuoto **non tirare mai** con forza su te stesso o su oggetti per «simulare»; immagina il gesto.\n- **Ginocchia e anche**: salta il lavoro se senti dolore; fai riscaldamento articolare.\n- **Pavimento**: antiscivolo, per l’equilibrio su una gamba.\n- Il lavoro con partner (clinch reale, ginocchiate al corpo) richiede **istruttore qualificato** e protezioni.\n\n> Ciò che il tuo corpo non ha ancora provato sotto resistenza, l’allenamento solitario non può certificarlo.' },
      { h: 'Come inserirlo nell’allenamento', b: '- **2 minuti** di postura e passi in clinch immaginario.\n- **2 minuti** di ginocchiate lente a vuoto, alternando gamba destra e sinistra.\n- **1 minuto** di respirazione e nota nel diario.\n\nControlla in particolare: **equilibrio su una gamba**, **spalle rilassate**, **respiro regolare**. Aumenta la velocità solo quando il gesto è stabile.' }
    ],
    exercises: [
      mc('Che cos’è il plum clinch?', ['Presa alle gambe', 'Presa con le mani dietro la nuca dell’altro', 'Una proiezione', 'Un colpo di gomito'], 1, 'Controllo di testa e postura.'),
      mc('In competizione, se nel clinch non c’è azione...', ['Si continua', 'L’arbitro può separare', 'Si fermano le ginocchiate', 'Si cambia categoria'], 1, 'Regole di arbitraggio.'),
      mc('La postura corretta è...', ['Schiena curva', 'Schiena lunga, ginocchia leggermente flesse', 'Gambe tese', 'Testa bassa'], 1, 'Postura compatta e radicata.'),
      mc('Khao trong è una ginocchiata...', ['Curva', 'Diretta', 'Laterale', 'Bassa'], 1, 'Diretta.'),
      mc('Khao noi è...', ['Corta, in clinch ravvicinato', 'Lunga e curva', 'Un calcio', 'Una proiezione'], 0, 'Corta.'),
      mc('La potenza di una ginocchiata viene...', ['Dal solo ginocchio', 'Dall’anca', 'Dal polso', 'Dalla caviglia'], 1, 'L’anca spinge in avanti.'),
      fill('Completa: il clinch thai si chiama plum ___.', ['clinch'], 'Plum clinch.'),
      fill('Completa: sono ginocchiate ___ trong e khong.', ['khao'], 'Khao.'),
      order('Ordina la postura', ['schiena', 'lunga', 'gomiti', 'vicini'], 'Postura base.')
    ],
    test: [
      mc('Perché i piedi non vanno incrociati?', ['Per estetica', 'Per non perdere equilibrio', 'Per regola', 'Non importa'], 1, 'Base più stabile.'),
      mc('Quale lavoro richiede istruttore?', ['Postura a vuoto', 'Clinch reale con partner', 'Respirazione', 'Mobilità'], 1, 'Partner e protezioni.'),
      mc('Le regole del clinch...', ['Sono identiche ovunque', 'Variano per federazione', 'Non esistono', 'Sono nel judo'], 1, 'Verifica sempre le regole in vigore.'),
      fill('Completa: khao khong è una ginocchiata ___.', ['curva'], 'Ad arco.'),
      mc('Per una ginocchiata stabile serve...', ['Gamba d’appoggio radicata', 'Salto', 'Ginocchio rigido', 'Testa bassa'], 0, 'Equilibrio.')
    ] });

  T({ id: 'jud-th-autovalutazione-video', stage: 'L3', title: 'Autovalutazione con video', summary: 'Come filmarsi, checklist da tre punti per famiglia, come evitare l’autoinganno e i limiti.',
    objectives: ['Organizzare una ripresa utile', 'Usare una checklist per valutare il gesto', 'Riconoscere i limiti dell’autovalutazione'],
    pages: [
      { h: 'Perché filmarsi', b: 'La **percezione del movimento** (propriocezione) è imprecisa: spesso senti di fare una cosa e ne fai un’altra. Il video offre un **feedback esterno** oggettivo.\n\nVantaggi:\n- vedi **angoli** e **posture** che non senti;\n- puoi rivedere al **rallentatore**;\n- puoi confrontare sessioni nel tempo.\n\nUn video non è un giudizio: è **un dato** da interpretare con calma.' },
      { h: 'Come girare', b: '- **Telecamera ferma** (cavalletto o appoggio stabile), non tenuta in mano.\n- **Altezza**: all’altezza del bacino, ben inquadrato dalla testa ai piedi.\n- **Distanza**: abbastanza per vedere tutto il movimento, comprese le braccia estese.\n- **Luce** davanti o laterale, non controluce.\n- **Due angoli**: frontale e laterale (90°), anche in riprese separate.\n- **Sfondo** semplice, vestiti aderenti per vedere le linee del corpo.\n\nUsa una modalità di **rallentatore** se disponibile.' },
      { h: 'Checklist: tecniche d’anca e di spalla', b: 'Per o-goshi, harai-goshi, koshi-guruma, seoi-nage:\n1. **Ginocchia flesse** all’ingresso, schiena eretta.\n2. **Piedi** ben posizionati davanti all’immaginario avversario, non troppo lontani.\n3. **Rotazione** fluida del bacino, con la testa che segue il gesto.\n\nChecklist breve = valutazione più affidabile: tre punti, sì o no.' },
      { h: 'Checklist: tecniche di gamba', b: 'Per o-soto-gari, o-uchi-gari, ko-uchi-gari, ko-soto-gari, uchi-mata:\n1. **Piede d’appoggio** vicino e peso su di esso.\n2. **Busto e spalle** accompagnano la direzione, non restano indietro.\n3. **Gamba che lavora** fluida, senza saltelli o sbilanciamenti.\n\nPer le cadute (**ukemi**): mento sul petto, battuta a 30–45°, gambe sollevate. Per il **lavoro a terra**: schiena protetta, passaggi fluidi.' },
      { h: 'Come evitare l’autoinganno', b: '- **Bias di conferma**: cerchi solo ciò che va bene. Rispondi **a ogni punto della checklist**, non scegliere.\n- **Giudizio a caldo**: guarda il video il **giorno dopo**.\n- **Confronto con modelli**: non con campioni di alto livello, ma con la **descrizione del gesto** che trovi nell’app.\n- **Un solo parametro** per volta: troppe correzioni confondono.\n- **Dati**: tieni il conteggio dei «sì» per ogni punto nel diario.\n\nSe un punto resta «no» per tre sessioni, riduci la velocità o torna a un gradino precedente.' },
      { h: 'Limiti del video', b: '- Un video non misura **forza, tempismo con un avversario, resistenza**.\n- Non vede **l’interno**: tensione, respiro, sensazioni.\n- Non sostituisce un **occhio esperto**: un istruttore nota dettagli che non sai cercare.\n- Può creare **sicurezza eccessiva**: un gesto pulito a vuoto non dimostra che funzioni contro un partner.\n\nUsa il video per **forma**, non per validare l’efficacia.' },
      { h: 'Privacy e abitudini', b: '- Filma in uno spazio **privato** e conserva i file in modo sicuro.\n- Non pubblicare riprese in cui compaiono altre persone senza permesso.\n- Cancella i video vecchi che non servono più.\n- Ogni 4–6 settimane confronta la sessione attuale con una vecchia per **vedere i progressi**.\n\nL’app non ha funzioni video: è un lavoro che fai tu, con il tuo dispositivo e le tue regole.' }
    ],
    exercises: [
      mc('Perché filmarsi aiuta?', ['Offre feedback esterno oggettivo', 'Sostituisce l’istruttore', 'Rende più forti', 'Elimina gli errori'], 0, 'La propriocezione è imprecisa.'),
      mc('La telecamera deve essere...', ['In mano', 'Ferma su un appoggio', 'In movimento', 'Controluce'], 1, 'Cavalletto o appoggio.'),
      mc('Quanti punti ha una checklist efficace?', ['Uno', 'Tre', 'Venti', 'Nessuno'], 1, 'Breve e verificabile.'),
      mc('Meglio guardare il video...', ['Subito, a caldo', 'Il giorno dopo', 'Mai', 'Solo in gara'], 1, 'Riduce il giudizio emotivo.'),
      mc('Il bias di conferma consiste nel...', ['Cercare solo ciò che va bene', 'Filmarsi troppo', 'Usare due angoli', 'Dormire poco'], 0, 'Autoinganno.'),
      mc('Un video può dimostrare che una tecnica funziona su un avversario?', ['Sì', 'No', 'Solo a rallentatore', 'Se è nitido'], 1, 'Non c’è avversario nel video a vuoto.'),
      fill('Completa: servono due angoli: frontale e ___.', ['laterale'], 'Frontale e laterale.'),
      fill('Completa: per i gesti d’anca si controllano le ___ flesse.', ['ginocchia'], 'Prima voce della checklist.'),
      order('Ordina il flusso', ['filmare', 'rivedere', 'annotare', 'correggere'], 'Ciclo di miglioramento.')
    ],
    test: [
      mc('Quale distanza di ripresa è adatta?', ['Così vicino da vedere solo il viso', 'Tutto il corpo e i movimenti ampi', 'Solo i piedi', 'Qualsiasi'], 1, 'Si deve vedere tutto il gesto.'),
      mc('Se un punto resta «no» per tre sessioni...', ['Lo ignori', 'Riduci velocità o torni a un gradino precedente', 'Aumenti la velocità', 'Smetti'], 1, 'Semplifica.'),
      mc('Il video non misura...', ['Posture', 'Angoli', 'Tempismo contro un avversario', 'Ritmo'], 2, 'Serve un partner.'),
      fill('Completa: filma con vestiti ___ per vedere le linee del corpo.', ['aderenti'], 'Si vedono meglio le linee.'),
      mc('Quando pubblicare video con altre persone?', ['Sempre', 'Solo con il loro permesso', 'Mai in alcun caso', 'Solo di notte'], 1, 'Privacy.')
    ] });

  /* ---------- L4 ---------- */
  T({ id: 'jud-th-concatenazioni-renraku', stage: 'L4', title: 'Concatenazioni: renraku-waza', summary: 'Combinazioni, cambio di direzione, finta; il concetto di kaeshi-waza.',
    objectives: ['Spiegare la logica di una combinazione', 'Usare cambio di direzione e finta nel lavoro a vuoto', 'Capire che cosa sono i kaeshi-waza'],
    pages: [
      { h: 'Perché si combina', b: 'Un avversario reale **reagisce**: se attacchi in un modo, si difende in quel modo. Le **concatenazioni** (**renraku-waza**, 連絡技) sfruttano questa reazione: il primo attacco **crea** la condizione per il secondo.\n\nIl principio è semplice: la difesa all’attacco A **apre** l’attacco B.\n\n> Non è «attaccare più volte»: è una sequenza in cui il primo gesto prepara il secondo.' },
      { h: 'Combinazioni per direzione opposta', b: 'Un classico: **avanti poi indietro**.\n- Attacco in **avanti** (es. un ingresso d’anca): l’altro si irrigidisce e si **piega all’indietro** per resistere.\n- Quella reazione porta il peso all’indietro: si passa a una **falciata** (es. o-uchi-gari o o-soto-gari).\n\nOppure: primo attacco alla **gamba**, l’altro solleva il piede; il secondo attacca la gamba opposta.\n\nNel lavoro a vuoto, **visualizza la reazione** e collega i gesti senza fermarti.' },
      { h: 'Cambio di direzione', b: 'Il **cambio di direzione** significa spostare la direzione del movimento dopo un primo tentativo.\n\nEsempi:\n- da una direzione **diagonale avanti** a una **diagonale indietro** (con un passo in ritmo);\n- da una rotazione **in senso orario** a una **antiorario** con il bacino.\n\nÈ fondamentale **non fermarsi** tra i due gesti: l’energia del primo alimenta il secondo. Il passo intermedio è parte dell’ingresso.' },
      { h: 'La finta', b: 'La **finta** è un gesto simulato per provocare una reazione. Funziona solo se **credibile**: se non è convincente, l’altro non reagisce.\n\nCaratteristiche:\n- **ampiezza** e **ritmo** simili a un vero attacco;\n- **postura** che non svela il secondo gesto;\n- **breve**: ritardare dà all’altro il tempo di ristabilirsi.\n\nNel lavoro a vuoto allenati a fare **un gesto grande e uno rapido**, in cascata.' },
      { h: 'Il ritmo', b: 'Le combinazioni hanno un **ritmo**: 1-2, o 1-pausa-2. Esempi:\n- **1-2 veloce**: due gesti in rapida successione;\n- **1-pausa-2**: il primo gesto fa reagire; la pausa lascia spazio alla reazione; il secondo attacca.\n\nAlternare i ritmi allena **adattabilità**. Nell’app usa un conteggio mentale: «uno… due» e variali.' },
      { h: 'Kaeshi-waza: il concetto', b: '**Kaeshi-waza** (返技) sono le **contro-tecniche**: si usa l’attacco dell’altro per proiettarlo. Si basano su **tempismo** e sul fatto che, mentre attacca, anche l’altro è in **disequilibrio**.\n\nSono tecniche **avanzate** che si studiano **solo con partner e istruttore**. Qui interessa il concetto: ogni attacco ha un **momento di vulnerabilità**, da conoscere per attaccare con sicurezza e non farsi sorprendere.\n\nNell’app **non si allenano** kaeshi-waza: richiedono la pressione e la resistenza di un avversario reale.' },
      { h: 'Come costruire una combinazione', b: '1. Scegli **due tecniche compatibili** (direzioni opposte o stesso ingresso).\n2. Esegui **ciascuna da sola** e consolida la forma.\n3. Collegale **lentamente**, con il passo intermedio.\n4. Aumenta il **ritmo** gradualmente.\n5. Varia: **lato**, ritmo, tecnica finale.\n\nUna combinazione efficace è **semplice**: due o tre gesti ben fatti valgono più di cinque confusi.' }
    ],
    exercises: [
      mc('Renraku-waza sono...', ['Contro-tecniche', 'Concatenazioni di tecniche', 'Cadute', 'Immobilizzazioni'], 1, 'Combinazioni.'),
      mc('Quale è una coppia classica?', ['Avanti poi indietro', 'Solo in avanti', 'Solo a terra', 'Nessuna'], 0, 'Direzioni opposte.'),
      mc('Perché la finta deve essere credibile?', ['Per eleganza', 'Altrimenti l’altro non reagisce', 'Per regola', 'Non importa'], 1, 'Deve provocare una reazione.'),
      mc('Kaeshi-waza sono...', ['Contro-tecniche', 'Tecniche a terra', 'Saluti', 'Prese'], 0, 'Kaeshi = ritorno, contro.'),
      mc('I kaeshi-waza nell’app...', ['Si allenano in coppia', 'Non si allenano', 'Si fanno con elastico', 'Sono obbligatori'], 1, 'Richiedono partner.'),
      mc('Tra i due gesti di una combinazione...', ['Ci si ferma', 'Non ci si ferma, c’è il passo intermedio', 'Si respira a lungo', 'Si cambia presa sempre'], 1, 'Continuità.'),
      fill('Completa: renraku-waza = ___ di tecniche.', ['concatenazioni', 'combinazioni', 'collegamenti'], 'Renraku = collegamento.'),
      fill('Completa: kaeshi-waza sono ___-tecniche.', ['contro'], 'Contro-tecniche.'),
      order('Ordina il processo', ['singole', 'collegate', 'lente', 'veloci'], 'Dal semplice al complesso.')
    ],
    test: [
      mc('La difesa a un attacco può...', ['Aprire un secondo attacco', 'Chiudere sempre', 'Non cambiare nulla', 'Impedire ogni tecnica'], 0, 'Principio della combinazione.'),
      mc('Meglio una combinazione con...', ['Due o tre gesti ben fatti', 'Dieci gesti', 'Nessun gesto', 'Gesti confusi'], 0, 'Semplicità.'),
      mc('La finta deve essere...', ['Lenta', 'Breve e credibile', 'Lunghissima', 'Invisibile'], 1, 'Evita che l’altro si ristabilisca.'),
      fill('Completa: 1-pausa-2 è un ___ della combinazione.', ['ritmo'], 'Ritmo.'),
      mc('Perché il kaeshi-waza è avanzato?', ['Richiede tempismo e partner', 'È più facile', 'È solo teoria', 'Non esiste'], 0, 'Serve esperienza.')
    ] });

  /* ---------- L5 ---------- */
  T({ id: 'jud-th-dal-solo-allo-istruttore', stage: 'L5', title: 'Dal solo all’istruttore', summary: 'Che cosa l’allenamento solitario non può provare, come trovare un club qualificato, domande da fare, uchikomi/nage-komi/randori.',
    objectives: ['Elencare ciò che l’allenamento solitario non può dimostrare', 'Scegliere un club e un istruttore con criteri chiari', 'Distinguere uchikomi, nage-komi e randori'],
    pages: [
      { h: 'Che cosa puoi aver costruito da solo', b: 'Con il lavoro a vuoto puoi aver sviluppato:\n- **equilibrio e coordinazione**;\n- **memoria motoria** dei gesti;\n- **cadute** a basso livello, in sicurezza;\n- **mobilità** e condizione di base;\n- **vocabolario** (nomi, principi, classificazione).\n\nSono ottime fondamenta: ti faranno risparmiare tempo con un istruttore. Ma **non sono** abilità di judo complete.' },
      { h: 'Che cosa non puoi dimostrare da solo', b: '- **Kuzushi reale**: sbilanciare qualcuno che resiste e reagisce.\n- **Tempismo** con un partner in movimento.\n- **Cadute dalle altezze alte** su proiezione reale (essere proiettato).\n- **Gestione della pressione**: peso, resistenza, fatica.\n- **Sicurezza di coppia**: segnali di resa, controllo del partner.\n- **Leve e strangolamenti** in sicurezza.\n\nUn gesto bello a vuoto può **fallire** contro un corpo reale. Non è colpa tua: è la natura della materia.' },
      { h: 'Trovare un club qualificato', b: 'Cerca:\n- **affiliazione** a una federazione riconosciuta nel tuo paese;\n- **istruttori con qualifica** (in Italia, tecnici federali; verifica sul sito della federazione);\n- **assicurazione** per i praticanti;\n- **tatami adeguato**, spazio pulito;\n- **gruppi per fascia d’età e livello**, con corso per principianti.\n\nDiffida di chi promette risultati rapidi, **non fa pratica graduale** o non dà importanza a cadute e sicurezza.' },
      { h: 'Che cosa chiedere', b: 'Prima di iscriverti, prova una **lezione di prova** e chiedi:\n- «Quali **qualifiche** hanno gli istruttori?»\n- «Come si lavora con i **principianti**? Si parte dalle cadute?»\n- «Quanti allievi per istruttore?»\n- «Come gestite **infortuni** e controlli medici?»\n- «Serve un **certificato medico** per attività sportiva?» (di solito sì)\n- «Qual è il **costo**, e c’è assicurazione inclusa?»\n\nIl modo in cui rispondono dice molto.' },
      { h: 'Uchikomi', b: '**Uchikomi** (打込) è la **ripetizione dell’ingresso** di una tecnica con un partner che sta fermo o si muove leggermente, **senza proiettare**. Allena forma, ritmo e kuzushi.\n\nL’elastico che incontri nell’app (band uchikomi) ne è un **equivalente solitario** per il gesto di ingresso, ma non per il contatto reale.\n\nÈ il primo livello di lavoro in coppia: il partner è **cooperante**.' },
      { h: 'Nage-komi e randori', b: '**Nage-komi** (投込) è la ripetizione della tecnica **con proiezione completa**: chi proietta (tori) e chi cade (uke) collaborano; chi cade pratica gli **ukemi** reali.\n\n**Randori** (乱取り, «presa libera») è l’allenamento **libero**: entrambi cercano di proiettare e controllare, **con regole di sicurezza**, intensità condivisa e rispetto.\n\nIn ordine di difficoltà: **uchikomi → nage-komi → randori**. Il randori è il banco di prova reale; non si anticipa senza passare dai livelli precedenti.' },
      { h: 'Perché l’app non basta', b: 'L’app è **un supporto**: aiuta con teoria, memoria motoria, ritmo, routine. **Non può**:\n- correggere un errore che non vedi;\n- controllare la qualità delle cadute alte;\n- fornire un partner;\n- adattarsi al tuo corpo e ai tuoi limiti in tempo reale come un istruttore.\n\n**Passo successivo**: porta con te quello che hai imparato; con un istruttore progredirai molto più in fretta e in sicurezza.\n\nJita kyoei: si cresce insieme agli altri.' }
    ],
    exercises: [
      mc('Che cosa NON può dimostrare l’allenamento solitario?', ['Memoria motoria', 'Capacità di sbilanciare un partner che resiste', 'Mobilità', 'Vocabolario'], 1, 'Serve un partner reale.'),
      mc('Che cos’è l’uchikomi?', ['Ripetizione dell’ingresso senza proiettare', 'Combattimento libero', 'Caduta alta', 'Saluto'], 0, 'Ingresso ripetuto.'),
      mc('Nage-komi significa...', ['Ripetere la tecnica con proiezione completa', 'Solo entrare', 'Solo cadere', 'Contare'], 0, 'Con proiezione.'),
      mc('Randori è...', ['Allenamento libero con regole di sicurezza', 'Un kata', 'Un saluto', 'Una gara ufficiale'], 0, 'Presa libera.'),
      mc('Qual è l’ordine di difficoltà?', ['Randori, uchikomi, nage-komi', 'Uchikomi, nage-komi, randori', 'Nage-komi, randori, uchikomi', 'Non c’è'], 1, 'Dal controllato al libero.'),
      mc('Cosa verificare in un club?', ['Solo il prezzo', 'Qualifica degli istruttori e assicurazione', 'Solo il colore del tatami', 'Nulla'], 1, 'Qualità e sicurezza.'),
      fill('Completa: chi proietta nel judo si chiama ___.', ['tori'], 'Tori proietta, uke cade.'),
      fill('Completa: chi cade si chiama ___.', ['uke'], 'Uke.'),
      order('Ordina i livelli', ['uchikomi', 'nage-komi', 'randori'], 'Ordine di difficoltà crescente.')
    ],
    test: [
      mc('Che cosa distingue nage-komi da uchikomi?', ['La proiezione completa', 'Il saluto', 'Il costo', 'La divisa'], 0, 'Nage-komi si completa.'),
      mc('Un buon club offre...', ['Corsi per principianti con cadute graduali', 'Randori subito', 'Nessuna regola', 'Promesse rapide'], 0, 'Progressione.'),
      mc('L’elastico dell’app è equivalente a...', ['Un uchikomi solitario', 'Un randori', 'Una gara', 'Un kata'], 0, 'Ripetizione dell’ingresso.'),
      fill('Completa: «randori» significa presa ___.', ['libera'], 'Allenamento libero.'),
      mc('Perché un’app non basta?', ['Non corregge ciò che non vedi né fornisce un partner', 'È troppo breve', 'Non ha immagini', 'È gratuita'], 0, 'Limiti dell’autoformazione.')
    ] });
})(window.ST = window.ST || {});
