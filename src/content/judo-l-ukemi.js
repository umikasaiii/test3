/* SkillTree — judo: 10 lezioni approfondite sulle cadute (ukemi) in progressione.
   Coerente con src/content/judo-nage.js. Cadute solo autoiniziate, dal basso verso l'alto, su tappeto/tatami spesso.
   L'app non certifica la sicurezza della caduta: i gradini alti vanno verificati con un istruttore qualificato. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;

  // mc con la risposta corretta in posizione `pos` (0-3)
  const X = (q, right, wrong, pos, why) => { const o = wrong.slice(); o.splice(pos, 0, right); return mc(q, o, pos, why); };
  const L = a => a.map(x => '- ' + x).join('\n');

  const PREV_NOTE = 'Questo gradino è **da verificare con istruttore**: l’app ti aiuta a ripassare la forma, ma non può certificare che la tua caduta sia sicura. **Dopo qualsiasi errore (testa che tocca, colpo secco, perdita di controllo) torna subito al gradino precedente** e ripeti lì finché è di nuovo pulito.';

  const lesson = d => {
    const prevTxt = d.prev
      ? '**Prerequisito:** «' + d.prevName + '» deve essere consolidato: almeno 10 ripetizioni di fila, pulite, con mento sul petto e battuta decisa, in due sessioni diverse. Se non lo è, torna lì.'
      : '**Prerequisito:** nessun gradino precedente. Prima di cominciare fai un breve riscaldamento: rotazioni lente di collo, spalle, polsi e bacino.';
    const flag = d.flag ? '\n\n' + PREV_NOTE : '\n\nResta sempre nella zona di comfort: se non sei sicuro, resta al gradino che padroneggi.';
    const pages = [
      { h: 'Perché questo gradino', b: d.why + '\n\nNel judo le cadute (**ukemi**, 受身) si imparano **dal basso verso l’alto**: prima da sdraiato, poi da seduto, accovacciato e in piedi. Cadi **solo tu, da solo, di tua iniziativa**: non esiste caduta «subita» in questo percorso.' },
      { h: 'Prima di cominciare', b: prevTxt + '\n\n**Dove si pratica:** solo su **tatami o tappeto spesso** (' + d.space + '). **Mai su pavimento duro**: piastrelle, parquet, cemento, erba su terreno duro o tappetini sottili da yoga non vanno bene. Togli orologi e anelli, unghie corte, spazio libero intorno.' + flag },
      { h: 'Meccanica del corpo', b: L(d.mech) + '\n\n**Costanti di ogni caduta:** mento sul petto (guardi la cintura), la testa non tocca mai il tappeto, battuta con **tutto il braccio** (non solo la mano) a **30–45°** dal corpo, palmo in giù, **espirazione** nel momento della battuta (mai respiro trattenuto).' },
      { h: 'Passo per passo', b: d.steps.map((s, i) => (i + 1) + '. ' + s).join('\n') + '\n\n> Ritmo: lento, una ripetizione alla volta, con pausa fra l’una e l’altra.' },
      { h: 'Errori comuni e correzioni', b: d.errors.map(e => '- **' + e[0] + '** → ' + e[1]).join('\n') },
      { h: 'Esercizi graduati', b: d.drills.map((s, i) => '**Livello ' + (i + 1) + '.** ' + s).join('\n\n') + '\n\nPassa al livello successivo solo dopo 10 ripetizioni pulite del precedente. Una sessione breve (10 minuti) con qualità vale più di una lunga e stanca.' },
      { h: 'Quando fermarsi', b: 'Fermati **subito** e non riprendere nella stessa sessione se compare:\n' + L(['dolore al **collo** o alla **schiena**', '**giramenti di testa**, nausea, visione offuscata', 'un **colpo alla testa**, anche lieve', 'formicolio a braccia o mani', 'stanchezza forte: la forma peggiora e il rischio sale']) + '\n\nSe i sintomi persistono, parla con un medico o con il tuo istruttore. Non «scaricare» il dolore con altre ripetizioni.' },
      { h: 'Autoverifica con video laterale', b: 'Appoggia il telefono a terra o su un supporto, **di lato** all’area di lavoro, e riprendi 3 ripetizioni. Riguarda al rallentatore e controlla:\n' + L(d.check) + '\n\nIl video aiuta a vedere cose che non senti, ma **non sostituisce l’occhio di un istruttore** e non certifica che la caduta sia sicura.' },
      { h: 'Riepilogo', b: L(d.recap) + '\n- Mento sul petto, battuta a 30–45° con tutto il braccio, espira.\n- Tappeto spesso, una ripetizione per volta, stop con dolore o giramenti.\n- Dopo un errore: gradino precedente.' }
    ];
    return { id: 'jud-' + d.id, subject: 'grp', stage: d.stage, minutes: 10, prereq: d.prev ? ['jud-' + d.prev] : [], title: d.title, summary: d.summary, objectives: d.obj, pages, exercises: d.ex, test: d.te };
  };

  const D = [];

  /* 1 */ D.push({
    id: 'ushiro-ukemi-lying', stage: 'L0', prev: null, space: '2 m × 1 m',
    title: 'Ushiro ukemi 1: caduta indietro da sdraiato (後ろ受身①)', summary: 'Il primo gradino: battere le braccia sul tappeto restando sdraiato sulla schiena, con mento sul petto.',
    obj: ['Tenere il mento sul petto per tutta la battuta', 'Battere con tutto il braccio a 30–45° dal corpo', 'Espirare al momento della battuta'],
    why: 'Qui automatizzi i due gesti che proteggono ogni caduta all’indietro: **mento sul petto** e **battuta del braccio**. Sdraiato non c’è altezza, quindi puoi concentrarti solo sulla forma, senza paura.',
    mech: ['**Testa e collo:** mento sul petto, sguardo alla cintura; il collo non si alza e non si abbassa a scatti.', '**Braccia:** partono in verticale, poi battono a **30–45°** dal corpo, palmi in giù, con tutto il braccio dal gomito alla mano.', '**Gambe:** ginocchia flesse, leggermente sollevate, rilassate.', '**Respiro:** espiri nell’istante della battuta.'],
    steps: ['Sdraiati sulla schiena sul tappeto, ginocchia flesse.', 'Mento sul petto: guardi la cintura.', 'Solleva le braccia in verticale sopra il petto.', 'Battile sul tappeto a 30–45° con tutto il braccio, espirando.', 'Rialza le braccia e ripeti lentamente 10 volte.'],
    errors: [['Mento che si stacca dal petto', 'guarda la cintura per tutta la serie; se serve, tieni una pallina da tennis fra mento e petto.'], ['Braccia troppo vicine al corpo', 'allargale a 30–45°, non attaccate ai fianchi.'], ['Battuta debole o ritardata', 'battila con decisione nell’istante dell’espirazione.'], ['Respiro trattenuto', 'espira con un soffio sonoro a ogni battuta.']],
    drills: ['Battuta con entrambe le braccia insieme, 10 volte lente.', 'Battuta alternata braccio destro e sinistro.', 'Battuta più forte mantenendo il collo fermo.', 'Dieci battute di fila senza mai alzare la testa.'],
    check: ['il mento resta vicino al petto', 'le braccia battono a 30–45°', 'la testa non si alza dal tappeto in modo brusco'],
    recap: ['Si parte sdraiati: zero altezza, tutta la forma.', 'Si batte con tutto il braccio, non solo la mano.'],
    ex: [
      X('Dove guarda il mento in ushiro ukemi?', 'Sul petto, verso la cintura', ['Verso il soffitto', 'A destra', 'Indietro, con la testa all’indietro'], 0, 'Il mento sul petto protegge la nuca.'),
      X('Con che cosa si batte sul tappeto?', 'Con tutto il braccio, a 30–45° dal corpo', ['Solo con la mano', 'Con la testa', 'Con i gomiti stretti ai fianchi'], 1, 'Batte l’intero braccio, non solo la mano.'),
      X('Quando espiri?', 'Nel momento della battuta', ['Prima di sdraiarti', 'Trattieni il respiro', 'Dopo essersi fermato'], 2, 'L’espirazione evita di bloccare il torace.'),
      X('Su quale superficie ti alleni?', 'Tatami o tappeto spesso', ['Parquet', 'Cemento', 'Piastrelle'], 0, 'Mai su pavimento duro.'),
      X('Quale errore è tipico di questo gradino?', 'Il mento che si stacca dal petto', ['Guardare la cintura', 'Battere a 30–45°', 'Espirare'], 1, 'Mento alto = nuca non protetta.'),
      order('Metti in ordine i passi', ['sdraiati', 'mento', 'braccia', 'battuta', 'espira'], 'Prima la posizione, poi il mento, poi le braccia e la battuta con espirazione.'),
      fill('Quanti gradi (minimo) dal corpo deve avere la battuta del braccio?', ['30'], 'L’angolo corretto è 30–45°.'),
      fill('Con la testa che cosa si fa nei confronti del tappeto? Non la ___ mai.', ['tocca', 'appoggia', 'tocco'], 'La testa non tocca mai il tappeto.')
    ],
    te: [
      X('Che cosa NON fai in questo gradino?', 'Alzare la testa a scatti', ['Guardare la cintura', 'Battere con tutto il braccio', 'Espirare'], 2, 'Il collo non si alza e non si abbassa a scatti.'),
      X('Che cosa serve per un buon ushiro ukemi da sdraiato?', 'Mento sul petto e battuta decisa', ['Gambe tese e rigide', 'Respiro bloccato', 'Braccia sotto la schiena'], 0, 'Sono le due costanti.'),
      X('Dopo quante ripetizioni pulite sali di livello?', 'Dieci', ['Una', 'Nessuna, subito', 'Mille in una volta'], 1, 'Dieci pulite, poi si sale.'),
      X('Che cosa fai se senti dolore al collo?', 'Ti fermi', ['Ripeti più forte', 'Vai al gradino alto', 'Trattieni il respiro'], 3 - 3 + 0, 'Dolore al collo = stop.'),
      fill('Il mento va sul ___.', ['petto'], 'Mento sul petto, sguardo alla cintura.')
    ]
  });

  /* 2 */ D.push({
    id: 'yoko-ukemi-lying', stage: 'L0', prev: 'ushiro-ukemi-lying', prevName: 'Ushiro ukemi 1: caduta indietro da sdraiato', space: '2 m × 1 m',
    title: 'Yoko ukemi 1: caduta laterale da sdraiato (横受身①)', summary: 'Battuta laterale con il braccio basso, sdraiato sul fianco, su entrambi i lati.',
    obj: ['Battere con il braccio basso a 30–45° con tutto l’avambraccio', 'Tenere le gambe leggermente divaricate, non incrociate', 'Lavorare sui due lati in modo simmetrico'],
    why: 'La caduta laterale (**yoko ukemi**) è la più usata nel judo. Da sdraiato sul fianco impari la battuta laterale e la posizione delle gambe senza alcuna altezza.',
    mech: ['**Testa e collo:** mento sul petto, la testa non tocca il tappeto.', '**Braccio basso:** batte a **30–45°** dal corpo con tutto l’avambraccio, palmo in giù.', '**Braccio alto:** incrocia il petto.', '**Gambe:** leggermente divaricate e morbide, **mai incrociate né unite**.', '**Respiro:** espira alla battuta.'],
    steps: ['Sdraiati sul fianco destro, mento sul petto.', 'Il braccio destro è disteso a terra; l’altro incrocia il petto.', 'Batti con il braccio basso a 30–45°, espirando.', 'Gambe leggermente divaricate.', 'Gira sull’altro fianco e ripeti, lentamente, 10 volte per lato.'],
    errors: [['Mento che si stacca dal petto', 'guarda sempre verso la cintura.'], ['Braccio che batte troppo vicino', 'apri a 30–45°.'], ['Gambe unite o incrociate', 'divaricale leggermente, morbide.'], ['Spalla che sprofonda', 'batti con decisione, la spalla non si «affonda» nel tappeto.']],
    drills: ['Battuta lenta su un lato, 10 volte.', 'Battuta su un lato poi sull’altro senza fermarti.', 'Tre battute lente e tre veloci.', 'Battuta con le gambe leggermente sollevate.'],
    check: ['il braccio basso forma 30–45° con il corpo', 'le gambe non sono incrociate', 'il mento resta sul petto'],
    recap: ['Si batte con il braccio basso, l’altro incrocia il petto.', 'Gambe divaricate, non unite.'],
    ex: [
      X('Che posizione hanno le gambe in yoko ukemi?', 'Leggermente divaricate', ['Unite e incrociate', 'Piegate sotto il corpo', 'Rigide e in aria'], 2, 'Gambe divaricate, morbide.'),
      X('Quale braccio batte?', 'Il braccio basso, a contatto con il tappeto', ['Quello alto', 'Nessuno', 'Entrambi dietro la schiena'], 0, 'Batte il braccio basso.'),
      X('A che angolo batte?', '30–45° dal corpo', ['0° attaccato al fianco', '90°', '180°'], 1, 'L’angolo giusto è 30–45°.'),
      X('Dove va l’altro braccio?', 'Incrocia il petto', ['Dietro la testa', 'Sotto il corpo', 'In alto, teso'], 3 - 1, 'Incrocia il petto.'),
      X('Dopo quale gradino si fa questo?', 'Ushiro ukemi da sdraiato consolidato', ['Mae ukemi in piedi', 'Nessuno', 'Ushiro da in piedi'], 0, 'Prima ushiro 1.'),
      order('Ordina', ['fianco', 'mento', 'battuta', 'espira', 'cambia lato'], 'Fianco, mento, battuta con espirazione, poi altro lato.'),
      fill('Le gambe vanno leggermente ___ (non unite).', ['divaricate', 'aperte'], 'Divaricate.'),
      fill('Il braccio basso batte con tutto l’___.', ['avambraccio', 'braccio'], 'Batte tutto il braccio/avambraccio.')
    ],
    te: [
      X('Quale errore va corretto?', 'Gambe incrociate', ['Mento sul petto', 'Battuta a 30–45°', 'Espirazione'], 0, 'Le gambe non vanno incrociate.'),
      X('Su quanti lati si lavora?', 'Entrambi', ['Solo il destro', 'Solo il sinistro', 'Nessuno'], 2, 'Entrambi i lati.'),
      X('Dove guarda il mento?', 'Verso il petto', ['Al soffitto', 'Alla spalla bassa', 'Dietro'], 1, 'Mento sul petto.'),
      X('Con dolore alla schiena che fai?', 'Ti fermi', ['Aumenti la forza', 'Salti di gradino', 'Trattieni il fiato'], 0, 'Stop.'),
      fill('La testa non ___ il tappeto.', ['tocca'], 'Non tocca mai.')
    ]
  });

  /* 3 */ D.push({
    id: 'ushiro-ukemi-seated', stage: 'L0', prev: 'yoko-ukemi-lying', prevName: 'Yoko ukemi 1: caduta laterale da sdraiato', space: '2 m × 1 m',
    title: 'Ushiro ukemi 2: caduta indietro da seduto (後ろ受身②)', summary: 'Rotolare all’indietro dalla posizione seduta sulla schiena arrotondata, battendo le braccia.',
    obj: ['Rotolare sulla schiena arrotondata, non sulla testa', 'Battere nel momento del contatto', 'Tornare seduto con lo slancio, senza sforzare il collo'],
    why: 'Per la prima volta c’è un piccolo movimento: passi dal seduto al sdraiato. Impari a **arrotondare la schiena** e a tempistizzare la battuta nel momento del contatto.',
    mech: ['**Schiena:** arrotondata, il peso si distribuisce da bacino a scapole, mai sulla testa.', '**Mento:** sul petto durante tutto il movimento.', '**Braccia:** davanti a te, poi battono a 30–45° nell’istante del contatto.', '**Gambe:** stese o leggermente flesse, leggermente sollevate.', '**Respiro:** espira alla battuta.'],
    steps: ['Siediti con gambe stese o leggermente flesse, braccia avanti.', 'Mento sul petto.', 'Rotola all’indietro sulla schiena arrotondata.', 'Batti con le braccia nel momento del contatto, espirando.', 'Con lo slancio torna seduto, spingendo con i glutei, senza forzare il collo. 5 ripetizioni, poi riposo.'],
    errors: [['La testa tocca il tappeto', 'mento più vicino al petto e movimento più lento; torna a ushiro 1 se serve.'], ['Schiena rigida invece che arrotondata', 'immagina di «farti piccolo» come una palla.'], ['Battuta in ritardo', 'batti nell’istante del contatto, non dopo.'], ['Collo teso', 'rilassa spalle e collo, mento giù.']],
    drills: ['Con le braccia incrociate sul petto nella prima fase, senza battere.', 'Con battuta a 30–45°.', 'Con gambe sollevate al momento della battuta.', 'Seduto-giù-battuta-su in un unico movimento fluido.'],
    check: ['la schiena si arrotonda', 'la testa non tocca il tappeto', 'la battuta avviene al contatto'],
    recap: ['Si rotola sulla schiena arrotondata, non sulla testa.', 'La battuta è nel momento del contatto.'],
    ex: [
      X('Su quale parte del corpo si rotola?', 'Sulla schiena arrotondata', ['Sulla testa', 'Sul collo', 'Sulle spalle appuntite'], 0, 'Schiena arrotondata.'),
      X('Quando si battono le braccia?', 'Nel momento del contatto', ['Prima di partire', 'Dopo essersi fermati', 'Mai'], 1, 'Nel contatto.'),
      X('Che cosa fai se la testa tocca il tappeto?', 'Torni al gradino precedente', ['Insisti più forte', 'Aumenti l’altezza', 'Smetti di battere'], 2, 'Dopo un errore si torna indietro.'),
      X('Come torni seduto?', 'Con lo slancio, senza forzare il collo', ['Tirando il collo', 'Con un salto', 'Aiutandoti con la testa'], 0, 'Slancio del rotolamento.'),
      X('Quante ripetizioni prima del riposo?', 'Circa 5', ['50', '200', 'Nessuna'], 1, 'Serie breve.'),
      order('Ordina', ['seduto', 'mento', 'rotola', 'batti', 'torna'], 'Seduto, mento, rotolamento, battuta, ritorno.'),
      fill('La schiena deve essere ___.', ['arrotondata', 'rotonda'], 'Arrotondata.'),
      fill('Se senti dolore al collo, ti ___.', ['fermi', 'fermo', 'fermati'], 'Stop.')
    ],
    te: [
      X('Quale è un errore?', 'Schiena rigida', ['Mento sul petto', 'Battuta al contatto', 'Espirazione'], 1, 'Schiena rigida.'),
      X('Dove si batte?', 'Con le braccia a 30–45°', ['Con la testa', 'Con i gomiti vicini', 'Non si batte'], 0, 'Battuta a 30–45°.'),
      X('Prerequisito di questo gradino?', 'Yoko ukemi da sdraiato consolidato', ['Mae ukemi in piedi', 'Nessuno', 'Ushiro in piedi'], 2 - 2 + 0, 'Gradino precedente consolidato.'),
      X('Che succede alle braccia in fase iniziale (livello 1)?', 'Sono incrociate sul petto', ['Dietro la schiena', 'Sopra la testa', 'In tasca'], 1, 'Prima senza battere.'),
      fill('Il collo non va ___.', ['forzato', 'teso'], 'Non forzare il collo.')
    ]
  });

  /* 4 */ D.push({
    id: 'mae-ukemi-kneeling', stage: 'L1', prev: 'ushiro-ukemi-seated', prevName: 'Ushiro ukemi 2: caduta indietro da seduto', space: '2 m × 2 m', flag: true,
    title: 'Mae ukemi 1: rotolamento in avanti da in ginocchio (前受身①)', summary: 'Rotolare in diagonale lungo braccio e spalla partendo in ginocchio, e battere con il braccio opposto.',
    obj: ['Rotolare in diagonale sul braccio e sulla spalla, mai sulla colonna', 'Tenere la testa girata verso l’anca', 'Battere a 45° e tornare in controllo'],
    why: 'Il rotolamento in avanti (**mae ukemi**, 前受身) insegna a trasformare una caduta in avanti in un rotolamento controllato. Parti dal punto più basso, in ginocchio, per imparare la linea diagonale.',
    mech: ['**Linea:** in diagonale, lungo braccio e spalla; mai sopra la colonna o la testa.', '**Braccio d’appoggio:** forma un arco vicino alla spalla opposta.', '**Testa:** girata verso l’anca opposta, mento sul petto, non entra sotto la spalla.', '**Battuta:** braccio opposto a 45° all’arrivo sull’anca.', '**Respiro:** espira durante il rotolamento.'],
    steps: ['In ginocchio, appoggia mano e braccio destri formando un arco vicino alla spalla sinistra.', 'Testa girata a guardare l’anca sinistra.', 'Rotola lungo braccio e spalla in diagonale.', 'Arrivo sull’anca sinistra: il braccio sinistro batte a 45°.', 'Torna in ginocchio o seduto con un movimento controllato. Una ripetizione, pausa.'],
    errors: [['Testa che entra sotto la spalla', 'gira la testa verso l’anca, mento sul petto.'], ['Rotolamento sulla colonna', 'sposta la linea sul braccio e sulla spalla, in diagonale.'], ['Braccio rigido', 'forma un arco morbido.'], ['Movimento troppo rapido', 'rallenta in 4 tempi.']],
    drills: ['Rotolamento lento in 4 tempi, a destra.', 'Rotolamento a sinistra.', 'Rotolamento + battuta + posizione seduta.', 'Alternando destra e sinistra, una per volta.'],
    check: ['il percorso è diagonale, non sulla colonna', 'la testa non entra sotto la spalla', 'la battuta arriva sull’anca opposta'],
    recap: ['Diagonale su braccio e spalla.', 'Testa verso l’anca, battuta a 45°.']
    , ex: [
      X('Su quale linea si rotola?', 'In diagonale, lungo braccio e spalla', ['Sulla colonna', 'Sopra la testa', 'Sul collo'], 0, 'Diagonale.'),
      X('Dove guarda la testa?', 'Verso l’anca opposta', ['Verso il soffitto', 'Davanti', 'In basso, sotto la spalla'], 1, 'Verso l’anca.'),
      X('Da dove si parte?', 'In ginocchio', ['In piedi in corsa', 'Da un salto', 'Da seduto'], 2, 'In ginocchio.'),
      X('A che angolo batte il braccio?', '45°', ['0°', '180°', 'Non batte'], 0, 'Circa 45°.'),
      X('Che gradino è consolidato prima?', 'Ushiro ukemi da seduto', ['Mae ukemi in piedi', 'Nessuno', 'Yoko in piedi'], 1, 'Gradino precedente.'),
      X('Dopo un errore?', 'Torno al gradino precedente', ['Aumento la velocità', 'Salto di altezza', 'Proseguo uguale'], 2, 'Si torna indietro.'),
      order('Ordina', ['ginocchio', 'arco', 'testa', 'rotola', 'batti'], 'Ginocchio, arco di braccio, testa, rotolamento, battuta.'),
      fill('Il rotolamento non è sulla ___.', ['colonna', 'testa'], 'Non sulla colonna/testa.')
    ],
    te: [
      X('Quale è un errore?', 'Rotolare sulla colonna', ['Rotolare in diagonale', 'Mento sul petto', 'Battere a 45°'], 1, 'Sulla colonna.'),
      X('Questo gradino è?', 'Da verificare con istruttore', ['Certificato dall’app', 'Senza rischi', 'Da fare su pavimento'], 0, 'Va verificato.'),
      X('Che superficie?', 'Tappeto spesso', ['Cemento', 'Piastrelle', 'Parquet'], 2, 'Tappeto.'),
      X('Con giramenti di testa?', 'Stop', ['Continuo', 'Più veloce', 'Più alto'], 0, 'Stop.'),
      fill('La testa non entra sotto la ___.', ['spalla'], 'Sotto la spalla.')
    ]
  });

  /* 5 */ D.push({
    id: 'yoko-ukemi-low', stage: 'L1', prev: 'mae-ukemi-kneeling', prevName: 'Mae ukemi 1: rotolamento in avanti da in ginocchio', space: '2 m × 2 m', flag: true,
    title: 'Yoko ukemi 2: caduta laterale da accovacciato (横受身②)', summary: 'Cadere di lato dalla posizione accovacciata con battuta del braccio basso.',
    obj: ['Spostare il peso su un’anca e cadere di lato', 'Battere a 30–45° con il mento sul petto', 'Tenere le gambe divaricate e morbide'],
    why: 'Salendo di altezza (accovacciato) la caduta laterale acquista un po’ di movimento. Qui impari a spostare il peso su un’anca mantenendo forma e controllo.',
    mech: ['**Partenza:** accovacciato, talloni vicini al tappeto, peso centrale.', '**Peso:** si sposta su un’anca.', '**Mento:** sul petto, testa lontana dal tappeto.', '**Battuta:** braccio basso a 30–45°, nel momento del contatto.', '**Gambe:** divaricate e morbide.'],
    steps: ['Accovacciato, mento sul petto.', 'Sposta il peso su un’anca.', 'Cadi di lato, battendo con il braccio basso a 30–45° ed espirando.', 'Gambe divaricate, morbide.', 'Riporta il peso sui piedi, ripeti dall’altro lato.'],
    errors: [['Mento che si stacca', 'mento sul petto sempre.'], ['Partenza troppo alta', 'resta davvero accovacciato; se non ci stai, torna allo gradino precedente.'], ['Braccio che batte troppo vicino', 'apri a 30–45°.'], ['Gambe rigide', 'ammorbidisci le ginocchia.']],
    drills: ['Caduta su un lato lentamente.', 'Caduta su un lato e sull’altro.', 'Con battuta più decisa.', 'Con un passo laterale prima della caduta.'],
    check: ['la partenza è bassa', 'il braccio batte a 30–45°', 'le gambe non si incrociano'],
    recap: ['Accovacciato, peso su un’anca.', 'Gambe morbide e divaricate.']
    , ex: [
      X('Da quale posizione si parte?', 'Accovacciato, talloni vicini al tappeto', ['In piedi', 'Da un salto', 'Da sdraiato'], 0, 'Accovacciato.'),
      X('Che cosa si sposta?', 'Il peso su un’anca', ['La testa indietro', 'Le mani in alto', 'Nulla'], 1, 'Peso su un’anca.'),
      X('Dove va il mento?', 'Sul petto', ['Al soffitto', 'Alla spalla', 'Indietro'], 2, 'Sul petto.'),
      X('Le gambe sono?', 'Leggermente divaricate e morbide', ['Unite', 'Rigide', 'Incrociate'], 0, 'Divaricate.'),
      X('Che cosa è consolidato prima?', 'Mae ukemi da in ginocchio', ['Mae ukemi in piedi', 'Nessuno', 'Ushiro in piedi'], 1, 'Gradino precedente.'),
      X('Se fai un errore?', 'Torno al gradino precedente', ['Insisto', 'Salgo', 'Salto'], 2, 'Torno.'),
      order('Ordina', ['accovacciato', 'mento', 'peso', 'cadi', 'batti'], 'Sequenza corretta.'),
      fill('Il braccio basso batte a 30–___ gradi.', ['45'], '30–45°.')
    ],
    te: [
      X('Errore tipico?', 'Partenza troppo alta', ['Mento sul petto', 'Battuta a 30–45°', 'Gambe morbide'], 0, 'Partenza alta.'),
      X('Gradino da verificare?', 'Con un istruttore', ['Con l’app soltanto', 'Mai', 'Con partner che spinge'], 1, 'Con istruttore.'),
      X('Superficie?', 'Tappeto spesso', ['Cemento', 'Piastrelle', 'Parquet'], 2, 'Tappeto.'),
      X('Con dolore?', 'Stop', ['Più forte', 'Più alto', 'Più veloce'], 0, 'Stop.'),
      fill('Le gambe sono ___.', ['morbide', 'divaricate'], 'Morbide.')
    ]
  });

  /* 6 */ D.push({
    id: 'ushiro-ukemi-squat', stage: 'L1', prev: 'yoko-ukemi-low', prevName: 'Yoko ukemi 2: caduta laterale da accovacciato', space: '2 m × 2 m', flag: true,
    title: 'Ushiro ukemi 3: caduta indietro da accovacciato (後ろ受身③)', summary: 'Cadere all’indietro dalla posizione accovacciata, rotolando sulla schiena arrotondata.',
    obj: ['Lasciarsi cadere all’indietro sulla schiena arrotondata', 'Tenere le gambe sollevate e flesse, non spingere con i talloni', 'Battere a 30–45° con il mento sul petto'],
    why: 'Qui sali di altezza rispetto al seduto. Il rischio principale è la testa che tocca e il bacino che sbatte: per questo si richiede che **ushiro ukemi da seduto sia consolidato**.',
    mech: ['**Partenza:** accovacciato, mani avanti, ginocchia verso il petto.', '**Mento:** sul petto, sempre.', '**Schiena:** arrotondata, rotola.', '**Gambe:** sollevate e flesse; i talloni non battono.', '**Braccia:** battuta a 30–45° nel contatto, con espirazione.'],
    steps: ['Accovacciato, mani avanti, mento sul petto.', 'Ginocchia verso il petto.', 'Lasciati cadere all’indietro rotolando sulla schiena arrotondata.', 'Batti con le braccia a 30–45°, espirando.', 'Torna alla partenza con lo slancio del rotolamento.'],
    errors: [['La testa tocca il tappeto', 'mento sul petto, torna a ushiro da seduto.'], ['Talloni che battono', 'sollevali e fletti le gambe.'], ['Battuta in ritardo', 'batti al contatto.'], ['Schiena rigida', 'arrotonda come una palla.']],
    drills: ['Con le braccia incrociate nella prima ripetizione.', 'Con battuta decisa.', 'Con rotazione leggera su un lato.', 'Più lenta e controllata.'],
    check: ['la testa non tocca', 'i talloni non battono', 'la schiena è arrotondata'],
    recap: ['Mento sul petto, schiena arrotondata.', 'Gambe sollevate, talloni leggeri.']
    , ex: [
      X('Quale gradino deve essere consolidato prima?', 'Ushiro ukemi da seduto', ['Mae ukemi in piedi', 'Nessuno', 'Ushiro ukemi in piedi'], 0, 'Seduto.'),
      X('Che cosa fanno le gambe?', 'Restano sollevate e flesse', ['Spingono con i talloni', 'Sono tese a terra', 'Si incrociano'], 1, 'Sollevate.'),
      X('Su cosa si rotola?', 'Sulla schiena arrotondata', ['Sulla testa', 'Sul collo', 'Sui talloni'], 2, 'Schiena.'),
      X('Dove va il mento?', 'Sul petto', ['Al soffitto', 'A destra', 'Indietro'], 0, 'Sul petto.'),
      X('Dopo un errore?', 'Torno al gradino precedente', ['Insisto', 'Salgo', 'Salto'], 1, 'Torno.'),
      X('Questo gradino è?', 'Da verificare con istruttore', ['Certificato dall’app', 'Senza rischi', 'Per pavimento duro'], 2, 'Da verificare.'),
      order('Ordina', ['accovacciato', 'mento', 'cadi', 'batti', 'torna'], 'Sequenza.'),
      fill('I ___ non battono sul tappeto.', ['talloni'], 'Talloni.')
    ],
    te: [
      X('Errore?', 'Talloni che battono', ['Mento sul petto', 'Battuta a 30–45°', 'Schiena arrotondata'], 0, 'Talloni.'),
      X('Superficie?', 'Tappeto spesso', ['Cemento', 'Piastrelle', 'Parquet'], 1, 'Tappeto.'),
      X('Con giramenti?', 'Stop', ['Continuo', 'Più veloce', 'Più alto'], 2, 'Stop.'),
      X('Chi è assente in questo percorso?', 'Un partner che ti proietta', ['Il tappeto', 'Il mento sul petto', 'La battuta'], 1, 'Mai proiezioni subite.'),
      fill('Il mento va sul ___.', ['petto'], 'Petto.')
    ]
  });

  /* 7 */ D.push({
    id: 'ushiro-ukemi-standing', stage: 'L2', prev: 'ushiro-ukemi-squat', prevName: 'Ushiro ukemi 3: caduta indietro da accovacciato', space: '2 m × 2 m, tatami', flag: true,
    title: 'Ushiro ukemi 4: caduta indietro da in piedi (後ろ受身④)', summary: 'Gradino alto: scendere in accovacciata e cadere indietro dalla stazione eretta, con il bacino che non sbatte.',
    obj: ['Mento sul petto prima di scendere', 'Distribuire il peso sulla schiena arrotondata, senza che il bacino sbatta', 'Una ripetizione per volta e tornare indietro dopo un errore'],
    why: 'È il gradino più alto della caduta all’indietro. Il rischio è maggiore: il bacino e la testa. Per questo serve il gradino precedente solido e **tatami spesso**.',
    mech: ['**Partenza:** in piedi, ginocchia morbide, mento sul petto.', '**Discesa:** rapida in accovacciata, poi cadi all’indietro.', '**Schiena:** arrotondata; il bacino non sbatte.', '**Braccia:** a 30–45°, tutto il braccio, espirando.', '**Gambe:** leggermente sollevate, ginocchia flesse.'],
    steps: ['In piedi, ginocchia morbide, mento sul petto.', 'Scendi rapidamente in accovacciata.', 'Lasciati cadere all’indietro sulla schiena arrotondata.', 'Batti a 30–45° ed espira.', 'Una ripetizione, pausa. Se sbagli, torna al gradino precedente.'],
    errors: [['La testa tocca il tappeto', 'mento sul petto, torna a ushiro da accovacciato.'], ['Il bacino batte', 'scendi più in basso e arrotonda la schiena.'], ['Battuta in ritardo', 'batti al contatto.'], ['Mento che si stacca', 'guarda la cintura.']],
    drills: ['Dalla postura con un passo indietro.', 'Con battuta decisa.', 'Con un passo laterale seguito da caduta.', 'Solo una ripetizione per volta, con pausa.'],
    check: ['la testa non tocca', 'il bacino non batte', 'la battuta è al contatto'],
    recap: ['Alto = più rischio: tatami e istruttore.', 'Dopo un errore, gradino precedente.']
    , ex: [
      X('Dopo un errore?', 'Torno al gradino precedente', ['Insisto con più forza', 'Aumento l’altezza', 'Smetto di battere'], 0, 'Torno.'),
      X('Che superficie?', 'Tatami spesso', ['Cemento', 'Piastrelle', 'Parquet'], 1, 'Tatami.'),
      X('Che cosa non deve battere?', 'Il bacino', ['Le braccia', 'Il tappeto', 'Il respiro'], 2, 'Il bacino.'),
      X('Quanto ripeti per volta?', 'Una ripetizione con pausa', ['Dieci di fila veloci', 'Cento', 'Nessuna'], 0, 'Una.'),
      X('Prerequisito?', 'Ushiro ukemi da accovacciato', ['Mae ukemi in piedi', 'Nessuno', 'Yoko in piedi'], 1, 'Gradino precedente.'),
      X('Come è questo gradino?', 'Da verificare con istruttore', ['Certificato dall’app', 'Senza rischi', 'Per pavimento duro'], 2, 'Da verificare.'),
      order('Ordina', ['in piedi', 'mento', 'accovacciati', 'cadi', 'batti'], 'Sequenza.'),
      fill('Il bacino non deve ___.', ['battere', 'sbattere'], 'Non sbatte.')
    ],
    te: [
      X('Errore?', 'Bacino che batte', ['Mento sul petto', 'Battuta a 30–45°', 'Schiena arrotondata'], 0, 'Bacino.'),
      X('Con un colpo alla testa?', 'Stop', ['Continuo', 'Più veloce', 'Più alto'], 1, 'Stop.'),
      X('Scendi in?', 'Accovacciata', ['Salto', 'Corsa', 'Volo'], 0, 'Accovacciata.'),
      X('Chi certifica la sicurezza?', 'Nessuna app: serve un istruttore', ['L’app', 'Il video', 'Nessuno serve'], 2, 'L’istruttore.'),
      fill('Il mento va sul ___ prima di scendere.', ['petto'], 'Petto.')
    ]
  });

  /* 8 */ D.push({
    id: 'yoko-ukemi-standing', stage: 'L2', prev: 'ushiro-ukemi-standing', prevName: 'Ushiro ukemi 4: caduta indietro da in piedi', space: '2 m × 2 m, tatami', flag: true,
    title: 'Yoko ukemi 3: caduta laterale da in piedi (横受身③)', summary: 'Cadere di lato dalla stazione eretta, battendo con il braccio basso a 30–45°.',
    obj: ['Passare il peso su un lato, scendere con l’anca', 'Battere a 30–45° con il mento sul petto', 'Non incrociare le gambe'],
    why: 'È la caduta laterale dall’altezza maggiore. Si imposta la forma già consolidata a livelli più bassi: la testa non tocca mai il tappeto.',
    mech: ['**Partenza:** in piedi, peso su un lato, mento sul petto.', '**Discesa:** scendi con l’anca.', '**Battuta:** braccio basso a 30–45°, al contatto.', '**Gambe:** leggermente divaricate, morbide.', '**Respiro:** espira alla battuta.'],
    steps: ['In piedi, peso su un lato, mento sul petto.', 'Scendi con l’anca e cadi lateralmente.', 'Batti con il braccio basso a 30–45°.', 'Gambe divaricate, morbide.', 'Una ripetizione per lato, pausa, lentamente.'],
    errors: [['Mento che si stacca', 'mento sul petto.'], ['Braccio vicino al corpo', 'apri a 30–45°.'], ['Gambe rigide', 'ammorbidisci.'], ['Spalla che sprofonda', 'batti con decisione.']],
    drills: ['Con un passo laterale prima della caduta.', 'Con battuta più decisa.', 'Con rotazione leggera del bacino.', 'Una per lato, con pausa.'],
    check: ['la testa non tocca', 'il braccio batte a 30–45°', 'le gambe non si incrociano'],
    recap: ['Alto, forma identica ai gradini bassi.', 'Tatami, pausa e stop con dolore.']
    , ex: [
      X('Quale parte non deve toccare il tappeto?', 'La testa', ['Il braccio che batte', 'L’anca', 'La schiena'], 0, 'La testa.'),
      X('Gradino consolidato prima?', 'Ushiro ukemi in piedi', ['Mae ukemi in piedi', 'Nessuno', 'Yoko sdraiato'], 1, 'Gradino precedente nella lista.'),
      X('Come sono le gambe?', 'Divaricate e morbide', ['Incrociate', 'Rigide', 'Unite'], 2, 'Morbide.'),
      X('A che angolo batte?', '30–45°', ['0°', '90°', '180°'], 0, '30–45°.'),
      X('Dopo un errore?', 'Torno al gradino precedente', ['Insisto', 'Salgo', 'Salto'], 1, 'Torno.'),
      X('Superficie?', 'Tatami', ['Cemento', 'Piastrelle', 'Parquet'], 2, 'Tatami.'),
      order('Ordina', ['in piedi', 'mento', 'anca', 'cadi', 'batti'], 'Sequenza.'),
      fill('Il mento va sul ___.', ['petto'], 'Petto.')
    ],
    te: [
      X('Errore?', 'Gambe incrociate', ['Mento sul petto', 'Battuta a 30–45°', 'Gambe morbide'], 0, 'Incrociate.'),
      X('Con giramenti?', 'Stop', ['Continuo', 'Più veloce', 'Più alto'], 1, 'Stop.'),
      X('Come è il gradino?', 'Da verificare con istruttore', ['Certificato dall’app', 'Senza rischi', 'Da fare su pavimento duro'], 2, 'Istruttore.'),
      X('Con quale altezza si comincia?', 'Dal gradino più basso', ['Dalla più alta', 'Da un salto', 'Da un partner'], 0, 'Dal basso.'),
      fill('La caduta è ___ (la fai tu).', ['autoiniziata', 'volontaria'], 'Solo autoiniziata.')
    ]
  });

  /* 9 */ D.push({
    id: 'mae-ukemi-squat', stage: 'L2', prev: 'yoko-ukemi-standing', prevName: 'Yoko ukemi 3: caduta laterale da in piedi', space: '2 m × 2 m', flag: true,
    title: 'Mae ukemi 2: rotolamento in avanti da accovacciato (前受身②)', summary: 'Rotolare in diagonale su braccio e spalla da accovacciato, con battuta a 45° sull’anca opposta.',
    obj: ['Appoggiare la mano davanti al piede opposto e formare un arco', 'Rotolare in diagonale, mai sopra la colonna', 'Battere a 45° e tornare in controllo'],
    why: 'È il rotolamento in avanti con più altezza rispetto a «in ginocchio». Si basa sulla linea diagonale già consolidata: rischio medio-alto, da verificare con un istruttore.',
    mech: ['**Partenza:** accovacciato, mano destra davanti al piede sinistro, braccio ad arco.', '**Testa:** guarda l’anca sinistra, mento sul petto.', '**Linea:** diagonale lungo braccio e spalla.', '**Battuta:** braccio sinistro a 45°, arrivo sull’anca sinistra.', '**Ritorno:** in piedi o in ginocchio con controllo.'],
    steps: ['Da accovacciato, mano destra davanti al piede sinistro, braccio ad arco.', 'Testa verso l’anca sinistra.', 'Rotola diagonalmente su braccio e spalla.', 'Batti con il braccio sinistro a 45°, arrivo sull’anca sinistra.', 'Torna in piedi o in ginocchio con controllo. Alterna destra e sinistra, una ripetizione alla volta.'],
    errors: [['Testa che entra sotto la spalla', 'gira la testa verso l’anca.'], ['Rotolamento sulla colonna', 'rimani in diagonale.'], ['Braccio rigido', 'arco morbido.'], ['Movimento troppo rapido', 'rallenta in 4 tempi.']],
    drills: ['Più lento in 4 tempi.', 'Con battuta più decisa.', 'Rotolamento + passo + ritorno in stance.', 'Alterna destra e sinistra.'],
    check: ['il percorso è diagonale', 'la testa non è sotto la spalla', 'l’arrivo è sull’anca'],
    recap: ['Diagonale e arco.', 'Rischio medio-alto: istruttore.']
    , ex: [
      X('Come è il percorso?', 'In diagonale, sul braccio e sulla spalla', ['Sulla colonna', 'Sopra la testa', 'Sul collo'], 0, 'Diagonale.'),
      X('Dove appoggi la mano?', 'Davanti al piede opposto', ['Dietro la schiena', 'Sulla testa', 'In tasca'], 1, 'Davanti al piede opposto.'),
      X('A che angolo batte?', '45°', ['0°', '180°', 'Non batte'], 2, '45°.'),
      X('Dove guarda la testa?', 'Verso l’anca opposta', ['Al soffitto', 'Davanti', 'Sotto la spalla'], 0, 'Anca.'),
      X('Rischio?', 'Medio-alto: verifica con istruttore', ['Nullo', 'Basso', 'Non esiste'], 1, 'Verifica.'),
      X('Dopo un errore?', 'Torno al gradino precedente', ['Insisto', 'Salgo', 'Salto'], 2, 'Torno.'),
      order('Ordina', ['accovacciato', 'arco', 'testa', 'rotola', 'batti'], 'Sequenza.'),
      fill('Il rotolamento è in ___.', ['diagonale'], 'Diagonale.')
    ],
    te: [
      X('Errore?', 'Rotolare sulla colonna', ['In diagonale', 'Mento sul petto', 'Battuta a 45°'], 0, 'Colonna.'),
      X('Superficie?', 'Tappeto spesso', ['Cemento', 'Piastrelle', 'Parquet'], 1, 'Tappeto.'),
      X('Con giramenti?', 'Stop', ['Continuo', 'Più veloce', 'Più alto'], 2, 'Stop.'),
      X('Chi certifica?', 'Un istruttore, non l’app', ['L’app', 'Il video', 'Nessuno'], 0, 'Istruttore.'),
      fill('Alterni destra e ___.', ['sinistra'], 'Sinistra.')
    ]
  });

  /* 10 */ D.push({
    id: 'mae-ukemi-standing', stage: 'L3', prev: 'mae-ukemi-squat', prevName: 'Mae ukemi 2: rotolamento in avanti da accovacciato', space: '2 m × 2 m, tatami', flag: true,
    title: 'Mae ukemi 3: rotolamento in avanti da in piedi (前受身③)', summary: 'Gradino finale: rotolamento in avanti dalla stazione eretta, con tatami e verifica dell’istruttore.',
    obj: ['Rotolare in diagonale da in piedi con atterraggio morbido', 'Tenere mento sul petto e sguardo all’anca opposta', 'Fare una ripetizione per volta con verifica del collo'],
    why: 'È il gradino più alto: una caduta in avanti dalla posizione eretta. Si avvia **solo dopo** mae ukemi da accovacciato consolidato e **solo su tatami**.',
    mech: ['**Partenza:** in piedi, passo avanti, mano e braccio destri ad arco.', '**Mento:** sul petto, sguardo all’anca opposta.', '**Linea:** diagonale su braccio e spalla.', '**Battuta:** a 45° con l’altro braccio; atterraggio sull’anca opposta.', '**Gambe:** non battono; ritorno in stance con un passo.'],
    steps: ['In piedi, passo avanti, mano e braccio destri ad arco.', 'Mento sul petto, sguardo all’anca sinistra.', 'Rotola diagonalmente su braccio e spalla.', 'Batti con il braccio sinistro a 45°, atterra sull’anca.', 'Torna in stance con un passo. Una ripetizione, pausa, controlla il collo.'],
    errors: [['Testa che entra sotto la spalla', 'gira la testa verso l’anca.'], ['Rotolamento sulla colonna', 'resta diagonale.'], ['Gambe che battono', 'atterra morbido, gambe leggere.'], ['Perdita di equilibrio', 'torna al gradino accovacciato.']],
    drills: ['Rotolamento con passo di rincorsa breve.', 'Con battuta più decisa.', 'Rotolamento e ritorno in stance rapido.', 'Una ripetizione, pausa.'],
    check: ['il percorso è diagonale', 'le gambe non battono', 'il ritorno in stance è controllato'],
    recap: ['Gradino più alto: tatami e istruttore.', 'Ogni errore: gradino precedente.']
    , ex: [
      X('Quale precauzione serve?', 'Tatami spesso e verifica di un istruttore', ['Pavimento duro', 'Velocità massima', 'Nessuna'], 0, 'Tatami e istruttore.'),
      X('Percorso?', 'In diagonale, su braccio e spalla', ['Sulla colonna', 'Sopra la testa', 'Sul collo'], 1, 'Diagonale.'),
      X('A che angolo batte?', '45°', ['0°', '180°', 'Non batte'], 2, '45°.'),
      X('Gradino consolidato?', 'Mae ukemi da accovacciato', ['Nessuno', 'Ushiro sdraiato', 'Yoko sdraiato'], 0, 'Precedente.'),
      X('Quanto ripeti per volta?', 'Una con pausa', ['Dieci veloci', 'Cento', 'Nessuna'], 1, 'Una.'),
      X('Dopo un errore?', 'Torno al gradino precedente', ['Insisto', 'Salgo', 'Salto'], 2, 'Torno.'),
      order('Ordina', ['in piedi', 'arco', 'mento', 'rotola', 'batti'], 'Sequenza.'),
      fill('Le gambe non ___.', ['battono'], 'Non battono.')
    ],
    te: [
      X('Errore?', 'Gambe che battono', ['Mento sul petto', 'Battuta a 45°', 'Diagonale'], 0, 'Battono.'),
      X('Con giramenti?', 'Stop', ['Continuo', 'Più veloce', 'Più alto'], 1, 'Stop.'),
      X('Chi certifica?', 'Un istruttore, non l’app', ['L’app', 'Il video', 'Nessuno'], 2 - 2 + 0, 'Istruttore.'),
      X('Superficie?', 'Tatami', ['Cemento', 'Piastrelle', 'Parquet'], 1, 'Tatami.'),
      fill('Il rotolamento è in ___.', ['diagonale'], 'Diagonale.')
    ]
  });

  D.forEach(d => C.addTopic(lesson(d)));
})(window.ST = window.ST || {});
