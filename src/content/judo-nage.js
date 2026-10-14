/* SkillTree — percorso judo: cadute (ukemi) in progressione e proiezioni «a vuoto» (movimento completo senza partner).
   Cadute: si sale d'altezza SOLO dopo aver consolidato il gradino precedente (sdraiato → seduto → accovacciato → in piedi).
   Proiezioni: si allena il gesto completo (kuzushi–tsukuri–kake) nell'aria, terminando SEMPRE in piedi. Nessun partner, nessuna proiezione reale.
   Nessun modulo può sostituire un istruttore: qui si fissano forma, ritmo e fluidità. */
(function (ST) {
  'use strict';
  const C = ST.content, J = C.judo;
  const mc = (q, o, a) => ({ q, o, a });
  const N = (id, name, jp, stage, minMonth, tags, complexity, space, cues, errors, variants, theory, instructor, warn) =>
    ({ id, name, jp, stage, minMonth, tags, complexity, space, cues, errors, variants, theory, instructor: !!instructor, warn: warn || '', track: 'judo' });

  // Sicurezza: sostituisce il divieto assoluto con regole d'uso della progressione
  J.safety = J.safety.filter(x => !/Niente proiezioni, niente cadute nuove/.test(x) && !/Le tecniche con un partner, le cadute/.test(x));
  J.safety.unshift(
    'Cadute (ukemi): SOLO su tappeto/tatami o materasso spesso, mai su pavimento duro. Cominci dal gradino più basso (sdraiato) e sali solo se quello precedente è consolidato.',
    'Mento sul petto in ogni caduta all’indietro e laterale; la testa non tocca mai il tappeto. Con dolore al collo, alla schiena, giramenti di testa o dopo un colpo alla testa: stop.',
    'Le proiezioni si allenano «a vuoto»: il gesto completo si esegue nell’aria e si termina sempre in piedi. Nessuno viene proiettato e tu non cadi.',
    'Il lavoro con un partner (proiettare o essere proiettato), il randori e la verifica della forma richiedono un istruttore qualificato.'
  );
  J.scope = 'Questo modulo allena memoria motoria, equilibrio, footwork, cadute in progressione e il gesto completo delle proiezioni (kuzushi–tsukuri–kake) a vuoto. NON dimostra la capacità di proiettare un avversario che resiste: quella richiede partner, istruttore e randori. Le cadute dalle altezze superiori vanno verificate da un istruttore.';

  const T = [
    // ---------- CADUTE (UKEMI) ----------
    N('ushiro-ukemi-lying', 'Ushiro ukemi 1: caduta indietro da sdraiato', '後ろ受身①', 'L0', 2, ['ukemi'], 1, '2 m × 1 m, tappeto',
      ['Sdraiato sulla schiena, ginocchia flesse, mento sul petto: guardi la cintura.', 'Braccia sollevate in verticale, poi battile sul tappeto a 30–45° dal corpo, palmi in giù, con tutto il braccio (non solo la mano).', 'Le gambe restano leggermente sollevate; il collo non si alza e non si abbassa a scatti.', 'Espira nel momento della battuta; ripeti 10 volte lentamente.'],
      [['mento-alto', 'Mento che si stacca dal petto'], ['braccia-strette', 'Braccia troppo vicine al corpo'], ['braccia-cadute', 'Battuta debole o ritardata'], ['trattiene-respiro', 'Respiro trattenuto']],
      ['Battuta con braccio destro e sinistro alternati.', 'Battuta più forte mantenendo il collo fermo.', 'Dieci battute senza mai alzare la testa.'],
      [mc('Dove guarda il mento in ushiro ukemi?', ['Sul petto (verso la cintura)', 'Verso il soffitto', 'Alla destra', 'Al soffitto con la testa indietro'], 0), mc('Con che cosa si batte sul tappeto?', ['Con tutto il braccio, a 30–45° dal corpo', 'Solo con la mano', 'Con la testa', 'Non si batte'], 0)]),
    N('yoko-ukemi-lying', 'Yoko ukemi 1: caduta laterale da sdraiato', '横受身①', 'L0', 3, ['ukemi'], 1, '2 m × 1 m, tappeto',
      ['Sdraiato sul fianco, mento sul petto, la testa non tocca il tappeto.', 'Il braccio basso batte a 30–45° dal corpo con tutto l’avambraccio; l’altro braccio incrocia il petto.', 'Le gambe sono leggermente divaricate, non incrociate.', 'Ripeti su entrambi i lati, lentamente.'],
      [['mento-alto', 'Mento che si stacca dal petto'], ['braccio-stretto', 'Braccio che batte troppo vicino'], ['gambe-unite', 'Gambe unite o incrociate'], ['spalla-sotto', 'Spalla che sprofonda']],
      ['Battuta su un lato poi sull’altro senza fermarsi.', 'Tre battute lente e tre veloci.', 'Battuta con gambe leggermente sollevate.'],
      [mc('Che posizione hanno le gambe in yoko ukemi?', ['Leggermente divaricate', 'Unite e incrociate', 'Piegate sotto il corpo', 'In aria rigide'], 0)]),
    N('ushiro-ukemi-seated', 'Ushiro ukemi 2: caduta indietro da seduto', '後ろ受身②', 'L0', 4, ['ukemi'], 2, '2 m × 1 m, tappeto',
      ['Seduto, gambe stese o leggermente flesse, braccia avanti, mento sul petto.', 'Rotola all’indietro sulla schiena arrotondata (non sulla testa), battendo i bracci a 30–45° nel momento del contatto.', 'Spingi con i glutei e torna alla posizione seduta usando lo slancio, senza sforzare il collo.', 'Movimento fluido, senza dondolio brusco: 5 ripetizioni, poi riposo.'],
      [['testa-tocca', 'La testa tocca il tappeto'], ['schiena-dritta', 'Schiena rigida invece che arrotondata'], ['braccia-ritardo', 'Battuta in ritardo'], ['collo-teso', 'Collo teso']],
      ['Con le braccia incrociate sul petto nella prima fase.', 'Con gambe sollevate al momento della battuta.', 'Seduto-giù-battuta-su in un unico movimento.'],
      [mc('Su quale parte del corpo si rotola?', ['Sulla schiena arrotondata', 'Sulla testa', 'Sul collo', 'Sulle spalle appuntite'], 0), mc('Quando si battono le braccia?', ['Nel momento del contatto con il tappeto', 'Prima di partire', 'Dopo essersi fermati', 'Mai'], 0)], false,
      'Se senti dolore al collo o alla schiena, interrompi.'),
    N('mae-ukemi-kneeling', 'Mae ukemi 1: rotolamento in avanti da in ginocchio', '前受身①', 'L1', 5, ['ukemi'], 3, '2 m × 2 m, tappeto',
      ['Parti in ginocchio, mano e braccio destri a formare un arco vicino alla spalla sinistra, testa girata a guardare l’anca sinistra.', 'Rotola lungo il braccio e la spalla in diagonale, mai sopra la colonna o la testa.', 'Arrivo sull’anca sinistra: braccio sinistro batte a 45°.', 'Torna in ginocchio o seduto con un movimento controllato.'],
      [['testa-sotto', 'Testa che entra sotto la spalla'], ['rotola-colonna', 'Rotolamento sulla colonna'], ['braccio-rigido', 'Braccio rigido'], ['movimento-rapido', 'Movimento troppo rapido']],
      ['Rotolamento a sinistra e a destra.', 'Rotolamento più lento in 4 tempi.', 'Rotolamento + battuta + posizione seduta.'],
      [mc('Su quale linea si rotola in mae ukemi?', ['In diagonale, lungo il braccio e la spalla', 'Sulla colonna', 'Sopra la testa', 'Sul collo'], 0)], true,
      'Dopo averlo imparato a terra con un istruttore, sali solo di gradino. Stop con dolore o giramenti di testa.'),
    N('yoko-ukemi-low', 'Yoko ukemi 2: caduta laterale da accovacciato', '横受身②', 'L1', 6, ['ukemi'], 2, '2 m × 2 m, tappeto',
      ['Dalla posizione accovacciata (talloni vicini al tappeto), cadi di lato spostando il peso su un’anca.', 'Il braccio basso batte a 30–45° nel momento del contatto; mento sul petto.', 'Le gambe restano leggermente divaricate e morbide.', 'Riporti il peso su entrambi i piedi, ripetendo dall’altro lato.'],
      [['mento-alto', 'Mento che si stacca'], ['peso-alto', 'Partenza troppo alta'], ['braccio-stretto', 'Braccio che batte troppo vicino'], ['gambe-rigide', 'Gambe rigide']],
      ['Cade su un lato e sull’altro, lentamente.', 'Con battuta più decisa.', 'Con un passo laterale prima della caduta.'],
      [mc('Da quale altezza si parte in questo gradino?', ['Accovacciato, con le gambe fino al tappeto', 'In piedi', 'Da un salto', 'Dal soffitto'], 0)], true,
      'Sali di altezza solo se il gradino precedente è consolidato. Con dolore, stop.'),
    N('ushiro-ukemi-squat', 'Ushiro ukemi 3: caduta indietro da accovacciato', '後ろ受身③', 'L1', 6, ['ukemi'], 3, '2 m × 2 m, tappeto',
      ['Accovacciato, mani avanti, mento sul petto, ginocchia verso il petto.', 'Lasciati cadere all’indietro rotolando sulla schiena arrotondata; le braccia battono a 30–45°.', 'Le gambe restano sollevate e flesse, non spingere a terra con i talloni.', 'Torna alla posizione di partenza con lo slancio del rotolamento.'],
      [['testa-tocca', 'La testa tocca il tappeto'], ['talloni-giu', 'Talloni che battono'], ['braccia-ritardo', 'Battuta in ritardo'], ['schiena-rigida', 'Schiena rigida']],
      ['Con braccia incrociate nella prima ripetizione.', 'Con battuta decisa.', 'Con rotazione leggera su un lato.'],
      [mc('Quale gradino deve essere consolidato prima di passare a ushiro ukemi da accovacciato?', ['Ushiro ukemi da seduto', 'Mae ukemi in piedi', 'Nessuno', 'Ushiro ukemi in piedi'], 0)], true,
      'Prima il gradino da seduto, poi questo. Su tappeto spesso.'),
    N('ushiro-ukemi-standing', 'Ushiro ukemi 4: caduta indietro da in piedi', '後ろ受身④', 'L2', 10, ['ukemi'], 4, '2 m × 2 m, tatami',
      ['Parti in piedi, ginocchia morbide; mento sul petto prima di scendere.', 'Scendi rapidamente in accovacciata e lasciati cadere all’indietro sulla schiena arrotondata; le braccia battono a 30–45°.', 'Il bacino non sbatte: il peso si distribuisce sulla schiena arrotondata.', 'Una sola ripetizione per volta, con pausa; se sbagli, torna al gradino precedente.'],
      [['testa-tocca', 'La testa tocca il tappeto'], ['bacino-sbatte', 'Il bacino batte'], ['braccia-ritardo', 'Battuta in ritardo'], ['mento-alto', 'Mento che si stacca']],
      ['Dalla postura con un passo indietro.', 'Con battuta più decisa.', 'Con un passo laterale seguito da caduta.'],
      [mc('Dopo un errore, qual è il comportamento corretto?', ['Tornare al gradino precedente e ripetere lì', 'Insistere con più forza', 'Aumentare l’altezza', 'Smettere di battere'], 0)], true,
      'Altezza maggiore: usa tatami o materasso spesso. Verifica la forma con un istruttore prima di aumentare il numero di ripetizioni.'),
    N('yoko-ukemi-standing', 'Yoko ukemi 3: caduta laterale da in piedi', '横受身③', 'L2', 11, ['ukemi'], 4, '2 m × 2 m, tatami',
      ['In piedi, passa il peso su un lato, mento sul petto; scendi con l’anca e cadi lateralmente.', 'Il braccio basso batte a 30–45° sul tappeto nel momento del contatto.', 'Le gambe sono leggermente divaricate e morbide, non incrociate.', 'Una ripetizione per lato, con pausa, lentamente.'],
      [['mento-alto', 'Mento che si stacca'], ['braccio-stretto', 'Braccio vicino al corpo'], ['gambe-rigide', 'Gambe rigide'], ['spalla-sotto', 'Spalla che sprofonda']],
      ['Con un passo laterale prima della caduta.', 'Con battuta più decisa.', 'Con rotazione leggera del bacino.'],
      [mc('Quale parte del corpo non deve toccare il tappeto?', ['La testa', 'Il braccio che batte', 'L’anca', 'La schiena'], 0)], true,
      'Prima il gradino accovacciato. Con dolore o giramenti, stop.'),
    N('mae-ukemi-squat', 'Mae ukemi 2: rotolamento in avanti da accovacciato', '前受身②', 'L2', 11, ['ukemi'], 4, '2 m × 2 m, tappeto',
      ['Da accovacciato, appoggia la mano destra davanti al piede sinistro, il braccio forma un arco e la testa guarda l’anca sinistra.', 'Rotola diagonalmente lungo braccio e spalla, mai sopra la colonna, e batti con il braccio sinistro a 45°.', 'Arrivo sull’anca sinistra; torna in piedi o in ginocchio con controllo.', 'Alterna destra e sinistra, una ripetizione alla volta.'],
      [['testa-sotto', 'Testa che entra sotto la spalla'], ['rotola-colonna', 'Rotolamento sulla colonna'], ['braccio-rigido', 'Braccio rigido'], ['movimento-rapido', 'Movimento troppo rapido']],
      ['Più lento in 4 tempi.', 'Con battuta più decisa.', 'Rotolamento + passo + ritorno in stance.'],
      [mc('Come deve essere il percorso del rotolamento?', ['In diagonale, sul braccio e sulla spalla', 'Sulla colonna', 'Sopra la testa', 'Sul collo'], 0)], true,
      'Rotolamenti = rischio medio-alto: verificali con un istruttore prima di aumentare l’altezza.'),
    N('mae-ukemi-standing', 'Mae ukemi 3: rotolamento in avanti da in piedi', '前受身③', 'L3', 15, ['ukemi'], 5, '2 m × 2 m, tatami',
      ['In piedi, passo avanti, mano e braccio destri a formare un arco; mento sul petto, sguardo all’anca opposta.', 'Rotola diagonalmente sul braccio e sulla spalla, battendo con l’altro braccio a 45° e atterrando sull’anca opposta.', 'Atterraggio morbido: le gambe non battono; torna in stance con un passo.', 'Una ripetizione alla volta, con pausa e verifica del collo.'],
      [['testa-sotto', 'Testa che entra sotto la spalla'], ['rotola-colonna', 'Rotolamento sulla colonna'], ['gambe-battono', 'Gambe che battono'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Rotolamento con passo di rincorsa breve.', 'Con battuta più decisa.', 'Rotolamento e ritorno in stance rapido.'],
      [mc('Quale precauzione serve per il rotolamento in piedi?', ['Tatami spesso e verifica di un istruttore', 'Pavimento duro', 'Velocità massima', 'Nessuna'], 0)], true,
      'Gradino alto: avvia solo dopo mae ukemi da accovacciato consolidato e con tatami. Stop con dolore.'),
    // ---------- PROIEZIONI «A VUOTO» ----------
    N('ogoshi-full', 'O-goshi: gesto completo a vuoto', '大腰（全体）', 'L2', 8, [], 4, '2 m × 2 m',
      ['Kuzushi: immagina di portare il partner in avanti verso le punte dei suoi piedi con la mano sinistra (hikite).', 'Tsukuri: passo avanti con il piede destro, rotazione sul piede d’appoggio fino a stare di schiena, ginocchia flesse, bacino sotto il baricentro immaginario.', 'Kake: estendi ginocchia e anche, ruota le spalle in avanti con il braccio destro che avvolge la vita immaginaria.', 'Fine: fermati con controllo e torna in shizentai in piedi. Mai caricare il peso del corpo in avanti.'],
      [['ginocchia-dritte', 'Ginocchia dritte'], ['bacino-alto', 'Bacino sopra il baricentro immaginario'], ['salta-passi', 'Passi saltati'], ['schiena-curva', 'Schiena curva'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Gesto completo in 4 tempi (kuzushi–passo–rotazione–estensione).', 'A velocità maggiore, mantenendo la forma.', 'Gesto + ritorno in shizentai + gesto dal lato opposto.'],
      [mc('Quali sono le tre fasi di una proiezione?', ['Kuzushi, tsukuri, kake', 'Corsa, salto, caduta', 'Presa, spinta, uscita', 'Saluto, presa, caduta'], 0), mc('Dove deve stare il bacino in o-goshi?', ['Sotto il baricentro del partner', 'Sopra la sua testa', 'Lontano', 'Dietro'], 0)], true,
      'Gesto in aria: non lasciarti cadere in avanti con il peso.'),
    N('osoto-full', 'O-soto-gari: gesto completo a vuoto', '大外刈（全体）', 'L2', 9, [], 4, '2 m × 2 m',
      ['Kuzushi: porta il partner immaginario all’indietro sul suo tallone destro.', 'Tsukuri: passo con il piede sinistro a fianco del suo piede destro, ginocchio morbido, busto eretto.', 'Kake: la gamba destra spazza all’indietro a quota bassa (altezza ginocchio), seguendo l’asse del corpo, senza colpire nulla.', 'Fine: riporta il piede a terra davanti, torna in stance in equilibrio.'],
      [['peso-indietro', 'Peso sui talloni'], ['gamba-alta', 'Gamba che sale troppo'], ['perde-equilibrio', 'Perdita di equilibrio'], ['busto-indietro', 'Busto che si inclina all’indietro'], ['testa-su-giu', 'Testa che oscilla']],
      ['Spazzata lenta in 4 tempi.', 'Spazzata alternata destra e sinistra.', 'Gesto dopo uno spostamento a comando.'],
      [mc('A quale altezza si spazza la gamba nel gesto a vuoto?', ['A quota bassa, controllata', 'Sopra la testa', 'Contro il muro', 'Alla massima velocità'], 0)], true,
      'La spazzata è nell’aria: non colpire pareti, mobili o persone.'),
    N('seoi-full', 'Seoi-nage: gesto completo a vuoto', '背負投（全体）', 'L2', 10, [], 5, '2 m × 2 m',
      ['Kuzushi: con la mano sinistra (hikite) porta il partner in avanti, sulle punte.', 'Tsukuri: passo avanti con il destro, pivot sul piede d’appoggio, ginocchia flesse, spalla destra sotto l’ascella immaginaria.', 'Kake: estendi le gambe e ruota le spalle in avanti, il busto si inclina al massimo di circa 20° in avanti.', 'Fine: ritorna in shizentai in piedi con controllo: non lasciarti cadere in avanti.'],
      [['schiena-curva', 'Schiena curva'], ['ginocchia-dritte', 'Ginocchia dritte'], ['piedi-lontani', 'Piedi lontani dall’asse'], ['sguardo-giu', 'Sguardo ai piedi'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Gesto in 4 tempi.', 'Gesto a destra e a sinistra alternati.', 'Gesto dopo kumi-kata a vuoto.'],
      [mc('Quanto si inclina il busto in avanti nel gesto a vuoto?', ['Poco (circa 20°)', 'Fino a toccare terra', 'Per niente e indietro', 'Fino alla caduta'], 0)], true,
      'Non sbilanciarti in avanti: se perdi equilibrio, fermati.'),
    N('ouchi-full', 'O-uchi-gari: gesto completo a vuoto', '大内刈（全体）', 'L2', 12, [], 4, '2 m × 2 m',
      ['Kuzushi: porta il partner all’indietro e leggermente di lato, verso il suo tallone.', 'Tsukuri: passo con il piede sinistro dentro le sue gambe, ginocchio morbido, busto eretto.', 'Kake: la gamba destra spazza all’interno, a quota bassa, nell’aria, con piede flesso.', 'Fine: riporta il piede a terra davanti e torna in stance.'],
      [['peso-indietro', 'Peso sui talloni'], ['gamba-alta', 'Gamba che sale troppo'], ['schiena-curva', 'Schiena curva'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Spazzata lenta.', 'Spazzata alternata.', 'Gesto dopo tai sabaki.'],
      [mc('Dove spazza la gamba in o-uchi-gari?', ['All’interno, a quota bassa', 'All’esterno, in alto', 'Dietro, sopra la testa', 'Contro un muro'], 0)], true),
    N('kouchi-full', 'Ko-uchi-gari: gesto completo a vuoto', '小内刈（全体）', 'L2', 13, [], 3, '2 m × 2 m',
      ['Kuzushi: porta il partner indietro e verso il suo tallone.', 'Tsukuri: piccolo passo in avanti, piede d’appoggio vicino.', 'Kake: gesto breve del piede (spazzata piccola) all’interno del tallone immaginario, a quota bassissima.', 'Fine: torna in stance in equilibrio.'],
      [['gesto-grande', 'Gesto troppo ampio'], ['peso-indietro', 'Peso sui talloni'], ['schiena-curva', 'Schiena curva'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Gesto breve in 3 tempi.', 'Gesto breve alternato.', 'Gesto dopo passo di tsugi-ashi.'],
      [mc('Che cosa caratterizza ko-uchi-gari?', ['Una spazzata piccola e breve del piede', 'Una rotazione di 180°', 'Una caduta', 'Una presa'], 0)], true),
    N('taiotoshi-full', 'Tai-otoshi: gesto completo a vuoto', '体落（全体）', 'L3', 14, [], 4, '2 m × 2 m',
      ['Kuzushi: porta il partner in avanti e verso il suo lato destro.', 'Tsukuri: passo con il destro e poi con il sinistro all’indietro, ruotando il corpo; gamba destra tesa come blocco davanti alla gamba immaginaria.', 'Kake: ruota il busto e abbassa le spalle, la gamba blocca.', 'Fine: torna in shizentai in piedi senza lasciarti cadere.'],
      [['gamba-non-tesa', 'Gamba di blocco non tesa'], ['schiena-curva', 'Schiena curva'], ['peso-indietro', 'Peso sui talloni'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Gesto lento in 4 tempi.', 'Gesto alternato.', 'Gesto dopo kumi-kata a vuoto.'],
      [mc('Quale parte del corpo blocca in tai-otoshi?', ['La gamba tesa davanti all’avversario', 'La testa', 'La schiena', 'Il braccio'], 0)], true),
    N('harai-goshi-full', 'Harai-goshi: gesto completo a vuoto', '払腰（全体）', 'L3', 17, [], 5, '2 m × 2 m',
      ['Kuzushi: porta il partner in avanti, verso le punte.', 'Tsukuri: passo con il piede sinistro, rotazione sul piede d’appoggio, anca a contatto con l’anca immaginaria.', 'Kake: la gamba destra spazza all’indietro in alto, a quota moderata, mentre il busto ruota in avanti.', 'Fine: riporta il piede a terra e torna in shizentai in equilibrio.'],
      [['gamba-troppo-alta', 'Gamba troppo alta'], ['schiena-curva', 'Schiena curva'], ['perde-equilibrio', 'Perdita di equilibrio'], ['peso-indietro', 'Peso sui talloni']],
      ['Spazzata lenta in 4 tempi.', 'Spazzata alternata.', 'Gesto dopo tai sabaki.'],
      [mc('Che cosa conta di più nell’harai-goshi?', ['Equilibrio e controllo sul piede d’appoggio', 'L’altezza della gamba', 'La velocità massima', 'La presa'], 0)], true,
      'Equilibrio su un piede solo: usa una parete come appoggio mentale se non sei stabile.'),
    N('uchimata-full', 'Uchi-mata: gesto completo a vuoto', '内股（全体）', 'L3', 19, [], 5, '2 m × 2 m',
      ['Kuzushi: porta il partner in avanti, leggermente di lato.', 'Tsukuri: passo con il sinistro, rotazione, gamba destra pronta all’interno della sua coscia.', 'Kake: la gamba destra sale all’interno e all’indietro a quota moderata, il busto ruota in avanti.', 'Fine: torna in stance con controllo e senza lasciarti cadere.'],
      [['gamba-troppo-alta', 'Gamba troppo alta'], ['perde-equilibrio', 'Perdita di equilibrio'], ['schiena-curva', 'Schiena curva'], ['sguardo-giu', 'Sguardo ai piedi']],
      ['Gesto lento in 4 tempi.', 'Gesto alternato.', 'Gesto dopo hikite a vuoto.'],
      [mc('Che cosa richiede uchi-mata?', ['Equilibrio e controllo dell’asse del corpo', 'Forza dei polsi', 'Nessun equilibrio', 'Un salto'], 0)], true,
      'Tecnica avanzata: gesto lento, equilibrio prima di velocità.'),
    N('band-uchikomi', 'Uchikomi con elastico (ingresso ripetuto, senza proiezione)', 'ゴム打込', 'L2', 13, [], 4, 'vicino a un ancoraggio sicuro',
      ['Fissa un elastico largo (resistenza media) a un ancoraggio solido all’altezza del bacino; verifica che non possa cedere.', 'Impugna l’altra estremità con la mano di presa (tsurite) e ripeti l’entrata (tsukuri) di una tecnica già imparata.', 'Ferma il movimento nel punto di kake senza completare la proiezione, poi rientra lentamente.', 'Serie di 5–8 ripetizioni di qualità; fermati se la forma peggiora.'],
      [['ancoraggio-instabile', 'Ancoraggio non sicuro'], ['qualita-cala', 'Qualità che cala nelle ripetizioni'], ['spalle-alte', 'Spalle alzate'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Serie con una sola tecnica.', 'Serie alternata destra e sinistra.', 'Serie con due tecniche diverse.'],
      [mc('Che cosa si controlla prima di usare l’elastico?', ['La solidità dell’ancoraggio', 'Il colore', 'La lunghezza', 'La marca'], 0)], true,
      'Un elastico che cede può colpirti: tieni il viso lontano dalla linea di tiro e usa un ancoraggio testato.')
  ];
  T.forEach(t => J.techniques.push(t));
  J.techniques = J.techniques.map((t, i) => [t, i]).sort((a, b) => a[0].minMonth - b[0].minMonth || a[1] - b[1]).map(x => x[0]);

  J.combos.push(
    { name: 'Caduta indietro → caduta laterale → postura', ids: ['ushiro-ukemi-lying', 'yoko-ukemi-lying', 'posture'] },
    { name: 'O-goshi (gesto) → O-soto-gari (gesto) → postura', ids: ['ogoshi-full', 'osoto-full', 'posture'] },
    { name: 'Combinazione di spazzate: O-uchi → O-soto → postura', ids: ['ouchi-full', 'osoto-full', 'posture'] },
    { name: 'Kuzushi → Seoi (gesto) → tai sabaki', ids: ['kuzushi', 'seoi-full', 'tai-sabaki'] },
    { name: 'Ko-uchi → Seoi (gesto) → postura', ids: ['kouchi-full', 'seoi-full', 'posture'] },
    { name: 'Elastico → O-goshi (gesto) → postura', ids: ['band-uchikomi', 'ogoshi-full', 'posture'] }
  );

  J.sundayTheory.push(
    { q: 'Quali sono le tre fasi di ogni proiezione?', o: ['Kuzushi (squilibrio), tsukuri (entrata), kake (esecuzione)', 'Presa, spinta, caduta', 'Saluto, presa, uscita', 'Corsa, salto, caduta'], a: 0 },
    { q: 'Nelle cadute (ukemi) dove va il mento?', o: ['Sul petto', 'Verso il soffitto', 'Verso la spalla', 'Non importa'], a: 0 },
    { q: 'A quale angolo si batte il braccio nelle cadute?', o: ['30–45° dal corpo', 'Lungo il corpo, attaccato', 'A 90°', 'Non si batte'], a: 0 },
    { q: 'Come si sale di altezza nelle cadute?', o: ['Solo dopo aver consolidato il gradino precedente', 'Subito, dalla posizione in piedi', 'Con un salto', 'Mai'], a: 0 },
    { q: 'Perché le proiezioni si fanno «a vuoto» in autonomia?', o: ['Si fissano forma e ritmo senza rischio per un partner', 'Perché è più facile', 'Perché non servono', 'Perché è proibito'], a: 0 },
    { q: 'Che cosa non dimostra un gesto a vuoto ben fluido?', o: ['Che funzionerebbe contro un avversario che resiste', 'Che ricordi la sequenza', 'Che hai equilibrio', 'Che hai ritmo'], a: 0 }
  );

  // Il percorso lotta/no-gi (judo-more) è opzionale: va attivato dal profilo.
  J.techniques.forEach(t => { if (!t.track) t.track = 'judo'; });
})(window.ST = window.ST || {});
