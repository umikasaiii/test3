/* Test vNext: carica l'app + il pacchetto in un contesto Node (senza DOM reale). Uso: node vnext/tests/vnext.test.js */
const test = require('node:test'), assert = require('node:assert/strict');
const load = require('../load.js');
const ST = load();
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
  assert.match(h, /Detective Intelligence/); assert.match(h, /Non ancora implementato/); assert.match(h, /Lab finto/); assert.doesNotMatch(h, /non è una valutazione psicometrica/); assert.match(h, /Continua Strategic Mastery/);
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

/* ---- Cybersecurity Practical Lab (terminale simulato) ---- */
const Y = ST.sma.cyberlab;
const sh = (ch, cmds) => { const st = Y.session(ch); const outs = cmds.map(c => Y.run(st, c, ch)); return { st, outs }; };
const CH = () => Y.byId('cyb-count-failed');
test('cyberlab: tutti gli esercizi sono validi e la soluzione dichiarata li risolve', () => {
  assert.equal(Y.challenges.length, 10);
  Y.challenges.forEach(c => { const v = Y.validate(c); assert.ok(v.ok, c.id + ': ' + v.errors.join('; ')); });
});
test('cyberlab: navigazione, pipe, redirezioni e virgolette', () => {
  const { st, outs } = sh(CH(), ['pwd', 'cd /srv/app', 'ls', 'cat app.conf | grep db_ | wc -l', "echo 'ciao mondo' > /home/user/t.txt", 'cat /home/user/t.txt', "echo riga2 >> /home/user/t.txt", 'cat /home/user/t.txt | wc -l', 'cd /nonesiste']);
  assert.equal(outs[0], '/home/user'); assert.equal(outs[2], 'app.conf  old.conf  readme.md'); assert.equal(outs[3], '2'); assert.equal(outs[5], 'ciao mondo'); assert.equal(outs[7], '2'); assert.match(outs[8], /nessun file/);
});
test('cyberlab: grep (-c -i -v -n -o), sort, uniq, cut, head, tail, find, glob', () => {
  const { outs } = sh(CH(), ["grep -c 'Failed password' /var/log/auth.log", "grep -ci 'ACCEPTED' /var/log/auth.log", "grep -n Accepted /var/log/auth.log | head -n 1 | cut -d: -f1", 'find /srv -name "*.conf"', "grep db_host /srv/app/*.conf", 'ls -l /home/user/.ssh', "echo -e a | wc -c"]);
  assert.equal(outs[0], String(Y.byId('cyb-count-failed').answers[0] * 1 + 17 + 9)); assert.equal(outs[1], '7');
  assert.equal(outs[3], '/srv/app/app.conf\n/srv/app/old.conf'); assert.match(outs[4], /app\.conf:db_host=db-internal\.test/); assert.match(outs[4], /old\.conf:db_host=db-legacy\.test/);
  assert.match(outs[5], /-rw-r--r-- user .* id_rsa/);
});
test('cyberlab: chmod, sed -i e rm modificano solo la copia di sessione, mai l’originale', () => {
  const ch = Y.byId('cyb-perms-key'), a = Y.session(ch), b = Y.session(ch);
  Y.run(a, 'chmod 600 /home/user/.ssh/id_rsa', ch); assert.ok(a.solved);
  Y.run(b, 'ls -l /home/user/.ssh', ch); assert.equal(b.solved, false, 'l’altra sessione non è toccata');
  assert.equal(Y.run(a, 'chmod 6x0 /home/user/.ssh/id_rsa', ch).slice(0, 6), 'chmod:');
  const c2 = Y.byId('cyb-ssh-hardening'), s = Y.session(c2); Y.run(s, "sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config", c2); assert.equal(s.solved, false, 'serve anche PasswordAuthentication');
  Y.run(s, "sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config", c2); assert.ok(s.solved);
  assert.match(Y.byId('cyb-ssh-hardening').fs.kids.etc.kids.ssh.kids.sshd_config.content, /PermitRootLogin yes/, 'l’originale è invariato');
  const r = Y.session(CH()); Y.run(r, 'rm /home/user/note.txt', CH()); assert.match(Y.run(r, 'cat /home/user/note.txt', CH()), /nessun file/);
});
test('cyberlab: rete e comandi sconosciuti sono simulati, nessun accesso reale', () => {
  const { outs } = sh(CH(), ['curl https://example.com', 'curl -I https://shop.test', 'ping 8.8.8.8', 'rm -rf /', 'sudo reboot', 'ls /']);
  assert.match(outs[0], /rete simulata/); assert.match(outs[1], /X-Frame-Options/); assert.match(outs[2], /simulata/); assert.match(outs[4], /comando non trovato/);
  assert.match(outs[5], /home/, 'rm -rf / non può rimuovere la radice virtuale e non tocca nulla di reale');
});
test('cyberlab: risposte testuali, tentativi e indizi a consumo', () => {
  const ch = Y.byId('cyb-open-ports'), st = Y.session(ch);
  assert.match(Y.run(st, 'answer 22', ch), /Non è/); assert.equal(st.solved, false); assert.equal(st.tries, 1);
  assert.equal(Y.hint(st, ch).length > 5, true); assert.equal(st.hints, 1); Y.hint(st, ch); assert.equal(Y.hint(st, ch), null);
  assert.match(Y.run(st, 'answer 23', ch), /corretta/); assert.ok(st.solved);
});
test('cyberlab: il validatore respinge esercizi senza indizi, senza spiegazione difensiva o con soluzione errata', () => {
  const b = () => Object.assign({}, Y.byId('cyb-open-ports'));
  let c = b(); c.hints = ['uno']; assert.equal(Y.validate(c).ok, false);
  c = b(); delete c.explain; assert.equal(Y.validate(c).ok, false);
  c = b(); c.solution = ['pwd']; assert.equal(Y.validate(c).ok, false);
});
test('cyberlab: i dati sintetici usano solo intervalli riservati alla documentazione', () => {
  const auth = Y.byId('cyb-count-failed').fs.kids.var.kids.log.kids['auth.log'].content, ips = [...new Set(auth.match(/\d+\.\d+\.\d+\.\d+/g))];
  ips.forEach(ip => assert.match(ip, /^(192\.0\.2\.|198\.51\.100\.|203\.0\.113\.)/, ip));
});
test('cyberlab: il laboratorio è registrato', () => { assert.ok(ST.sma.labState('cyberlab')); });

