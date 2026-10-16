/* SkillTree — hub dell'argomento, lezione a pagine (stile libro digitale), esercizi e verifica. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan, C = ST.content, A = ST.app, E = U.esc, V = ST.views, X = ST.acts, R = ST.runner;

  const langOf = t => t.subject === 'eng' ? 'en' : t.subject === 'jpn' ? 'ja' : null;
  const rec = id => P.topicRec(A.state, id);

  /* ---- Hub dell'argomento ---- */
  V.topic = p => {
    const t = C.topic(p.id), s = A.state, r = rec(t.id), st = P.topicStatus(s, t.id);
    const nEx = t.exercises.length, done = Object.values(r.ex || {}).filter(e => e.ok).length;
    const canTest = r.studied && U.diffDays(r.studied, U.today()) >= 1;
    const act = (icon, title, sub, view, extra) => '<button class="item" data-act="go" data-view="' + view + '" data-p=\'' + JSON.stringify(Object.assign({ id: t.id }, extra || {})) + '\'><span class="ic">' + icon + '</span><span class="tx"><b>' + title + '</b><span>' + sub + '</span></span></button>';
    const lastTest = (r.tests || []).slice(-1)[0];
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(t.title) + '</h1><p class="mute">' + E(t.summary) + '</p>' +
      '<p>' + (C.subject(t.subject) ? '<span class="tag">' + E(C.subject(t.subject).title) + '</span>' : '') + '<span class="tag">Stage ' + E(t.stage) + '</span><span class="tag">~' + t.minutes + ' min</span>' + ST.statusTag(st) + '</p>'; h += (function () { const r = ST.kg.related(t); if (!r.prs.length) return ''; return '<div class="card"><p class="small"><b>Collegamenti trasversali</b> (per parole chiave): ' + r.prs.map(p => '<button class="btn alt sm" data-act="go" data-view="transfer" data-p=\'{"t":"tt"}\'>' + E(ST.kg.PRINCIPLES[p].t) + '</button>').join(' ') + (r.shared.length ? '<br>Anche in: ' + r.shared.map(id => '<button class="btn alt sm" data-act="go" data-view="topic" data-p=\'{"id":"' + id + '"}\'>' + E(ST.content.topics[id].title) + '</button>').join(' ') : '') + '</p></div>'; })();
    if (t.objectives && t.objectives.length) h += '<div class="card"><h3>Obiettivi</h3><ul>' + t.objectives.map(o => '<li>' + E(o) + '</li>').join('') + '</ul>' + ((t.prereq || []).length ? '<p class="mute small">Prerequisiti: ' + t.prereq.map(x => E(C.topic(x).title)).join(', ') + '</p>' : '') + '</div>';
    h += '<div class="list">' +
      act('📖', 'Lezione', t.pages.length + ' pagine' + (r.studied ? ' · letta' : r.page ? ' · riprendi da pagina ' + (r.page + 1) : ''), 'lesson') +
      act('✍️', 'Esercizi applicativi', done + '/' + nEx + ' svolti correttamente', 'practiceTopic') +
      (t.listening ? act('🎧', 'Ascolto senza testo', t.listening.length + ' brano · comprensione esplicita e implicita', 'listenTopic') : '') +
      (t.dictation ? act('📝', 'Dettato', t.dictation.length + ' frasi', 'dictTopic') : '') +
      (t.shadowing ? act('🗣️', 'Shadowing e pronuncia', t.shadowing.length + ' frasi · registrazione facoltativa', 'shadowTopic') : '') +
      (t.speaking ? act('💬', 'Risposta spontanea', t.speaking.length + ' consegne', 'speakTopic') : '') +
      (t.reading ? act('📰', 'Lettura', t.reading.length + ' testi', 'readTopic') : '') +
      act('🧪', 'Verifica dell’argomento', (t.test || []).length + ' domande · ' + (lastTest ? 'ultimo: ' + Math.round(lastTest.score * 100) + '% (' + lastTest.date + ')' : 'non ancora svolta') + (canTest ? '' : ' · conta come verifica da domani'), 'testTopic') +
      '</div>';
    if (t.cards && t.cards.length) h += '<div class="card"><h3>Lessico dell’argomento</h3><p class="mute small">Entra nel ripasso dilazionato dopo la lezione.</p><p>' + t.cards.map(c => '<span class="tag">' + U.ruby(c.b) + ' · ' + E(c.f) + '</span>').join(' ') + '</p></div>';
    return h;
  };

  /* ---- Lezione a pagine ---- */
  V.lesson = p => {
    const t = C.topic(p.id), r = rec(t.id), n = t.pages.length;
    let i = typeof p.page === 'number' ? p.page : (r.page || 0);
    i = Math.max(0, Math.min(n - 1, i));
    r.page = i; A.save();
    const pg = t.pages[i];
    if (i === n - 1 && !r.studied) markStudied(t);
    const toc = p.toc ? '<div class="card"><h3>Indice</h3><div class="list">' + t.pages.map((q, k) => '<button class="item' + (k === i ? ' done' : '') + '" data-act="lpage" data-id="' + t.id + '" data-k="' + k + '"><span class="tx"><b>' + (k + 1) + '. ' + E(q.h) + '</b></span></button>').join('') + '</div></div>' : '';
    const lang = langOf(t);
    return '<div class="reader"><div class="row"><button class="btn alt sm" data-act="back">← Argomento</button><span class="sp"></span>' + (lang === 'ja' ? '<button class="btn alt sm" data-act="furi">あ ' + (A.state.profile.furigana === false ? 'Mostra' : 'Nascondi') + ' furigana</button>' : '') + '<button class="btn alt sm" data-act="ltoc" data-id="' + t.id + '" data-i="' + i + '">☰ Indice</button></div>' +
      '<div class="pbar"><div class="prog"><i style="width:' + Math.round(100 * (i + 1) / n) + '%"></i></div><div class="mute small">Pagina ' + (i + 1) + ' di ' + n + ' · ' + E(t.title) + '</div></div>' + toc +
      '<article class="page"><h2>' + E(pg.h) + '</h2>' + U.markup(pg.b) + '</article>' + (i === n - 1 && ST.summaryHtml ? ST.summaryHtml(t) + (ST.extHtml ? ST.extHtml(t) : '') : '') + '</div>' +
      '<div class="footnav"><button class="btn alt" data-act="lpage" data-id="' + t.id + '" data-k="' + (i - 1) + '"' + (i === 0 ? ' disabled' : '') + '>← Indietro</button>' +
      (i < n - 1 ? '<button class="btn" data-act="lpage" data-id="' + t.id + '" data-k="' + (i + 1) + '">Avanti →</button>' : '<button class="btn" data-act="lexercise" data-id="' + t.id + '">Vai agli esercizi →</button>') + '</div>';
  };
  const markStudied = t => {
    const r = rec(t.id); r.studied = U.today();
    ST.cards.introduceTopic(A.state, t);
    const subj = C.subject(t.subject); if (subj) A.subjectTouch(subj.id);
    A.xp(t.pill ? 12 : 30, 'lesson:' + t.id);
    A.toast('Lezione completata · lessico aggiunto al ripasso');
    if (ST.topicStudiedHook) ST.topicStudiedHook();
  };
  X.lpage = el => { const t = C.topic(el.dataset.id); A.replace('lesson', { id: t.id, page: +el.dataset.k }); };
  X.ltoc = el => A.replace('lesson', { id: el.dataset.id, page: +el.dataset.i, toc: !A.view().p.toc });
  X.furi = () => { A.state.profile.furigana = A.state.profile.furigana === false; A.save(); A.render(); };
  X.lexercise = el => { A.replace('practiceTopic', { id: el.dataset.id }); };

  /* ---- Esercizi / verifica ---- */
  const subjectCtx = t => langOf(t) || 'general';
  V.practiceTopic = p => { setTimeout(() => X.startPractice(p.id, true), 0); return '<p class="mute center">Preparazione…</p>'; };
  X.startPractice = (id, replace) => {
    const t = C.topic(id), r = rec(id);
    if (replace) A.stack.pop();
    // Priorità: esercizi non ancora corretti, poi gli altri.
    const order = t.exercises.map((e, i) => ({ e, i, ok: (r.ex[i] || {}).ok })).sort((a, b) => (a.ok ? 1 : 0) - (b.ok ? 1 : 0));
    R.start({
      title: 'Esercizi · ' + t.title, kind: 'practice', items: order.map(o => Object.assign({}, o.e, { _i: o.i })), ctx: subjectCtx(t),
      onAnswer: (it, ok) => {
        const e = (r.ex[it._i] = r.ex[it._i] || { n: 0, ok: false }); e.n++; if (ok) e.ok = true; e.last = U.today();
        if (!ok) ST.cards.registerError(A.state, t, it._i);
        A.xp(ok ? 4 : 1, 'ex:' + t.id + ':' + it._i);
      },
      onFinish: res => { A.subjectTouch(t.subject); A.save(); const ok = res.filter(x => x.ok).length; return '<p>' + (ok === res.length ? 'Tutto corretto. Domani prova la verifica.' : 'Gli errori tornano domani nei ripassi.') + '</p>'; }
    });
  };
  V.testTopic = p => { setTimeout(() => X.startTest(p.id, true), 0); return '<p class="mute center">Preparazione…</p>'; };
  X.startTest = (id, replace) => {
    const t = C.topic(id), r = rec(id);
    if (replace) A.stack.pop();
    const canCount = r.studied && U.diffDays(r.studied, U.today()) >= 1;
    if (!r.studied && !confirm('Non hai ancora completato la lezione. Vuoi fare la prova comunque? (non contribuirà alla verifica)')) { return; }
    R.start({
      title: 'Verifica · ' + t.title, kind: 'test', items: (t.test || []).map(x => Object.assign({}, x)), ctx: subjectCtx(t),
      onAnswer: (it, ok) => { A.xp(ok ? 8 : 0, 'test:' + t.id); },
      onFinish: res => {
        const score = res.filter(x => x.ok).length / res.length;
        const wasRetest = P.atLeast(P.topicStatus(A.state, id), 'verified');
        (wasRetest ? r.retests : r.tests).push({ date: U.today(), score, n: res.length });
        A.subjectTouch(t.subject); A.save();
        const st = P.topicStatus(A.state, id);
        let msg = '<p>Stato: ' + ST.statusTag(st) + '</p>';
        if (score < P.PASS) msg += '<p class="warn">Sotto l’80%: rivedi la lezione e gli errori; riprova dopo un po’.</p>';
        else if (!canCount) msg += '<p class="warn">Superata, ma svolta nello stesso giorno della lezione: <b>non conta come verifica</b>. Ripetila da domani per ottenere «Verificato».</p>';
        else if (st === 'verified') msg += '<p class="fb ok">Verificato. Un ritest dopo almeno 14 giorni porterà a «Mantenuto».</p>';
        else if (st === 'retained') msg += '<p class="fb ok">Ritest superato a distanza: conoscenza mantenuta.</p>';
        return msg;
      }
    });
  };
  P.canVerify = 1;
})(window.ST = window.ST || {});
