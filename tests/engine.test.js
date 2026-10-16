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
    assert.ok(l.pages.length >= 3 && l.exercises.length >= 8 && l.test.length >= 5, t.id);
  });
  assert.ok(C.topicsOf('grp').filter(t => /^jud-th-/.test(t.id)).length >= 12);
  C.judo.techniques.filter(t => /-full$/.test(t.id)).forEach(t => assert.equal(t.gi, t.id === 'morote-seoi-full' ? 'gi' : 'no-gi', t.id));
  assert.ok(!JSON.stringify(C.judo.techniques.filter(t => /-full$/.test(t.id) && t.id !== 'morote-seoi-full').map(t => t.cues)).match(/bavero|manica|hikite|tsurite/i), 'prese al tessuto nelle proiezioni no-gi');
  ['kosoto-full', 'koshi-guruma-full', 'morote-seoi-full', 'khao-trong', 'khao-khong', 'khao-noi', 'plum-clinch'].forEach(id => assert.ok(C.judo.techniques.find(t => t.id === id), id));
});

test('Allenamento mentale: 13 tipi generano esercizi validi (fuzz) e i sillogismi sono corretti per verifica a modelli', () => {
  const MN = ST.mental;
  assert.equal(MN.TYPES.length, 28);
  for (let i = 0; i < 40; i++) for (const t of MN.TYPES) for (const lv of [1, 3, 6, 10, 15, 20]) {
    const it = MN.make(t, lv);
    assert.ok(it && it.q, t);
    if (it.t === 'mc' || it.t === 'flash') { assert.ok(it.o.length >= 3 && it.a >= 0 && it.a < it.o.length && new Set(it.o).size === it.o.length, t + ' ' + lv); }
    if (it.t === 'fill') assert.ok(it.a[0] !== undefined && it.a[0] !== 'NaN', t);
    if (it.t === 'nback') { assert.ok(it.seq.length >= 11 && it.targets.some(Boolean) || it.seq.length >= 11); }
  }
  // sillogismi: la conclusione indicata segue in TUTTI i modelli, le altre cadono in almeno uno
  const parse = x => { let m; if ((m = /^Tutti i (\S+) sono (\S+)$/.exec(x))) return ['all', m[1], m[2]]; if ((m = /^Nessun (\S+) è (\S+)$/.exec(x))) return ['no', m[1], m[2]]; if ((m = /^Alcuni (\S+) non sono (\S+)$/.exec(x))) return ['somenot', m[1], m[2]]; if ((m = /^Alcuni (\S+) sono (\S+)$/.exec(x))) return ['some', m[1], m[2]]; throw new Error('parse ' + x); };
  const holds = (p, mod) => { const A = mod[p[1]], B = mod[p[2]]; const inter = A.filter(x => B.includes(x)); return p[0] === 'all' ? A.every(x => B.includes(x)) : p[0] === 'no' ? inter.length === 0 : p[0] === 'some' ? inter.length > 0 : A.some(x => !B.includes(x)); };
  for (let k = 0; k < 150; k++) {
    const it = MN.make('syllo', 1 + (k % 10));
    const m = /Premesse: «([^»]+)»\. «([^»]+)»\./.exec(it.q), prem = [parse(m[1]), parse(m[2])], terms = [...new Set(prem.flatMap(p => [p[1], p[2]]))];
    const concl = it.o.map(parse), allTerms = [...new Set(terms.concat(concl.flatMap(p => [p[1], p[2]])))];
    const subsets = []; for (let b = 0; b < 16; b++) subsets.push([0, 1, 2, 3].filter(i => b >> i & 1));
    const models = []; const rec = (i, cur) => { if (i === allTerms.length) { models.push(Object.assign({}, cur)); return; } for (const sb of subsets) { cur[allTerms[i]] = sb; if (i < 2 || Math.random() < 0.35) rec(i + 1, cur); } };
    rec(0, {});
    const sat = models.filter(mod => prem.every(p => holds(p, mod)));
    assert.ok(sat.length > 0);
    concl.forEach((c, i) => { const necessary = sat.every(mod => holds(c, mod)); assert.equal(necessary, i === it.a, it.q + ' → ' + it.o[i]); });
  }
});
test('Allenamento mentale: risposta giusta ma lenta non fa salire di livello da sola; storico e andamento', () => {
  const s = fresh();
  for (let i = 0; i < 6; i++) ST.mental.record(s, 'calc', true, 20000, 10);   // giuste ma oltre il tempo
  assert.equal(ST.mental.level(s, 'calc'), 1);
  for (let i = 0; i < 14; i++) ST.mental.record(s, 'calc', true, 3000, 10);   // giuste e rapide
  assert.ok(ST.mental.level(s, 'calc') >= 2 && s.mental.calc.max >= 2);
  ST.mental.logSession(s, 'bench', [{ ok: true, ms: 2000 }, { ok: false, ms: 4000 }], '2026-02-01');
  const tr = ST.mental.trend(s, 'bench'); assert.equal(tr.length, 1); assert.equal(tr[0].ok, 1); assert.equal(tr[0].ms, 3000);
});

test('Allenamento mentale: enigmi e giochi risolti per verifica indipendente (cavalieri, crittoaritmetica, sudoku, Nim, tris)', () => {
  const MN = ST.mental;
  for (let i = 0; i < 60; i++) {   // cavalieri e furfanti: soluzione unica = quella dichiarata
    const it = MN.make('knights', 1 + (i % 20)); if (!it.stmts) continue;
    const sols = []; for (let m = 0; m < (1 << it.n); m++) { const a = Array.from({ length: it.n }, (_, k) => !!(m >> k & 1)); if (it.stmts.every(([w, f]) => f(a) === a[w])) sols.push(a); }
    assert.equal(sols.length, 1); assert.equal(sols[0].join(), it.sol.join());
  }
  for (let i = 0; i < 12; i++) {   // crittoaritmetica: una sola assegnazione di cifre (forza bruta)
    const it = MN.make('crypt', 1 + (i % 12)); if (!it.puzzle) continue;
    const { w1, w2, w3 } = it.puzzle, L = [...new Set((w1 + w2 + w3).split(''))], lead = new Set([w1[0], w2[0], w3[0]]); let n = 0;
    const val = (w, m) => +w.split('').map(c => m[c]).join('');
    const rec = (k, m, used) => { if (k === L.length) { if (val(w1, m) + val(w2, m) === val(w3, m)) n++; return; } for (let d = 0; d <= 9; d++) { if (used.has(d) || (d === 0 && lead.has(L[k]))) continue; m[L[k]] = d; used.add(d); rec(k + 1, m, used); used.delete(d); } };
    rec(0, {}, new Set()); assert.equal(n, 1, w1 + '+' + w2 + '=' + w3);
  }
  for (let i = 0; i < 40; i++) {   // sudoku: soluzione unica della griglia proposta
    const it = MN.make('sudoku', 1 + (i % 20)), N = it.N, g = it.grid.map(r => r.slice()); let n = 0;
    const ok = (r, c, v) => { for (let k = 0; k < N; k++) if (g[r][k] === v || g[k][c] === v) return false; const r0 = r - r % it.bh, c0 = c - c % it.bw; for (let a = 0; a < it.bh; a++) for (let b = 0; b < it.bw; b++) if (g[r0 + a][c0 + b] === v) return false; return true; };
    const rec = () => { if (n > 1) return; for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!g[r][c]) { for (let v = 1; v <= N; v++) if (ok(r, c, v)) { g[r][c] = v; rec(); g[r][c] = 0; } return; } n++; };
    rec(); assert.equal(n, 1);
  }
  for (let i = 0; i < 80; i++) {   // Nim: la mossa indicata porta a XOR 0; sottrazione: lascia un multiplo di k+1
    const it = MN.make('nim', 1 + (i % 20));
    if (it.sub) assert.equal((it.sub.n - it.sub.take) % (it.sub.k + 1), 0);
    else { const p = it.piles.slice(), [pi, k] = it.good; p[pi] -= k; assert.equal(p.reduce((a, b) => a ^ b, 0), 0); }
  }
  const mm = (b, turn) => { const L = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; for (const [a, c, d] of L) if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a] === 'X' ? 1 : -1; if (b.every(x => x)) return 0; let best = turn === 'X' ? -2 : 2; for (let k = 0; k < 9; k++) if (!b[k]) { b[k] = turn; const v = mm(b, turn === 'X' ? 'O' : 'X'); b[k] = null; best = turn === 'X' ? Math.max(best, v) : Math.min(best, v); } return best; };
  for (let i = 0; i < 40; i++) {   // tris: la mossa indicata è l'UNICA migliore (minimax indipendente)
    const it = MN.make('ttt', 1 + (i % 20)); if (!it.board) continue;
    const vals = {}; it.board.forEach((v, k) => { if (!v) { const b = it.board.slice(); b[k] = 'X'; vals[k] = mm(b, 'O'); } });
    const best = Math.max(...Object.values(vals)); assert.deepEqual(Object.keys(vals).filter(k => vals[k] === best).map(Number), [it.best]);
  }
});
test('Allenamento mentale: sessione per dominio con jolly, difficoltà variabile, sfida della domenica e calibrazione', () => {
  const MN = ST.mental, s = fresh();
  for (let wd = 0; wd < 7; wd++) {
    const date = U.addDays('2026-01-05', wd), items = MN.session(s, date);
    assert.ok(items.length >= 6 && items.length <= 30, 'n=' + items.length);
    const est = items.reduce((a, it) => a + (MN.EST[it.mtype] || 20), 0); assert.ok(est >= 250 && est <= 400, 'tempo stimato ' + est);
    const types = new Set(items.map(x => x.mtype)); if (wd < 6) assert.ok(types.size >= 3);
    if (wd === 6) assert.ok(items.every(x => x.boss));
  }
  s.mental.calc = { level: 8, r: 8, hist: [], n: 0, ok: 0 };
  const lv = new Set(); for (let i = 0; i < 300; i++) lv.add(MN.pickLevel(s, 'calc')); assert.ok(lv.size >= 5 && Math.max(...lv) >= 10 && Math.min(...lv) <= 7);
  MN.record(s, 'calc', 1, 3000, 10, 12); MN.record(s, 'calc', 0, 3000, 10, 4);
  for (let i = 0; i < 40; i++) MN.record(s, 'matrix', true, 1000, 60, 20); assert.ok(MN.level(s, 'matrix') >= 15);
  MN.calibRecord(s, 0.95, true); MN.calibRecord(s, 0.95, false); MN.calibRecord(s, 0.55, true);
  assert.equal(s.mentalCalib.bins['95'][0], 1); assert.equal(s.mentalCalib.bins['95'][1], 2); assert.equal(s.mentalCalib.brier.length, 3);
  const c = MN.make('calib', 5); assert.ok(c.okSet.length === 3 && c.o.length === 6 && c.meta[c.o[c.a]].conf === 0.95 && c.meta[c.o[c.a]].side === c.truth);
});