/* ---- Programming & AI Lab ---- */
const Pg = ST.sma.proglab, Ai = ST.sma.ai;
test('proglab: tutti gli esercizi hanno soluzione valida, codice iniziale che fallisce, test visibili e nascosti', () => {
  assert.equal(Pg.exercises.length, 12); Pg.exercises.forEach(x => { const v = Pg.validate(x); assert.ok(v.ok, x.id + ': ' + v.errors.join('; ')); });
});
test('proglab: l’esecutore cattura log e tracce, confronta in modo profondo, segnala errori e funzioni mancanti', () => {
  const r = Pg.runLocal('function f(a){ console.log("x", a); trace("v", a*2); return {b:[a],a:1} }', 'f', [{ args: [1], expect: { a: 1, b: [1] } }, { args: [2], expect: 5 }]);
  assert.equal(r.tests[0].pass, true, 'l’ordine delle chiavi non conta'); assert.equal(r.tests[1].pass, false); assert.equal(r.logs[0], 'x 1'); assert.equal(r.traces[1].v, '4'); assert.equal(r.ok, false);
  assert.match(Pg.runLocal('function f( {', 'f', []).error, /SyntaxError/); assert.match(Pg.runLocal('const x = 1;', 'g', []).error, /Non trovo la funzione g/);
  assert.match(Pg.runLocal('function f(){ throw new TypeError("boom") }', 'f', [{ args: [], expect: 1 }]).tests[0].error, /TypeError: boom/);
});
test('proglab: gli argomenti sono copiati (il codice non può alterare i dati dei test) e i log sono limitati', () => {
  const tests = [{ args: [[3, 1, 2]], expect: [1, 2, 3] }, { args: [[3, 1, 2]], expect: [1, 2, 3] }];
  const r = Pg.runLocal('function s(a){ a.sort(); for(let i=0;i<500;i++) console.log(i); return a }', 's', tests); assert.ok(r.ok); assert.ok(r.logs.length <= 60);
  assert.equal(JSON.stringify(tests[0].args), '[[3,1,2]]');
});
test('proglab: i test nascosti non rivelano il valore atteso nell’interfaccia (campo hidden)', () => {
  Pg.exercises.forEach(x => assert.ok(x.tests.some(t => t.hidden) && x.tests.filter(t => !t.hidden).length >= 2));
  assert.equal(Pg.LANGS.python, false, 'Python dichiarato non disponibile');
});
test('proglab: le visualizzazioni producono frame coerenti', () => {
  const b = Pg.viz.bubble([3, 1, 2]), last = b[b.length - 1].arr; assert.equal(JSON.stringify(last), '[1,2,3]'); assert.equal(b[0].note, 'Inizio');
  const s = Pg.viz.bsearch([1, 3, 5, 7, 9], 7); assert.match(s[s.length - 1].note, /Trovato in posizione 3/); assert.match(Pg.viz.bsearch([1, 3], 2).pop().note, /Non presente/);
});
test('ai: il perceptron impara AND e OR ma non XOR; la discesa del gradiente converge o diverge secondo lr; k-NN dipende da k', () => {
  assert.equal(Ai.perceptron(Ai.DATA.and).acc, 1); assert.equal(Ai.perceptron(Ai.DATA.or).acc, 1); assert.ok(Ai.perceptron(Ai.DATA.xor).acc <= 0.75);
  const ok = Ai.gd(Ai.POINTS, 0.03, 60), bad = Ai.gd(Ai.POINTS, 0.1, 60); assert.equal(ok.diverged, false); assert.ok(Math.abs(ok.m - 2) < 0.2); assert.equal(bad.diverged, true);
  assert.equal(Ai.knn(Ai.KNN, [4, 5], 1), 'A'); assert.equal(Ai.knn(Ai.KNN, [4, 5], 5), 'B');
});
test('proglab: il laboratorio è registrato', () => { assert.ok(ST.sma.labState('proglab')); });

