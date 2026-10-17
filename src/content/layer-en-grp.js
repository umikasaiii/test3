(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A('jud-posture', {
    title: { t: 'Posture: shizentai and jigotai', it: 'Postura: shizentai e jigotai' },
    sum: [
      { t: 'Every judo action starts from a stable ⟦posture⟧ that is ready to move.', it: 'Ogni gesto del judo parte da una postura stabile e pronta a muoversi.' },
      { t: 'The two basic postures are ⟦shizentai⟧, the natural one, and ⟦jigotai⟧, the defensive one, which is lower and wider.', it: 'Le due posture di base sono shizentai, quella naturale, e jigotai, quella difensiva, più bassa e più larga.' },
      { t: 'You are stable when your ⟦centre of gravity⟧ falls inside the ⟦base of support⟧, the area between your feet.', it: 'Sei stabile quando il baricentro cade dentro la base di appoggio, l’area tra i piedi.' },
      { t: 'In both postures, keep your weight at the centre of the foot, with ⟦soft knees⟧ and a long back.', it: 'In entrambe le posture tieni il peso al centro del piede, con ginocchia morbide e schiena lunga.' },
      { t: 'Common mistakes are weight on the heels, raised shoulders, looking at your feet and locked knees.', it: 'Errori comuni sono il peso sui talloni, le spalle alzate, lo sguardo ai piedi e le ginocchia bloccate.' },
      { t: 'To check yourself, record a ⟦side video⟧ of 20 seconds and look at three points.', it: 'Per controllarti, registra un video laterale di 20 secondi e guarda tre punti.' },
      { t: 'You need clear space of at least 2 m × 2 m, and you stop if you feel pain.', it: 'Serve spazio libero di almeno 2 m × 2 m, e ti fermi se senti dolore.' }
    ],
    gloss: [
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'jigotai', it: 'postura difensiva, più bassa e larga' },
      { w: 'base of support', it: 'base di appoggio' },
      { w: 'posture', it: 'postura' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'soft knees', it: 'ginocchia morbide' },
      { w: 'side video', it: 'video laterale' },
      { w: 'heels', it: 'talloni' },
      { w: 'shoulders', it: 'spalle' }
    ]
  });
  A('jud-ayumi-tsugi', {
    title: { t: 'Footwork: ayumi-ashi and tsugi-ashi', it: 'Spostamenti: ayumi-ashi e tsugi-ashi' },
    sum: [
      { t: 'Before any technique you must be able to move without losing your ⟦posture⟧.', it: 'Prima di qualsiasi tecnica devi saper muoverti senza perdere la postura.' },
      { t: 'In ⟦ayumi-ashi⟧ the feet alternate like normal steps, and they never cross.', it: 'Nell’ayumi-ashi i piedi si alternano come in passi normali, e non si incrociano mai.' },
      { t: 'In ⟦tsugi-ashi⟧ the front foot advances and the back foot follows without passing it.', it: 'Nel tsugi-ashi il piede davanti avanza e quello dietro lo segue senza superarlo.' },
      { t: 'The feet ⟦slide⟧ close to the ⟦floor⟧, and your head stays at the same height.', it: 'I piedi scivolano vicino al pavimento e la testa resta alla stessa altezza.' },
      { t: 'Typical mistakes are ⟦crossed feet⟧, steps that are too wide and a head that moves up and down.', it: 'Errori tipici sono piedi incrociati, passi troppo larghi e testa che sale e scende.' },
      { t: 'You work alone on a line of about 2 m, with no running or jumping.', it: 'Lavori da solo su una linea di circa 2 m, senza corsa né salti.' },
      { t: 'Record 20 seconds from the side and check three points.', it: 'Registra 20 secondi di lato e controlla tre punti.' }
    ],
    gloss: [
      { w: 'ayumi-ashi', it: 'passi normali con piedi alternati' },
      { w: 'tsugi-ashi', it: 'passo in cui il piede dietro segue senza superare' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'posture', it: 'postura' },
      { w: 'slide', it: 'scivolare' },
      { w: 'head height', it: 'altezza della testa' },
      { w: 'crossed feet', it: 'piedi incrociati' },
      { w: 'floor', it: 'pavimento' }
    ]
  });
  A('jud-tai-sabaki', {
    title: { t: 'Tai sabaki: body rotations', it: 'Tai sabaki: rotazioni del corpo' },
    sum: [
      { t: '⟦Tai sabaki⟧ means managing the body by changing direction while turning on the spot.', it: 'Tai sabaki significa gestione del corpo: cambiare orientamento ruotando sul posto.' },
      { t: 'The two basic turns are ⟦mae-mawari⟧, forward, and ⟦ushiro-mawari⟧, backward, at 90° and 180°.', it: 'Le due rotazioni fondamentali sono mae-mawari, in avanti, e ushiro-mawari, indietro, a 90° e 180°.' },
      { t: 'The body turns around a ⟦vertical axis⟧ through the ⟦pivot foot⟧.', it: 'Il corpo ruota attorno a un asse verticale che passa per il piede perno.' },
      { t: '⟦Hips⟧ and shoulders must turn together, otherwise the axis bends and you lose balance.', it: 'Bacino e spalle devono girare insieme, altrimenti l’asse si piega e perdi l’equilibrio.' },
      { t: 'Pivot on the ball of the supporting foot, keep the knee soft and finish in a ⟦stable posture⟧.', it: 'Pivota sulla punta del piede d’appoggio, tieni il ginocchio morbido e chiudi in postura stabile.' },
      { t: 'Go slowly first: 4 seconds for each rotation, then 2.', it: 'Prima lento: 4 secondi per ogni rotazione, poi 2.' },
      { t: 'You need a space of 2 m × 2 m, and you stop if your knee hurts.', it: 'Serve uno spazio di 2 m × 2 m, e ti fermi se il ginocchio fa male.' }
    ],
    gloss: [
      { w: 'tai sabaki', it: 'gestione del corpo, rotazione sul posto' },
      { w: 'mae-mawari', it: 'rotazione in avanti' },
      { w: 'ushiro-mawari', it: 'rotazione indietro' },
      { w: 'vertical axis', it: 'asse verticale' },
      { w: 'pivot foot', it: 'piede perno' },
      { w: 'hips', it: 'bacino' },
      { w: 'soft knee', it: 'ginocchio morbido' },
      { w: 'stable posture', it: 'postura stabile' },
      { w: 'shoulders', it: 'spalle' }
    ]
  });
  A('jud-kuzushi', {
    title: { t: 'Kuzushi: the eight directions of balance', it: 'Kuzushi: le otto direzioni dell’equilibrio' },
    sum: [
      { t: '⟦Kuzushi⟧ is the loss of balance that comes before every technique.', it: 'Il kuzushi è lo squilibrio che precede ogni tecnica.' },
      { t: 'Working alone, you do not unbalance anyone: you learn your own ⟦limit of stability⟧.', it: 'Da solo non squilibri nessuno: impari a conoscere il tuo limite di stabilità.' },
      { t: 'The classic directions are eight, called ⟦happo-no-kuzushi⟧: four main ones and four ⟦diagonals⟧.', it: 'Le direzioni classiche sono otto, chiamate happo-no-kuzushi: quattro principali e quattro diagonali.' },
      { t: 'You are stable while your ⟦centre of gravity⟧ stays inside the ⟦base of support⟧.', it: 'Sei stabile finché il baricentro resta dentro la base di appoggio.' },
      { t: 'Shift your weight slowly towards one point without lifting your feet, then return to the centre.', it: 'Sposta lentamente il peso verso un punto senza staccare i piedi, poi torna al centro.' },
      { t: 'The limit is personal and changes with posture; it is wider in ⟦jigotai⟧.', it: 'Il limite è personale e cambia con la postura; in jigotai è più ampio.' },
      { t: 'Never go past the limit until you fall, and kuzushi on another person is done only with an instructor.', it: 'Non andare mai oltre il limite fino a cadere, e il kuzushi su un’altra persona si fa solo con un istruttore.' }
    ],
    gloss: [
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'happo-no-kuzushi', it: 'le otto direzioni dello squilibrio' },
      { w: 'limit of stability', it: 'limite di stabilità' },
      { w: 'jigotai', it: 'postura difensiva, più bassa e larga' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'base of support', it: 'base di appoggio' },
      { w: 'diagonals', it: 'diagonali' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-kumikata', {
    title: { t: 'No-gi kumi-kata: wrist, bicep, collar and underhook', it: 'Kumi-kata no-gi: polso, bicipite, collo e underhook' },
    sum: [
      { t: '⟦Kumi-kata⟧ is the way of gripping, and without a judogi the sleeve and lapel grips disappear.', it: 'Il kumi-kata è il modo di prendere, e senza judogi le prese a manica e bavero spariscono.' },
      { t: 'The four no-gi grips are the ⟦wrist control⟧, the ⟦bicep tie⟧, the ⟦collar tie⟧ and the ⟦underhook⟧.', it: 'Le quattro prese no-gi sono wrist control, bicep tie, collar tie e underhook.' },
      { t: 'You practise in the air, with no partner and no real grip.', it: 'Lavori a vuoto, senza partner e senza una presa reale.' },
      { t: 'A grip is a structure, not a vice: elbows in, shoulders low and weight at the centre.', it: 'La presa è una struttura, non una morsa: gomiti dentro, spalle basse e peso al centro.' },
      { t: 'Its purpose is to control and to create ⟦kuzushi⟧, not to hold with finger strength alone.', it: 'Serve a controllare e a creare kuzushi, non a trattenere con la sola forza delle dita.' },
      { t: 'Change grips with a small step of ⟦tsugi-ashi⟧, keeping your posture, and alternate right and left.', it: 'Cambia presa con un piccolo passo di tsugi-ashi, mantenendo la postura, e alterna destra e sinistra.' },
      { t: 'Work with a partner only with a qualified instructor, and stop if shoulders or elbows hurt.', it: 'Il lavoro con un partner solo con un istruttore qualificato, e fermati se spalle o gomiti fanno male.' }
    ],
    gloss: [
      { w: 'kumi-kata', it: 'modo di prendere, le prese' },
      { w: 'wrist control', it: 'presa al polso' },
      { w: 'bicep tie', it: 'presa al bicipite' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsugi-ashi', it: 'passo in cui il piede dietro segue' },
      { w: 'judogi', it: 'divisa del judo' },
      { w: 'no-gi', it: 'senza judogi' }
    ]
  });
  A('jud-ogoshi-entry', {
    title: { t: 'No-gi o-goshi: the entry in the air', it: 'O-goshi no-gi: entrata a vuoto' },
    sum: [
      { t: '⟦O-goshi⟧ is a ⟦hip throw⟧, but here you study only the entry, called ⟦tsukuri⟧.', it: 'L’o-goshi è una proiezione d’anca, ma qui studi solo l’entrata, chiamata tsukuri.' },
      { t: 'You work in the air and slowly, with no partner and no throw.', it: 'Lavori a vuoto e lentamente, senza partner e senza proiezione.' },
      { t: 'The entry shows the sequence and coordination, not the effectiveness against an opponent.', it: 'L’entrata dimostra la sequenza e la coordinazione, non l’efficacia contro un avversario.' },
      { t: 'The hips go under the imaginary opponent’s ⟦centre of gravity⟧ while you turn on the supporting foot.', it: 'Il bacino va sotto il baricentro dell’avversario immaginario ruotando sul piede d’appoggio.' },
      { t: 'The four slow beats are grip, step, rotation and exit back into ⟦shizentai⟧.', it: 'I quattro tempi lenti sono presa, passo, rotazione e uscita in shizentai.' },
      { t: 'Bend your knees, keep your back upright, and stop before extending the legs or turning the shoulders.', it: 'Fletti le ginocchia, tieni la schiena eretta e fermati prima di estendere le gambe o ruotare le spalle.' },
      { t: 'A qualified ⟦instructor⟧ should check your form, and any work with a partner requires one.', it: 'Un istruttore qualificato dovrebbe verificare la forma, e ogni lavoro con un partner lo richiede.' }
    ],
    gloss: [
      { w: 'o-goshi', it: 'proiezione d’anca' },
      { w: 'tsukuri', it: 'entrata, preparazione della tecnica' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'pivot foot', it: 'piede perno' },
      { w: 'hip throw', it: 'proiezione d’anca' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-osoto-entry', {
    title: { t: 'No-gi o-soto-gari: advance and foot placement', it: 'O-soto-gari no-gi: avanzata e posizionamento' },
    sum: [
      { t: '⟦O-soto-gari⟧ is a sweeping technique, but alone you train only the advance and the foot placement.', it: 'L’o-soto-gari è una spazzata, ma da solo alleni solo l’avanzata e il posizionamento del piede.' },
      { t: 'You work in the air and you do not perform the ⟦sweep⟧.', it: 'Lavori a vuoto e non esegui la spazzata.' },
      { t: 'Use a ⟦collar tie⟧ with one hand and a wrist grip with the other to control the imaginary opponent.', it: 'Usi un collar tie con una mano e una presa al polso con l’altra per controllare l’avversario immaginario.' },
      { t: 'Make a small advance of ⟦tsugi-ashi⟧ and plant the ⟦supporting foot⟧ beside the imaginary opponent’s foot.', it: 'Fai una piccola avanzata di tsugi-ashi e pianti il piede d’appoggio a fianco del piede dell’avversario immaginario.' },
      { t: 'The supporting knee stays soft, the trunk stays upright and the weight stays central.', it: 'Il ginocchio d’appoggio resta morbido, il busto eretto e il peso centrale.' },
      { t: 'Stop there, return to ⟦shizentai⟧ and repeat on the opposite side.', it: 'Fermati lì, torna in shizentai e ripeti dal lato opposto.' },
      { t: 'No hits against objects or people; falls and partner work require an ⟦instructor⟧.', it: 'Nessun colpo contro oggetti o persone; cadute e lavoro con partner richiedono un istruttore.' }
    ],
    gloss: [
      { w: 'o-soto-gari', it: 'grande spazzata esterna' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'tsugi-ashi', it: 'passo in cui il piede dietro segue' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'supporting foot', it: 'piede d’appoggio' },
      { w: 'sweep', it: 'spazzata' },
      { w: 'soft knee', it: 'ginocchio morbido' },
      { w: 'upright trunk', it: 'busto eretto' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-seoi-entry', {
    title: { t: 'No-gi seoi-nage: rotation and entry in the air', it: 'Seoi-nage no-gi: rotazione e ingresso a vuoto' },
    sum: [
      { t: '⟦Seoi-nage⟧ is a ⟦shoulder throw⟧, but here you study only the rotation and the entry.', it: 'Il seoi-nage è una proiezione di spalla, ma qui studi solo rotazione e ingresso.' },
      { t: 'You work in the air and slowly, with no partner and no throw.', it: 'Lavori a vuoto e lentamente, senza partner e senza proiezione.' },
      { t: 'The grip is the left wrist and the right ⟦underhook⟧, and you ⟦pivot⟧ on the advanced foot.', it: 'La presa è il polso sinistro e l’underhook destro, e pivoti sul piede avanzato.' },
      { t: 'Bend your knees and bring the hips under the imaginary opponent’s ⟦centre of gravity⟧.', it: 'Fletti le ginocchia e porta il bacino sotto il baricentro dell’avversario immaginario.' },
      { t: 'Keep the trunk upright; it does not bend forward, to protect the back and keep balance.', it: 'Il busto resta eretto; non si flette in avanti, per proteggere la schiena e mantenere l’equilibrio.' },
      { t: 'Stop with no extension and no final rotation, then exit in ⟦shizentai⟧.', it: 'Fermati senza estensione né rotazione finale, poi esci in shizentai.' },
      { t: 'There is no throw and no forward load; partner work and falls only with an ⟦instructor⟧.', it: 'Nessuna proiezione e nessun carico in avanti; partner e cadute solo con un istruttore.' }
    ],
    gloss: [
      { w: 'seoi-nage', it: 'proiezione di spalla' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'kumi-kata', it: 'le prese' },
      { w: 'shoulder throw', it: 'proiezione di spalla' },
      { w: 'pivot', it: 'pivotare, ruotare sul perno' },
      { w: 'upright trunk', it: 'busto eretto' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-deashi-timing', {
    title: { t: 'De-ashi-barai: the timing of the step', it: 'De-ashi-barai: il tempismo del passo' },
    sum: [
      { t: '⟦De-ashi-barai⟧ is a ⟦sweep⟧ to the advancing foot.', it: 'Il de-ashi-barai è una spazzata al piede che avanza.' },
      { t: 'Alone you train only the timing of the step, in the air, with no sweep against objects or people.', it: 'Da solo alleni solo il tempismo del passo, a vuoto, senza spazzate contro oggetti o persone.' },
      { t: 'What counts is ⟦timing⟧ with the opponent’s step, not strength.', it: 'Conta il tempismo con il passo dell’avversario, non la forza.' },
      { t: 'Move your feet in a ⟦regular rhythm⟧, for example in ⟦tsugi-ashi⟧, and count 1-2-3 in your head.', it: 'Muovi i piedi in ritmo regolare, per esempio in tsugi-ashi, e conta mentalmente 1-2-3.' },
      { t: 'Stop the movement at beat 3, where the foot would be loaded, and keep the ⟦supporting leg⟧ soft.', it: 'Ferma il gesto al tempo 3, dove il piede sarebbe caricato, e tieni morbida la gamba d’appoggio.' },
      { t: 'Common mistakes are an irregular rhythm, weight on the heels and ⟦crossed feet⟧.', it: 'Errori comuni sono il ritmo irregolare, il peso sui talloni e i piedi che si incrociano.' },
      { t: 'Use a non-slip floor and 2 m of space, and stop if ankles or knees hurt.', it: 'Usa un pavimento antiscivolo e 2 m di spazio, e fermati se caviglie o ginocchia fanno male.' }
    ],
    gloss: [
      { w: 'de-ashi-barai', it: 'spazzata al piede che avanza' },
      { w: 'timing', it: 'tempismo' },
      { w: 'tsugi-ashi', it: 'passo in cui il piede dietro segue' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'sweep', it: 'spazzata' },
      { w: 'regular rhythm', it: 'ritmo regolare' },
      { w: 'supporting leg', it: 'gamba d’appoggio' },
      { w: 'crossed feet', it: 'piedi incrociati' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-uchikomi-rhythm', {
    title: { t: 'Uchikomi in the air: rhythm of entry and exit', it: 'Uchikomi a vuoto: ritmo di entrata e uscita' },
    sum: [
      { t: '⟦Uchikomi⟧ is the repetition of an ⟦entry⟧ to fix the movement.', it: 'L’uchikomi è la ripetizione di un’entrata per fissare il movimento.' },
      { t: 'Alone, you repeat an entry you already know, in the air; it does not simulate a fight or complete a throw.', it: 'Da solo ripeti a vuoto un’entrata già appresa; non simula un combattimento e non completa alcuna proiezione.' },
      { t: 'The brain fixes the movement through controlled, good-quality repetitions.', it: 'Il cervello fissa il movimento con ripetizioni controllate e di qualità.' },
      { t: 'If quality drops, repetition fixes the error, so fewer repetitions done well are better.', it: 'Se la qualità cala, la ripetizione fissa l’errore, quindi meglio meno ripetizioni fatte bene.' },
      { t: 'Do a ⟦set⟧ of 5 slow repetitions: enter, stop the movement, exit and start again.', it: 'Fai una serie di 5 ripetizioni lente: entra, ferma il gesto, esci e ricomincia.' },
      { t: 'Keep a ⟦regular rhythm⟧, breathe freely and change side on every set.', it: 'Mantieni un ritmo regolare, respira liberamente e cambia lato a ogni serie.' },
      { t: 'Ask an ⟦instructor⟧ to check your form; partner work, falls and ⟦randori⟧ only with one.', it: 'Chiedi a un istruttore di verificare la forma; partner, cadute e randori solo con lui.' }
    ],
    gloss: [
      { w: 'uchikomi', it: 'ripetizione di un’entrata per fissarla' },
      { w: 'randori', it: 'allenamento libero con partner' },
      { w: 'o-goshi', it: 'proiezione d’anca' },
      { w: 'seoi-nage', it: 'proiezione di spalla' },
      { w: 'entry', it: 'entrata' },
      { w: 'set', it: 'serie' },
      { w: 'regular rhythm', it: 'ritmo regolare' },
      { w: 'controlled repetitions', it: 'ripetizioni controllate' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-shrimp', {
    title: { t: 'Ne-waza: the hip escape (shrimp)', it: 'Ne-waza: lo spostamento dell’anca (shrimp)' },
    sum: [
      { t: 'The ⟦shrimp⟧ is a ⟦hip⟧ movement on the ground that creates space in ⟦ne-waza⟧.', it: 'Lo shrimp è uno spostamento dell’anca a terra che crea spazio nel ne-waza.' },
      { t: 'You train it alone, in the air, on a ⟦mat⟧, with no partner and no ⟦sparring⟧.', it: 'Lo alleni da solo, a vuoto, su tappeto, senza partner e senza sparring.' },
      { t: 'Lie on your back with your feet on the floor and your hands near your chest.', it: 'Sdraiato sulla schiena, con i piedi appoggiati e le mani vicino al petto.' },
      { t: 'Push with your foot, turn on the hip and draw the ⟦knees⟧ in, like a shrimp.', it: 'Spingi con il piede, ruota sull’anca e ritrai le ginocchia, come un gambero.' },
      { t: 'The movement comes from the hip and the foot, not from the neck or the head.', it: 'Il movimento viene dall’anca e dal piede, non dal collo né dalla testa.' },
      { t: 'Keep the movement slow and the neck relaxed, and alternate right and left.', it: 'Tieni il movimento lento e il collo rilassato, e alterna destra e sinistra.' },
      { t: 'Work only on a mat or a soft surface, and stop if neck, back or hip hurt.', it: 'Lavora solo su tappeto o superficie morbida e fermati se collo, schiena o anca fanno male.' }
    ],
    gloss: [
      { w: 'shrimp', it: 'spostamento dell’anca a terra, «gambero»' },
      { w: 'ne-waza', it: 'lavoro a terra' },
      { w: 'hip', it: 'anca' },
      { w: 'create space', it: 'creare spazio' },
      { w: 'mat', it: 'tappeto' },
      { w: 'relaxed neck', it: 'collo rilassato' },
      { w: 'knees', it: 'ginocchia' },
      { w: 'push with the foot', it: 'spingere con il piede' },
      { w: 'sparring', it: 'combattimento di allenamento' }
    ]
  });
  A('jud-standup', {
    title: { t: 'Getting up safely: the technical stand-up', it: 'Rialzarsi in sicurezza: technical stand-up' },
    sum: [
      { t: 'The ⟦technical stand-up⟧ is a controlled way to get up from a ⟦seated⟧ position.', it: 'Il technical stand-up è un modo controllato di rialzarsi da seduto.' },
      { t: 'You train it alone, on a ⟦mat⟧ and slowly; you start already seated, so there is no new fall.', it: 'Lo alleni da solo, su tappeto e lentamente; parti già seduto, quindi non c’è nessuna caduta nuova.' },
      { t: 'Keep a ⟦neutral back⟧ and control of your body while you rise.', it: 'Ti rialzi con schiena neutra e controllo del corpo.' },
      { t: 'One hand stays behind, the ⟦hips⟧ lift and one foot steps back.', it: 'Una mano resta dietro, il bacino si solleva e un piede passa all’indietro.' },
      { t: 'Your hands stay in front of your body and never support your neck.', it: 'Le mani restano davanti al corpo e mai a sorreggere il collo.' },
      { t: 'Finish in ⟦jigotai⟧ and then in ⟦shizentai⟧.', it: 'Chiudi in jigotai e poi in shizentai.' },
      { t: 'Work only on a mat, and stop if wrist, neck or back hurt.', it: 'Lavora solo su tappeto e fermati se polso, collo o schiena fanno male.' }
    ],
    gloss: [
      { w: 'technical stand-up', it: 'rialzo tecnico controllato' },
      { w: 'jigotai', it: 'postura difensiva, più bassa e larga' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'neutral back', it: 'schiena neutra' },
      { w: 'hips', it: 'bacino' },
      { w: 'seated', it: 'da seduto' },
      { w: 'mat', it: 'tappeto' },
      { w: 'step back', it: 'passo all’indietro' },
      { w: 'hands in front', it: 'mani davanti al corpo' }
    ]
  });
  A('jud-ushiro-ukemi-lying', {
    title: { t: 'Ushiro ukemi 1: backward fall from lying', it: 'Ushiro ukemi 1: caduta indietro da sdraiato' },
    sum: [
      { t: '⟦Ukemi⟧ are learned from the bottom up: first lying, then seated, squatting and standing.', it: 'Gli ukemi si imparano dal basso verso l’alto: prima da sdraiato, poi da seduto, accovacciato e in piedi.' },
      { t: 'In this first step of ⟦ushiro ukemi⟧ you lie down, so there is no height and you focus on form.', it: 'In questo primo gradino dell’ushiro ukemi sei sdraiato, quindi non c’è altezza e ti concentri sulla forma.' },
      { t: 'The two protective gestures are the ⟦chin on the chest⟧ and the arm ⟦slap⟧.', it: 'I due gesti che proteggono sono il mento sul petto e la battuta del braccio.' },
      { t: 'Slap with the ⟦whole arm⟧ at 30–45° from the body, palm down, while you ⟦breathe out⟧.', it: 'Batti con tutto il braccio a 30–45° dal corpo, palmo in giù, mentre espiri.' },
      { t: 'Practise only on a ⟦tatami⟧ or a thick mat, never on a hard floor.', it: 'Pratica solo su tatami o tappeto spesso, mai su pavimento duro.' },
      { t: 'Do 10 slow repetitions, and stop at once with neck or back pain, dizziness or a blow to the head.', it: 'Fai 10 ripetizioni lente e fermati subito con dolore a collo o schiena, giramenti di testa o un colpo alla testa.' },
      { t: 'A video helps, but it does not replace an instructor’s eye and does not certify that the fall is safe.', it: 'Il video aiuta, ma non sostituisce l’occhio di un istruttore e non certifica che la caduta sia sicura.' }
    ],
    gloss: [
      { w: 'ukemi', it: 'cadute, arte di cadere' },
      { w: 'ushiro ukemi', it: 'caduta all’indietro' },
      { w: 'slap', it: 'battuta del braccio sul tappeto' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'breathe out', it: 'espirare' },
      { w: 'whole arm', it: 'tutto il braccio' },
      { w: 'dizziness', it: 'giramenti di testa' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-yoko-ukemi-lying', {
    title: { t: 'Yoko ukemi 1: side fall from lying', it: 'Yoko ukemi 1: caduta laterale da sdraiato' },
    sum: [
      { t: 'The side fall, ⟦yoko ukemi⟧, is the most used fall in judo.', it: 'La caduta laterale, yoko ukemi, è la più usata nel judo.' },
      { t: 'Lying on your side, you learn the ⟦side slap⟧ and the leg position with no height.', it: 'Sdraiato sul fianco, impari la battuta laterale e la posizione delle gambe senza altezza.' },
      { t: 'The prerequisite is a solid ⟦ushiro ukemi⟧: at least 10 clean repetitions in a row, in two different sessions.', it: 'Il prerequisito è un ushiro ukemi consolidato: almeno 10 ripetizioni pulite di fila, in due sessioni diverse.' },
      { t: 'The ⟦lower arm⟧ slaps at 30–45° with the palm down, and the upper arm crosses the chest.', it: 'Il braccio basso batte a 30–45° con il palmo in giù, e il braccio alto incrocia il petto.' },
      { t: 'Keep the ⟦chin on the chest⟧ and the legs slightly apart and soft, never crossed or together.', it: 'Mento sul petto e gambe leggermente divaricate e morbide, mai incrociate né unite.' },
      { t: 'Do 10 slow repetitions per side, only on a ⟦tatami⟧ or thick mat.', it: 'Fai 10 ripetizioni lente per lato, solo su tatami o tappeto spesso.' },
      { t: 'Stop immediately with neck or back pain, ⟦dizziness⟧, a blow to the head or tingling.', it: 'Fermati subito con dolore a collo o schiena, giramenti di testa, un colpo alla testa o formicolio.' }
    ],
    gloss: [
      { w: 'yoko ukemi', it: 'caduta laterale' },
      { w: 'ushiro ukemi', it: 'caduta all’indietro' },
      { w: 'ukemi', it: 'cadute' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'side slap', it: 'battuta laterale' },
      { w: 'lower arm', it: 'braccio basso' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'legs apart', it: 'gambe divaricate' },
      { w: 'dizziness', it: 'giramenti di testa' }
    ]
  });
  A('jud-ushiro-ukemi-seated', {
    title: { t: 'Ushiro ukemi 2: backward fall from seated', it: 'Ushiro ukemi 2: caduta indietro da seduto' },
    sum: [
      { t: 'In this step there is a small movement for the first time: from ⟦seated⟧ to lying.', it: 'In questo gradino c’è per la prima volta un piccolo movimento: dal seduto allo sdraiato.' },
      { t: 'You learn to round your back and to time the ⟦slap⟧ at the moment of ⟦contact⟧.', it: 'Impari ad arrotondare la schiena e a dare il tempo alla battuta nel momento del contatto.' },
      { t: 'Keep your chin on your chest and roll back on a ⟦rounded back⟧, so the head never touches the mat.', it: 'Tieni il mento sul petto e rotola all’indietro sulla schiena arrotondata, così la testa non tocca mai il tappeto.' },
      { t: 'Slap at 30–45° at the moment of contact, breathing out.', it: 'Batti a 30–45° nel momento del contatto, espirando.' },
      { t: 'The ⟦previous step⟧, yoko ⟦ukemi⟧ lying, must be solid: 10 clean repetitions in two sessions.', it: 'Il gradino precedente, yoko ukemi da sdraiato, deve essere consolidato: 10 ripetizioni pulite in due sessioni.' },
      { t: 'Do 5 repetitions, then rest, only on a ⟦tatami⟧ or thick mat.', it: 'Fai 5 ripetizioni, poi riposo, solo su tatami o tappeto spesso.' },
      { t: 'If the head touches the mat, bring the chin closer and go back to the first step if needed.', it: 'Se la testa tocca il tappeto, avvicina il mento al petto e, se serve, torna al primo gradino.' }
    ],
    gloss: [
      { w: 'ukemi', it: 'cadute' },
      { w: 'ushiro ukemi', it: 'caduta all’indietro' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'rounded back', it: 'schiena arrotondata' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'contact', it: 'contatto' },
      { w: 'seated', it: 'da seduto' },
      { w: 'previous step', it: 'gradino precedente' }
    ]
  });
  A('jud-mae-ukemi-kneeling', {
    title: { t: 'Mae ukemi 1: forward roll from kneeling', it: 'Mae ukemi 1: rotolamento in avanti da in ginocchio' },
    sum: [
      { t: 'The forward roll, ⟦mae ukemi⟧, turns a forward fall into a controlled roll.', it: 'Il rotolamento in avanti, mae ukemi, trasforma una caduta in avanti in un rotolamento controllato.' },
      { t: 'You start from the lowest point, ⟦kneeling⟧, to learn the ⟦diagonal line⟧ along the arm and shoulder.', it: 'Parti dal punto più basso, in ginocchio, per imparare la linea diagonale lungo braccio e spalla.' },
      { t: 'You never roll over the spine or the head.', it: 'Non rotoli mai sopra la colonna o la testa.' },
      { t: 'Turn your head towards the ⟦opposite hip⟧, with the ⟦chin on the chest⟧, and do not put it under the shoulder.', it: 'Gira la testa verso l’anca opposta, con il mento sul petto, e non metterla sotto la spalla.' },
      { t: 'The opposite arm slaps at 45° as you arrive on the hip, breathing out.', it: 'Il braccio opposto batte a 45° all’arrivo sull’anca, espirando.' },
      { t: 'The previous step, ushiro ⟦ukemi⟧ seated, must be solid, and you practise only on a ⟦tatami⟧ or thick mat.', it: 'Il gradino precedente, ushiro ukemi da seduto, deve essere consolidato, e pratichi solo su tatami o tappeto spesso.' },
      { t: 'This step should be checked with an instructor, because the app cannot certify that your fall is safe.', it: 'Questo gradino va verificato con un istruttore, perché l’app non può certificare che la tua caduta sia sicura.' }
    ],
    gloss: [
      { w: 'mae ukemi', it: 'rotolamento in avanti' },
      { w: 'ukemi', it: 'cadute' },
      { w: 'diagonal line', it: 'linea diagonale' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'kneeling', it: 'in ginocchio' },
      { w: 'opposite hip', it: 'anca opposta' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-yoko-ukemi-low', {
    title: { t: 'Yoko ukemi 2: side fall from a squat', it: 'Yoko ukemi 2: caduta laterale da accovacciato' },
    sum: [
      { t: 'With the extra height of the ⟦squat⟧, the ⟦side fall⟧ gains a little movement.', it: 'Con l’altezza in più dell’accovacciata, la caduta laterale acquista un po’ di movimento.' },
      { t: 'Here you learn to shift your weight onto one hip while keeping form and control.', it: 'Qui impari a spostare il peso su un’anca mantenendo forma e controllo.' },
      { t: 'Start squatting with the heels near the mat and the weight centred, ⟦chin on the chest⟧.', it: 'Parti accovacciato con i talloni vicini al tappeto e il peso centrale, mento sul petto.' },
      { t: 'Fall sideways and ⟦slap⟧ with the ⟦lower arm⟧ at 30–45°, breathing out.', it: 'Cadi di lato e batti con il braccio basso a 30–45°, espirando.' },
      { t: 'Keep the legs apart and soft, then bring the weight back onto the feet and repeat on the other side.', it: 'Tieni le gambe divaricate e morbide, poi riporta il peso sui piedi e ripeti dall’altro lato.' },
      { t: 'The previous step, mae ⟦ukemi⟧ kneeling, must be solid; practise only on a ⟦tatami⟧ or thick mat.', it: 'Il gradino precedente, mae ukemi in ginocchio, deve essere consolidato; pratica solo su tatami o tappeto spesso.' },
      { t: 'This step should be checked with an instructor, and any head blow or dizziness means you stop.', it: 'Questo gradino va verificato con un istruttore, e un colpo alla testa o giramenti di testa significano stop.' }
    ],
    gloss: [
      { w: 'side fall', it: 'caduta laterale (yoko ukemi)' },
      { w: 'yoko ukemi', it: 'caduta laterale' },
      { w: 'ukemi', it: 'cadute' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'squat', it: 'accovacciata' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'lower arm', it: 'braccio basso' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-ushiro-ukemi-squat', {
    title: { t: 'Ushiro ukemi 3: backward fall from a squat', it: 'Ushiro ukemi 3: caduta indietro da accovacciato' },
    sum: [
      { t: 'Here you go higher than from seated, so the main risks are the head touching and the hips hitting.', it: 'Qui sali di altezza rispetto al seduto, quindi i rischi principali sono la testa che tocca e il bacino che sbatte.' },
      { t: 'That is why ⟦ushiro ukemi⟧ from seated must be solid first.', it: 'Per questo l’ushiro ukemi da seduto deve essere prima consolidato.' },
      { t: 'Start ⟦squatting⟧ with your hands forward and your chin on your chest, and bring the knees towards the chest.', it: 'Parti accovacciato con le mani avanti e il mento sul petto, e porta le ginocchia verso il petto.' },
      { t: 'Let yourself fall back, rolling on a ⟦rounded back⟧, and ⟦slap⟧ at 30–45° while breathing out.', it: 'Lasciati cadere all’indietro rotolando sulla schiena arrotondata, e batti a 30–45° espirando.' },
      { t: 'Keep the legs raised and bent, so the heels do not hit the mat.', it: 'Tieni le gambe sollevate e flesse, così i talloni non battono sul tappeto.' },
      { t: 'The previous step, yoko ⟦ukemi⟧ from a squat, must be solid; practise only on a ⟦tatami⟧ or thick mat.', it: 'Il gradino precedente, yoko ukemi da accovacciato, deve essere consolidato; pratica solo su tatami o tappeto spesso.' },
      { t: 'If the head touches the mat, go back to the seated step; this step should be checked with an ⟦instructor⟧.', it: 'Se la testa tocca il tappeto, torna al gradino da seduto; questo gradino va verificato con un istruttore.' }
    ],
    gloss: [
      { w: 'ushiro ukemi', it: 'caduta all’indietro' },
      { w: 'ukemi', it: 'cadute' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'rounded back', it: 'schiena arrotondata' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'squatting', it: 'accovacciato' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'raised legs', it: 'gambe sollevate' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-ushiro-ukemi-standing', {
    title: { t: 'Ushiro ukemi 4: backward fall from standing', it: 'Ushiro ukemi 4: caduta indietro da in piedi' },
    sum: [
      { t: 'This is the highest step of the backward fall, so the risk is greater for the hips and the head.', it: 'È il gradino più alto della caduta all’indietro, quindi il rischio è maggiore per il bacino e la testa.' },
      { t: 'It needs a solid ⟦previous step⟧ and a thick ⟦tatami⟧.', it: 'Richiede il gradino precedente solido e un tatami spesso.' },
      { t: 'Start standing with ⟦soft knees⟧ and your chin on your chest, then go down quickly into a ⟦squat⟧.', it: 'Parti in piedi con ginocchia morbide e mento sul petto, poi scendi rapidamente in accovacciata.' },
      { t: 'Fall back on a ⟦rounded back⟧, so the hips do not hit, and ⟦slap⟧ at 30–45° while breathing out.', it: 'Cadi all’indietro sulla schiena arrotondata, così il bacino non sbatte, e batti a 30–45° espirando.' },
      { t: 'Do one repetition at a time, with a pause, and check your neck.', it: 'Fai una ripetizione per volta, con pausa, e controlla il collo.' },
      { t: 'If you make a mistake, go back to the previous step; stop with pain, dizziness or a head blow.', it: 'Se sbagli, torna al gradino precedente; fermati con dolore, giramenti di testa o un colpo alla testa.' },
      { t: 'This step should be checked with an ⟦instructor⟧, and a video does not replace the instructor’s eye.', it: 'Questo gradino va verificato con un istruttore, e il video non sostituisce l’occhio dell’istruttore.' }
    ],
    gloss: [
      { w: 'ushiro ukemi', it: 'caduta all’indietro' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'rounded back', it: 'schiena arrotondata' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'soft knees', it: 'ginocchia morbide' },
      { w: 'squat', it: 'accovacciata' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'previous step', it: 'gradino precedente' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-yoko-ukemi-standing', {
    title: { t: 'Yoko ukemi 3: side fall from standing', it: 'Yoko ukemi 3: caduta laterale da in piedi' },
    sum: [
      { t: 'This is the ⟦side fall⟧ from the greatest height, using the form already consolidated at lower levels.', it: 'È la caduta laterale dall’altezza maggiore, che usa la forma già consolidata ai livelli più bassi.' },
      { t: 'The head never touches the mat.', it: 'La testa non tocca mai il tappeto.' },
      { t: 'Start standing with your weight on one side and the ⟦chin on the chest⟧.', it: 'Parti in piedi con il peso su un lato e il mento sul petto.' },
      { t: 'Go down with the hip and fall sideways, slapping with the ⟦lower arm⟧ at 30–45°.', it: 'Scendi con l’anca e cadi di lato, battendo con il braccio basso a 30–45°.' },
      { t: 'Keep the ⟦legs apart⟧ and soft, and do one repetition per side, with a pause.', it: 'Tieni le gambe leggermente divaricate e morbide, e fai una ripetizione per lato, con pausa.' },
      { t: 'The previous step, ⟦ushiro ukemi⟧ standing, must be solid; practise only on a ⟦tatami⟧ or thick mat.', it: 'Il gradino precedente, ushiro ukemi da in piedi, deve essere consolidato; pratica solo su tatami o tappeto spesso.' },
      { t: 'This step should be checked with an ⟦instructor⟧, and you stop with pain, dizziness or a head blow.', it: 'Questo gradino va verificato con un istruttore, e ti fermi con dolore, giramenti di testa o un colpo alla testa.' }
    ],
    gloss: [
      { w: 'side fall', it: 'caduta laterale (yoko ukemi)' },
      { w: 'yoko ukemi', it: 'caduta laterale' },
      { w: 'ushiro ukemi', it: 'caduta all’indietro' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'lower arm', it: 'braccio basso' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'legs apart', it: 'gambe divaricate' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-mae-ukemi-squat', {
    title: { t: 'Mae ukemi 2: forward roll from a squat', it: 'Mae ukemi 2: rotolamento in avanti da accovacciato' },
    sum: [
      { t: 'This ⟦forward roll⟧ has more height than the kneeling one and uses the ⟦diagonal line⟧ already learned.', it: 'È il rotolamento in avanti con più altezza rispetto a quello in ginocchio, e usa la linea diagonale già consolidata.' },
      { t: 'The risk is medium to high, so it should be checked with an ⟦instructor⟧.', it: 'Il rischio è medio-alto, quindi va verificato con un istruttore.' },
      { t: 'Start squatting with the right hand in front of the left foot and the arm forming an ⟦arch⟧.', it: 'Parti accovacciato con la mano destra davanti al piede sinistro e il braccio ad arco.' },
      { t: 'Turn your head towards the left hip, with the ⟦chin on the chest⟧, and roll diagonally on arm and ⟦shoulder⟧.', it: 'Gira la testa verso l’anca sinistra, con il mento sul petto, e rotola in diagonale su braccio e spalla.' },
      { t: 'The left arm slaps at 45° as you land on the left hip.', it: 'Il braccio sinistro batte a 45° mentre arrivi sull’anca sinistra.' },
      { t: 'Return to standing or kneeling under control, alternating right and left, one repetition at a time.', it: 'Torna in piedi o in ginocchio con controllo, alternando destra e sinistra, una ripetizione alla volta.' },
      { t: 'The previous step, yoko ukemi standing, must be solid, and you practise only on a ⟦tatami⟧ or thick mat.', it: 'Il gradino precedente, yoko ukemi da in piedi, deve essere consolidato, e pratichi solo su tatami o tappeto spesso.' }
    ],
    gloss: [
      { w: 'forward roll', it: 'rotolamento in avanti (mae ukemi)' },
      { w: 'mae ukemi', it: 'rotolamento in avanti' },
      { w: 'diagonal line', it: 'linea diagonale' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'arch', it: 'arco' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'shoulder', it: 'spalla' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-mae-ukemi-standing', {
    title: { t: 'Mae ukemi 3: forward roll from standing', it: 'Mae ukemi 3: rotolamento in avanti da in piedi' },
    sum: [
      { t: 'This is the highest step: a forward fall from an upright position.', it: 'È il gradino più alto: una caduta in avanti dalla posizione eretta.' },
      { t: 'Start it only after the squat roll is solid, and only on a ⟦tatami⟧.', it: 'Si avvia solo dopo che il rotolamento da accovacciato è consolidato, e solo su tatami.' },
      { t: 'Step forward with the right hand and arm in an ⟦arch⟧, ⟦chin on the chest⟧, looking at the opposite hip.', it: 'Passo avanti con mano e braccio destri ad arco, mento sul petto, sguardo all’anca opposta.' },
      { t: 'Roll diagonally over arm and shoulder, and ⟦slap⟧ with the other arm at 45° as you land on the hip.', it: 'Rotola in diagonale su braccio e spalla, e batti con l’altro braccio a 45° mentre atterri sull’anca.' },
      { t: 'The legs do not slap; you land softly and return to your ⟦stance⟧ with a step.', it: 'Le gambe non battono; atterri morbido e torni in stance con un passo.' },
      { t: 'Do one repetition at a time, with a pause, and check your neck.', it: 'Fai una ripetizione per volta, con pausa, e controlla il collo.' },
      { t: 'Every mistake sends you back to the previous step, and the step should be checked with an ⟦instructor⟧.', it: 'Ogni errore ti riporta al gradino precedente, e il gradino va verificato con un istruttore.' }
    ],
    gloss: [
      { w: 'mae ukemi', it: 'rotolamento in avanti' },
      { w: 'ukemi', it: 'cadute' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'arch', it: 'arco' },
      { w: 'diagonal line', it: 'linea diagonale' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'stance', it: 'postura di partenza' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-ogoshi-full', {
    title: { t: 'No-gi o-goshi: the full movement in the air', it: 'O-goshi no-gi: il gesto completo a vuoto' },
    sum: [
      { t: '⟦O-goshi⟧ belongs to the ⟦koshi-waza⟧, the hip techniques, and here you train it in the air with no partner and no fall.', it: 'L’o-goshi appartiene ai koshi-waza, le tecniche d’anca, e qui lo alleni a vuoto senza partner e senza cadute.' },
      { t: 'Every throw has three phases: ⟦kuzushi⟧, ⟦tsukuri⟧ and ⟦kake⟧, and you link them in one fluid movement.', it: 'Ogni proiezione ha tre fasi: kuzushi, tsukuri e kake, e le colleghi in un gesto fluido.' },
      { t: 'The hips act as a fulcrum under the imaginary opponent’s centre of gravity, after he is brought forward.', it: 'Il bacino fa da fulcro sotto il baricentro dell’avversario immaginario, dopo averlo portato in avanti.' },
      { t: 'The no-gi grips are wrist or bicep control with the left hand and an ⟦underhook⟧ or neck wrap on the right.', it: 'Le prese no-gi sono polso o bicipite con la sinistra e underhook o neck wrap con la destra.' },
      { t: 'Step, turn on the forefoot, bend the knees to lower the hips, then extend knees and hips and turn the shoulders.', it: 'Passo, rotazione sull’avampiede, ginocchia flesse per abbassare il bacino, poi estendi ginocchia e anche e ruoti le spalle.' },
      { t: 'Nothing is thrown: stop standing, take a small step back into ⟦shizentai⟧ and never fall forward.', it: 'Nulla viene proiettato: fermati in piedi, riporta i piedi in shizentai con un piccolo passo e non cadere in avanti.' },
      { t: 'Do sets of 5–8 quality repetitions, slowly first, and ask a qualified instructor to check the form.', it: 'Fai serie di 5–8 ripetizioni di qualità, prima lente, e chiedi a un istruttore qualificato di verificare la forma.' }
    ],
    gloss: [
      { w: 'o-goshi', it: 'grande anca, proiezione d’anca' },
      { w: 'koshi-waza', it: 'tecniche d’anca' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'hikite', it: 'mano che porta il braccio del partner' },
      { w: 'fulcrum', it: 'fulcro' }
    ]
  });
  A('jud-osoto-full', {
    title: { t: 'No-gi o-soto-gari: the outer sweep in the air', it: 'O-soto-gari no-gi: la spazzata esterna a vuoto' },
    sum: [
      { t: '⟦O-soto-gari⟧ is an ⟦ashi-waza⟧, a leg technique, one of the first throws you study.', it: 'L’o-soto-gari è un ashi-waza, una tecnica di gamba, tra le prime proiezioni che si studiano.' },
      { t: 'Here it is done in the air: nobody is thrown and you do not fall.', it: 'Qui è eseguita a vuoto: nessuno viene proiettato e tu non cadi.' },
      { t: 'In ⟦kuzushi⟧ you take the imaginary partner backwards onto his right ⟦heel⟧, using a ⟦collar tie⟧ and a wrist grip.', it: 'Nel kuzushi porti il partner immaginario all’indietro sul suo tallone destro, con collar tie e presa al polso.' },
      { t: 'In ⟦tsukuri⟧ you step beside his foot with a soft knee and an upright trunk.', it: 'Nel tsukuri fai un passo a fianco del suo piede, con ginocchio morbido e busto eretto.' },
      { t: 'In ⟦kake⟧ the right leg sweeps backwards at knee height while the trunk moves forward.', it: 'Nel kake la gamba destra spazza all’indietro a quota ginocchio mentre il busto va avanti.' },
      { t: 'Never hit walls, furniture, people or animals: leave at least 1 m free behind the leg, and finish standing.', it: 'Non colpire mai pareti, mobili, persone o animali: lascia almeno 1 m libero dietro la gamba e finisci in piedi.' },
      { t: 'Do sets of 5–8 quality repetitions, and a qualified instructor should check your form.', it: 'Fai serie di 5–8 ripetizioni di qualità, e un istruttore qualificato dovrebbe verificare la tua forma.' }
    ],
    gloss: [
      { w: 'o-soto-gari', it: 'grande falciata esterna' },
      { w: 'ashi-waza', it: 'tecniche di gamba' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'o-uchi-gari', it: 'grande falciata interna' },
      { w: 'heel', it: 'tallone' },
      { w: 'knee height', it: 'altezza del ginocchio' }
    ]
  });
  A('jud-seoi-full', {
    title: { t: 'No-gi seoi-nage: the back throw in the air', it: 'Seoi-nage no-gi: la proiezione sulla schiena a vuoto' },
    sum: [
      { t: '⟦Seoi-nage⟧ is a ⟦te-waza⟧, an arm and hand technique, where the partner is loaded onto your back and shoulders.', it: 'Il seoi-nage è un te-waza, una tecnica di braccia e mani, in cui il partner viene caricato sulla schiena e sulle spalle.' },
      { t: 'Here it is done in the air, with no partner, no real load and no fall.', it: 'Qui è eseguito a vuoto, senza partner, senza carico reale e senza cadute.' },
      { t: 'In ⟦kuzushi⟧ the left wrist brings the imaginary partner forward onto his toes.', it: 'Nel kuzushi il polso sinistro porta il partner immaginario in avanti, sulle punte.' },
      { t: 'In ⟦tsukuri⟧ you step forward, pivot, bend the knees and put your right shoulder under his armpit, using an ⟦underhook⟧.', it: 'Nel tsukuri fai un passo avanti, pivoti, fletti le ginocchia e metti la spalla destra sotto la sua ascella, con un underhook.' },
      { t: 'In ⟦kake⟧ you extend the legs and turn the shoulders, with the trunk tilting about 20° at most.', it: 'Nel kake estendi le gambe e ruoti le spalle, con il busto inclinato al massimo di circa 20°.' },
      { t: 'You throw with the legs and the rotation, not by pulling with the arms.', it: 'Si proietta con le gambe e la rotazione, non tirando con le braccia.' },
      { t: 'Stop standing, return to ⟦shizentai⟧ and do not fall forward; a qualified instructor should check the form.', it: 'Fermati in piedi, torna in shizentai e non cadere in avanti; un istruttore qualificato dovrebbe verificare la forma.' }
    ],
    gloss: [
      { w: 'seoi-nage', it: 'proiezione caricando sulla schiena' },
      { w: 'te-waza', it: 'tecniche di braccia e mani' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'morote-seoi', it: 'seoi-nage a due mani con il bavero' },
      { w: 'pivot', it: 'pivot, rotazione sul piede' }
    ]
  });
  A('jud-ouchi-full', {
    title: { t: 'No-gi o-uchi-gari: the inner sweep in the air', it: 'O-uchi-gari no-gi: la spazzata interna a vuoto' },
    sum: [
      { t: '⟦O-uchi-gari⟧ is an ⟦ashi-waza⟧, while ⟦o-soto-gari⟧ sweeps from outside, the leg works inside the opponent’s legs.', it: 'L’o-uchi-gari è un ashi-waza; mentre l’o-soto-gari falcia dall’esterno, qui la gamba lavora all’interno delle gambe dell’avversario.' },
      { t: 'It is done in the air: the leg sweeps low without hitting anything, nobody is thrown and you do not fall.', it: 'È eseguita a vuoto: la gamba spazza bassa senza colpire nulla, nessuno viene proiettato e tu non cadi.' },
      { t: 'In ⟦kuzushi⟧ you take the imaginary partner backwards and slightly sideways, with a ⟦collar tie⟧ and a wrist grip.', it: 'Nel kuzushi porti il partner immaginario all’indietro e leggermente di lato, con collar tie e presa al polso.' },
      { t: 'In ⟦tsukuri⟧ the left foot steps between his legs, with a soft knee and an upright trunk.', it: 'Nel tsukuri il piede sinistro passa tra le sue gambe, con ginocchio morbido e busto eretto.' },
      { t: 'In ⟦kake⟧ the right leg sweeps inward at low height, with the foot flexed.', it: 'Nel kake la gamba destra spazza verso l’interno a quota bassa, con il piede flesso.' },
      { t: 'Leave at least 1 m free, with no furniture nearby, and finish standing with balance on the left foot.', it: 'Lascia almeno 1 m libero, senza mobili vicini, e finisci in piedi in equilibrio sul piede sinistro.' },
      { t: 'The classic sequence in the air is o-uchi, o-soto and posture, and a qualified instructor should check the form.', it: 'La sequenza classica a vuoto è o-uchi, o-soto e postura, e un istruttore qualificato dovrebbe verificare la forma.' }
    ],
    gloss: [
      { w: 'o-uchi-gari', it: 'grande falciata interna' },
      { w: 'o-soto-gari', it: 'grande falciata esterna' },
      { w: 'ko-uchi-gari', it: 'piccola falciata interna' },
      { w: 'ashi-waza', it: 'tecniche di gamba' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'flexed foot', it: 'piede flesso' }
    ]
  });
  A('jud-kouchi-full', {
    title: { t: 'No-gi ko-uchi-gari: the small inner sweep in the air', it: 'Ko-uchi-gari no-gi: la piccola spazzata interna a vuoto' },
    sum: [
      { t: '⟦Ko-uchi-gari⟧ is an ⟦ashi-waza⟧ in which “ko” means small, so the movement is short and close to the ground.', it: 'Il ko-uchi-gari è un ashi-waza in cui «ko» significa piccolo, quindi il gesto è breve e vicino al terreno.' },
      { t: 'It is a small shift of the foot onto the ⟦heel⟧ of the imaginary opponent, whose weight is already on that heel.', it: 'È un piccolo spostamento del piede sul tallone dell’avversario immaginario, il cui peso è già su quel tallone.' },
      { t: 'It is done in the air, with no partner and no fall, and you finish standing.', it: 'È eseguito a vuoto, senza partner e senza cadute, e finisci in piedi.' },
      { t: 'In ⟦kuzushi⟧ the arms guide the trunk backwards, using a wrist control and a ⟦collar tie⟧.', it: 'Nel kuzushi le braccia guidano il tronco all’indietro, con un wrist control e un collar tie.' },
      { t: 'In ⟦tsukuri⟧ you take a small step forward and keep the supporting foot close.', it: 'Nel tsukuri fai un piccolo passo avanti e tieni vicino il piede d’appoggio.' },
      { t: 'In ⟦kake⟧ the other foot makes a short gesture a few centimetres from the floor.', it: 'Nel kake l’altro piede fa un gesto breve a pochi centimetri da terra.' },
      { t: 'Do sets of 5–8 repetitions, stop when precision drops, and do not hit the floor hard.', it: 'Fai serie di 5–8 ripetizioni, fermati quando la precisione cala e non colpire il pavimento con forza.' }
    ],
    gloss: [
      { w: 'ko-uchi-gari', it: 'piccola falciata interna' },
      { w: 'o-uchi-gari', it: 'grande falciata interna' },
      { w: 'ko-soto-gari', it: 'piccola falciata esterna' },
      { w: 'ashi-waza', it: 'tecniche di gamba' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'heel', it: 'tallone' }
    ]
  });
  A('jud-taiotoshi-full', {
    title: { t: 'No-gi tai-otoshi: the leg block, in the air', it: 'Tai-otoshi no-gi: il blocco della gamba, a vuoto' },
    sum: [
      { t: '⟦Tai-otoshi⟧ means “body drop” and is a ⟦te-waza⟧, where arms and trunk rotation do the main work.', it: 'Il tai-otoshi significa «caduta del corpo» ed è un te-waza, in cui il lavoro principale lo fanno le braccia e la rotazione del busto.' },
      { t: 'The partner passes over a straight leg that blocks his foot or ankle, and here you train it in the air.', it: 'Il partner passa sopra una gamba tesa che blocca il suo piede o la sua caviglia, e qui lo alleni a vuoto.' },
      { t: 'The phases are ⟦kuzushi⟧ (forward and towards his right corner), ⟦tsukuri⟧ and ⟦kake⟧: lead, enter, turn.', it: 'Le fasi sono kuzushi (in avanti e verso il suo angolo destro), tsukuri e kake: porta, entra, ruota.' },
      { t: 'The no-gi grip is over-under: the left hand on the wrist and the right arm over the arm or in an ⟦underhook⟧.', it: 'La presa no-gi è over-under: la mano sinistra al polso e il braccio destro sopra il braccio o in underhook.' },
      { t: 'Do four slow beats: kuzushi, a first step, a second step turning about 90°, then the block with the right leg.', it: 'Fai quattro tempi lenti: kuzushi, primo passo, secondo passo con rotazione di circa 90°, poi il blocco con la gamba destra.' },
      { t: 'The blocking leg stays low, at ankle height, and is not a kick.', it: 'La gamba di blocco resta bassa, a quota caviglia, e non è un calcio.' },
      { t: 'Nobody is thrown and you never fall; stop, return to ⟦shizentai⟧, and ask an instructor to check the form.', it: 'Nessuno viene proiettato e non cadi mai; fermati, torna in shizentai e chiedi a un istruttore di verificare la forma.' }
    ],
    gloss: [
      { w: 'tai-otoshi', it: 'caduta del corpo' },
      { w: 'te-waza', it: 'tecniche di braccia e mani' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'blocking leg', it: 'gamba di blocco' },
      { w: 'over-under grip', it: 'presa over-under' }
    ]
  });
  A('jud-harai-goshi-full', {
    title: { t: 'No-gi harai-goshi: balance and slow tempo', it: 'Harai-goshi no-gi: equilibrio e tempo lento' },
    sum: [
      { t: '⟦Harai-goshi⟧, the “sweeping hip”, is a ⟦koshi-waza⟧ in which a leg sweeps backwards while the trunk turns.', it: 'L’harai-goshi, la «spazzata d’anca», è un koshi-waza in cui una gamba spazza all’indietro mentre il busto ruota.' },
      { t: 'It is advanced, because for an instant you balance on one leg, so you train it slowly and in the air.', it: 'È una tecnica avanzata, perché per un istante stai in equilibrio su una gamba sola, quindi la alleni lenta e a vuoto.' },
      { t: 'In ⟦kuzushi⟧ you bring the imaginary partner forward onto his toes.', it: 'Nel kuzushi porti il partner immaginario in avanti, verso le punte dei piedi.' },
      { t: 'In ⟦tsukuri⟧ you step with the left foot and pivot, keeping your hip and chest close to his.', it: 'Nel tsukuri fai un passo con il sinistro e pivoti, tenendo anca e petto vicini ai suoi.' },
      { t: 'The ⟦supporting foot⟧ is the real engine: soft knee, weight on the forefoot, and a pause of 2 seconds on one leg.', it: 'Il piede d’appoggio è il vero motore: ginocchio morbido, peso sull’avampiede e una pausa di 2 secondi su una gamba.' },
      { t: 'In ⟦kake⟧ the right leg extends backwards, never above hip height, because height is not the goal.', it: 'Nel kake la gamba destra si estende all’indietro, mai oltre l’altezza dell’anca, perché l’altezza non è l’obiettivo.' },
      { t: 'You never fall; put the foot down in front, return to ⟦shizentai⟧, and ask an instructor to check the form.', it: 'Non cadi mai; riporta il piede a terra davanti, torna in shizentai e chiedi a un istruttore di verificare la forma.' }
    ],
    gloss: [
      { w: 'harai-goshi', it: 'spazzata d’anca' },
      { w: 'koshi-waza', it: 'tecniche d’anca' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'uchi-mata', it: 'tecnica di gamba all’interno della coscia' },
      { w: 'supporting foot', it: 'piede d’appoggio' },
      { w: 'pivot', it: 'pivot, rotazione sul piede' }
    ]
  });
  A('jud-uchimata-full', {
    title: { t: 'No-gi uchi-mata: axis and leg control', it: 'Uchi-mata no-gi: asse e controllo della gamba' },
    sum: [
      { t: '⟦Uchi-mata⟧, “inside the thigh”, is an ⟦ashi-waza⟧ in which the leg goes inside the partner’s thigh while the body turns.', it: 'L’uchi-mata, «all’interno della coscia», è un ashi-waza in cui la gamba entra all’interno della coscia del partner mentre il corpo ruota.' },
      { t: 'It is an advanced technique that needs balance on one leg, coordination and control of the ⟦axis⟧.', it: 'È una tecnica avanzata che richiede equilibrio su una gamba, coordinazione e controllo dell’asse.' },
      { t: 'In ⟦kuzushi⟧ you bring the imaginary partner forward and slightly sideways.', it: 'Nel kuzushi porti il partner immaginario in avanti e leggermente di lato.' },
      { t: 'The secret is the axis: head, shoulders and hip stay aligned above the ⟦supporting foot⟧.', it: 'Il segreto è l’asse: testa, spalle e anca restano allineati sopra il piede d’appoggio.' },
      { t: 'The right leg rises inside and backwards at moderate height, never above the hips.', it: 'La gamba destra sale all’interno e all’indietro a quota moderata, mai oltre l’altezza del bacino.' },
      { t: 'In ⟦harai-goshi⟧ the leg sweeps backwards, while here it goes inside like scissors.', it: 'Nell’harai-goshi la gamba spazza all’indietro, mentre qui va all’interno come una forbice.' },
      { t: 'Nobody is thrown and you do not fall; use 2 m × 2 m and ask an instructor.', it: 'Nessuno viene proiettato e non cadi; usa uno spazio di 2 m × 2 m e chiedi a un istruttore di verificare.' }
    ],
    gloss: [
      { w: 'uchi-mata', it: 'all’interno della coscia' },
      { w: 'ashi-waza', it: 'tecniche di gamba' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'harai-goshi', it: 'spazzata d’anca' },
      { w: 'axis', it: 'asse' },
      { w: 'supporting foot', it: 'piede d’appoggio' },
      { w: 'collar tie', it: 'mano sulla nuca' }
    ]
  });
  A('jud-kosoto-full', {
    title: { t: 'No-gi ko-soto-gari and ko-soto-gake: sweep and hook', it: 'Ko-soto-gari e ko-soto-gake no-gi: spazzata e gancio' },
    sum: [
      { t: '⟦Ko-soto-gari⟧, the small outer sweep, and ⟦ko-soto-gake⟧, the small outer hook, are related ⟦ashi-waza⟧.', it: 'Il ko-soto-gari, la piccola spazzata esterna, e il ko-soto-gake, il piccolo gancio esterno, sono ashi-waza collegati.' },
      { t: 'In both, the foot acts on the outer heel of the partner, and here you train in the air.', it: 'In entrambi il piede agisce sul tallone esterno del partner, e qui ti alleni a vuoto.' },
      { t: '⟦Gari⟧ means to sweep: the foot slides and clears the heel away with a short, clean movement.', it: 'Gari significa spazzare: il piede striscia e spazza via il tallone con un movimento breve e netto.' },
      { t: '⟦Gake⟧ means to hook: the foot hooks the heel and stays for a moment, so you pause for a second.', it: 'Gake significa agganciare: il piede aggancia il tallone e vi resta un istante, quindi fai una pausa di un secondo.' },
      { t: 'In ⟦kuzushi⟧ you take the imaginary partner backwards onto his right heel, with a ⟦collar tie⟧ and a wrist grip.', it: 'Nel kuzushi porti il partner immaginario all’indietro sul tallone destro, con collar tie e presa al polso.' },
      { t: 'The foot stays a few centimetres from the floor and never rises above the knee; it is not a kick.', it: 'Il piede resta a pochi centimetri da terra e non sale mai oltre il ginocchio; non è un calcio.' },
      { t: 'The foot touches nothing, you finish standing, and an instructor can check the form.', it: 'Il piede non colpisce nulla, finisci in piedi, e un istruttore può verificare la forma.' }
    ],
    gloss: [
      { w: 'ko-soto-gari', it: 'piccola spazzata esterna' },
      { w: 'ko-soto-gake', it: 'piccolo gancio esterno' },
      { w: 'ashi-waza', it: 'tecniche di gamba' },
      { w: 'gari', it: 'spazzare, mietere' },
      { w: 'gake', it: 'agganciare' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'collar tie', it: 'mano sulla nuca' },
      { w: 'outer heel', it: 'tallone esterno' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-koshi-guruma-full', {
    title: { t: 'No-gi koshi-guruma: the hip wheel', it: 'Koshi-guruma no-gi: la ruota sull’anca' },
    sum: [
      { t: '⟦Koshi-guruma⟧, the “hip wheel”, is a ⟦koshi-waza⟧ in which the partner is turned like a wheel around your axis.', it: 'Il koshi-guruma, la «ruota dell’anca», è un koshi-waza in cui il partner ruota come una ruota attorno al tuo asse.' },
      { t: 'In the no-gi path your arm wraps around the neck, called a ⟦neck wrap⟧, and everything is simulated in the air.', it: 'Nel percorso no-gi il braccio avvolge il collo, il cosiddetto neck wrap, e tutto è simulato a vuoto.' },
      { t: 'In ⟦kuzushi⟧ the left wrist brings the imaginary partner forward onto his toes.', it: 'Nel kuzushi il polso sinistro porta il partner immaginario in avanti, sulle punte.' },
      { t: 'In ⟦tsukuri⟧ you step forward, turn, bend the knees and bring the hips under his centre of gravity.', it: 'Nel tsukuri fai un passo avanti, ruoti, fletti le ginocchia e porti il bacino sotto il suo baricentro.' },
      { t: 'In ⟦kake⟧ you extend knees and hips and turn the shoulders, like a wheel around a vertical axis.', it: 'Nel kake estendi ginocchia e anche e ruoti le spalle, come una ruota attorno a un asse verticale.' },
      { t: 'The difference from o-goshi is that the arm wraps the neck instead of the waist.', it: 'La differenza dall’o-goshi è che il braccio avvolge il collo invece della vita.' },
      { t: 'Stop standing, never load the weight forward, return to ⟦shizentai⟧, and ask an instructor to check.', it: 'Fermati in piedi, non caricare mai il peso in avanti, torna in shizentai e chiedi a un istruttore di verificare.' }
    ],
    gloss: [
      { w: 'koshi-guruma', it: 'ruota dell’anca' },
      { w: 'koshi-waza', it: 'tecniche d’anca' },
      { w: 'neck wrap', it: 'braccio che avvolge il collo' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'o-goshi', it: 'proiezione d’anca' },
      { w: 'vertical axis', it: 'asse verticale' }
    ]
  });
  A('jud-morote-seoi-full', {
    title: { t: 'Morote-seoi-nage with judogi: the two-hand grip', it: 'Morote-seoi-nage con judogi: la presa a due mani' },
    sum: [
      { t: '⟦Morote-seoi-nage⟧ means a back throw with two hands, and it is a variant of seoi-nage in the ⟦te-waza⟧.', it: 'Il morote-seoi-nage significa proiezione sulla schiena con due mani, ed è una variante del seoi-nage fra i te-waza.' },
      { t: 'It is the only throw in this path done with a ⟦judogi⟧; all the others are no-gi.', it: 'È l’unica proiezione di questo percorso con judogi; tutte le altre sono no-gi.' },
      { t: 'You use a ⟦two-hand grip⟧ on the ⟦lapel⟧ at chest height, with thumbs inside the fabric.', it: 'Usi la presa a due mani sul bavero all’altezza del petto, con i pollici dentro il tessuto.' },
      { t: 'Keep the elbows tight under the armpits; wide elbows are the most frequent mistake.', it: 'Tieni i gomiti stretti sotto le ascelle; i gomiti larghi sono l’errore più frequente.' },
      { t: 'In ⟦kuzushi⟧ both hands bring the trunk forward onto the toes, then you step, pivot and bend the knees.', it: 'Nel kuzushi le due mani portano il tronco in avanti sulle punte, poi fai un passo, pivoti e fletti le ginocchia.' },
      { t: 'In ⟦kake⟧ you extend the legs and turn the shoulders, with the trunk tilted about 20° at most.', it: 'Nel kake estendi le gambe e ruoti le spalle, con il busto inclinato al massimo di circa 20°.' },
      { t: 'Nobody is thrown and you do not fall; use 2 m × 2 m and ask an instructor.', it: 'Nessuno viene proiettato e non cadi; usa uno spazio di 2 m × 2 m e chiedi a un istruttore di verificare.' }
    ],
    gloss: [
      { w: 'morote-seoi-nage', it: 'proiezione sulla schiena a due mani' },
      { w: 'te-waza', it: 'tecniche di braccia e mani' },
      { w: 'judogi', it: 'divisa del judo' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'two-hand grip', it: 'presa a due mani' },
      { w: 'lapel', it: 'bavero' },
      { w: 'elbows', it: 'gomiti' }
    ]
  });
  A('jud-band-uchikomi', {
    title: { t: 'Uchikomi with a band: repetitions without a throw', it: 'Uchikomi con elastico: ripetizioni senza proiezione' },
    sum: [
      { t: '⟦Uchikomi⟧ means repeated entering: you repeat the ⟦tsukuri⟧ of a technique up to the ⟦kake⟧ point, without completing the throw.', it: 'Uchikomi significa entrare ripetutamente: ripeti il tsukuri di una tecnica fino al punto di kake, senza completare la proiezione.' },
      { t: 'A ⟦band⟧ replaces the partner: you train form, rhythm and grip, but it proves nothing against a real opponent.', it: 'Un elastico sostituisce il partner, così alleni forma, ritmo e presa, ma non dimostra che la tecnica funzioni su un avversario reale.' },
      { t: 'Safety comes first: use a wide band in good condition, fixed to a solid, tested ⟦anchor⟧ at hip height.', it: 'La sicurezza viene prima: usa un elastico largo in buone condizioni, fissato a un ancoraggio solido e testato all’altezza del bacino.' },
      { t: 'Keep your face away from the ⟦line of pull⟧, because a band that gives way or slips can hit you.', it: 'Tieni il viso lontano dalla linea di tiro, perché un elastico che cede o scivola può colpirti.' },
      { t: 'Do the entry of a technique you already know, stop at kake and return slowly to ⟦shizentai⟧.', it: 'Esegui l’entrata di una tecnica già imparata, fermati a kake e torna lentamente in shizentai.' },
      { t: 'Do sets of 5–8 repetitions and then rest; quality matters more than quantity.', it: 'Fai serie di 5–8 ripetizioni, poi pausa; la qualità conta più della quantità.' },
      { t: 'If the band vibrates or slips, stop and check the anchor again; an instructor should check form and equipment.', it: 'Se l’elastico vibra o scivola, interrompi e rifai la verifica dell’ancoraggio; un istruttore dovrebbe verificare forma e attrezzatura.' }
    ],
    gloss: [
      { w: 'uchikomi', it: 'ripetizione dell’entrata' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'tsurite', it: 'mano di presa' },
      { w: 'shizentai', it: 'postura naturale' },
      { w: 'anchor', it: 'ancoraggio' },
      { w: 'band', it: 'elastico' },
      { w: 'line of pull', it: 'linea di tiro' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-plum-clinch', {
    title: { t: 'Plum clinch: posture and head control (in the air)', it: 'Clinch plum: postura e controllo della testa (a vuoto)' },
    sum: [
      { t: 'In ⟦muay thai⟧, close-range work is called the ⟦clinch⟧, and its best-known form is the ⟦plum clinch⟧.', it: 'Nel muay thai il corpo a corpo si chiama clinch, e la sua forma più nota è il plum clinch.' },
      { t: 'Alone and in the air, you put your hands behind an imaginary neck, with the ⟦elbows⟧ tight in front of the chest.', it: 'Qui lo simuli da solo, a vuoto, con le mani dietro una nuca immaginaria e i gomiti stretti davanti al petto.' },
      { t: 'The feet are shoulder-width apart, with bent ⟦knees⟧, an upright trunk and the weight at the centre.', it: 'I piedi sono alla larghezza delle spalle, con ginocchia flesse, busto eretto e peso al centro.' },
      { t: 'Control comes from the straight back and the ⟦hips⟧, not from the arms alone; breathe out as you “close”.', it: 'Il controllo viene dalla schiena dritta e dal bacino, non dalle sole braccia; espira mentre «chiudi».' },
      { t: 'Move with small steps and pivot on the ⟦ball of the foot⟧, never on the heel or with a locked leg.', it: 'Ti muovi con piccoli passi e pivoti sulla palla del piede, mai sul tallone né a gamba bloccata.' },
      { t: 'Common mistakes are wide elbows, a rounded back, weight on the heels and raised shoulders.', it: 'Errori comuni sono gomiti larghi, schiena curva, peso sui talloni e spalle alzate.' },
      { t: 'Work alone in about 2 m × 2 m, with no sparring or contact; bag or partner only with an instructor.', it: 'Lavora da solo in uno spazio di circa 2 m × 2 m, senza sparring né contatto; sacco o partner solo con un istruttore.' }
    ],
    gloss: [
      { w: 'clinch', it: 'corpo a corpo del muay thai' },
      { w: 'plum clinch', it: 'clinch con le mani dietro la nuca (khao plam)' },
      { w: 'muay thai', it: 'boxe thailandese' },
      { w: 'level change', it: 'cambio di livello' },
      { w: 'ball of the foot', it: 'avampiede' },
      { w: 'elbows', it: 'gomiti' },
      { w: 'hips', it: 'bacino' },
      { w: 'knees', it: 'ginocchia' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-khao-trong', {
    title: { t: 'Khao trong: straight knee strike in the clinch (in the air)', it: 'Khao trong: ginocchiata diretta in clinch (a vuoto)' },
    sum: [
      { t: '“Khao” means knee and “trong” means straight, so ⟦khao trong⟧ is the straight knee strike.', it: '«Khao» significa ginocchio e «trong» significa dritto, quindi la khao trong è la ginocchiata diretta.' },
      { t: 'You train it alone, in the air, to learn movement, balance and control, and you hit nothing.', it: 'La alleni solo da solo, a vuoto, per imparare movimento, equilibrio e controllo, e non colpisci nulla.' },
      { t: 'Start from the ⟦plum clinch⟧ posture, with tight elbows and bent knees.', it: 'Parti dalla postura del plum clinch, con gomiti stretti e ginocchia flesse.' },
      { t: 'Push the ⟦hips⟧ forward, and the knee rises in a straight line, with the ⟦toes pointing down⟧.', it: 'Spingi il bacino in avanti, e il ginocchio sale in linea retta, con la punta del piede in giù.' },
      { t: 'The ⟦supporting foot⟧ turns on the ⟦ball of the foot⟧, with a soft knee, and does not jump.', it: 'Il piede d’appoggio ruota sull’avampiede, con il ginocchio morbido, e non salta.' },
      { t: 'In the air, stop the knee at waist or rib height, never higher, then put the foot down.', it: 'A vuoto, ferma il ginocchio a quota vita o costole, mai più in alto, poi riporta il piede a terra.' },
      { t: 'Use 2 m × 2 m, with no sparring or contact; bag or partner only with an ⟦instructor⟧.', it: 'Usa uno spazio di 2 m × 2 m senza sparring né contatto; sacco o partner solo con un istruttore.' }
    ],
    gloss: [
      { w: 'khao trong', it: 'ginocchiata diretta' },
      { w: 'plum clinch', it: 'clinch con le mani dietro la nuca' },
      { w: 'clinch', it: 'corpo a corpo del muay thai' },
      { w: 'muay thai', it: 'boxe thailandese' },
      { w: 'ball of the foot', it: 'avampiede' },
      { w: 'supporting foot', it: 'piede d’appoggio' },
      { w: 'toes pointing down', it: 'punta del piede in giù' },
      { w: 'hips', it: 'bacino' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-khao-khong', {
    title: { t: 'Khao khong: curved knee strike in the clinch (in the air)', it: 'Khao khong: ginocchiata curva in clinch (a vuoto)' },
    sum: [
      { t: '⟦Khao khong⟧ is the curved knee strike: the knee rises on a ⟦diagonal⟧ while the hips rotate.', it: 'La khao khong è la ginocchiata curva: il ginocchio sale in diagonale mentre il bacino ruota.' },
      { t: 'It is a classic ⟦plum clinch⟧ variant, worked only in the air to learn ⟦rotation⟧ and balance.', it: 'È una variante classica del plum clinch, e qui la lavori solo a vuoto, per imparare rotazione ed equilibrio.' },
      { t: 'Compared with ⟦khao trong⟧, the path is diagonal and the push comes from a rotation of the hips.', it: 'Rispetto alla khao trong, la traiettoria è diagonale e la spinta viene da una rotazione del bacino.' },
      { t: 'The rotation starts from the hips and the ⟦ball of the foot⟧, not from the back.', it: 'La rotazione parte dal bacino e dall’avampiede, non dalla schiena.' },
      { t: 'Keep the ⟦supporting knee⟧ soft while turning, and the toes of the rising foot pointing down.', it: 'Tieni morbido il ginocchio d’appoggio mentre ruoti, e la punta del piede che sale in giù.' },
      { t: 'Stop at rib height, never higher, and reduce the rotation if you lose balance.', it: 'Fermati a quota costole, mai più in alto, e riduci la rotazione se perdi equilibrio.' },
      { t: 'Work only in the air, in a space of 2 m × 2 m, with no sparring and no contact.', it: 'Lavora solo a vuoto, in uno spazio di 2 m × 2 m, senza sparring né contatto.' }
    ],
    gloss: [
      { w: 'khao khong', it: 'ginocchiata curva' },
      { w: 'khao trong', it: 'ginocchiata diretta' },
      { w: 'plum clinch', it: 'clinch con le mani dietro la nuca' },
      { w: 'clinch', it: 'corpo a corpo del muay thai' },
      { w: 'ball of the foot', it: 'avampiede' },
      { w: 'diagonal', it: 'diagonale' },
      { w: 'rotation', it: 'rotazione' },
      { w: 'supporting knee', it: 'ginocchio d’appoggio' },
      { w: 'hips', it: 'bacino' }
    ]
  });
  A('jud-khao-noi', {
    title: { t: 'Khao noi: short knee strike in close clinch (in the air)', it: 'Khao noi: ginocchiata corta in clinch ravvicinato (a vuoto)' },
    sum: [
      { t: '⟦Khao noi⟧ means small knee: a short, quick knee strike at very ⟦close range⟧.', it: 'Khao noi significa ginocchio piccolo: una ginocchiata corta e rapida a distanza ravvicinata.' },
      { t: 'In the air it is an exercise in rhythm and control, where regularity matters more than strength.', it: 'A vuoto è un esercizio di ritmo e controllo, in cui conta più la regolarità della forza.' },
      { t: 'Among the three knee strikes, ⟦khao trong⟧ is straight, ⟦khao khong⟧ is curved, and khao noi is short and done in ⟦series⟧.', it: 'Fra le tre ginocchiate, la khao trong è diretta, la khao khong è curva, e la khao noi è breve e in serie.' },
      { t: 'From the ⟦plum clinch⟧ posture, keep tight elbows, an upright trunk and the weight on the forefeet.', it: 'Dalla postura plum clinch, tieni gomiti stretti, busto eretto e peso sulle avampiedi.' },
      { t: 'Each knee rises only a few centimetres, to thigh or waist height, with the toes pointing down.', it: 'Ogni ginocchio sale solo di pochi centimetri, a quota coscia o vita, con la punta del piede in giù.' },
      { t: 'Do sets of 6, breathing out on each strike, and slow down or stop if the form drops.', it: 'Fai serie di 6, espirando a ogni ginocchiata, e rallenta o fermati se la forma cala.' },
      { t: 'Work alone in the air in a space of 2 m × 2 m, with no sparring and no contact.', it: 'Lavora da solo a vuoto in uno spazio di 2 m × 2 m, senza sparring né contatto.' }
    ],
    gloss: [
      { w: 'khao noi', it: 'ginocchiata corta' },
      { w: 'khao trong', it: 'ginocchiata diretta' },
      { w: 'khao khong', it: 'ginocchiata curva' },
      { w: 'plum clinch', it: 'clinch con le mani dietro la nuca' },
      { w: 'clinch', it: 'corpo a corpo del muay thai' },
      { w: 'regular rhythm', it: 'ritmo regolare' },
      { w: 'series', it: 'serie' },
      { w: 'supporting knee', it: 'ginocchio d’appoggio' },
      { w: 'close range', it: 'distanza ravvicinata' }
    ]
  });
  A('jud-wrestle-stance', {
    title: { t: 'Wrestling stance (no-gi) and movement', it: 'Stance da lotta (no-gi) e spostamenti' },
    sum: [
      { t: 'The ⟦stance⟧ is the starting position and the base of every other lesson.', it: 'La stance è la posizione di partenza e la base di ogni altra lezione.' },
      { t: 'You work only in the air, with no partner, and bare-chested, so there are no fabric grips.', it: 'Lavori solo a vuoto, senza partner, e a torso libero, quindi senza prese al tessuto.' },
      { t: 'Keep the ⟦centre of gravity⟧ low and inside the ⟦base of support⟧.', it: 'Il baricentro resta basso e dentro la base d’appoggio.' },
      { t: 'The feet are a little wider than the shoulders, with bent knees, weight on the ⟦forefoot⟧ and a ⟦neutral back⟧.', it: 'I piedi sono un po’ più larghi delle spalle, con ginocchia flesse, peso sull’avampiede e schiena neutra.' },
      { t: 'The hands are open in front of the body, and the ⟦elbows⟧ stay in, close to the trunk.', it: 'Le mani sono aperte davanti al corpo e i gomiti restano dentro, vicini al tronco.' },
      { t: 'In the ⟦shuffle⟧ the leading foot moves first and the other follows, with no crossing and no jumps.', it: 'Nello shuffle il piede che guida parte per primo e l’altro lo segue, senza incroci né salti.' },
      { t: 'Check yourself on video, and lower the stance and shorten the work if your knees or back hurt.', it: 'Controllati con un video, e abbassa meno la stance e riduci la durata se ginocchia o schiena fanno male.' }
    ],
    gloss: [
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'shuffle', it: 'spostamento a passi scivolati' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'base of support', it: 'base d’appoggio' },
      { w: 'forefoot', it: 'avampiede' },
      { w: 'neutral back', it: 'schiena neutra' },
      { w: 'elbows', it: 'gomiti' },
      { w: 'no-gi', it: 'senza judogi, a torso libero' },
      { w: 'bent knees', it: 'ginocchia flesse' }
    ]
  });
  A('jud-level-change', {
    title: { t: 'Level change', it: 'Cambio di livello (level change)' },
    sum: [
      { t: 'The ⟦level change⟧ is a controlled lowering of the ⟦hips⟧ starting from the ⟦stance⟧.', it: 'Il level change è l’abbassamento controllato del bacino partendo dalla stance.' },
      { t: 'It comes before every entry and every ⟦sprawl⟧, and doing it well protects the back and the ⟦knees⟧.', it: 'Precede ogni ingresso e ogni sprawl, e farlo bene protegge la schiena e i ginocchi.' },
      { t: 'You lower the hips, you do not bend at the waist, and the head stays up and in front of the hands.', it: 'Si abbassa il bacino, non ci si piega in vita, e la testa resta alta e davanti alle mani.' },
      { t: 'Coming up is a ⟦push of the legs⟧ against the floor: the knees extend first, then the trunk follows.', it: 'La risalita è una spinta delle gambe contro il pavimento: le ginocchia si estendono per prime, poi il busto segue.' },
      { t: 'A slow rhythm of about 3 seconds down and 2 seconds up teaches the correct path.', it: 'Un ritmo lento di circa 3 secondi in discesa e 2 in risalita insegna la traiettoria corretta.' },
      { t: 'Do sets of 6 repetitions, and common mistakes are a ⟦rounded back⟧, straight knees and weight on the heels.', it: 'Fai serie di 6 ripetizioni, e errori comuni sono schiena curva, ginocchia dritte e peso sui talloni.' },
      { t: 'Move slowly with no jumps, and reduce the depth if your knee or back hurts.', it: 'Muoviti lentamente senza salti e riduci la profondità se ginocchio o schiena fanno male.' }
    ],
    gloss: [
      { w: 'level change', it: 'cambio di livello' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'sprawl', it: 'proiezione delle gambe all’indietro per difendere un ingresso' },
      { w: 'hips', it: 'bacino' },
      { w: 'neutral back', it: 'schiena neutra' },
      { w: 'push of the legs', it: 'spinta delle gambe' },
      { w: 'rounded back', it: 'schiena curva' },
      { w: 'forefoot', it: 'avampiede' },
      { w: 'knees', it: 'ginocchia' }
    ]
  });
  A('jud-penetration-step', {
    title: { t: 'Penetration step (in the air)', it: 'Passo di penetrazione (a vuoto)' },
    sum: [
      { t: 'The ⟦penetration step⟧ is the long step forward that shortens the distance after the ⟦level change⟧.', it: 'Il penetration step è il passo lungo in avanti che accorcia la distanza dopo il level change.' },
      { t: 'You train it in the air, at a controlled speed, and the aim is leg and hip coordination.', it: 'Lo alleni a vuoto, a velocità controllata, e l’obiettivo è la coordinazione tra gambe e bacino.' },
      { t: 'From the low point, the ⟦lead foot⟧ steps long while the ⟦hips⟧ stay low and the trunk stays upright.', it: 'Dal punto basso, il piede guida avanza di un passo lungo mentre il bacino resta basso e il busto eretto.' },
      { t: 'The ⟦back knee⟧ goes down close to the mat but never touches it hard.', it: 'Il ginocchio posteriore scende vicino al tappeto ma non lo tocca mai con forza.' },
      { t: 'Stop for a moment with the weight on the ⟦front leg⟧, then push and return to the ⟦stance⟧.', it: 'Fermati un istante con il peso sulla gamba anteriore, poi spingi e torna in stance.' },
      { t: 'Do three slow repetitions with the right lead foot and three with the left, pausing 1 second at the bottom.', it: 'Fai tre ripetizioni lente con il piede guida destro e tre con il sinistro, con una pausa di 1 secondo in basso.' },
      { t: 'This is an entry, so a check with an instructor is advisable; stop if your knee hurts.', it: 'Questa è un’entrata, quindi è consigliabile una verifica con un istruttore; interrompi se il ginocchio fa male.' }
    ],
    gloss: [
      { w: 'penetration step', it: 'passo di penetrazione' },
      { w: 'level change', it: 'cambio di livello' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'lead foot', it: 'piede guida' },
      { w: 'back knee', it: 'ginocchio posteriore' },
      { w: 'front leg', it: 'gamba anteriore' },
      { w: 'upright trunk', it: 'busto eretto' },
      { w: 'hips', it: 'bacino' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-hand-fighting', {
    title: { t: 'Hand fighting in the air', it: 'Hand fighting a vuoto' },
    sum: [
      { t: '⟦Hand fighting⟧ is the work of hands and arms to control ⟦wrists⟧, ⟦elbows⟧ and the lines of the trunk.', it: 'L’hand fighting è il lavoro di mani e braccia per controllare polsi, gomiti e linee del tronco.' },
      { t: 'You train it in the air, imagining an opponent’s wrists, with no partner and no fabric grips.', it: 'Lo alleni a vuoto, immaginando i polsi di un avversario, senza partner e senza prese al tessuto.' },
      { t: 'The hands use short, well-defined gestures: the palm pushes, the fingers close and the wrist turns.', it: 'Le mani usano gesti brevi e ben definiti: il palmo spinge, le dita chiudono e il polso ruota.' },
      { t: 'The work stays inside the ⟦line of the trunk⟧, with the elbows close to the body.', it: 'Il lavoro resta dentro la linea del tronco, con i gomiti vicini al corpo.' },
      { t: 'The ⟦stance⟧ stays stable, with low hips and ⟦relaxed shoulders⟧: if the shoulders rise, the structure stiffens.', it: 'La stance resta stabile, con bacino basso e spalle rilassate: se le spalle salgono, la struttura si irrigidisce.' },
      { t: 'Alternate right and left with a ⟦regular rhythm⟧, in sets of 10 slow gestures and then 10 fast ones.', it: 'Alterna destra e sinistra con ritmo regolare, in serie di 10 gesti lenti e poi 10 veloci.' },
      { t: 'Do not try to grab or pull anyone, avoid locking the elbows, and reduce the range if your shoulders hurt.', it: 'Non cercare di afferrare o tirare nessuno, evita di bloccare i gomiti e riduci l’ampiezza se le spalle fanno male.' }
    ],
    gloss: [
      { w: 'hand fighting', it: 'lavoro di mani e braccia per il controllo' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'shuffle', it: 'spostamento a passi scivolati' },
      { w: 'wrists', it: 'polsi' },
      { w: 'elbows', it: 'gomiti' },
      { w: 'line of the trunk', it: 'linea del tronco' },
      { w: 'relaxed shoulders', it: 'spalle rilassate' },
      { w: 'short gestures', it: 'gesti brevi' },
      { w: 'regular rhythm', it: 'ritmo regolare' }
    ]
  });
  A('jud-pummel-shadow', {
    title: { t: 'Pummeling in the air (underhook and overhook)', it: 'Pummeling a vuoto (underhook e overhook)' },
    sum: [
      { t: '⟦Pummeling⟧ is the alternation of an ⟦underhook⟧, with the arm under the armpit, and an ⟦overhook⟧, with the arm over the shoulder.', it: 'Il pummeling è l’alternanza di un underhook, con il braccio sotto l’ascella, e di un overhook, con il braccio sopra la spalla.' },
      { t: 'You practise it in the air, with no partner, to train coordination, rhythm and ⟦stance⟧.', it: 'Lo pratichi a vuoto, senza partner, per allenare coordinazione, ritmo e stance.' },
      { t: 'In the underhook the ⟦elbow⟧ is low and close to the side; the overhook passes over the opposite shoulder.', it: 'Nell’underhook il gomito è basso e vicino al fianco; l’overhook passa sopra la spalla opposta.' },
      { t: 'The push comes from the legs, not the arms, and the ⟦hips⟧ stay low.', it: 'La spinta nasce dalle gambe, non dalle braccia, e il bacino resta basso.' },
      { t: 'At each change one arm rises and the other goes down smoothly, with ⟦relaxed shoulders⟧.', it: 'A ogni cambio un braccio sale e l’altro scende in modo fluido, con spalle rilassate.' },
      { t: 'Do sets of 10 slow changes and then 10 faster ones, switching the starting side.', it: 'Fai serie di 10 cambi lenti e poi 10 più veloci, cambiando il lato di partenza.' },
      { t: 'Use wide, relaxed movements, avoid sharp shoulder rotations, and stop if your shoulder hurts.', it: 'Usa movimenti ampi e rilassati, evita rotazioni brusche delle spalle e fermati se la spalla fa male.' }
    ],
    gloss: [
      { w: 'pummeling', it: 'alternanza di underhook e overhook' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'overhook', it: 'braccio sopra la spalla' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'shuffle', it: 'spostamento a passi scivolati' },
      { w: 'elbow', it: 'gomito' },
      { w: 'push from the legs', it: 'spinta dalle gambe' },
      { w: 'relaxed shoulders', it: 'spalle rilassate' },
      { w: 'hips', it: 'bacino' }
    ]
  });
  A('jud-snap-down-shadow', {
    title: { t: 'Snap-down in the air', it: 'Snap-down a vuoto' },
    sum: [
      { t: 'The ⟦snap-down⟧ is a downward pulling gesture on the neck of an imaginary opponent.', it: 'Lo snap-down è un gesto di trazione verso il basso della nuca di un avversario immaginario.' },
      { t: 'You train it in the air, with no force and no partner, to develop ⟦timing⟧ and ⟦alignment⟧.', it: 'Lo alleni a vuoto, senza forza e senza partner, per sviluppare tempismo e allineamento.' },
      { t: 'The gesture is short and quick: the hands go down a few centimetres and the ⟦hips⟧ lower slightly.', it: 'Il gesto è breve e rapido: le mani scendono di pochi centimetri e il bacino scende leggermente.' },
      { t: 'The trunk stays upright and does not reach forward; the work is in the alignment of hands, shoulders and hips.', it: 'Il busto resta eretto e non si allunga in avanti; il lavoro è nell’allineamento di mani, spalle e bacino.' },
      { t: 'After the gesture you leave with a ⟦shuffle⟧ backwards and return to the ⟦stance⟧.', it: 'Dopo il gesto esci con uno shuffle indietro e torni in stance.' },
      { t: 'Do 5 slow snaps and then 5 fast ones, with 30 seconds of rest.', it: 'Fai 5 snap lenti e poi 5 veloci, con 30 secondi di pausa.' },
      { t: 'Keep the gestures short and controlled, do not throw yourself forward, and reduce the range if your shoulders hurt.', it: 'Tieni i gesti brevi e controllati, non lanciarti in avanti e riduci l’ampiezza se le spalle fanno male.' }
    ],
    gloss: [
      { w: 'snap-down', it: 'trazione verso il basso della nuca' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'shuffle', it: 'spostamento a passi scivolati' },
      { w: 'timing', it: 'tempismo' },
      { w: 'alignment', it: 'allineamento' },
      { w: 'sprawl', it: 'proiezione delle gambe all’indietro' },
      { w: 'upright trunk', it: 'busto eretto' },
      { w: 'hips', it: 'bacino' },
      { w: 'short gesture', it: 'gesto breve' }
    ]
  });
  A('jud-arm-drag-shadow', {
    title: { t: 'Arm drag in the air', it: 'Arm drag a vuoto' },
    sum: [
      { t: 'The ⟦arm drag⟧ brings the opponent’s arm across your own body to create an ⟦angle⟧.', it: 'L’arm drag porta il braccio dell’avversario attraverso il proprio corpo per creare un angolo.' },
      { t: 'You practise it in the air, only to train gesture, step and ⟦timing⟧, with no partner and no claim of real effectiveness.', it: 'Lo pratichi a vuoto, solo per allenare gesto, passo e tempismo, senza partner e senza affermare alcuna efficacia pratica.' },
      { t: 'The gesture combines an imaginary grip on the ⟦wrist⟧ and ⟦triceps⟧ with a ⟦sideways step⟧.', it: 'Il gesto combina una presa immaginaria su polso e tricipite con un passo laterale.' },
      { t: 'The pull comes from the step and the legs, not from the back, and the arms do not stiffen.', it: 'La trazione nasce dal passo e dalle gambe, non dalla schiena, e le braccia non si irrigidiscono.' },
      { t: 'Keep the hips low and the trunk upright, then return to the ⟦stance⟧ and repeat on the other side.', it: 'Mantieni il bacino basso e il busto eretto, poi torna in stance e ripeti dall’altro lato.' },
      { t: 'Do 8 repetitions on the right and 8 on the left, at a slow and steady rhythm.', it: 'Fai 8 ripetizioni sul lato destro e 8 sul sinistro, a ritmo lento e costante.' },
      { t: 'Do not pull anyone, avoid sharp twists of the back, and reduce the range if your shoulders hurt.', it: 'Non tirare nessuno, evita torsioni brusche della schiena e riduci l’ampiezza se le spalle fanno male.' }
    ],
    gloss: [
      { w: 'arm drag', it: 'trazione del braccio attraverso il corpo' },
      { w: 'angle', it: 'angolo' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'snap-down', it: 'trazione verso il basso della nuca' },
      { w: 'sideways step', it: 'passo laterale' },
      { w: 'wrist', it: 'polso' },
      { w: 'triceps', it: 'tricipite' },
      { w: 'timing', it: 'tempismo' },
      { w: 'hips', it: 'bacino' }
    ]
  });
  A('jud-single-leg-entry', {
    title: { t: 'Single-leg: entry in the air', it: 'Single-leg: ingresso a vuoto' },
    sum: [
      { t: 'The ⟦single-leg⟧ is a one-leg attack, and in this path you practise only the entry, in the air and slowly.', it: 'Il single-leg è un attacco a una gamba, e in questo percorso pratichi solo l’ingresso, a vuoto e lentamente.' },
      { t: 'You lift no imaginary leg and simulate no throw or fall: you train step, level and posture.', it: 'Non sollevi nessuna gamba immaginaria e non simuli proiezioni o cadute: alleni passo, livello e postura.' },
      { t: 'The entry combines a ⟦level change⟧ and a ⟦penetration step⟧, with the hips low and the hands in front of the body.', it: 'L’ingresso combina un level change e un penetration step, con il bacino basso e le mani davanti al corpo.' },
      { t: 'The ⟦back knee⟧ comes close to the mat without hitting it.', it: 'Il ginocchio posteriore si avvicina al tappeto senza batterci.' },
      { t: 'Stop at the lowest point, lifting nothing, and return to the ⟦stance⟧ with a ⟦shuffle⟧.', it: 'Fermati nel punto più basso, senza sollevare nulla, e torna in stance con uno shuffle.' },
      { t: 'The whole movement is slow, in 3–4 beats, with three entries on each ⟦lead foot⟧.', it: 'Tutto il movimento è lento, in 3-4 tempi, con tre ingressi per ciascun piede guida.' },
      { t: 'It is advisable to have an instructor check the entry, and you stop if your knee or back hurts.', it: 'È consigliabile far verificare l’ingresso da un istruttore, e ti fermi se ginocchio o schiena fanno male.' }
    ],
    gloss: [
      { w: 'single-leg', it: 'attacco a una gamba' },
      { w: 'level change', it: 'cambio di livello' },
      { w: 'penetration step', it: 'passo di penetrazione' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'shuffle', it: 'spostamento a passi scivolati' },
      { w: 'lead foot', it: 'piede guida' },
      { w: 'back knee', it: 'ginocchio posteriore' },
      { w: 'entry', it: 'ingresso' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-double-leg-entry', {
    title: { t: 'Double-leg: entry in the air', it: 'Double-leg: ingresso a vuoto' },
    sum: [
      { t: 'The ⟦double-leg⟧ is a two-leg attack, and in this path you practise only the entry, in the air.', it: 'Il double-leg è un attacco a due gambe, e in questo percorso pratichi solo l’ingresso, a vuoto.' },
      { t: 'There is no lifting, no throw and no knee impact: you train level, step and head position.', it: 'Non c’è sollevamento, né proiezione, né impatto del ginocchio: alleni livello, passo e posizione della testa.' },
      { t: 'The entry combines a ⟦level change⟧ and a ⟦penetration step⟧, with the arms wrapping the space in front of you.', it: 'L’ingresso combina un level change e un penetration step, con le braccia che avvolgono lo spazio davanti a te.' },
      { t: 'The hips stay low, the trunk upright, and the head high and beside the line of the imaginary body.', it: 'Il bacino resta basso, il busto eretto e la testa alta e laterale alla linea del corpo immaginario.' },
      { t: 'The ⟦back knee⟧ comes close to the mat without touching it hard.', it: 'Il ginocchio posteriore si avvicina al tappeto senza toccarlo con forza.' },
      { t: 'Stop at the lowest point and leave with a ⟦shuffle⟧ backwards into the ⟦stance⟧.', it: 'Fermati nel punto più basso ed esci con uno shuffle indietro, tornando in stance.' },
      { t: 'Do four slow entries of 4 beats, alternating lead feet; a check by an ⟦instructor⟧ is advisable.', it: 'Fai quattro ingressi lenti di 4 tempi, alternando i piedi guida; è consigliabile la verifica di un istruttore.' }
    ],
    gloss: [
      { w: 'double-leg', it: 'attacco a due gambe' },
      { w: 'level change', it: 'cambio di livello' },
      { w: 'penetration step', it: 'passo di penetrazione' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'shuffle', it: 'spostamento a passi scivolati' },
      { w: 'snap-down', it: 'trazione verso il basso della nuca' },
      { w: 'back knee', it: 'ginocchio posteriore' },
      { w: 'lead foot', it: 'piede guida' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-hip-bridge', {
    title: { t: 'Hip bridge', it: 'Ponte di bacino (hip bridge)' },
    sum: [
      { t: 'The ⟦hip bridge⟧ is an extension of the ⟦hip⟧ while lying down, used as ⟦mobility⟧ and coordination work in the air.', it: 'Il ponte di bacino è un’estensione dell’anca da sdraiati, usato come lavoro di mobilità e coordinazione a vuoto.' },
      { t: 'You rest on the ⟦shoulders⟧: it is not a bridge on the head, and there is no load on the neck.', it: 'Ti appoggi sulle spalle: non è un ponte sulla testa e non c’è alcun carico sul collo.' },
      { t: 'Lie on your back with your feet close to your ⟦glutes⟧ and your arms along your sides.', it: 'Sdraiati sulla schiena con i piedi vicini ai glutei e le braccia lungo i fianchi.' },
      { t: 'Breathe out, push with your feet and raise the hips until shoulders, hips and knees form a line.', it: 'Espira, spingi con i piedi e solleva il bacino fino a formare una linea tra spalle, bacino e ginocchia.' },
      { t: 'Shoulders and head stay on the ⟦mat⟧ and the neck stays relaxed.', it: 'Spalle e capo restano sul tappeto e il collo resta rilassato.' },
      { t: 'Come down slowly, one ⟦vertebra⟧ at a time; do 3 sets of 8 repetitions with 30 seconds of rest.', it: 'Scendi lentamente, vertebra per vertebra; fai 3 serie da 8 ripetizioni con 30 secondi di riposo.' },
      { t: 'Never bridge on the head or with load on the neck, and stop if your neck or back hurts.', it: 'Mai ponte sulla testa o con carico sul collo, e fermati se collo o schiena fanno male.' }
    ],
    gloss: [
      { w: 'hip bridge', it: 'ponte di bacino' },
      { w: 'hip', it: 'anca' },
      { w: 'glutes', it: 'glutei' },
      { w: 'shoulders', it: 'spalle' },
      { w: 'relaxed neck', it: 'collo rilassato' },
      { w: 'vertebra', it: 'vertebra' },
      { w: 'mat', it: 'tappeto' },
      { w: 'push with the feet', it: 'spingere con i piedi' },
      { w: 'mobility', it: 'mobilità' }
    ]
  });
  A('jud-sprawl', {
    title: { t: 'Controlled sprawl (low impact)', it: 'Sprawl controllato (a basso impatto)' },
    sum: [
      { t: 'The ⟦sprawl⟧ is a movement in which the legs are pushed back while the ⟦hips⟧ go down.', it: 'Lo sprawl è un movimento in cui le gambe vengono spinte indietro mentre il bacino scende.' },
      { t: 'You practise it at ⟦low impact⟧, in the air, to train coordination and hip control, not to react to an attack.', it: 'Lo pratichi a basso impatto e a vuoto, per allenare coordinazione e controllo del bacino, non la reazione a un attacco reale.' },
      { t: 'From the stance the hands go in front of the body and the legs stretch back with a step.', it: 'Dalla stance le mani vanno davanti al corpo e le gambe si allungano indietro con un passo.' },
      { t: 'The hips go down to about 10 cm from the mat without hitting it, with a ⟦neutral neck⟧ and eyes forward.', it: 'Il bacino scende fino a circa 10 cm dal tappeto senza batterlo, con collo neutro e sguardo avanti.' },
      { t: 'Recover with one step per leg, with no jumps, back to the ⟦stance⟧.', it: 'Recupera con un passo per gamba, senza salti, tornando in stance.' },
      { t: 'Low impact protects the ⟦wrists⟧, knees and hips, so use a ⟦soft mat⟧ and move slowly.', it: 'Il basso impatto protegge polsi, ginocchia e anche, quindi usa un tappeto morbido e muoviti lentamente.' },
      { t: 'Control comes before speed, and you stop if your wrists or back hurt.', it: 'Il controllo viene prima della velocità, e ti fermi se polsi o schiena fanno male.' }
    ],
    gloss: [
      { w: 'sprawl', it: 'proiezione delle gambe all’indietro' },
      { w: 'low impact', it: 'basso impatto' },
      { w: 'stance', it: 'posizione di partenza' },
      { w: 'level change', it: 'cambio di livello' },
      { w: 'neutral neck', it: 'collo neutro' },
      { w: 'hips', it: 'bacino' },
      { w: 'recovery steps', it: 'passi di recupero' },
      { w: 'soft mat', it: 'tappeto morbido' },
      { w: 'wrists', it: 'polsi' }
    ]
  });
  A('jud-ground-locomotion', {
    title: { t: 'Ground locomotion (bear crawl and crab walk)', it: 'Locomozione a terra (bear crawl e crab walk)' },
    sum: [
      { t: 'The ⟦bear crawl⟧ and the ⟦crab walk⟧ are ground movements on ⟦four points of support⟧.', it: 'Il bear crawl e il crab walk sono spostamenti a terra su quattro appoggi.' },
      { t: 'They train coordination and body control, and you practise them alone on a short stretch of mat.', it: 'Allenano coordinazione e controllo del corpo, e si praticano da soli su un tratto breve di tappeto.' },
      { t: 'In the bear crawl the hands are under the ⟦shoulders⟧, the knees about 10 cm from the mat and the back flat.', it: 'Nel bear crawl le mani sono sotto le spalle, le ginocchia a circa 10 cm dal tappeto e la schiena piatta.' },
      { t: 'Opposite hand and foot move together, with ⟦regular breathing⟧.', it: 'Mano e piede opposti si muovono insieme, con respirazione regolare.' },
      { t: 'In the crab walk the ⟦hips⟧ stay high, the hands are behind you and the steps are small.', it: 'Nel crab walk il bacino resta alto, le mani sono dietro e i passi sono piccoli.' },
      { t: 'Do three stretches of 3 metres of bear crawl, then three of crab walk, with 30 seconds of rest.', it: 'Fai tre tratti da 3 metri di bear crawl, poi tre di crab walk, con 30 secondi di riposo.' },
      { t: 'Work on a mat, keep stretches short, and stop at once if your ⟦wrists⟧ or shoulders hurt.', it: 'Lavora su un tappeto, mantieni i tratti brevi e fermati subito se polsi o spalle fanno male.' }
    ],
    gloss: [
      { w: 'bear crawl', it: 'camminata dell’orso' },
      { w: 'crab walk', it: 'camminata del granchio' },
      { w: 'four points of support', it: 'quattro appoggi' },
      { w: 'flat back', it: 'schiena piatta' },
      { w: 'hips', it: 'bacino' },
      { w: 'wrists', it: 'polsi' },
      { w: 'shoulders', it: 'spalle' },
      { w: 'regular breathing', it: 'respiro regolare' },
      { w: 'mat', it: 'tappeto' }
    ]
  });
  A('jud-guard-frames', {
    title: { t: 'Frames and guard recovery (solo)', it: 'Frame e recupero della guardia (solo)' },
    sum: [
      { t: 'A ⟦frame⟧ is a structure of ⟦forearms⟧ in front of the chest that creates space and distance.', it: 'Il frame è una struttura di avambracci davanti al petto che crea spazio e distanza.' },
      { t: 'Together with the ⟦shrimp⟧, the sideways hip movement on the ground, it helps to recover space in the ⟦guard⟧.', it: 'Insieme allo shrimp, lo spostamento laterale dei fianchi a terra, serve a recuperare spazio nella guardia.' },
      { t: 'This is solo work in the air, imagining a pressure in front of you.', it: 'È solo lavoro individuale a vuoto, immaginando una pressione davanti a te.' },
      { t: 'Lying down, the forearms form two bars in front of the chest, with the ⟦elbows⟧ close to the trunk.', it: 'Sdraiato, gli avambracci formano due barre davanti al petto con i gomiti vicini al busto.' },
      { t: 'With the shrimp the ⟦hips⟧ move sideways, the knees come to the chest, and one foot extends to ⟦create distance⟧.', it: 'Con lo shrimp i fianchi si spostano lateralmente, le ginocchia vanno verso il petto e un piede si stende per creare distanza.' },
      { t: 'Do a sequence of 4 beats, repeated 5 times, keeping the neck relaxed.', it: 'Fai una sequenza di 4 tempi, ripetuta 5 volte, con il collo rilassato.' },
      { t: 'Move slowly, avoid sharp twists of neck or back, work on a mat, and do not force the hips.', it: 'Muoviti lentamente, evita torsioni brusche di collo o schiena, lavora su tappeto e non forzare le anche.' }
    ],
    gloss: [
      { w: 'frame', it: 'struttura di avambracci davanti al petto' },
      { w: 'shrimp', it: 'spostamento laterale dei fianchi a terra' },
      { w: 'guard', it: 'guardia' },
      { w: 'forearms', it: 'avambracci' },
      { w: 'elbows', it: 'gomiti' },
      { w: 'create distance', it: 'creare distanza' },
      { w: 'relaxed neck', it: 'collo rilassato' },
      { w: 'hips', it: 'fianchi' },
      { w: 'mat', it: 'tappeto' }
    ]
  });
  A('jud-turtle-sit-out', {
    title: { t: 'Sit-out and switch from all fours', it: 'Sit-out e switch da quattro zampe' },
    sum: [
      { t: 'The ⟦sit-out⟧ starts from the ⟦all fours⟧ position, called ⟦turtle⟧, where one leg passes under the body while the ⟦hips⟧ rotate.', it: 'Il sit-out parte dalla posizione a quattro zampe, detta turtle, in cui una gamba passa sotto il corpo mentre il bacino ruota.' },
      { t: 'This is solo work in the air, for mobility and coordination on the ground.', it: 'È solo lavoro individuale a vuoto, per mobilità e coordinazione a terra.' },
      { t: 'Keep the hands under the shoulders and the knees under the hips.', it: 'Tieni le mani sotto le spalle e le ginocchia sotto i fianchi.' },
      { t: 'The neck does not rotate: you turn the hips, and the opposite foot stays on the ground.', it: 'Il collo non ruota: si ruota il bacino, e il piede opposto resta in appoggio.' },
      { t: 'The movement is slow and smooth, and you never drag the weight onto the neck.', it: 'Il movimento è lento e fluido, e non si trascina mai il peso sul collo.' },
      { t: 'Do the sit-out in 4 beats, 5 repetitions on each side.', it: 'Fai il sit-out in 4 tempi, 5 ripetizioni per lato.' },
      { t: 'Work on a ⟦mat⟧, keep a ⟦neutral neck⟧, and stop if your ⟦wrists⟧ or shoulders hurt.', it: 'Lavora su tappeto, tieni il collo neutro e fermati se polsi o spalle fanno male.' }
    ],
    gloss: [
      { w: 'sit-out', it: 'gamba che passa sotto il corpo con rotazione del bacino' },
      { w: 'turtle', it: 'posizione a quattro zampe' },
      { w: 'all fours', it: 'quattro zampe' },
      { w: 'hips', it: 'bacino' },
      { w: 'neutral neck', it: 'collo neutro' },
      { w: 'wrists', it: 'polsi' },
      { w: 'technical stand-up', it: 'rialzo tecnico' },
      { w: 'shrimp', it: 'spostamento dell’anca a terra' },
      { w: 'mat', it: 'tappeto' }
    ]
  });
  A('jud-knee-slide', {
    title: { t: 'Knee slide: guard passing (in the air)', it: 'Knee slide: passaggio della guardia (a vuoto)' },
    sum: [
      { t: 'The ⟦knee slide⟧ is a guard-passing movement, where a knee slides along a line.', it: 'Il knee slide è un movimento di passaggio della guardia, in cui un ginocchio scivola lungo una linea.' },
      { t: 'You practise it in the air, imagining a line on the ⟦mat⟧, to coordinate knees, ⟦hips⟧ and trunk, with no partner.', it: 'Lo pratichi a vuoto, immaginando una linea sul tappeto, per coordinare ginocchia, bacino e busto, senza partner.' },
      { t: 'From ⟦kneeling⟧, one knee moves forward and slides along the ⟦imaginary line⟧.', it: 'Da in ginocchio, un ginocchio avanza e scivola lungo la linea immaginaria.' },
      { t: 'The trunk stays upright and the ⟦free hand⟧ stays in front of the body.', it: 'Il busto resta eretto e la mano libera davanti al corpo.' },
      { t: 'The back foot pushes and the hips follow; the movement stops under control.', it: 'Il piede dietro spinge e il bacino segue; il movimento si ferma sotto controllo.' },
      { t: 'The knees touch the mat with control, never slammed; do 5 slow repetitions per side in 4 beats.', it: 'Le ginocchia si appoggiano sul tappeto con controllo, mai sbattute; fai 5 ripetizioni lente per lato in 4 tempi.' },
      { t: 'Move slowly with no jumps, and stop if your knees hurt.', it: 'Muoviti lentamente senza salti e fermati se le ginocchia fanno male.' }
    ],
    gloss: [
      { w: 'knee slide', it: 'passaggio con scivolamento del ginocchio' },
      { w: 'guard passing', it: 'passaggio della guardia' },
      { w: 'imaginary line', it: 'linea immaginaria' },
      { w: 'upright trunk', it: 'busto eretto' },
      { w: 'free hand', it: 'mano libera' },
      { w: 'kneeling', it: 'in ginocchio' },
      { w: 'hips', it: 'bacino' },
      { w: 'shrimp', it: 'spostamento dell’anca a terra' },
      { w: 'mat', it: 'tappeto' }
    ]
  });
  A('jud-th-principi-del-judo', {
    title: { t: 'The principles of judo', it: 'I principi del judo' },
    sum: [
      { t: '⟦Judo⟧ means “the way of gentleness” and was born as a method of physical, mental and moral education.', it: 'Judo significa «la via della cedevolezza», da «ju», flessibile, e «do», via, ed è nato come metodo di educazione fisica, mentale e morale.' },
      { t: 'It was created by ⟦Jigoro Kano⟧, who founded the ⟦Kodokan⟧ in Tokyo in 1882, aiming at a safe and progressive system.', it: 'Fu creato da Jigoro Kano, che nel 1882 fondò a Tokyo il Kodokan, puntando a un sistema sicuro e progressivo.' },
      { t: '⟦Seiryoku zenyo⟧ means optimal use of energy: lever, timing and posture instead of strength alone.', it: 'Seiryoku zenyo significa impiego ottimale dell’energia: leva, tempismo e postura invece della sola forza.' },
      { t: '⟦Jita kyoei⟧ means mutual prosperity: you grow together with others, not at their expense.', it: 'Jita kyoei significa prosperità reciproca: si cresce insieme agli altri, non a loro spese.' },
      { t: 'Before judo there were many ⟦ryu⟧ of ⟦jujutsu⟧; Kano drew on them, but selected techniques for training safety.', it: 'Prima del judo c’erano molte ryu di jujutsu; Kano le studiò, ma selezionò le tecniche per la sicurezza dell’allenamento.' },
      { t: 'Judo became an Olympic sport at Tokyo 1964, and women’s competitions joined the Olympic programme in 1992.', it: 'Il judo divenne sport olimpico a Tokyo 1964, e le competizioni femminili entrarono nel programma olimpico nel 1992.' },
      { t: 'In the app you use judo as movement training; real fighting always needs a partner and an instructor.', it: 'Nell’app usi il judo come allenamento di movimento; il combattimento vero richiede sempre un partner e un istruttore.' }
    ],
    gloss: [
      { w: 'judo', it: 'la via della cedevolezza' },
      { w: 'Jigoro Kano', it: 'fondatore del judo (1860–1938)' },
      { w: 'Kodokan', it: 'scuola fondata da Kano a Tokyo' },
      { w: 'seiryoku zenyo', it: 'impiego ottimale dell’energia' },
      { w: 'jita kyoei', it: 'prosperità e benessere reciproci' },
      { w: 'jujutsu', it: 'arti di combattimento tradizionali giapponesi' },
      { w: 'ryu', it: 'scuola tradizionale' },
      { w: 'randori', it: 'allenamento libero' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-th-etichetta-e-sicurezza', {
    title: { t: 'Etiquette and safety', it: 'Etichetta e sicurezza' },
    sum: [
      { t: '⟦Rei⟧ means greeting, respect and courtesy; even alone you can bow at the start and end of the session.', it: 'Rei significa saluto, rispetto e cortesia, e anche da solo puoi mantenere un piccolo rituale: un inchino a inizio e fine sessione.' },
      { t: 'Check the space: a ⟦non-slip surface⟧, never a hard floor for falls, and at least an arm’s length free around you.', it: 'Controlla prima lo spazio: una superficie antiscivolo, mai pavimento duro per le cadute, e spazio libero attorno a te di almeno un braccio disteso.' },
      { t: 'A ⟦warm-up⟧ of 5–8 minutes lowers the risk of strains, and the neck always moves slowly and under control.', it: 'Un riscaldamento di 5–8 minuti riduce il rischio di strappi, e il collo si muove sempre lento e controllato.' },
      { t: 'Stop at once with sharp pain, tingling, dizziness, nausea, unusual shortness of breath or a feeling of instability.', it: 'Fermati subito con dolore acuto, formicolio, giramenti di testa, nausea, fiato mozzo insolito o sensazione di instabilità.' },
      { t: 'Everything is done in the air, and falls follow a ⟦progression⟧: lying, seated, squatting, standing.', it: 'Tutto si fa a vuoto, e le cadute seguono una progressione: sdraiato, seduto, accovacciato, in piedi.' },
      { t: 'Never try real throws on other people without an ⟦instructor⟧, and never do chokes, joint locks or neck techniques.', it: 'Non provare mai proiezioni reali su altre persone senza istruttore, e non fare strangolamenti, leve o tecniche di collo.' },
      { t: 'End with 2–3 minutes of ⟦cool-down⟧, note any discomfort in your ⟦diary⟧, and finish with a last ⟦rei⟧.', it: 'Termina con 2–3 minuti di defaticamento, annota ogni fastidio nel diario e chiudi con un ultimo rei.' }
    ],
    gloss: [
      { w: 'rei', it: 'saluto, rispetto, cortesia' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'warm-up', it: 'riscaldamento' },
      { w: 'cool-down', it: 'defaticamento' },
      { w: 'stop signals', it: 'segnali di stop' },
      { w: 'progression', it: 'progressione' },
      { w: 'instructor', it: 'istruttore' },
      { w: 'diary', it: 'diario' },
      { w: 'non-slip surface', it: 'superficie antiscivolo' }
    ]
  });
  A('jud-th-fisica-della-proiezione', {
    title: { t: 'The physics of throwing', it: 'Fisica della proiezione' },
    sum: [
      { t: 'The ⟦centre of gravity⟧ is the point where all the body’s weight can be imagined to be concentrated, about at hip level.', it: 'Il baricentro è il punto in cui si può pensare concentrato tutto il peso del corpo, circa a livello del bacino.' },
      { t: 'A body is stable while the vertical projection of its centre of gravity falls inside the ⟦base of support⟧.', it: 'Un corpo è stabile finché la proiezione verticale del baricentro cade dentro la base d’appoggio.' },
      { t: 'You are more stable with wider feet and a lower centre of gravity, and less stable on tiptoe or with feet together.', it: 'Sei più stabile con piedi più larghi e baricentro più basso, e meno stabile in punta di piedi o con i piedi uniti.' },
      { t: 'You can unbalance someone by moving the centre of gravity or by reducing or moving the base; this moment is ⟦kuzushi⟧.', it: 'Puoi sbilanciare qualcuno spostando il baricentro o riducendo o spostando la base; questo momento è il kuzushi.' },
      { t: 'In a hip throw like ⟦o-goshi⟧ the hips are the ⟦fulcrum⟧; the farther the force from it, the less force you need.', it: 'In una proiezione d’anca come l’o-goshi il bacino è il fulcro di una leva, e più la forza è lontana da esso, meno forza serve.' },
      { t: '⟦Torque⟧ is force times arm, and a throw is mostly a ⟦rotation⟧, made by pulling with one hand, pushing with the other.', it: 'Il momento torcente è forza per braccio, e una proiezione efficace è soprattutto una rotazione, prodotta tirando con una mano e spingendo con l’altra.' },
      { t: 'Lowering the hips with bent knees and an upright back protects the back; never bend forward with straight legs.', it: 'Abbassare il bacino con ginocchia flesse e schiena eretta protegge la schiena; mai piegarsi in avanti con le gambe tese.' }
    ],
    gloss: [
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'base of support', it: 'base d’appoggio' },
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'fulcrum', it: 'fulcro' },
      { w: 'lever', it: 'leva' },
      { w: 'torque', it: 'momento torcente' },
      { w: 'o-goshi', it: 'proiezione d’anca' },
      { w: 'rotation', it: 'rotazione' },
      { w: 'upright back', it: 'schiena eretta' }
    ]
  });
  A('jud-th-kuzushi-otto-direzioni', {
    title: { t: 'Kuzushi: the eight directions', it: 'Kuzushi: le otto direzioni' },
    sum: [
      { t: '⟦Kuzushi⟧ means breaking the balance, and a throw has three phases: kuzushi, ⟦tsukuri⟧ and ⟦kake⟧.', it: 'Kuzushi significa rompere l’equilibrio, e una proiezione ha tre fasi: kuzushi, tsukuri e kake.' },
      { t: 'Without kuzushi a technique becomes a contest of strength; with good kuzushi you need less energy and less risk.', it: 'Senza kuzushi una tecnica diventa un confronto di forza; con un buon kuzushi servono meno energia e meno rischio.' },
      { t: 'The ⟦happo no kuzushi⟧ are the eight directions: four main ones and four ⟦diagonals⟧, where the body is most vulnerable.', it: 'Gli happo no kuzushi sono le otto direzioni: quattro principali e quattro diagonali, dove il corpo è più vulnerabile.' },
      { t: 'Hip and shoulder techniques work best forward, while sweeping techniques work best backward.', it: 'Le tecniche d’anca e di spalla funzionano meglio in avanti, mentre le falciate funzionano meglio all’indietro.' },
      { t: 'The ideal moment is when the other steps, pushes or pulls; this is the sense of ⟦ju⟧: yield, then direct.', it: 'Il momento ideale è quando l’altro fa un passo, spinge o tira; è il senso di ju, cedere per poi dirigere.' },
      { t: 'Kuzushi works only if you are balanced yourself: keep a long back, soft knees and look at the horizon.', it: 'Il kuzushi funziona solo se tu sei equilibrato: schiena lunga, ginocchia morbide e sguardo all’orizzonte.' },
      { t: 'In the air, work slowly, 5 seconds, then 3, then 2, repeat 8–10 times, and then change direction.', it: 'A vuoto lavora lentamente, 5 secondi, poi 3, poi 2, ripeti 8-10 volte, poi cambia direzione.' }
    ],
    gloss: [
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'tsukuri', it: 'entrata, preparazione' },
      { w: 'kake', it: 'esecuzione' },
      { w: 'happo no kuzushi', it: 'le otto direzioni dello squilibrio' },
      { w: 'ju', it: 'cedevolezza, cedere' },
      { w: 'diagonals', it: 'diagonali' },
      { w: 'o-goshi', it: 'proiezione d’anca' },
      { w: 'o-soto-gari', it: 'grande falciata esterna' },
      { w: 'timing', it: 'tempismo' }
    ]
  });
  A('jud-th-classificazione-nage-waza', {
    title: { t: 'Classification of throwing techniques', it: 'Classificazione delle tecniche di proiezione' },
    sum: [
      { t: '⟦Waza⟧ means technique, and the Kodokan divides techniques into ⟦nage-waza⟧, throws, and ⟦katame-waza⟧, ground control.', it: 'Waza significa tecnica, e il Kodokan divide le tecniche in nage-waza, proiezioni, e katame-waza, controllo a terra.' },
      { t: 'Throws are either ⟦tachi-waza⟧, done standing, or ⟦sutemi-waza⟧, sacrifice techniques where the thrower lets himself fall.', it: 'Le proiezioni sono tachi-waza, in piedi, oppure sutemi-waza, tecniche di sacrificio in cui chi proietta si lascia cadere.' },
      { t: 'Standing techniques are divided into ⟦te-waza⟧ for hands and arms, ⟦koshi-waza⟧ for hips and ⟦ashi-waza⟧ for legs.', it: 'Il tachi-waza si divide in te-waza per mani e braccia, koshi-waza per l’anca e ashi-waza per le gambe.' },
      { t: 'The classification rests on the body part that acts most, but in practice every technique uses the whole body.', it: 'La classificazione si basa sulla parte del corpo che agisce di più, ma nella pratica ogni tecnica usa tutto il corpo.' },
      { t: 'Katame-waza includes holds, chokes and joint locks, and real application needs a partner and an instructor.', it: 'Il katame-waza comprende immobilizzazioni, strangolamenti e leve, e l’applicazione reale richiede un partner e un istruttore.' },
      { t: 'The ⟦Gokyo no waza⟧ is the Kodokan list of fundamental throws: five groups of eight techniques, forty in total.', it: 'Il Gokyo no waza è l’elenco del Kodokan delle proiezioni fondamentali: cinque gruppi di otto tecniche, quaranta in totale.' },
      { t: 'Knowing the families helps you see similarities, plan training and speak the same language as instructors.', it: 'Conoscere le famiglie aiuta a riconoscere somiglianze, pianificare l’allenamento e usare lo stesso linguaggio degli istruttori.' }
    ],
    gloss: [
      { w: 'waza', it: 'tecnica' },
      { w: 'nage-waza', it: 'tecniche di proiezione' },
      { w: 'katame-waza', it: 'tecniche di controllo a terra' },
      { w: 'tachi-waza', it: 'tecniche in piedi' },
      { w: 'sutemi-waza', it: 'tecniche di sacrificio' },
      { w: 'te-waza', it: 'tecniche di mano e braccio' },
      { w: 'koshi-waza', it: 'tecniche d’anca' },
      { w: 'ashi-waza', it: 'tecniche di gamba' },
      { w: 'Gokyo no waza', it: 'elenco ufficiale delle proiezioni fondamentali' }
    ]
  });
  A('jud-th-prese-gi-e-no-gi', {
    title: { t: 'Grips with and without a judogi', it: 'Prese con e senza judogi' },
    sum: [
      { t: 'The grip is the link between you and the other person: through it you transmit ⟦kuzushi⟧ and control distance.', it: 'La presa è il collegamento tra te e l’altro: attraverso di essa trasmetti kuzushi e controlli la distanza.' },
      { t: 'With the ⟦judogi⟧ the classic grip is one hand on the lapel and the other on the sleeve.', it: 'Con il judogi la presa classica è una mano al bavero e l’altra alla manica.' },
      { t: 'Without a jacket you use body grips: the ⟦collar tie⟧ on the neck, the neck wrap and the ⟦plum clinch⟧.', it: 'Senza giacca si usano prese al corpo: il collar tie alla nuca, il neck wrap e il plum clinch.' },
      { t: 'The ⟦underhook⟧ passes under the armpit and gives control of the trunk; the ⟦overhook⟧ passes over the other’s arm.', it: 'L’underhook passa sotto l’ascella e dà controllo del tronco; l’overhook passa sopra il braccio dell’altro.' },
      { t: '⟦Wrist control⟧ guides the hand, and the bicep tie moves the upper arm, useful for the arm drag.', it: 'Il controllo del polso guida la mano, e la presa al bicipite sposta la parte alta del braccio, utile per l’arm drag.' },
      { t: 'Keep the grip relaxed until you need it, with soft shoulders and elbows close to the body.', it: 'Tieni la presa rilassata finché serve, con spalle morbide e gomiti vicini al corpo.' },
      { t: 'In the app everything is done in the air: you simulate the grip and never force the neck.', it: 'Nell’app tutto è a vuoto: simuli la presa e non forzi mai il collo.' }
    ],
    gloss: [
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'judogi', it: 'divisa del judo' },
      { w: 'collar tie', it: 'presa alla nuca' },
      { w: 'plum clinch', it: 'mani intrecciate dietro la nuca' },
      { w: 'underhook', it: 'braccio sotto l’ascella' },
      { w: 'overhook', it: 'braccio sopra il braccio dell’altro' },
      { w: 'wrist control', it: 'controllo del polso' },
      { w: 'bicep tie', it: 'presa al bicipite' },
      { w: 'hand fighting', it: 'lotta per le prese' }
    ]
  });
  A('jud-th-ukemi-fisiologia-e-prevenzione', {
    title: { t: 'Ukemi: physiology and prevention', it: 'Ukemi: fisiologia e prevenzione' },
    sum: [
      { t: '⟦Ukemi⟧ means receiving with the body: safe falls that spread the ⟦impact⟧ and protect head, ⟦neck⟧, spine and joints.', it: 'Ukemi significa ricevere con il corpo: cadute sicure che distribuiscono l’impatto e proteggono testa, collo, colonna e articolazioni.' },
      { t: 'The neck supports a head of 4–5 kg, so the chin goes on the chest and the head never touches the mat.', it: 'Il collo sostiene una testa di 4–5 kg, quindi il mento va sul petto e la testa non tocca il tappeto.' },
      { t: 'The arm ⟦slap⟧ hits the mat at 30–45° from the body, palm down, using the whole limb and never bracing the arms.', it: 'La battuta del braccio colpisce il tappeto a 30–45° dal corpo, palmo in giù, con tutto l’arto, senza puntare le braccia.' },
      { t: 'Bracing with a stiff arm is the most common way to hurt the ⟦wrist⟧, elbow or collarbone.', it: 'Puntare il braccio rigido è il modo più comune di farsi male a polso, gomito o clavicola.' },
      { t: 'In a backward fall the back rounds, contact goes from hips to shoulder blades, and the legs stay raised.', it: 'In una caduta all’indietro la schiena si arrotonda e il contatto avviene in sequenza, dal bacino alle scapole, con le gambe sollevate.' },
      { t: 'Energy is spread over time and surface, and ⟦breathing out⟧ during the slap avoids holding your breath.', it: 'L’energia si spalma su tempo e superficie, ed espirare durante la battuta evita di trattenere il respiro.' },
      { t: 'Stop and do not retry the same day with sharp pain, tingling, dizziness or a feeling of instability.', it: 'Fermati e non riprovare lo stesso giorno con dolore acuto, formicolio, giramenti di testa o senso di instabilità.' }
    ],
    gloss: [
      { w: 'ukemi', it: 'cadute sicure, ricevere con il corpo' },
      { w: 'slap', it: 'battuta del braccio' },
      { w: 'chin on the chest', it: 'mento sul petto' },
      { w: 'rounded back', it: 'schiena arrotondata' },
      { w: 'impact', it: 'impatto' },
      { w: 'neck', it: 'collo' },
      { w: 'wrist', it: 'polso' },
      { w: 'breathing out', it: 'espirare' },
      { w: 'warning signs', it: 'segnali d’allarme' }
    ]
  });
  A('jud-th-allenamento-solo-pianificazione', {
    title: { t: 'Solo training: planning', it: 'Allenamento solitario: pianificazione' },
    sum: [
      { t: 'Five minutes of focused, regular practice beat one hour now and then, because you do not arrive tired.', it: 'Cinque minuti di pratica mirata e regolare battono un’ora ogni tanto, perché non arrivi stanco.' },
      { t: '⟦Spaced practice⟧ means reviewing a skill at growing intervals, and it gives better long-term retention.', it: 'La ripetizione distribuita significa rivedere un’abilità a intervalli crescenti, e dà una ritenzione a lungo termine migliore.' },
      { t: '⟦Interleaved practice⟧ alternates variants such as speed, direction and side; it feels less smooth but works better.', it: 'La pratica intervallata alterna varianti come velocità, direzione e lato; sembra meno fluida ma funziona meglio.' },
      { t: 'In the ⟦error diary⟧ write what you did, which error you noticed and one correction for next time.', it: 'Nel diario degli errori annota cosa hai eseguito, quale errore hai notato e una sola correzione per la prossima volta.' },
      { t: 'Adaptation happens outside training: ⟦sleep⟧ of 7–9 hours for adults is a common reference, and poor ⟦recovery⟧ means you reduce the load.', it: 'L’adattamento avviene fuori dall’allenamento: 7–9 ore di sonno per gli adulti sono un riferimento comune, e un recupero insufficiente significa ridurre il carico.' },
      { t: 'Good ⟦mobility⟧ of hips, ankles, shoulders and thoracic spine makes movements wider and safer, but it needs control.', it: 'Una buona mobilità di anche, caviglie, spalle e colonna toracica rende i gesti più ampi e sicuri, ma serve controllo.' },
      { t: 'If you miss a day, resume without catching up: ⟦consistency⟧ beats intensity.', it: 'Se salti un giorno, riprendi senza recuperare: la costanza vince sull’intensità.' }
    ],
    gloss: [
      { w: 'spaced practice', it: 'ripetizione distribuita' },
      { w: 'interleaved practice', it: 'pratica intervallata' },
      { w: 'error diary', it: 'diario degli errori' },
      { w: 'mobility', it: 'mobilità' },
      { w: 'recovery', it: 'recupero' },
      { w: 'sleep', it: 'sonno' },
      { w: 'rei', it: 'saluto, rispetto' },
      { w: 'consistency', it: 'costanza' },
      { w: 'weekly plan', it: 'piano settimanale' }
    ]
  });
  A('jud-th-clinch-muay-thai-principi', {
    title: { t: 'The clinch in muay thai: principles', it: 'Clinch nella muay thai: principi' },
    sum: [
      { t: 'The ⟦clinch⟧ is close-range grappling in which two athletes control each other with hands and trunk.', it: 'Il clinch è il corpo a corpo ravvicinato in cui due atleti si controllano a vicenda con le mani e il tronco.' },
      { t: 'The ⟦plum clinch⟧ is its best-known form: hands locked behind the neck and tight elbows, to control head, posture and distance.', it: 'Il plum clinch è la sua forma più nota: mani intrecciate dietro la nuca e gomiti stretti, per controllare testa, postura e distanze.' },
      { t: 'Rules vary by federation and country, and in competition the clinch is allowed but must have an action.', it: 'Le regole variano per federazione e paese, e in competizione il clinch è ammesso ma deve avere un’azione.' },
      { t: 'A compact, ⟦rooted posture⟧ is the foundation of control, with a long back, soft knees and close elbows.', it: 'Una postura compatta e radicata è il fondamento del controllo, con schiena lunga, ginocchia morbide e gomiti vicini.' },
      { t: 'The ⟦centre of gravity⟧ stays over your base, with small steps, and a knee strike only if the other leg is rooted.', it: 'Il baricentro deve restare sopra la tua base, con passi piccoli e una ginocchiata solo se l’altra gamba è radicata.' },
      { t: 'The power of ⟦khao trong⟧, ⟦khao khong⟧ and ⟦khao noi⟧ comes from the hip pushing forward, not from the leg alone.', it: 'La potenza di khao trong, khao khong e khao noi viene dall’anca che si spinge in avanti, non dalla sola gamba.' },
      { t: 'In the app everything is in the air; real clinch work needs a qualified instructor and protection.', it: 'Nell’app tutto è a vuoto; il clinch reale richiede un istruttore qualificato e protezioni.' }
    ],
    gloss: [
      { w: 'clinch', it: 'corpo a corpo ravvicinato' },
      { w: 'plum clinch', it: 'mani intrecciate dietro la nuca' },
      { w: 'muay thai', it: 'boxe thailandese' },
      { w: 'khao trong', it: 'ginocchiata diretta' },
      { w: 'khao khong', it: 'ginocchiata curva' },
      { w: 'khao noi', it: 'ginocchiata corta' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'rooted posture', it: 'postura radicata' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-th-autovalutazione-video', {
    title: { t: 'Self-assessment with video', it: 'Autovalutazione con video' },
    sum: [
      { t: 'Your ⟦proprioception⟧ is imprecise, so a video gives objective external ⟦feedback⟧ on angles and postures.', it: 'La tua propriocezione è imprecisa, quindi un video offre un feedback esterno oggettivo su angoli e posture.' },
      { t: 'Film with a fixed camera at hip height, from the front and from the side at 90°.', it: 'Filma con la telecamera ferma all’altezza del bacino, con luce davanti o laterale, di fronte e di lato a 90°.' },
      { t: 'Use a short ⟦checklist⟧ of three points, yes or no, for hip and shoulder techniques and for leg techniques.', it: 'Usa una checklist breve di tre punti, sì o no, per le tecniche d’anca e di spalla e per quelle di gamba.' },
      { t: 'To avoid ⟦confirmation bias⟧, answer every point, watch the video the next day and correct one parameter at a time.', it: 'Per evitare il bias di conferma, rispondi a ogni punto, guarda il video il giorno dopo e correggi un parametro per volta.' },
      { t: 'If a point stays “no” for three sessions, reduce the speed or go back to an earlier step.', it: 'Se un punto resta «no» per tre sessioni, riduci la velocità o torna a un gradino precedente.' },
      { t: 'A video does not measure strength or timing against an opponent, and cannot replace an expert ⟦instructor⟧.', it: 'Un video non misura forza o tempismo con un avversario, e non sostituisce un occhio esperto.' },
      { t: 'Protect your ⟦privacy⟧ by filming in a private space, and compare with an old session every 4–6 weeks.', it: 'Filma in uno spazio privato, chiedi il permesso per mostrare altre persone e confronta con una sessione vecchia ogni 4-6 settimane.' }
    ],
    gloss: [
      { w: 'proprioception', it: 'percezione del movimento' },
      { w: 'checklist', it: 'lista di controllo' },
      { w: 'confirmation bias', it: 'bias di conferma' },
      { w: 'feedback', it: 'riscontro' },
      { w: 'slow motion', it: 'rallentatore' },
      { w: 'ukemi', it: 'cadute' },
      { w: 'o-goshi', it: 'proiezione d’anca' },
      { w: 'privacy', it: 'riservatezza' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-th-concatenazioni-renraku', {
    title: { t: 'Combinations: renraku-waza', it: 'Concatenazioni: renraku-waza' },
    sum: [
      { t: 'A real opponent reacts, so ⟦renraku-waza⟧, combinations, use that ⟦reaction⟧: the first attack creates the condition for the second.', it: 'Un avversario reale reagisce, quindi i renraku-waza, le concatenazioni, sfruttano questa reazione: il primo attacco crea la condizione per il secondo.' },
      { t: 'A classic is forward then backward: the other stiffens and leans back, then you switch to a sweep such as ⟦o-uchi-gari⟧.', it: 'Un classico è avanti poi indietro: l’altro si irrigidisce e si piega all’indietro, poi passi a una falciata come l’o-uchi-gari.' },
      { t: 'A ⟦change of direction⟧ must not stop between the two gestures, because the energy of the first feeds the second.', it: 'Un cambio di direzione non deve fermarsi fra i due gesti, perché l’energia del primo alimenta il secondo.' },
      { t: 'A ⟦feint⟧ is a simulated gesture to provoke a reaction; it must be believable and short.', it: 'La finta è un gesto simulato per provocare una reazione; deve essere credibile e breve.' },
      { t: 'Combinations have a ⟦rhythm⟧, such as 1-2 or 1-pause-2, and alternating rhythms trains adaptability.', it: 'Le combinazioni hanno un ritmo, come 1-2 o 1-pausa-2, e alternare i ritmi allena l’adattabilità.' },
      { t: '⟦Kaeshi-waza⟧ are counter-techniques; they are advanced, studied only with a partner and an instructor, and not trained in the app.', it: 'I kaeshi-waza sono contro-tecniche; sono avanzati, si studiano solo con partner e istruttore, e nell’app non si allenano.' },
      { t: 'To build a combination, choose two compatible techniques, consolidate each, link them slowly and then raise the rhythm.', it: 'Per costruire una combinazione scegli due tecniche compatibili, consolida ciascuna, collegale lentamente e poi aumenta il ritmo.' }
    ],
    gloss: [
      { w: 'renraku-waza', it: 'concatenazioni di tecniche' },
      { w: 'kaeshi-waza', it: 'contro-tecniche' },
      { w: 'feint', it: 'finta' },
      { w: 'o-uchi-gari', it: 'grande falciata interna' },
      { w: 'change of direction', it: 'cambio di direzione' },
      { w: 'rhythm', it: 'ritmo' },
      { w: 'reaction', it: 'reazione' },
      { w: 'sweep', it: 'falciata, spazzata' },
      { w: 'instructor', it: 'istruttore' }
    ]
  });
  A('jud-th-dal-solo-allo-istruttore', {
    title: { t: 'From solo to the instructor', it: 'Dal solo all’istruttore' },
    sum: [
      { t: 'Solo work in the air can build balance, coordination, motor memory, low-level safe falls, mobility and vocabulary.', it: 'Con il lavoro a vuoto puoi sviluppare equilibrio e coordinazione, memoria motoria, cadute a basso livello in sicurezza, mobilità e vocabolario.' },
      { t: 'These are excellent foundations, but they are not complete judo skills.', it: 'Sono ottime fondamenta, ma non sono abilità di judo complete.' },
      { t: 'Alone you cannot prove real ⟦kuzushi⟧, timing with a moving partner, falls from high throws, pressure management or safe partner work.', it: 'Da solo non puoi dimostrare kuzushi reale, tempismo con un partner in movimento, cadute da proiezioni alte, gestione della pressione o sicurezza di coppia.' },
      { t: 'A club should have affiliation with a recognised federation, qualified instructors, insurance, a suitable ⟦tatami⟧ and a beginners’ course.', it: 'Un club dovrebbe avere affiliazione a una federazione riconosciuta, istruttori qualificati, assicurazione, un tatami adeguato e un corso per principianti.' },
      { t: 'Before enrolling, try a trial lesson and ask about qualifications, beginners, injuries, medical certificates and cost.', it: 'Prima di iscriverti, prova una lezione di prova e chiedi di qualifiche, principianti, infortuni, certificato medico e costo.' },
      { t: '⟦Uchikomi⟧ is repeating the entry with a partner, without throwing; ⟦nage-komi⟧ adds a full throw; ⟦randori⟧ is free practice.', it: 'L’uchikomi è la ripetizione dell’ingresso con un partner, senza proiettare; il nage-komi aggiunge la proiezione completa; il randori è l’allenamento libero.' },
      { t: 'The app only supports you: it cannot correct errors you do not see, while an ⟦instructor⟧ makes progress faster and safer.', it: 'L’app è solo un supporto: non può correggere errori che non vedi, quindi un istruttore ti fa progredire più in fretta e in sicurezza.' }
    ],
    gloss: [
      { w: 'kuzushi', it: 'squilibrio' },
      { w: 'uchikomi', it: 'ripetizione dell’ingresso con un partner' },
      { w: 'nage-komi', it: 'ripetizione con proiezione completa' },
      { w: 'randori', it: 'allenamento libero' },
      { w: 'tori', it: 'chi proietta' },
      { w: 'uke', it: 'chi cade' },
      { w: 'tatami', it: 'tappeto del judo' },
      { w: 'instructor', it: 'istruttore' },
      { w: 'jita kyoei', it: 'prosperità e benessere reciproci' }
    ]
  });
})(window.ST = window.ST || {});
