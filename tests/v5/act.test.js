/* Test v1.3 — Contextual Practice Engine, stati delle attività, livelli richiudibili, pratica consigliata, rimozione dei riquadri.
   Uso: node --test tests/v5/act.test.js */
const test = require('node:test'), assert = require('node:assert/strict');
const load = require('../load.js');
const ST = load();
const U = ST.util, Z = ST.act, C = ST.content, P = ST.progress, PL = ST.plan;
const fresh = () => ST.storage.migrate({ onboarded: true });
const T = id => C.topic(id);
const studyNow = (s, id, daysAgo) => { // studia anche i prerequisiti (esercitati), così l'argomento è davvero sbloccato
  (T(id).prereq || []).forEach(p => { if (!s.topics[p] || !s.topics[p].studied) { const q = studyNow(s, p, 40); T(p).exercises.slice(0, 5).forEach((e, i) => { q.ex[i] = { n: 1, ok: true }; }); } });
  const r = P.topicRec(s, id); r.studied = U.addDays(U.today(), -(daysAgo || 0)); return r; };
const j = x => JSON.stringify(x);

test('stato: un salvataggio senza «act» (versioni precedenti) viene migrato senza perdere nulla', () => {
  const old = { onboarded: true, xp: 123, topics: { 'eng-l0-habits': { page: 2, studied: '2026-01-01', ex: {}, tests: [], retests: [] } }, schema: 3 };
  const s = ST.storage.migrate(old);
  assert.equal(s.xp, 123); assert.equal(s.topics['eng-l0-habits'].page, 2);
  assert.equal(Object.keys(Z.S(s).rec).length, 0); assert.equal(Z.status(s, 'deduction'), 'todo');
});
test('registrazione: tentativi, ultimo tentativo, punteggio, migliore, data di completamento', () => {
  const s = fresh(); Z.begin(s, 'opponent'); assert.equal(Z.status(s, 'opponent'), 'doing');
  Z.record(s, 'opponent', { item: 'cons', ok: false, score: 0.5, ms: 90000 });
  let r = Z.rec(s, 'opponent'); assert.equal(r.att, 1); assert.equal(r.best, 0.5); assert.equal(r.done, U.today()); assert.equal(r.ms, 90000);
  assert.equal(Z.status(s, 'opponent'), 'review', 'completata ma sotto il criterio → da ripassare');
  Z.record(s, 'opponent', { item: 'cons', ok: true, score: 0.9 });
  r = Z.rec(s, 'opponent'); assert.equal(r.att, 2); assert.equal(r.best, 0.9); assert.equal(r.score, 0.9);
  assert.equal(Z.status(s, 'opponent'), 'done'); assert.equal(Z.itemsDone(s, 'opponent'), 1);
});
test('completamento ≠ padronanza: un tentativo peggiore non cancella il migliore ma riporta a «Da ripassare»', () => {
  const s = fresh(); Z.record(s, 'deduction', { item: 'a', ok: true, score: 0.9 }); Z.record(s, 'deduction', { item: 'b', ok: false, score: 0.2 });
  assert.equal(Z.rec(s, 'deduction').best, 0.9); assert.equal(Z.status(s, 'deduction'), 'review');
});
test('conferma manuale: marcata come tale, non lascia un esito di prestazione', () => {
  const s = fresh(); Z.confirm(s, 'audio');
  const r = Z.rec(s, 'audio'); assert.equal(r.manual, true); assert.equal(r.ok, null); assert.equal(Z.status(s, 'audio'), 'done');
  assert.equal(Z.def('audio').meta.auto, null, 'l’audio non ha una condizione verificabile');
  assert.ok(Z.def('deduction').meta.auto, 'il Deduction Lab si completa automaticamente');
});
test('tentativo non concluso: resta «in corso»', () => {
  const s = fresh(); Z.record(s, 'forecast', { item: 'int:x', done: false }); assert.equal(Z.status(s, 'forecast'), 'doing'); assert.equal(Z.rec(s, 'forecast').done, null);
});
test('persistenza: backup/importazione conservano lo stato delle attività', () => {
  const s = fresh(); Z.record(s, 'cyberlab', { item: 'c1', ok: true }); Z.snooze(s, 'proglab');
  const copy = ST.storage.migrate(JSON.parse(JSON.stringify(s)));
  assert.equal(j(copy.act), j(s.act)); assert.equal(Z.status(copy, 'cyberlab'), 'done'); assert.ok(Z.snoozed(copy, 'proglab'));
});