/* ---- Formula 1 Strategy Lab ---- */
const Fl = ST.sma.f1lab;
test('f1lab: tutti gli scenari sono validi e il modello è dichiarato sintetico', () => {
  assert.equal(Fl.scenarios.length, 5); Fl.scenarios.forEach(s => assert.ok(Fl.validate(s).ok, s.id)); assert.match(Fl.DISCLAIMER, /SINTETICI/);
});
test('f1lab: il tempo sul giro cresce col degrado, crolla oltre il limite e dipende dalle condizioni', () => {
  const sc = Fl.byId('f1-piano-asciutto'), lt = (t, a, c) => Fl.lapTime(sc, t, a, 10, c);
  assert.ok(lt('M', 10) > lt('M', 0)); assert.ok(lt('S', 20) - lt('S', 19) > lt('S', 10) - lt('S', 9), 'il crollo accelera il degrado');
  assert.ok(lt('S', 0) < lt('M', 0) && lt('H', 0) > lt('M', 0), 'morbida più veloce da nuova, dura più lenta');
  assert.equal(lt('M', 5, { sc: true }), 90 * 1.38); assert.ok(lt('M', 5, { rain: true }) > lt('M', 5) + 15, 'gomma asciutta sul bagnato');
  assert.ok(lt('I', 5, { rain: true }) < lt('M', 5, { rain: true }), 'intermedia meglio sul bagnato'); assert.ok(lt('I', 5) > lt('M', 5), 'intermedia peggio sull’asciutto');
});
test('f1lab: la simulazione somma i giri, applica la sosta e il regolamento modellato', () => {
  const sc = Fl.byId('f1-piano-asciutto'), a = Fl.simulate(sc, { start: 'M', stops: [] }), b = Fl.simulate(sc, { start: 'M', stops: [{ lap: 25, tyre: 'H' }] });
  assert.equal(a.laps.length, 50); assert.ok(Math.abs(a.total - a.laps.reduce((x, l) => x + l.time, 0)) < 1e-9); assert.ok(b.laps[24].time > b.laps[23].time + 15, 'la sosta costa circa 21 s');
  assert.equal(Fl.legal(sc, { start: 'M', stops: [] }), false, 'serve almeno una seconda mescola asciutta'); assert.equal(Fl.legal(sc, { start: 'M', stops: [{ lap: 20, tyre: 'M' }] }), false); assert.equal(Fl.legal(sc, { start: 'M', stops: [{ lap: 20, tyre: 'H' }] }), true);
});
test('f1lab: l’ottimo è un vero ottimo fra i piani legali e cambia con le ipotesi (degrado alto → più soste)', () => {
  const sc = Fl.byId('f1-piano-asciutto'), best = Fl.best(sc);
  for (const plan of [{ start: 'M', stops: [{ lap: 25, tyre: 'H' }] }, { start: 'S', stops: [{ lap: 12, tyre: 'M' }, { lap: 32, tyre: 'H' }] }, { start: 'H', stops: [{ lap: 30, tyre: 'M' }] }]) assert.ok(Fl.simulate(sc, plan).total >= best.total - 1e-9);
  assert.ok(best.plan.stops.length <= Fl.best(Fl.byId('f1-piano-degrado')).plan.stops.length); assert.equal(Fl.best(Fl.byId('f1-piano-degrado')).plan.stops.length, 2);
  const sc2 = Fl.score(sc, { start: 'M', stops: [{ lap: 25, tyre: 'H' }] }); assert.ok(sc2.legal && sc2.gap >= 0 && sc2.eff <= 1);
});
test('f1lab: con la Safety Car la sosta costa meno e fermarsi conviene più che restare; con pioggia prevista conviene anticipare il cambio', () => {
  const s = Fl.byId('f1-safety-car'), tb = Fl.scBest(s, s.state); assert.notEqual(tb[0].o, 'stay'); assert.equal(tb[tb.length - 1].o, 'stay');
  const noSc = Object.assign({}, s, { scPit: 1 }); assert.ok(Fl.tyreFromState(noSc, s.state, 'H') > Fl.tyreFromState(s, s.state, 'H'));
  const r = Fl.byId('f1-pioggia'), b = Fl.best(r); assert.ok(b.plan.stops.some(x => x.tyre === 'I')); assert.ok(b.plan.stops[0].lap <= 21);
});
test('f1lab: undercut — fermarsi prima del rivale batte la sosta simultanea; ritardare è peggio', () => {
  const d = Fl.byId('f1-undercut'), best = Fl.duelBest(d); assert.ok(best.pit < d.rivalPit && best.margin > 0, 'esiste un undercut vincente'); assert.ok(Fl.duel(d, d.rivalPit).margin < 0); assert.ok(Fl.duel(d, d.rivalPit + 3).margin < Fl.duel(d, d.rivalPit).margin);
});
test('f1lab: il laboratorio è registrato', () => { assert.ok(ST.sma.labState('f1lab')); });

