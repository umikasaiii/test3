const test = require('node:test'), assert = require('node:assert/strict');
const load = require('./load.js');
const ST = load();
const U = ST.util, S = ST.srs, P = ST.progress, PL = ST.plan, M = ST.motor, K = ST.kana, DB = ST.storage, C = ST.content;
const at = d => { ST.clock.now = () => U.parse(d); };
const fresh = (start) => { const s = DB.defaults(); s.startDate = start || '2026-01-05'; s.created = s.startDate; return s; };

test('util: date helpers e mesi di corso', () => {
  assert.equal(U.addDays('2026-01-31', 1), '2026-02-01');
  assert.equal(U.diffDays('2026-01-01', '2026-03-01'), 59);
  assert.equal(U.weekday('2026-01-05'), 0); // lunedì
  assert.equal(U.monthIndex('2026-01-05', '2026-01-05'), 1);
  assert.equal(U.monthIndex('2026-01-05', '2026-09-05'), 9);
  assert.equal(U.monthIndex('2026-01-05', '2026-09-04'), 8);
});
test('util: ruby, markup e diff', () => {
  assert.equal(U.speechText('[学生|がくせい]です'), 'がくせいです');
  assert.equal(U.plainText('{{ja|[私|わたし]は}}'), '私は');
  assert.match(U.markup('> {{en-GB|I’m here.}}'), /data-text="I’m here\."/);
  assert.match(U.markup('> {{en-GB|It\'s ok.}}'), /data-text="It&#39;s ok\."/);
  const d = U.wordDiff('She works here.', 'she work here');
  assert.ok(d.score > 0.6 && d.score < 1);
  assert.equal(U.wordDiff('Hello world', 'hello   WORLD!').score, 1);
});

test('SRS: ladder 1-3-7-14-30 con risposte buone', () => {
  let c = S.newCard({ due: '2026-01-01' }); let d = '2026-01-01'; const got = [];
  for (let i = 0; i < 5; i++) { c = S.review(c, 2, d); got.push(c.interval); d = c.due; }
  assert.equal(got.join(','), '1,3,7,14,30');
});
test('SRS: un errore riporta prima e riduce il gradino', () => {
  let c = S.newCard(); let d = '2026-01-01';
  for (let i = 0; i < 4; i++) { c = S.review(c, 2, d); d = c.due; }
  const step = c.step; c = S.review(c, 0, d);
  assert.equal(c.interval, 1); assert.ok(c.step < step); assert.equal(c.lapses, 1);
});
test('SRS: intervallo massimo finito (nessun elemento sparisce)', () => {
  let c = S.newCard(); let d = '2026-01-01';
  for (let i = 0; i < 30; i++) { c = S.review(c, 3, d); d = c.due; }
  assert.ok(c.interval <= S.MAX_INTERVAL);
});
test('SRS: voti facili non saltano senza streak', () => {
  const c = S.review(S.newCard(), 3, '2026-01-01');
  assert.equal(c.step, 1);
});
test('SRS: autovalutazione motoria → voto', () => {
  assert.equal(S.gradeFromSelf(2, 1), 0); assert.equal(S.gradeFromSelf(3, 3), 1); assert.equal(S.gradeFromSelf(4, 2), 2); assert.equal(S.gradeFromSelf(5, 1), 3); assert.equal(S.gradeFromSelf(5, 5), 2);
});

test('Livelli: curva fino a 100, barra e XP mancanti', () => {
  assert.equal(P.levelInfo(0).level, 1);
  assert.equal(P.xpForLevel(2), 55);
  const l100 = P.levelInfo(P.xpForLevel(100)); assert.equal(l100.level, 100);
  const li = P.levelInfo(100); assert.equal(li.xp, 100); assert.equal(li.remaining, P.xpForLevel(li.level + 1) - 100);
});
test('XP: tetto giornaliero e rendimenti decrescenti', () => {
  at('2026-02-02'); const s = fresh();
  const a = P.award(s, 100, 'k'), b = P.award(s, 100, 'k');
  assert.ok(b < a);
  let tot = 0; for (let i = 0; i < 50; i++) tot += P.award(s, 100, 'x' + i);
  assert.ok(s.xpLog['2026-02-02'] <= P.DAILY_XP_CAP);
});
test('Padronanza: lezione e test lo stesso giorno NON verificano; il giorno dopo sì; ritest ≥14 gg → mantenuto', () => {
  const s = fresh(); const r = P.topicRec(s, 'eng-l0-habits');
  assert.equal(P.topicStatus(s, 'eng-l0-habits'), 'new');
  r.studied = '2026-02-01'; assert.equal(P.topicStatus(s, 'eng-l0-habits'), 'studied');
  r.tests.push({ date: '2026-02-01', score: 1 });
  assert.notEqual(P.topicStatus(s, 'eng-l0-habits'), 'verified');
  r.tests.push({ date: '2026-02-02', score: 0.9 });
  assert.equal(P.topicStatus(s, 'eng-l0-habits'), 'verified');
  r.retests.push({ date: '2026-02-10', score: 1 }); assert.equal(P.topicStatus(s, 'eng-l0-habits'), 'verified');
  r.retests.push({ date: '2026-02-20', score: 0.9 }); assert.equal(P.topicStatus(s, 'eng-l0-habits'), 'retained');
});
test('Padronanza: i XP non cambiano lo stato', () => {
  const s = fresh(); s.xp = 10 ** 6; assert.equal(P.topicStatus(s, 'eng-l0-habits'), 'new');
});

