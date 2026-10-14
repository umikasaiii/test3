/* SkillTree — allenamento mentale: esercizi generati, variabili, a difficoltà adattiva e verificabili.
   Tipi: calcolo, successioni, span di cifre (memoria di lavoro), blocchi di Corsi (memoria spaziale),
   elemento diverso (velocità decisionale), Stroop (attenzione), logica (ragionamento). */
(function (ST) {
  'use strict';
  const U = ST.util;
  const MN = ST.mental = {};
  MN.TYPES = ['calc', 'seq', 'span', 'corsi', 'odd', 'stroop', 'logic', 'nback', 'recall', 'estimate', 'order', 'syllo', 'switch'];
  MN.LABEL = { calc: 'Calcolo mentale', seq: 'Riconoscimento di schemi', span: 'Memoria di lavoro · cifre', corsi: 'Memoria spaziale', odd: 'Velocità decisionale', stroop: 'Attenzione e controllo', logic: 'Ragionamento logico', nback: 'Memoria di lavoro · n-back', recall: 'Memoria · liste di parole', estimate: 'Stima e ordini di grandezza', order: 'Ragionamento · ordinamenti', syllo: 'Ragionamento · sillogismi', switch: 'Flessibilità cognitiva' };
  // Giorno della settimana → tipi in evidenza (lun=0). Tutti i tipi ricorrono nella settimana.
  MN.WEEK = [['calc', 'nback', 'syllo'], ['seq', 'recall', 'odd'], ['estimate', 'span', 'order'], ['switch', 'corsi', 'calc'], ['stroop', 'nback', 'logic'], ['syllo', 'seq', 'recall'], ['order', 'estimate', 'switch']];

  MN.level = (state, type) => (state.mental[type] && state.mental[type].level) || 1;
  /* Registra un esito. ms/limitSec facoltativi: una risposta giusta ma oltre il tempo vale mezzo punto (non fa salire di livello da sola). */
  MN.record = (state, type, ok, ms, limitSec) => {
    const m = (state.mental[type] = state.mental[type] || { level: 1, hist: [], n: 0, ok: 0 });
    const slow = !!(ok && limitSec && ms && ms > limitSec * 1000);
    m.hist.push(ok ? (slow ? 0.5 : 1) : 0); if (m.hist.length > 12) m.hist.shift();
    m.n++; m.ok += ok ? 1 : 0; if (slow) m.slow = (m.slow || 0) + 1;
    if (ms) m.ms = m.ms ? Math.round(m.ms * 0.8 + ms * 0.2) : ms;
    if (m.hist.length >= 6) {
      const r = m.hist.slice(-6).reduce((a, b) => a + b, 0) / 6;
      if (r >= 0.83 && m.level < 10) { m.level++; m.hist = []; }
      else if (r <= 0.5 && m.level > 1) { m.level--; m.hist = []; }
    }
    m.max = Math.max(m.max || 1, m.level);
  };
  /* Storico sessioni e test di riferimento (per vedere l'andamento nel tempo). */
  MN.logSession = (state, kind, res, date) => {
    state.mentalLog = state.mentalLog || [];
    const n = res.length, ok = res.filter(x => x.ok).length, ms = n ? Math.round(res.reduce((a, x) => a + (x.ms || 0), 0) / n) : 0;
    state.mentalLog.push({ d: date || U.today(), kind, n, ok, ms });
    if (state.mentalLog.length > 200) state.mentalLog.shift();
  };
  MN.trend = (state, kind, k) => (state.mentalLog || []).filter(x => x.kind === kind).slice(-(k || 10));

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

  const WORDS = ['albero', 'tavolo', 'finestra', 'montagna', 'orologio', 'chitarra', 'cucchiaio', 'bicicletta', 'lampada', 'giardino', 'ponte', 'nuvola', 'scarpa', 'libro', 'cavallo', 'fiume', 'pennello', 'sedia', 'campana', 'farfalla', 'zaino', 'specchio', 'barca', 'formaggio', 'telefono', 'candela', 'tenda', 'moneta', 'ombrello', 'valigia', 'bottiglia', 'pianeta', 'treno', 'cappello', 'chiave', 'martello', 'isola', 'arancia', 'tamburo', 'scala', 'coltello', 'faro', 'lenzuolo', 'pecora', 'cerchio', 'quaderno', 'miele', 'vulcano', 'paracadute', 'collana'];
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

    if (type === 'nback') {
      const n = lv <= 3 ? 1 : lv <= 7 ? 2 : 3, len = 10 + lv, pool = 'BCDFGHKLMNPRSTVZ'.split('');
      const seq = [];
      for (let i = 0; i < len; i++) {
        if (i >= n && rng() < 0.3) seq.push(seq[i - n]);
        else { let c; do { c = U.pick(pool, rng); } while (i >= n && c === seq[i - n]); seq.push(c); }
      }
      const targets = seq.map((c, i) => i >= n && c === seq[i - n]);
      return { t: 'nback', mtype: type, n, seq, targets, ms: Math.max(900, 2000 - lv * 100), q: 'Tocca «Uguale» quando la lettera è la stessa di ' + n + (n === 1 ? ' posto' : ' posti') + ' fa', why: 'Bersagli: ' + targets.map((x, i) => x ? i + 1 : null).filter(Boolean).join(', ') };
    }
    if (type === 'recall') {
      const N = Math.min(12, 4 + Math.ceil(lv * 0.8)), ws = U.sample(WORDS, N + 3, rng), list = ws.slice(0, N), out = ws.slice(N);
      const pos = ri(0, N - 1);
      let q, a, o;
      if (lv <= 4) { q = 'Quale di queste parole era nella lista?'; o = U.shuffle([list[pos]].concat(out), rng); a = o.indexOf(list[pos]); }
      else { q = 'Quale parola era in posizione ' + (pos + 1) + '?'; const others = U.sample(list.filter((_, i) => i !== pos), 3, rng); o = U.shuffle([list[pos]].concat(others), rng); a = o.indexOf(list[pos]); }
      return { t: 'flash', mtype: type, show: list.join(' · '), ms: N * (900 - Math.min(lv, 8) * 50), q, o, a, why: 'Lista: ' + list.join(', ') };
    }
    if (type === 'estimate') {
      let x, y, sym, exact;
      if (lv <= 3) { x = ri(21, 89); y = ri(3, 9); sym = '×'; exact = x * y; }
      else if (lv <= 6) { x = ri(31, 98); y = ri(21, 79); sym = '×'; exact = x * y; }
      else if (lv <= 8) { x = ri(300, 980); y = ri(12, 48); sym = '÷'; exact = x / y; }
      else { x = ri(1200, 9800); y = ri(12, 48); sym = '×'; exact = x * y; }
      const sig = v => { const e = Math.pow(10, Math.floor(Math.log10(Math.abs(v))) - 1); return Math.round(v / e) * e; };
      const val = sig(exact), cands = [val, sig(val * 0.5), sig(val * 2), sig(val * 1.3), sig(val * 0.75)];
      const uniq = [...new Set(cands)].slice(0, 4);
      const o = U.shuffle(uniq.map(v => 'circa ' + String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')), rng);
      const ansTxt = 'circa ' + String(Math.round(val)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return { t: 'mc', mtype: type, q: 'Stima: ' + x + ' ' + sym + ' ' + y + ' è…', o, a: o.indexOf(ansTxt), why: 'Arrotonda i fattori: il risultato esatto è ' + (sym === '÷' ? exact.toFixed(1) : exact) + ' → ' + ansTxt, timed: 20 };
    }
    if (type === 'order') {
      const NAMES = ['Anna', 'Bea', 'Carlo', 'Dario', 'Elisa', 'Fabio'], cnt = lv <= 3 ? 3 : lv <= 6 ? 4 : lv <= 8 ? 5 : 6;
      const people = U.sample(NAMES, cnt, rng); // people[0] è il primo
      const attrs = [['più forte', 'più forti'], ['più veloce', 'più veloci'], ['più giovane', 'più giovani']];
      const at = U.pick(attrs, rng);
      const rel = []; for (let i = 0; i < cnt - 1; i++) rel.push(people[i] + ' è ' + at[0] + ' di ' + people[i + 1] + '.');
      const shown = U.shuffle(rel, rng);
      const kind = lv <= 3 ? 0 : lv <= 6 ? ri(0, 1) : ri(1, 2);
      let q, a, base;
      if (kind === 0) { q = 'Chi è il ' + at[0] + ' di tutti?'; a = people[0]; base = people; }
      else if (kind === 1) { const k = ri(1, cnt - 2); q = 'Chi è in posizione ' + (k + 1) + ' (partendo dal ' + at[0] + ')?'; a = people[k]; base = people; }
      else { const k = ri(1, cnt - 1); q = 'Quante persone sono ' + at[1] + ' di ' + people[k] + '?'; a = String(k); base = ['0', '1', '2', '3', '4', '5'].slice(0, cnt); }
      const o = U.shuffle([a].concat(U.sample(base.filter(x => x !== a), 3, rng)), rng);
      return { t: 'mc', mtype: type, q: shown.join(' ') + ' ' + q, o, a: o.indexOf(a), why: 'Ordine: ' + people.join(' > '), timed: 30 + cnt * 5 };
    }
    if (type === 'syllo') {
      const real = [['gatti', 'mammiferi', 'animali'], ['quadrati', 'rettangoli', 'poligoni'], ['violinisti', 'musicisti', 'artisti'], ['rose', 'fiori', 'piante']];
      const nons = ['zak', 'fol', 'mim', 'tur', 'bel', 'dax', 'pon', 'rix'];
      const tri = lv <= 3 ? U.pick(real, rng) : U.sample(nons, 3, rng);
      const [S, M, P] = tri; // S: soggetto, M: medio, P: predicato
      const forms = [
        { p1: ['all', M, P], p2: ['all', S, M], c: ['all', S, P] },
        { p1: ['no', M, P], p2: ['all', S, M], c: ['no', S, P] },
        { p1: ['all', M, P], p2: ['some', S, M], c: ['some', S, P] },
        { p1: ['no', M, P], p2: ['some', S, M], c: ['somenot', S, P] }
      ];
      const f = U.pick(forms, rng);
      const txt = x => x[0] === 'all' ? 'Tutti i ' + x[1] + ' sono ' + x[2] : x[0] === 'no' ? 'Nessun ' + x[1] + ' è ' + x[2] : x[0] === 'some' ? 'Alcuni ' + x[1] + ' sono ' + x[2] : 'Alcuni ' + x[1] + ' non sono ' + x[2];
      const valid = txt(f.c);
      const INV = { all: [['all', P, S], ['somenot', S, P], ['no', S, P]], no: [['all', S, P], ['some', S, P], ['all', P, S]], some: [['all', S, P], ['no', S, P], ['all', P, S]], somenot: [['all', S, P], ['no', S, P], ['some', S, P]] };
      const dist = INV[f.c[0]].map(txt);
      const o = U.shuffle([valid].concat(dist), rng);
      return { t: 'mc', mtype: type, q: 'Premesse: «' + txt(f.p1) + '». «' + txt(f.p2) + '». Quale conclusione segue NECESSARIAMENTE?', o, a: o.indexOf(valid), why: 'Forma valida: ' + txt(f.p1) + ', ' + txt(f.p2) + ' ⇒ ' + valid + '.', timed: 40 };
    }
    if (type === 'switch') {
      const n = ri(1, 9), colorA = rng() < 0.5, num = n === 5 ? 6 : n;
      const ruleA = 'Sfondo BLU → pari o dispari', ruleB = 'Sfondo ROSSO → maggiore o minore di 5';
      const ans = colorA ? (num % 2 === 0 ? 'Pari' : 'Dispari') : (num > 5 ? 'Maggiore di 5' : 'Minore di 5');
      const o = ['Pari', 'Dispari', 'Maggiore di 5', 'Minore di 5'];
      return { t: 'mc', mtype: type, q: ruleA + ' · ' + ruleB + '. Ora: numero ' + num + ' su sfondo ' + (colorA ? 'BLU' : 'ROSSO') + '.', o, a: o.indexOf(ans), why: (colorA ? 'Blu: parità' : 'Rosso: confronto con 5') + ' → ' + ans, timed: Math.max(4, 11 - lv) };
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