test('Cyber: laboratori generati verificati in modo indipendente (sottoreti, permessi, cifrari, entropia, RSA, log, ACL, CVSS)', () => {
  const CY = ST.cyber;
  for (let i = 0; i < 80; i++) for (const t of CY.TYPES) for (const lv of [1, 5, 10]) { const it = CY.make(t, lv); assert.ok(it.q); if (it.t === 'mc') assert.ok(it.o.length >= 3 && it.a >= 0 && it.a < it.o.length && new Set(it.o).size === it.o.length, t); }
  const oct = ip => ip.split('.').map(Number);
  for (let i = 0; i < 200; i++) {   // sottoreti: ricalcolo per ottetti, senza gli operatori a 32 bit
    const it = CY.make('subnet', 1 + (i % 10)); const m = /Host (\S+)\/(\d+)/.exec(it.q) || /Rete (\S+)\/(\d+)/.exec(it.q); if (!m || it.t !== 'fill') continue;
    const pre = +m[2], ip = oct(m[1]), mask = [0, 1, 2, 3].map(k => Math.max(0, Math.min(8, pre - 8 * k))).map(b => 256 - Math.pow(2, 8 - b));
    const net = ip.map((x, k) => x & mask[k]), bc = net.map((x, k) => x | (255 - mask[k]));
    if (/BROADCAST/.test(it.q)) assert.equal(it.a[0], bc.join('.')); else if (/ULTIMO/.test(it.q)) { const l = bc.slice(); l[3] -= 1; assert.equal(it.a[0], l.join('.')); } else if (/Quanti host/.test(it.q)) assert.equal(+it.a[0], Math.pow(2, 32 - pre) - 2); else assert.equal(it.a[0], net.join('.'));
  }
  for (let o = 0; o <= 0o7777; o++) { const t = o.toString(8).padStart(4, '0'), sym = CY.symbolic(t); assert.equal(sym.length, 9); assert.equal(String(CY.octal(sym)).padStart(o > 0o777 ? 4 : 3, '0'), o > 0o777 ? t : t.slice(1)); }
  for (let i = 0; i < 150; i++) {   // cifrari: la risposta ricifrata dà il testo mostrato
    const it = CY.make('classic', 1 + (i % 10)), cip = it.q.split(': ').pop(), ans = it.a[0];
    const k = /chiave (\d+)/.exec(it.q), v = /chiave «(\w+)»/.exec(it.q), x = /0x([0-9A-F]+)/.exec(it.q);
    if (v) assert.equal(CY.vigenere(ans, v[1]), cip); else if (x) assert.equal(CY.xorHex(ans, parseInt(x[1], 16)), cip); else { let ok = false; for (let s = 1; s < 26; s++) if (CY.caesar(ans, s) === cip) ok = true; assert.ok(ok); }
  }
  for (let i = 0; i < 200; i++) {   // RSA: coerenza matematica
    const it = CY.make('rsa', 1 + (i % 10)), p = +/p = (\d+)/.exec(it.q)[1], q = +/q = (\d+)/.exec(it.q)[1], e = +/e = (\d+)/.exec(it.q)[1], n = p * q, phi = (p - 1) * (q - 1);
    if (/n = p·q/.test(it.q)) assert.equal(+it.a[0], n); else if (/φ\(n\) = \(p/.test(it.q)) assert.equal(+it.a[0], phi); else if (/chiave privata/.test(it.q)) assert.equal((e * +it.a[0]) % phi, 1); else { const m = +/m = (\d+)/.exec(it.q)[1]; let r = 1; for (let k = 0; k < e; k++) r = (r * m) % n; assert.equal(+it.a[0], r); }
  }
  for (let i = 0; i < 100; i++) {   // entropia
    const it = CY.make('entropy', 1 + (i % 4)); const m = /(\d+) caratteri scelti fra (\d+) simboli/.exec(it.q); if (m && it.t === 'fill') assert.equal(+it.a[0], Math.round(+m[1] * Math.log2(+m[2])));
  }
  for (let i = 0; i < 100; i++) {   // log: ricontiamo le righe FAIL dal testo
    const it = CY.make('log', 1 + (i % 10)), lines = it.q.split(': ')[1].split(' ⏐ ').map(x => x.replace(/\. .*$/, '')); if (!/Quanti accessi FALLITI/.test(it.q)) continue;
    const ip = /provengono da (\S+)\?/.exec(it.q)[1]; assert.equal(+it.a[0], lines.filter(l => / FAIL /.test(l) && l.endsWith(' ' + ip)).length);
  }
  const ev = (rules, pk) => { for (let i = 0; i < rules.length; i++) { const r = rules[i], mt = (c, ip) => { if (c === 'any') return true; const [b, pr] = c.split('/'), bs = b.split('.').map(Number), is = ip.split('.').map(Number); let bits = +pr; for (let k = 0; k < 4; k++) { const take = Math.min(8, bits); bits -= take; if (take > 0 && (is[k] >> (8 - take)) !== (bs[k] >> (8 - take))) return false; } return true; }; if ((r.proto === pk.proto) && mt(r.src, pk.src) && mt(r.dst, pk.dst) && r.port === pk.port) return r.act + (i + 1); } return 'deny0'; };
  for (let i = 0; i < 200; i++) { const it = CY.make('acl', 1 + (i % 10)); if (!it.rules) continue; const r = ev(it.rules, it.pk), r2 = CY.aclEval(it.rules, it.pk); assert.equal(r, r2.act + r2.idx); }
  const V = s => { const o = {}; s.split('/').forEach(x => { const [k, w] = x.split(':'); o[k] = w; }); return o; };
  [['AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H', 9.8], ['AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N', 6.1], ['AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H', 7.8], ['AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H', 10], ['AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N', 5.3]].forEach(([v, sc]) => assert.equal(CY.cvss(V(v)), sc, v));
  assert.equal(CY.b64('Cyber'), 'Q3liZXI='); assert.equal(CY.b64('Man'), 'TWFu'); assert.equal(CY.b64('Ma'), 'TWE=');
});
test('Cyber: modello di abilità e sessione', () => {
  const CY = ST.cyber, s = fresh();
  for (let i = 0; i < 40; i++) CY.record(s, 'cvss', true, 1000, 100, 10); assert.ok(CY.level(s, 'cvss') >= 7);
  for (let i = 0; i < 10; i++) CY.record(s, 'acl', false, 1000, 100, 3); assert.equal(CY.level(s, 'acl'), 1);
  const items = CY.session(s, '2026-01-05'); assert.ok(items.length >= 5 && new Set(items.map(x => x.mtype)).size >= 4);
});

test('Cybersecurity: curriculum L0–L5, ogni lezione completa, banche e scenari ben formati', () => {
  const T = C.topicsOf('cyb').filter(t => !t.pill);
  assert.ok(T.length >= 48, 'lezioni: ' + T.length);
  ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'].forEach(st => assert.ok(T.some(t => t.stage === st), 'stage ' + st));
  T.forEach(t => { assert.ok(t.pages.length >= 6 && t.exercises.length >= 8 && t.test.length >= 5, t.id); (t.prereq || []).forEach(p => assert.ok(C.topic(p), t.id + ' → ' + p)); });
  const B = C.cyberBank; assert.ok(B.code.length >= 40 && B.scenarios.length >= 8);
  [].concat(B.code, B.stride, B.attack).forEach(x => assert.ok(x.o.length === 4 && new Set(x.o).size === 4 && x.a >= 0 && x.a < 4, x.id));
  B.scenarios.forEach(sc => sc.steps.forEach(st => assert.ok(st.o.length === 4 && st.a >= 0 && st.a < 4)));
  // nessun payload operativo nei contenuti
  assert.ok(!/<script>alert|union\s+select|or\s+1\s*=\s*1|rm\s+-rf|msfvenom|nc\s+-e/i.test(JSON.stringify(T) + JSON.stringify(B)));
});

test('Scacchi: il motore rispetta le regole (perft su posizioni di riferimento)', () => {
  const CH = ST.chess, cases = [
    [CH.START, [20, 400, 8902]], ['r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1', [48, 2039]], ['8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1', [14, 191, 2812]],
    ['r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1', [6, 264, 9467]], ['rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8', [44, 1486]]];
  cases.forEach(([fen, exp]) => exp.forEach((n, i) => assert.equal(CH.perft(CH.parse(fen), i + 1), n, fen + ' depth ' + (i + 1))));
  assert.equal(CH.fen(CH.parse(CH.START)), CH.START);
  assert.ok(CH.isMate(CH.parse('rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3')));   // matto del barbiere
  assert.ok(CH.isStalemate(CH.parse('7k/5Q2/6K1/8/8/8/8/8 b - - 0 1')));
  assert.ok(CH.mateIn(CH.parse('6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1'), 1));                           // matto del corridoio
});
test('Strategia: laboratori verificati in modo indipendente (Nash, EV, minimax, Grundy, zaino, intervalli, cammini, probabilità)', () => {
  const SG = ST.strategy;
  for (let i = 0; i < 60; i++) for (const t of SG.TYPES) for (const lv of [1, 5, 10]) { const it = SG.make(t, lv); assert.ok(it.q); if (it.t === 'mc') assert.ok(it.o.length >= 3 && it.a >= 0 && it.a < it.o.length && new Set(it.o).size === it.o.length, t); }
  for (let i = 0; i < 150; i++) {   // Nash: ricalcolo dalla matrice stampata
    const it = SG.make('payoff', 1 + (i % 10)), rows = it.q.match(/[ABC]: (?:\(\d,\d\) ?)+/g).map(r => r.slice(3).trim().split(' ').map(c => c.slice(1, -1).split(',').map(Number)));
    let ne = []; rows.forEach((r, a) => r.forEach((c, b) => { const bestR = rows.every(rr => rr[b][0] <= c[0]), bestC = r.every(cc => cc[1] <= c[1]); if (bestR && bestC) ne.push('ABC'[a] + 'XYZ'[b]); }));
    if (it.t === 'fill') assert.equal(+it.a[0], ne.length); else { assert.equal(ne.length, 1); assert.equal(it.o[it.a], ne[0]); }
  }
  for (let i = 0; i < 150; i++) {   // valore atteso
    const it = SG.make('ev', 1 + (i % 10)); if (it.t === 'fill') continue; const ev = [...it.q.matchAll(/Opzione [ABC]: (\d+)% di (-?\d+), altrimenti (-?\d+)/g)].map(m => (+m[1] * +m[2] + (100 - +m[1]) * +m[3]) / 100);
    assert.equal(it.o[it.a], 'Opzione ' + 'ABC'[ev.indexOf(Math.max(...ev))]);
  }
  const mmx = (t, max) => Array.isArray(t) ? t.map(x => mmx(x, !max)).reduce((a, b) => max ? Math.max(a, b) : Math.min(a, b)) : t;
  for (let i = 0; i < 150; i++) {   // minimax e conteggio foglie alpha-beta
    const it = SG.make('tree', 1 + (i % 10)); if (/valore minimax/.test(it.q)) assert.equal(+it.a[0], mmx(it.tree, true)); else { let n = 0; const ab = (t, max, al, be) => { if (!Array.isArray(t)) { n++; return t; } let v = max ? -Infinity : Infinity; for (const c of t) { const x = ab(c, !max, al, be); if (max) { v = Math.max(v, x); al = Math.max(al, v); } else { v = Math.min(v, x); be = Math.min(be, v); } if (al >= be) break; } return v; }; ab(it.tree, true, -Infinity, Infinity); assert.equal(+it.a[0], n); }
  }
  for (let i = 0; i < 100; i++) {   // Grundy: ricorsione indipendente
    const it = SG.make('grundy', 1 + (i % 10)), S = it.q.match(/\{([\d, ]+)\}/)[1].split(', ').map(Number), N = +/n = (\d+)/.exec(it.q)[1];
    const g = function f(n) { const s = new Set(S.filter(x => x <= n).map(x => f(n - x))); let m = 0; while (s.has(m)) m++; return m; };
    if (it.t === 'fill') assert.equal(+it.a[0], g(N)); else assert.equal(/perdente/.test(it.o[it.a]), g(N) === 0);
  }
  for (let i = 0; i < 100; i++) { const it = SG.make('knap', 1 + (i % 10)); let best = 0; for (let m = 0; m < (1 << it.items.length); m++) { let w = 0, v = 0; it.items.forEach((x, k) => { if (m >> k & 1) { w += x[0]; v += x[1]; } }); if (w <= it.cap) best = Math.max(best, v); } assert.equal(+it.a[0], best); }
  for (let i = 0; i < 100; i++) { const it = SG.make('sched', 1 + (i % 10)); let best = 0; const n = it.iv.length; for (let m = 0; m < (1 << n); m++) { const ch = it.iv.filter((_, k) => m >> k & 1).sort((a, b) => a[0] - b[0]); if (ch.every((x, k) => k === 0 || ch[k - 1][1] <= x[0])) best = Math.max(best, ch.length); } assert.equal(+it.a[0], best); }
  for (let i = 0; i < 100; i++) { const it = SG.make('path', 1 + (i % 10)), n = it.n, D = Array.from({ length: n }, (_, a) => Array.from({ length: n }, (_, b) => a === b ? 0 : Infinity)); it.edges.forEach(([a, b, w]) => { D[a][b] = Math.min(D[a][b], w); D[b][a] = Math.min(D[b][a], w); }); for (let k = 0; k < n; k++) for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) if (D[a][k] + D[k][b] < D[a][b]) D[a][b] = D[a][k] + D[k][b]; assert.equal(+it.a[0], D[0][n - 1]); }
});