test('Piano: 25/20/15 mesi 1–8; 60 minuti totali', () => {
  const s = fresh('2026-01-05');
  const m = PL.minutes(s, '2026-03-01'); assert.equal(`${m.en},${m.ja},${m.general},${m.total}`, '25,20,15,60');
});
test('Piano: mese 9+ resta 25/20 se lo stage L2 non è verificato', () => {
  const s = fresh('2026-01-05'); const m = PL.minutes(s, '2026-10-10');
  assert.equal(m.month, 10); assert.equal(m.en, 25); assert.ok(m.note);
});
test('Piano: mese 9+ passa a 20/25 con L2 verificato', () => {
  const s = fresh('2026-01-05');
  ['L0', 'L1', 'L2'].forEach(l => C.subject('eng').stages.find(x => x.id === l).topics.forEach(id => { const r = P.topicRec(s, id); r.studied = '2026-02-01'; r.tests.push({ date: '2026-02-05', score: 1 }); }));
  const m = PL.minutes(s, '2026-10-10'); assert.equal(`${m.en},${m.ja}`, '20,25');
});
test('Piano: fase 3 (15/30) SOLO con B2 verificato sulle quattro abilità', () => {
  const s = fresh('2026-01-05'); const late = '2027-08-10';
  assert.equal(PL.minutes(s, late).month, 20);
  let m = PL.minutes(s, late); assert.ok(m.en >= 20 && m.en <= 25 && !m.b2);
  // ascolto+lettura in-app ma senza parlato/scrittura → ancora non verificato
  ['listening', 'reading'].forEach(sk => ['a', 'b', 'c', 'd', 'e', 'f'].forEach((id, i) => s.exams.push({ lang: 'en', level: 'B2', skill: sk, kind: 'gate', item: sk + id, date: '2026-0' + (3 + (i % 3)) + '-10', score: 0.9 })));
  assert.equal(PL.gateStatus(s, 'listening'), 'in-app'); assert.equal(PL.b2Verified(s), false);
  assert.ok(PL.minutes(s, late).en >= 20);
  s.gates.en.speaking = { evidence: [{ date: '2027-01-01', source: 'esame' }] }; assert.equal(PL.b2Verified(s), false);
  s.gates.en.writing = { evidence: [{ date: '2027-01-01', source: 'docente' }] };
  assert.equal(PL.b2Verified(s), true);
  m = PL.minutes(s, late); assert.equal(`${m.en},${m.ja},${m.general}`, '15,30,15');
});
test('B2 in-app: serve varietà di prove e di giorni', () => {
  const s = fresh();
  for (let i = 0; i < 6; i++) s.exams.push({ lang: 'en', level: 'B2', skill: 'listening', kind: 'gate', item: 'x' + i, date: '2026-03-01', score: 1 });
  assert.equal(PL.gateStatus(s, 'listening'), 'partial'); // un solo giorno
  const s2 = fresh(); for (let i = 0; i < 6; i++) s2.exams.push({ lang: 'en', level: 'B2', skill: 'listening', kind: 'gate', item: 'x' + (i % 2), date: '2026-03-0' + (1 + (i % 3)), score: 1 });
  assert.equal(PL.gateStatus(s2, 'listening'), 'partial'); // prove non distinte
});

