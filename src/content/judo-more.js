/* SkillTree — ampliamento repertorio: lotta/judo NO-GI, solo pratica SOLITARIA e SICURA (senza sparring).
   Regole invariate: nessuna proiezione, nessuna caduta nuova, nessuna tecnica su partner in autonomia.
   Le entrate "a vuoto" restano segnate come da verificare con un istruttore. */
(function (ST) {
  'use strict';
  const C = ST.content, J = C.judo;
  const N = (id, name, jp, stage, minMonth, tags, complexity, space, cues, errors, variants, theory, instructor) =>
    ({ id, name, jp, stage, minMonth, tags, complexity, space, cues, errors, variants, theory, instructor: !!instructor });
  const mc = (q, o, a) => ({ q, o, a });

  J.safety.push(
    'No-gi: niente prese al tessuto. Allenati a torso e braccia liberi; mani sempre davanti al corpo, mai a sorreggere il collo.',
    'Lavoro a terra solo su tappeto o moquette. Niente ponte sulla testa e niente carico sul collo: i ponti si fanno sulle spalle, con il collo rilassato.',
    'Gli sprawl si eseguono con discesa controllata del bacino, senza salto e senza battere il pavimento. Ginocchia e polsi non devono subire urti.'
  );

  const more = [
    N('wrestle-stance', 'Stance da lotta (no-gi) e spostamenti', 'レスリング構え', 'L0', 5, ['movement'], 2, '2 m × 2 m',
      ['Piedi un po’ più larghi delle spalle, ginocchia flesse, busto inclinato in avanti ma schiena neutra.', 'Mani aperte davanti al corpo, gomiti dentro: proteggono la linea del tronco.', 'Muoviti con passi di scivolamento (shuffle): il piede che guida si sposta per primo, l’altro lo segue senza incrociare.', 'Testa alta, sguardo avanti; cambia direzione senza raddrizzarti.'],
      [['schiena-curva', 'Schiena curva'], ['piedi-incrociati', 'Piedi che si incrociano'], ['peso-indietro', 'Peso sui talloni'], ['mani-basse', 'Mani che scendono'], ['testa-su-giu', 'Testa che oscilla']],
      ['Cambi di direzione a comando casuale.', 'Stance bassa per 30 secondi e poi alta, senza perdere la forma.', 'Avanti, lato, indietro in un quadrato di 1,5 m.'],
      [mc('Dove deve restare il peso nella stance da lotta?', ['Al centro-avampiede, pronto a muoversi', 'Sui talloni', 'Tutto su un piede', 'Sulle mani'], 0), mc('Perché i gomiti stanno vicini al busto?', ['Proteggono la linea del tronco e mantengono struttura', 'Per sembrare più grandi', 'Non c’è un motivo', 'Per tenere le mani basse'], 0)]),
    N('level-change', 'Cambio di livello (level change)', 'レベルチェンジ', 'L1', 6, ['movement'], 2, 'sul posto',
      ['Dalla stance abbassa il bacino piegando le ginocchia: la schiena resta neutra, non ti pieghi in vita.', 'Il busto scende insieme al bacino, la testa resta alta e davanti alle mani.', 'Risali spingendo con le gambe, senza saltare e senza raddrizzare la schiena prima delle ginocchia.', 'Ripeti lentamente: 3 secondi in discesa, 2 in risalita.'],
      [['schiena-curva', 'Schiena curva'], ['ginocchia-dritte', 'Ginocchia dritte'], ['testa-giu', 'Testa che cade in avanti'], ['peso-indietro', 'Peso sui talloni'], ['salta-su', 'Risalita a scatti']],
      ['Level change a comando (basso/alto) casuale.', 'Level change + due shuffle laterali.', 'Tre level change consecutivi senza risalire del tutto.'],
      [mc('Che cosa si abbassa nel level change?', ['Il bacino, piegando le ginocchia con schiena neutra', 'Solo la testa', 'Solo le spalle', 'Le mani'], 0), mc('Quale errore va evitato?', ['Piegarsi in vita con la schiena curva', 'Tenere la testa alta', 'Spingere con le gambe', 'Respirare'], 0)]),
    N('hip-bridge', 'Ponte di bacino (hip bridge)', 'ブリッジ（腰）', 'L3', 7, ['floor'], 2, '2 m × 1 m, tappeto',
      ['Sdraiato sulla schiena, piedi vicini ai glutei, braccia lungo i fianchi. Il collo è rilassato e il capo resta appoggiato.', 'Spingi con i piedi e solleva il bacino fino alla linea spalle-ginocchia, contraendo glutei e addome.', 'Le spalle restano sul tappeto: non è un ponte sulla testa.', 'Scendi lentamente vertebra per vertebra e ripeti.'],
      [['collo-teso', 'Collo teso o carico sul capo'], ['lombare-iperestesa', 'Schiena inarcata oltre la linea'], ['piedi-lontani', 'Piedi troppo lontani'], ['movimento-rapido', 'Movimento troppo rapido']],
      ['Ponte con pausa di 2 secondi in alto.', 'Ponte con un piede solo, lentamente.', 'Ponte con rotazione leggera del bacino a destra e a sinistra.'],
      [mc('Dove si appoggia il peso nel ponte di bacino?', ['Spalle e piedi, con il collo rilassato', 'Sulla testa', 'Sulle mani', 'Sul collo'], 0), mc('Quale versione NON va fatta in autonomia?', ['Ponte sulla testa con carico sul collo', 'Ponte di bacino', 'Ponte con pausa', 'Ponte con un piede'], 0)]),
    N('penetration-step', 'Passo di penetrazione (a vuoto)', '踏み込み', 'L1', 8, ['movement'], 3, '2 m in linea',
      ['Dalla stance, level change e passo lungo in avanti con il piede guida; il ginocchio posteriore scende vicino al pavimento ma non lo tocca con forza.', 'Busto eretto sul bacino, testa alta, mani davanti.', 'Il piede d’appoggio resta stabile: ferma il movimento nel punto più basso e torna in stance.', 'Solo a vuoto e a velocità controllata: niente slancio verso un obiettivo.'],
      [['ginocchio-sbatte', 'Ginocchio che sbatte a terra'], ['schiena-curva', 'Schiena curva'], ['passo-corto', 'Passo troppo corto'], ['peso-indietro', 'Peso sui talloni'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Passo con piede guida destro e sinistro alternati.', 'Penetration step + ritorno in stance in 3 tempi.', 'Passo a comando casuale.'],
      [mc('Che cosa non si fa con il ginocchio posteriore?', ['Non si sbatte a terra', 'Non si piega', 'Non si avanza', 'Non si usa'], 0), mc('Perché si ferma il movimento nel punto più basso?', ['Per controllare equilibrio e ritorno', 'Per riposare', 'Per aumentare la velocità', 'Non serve'], 0)]),
    N('sprawl', 'Sprawl controllato (a basso impatto)', 'スプロール', 'L3', 9, ['floor', 'movement'], 3, '2 m × 2 m, tappeto',
      ['Dalla stance porta le mani avanti e allunga le gambe all’indietro con un passo, abbassando il bacino.', 'Il bacino si abbassa fin quasi al tappeto: fermati a 10 cm, senza battere.', 'Le mani sono davanti al corpo e il collo resta neutro; sguardo avanti.', 'Torna in stance con un passo di recupero, senza saltare.'],
      [['bacino-sbatte', 'Bacino che batte a terra'], ['collo-teso', 'Collo teso'], ['mani-lente', 'Mani non pronte'], ['gambe-troppo-aperte', 'Gambe troppo aperte'], ['movimento-rapido', 'Movimento troppo rapido']],
      ['Sprawl lento in 4 tempi.', 'Sprawl + level change + ritorno in stance.', 'Tre sprawl a comando casuale.'],
      [mc('Quale parte dello sprawl si controlla per evitare urti?', ['La discesa del bacino', 'Solo la testa', 'Solo i polsi', 'La respirazione'], 0), mc('A che distanza dal tappeto ci si ferma nella versione sicura?', ['Circa 10 cm', 'Sul tappeto con forza', 'A un metro', 'Non ci si ferma'], 0)]),
    N('hand-fighting', 'Hand fighting a vuoto (controllo polsi e legamenti)', 'ハンドファイト', 'L1', 10, ['timing'], 2, 'sul posto',
      ['Immagina i polsi e i gomiti dell’avversario: intercetta con la mano destra e poi con la sinistra, dentro la linea del suo busto.', 'Esegui gesti brevi e rapidi: palmo che spinge, dita che chiudono, polso che ruota.', 'Mantieni la stance: il lavoro è nelle braccia, ma il bacino resta basso e stabile.', 'Alterna destra e sinistra, evita di irrigidire le spalle.'],
      [['spalle-alte', 'Spalle alzate'], ['braccia-rigide', 'Braccia rigide'], ['stance-persa', 'Stance persa mentre si lavora con le braccia'], ['ritmo-irregolare', 'Ritmo irregolare']],
      ['Serie di 10 gesti lenti, poi 10 veloci.', 'Hand fighting con un passo di shuffle.', 'Cambio di mano a comando casuale.'],
      [mc('Dove si concentra il lavoro nell’hand fighting?', ['Sul controllo di polsi e linee del tronco, mantenendo la stance', 'Solo sul pugno', 'Sulle gambe', 'Sulla presa del tessuto'], 0), mc('Perché si evitano spalle rigide?', ['Per muoversi veloci e fluidi', 'Per sembrare più forti', 'Non c’è un motivo', 'Per ridurre l’equilibrio'], 0)]),
    N('ground-locomotion', 'Locomozione a terra (bear crawl e crab walk)', '四つん這い・カニ歩き', 'L3', 11, ['floor', 'movement'], 2, '3 m in linea, tappeto',
      ['Bear crawl: mani sotto le spalle, ginocchia a 10 cm dal tappeto, schiena piatta; muovi mano e piede opposti insieme.', 'Crab walk: bacino alto, mani dietro, passi piccoli; non lasciar cadere il bacino.', 'Respira con ritmo regolare e controlla la tensione di spalle e polsi.', 'Fermati se senti dolore ai polsi o alle spalle.'],
      [['polsi-doloranti', 'Polsi sotto carico eccessivo'], ['schiena-curva', 'Schiena curva'], ['bacino-basso', 'Bacino che cade'], ['ritmo-irregolare', 'Ritmo irregolare']],
      ['Bear crawl avanti-indietro-lato.', 'Crab walk con un passo lungo ogni 3 corti.', 'Alternanza 10 secondi bear / 10 secondi crab.'],
      [mc('Dove sono le mani nel bear crawl?', ['Sotto le spalle', 'Davanti alla testa', 'Sulle ginocchia', 'Dietro la schiena'], 0), mc('Che cosa si fa se si sente dolore ai polsi?', ['Ci si ferma', 'Si accelera', 'Si aumenta il carico', 'Si cambia solo mano'], 0)]),
    N('pummel-shadow', 'Pummeling a vuoto (underhook / overhook)', 'パンメル', 'L2', 12, ['timing'], 3, 'sul posto',
      ['Immagina due bracci: infila una mano dentro e una fuori, poi inverti.', 'Il gomito dell’underhook è basso e vicino al fianco; l’overhook è sopra la spalla opposta.', 'Mantieni la stance, spingi con le gambe, non con le braccia.', 'Cambia lato dopo 10 ripetizioni, respirando regolarmente.'],
      [['braccia-rigide', 'Braccia rigide'], ['gomito-alto', 'Gomito che sale'], ['stance-persa', 'Stance persa'], ['ritmo-irregolare', 'Ritmo irregolare']],
      ['Pummeling lento e poi veloce.', 'Pummeling + due shuffle laterali.', 'Pummeling a comando di cambio lato.'],
      [mc('Che cosa spinge nel pummeling?', ['Le gambe, che sostengono la struttura', 'Solo le braccia', 'La testa', 'Il collo'], 0), mc('Dove sta il gomito dell’underhook?', ['Basso e vicino al fianco', 'Sopra la testa', 'Teso in fuori', 'Dietro la schiena'], 0)]),
    N('guard-frames', 'Frame e recupero della guardia (a terra, solo)', 'フレーム', 'L3', 13, ['floor'], 3, '2 m × 2 m, tappeto',
      ['Sdraiato, avambracci davanti al petto come due barre; gomiti vicini al busto per costruire spazio.', 'Esegui lo shrimp e porta le ginocchia verso il petto, poi stendi un piede per creare distanza.', 'Torna in posizione di partenza e cambia lato.', 'Movimento lento, collo rilassato, nessuna torsione brusca.'],
      [['collo-teso', 'Collo teso'], ['gomiti-larghi', 'Gomiti troppo larghi'], ['gambe-rigide', 'Gambe rigide'], ['spinta-poca', 'Spinta insufficiente']],
      ['Frame + shrimp + ritorno in 4 tempi.', 'Sequenza lato destro e lato sinistro alternati.', 'Frame in posizione di partenza diversa (anche seduto).'],
      [mc('A che cosa serve il frame?', ['A creare spazio e distanza con una struttura di avambracci', 'A colpire', 'A fare presa', 'A riposare'], 0), mc('Qual è l’errore da evitare?', ['Gomiti larghi che perdono struttura', 'Movimento lento', 'Collo rilassato', 'Respiro regolare'], 0)]),
    N('turtle-sit-out', 'Sit-out e switch da posizione a quattro zampe', 'シットアウト', 'L3', 14, ['floor'], 3, '2 m × 2 m, tappeto',
      ['Parti a quattro zampe, mani sotto le spalle, ginocchia sotto i fianchi.', 'Fai passare una gamba sotto il corpo ruotando il bacino; il piede opposto resta in appoggio. Ruota senza girare il collo.', 'Torna a quattro zampe e ripeti dall’altro lato.', 'Movimento lento e fluido; mai trascinare il peso sul collo.'],
      [['collo-teso', 'Collo teso'], ['polsi-doloranti', 'Polsi sotto carico eccessivo'], ['bacino-alto', 'Bacino troppo alto'], ['movimento-rapido', 'Movimento troppo rapido']],
      ['Sit-out lento in 4 tempi.', 'Sit-out + stand-up tecnico.', 'Sit-out a comando casuale (destra/sinistra).'],
      [mc('Dove si appoggia il peso nel sit-out?', ['Su mani e piedi, non sul collo', 'Sul capo', 'Sulle spalle', 'Sul gomito'], 0), mc('Quando si ruota il bacino?', ['Mentre la gamba passa sotto il corpo, senza girare il collo', 'Prima di mettersi a quattro zampe', 'Dopo essersi alzati', 'Mai'], 0)]),
    N('snap-down-shadow', 'Snap-down a vuoto (controllo di testa e braccia)', 'スナップダウン', 'L2', 15, ['timing'], 3, 'sul posto',
      ['Dalla stance, simula il gesto di trazione verso il basso della nuca immaginaria con un movimento rapido ma breve.', 'Il bacino scende leggermente, il busto resta eretto; non allungare in avanti.', 'Esci dal gesto con uno shuffle indietro e torna in stance.', 'Evita movimenti ampi: il lavoro è nel tempismo e nell’allineamento.'],
      [['allunga-troppo', 'Gesto troppo ampio'], ['stance-persa', 'Stance persa'], ['schiena-curva', 'Schiena curva'], ['ritmo-irregolare', 'Ritmo irregolare']],
      ['Serie di 5 snap lenti, poi 5 veloci.', 'Snap-down + sprawl controllato.', 'Snap-down + passo indietro e cambio lato.'],
      [mc('Che cosa conta di più nello snap-down a vuoto?', ['Tempismo e allineamento, con gesto breve', 'La forza massima', 'L’ampiezza', 'La velocità senza controllo'], 0), mc('Come si esce dal gesto?', ['Con uno shuffle indietro e ritorno in stance', 'Restando fermi', 'Saltando', 'Cadendo'], 0)]),
    N('knee-slide', 'Knee slide: passaggio della guardia (a vuoto)', 'ニースライド', 'L3', 16, ['floor', 'movement'], 3, '2 m × 2 m, tappeto',
      ['Da in ginocchio, porta un ginocchio in avanti e lascialo scivolare lungo la linea immaginaria dell’avversario.', 'Il busto resta eretto, la mano libera davanti al corpo.', 'Il piede dietro spinge e il bacino segue; ferma il movimento a controllo.', 'Torna in ginocchio e cambia lato.'],
      [['schiena-curva', 'Schiena curva'], ['ginocchio-sbatte', 'Ginocchio che sbatte'], ['peso-indietro', 'Peso sui talloni'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Knee slide lento in 4 tempi.', 'Knee slide + ritorno in stance.', 'Knee slide a comando di lato casuale.'],
      [mc('Che cosa scivola nel knee slide?', ['Il ginocchio lungo la linea immaginaria dell’avversario', 'Le mani', 'La testa', 'Il piede d’appoggio'], 0), mc('Come resta il busto?', ['Eretto', 'Ripiegato', 'Disteso', 'Ruotato in fuori'], 0)]),
    N('arm-drag-shadow', 'Arm drag a vuoto (tempismo e angolo)', 'アームドラッグ', 'L2', 17, ['timing'], 3, 'sul posto',
      ['Dalla stance, simula di afferrare il polso e il tricipite, portando il braccio immaginario attraverso il tuo corpo.', 'Contemporaneamente fai un piccolo passo di lato per creare angolo.', 'Il bacino resta basso, il busto eretto; non tirare con la schiena.', 'Ripeti destro e sinistro, con ritmo regolare.'],
      [['schiena-curva', 'Schiena curva'], ['stance-persa', 'Stance persa'], ['piedi-incrociati', 'Piedi incrociati'], ['braccia-rigide', 'Braccia rigide']],
      ['Arm drag + shuffle laterale.', 'Arm drag + level change.', 'Alterna arm drag e snap-down.'],
      [mc('Che cosa crea l’arm drag insieme al passo laterale?', ['Un angolo di attacco', 'Una caduta', 'Una proiezione', 'Una presa al tessuto'], 0), mc('Con che cosa si tira?', ['Con le gambe e il passo, non con la schiena', 'Con la schiena', 'Con il collo', 'Con la testa'], 0)]),
    N('single-leg-entry', 'Single-leg: ingresso a vuoto', 'シングルレッグ', 'L2', 18, ['timing'], 3, '2 m × 2 m',
      ['Solo INGRESSO, a vuoto, lentamente: penetration step e ginocchio vicino al tappeto, mani davanti.', 'Ferma il gesto prima di alzare la gamba immaginaria: nessun sollevamento, nessuna proiezione.', 'Mantieni schiena neutra e testa alta.', 'Torna in stance con uno shuffle controllato e cambia lato.'],
      [['schiena-curva', 'Schiena curva'], ['ginocchio-sbatte', 'Ginocchio che sbatte'], ['peso-indietro', 'Peso sui talloni'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Ingresso con piede guida destro e sinistro.', 'Ingresso dopo hand fighting a vuoto.', 'Ingresso + sprawl controllato.'],
      [mc('Quale parte del single-leg si può simulare da soli?', ['Solo l’ingresso, a vuoto', 'Il sollevamento e la proiezione', 'La caduta', 'La lotta a terra completa'], 0)], true),
    N('double-leg-entry', 'Double-leg: ingresso a vuoto', 'ダブルレッグ', 'L2', 20, ['timing'], 3, '2 m × 2 m',
      ['Solo INGRESSO, a vuoto: level change, penetration step e braccia che avvolgono lo spazio davanti a te.', 'Fermati nel punto più basso: nessun sollevamento, nessun impatto del ginocchio a terra.', 'La testa resta alta e laterale alla linea del corpo immaginario.', 'Esci con uno shuffle indietro e torna in stance.'],
      [['ginocchio-sbatte', 'Ginocchio che sbatte'], ['schiena-curva', 'Schiena curva'], ['testa-giu', 'Testa che cade in avanti'], ['perde-equilibrio', 'Perdita di equilibrio']],
      ['Ingresso lento in 4 tempi.', 'Ingresso dopo snap-down a vuoto.', 'Ingresso + uscita + cambio di livello.'],
      [mc('Che cosa si fa nel punto più basso dell’ingresso?', ['Ci si ferma e si torna in stance', 'Si solleva l’avversario', 'Si cade a terra', 'Si salta'], 0)], true)
  ];

  more.forEach(t => J.techniques.push(Object.assign({ variants: [], theory: [] }, t)));
  // ordine di introduzione: per mese minimo (parità: ordine originale)
  J.techniques = J.techniques.map((t, i) => [t, i]).sort((a, b) => a[0].minMonth - b[0].minMonth || a[1] - b[1]).map(x => x[0]);

  J.combos.push(
    { name: 'Stance → cambio di livello → passo di penetrazione (no-gi)', ids: ['wrestle-stance', 'level-change', 'penetration-step'] },
    { name: 'Hand fighting → snap-down → arm drag (a vuoto)', ids: ['hand-fighting', 'snap-down-shadow', 'arm-drag-shadow'] },
    { name: 'Sprawl → rialzo tecnico → stance', ids: ['sprawl', 'standup', 'wrestle-stance'] },
    { name: 'Shrimp → frame → knee slide', ids: ['shrimp', 'guard-frames', 'knee-slide'] },
    { name: 'Sit-out → rialzo → stance', ids: ['turtle-sit-out', 'standup', 'wrestle-stance'] },
    { name: 'Pummeling → cambio di livello → single-leg (ingresso)', ids: ['pummel-shadow', 'level-change', 'single-leg-entry'] },
    { name: 'Flusso a terra: ponte → shrimp → sit-out', ids: ['hip-bridge', 'shrimp', 'turtle-sit-out'] }
  );

  J.sundayTheory.push(
    { q: 'Perché nel no-gi non si usa il tessuto?', o: ['Si lavora su polsi, gomiti, testa e linee del tronco', 'Perché è vietato', 'Perché è più facile', 'Perché non c’è differenza'], a: 0 },
    { q: 'Quale ponte è sicuro da fare in autonomia?', o: ['Ponte di bacino con spalle a terra', 'Ponte sulla testa con carico sul collo', 'Ponte sul collo', 'Nessun ponte'], a: 0 },
    { q: 'Che cosa significa «a basso impatto» per lo sprawl?', o: ['Si ferma il bacino a pochi cm dal tappeto senza battere', 'Si salta più alto', 'Si cade con forza', 'Si usa un materasso'], a: 0 },
    { q: 'Quali ingressi in questo percorso richiedono verifica di un istruttore?', o: ['Single-leg, double-leg, o-goshi, o-soto-gari, seoi-nage, de-ashi (entrate a vuoto)', 'Tutti i riscaldamenti', 'Solo la postura', 'Nessuno'], a: 0 }
  );
})(window.ST = window.ST || {});