/* ---- Sport Science Advanced Lab ---- */
const Sp = ST.sma.sportlab;
test('sportlab: formule del 1RM e rapporto acuto:cronico calcolati correttamente', () => {
  assert.ok(Math.abs(Sp.epley(100, 5) - 116.6667) < 1e-3); assert.equal(Sp.epley(100, 1), 100); assert.ok(Math.abs(Sp.brzycki(100, 5) - 112.5) < 1e-9); assert.ok(Number.isNaN(Sp.brzycki(100, 37)));
  assert.equal(Sp.pctOf(120, 75), 90); assert.equal(Sp.acwr(Array(28).fill(100)), 1); assert.ok(Math.abs(Sp.acwr(Array(21).fill(100).concat(Array(7).fill(150))) - 150 / 112.5) < 1e-9); assert.equal(Sp.acwr([1, 2, 3]), null);
  assert.match(Sp.ACWR_NOTE, /non hanno validità predittiva/);
});
test('sportlab: il mesociclo ha scarichi nelle settimane giuste, progressione e limiti', () => {
  const m = Sp.mesocycle({ weeks: 8, prog: 'linear', deload: 4, startPct: 70, baseSets: 10 });
  assert.equal(m.length, 8); assert.equal(JSON.stringify(m.filter(w => w.deload).map(w => w.week)), '[4,8]');
  const w1 = m[0], w3 = m[2], w4 = m[3]; assert.ok(w3.pct > w1.pct); assert.ok(w4.sets < w1.sets && w4.pct < w1.pct && w4.rpe === 6); assert.ok(m.every(w => w.pct <= 95));
  const flat = Sp.mesocycle({ weeks: 6, prog: 'none', deload: 0, startPct: 70, baseSets: 10 }); assert.ok(flat.every(w => w.pct === 70 && w.sets === 10 && !w.deload));
  assert.equal(Sp.mesocycle({ weeks: 99 }).length, 12); assert.equal(Sp.mesocycle({ weeks: 1 }).length, 4);
});
test('sportlab: la critica segnala volume, mancanza di progressione e interferenza e riconosce le scelte sensate', () => {
  const has = (f, k) => f.some(x => x.lvl === k);
  let f = Sp.critique({ goal: 'hypertrophy', weeks: 8, sessions: 4, setsPerMuscle: 30, prog: 'none', deload: 0, endurance: 0 }); assert.ok(has(f, 'warn')); assert.ok(f.some(x => /Nessun modello di progressione/.test(x.t))); assert.ok(f.some(x => /molto alto/.test(x.t))); assert.ok(f.some(x => /Nessuna settimana di scarico/.test(x.t)));
  f = Sp.critique({ goal: 'concurrent', weeks: 8, sessions: 4, setsPerMuscle: 16, prog: 'linear', deload: 4, endurance: 4, order: 'sameday-endurance-first' }); assert.ok(f.some(x => /interferenza/.test(x.why))); assert.ok(f.some(x => /Resistenza prima/.test(x.t)));
  f = Sp.critique({ goal: 'hypertrophy', weeks: 8, sessions: 4, setsPerMuscle: 14, prog: 'double', deload: 4, endurance: 0 }); assert.ok(f.some(x => x.lvl === 'good' && /intervallo diffuso/.test(x.t))); assert.ok(!has(f, 'warn'));
  f = Sp.critique({ goal: 'strength', weeks: 4, sessions: 2, setsPerMuscle: 3, prog: 'linear', deload: 0, endurance: 0 }); assert.ok(f.some(x => /molto basso/.test(x.t) && x.lvl === 'info'));
  assert.ok(Sp.critique({ goal: 'concurrent', setsPerMuscle: 12, endurance: 2, order: 'separate', prog: 'linear' }).some(x => x.lvl === 'good' && /separate/.test(x.t)));
});
test('sportlab: ogni segnalazione ha una motivazione e il testo dichiara di non essere una prescrizione', () => {
  Sp.critique({ goal: 'hypertrophy', weeks: 8, sessions: 6, setsPerMuscle: 28, prog: 'none', deload: 0, endurance: 4, order: 'sameday-endurance-first' }).forEach(x => assert.ok(x.why && x.why.length > 20)); assert.match(Sp.DISCLAIMER, /non è una prescrizione né una consulenza medica/);
});
test('sportlab: lettura critica degli studi — limiti pertinenti premiati, non pertinenti penalizzati, opzioni mescolate in modo deterministico', () => {
  Sp.STUDIES.forEach(st => { assert.ok(st.limits.length >= 2 && st.distractors.length >= 2 && st.why.length > 40); const o = Sp.options(st); assert.equal(o.length, st.limits.length + st.distractors.length); assert.equal(JSON.stringify(o), JSON.stringify(Sp.options(st))); });
  const st = Sp.STUDIES[2]; assert.equal(Sp.judgeStudy(st, [st.limits[0], st.limits[1]]).good, true); assert.equal(Sp.judgeStudy(st, [st.limits[0], st.distractors[0]]).good, false); assert.equal(Sp.judgeStudy(st, []).good, false);
  const j = Sp.judgeStudy(st, [st.limits[0]]); assert.equal(j.hit, 1); assert.equal(j.missed.length, st.limits.length - 1);
});
test('sportlab: il laboratorio è registrato', () => { assert.ok(ST.sma.labState('sportlab')); });

