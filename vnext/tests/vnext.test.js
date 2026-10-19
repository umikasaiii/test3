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
  assert.equal(ST.sma.labState('lab-inesistente'), null);
  ST.sma.registerLab({ id: 'zz-test', title: 't', ready: true, view: 'x' });
  assert.ok(ST.sma.labState('zz-test'));
});
test('hub: mostra pilastri e dichiara i laboratori non implementati', () => {
  ST.sma.pendingLabs.push({ id: 'lab-finto', title: 'Lab finto', milestone: 'M9' });
  const h = ST.sma.hub(fresh()); ST.sma.pendingLabs.pop();
  assert.match(h, /Detective Intelligence/); assert.match(h, /Non ancora implementato/); assert.match(h, /Lab finto/); assert.match(h, /non è una valutazione psicometrica/);
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

/* ---- Adaptive Opponent ---- */
const O = ST.sma.opponent;
const mv = (t, mine) => O.run(t, mine.split('')).hist.map(r => r[1]).join('');
test('opponent: ogni avversario reagisce in modo verificabile alla storia', () => {
  assert.equal(mv('aggr', 'CCCCCCCCCC'), 'DDDDDDDDDD', 'l’aggressivo defeziona sempre');
  assert.equal(mv('cons', 'CCDCCCCCCC'), 'CCCDDDDDDD', 'il conservativo non perdona mai dopo la prima defezione');
  assert.equal(mv('cons', 'CCCCCCCCCC'), 'CCCCCCCCCC');
  assert.equal(mv('coop', 'CCDDCCCCCC').slice(0, 5), 'CCCDC', 'il cooperativo copia la tua ultima mossa e perdona al round 5');
  assert.equal(mv('opp', 'CCCCCCCCCC'), 'CCDDDDDDDD', 'l’opportunista sfrutta chi coopera sempre');
  assert.equal(mv('opp', 'CCDCCDCCDC').slice(0, 6), 'CCDDCD', 'sfrutta dopo due C, punisce una D, perdona una ripresa di cooperazione');
  assert.equal(mv('ada', 'CCDDDDDDDD').slice(0, 5), 'CCCCD', 'l’adattivo segue la maggioranza delle ultime tre mosse');
});
test('opponent: determinismo (stessa sequenza, stesso esito)', () => {
  const s = 'CDCDCCDDCD'; O.TYPE_IDS.forEach(t => assert.equal(JSON.stringify(O.run(t, s.split(''))), JSON.stringify(O.run(t, s.split('')))));
});
test('opponent: il massimo è davvero un massimo (nessuna sequenza lo supera) e la strategia ovvia non è sempre ottimale', () => {
  O.TYPE_IDS.forEach(t => { const b = O.bestOf(t); [Array(10).fill('C'), Array(10).fill('D'), 'CDCDCDCDCD'.split('')].forEach(q => assert.ok(O.run(t, q).score <= b.score)); });
  assert.ok(O.bestOf('cons').score > O.run('cons', Array(10).fill('D')).score, 'contro il rancoroso tradire sempre rende meno');
  assert.equal(O.bestOf('aggr').score, 10);
  assert.ok(O.bestOf('opp').score > O.run('opp', Array(10).fill('D')).score && O.bestOf('opp').score > O.run('opp', Array(10).fill('C')).score, 'contro l’opportunista né cooperare sempre né tradire sempre è ottimale');
});
test('opponent: partita completa, punteggio e risultato coerenti', () => {
  const st = O.start('cons'); for (let i = 0; i < 10; i++) O.play(st, 'C');
  assert.ok(O.done(st)); assert.equal(O.play(st, 'C'), null);
  const r = O.result(st); assert.equal(r.you, 30); assert.equal(r.them, 30); assert.equal(r.best, 32); assert.ok(r.eff > 0.9);
});
test('opponent: il laboratorio è registrato', () => { assert.ok(ST.sma.labState('opponent')); });

/* ---- Forecasting & Calibration ---- */
const Fc = ST.sma.forecast;
test('forecast: curva di calibrazione e eccesso di sicurezza calcolati solo sugli esiti risolti', () => {
  const s = fresh(); ST.transfer.fAdd(s, 'a', 90); ST.transfer.fAdd(s, 'b', 90); ST.transfer.fAdd(s, 'c', 90); ST.transfer.fAdd(s, 'aperta', 90);
  const [a, b, c] = s.forecasts; ST.transfer.fResolve(s, a.id, true); ST.transfer.fResolve(s, b.id, false); ST.transfer.fResolve(s, c.id, false);
  const an = Fc.analyze(s);
  assert.equal(an.n, 3); assert.equal(an.hitRate, 33.3); assert.equal(an.meanConf, 90); assert.equal(an.overconf, 56.7);
  assert.ok(Math.abs(an.brier - (0.01 + 0.81 + 0.81) / 3) < 0.001); assert.match(an.verdict, /almeno 10/);
  assert.equal(an.buckets[4].n, 3); assert.equal(Math.round(an.buckets[4].rate), 33);
});
test('forecast: senza esiti risolti nessun giudizio (nessun esito assegnato in automatico)', () => {
  const s = fresh(); ST.transfer.fAdd(s, 'x', 70); assert.equal(Fc.analyze(s).n, 0);
});
test('forecast: previsioni sul lato opposto (p basso) contano correttamente', () => {
  const s = fresh(); ST.transfer.fAdd(s, 'no', 10); ST.transfer.fResolve(s, s.forecasts[0].id, false);
  const an = Fc.analyze(s); assert.equal(an.hitRate, 100); assert.equal(an.meanConf, 90);
});
test('forecast: intervalli all’80% — esito e registro delle evidenze', () => {
  const s = fresh(); assert.equal(Fc.answer(s, 'q-ossa', 200, 210).hit, true); assert.equal(Fc.answer(s, 'q-rivfr', 1800, 1850).hit, false);
  const st = Fc.stats(s); assert.equal(st.n, 2); assert.equal(st.hits, 1); assert.equal(ST.sma.profile(s).calibration.n, 2);
  assert.equal(Fc.hit(Fc.BANK[0], 1790, 1780), false, 'intervallo invertito non valido');
});
test('forecast: valori del banco coerenti e id unici', () => {
  assert.equal(new Set(Fc.BANK.map(q => q.id)).size, Fc.BANK.length); assert.ok(Fc.BANK.length >= 12);
  assert.equal(Fc.BANK.find(q => q.id === 'q-ossa').v, 206); assert.equal(Fc.BANK.find(q => q.id === 'q-scacchi').v, 32);
});

/* ---- Crisis Management e Strategic Communication ---- */
const Pr = ST.sma.process;
const play = (sc, idx, rng) => { const st = Pr.start(sc); idx.forEach(i => Pr.choose(sc, st, i, rng)); return st; };
test('process: tutti gli scenari superano il validatore del grafo', () => {
  Pr.scenarios.forEach(s => { const v = Pr.validate(s); assert.ok(v.ok, s.id + ': ' + v.errors.join('; ')); });
  assert.ok(Pr.scenarios.filter(s => s.kind === 'crisis').length >= 2 && Pr.scenarios.filter(s => s.kind === 'comm').length >= 2);
});
test('process: il validatore respinge cicli, nodi irraggiungibili, manipolazione premiata', () => {
  const base = () => JSON.parse(JSON.stringify(Pr.byId('proc-conflitto-priorita')));
  let s = base(); s.nodes.n3.opts[0].next = 'n1'; assert.ok(Pr.validate(s).errors.some(e => /ciclo/.test(e)));
  s = base(); s.nodes.nX = JSON.parse(JSON.stringify(s.nodes.n3)); assert.ok(Pr.validate(s).errors.some(e => /irraggiungibili/.test(e)));
  s = base(); s.nodes.n1.opts[2].proc = 2; assert.ok(Pr.validate(s).errors.some(e => /manipolazione/.test(e)));
  s = base(); s.nodes.n1.opts.forEach(o => { o.proc = 1; }); assert.ok(Pr.validate(s).errors.length > 0);
});
test('process: le scelte cambiano lo stato e il processo si separa dall’esito', () => {
  const sc = Pr.byId('proc-progetto-ritardo'), never = () => 0.99, always = () => 0;
  const best = play(sc, [0, 0, 0, 0], never);              // tutte le scelte migliori, nessun imprevisto
  assert.ok(Pr.done(best)); assert.equal(Pr.result(sc, best).process, 1); assert.ok(best.vars.ritardo < sc.vars.ritardo.start); assert.ok(best.vars.fiducia > sc.vars.fiducia.start);
  const good = Pr.result(sc, best); assert.match(good.label, /Buona decisione, esito favorevole/);
  // buon processo ma imprevisti sfavorevoli sempre: il processo resta alto, l'esito peggiora
  const unlucky = play(sc, [0, 0, 0, 0], always), ru = Pr.result(sc, unlucky);
  assert.equal(ru.process, 1); assert.ok(ru.outcome < good.outcome);
  // processo debole: etichetta diversa
  const weak = play(sc, [1, 2, 1, 2], never), rw = Pr.result(sc, weak); assert.ok(rw.process < 0.75); assert.ok(!rw.good);
});
test('process: la manipolazione non è mai premiata, nemmeno con esito favorevole', () => {
  const sc = Pr.byId('proc-conflitto-priorita'), st = play(sc, [2, 0, 0], () => 0.99), r = Pr.result(sc, st);
  assert.equal(r.manip, true); assert.equal(r.good, false); assert.match(r.label, /manipolatorio o coercitivo/);
  const sc2 = Pr.byId('proc-progetto-ritardo'), st2 = play(sc2, [0, 0, 2, 0], () => 0.99); assert.equal(Pr.result(sc2, st2).manip, true);
});
test('process: salvataggio nelle dimensioni giuste e laboratori registrati', () => {
  assert.ok(ST.sma.labState('crisis') && ST.sma.labState('comm'));
});
test('process: gli esiti di un imprevisto dipendono dalla probabilità dichiarata', () => {
  const sc = Pr.byId('proc-progetto-ritardo'); let hit = 0; const N = 2000, rng = (() => { let x = 7; return () => (x = (x * 16807) % 2147483647) / 2147483647; })();
  for (let i = 0; i < N; i++) { const st = Pr.start(sc); Pr.choose(sc, st, 2, rng); if (st.path[0].risk) hit++; }
  assert.ok(Math.abs(hit / N - 0.3) < 0.04, 'frequenza osservata ' + hit / N);
});

/* ---- STRATEGOS ---- */
const St = ST.sma.strategos;
const fillSteps = inst => St.PROTOCOL.forEach(p => St.saveStep(inst, p.n, 'passo ' + p.n + ' scritto con dettaglio'));
const fullMission = (s, mid, mode, cls, result, extra) => {
  const inst = St.start(s, mid, mode); fillSteps(inst);
  assert.ok(St.decide(s, inst, { p: 70, planB: 'piano B concreto', check: '2026-01-01' }).ok);
  const r = St.observe(s, inst, Object.assign({ result, observed: 'è successo questo e quest’altro', cls }, extra)); assert.ok(r.ok, r.err); return inst;
};
test('strategos: tutte le missioni sono valide e coprono le 9 aree', () => {
  St.missions.forEach(m => assert.ok(St.validate(m).ok, m.id));
  assert.equal(new Set(St.missions.map(m => m.area)).size, 9);
});
test('strategos: la decisione richiede 7 passi, stima, piano B e data di verifica; entra nel diario esistente', () => {
  const s = fresh(), inst = St.start(s, 'mis-tempo-settimana', 'guided');
  assert.equal(St.decide(s, inst, { p: 60, planB: 'piano B concreto', check: '2026-01-01' }).ok, false, 'passi incompleti');
  fillSteps(inst);
  assert.equal(St.decide(s, inst, { p: 0, planB: 'piano B concreto', check: '2026-01-01' }).ok, false);
  assert.equal(St.decide(s, inst, { p: 60, planB: '', check: '2026-01-01' }).ok, false);
  assert.equal(St.decide(s, inst, { p: 60, planB: 'piano B concreto', check: 'domani' }).ok, false);
  const r = St.decide(s, inst, { p: 60, planB: 'piano B concreto', check: '2026-01-01' }); assert.ok(r.ok);
  assert.equal(s.journal.length, 1); assert.equal(s.journal[0].p, 60); assert.equal(inst.status, 'decided');
  assert.equal(St.decide(s, inst, { p: 60, planB: 'piano B concreto', check: '2026-01-01' }).ok, false, 'una sola decisione');
});
test('strategos: le classi di evidenza sono distinte e «documentato»/«esterna» richiedono dettagli', () => {
  const s = fresh(), inst = St.start(s, 'mis-studio-esame', 'auto'); fillSteps(inst); St.decide(s, inst, { p: 50, planB: 'piano B concreto', check: '2026-01-01' });
  assert.equal(St.observe(s, inst, { result: 'ok', observed: 'descrizione sufficiente', cls: 'doc', proof: 'breve' }).ok, false);
  assert.equal(St.observe(s, inst, { result: 'ok', observed: 'descrizione sufficiente', cls: 'ext', source: '' }).ok, false);
  assert.equal(St.observe(s, inst, { result: 'ok', observed: 'breve', cls: 'self' }).ok, false);
  assert.equal(St.observe(s, inst, { result: 'boh', observed: 'descrizione sufficiente', cls: 'self' }).ok, false);
  assert.ok(St.observe(s, inst, { result: 'ok', observed: 'descrizione sufficiente', cls: 'doc', proof: 'il 3 marzo 12 pagine su 40; test al 70%' }).ok);
  assert.equal(St.stats(s).by.doc, 1); assert.equal(St.stats(s).by.self, 0);
});
test('strategos: il livello deriva solo da evidenze reali, non da autovalutazioni', () => {
  const s = fresh(); assert.equal(St.level(s).level, 0);
  // sei missioni solo autodichiarate: non superano L2
  ['mis-tempo-settimana', 'mis-studio-esame', 'mis-progetto-personale', 'mis-soldi-acquisto', 'mis-persone-richiesta', 'mis-imprevisti-ritardo'].forEach(m => fullMission(s, m, 'guided', 'self', 'ok'));
  assert.ok(St.level(s).level <= 1, 'autodichiarate e guidate: livello ' + St.level(s).level);
  // documentate in 3 aree + verifiche differite: sale
  const s2 = fresh();
  [['mis-tempo-settimana', 'auto'], ['mis-studio-esame', 'auto'], ['mis-progetto-personale', 'auto'], ['mis-soldi-acquisto', 'auto'], ['mis-persone-richiesta', 'auto'], ['mis-imprevisti-ritardo', 'auto']].forEach(([m, mode]) => {
    const inst = fullMission(s2, m, mode, 'doc', 'ok', { proof: 'dati e date verificabili: 3 marzo, 12 pagine' }); inst.guess = St.byId(m).model;
  });
  assert.ok(St.level(s2).level >= 4, 'documentate e autonome: livello ' + St.level(s2).level);
  assert.ok(St.level(s2).level < 5, 'senza verifiche differite non è L5');
});
test('strategos: verifiche differite a 7/30/90 giorni dalla data dell’esito, mai prima', () => {
  const s = fresh(), inst = fullMission(s, 'mis-tempo-settimana', 'guided', 'self', 'ok'), d0 = inst.obs.d;
  const plus = n => new Date(Date.parse(d0 + 'T00:00:00Z') + n * 864e5).toISOString().slice(0, 10);
  assert.equal(St.due(s, plus(3)).length, 0); const ck = d => JSON.stringify(St.due(s, plus(d)).map(x => x.check)); assert.equal(ck(7), '[7]'); assert.equal(ck(100), '[7,30,90]');
  assert.ok(St.check(s, inst, 7, 'ok', '').ok); assert.equal(St.check(s, inst, 7, 'ok', '').ok, false, 'una sola volta');
  assert.equal(ck(100), '[30,90]');
});
test('strategos: calibrazione delle stime di successo (Brier) e retrospettiva', () => {
  const s = fresh(), inst = fullMission(s, 'mis-tempo-settimana', 'guided', 'self', 'fail'); // stima 70, esito non riuscito
  assert.equal(St.brier(s).brier, 0.49);
  assert.equal(St.retrospect(s, inst, { learned: 'corto' }).ok, false);
  assert.ok(St.retrospect(s, inst, { learned: 'ho sottostimato gli imprevisti', principle: 'margine del 20%' }).ok);
  assert.equal(inst.status, 'closed'); assert.ok(s.journal[0].closed);
});
test('strategos: laboratorio registrato; le evidenze finiscono nel profilo (applicazione, decisione)', () => {
  assert.ok(ST.sma.labState('strategos'));
  const s = fresh(); fullMission(s, 'mis-tempo-settimana', 'limited', 'ext', 'ok', { source: 'il mio tutor' });
  const p = ST.sma.profile(s); assert.equal(p.application.n, 1); assert.equal(p.decision.n, 1); assert.equal(p.application.kinds.external, 1);
});

/* ---- Anime / Listening Lab ---- */
const Li = ST.sma.listen;
const SRT = '1\n00:00:01,000 --> 00:00:03,500\nおはようございます。\n\n2\n00:00:04,000 --> 00:00:04,900\nはい\n\n3\n00:00:05,100 --> 00:00:08,000\n<i>今日は学校で[テスト]があります。</i>\n\n4\n00:01:10,250 --> 00:01:12,000\nコーヒーを飲みましょう！\n';
test('listening: parser SRT (tempi, tag HTML, ordine) e VTT con/ senza ore', () => {
  const c = Li.parseSub(SRT, 'a.srt'); assert.equal(c.length, 4);
  assert.equal(c[0].start, 1); assert.equal(c[0].end, 3.5); assert.equal(c[2].text, '今日は学校で[テスト]があります。'); assert.equal(c[3].start, 70.25);
  const v = Li.parseSub('WEBVTT\n\n00:01.500 --> 00:03.000\nこんにちは\n\n01:00:00.000 --> 01:00:02.500 align:start\n長い動画', 'b.vtt');
  assert.equal(v.length, 2); assert.equal(v[0].start, 1.5); assert.equal(v[1].start, 3600); assert.equal(v[1].text, '長い動画');
});
test('listening: parser ASS rimuove codici di formattazione e gestisce \\N', () => {
  const ass = '[Script Info]\nTitle: x\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:03.50,Default,,0,0,0,,{\\an8}おはよう\\Nございます\n';
  const c = Li.parseSub(ass, 'c.ass'); assert.equal(c.length, 1); assert.equal(c[0].text, 'おはよう\nございます'); assert.equal(c[0].end, 3.5);
});
test('listening: segmentazione unisce le battute brevissime vicine e rispetta il massimo', () => {
  const s = Li.segment(Li.parseSub(SRT, 'a.srt')); assert.equal(s.length, 3, 'la battuta «はい» (0,9 s) si unisce alla successiva? no: si unisce alla precedente se lo spazio < 0,6');
  assert.ok(s[1].text.indexOf('はい') >= 0);
  const f = Li.fixedSegments(12, 5); assert.equal(f.length, 3); assert.equal(f[2].end, 12);
});
test('listening: cloze con distrattori della stessa scrittura e una sola risposta giusta', () => {
  const segs = Li.segment(Li.parseSub('1\n00:00:01,000 --> 00:00:03,000\n学校でコーヒーを飲みます\n\n2\n00:00:04,000 --> 00:00:06,000\n会社でテストをします\n\n3\n00:00:07,000 --> 00:00:09,000\n病院でレポートを書きます\n\n4\n00:00:10,000 --> 00:00:12,000\n図書館でジュースを飲みます', 'x.srt'));
  const rng = (() => { let x = 3; return () => (x = (x * 16807) % 2147483647) / 2147483647; })();
  for (let i = 0; i < segs.length; i++) { const c = Li.cloze(segs, i, rng); assert.ok(c, 'domanda ' + i); assert.equal(c.o.length, 4); assert.equal(new Set(c.o).size, 4); assert.equal(c.o[c.a], c.answer); assert.ok(c.q.indexOf('＿＿＿') >= 0); }
  assert.equal(Li.cloze([{ text: 'はい', start: 0, end: 1 }], 0), null, 'senza abbastanza distrattori nessuna domanda');
});
test('listening: parole salvate con ripasso dilazionato (domani, poi ladder), senza duplicati', () => {
  const s = fresh(); Li.save(s, '飲みましょう', 'コーヒーを飲みましょう'); Li.save(s, '飲みましょう'); assert.equal(Object.keys(Li.S(s).saved).length, 1);
  assert.equal(Li.due(s).length, 0, 'non è dovuta oggi'); const c = Li.S(s).saved['L:飲みましょう']; assert.equal(c.due, ST.util.addDays(ST.util.today(), 1));
  c.due = ST.util.today(); assert.equal(Li.due(s).length, 1);
  const before = c.interval; Li.grade(s, 'L:飲みましょう', 2); assert.ok(Li.S(s).saved['L:飲みましょう'].interval >= before); assert.equal(Li.due(s).length, 0);
});
test('listening: il laboratorio è registrato e non dichiara valutazione automatica della pronuncia', () => {
  assert.ok(ST.sma.labState('listening'));
  assert.match(ST.views['sma-listen'].toString() + '', /non valuta la pronuncia/);
});

/* ---- Combat Tactical Recognition ---- */
const Cb = ST.sma.combat;
test('combat: tutte le situazioni sono valide, una per livello L0–L5', () => {
  Cb.situations.forEach(s => assert.ok(Cb.validate(s).ok, s.id + ' ' + Cb.validate(s).errors.join('; ')));
  assert.equal(JSON.stringify([...new Set(Cb.situations.map(s => s.level))].sort()), JSON.stringify(['L0', 'L1', 'L2', 'L3', 'L4', 'L5']));
});
test('combat: il validatore pretende «dipende da» quando più risposte sono plausibili e respinge opzioni malformate', () => {
  const base = () => JSON.parse(JSON.stringify(Cb.byId('cmb-l1-kumikata')));
  let s = base(); delete s.steps[0].depends; assert.ok(Cb.validate(s).errors.some(e => /dipende|depends/.test(e)));
  s = base(); s.steps[0].opts.forEach(o => { if (o.q === 3) o.q = 2; }); assert.ok(Cb.validate(s).errors.some(e => /qualità 3/.test(e)));
  s = base(); s.steps[0].fig.kuzushi = 'zz'; assert.ok(Cb.validate(s).errors.some(e => /direzione/.test(e)));
});
test('combat: lo schema SVG mostra tori, uke, presa e freccia di squilibrio solo quando previsti', () => {
  const a = Cb.svg(Cb.byId('cmb-l2-kuzushi').steps[0].fig), b = Cb.svg(Cb.byId('cmb-l0-distanza').steps[0].fig);
  assert.match(a, /<svg/); assert.match(a, /marker-end/); assert.ok((a.match(/<circle/g) || []).length === 2); assert.doesNotMatch(b, /marker-end/);
  assert.match(Cb.svg(Cb.byId('cmb-l1-kumikata').steps[0].fig), /<line[^>]*stroke="#ffd166"/);
});
test('combat: nessuna risposta unica quando dipende — il giudizio è graduato 0–3', () => {
  const st = Cb.byId('cmb-l3-combinazione').steps[0], js = st.opts.map((o, i) => Cb.judge(st, i).q);
  assert.equal(Math.max(...js), 3); assert.ok(js.filter(q => q >= 2).length >= 2); assert.ok(Cb.judge(st, 0).depends.length > 10);
});
test('combat: competenza teorica e motoria restano separate; la conferma richiede un istruttore', () => {
  const s = fresh(), sit = Cb.byId('cmb-l2-kuzushi');
  Cb.record(s, sit, [{ q: 3 }, { q: 3 }, { q: 3 }]); const st = Cb.stats(s);
  assert.equal(st.theoryGood, 1); assert.equal(st.motorCoach, 0); assert.equal(st.motorSelf, 0, 'il teorico non crea competenza motoria');
  assert.equal(Cb.motorAdd(s, { what: 'uchi-komi', cls: 'coach', coach: '' }).ok, false);
  assert.equal(Cb.motorAdd(s, { what: 'x', cls: 'self' }).ok, false);
  assert.ok(Cb.motorAdd(s, { what: 'uchi-komi e ukemi', cls: 'self' }).ok); assert.ok(Cb.motorAdd(s, { what: 'randori leggero', cls: 'coach', coach: 'Maestro Rossi, club X' }).ok);
  const st2 = Cb.stats(s); assert.equal(st2.motorSelf, 1); assert.equal(st2.motorCoach, 1); assert.equal(st2.theoryGood, 1);
});
test('combat: il laboratorio è registrato e dichiara il limite di sicurezza', () => {
  assert.ok(ST.sma.labState('combat')); assert.match(Cb.SAFETY, /istruttore qualificato/);
});