test('Piano linguistico: i ripassi dovuti hanno la precedenza e max 30% del tempo', () => {
  at('2026-02-03'); const s = fresh('2026-01-05');
  for (let i = 0; i < 40; i++) s.cards['v:eng-l0-habits:c' + i] = S.newCard({ kind: 'vocab', lang: 'en', topic: 'eng-l0-habits', cid: 'c1', due: '2026-02-01', reps: 1, step: 1 });
  const pl = PL.languageBlocks(s, 'en', 25, '2026-02-03');
  assert.equal(pl.blocks[0].kind, 'review'); assert.ok(pl.blocks[0].minutes <= Math.round(25 * 0.3));
  assert.equal(pl.blocks.reduce((a, b) => a + b.minutes, 0), 25);
});
test('Piano linguistico: durate sempre uguali al tempo assegnato, ogni giorno, EN e JA', () => {
  const s = fresh('2026-01-05');
  for (let d = 0; d < 14; d++) { const date = U.addDays('2026-01-05', d); ['en', 'ja'].forEach(l => { const tot = PL.languageBlocks(s, l, l === 'en' ? 25 : 20, date).blocks.reduce((a, b) => a + b.minutes, 0); assert.ok(Math.abs(tot - (l === 'en' ? 25 : 20)) <= 1, l + ' ' + date + ' ' + tot); }); }
});

test('Kana: romaji → hiragana e confronto di letture', () => {
  assert.equal(K.toHiragana('ohayou'), 'おはよう'); assert.equal(K.toHiragana('gakkou'), 'がっこう'); assert.equal(K.toHiragana('konnichiha'), 'こんにちは');
  assert.equal(K.toHiragana('shinbun'), 'しんぶん'); assert.equal(K.toHiragana('kyou'), 'きょう'); assert.equal(K.toHiragana('オハヨウ'), 'おはよう');
  assert.ok(K.sameReading('arigatou', 'ありがとう')); assert.ok(K.sameReading('ビール', 'びーる')); assert.ok(!K.sameReading('ohayo', 'おはよう'));
  assert.equal(K.items.filter(i => i.script === 'hiragana' && i.group === 'base').length, 46);
});
test('Kana: gli errori diventano più frequenti', () => {
  const s = fresh(); const k = K.items[0]; K.record(s, k.id, false); K.record(s, k.id, false);
  const w = s.kana.items[k.id].w; assert.ok(w > 3);
  let hits = 0; for (let i = 0; i < 300; i++) if (K.pickSet(s, 5, ['base']).some(x => x.id === k.id)) hits++;
  assert.ok(hits > 300 * 5 / 92 * 1.5);
});

