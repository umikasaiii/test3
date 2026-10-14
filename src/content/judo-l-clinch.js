/* Clinch e ginocchiate (muay thai) — 4 lezioni approfondite, SOLO a vuoto. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;

  /* ---------- 1. Plum clinch ---------- */
  C.addTopic({ id: 'jud-plum-clinch', subject: 'grp', stage: 'L1', title: 'Clinch plum: postura e controllo della testa (a vuoto)', minutes: 10,
    summary: 'Il clinch plum del muay thai simulato da solo: mani alla nuca, gomiti, postura e spostamenti, senza alcun contatto.',
    objectives: ['Descrivere la posizione di mani, gomiti e avambracci nel clinch plum', 'Mantenere postura eretta, ginocchia morbide e peso al centro mentre ti sposti', 'Riconoscere gli errori più comuni e correggerli con un’autoverifica video'],
    pages: [
      { h: 'Che cos’è il clinch plum', b: 'Nel **muay thai** il corpo a corpo si chiama **clinch**. La sua forma più nota è il **plum clinch** (in thai, *khao plam*): le due mani si chiudono dietro la nuca dell’avversario e i gomiti si stringono davanti, come a «cogliere una prugna dall’albero».\n\nIn questa lezione lo lavori **da solo, a vuoto**: simuli la posizione davanti a uno spazio libero, senza nessuno e senza oggetti. Il clinch è la base da cui poi nascono le ginocchiate: *khao trong* (diretta), *khao khong* (curva), *khao noi* (corta).' },
      { h: 'Posizione di mani e braccia', b: 'Le mani vanno **dietro la nuca** dell’avversario immaginario, all’altezza della base del cranio:\n- dita **intrecciate** oppure **a coppa**, a seconda di ciò che risulta più comodo e senza tensione nei polsi;\n- **gomiti stretti** davanti al petto, vicini fra loro;\n- **avambracci** appoggiati idealmente sulle clavicole;\n- spalle rilassate, non sollevate verso le orecchie.\n\n> Esempio: guardati le mani. Se i gomiti sono più larghi delle spalle, hai perso la «chiusura».' },
      { h: 'Postura e base', b: 'La struttura parte dai piedi:\n- piedi **alla larghezza delle spalle**, uno leggermente avanti all’altro;\n- **ginocchia flesse**, mai bloccate: la **gamba d’appoggio morbida** è la tua assicurazione per l’equilibrio;\n- **busto eretto**, mento leggermente rientrato, sguardo avanti;\n- **peso al centro**, sulle avampiedi, non sui talloni.\n\nUn bacino «sotto» di te, né spinto troppo indietro né troppo avanti, ti permette di cambiare direzione in ogni istante.' },
      { h: 'Il controllo: schiena e gomiti, non solo braccia', b: 'Per «chiudere» la testa immaginaria spingi i **gomiti verso il basso e leggermente avanti**. La forza non viene dalle sole braccia: viene dalla **schiena dritta** e dal **bacino** che si abbassa di pochi centimetri.\n\n- **Livello:** abbassarti un poco (*level change*) senza curvare la schiena.\n- **Respiro:** espira mentre «chiudi», non trattenerlo.\n- Le braccia restano **attive ma non rigide**.\n\nSe senti tirare la parte alta delle spalle, stai usando troppo le braccia.' },
      { h: 'Spostamenti a vuoto', b: 'Dalla postura plum muoviti con **piccoli passi**: avanti, indietro, laterale, in cerchio.\n\n- Il piede che parte è quello più vicino alla direzione, l’altro lo segue **senza incrociarsi**.\n- In pivot ruoti sull’**avampiede** (la **palla del piede**), mai sul tallone né a gamba bloccata.\n- La testa resta alta e la distanza fra i gomiti **non cambia** mentre ti muovi.\n\nIn una competizione le regole consentono di colpire il corpo con le ginocchia dal clinch; qui, invece, **non si colpisce nulla**: ogni gesto resta a vuoto.' },
      { h: 'Errori comuni e correzioni', b: '- **Gomiti larghi** → riportali stretti, quasi a toccarsi davanti al petto.\n- **Schiena curva** → mento rientrato, petto aperto, sguardo avanti.\n- **Peso sui talloni** → sposta il peso sulle avampiedi; senti le dita premere il pavimento.\n- **Mento alto** → abbassalo leggermente, la nuca resta lunga.\n- **Spalle alzate** → espira e lasciale scendere.\n- **Ginocchia bloccate** → flettile sempre un poco.' },
      { h: 'Esercizi e progressioni', b: '1. **Postura statica**: 5 respiri nella posizione plum, controllando gomiti e peso.\n2. **Passi lenti**: 4 passi avanti, 4 indietro, mantenendo la postura.\n3. **Level change**: scendi di qualche centimetro e risali con la schiena dritta (5 ripetizioni).\n4. **Pivot**: ruota di 90° sull’avampiede e torna.\n5. **Combinazione**: postura → passo laterale → pivot → ritorno.\n\nProgredisci **solo** se la forma resta pulita. Niente sacco e niente partner senza un istruttore qualificato.' },
      { h: 'Autoverifica con il video e sicurezza', b: 'Appoggia il telefono su un supporto e registra **di fronte** e **di lato** (senza riferirti a link di altri). Controlla:\n- gomiti stretti e mani sulla nuca immaginaria;\n- schiena dritta, mento rientrato;\n- peso al centro, ginocchia morbide.\n\n**Sicurezza:** lavora solo da solo, in uno spazio libero di circa 2 m × 2 m, con scarpe da ginnastica o piedi nudi su fondo non scivoloso. **Niente sparring, niente contatto.** Sacco o partner solo con un istruttore qualificato. Questa lezione non insegna né promette efficacia in un combattimento.' },
      { h: 'Riepilogo', b: '- Plum = mani dietro la nuca, **gomiti stretti**, avambracci sulle clavicole.\n- Piedi alla larghezza delle spalle, **ginocchia morbide**, peso al centro.\n- Il controllo viene da **schiena e bacino**, non dalle sole braccia.\n- Pivot sull’**avampiede**; passi piccoli; nessun contatto.\n- Verifica la forma con un video e, per qualunque lavoro con sacco o partner, rivolgiti a un istruttore.' }
    ],
    exercises: [
      mc('Dove si posizionano le mani nel clinch plum?', ['Sui fianchi', 'Dietro la nuca dell’avversario immaginario', 'Sulle ginocchia', 'Sulle spalle in alto'], 1, 'Il plum chiude la nuca con le due mani.'),
      mc('Come devono essere i gomiti?', ['Larghi e alti', 'Stretti, vicini davanti al petto', 'Dietro la schiena', 'Completamente tesi'], 1, 'Gomiti stretti = chiusura efficace della posizione.'),
      mc('Come resta il ginocchio d’appoggio?', ['Bloccato', 'Morbido, leggermente flesso', 'Iperesteso', 'Sollevato da terra'], 1, 'Morbido protegge le articolazioni e l’equilibrio.'),
      order('Metti in ordine la preparazione', ['piedi', 'ginocchia flesse', 'busto eretto', 'mani alla nuca', 'gomiti stretti'], 'Si costruisce la base dal basso verso l’alto.'),
      fill('Il pivot si esegue sull’____ del piede (la palla).', ['avampiede', 'avampiedi'], 'Il pivot avviene sull’avampiede, non sul tallone.'),
      mc('Quale errore indica che il peso è sbilanciato?', ['Peso sui talloni', 'Peso al centro', 'Ginocchia morbide', 'Gomiti stretti'], 0, 'Il peso va sulle avampiedi, al centro.'),
      fill('Il clinch plum in thai si chiama khao ____.', ['plam'], 'Khao plam: «cogliere la prugna».'),
      mc('Da dove viene principalmente il controllo?', ['Dalle sole braccia', 'Da schiena dritta e bacino', 'Dalla testa', 'Dalle dita'], 1, 'Il controllo nasce da struttura, non da forza delle braccia.'),
      mc('Chi può introdurre sacco o partner nel lavoro di clinch?', ['Nessuno serve', 'Un istruttore qualificato', 'Un amico qualsiasi', 'Chiunque dopo una settimana'], 1, 'Sacco e partner solo con un istruttore qualificato.'),
      order('Ordina il pivot', ['ruota', 'sull’avampiede', 'a ginocchio morbido', 'mantieni i gomiti stretti'], 'Ruota sull’avampiede, ginocchio morbido, gomiti invariati.')
    ],
    test: [
      mc('Che cosa significa «level change» nel clinch a vuoto?', ['Saltare', 'Abbassarsi di poco con la schiena dritta', 'Cambiare partner', 'Chiudere gli occhi'], 1),
      mc('Quale correzione si applica ai gomiti larghi?', ['Allargarli ancora', 'Riportarli stretti davanti al petto', 'Tenerli dietro la schiena', 'Bloccarli'], 1),
      fill('In allenamento solitario il contatto è ____.', ['assente', 'nullo', 'escluso', 'vietato'], 'Nessun contatto: tutto a vuoto.'),
      mc('Quale posizione dei piedi è corretta?', ['Uniti e rigidi', 'Larghezza delle spalle, uno leggermente avanti', 'Incrociati', 'Molto larghi e dritti'], 1),
      mc('Per l’autoverifica video si registra…', ['solo da dietro', 'di fronte e di lato', 'solo i piedi', 'nessuna angolazione'], 1),
      mc('Quale delle seguenti è una funzione del respiro?', ['Trattenerlo sempre', 'Espirare mentre si chiude la posizione', 'Respirare solo col naso chiuso', 'Fermarsi'], 1)
    ] });

  /* ---------- 2. Khao trong ---------- */
  C.addTopic({ id: 'jud-khao-trong', subject: 'grp', stage: 'L1', title: 'Khao trong: ginocchiata diretta in clinch (a vuoto)', minutes: 10,
    summary: 'La ginocchiata diretta del muay thai, eseguita da solo in aria a quota vita: spinta del bacino, punta del piede in giù, appoggio morbido.',
    objectives: ['Eseguire la sequenza postura, spinta del bacino, risalita del ginocchio e ritorno a vuoto', 'Mantenere il piede d’appoggio sull’avampiede con ginocchio morbido', 'Autocorreggere errori di equilibrio, bacino e piede'],
    pages: [
      { h: 'Che cos’è khao trong', b: '**Khao** in thai significa «ginocchio»; **trong** significa «dritto». La **khao trong** è la **ginocchiata diretta**: il ginocchio sale in linea retta, in avanti e verso l’alto, spinto dal bacino.\n\nNel muay thai è una delle ginocchiate fondamentali, spesso usata dal clinch plum. In questa lezione la lavori **solo da solo, a vuoto, nell’aria**, per imparare movimento, equilibrio e controllo. Non si colpisce nulla.' },
      { h: 'Il bersaglio nelle regole e il lavoro a vuoto', b: 'Nelle regole di competizione, la ginocchiata si indirizza al **corpo** dell’avversario (tronco, ventre, costole), secondo i regolamenti.\n\nNel tuo allenamento solitario l’obiettivo è **un ventre immaginario**: fermi il ginocchio **a quota vita / costole**, mai più in alto, e riporti il piede a terra. Il ginocchio non va portato verso il viso né verso il suolo.' },
      { h: 'Postura di partenza', b: 'Parti dalla posizione plum (vedi la lezione precedente):\n- mani immaginarie dietro la nuca, **gomiti stretti**;\n- piedi alla larghezza delle spalle, ginocchia flesse;\n- busto eretto o **leggermente inclinato all’indietro** al momento del colpo;\n- peso sulle avampiedi, sguardo avanti.\n\nTira idealmente la testa verso il basso con i gomiti: è l’intenzione che organizza il corpo.' },
      { h: 'Spinta del bacino e risalita del ginocchio', b: 'La forza non viene dalla gamba isolata: viene dal **bacino**.\n1. **Spingi il bacino in avanti**.\n2. Il **ginocchio sale** verso il ventre immaginario, in linea retta.\n3. Il **piede resta disteso, con la punta in giù** (*toe pointed*), il polpaccio rilassato.\n4. Il busto si inclina un poco all’indietro per bilanciare.\n\n> Immagina una molla: bacino avanti, ginocchio su, punta giù.' },
      { h: 'Il piede d’appoggio', b: 'Il piede d’appoggio è il tuo motore di equilibrio:\n- ruota sull’**avampiede** (la **palla del piede**), il tallone si alza naturalmente;\n- il **ginocchio d’appoggio resta morbido**, mai bloccato;\n- il peso è centrato sulla gamba d’appoggio, ma il tronco non si «affloscia» all’indietro;\n- il piede di appoggio **non salta**.\n\nSe perdi equilibrio, la causa spesso è un ginocchio d’appoggio bloccato o il peso sui talloni.' },
      { h: 'Errori comuni e correzioni', b: '- **Peso sui talloni** → torna sulle avampiedi.\n- **Piede non disteso** (punta in su) → disteso, punta in giù.\n- **Ginocchio d’appoggio bloccato** → piegalo sempre.\n- **Bacino che non avanza** → spingilo in avanti prima di alzare il ginocchio.\n- **Perdita di equilibrio** → riduci l’altezza, rallenta e riparti.\n- **Ginocchio troppo alto** → ferma a vita/costole.' },
      { h: 'Esercizi e progressioni', b: '1. **4 tempi lenti**: postura, bacino, ginocchio su, ritorno.\n2. **Alternate** destra e sinistra, 5 per lato.\n3. **Pausa** di un secondo in alto per verificare l’equilibrio.\n4. **Serie di 5** con controllo della postura tra una ripetizione e l’altra.\n\nRiposa fra le serie. Se la forma peggiora, fermati. **Non usare sacco né partner** senza un istruttore qualificato: qui non c’è né sparring né contatto.' },
      { h: 'Autoverifica con il video e sicurezza', b: 'Registra una serie **di lato**: controlla che il ginocchio salga a quota vita, la punta sia in giù e il ginocchio d’appoggio resti morbido. Di fronte: gomiti stretti e busto stabile.\n\n**Sicurezza:** spazio libero di 2 m × 2 m, superficie non scivolosa, **solo in aria**; ginocchio sempre fermo a vita/costole; se il ginocchio d’appoggio duole, **fermati**. Questa lezione non afferma alcuna efficacia in combattimento.' },
      { h: 'Riepilogo', b: '- **Khao trong** = ginocchiata diretta (*trong* = dritto).\n- Sequenza: postura, **bacino avanti**, ginocchio su, **punta in giù**, ritorno.\n- Appoggio su **avampiede** con **ginocchio morbido**.\n- A vuoto si ferma a **quota vita/costole**.\n- Solo da soli, in aria; sacco e partner solo con un istruttore.' }
    ],
    exercises: [
      mc('Che cosa significa «trong» in khao trong?', ['Curvo', 'Corto', 'Dritto', 'Alto'], 2, 'Trong = dritto.'),
      mc('Che cosa spinge la ginocchiata diretta?', ['Il bacino', 'Il polso', 'La testa', 'Il collo'], 0, 'Il bacino guida la salita del ginocchio.'),
      mc('Dove si ferma il ginocchio nel lavoro a vuoto?', ['Sopra la testa', 'A quota vita/costole', 'A terra', 'All’altezza del naso'], 1, 'Quota vita/costole in aria.'),
      order('Ordina la sequenza', ['postura plum', 'spingi il bacino', 'ginocchio su', 'punta in giù', 'ritorno'], 'Dall’impostazione al ritorno controllato.'),
      fill('Il piede d’appoggio ruota sull’____ con ginocchio morbido.', ['avampiede'], 'La palla del piede è il perno.'),
      mc('Come deve essere il piede che sale?', ['Punta in su', 'Disteso, punta in giù', 'A martello', 'Rigido a tallone'], 1, 'Punta in giù (toe pointed).'),
      mc('Che cosa significa «khao»?', ['Gomito', 'Pugno', 'Ginocchio', 'Calcio'], 2, 'Khao = ginocchio.'),
      fill('Se il ginocchio d’appoggio duole, ci si ____.', ['ferma', 'si ferma', 'fermi'], 'Mai continuare con dolore.'),
      mc('Qual è un errore comune?', ['Ginocchio d’appoggio bloccato', 'Peso al centro', 'Bacino che avanza', 'Piede disteso'], 0, 'Un appoggio bloccato compromette l’equilibrio.'),
      order('Ordina l’autoverifica', ['registra di lato', 'controlla l’altezza', 'controlla la punta', 'correggi', 'riprova'], 'Ciclo di verifica e correzione.')
    ],
    test: [
      mc('Quando fai la ginocchiata a vuoto, che cosa colpisci?', ['Nulla, solo aria', 'Un cuscino', 'Un muro', 'Un partner'], 0),
      mc('Quale quota non si supera nell’allenamento a vuoto?', ['Vita/costole', 'Caviglia', 'Anca', 'Ginocchio d’appoggio'], 0),
      fill('Per non perdere equilibrio si evita il ginocchio d’appoggio ____.', ['bloccato'], 'Resta morbido.'),
      mc('Che cosa fa il busto al momento del colpo?', ['Si inclina molto avanti', 'Può inclinarsi poco indietro', 'Ruota di 180°', 'Cade'], 1),
      mc('Chi può introdurre sacco o partner?', ['Un istruttore qualificato', 'Nessuno', 'Chiunque', 'Un amico'], 0),
      mc('Quale rapporto c’è fra khao trong e khao khong?', ['Diretta e curva', 'Alta e bassa', 'Stesso gesto', 'Nessuno'], 0)
    ] });

  /* ---------- 3. Khao khong ---------- */
  C.addTopic({ id: 'jud-khao-khong', subject: 'grp', stage: 'L2', title: 'Khao khong: ginocchiata curva in clinch (a vuoto)', minutes: 10,
    summary: 'La ginocchiata curva (diagonale) del muay thai a vuoto: rotazione di bacino e avampiede, ginocchio verso le costole immaginarie.',
    objectives: ['Eseguire la salita diagonale del ginocchio con rotazione di bacino e avampiede', 'Distinguere khao khong da khao trong per traiettoria e origine del movimento', 'Controllare equilibrio e quota (costole) con autoverifica video'],
    pages: [
      { h: 'Che cos’è khao khong', b: '**Khao khong** (ginocchio «curvo») è la **ginocchiata curva**: il ginocchio sale in **diagonale**, non in linea retta, mentre il bacino ruota.\n\nNel muay thai è una variante classica del clinch plum, indirizzata al fianco/costole secondo le regole di competizione. Qui è lavorata **solo a vuoto**: serve a imparare rotazione ed equilibrio.' },
      { h: 'Differenza rispetto alla diretta', b: '- **Khao trong**: traiettoria dritta, spinta del bacino **in avanti**.\n- **Khao khong**: traiettoria **diagonale**, spinta con **rotazione** del bacino.\n\nIn entrambe il piede d’appoggio ruota sull’avampiede, la punta del piede che sale è giù e il ginocchio d’appoggio è morbido. Cambia la direzione del movimento, non la sicurezza.' },
      { h: 'Postura e inclinazione della testa', b: 'Dal plum:\n- tira idealmente la testa immaginaria **da un lato**, con i gomiti stretti;\n- busto eretto, **non** inclinato di lato in modo marcato;\n- peso sulle avampiedi; sguardo avanti.\n\nIl corpo «si prepara» alla rotazione: spalle e bacino sono ancora allineati.' },
      { h: 'Rotazione: bacino e avampiede', b: 'La rotazione **parte dal bacino e dall’avampiede d’appoggio, non dalla schiena**.\n1. Il piede d’appoggio ruota sull’**avampiede** (palla del piede), il tallone si alza.\n2. Il bacino ruota nella stessa direzione.\n3. Il ginocchio sale **in diagonale** verso le **costole immaginarie**, con la punta in giù.\n4. Le spalle seguono, senza torcere la colonna lombare.\n\n> Pensa a girare su un perno, non a piegarti di lato.' },
      { h: 'Equilibrio e ginocchio morbido', b: 'La rotazione aumenta il rischio di perdere equilibrio:\n- **ginocchio d’appoggio morbido**, mai bloccato in rotazione (rischio per il legamento);\n- piede d’appoggio **ruota, non scivola né salta**;\n- se serve, **riduci l’ampiezza** della rotazione;\n- **fermati a quota costole** e riporta il piede a terra davanti a te.\n\nNel lavoro a vuoto la quota resta a vita/costole, mai oltre.' },
      { h: 'Errori comuni e correzioni', b: '- **Peso sui talloni** → avampiedi.\n- **Ginocchio d’appoggio bloccato** → flettilo.\n- **Rotazione dalla schiena** → fai partire il movimento da bacino e piede.\n- **Perdita di equilibrio** → riduci l’ampiezza e rallenta.\n- **Ginocchio troppo alto** → stop a quota costole.\n- **Piede non disteso** → punta in giù.' },
      { h: 'Esercizi e progressioni', b: '1. **Rotazione senza ginocchio**: solo avampiede e bacino, 5 per lato.\n2. **Ginocchiata in 4 tempi lenti**.\n3. **Alternata** destra e sinistra, 5 per lato.\n4. **Diretta + curva**: una khao trong seguita da una khao khong.\n\nProgredisci solo con forma pulita. Nessun sacco né partner senza un istruttore qualificato.' },
      { h: 'Autoverifica con il video e sicurezza', b: 'Registra **di fronte** e **dall’alto-lato** se possibile: controlla che il bacino ruoti insieme al piede, che il ginocchio salga a quota costole e che la schiena non si pieghi.\n\n**Sicurezza:** solo in aria, a quota vita/costole, con ginocchio d’appoggio morbido; spazio libero 2 m × 2 m; **niente sparring, niente contatto**. Se avverti dolore al ginocchio o alla schiena, **fermati**. Nessuna promessa di efficacia in combattimento.' },
      { h: 'Riepilogo', b: '- **Khao khong** = ginocchiata curva, traiettoria **diagonale**.\n- La rotazione parte da **bacino e avampiede**, non dalla schiena.\n- Ginocchio d’appoggio **morbido**, punta del piede **in giù**.\n- A vuoto stop a quota **costole**.\n- Solo da soli; sacco e partner solo con un istruttore qualificato.' }
    ],
    exercises: [
      mc('Che traiettoria ha la khao khong?', ['Dritta', 'Diagonale', 'Verticale verso il basso', 'Circolare sopra la testa'], 1, 'Khong = curvo: diagonale.'),
      mc('Da dove parte la rotazione?', ['Dalle mani', 'Dal bacino e dall’avampiede d’appoggio', 'Dalla testa', 'Dal collo'], 1, 'Non dalla schiena.'),
      fill('Il ginocchio sale verso le ____ immaginarie.', ['costole'], 'Quota costole nel lavoro a vuoto.'),
      order('Ordina la sequenza', ['postura plum', 'ruota l’avampiede', 'ruota il bacino', 'ginocchio in diagonale', 'ritorno'], 'La rotazione precede e guida il ginocchio.'),
      mc('Quale errore va evitato?', ['Rotazione dalla schiena', 'Ginocchio d’appoggio morbido', 'Punta in giù', 'Avampiede come perno'], 0, 'La schiena non guida la rotazione.'),
      fill('Il ginocchio d’appoggio non deve essere ____.', ['bloccato'], 'Morbido, soprattutto in rotazione.'),
      mc('Differenza principale rispetto alla khao trong?', ['Direzione: diagonale invece che dritta', 'Nessuna', 'Si usa il gomito', 'Si salta'], 0, 'Cambia la traiettoria.'),
      mc('Che cosa fai se perdi equilibrio?', ['Accelero', 'Riduco ampiezza e rallento', 'Salto', 'Alzo di più il ginocchio'], 1, 'Prima l’equilibrio, poi l’ampiezza.'),
      mc('Quando si può usare un sacco?', ['Mai', 'Solo con un istruttore qualificato', 'Subito', 'Dopo un giorno'], 1, 'Sacco solo con istruttore.'),
      order('Ordina l’autoverifica', ['registra', 'controlla la rotazione', 'controlla la quota', 'correggi'], 'Verifica ciclica.')
    ],
    test: [
      mc('Che cosa significa «khong» in questo contesto?', ['Corto', 'Curvo', 'Veloce', 'Alto'], 1),
      mc('A quale quota si ferma il ginocchio a vuoto?', ['Costole/vita', 'Testa', 'Caviglia', 'Spalla'], 0),
      fill('La rotazione dalla ____ è un errore.', ['schiena'], 'Parte da bacino e avampiede.'),
      mc('Che cosa succede al tallone d’appoggio durante la rotazione?', ['Si alza perché si ruota sull’avampiede', 'Resta piantato', 'Si sposta di lato strisciando', 'Si blocca'], 0),
      mc('Quale combinazione è consigliata?', ['Diretta poi curva', 'Curva con salto', 'Solo salti', 'Nessuna'], 0),
      mc('Che cosa non si fa mai in questa lezione?', ['Contatto', 'Autoverifica video', 'Respirare', 'Rallentare'], 0)
    ] });

  /* ---------- 4. Khao noi ---------- */
  C.addTopic({ id: 'jud-khao-noi', subject: 'grp', stage: 'L2', title: 'Khao noi: ginocchiata corta in clinch ravvicinato (a vuoto)', minutes: 10,
    summary: 'La ginocchiata corta del muay thai a vuoto: serie brevi e regolari a quota vita, schiena dritta, gomiti stretti e ritmo controllato.',
    objectives: ['Eseguire serie brevi e regolari di ginocchiate corte a vuoto', 'Mantenere postura, gomiti stretti e ginocchio d’appoggio morbido nel ritmo', 'Valutare la qualità della serie con un video e ridurre la velocità se la forma cala'],
    pages: [
      { h: 'Che cos’è khao noi', b: '**Khao noi** significa «ginocchio piccolo»: è la **ginocchiata corta**, rapida, a distanza ravvicinata. Nel muay thai si usa in serie dal clinch.\n\nA vuoto è un esercizio di **ritmo e controllo**: più che la forza, conta la regolarità. Si lavora da soli, in aria, a quota **vita**; niente bersagli, niente contatto.' },
      { h: 'Il posto nel clinch', b: 'Le tre ginocchiate si completano:\n- **khao trong**: diretta, ampia e lineare;\n- **khao khong**: curva, diagonale;\n- **khao noi**: **breve**, a corta distanza, in serie.\n\nNelle regole di competizione, le ginocchia vanno al corpo; nel tuo allenamento rimangono **in aria, a quota vita**, sempre con controllo.' },
      { h: 'Postura molto ravvicinata', b: 'Dalla postura plum:\n- **gomiti stretti**, avambracci vicini al corpo;\n- **testa e sguardo avanti**, mento rientrato;\n- **busto eretto**, spalle rilassate;\n- piedi alla larghezza delle spalle, **ginocchia morbide**, peso sulle avampiedi.\n\nImmagina un avversario **molto vicino**: lo spazio fra te e lui è minimo, quindi i movimenti sono corti.' },
      { h: 'Il gesto breve', b: 'Ogni ginocchiata è piccola:\n1. **Il bacino spinge un poco in avanti**.\n2. Il ginocchio sale per **pochi centimetri**, a quota coscia/vita, con la **punta del piede in giù**.\n3. Il piede torna a terra **subito**, vicino alla posizione di partenza.\n4. Si alterna **destra e sinistra** senza fermarsi.\n\nIl busto resta **dritto**; non si curva per «inseguire» il ginocchio.' },
      { h: 'Ritmo, respiro e serie', b: 'Il ritmo è **regolare e controllato**:\n- serie di **6 colpi**, poi **pausa**;\n- **espira** a ogni ginocchiata, **non trattenere il respiro**;\n- parti **lento**, poi aumenta la velocità solo se la forma resta pulita;\n- se il ritmo diventa irregolare o la postura cede, **fermati e riparti più lento**.\n\n> La forma prima della velocità.' },
      { h: 'Il piede d’appoggio', b: 'In serie il piede d’appoggio lavora a lungo:\n- **avampiede** come perno, tallone leggermente sollevato;\n- **ginocchio d’appoggio morbido**, mai bloccato;\n- il piede **non salta** ad ogni colpo;\n- cambia gamba **senza perdere** la postura del tronco.\n\nSe senti la gamba d’appoggio affaticata o dolorante, **interrompi** la serie.' },
      { h: 'Errori comuni, esercizi e progressioni', b: '**Errori:** ritmo irregolare, schiena curva, gomiti larghi, perdita di equilibrio, ginocchio d’appoggio bloccato → correggi rallentando e riportando la postura.\n\n**Progressioni:**\n1. Serie lente di 4 con pausa.\n2. Alternate di 6 con respiro regolare.\n3. Dopo un passo laterale in postura plum.\n4. Diretta, curva, poi serie corta.\n\nNiente sacco né partner senza un istruttore qualificato.' },
      { h: 'Autoverifica con il video e sicurezza', b: 'Registra di lato una serie di 6: guarda se il busto resta dritto, se il ritmo è regolare e se il ginocchio non supera quota vita. Se la serie peggiora a metà, accorcia.\n\n**Sicurezza:** solo da solo, in aria, **quota vita**; spazio libero 2 m × 2 m; **nessuno sparring, nessun contatto**; sacco o partner solo con un istruttore qualificato. Questa lezione non dichiara efficacia in combattimento: è solo lavoro tecnico di coordinazione.' },
      { h: 'Riepilogo', b: '- **Khao noi** = ginocchiata corta, a distanza ravvicinata, in serie.\n- Gomiti stretti, schiena **dritta**, ginocchio d’appoggio **morbido**.\n- Serie di 6, **ritmo regolare**, respiro libero.\n- Quota **vita**, sempre in aria.\n- Se la forma cala: **rallenta o fermati**. Sacco e partner solo con un istruttore.' }
    ],
    exercises: [
      mc('Che cosa significa «noi» in khao noi?', ['Piccolo', 'Grande', 'Veloce', 'Dritto'], 0, 'Noi = piccolo.'),
      mc('Che cosa caratterizza khao noi?', ['Ginocchiate brevi e rapide in serie', 'Un salto', 'Una proiezione', 'Un calcio'], 0, 'Breve e ravvicinata.'),
      fill('Una serie tipica è di ____ colpi, poi pausa.', ['6', 'sei'], 'Serie corta e controllata.'),
      order('Ordina la serie', ['postura plum', 'bacino avanti', 'ginocchio corto', 'piede a terra', 'alterna'], 'Gesto breve e ripetuto.'),
      mc('Che cosa si fa se il ritmo diventa irregolare?', ['Accelerare', 'Rallentare o fermarsi', 'Chiudere gli occhi', 'Aggiungere salti'], 1, 'Forma prima della velocità.'),
      fill('Il respiro in serie va ____ a ogni colpo.', ['espirato', 'espirando', 'espirare'], 'Espira, non trattenere.'),
      mc('Quale quota si usa a vuoto?', ['Vita', 'Testa', 'Pavimento', 'Spalle'], 0, 'Quota vita in aria.'),
      mc('Quale errore va evitato?', ['Schiena curva', 'Gomiti stretti', 'Ginocchio morbido', 'Ritmo regolare'], 0, 'Schiena dritta.'),
      mc('Quale ruolo ha il ginocchio d’appoggio?', ['Morbido per stabilità', 'Bloccato', 'Sollevato', 'Iperesteso'], 0, 'Morbido sempre.'),
      order('Ordina l’autoverifica', ['registra di lato', 'conta il ritmo', 'controlla la schiena', 'correggi'], 'Verifica ciclica.')
    ],
    test: [
      mc('Qual è la differenza principale fra khao noi e khao trong?', ['Noi è corta e in serie', 'Noi è curva', 'Noi è un calcio', 'Nessuna'], 0),
      mc('Quando si può usare un sacco?', ['Con un istruttore qualificato', 'Mai', 'Sempre', 'Dopo una settimana'], 0),
      fill('Il piede d’appoggio ruota sull’____.', ['avampiede'], 'Palla del piede.'),
      mc('Che cosa si fa se la gamba d’appoggio duole?', ['Interrompere la serie', 'Aumentare la velocità', 'Bloccare il ginocchio', 'Continuare'], 0),
      mc('Quale sequenza di ginocchiate è proposta come progressione?', ['Diretta, curva, serie corta', 'Salti e calci', 'Solo curve', 'Nessuna'], 0),
      mc('Che cosa non si fa in questo percorso?', ['Sparring e contatto', 'Autoverifica', 'Respirare', 'Pausa'], 0)
    ] });
})(window.ST = window.ST || {});
