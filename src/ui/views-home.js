/* SkillTree — Onboarding, Home (albero + tre missioni) e vista Percorsi. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan, C = ST.content, A = ST.app, E = U.esc;
  const V = ST.views, X = ST.acts;

  /* Immagini originali V11.2 (assets/) per materia; il bagliore del bordo indica attività recente, non padronanza. */
  const ART = { eng: 'english-studio', jpn: 'japanese-studio', grp: 'judo-neon', cyb: 'cyber-range', sport: 'carico-biomeccanica', f1: 'f1-visual-lab', str: 'giochi-strategici', mnt: 'palestra-mentale', sec: 'bg-secondary-02' };
  const img = n => (ST.assets && ST.assets[n]) || '';
  ST.img = img; ST.ART = ART;
  // Le immagini sono definite una sola volta come classi CSS (non ripetute nell'HTML a ogni render).
  ST.injectArt = () => {
    const css = Object.keys(ART).map(k => '.art-' + k + '{background-image:url(' + img(ART[k]) + ')}').join('') + '.hero-main{background-image:url(' + img('hero-home-main') + ')}.hero-light{background-image:url(' + img('hero-home-light') + ')}';
    const st = document.createElement('style'); st.id = 'art-css'; st.textContent = css; document.head.appendChild(st);
  };
  const bg = id => 'art-' + id;
  ST.artBg = bg;
  const nodeClass = id => {
    const d = A.state.last && A.state.last[id];
    if (!d) return 'dim';
    const n = U.diffDays(d, U.today());
    return n <= 2 ? 'hot' : n <= 7 ? 'warm' : 'dim';
  };
  const strip = () => '<div class="strip" aria-label="Le otto materie principali">' + ['eng', 'jpn', 'grp', 'cyb', 'sport', 'f1', 'str', 'mnt'].map(id => {
    const s = C.subject(id);
    return '<button class="sj ' + nodeClass(id) + '" data-act="go" data-view="subject" data-p=\'{"id":"' + id + '"}\'><span class="im ' + bg(id) + '"></span>' + E(s.title) + '</button>';
  }).join('') + '</div>';

  /* ---- Onboarding ---- */
  V.onboard = () => '<div class="card glow"><h1>🌳 SkillTree Academy</h1><p>Una accademia personale offline: lingue, judo, mente e cultura generale. Qui <b>XP e livelli misurano la costanza</b>; la padronanza si dichiara solo con verifiche a distanza di tempo.</p></div>' +
    '<div class="card"><h2>Configurazione</h2><label class="small mute">Come vuoi essere chiamato?</label><input type="text" id="ob-name" maxlength="30" placeholder="Nome" value="' + E(A.state.profile.name) + '">' +
    '<label class="small mute" style="display:block;margin-top:10px">Data di inizio del corso (determina le fasi dei 24 mesi)</label><input type="date" id="ob-start" value="' + E(A.state.startDate) + '">' +
    '<label class="small mute" style="display:block;margin-top:10px">Tema</label><select id="ob-theme">' + themeOpts(A.state.profile.theme) + '</select></div>' +
    '<div class="card"><h2>Come funziona</h2><ul><li><b>60 minuti al giorno</b>: inglese, giapponese e missione generale da 15′.</li><li>Lezioni a pagine, esercizi, ascolto, dettato, shadowing, ripasso dilazionato.</li><li><b>Judo:</b> solo esercizi solitari e sicuri; il lavoro con partner richiede un istruttore.</li><li>I dati restano <b>sul tuo dispositivo</b>: fai spesso il backup (Altro → Backup).</li></ul>' +
    '<p class="warn small">Se apri questo file direttamente dal telefono (file://), i dati dipendono dal percorso del file. Per un salvataggio stabile, pubblicalo su un indirizzo https (es. GitHub Pages) oppure esporta regolarmente il backup.</p></div>' +
    '<button class="btn block" data-act="ob-start">Inizia</button>';
  const themeOpts = cur => [['neon', 'Neon (blu/viola)'], ['ocean', 'Oceano'], ['sunset', 'Tramonto'], ['light', 'Chiaro']].map(t => '<option value="' + t[0] + '"' + (cur === t[0] ? ' selected' : '') + '>' + t[1] + '</option>').join('');
  X['ob-start'] = () => {
    const s = A.state;
    s.profile.name = A.$('#ob-name').value.trim();
    const d = A.$('#ob-start').value; if (d) s.startDate = d;
    s.profile.theme = A.$('#ob-theme').value;
    s.onboarded = true; A.theme(); A.save(); A.setTab('home');
  };
  ST.themeOpts = themeOpts;

  /* ---- Home ---- */
  const nextTopicLine = (lang) => {
    const subj = lang === 'en' ? 'eng' : 'jpn', t = PL.nextLesson(A.state, subj), pt = PL.pendingTest(A.state, subj);
    return (t ? '<span class="mute">Prossima lezione: <b>' + E(t.title) + '</b></span>' : '<span class="mute">Lezioni disponibili terminate: nuovi contenuti in arrivo.</span>') + (pt ? '<span class="mute">Verifica in attesa: <b>' + E(pt.title) + '</b></span>' : '');
  };
  V.home = () => {
    const s = A.state, m = PL.minutes(s), d = A.day();
    const due = ST.cards.dueCount(s);
    const gen = d.general || {};
    const genDone = [gen.mental, gen.judo, gen.theory].filter(Boolean).length;
    const slot = PL.JUDO_SLOT[U.weekday()];
    const hi = s.profile.name ? 'Ciao ' + E(s.profile.name) + '! ' : '';
    const heroName = A.state.profile.theme === 'light' ? 'hero-light' : 'hero-main';
    return '<div class="hero ' + heroName + '"><div class="shade"><span class="kick">LA TUA AVVENTURA DI APPRENDIMENTO</span><h1>Ogni lezione<br><em>fa crescere il tuo albero.</em></h1><p class="mute small" style="margin:0">Il bordo luminoso delle materie indica attività recente, non padronanza.</p></div></div>' + strip() +
      '<div class="card glow"><div class="row"><h2 style="margin:0">' + hi + 'Le tue 3 missioni</h2></div><p class="mute small">' + E(U.today()) + ' · ' + E(m.phase) + ' · mese ' + m.month + ' · piano ' + m.total + ' minuti' + (m.b2 ? ' · B2 verificato' : '') + '</p>' +
      (m.note ? '<p class="warn small">' + E(m.note) + '</p>' : '') +
      '<div class="list">' +
      mission('en', '🇬🇧', 'Inglese', m.en, nextTopicLine('en'), d, A.activeMin('en')) +
      mission('ja', '🇯🇵', 'Giapponese', m.ja, nextTopicLine('ja'), d, A.activeMin('ja')) +
      '<button class="item' + (genDone === 3 ? ' done' : '') + '" data-act="go" data-view="general"><span class="ic">🧠</span><span class="tx"><b>Generale · 15 min</b><span>5′ mentale · 5′ judo (' + E(PL.JUDO_LABEL[slot]) + ') · 5′ ' + E(PL.THEORY_LABEL[PL.theorySlot(A.state, U.weekday())]) + '</span></span><span class="tag ' + (genDone === 3 ? 'good' : '') + '">' + genDone + '/3</span></button>' +
      '</div></div>' +
      '<div class="grid2"><button class="tile" data-act="go" data-view="review" data-p=\'{"lang":""}\'><b>🔁 Ripassi dovuti</b><span>' + due + ' elementi</span></button>' +
      '<button class="tile" data-act="tab" data-tab="progress"><b>📊 Progresso</b><span>Livelli e verifiche</span></button></div>' +
      '<p class="mute small center" style="margin-top:14px">Il tempo viene stimato dall’interazione reale (inattività esclusa).</p>';
  };
  const mission = (lang, icon, label, min, next, d, act) => {
    const m = d[lang] || {}, n = m._n || 0, done = n > 0 && Object.keys(m).filter(k => k !== '_n' && m[k]).length >= n;
    return '<button class="item' + (done ? ' done' : '') + '" data-act="go" data-view="mission" data-p=\'{"lang":"' + lang + '"}\'><span class="ic">' + icon + '</span><span class="tx"><b>' + label + ' · ' + min + ' min</b>' + next + '<span>attivo oggi: ' + act + ' min</span></span><span class="tag ' + (done ? 'good' : '') + '">' + (done ? '✓' : 'Inizia') + '</span></button>';
  };

  /* ---- Percorsi ---- */
  const topicCounts = id => {
    const ts = C.topicsOf(id), s = A.state;
    const c = { total: ts.length, studied: 0, practiced: 0, verified: 0, retained: 0 };
    ts.forEach(t => { const st = P.topicStatus(s, t.id); ['studied', 'practiced', 'verified', 'retained'].forEach(k => { if (P.atLeast(st, k)) c[k]++; }); });
    return c;
  };
  ST.topicCounts = topicCounts;
  V.paths = () => {
    const prim = C.subjects.filter(s => s.primary);
    return '<h1>Percorsi</h1><p class="mute">Materia → Stage → Argomento → Attività.</p><div class="list">' + prim.map(s => {
      const c = topicCounts(s.id);
      const sub = s.generated ? 'Esercizi generati · livello adattivo' : s.motor ? ST.motor.active(A.state).length + ' / ' + ST.motor.defsFor(A.state).length + ' tecniche avviate' : c.total + ' argomenti · ' + c.studied + ' studiati · ' + c.verified + ' verificati';
      return '<button class="item" data-act="go" data-view="subject" data-p=\'{"id":"' + s.id + '"}\'><span class="thumb ' + bg(s.id) + '"></span><span class="tx"><b>' + E(s.title) + '</b><span>' + E(sub) + '</span></span></button>';
    }).join('') + '<button class="item" data-act="go" data-view="subject" data-p=\'{"id":"sec"}\'><span class="thumb ' + bg('sec') + '"></span><span class="tx"><b>Cultura generale (secondarie)</b><span>' + C.secondary.length + ' aree previste · pillole disponibili: ' + C.topicsOf('sec').length + '</span></span></button></div>';
  };

  const statusTag = st => ({ new: '', studied: '<span class="tag">Letta</span>', practiced: '<span class="tag acc">Esercitato</span>', verified: '<span class="tag good">Verificato</span>', retained: '<span class="tag good">Mantenuto</span>' })[st];
  ST.statusTag = statusTag;
  V.subject = p => {
    const s = C.subject(p.id), st = A.state;
    if (s.motor) return ST.judoHub();
    if (s.generated) return ST.mentalHub();
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><div class="banner ' + bg(s.id) + '"></div><h1>' + s.icon + ' ' + E(s.title) + '</h1><p class="mute">' + E(s.goal) + '</p>' + (s.stageNote ? '<p class="warn small">' + E(s.stageNote) + '</p>' : '');
    if (p.id === 'sec') h += ST.culHub();
    if (s.id === 'cyb') h += ST.cyberHub();
    if (s.id === 'str') h += ST.strategyHub();
    if (s.id === 'sport') h += ST.sportHub();
    if (s.id === 'f1') h += ST.f1Hub();
    C.stagesOf(s.id).forEach(stg => {
      h += '<h2>' + E(stg.id) + ' — ' + E(stg.title) + '</h2>' + (stg.desc ? '<p class="mute small">' + E(stg.desc) + '</p>' : '') + '<div class="list">';
      if (!stg.topics.length) h += '<p class="mute small">Contenuti non ancora disponibili in questo stage.</p>';
      stg.topics.forEach(id => {
        const t = C.topic(id), sta = P.topicStatus(st, id), un = PL.unlocked(st, t);
        const pre = (t.prereq || []).filter(x => !P.atLeast(P.topicStatus(st, x), 'practiced')).map(x => C.topic(x).title);
        h += '<button class="item' + (un ? '' : ' locked') + (P.atLeast(sta, 'verified') ? ' done' : '') + '" data-act="go" data-view="topic" data-p=\'{"id":"' + id + '"}\'><span class="ic">' + (un ? '📖' : '🔒') + '</span><span class="tx"><b>' + E(t.title) + '</b><span>' + E(t.summary) + (pre.length ? ' · Prima: ' + E(pre[0]) : '') + '</span></span>' + statusTag(sta) + '</button>';
      });
      h += '</div>';
    });
    return h;
  };
})(window.ST = window.ST || {});