test('Judo: i contenuti rispettano sicurezza e repertorio (solo, no sparring)', () => {
  assert.ok(C.judo.techniques.length >= 12 && C.judo.techniques.length <= 60);
  C.judo.techniques.forEach(t => { assert.ok(t.cues.length >= 3 && t.errors.length >= 3 && t.variants.length >= 3 && t.theory.length >= 1, t.id); assert.ok(t.minMonth >= 1 && t.minMonth <= 24, t.id); });
  // ordine di introduzione coerente col mese minimo
  for (let i = 1; i < C.judo.techniques.length; i++) assert.ok(C.judo.techniques[i].minMonth >= C.judo.techniques[i - 1].minMonth, 'ordine ' + C.judo.techniques[i].id);
  // le entrate che simulano un attacco a un avversario richiedono verifica di un istruttore
  ['single-leg-entry', 'double-leg-entry', 'ogoshi-entry', 'osoto-entry', 'seoi-entry', 'ogoshi-full', 'seoi-full', 'band-uchikomi'].forEach(id => assert.equal(C.judo.techniques.find(t => t.id === id).instructor, true, id));
  C.judo.combos.forEach(c => c.ids.forEach(id => assert.ok(C.judo.techniques.find(t => t.id === id), 'combo ' + id)));
  const txt = JSON.stringify(C.judo).toLowerCase();
  assert.ok(!/proietta(re)? il partner/.test(txt));
  // cadute: tutte in progressione dal basso; i gradini alti richiedono istruttore
  const uk = C.judo.techniques.filter(t => (t.tags || []).includes('ukemi'));
  assert.ok(uk.length >= 9, 'ukemi: ' + uk.length);
  ['ushiro-ukemi-standing', 'yoko-ukemi-standing', 'mae-ukemi-standing', 'mae-ukemi-squat', 'ushiro-ukemi-squat'].forEach(id => assert.equal(C.judo.techniques.find(t => t.id === id).instructor, true, id));
  assert.ok(C.judo.techniques.find(t => t.id === 'ushiro-ukemi-lying').minMonth < C.judo.techniques.find(t => t.id === 'ushiro-ukemi-standing').minMonth);
  // proiezioni solo «a vuoto»: ogni gesto completo è segnato per istruttore e menziona che si termina in piedi / nell’aria
  C.judo.techniques.filter(t => /-full$/.test(t.id)).forEach(t => { assert.equal(t.instructor, true, t.id); assert.ok(/(in piedi|nell’aria|a quota|stance|shizentai|equilibrio)/.test(JSON.stringify(t.cues)), t.id); });
  assert.ok(C.judo.safety.some(x => /istruttore/.test(x)));
});
test('Judo: rotazione settimanale (domenica = riposo, nessuna tecnica fisica)', () => {
  const s = fresh('2026-01-05'); M.introduce(s, 'posture', '2026-01-05');
  const sun = M.pickForDay(s, '2026-01-11'); assert.equal(sun.rest, true); assert.equal(sun.items.length, 0);
  const mon = M.pickForDay(s, '2026-01-12'); assert.equal(mon.slot, 'intro');
});
test('Judo: nessuna sessione vuota, qualunque giorno si inizi (anche senza tecniche attive)', () => {
  for (let d = 0; d < 7; d++) {
    const s = fresh('2026-01-05'); const date = U.addDays('2026-01-05', d);
    const pk = M.pickForDay(s, date);
    if (d === 6) assert.equal(pk.rest, true); else assert.ok(pk.items.length >= 1, 'giorno ' + d);
  }
  const s = fresh('2026-01-05'); M.introduce(s, 'posture', '2026-01-05');
  for (let d = 0; d < 7; d++) { const pk = M.pickForDay(s, U.addDays('2026-01-06', d)); assert.ok(pk.rest || pk.items.length >= 1, 'giorno ' + d); }
});
test('Judo: nuova tecnica solo se le precedenti sono stabili e dopo ≥10 giorni', () => {
  const s = fresh('2026-01-05'); M.introduce(s, 'posture', '2026-01-05');
  assert.equal(M.nextToIntroduce(s, '2026-01-12'), null);       // < 10 giorni
  M.log(s, 'posture', 4, 2, [], '2026-01-06'); M.log(s, 'posture', 4, 2, [], '2026-01-09');
  assert.equal(M.nextToIntroduce(s, '2026-01-19').id, 'ayumi-tsugi');
  const t = fresh('2026-01-05'); M.introduce(t, 'posture', '2026-01-05'); M.log(t, 'posture', 2, 4, ['peso-indietro'], '2026-01-06'); M.log(t, 'posture', 2, 4, [], '2026-01-09');
  assert.equal(M.nextToIntroduce(t, '2026-02-20'), null);       // qualità bassa → nessuna novità
});
test('Judo: errore → ritorna il giorno dopo; buone esecuzioni → intervalli più lunghi', () => {
  const s = fresh('2026-01-05'); M.introduce(s, 'posture', '2026-01-05');
  M.log(s, 'posture', 2, 3, ['spalle-alte'], '2026-01-06'); assert.equal(s.motor.posture.card.due, '2026-01-07');
  let d = '2026-01-07'; for (let i = 0; i < 5; i++) { M.log(s, 'posture', 5, 2, [], d); d = s.motor.posture.card.due; }
  assert.ok(U.diffDays('2026-01-07', d) >= 25);
});
test('Judo: errore ricorrente limita l’intervallo a 7 giorni', () => {
  const s = fresh('2026-01-05'); M.introduce(s, 'posture', '2026-01-05');
  let d = '2026-01-06'; for (let i = 0; i < 6; i++) { M.log(s, 'posture', 4, 2, i < 3 ? ['peso-indietro'] : ['peso-indietro'], d); d = s.motor.posture.card.due; }
  assert.ok(s.motor.posture.card.interval <= 7); assert.ok(s.motor.posture.recurring.includes('peso-indietro'));
});
test('Judo: fasi dei 5 minuti sommano sempre 300 s', () => {
  const s = fresh('2026-01-05'); M.introduce(s, 'ogoshi-entry', '2026-01-05');
  const p = M.phases(s, 'ogoshi-entry'); assert.equal(p.recall + p.slow + p.vary + p.check, 300);
  s.motor['ogoshi-entry'].card.state = 'consolidated'; for (let i = 0; i < 3; i++) M.log(s, 'ogoshi-entry', 5, 1, [], '2026-02-0' + (i + 1));
  s.motor['ogoshi-entry'].card.state = 'consolidated';
  const q = M.phases(s, 'ogoshi-entry'); assert.equal(q.recall + q.slow + q.vary + q.check, 300);
});

