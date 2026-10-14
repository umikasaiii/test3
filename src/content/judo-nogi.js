/* SkillTree — judo NO-GI: prese senza judogi per tutte le proiezioni del percorso (eccetto morote-seoi, ammesso con judogi),
   nuove proiezioni a vuoto (ko-soto, koshi-guruma, morote-seoi) e clinch con ginocchiate in stile muay thai (solo a vuoto).
   Resta tutto SOLITARIO: nessun partner, nessuno sparring, finale sempre in piedi. */
(function (ST) {
  'use strict';
  const C = ST.content, J = C.judo;
  const mc = (q, o, a) => ({ q, o, a });
  const N = (id, name, jp, stage, minMonth, tags, complexity, space, cues, errors, variants, theory, instructor, warn, track, gi) =>
    ({ id, name, jp, stage, minMonth, tags, complexity, space, cues, errors, variants, theory, instructor: !!instructor, warn: warn || '', track: track || 'judo', gi: gi || 'no-gi' });
  const byId = id => J.techniques.find(t => t.id === id);

  /* ---- Prese no-gi: sostituiscono le istruzioni di presa al tessuto ---- */
  const patch = (id, o) => { const t = byId(id); if (!t) throw new Error('judo-nogi: manca ' + id); Object.assign(t, o); if (!t.gi) t.gi = 'no-gi'; };
  patch('kumikata', { name: 'Kumi-kata no-gi: polsi, collo e underhook', jp: '組み方（ノーギ）', gi: 'no-gi',
    cues: ['Senza judogi non ci sono bavero e manica: le prese sono polso (wrist control), bicipite (bicep tie), nuca (collar tie) e underhook sotto l’ascella.', 'Simula a vuoto una presa alla volta: mano sinistra al polso, destra alla nuca; poi underhook destro con polso sinistro.', 'La presa è una struttura: gomiti dentro, spalle basse, avambracci attivi, peso al centro.', 'Cambia presa a vuoto mantenendo la postura e accompagnando con un piccolo passo.'],
    variants: ['Presa destra e sinistra alternate.', 'Presa + passo + tai sabaki.', 'Dal collar tie all’underhook in un solo movimento.'],
    theory: [{ q: 'Quale presa controlla la testa senza judogi?', o: ['Collar tie (mano sulla nuca)', 'Presa al bavero', 'Presa alla manica', 'Presa alla cintura'], a: 0 }, { q: 'Perché si usa il polso o il bicipite come presa?', o: ['Controllano il braccio senza tessuto', 'Fanno male', 'Sono più facili da vedere', 'Non servono'], a: 0 }] });
  patch('ogoshi-entry', { name: 'O-goshi no-gi: entrata a vuoto', gi: 'no-gi', cues: ['Solo ENTRATA (tsukuri), a vuoto, lenta: nessuna proiezione.', 'Presa no-gi: mano sinistra al polso o al bicipite, braccio destro che avvolge la schiena (underhook) o la nuca.', 'Passo avanti, rotazione del piede d’appoggio, abbassa il bacino sotto il baricentro immaginario.', 'Esci con controllo tornando in shizentai.'] });
  patch('osoto-entry', { name: 'O-soto-gari no-gi: avanzata e posizionamento', gi: 'no-gi', cues: ['Solo avanzata e posizionamento del piede d’appoggio, a vuoto.', 'Presa no-gi: collar tie con la mano destra, polso sinistro a controllare il braccio.', 'Il piede d’appoggio si pianta a fianco del piede dell’avversario immaginario, ginocchio morbido.', 'Non eseguire la spazzata: ferma il movimento a controllo, torna in shizentai.'] });
  patch('seoi-entry', { name: 'Seoi-nage no-gi: rotazione e ingresso a vuoto', gi: 'no-gi', cues: ['Solo rotazione e ingresso, a vuoto, lentamente.', 'Presa no-gi: mano sinistra al polso, braccio destro in underhook sotto l’ascella.', 'Pivot sul piede avanzato, ginocchia flesse, bacino sotto, busto eretto.', 'Esci con controllo; nessun carico sul partner immaginario.'] });

  const NG = {
    'ogoshi-full': ['Presa no-gi: mano sinistra al polso o al bicipite (wrist/bicep control), braccio destro intorno alla schiena (underhook) o alla nuca.', 'Kuzushi: con il polso sinistro porta il partner immaginario in avanti, verso le punte dei piedi.', 'Tsukuri: passo avanti con il destro, rotazione fino a stare di schiena, ginocchia flesse, bacino sotto il suo baricentro.', 'Kake: estendi ginocchia e anche e ruota le spalle in avanti, con il braccio destro che avvolge la vita; fermati in piedi, mai caricare il peso in avanti.'],
    'osoto-full': ['Presa no-gi: collar tie con la destra (mano sulla nuca) e polso sinistro: la testa e il braccio guidano il tronco all’indietro.', 'Kuzushi: porta il partner immaginario all’indietro, sul suo tallone destro.', 'Tsukuri: passo con il sinistro a fianco del suo piede destro, ginocchio morbido, busto eretto.', 'Kake: la gamba destra spazza all’indietro a quota bassa (ginocchio), nell’aria, senza colpire nulla; riporta il piede a terra davanti e torna in stance.'],
    'seoi-full': ['Presa no-gi: polso sinistro e underhook destro (braccio sotto l’ascella), spalla destra sotto l’ascella immaginaria.', 'Kuzushi: con il polso sinistro porta il partner in avanti, sulle punte.', 'Tsukuri: passo avanti con il destro, pivot sul piede d’appoggio, ginocchia flesse, bacino sotto.', 'Kake: estendi le gambe e ruota le spalle in avanti (busto inclinato al massimo di circa 20°); torna in shizentai in piedi.'],
    'ouchi-full': ['Presa no-gi: collar tie con la destra e polso sinistro: spingi il tronco all’indietro e di lato.', 'Kuzushi: porta il partner indietro e leggermente di lato, verso il suo tallone.', 'Tsukuri: passo con il sinistro dentro le sue gambe, ginocchio morbido, busto eretto.', 'Kake: la gamba destra spazza all’interno, a quota bassa, nell’aria, con piede flesso; riporta il piede a terra davanti.'],
    'kouchi-full': ['Presa no-gi: polso sinistro e collar tie destro, braccia che guidano il tronco all’indietro.', 'Kuzushi: porta il partner indietro, sul suo tallone.', 'Tsukuri: piccolo passo in avanti, piede d’appoggio vicino.', 'Kake: gesto breve del piede (spazzata piccola) all’interno del tallone immaginario, a quota bassissima; torna in stance.'],
    'taiotoshi-full': ['Presa no-gi: polso sinistro e braccio destro sopra il braccio o in underhook (over-under): il braccio guida in avanti.', 'Kuzushi: porta il partner in avanti e verso il suo lato destro.', 'Tsukuri: passo con il destro e poi con il sinistro all’indietro ruotando; gamba destra tesa come blocco.', 'Kake: ruota il busto e abbassa le spalle mentre la gamba blocca; torna in shizentai in piedi.'],
    'harai-goshi-full': ['Presa no-gi: collar tie destro (o underhook) e polso sinistro; il petto e l’anca vicini.', 'Kuzushi: porta il partner in avanti, verso le punte.', 'Tsukuri: passo con il sinistro, rotazione sul piede d’appoggio, anca a contatto con l’anca immaginaria.', 'Kake: la gamba destra spazza all’indietro a quota moderata mentre il busto ruota in avanti; riporta il piede a terra e torna in equilibrio.'],
    'uchimata-full': ['Presa no-gi: collar tie destro e underhook/polso sinistro (over-under): il tronco è vicino al tuo.', 'Kuzushi: porta il partner in avanti, leggermente di lato.', 'Tsukuri: passo con il sinistro, rotazione, gamba destra pronta all’interno della sua coscia.', 'Kake: la gamba destra sale all’interno e all’indietro a quota moderata mentre il busto ruota in avanti; torna in stance in equilibrio.'],
    'band-uchikomi': ['Fissa un elastico largo a un ancoraggio solido all’altezza del bacino; verifica che non possa cedere.', 'Impugna l’altra estremità con la mano di presa: simula il polso o la nuca (no-gi) e ripeti l’entrata (tsukuri) di una tecnica già imparata.', 'Ferma il movimento nel punto di kake senza completare la proiezione, poi rientra lentamente.', 'Serie di 5–8 ripetizioni di qualità; fermati se la forma peggiora.']
  };
  Object.keys(NG).forEach(id => patch(id, { cues: NG[id], gi: 'no-gi' }));
  ['ogoshi-full', 'osoto-full', 'seoi-full', 'ouchi-full', 'kouchi-full', 'taiotoshi-full', 'harai-goshi-full', 'uchimata-full', 'band-uchikomi'].forEach(id => { const t = byId(id); if (!/no-gi/i.test(t.name)) t.name = t.name.replace(/:/, ' no-gi:'); });

  const T = [
    N('kosoto-full', 'Ko-soto-gari e ko-soto-gake no-gi: gesto completo a vuoto', '小外刈・小外掛（全体）', 'L2', 11, [], 4, '2 m × 2 m',
      ['Presa no-gi: collar tie destro (mano sulla nuca) e polso sinistro; il tronco viene guidato all’indietro.', 'Kuzushi: porta il partner immaginario all’indietro sul suo tallone destro.', 'Tsukuri: piccolo passo con il sinistro a fianco del suo piede destro, ginocchio morbido, busto eretto.', 'Kake: la gamba destra va all’esterno del suo tallone, a quota bassissima: «gari» = piccola spazzata, «gake» = piccolo gancio (il piede aggancia il tallone e resta un istante); nell’aria, senza colpire nulla; poi torna in stance.'],
      [['peso-indietro', 'Peso sui talloni'], ['gamba-alta', 'Gamba che sale troppo'], ['perde-equilibrio', 'Perdita di equilibrio'], ['busto-indietro', 'Busto che si inclina all’indietro'], ['gesto-grande', 'Gesto troppo ampio']],
      ['Gesto lento in 4 tempi.', 'Gesto alternato destra e sinistra.', 'Versione «gake»: aggancio del tallone con pausa di un secondo, poi ritorno.'],
      [mc('Che differenza c’è fra «gari» e «gake»?', ['Gari = piccola spazzata; gake = piccolo gancio', 'Gari = caduta; gake = salto', 'Nessuna', 'Gari = presa; gake = passo'], 0), mc('A quale altezza si lavora il piede in ko-soto?', ['Bassissima, all’altezza del tallone', 'Sopra la testa', 'Alta', 'Contro un muro'], 0)], true,
      'Gesto in aria: non agganciare oggetti né persone.'),
    N('koshi-guruma-full', 'Koshi-guruma no-gi: gesto completo a vuoto', '腰車（全体）', 'L3', 15, [], 5, '2 m × 2 m',
      ['Presa no-gi: braccio destro avvolto intorno al collo/nuca dell’avversario immaginario (neck wrap), polso sinistro a controllare il braccio.', 'Kuzushi: porta il partner in avanti, sulle punte, con il polso sinistro.', 'Tsukuri: passo avanti con il destro, rotazione fino a stare di schiena, ginocchia flesse, bacino sotto il suo baricentro; il braccio destro lo avvolge dietro il collo.', 'Kake: estendi ginocchia e anche e ruota le spalle in avanti come una «ruota» sull’anca; fermati in piedi, mai caricare il peso in avanti.'],
      [['ginocchia-dritte', 'Ginocchia dritte'], ['schiena-curva', 'Schiena curva'], ['bacino-alto', 'Bacino sopra il baricentro immaginario'], ['salta-passi', 'Passi saltati'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Gesto lento in 4 tempi.', 'Gesto alternato destra e sinistra.', 'Gesto dopo polso e collar tie a vuoto.'],
      [mc('Che cosa distingue koshi-guruma da o-goshi?', ['Il braccio avvolge il collo invece della vita', 'Si lancia con le mani', 'Non ruota il busto', 'È una spazzata'], 0), mc('Perché si ruota «come una ruota»?', ['Il peso passa sopra l’anca con asse stabile', 'Per saltare', 'Per cadere', 'Per tirare con le braccia'], 0)], true,
      'Il braccio al collo è solo simulato: nessuno viene afferrato. Fermati se perdi equilibrio.'),
    N('morote-seoi-full', 'Morote-seoi-nage (con judogi): gesto completo a vuoto', '諸手背負投（全体）', 'L3', 16, [], 5, '2 m × 2 m',
      ['Con judogi: presa a due mani (morote) sul bavero dell’avversario immaginario, gomiti sotto le sue ascelle.', 'Kuzushi: porta il partner in avanti con le due mani, sulle punte.', 'Tsukuri: passo avanti con il destro, pivot, ginocchia flesse, spalle sotto le sue ascelle, schiena contro il suo petto immaginario.', 'Kake: estendi le gambe e ruota le spalle in avanti (busto inclinato al massimo di circa 20°); torna in shizentai in piedi, senza lasciarti cadere.'],
      [['schiena-curva', 'Schiena curva'], ['ginocchia-dritte', 'Ginocchia dritte'], ['gomiti-larghi', 'Gomiti larghi'], ['piedi-lontani', 'Piedi lontani dall’asse'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Gesto lento in 4 tempi.', 'Gesto alternato destra e sinistra.', 'Gesto dopo kumi-kata a vuoto con judogi.'],
      [mc('Che cosa significa «morote»?', ['A due mani', 'A una mano', 'Senza mani', 'Con le gambe'], 0), mc('Dove stanno i gomiti in morote-seoi?', ['Sotto le ascelle dell’avversario immaginario', 'Larghi', 'Dietro la schiena', 'Sopra la testa'], 0)], true,
      'Variante con judogi: tutte le altre proiezioni del percorso sono no-gi. In aria, finale sempre in piedi.', 'judo', 'gi'),
    // ---------- CLINCH CON GINOCCHIATE (stile muay thai), SOLO A VUOTO ----------
    N('plum-clinch', 'Clinch plum: postura e controllo della testa (a vuoto)', 'プラム・クリンチ', 'L1', 6, [], 3, '2 m × 2 m',
      ['Posizione: piedi alla larghezza delle spalle, ginocchia flesse, busto eretto, mento giù.', 'Mani dietro la nuca dell’avversario immaginario, dita intrecciate o a coppa, gomiti stretti e avambracci sulle clavicole.', 'Spingi i gomiti verso il basso e avanti per «chiudere» la testa; tira con la schiena dritta, non con le braccia.', 'Muoviti con piccoli passi, mantenendo la postura; la testa resta alta e il peso al centro.'],
      [['gomiti-larghi', 'Gomiti larghi'], ['schiena-curva', 'Schiena curva'], ['peso-indietro', 'Peso sui talloni'], ['mento-alto', 'Mento alto'], ['spalle-alte', 'Spalle alzate']],
      ['Spostamenti laterali in clinch a vuoto.', 'Clinch + level change + ritorno.', 'Alterna presa destra e sinistra (collar tie).'],
      [mc('Dove si posizionano le mani nel clinch plum?', ['Dietro la nuca dell’avversario', 'Sulla vita', 'Sulle spalle', 'Sulle gambe'], 0), mc('Con che cosa si tira la testa verso il basso?', ['Con la schiena e i gomiti, non solo le braccia', 'Con i polsi', 'Con la testa', 'Con le gambe'], 0)], true,
      'Postura e controllo a vuoto: nessun contatto. Verifica la forma con un istruttore.', 'clinch'),
    N('khao-trong', 'Khao trong: ginocchiata diretta in clinch (a vuoto)', 'ヒザ蹴り・直進', 'L1', 8, [], 3, '2 m × 2 m',
      ['Dalla postura plum (a vuoto): tira la testa immaginaria verso il basso con i gomiti, il busto leggermente indietro.', 'Spingi il bacino in avanti e porta il ginocchio in alto verso il ventre immaginario, con il piede disteso (punta in giù).', 'Il piede d’appoggio ruota sull’avampiede; il ginocchio d’appoggio resta morbido (mai bloccato).', 'Fermati all’altezza della vita, riporta il piede a terra e torna in postura; ripeti a destra e a sinistra.'],
      [['peso-indietro', 'Peso sui talloni'], ['piede-non-teso', 'Piede non disteso'], ['ginocchio-bloccato', 'Ginocchio d’appoggio bloccato'], ['perde-equilibrio', 'Perdita di equilibrio'], ['bacino-indietro', 'Bacino che non avanza']],
      ['Ginocchiate lente in 4 tempi.', 'Ginocchiate alternate destra e sinistra.', 'Serie di 5 con pausa e controllo della postura.'],
      [mc('Dove va il ginocchio nella ginocchiata diretta a vuoto?', ['Verso il ventre immaginario, all’altezza della vita', 'Sopra la testa', 'Verso il suolo', 'Contro un muro'], 0), mc('Come resta il ginocchio d’appoggio?', ['Morbido', 'Bloccato', 'Piegato al massimo', 'Sollevato'], 0)], true,
      'A vuoto, a quota vita: non colpire oggetti o persone; se il ginocchio d’appoggio duole, fermati. Sacco e partner solo con un istruttore.', 'clinch'),
    N('khao-khong', 'Khao khong: ginocchiata curva in clinch (a vuoto)', 'ヒザ蹴り・曲線', 'L2', 12, [], 4, '2 m × 2 m',
      ['Dalla postura plum: tira la testa immaginaria da un lato e ruota il bacino sul piede d’appoggio.', 'Il ginocchio sale in diagonale verso le costole immaginarie, con il piede disteso.', 'La rotazione parte dal bacino e dall’avampiede d’appoggio, non dalla schiena.', 'Fermati a quota costole, riporta il piede e torna in postura; ripeti dall’altro lato.'],
      [['peso-indietro', 'Peso sui talloni'], ['ginocchio-bloccato', 'Ginocchio d’appoggio bloccato'], ['rotazione-schiena', 'Rotazione dalla schiena'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Ginocchiata lenta in 4 tempi.', 'Alternata destra e sinistra con rotazione.', 'Dopo una ginocchiata diretta, una curva.'],
      [mc('Da dove parte la rotazione nella ginocchiata curva?', ['Dal bacino e dall’avampiede d’appoggio', 'Dalle mani', 'Dalla testa', 'Dal collo'], 0)], true,
      'Gesto a vuoto: controlla la rotazione e l’equilibrio sul piede d’appoggio.', 'clinch'),
    N('khao-noi', 'Khao noi: ginocchiata corta in clinch ravvicinato (a vuoto)', 'ヒザ蹴り・小', 'L2', 14, [], 4, '2 m × 2 m',
      ['Dalla postura plum, con l’avversario immaginario molto vicino: gomiti stretti, testa a contatto con lo spazio davanti a te.', 'Ginocchiate brevi e rapide, a quota coscia/ventre, alternando destra e sinistra senza staccare le mani dalla postura.', 'Il bacino spinge in avanti ad ogni colpo, la schiena resta dritta.', 'Ritmo regolare e controllato: serie di 6 colpi, poi pausa; fermati se la forma peggiora.'],
      [['ritmo-irregolare', 'Ritmo irregolare'], ['schiena-curva', 'Schiena curva'], ['gomiti-larghi', 'Gomiti larghi'], ['perde-equilibrio', 'Perdita di equilibrio'], ['ginocchio-bloccato', 'Ginocchio d’appoggio bloccato']],
      ['Serie lente poi veloci.', 'Alternata destra e sinistra con respiro regolare.', 'Dopo un passo laterale in clinch.'],
      [mc('Che cosa caratterizza khao noi?', ['Ginocchiate brevi e rapide in clinch ravvicinato', 'Un salto', 'Una proiezione', 'Un calcio frontale'], 0)], true,
      'Rapidità a vuoto: la forma prima della velocità.', 'clinch')
  ];
  T.forEach(t => J.techniques.push(t));
  J.techniques.forEach(t => { if (!t.gi) t.gi = (['morote-seoi-full'].includes(t.id) ? 'gi' : 'no-gi'); });
  J.techniques = J.techniques.map((t, i) => [t, i]).sort((a, b) => a[0].minMonth - b[0].minMonth || a[1] - b[1]).map(x => x[0]);

  J.safety.push('Ginocchiate (clinch): solo a vuoto, a quota vita/costole, con ginocchio d’appoggio morbido. Sacco o partner solo con un istruttore: non c’è sparring né contatto in questo percorso.');
  J.combos.push(
    { name: 'Collar tie → o-soto → ko-soto (no-gi)', ids: ['kumikata', 'osoto-full', 'kosoto-full'] },
    { name: 'Koshi-guruma → o-goshi → postura (no-gi)', ids: ['koshi-guruma-full', 'ogoshi-full', 'posture'] },
    { name: 'Morote-seoi → seoi (no-gi) → tai sabaki', ids: ['morote-seoi-full', 'seoi-full', 'tai-sabaki'] },
    { name: 'Plum → ginocchiata diretta → curva', ids: ['plum-clinch', 'khao-trong', 'khao-khong'] },
    { name: 'Plum → ginocchiate corte → rialzo in stance', ids: ['plum-clinch', 'khao-noi', 'posture'] }
  );
  J.sundayTheory.push(
    { q: 'Quale presa controlla la testa senza judogi?', o: ['Collar tie (mano sulla nuca)', 'Presa al bavero', 'Presa alla cintura', 'Presa alla manica'], a: 0 },
    { q: 'Quale proiezione del percorso si fa con judogi?', o: ['Morote-seoi-nage', 'O-goshi', 'Koshi-guruma', 'Ko-soto'], a: 0 },
    { q: 'Come resta il ginocchio d’appoggio nelle ginocchiate?', o: ['Morbido', 'Bloccato', 'Sollevato', 'Piegato al massimo'], a: 0 },
    { q: 'Dove si colpisce nelle ginocchiate a vuoto di questo percorso?', o: ['Nell’aria, a quota vita/costole', 'Sul sacco senza istruttore', 'Su un partner', 'Su un muro'], a: 0 }
  );
})(window.ST = window.ST || {});