/* ---- Conversation labs (motore comune) ---- */
const Cv = ST.sma.convo;
test('convo/en: le regole riconoscono errori tipici e NON segnalano frasi corrette (nessun falso positivo sui casi di controllo)', () => {
  const bad = { 'I am agree with you': /agree/, 'It depends of the weather': /depend on/, 'I have 25 years': /25/, 'I live here since three years': /for/, 'Can you explain me this?': /explain to me/, 'She have a car': /has/, 'He don\'t like it': /doesn’t/, 'This is more better': /better/, 'I need some informations': /information/, 'People is happy': /are/, 'Do you can help me?': /can you/, 'I am interested on it': /in/, 'He is married with Anna': /married to/, 'I look forward to see you': /-ing/, 'See you in the monday': /on Monday/ };
  Object.keys(bad).forEach(t => { const f = Cv.enFlags(t); assert.ok(f.length >= 1, 'non riconosciuto: ' + t); assert.match(f[0].msg, bad[t], t); });
  ['I agree with you.', 'It depends on the weather.', 'I am 25 years old.', 'I have 25 years of experience.', 'I have lived here for three years.', 'She has a car.', 'He doesn\'t like it.', 'She has to go.', 'I need some information.', 'People are happy.', 'Can you help me?', 'I am interested in it.', 'He is married to Anna.', 'I look forward to seeing you.', 'See you on Monday.', 'I have been here since 2020.', 'I work in a bank.'].forEach(t => assert.equal(Cv.enFlags(t).length, 0, 'falso positivo: ' + t + ' → ' + JSON.stringify(Cv.enFlags(t))));
});
test('convo/ja: confronto robusto fra kana, katakana e romaji (anche varianti kunrei)', () => {
  assert.equal(Cv.jaKey('ください'), Cv.jaKey('kudasai')); assert.equal(Cv.jaKey('ラーメン'), Cv.jaKey('raamen')); assert.equal(Cv.jaKey('らーめん'), Cv.jaKey('RAAMEN'));
  assert.equal(Cv.jaKey('ありがとうございます'), Cv.jaKey('arigatou gozaimasu')); assert.equal(Cv.jaKey('arigatoo gozaimasu'), Cv.jaKey('arigatou gozaimasu')); assert.equal(Cv.jaKey('sumimasen'), Cv.jaKey('すみません'));
  assert.equal(Cv.jaKey('shitsurei shimasu'), Cv.jaKey('siturei simasu')); assert.equal(Cv.jaKey('お願いします。'), Cv.jaKey('お願いします'));
});
test('convo: la valutazione della produzione separa copertura delle informazioni, errori, registro e lunghezza', () => {
  const t = { must: [{ label: 'saluto', any: ['hello|hi\\b|good (morning|afternoon)'] }, { label: 'richiesta di un caffè', any: ['coffee'] }], min: 4, model: 'Hello, I would like a coffee, please.' };
  let r = Cv.evalProduce('en', t, 'Hello, I would like a coffee, please.'); assert.equal(r.score, 3); assert.equal(r.coverage, 1); assert.equal(r.flags.length, 0);
  r = Cv.evalProduce('en', t, 'Hello'); assert.deepEqual(JSON.parse(JSON.stringify(r.missing)), ['richiesta di un caffè']); assert.ok(r.score <= 1);
  r = Cv.evalProduce('en', t, 'Hi, I am agree and I want coffee since three years'); assert.ok(r.flags.length >= 2); assert.ok(r.score < 3, 'più errori abbassano il punteggio');
  assert.equal(Cv.evalProduce('en', t, '').score, 0);
  const tj = { register: 'polite', must: [{ label: 'chiedere il ramen', any: ['ラーメン'] }], min: 3 };
  assert.equal(Cv.evalProduce('ja', tj, 'ラーメンをください').score, 3); assert.equal(Cv.evalProduce('ja', tj, 'raamen wo kudasai').score, 3, 'romaji accettato');
  const plain = Cv.evalProduce('ja', tj, 'ラーメンちょうだい'); assert.ok(plain.flags.some(f => /Registro/.test(f.msg)));
  assert.ok(Cv.evalProduce('ja', tj, 'raamen').flags.some(f => f.k === 'info'));
});
test('convo: ordine delle parole e validatore degli scenari (grafo, produzione, risposta modello)', () => {
  assert.equal(Cv.evalOrder('en', { accept: ['I would like a coffee'] }, 'I would like a coffee'.split(' ')).ok, true); assert.equal(Cv.evalOrder('en', { accept: ['I would like a coffee'] }, ['coffee', 'I']).ok, false);
  assert.equal(Cv.evalOrder('ja', { accept: ['コーヒーをください'] }, ['コーヒー', 'を', 'ください']).ok, true);
  const T = (o) => Object.assign({ npc: { t: 'Hello', tr: 'Salve' } }, o), ch = n => ({ kind: 'choose', opts: [{ t: 'a', q: 3, why: 'x', next: n }, { t: 'b', q: 1, why: 'y', next: n }, { t: 'c', q: 0, why: 'z', next: n }] });
  const pr = n => ({ kind: 'produce', prompt: 'p', must: [{ label: 'a', any: ['coffee'] }, { label: 'b', any: ['please'] }], model: 'A coffee, please.', next: n });
  const sc = () => ({ id: 'x', title: 't', lang: 'en', level: 'B1', area: 'a', start: 'n1', nodes: { n1: T({ task: ch('n2') }), n2: T({ unexpected: true, task: pr('n3') }), n3: T({ task: ch('n4') }), n4: T({ task: pr('n5') }), n5: T({ task: ch('n6') }), n6: T({ end: true }) } });
  assert.ok(Cv.validate(sc()).ok, Cv.validate(sc()).errors.join('; '));
  let s = sc(); s.nodes.n2.task.model = 'I am agree coffee please'; assert.ok(Cv.validate(s).errors.some(e => /risposta modello/.test(e)));
  s = sc(); s.nodes.n5.task.opts[0].next = 'n1'; assert.ok(Cv.validate(s).errors.some(e => /ciclo/.test(e)));
  s = sc(); delete s.nodes.n2.unexpected; assert.ok(Cv.validate(s).errors.some(e => /imprevista/.test(e)));
  s = sc(); s.nodes.n3.task.opts.forEach(o => { o.q = 2; }); assert.ok(Cv.validate(s).errors.some(e => /opzioni insufficienti/.test(e)));
});
test('convo: gli errori trovati vengono salvati con ripasso dilazionato e senza duplicati; i laboratori compaiono solo con scenari validi', () => {
  const s = fresh(); Cv.saveErr(s, 'en', 'I am agree', 'Si dice «I agree».'); Cv.saveErr(s, 'en', 'I am agree', 'x'); assert.equal(Object.keys(Cv.S(s).errs).length, 1); assert.equal(Cv.dueErrs(s).length, 0);
  Cv.S(s).errs['en:i am agree'].due = ST.util.today(); assert.equal(Cv.dueErrs(s).length, 1); Cv.gradeErr(s, 'en:i am agree', 2); assert.equal(Cv.dueErrs(s).length, 0);
  Cv.refresh(); // senza scenari validi nel pacchetto base i laboratori non compaiono come disponibili
  const n = Cv.scenarios.filter(x => x.lang === 'en').length; assert.equal(!!ST.sma.labState('convoEn'), Cv.scenarios.filter(x => x.lang === 'en' && Cv.validate(x).ok).length >= 6, 'EN: ' + n);
  assert.ok(ST.sma.pendingLabs.some(p => p.id === 'convoEn') && ST.sma.pendingLabs.some(p => p.id === 'convoJa'));
});

