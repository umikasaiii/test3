/* Test vNext: carica l'app + il pacchetto in un contesto Node (senza DOM reale). Uso: node vnext/tests/vnext.test.js */
const test = require('node:test'), assert = require('node:assert/strict');
const load = require('../../tests/load.js'), vn = require('../../tools/build-vnext.js');
const ST = load({ extra: vn.sources() });
const fresh = () => ST.storage.migrate({ onboarded: true });

test('registrazione: soggetto sma con sei stage e quattro pilastri', () => {
  const s = ST.content.subject('sma');
  assert.ok(s && s.optional && !s.primary);
  assert.equal(JSON.stringify(s.stages.map(x => x.id)), JSON.stringify(['L0', 'L1', 'L2', 'L3', 'L4', 'L5']));
  assert.equal(ST.sma.PILLAR_IDS.length, 4);
  assert.equal(Object.keys(ST.sma.DIMS).length, 7);
});
test('M.topic rifiuta pilastri sconosciuti', () => {
  assert.throws(() => ST.sma.topic({ id: 'sma-x', pillar: 'zzz', stage: 'L0' }), /Pilastro/);
});
test('stato: persiste nello stato esistente e sopravvive alla migrazione', () => {
  const s = fresh(); ST.sma.S(s).diary.push({ t: 'x' });
  const copy = ST.storage.migrate(JSON.parse(JSON.stringify(s)));
  assert.equal(copy.sma.diary.length, 1);
});
test('profilo: sette dimensioni separate, nessun punteggio unico, conteggio senza aiuto', () => {
  const s = fresh();
  ST.sma.record(s, 'deduction', 'c1', 'guided', true, { help: true });
  ST.sma.record(s, 'deduction', 'c1', 'novel', false);
  ST.sma.record(s, 'deduction', 'c2', 'novel', true);
  const p = ST.sma.profile(s);
  assert.equal(p.deduction.n, 3); assert.equal(p.deduction.ok, 2); assert.equal(p.deduction.noHelp, 2); assert.equal(p.deduction.noHelpOk, 1);
  assert.equal(p.planning.n, 0); assert.equal('total' in p, false);
});
test('laboratori: non presentati come disponibili finché non registrati', () => {
  assert.equal(ST.sma.labState('multimove'), null);
  ST.sma.registerLab({ id: 'zz-test', title: 't', ready: true, view: 'x' });
  assert.ok(ST.sma.labState('zz-test'));
});
test('hub: mostra pilastri e dichiara i laboratori non implementati', () => {
  const h = ST.sma.hub(fresh());
  assert.match(h, /Detective Intelligence/); assert.match(h, /Non ancora implementato/); assert.match(h, /non è una valutazione psicometrica/);
});
test('livelli: raccomandazione soft, L0 sempre aperto', () => {
  const s = fresh();
  assert.equal(ST.sma.levelRecommended(s, 0), true);
});
test('regressione: le materie esistenti restano invariate', () => {
  assert.equal(ST.content.subjects.filter(x => x.id !== 'sma').length, 10);
  assert.ok(ST.content.subject('str') && ST.content.subject('mnt'));
});

/* ---- Deduction Lab ---- */
const D = ST.sma.deduction;
test('deduction: tutti i casi superano il risolutore', () => {
  D.cases.forEach(c => { const v = D.validate(c); assert.ok(v.ok, c.id + ': ' + (v.errors || []).join('; ')); });
  assert.ok(D.cases.length >= 4);
});
test('deduction: il posteriore somma a 1 e il prior è uniforme senza indizi', () => {
  const c = D.byId('ded-sito-lento'), p0 = D.posterior(c, []), p1 = D.posterior(c, ['k1', 'k2', 'k3']);
  assert.ok(Math.abs(Object.values(p0).reduce((a, b) => a + b, 0) - 1) < 1e-9); assert.ok(Math.abs(p0.db - 0.25) < 1e-9);
  assert.ok(Math.abs(Object.values(p1).reduce((a, b) => a + b, 0) - 1) < 1e-9); assert.ok(p1.img > 0.8);
});
test('deduction: il budget limita davvero le verifiche e gli indizi cambiano lo stato', () => {
  const c = D.byId('ded-sito-lento'), st = D.start(c);
  assert.equal(st.revealed.length, 1);
  assert.ok(D.reveal(c, st, 'k5')); assert.equal(st.spent, 2); assert.ok(D.reveal(c, st, 'k6')); assert.equal(st.spent, 4);
  assert.equal(D.reveal(c, st, 'k5'), false, 'indizio già richiesto');
  assert.equal(D.reveal(c, st, 'k7'), true); assert.equal(st.spent, 5);
  assert.equal(D.reveal(c, st, 'k2'), false, 'budget esaurito');
});
test('deduction: eccesso di sicurezza e contraddizioni sono segnalati, la buona decisione con esito sfavorevole è distinta', () => {
  const c = D.byId('ded-documento-modificato');
  // conclusione corretta ma con quasi nessuna prova e 99%: processo da correggere
  let st = D.start(c); let r = D.finish(c, st, { pick: 'c', conf: 99, support: [] });
  assert.ok(r.outcome); assert.ok(r.flags.some(f => f.k === 'over')); assert.equal(r.goodProcess, false); assert.match(r.label, /ragionamento da correggere/);
  // processo corretto: prove e confidenza proporzionate
  st = D.start(c); ['k2', 'k3', 'k6'].forEach(id => D.reveal(c, st, id)); r = D.finish(c, st, { pick: 'c', conf: 60, support: ['k6'] });
  assert.ok(r.outcome);
  // concludere Bruno nonostante il badge: contraddizione ignorata
  st = D.start(c); D.reveal(c, st, 'k3'); r = D.finish(c, st, { pick: 'b', conf: 80, support: [] });
  assert.ok(r.flags.some(f => f.k === 'ignored')); assert.equal(r.outcome, false);
});
test('deduction: nel caso aperto sospendere il giudizio è la buona decisione', () => {
  const c = D.byId('ded-vendite-calo'), st = D.start(c);
  ['k2', 'k3', 'k4'].forEach(id => D.reveal(c, st, id));
  const r1 = D.finish(c, st, { pick: D.OPEN }); assert.ok(r1.outcome && r1.goodProcess); assert.match(r1.label, /Buona decisione/);
  const r2 = D.finish(c, st, { pick: 'prezzo', conf: 90, support: [] }); assert.equal(r2.outcome, false); assert.ok(r2.flags.some(f => f.k === 'open'));
});
test('deduction: il salvataggio registra evidenze separate (deduzione, decisione, calibrazione) senza padronanza automatica', () => {
  const s = fresh(), c = D.byId('ded-batteria'), st = D.start(c); ['k2', 'k3'].forEach(id => D.reveal(c, st, id));
  const ans = { pick: 'app', conf: 80, support: ['k3'] }, r = D.finish(c, st, ans); D.save(s, c, st, ans, r);
  const p = ST.sma.profile(s);
  assert.equal(p.deduction.n, 1); assert.equal(p.decision.n, 1); assert.equal(p.calibration.n, 1);
  assert.equal(ST.sma.S(s).cases[c.id].tries, 1);
});
test('deduction: il laboratorio risulta disponibile nell’hub', () => {
  assert.ok(ST.sma.labState('deduction'));
});