test('collegamenti: seguono l’argomento, non la sola materia', () => {
  const ids = t => Z.linksFor(T(t)).map(l => l.id);
  assert.ok(ids('str-probabilita-nei-giochi').includes('forecast'));
  assert.ok(ids('mnt-logica-sillogismi').includes('deduction'));
  assert.ok(ids('jud-kumikata').includes('combat'));
  assert.ok(ids('cyb-dns-dhcp-arp').includes('cyberlab'));
  assert.ok(ids('spo-periodizzazione').includes('sportlab'));
  assert.ok(ids('f1-undercut-e-overcut').includes('f1lab'));
  assert.ok(ids('eng-l1-modals').includes('convoEn'));
  assert.ok(ids('jpn-j1-masu').includes('convoJa'));
  assert.ok(ids('str-opt-programmazione-dinamica').includes('proglab'));
  assert.ok(ids('spo-energia-e-bilancio-energetico').includes('sportcalc'));
  assert.ok(ids('str-matrici-di-payoff-e-nash').includes('opponent'));
  // nessun laboratorio non pertinente solo perché è della stessa materia
  assert.equal(ids('str-scacchi-regole-e-valore-dei-pezzi').length, 0);
  assert.ok(!ids('str-scacchi-regole-e-valore-dei-pezzi').includes('forecast'));
  assert.equal(ids('jpn-j6-kanji-tempo').length, 0, 'i kanji non hanno un laboratorio pertinente');
  assert.equal(ids('eng-l6-academic-vocab').length, 0);
  assert.ok(!ids('jud-ushiro-ukemi-lying').includes('combat'), 'le cadute non sono tattica');
  assert.ok(!ids('cyb-etica-legge-e-autorizzazione').includes('cyberlab'));
});
test('collegamenti: ogni attività collegata esiste davvero e ha metadati completi', () => {
  const defs = {}; Z.defs().forEach(d => { defs[d.id] = d; });
  Z.LINKS.forEach(l => assert.ok(defs[l.lab], 'laboratorio sconosciuto: ' + l.lab));
  Z.SIMLINKS.forEach(l => l.ids.forEach(i => assert.ok(defs['sim:' + i], 'simulazione sconosciuta: ' + i)));
  Z.defs().forEach(d => { const m = d.meta; assert.ok(m.skill && m.mins > 0 && Z.DIFF[m.diff] && (m.kind === 'lab' || m.kind === 'sim'), d.id); assert.ok(d.view || d.act, 'avvio assente: ' + d.id); });
  let withLink = 0, total = 0; C.subjects.forEach(sub => C.topicsOf(sub.id).forEach(t => { total++; if (Z.linksFor(t).length) withLink++; }));
  assert.ok(withLink > 200 && withLink < total, 'collegati ' + withLink + '/' + total + ': molti argomenti restano senza pratica, per scelta');
});
test('i 42 scenari a turni sono attività distinte e avviabili', () => {
  const sims = Z.defs().filter(d => d.id.startsWith('sim:')); assert.equal(sims.length, ST.sim.templates.length);
  sims.forEach(d => assert.equal(d.act, 'startSim'));
});

test('argomento: lezione letta ma esercizi non svolti = «in corso», non completata; la padronanza resta separata', () => {
  const s = fresh(); const id = 'eng-l0-habits'; studyNow(s, id, 0);
  assert.equal(Z.topicState(s, T(id)), 'doing'); assert.equal(Z.topicParts(s, T(id)).lesson, 'done'); assert.equal(P.topicStatus(s, id), 'studied');
  const r = P.topicRec(s, id); T(id).exercises.slice(0, 5).forEach((e, i) => { r.ex[i] = { n: 1, ok: true }; });
  assert.equal(Z.topicState(s, T(id)), 'done'); assert.equal(P.topicStatus(s, id), 'practiced', 'esercitato, non ancora verificato');
  assert.equal(Z.topicParts(s, T(id)).test, 'todo');
});
test('argomento: ritest dovuto → «da ripassare»; regole di verifica invariate', () => {
  const s = fresh(); const id = 'eng-l0-habits'; const r = studyNow(s, id, 40); r.tests.push({ date: U.addDays(U.today(), -30), score: 0.9, n: 5 });
  T(id).exercises.slice(0, 5).forEach((e, i) => { r.ex[i] = { n: 1, ok: true }; });
  assert.equal(P.topicStatus(s, id), 'verified'); assert.equal(Z.topicParts(s, id.length ? T(id) : null).test, 'review');
  assert.equal(Z.topicState(s, T(id)), 'review');
  const r2 = studyNow(s, 'eng-l0-past', 0); r2.tests.push({ date: U.today(), score: 0.95, n: 5 });
  assert.equal(P.topicStatus(s, 'eng-l0-past'), 'studied', 'verifica nello stesso giorno: non conta (regola esistente)');
});
test('passi dell’argomento: ordine lezione → esercizi → pratica → verifica con un solo «prossimo»', () => {
  const s = fresh(); const id = 'cyb-dns-dhcp-arp';
  let st = Z.topicSteps(s, T(id)); assert.equal(st.filter(x => x.next).length, 1); assert.equal(st.find(x => x.next).part, 'lesson');
  assert.equal(j(st.map(x => x.part).filter((p, i, a) => a.indexOf(p) === i)), j(['lesson', 'practice', 'lab', 'test']));
  assert.ok(st.filter(x => x.part === 'lab').every(x => x.blocked), 'prima della lezione la pratica non è proposta');
  studyNow(s, id, 0); const r = P.topicRec(s, id); T(id).exercises.slice(0, 5).forEach((e, i) => { r.ex[i] = { n: 1, ok: true }; });
  st = Z.topicSteps(s, T(id)); assert.equal(st.find(x => x.next).part, 'lab');
  Z.snooze(s, 'cyberlab'); st = Z.topicSteps(s, T(id)); assert.ok(!st.find(x => x.next) || st.find(x => x.next).part !== 'lab', 'rimandata: salta');
  assert.equal(st.find(x => x.part === 'test').later, true, 'verifica non ancora valida nello stesso giorno');
});