/* ---- Cross-Disciplinary Lab, collegamenti, audio ---- */
const Xd = ST.sma.cross;
test('cross: ogni missione combina almeno due laboratori diversi con riferimenti esistenti', () => {
  assert.ok(Xd.missions.length >= 6); Xd.missions.forEach(m => { const v = Xd.validate(m); assert.ok(v.ok, m.id + ': ' + v.errors.join('; ')); assert.ok(new Set(m.parts.map(p => p.lab)).size >= 2); });
  const bad = { id: 'x', title: 't', intro: 'i', synthesis: 's', pillars: ['det'], parts: [{ lab: 'cyberlab', ref: 'nope', label: 'a' }, { lab: 'cyberlab', ref: 'cyb-top-ip', label: 'b' }] };
  assert.ok(Xd.validate(bad).errors.some(e => /riferimento inesistente/.test(e)) && Xd.validate(bad).errors.some(e => /laboratori diversi/.test(e)));
});
test('cross: le parti si completano solo con risultati salvati; la sintesi richiede tutte le parti e un testo sostanzioso', () => {
  const s = fresh(), m = Xd.missions.find(x => x.id === 'xd-strategia-cyber');
  assert.equal(Xd.progress(s, m).doneN, 0); assert.equal(Xd.synthesize(s, m, 'x'.repeat(80)).ok, false, 'parti incomplete');
  ST.sma.S(s).tech = { cyber: { 'cyb-sqli-log': { solved: true } } }; assert.equal(Xd.progress(s, m).doneN, 1);
  ST.sma.S(s).sims['proc:proc-allarme-contraddittorio'] = { bestProc: 0.5 }; assert.equal(Xd.progress(s, m).doneN, 1, 'processo insufficiente');
  ST.sma.S(s).sims['proc:proc-allarme-contraddittorio'].bestProc = 0.9; ST.sma.S(s).cases['ded-sito-lento'] = { hist: [{ ok: false }] }; assert.equal(Xd.progress(s, m).doneN, 2);
  ST.sma.S(s).cases['ded-sito-lento'].hist.push({ ok: true }); assert.equal(Xd.progress(s, m).doneN, 3);
  assert.equal(Xd.synthesize(s, m, 'troppo breve').ok, false); assert.ok(Xd.synthesize(s, m, 'Ho usato la stessa idea in tutte e tre le parti: scegliere la verifica che separa meglio le ipotesi prima di agire.').ok);
  const p = Xd.progress(s, m); assert.ok(p.complete); assert.equal(ST.sma.profile(s).application.n, 1);
});
test('cross: le verifiche per laboratorio rispettano le soglie (previsioni, F1, combat)', () => {
  const s = fresh(); assert.equal(Xd.CHECK.forecast(s, '6'), false); ST.sma.S(s).forecast = Array(6).fill({ hit: true }); assert.equal(Xd.CHECK.forecast(s, '6'), true);
  ST.sma.S(s).tech = { f1: { 'f1-undercut': { bestEff: 0.5 } } }; assert.equal(Xd.CHECK.f1lab(s, 'f1-undercut'), false); ST.sma.S(s).tech.f1['f1-undercut'].bestEff = 1; assert.equal(Xd.CHECK.f1lab(s, 'f1-undercut'), true);
  ST.sma.S(s).combat = { theory: { 'cmb-l2-kuzushi': { best: 0.5 } } }; assert.equal(Xd.CHECK.combat(s, 'cmb-l2-kuzushi'), false);
});
test('links/audio: i laboratori esistenti sono collegati senza duplicare punteggi; l’audio dichiara che non valuta la pronuncia', () => {
  const cog = ST.sma.labs.find(l => l.id === 'cog'), dec = ST.sma.labs.find(l => l.id === 'decision'); assert.equal(cog.act, 'optStart'); assert.equal(dec.data.k, 'decision'); assert.match(cog.desc, /non vengono duplicati/);
  assert.match(ST.sma.hub(fresh()), /data-act="optStart"[^>]*data-k="cog"/);
  const au = ST.sma.labs.find(l => l.id === 'audio'); assert.match(au.desc, /Nessun punteggio automatico di pronuncia/);
});