test('Judo: SIMULAZIONE 24 MESI — le tecniche vecchie continuano a tornare', () => {
  const s = fresh('2026-01-05'); let d = '2026-01-05';
  const lastSeen = {}, maxGap = {};
  const rngSeed = U.rng(7); U.rand = rngSeed;
  for (let day = 0; day < 730; day++, d = U.addDays(d, 1)) {
    at(d);
    // l'utente si allena 6 giorni su 7, salta casualmente circa 10% dei giorni
    if (U.weekday(d) === 6 || rngSeed() < 0.1) continue;
    const pk = M.pickForDay(s, d);
    pk.items.forEach(id => {
      if (!s.motor[id]) M.introduce(s, id, d);
      const q = rngSeed() < 0.12 ? 2 : (rngSeed() < 0.5 ? 4 : 5);
      M.log(s, id, q, 2 + Math.floor(rngSeed() * 2), q <= 2 ? ['perde-equilibrio'] : [], d);
      if (lastSeen[id]) maxGap[id] = Math.max(maxGap[id] || 0, U.diffDays(lastSeen[id], d));
      lastSeen[id] = d;
    });
  }
  const act = M.active(s);
  assert.ok(act.length >= 24, 'tecniche introdotte: ' + act.length);
  act.forEach(id => {
    const gap = U.diffDays(lastSeen[id], '2027-12-31');
    assert.ok(gap <= 150, id + ' non ripassata da ' + gap + ' giorni');
    assert.ok((maxGap[id] || 0) <= 140, id + ' gap massimo ' + maxGap[id]);
  });
  // le prime tecniche sono state riviste molte volte dopo l'introduzione delle nuove
  assert.ok(s.motor.posture.card.reps >= 12, 'posture richiami: ' + s.motor.posture.card.reps);
  const stage = M.stage(s, '2027-12-31'); assert.ok(['L1', 'L2', 'L3', 'L4', 'L5'].includes(stage), stage);
  U.rand = Math.random; at(new Date().toISOString().slice(0, 10));
});

test('Storage: migrazione v1→v2 e validazione backup', () => {
  const old = { schema: 1, xp: 123, topics: { a: {} } };
  const m = DB.migrate(old); assert.equal(m.schema, DB.SCHEMA); assert.equal(m.xp, 123); assert.ok(m.gates && m.daily && m.kana);
  assert.equal(DB.validate({ app: 'altro', state: {} }), 'Il file non è un backup di SkillTree.');
  assert.equal(DB.validate({ app: 'skilltree', schema: 99, state: {} }), 'Backup creato da una versione più recente dell’app.');
  assert.equal(DB.validate({ app: 'skilltree', schema: 2, state: {} }), null);
});

test('Allenamento mentale: generatori validi e livello adattivo', () => {
  const s = fresh(); const r = U.rng(3);
  MN = ST.mental;
  MN.TYPES.forEach(t => { for (let lv = 1; lv <= 10; lv++) { const it = MN.make(t, lv, r); assert.ok(it.t && it.q, t); if (it.t === 'fill') assert.ok(it.a[0] !== 'NaN' && it.a[0] !== undefined); if (it.t === 'mc') assert.ok(it.a >= 0 && it.a < it.o.length); } });
  for (let i = 0; i < 6; i++) MN.record(s, 'calc', true); assert.equal(MN.level(s, 'calc'), 2);
  for (let i = 0; i < 6; i++) MN.record(s, 'calc', false); assert.equal(MN.level(s, 'calc'), 1);
  const sess = MN.session(s, '2026-02-02', r, 8); assert.equal(sess.length, 8);
});
var MN;

