/* Judo e lotta — lezioni di base (12 argomenti): postura, spostamenti, kuzushi, prese no-gi, entrate a vuoto, ritmo, lavoro a terra.
   Tutto SOLITARIO e «a vuoto»: nessun partner, nessuna proiezione completata. Livelli = stadi interni, non gradi. */
(function (ST) {
  'use strict';
  const C = ST.content, { fill, order } = C;
  /* mc: la risposta giusta viene ruotata in una posizione variabile (0..n-1) per non avere sempre lo stesso indice */
  let rot = 0;
  const mc = (q, o, a, why) => { const n = o.length, k = (rot++ * 3 + 1) % n, ans = o[a], rest = o.filter((_, i) => i !== a); rest.splice(k, 0, ans); return C.mc(q, rest, k, why); };
  const T = (o) => C.addTopic(Object.assign({ subject: 'grp', minutes: 10 }, o));
  const INSTR = 'Le entrate sono lavoro a vuoto e non dimostrano di saper applicare la tecnica: far verificare la forma da un istruttore qualificato è consigliabile, e ogni lavoro con un partner richiede lui.';

  /* ---------- 1. POSTURA ---------- */
  T({ id: 'jud-posture', stage: 'L0', title: 'Postura: shizentai e jigotai', summary: 'Le due posture di base del judo: naturale (shizentai) e difensiva (jigotai).',
    objectives: ['Descrivere e assumere shizentai e jigotai', 'Controllare il peso al centro del piede', 'Verificare la postura con un breve video laterale'],
    pages: [
      { h: 'A che cosa serve', b: 'Ogni gesto del judo parte da una **postura** stabile e pronta a muoversi. Se la base è buona, spostamenti, rotazioni ed entrate diventano più semplici da controllare. Le due posture di base sono:\n- **shizentai** (自然体): postura naturale\n- **jigotai** (自護体): postura difensiva, più bassa e più larga\n\nIn questa lezione lavori **da solo, sul posto**, senza partner.' },
      { h: 'Il principio', b: 'Il corpo è stabile quando la proiezione del baricentro cade dentro la **base di appoggio** (l’area tra i piedi). Una base più larga e un baricentro più basso aumentano la stabilità; una base stretta e alta ti rende più mobile.\n\n- **Shizentai**: mobilità e prontezza\n- **Jigotai**: stabilità, a scapito di un po’ di mobilità\n\nLa postura non è una posa rigida: è un equilibrio che respira.' },
      { h: 'Shizentai passo per passo', b: '- Piedi alla larghezza delle spalle, punte appena aperte.\n- Peso al **centro del piede**, né sui talloni né sulle punte.\n- Ginocchia morbide, mai bloccate.\n- Schiena lunga, bacino neutro, spalle basse e rilassate.\n- Sguardo avanti, all’orizzonte (non ai piedi).\n\n> Prova: sollevati leggermente sulle punte e ridiscendi: il peso torna al centro del piede.' },
      { h: 'Jigotai passo per passo', b: '- Parti da shizentai e **allarga** i piedi, abbassando il bacino.\n- Ginocchia flesse, schiena eretta (non piegata in avanti).\n- Peso e baricentro più bassi, sempre al centro del piede.\n- Passa da una postura all’altra lentamente, **senza alzare le spalle**.\n\n> Un buon ritmo: 4 secondi per scendere in jigotai, 4 per tornare in shizentai.' },
      { h: 'Errori comuni e correzioni', b: '- **Peso sui talloni** → senti le dita dei piedi sul pavimento e sposta il peso al centro.\n- **Spalle alzate o rigide** → espira e lasciale cadere.\n- **Sguardo ai piedi** → fissa un punto davanti a te all’altezza degli occhi.\n- **Ginocchia bloccate** → piegale di pochi gradi, come se fossero molle.\n- In jigotai la schiena si curva → riduci la profondità, la schiena viene prima.' },
      { h: 'Esercizi e progressioni', b: '- Chiudi gli occhi 5 secondi e senti dove sta il peso sui piedi.\n- Alterna shizentai e jigotai a tempo di respiro (5 ripetizioni).\n- Spostati di mezzo passo mantenendo la postura, poi fermati.\n\nProgressione: aggiungi una cosa alla volta, e solo quando la precedente è stabile.' },
      { h: 'Verificare da solo', b: 'Appoggia il telefono a un metro e mezzo, di lato, e registra **20 secondi**. Controlla tre punti:\n- l’orecchio, la spalla e l’anca sono sulla stessa linea?\n- le ginocchia sono morbide (non bloccate)?\n- le spalle sono alla stessa altezza e rilassate?\n\nSe un punto non va, correggi solo quello e registra di nuovo.' },
      { h: 'Sicurezza', b: '- Spazio libero di almeno 2 m × 2 m, pavimento antiscivolo.\n- Movimenti lenti: in jigotai scendi solo fin dove la schiena resta lunga.\n- Dolore (non fatica) a ginocchia o schiena: fermati.\n- La domenica è riposo: solo teoria e osservazione.' },
      { h: 'Riepilogo', b: '- **Shizentai** = naturale e mobile; **jigotai** = più bassa e più larga.\n- Peso al centro del piede, ginocchia morbide, schiena lunga, sguardo avanti.\n- Si passa dall’una all’altra con calma, senza spalle alte.\n- Autocontrollo: video laterale di 20 s e tre punti.' }
    ],
    exercises: [
      mc('Quale caratteristica distingue jigotai da shizentai?', ['Si sta con i piedi uniti e il peso sulle punte', 'Base più larga e baricentro più basso', 'Le braccia sono incrociate sopra la testa', 'Il busto è inclinato indietro e il peso sui talloni'], 1, 'Jigotai è la postura difensiva: base ampia e bacino basso.'),
      mc('Dove deve cadere il peso in shizentai?', ['Sui talloni', 'Sulle punte', 'Al centro del piede', 'Solo sul piede destro'], 2, 'Il centro del piede dà equilibrio in ogni direzione.'),
      mc('Che cosa significa shizentai?', ['Postura naturale', 'Presa al bavero', 'Rotazione del corpo', 'Caduta laterale'], 0, 'Shizentai (自然体) = postura naturale.'),
      fill('Completa: in shizentai le ginocchia restano ___ (non bloccate).', ['morbide', 'flesse', 'piegate'], 'Ginocchia morbide permettono di muoversi in qualsiasi direzione.'),
      order('Metti in ordine il passaggio da shizentai a jigotai', ['Allarga', 'i', 'piedi', 'e', 'abbassa', 'il', 'bacino'], 'Si allarga la base e poi si abbassa il baricentro, con la schiena eretta.'),
      mc('Dove va lo sguardo?', ['Ai piedi', 'Avanti, all’orizzonte', 'Al soffitto', 'Con gli occhi chiusi sempre'], 1, 'Guardare i piedi curva la schiena e sposta il peso.'),
      mc('In jigotai senti la schiena che si curva. Che cosa fai?', ['Scendo di più', 'Riduco la profondità', 'Trattengo il respiro', 'Alzo le spalle'], 1, 'La schiena eretta ha la priorità sulla profondità.'),
      fill('Per l’autocontrollo registri un video ___ (da quale lato?) di circa 20 secondi.', ['laterale', 'di lato'], 'La vista laterale mostra l’allineamento di orecchio, spalla e anca.')
    ],
    test: [
      mc('Quale errore indica il peso sui talloni?', ['Le dita dei piedi sembrano «leggere» e il busto va indietro', 'Le ginocchia sono morbide, lo sguardo è avanti e il bacino basso', 'Le spalle sono basse e il respiro è libero e regolare', 'Il piede d’appoggio è ben piantato e il busto resta eretto'], 0, 'Con il peso sui talloni si perde prontezza.'),
      mc('Perché le spalle restano basse e rilassate?', ['Per sembrare più alti e imponenti davanti all’avversario', 'Per evitare rigidità e mantenere il respiro libero', 'Per bloccare le braccia e irrigidire il busto in difesa', 'Non ha importanza: la posizione delle spalle è irrilevante'], 1, 'Spalle alte = tensione e postura rigida.'),
      fill('Il termine giapponese della postura difensiva è ___.', ['jigotai'], 'Jigotai (自護体).'),
      order('Metti in ordine i tre punti da controllare nel video laterale', ['Allineamento', 'ginocchia', 'spalle'], 'Allineamento orecchio-spalla-anca, ginocchia morbide, spalle rilassate.'),
      mc('Che cosa fai se senti dolore (non fatica) alla schiena?', ['Continuo più piano', 'Mi fermo', 'Scendo di più', 'Cambio lato e proseguo'], 1, 'Il dolore è un segnale di stop.')
    ] });

  /* ---------- 2. AYUMI-ASHI E TSUGI-ASHI ---------- */
  T({ id: 'jud-ayumi-tsugi', stage: 'L0', title: 'Spostamenti: ayumi-ashi e tsugi-ashi', summary: 'Camminare e scivolare mantenendo postura e altezza della testa.',
    objectives: ['Distinguere ayumi-ashi (passi normali) da tsugi-ashi (piede che segue)', 'Scivolare a filo del pavimento senza oscillare', 'Controllare altezza della testa con un video'],
    pages: [
      { h: 'A che cosa serve', b: 'Prima di qualsiasi tecnica serve saper **muoversi** senza perdere la postura. Il judo usa due spostamenti di base:\n- **ayumi-ashi** (歩み足): passi normali, i piedi si alternano\n- **tsugi-ashi** (継ぎ足): un piede avanza e l’altro lo segue senza superarlo\n\nLavori da solo, su una linea di circa 2 m.' },
      { h: 'Il principio', b: 'Muoversi bene significa spostare la base **tenendo il baricentro stabile**. I piedi scivolano vicino al pavimento: così non c’è un momento in cui sei appoggiato su una gamba sola e instabile.\n\nLa testa resta alla **stessa altezza**: se sale e scende, il baricentro oscilla.' },
      { h: 'Ayumi-ashi passo per passo', b: '- Parti da shizentai.\n- Il piede avanza scivolando, poi il peso passa su di esso.\n- L’altro piede avanza allo stesso modo: i piedi **non si incrociano**.\n- Passo corto, simile a una camminata «a filo del suolo».\n\n> Ripeti: tre passi avanti, tre indietro, sempre con la stessa altezza della testa.' },
      { h: 'Tsugi-ashi passo per passo', b: '- Il piede davanti avanza di poco.\n- Il piede dietro lo segue e si ferma **dietro o accanto**, senza superarlo.\n- La distanza tra i piedi resta quasi uguale: la base non si chiude mai del tutto.\n- Anche indietro e di lato: parte sempre il piede nella direzione del movimento.' },
      { h: 'Errori comuni e correzioni', b: '- **Piedi che si incrociano** → passi più corti, i piedi restano in due «corsie».\n- **Testa su e giù** → immagina un libro in equilibrio sul capo.\n- **Passo troppo largo** → riduci a pochi centimetri; la qualità viene prima della distanza.\n- **Peso sui talloni** → senti il centro del piede a ogni appoggio.' },
      { h: 'Esercizi e progressioni', b: '- Cambia direzione ogni 3 passi.\n- Passo più corto e più veloce, mantenendo la postura.\n- Avanti, lato, indietro in un quadrato di 1 m.\n\nIncrementa solo uno di questi fattori alla volta: direzione, velocità o durata.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** di lato con il telefono. Controlla tre punti:\n- la testa si muove in orizzontale, senza saltelli?\n- i piedi restano vicini al pavimento?\n- in tsugi-ashi il piede dietro non supera quello davanti?\n\nRivedi il video al rallentatore se il telefono lo permette.' },
      { h: 'Sicurezza', b: '- Pavimento antiscivolo, scarpe tolte o calze antiscivolo; spazio libero di 2 m.\n- Nessuna corsa o salto: si scivola.\n- Fermati se senti dolore a ginocchia o caviglie.\n- Controlla alle spalle prima di muoverti all’indietro.' },
      { h: 'Riepilogo', b: '- **Ayumi-ashi** = passi alternati; **tsugi-ashi** = il piede dietro segue senza superare.\n- Si scivola a filo del pavimento, testa alla stessa altezza, peso centrale.\n- Errori tipici: piedi incrociati, passo largo, testa che oscilla.\n- Autocontrollo: video di 20 s e tre punti.' }
    ],
    exercises: [
      mc('In tsugi-ashi, quale piede segue?', ['Quello dietro, senza superare il piede davanti', 'Quello dietro, che supera l’altro e si porta avanti', 'Quello davanti, che torna indietro verso l’altro', 'Entrambi i piedi saltano insieme in avanti'], 0, 'Il piede dietro segue e si ferma senza superare quello davanti.'),
      mc('Perché si scivola a filo del pavimento?', ['Per fare meno rumore sul tatami durante la lezione', 'Per non perdere stabilità e base', 'Per correre più veloce verso l’avversario', 'Per allenare soltanto i muscoli delle caviglie'], 1, 'Così il baricentro resta stabile.'),
      mc('Che cosa indica ayumi-ashi?', ['Passi normali alternati', 'Una rotazione completa sul piede', 'Un salto con i piedi uniti', 'Una presa a due mani sul bavero'], 0, 'Ayumi-ashi = passi che si alternano.'),
      fill('Completa: la testa resta alla stessa ___ durante lo spostamento.', ['altezza'], 'Se la testa sale e scende, il baricentro oscilla.'),
      order('Metti in ordine tsugi-ashi in avanti', ['Il', 'piede', 'davanti', 'avanza', 'poi', 'il', 'dietro', 'lo', 'segue'], 'Parte il piede nella direzione del movimento, poi segue l’altro.'),
      mc('Che cosa correggi se i piedi si incrociano?', ['Faccio passi più corti', 'Faccio passi più lunghi', 'Salto', 'Chiudo gli occhi'], 0, 'Passi corti mantengono i piedi in due corsie.'),
      mc('Quale variante è appropriata per aumentare la difficoltà?', ['Cambio direzione ogni 3 passi', 'Corro per tutta la sala a ritmo sostenuto', 'Salto su un piede per tutto il percorso', 'Alzo le spalle a ogni passo per allenarle'], 0, 'Si varia direzione, velocità o durata, una per volta.'),
      fill('Per l’autocontrollo conta ___ punti da verificare nel video (numero).', ['3', 'tre'], 'Testa, piedi vicino al pavimento, piede dietro che non supera.')
    ],
    test: [
      mc('Se il passo è troppo largo, che cosa fai?', ['Lo riduco a pochi centimetri', 'Lo allungo ancora per stabilizzarmi', 'Accelero per compensare la distanza', 'Mi fermo e salto per riprendere il ritmo'], 0, 'Meglio un passo corto e controllato.'),
      mc('In quale direzione parte il piede in tsugi-ashi?', ['In quella del movimento', 'Sempre dal piede destro', 'Sempre indietro', 'In nessuna'], 0, 'Se vai di lato parte il piede laterale.'),
      fill('L’ayumi-ashi usa passi ___ (alternati).', ['alternati', 'normali'], 'I piedi si alternano come nel camminare.'),
      order('Metti in ordine il controllo video', ['Registra', 'rivedi', 'correggi', 'un', 'punto'], 'Registra 20 s, rivedi, correggi un punto alla volta.'),
      mc('Quale errore mostra il baricentro che oscilla?', ['Testa su e giù', 'Postura eretta', 'Passi corti', 'Piedi vicini al suolo'], 0, 'La testa che oscilla segnala un baricentro instabile.')
    ] });

  /* ---------- 3. TAI SABAKI ---------- */
  T({ id: 'jud-tai-sabaki', stage: 'L0', title: 'Tai sabaki: rotazioni del corpo', summary: 'Pivot e rotazioni a 90° e 180° mantenendo asse e postura.',
    objectives: ['Eseguire mae-mawari e ushiro-mawari a 90° e a 180°', 'Ruotare bacino e spalle insieme sul piede perno', 'Chiudere la rotazione in postura equilibrata'],
    pages: [
      { h: 'A che cosa serve', b: '**Tai sabaki** (体捌き) significa «gestione del corpo»: cambiare orientamento o angolo ruotando sul posto. È la base di tutte le entrate che richiedono una rotazione.\n\nLe due rotazioni fondamentali:\n- **mae-mawari**: rotazione in avanti\n- **ushiro-mawari**: rotazione indietro\n\nSi eseguono a **90°** e a **180°**, da solo e lentamente.' },
      { h: 'Il principio', b: 'Il corpo ruota attorno a un **asse verticale** che passa per il piede perno. Bacino e spalle girano **insieme**: se le spalle partono prima, l’asse si piega e perdi l’equilibrio.\n\nIl perno è la punta del piede d’appoggio, con il ginocchio morbido; l’altro piede si sposta dietro o davanti secondo la rotazione.' },
      { h: 'Mae-mawari passo per passo', b: '- Parti da shizentai, peso centrale.\n- Pivot sulla punta del piede d’appoggio.\n- Il piede libero passa **dietro** e ruota insieme a bacino e spalle.\n- Fermati a 90° o a 180° in una postura equilibrata.\n- Verifica che la testa sia rimasta alla stessa altezza.' },
      { h: 'Ushiro-mawari passo per passo', b: '- Parti da shizentai.\n- Pivot sul piede d’appoggio; il piede libero va **indietro** ruotando.\n- Bacino e spalle seguono insieme, sguardo nella nuova direzione.\n- Chiudi in postura, non a metà del giro.\n\n> Lenta prima di veloce: 4 secondi per ogni rotazione, poi 2.' },
      { h: 'Errori comuni e correzioni', b: '- **Perdita di equilibrio a fine giro** → riduci l’ampiezza e fermati prima di finire.\n- **Spalle prima del bacino** → pensa a ruotare dal centro del corpo.\n- **Piedi che non pivotano** (si trascinano) → solleva appena il tallone del perno e ruota sulla punta.\n- **Sguardo ai piedi** → guarda nella direzione finale.\n- Ginocchio del perno rigido → tienilo morbido.' },
      { h: 'Esercizi e progressioni', b: '- Aggiungi un secondo giro al contrario.\n- Rotazione a comando casuale (destra o sinistra: il comando lo dai tu a voce o da un’app).\n- Rotazione più due passi di tsugi-ashi.\n\nSali di difficoltà una variabile alla volta.' },
      { h: 'Verificare da solo', b: 'Riprendi **20 secondi** dall’alto o di lato. Controlla tre punti:\n- bacino e spalle ruotano insieme?\n- il perno è sulla punta del piede, con ginocchio morbido?\n- chiudi in postura stabile senza fare un passo di recupero?' },
      { h: 'Sicurezza', b: '- Ruota **sui piedi**: il ginocchio non resta mai bloccato mentre il piede è fermo e il corpo gira. Se il piede si pianta, pivota sulla punta o fai un piccolo passo.\n- Spazio di 2 m × 2 m, pavimento antiscivolo; ferma subito se senti dolore al ginocchio.\n- Movimento lento, niente salti.' },
      { h: 'Riepilogo', b: '- Tai sabaki = gestire il corpo ruotando attorno a un asse.\n- **Mae-mawari** (avanti), **ushiro-mawari** (indietro), a 90° e 180°.\n- Bacino e spalle insieme, perno sulla punta, ginocchio morbido, chiusura in postura.\n- Verifica: video di 20 s e tre punti.' }
    ],
    exercises: [
      mc('Che cosa significa tai sabaki?', ['Gestione del corpo, cambio di angolo', 'Una proiezione d’anca con rotazione completa', 'Una presa al bavero e alla manica', 'Il saluto di inizio e fine pratica'], 0, 'Tai sabaki = gestione del corpo.'),
      mc('Perché bacino e spalle ruotano insieme?', ['Per mantenere un asse stabile', 'Per mostrare forza all’avversario immaginario', 'Per allungare il passo in avanti', 'Per non guardare avanti durante il movimento'], 0, 'Un asse stabile evita lo sbilanciamento.'),
      mc('Quale rotazione va in avanti?', ['Ushiro-mawari', 'Mae-mawari', 'Tsugi-ashi', 'Jigotai'], 1, 'Mae-mawari = rotazione in avanti.'),
      fill('Il pivot avviene sulla ___ del piede d’appoggio.', ['punta'], 'Ruota sulla punta, non sul tallone.'),
      order('Metti in ordine la chiusura della rotazione', ['Ruota', 'bacino', 'e', 'spalle', 'insieme', 'e', 'chiudi', 'in', 'postura'], 'Si ruota con un solo blocco e si chiude in postura.'),
      mc('Che cosa correggi se perdi equilibrio a fine rotazione?', ['Riduco l’ampiezza e fermo il movimento prima', 'Ruoto più velocemente per recuperare', 'Chiudo gli occhi e aumento l’ampiezza del movimento', 'Salto leggermente per riprendere l’appoggio'], 0, 'L’ampiezza si aumenta solo quando la chiusura è stabile.'),
      mc('Quali sono le due ampiezze studiate?', ['45° e 270°', '90° e 180°', '30° e 60°', 'Solo 360°'], 1, 'Mezzo giro e quarto di giro.'),
      fill('Il ginocchio del piede perno resta ___.', ['morbido', 'flesso', 'piegato'], 'Mai bloccato.')
    ],
    test: [
      mc('Che cosa significa che i piedi «non pivotano»?', ['Restano fermi e il corpo ruota senza girare sul perno', 'Pivotano sulla punta con il tallone sollevato da terra', 'Si alzano e saltano a ogni cambio di direzione', 'Si incrociano a ogni mezzo giro del corpo'], 0, 'Il piede deve girare sulla punta, non restare incollato.'),
      mc('Dove va lo sguardo durante la rotazione?', ['Nella direzione finale', 'Verso i piedi, per controllarli', 'Sempre indietro, alle spalle', 'Chiuso, per concentrarsi'], 0, 'Lo sguardo guida e la testa resta alta.'),
      fill('La rotazione indietro si chiama ___-mawari.', ['ushiro'], 'Ushiro = dietro.'),
      order('Metti in ordine il controllo video', ['Bacino', 'perno', 'chiusura'], 'Tre punti: bacino e spalle, perno, chiusura.'),
      mc('Quale variante aumenta la difficoltà in modo sicuro?', ['Rotazione a comando casuale', 'Rotazione su una gamba con salto', 'Rotazione a occhi chiusi su superficie scivolosa', 'Aggiungere un partner'], 0, 'Il comando casuale allena la reattività restando sicuri.')
    ] });

  /* ---------- 4. KUZUSHI ---------- */
  T({ id: 'jud-kuzushi', stage: 'L0', title: 'Kuzushi: le otto direzioni dell’equilibrio', summary: 'Sentire il limite di stabilità del proprio corpo nelle otto direzioni.',
    objectives: ['Elencare le otto direzioni (happo-no-kuzushi)', 'Spostare il peso fino al limite di stabilità e tornare al centro', 'Verificare la simmetria con un video'],
    pages: [
      { h: 'A che cosa serve', b: '**Kuzushi** (崩し) è lo squilibrio: nel judo precede ogni tecnica, perché una tecnica funziona su un corpo che ha già perso la propria base. In solitaria non squilibri nessuno: **impari a conoscere il tuo limite di stabilità**.\n\nLe direzioni classiche sono **otto** (happo-no-kuzushi): avanti, indietro, destra, sinistra e le quattro diagonali.' },
      { h: 'Il principio', b: 'Sei stabile finché la proiezione del baricentro resta **dentro la base di appoggio**. Se il peso va oltre i bordi, devi fare un passo per ritrovarti stabile: quel punto è il tuo **limite**.\n\nStudiare il limite in tutte le direzioni dà una mappa: da dove sei più facile da sbilanciare e dove sei più saldo.' },
      { h: 'Passo per passo', b: '- Parti in shizentai, immagina un cerchio con otto punti intorno ai piedi.\n- Sposta lentamente il peso verso un punto, come un’oscillazione, **senza staccare i piedi**.\n- Fermati appena prima del punto in cui dovresti fare un passo.\n- Torna al centro **prima** di passare alla direzione successiva.\n- Procedi in senso orario, poi antiorario.' },
      { h: 'Come percepire il limite', b: '- Senti la pressione delle dita e dei talloni sul pavimento.\n- Quando una parte del piede inizia a «caricare» troppo, sei vicino al limite.\n- Resta nella zona in cui potresti tornare al centro senza aiuti.\n\nIl limite è personale: dipende da base, forza e mobilità e **cambia con la postura** (in jigotai è più ampio).' },
      { h: 'Errori comuni e correzioni', b: '- **Schiena curva** → l’oscillazione parte dalle caviglie, non dalla schiena.\n- **Bacino che resta indietro** → muovi il corpo come un blocco unico.\n- **Direzioni saltate o confuse** → ripeti la sequenza ad alta voce, una per volta.\n- **Perdita di equilibrio** → riduci l’ampiezza: non devi mai arrivare a cadere.' },
      { h: 'Esercizi e progressioni', b: '- Direzioni a comando casuale (il comando lo dai tu a voce o da un’app).\n- Occhi chiusi solo nelle direzioni avanti e indietro, a un passo da un appoggio sicuro.\n- Ogni direzione con un piccolo passo di recupero.\n\nPrima la precisione, poi la varietà.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** frontali. Controlla tre punti:\n- il corpo oscilla come un blocco unico (testa, spalle, bacino)?\n- le ampiezze nelle direzioni opposte sono simili?\n- il ritorno al centro è controllato, senza passi?' },
      { h: 'Sicurezza', b: '- **Non si va mai oltre il limite fino a cadere**: nessuna caduta in questo lavoro.\n- Spazio libero di 2 m e pavimento antiscivolo; vicino a una parete o a una sedia solida se chiudi gli occhi.\n- Fermati con vertigini o dolore alle caviglie.\n- Kuzushi su un’altra persona è lavoro da svolgere solo con un istruttore.' },
      { h: 'Riepilogo', b: '- Kuzushi = squilibrio; qui lo studi su di te, a vuoto.\n- Otto direzioni: 4 cardinali + 4 diagonali.\n- Limite di stabilità = punto oltre cui serve un passo.\n- Sempre ritorno al centro, nessuna caduta.' }
    ],
    exercises: [
      mc('Kuzushi indica…', ['Lo squilibrio come condizione della tecnica', 'Una caduta controllata sul tatami dopo la proiezione', 'Un saluto rituale all’inizio del randori', 'Una presa al bavero con entrambe le mani'], 0, 'Kuzushi (崩し) è lo squilibrio.'),
      mc('Quante sono le direzioni classiche?', ['Quattro', 'Sei', 'Otto', 'Dodici'], 2, 'Happo-no-kuzushi: otto direzioni.'),
      mc('Che cosa fai raggiunto il limite?', ['Cado', 'Torno al centro', 'Salto', 'Aumento l’ampiezza'], 1, 'Si ritorna al centro prima della direzione successiva.'),
      fill('Il limite di stabilità è il punto oltre cui serve un ___.', ['passo'], 'Oltre il limite devi fare un passo di recupero.'),
      order('Metti in ordine il ciclo in una direzione', ['Sposta', 'il', 'peso', 'fermati', 'al', 'limite', 'torna', 'al', 'centro'], 'Spostare, fermarsi al limite, tornare.'),
      mc('Da dove parte l’oscillazione?', ['Dalle caviglie, il corpo resta un blocco', 'Dalla schiena, che si piega in avanti e indietro', 'Dal collo, che guida il movimento', 'Dalle mani, che tirano verso di sé'], 0, 'Schiena e testa seguono come un blocco.'),
      mc('Cosa dovresti fare se perdi l’equilibrio durante l’esercizio?', ['Ridurre l’ampiezza', 'Aumentare l’ampiezza', 'Chiudere gli occhi', 'Accelerare'], 0, 'Non devi mai arrivare a cadere.'),
      fill('Le direzioni sono quattro cardinali e quattro ___.', ['diagonali', 'oblique'], 'Avanti-destra, avanti-sinistra, indietro-destra, indietro-sinistra.')
    ],
    test: [
      mc('Perché si studia il limite di stabilità?', ['Per conoscere i propri margini di equilibrio', 'Per cadere meglio quando si perde l’equilibrio', 'Per fare più forza nelle prese', 'Perché non serve: basta il kuzushi in gara'], 0, 'Conoscere il proprio limite rende il movimento più sicuro.'),
      mc('Quale variante richiede più attenzione alla sicurezza?', ['Occhi chiusi avanti/indietro', 'Comando casuale', 'Piccolo passo di recupero', 'Direzioni in senso antiorario'], 0, 'Con gli occhi chiusi serve un appoggio vicino.'),
      fill('Il termine per «le otto direzioni» è happo-no-___.', ['kuzushi'], 'Happo-no-kuzushi.'),
      order('Metti in ordine il controllo video', ['Blocco', 'simmetria', 'ritorno'], 'Blocco unico, simmetria, ritorno controllato.'),
      mc('Il kuzushi su una persona va praticato…', ['Solo con un istruttore', 'Da soli in casa', 'In gara senza preparazione', 'Con gli occhi chiusi'], 0, 'Il lavoro con partner richiede un istruttore.')
    ] });

  /* ---------- 5. KUMIKATA NO-GI ---------- */
  T({ id: 'jud-kumikata', stage: 'L1', title: 'Kumi-kata no-gi: polso, bicipite, collo e underhook', summary: 'Struttura delle prese senza judogi, simulate a vuoto.',
    objectives: ['Riconoscere wrist control, bicep tie, collar tie e underhook', 'Simulare le prese a vuoto mantenendo postura e spalle basse', 'Cambiare presa a vuoto con un piccolo passo'],
    pages: [
      { h: 'A che cosa serve', b: '**Kumi-kata** (組み方) è il modo di prendere. Senza judogi non ci sono bavero e manica: le prese no-gi diventano:\n- **wrist control**: presa al polso\n- **bicep tie**: presa al bicipite\n- **collar tie**: mano sulla nuca\n- **underhook**: braccio sotto l’ascella\n\nLavori **a vuoto**: nessun partner, nessuna presa reale.' },
      { h: 'Il principio', b: 'La presa è una **struttura**, non una morsa. Funziona se gomiti stanno dentro, spalle basse, avambracci attivi e peso al centro. La presa serve a **controllare e a creare squilibrio** (kuzushi), non a trattenere con la sola forza delle dita.\n\nSe la presa ti fa perdere postura, è sbagliata anche se «ben stretta».' },
      { h: 'Le quattro prese passo per passo', b: '- **Wrist control**: mano sinistra al polso immaginario, gomito dentro.\n- **Bicep tie**: mano al bicipite, spalla bassa.\n- **Collar tie**: mano destra alla nuca, avambraccio attivo, gomito vicino al busto.\n- **Underhook**: braccio sotto l’ascella, spalla sotto, busto eretto.\n\nSimula **una presa alla volta**, per esempio polso sinistro + collar tie destro, poi underhook destro + polso sinistro.' },
      { h: 'Cambiare presa', b: '- Parti in shizentai.\n- Accompagna ogni cambio con un **piccolo passo** (tsugi-ashi), non solo con le braccia.\n- Mantieni la postura: se le spalle salgono, fermati.\n- Dal collar tie all’underhook in un solo movimento fluido.\n\nAlterna destra e sinistra per non allenare un solo lato.' },
      { h: 'Errori comuni e correzioni', b: '- **Spalle alzate** → espira e abbassale.\n- **Braccia rigide o troppo tese** → piega i gomiti e portali vicini al busto.\n- **Presa troppo lontana dal corpo** → avvicina il corpo con un piccolo passo.\n- **Postura persa mentre «prendi»** → torna in shizentai e ripeti più lentamente.' },
      { h: 'Esercizi e progressioni', b: '- Presa destra e sinistra alternate.\n- Presa + passo + tai sabaki.\n- Respiro lento e spalle basse in ogni presa.\n- Dal collar tie all’underhook in un solo movimento.\n\nUna cosa alla volta: prima la presa, poi il passo, poi la rotazione.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** di lato. Tre punti:\n- le spalle restano basse durante il cambio?\n- i gomiti sono vicini al busto?\n- la schiena resta lunga e il peso al centro?' },
      { h: 'Sicurezza e istruttore', b: '- Prese solo **simulate nell’aria**: non afferrare una persona né tirare un oggetto.\n- Niente tiri bruschi: movimenti lenti e controllati.\n- Il lavoro di presa con un partner richiede un istruttore qualificato.\n- Se senti dolore a spalle o gomiti, fermati.' },
      { h: 'Riepilogo', b: '- Quattro prese no-gi: wrist control, bicep tie, collar tie, underhook.\n- La presa è una struttura: gomiti dentro, spalle basse, peso al centro.\n- Cambi con piccolo passo e postura intatta.\n- Autocontrollo: video di 20 s e tre punti.' }
    ],
    exercises: [
      mc('Quale presa controlla la testa senza judogi?', ['Presa alla cintura e alla manica', 'Collar tie (mano sulla nuca)', 'Presa al bavero con la mano destra', 'Presa alla manica, vicino al gomito'], 1, 'Il collar tie controlla la testa.'),
      mc('Perché si usa il polso o il bicipite?', ['Controllano il braccio senza tessuto', 'Fanno male all’avversario e lo spaventano', 'Sono più facili da vedere per l’arbitro', 'Non servono: si usa sempre il bavero'], 0, 'Senza giacca servono prese dirette.'),
      mc('Che cos’è l’underhook?', ['Braccio sotto l’ascella', 'Presa al bavero con due mani', 'Un passo laterale con rotazione', 'Una caduta all’indietro controllata'], 0, 'L’underhook passa sotto l’ascella.'),
      fill('La presa è una struttura, non una ___.', ['morsa'], 'Non serve stringere forte, serve una struttura.'),
      order('Metti in ordine il cambio presa', ['Piccolo', 'passo', 'cambio', 'presa', 'postura', 'intatta'], 'Il passo accompagna il cambio e la postura non cambia.'),
      mc('Che cosa fai se le spalle si alzano durante la presa?', ['Mi fermo e le riabbasso', 'Alzo ancora di più le spalle', 'Stringo di più la presa', 'Accelero per finire prima'], 0, 'Spalle basse = postura mantenuta.'),
      mc('La presa serve soprattutto a…', ['Controllare e creare squilibrio', 'Fare male all’avversario con le mani', 'Stare fermi in attesa dell’attacco', 'Rallentare l’azione e riposare'], 0, 'Controllo e kuzushi.'),
      fill('Il bicep tie è una presa al ___.', ['bicipite'], 'Bicipite del braccio.')
    ],
    test: [
      mc('Quale errore indica la presa «troppo lontana»?', ['Braccia tese e busto proteso', 'Gomiti dentro e busto vicino al partner', 'Spalle basse e passo piccolo', 'Gomiti stretti e busto eretto'], 0, 'Meglio avvicinare il corpo con un passo.'),
      mc('Dove va la mano nel collar tie?', ['Sulla nuca', 'Sul gomito', 'Alla vita', 'Alla caviglia'], 0, 'Nuca = collar.'),
      fill('Il termine giapponese per «modo di prendere» è kumi-___.', ['kata'], 'Kumi-kata.'),
      order('Metti in ordine il controllo video', ['Spalle', 'gomiti', 'schiena'], 'Spalle basse, gomiti vicini, schiena lunga.'),
      mc('Con un partner, le prese si praticano…', ['Solo con un istruttore', 'Da soli, in totale autonomia', 'Ad alta velocità fin dall’inizio', 'Con le mani tese, senza supervisione'], 0, 'Richiede un istruttore.')
    ] });

  /* ---------- 6. O-GOSHI ENTRATA ---------- */
  T({ id: 'jud-ogoshi-entry', stage: 'L1', title: 'O-goshi no-gi: entrata a vuoto', summary: 'Solo tsukuri, lento e a vuoto: passo, rotazione e bacino sotto.',
    objectives: ['Descrivere la sequenza di tsukuri di o-goshi', 'Eseguire l’entrata a vuoto, lenta e senza completare la tecnica', 'Uscire in controllo in shizentai'],
    pages: [
      { h: 'A che cosa serve', b: '**O-goshi** (大腰) è una proiezione d’anca. In questa lezione studi solo l’**entrata** (tsukuri), **a vuoto** e lentamente: nessuna proiezione, nessun partner.\n\nL’entrata dimostra la sequenza e la coordinazione del movimento, **non l’efficacia contro un avversario**. ' + INSTR },
      { h: 'Il principio', b: 'Nell’entrata il bacino si porta **sotto il baricentro** dell’avversario immaginario, ruotando sul piede d’appoggio. Il braccio avvolge la schiena o la nuca (underhook o collar tie), l’altra mano controlla il polso o il bicipite.\n\nLa stabilità viene dalle **ginocchia flesse**, dalla schiena eretta e dal peso centrale.' },
      { h: 'Passo per passo', b: '- Presa no-gi a vuoto: sinistra al polso o al bicipite, destro a avvolgere la schiena (underhook) o la nuca.\n- **Passo** avanti, rotazione sul piede d’appoggio.\n- **Abbassa il bacino** sotto il baricentro immaginario, ginocchia flesse.\n- **Fermati** a controllo: non estendere le gambe né ruotare le spalle in avanti.\n- Esci tornando in **shizentai**.\n\nQuattro tempi lenti: presa, passo, rotazione, uscita.' },
      { h: 'Errori comuni e correzioni', b: '- **Ginocchia dritte** → piegale, il bacino scende «dalle ginocchia».\n- **Schiena curva** → petto alto, sguardo avanti.\n- **Piedi troppo distanti dall’asse** → avvicina il piede perno.\n- **Perdita di equilibrio** → riduci l’ampiezza e rallenta.\n- **Passi saltati** → ripeti ad alta voce i quattro tempi.' },
      { h: 'Esercizi e progressioni', b: '- Ripeti l’entrata più lentamente, contando 4 tempi.\n- Entrata + uscita + nuova entrata dal lato opposto.\n- Entrata dopo un tai sabaki.\n\nIncrementa solo quando la forma resta pulita.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** di lato. Tre punti:\n- le ginocchia sono flesse e la schiena eretta?\n- il piede perno è vicino all’asse del corpo?\n- esci in shizentai senza passi di recupero?\n\nNon valutare «se funziona»: valuta la forma.' },
      { h: 'Sicurezza e istruttore', b: '- **Nessuna proiezione**: il gesto si ferma prima di estendere e ruotare le spalle.\n- Niente carico in avanti, nessun salto.\n- Con dolore a schiena o ginocchia: stop.\n- Verifica della forma consigliata a un istruttore; il lavoro con partner e le cadute richiedono un istruttore.' },
      { h: 'Riepilogo', b: '- Solo tsukuri, a vuoto, lenta.\n- Presa no-gi, passo, rotazione, bacino sotto, uscita in shizentai.\n- Errori: ginocchia dritte, schiena curva, piedi lontani.\n- Autocontrollo: video di 20 s; un istruttore può confermare la forma.' }
    ],
    exercises: [
      mc('Un’entrata a vuoto dimostra…', ['La sequenza e la coordinazione, non l’efficacia contro un avversario', 'Che sai proiettare un avversario di qualsiasi peso e statura', 'Che sei pronto alla gara e puoi iscriverti al torneo', 'Che la tecnica è perfetta e non richiede più correzioni da parte dell’istruttore'], 0, 'Senza partner si allena solo il movimento.'),
      mc('Dove va il bacino nell’entrata?', ['Sopra il baricentro immaginario', 'Sotto il baricentro immaginario', 'Indietro', 'Fuori asse'], 1, 'Il bacino si porta sotto il baricentro.'),
      mc('Quale parte del gesto NON esegui?', ['Il passo e il posizionamento del piede', 'L’estensione di gambe e rotazione finale delle spalle', 'La rotazione del bacino con il busto eretto', 'L’uscita controllata, con ritorno alla postura iniziale e respiro libero'], 1, 'Il gesto si ferma a controllo, senza proiezione.'),
      fill('Il termine giapponese per la fase di entrata è ___ (tsukuri).', ['tsukuri'], 'Tsukuri = entrata e preparazione.'),
      order('Metti in ordine l’entrata', ['Presa', 'passo', 'rotazione', 'bacino', 'sotto', 'uscita'], 'Sequenza lenta di quattro-cinque tempi.'),
      mc('Che cosa fai con le ginocchia?', ['Le tengo dritte', 'Le fletto leggermente', 'Le blocco', 'Le divarico al massimo'], 1, 'Ginocchia flesse: stabilità e protezione.'),
      mc('Se perdi equilibrio durante la rotazione…', ['Riduco l’ampiezza e rallento', 'Accelero il movimento per recuperare', 'Mi lancio in avanti per finire il gesto', 'Salto per riprendere l’appoggio'], 0, 'La qualità viene prima.'),
      fill('Al termine torni in ___ (postura naturale).', ['shizentai'], 'Uscita controllata in shizentai.')
    ],
    test: [
      mc('Perché non completare la proiezione?', ['Non c’è partner e il gesto resta in sicurezza', 'Perché è proibito in tutti i dojo del mondo', 'Perché è troppo facile e non serve allenarla', 'Per risparmiare tempo e finire la seduta prima'], 0, 'Il lavoro è solo a vuoto.'),
      mc('Quale presa può avvolgere la schiena?', ['Underhook', 'Presa alla cintura', 'Presa al bavero', 'Nessuna'], 0, 'Underhook o collar tie.'),
      fill('La forma va verificata da un ___ qualificato.', ['istruttore'], 'La verifica è consigliabile.'),
      order('Metti in ordine il controllo video', ['Ginocchia', 'perno', 'uscita'], 'Ginocchia, piede perno, uscita.'),
      mc('Quale errore mostra le ginocchia bloccate?', ['Il bacino non scende', 'Il bacino scende bene', 'Il busto è eretto', 'Nessuno'], 0, 'Ginocchia dritte = bacino alto.')
    ] });

  /* ---------- 7. O-SOTO-GARI ---------- */
  T({ id: 'jud-osoto-entry', stage: 'L1', title: 'O-soto-gari no-gi: avanzata e posizionamento', summary: 'Solo avanzata e posizionamento del piede d’appoggio, senza alcuna spazzata.',
    objectives: ['Descrivere la posizione del piede d’appoggio in o-soto-gari', 'Eseguire avanzata e posizionamento a vuoto senza spazzata', 'Tornare in shizentai in modo controllato'],
    pages: [
      { h: 'A che cosa serve', b: '**O-soto-gari** (大外刈) è una tecnica di spazzata. In solitaria si allena **solo** avanzata e posizionamento del piede d’appoggio, a vuoto. **Non si esegue la spazzata.** ' + INSTR },
      { h: 'Il principio', b: 'La posizione del piede d’appoggio, a fianco dell’avversario immaginario, e la postura eretta sono ciò che conta. La mano sulla nuca (collar tie) e il polso controllano il tronco e il braccio.\n\nIl ginocchio d’appoggio è **morbido**; il busto non si china.' },
      { h: 'Passo per passo', b: '- Presa no-gi a vuoto: collar tie destro, polso sinistro.\n- Piccola avanzata di tsugi-ashi.\n- Il piede d’appoggio si **pianta a fianco** del piede dell’avversario immaginario, ginocchio morbido.\n- Il busto resta eretto, peso centrale.\n- **Fermati**: nessuna spazzata.\n- Torna in shizentai e ripeti dal lato opposto.' },
      { h: 'Errori comuni e correzioni', b: '- **Peso sui talloni** → senti il centro del piede.\n- **Piede d’appoggio troppo lontano** → accorcia l’avanzata.\n- **Perdita di equilibrio** → riduci l’ampiezza.\n- **Testa che oscilla** → mantieni la stessa altezza.\n- Busto che si china → petto alto, sguardo avanti.' },
      { h: 'Esercizi e progressioni', b: '- Entrata a sinistra e a destra alternate.\n- Entrata dopo uno spostamento a comando casuale.\n- Entrata + tai sabaki e ritorno.\n\nUna variabile alla volta.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** di lato. Tre punti:\n- il piede si ferma a fianco, non troppo lontano?\n- il busto resta eretto, il peso centrale?\n- esci in shizentai con equilibrio?' },
      { h: 'Sicurezza e istruttore', b: '- **Nessuna spazzata**: il piede libero non si muove in aria.\n- Niente colpi contro oggetti o persone.\n- Spazio 2 m × 2 m, pavimento antiscivolo; con dolore a ginocchio o schiena: stop.\n- Le cadute e il lavoro con partner richiedono un istruttore.' },
      { h: 'Riepilogo', b: '- Si allena solo avanzata e posizionamento.\n- Piede d’appoggio a fianco, ginocchio morbido, busto eretto.\n- Nessuna spazzata.\n- Un istruttore può verificare la forma.' }
    ],
    exercises: [
      mc('In autonomia, quale parte si simula in sicurezza?', ['Solo avanzata e posizionamento a vuoto', 'La proiezione completa su un compagno disteso', 'La spazzata contro un palo di sostegno', 'Nessuna parte: tutto va fatto con un partner'], 0, 'La spazzata non si esegue.'),
      mc('Dove si pianta il piede d’appoggio?', ['A fianco del piede dell’avversario immaginario', 'Dietro di sé, lontano dal piede dell’avversario', 'Molto lontano, oltre la lunghezza di un passo', 'In aria, sul punto di sollevarlo'], 0, 'A fianco, ginocchio morbido.'),
      mc('Che cosa significa «gari»?', ['Spazzata/falciata', 'Presa alla cintura', 'Salto sul posto', 'Caduta indietro'], 0, 'Gari = falciare/spazzare.'),
      fill('Il ginocchio d’appoggio resta ___.', ['morbido', 'flesso'], 'Mai bloccato.'),
      order('Metti in ordine il movimento', ['Presa', 'avanzata', 'piede', 'a', 'fianco', 'fermo', 'ritorno'], 'Poi si torna in shizentai.'),
      mc('Che cosa correggi se il piede è troppo lontano?', ['Accorcio l’avanzata', 'Allungo ancora il passo', 'Salto per avvicinarmi', 'Chiudo gli occhi e proseguo'], 0, 'L’avanzata corta mantiene l’equilibrio.'),
      mc('Quale mano è il collar tie nella presa descritta?', ['Quella destra sulla nuca', 'Quella sinistra al polso', 'Entrambe alla vita', 'Nessuna'], 0, 'Destra alla nuca, sinistra al polso.'),
      fill('Il busto resta ___.', ['eretto', 'dritto'], 'Non si china in avanti.')
    ],
    test: [
      mc('Perché non si esegue la spazzata?', ['Per sicurezza e perché manca un partner', 'Perché è troppo difficile per principianti assoluti', 'Perché è inutile in ogni contesto di pratica', 'Perché si usa sempre un muro come appoggio'], 0, 'La spazzata va ferma.'),
      mc('Con quale presa si inizia?', ['Collar tie e polso', 'Presa alla cintura', 'Presa al bavero', 'Nessuna'], 0, 'No-gi.'),
      fill('Il lavoro con partner richiede un ___.', ['istruttore'], 'Mai da soli.'),
      order('Metti in ordine il controllo video', ['Piede', 'busto', 'uscita'], 'Piede, busto, uscita.'),
      mc('Quale errore indica peso sui talloni?', ['Busto indietro', 'Busto eretto', 'Ginocchia morbide', 'Testa ferma'], 0, 'Peso sui talloni = busto indietro.')
    ] });

  /* ---------- 8. SEOI-NAGE ---------- */
  T({ id: 'jud-seoi-entry', stage: 'L1', title: 'Seoi-nage no-gi: rotazione e ingresso a vuoto', summary: 'Solo rotazione e ingresso, lenti e a vuoto, con busto eretto.',
    objectives: ['Descrivere pivot, ginocchia flesse e bacino sotto in seoi-nage', 'Eseguire l’ingresso a vuoto con busto eretto', 'Uscire con controllo senza caricare peso in avanti'],
    pages: [
      { h: 'A che cosa serve', b: '**Seoi-nage** (背負投) è una proiezione di spalla. Qui studi **solo rotazione e ingresso**, a vuoto e lentamente: nessun partner, nessuna proiezione. ' + INSTR },
      { h: 'Il principio', b: 'Il bacino va **sotto** il baricentro dell’avversario immaginario ruotando sul piede avanzato. Presa no-gi: polso sinistro e **underhook** destro. Il busto resta **eretto**: non si flette in avanti, per proteggere la schiena e mantenere equilibrio.' },
      { h: 'Passo per passo', b: '- Presa no-gi a vuoto: polso sinistro, underhook destro.\n- Passo avanti: pivot sul piede avanzato.\n- Ginocchia flesse, **bacino sotto**, spalla destra sotto l’ascella immaginaria.\n- Busto eretto, peso centrale.\n- **Fermati**: nessuna estensione e nessuna rotazione finale.\n- Esci con controllo in shizentai.' },
      { h: 'Errori comuni e correzioni', b: '- **Schiena curva** → petto alto, sguardo avanti.\n- **Ginocchia dritte** → flettile prima di ruotare.\n- **Piedi lontani dall’asse** → avvicina il piede perno.\n- **Sguardo ai piedi** → fissa un punto davanti a te.\n- **Perdita di equilibrio** → riduci l’ampiezza.' },
      { h: 'Esercizi e progressioni', b: '- Ingresso con braccio destro e sinistro.\n- Ingresso dopo kumi-kata a vuoto.\n- Ingresso + uscita + tai sabaki.\n\nPrima la forma, poi il ritmo.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** di lato. Tre punti:\n- il busto è eretto e la schiena lunga?\n- ginocchia flesse e bacino sotto?\n- esci in shizentai senza passi di recupero?' },
      { h: 'Sicurezza e istruttore', b: '- **Nessuna proiezione e nessun carico in avanti**: nessuno è sulle tue spalle.\n- Busto eretto: non flettere la schiena.\n- Spazio 2 m × 2 m, pavimento antiscivolo; con dolore a schiena, ginocchia o collo: stop.\n- Verifica della forma consigliata a un istruttore; partner e cadute solo con lui.' },
      { h: 'Riepilogo', b: '- Solo rotazione e ingresso, a vuoto, lenti.\n- Pivot, ginocchia flesse, bacino sotto, busto eretto.\n- Nessuna estensione né rotazione finale.\n- Istruttore per verifica e partner.' }
    ],
    exercises: [
      mc('Perché si mantiene il busto eretto?', ['Per sembrare più alti davanti al partner e all’istruttore', 'Per proteggere la schiena e mantenere equilibrio', 'Per tirare più forte con le braccia durante l’entrata', 'Non è importante: il busto può inclinarsi come si vuole'], 1, 'La schiena eretta protegge e stabilizza.'),
      mc('Quale presa no-gi si usa?', ['Polso sinistro e underhook destro', 'Bavero destro e manica sinistra come con il judogi', 'Presa alla cintura con due mani', 'Nessuna presa: si parte con le braccia lungo i fianchi'], 0, 'Polso + underhook.'),
      mc('Che cosa significa «nage»?', ['Proiezione', 'Presa al bavero', 'Caduta controllata', 'Rotazione del piede'], 0, 'Nage = proiezione.'),
      fill('Il pivot avviene sul piede ___.', ['avanzato', 'avanti'], 'Pivot sul piede avanzato.'),
      order('Metti in ordine l’ingresso', ['Presa', 'passo', 'pivot', 'bacino', 'sotto', 'uscita'], 'Sequenza lenta.'),
      mc('Che cosa NON esegui?', ['La rotazione del bacino e la posizione del piede', 'L’estensione e la rotazione finale delle spalle', 'Il pivot sul piede di appoggio', 'L’uscita controllata, con ritorno alla postura'], 1, 'Si ferma a controllo.'),
      mc('Se la schiena si curva?', ['Riduco l’ampiezza e tengo il petto alto', 'Scendo ancora più in basso per compensare', 'Chiudo gli occhi e proseguo comunque', 'Salto per riprendere un appoggio stabile'], 0, 'La schiena eretta ha priorità.'),
      fill('Le ginocchia restano ___.', ['flesse', 'morbide'], 'Né dritte né bloccate.')
    ],
    test: [
      mc('Dove va la spalla destra?', ['Sotto l’ascella immaginaria', 'Sopra la testa, a braccio teso', 'Dietro la schiena, a metà giro', 'In nessun punto preciso'], 0, 'Spalla sotto l’ascella.'),
      mc('Quale errore mostra lo sguardo ai piedi?', ['Il busto si flette in avanti', 'Il busto resta eretto con lo sguardo avanti', 'Le ginocchia sono morbide e il peso è ben distribuito', 'Il piede d’appoggio è a fianco di quello del partner'], 0, 'Guarda avanti.'),
      fill('Il lavoro con partner richiede un ___.', ['istruttore'], 'Sempre.'),
      order('Metti in ordine il controllo video', ['Busto', 'ginocchia', 'uscita'], 'Tre punti.'),
      mc('Perché non caricare peso in avanti?', ['Per sicurezza e stabilità', 'Perché è proibito dal regolamento', 'Perché sembra più bello all’occhio', 'Perché non importa dove stia il peso'], 0, 'Nessun carico in avanti.')
    ] });

  /* ---------- 9. DE-ASHI TIMING ---------- */
  T({ id: 'jud-deashi-timing', stage: 'L2', title: 'De-ashi-barai: il tempismo del passo', summary: 'Solo il ritmo del passo, a vuoto, senza alcuna spazzata.',
    objectives: ['Spiegare perché il tempismo conta più della forza', 'Eseguire un ritmo regolare di passi a vuoto e fermarsi nel punto di carico', 'Mantenere equilibrio con la gamba d’appoggio morbida'],
    pages: [
      { h: 'A che cosa serve', b: '**De-ashi-barai** (出足払) è una spazzata al piede che avanza. In solitaria si allena **solo il tempismo del passo, a vuoto**: nessuna spazzata contro oggetti o persone. ' + INSTR },
      { h: 'Il principio', b: 'In questa tecnica conta il **tempismo** con il passo dell’avversario, non la forza. Nel lavoro a vuoto si allena un ritmo regolare dei propri passi e si impara a **fermare il movimento** nel punto in cui il piede sarebbe «caricato».' },
      { h: 'Passo per passo', b: '- Muovi i piedi in ritmo regolare, per esempio in tsugi-ashi.\n- Conta mentalmente **1-2-3**.\n- Ferma il gesto al tempo 3, nel punto in cui il piede sarebbe caricato.\n- La gamba d’appoggio resta **morbida**.\n- Torna in shizentai e ricomincia.' },
      { h: 'Errori comuni e correzioni', b: '- **Ritmo irregolare** → conta ad alta voce.\n- **Peso sui talloni** → senti il centro del piede.\n- **Piedi che si incrociano** → passi corti.\n- **Perdita di equilibrio** → rallenta.' },
      { h: 'Esercizi e progressioni', b: '- Ritmo lento, poi veloce, poi lento.\n- Ritmo irregolare a comando casuale.\n- Aggiungi tai sabaki a metà.\n\nLa qualità viene prima della velocità.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** di lato. Tre punti:\n- il ritmo è regolare?\n- il gesto si ferma sempre nello stesso punto?\n- la gamba d’appoggio è morbida e l’equilibrio stabile?' },
      { h: 'Sicurezza e istruttore', b: '- **Nessuna spazzata**: il piede non va contro oggetti o persone.\n- Pavimento antiscivolo, spazio 2 m.\n- Stop con dolore a caviglie o ginocchia.\n- Verifica consigliata a un istruttore; partner e cadute solo con lui.' },
      { h: 'Riepilogo', b: '- De-ashi-barai = spazzata al piede che avanza.\n- Solo tempismo del passo, a vuoto.\n- Contare 1-2-3, fermarsi nel punto di carico.\n- Nessuna spazzata.' }
    ],
    exercises: [
      mc('In de-ashi-barai che cosa conta di più?', ['Il tempismo con il passo', 'La forza del braccio che tira', 'La velocità massima dei passi', 'La presa sul bavero del partner'], 0, 'Tempismo, non forza.'),
      mc('Che cosa significa «barai»?', ['Spazzare', 'Prendere', 'Cadere', 'Ruotare'], 0, 'Barai = spazzare.'),
      mc('Che cosa fai con la gamba d’appoggio?', ['La tengo morbida', 'La tengo bloccata e rigida', 'La alzo prima del contatto', 'La incrocio sull’altra gamba'], 0, 'Gamba d’appoggio morbida.'),
      fill('Il conteggio mentale è 1-2-___.', ['3', 'tre'], 'Ferma il gesto al tempo 3.'),
      order('Metti in ordine il ciclo', ['Ritmo', 'conta', 'fermati', 'torna', 'ricomincia'], 'Ciclo ripetuto.'),
      mc('Se il ritmo è irregolare?', ['Conto ad alta voce', 'Accelero il ritmo', 'Chiudo gli occhi per concentrarmi', 'Salto per riprendere il tempo'], 0, 'Il conteggio regolarizza il ritmo.'),
      mc('Quale variante è appropriata?', ['Ritmo lento-veloce-lento', 'Salti sul posto a piedi uniti', 'Corsa veloce in linea retta', 'Spazzata contro un palo'], 0, 'Variare il ritmo senza colpire.'),
      fill('Il lavoro è solo «a ___» (senza partner).', ['vuoto'], 'A vuoto.')
    ],
    test: [
      mc('Perché non si fa la spazzata?', ['Per sicurezza e perché manca un partner', 'Perché è inutile per capire il tempismo del passo', 'Perché richiede troppa forza fisica per l’allenamento', 'Perché è troppo facile e non insegna nulla'], 0, 'Solo ritmo.'),
      mc('Che cosa significa «de-ashi»?', ['Piede che avanza', 'Piede che indietreggia', 'Salto', 'Rotazione'], 0, 'De-ashi = piede che esce/avanza.'),
      fill('Il lavoro con partner richiede un ___.', ['istruttore'], 'Sempre.'),
      order('Metti in ordine il controllo video', ['Ritmo', 'punto', 'equilibrio'], 'Tre punti.'),
      mc('Quale errore indica piedi incrociati?', ['Passi troppo lunghi', 'Passi corti e ravvicinati', 'Ritmo regolare e fluido', 'Gamba morbida e ginocchio flesso'], 0, 'Passi corti evitano l’incrocio.')
    ] });

  /* ---------- 10. UCHIKOMI RITMO ---------- */
  T({ id: 'jud-uchikomi-rhythm', stage: 'L2', title: 'Uchikomi a vuoto: ritmo di entrata e uscita', summary: 'Ripetere un’entrata già imparata a vuoto in serie di qualità.',
    objectives: ['Descrivere l’uchikomi a vuoto e il suo scopo', 'Eseguire una serie di 5 con ritmo regolare e qualità costante', 'Fermarsi quando la postura peggiora'],
    pages: [
      { h: 'A che cosa serve', b: '**Uchikomi** (打込) è la ripetizione di un’entrata per fissare il movimento. In solitaria si ripete **a vuoto** un’entrata già appresa. Non simula un combattimento e non completa alcuna proiezione. ' + INSTR },
      { h: 'Il principio', b: 'Il cervello fissa il movimento con ripetizioni **controllate** e di qualità. Se la qualità cala, la ripetizione fissa l’errore: meglio meno ripetizioni, fatte bene.\n\nRitmo regolare e respiro libero sono parte della tecnica.' },
      { h: 'Passo per passo', b: '- Scegli **un’entrata già imparata** (per esempio o-goshi o seoi, a vuoto).\n- Serie di **5** ripetizioni, lente.\n- **Entra**, ferma il gesto, **esci** e ricomincia.\n- Ritmo regolare, respiro libero.\n- Cambia il lato a ogni serie.\n- Se la postura peggiora, fermati.' },
      { h: 'Errori comuni e correzioni', b: '- **Ritmo irregolare** → conta ad alta voce.\n- **Qualità che cala** → riduci le ripetizioni.\n- **Spalle alzate** → espira e abbassale.\n- **Perdita di equilibrio** → rallenta.' },
      { h: 'Esercizi e progressioni', b: '- Serie di 3 con un’entrata diversa per ogni serie.\n- Serie con pausa di un secondo tra entrata e uscita.\n- Serie a occhi chiusi solo nella fase di rientro e solo in un posto sicuro.\n\nSali solo se la qualità resta stabile.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi** (una serie). Tre punti:\n- la quinta ripetizione ha la stessa postura della prima?\n- il ritmo è regolare?\n- le spalle restano basse?' },
      { h: 'Sicurezza e istruttore', b: '- Nessuna proiezione completata, nessun salto.\n- Spazio libero, pavimento antiscivolo.\n- Pause tra le serie; con dolore: stop.\n- Verifica consigliata a un istruttore; partner, cadute e randori solo con lui.' },
      { h: 'Riepilogo', b: '- Uchikomi a vuoto = ripetizione controllata dell’entrata.\n- Serie di 5, ritmo regolare, cambio lato.\n- Se la qualità cala: stop.\n- Verifica con video e istruttore.' }
    ],
    exercises: [
      mc('Lo scopo dell’uchikomi a vuoto è…', ['Fissare il movimento con ripetizioni controllate', 'Fare più forza con ripetizioni veloci e pesanti', 'Simulare un combattimento completo con un partner resistente', 'Evitare errori saltando le ripetizioni difficili'], 0, 'Ripetizioni di qualità.'),
      mc('Quante ripetizioni per serie?', ['5', '50', '1', '100'], 0, 'Serie brevi.'),
      mc('Che cosa fai se la postura peggiora?', ['Mi fermo', 'Accelero', 'Continuo', 'Chiudo gli occhi'], 0, 'Stop.'),
      fill('Il lato si cambia a ogni ___.', ['serie'], 'Si alterna.'),
      order('Metti in ordine il ciclo', ['Entra', 'ferma', 'esci', 'ricomincia'], 'Ciclo di una ripetizione.'),
      mc('Quale variante è appropriata?', ['Pausa di un secondo tra entrata e uscita', 'Un salto prima di ogni entrata', 'Proiezione completa con un partner', 'Con partner senza alcun istruttore presente'], 0, 'Pausa.'),
      mc('Perché meno ripetizioni?', ['Per non fissare errori', 'Per stancarsi di meno e durare più a lungo', 'Per finire la sessione prima', 'Perché le ripetizioni non contano'], 0, 'La qualità viene prima.'),
      fill('L’uchikomi si esegue «a ___».', ['vuoto'], 'Senza partner.')
    ],
    test: [
      mc('Che cosa significa uchikomi?', ['Ripetizione dell’entrata', 'Caduta all’indietro controllata', 'Presa al bavero e manica', 'Proiezione completa del partner'], 0, 'Uchikomi = entrate ripetute.'),
      mc('Con gli occhi chiusi…', ['Solo nel rientro e in un posto sicuro', 'Sempre, per concentrarsi meglio sul movimento', 'Mai e poi mai, in nessuna circostanza', 'Solo con partner, durante l’entrata'], 0, 'Con prudenza.'),
      fill('Il lavoro con partner richiede un ___.', ['istruttore'], 'Sempre.'),
      order('Metti in ordine il controllo video', ['Postura', 'ritmo', 'spalle'], 'Tre punti.'),
      mc('Quale errore indica qualità che cala?', ['Spalle alte e postura peggiore', 'Ritmo regolare e respiro libero', 'Respiro libero e postura stabile', 'Cambio lato a ogni serie'], 0, 'Fermati.')
    ] });

  /* ---------- 11. SHRIMP ---------- */
  T({ id: 'jud-shrimp', stage: 'L3', title: 'Ne-waza: lo spostamento dell’anca (shrimp)', summary: 'Spostare l’anca a terra per creare spazio, lento e a vuoto su tappeto.',
    objectives: ['Eseguire lo shrimp sul tappeto, a vuoto e lentamente', 'Spingere con il piede e ritrarre le ginocchia', 'Mantenere il collo rilassato'],
    pages: [
      { h: 'A che cosa serve', b: 'Lo **shrimp** (エビ, «gambero») è uno spostamento dell’anca a terra. Serve a creare **spazio** nel lavoro di ne-waza. Qui lo alleni **da solo, a vuoto, su tappeto**, senza partner e senza sparring.' },
      { h: 'Il principio', b: 'Spingi con il piede, **ruoti sull’anca** e **ritrai le ginocchia**: l’anca si sposta di lato come un gambero. Il movimento viene dall’anca e dal piede, non dal collo né dalla testa.' },
      { h: 'Passo per passo', b: '- Sdraiato sulla schiena, **piedi appoggiati**, mani vicino al petto.\n- **Spingi con il piede** e sposta l’anca di lato.\n- Ritrai le ginocchia verso il petto.\n- Movimento **lento**, collo **rilassato**, senza girare la testa con forza.\n- Alterna destra e sinistra sulla lunghezza dello spazio.' },
      { h: 'Errori comuni e correzioni', b: '- **Collo teso** → rilassa la testa sul tappeto.\n- **Gambe rigide** → piegale e ritrai le ginocchia.\n- **Spinta del piede insufficiente** → spingi dal tallone.\n- **Movimento troppo rapido** → conta 3 tempi per fase.' },
      { h: 'Esercizi e progressioni', b: '- Shrimp con cambio di lato ogni 3 ripetizioni.\n- Shrimp + ritorno alla posizione di partenza.\n- Shrimp lento contando 3 tempi per fase.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi**. Tre punti:\n- l’anca si sposta di lato (non solo la schiena)?\n- il collo resta rilassato?\n- il movimento è regolare, senza strappi?' },
      { h: 'Sicurezza e istruttore', b: '- Solo su **tappeto o superficie morbida**, mai su pavimento duro.\n- Movimento lento; nessuno strappo al collo.\n- Stop con dolore a collo, schiena, anca.\n- Il lavoro a terra con partner richiede un istruttore.' },
      { h: 'Riepilogo', b: '- Shrimp = spostamento dell’anca per creare spazio.\n- Piede spinge, anca ruota, ginocchia si ritraggono.\n- Collo rilassato, lento, su tappeto.\n- Verifica con video.' }
    ],
    exercises: [
      mc('A che cosa serve lo shrimp?', ['Creare spazio spostando l’anca', 'Proiettare un avversario in piedi', 'Fare presa sul bavero del partner', 'Riscaldare solo le braccia'], 0, 'Spostamento dell’anca.'),
      mc('Con che cosa spingi?', ['Con il piede', 'Con la testa', 'Con il collo', 'Con le mani'], 0, 'Spingi con il piede.'),
      mc('Dove va la testa?', ['Rilassata sul tappeto', 'Girata con forza di lato', 'Alzata per guardare i piedi', 'Premuta contro il pavimento'], 0, 'Collo rilassato.'),
      fill('Il movimento si esegue su ___ (superficie morbida).', ['tappeto'], 'Mai su pavimento duro.'),
      order('Metti in ordine lo shrimp', ['Spingi', 'sposta', 'l’anca', 'ritrai', 'le', 'ginocchia'], 'Sequenza.'),
      mc('Se il collo è teso?', ['Rallento e rilasso', 'Accelero', 'Giro la testa con forza', 'Continuo'], 0, 'Collo rilassato.'),
      mc('Quale variante è appropriata?', ['Cambio lato ogni 3 ripetizioni', 'Con partner e nessun istruttore presente', 'Su pavimento duro, senza tappeto', 'Strappi veloci e sempre più forti'], 0, 'Variante lenta.'),
      fill('Per fase conti ___ tempi.', ['3', 'tre'], 'Lento.')
    ],
    test: [
      mc('Perché non su pavimento duro?', ['Per proteggere schiena e anca', 'Perché è scomodo e fa troppo rumore', 'Per il rumore nelle stanze vicine', 'Non importa: l’anca non si fa male'], 0, 'Tappeto.'),
      mc('Che cosa significa «shrimp»?', ['Gambero', 'Serpente', 'Ponte', 'Presa'], 0, 'Gambero.'),
      fill('Il lavoro a terra con partner richiede un ___.', ['istruttore'], 'Sempre.'),
      order('Metti in ordine il controllo video', ['Anca', 'collo', 'ritmo'], 'Tre punti.'),
      mc('Quale errore indica spinta insufficiente?', ['L’anca non si sposta', 'L’anca si sposta', 'Il collo è rilassato', 'Il ritmo è regolare'], 0, 'Spingi dal piede.')
    ] });

  /* ---------- 12. STAND-UP ---------- */
  T({ id: 'jud-standup', stage: 'L3', title: 'Rialzarsi in sicurezza: technical stand-up', summary: 'Tornare in piedi da seduto, con schiena neutra e mani pronte.',
    objectives: ['Eseguire il rialzo tecnico da seduto, lentamente', 'Mantenere la schiena neutra e le mani davanti al corpo', 'Chiudere in jigotai e poi in shizentai'],
    pages: [
      { h: 'A che cosa serve', b: 'Il **technical stand-up** è un modo controllato di **rialzarsi** da seduto. Qui lo alleni **da solo, su tappeto, lentamente**. Nessun partner e nessuna caduta nuova: parti già seduto.' },
      { h: 'Il principio', b: 'Il rialzo avviene con **schiena neutra** e controllo del corpo. Una mano resta dietro, il bacino si solleva, un piede passa all’indietro; le **mani rimangono davanti al corpo** e mai a sorreggere il collo.' },
      { h: 'Passo per passo', b: '- Da seduto: **una mano dietro**, piede opposto vicino.\n- **Solleva il bacino**.\n- Passa la gamba sotto e fai **un passo all’indietro** verso la postura.\n- Schiena neutra, mani davanti al corpo.\n- Chiudi in **jigotai**, poi in **shizentai**.' },
      { h: 'Errori comuni e correzioni', b: '- **Schiena curva** → petto alto.\n- **Mani non pronte** → portale davanti al corpo.\n- **Peso sui talloni** → senti il centro del piede.\n- **Perdita di equilibrio** → rallenta.' },
      { h: 'Esercizi e progressioni', b: '- Alza dal lato destro e dal lato sinistro.\n- Stand-up + due passi di tsugi-ashi.\n- Stand-up a comando, più veloce ma controllato.' },
      { h: 'Verificare da solo', b: 'Registra **20 secondi**. Tre punti:\n- la schiena è neutra?\n- le mani sono davanti al corpo?\n- chiudi in jigotai e poi in shizentai stabili?' },
      { h: 'Sicurezza e istruttore', b: '- Solo su tappeto, lento, **da seduto**: niente cadute.\n- Mani mai a sorreggere il collo.\n- Stop con dolore a polso, collo o schiena.\n- Il lavoro con partner richiede un istruttore.' },
      { h: 'Riepilogo', b: '- Stand-up = rialzo tecnico controllato.\n- Mano dietro, bacino su, passo indietro, mani davanti.\n- Schiena neutra, chiusura jigotai poi shizentai.\n- Verifica con video.' }
    ],
    exercises: [
      mc('Quale aspetto è prioritario?', ['Schiena neutra e controllo', 'Velocità massima di esecuzione', 'Saltare in piedi con uno scatto', 'Appoggiare il collo a terra'], 0, 'Controllo.'),
      mc('Da quale posizione parti?', ['Seduto', 'In piedi', 'In volo', 'A testa in giù'], 0, 'Da seduto.'),
      mc('Dove stanno le mani?', ['Davanti al corpo', 'Sul collo, intrecciate', 'Dietro la testa, intrecciate', 'Sotto le gambe incrociate'], 0, 'Mai a sorreggere il collo.'),
      fill('Si chiude in jigotai e poi in ___.', ['shizentai'], 'Postura naturale.'),
      order('Metti in ordine il rialzo', ['Solleva', 'il', 'bacino', 'passa', 'la', 'gamba', 'passo', 'indietro'], 'Sequenza.'),
      mc('Se perdi l’equilibrio?', ['Rallento', 'Accelero', 'Salto', 'Chiudo gli occhi'], 0, 'Lento.'),
      mc('Quale variante è appropriata?', ['Alzo dal lato destro e sinistro', 'Su pavimento duro, senza tappeto', 'Con un partner e nessun istruttore', 'Salto da terra con slancio'], 0, 'Alternare i lati.'),
      fill('La schiena resta ___.', ['neutra'], 'Mai curva.')
    ],
    test: [
      mc('Perché non sul pavimento duro?', ['Per sicurezza', 'Perché è scomodo', 'Per rumore', 'Non importa'], 0, 'Tappeto.'),
      mc('Che cosa significa «technical stand-up»?', ['Rialzo tecnico', 'Salto verticale rapido', 'Caduta controllata all’indietro', 'Presa a due mani'], 0, 'Rialzo.'),
      fill('Il lavoro con partner richiede un ___.', ['istruttore'], 'Sempre.'),
      order('Metti in ordine il controllo video', ['Schiena', 'mani', 'chiusura'], 'Tre punti.'),
      mc('Quale errore indica mani non pronte?', ['Mani lontane dal corpo', 'Mani davanti al corpo, pronte', 'Schiena neutra e sguardo avanti', 'Piede d’appoggio a fianco'], 0, 'Mani davanti.')
    ] });
})(window.ST = window.ST || {});