test('suggerimenti: nessuno se non c’è nulla di pertinente; massimo due; rispettano rinvio e completamento', () => {
  const s = fresh(); assert.equal(Z.recommend(s, 2).length, 0);
  studyNow(s, 'cyb-dns-dhcp-arp', 1); studyNow(s, 'str-matrici-di-payoff-e-nash', 1); studyNow(s, 'spo-periodizzazione', 2);
  let rec = Z.recommend(s, 2); assert.equal(rec.length, 2); assert.ok(rec.every(x => x.reason && x.def.meta.skill && x.subjectTitle));
  assert.equal(new Set(rec.map(x => x.topic.subject)).size, 2, 'una proposta per materia di partenza');
  const first = rec[0].id; Z.snooze(s, first);
  rec = Z.recommend(s, 5); assert.ok(!rec.some(x => x.id === first), 'rinviata: non riproposta');
  const s2 = fresh(); studyNow(s2, 'cyb-dns-dhcp-arp', 1); Z.record(s2, 'cyberlab', { item: 'c', ok: true });
  assert.ok(!Z.recommend(s2, 5).some(x => x.id === 'cyberlab'), 'completata con buon risultato: non riproposta');
  Z.record(s2, 'cyberlab', { item: 'c2', ok: false }); assert.ok(Z.recommend(s2, 5).some(x => x.id === 'cyberlab'), 'sotto il criterio: torna come consolidamento');
});
test('suggerimenti: non propongono attività i cui prerequisiti dell’argomento non sono soddisfatti', () => {
  const s = fresh(); const t = C.topicsOf('cyb').find(x => (x.prereq || []).length); assert.ok(t, 'serve un argomento con prerequisiti');
  P.topicRec(s, t.id).studied = U.today(); assert.ok(Z.blockedReason(s, t)); assert.ok(!Z.recommend(s, 5).some(x => x.topic && x.topic.id === t.id));
});
test('suggerimenti: Strategic Mastery facoltativa entra solo se già avviata', () => {
  const s = fresh(); assert.ok(!Z.recommend(s, 5).some(x => x.topic && x.topic.subject === 'sma'));
  studyNow(s, 'sma-det-l1-confronto-ipotesi-frequenze', 1);
  assert.ok(Z.recommend(s, 5).some(x => x.topic && x.topic.subject === 'sma'));
});
test('le tre missioni e i ripassi non cambiano: registrare e suggerire non tocca piano, argomenti, carte o giornata', () => {
  const s = fresh(); studyNow(s, 'cyb-dns-dhcp-arp', 1);
  const before = j({ m: PL.minutes(s), t: s.topics, c: s.cards, d: s.daily, x: s.xp });
  Z.recommend(s, 2); Z.record(s, 'cyberlab', { item: 'c', ok: true }); Z.snooze(s, 'proglab'); Z.smaNext(s);
  assert.equal(j({ m: PL.minutes(s), t: s.topics, c: s.cards, d: s.daily, x: s.xp }), before);
});

