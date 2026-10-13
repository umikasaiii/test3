/* SkillTree — allenamento mentale: esercizi generati, variabili, a difficoltà adattiva e verificabili.
   Tipi: calcolo, successioni, span di cifre (memoria di lavoro), blocchi di Corsi (memoria spaziale),
   elemento diverso (velocità decisionale), Stroop (attenzione), logica (ragionamento). */
(function (ST) {
  'use strict';
  const U = ST.util;
  const MN = ST.mental = {};
  MN.TYPES = ['calc', 'seq', 'span', 'corsi', 'odd', 'stroop', 'logic'];
  MN.LABEL = { calc: 'Calcolo mentale', seq: 'Riconoscimento di schemi', span: 'Memoria di lavoro · cifre', corsi: 'Memoria spaziale', odd: 'Velocità decisionale', stroop: 'Attenzione e controllo', logic: 'Ragionamento logico' };
  // Giorno della settimana → tipi in evidenza (lun=0). Tutti i tipi ricorrono nella settimana.
  MN.WEEK = [['calc', 'span', 'logic'], ['seq', 'odd', 'corsi'], ['stroop', 'calc', 'logic'], ['span', 'seq', 'odd'], ['corsi', 'calc', 'stroop'], ['logic', 'seq', 'span'], ['odd', 'corsi', 'calc']];

  MN.level = (state, type) => (state.mental[type] && state.mental[type].level) || 1;
  MN.record = (state, type, ok) => {
    const m = (state.mental[type] = state.mental[type] || { level: 1, hist: [], n: 0, ok: 0 });
    m.hist.push(ok ? 1 : 0); if (m.hist.length > 12) m.hist.shift();
    m.n++; m.ok += ok ? 1 : 0;
    if (m.hist.length >= 6) {
      const r = m.hist.slice(-6).reduce((a, b) => a + b, 0) / 6;
      if (r >= 0.83 && m.level < 10) { m.level++; m.hist = []; }
      else if (r <= 0.5 && m.level > 1) { m.level--; m.hist = []; }
    }
  };

  const LOGIC = [
    { q: 'Tutti i falchi sono uccelli. Alcuni uccelli non volano. Quale conclusione è SICURA?', o: ['Alcuni falchi non volano', 'Tutti i falchi sono uccelli', 'Nessun uccello vola', 'Tutti gli uccelli sono falchi'], a: 1 },
    { q: 'Anna è più alta di Bea. Bea è più alta di Carla. Chi è la più bassa?', o: ['Anna', 'Bea', 'Carla', 'Non si può dire'], a: 2 },
    { q: 'Se piove, la strada è bagnata. La strada è bagnata. Cosa si può concludere?', o: ['Ha piovuto', 'Non ha piovuto', 'Non si può concludere che abbia piovuto', 'La strada è asciutta'], a: 2 },
    { q: 'Un contadino ha 17 pecore. Tutte tranne 9 muoiono. Quante restano?', o: ['8', '9', '17', '0'], a: 1 },
    { q: 'Quale parola NON appartiene al gruppo: mela, pera, carota, banana?', o: ['mela', 'pera', 'carota', 'banana'], a: 2 },
    { q: 'Se nessun A è B e alcuni C sono A, allora…', o: ['alcuni C non sono B', 'tutti i C sono B', 'nessun C è A', 'tutti gli A sono C'], a: 0 },
    { q: 'Marco dice: «Mento sempre». Può essere vero?', o: ['Sì, sempre', 'No, è un paradosso: se è vero allora mente', 'Solo di lunedì', 'Dipende dal tono'], a: 1 },
    { q: 'Un treno parte alle 9:40 e arriva alle 12:15. Quanto dura il viaggio?', o: ['2 h 25', '2 h 35', '2 h 45', '3 h 05'], a: 1 },
    { q: 'Tre interruttori fuori da una stanza, una sola lampadina dentro. Puoi entrare una volta. Qual è l’idea chiave?', o: ['Provarli a caso', 'Accendere uno a lungo, spegnerlo, poi accenderne un altro: la lampadina calda è il primo', 'Rompere la lampadina', 'È impossibile'], a: 1 },
    { q: 'Se A implica B e B implica C, quale implicazione è valida?', o: ['C implica A', 'A implica C', 'B implica A', 'Nessuna'], a: 1 },
    { q: 'Quale numero è di troppo: 2, 3, 5, 9, 11?', o: ['2', '5', '9', '11'], a: 2 },
    { q: 'Un libro costa 10 € più della sua copertina. Insieme costano 11 €. Quanto costa la copertina?', o: ['0,10 €', '0,50 €', '1 €', '0,75 €'], a: 1 },
    { q: '«Nessun gatto è un cane. Fido è un cane.» Cosa è sicuro?', o: ['Fido è un gatto', 'Fido non è un gatto', 'Fido ama i gatti', 'Fido è piccolo'], a: 1 },
    { q: 'Una gara: superi il secondo. In che posizione sei?', o: ['Prima', 'Seconda', 'Terza', 'Ultima'], a: 1 }
  ];
  MN.logicCount = LOGIC.length;

  const COL = [['ROSSO', '#e5484d'], ['BLU', '#3b82f6'], ['VERDE', '#22a06b'], ['GIALLO', '#d6a40a']];

  /* Genera un esercizio di un dato tipo al livello indicato. rng opzionale per i test. */
  MN.make = (type, level, rng) => {
    rng = rng || U.rand;
    const ri = (a, b) => a + Math.floor(rng() * (b - a + 1));
    const lv = U.clamp(level, 1, 10);
    if (type === 'calc') {
      let q, a;
      if (lv <= 2) { const x = ri(11, 59), y = ri(11, 49); q = x + ' + ' + y; a = x + y; }
      else if (lv <= 4) { const x = ri(40, 99), y = ri(11, 39); q = x + ' − ' + y; a = x - y; }
      else if (lv <= 6) { const x = ri(12, 19), y = ri(3, 9); q = x + ' × ' + y; a = x * y; }
      else if (lv <= 8) { const x = ri(21, 49), y = ri(4, 9); q = x + ' × ' + y; a = x * y; }
      else { const x = ri(2, 9) * 10, p = [10, 15, 20, 25, 30][ri(0, 4)]; q = p + '% di ' + (x * 4); a = (x * 4 * p) / 100; }
      return { t: 'fill', mtype: type, q: 'Calcola a mente: ' + q, a: [String(a)], num: true, why: q + ' = ' + a, timed: Math.max(8, 25 - lv * 2) };
    }
    if (type === 'seq') {
      const kinds = lv <= 2 ? ['add'] : lv <= 4 ? ['add', 'mul'] : lv <= 6 ? ['add', 'mul', 'alt'] : ['add', 'mul', 'alt', 'sq', 'fib'];
      const k = U.pick(kinds, rng);
      let s = [], rule = '';
      if (k === 'add') { const st = ri(2, 4 + lv), d = ri(2, 4 + lv); for (let i = 0; i < 5; i++) s.push(st + d * i); rule = 'ogni numero aumenta di ' + d; }
      else if (k === 'mul') { const st = ri(1, 4), m = ri(2, 3); for (let i = 0; i < 5; i++) s.push(st * Math.pow(m, i)); rule = 'ogni numero è moltiplicato per ' + m; }
      else if (k === 'alt') { const a = ri(1, 9), b = ri(2, 6); for (let i = 0; i < 6; i++) s.push(i % 2 ? s[i - 1] * 2 - a : a + (i / 2) * b); rule = 'regola alternata'; }
      else if (k === 'sq') { const o = ri(0, 3); for (let i = 1; i <= 5; i++) s.push((i + o) * (i + o)); rule = 'quadrati consecutivi'; }
      else { s = [ri(1, 3), ri(2, 4)]; for (let i = 2; i < 6; i++) s.push(s[i - 1] + s[i - 2]); rule = 'ogni numero è la somma dei due precedenti'; }
      const ans = s.pop();
      return { t: 'fill', mtype: type, q: 'Quale numero continua? ' + s.join(', ') + ', …', a: [String(ans)], num: true, why: 'Regola: ' + rule + ' → ' + ans };
    }
    if (type === 'span') {
      const n = 2 + Math.ceil(lv * 0.8), back = lv >= 6;
      let d = ''; for (let i = 0; i < n; i++) d += ri(0, 9);
      return { t: 'span', mtype: type, digits: d, back, ms: 800, q: back ? 'Ripeti le cifre in ordine INVERSO' : 'Ripeti le cifre nello stesso ordine', a: [back ? d.split('').reverse().join('') : d], why: 'Sequenza: ' + d };
    }
    if (type === 'corsi') {
      const n = 2 + Math.ceil(lv * 0.7), seq = [];
      while (seq.length < n) { const c = ri(0, 8); if (seq[seq.length - 1] !== c) seq.push(c); }
      return { t: 'corsi', mtype: type, seq, q: 'Tocca le caselle nello stesso ordine in cui si sono illuminate', why: 'Ordine corretto: ' + seq.map(x => x + 1).join(' → ') };
    }
    if (type === 'odd') {
      const size = lv <= 3 ? 9 : lv <= 6 ? 12 : 16;
      const sets = [['O', 'Q'], ['b', 'd'], ['6', '9'], ['E', 'F'], ['m', 'n'], ['p', 'q']];
      const [base, odd] = lv <= 3 ? [['■', '▲'], ['●', '◆']][ri(0, 1)] : U.pick(sets, rng);
      const idx = ri(0, size - 1);
      return { t: 'odd', mtype: type, cells: Array.from({ length: size }, (_, i) => i === idx ? odd : base), a: idx, q: 'Tocca il simbolo diverso, il più in fretta possibile', timed: Math.max(4, 12 - lv), why: 'Il simbolo diverso era «' + odd + '»' };
    }
    if (type === 'stroop') {
      const w = U.pick(COL, rng); let c = U.pick(COL, rng);
      if (lv >= 3) while (c[0] === w[0]) c = U.pick(COL, rng);
      return { t: 'stroop', mtype: type, word: w[0], color: c[1], opts: COL.map(x => x[0]), a: COL.findIndex(x => x[1] === c[1]), q: 'Tocca il COLORE dell’inchiostro, non la parola', timed: Math.max(3, 9 - lv), why: 'Il colore dell’inchiostro era ' + c[0] };
    }
    const p = LOGIC[Math.floor(rng() * LOGIC.length)];
    return { t: 'mc', mtype: 'logic', q: p.q, o: p.o, a: p.a, why: 'Ragiona sulle premesse: la risposta corretta è «' + p.o[p.a] + '».' };
  };

  /* Sessione di ~5 minuti: 8 esercizi dai tipi del giorno, a livello adattivo per tipo. */
  MN.session = (state, date, rng, n) => {
    const types = MN.WEEK[U.weekday(date || U.today())];
    const items = [];
    for (let i = 0; i < (n || 8); i++) { const t = types[i % types.length]; items.push(MN.make(t, MN.level(state, t), rng)); }
    return items;
  };
})(window.ST = window.ST || {});