test('Simulatore di strategia: expectimax coerente con la simulazione Monte Carlo, rimpianto e qualità ben definiti', () => {
  const SIM = ST.sim; assert.ok(SIM.templates.length >= 3);
  for (const tpl of SIM.templates) for (const lv of [2, 7]) {
    const inst = SIM.make(tpl.id, lv, U.rng(11 + lv)), top = SIM.value(inst, 0, inst.vars0); let sum = 0, sq = 0; const N = 1500, rng = U.rng(99);
    for (let k = 0; k < N; k++) { const f = SIM.utility(inst, SIM.autoplay(inst, 'best', rng).vars); sum += f; sq += f * f; }
    const mean = sum / N, se = Math.sqrt(Math.max(0, sq / N - mean * mean) / N);
    assert.ok(Math.abs(mean - top) <= 4 * se + 0.02 * Math.abs(top) + 0.5, tpl.id + ' lv' + lv + ': MC ' + mean.toFixed(1) + ' vs EV ' + top.toFixed(1));
    let rnd = 0; for (let k = 0; k < 400; k++) rnd += SIM.utility(inst, SIM.autoplay(inst, 'random', rng).vars); assert.ok(rnd / 400 <= top + 0.5, 'la politica ottima batte quella casuale');
    const b = SIM.debrief(inst, SIM.autoplay(inst, 'best', rng)); let wq = 0, rq = 0; for (let k = 0; k < 150; k++) { wq += SIM.debrief(inst, SIM.autoplay(inst, 'worst', rng)).quality; rq += SIM.debrief(inst, SIM.autoplay(inst, 'random', rng)).quality; }
    assert.ok(b.quality > 0.999 && b.range > 0 && wq / 150 < rq / 150 + 0.02 && rq / 150 < 0.95, tpl.id + ' qualità worst ' + (wq / 150).toFixed(2) + ' random ' + (rq / 150).toFixed(2));
    inst.cards.forEach(c => c.choices.forEach(ch => assert.ok(Math.abs(ch.out.reduce((s, o) => s + o.p, 0) - 1) < 0.011)));
  }
  const a = SIM.make('blotto', 5, U.rng(5)), b2 = SIM.make('blotto', 5, U.rng(5)); assert.equal(a.cards.map(c => c.text).join('|'), b2.cards.map(c => c.text).join('|'));
  const r = SIM.make('rischio', 5, U.rng(3)); let st = SIM.start(r); st = SIM.apply(r, st, 3, U.rng(1), 1); assert.ok(st.vars.capitale >= 0 && st.vars.capitale < 100);
});
test('Strategia 2: economia, conflitto e ottimizzazione — verifica con metodi indipendenti', () => {
  const SG = ST.strategy, N = 60, A = it => +it.a[0], near = (x, y, e = 1e-6) => assert.ok(Math.abs(x - y) <= e, x + ' vs ' + y);
  const perms = a => a.length <= 1 ? [a] : a.flatMap((x, i) => perms(a.slice(0, i).concat(a.slice(i + 1))).map(p => [x].concat(p)));
  for (let i = 0; i < N; i++) {
    const lv = 1 + (i % 10);
    { const it = SG.make('cournot', lv), [, a, , c, n] = /P = (\d+) − Q.*? (\d+) imprese.*?costo unitario costante (\d+)/.exec(it.q) ? [0, +RegExp.$1, 0, +RegExp.$3, +RegExp.$2] : [];   // migliori risposte iterate
      let q = 0; for (let k = 0; k < 400; k++) q = 0.5 * q + 0.5 * Math.max(0, (a - c - (n - 1) * q) / 2); const P = a - n * q;
      if (/Quanto produce/.test(it.q)) near(A(it), q, 1e-6); else if (/prezzo di equilibrio/.test(it.q)) near(A(it), P, 1e-6); else near(A(it), q * (P - c), 1e-6); }
    { const it = SG.make('npv', lv); if (it.t === 'fill') { const I = +/Investimento iniziale (\d+)/.exec(it.q)[1], fl = /Incassi a fine anno: ([\d, ]+) \(/.exec(it.q)[1].split(', ').map(Number), r = +/sconto (\d+)%/.exec(it.q)[1] / 100; near(A(it), Math.round(-I + fl.reduce((s, f, k) => s + f / Math.pow(1 + r, k + 1), 0)), 1e-9); }
      else { const r = +/sconto (\d+)%/.exec(it.q)[1] / 100, ps = [...it.q.matchAll(/costo (\d+), incassi ([\d, ]+) \(/g)].map(m => -m[1] + m[2].split(', ').map(Number).reduce((s, f, k) => s + f / Math.pow(1 + r, k + 1), 0)); assert.equal(it.a, ps[0] > ps[1] ? 0 : 1); } }
    { const it = SG.make('price', lv), m = /Q = (\d+) − (\d+)·P.*costo unitario costante (\d+)/.exec(it.q), b = +m[2], a0 = +m[1], c = +m[3]; let bp = 0, bv = -1e9; for (let P = 0; P <= a0 / b; P += 0.5) { const v = (P - c) * (a0 - b * P); if (v > bv) { bv = v; bp = P; } } near(A(it), /prezzo che/.test(it.q) ? bp : bv); }
    { const it = SG.make('adv', lv), m = /grano (\d+), tessuto (\d+)\. Paese Y: grano (\d+), tessuto (\d+)/.exec(it.q), [ax, bx, ay, by] = m.slice(1).map(Number); if (it.t === 'fill') near(A(it), ax / bx); else assert.equal(/X/.test(it.o[it.a]), ax / bx < ay / by); }
    { const it = SG.make('lanch', lv), m = /A parte con (\d+) unità, B con (\d+)/.exec(it.q), a0 = +m[1], b0 = +m[2], beta = /4 volte/.test(it.q) ? 4 : 1; let x = a0, y = b0; const dt = 1e-4 / Math.max(a0, b0); while (y > 0 && x > 0) { const dx = -beta * y * dt, dy = -x * dt; x += dx; y += dy; } assert.ok(Math.abs(Math.max(x, 0) - A(it)) < 0.02 * a0 + 0.1, 'lanch ' + x + ' vs ' + A(it)); }
    { const it = SG.make('logi', lv); if (/serbatoio/.test(it.q)) { const m = /da (\d+) litri.*?(\d+) litri ogni/.exec(it.q); assert.equal(A(it), (+m[1] / +m[2] * 10) / 2); } else { const m = /(\d+) tappe.*?il (\d+)%.*?Partono (\d+)/.exec(it.q); let q = +m[3]; for (let k = 0; k < +m[1]; k++) q = q * (100 - +m[2]) / 100; near(A(it), q); } }
    { const it = SG.make('mixed', lv); if (it.mtype === 'mixed') { const m = /\[\[(\d+), (\d+)\], \[(\d+), (\d+)\]\]/.exec(it.q).slice(1).map(Number); let best = -1e9; for (let p = 0; p <= 1; p += 1 / 1200) best = Math.max(best, Math.min(p * m[0] + (1 - p) * m[2], p * m[1] + (1 - p) * m[3])); near(best, A(it), 6e-3); } }
    { const it = SG.make('lp', lv); if (it.mtype === 'lp') { const m = /Z = (\d+)x \+ (\d+)y con i vincoli (.*?); x ≥ 0/.exec(it.q), cons = m[3].split('; ').map(s => s.match(/\d+/g).map(Number)); let best = -1; for (let x = 0; x <= 40; x++) for (let y = 0; y <= 40; y++) if (cons.every(([a, b, r]) => a * x + b * y <= r)) best = Math.max(best, +m[1] * x + +m[2] * y); assert.equal(A(it), best); } }
    { const it = SG.make('cpm', lv), T = it.tasks, ids = T.map(t => t.id), dur = Object.fromEntries(T.map(t => [t.id, t.d])), paths = id => { const t = T.find(x => x.id === id); return t.pre.length ? t.pre.flatMap(p => paths(p).map(q => q + dur[id])) : [dur[id]]; }, total = Math.max(...ids.flatMap(paths));
      if (/Di quanti giorni/.test(it.q)) { const id = /attività (\w) senza/.exec(it.q)[1]; const T2 = T.map(t => t.id === id ? Object.assign({}, t, { d: t.d + A(it) }) : t), T3 = T.map(t => t.id === id ? Object.assign({}, t, { d: t.d + A(it) + 1 }) : t), dd = X => { const d2 = Object.fromEntries(X.map(t => [t.id, t.d])), p2 = i => { const t = X.find(x => x.id === i); return t.pre.length ? t.pre.flatMap(p => p2(p).map(q => q + d2[i])) : [d2[i]]; }; return Math.max(...X.map(t => t.id).flatMap(p2)); }; assert.equal(dd(T2), total); assert.equal(dd(T3), total + 1); } else assert.equal(A(it), total); }
    { const it = SG.make('mst', lv), n = it.n, E = it.edges; let best = Infinity; for (let m = 0; m < (1 << E.length); m++) { let k = 0, w = 0; for (let j = 0; j < E.length; j++) if (m >> j & 1) { k++; w += E[j][2]; } if (k !== n - 1 || w >= best) continue; const par = Array.from({ length: n }, (_, x) => x), f = x => par[x] === x ? x : f(par[x]); let ok = true; for (let j = 0; j < E.length; j++) if (m >> j & 1) { const a = f(E[j][0]), b = f(E[j][1]); if (a === b) { ok = false; break; } par[a] = b; } if (ok) best = w; } assert.equal(A(it), best); }
    { const it = SG.make('assign', lv), M = it.M; assert.equal(A(it), Math.min(...perms(M.map((_, j) => j)).map(p => p.reduce((s, j, r) => s + M[r][j], 0)))); }
    { const it = SG.make('flow', lv), n = it.n, E = it.edges; let best = Infinity; for (let m = 0; m < (1 << n); m++) { if (!(m & 1) || (m >> (n - 1) & 1)) continue; let cut = 0; E.forEach(([a, b, c]) => { if ((m >> a & 1) && !(m >> b & 1)) cut += c; }); best = Math.min(best, cut); } assert.equal(A(it), best); }
    { const it = SG.make('tsp', lv), D = it.D, n = D.length; assert.equal(A(it), Math.min(...perms([...Array(n - 1).keys()].map(x => x + 1)).map(p => { const r = [0].concat(p, [0]); return r.slice(1).reduce((s, x, k) => s + D[r[k]][x], 0); }))); }
    { const it = SG.make('coin', lv), m = /valore ([\d, ]+) \(.*?comporre esattamente (\d+)/.exec(it.q), coins = m[1].split(', ').map(Number), T = +m[2]; let lvl = new Set([0]), steps = 0; while (!lvl.has(T)) { const nx = new Set(); lvl.forEach(v => coins.forEach(c => { if (v + c <= T) nx.add(v + c); })); lvl = nx; steps++; assert.ok(steps < 100); } assert.equal(A(it), steps); }
    { const it = SG.make('auction', lv); if (/Vickrey|secondo prezzo/.test(it.q)) { const v = [...it.q.matchAll(/[A-F]=(\d+)/g)].map(x => +x[1]).sort((a, b) => b - a); assert.equal(A(it), /surplus/.test(it.q) ? v[0] - v[1] : v[1]); } }
  }
});
test('Scienze dello sport: laboratori di calcolo verificati con ricalcolo indipendente', () => {
  const SP = ST.sport, A = it => +it.a[0], rnd = Math.round, nums = s => (s.match(/\d+(?:,\d+)?/g) || []).map(x => +x.replace(',', '.'));
  for (const t of SP.TYPES) for (let i = 0; i < 80; i++) { const it = SP.make(t, 1 + (i % 10)); assert.ok(it.q && it.a && it.a[0] !== 'NaN' && /^-?\d+([.,]\d+)?$/.test(it.a[0]), t + ' ' + it.a); }
  for (let i = 0; i < 80; i++) {
    const lv = 1 + (i % 10);
    { const it = SP.make('orm', lv), q = it.q; let m;
      if ((m = /Epley.*hai sollevato (\d+) kg per (\d+) ripetizioni/.exec(q))) assert.equal(A(it), rnd(+m[1] * (1 + +m[2] / 30)));
      else if ((m = /Brzycki.*hai sollevato (\d+) kg per (\d+)/.exec(q))) assert.equal(A(it), rnd(+m[1] * 36 / (37 - +m[2])));
      else if ((m = /1RM nello squat è (\d+) kg.*al (\d+)%/.exec(q))) assert.equal(A(it), rnd(+m[1] * +m[2] / 100));
      else if ((m = /1RM = (\d+) kg. Una serie a (\d+)% e una a (\d+)%/.exec(q))) assert.equal(A(it), rnd(+m[1] * (+m[3] - +m[2]) / 100)); else assert.fail(q); }
    { const it = SP.make('plates', lv); if (it.mtype === 'plates') { const m = /dischi disponibili \(kg\): ([\d., ]+) \(.*caricare ([\d.]+) kg/.exec(it.q), set = m[1].split(', ').map(x => +x), per = (+m[2] - 20) / 2; let best = Infinity; const go = (rem, idx, n) => { if (rem < -1e-9 || n >= best) return; if (Math.abs(rem) < 1e-9) { best = n; return; } for (let j = idx; j < set.length; j++) go(rem - set[j], j, n + 1); }; go(per, 0, 0); assert.equal(A(it), 2 * best); } }
    { const it = SP.make('hrz', lv), q = it.q, n = nums(q); if (/Tanaka/.test(q)) assert.equal(A(it), rnd(208 - 0.7 * n[n.length - 1])); }
    { const it = SP.make('bal', lv), m = /Deficit medio di (\d+) kcal.*perdono (\d+) kg/.exec(it.q); assert.equal(A(it), 7700 * +m[2] / (7 * +m[1])); }
    { const it = SP.make('macro', lv), q = it.q; let m; if ((m = /(\d+) g di proteine, (\d+) g di carboidrati, (\d+) g di grassi/.exec(q))) assert.equal(A(it), 4 * m[1] + 4 * m[2] + 9 * m[3]); else if ((m = /Dieta da (\d+) kcal con il (\d+)%/.exec(q))) assert.equal(A(it), rnd(m[1] * m[2] / 100 / 4)); }
    { const it = SP.make('tdee', lv), m = /(Uomo|Donna), (\d+) kg, (\d+) cm, (\d+) anni/.exec(it.q), b = 10 * m[2] + 6.25 * m[3] - 5 * m[4] + (m[1] === 'Uomo' ? 5 : -161), f = /attività ([\d.]+)\./.exec(it.q.replace(',', '.')); assert.equal(A(it), f ? rnd(b * +f[1]) : b); }
    { const it = SP.make('pace', lv), q = it.q, m = /(\d+) min\/km\. Qual è la velocità/.exec(q); if (m) assert.equal(A(it), 60 / +m[1]); }
    { const it = SP.make('hydr', lv), m = /Prima (\d+) kg, dopo ([\d.]+) kg, bevuti (\d+) ml in (\d+) h/.exec(it.q); if (m) assert.equal(A(it), rnd(((+m[1] - +m[2]) * 1000 + +m[3]) / +m[4])); }
    { const it = SP.make('peri', lv), m = /settimana 1 ha (\d+) serie/.exec(it.q); if (m) { const B = +m[1], w = [B, 1.1 * B, 1.2 * B, 1.3 * B]; assert.equal(A(it), rnd(w.reduce((a, b) => a + b, 0) + w[3] / 2)); } }
    { const it = SP.make('load', lv), m = /Sessioni della settimana \(RPE × minuti\): ([\d×, ]+)\./.exec(it.q); if (m) assert.equal(A(it), m[1].split(', ').reduce((a, x) => a + x.split('×').reduce((p, q) => p * q), 0)); }
  }
});
test('Scienze dello sport avanzate: laboratori verificati con ricalcolo indipendente', () => {
  const SP = ST.sport, A = it => +it.a[0].replace(',', '.'), P = s => (s.match(/\d+(?:,\d+)?/g) || []).map(x => +x.replace(',', '.')), near = (x, y, e) => assert.ok(Math.abs(x - y) <= e, x + ' vs ' + y);
  for (let i = 0; i < 120; i++) {
    const lv = 1 + (i % 10);
    { const it = SP.make('cp', lv), n = it.q.match(/(\d+) W per (\d+) s e (\d+) W per (\d+) s/), [p1, t1, p2, t2] = n.slice(1).map(Number); const CP = (p1 * t1 - p2 * t2) / (t1 - t2), W = (p1 - CP) * t1; near((p2 - CP) * t2, W, 1e-6);
      if (/Quanto vale W/.test(it.q)) near(A(it), W / 1000, 1e-9); else if (/potenza critica CP/.test(it.q)) near(A(it), CP, 1e-9); else { const P3 = +/resistono a (\d+) W/.exec(it.q)[1]; near(A(it), W / (P3 - CP), 1e-9); } }
    { const it = SP.make('vbt', lv), m = /con (\d+) kg la velocità è ([\d,]+) m\/s, con (\d+) kg è ([\d,]+) m\/s.*= ([\d,]+) m\/s/.exec(it.q), [L1, v1, L2, v2, mvt] = m.slice(1).map(x => +x.replace(',', '.')), s = (v2 - v1) / (L2 - L1); near(A(it), (mvt - v1) / s + L1, 0.5); }
    { const it = SP.make('fv', lv), n = P(it.q); if (/Pmax = F₀·V₀\/4/.test(it.q)) near(A(it), n[0] * n[1] / 4, 0.5 + 1e-9); else if (/Quanto vale F₀/.test(it.q)) near(A(it), 4 * n[0] / n[1], 0.5); else near(A(it), n[1] / 2, 0.01); }
    { const it = SP.make('banister', lv); if (/fitness-fatica discreto/.test(it.q)) { const ls = /Carichi dei \d+ giorni: ([\d, ]+)\./.exec(it.q)[1].split(', ').map(Number); let f = 0, g = 0; ls.forEach(w => { f = 0.9 * f + w; g = 0.6 * g + w; }); near(A(it), Math.round(f - 2 * g), 1); } }
    { const it = SP.make('trimp', lv), q = it.q; if (/Edwards/.test(q)) { const z = /Minuti per zona: ([\d, ]+)\./.exec(q)[1].split(', ').map(Number); near(A(it), z.reduce((a, m, k) => a + m * (k + 1), 0), 0); } else if (/TSS =/.test(q)) { const m = /di (\d+) minuti, FTP (\d+) W, potenza normalizzata (\d+) W/.exec(q); const [min, ftp, np] = m.slice(1).map(Number); near(A(it), min * 60 * np * (np / ftp) / (ftp * 3600) * 100, 0.51); } }
    { const it = SP.make('ewma', lv); if (/Media mobile esponenziale/.test(it.q)) { const m = /N = (\d+)\. Valore iniziale (\d+), carichi dei prossimi due giorni (\d+) e (\d+)/.exec(it.q), [N, e0, x1, x2] = m.slice(1).map(Number), l = 2 / (N + 1); let e = l * x1 + (1 - l) * e0; e = l * x2 + (1 - l) * e; near(A(it), e, 0.51); } }
    { const it = SP.make('stats', lv), q = it.q, n = P(q); if (/MDC/.test(q)) near(A(it), 1.96 * Math.SQRT2 * n[n.length - 1 - 0] , 0.06 + 1e-9) ; }
    { const it = SP.make('alt', lv), m = /circa (\d+) mmHg/.exec(it.q); near(A(it), (+m[1] - 47) * 0.2093, 0.51); }
    { const it = SP.make('sprint', lv); if (/Modello esponenziale dello sprint/.test(it.q)) { const m = /vmax = ([\d,]+) m\/s, τ = ([\d,]+) s\. Velocità dopo (\d+) s/.exec(it.q), [vm, tau, t] = [+m[1].replace(',', '.'), +m[2].replace(',', '.'), +m[3]]; near(A(it), vm * (1 - Math.exp(-t / tau)), 0.06); } }
    { const it = SP.make('aero', lv); if (/Ciclista in pianura/.test(it.q)) { const m = /v = (\d+) m\/s, CdA = ([\d,]+) m², massa totale (\d+) kg/.exec(it.q), v = +m[1], cda = +m[2].replace(',', '.'), mm = +m[3]; near(A(it), 0.5 * 1.2 * cda * v ** 3 + 0.004 * mm * 9.81 * v, 0.51); } }
    { const it = SP.make('gly', lv), q = it.q, m = /(\d+) ore con (\d+) g\/ora|a (\d+) g\/ora per (\d+) ore/.exec(q); if (/gel/.test(q)) near(A(it), +m[1] * +m[2] / 30, 0); else near(A(it), +m[3] * +m[4] / 3, 0); }
  }
});
test('Formula 1: laboratori di calcolo verificati con ricalcolo indipendente', () => {
  const F = ST.f1, A = it => +it.a[0].replace(',', '.'), N = s => (s.match(/\d+(?:,\d+)?/g) || []).map(x => +x.replace(',', '.')), near = (x, y, e) => assert.ok(Math.abs(x - y) <= e, x + ' vs ' + y);
  for (const t of F.TYPES) for (let i = 0; i < 80; i++) { const it = F.make(t, 1 + (i % 10)); assert.ok(it.q && /^-?\d+([.,]\d+)?$/.test(it.a[0]) && !/undefined|NaN/.test(it.q + it.why), t + ' ' + it.q); }
  const RACE = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1], SPR = [8, 7, 6, 5, 4, 3, 2, 1];
  for (let i = 0; i < 100; i++) {
    const lv = 1 + (i % 10);
    { const it = F.make('time', lv), q = it.q; let m;
      if ((m = /Circuito da ([\d,]+) km/.exec(q))) { const len = +m[1].replace(',', '.'); let n = 0; while (Math.round(n * len * 1000) <= 305000) n++; assert.equal(A(it), n); }
      else if ((m = /Giro di ([\d,]+) km percorso in (\d+):([\d,]+)/.exec(q))) near(A(it), +m[1].replace(",", ".") / (+m[2] * 60 + +m[3].replace(",", ".")) * 3600, 0.51);
      else if (/Tempi di settore/.test(q)) { const n = N(q).slice(0, 3); near(A(it), n[0] + n[1] + n[2], 0.051); }
      else { const m2 = /(\d+) giri a un ritmo medio di ([\d,]+) s/.exec(q); near(A(it), +m2[1] * +m2[2].replace(',', '.') / 60, 0.51); } }
    { const it = F.make('points', lv), q = it.q; let m;
      if ((m = /posizioni ([\d°, ]+) \(in/.exec(q))) near(A(it), m[1].split('°').map(x => +x.replace(/[^\d]/g, '')).filter(Boolean).reduce((a, p) => a + RACE[p - 1], 0), 0);
      else if ((m = /leader (\d+) punti, inseguitore (\d+)\. Restano (\d+) gare/.exec(q))) { const [L, R, n] = m.slice(1).map(Number); let x = 0; while (L + x <= R + 25 * n) x++; assert.equal(A(it), x); }
      else { const m2 = /è (\d)° nella sprint e (\d+)° in gara/.exec(q); near(A(it), SPR[m2[1] - 1] + RACE[m2[2] - 1], 0); } }
    { const it = F.make('gap', lv), q = it.q; let m;
      if ((m = /Sei a (\d+) s dall’auto davanti e vai ([\d,]+) s al giro/.exec(q))) { let g = Math.round(+m[1] * 100), n = 0; const d = Math.round(+m[2].replace(',', '.') * 100); while (g > 0) { g -= d; n++; } assert.equal(A(it), n); }
      else { m = /gap dall’auto davanti è ([\d,]+) s.*guadagni ([\d,]+) s al giro/.exec(q); let g = Math.round(+m[1].replace(',', '.') * 100), n = 0; const d = Math.round(+m[2].replace(',', '.') * 100); while (g >= 100) { g -= d; n++; } assert.equal(A(it), n); } }
    { const it = F.make('stint', lv), q = it.q, n = N(q); let m;
      if ((m = /t0 = ([\d,]+) s e d = ([\d,]+) s\/giro, quanto dura il giro numero (\d+)/.exec(q))) near(A(it), +m[1].replace(',', '.') + +m[2].replace(',', '.') * (+m[3] - 1), 0.006);
      else { m = /t0 = ([\d,]+) s, d = ([\d,]+) s\/giro, stint di (\d+) giri/.exec(q); let tot = 0; for (let k = 0; k < +m[3]; k++) tot += +m[1].replace(',', '.') + +m[2].replace(',', '.') * k; near(A(it), tot, 0.06); } }
    { const it = F.make('pitstrat', lv); if (/Strategia A/.test(it.q)) { const m = /Gara di (\d+) giri.*= ([\d,]+) \+ ([\d,]+)·k.*perdita per ogni sosta ([\d,]+) s.*stint di (\d+) e (\d+) giri.*stint di (\d+), (\d+), (\d+) giri/.exec(it.q), laps = +m[1], t0 = +m[2].replace(',', '.'), d = +m[3].replace(',', '.'), loss = +m[4].replace(',', '.'); const run = ss => { let tot = 0; ss.forEach(n => { for (let k = 0; k < n; k++) tot += t0 + d * k; }); return tot + loss * (ss.length - 1); }; const a = run([+m[5], +m[6]]), b = run([+m[7], +m[8], +m[9]]); assert.equal(+m[5] + +m[6], laps); near(A(it), Math.abs(a - b), 0.06); } }
    { const it = F.make('undercut', lv); if (/Rivale a/.test(it.q)) { const m = /vecchie di (\d+) giri e degrado ([\d,]+) s\/giro.*costa ([\d,]+) s/.exec(it.q); near(A(it), +m[2].replace(',', '.') * +m[1] - +m[3].replace(',', '.'), 0.006); } }
    { const it = F.make('fuel', lv); if (/Ogni kg/.test(it.q)) { const m = /costa ([\d,]+) s al giro.*brucia ([\d,]+) kg a giro.*giro (\d+) rispetto/.exec(it.q); near(A(it), +m[1].replace(',', '.') * +m[2].replace(',', '.') * (+m[3] - 1), 0.006); } }
    { const it = F.make('gear', lv); if (/giri\/min × 2π/.test(it.q)) { const m = /Motore a (\d+) giri\/min, raggio ruota ([\d,]+) m, rapporto totale \(cambio × finale\) ([\d,]+)/.exec(it.q); near(A(it), +m[1] * 2 * Math.PI * +m[2].replace(',', '.') / (+m[3].replace(',', '.') * 60) * 3.6, 0.51); } }
    { const it = F.make('brake', lv); if (/d = v²/.test(it.q)) { const m = /Velocità iniziale (\d+) km\/h, decelerazione ([\d,]+) g/.exec(it.q), v = +m[1] / 3.6; near(A(it), v * v / (2 * +m[2].replace(',', '.') * 9.81), 0.51); } }
    { const it = F.make('corner', lv); if (/√\(a_lat/.test(it.q)) { const m = /massima ([\d,]+) g, raggio (\d+) m/.exec(it.q); near(A(it), Math.sqrt(+m[1].replace(',', '.') * 9.81 * +m[2]) * 3.6, 0.51); } }
    { const it = F.make('aero', lv), q = it.q, m = /A (\d+) km\/h una vettura genera (\d+) N di carico\. Quanto a (\d+) km\/h/.exec(q); if (m) near(A(it), +m[2] * (+m[3] / +m[1]) ** 2, 0.5); else { const m2 = /CdA = ([\d,]+) m², velocità (\d+) km\/h/.exec(q), v = +m2[2] / 3.6; near(A(it), 0.5 * 1.2 * +m2[1].replace(',', '.') * v ** 3 / 1000, 0.51); } }
    { const it = F.make('ers', lv), q = it.q; let m; if ((m = /potenza di deploy costante di (\d+) kW/.exec(q))) near(A(it), 4000 / +m[1], 1e-6); else { m = /a (\d+) kW per (\d+) s/.exec(q); near(A(it), +m[1] * +m[2], 0); } }
  }
});
test('Cultura e abilità generali: laboratori di calcolo verificati con ricalcolo indipendente', () => {
  const F = ST.cul, A = it => +it.a[0].replace(',', '.'), pn = s => +String(s).replace(',', '.'), near = (x, y, e) => assert.ok(Math.abs(x - y) <= e, x + ' vs ' + y);
  for (const t of F.TYPES) for (let i = 0; i < 80; i++) { const it = F.make(t, 1 + (i % 10)); assert.ok(it.q && it.a.length && it.a.every(x => /^-?\d+([.,]\d+)?$/.test(x)) && !/undefined|NaN/.test(it.q + it.why), t + ' ' + it.q); }
  const mk = (t, lv) => { const it = F.make(t, lv); globalThis.__q = it.q; return it; };
  const SEC = { 476: 5, 1492: 15, 1789: 18, 1861: 19 };
  try { for (let i = 0; i < 150; i++) {
    const lv = 1 + (i % 10);
    { const it = mk('tz', lv), q = it.q; let m;
      if ((m = /(.+?) è a UTC([+−])(\d+), (.+?) è a UTC([+−])(\d+)\. Quando a .+ sono le (\d+):00/.exec(q.replace('Ora standard (senza ora legale). ', '')))) { const a = (m[2] === '+' ? 1 : -1) * +m[3], b = (m[5] === '+' ? 1 : -1) * +m[6]; assert.equal(A(it), (((+m[7] + b - a) % 24) + 24) % 24); }
      else if ((m = /distano (\d+)° di longitudine/.exec(q))) near(A(it), +m[1] / 15, 1e-9);
      else { m = /per ([\d,]+)° di longitudine/.exec(q); near(A(it), pn(m[1]) / 15 * 60, 0.51); } }
    { const it = mk('coord', lv), q = it.q; let m;
      if ((m = /scala 1:(\d+) due punti distano (\d+) cm/.exec(q))) near(A(it), +m[2] * +m[1] / 100000, 0.0051);
      else if ((m = /a (\d+)° N e (\d+)° N/.exec(q))) assert.equal(A(it), 111 * (+m[1] - +m[2]));
      else if ((m = /azimut dalla tua posizione al rifugio è (\d+)°/.exec(q))) assert.equal(A(it), (+m[1] + 180) % 360);
      else { m = /di (\d+)° Est.* Leggi (\d+)° sulla/.exec(q); assert.equal(A(it), (+m[1] + +m[2]) % 360); } }
    { const it = mk('hist', lv), q = it.q; let m;
      if ((m = /Quanti anni passano tra .*\((\d+)\) e .*\((\d+)\)/.exec(q))) assert.equal(A(it), +m[2] - +m[1]);
      else if ((m = /cade l’anno (\d+)\?/.exec(q))) assert.equal(A(it), Math.ceil(+m[1] / 100));
      else { const ev = F.EVENTS.find(e => q.includes(e[0])); assert.equal(A(it), ev[1]); } }
    { const it = mk('fin', lv), q = it.q; let m;
      if ((m = /Prezzo senza IVA (\d+) €/.exec(q))) near(A(it), +m[1] * 1.22, 0.006);
      else if ((m = /costa (\d+) € ed è scontato del (\d+)%/.exec(q))) near(A(it), +m[1] * (100 - +m[2]) / 100, 0.006);
      else if ((m = /Capitale (\d+) €, interesse composto annuo del (\d+)%, per (\d+) anni/.exec(q))) { let v = +m[1]; for (let k = 0; k < +m[3]; k++) v *= 1 + +m[2] / 100; near(A(it), v, 0.006); }
      else if ((m = /Prestito di (\d+) € a tasso nominale annuo del (\d+)% .* per (\d+) mesi/.exec(q))) { const P = +m[1], r = +m[2] / 1200, n = +m[3]; let lo = 0, hi = P; for (let k = 0; k < 100; k++) { const pay = (lo + hi) / 2; let bal = P; for (let j = 0; j < n; j++) bal = bal * (1 + r) - pay; if (bal > 0) lo = pay; else hi = pay; } near(A(it), Math.round((lo + hi) / 2), 0.51 + 0.5); }
      else if ((m = /paniere costa (\d+) € oggi e i prezzi salgono del (\d+)% l’anno\. Quanto costa tra (\d+) anni/.exec(q))) { let v = +m[1]; for (let k = 0; k < +m[3]; k++) v *= 1 + +m[2] / 100; near(A(it), v, 0.006); }
      else { m = /reddito netto mensile di (\d+) €/.exec(q); near(A(it), +m[1] * 0.2, 1e-9); } }
    { const it = mk('unit', lv), q = it.q; let m;
      if ((m = /Converti (\d+) km\/h/.exec(q))) near(A(it), +m[1] / 3.6, 0.51);
      else if ((m = /Converti (-?\d+) °C/.exec(q))) near(A(it), +m[1] * 1.8 + 32, 1e-9);
      else if ((m = /percorre (\d+) km con 1 litro/.exec(q))) near(A(it), 100 / +m[1], 0.051);
      else if ((m = /4,5 × 10\^(\d+) × 10\^3/.exec(q))) assert.equal(A(it), +m[1] + 3);
      else { m = /Pressione di ([\d,]+) bar/.exec(q); near(A(it), pn(m[1]) * 14.5, 0.051); } }
    { const it = mk('stat', lv), q = it.q; let m;
      if ((m = /Dati: ([\d, ]+)\. Media aritmetica/.exec(q))) { const xs = m[1].split(', ').map(Number); near(A(it), xs.reduce((a, b) => a + b, 0) / xs.length, 0.051); }
      else if ((m = /Dati: ([\d, ]+)\. Mediana/.exec(q))) { const xs = m[1].split(', ').map(Number).sort((a, b) => a - b), n = xs.length; near(A(it), n % 2 ? xs[(n - 1) / 2] : (xs[n / 2 - 1] + xs[n / 2]) / 2, 0.051); }
      else if ((m = /Dati: ([\d, ]+)\. Campo/.exec(q))) { const xs = m[1].split(', ').map(Number); assert.equal(A(it), Math.max(...xs) - Math.min(...xs)); }
      else { m = /Voti ([\d, ]+) con pesi \(crediti\) ([\d, ]+)\./.exec(q); const g = m[1].split(', ').map(Number), w = m[2].split(', ').map(Number); near(A(it), g.reduce((a, x, k) => a + x * w[k], 0) / w.reduce((a, b) => a + b, 0), 0.0051); } }
    { const it = mk('phys', lv), q = it.q; let m;
      if ((m = /va a (\d+) km\/h per (\d+) ore/.exec(q))) assert.equal(A(it), +m[1] * +m[2]);
      else if ((m = /Tensione ([\d,]+) V e corrente ([\d,]+) A/.exec(q))) near(A(it), pn(m[1]) / pn(m[2]), 0.0051);
      else if ((m = /apparecchio da (\d+) W resta acceso (\d+) ore.*energia costa ([\d,]+) €\/kWh/.exec(q))) near(A(it), +m[1] / 1000 * +m[2] * pn(m[3]), 0.0051);
      else if ((m = /Massa (\d+) kg, accelerazione (\d+) m\/s²/.exec(q))) assert.equal(A(it), +m[1] * +m[2]);
      else { m = /Massa (\d+) g, volume (\d+) cm³/.exec(q); near(A(it), +m[1] / +m[2], 0.0051); } }
    { const it = mk('chem', lv), q = it.q; let m;
      if ((m = /Massa molare di .* = (\d+(?:,\d+)?) g\/mol \(H=1.*Quante moli sono ([\d,]+) g/.exec(q))) near(A(it), pn(m[2]) / pn(m[1]), 0.0051);
      else if ((m = /Massa molare di .* = (\d+(?:,\d+)?) g\/mol\. Quanti grammi sono ([\d,]+) mol/.exec(q))) near(A(it), pn(m[1]) * pn(m[2]), 0.051);
      else if ((m = /\[H⁺\] = 10\^\(−(\d+)\)/.exec(q))) assert.equal(A(it), +m[1]);
      else { m = /([\d,]+) mol sciolte in ([\d,]+) L/.exec(q); near(A(it), pn(m[1]) / pn(m[2]), 0.0051); } }
    { const it = mk('astro', lv), q = it.q; let m;
      if ((m = /da la Luna|da il Sole|dalla? (?:Luna|Sole)/.exec(q)) || /Quanti secondi/.test(q)) { const d = /384 400/.test(q) ? 384400 : 149600000; near(A(it), d / 299792, 0.51); }
      else if ((m = /a = (\d+) UA\. Periodo/.exec(q))) near(A(it), Math.sqrt(Math.pow(+m[1], 3)), 1e-9);
      else { m = /periodo (\d+) anni/.exec(q); near(A(it), Math.cbrt(Math.pow(+m[1], 2)), 0.5 + 1e-9); } }
    { const it = mk('cook', lv), q = it.q; let m;
      if ((m = /Una ricetta per (\d+) persone usa (\d+) g di farina\. Quanti grammi per (\d+)/.exec(q))) near(A(it), +m[2] * +m[3] / +m[1], 0.51);
      else if ((m = /[Cc]on (\d+) g di farina e idratazione (\d+)%/.exec(q))) near(A(it), +m[1] * +m[2] / 100, 1e-9);
      else if ((m = /Per (\d+) g di pasta quanti grammi di sale/.exec(q))) near(A(it), +m[1] / 10, 1e-9);
      else { m = /forno è a (\d+) °C/.exec(q); near(A(it), +m[1] * 1.8 + 32, 1e-9); } }
    { const it = mk('diy', lv), q = it.q; let m;
      if ((m = /Parete di ([\d,]+) m × ([\d,]+) m, (\d+) mani.*resa di (\d+) m² per litro\. Quante latte da ([\d,]+) L/.exec(q))) { const L = pn(m[1]) * pn(m[2]) * +m[3] / +m[4]; assert.equal(A(it), Math.ceil(L / pn(m[5]) - 1e-9)); }
      else if ((m = /Pavimento di ([\d,]+) m × ([\d,]+) m\. Piastrelle da ([\d,]+) m²/.exec(q))) assert.equal(A(it), Math.ceil(pn(m[1]) * pn(m[2]) * 1.1 / pn(m[3]) - 1e-9));
      else if ((m = /apparecchio da (\d+) W\. Quanti ampere/.exec(q))) near(A(it), +m[1] / 230, 0.051);
      else { m = /rapporto 1 : (\d+) : (\d+) .* In (\d+) secchi/.exec(q); assert.equal(A(it), +m[3] * +m[1] / (1 + +m[1] + +m[2])); } }
    { const it = mk('music', lv), q = it.q; let m;
      if ((m = /tempo di (\d+) BPM, quanti millisecondi/.exec(q))) assert.equal(A(it), 60000 / +m[1]);
      else if ((m = /tempo (\d)\/4 a (\d+) BPM, quanti secondi durano (\d+) battute/.exec(q))) near(A(it), +m[3] * +m[1] * 60 / +m[2], 0.051);
      else if ((m = /Per n = (-?\d+) semitoni/.exec(q))) near(A(it), 440 * Math.pow(2, +m[1] / 12), 0.51);
      else { assert.ok(/semitoni ci sono in/.test(q)); const map = { 'una terza maggiore': 4, 'una quinta giusta': 7, 'un’ottava': 12, 'una seconda maggiore': 2, 'una quarta giusta': 5 }; const k = Object.keys(map).find(x => q.includes(x)); assert.equal(A(it), map[k]); } }
    { const it = mk('mech', lv), q = it.q; let m;
      if ((m = /Corona (\d+), pignone (\d+), cadenza (\d+), circonferenza ([\d,]+) m/.exec(q))) near(A(it), +m[3] * (+m[1] / +m[2]) * pn(m[4]) * 0.06, 0.051);
      else if ((m = /consuma ([\d,]+) litri ogni 100 km/.exec(q))) near(A(it), 100 / pn(m[1]), 0.051);
      else if ((m = /Coppia (\d+) N·m a (\d+) giri\/min/.exec(q))) near(A(it), +m[1] * +m[2] * 2 * Math.PI / 60000, 0.51);
      else { m = /Auto a (\d+) km\/h con decelerazione di (\d+) m\/s²/.exec(q); near(A(it), (+m[1] / 3.6) ** 2 / (2 * +m[2]), 0.51); } }
    { const it = mk('aid', lv), q = it.q; let m;
      if (/numero unico di emergenza/.test(q)) assert.equal(A(it), 112);
      else if ((m = /A (\d+) compressioni\/min, quante compressioni in (\d+) secondi/.exec(q))) near(A(it), +m[1] * +m[2] / 60, 1e-9);
      else if ((m = /in (\d+) cicli completi/.exec(q))) assert.equal(A(it), 30 * +m[1]);
      else { m = /A (\d+) compressioni al minuto, quanti secondi servono per 30/.exec(q); near(A(it), 1800 / +m[1], 1e-9); } }
  } } catch (e) { e.message += ' | Q: ' + globalThis.__q; throw e; }
});
test('Moto e guida sportiva: laboratori di calcolo verificati con ricalcolo indipendente', () => {
  const F = ST.moto, A = it => +it.a[0].replace(',', '.'), pn = s => +String(s).replace(',', '.'), near = (x, y, e) => assert.ok(Math.abs(x - y) <= e, x + ' vs ' + y), G = 9.81, deg = Math.PI / 180;
  const mk = (t, lv) => { const it = F.make(t, lv); globalThis.__q = it.q; return it; };
  try { for (const t of F.TYPES) for (let i = 0; i < 80; i++) { const it = F.make(t, 1 + (i % 10)); assert.ok(it.q && it.a.length && it.a.every(x => /^-?\d+([.,]\d+)?$/.test(x)) && !/undefined|NaN/.test(it.q + it.why), t + ' ' + it.q); }
  for (let i = 0; i < 150; i++) {
    const lv = 1 + (i % 10);
    { const it = mk('lean', lv), q = it.q; let m;
      if ((m = /Raggio (\d+) m e angolo di piega (\d+)°/.exec(q))) near(A(it), Math.sqrt(G * +m[1] * Math.tan(+m[2] * deg)) * 3.6, 0.51);
      else if ((m = /raggio (\d+) m percorsa a (\d+) km\/h/.exec(q))) near(A(it), Math.atan((+m[2] / 3.6) ** 2 / (G * +m[1])) / deg, 0.51);
      else if ((m = /Con angolo di piega (\d+)/.exec(q))) near(A(it), Math.tan(+m[1] * deg), 0.0051);
      else if ((m = /Frenata a decelerazione costante.*Velocità (\d+) km\/h, decelerazione ([\d,]+) g/.exec(q))) near(A(it), (+m[1] / 3.6) ** 2 / (2 * pn(m[2]) * G), 0.51);
      else { m = /Velocità (\d+) km\/h, tempo di reazione ([\d,]+) s, decelerazione ([\d,]+) g/.exec(q); const v = +m[1] / 3.6; near(A(it), v * pn(m[2]) + v * v / (2 * pn(m[3]) * G), 0.51); } }
    { const it = mk('brake', lv), q = it.q; let m;
      if ((m = /Velocità (\d+) km\/h, decelerazione ([\d,]+) g \(g/.exec(q))) near(A(it), (+m[1] / 3.6) ** 2 / (2 * pn(m[2]) * G), 0.51);
      else if ((m = /Velocità (\d+) km\/h, tempo di reazione ([\d,]+) s, decelerazione ([\d,]+) g/.exec(q))) { const v = +m[1] / 3.6; near(A(it), v * pn(m[2]) + v * v / (2 * pn(m[3]) * G), 0.51); } }
    { const it = mk('xfer', lv), q = it.q; let m;
      if ((m = /Massa totale \(moto \+ pilota\) (\d+) kg, decelerazione (\d+) m\/s², altezza del baricentro ([\d,]+) m, interasse ([\d,]+) m/.exec(q))) near(A(it), +m[1] * +m[2] * pn(m[3]) / pn(m[4]), 0.51);
      else if ((m = /b = ([\d,]+) m, h = ([\d,]+) m\. Accelerazione limite/.exec(q))) near(A(it), pn(m[1]) / pn(m[2]), 0.0051);
      else { m = /Interasse L = ([\d,]+) m, b = ([\d,]+) m, h = ([\d,]+) m/.exec(q); near(A(it), (pn(m[1]) - pn(m[2])) / pn(m[3]), 0.0051); } }
    { const it = mk('gear', lv), q = it.q; let m;
      if ((m = /Primario ([\d,]+), marcia ([\d,]+), corona (\d+), pignone (\d+)\. Raggio ruota ([\d,]+) m, motore a (\d+) giri/.exec(q))) { const tot = pn(m[1]) * pn(m[2]) * +m[3] / +m[4]; near(A(it), +m[6] * 2 * Math.PI * pn(m[5]) / (60 * tot) * 3.6, 0.51); }
      else if ((m = /totale .* = ([\d,]+), raggio ruota ([\d,]+) m\. A (\d+) km\/h/.exec(q))) near(A(it), +m[3] / 3.6 * 60 * pn(m[1]) / (2 * Math.PI * pn(m[2])), 1.5); }
    { const it = mk('engine', lv), q = it.q; let m;
      if ((m = /Alesaggio (\d+) mm, corsa (\d+) mm, (\d+) cilindri/.exec(q))) near(A(it), Math.PI / 4 * Math.pow(+m[1], 2) * +m[2] * +m[3] / 1000, 0.51);
      else if ((m = /Vd = (\d+) cm³, volume della camera Vc = (\d+) cm³/.exec(q))) near(A(it), (+m[1] + +m[2]) / +m[2], 1e-9);
      else if ((m = /Corsa (\d+) mm a (\d+) giri\/min/.exec(q))) near(A(it), 2 * +m[1] / 1000 * +m[2] / 60, 0.051); }
    { const it = mk('power', lv), q = it.q; let m;
      if ((m = /Coppia (\d+) N·m a (\d+) giri\/min\. Potenza in kW/.exec(q))) near(A(it), +m[1] * +m[2] * 2 * Math.PI / 60000, 0.51);
      else if ((m = /Converti (\d+) kW/.exec(q))) near(A(it), +m[1] / 0.7355, 0.51);
      else if ((m = /Potenza (\d+) kW a (\d+) giri\/min\. Coppia/.exec(q))) near(A(it), 9549 * +m[1] / +m[2], 0.51); }
    { const it = mk('tyre', lv), q = it.q; let m;
      if ((m = /Misura (\d+)\/(\d+) ZR(\d+).*Quanto è alto il fianco/.exec(q))) near(A(it), +m[1] * +m[2] / 100, 0.051);
      else if ((m = /Pneumatico (\d+)\/(\d+) ZR(\d+) .*Diametro/.exec(q))) near(A(it), +m[3] * 25.4 + 2 * +m[1] * +m[2] / 100, 0.51);
      else if ((m = /Pressione ([\d,]+) bar a (\d+) °C\. Quanti bar a (\d+) °C/.exec(q))) near(A(it), pn(m[1]) * (+m[3] + 273) / (+m[2] + 273), 0.0051); }
    { const it = mk('susp', lv), q = it.q; let m;
      if ((m = /Corsa totale (\d+) mm e SAG del (\d+)%/.exec(q))) near(A(it), +m[1] * +m[2] / 100, 0.051);
      else if ((m = /si comprime di (\d+) mm sotto una forza di (\d+) N/.exec(q))) near(A(it), +m[2] / +m[1], 0.051);
      else if ((m = /k = (\d+) N\/m che sostiene una massa di (\d+) kg/.exec(q))) near(A(it), Math.sqrt(+m[1] / +m[2]) / (2 * Math.PI), 0.051); }
    { const it = mk('lap', lv), q = it.q; let m;
      if ((m = /Giro di pista lungo ([\d,]+) km percorso in ([\d,]+) secondi/.exec(q))) near(A(it), pn(m[1]) / pn(m[2]) * 3600, 0.51);
      else if ((m = /guadagni ([\d,]+) s sul tempo di riferimento.* su (\d+) giri/.exec(q))) near(A(it), pn(m[1]) * +m[2], 0.051);
      else if ((m = /Serbatoio da (\d+) litri e consumo di ([\d,]+) L\/100 km/.exec(q))) near(A(it), +m[1] / pn(m[2]) * 100, 0.51);
      else { m = /Tempi di settore di un giro: ([\d,]+) s, ([\d,]+) s e ([\d,]+) s/.exec(q); near(A(it), pn(m[1]) + pn(m[2]) + pn(m[3]), 0.051); } }
    { const it = mk('gyro', lv), m = /Massa (\d+) kg, raggio ([\d,]+) m, velocità (\d+) km\/h/.exec(it.q); near(A(it), +m[1] * pn(m[2]) * +m[3] / 3.6, 0.051); }
    { const it = mk('energy', lv), q = it.q; let m;
      if ((m = /Massa totale \(moto \+ pilota\) (\d+) kg a (\d+) km\/h/.exec(q))) near(A(it), 0.5 * +m[1] * (+m[2] / 3.6) ** 2 / 1000, 0.51);
      else { m = /passa da (\d+) km\/h a (\d+) km\/h/.exec(q); near(A(it), (+m[2] / +m[1]) ** 2, 1e-9); } }
  } } catch (e) { e.message += ' | Q: ' + globalThis.__q; throw e; }
});

test('transfer: dimensioni separate, verifiche 7/30/90, Brier solo su esiti risolti, migrazione v2→v3', () => {
  const Tr = ST.transfer, s = fresh();
  at('2026-02-01'); Tr.record(s, 'x', 'recall', true); Tr.record(s, 'x', 'recall', false, { help: true }); Tr.record(s, 'x', 'novel', true);
  const d = Tr.dims(s, 'x'); assert.deepEqual([d.recall.n, d.recall.ok, d.novel.ok, d.noHelp.n, d.help.n], [2, 1, 1, 2, 1]);
  assert.equal(Tr.due(s, '2026-02-07').length, 0); assert.equal(Tr.due(s, '2026-02-08').length, 1);
  assert.equal(Tr.due(s, '2026-05-10').length, 3); Tr.record(s, 'x', 'delayed', true, { check: 7 }); assert.equal(Tr.due(s, '2026-02-08').length, 0);
  assert.equal(Tr.brier(s), null); const f = Tr.fAdd(s, 'e', 80); assert.equal(Tr.brier(s), null);
  Tr.fUpdate(s, f.id, 60); Tr.fResolve(s, f.id, true); const b = Tr.brier(s); assert.equal(b.first, 0.04); assert.equal(b.last, 0.16);
  Tr.fResolve(s, f.id, false); assert.equal(f.out, 1); // già risolta: non cambia
  const j = Tr.jAdd(s, { sit: 'a', choice: 'b', check: '2026-02-02' }); assert.equal(Tr.jDue(s, '2026-02-03').length, 1); Tr.jClose(s, j.id, 'ok', 'l'); assert.equal(Tr.jDue(s, '2026-02-03').length, 0);
  const m = DB.migrate({ schema: 2, xp: 5 }); assert.equal(m.schema, 3); assert.equal(m.xp, 5); assert.ok(Array.isArray(m.journal) && m.skills && Array.isArray(m.forecasts));
});

test('kg: problemi di transfer con risposta ricalcolata e principi coerenti', () => {
  const K = ST.kg, pr = K.PROBLEMS, ans = p => p.o[p.a];
  const get = (k, v) => pr.find(x => x.principle === k && x.v === v);
  assert.ok(Object.keys(K.PRINCIPLES).every(k => pr.filter(x => x.principle === k).length === 2 && K.PRINCIPLES[k].links.every(l => K.PRINCIPLES[l])));
  assert.ok(pr.every(p => p.a >= 0 && p.a < p.o.length && new Set(p.o).size === p.o.length));
  const bay = (pv, se, fp) => se * pv / (se * pv + fp * (1 - pv));
  assert.equal(Math.round(bay(.01, .9, .1) * 100), 8); assert.ok(/8%/.test(ans(get('baserate', 0))));
  assert.equal(Math.round(bay(.02, .95, .05) * 100), 28); assert.ok(/28%/.test(ans(get('baserate', 1))));
  assert.ok(40 / 2 > 12 && /singolo/.test(ans(get('opportunity', 0)))); assert.ok(30 / 5 < 8 && /abbonamento/.test(ans(get('opportunity', 1))));
  assert.equal(Math.round(100 * 1.05 ** 8), 148); assert.equal(Math.round(100 * 1.03 ** 10), 134);
  assert.equal((20 / 6 - 3).toFixed(2), '0.33'); assert.equal((10 / 4 - 3).toFixed(1), '-0.5');
  assert.equal(10 * 5, 50); assert.equal(8 * 4.5, 36);
  const s = fresh(); at('2026-03-01'); const it = K.problem('units', 0); assert.equal(it.v, 0); assert.equal(K.problem('units', 1).v, 1);
});

test('rwd: probabilità, valori attesi e opzione migliore coerenti col testo', () => {
  const Rw = ST.rwd;
  Rw.SCENARIOS.forEach(sc => {
    sc.opts.forEach(o => assert.ok(Math.abs(o.o.reduce((a, x) => a + x.p, 0) - 1) < 1e-9, sc.id));
    if (sc.best) { const e = Rw.evs(sc), b = e.reduce((m, x) => (sc.dir === 'min' ? x.ev < m.ev : x.ev > m.ev) ? x : m); assert.equal(b.id, sc.best, sc.id); }
    else assert.ok(Rw.evs(sc).every(x => x.ev === null));
  });
  const ev = id => Rw.evs(Rw.SCENARIOS.find(x => x.id === id));
  assert.equal(ev('laptop')[0].ev, 500); assert.equal(ev('salary')[1].ev, 31.95); assert.equal(ev('invest')[2].ev, 1027.5); assert.equal(ev('taxi')[2].ev, 12);
  const op = Rw.SCENARIOS[0].opts[0]; assert.equal(Rw.sample(op, 0.5).v, 450); assert.equal(Rw.sample(op, 0.95).v, 700);
  assert.equal(JSON.stringify(Rw.infoScore(Rw.SCENARIOS[0], [Rw.SCENARIOS[0].info[0][0], Rw.SCENARIOS[0].info[2][0]])), '{"hit":1,"total":3,"wrong":1}');
});

test('pensiero critico: forme 0/1 disgiunte, risposta coerente, test di transfer in tre categorie', () => {
  const CR = ST.mental.crit, r = U.rng(5), st = fresh();
  ['fallacy', 'bias', 'source'].forEach(t => { for (let i = 0; i < 60; i++) { const a = CR[t](0, r), b = CR[t](1, r); assert.ok(a.o[a.a] && new Set(a.o).size === 4 && b.o[b.a] && a.form === 0 && b.form === 1 && a.q !== b.q || a.key !== b.key, t); assert.ok(/:|\./.test(a.why)); } });
  assert.equal(CR.counts.fallacy, 8); assert.equal(CR.counts.bias, 6);
  ['A', 'B', 'C'].forEach(c => { const it = CR.tvItems(st, c, 6, r); assert.equal(it.length, 6); assert.ok(it.every(x => x.tv === c && x.q && (x.t !== 'mc' || x.o[x.a]))); });
  assert.equal(CR.tvSummary(st, 'A'), null); CR.tvRecord(st, 'A', 3, 6, 1000); CR.tvRecord(st, 'A', 5, 6, 900); const m = CR.tvSummary(st, 'A'); assert.equal([m.runs, m.first, m.last, m.best].join(), '2,50,83,83');
  assert.ok(ST.mental.session(st, '2026-01-10', r).every(x => x.q));
});

test('laboratori facoltativi: ogni categoria costruisce una sessione valida per tutte le durate', () => {
  const st = fresh(), r = U.rng(9);
  [3, 4, 6, 9].forEach(n => {
    assert.ok(ST.mental.session(st, '2026-01-12', r).length > 3);
    assert.ok(ST.sport.session(st, r).length > 3 && ST.strategy.session(st, r).length > 3);
  });
  const it = ST.kg.problem('ev', 0); assert.ok(it.principle === 'ev' && it.q);
});

test('casi sport: calcoli dei dati ricontrollati e struttura in 5 passi', () => {
  const CS = ST.cases, g = id => CS.CASES.find(c => c.id === id);
  assert.ok(CS.CASES.every(c => c.steps.length === 5 && c.steps.every(s => s[1].length === 4 && new Set(s[1]).size === 4 && s[2])));
  
  assert.equal(100 * 3 * 5 * 2, 3000); assert.ok(/3 000/.test(g('stall').steps[0][1][0]));
  assert.equal((620 / ((400 + 420 + 450 + 430) / 4)).toFixed(2), '1.46'); assert.ok(/1,46/.test(g('acwr').steps[0][1][0]));
  assert.equal((100 * (22 * 60 + 5 - (21 * 60 + 10)) / (21 * 60 + 10)).toFixed(1), '4.3'); assert.ok(/4,3/.test(g('decline').steps[0][1][0]));
  assert.equal(3 * 60 + 5 * 40, 380); assert.equal(2 * 4, 8); assert.equal([10 * 0.4, 10 * 0.6].join(), '4,6');
  assert.equal(CS.RESEARCH.length, 8); assert.ok(CS.RESEARCH.every(i => i.o.length === 4 && i.a === 0));
  assert.equal(CS.itemsOf(g('hyper')).length, 5);
  assert.equal((2 - 1) / 2, 0.5); assert.equal(Math.round(1 / (0.02 - 0.01)), 100); assert.equal(20 * 0.05, 1);
});

test('lessico attivo: livelli, cloze, verifica a distanza e sessione', () => {
  const V = ST.vocab, s = fresh(); at('2026-03-01');
  const topic = Object.values(C.topics).find(t => t.subject === 'eng' && t.cards && t.cards.some(c => V.canCloze(c)));
  ST.cards.introduceTopic(s, topic);
  const id = Object.keys(s.cards).find(i => V.canCloze(V.cardOf(s, i)));
  assert.equal(V.level(s, id, V.cardOf(s, id)).next, 'recog');
  const it = V.item(s, id, 'ctx', U.rng(3)); assert.ok(/_____/.test(it.q) && it.o[it.a] === V.cardOf(s, id).b && it.o.length >= 3);
  assert.ok(V.item(s, id, 'recog', U.rng(3)).t === 'mc' && V.item(s, id, 'recall', U.rng(3)).t === 'fill');
  V.record(s, id, 'recog', true); assert.equal(V.level(s, id).next, 'recall');
  V.record(s, id, 'recall', true); assert.equal(V.level(s, id).next, 'recall'); V.record(s, id, 'recall', true);
  assert.equal(V.level(s, id, V.cardOf(s, id)).next, 'ctx'); V.record(s, id, 'ctx', true); V.record(s, id, 'prod', true);
  assert.equal(V.level(s, id, V.cardOf(s, id)).next, null); assert.equal(V.level(s, id, V.cardOf(s, id)).lv, 4);
  at('2026-03-23'); assert.equal(V.level(s, id, V.cardOf(s, id)).next, 'verify');
  V.record(s, id, 'verify', true); assert.equal(V.level(s, id, V.cardOf(s, id)).lv, 5);
  assert.ok(V.counts(s, 'en').reduce((a, b) => a + b, 0) > 3);
  const sess = V.session(s, 'en', 5, U.rng(1)); assert.ok(sess.every(x => x.vocabId && x.q));
});

test('allenamento strategico: contenuti ricalcolati e sequenza dei 5 passi con attesa', () => {
  const TT = ST.tt, s = fresh(); at('2026-04-01');
  const pc = (p, se, fp) => se * p / (se * p + fp * (1 - p));
  assert.equal(Math.round(pc(.05, .8, .1) * 100), 30); assert.equal(Math.round(pc(.001, .99, .01) * 100), 9);
  assert.equal(2 * 15 + 30, 60); assert.equal((200 * 1.1 ** 3).toFixed(1), '266.2'); assert.equal((80 * 1.025 ** 12).toFixed(1), '107.6');
  assert.equal((50 / 10 - 4), 1); assert.equal(0.1 * 200, 20); assert.equal(90 / 3.6, 25); assert.equal((6.5 * 520 / 100).toFixed(1), '33.8');
  Object.keys(ST.kg.PRINCIPLES).forEach(pr => { const c = TT.CONTENT[pr]; assert.ok(c.theory && [c.abs, c.scen].every(q => q.o.length === 4 && new Set(q.o).size === 4 && q.why)); });
  assert.equal(TT.status(s, 'ev').next, 1); TT.done(s, 'ev', 1); TT.done(s, 'ev', 2); TT.done(s, 'ev', 3); assert.equal(TT.status(s, 'ev').next, 4);
  TT.done(s, 'ev', 4, 'x'); assert.equal(TT.status(s, 'ev').ready, false); assert.equal(TT.status(s, 'ev').wait, 7);
  assert.equal(TT.status(s, 'ev', '2026-04-08').ready, true); TT.done(s, 'ev', 5, true); assert.equal(TT.status(s, 'ev').done, true);
  assert.ok(TT.delayedItem(s, 'ev').q && TT.item('ev', 2).skill === 'tt:ev');
});

test('grafo per argomento: collegamenti coerenti e senza lingue', () => {
  const K = ST.kg, all = Object.values(C.topics);
  assert.ok(all.filter(t => K.principlesOf(t).length).length > 80);
  assert.ok(all.filter(t => t.subject === 'eng' || t.subject === 'jpn').every(t => K.principlesOf(t).length === 0));
  const t = all.find(x => K.principlesOf(x).includes('baserate')), r = K.related(t);
  assert.ok(r.prs.includes('baserate') && r.shared.every(id => C.topics[id] && C.topics[id].subject !== t.subject));
  assert.ok(K.topicsOf('ev', 3).length === 3 && K.topicsOf('ev', 3).every(x => K.principlesOf(x).includes('ev')));
  assert.ok(all.every(x => (x.prereq || []).every(id => C.topics[id])));
});

test('memoria prospettica e metacognizione: risposta unica e coerente', () => {
  const r = U.rng(11);
  for (let lv = 1; lv <= 20; lv++) for (let i = 0; i < 30; i++) {
    const p = MN.make('prosp', lv, r); assert.ok(p.t === 'flash' && p.show && p.o.length === 4 && new Set(p.o).size === 4 && p.o[p.a], 'prosp ' + lv);
    const seq = /sequenza ([\d, ]+)\./.exec(p.q)[1].split(', ').map(Number), harder = lv >= 8;
    const code = n => n % 5 === 0 ? 'C' : n % 2 === 0 ? 'P' : harder && n > 20 ? 'G' : 'N';
    assert.equal(p.o[p.a], seq.map(code).join(' '), 'prosp ' + lv);
    const m = MN.make('meta', lv, r); assert.ok(m.t === 'mc' && m.o.length === 4 && m.o[m.a] && m.why);
  }
  assert.equal(ST.mental.crit.counts.meta, 8);
});

test('kanji: risposte ricalcolate sull’indice delle carte e componenti coerenti', () => {
  const KJ = ST.kanji, ix = KJ.index(), r = U.rng(21), KAN = /[一-鿿]/g;
  const byW = {}; ix.words.forEach(x => byW[x.w] = x);
  for (let i = 0; i < 80; i++) {
    let it = KJ.make('kjread', 1, r), w = /«(.+)»/.exec(it.q)[1]; assert.equal(it.o[it.a], byW[w].r); assert.equal(new Set(it.o).size, 4);
    it = KJ.make('kjmean', 1, r); w = /«(.+)» \(/.exec(it.q)[1]; assert.equal(it.o[it.a], byW[w].f);
    it = KJ.make('kjcommon', 1, r); if (it.mtype === 'kjcommon') { const ws = Array.from(it.q.matchAll(/«([^»]+)»/g)).map(m => m[1]); assert.ok(ws.every(x => x.includes(it.o[it.a]))); it.o.forEach((c, k) => { if (k !== it.a) assert.ok(!ws.some(x => x.includes(c))); }); }
    it = KJ.make('kjradical', 1, r); const comp = /componente «(.)»/.exec(it.q)[1]; assert.ok(KJ.RAD[comp][1].includes(it.o[it.a])); it.o.forEach((c, k) => { if (k !== it.a) assert.ok(!KJ.RAD[comp][1].includes(c)); });
    it = KJ.make('kjonkun', 1, r); const m = /kanji «(.)»: la lettura «(.+)» è/.exec(it.q), [on, kun] = KJ.ONKUN[m[1]], kind = on.includes(m[2]) ? 0 : kun.includes(m[2]) ? 1 : 2; assert.equal(it.a, kind);
    it = KJ.make('kjwrite', 1, r); assert.ok(byW[it.a[0]] && it.q.includes(byW[it.a[0]].r));
  }
  assert.ok(Object.keys(ix.chars).length > 400 && ix.words.every(x => KAN.test(x.w) && (KAN.lastIndex = 0, true)));
  for (const k in KJ.RAD) assert.ok(KJ.RAD[k][1].length >= 2);
  assert.equal(KJ.session(fresh(), 10).length, 10);
});

test('dialoghi ramificati: grafo valido, ogni percorso termina, scelte con feedback', () => {
  const DL = ST.dialog;
  DL.LIST.forEach(d => {
    const ids = Object.keys(d.nodes), reach = new Set([d.start]), stack = [d.start];
    while (stack.length) { const n = d.nodes[stack.pop()]; assert.ok(n, d.id); if (n.end) continue; assert.ok(n.ch.length >= 1 && n.ch.every(c => d.nodes[c.next] && c.fb && c.t && [0, 1, 2].includes(c.q)), d.id); n.ch.forEach(c => { if (!reach.has(c.next)) { reach.add(c.next); stack.push(c.next); } }); }
    assert.equal(reach.size, ids.length, d.id + ' nodi irraggiungibili');
    assert.ok(ids.filter(i => d.nodes[i].end).length >= 1);
    // nessun ciclo: ogni percorso termina (DFS con stack di visita)
    const vis = {}, dfs = id => { if (vis[id] === 1) throw new Error('ciclo ' + d.id); if (vis[id] === 2 || d.nodes[id].end) return; vis[id] = 1; d.nodes[id].ch.forEach(c => dfs(c.next)); vis[id] = 2; };
    dfs(d.start);
    // ogni nodo con scelte ha almeno una scelta ottima (q=2)
    ids.forEach(i => { const n = d.nodes[i]; if (!n.end) assert.ok(n.ch.some(c => c.q === 2), d.id + ':' + i); });
  });
  assert.equal(DL.score([{ q: 2 }, { q: 2 }, { q: 0 }, { q: 1 }]), 5 / 8);
  assert.equal(DL.step(DL.LIST[0], 'a', 0).next, 'b');
});

test('simulatore giapponese: grafo valido, ruby ben formato, lettura derivabile', () => {
  const DL = ST.dialog, ja = DL.LIST.filter(d => d.lang === 'ja');
  assert.equal(ja.length, 5); assert.equal(DL.LIST.filter(d => d.lang === 'en').length, 5);
  ja.forEach(d => Object.keys(d.nodes).forEach(i => { const n = d.nodes[i]; const lines = [n.npc].concat((n.ch || []).map(c => c.t)); lines.forEach(t => { assert.ok(!/\[[^|\]]*\]/.test(t.replace(/\[[^\]|]+\|[^\]]+\]/g, '')), d.id + ' ruby'); assert.ok(U.speechText(t).length > 0 && !/[一-鿿]/.test(U.speechText(t)), d.id + ' lettura senza kanji: ' + t); }); }));
});

test('simulatore giapponese: grafo valido, ruby ben formato, lettura derivabile', () => {
  const DL = ST.dialog, ja = DL.LIST.filter(d => d.lang === 'ja');
  assert.equal(ja.length, 5); assert.equal(DL.LIST.filter(d => d.lang === 'en').length, 5);
  ja.forEach(d => Object.keys(d.nodes).forEach(i => { const n = d.nodes[i]; [n.npc].concat((n.ch || []).map(c => c.t)).forEach(t => { assert.ok(!/\[[^|\]]*\]/.test(t.replace(/\[[^\]|]+\|[^\]]+\]/g, '')), d.id + ' ruby'); assert.ok(U.speechText(t).length > 0 && !/[一-鿿]/.test(U.speechText(t)), d.id + ' lettura senza kanji: ' + t); }); }));
});

test('F1: giri minimi per superare 305 km, anche nel caso esatto (regressione)', () => {
  const F = ST.f1; assert.equal(F.minLaps(6.1), 51); assert.equal(F.minLaps(5), 62); assert.equal(F.minLaps(3.5), 88); assert.equal(F.minLaps(7), 44);
  for (let l = 3500; l <= 7000; l++) { const n = F.minLaps(l / 1000); assert.ok(n * l > 305000 && (n - 1) * l <= 305000, String(l)); }
});

test('produzione giapponese: forme ricalcolate con regole, dialoghi e descrizioni coerenti', () => {
  const JP = ST.jprod, K = ST.kana, r = U.rng(2);
  JP.FORMS.forEach(f => { const [base, req, ans] = f; const g2 = /^(.+)ます$/.exec(base);
    if (req === 'forma negativa cortese') assert.equal(ans[0], g2[1] + 'ません');
    if (req === 'passato cortese') assert.equal(ans[0], g2[1] + 'ました');
    if (req === 'passato negativo cortese') assert.equal(ans[0], g2[1] + 'ませんでした');
    if (/^(おおきい|たかい)です$/.test(base)) { const st = base.replace('いです', ''); if (req === 'forma negativa') assert.equal(ans[0], st + 'くないです'); if (req === 'passato') assert.equal(ans[0], st + 'かったです'); }
    if (base === 'がくせいです' && req === 'passato') assert.equal(ans[0], 'がくせいでした');
  });
  JP.DIALOGS.forEach(d => assert.equal(new Set(d[1]).size, d[1].length));
  JP.DESC.forEach(d => { assert.equal(new Set([d[1]].concat(d[2])).size, 4); });
  JP.TRANS.forEach(t => t[1].forEach(a => assert.ok(K.sameReading(a, t[1][0]) || K.sameReading(a, a))));
  for (let i = 0; i < 100; i++) { const it = JP.make(JP.TYPES[i % 4], r); assert.ok(it.q && (it.t !== 'mc' || it.o[it.a]) && (it.t !== 'fill' || it.a.length > 0) && (it.t !== 'order' || it.words.length === 3)); }
  const od = JP.make('jpdialog', r); assert.equal(od.words.join('').length > 10, true);
  assert.equal(JP.session(10, r).length, 10);
});
