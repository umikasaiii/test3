/* SkillTree — missioni giornaliere (inglese, giapponese, generale), sessione judo 5′ e allenamento mentale. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan, C = ST.content, A = ST.app, M = ST.motor, MN = ST.mental, E = U.esc, V = ST.views, X = ST.acts, R = ST.runner;

  /* ---- completamento blocchi ---- */
  const RK = { review: 'review', kana: 'kana', practice: 'practice', test: 'test', listen: 'listening', dict: 'dictation', read: 'reading', free: 'cards', mini: 'test', mental: 'mental' };
  A.blockComplete = kind => {
    const pb = A.pb; if (!pb) return;
    const d = A.day();
    if (pb.general) {
      if (pb.general === 'theory' && (kind === 'practice' || kind === 'test')) { d.general.theory = true; A.pb = null; A.save(); A.toast('✓ Teoria registrata'); }
      else if (pb.general === 'mental' && kind === 'mental') { d.general.mental = true; A.pb = null; A.save(); A.toast('✓ Allenamento mentale registrato'); }
      return;
    }
    const alias = { test: ['test'], listening: ['listening'], cards: ['cards', 'review'] };
    if (pb.kind === kind || (alias[pb.kind] || []).includes(kind)) { d[pb.lang][pb.idx] = true; A.pb = null; A.save(); A.toast('✓ Blocco completato'); }
  };
  const origClose = X['run-close'];
  X['run-close'] = () => { const r = A.run; const k = r && RK[r.kind]; origClose(); if (k) A.blockComplete(k); };
  ST.topicStudiedHook = () => A.blockComplete('lesson');

  /* ---- missione linguistica ---- */
  const KIND_ICON = { review: '🔁', kana: 'あ', lesson: '📖', practice: '✍️', listening: '🎧', speaking: '💬', shadowing: '🗣️', cards: '🃏', dictation: '📝', writing: '✏️', test: '🧪', reading: '📰', conversation: '🗨️' };
  V.mission = p => {
    const lang = p.lang, s = A.state, d = A.day(), m = PL.minutes(s);
    d[lang] = d[lang] || {};
    if (!d[lang]._plan) d[lang]._plan = PL.languageBlocks(s, lang, m[lang]).blocks;
    const blocks = d[lang]._plan; d[lang]._n = blocks.length;
    const wd = U.weekday(), focus = PL.LANG_FOCUS[lang][wd];
    const doneN = blocks.filter((b, i) => d[lang][i]).length;
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Home</button></div><h1>' + (lang === 'en' ? '🇬🇧 Inglese' : '🇯🇵 Giapponese') + ' · ' + m[lang] + ' min</h1>' +
      '<p class="mute">' + E(m.phase) + ' · oggi: <b>' + E(PL.FOCUS_LABEL[focus]) + '</b></p>' + (m.note ? '<p class="warn small">' + E(m.note) + '</p>' : '') +
      '<div class="prog"><i style="width:' + Math.round(100 * doneN / Math.max(1, blocks.length)) + '%"></i></div><p class="mute small">' + doneN + '/' + blocks.length + ' blocchi · attivo oggi: ' + A.activeMin(lang) + ' min</p><div class="list">';
    blocks.forEach((b, i) => {
      h += '<button class="item' + (d[lang][i] ? ' done' : '') + '" data-act="mblock" data-lang="' + lang + '" data-i="' + i + '"><span class="ic">' + (d[lang][i] ? '✓' : KIND_ICON[b.kind] || '•') + '</span><span class="tx"><b>' + E(b.label) + '</b><span>' + b.minutes + ' min' + (b.detail ? ' · ' + E(b.detail) : '') + '</span></span></button>';
    });
    h += '</div><div class="card"><h3>Priorità del programma</h3><p class="mute small">' + (lang === 'en' ? 'Ascolto attivo senza trascrizione, risposta spontanea, shadowing; poi grammatica, lessico, lettura, scrittura.' : 'Ascolto e comprensione, parlato spontaneo, shadowing, grammatica, lessico in contesto; scrittura funzionale. Kana Trainer al massimo 3′.') + '</p>' +
      '<p class="mute small">Altri laboratori in Pratica. Per i ripassi dilazionati il sistema riporta prima gli errori recenti.</p></div>';
    return h;
  };
  X.mblock = el => {
    const lang = el.dataset.lang, i = +el.dataset.i, b = A.day()[lang]._plan[i];
    A.pb = { lang, idx: i, kind: b.kind };
    A.ctx = lang;
    const o = {};
    ({
      review: () => X.startReview(lang, o), kana: () => X.startKana(o), lesson: () => A.go('lesson', { id: b.topic }),
      practice: () => X.startPractice(b.topic), listening: () => X.startListening(lang, o), speaking: () => X.startSpeak(lang, o),
      shadowing: () => X.startShadow(lang, o), cards: () => { if (ST.cards.dueCount(A.state, lang)) X.startReview(lang, o); else X.startCardsFree(lang, o); },
      dictation: () => X.startDictation(lang, o), writing: () => X.startWrite(lang, o), test: () => b.topic ? X.startTest(b.topic) : X.startMini(lang, o),
      reading: () => X.startReading(lang, o), conversation: () => X.startConvo(lang, o)
    })[b.kind]();
  };
  ['shadow-next', 'speak-done', 'write-save', 'convo-close'].forEach(n => {
    const f = X[n], kind = { 'shadow-next': 'shadowing', 'speak-done': 'speaking', 'write-save': 'writing', 'convo-close': 'conversation' }[n];
    X[n] = async function () { const before = A.view().name; await f.apply(this, arguments); if (n !== 'shadow-next' || A.view().name !== before) A.blockComplete(kind); };
  });

  /* ---- missione generale ---- */
  const THEORY_SUBJ = { cyber: 'cyb', sport: 'sport', prog: 'prog', f1: 'f1', cyberlab: 'cyb', strategy: 'str', secondary: 'sec' };
  const pillFor = slot => {
    const subj = THEORY_SUBJ[slot];
    let list = C.topicsOf(subj).filter(t => t.pill);
    if (subj === 'cyb') list = list.filter(t => (slot === 'cyberlab') === t.id.startsWith('cyb-scenario'));
    if (!list.length) return null;
    const s = A.state;
    const unfinished = list.find(t => !P.atLeast(P.topicStatus(s, t.id), 'verified'));
    if (unfinished) return unfinished;
    return list.slice().sort((a, b) => ((P.topicRec(s, a.id).studied || '')).localeCompare(P.topicRec(s, b.id).studied || ''))[0];
  };
  V.general = () => {
    const s = A.state, d = A.day(), wd = U.weekday(), slotT = PL.THEORY[wd], pill = pillFor(slotT), g = d.general;
    const jslot = PL.JUDO_SLOT[wd], rest = wd === 6;
    return '<div class="row"><button class="btn alt sm" data-act="back">← Home</button></div><h1>🧠 Missione generale · 15 min</h1><p class="mute">Attivo oggi: ' + A.activeMin('general') + ' min</p><div class="list">' +
      '<button class="item' + (g.mental ? ' done' : '') + '" data-act="startMental"><span class="ic">🧠</span><span class="tx"><b>Allenamento mentale · 5′</b><span>' + (MN.WEEK[wd].map(t => MN.LABEL[t]).join(' · ')) + '</span></span><span class="tag ' + (g.mental ? 'good' : '') + '">' + (g.mental ? '✓' : 'Inizia') + '</span></button>' +
      '<button class="item' + (g.judo ? ' done' : '') + '" data-act="go" data-view="judoSession"><span class="ic">🥋</span><span class="tx"><b>Judo e lotta · 5′</b><span>' + E(PL.JUDO_LABEL[jslot]) + (rest ? ' · riposo fisico' : '') + '</span></span><span class="tag ' + (g.judo ? 'good' : '') + '">' + (g.judo ? '✓' : 'Inizia') + '</span></button>' +
      '<button class="item' + (g.theory ? ' done' : '') + '" data-act="startTheory"><span class="ic">📚</span><span class="tx"><b>' + E(PL.THEORY_LABEL[slotT]) + ' · 5′</b><span>' + (pill ? E(pill.title) + ' · ' + ST.statusTagText(P.topicStatus(s, pill.id)) : 'Nessuna pillola disponibile') + '</span></span><span class="tag ' + (g.theory ? 'good' : '') + '">' + (g.theory ? '✓' : 'Inizia') + '</span></button></div>' +
      '<p class="mute small">Una pillola da 5′ non assegna livelli avanzati: porta solo a «letta / esercitata / verificata» per quella pillola. L’espansione dei contenuti è nel piano di lavoro.</p>';
  };
  ST.statusTagText = st => P.statusLabel[st];
  X.startTheory = () => {
    const slot = PL.THEORY[U.weekday()], pill = pillFor(slot);
    if (!pill) { A.toast('Nessuna pillola disponibile.'); return; }
    A.ctx = 'general'; A.pb = { general: 'theory' };
    const r = P.topicRec(A.state, pill.id);
    if (r.studied && !P.atLeast(P.topicStatus(A.state, pill.id), 'practiced')) X.startPractice(pill.id);
    else if (r.studied && P.atLeast(P.topicStatus(A.state, pill.id), 'practiced') && !P.atLeast(P.topicStatus(A.state, pill.id), 'verified') && U.diffDays(r.studied, U.today()) >= 1) X.startTest(pill.id);
    else if (r.studied) X.startPractice(pill.id);
    else A.go('lesson', { id: pill.id });
  };
  X.startMental = () => {
    const s = A.state; A.ctx = 'general'; A.pb = { general: 'mental' };
    const items = MN.session(s, U.today(), null, 8);
    R.start({ title: 'Allenamento mentale · 5 min', kind: 'mental', items, ctx: 'general',
      onAnswer: (it, ok) => { MN.record(s, it.mtype, ok); A.xp(ok ? 3 : 0, 'mental:' + it.mtype); },
      onFinish: res => { A.subjectTouch('mnt'); A.save(); const by = {}; res.forEach(x => { const t = x.item.mtype; by[t] = by[t] || [0, 0]; by[t][1]++; if (x.ok) by[t][0]++; }); return '<p class="mute small">' + Object.keys(by).map(t => E(MN.LABEL[t]) + ' ' + by[t][0] + '/' + by[t][1] + ' (livello ' + MN.level(s, t) + ')').join('<br>') + '</p>'; } });
  };
  ST.mentalHub = () => {
    const s = A.state;
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🧠 Allenamento mentale</h1><p class="mute">Esercizi generati, sempre nuovi, con difficoltà che sale quando rispondi bene e scende quando sbagli.</p>' +
      '<button class="btn block" data-act="startMental">▶ Sessione da 5 minuti (oggi)</button><div class="card"><h3>Livelli per tipo</h3><table class="t">' + MN.TYPES.map(t => { const m = s.mental[t] || { level: 1, n: 0, ok: 0 }; return '<tr><td>' + E(MN.LABEL[t]) + '</td><td>Lv ' + m.level + '</td><td class="mute">' + (m.n ? Math.round(100 * m.ok / m.n) + '% su ' + m.n : '—') + '</td></tr>'; }).join('') + '</table></div>' +
      '<p class="mute small">Il miglioramento negli esercizi allenati non dimostra di per sé un aumento generale delle capacità cognitive: misura la prestazione in questi compiti.</p>';
  };

  /* ---- Judo ---- */
  const beep = () => { try { const ctx = new (window.AudioContext || window.webkitAudioContext)(); const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(ctx.destination); o.frequency.value = 880; g.gain.value = 0.08; o.start(); setTimeout(() => { o.stop(); ctx.close(); }, 180); if (navigator.vibrate) navigator.vibrate(120); } catch (e) { /* ignora */ } };
  const stars = (n, name) => [1, 2, 3, 4, 5].map(i => '<button class="chip' + (i === n ? ' sel' : '') + '" data-act="jrate" data-k="' + name + '" data-v="' + i + '" style="' + (i <= n ? 'border-color:var(--acc2)' : '') + '">' + i + '</button>').join('');

  ST.judoHub = () => {
    const s = A.state, J = C.judo, act = M.active(s), stg = M.stage(s), today = U.today();
    const pick = M.pickForDay(s);
    const due = act.filter(id => s.motor[id].card.due <= today).length;
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🥋 Judo e lotta libera</h1><p class="mute">Stadio motorio attuale: <b>' + stg + '</b> (livello didattico interno, non una cintura).</p>' +
      '<div class="card"><h3>Che cosa questo modulo può e non può fare</h3><p class="small">' + E(J.scope) + '</p></div>' +
      '<div class="card glow"><h3>Oggi: ' + E(PL.JUDO_LABEL[PL.JUDO_SLOT[U.weekday()]]) + '</h3><p class="mute small">' + E(pick.reason || '') + '</p><button class="btn block" data-act="go" data-view="judoSession">▶ Sessione da 5 minuti</button></div>' +
      '<div class="card"><h3>Sicurezza</h3><ul class="small">' + J.safety.map(x => '<li>' + E(x) + '</li>').join('') + '</ul></div>' +
      '<h2>Repertorio (' + act.length + ' / ' + J.techniques.length + ') · ripassi scaduti: ' + due + '</h2><div class="list">' + J.techniques.map(t => {
        const r = s.motor[t.id];
        return '<button class="item" data-act="go" data-view="technique" data-p=\'{"id":"' + t.id + '"}\'><span class="ic">' + (r ? '🥋' : '🔒') + '</span><span class="tx"><b>' + E(t.name) + '</b><span>' + E(t.stage) + ' · ' + E(M.label(r)) + (r ? ' · prossimo: ' + r.card.due : ' · dal mese ' + t.minMonth) + '</span></span></button>';
      }).join('') + '</div>';
  };
  V.technique = p => {
    const t = M.def(p.id), r = A.state.motor[p.id], J = C.judo;
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(t.name) + '</h1><p class="mute">' + E(t.jp) + ' · ' + E(t.stage) + ' · spazio: ' + E(t.space) + '</p>' +
      (t.instructor ? '<p class="warn small">Questa entrata va <b>verificata da un istruttore</b>. Qui si allena solo il movimento a vuoto.</p>' : '') +
      '<div class="card"><h3>Indicazioni</h3><ol>' + t.cues.map(c => '<li>' + E(c) + '</li>').join('') + '</ol></div>' +
      '<div class="card"><h3>Errori comuni da controllare</h3><p>' + t.errors.map(e => '<span class="tag">' + E(e[1]) + '</span>').join(' ') + '</p></div>' +
      '<div class="card"><h3>Varianti</h3><ul>' + t.variants.map(v => '<li>' + E(v) + '</li>').join('') + '</ul></div>';
    if (r) {
      h += '<div class="card"><h3>Stato</h3><dl class="kv"><dt>Stato</dt><dd>' + E(M.label(r)) + '</dd><dt>Introdotta</dt><dd>' + r.introduced + '</dd><dt>Ultimo allenamento</dt><dd>' + (r.card.last || '—') + '</dd><dt>Richiami</dt><dd>' + r.card.reps + ' (errori gravi: ' + r.card.lapses + ')</dd><dt>Prossimo ripasso</dt><dd>' + r.card.due + '</dd><dt>Qualità media (ultimi 3)</dt><dd>' + (M.mean(r, 3) ? M.mean(r, 3).toFixed(1) + ' / 5 (autovalutata)' : '—') + '</dd><dt>Errori ricorrenti</dt><dd>' + (Object.keys(r.errors).length ? Object.entries(r.errors).sort((a, b) => b[1] - a[1]).slice(0, 3).map(e => E(J.errorLabel(e[0])) + ' ×' + e[1]).join(', ') : '—') + '</dd><dt>Verifica istruttore</dt><dd>' + (r.instructor ? E(r.instructor.date + ' · ' + r.instructor.note) : 'non registrata') + '</dd></dl>' +
        '<button class="btn alt block" style="margin-top:10px" data-act="jinstr" data-id="' + t.id + '">Registra verifica di un istruttore</button><p class="mute small">La valutazione autonoma resta distinta dalla validazione tecnica esterna.</p></div>';
    } else h += '<p class="mute">Non ancora introdotta: entra nel percorso quando arriva il suo turno (mese ' + t.minMonth + ' e tecniche precedenti stabili).</p>';
    return h;
  };
  X.jinstr = el => {
    const note = prompt('Nota dell’istruttore o del corso (nome, data, esito)?'); if (note === null) return;
    M.verifyByInstructor(A.state, el.dataset.id, note); A.save(); A.render();
  };

  /* Sessione 5 minuti */
  V.judoSession = () => {
    const s = A.state, d = A.day();
    if (!d.judoPlan) { d.judoPlan = M.pickForDay(s); A.save(); }
    const pk = d.judoPlan;
    const a = A.act && A.act.kind === 'judo' ? A.act : null;
    if (!a || a.date !== U.today()) {
      A.act = null;
      if (pk.rest) return judoRest();
      const names = pk.items.map(id => M.def(id).name);
      return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🥋 Judo · 5 minuti</h1><p class="mute">' + E(PL.JUDO_LABEL[pk.slot]) + '</p><div class="card"><h3>Oggi</h3><ul>' + names.map(E).map(n => '<li>' + n + '</li>').join('') + '</ul><p class="mute small">' + E(pk.reason) + (pk.combo ? ' · ' + E(pk.combo) : '') + '</p></div>' +
        '<div class="card"><h3>Prima di iniziare</h3><ul class="small">' + C.judo.safety.slice(0, 3).map(x => '<li>' + E(x) + '</li>').join('') + '</ul><label class="row"><input type="checkbox" id="jsafe" style="width:22px;height:22px"> <span>Ho almeno 2 m × 2 m liberi, pavimento sicuro, e non sento dolore.</span></label></div>' +
        '<button class="btn block" data-act="jstart">▶ Inizia</button>';
    }
    return judoRun(a);
  };
  const judoRest = () => {
    const J = C.judo, act = M.active(A.state);
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🥋 Domenica · riposo fisico</h1><p class="mute">Oggi solo teoria e osservazione.</p><div class="card"><p>Niente movimenti fisici. Fai il quiz di teoria e, se vuoi, guarda un video di judo prestando attenzione a postura, spostamenti e kuzushi.</p></div><button class="btn block" data-act="jtheory">Quiz di teoria (3 min)</button>' + (act.length ? '' : '<p class="mute small">Nessuna tecnica ancora avviata.</p>');
  };
  X.jtheory = () => {
    const s = A.state, J = C.judo;
    const pool = J.sundayTheory.concat(M.active(s).flatMap(id => M.def(id).theory || []));
    const items = U.sample(pool, Math.min(5, pool.length)).map(q => ({ t: 'mc', q: q.q, o: q.o, a: q.a, why: 'Ripassa la scheda della tecnica.' }));
    R.start({ title: 'Teoria judo', kind: 'free', items, ctx: 'general', onAnswer: (it, ok) => A.xp(ok ? 3 : 0, 'jt'), onFinish: () => { A.day().general.judo = true; A.subjectTouch('grp'); A.save(); return '<p class="mute small">Teoria registrata. Riposo fisico completo oggi.</p>'; } });
  };
  X.jstart = () => {
    if (!A.$('#jsafe').checked) { A.toast('Conferma le condizioni di sicurezza.'); return; }
    const s = A.state, d = A.day(), pk = d.judoPlan;
    // introduzione della nuova tecnica registrata all'avvio
    pk.items.forEach(id => { if (!s.motor[id]) M.introduce(s, id); });
    const n = pk.items.length, per = Math.floor(300 / n);
    A.ctx = 'general';
    A.act = { kind: 'judo', date: U.today(), items: pk.items.slice(), i: 0, per, ph: 0, left: 0, running: false, ratings: [], step: 'run', startAt: null };
    startPhase();
    A.render();
  };
  let jt = null;
  const phaseDefs = a => {
    const id = a.items[a.i], r = A.state.motor[id], isNew = r.card.reps <= 1 && r.log.length === 0;
    const p = M.phases(A.state, id), f = a.per / 300, t = M.def(id);
    const var0 = t.variants[(r.log.length) % t.variants.length];
    return [
      { name: isNew ? 'Studia le indicazioni' : 'Richiamo senza dimostrazione', sec: Math.round(p.recall * f), text: isNew ? 'Leggi le indicazioni e immagina il movimento.' : 'Rifai il movimento a memoria, senza guardare le indicazioni.', showCues: isNew },
      { name: 'Ripetizione lenta e controllata', sec: Math.round(p.slow * f), text: 'Movimento lento, respiro regolare, qualità prima della velocità.', showCues: true },
      { name: 'Variabilità', sec: Math.round(p.vary * f), text: 'Variante: ' + var0, showCues: false },
      { name: 'Controllo degli errori', sec: Math.round(p.check * f), text: 'Fermati: quali errori hai notato? Chiudi in postura stabile.', showCues: true }
    ];
  };
  const startPhase = () => {
    const a = A.act; a.defs = phaseDefs(a); a.ph = 0; a.left = a.defs[0].sec; a.running = true; clearInterval(jt);
    jt = setInterval(() => {
      if (!A.act || A.act.kind !== 'judo' || !A.act.running) return;
      a.left--;
      const el = A.$('#jleft'); if (el) el.textContent = Math.floor(a.left / 60) + ':' + String(Math.max(0, a.left % 60)).padStart(2, '0');
      if (a.left <= 0) nextPhase();
    }, 1000);
  };
  const nextPhase = () => {
    const a = A.act; beep();
    if (a.ph + 1 < a.defs.length) { a.ph++; a.left = a.defs[a.ph].sec; A.render(); }
    else { clearInterval(jt); a.running = false; a.step = 'rate'; A.render(); }
  };
  const judoRun = a => {
    const id = a.items[a.i], t = M.def(id), r = A.state.motor[id];
    if (a.step === 'rate') {
      const cur = a.cur || (a.cur = { q: 3, d: 3, err: [] });
      return '<h1>' + E(t.name) + '</h1><div class="card"><h3>Come è andata? (autovalutazione)</h3><p class="mute small">Qualità tecnica percepita (1 = molto incerta, 5 = fluida e precisa)</p><div class="chips">' + stars(cur.q, 'q') + '</div><p class="mute small">Difficoltà percepita (1 = facile, 5 = molto faticosa)</p><div class="chips">' + stars(cur.d, 'd') + '</div>' +
        '<p class="mute small">Errori notati</p><div class="chips">' + t.errors.map(e => '<button class="chip' + (cur.err.includes(e[0]) ? ' sel' : '') + '" data-act="jerr" data-e="' + e[0] + '" style="' + (cur.err.includes(e[0]) ? 'border-color:var(--bad)' : '') + '">' + E(e[1]) + '</button>').join('') + '</div>' +
        '<p class="warn small">Se hai sentito dolore, fermati e non aumentare la difficoltà. Una buona sensazione solitaria non dimostra che la tecnica funzioni con un partner.</p><button class="btn block" data-act="jsave">' + (a.i + 1 < a.items.length ? 'Salva e prossima tecnica' : 'Salva e concludi') + '</button></div>';
    }
    const ph = a.defs[a.ph];
    return '<div class="row"><button class="btn alt sm" data-act="jabort">✕ Interrompi</button><span class="sp"></span><span class="mute small">' + (a.i + 1) + '/' + a.items.length + '</span></div><h1>' + E(t.name) + '</h1><p class="mute small">' + E(t.jp) + ' · spazio: ' + E(t.space) + '</p>' +
      '<div class="phase"><div class="mute small">Fase ' + (a.ph + 1) + '/4</div><h2 style="margin:4px 0">' + E(ph.name) + '</h2><div class="timer" id="jleft">' + Math.floor(a.left / 60) + ':' + String(a.left % 60).padStart(2, '0') + '</div><p>' + E(ph.text) + '</p></div>' +
      (ph.showCues ? '<div class="card"><h3>Indicazioni</h3><ol>' + t.cues.map(c => '<li>' + E(c) + '</li>').join('') + '</ol></div>' : '<div class="card"><p class="mute">Indicazioni nascoste: rifai il movimento a memoria.</p></div>') +
      '<div class="row"><button class="btn alt" data-act="jskip">Salta fase →</button></div><p class="warn small">Stop immediato in caso di dolore. Nessuna proiezione, nessuna caduta, nessun contatto: solo movimento a vuoto.</p>';
  };
  X.jskip = () => nextPhase();
  X.jabort = () => { if (confirm('Interrompere la sessione di judo?')) { clearInterval(jt); A.act = null; A.back(); } };
  X.jrate = el => { A.act.cur[el.dataset.k] = +el.dataset.v; A.render(); };
  X.jerr = el => { const c = A.act.cur, e = el.dataset.e; c.err = c.err.includes(e) ? c.err.filter(x => x !== e) : c.err.concat(e); A.render(); };
  X.jsave = () => {
    const a = A.act, s = A.state, id = a.items[a.i], c = a.cur;
    const r = M.log(s, id, c.q, c.d, c.err);
    a.ratings.push({ id, due: r.card.due, state: M.label(r) });
    A.xp(c.q >= 3 ? 8 : 4, 'judo:' + id);
    a.cur = null;
    if (a.i + 1 < a.items.length) { a.i++; startPhase(); A.render(); return; }
    A.day().general.judo = true; A.subjectTouch('grp'); A.save();
    const sum = a.ratings; A.act = null;
    A.stack.pop(); A.stack.push({ name: 'judoDone', p: { sum } }); A.render(true);
  };
  V.judoDone = p => '<div class="card glow center"><h1>✓ Sessione registrata</h1>' + p.sum.map(x => '<p><b>' + E(M.def(x.id).name) + '</b><br><span class="mute small">' + E(x.state) + ' · prossimo ripasso: ' + x.due + '</span></p>').join('') + '<p class="mute small">Il sistema riproporrà la tecnica prima se l’esecuzione è stata incerta, più tardi se è stata buona.</p></div><button class="btn block" data-act="back">Fine</button>';
})(window.ST = window.ST || {});
