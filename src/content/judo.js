/* SkillTree — repertorio motorio judo/lotta: 12 tecniche principali, solo pratica SOLITARIA e SICURA.
   Nessuna proiezione, nessuna caduta nuova, nessuna tecnica su partner in autonomia.
   Le entrate (L1) si eseguono "a vuoto", lentamente, senza caricare il peso su un partner immaginario.
   Livelli L0–L5 = stadi didattici interni, NON cinture o gradi ufficiali. */
(function (ST) {
  'use strict';
  const C = ST.content;
  const T = (id, o) => Object.assign({ id, tags: [], complexity: 1, instructor: false, variants: [], theory: [] }, o);

  C.judo = {
    safety: [
      'Spazio: almeno 2 m × 2 m liberi, pavimento antiscivolo, scarpe tolte o calze antiscivolo. Meglio tappeto o moquette.',
      'Movimenti lenti e controllati. Se senti dolore (non fatica) a ginocchia, schiena o collo: fermati.',
      'Niente proiezioni, niente cadute nuove, niente sweep contro oggetti o persone. Le entrate sono «a vuoto».',
      'Le tecniche con un partner, le cadute (ukemi) e tutto ciò che prevede un contatto richiedono un istruttore qualificato.',
      'La domenica è riposo fisico: solo teoria e osservazione.'
    ],
    scope: 'Questo modulo allena memoria motoria, equilibrio, footwork e fluidità del gesto. NON allena la capacità di applicare una tecnica a un avversario che oppone resistenza: quella richiede partner, allenatore e randori.',
    techniques: [
      T('posture', { name: 'Posture: shizentai e jigotai', jp: '自然体・自護体', stage: 'L0', minMonth: 1, tags: ['movement'], complexity: 1, space: 'sul posto',
        cues: ['Piedi alla larghezza delle spalle, peso distribuito al centro del piede.', 'Ginocchia morbide, schiena lunga, sguardo avanti (non ai piedi).', 'Shizentai: postura naturale. Jigotai: gambe più larghe, bacino basso, peso più basso.', 'Passa lentamente da una all’altra senza alzare le spalle.'],
        errors: [['peso-indietro', 'Peso sui talloni'], ['spalle-alte', 'Spalle alzate o rigide'], ['sguardo-giu', 'Sguardo ai piedi'], ['ginocchia-bloccate', 'Ginocchia bloccate']],
        variants: ['Chiudi gli occhi 5 secondi e senti il peso sui piedi.', 'Alterna shizentai e jigotai a tempo di respiro.', 'Spostati di mezzo passo mantenendo la postura.'],
        theory: [{ q: 'Quale caratteristica distingue jigotai da shizentai?', o: ['Peso e baricentro più bassi, base più larga', 'Si sta su una gamba sola', 'Si tengono le braccia incrociate', 'È una presa'], a: 0 }, { q: 'Dove deve cadere il peso in shizentai?', o: ['Sui talloni', 'Al centro del piede', 'Sulle punte', 'Solo sul piede destro'], a: 1 }] }),
      T('ayumi-tsugi', { name: 'Spostamenti: ayumi-ashi e tsugi-ashi', jp: '歩み足・継ぎ足', stage: 'L0', minMonth: 1, tags: ['movement'], complexity: 1, space: '2 m in linea',
        cues: ['Ayumi-ashi: passi normali, il piede avanza senza incrociarsi.', 'Tsugi-ashi: un piede avanza, l’altro lo segue senza superarlo.', 'Scivola a filo del pavimento, non sollevare i piedi.', 'La testa resta alla stessa altezza: niente su-e-giù.'],
        errors: [['piedi-incrociati', 'Piedi che si incrociano'], ['testa-su-giu', 'Testa che oscilla'], ['passo-largo', 'Passo troppo lungo'], ['peso-indietro', 'Peso sui talloni']],
        variants: ['Cambia direzione ogni 3 passi.', 'Passo più corto e più veloce, mantenendo la postura.', 'Avanti, lato, indietro in un quadrato di 1 m.'],
        theory: [{ q: 'In tsugi-ashi quale piede avanza per primo?', o: ['Quello davanti, poi il piede dietro lo segue senza superarlo', 'Quello dietro, che supera l’altro', 'Entrambi insieme saltando', 'Dipende dall’avversario'], a: 0 }, { q: 'Perché si scivola a filo del pavimento?', o: ['Per fare meno rumore', 'Per non perdere la base e restare stabili', 'Per correre più veloci', 'Non ha scopo'], a: 1 }] }),
      T('tai-sabaki', { name: 'Tai sabaki: rotazioni del corpo', jp: '体捌き', stage: 'L0', minMonth: 2, tags: ['movement'], complexity: 2, space: '2 m × 2 m',
        cues: ['Pivot sulla punta del piede d’appoggio, ginocchio morbido.', 'Ruota bacino e spalle insieme: la testa resta alta.', 'Esegui mae-mawari (rotazione avanti) e ushiro-mawari (indietro) a 90° e a 180°.', 'Chiudi con una postura equilibrata, non a metà del giro.'],
        errors: [['perde-equilibrio', 'Perdita di equilibrio a fine rotazione'], ['spalle-prima', 'Spalle che ruotano prima del bacino'], ['piedi-fermi', 'Piedi che non pivotano'], ['sguardo-giu', 'Sguardo ai piedi']],
        variants: ['Aggiungi un secondo giro al contrario.', 'Rotazione a comando casuale (destra/sinistra).', 'Rotazione + due passi tsugi-ashi.'],
        theory: [{ q: 'Che cosa significa tai sabaki?', o: ['Gestione/movimento del corpo per schivare o cambiare angolo', 'Una proiezione', 'Un tipo di presa', 'Il saluto'], a: 0 }, { q: 'Perché bacino e spalle ruotano insieme?', o: ['Per mantenere un asse stabile', 'Per mostrare forza', 'Per allungare il passo', 'Per non guardare avanti'], a: 0 }] }),
      T('kuzushi', { name: 'Kuzushi: le otto direzioni dell’equilibrio', jp: '崩し', stage: 'L0', minMonth: 3, tags: ['movement'], complexity: 2, space: 'sul posto',
        cues: ['Immagina un cerchio con otto direzioni intorno ai piedi.', 'Sposta lentamente il peso verso ogni direzione fino al limite dove saresti ancora stabile.', 'Individua il punto in cui, oltre, dovresti fare un passo per non cadere.', 'Torna al centro prima di passare alla direzione successiva.'],
        errors: [['schiena-curva', 'Schiena curva'], ['anca-indietro', 'Bacino che resta indietro'], ['salta-direzioni', 'Direzioni saltate o confuse'], ['perde-equilibrio', 'Perdita di equilibrio']],
        variants: ['Direzioni a comando casuale.', 'Occhi chiusi nelle direzioni avanti/indietro.', 'Ogni direzione con un piccolo passo di recupero.'],
        theory: [{ q: 'Kuzushi indica…', o: ['Lo squilibrio del partner come condizione per la tecnica', 'Una caduta', 'Una strategia di gara', 'Un saluto'], a: 0 }, { q: 'Quante sono le direzioni classiche di squilibrio?', o: ['Quattro', 'Sei', 'Otto', 'Dodici'], a: 2 }] }),
      T('kumikata', { name: 'Kumi-kata: struttura della presa', jp: '組み方', stage: 'L1', minMonth: 4, tags: [], complexity: 2, space: 'sul posto',
        cues: ['Simula la presa a vuoto: mano al bavero e mano alla manica, gomiti morbidi.', 'La presa è una struttura, non una morsa: spalle basse, avambracci attivi.', 'Accompagna la presa con un piccolo passo, non con le sole braccia.', 'Cambia presa a vuoto, mantenendo la postura.'],
        errors: [['spalle-alte', 'Spalle alzate'], ['braccia-rigide', 'Braccia rigide o troppo tese'], ['presa-lontana', 'Presa troppo lontana dal corpo'], ['postura-persa', 'Postura persa mentre si «prende»']],
        variants: ['Presa destra e presa sinistra alternate.', 'Presa + passo + tai sabaki.', 'Presa con respiro lento e spalle basse.'],
        theory: [{ q: 'La presa nel judo serve soprattutto a…', o: ['Controllare e creare squilibrio', 'Fare male', 'Stare fermi', 'Rallentare l’azione'], a: 0 }] }),
      T('ogoshi-entry', { name: 'O-goshi: entrata a vuoto', jp: '大腰', stage: 'L1', minMonth: 5, tags: [], complexity: 3, instructor: true, space: '2 m × 2 m',
        cues: ['Solo ENTRATA (tsukuri), a vuoto, lenta: nessuna proiezione.', 'Passo avanti, rotazione del piede d’appoggio, abbassa il bacino.', 'Immagina il braccio che avvolge il partner: bacino sotto il suo baricentro.', 'Esci dalla posizione in modo controllato tornando in shizentai.'],
        errors: [['ginocchia-bloccate', 'Ginocchia dritte'], ['schiena-curva', 'Schiena curva'], ['piedi-lontani', 'Piedi troppo distanti dall’asse'], ['perde-equilibrio', 'Perdita di equilibrio'], ['salta-passi', 'Passi saltati o confusi']],
        variants: ['Ripeti l’entrata più lentamente, contando 4 tempi.', 'Entrata + uscita + nuova entrata dal lato opposto.', 'Entrata dopo un tai sabaki.'],
        theory: [{ q: 'Un’entrata a vuoto dimostra…', o: ['La sequenza e la coordinazione del movimento, non l’efficacia contro un avversario', 'Che sai proiettare', 'Che sei pronto alla gara', 'Che la tecnica è perfetta'], a: 0 }] }),
      T('osoto-entry', { name: 'O-soto-gari: avanzata e posizionamento', jp: '大外刈', stage: 'L1', minMonth: 6, tags: [], complexity: 3, instructor: true, space: '2 m × 2 m',
        cues: ['Solo avanzata e posizionamento del piede d’appoggio, a vuoto.', 'Il piede d’appoggio si pianta a fianco dell’avversario immaginario, ginocchio morbido.', 'Non eseguire la fase di spazzata: ferma il movimento a controllo.', 'Torna in shizentai e ripeti dal lato opposto.'],
        errors: [['peso-indietro', 'Peso sui talloni'], ['piede-lontano', 'Piede d’appoggio troppo lontano'], ['perde-equilibrio', 'Perdita di equilibrio'], ['testa-su-giu', 'Testa che oscilla']],
        variants: ['Entrata a sinistra e a destra alternate.', 'Entrata dopo uno spostamento a comando casuale.', 'Entrata + tai sabaki e ritorno.'],
        theory: [{ q: 'In autonomia, quale parte di o-soto-gari si può simulare in sicurezza?', o: ['Solo la posizione e l’avanzata a vuoto', 'La proiezione completa', 'Lo sweep contro un muro', 'Nessuna parte'], a: 0 }] }),
      T('seoi-entry', { name: 'Seoi-nage: rotazione e ingresso a vuoto', jp: '背負投', stage: 'L1', minMonth: 7, tags: [], complexity: 3, instructor: true, space: '2 m × 2 m',
        cues: ['Solo rotazione e ingresso, a vuoto, lentamente.', 'Pivot sul piede avanzato, ginocchia flesse, bacino sotto.', 'Mantieni il busto eretto e il peso centrale: niente flessione in avanti.', 'Esci con controllo; nessun carico sul partner immaginario.'],
        errors: [['schiena-curva', 'Schiena curva'], ['ginocchia-dritte', 'Ginocchia dritte'], ['piedi-lontani', 'Piedi troppo lontani dall’asse'], ['sguardo-giu', 'Sguardo ai piedi'], ['perde-equilibrio', 'Perdita di equilibrio']],
        variants: ['Ingresso con braccio destro e sinistro.', 'Ingresso dopo kumi-kata a vuoto.', 'Ingresso + uscita + tai sabaki.'],
        theory: [{ q: 'Perché si mantiene il busto eretto nell’ingresso?', o: ['Per proteggere schiena e mantenere equilibrio', 'Per sembrare più alti', 'Per tirare più forte', 'Non è importante'], a: 0 }] }),
      T('shrimp', { name: 'Ne-waza: spostamento dell’anca (shrimp)', jp: 'エビ', stage: 'L3', minMonth: 8, tags: ['floor'], complexity: 2, space: '2 m in lunghezza, tappeto',
        cues: ['Sdraiato sulla schiena, piedi appoggiati, mani vicine al petto.', 'Spingi con il piede e sposta l’anca di lato, poi ritrai le ginocchia.', 'Movimento lento, collo rilassato, senza girare la testa con forza.', 'Alterna destra e sinistra sulla lunghezza dello spazio.'],
        errors: [['collo-teso', 'Collo teso'], ['gambe-rigide', 'Gambe rigide'], ['spinta-poca', 'Spinta del piede insufficiente'], ['movimento-rapido', 'Movimento troppo rapido']],
        variants: ['Shrimp con cambio di lato ogni 3 ripetizioni.', 'Shrimp + ritorno alla posizione di partenza.', 'Shrimp lento contando 3 tempi per fase.'],
        theory: [{ q: 'A che cosa serve lo shrimp?', o: ['Creare spazio spostando l’anca', 'Proiettare', 'Fare presa', 'Riscaldare solo le braccia'], a: 0 }] }),
      T('standup', { name: 'Rialzarsi in sicurezza (technical stand-up)', jp: '立ち上がり', stage: 'L3', minMonth: 9, tags: ['floor'], complexity: 2, space: '2 m × 2 m, tappeto',
        cues: ['Da seduto: una mano dietro, piede opposto vicino.', 'Solleva il bacino, passa la gamba sotto e fai un passo all’indietro verso la postura.', 'Mantieni la schiena neutra e le mani davanti al corpo, mai a sorreggere il collo.', 'Chiudi in postura difensiva (jigotai), poi shizentai.'],
        errors: [['schiena-curva', 'Schiena curva'], ['mani-lente', 'Mani non pronte'], ['peso-indietro', 'Peso sui talloni'], ['perde-equilibrio', 'Perdita di equilibrio']],
        variants: ['Alza dal lato destro e dal lato sinistro.', 'Stand-up + due passi di tsugi-ashi.', 'Stand-up a comando, più veloce ma controllato.'],
        theory: [{ q: 'Quale aspetto è prioritario nel rialzarsi?', o: ['Schiena neutra e controllo', 'Velocità massima', 'Saltare', 'Appoggiare il collo'], a: 0 }] }),
      T('deashi-timing', { name: 'De-ashi-barai: tempismo del passo (a vuoto)', jp: '出足払', stage: 'L2', minMonth: 10, tags: ['timing'], complexity: 3, instructor: true, space: '2 m in linea',
        cues: ['Solo il tempismo del passo, a vuoto: nessuna spazzata contro oggetti o persone.', 'Muovi i piedi in ritmo regolare e ferma il movimento nel punto in cui il piede sarebbe «caricato».', 'Controlla l’equilibrio: la gamba d’appoggio rimane morbida.', 'Ripeti a tempo di metronomo mentale (1-2-3).'],
        errors: [['tempo-sbagliato', 'Ritmo irregolare'], ['peso-indietro', 'Peso sui talloni'], ['piedi-incrociati', 'Piedi che si incrociano'], ['perde-equilibrio', 'Perdita di equilibrio']],
        variants: ['Ritmo lento, poi veloce, poi lento.', 'Ritmo irregolare a comando casuale.', 'Aggiungi tai sabaki a metà.'],
        theory: [{ q: 'In de-ashi-barai che cosa conta più di tutto?', o: ['Il tempismo con il passo dell’avversario', 'La forza del braccio', 'La velocità massima', 'La presa'], a: 0 }] }),
      T('uchikomi-rhythm', { name: 'Uchikomi a vuoto: ritmo di entrata e uscita', jp: '打込', stage: 'L2', minMonth: 11, tags: ['timing'], complexity: 3, instructor: true, space: '2 m × 2 m',
        cues: ['Ripeti un’entrata già imparata a vuoto, in serie di 5, lentamente.', 'Entra, ferma il gesto, esci e ricomincia: ritmo regolare e respiro libero.', 'Mantieni la qualità: se peggiora la postura, fermati.', 'Cambia il lato ogni serie.'],
        errors: [['ritmo-irregolare', 'Ritmo irregolare'], ['qualita-cala', 'Qualità che cala nelle ripetizioni'], ['spalle-alte', 'Spalle alzate'], ['perde-equilibrio', 'Perdita di equilibrio']],
        variants: ['Serie di 3 con un’entrata diversa per ogni serie.', 'Serie con pausa di un secondo tra entrata e uscita.', 'Serie a occhi chiusi nella fase di rientro (solo nel posto sicuro).'],
        theory: [{ q: 'Lo scopo dell’uchikomi a vuoto è…', o: ['Fissare il movimento con ripetizioni controllate', 'Fare più forza', 'Simulare un combattimento', 'Evitare gli errori'], a: 0 }] })
    ],
    combos: [
      { name: 'Postura → spostamento → tai sabaki', ids: ['posture', 'ayumi-tsugi', 'tai-sabaki'] },
      { name: 'Spostamento → kuzushi → presa', ids: ['ayumi-tsugi', 'kuzushi', 'kumikata'] },
      { name: 'Presa → entrata O-goshi → uscita', ids: ['kumikata', 'ogoshi-entry', 'posture'] },
      { name: 'Tai sabaki → O-soto-gari (avanzata) → postura', ids: ['tai-sabaki', 'osoto-entry', 'posture'] },
      { name: 'Seoi (ingresso) → tai sabaki → presa', ids: ['seoi-entry', 'tai-sabaki', 'kumikata'] },
      { name: 'Shrimp → rialzo → postura', ids: ['shrimp', 'standup', 'posture'] }
    ],
    errorLabel: id => {
      for (const t of C.judo.techniques) for (const [k, v] of t.errors) if (k === id) return v;
      return id;
    },
    // Teoria domenicale non legata a una tecnica
    sundayTheory: [
      { q: 'Perché il lavoro solitario non può dimostrare di saper applicare una tecnica?', o: ['Manca la resistenza di un partner non collaborativo', 'Perché è troppo faticoso', 'Perché è troppo lento', 'Non è vero'], a: 0 },
      { q: 'Quale attività richiede SEMPRE un istruttore?', o: ['Cadute (ukemi) e proiezioni con partner', 'Spostamenti a vuoto', 'Postura', 'Respirazione'], a: 0 },
      { q: 'Con dolore (non fatica) durante un esercizio, che cosa fai?', o: ['Mi fermo e valuto', 'Continuo più piano', 'Aumento la velocità', 'Cambio lato e proseguo'], a: 0 },
      { q: 'Perché si ripassano anche le tecniche più vecchie?', o: ['La memoria motoria decade senza richiami distribuiti', 'Per fare più minuti', 'Per tradizione', 'Non serve'], a: 0 }
    ]
  };
})(window.ST = window.ST || {});
