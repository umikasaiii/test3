/* SkillTree — progressione guidata: livelli richiudibili (Materia → Livello → Argomento → Attività), hub dell'argomento organizzato
   per categorie, pratica consigliata dopo la lezione e nella Home, «Continua Strategic Mastery».
   Usa componenti nativi (<details>): leggeri e compatibili con Android e Safari. Nessuna regola di verifica viene modificata. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan, C = ST.content, A = ST.app, E = U.esc, V = ST.views, X = ST.acts, Z = ST.act;
  const Lv = ST.levels = {};

  const CHIP = { todo: ['', 'Da iniziare'], doing: ['acc', 'In corso'], done: ['good', 'Completata'], review: ['warn', 'Da ripassare'] };
  const chip = st => '<span class="tag ' + CHIP[st][0] + '">' + CHIP[st][1] + '</span>';
  Lv.chip = chip;
  const pct = x => Math.round(100 * x) + '%';

  /* ---- stato di apertura delle sezioni: si memorizza solo ciò che l'utente cambia rispetto al valore predefinito ---- */
  const store = (kind) => { const st = A.state.settings = A.state.settings || {}; return (st[kind] = st[kind] || {}); };
  Lv.isOpen = (kind, k1, k2, def) => { const m = store(kind)[k1]; return m && typeof m[k2] === 'boolean' ? m[k2] : def; };
  document.addEventListener('toggle', ev => {
    const d = ev.target; if (!d || !d.classList || !A.state) return;
    const kind = d.classList.contains('lv') ? 'lv' : d.classList.contains('tsec') ? 'tsec' : null; if (!kind) return;
    const k1 = d.dataset.k1, k2 = d.dataset.k2, def = d.dataset.def === '1', m = store(kind);
    if (d.open === def) { if (m[k1]) { delete m[k1][k2]; if (!Object.keys(m[k1]).length) delete m[k1]; A.save(); } return; }
    (m[k1] = m[k1] || {})[k2] = d.open; A.save();
  }, true);

  /* ---- riga di un argomento ---- */
  const rowHtml = (t, isNext) => {
    const s = A.state, sta = P.topicStatus(s, t.id), un = PL.unlocked(s, t), zs = Z.topicState(s, t);
    const pre = (t.prereq || []).filter(x => !P.atLeast(P.topicStatus(s, x), 'practiced')).map(x => C.topic(x).title);
    const nl = Z.linksFor(t).length;
    return '<button class="item' + (un ? '' : ' locked') + (zs === 'done' ? ' done' : '') + (isNext ? ' next' : '') + '" data-act="go" data-view="topic" data-p=\'{"id":"' + t.id + '"}\'><span class="ic">' + (un ? '📖' : '🔒') + '</span><span class="tx"><b>' + E(t.title) + '</b><span>' + E(t.summary) + (pre.length ? ' · Prima: ' + E(pre[0]) : '') + (nl ? ' · 🧪 ' + nl + (nl === 1 ? ' pratica' : ' pratiche') : '') + '</span></span><span class="tags">' + (isNext ? '<span class="tag acc">Prossimo</span>' : '') + (zs !== 'todo' ? chip(zs) : '') + (P.atLeast(sta, 'verified') ? ST.statusTag(sta) : '') + '</span></button>';
  };
  Lv.rowHtml = rowHtml;

  /* ---- livelli richiudibili di una materia ----
     o.filter(t) limita gli argomenti; o.extra(stage) aggiunge HTML in fondo al livello (es. verifica di livello) */
  Lv.html = (sid, o) => {
    o = o || {}; const s = A.state, f = o.filter, rec = Z.recommendedStage(s, sid, f), nx = Z.nextTopic(s, sid, f);
    return C.stagesOf(sid).map(stg => {
      const ts = stg.topics.map(id => C.topic(id)).filter(t => !f || f(t));
      if (!ts.length) return f ? '' : '<div class="lv-empty"><b>' + E(stg.id) + ' — ' + E(stg.title) + '</b><span class="mute small"> · contenuti non ancora disponibili</span></div>';
      const st = Z.levelStats(s, sid, stg.id, f), def = stg.id === rec, open = Lv.isOpen('lv', sid, stg.id, def);
      const pc = st.total ? Math.round(100 * st.done / st.total) : 0;
      return '<details class="lv' + (def ? ' rec' : '') + '" data-k1="' + sid + '" data-k2="' + stg.id + '" data-def="' + (def ? 1 : 0) + '"' + (open ? ' open' : '') + '><summary><span class="lv-tt"><b>' + E(stg.id) + ' — ' + E(stg.title) + '</b><small>' + st.done + '/' + st.total + ' completati · ' + st.verified + ' verificati' + (st.review ? ' · ' + st.review + ' da ripassare' : '') + '</small></span>' + (def ? '<span class="tag acc">Consigliato</span>' : '') + '<span class="prog' + (st.done === st.total ? ' good' : '') + '"><i style="width:' + pc + '%"></i></span></summary>' +
        (stg.desc ? '<p class="mute small lv-desc">' + E(stg.desc) + '</p>' : '') + '<div class="list">' + ts.map(t => rowHtml(t, !!nx && nx.id === t.id)).join('') + '</div>' + ((o.extra || (sid === 'sma' ? Lv.smaExtra : null)) ? (o.extra || Lv.smaExtra)(stg) : '') + '</details>';
    }).join('');
  };

  /* Strategic Mastery: la verifica di livello (soglia 70%, già esistente) compare in fondo a ogni livello */
  Lv.smaExtra = stg => {
    const M = ST.sma, s = A.state; if (!M || !M.levelCheck) return '';
    const p = M.levelProgress(s, stg.id); if (!p.total) return '';
    return '<div class="lv-extra"><b>✅ Verifica del livello</b> <span class="mute small">domande dei moduli di ' + E(stg.id) + ' · soglia ' + Math.round(100 * M.levelCheck.THRESHOLD) + '%</span><br><button class="btn sm ghost" data-act="smaLvCheck" data-l="' + E(stg.id) + '">Verifica del livello</button> ' + M.levelCheck.badge(s, stg.id) + '</div>';
  };

  /* ---- blocco attività (laboratorio / simulazione / missione) ---- */
  const statusLine = (s, id) => {
    const r = Z.rec(s, id), st = Z.status(s, id); if (!r) return 'Nessun tentativo';
    const p = [];
    if (r.done) p.push('completata' + (r.manual ? ' (conferma manuale)' : '') + ' il ' + r.done);
    if (r.att) p.push(r.att + (r.att === 1 ? ' tentativo' : ' tentativi'));
    if (r.best != null) p.push('migliore ' + pct(r.best));
    if (r.last && r.last !== r.done) p.push('ultimo ' + r.last);
    if (r.ms) p.push('~' + Math.max(1, Math.round(r.ms / 60000)) + ' min');
    const n = Z.itemsDone(s, id); if (n) p.push(n + (n === 1 ? ' elemento svolto' : ' elementi svolti'));
    return (st === 'review' ? 'Risultato sotto il criterio: da consolidare. ' : '') + (p.join(' · ') || 'Iniziata');
  };
  /* o: { why, compact, topic } */
  Lv.actHtml = (id, o) => {
    o = o || {}; const s = A.state, d = Z.def(id); if (!d) return '';
    const st = Z.status(s, id), icon = d.icon || (d.meta.kind === 'sim' ? '🎮' : '🧪'), manual = !d.meta.auto && st !== 'done';
    return '<div class="item act' + (st === 'done' ? ' done' : '') + '"><span class="ic">' + icon + '</span><span class="tx"><b>' + E(d.title) + '</b><span>' + E(d.meta.skill) + ' · ~' + d.meta.mins + ' min · difficoltà ' + Z.DIFF[d.meta.diff] + '</span>' +
      (o.why ? '<span class="why">' + E(o.why) + '</span>' : '') + (o.compact ? '' : '<span>' + E(statusLine(s, id)) + '</span>' + (d.meta.auto ? '<span class="mute small">' + E(d.meta.auto) + '</span>' : '<span class="mute small">Nessuna condizione verificabile dall’app: il completamento è una conferma manuale.</span>')) +
      '<span class="btns"><button class="btn sm" data-act="actGo" data-id="' + E(id) + '">' + (st === 'done' || st === 'review' ? '↻ Ripeti' : '▶ Inizia') + '</button><button class="btn sm ghost" data-act="actSnooze" data-id="' + E(id) + '">Più tardi</button>' +
      (manual ? '<button class="btn sm ghost" data-act="actConfirm" data-id="' + E(id) + '">Segna come completata (conferma manuale)</button>' : '') + '</span></span>' + chip(st) + '</div>';
  };
  X.actGo = el => { if (!Z.launch(el.dataset.id)) A.toast('Attività non disponibile'); };
  X.actSnooze = el => { Z.snooze(A.state, el.dataset.id); A.save(); A.toast('Rimandata di ' + Z.SNOOZE_DAYS + ' giorni'); A.render(); };
  X.actConfirm = el => { const d = Z.def(el.dataset.id); if (!d || d.meta.auto) return; if (!confirm('Confermi di aver svolto «' + d.title + '»? Il completamento sarà registrato come conferma manuale, non verificata dall’app.')) return; Z.confirm(A.state, d.id); A.save(); A.toast('Segnata come completata (manuale)'); A.render(); };

  /* ---- hub dell'argomento: Lezioni · Esercizi · Laboratori · Simulazioni · Verifiche ---- */
  const section = (part, icon, title, items, n) => items ? '<details class="tsec card" data-k1="topic" data-k2="' + part + '" data-def="1"' + (Lv.isOpen('tsec', 'topic', part, true) ? ' open' : '') + '><summary><b>' + icon + ' ' + title + '</b><span class="mute small"> · ' + n + '</span></summary><div class="list">' + items + '</div></details>' : '';
  const langOf = t => t.subject === 'eng' ? 'en' : t.subject === 'jpn' ? 'ja' : null;
  V.topic = p => {
    const t = C.topic(p.id), s = A.state, r = P.topicRec(s, t.id), st = P.topicStatus(s, t.id), zs = Z.topicState(s, t), parts = Z.topicParts(s, t), steps = Z.topicSteps(s, t);
    const nEx = t.exercises.length, lastTest = (r.tests || []).slice(-1)[0], canTest = r.studied && U.diffDays(r.studied, U.today()) >= 1;
    const nxt = steps.find(x => x.next);
    const act = (icon, title, sub, view, tag, extra) => '<button class="item" data-act="go" data-view="' + view + '" data-p=\'' + JSON.stringify(Object.assign({ id: t.id }, extra || {})) + '\'><span class="ic">' + icon + '</span><span class="tx"><b>' + title + '</b><span>' + sub + '</span></span>' + (tag || '') + '</button>';
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(t.title) + '</h1><p class="mute">' + E(t.summary) + '</p>' +
      '<p>' + (C.subject(t.subject) ? '<span class="tag">' + E(C.subject(t.subject).title) + '</span>' : '') + '<span class="tag">Stage ' + E(t.stage) + '</span><span class="tag">~' + t.minutes + ' min</span>' + chip(zs) + (P.atLeast(st, 'verified') ? ST.statusTag(st) : '<span class="tag">Competenza non ancora verificata</span>') + '</p>';
    h += (function () { const r = ST.kg.related(t); if (!r.prs.length) return ''; return '<div class="card"><p class="small"><b>Collegamenti trasversali</b> (per parole chiave): ' + r.prs.map(p => '<button class="btn alt sm" data-act="go" data-view="transfer" data-p=\'{"t":"tt"}\'>' + E(ST.kg.PRINCIPLES[p].t) + '</button>').join(' ') + (r.shared.length ? '<br>Anche in: ' + r.shared.map(id => '<button class="btn alt sm" data-act="go" data-view="topic" data-p=\'{"id":"' + id + '"}\'>' + E(ST.content.topics[id].title) + '</button>').join(' ') : '') + '</p></div>'; })();
    if (t.objectives && t.objectives.length) h += '<div class="card"><h3>Obiettivi</h3><ul>' + t.objectives.map(o => '<li>' + E(o) + '</li>').join('') + '</ul>' + ((t.prereq || []).length ? '<p class="mute small">Prerequisiti: ' + t.prereq.map(x => E(C.topic(x).title)).join(', ') + '</p>' : '') + '</div>';
    if (nxt) {
      const lbl = { lesson: 'la lezione', practice: 'gli esercizi applicativi', lab: 'la pratica «' + (Z.def(nxt.id) || { title: '' }).title + '»', sim: 'la simulazione «' + (Z.def(nxt.id) || { title: '' }).title + '»', test: 'la verifica' }[nxt.part];
      h += '<p class="nextstep small">➜ Prossimo passo consigliato: <b>' + E(lbl) + '</b></p>';
    }
    /* Lezioni */
    const lesson = act('📖', 'Lezione', t.pages.length + ' pagine' + (r.studied ? ' · letta' : r.page ? ' · riprendi da pagina ' + (r.page + 1) : ''), 'lesson', chip(parts.lesson));
    h += section('lessons', '📖', 'Lezioni', lesson, '1');
    /* Esercizi */
    const ex = (nEx ? act('✍️', 'Esercizi applicativi', parts.okN + '/' + nEx + ' svolti correttamente (completati con ' + parts.need + ')', 'practiceTopic', chip(parts.practice)) : '') +
      (t.listening ? act('🎧', 'Ascolto senza testo', t.listening.length + ' brano · comprensione esplicita e implicita', 'listenTopic') : '') +
      (t.dictation ? act('📝', 'Dettato', t.dictation.length + ' frasi', 'dictTopic') : '') +
      (t.shadowing ? act('🗣️', 'Shadowing e pronuncia', t.shadowing.length + ' frasi · registrazione facoltativa', 'shadowTopic') : '') +
      (t.speaking ? act('💬', 'Risposta spontanea', t.speaking.length + ' consegne', 'speakTopic') : '') +
      (t.reading ? act('📰', 'Lettura', t.reading.length + ' testi', 'readTopic') : '');
    h += section('exercises', '✍️', 'Esercizi', ex, (nEx ? 1 : 0) + ['listening', 'dictation', 'shadowing', 'speaking', 'reading'].filter(k => t[k]).length);
    /* Laboratori, simulazioni, missione reale: solo quelli realmente pertinenti */
    const lk = Z.linksFor(t), why = id => (lk.find(l => l.id === id) || {}).why;
    const sel = k => lk.filter(l => k === 'sim' ? l.kind === 'sim' : k === 'mission' ? l.id === 'strategos' : l.kind === 'lab' && l.id !== 'strategos');
    const blocked = Z.blockedReason(s, t);
    ['lab', 'sim', 'mission'].forEach(k => {
      const L = sel(k); if (!L.length) return;
      const body = blocked && parts.lesson !== 'done' ? '<p class="mute small">Disponibile dopo la lezione (' + E(blocked) + '). I laboratori sono facoltativi e non bloccano la progressione.</p>' : L.map(l => Lv.actHtml(l.id, { why: l.why })).join('');
      h += section(k === 'lab' ? 'labs' : k === 'sim' ? 'sims' : 'mission', k === 'lab' ? '🧪' : k === 'sim' ? '🎮' : '🛰', k === 'lab' ? 'Laboratori' : k === 'sim' ? 'Simulazioni' : 'Missione reale', body, L.length);
    });
    /* Verifica */
    const tst = act('🧪', 'Verifica dell’argomento', (t.test || []).length + ' domande · ' + (lastTest ? 'ultimo: ' + Math.round(lastTest.score * 100) + '% (' + lastTest.date + ')' : 'non ancora svolta') + (canTest ? '' : ' · conta come verifica da domani'), 'testTopic', chip(parts.test));
    h += section('tests', '✅', 'Verifiche', tst, '1');
    if (t.cards && t.cards.length) {
      const first = (r.tests || []).find(x => x.score >= P.PASS && r.studied && U.diffDays(r.studied, x.date) >= 1);
      h += '<div class="card"><h3>Ripasso programmato · lessico dell’argomento</h3><p class="mute small">Entra nel ripasso dilazionato dopo la lezione.' + (first && st === 'verified' ? ' Ritest consigliato dal ' + U.addDays(first.date, 14) + '.' : '') + '</p><p>' + t.cards.map(c => '<span class="tag">' + U.ruby(c.b) + ' · ' + E(c.f) + '</span>').join(' ') + '</p></div>';
    }
    return h;
  };

  /* ---- fine lezione: «Pratica consigliata per consolidare questa lezione» ---- */
  ST.practiceCta = t => {
    const s = A.state, lk = Z.linksFor(t).filter(l => l.id !== 'strategos' || t.subject === 'sma').slice(0, 3);
    if (!lk.length || Z.blockedReason(s, t)) return '';
    return '<div class="card practice-cta"><h3>Pratica consigliata per consolidare questa lezione</h3><p class="mute small">Facoltativa: non blocca la progressione. Puoi rimandarla.</p><div class="list">' + lk.map(l => Lv.actHtml(l.id, { why: l.why, compact: true })).join('') + '</div></div>';
  };
  const baseLesson = V.lesson;
  V.lesson = p => {
    const h = baseLesson(p), t = C.topic(p.id), n = t.pages.length, i = Math.max(0, Math.min(n - 1, typeof p.page === 'number' ? p.page : (A.state.topics[t.id] || {}).page || 0));
    if (i !== n - 1) return h;
    const cta = ST.practiceCta(t); if (!cta) return h;
    // dopo il riepilogo (se presente) e prima dei pulsanti di navigazione
    const j = h.lastIndexOf('</div><div class="footnav">'); return j > 0 ? h.slice(0, j) + cta + h.slice(j) : h + cta;
  };

  /* ---- Home: Pratica consigliata (max 2, facoltativa, non modifica le tre missioni) ---- */
  ST.homePractice = () => {
    let rec; try { rec = Z.recommend(A.state, 2); } catch (e) { return ''; }
    if (!rec.length) return '';
    return '<div class="card" id="home-practice"><h2 style="margin:0">Pratica consigliata</h2><p class="mute small">Facoltativa: non cambia le tre missioni né i ripassi.</p><div class="list">' + rec.map(c =>
      Lv.actHtml(c.id, { why: c.reason, compact: true }).replace('<span class="tx"><b>', '<span class="tx"><span class="tag">' + E(c.subjectTitle) + '</span><b>')).join('') + '</div></div>';
  };

  /* ---- Multi-Move: elenco delle simulazioni per materia (il pulsante del laboratorio apre questa vista) ---- */
  V['sma-sims'] = () => '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>♟ Multi-Move Strategy Simulator</h1><p class="mute small">Scenari a più turni: le scelte modificano lo stato e il debrief giudica il processo. Gli scenari sono inventati e semplificati.</p>' + ['str', 'sport', 'f1', 'sec', 'moto'].map(sj => '<div class="card">' + ST.simHub(sj) + '</div>').join('');

  /* ---- Strategic Mastery: «Continua» ---- */
  ST.smaContinue = st0 => {
    const s = st0 || A.state, n = Z.smaNext(s), M = ST.sma;
    const wk = Z.smaDays(s, 7);
    let body;
    if (!n) body = '<p class="small">Hai completato tutti i moduli e le pratiche collegate. Puoi ripetere i laboratori o affrontare una missione reale.</p>';
    else if (n.type === 'check') body = '<p class="small"><b>' + E(n.title) + '</b> · ~' + n.mins + ' min</p><button class="btn block" data-act="smaMisOpen" data-i="' + E(n.iid) + '">▶ Continua</button>';
    else if (n.type === 'levelcheck') body = '<p class="small"><b>' + E(n.title) + '</b> · ~' + n.mins + ' min</p><button class="btn block" data-act="smaLvCheck" data-l="' + E(n.level) + '">▶ Continua</button>';
    else {
      const t = n.topic, d = n.id ? Z.def(n.id) : null;
      const what = n.part === 'lesson' ? 'Lezione' : n.part === 'practice' ? 'Esercizi' : n.part === 'test' ? 'Verifica' : n.part === 'sim' ? 'Simulazione' : n.part === 'mission' ? 'Missione reale' : 'Laboratorio';
      body = '<p class="small"><b>' + E(t.title) + '</b> · ' + E(t.stage) + '<br><span class="mute">Prossimo passo: ' + E(what) + (d ? ' — ' + E(d.title) + ' (~' + d.meta.mins + ' min)' : ' (~' + t.minutes + ' min)') + '</span></p><button class="btn block" data-act="smaCont">▶ Continua Strategic Mastery</button>';
    }
    return '<div class="card glow" id="sma-continue"><h3 style="margin-top:0">Continua Strategic Mastery</h3><p class="mute small">Sedute negli ultimi 7 giorni: <b>' + wk + '</b> (consigliate 2, la terza è facoltativa · 20–30 minuti). Il laboratorio resta liberamente accessibile dall’elenco qui sotto.</p>' + body + '</div>';
  };
  X.smaCont = () => {
    const n = Z.smaNext(A.state); if (!n || !n.topic) return;
    if (n.part === 'lab' || n.part === 'sim' || n.part === 'mission') { if (n.id && Z.launch(n.id)) return; }
    if (n.part === 'lesson') A.go('lesson', { id: n.topic.id }); else if (n.part === 'practice') A.go('practiceTopic', { id: n.topic.id }); else if (n.part === 'test') A.go('testTopic', { id: n.topic.id }); else A.go('topic', { id: n.topic.id });
  };
})(window.ST = window.ST || {});