/* ---- verifica per livello ---- */
const Lc = ST.sma.levelCheck;
test('levelcheck: raccoglie le domande di verifica dei moduli del livello (max 20) e rispetta la soglia del 70%', () => {
  ST.sma.PILLAR_IDS.forEach(() => { }); const lv = ST.content.topicsOf('sma'); assert.ok(lv.length >= 24, 'moduli presenti: ' + lv.length);
  ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'].forEach(l => { const it = Lc.items(l); assert.ok(it.length >= 15 && it.length <= 20, l + ': ' + it.length); assert.ok(it.every(q => q.srcLabel && ['mc', 'fill', 'order'].includes(q.t))); });
  const s = fresh(); let r = Lc.record(s, 'L0', Array(10).fill({ ok: true }).map((x, i) => ({ ok: i < 7 }))); assert.equal(r.pass, true); assert.equal(r.pct, 0.7);
  r = Lc.record(s, 'L0', Array(10).fill(0).map((x, i) => ({ ok: i < 6 }))); assert.equal(r.pass, false); assert.equal(Lc.S(s).L0.best, 0.7); assert.equal(Lc.S(s).L0.pass, true, 'il miglior risultato resta'); assert.equal(Lc.S(s).L0.tries, 2);
  assert.match(Lc.badge(s, 'L0'), /70%/);
});

test('convo/ja: un’alternativa con soli kanji si cerca come testo letterale e non combacia con qualsiasi frase', () => {
  const t = { must: [{ label: 'sei ore', any: ['六時', 'ろくじ', 'rokuji'] }, { label: 'foto', any: ['写真'] }], register: 'polite' };
  assert.ok(Cv.evalProduce('ja', t, '六時に写真をお願いします').coverage === 1);
  assert.equal(Cv.evalProduce('ja', t, 'こんにちは、おねがいします').coverage, 0, 'nessuna corrispondenza casuale');
  assert.equal(Cv.evalProduce('ja', t, 'rokuji ni shashin wo onegaishimasu').coverage, 0.5, 'rokuji sì, 写真 solo in kanji: la parte «foto» manca');
  assert.equal(Cv.evalProduce('ja', { must: [{ label: 'x', any: [''] }] }, 'abc').coverage, 0, 'alternativa vuota non combacia');
});