test('livelli: per ogni materia i livelli sono richiudibili e si apre solo quello consigliato', () => {
  ST.app.state = fresh();
  ['eng', 'jpn', 'cyb', 'sport', 'moto', 'f1', 'str', 'sec', 'sma', 'grp', 'mnt'].forEach(sid => {
    const h = ST.levels.html(sid), n = (h.match(/<details class="lv/g) || []).length;
    const stages = C.stagesOf(sid).filter(g => g.topics.length).length;
    assert.equal(n, stages, sid + ': un blocco richiudibile per livello'); assert.equal((h.match(/<details class="lv[^>]* open>/g) || []).length, 1, sid + ': solo il livello consigliato è aperto');
    assert.match(h, /completati ·/); assert.match(h, /Prossimo/);
  });
});
test('livelli: la scelta dell’utente viene rispettata; il consigliato segue i progressi', () => {
  const s = ST.app.state = fresh(); const stg = C.stagesOf('cyb').filter(g => g.topics.length);
  assert.equal(Z.recommendedStage(s, 'cyb'), stg[0].id);
  s.settings.lv = { cyb: { [stg[1].id]: true, [stg[0].id]: false } };
  const h = ST.levels.html('cyb'); assert.equal((h.match(/<details class="lv[^>]* open>/g) || []).length, 1); assert.match(h, new RegExp('data-k2="' + stg[1].id + '"[^>]* open>'));
  // dopo aver completato il primo livello il consigliato avanza
  const s2 = ST.app.state = fresh(); stg[0].topics.forEach(id => { const r = studyNow(s2, id, 30); T(id).exercises.slice(0, 5).forEach((e, i) => { r.ex[i] = { n: 1, ok: true }; }); r.tests.push({ date: U.addDays(U.today(), -5), score: 1, n: 5 }); });
  assert.equal(Z.recommendedStage(s2, 'cyb') === stg[0].id, false);
});
test('hub dell’argomento: sezioni per categoria, vuote nascoste', () => {
  const s = ST.app.state = fresh(); const V = ST.views;
  let h = V.topic({ id: 'cyb-dns-dhcp-arp' });
  assert.match(h, /Lezioni/); assert.match(h, /Esercizi/); assert.match(h, /Laboratori/); assert.match(h, /Verifiche/); assert.doesNotMatch(h, />🎮 Simulazioni/);
  assert.match(h, /Prossimo passo consigliato/); assert.match(h, /Disponibile dopo la lezione/);
  h = V.topic({ id: 'str-scacchi-regole-e-valore-dei-pezzi' }); assert.doesNotMatch(h, /Laboratori<\/b>/); assert.doesNotMatch(h, /Simulazioni<\/b>/);
  studyNow(s, 'cyb-dns-dhcp-arp', 0); h = V.topic({ id: 'cyb-dns-dhcp-arp' });
  assert.match(h, /data-act="actGo" data-id="cyberlab"/); assert.match(h, /Più tardi/); assert.match(h, /Competenza non ancora verificata/);
  h = V.topic({ id: 'spo-periodizzazione' }); studyNow(s, 'spo-periodizzazione', 0); h = V.topic({ id: 'spo-periodizzazione' });
  assert.match(h, /Simulazioni/); assert.match(h, /data-act="actGo" data-id="sim:spo-gara"/);
});
test('fine lezione: «Pratica consigliata per consolidare questa lezione» solo se esiste un collegamento reale', () => {
  const s = ST.app.state = fresh(); const t = T('cyb-dns-dhcp-arp'); studyNow(s, t.id, 0);
  const cta = ST.practiceCta(t); assert.match(cta, /Pratica consigliata per consolidare questa lezione/); assert.match(cta, /Più tardi/); assert.match(cta, /~\d+ min/); assert.match(cta, /difficoltà/);
  assert.equal(ST.practiceCta(T('jpn-j6-kanji-tempo')), '');
});
test('Home: la sezione «Pratica consigliata» è nascosta se non c’è nulla, e mostra al massimo due proposte', () => {
  const s = ST.app.state = fresh(); assert.equal(ST.homePractice(), '');
  studyNow(s, 'cyb-dns-dhcp-arp', 1); studyNow(s, 'str-matrici-di-payoff-e-nash', 1); studyNow(s, 'spo-periodizzazione', 1);
  const h = ST.homePractice(); assert.match(h, /Pratica consigliata/); assert.equal((h.match(/data-act="actGo"/g) || []).length, 2); assert.equal((h.match(/data-act="actSnooze"/g) || []).length, 2);
  assert.match(h, /~\d+ min/); assert.match(h, /Da iniziare/);
});

test('riquadri informativi sui livelli rimossi da tutte le materie; avvisi di sicurezza conservati', () => {
  const s = ST.app.state = fresh();
  ['eng', 'jpn', 'cyb', 'sport', 'moto', 'f1', 'str', 'sec', 'sma', 'grp', 'mnt'].forEach(sid => {
    const h = (ST.views.subject({ id: sid }) || '');
    assert.doesNotMatch(h, /class="warn[^"]*">[^<]*(livell|CEFR|JLPT|stage|Stage)/, sid);
    assert.doesNotMatch(h, /Completare le lezioni NON assegna|non equivalgono|livelli didattici interni|non una cintura/, sid);
  });
  assert.equal(C.subject('eng').stageNote, undefined); assert.equal(C.subject('jpn').stageNote, undefined);
  // sicurezza: il gesto che richiede un istruttore e l'ambiente isolato del Cyber Lab restano
  const src = require('fs').readFileSync(require('path').join(__dirname, '..', '..', 'src', 'ui', 'mission.js'), 'utf8');
  assert.match(src, /verificato da un istruttore/); assert.match(src, /Stop immediato in caso di dolore/);
  assert.match(require('fs').readFileSync(require('path').join(__dirname, '..', '..', 'src', 'vnext', '60-cyberlab.js'), 'utf8'), /Ambiente simulato e isolato/);
  assert.match(ST.views['sma-combat']({}) || '', /sicurezza|Sicurezza|rischio|partner|istruttore/i);
  // le regole sottostanti: nessuna certificazione assegnata dal solo completamento delle lezioni
  const s3 = fresh(); C.topicsOf('eng').forEach(t => { studyNow(s3, t.id, 0); }); assert.equal(PL.minutes(s3).b2, false);
});

test('STRATEGOS: cinque stati distinti; aperta ≠ verificata', () => {
  const S = ST.sma.strategos, s = fresh(); const m = S.missions[0];
  const inst = S.start(s, m.id, 'guided'); assert.equal(S.stage(inst), 'assigned'); assert.equal(Z.status(s, 'strategos'), 'doing');
  S.PROTOCOL.forEach(p => S.saveStep(inst, p.n, 'passo completo numero ' + p.n));
  assert.equal(S.decide(s, inst, { p: 60, planB: 'piano b chiaro', check: U.addDays(U.today(), 7) }).ok, true); assert.equal(S.stage(inst), 'planned');
  assert.equal(S.apply(s, inst, 'ok').ok, false, 'dichiarazione troppo vaga');
  assert.equal(S.apply(s, inst, 'Ho applicato il piano lunedì sera').ok, true); assert.equal(S.stage(inst), 'applied');
  assert.equal(S.stats(s).observed, 0, 'applicata ma senza esito: non conta come verificata');
  assert.equal(S.observe(s, inst, { result: 'ok', cls: 'self', observed: 'È andata come previsto in tutti i punti' }).ok, true); assert.equal(S.stage(inst), 'outcome');
  assert.equal(S.retrospect(s, inst, { learned: 'Ho imparato a stimare meglio' }).ok, true); assert.equal(S.stage(inst), 'reviewed');
  assert.equal(Z.status(s, 'strategos'), 'done', 'completata solo alla revisione');
});
test('STRATEGOS: istanze precedenti senza dichiarazione di applicazione restano valide', () => {
  const S = ST.sma.strategos, s = fresh(); const inst = S.start(s, S.missions[0].id, 'guided'); inst.status = 'decided'; inst.p = 50; inst.journal = null;
  const r = S.observe(s, inst, { result: 'ok', cls: 'self', observed: 'esito osservato con dettagli' }); assert.equal(r.ok, true); assert.equal(inst.applied.implied, true);
});

test('Continua Strategic Mastery: primo modulo, poi pratica collegata, mai nulla di inventato', () => {
  const s = fresh(); let n = Z.smaNext(s); assert.equal(n.type, 'lesson'); assert.equal(n.topic.stage, 'L0');
  const first = n.topic; studyNow(s, first.id, 0); const r = P.topicRec(s, first.id); first.exercises.slice(0, 5).forEach((e, i) => { r.ex[i] = { n: 1, ok: true }; });
  n = Z.smaNext(s); assert.ok(['lab', 'sim', 'lesson'].includes(n.type)); if (n.type === 'lab' || n.type === 'sim') assert.ok(Z.def(n.id));
  assert.match(ST.smaContinue(s), /Continua Strategic Mastery/);
});
test('Multi-Move: il laboratorio apre una vista con gli scenari (prima apriva una schermata vuota)', () => {
  assert.equal(ST.sma.labs.find(l => l.id === 'multimove').view, 'sma-sims'); ST.app.state = fresh(); assert.match(ST.views['sma-sims'](), /startSim/);
});