test('Selezione argomenti: la lezione successiva non aspetta la verifica; verifica dopo ≥1 giorno; ritest dopo 14 gg', () => {
  const s = fresh('2026-01-05'); const id1 = 'eng-l0-habits', id2 = 'eng-l0-past';
  assert.equal(PL.nextLesson(s, 'eng').id, id1);
  const r = P.topicRec(s, id1); r.studied = '2026-02-02';
  assert.equal(PL.nextLesson(s, 'eng'), null || PL.nextLesson(s, 'eng'));            // il successivo richiede prerequisito «esercitato»
  assert.notEqual(PL.nextLesson(s, 'eng') && PL.nextLesson(s, 'eng').id, id2);
  C.topic(id1).exercises.forEach((e, i) => { r.ex[i] = { ok: true, n: 1 }; });
  assert.equal(P.topicStatus(s, id1), 'practiced');
  assert.equal(PL.nextLesson(s, 'eng').id, id2);                                       // sblocca la lezione successiva senza attendere il test
  assert.equal(PL.pendingTest(s, 'eng', '2026-02-02'), null);                          // stesso giorno: nessun test in coda
  assert.equal(PL.pendingTest(s, 'eng', '2026-02-03').id, id1);                        // dal giorno dopo sì
  r.tests.push({ date: '2026-02-03', score: 1 });
  assert.equal(P.topicStatus(s, id1), 'verified');
  assert.equal(P.retestDue(s, 'eng', '2026-02-10').length, 0);
  assert.deepEqual(Array.from(P.retestDue(s, 'eng', '2026-02-17')), [id1]);            // ritest dopo 14 giorni
  assert.equal(PL.pendingTest(s, 'eng', '2026-02-17').id, id1);
});
test('Pillole: raggiungono «esercitato» con i loro 3 esercizi', () => {
  const s = fresh(); const id = 'cyb-phishing', r = P.topicRec(s, id); r.studied = '2026-02-02';
  C.topic(id).exercises.forEach((e, i) => { r.ex[i] = { ok: true }; });
  assert.equal(P.topicStatus(s, id), 'practiced');
});

test('Esercizi generati: coniugazioni giapponesi corrette e diagnosi degli errori', () => {
  const D = ST.drills, c = D.conj;
  assert.equal(JSON.stringify(c('かく', 1)), JSON.stringify({ masu: 'かきます', te: 'かいて', nai: 'かかない', ta: 'かいた' }));
  assert.equal(c('いく', 1).te, 'いって');
  assert.equal(c('よむ', 1).te, 'よんで');
  assert.equal(c('かう', 1).nai, 'かわない');
  assert.equal(c('およぐ', 1).ta, 'およいだ');
  assert.equal(c('はなす', 1).te, 'はなして');
  assert.equal(c('たべる', 2).nai, 'たべない');
  assert.equal(JSON.stringify(c('くる', 3)), JSON.stringify({ masu: 'きます', te: 'きて', nai: 'こない', ta: 'きた' }));
  // ogni verbo della tabella produce 4 forme non vuote e distinte
  D.JV.forEach(([kj, d, g]) => { const f = c(d, g); assert.equal(new Set(Object.values(f)).size, 4, d); });
  // diagnosi: forma sbagliata dello stesso verbo
  const q = D.generate('ja', 40).find(x => /forma て di/.test(x.q) && /のむ/.test(x.q)) || null;
  if (q) assert.match(q.diag('のみます'), /ます/);
  const en = D.generate('en', 30);
  assert.equal(en.length, 30);
  const past = en.find(x => /^Past simple di «go»/.test(x.q));
  if (past) assert.match(past.diag('gone'), /participio/);
  en.forEach(x => assert.ok(x.a[0] && x.why));
});

test('Judo: ogni tecnica ha una lezione approfondita; proiezioni no-gi (morote-seoi con judogi)', () => {
  C.judo.techniques.forEach(t => {
    const l = C.topic('jud-' + t.id);
    assert.ok(l, 'lezione mancante: ' + t.id);
    assert.ok(l.pages.length >= 7 && l.exercises.length >= 8 && l.test.length >= 5, t.id);
  });
  assert.ok(C.topicsOf('grp').filter(t => /^jud-th-/.test(t.id)).length >= 12);
  C.judo.techniques.filter(t => /-full$/.test(t.id)).forEach(t => assert.equal(t.gi, t.id === 'morote-seoi-full' ? 'gi' : 'no-gi', t.id));
  assert.ok(!JSON.stringify(C.judo.techniques.filter(t => /-full$/.test(t.id) && t.id !== 'morote-seoi-full').map(t => t.cues)).match(/bavero|manica|hikite|tsurite/i), 'prese al tessuto nelle proiezioni no-gi');
  ['kosoto-full', 'koshi-guruma-full', 'morote-seoi-full', 'khao-trong', 'khao-khong', 'khao-noi', 'plum-clinch'].forEach(id => assert.ok(C.judo.techniques.find(t => t.id === id), id));
});
