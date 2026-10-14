/* SkillTree — pianificazione giornaliera da 60 minuti: inglese + giapponese + generale (15').
   La distribuzione dipende dal PROGRESSO verificato, non solo dal calendario. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress;
  const PL = ST.plan = {};

  PL.TOTAL = 60;
  PL.GENERAL = 15;
  PL.LANG_TOTAL = 45;
  const SKILLS = ['listening', 'reading', 'speaking', 'writing'];
  PL.SKILLS = SKILLS;

  /* Cancelli B2 per abilità.
     - Ascolto/lettura: indicatore in-app (≥6 prove B2 distinte, ≥3 giorni diversi, media ≥75%).
     - Parlato/scrittura: richiedono evidenza ESTERNA (docente/esame): l'autovalutazione non basta.
     - Qualsiasi abilità può essere confermata da evidenza esterna registrata dall'utente. */
  PL.gateStatus = (state, skill) => {
    const g = state.gates && state.gates.en && state.gates.en[skill];
    if (g && g.evidence && g.evidence.length) return 'external';
    if (skill === 'listening' || skill === 'reading') {
      const ex = (state.exams || []).filter(e => e.lang === 'en' && e.level === 'B2' && e.skill === skill && e.kind === 'gate');
      const ids = new Set(ex.map(e => e.item));
      const days = new Set(ex.map(e => e.date));
      const avg = ex.length ? ex.reduce((a, e) => a + e.score, 0) / ex.length : 0;
      if (ids.size >= 6 && days.size >= 3 && avg >= 0.75) return 'in-app';
      return ex.length ? 'partial' : 'none';
    }
    return 'none';
  };
  PL.b2Verified = state => SKILLS.every(s => ['external', 'in-app'].includes(PL.gateStatus(state, s)));
  PL.b2Report = state => SKILLS.map(s => ({ skill: s, status: PL.gateStatus(state, s) }));

  PL.englishStageVerified = (state, stage) => {
    const subj = ST.content.subject('eng');
    if (!subj) return false;
    const st = subj.stages.find(x => x.id === stage);
    if (!st) return false;
    return st.topics.every(id => P.atLeast(P.topicStatus(state, id), 'verified'));
  };

  PL.minutes = (state, date) => {
    date = date || U.today();
    const mo = U.monthIndex(state.startDate || date, date);
    let en, ja, phase, note = '';
    const b2 = PL.b2Verified(state);
    if (mo <= 8) { en = 25; ja = 20; phase = 'Mesi 1–8'; }
    else if (mo <= 16) {
      phase = 'Mesi 9–16';
      if (PL.englishStageVerified(state, 'L2')) { en = 20; ja = 25; }
      else { en = 25; ja = 20; note = 'Inglese mantenuto a 25′: lo stage L2 (B1+) non è ancora verificato.'; }
    } else {
      phase = 'Mesi 17–24';
      if (b2) { en = 15; ja = 30; }
      else {
        en = PL.englishStageVerified(state, 'L4') ? 20 : 25; ja = PL.LANG_TOTAL - en;
        note = 'B2 non verificato su tutte e quattro le abilità: la fase 3 (inglese 15′ / giapponese 30′) non si applica.';
      }
    }
    return { month: mo, phase, en, ja, general: PL.GENERAL, total: en + ja + PL.GENERAL, b2, note };
  };

  // Rotazione teorica (5′) — lunedì = 0.
  PL.THEORY = ['cyber', 'sport', 'prog', 'f1', 'cyberlab', 'strategy', 'secondary'];
  // Priorità alla cybersecurity: 4 giorni su 7 (3 di teoria + 1 di laboratorio generato); il resto a rotazione.
  PL.THEORY_CYB = ['cyber', 'sport', 'cyber', 'cyberlab', 'cyber', 'prog', 'f1'];
  PL.THEORY_STR = ['strategy', 'sport', 'strategy', 'strategylab', 'strategy', 'prog', 'f1'];
  PL.theorySlot = (state, wd) => { const f = state && state.profile && state.profile.theoryFocus; return (f === 'cyb' ? PL.THEORY_CYB : f === 'str' ? PL.THEORY_STR : PL.THEORY)[wd]; };
  PL.THEORY_LABEL = { cyber: 'Cybersecurity', sport: 'Scienze dello sport', prog: 'Programmazione e AI', f1: 'Formula 1', cyberlab: 'Cybersecurity pratica · laboratorio', strategylab: 'Strategia pratica · laboratorio', strategy: 'Strategia e logica', secondary: 'Materie secondarie' };
  PL.JUDO_SLOT = ['intro', 'consolidate', 'movement', 'variant', 'random', 'combo', 'theory'];
  PL.JUDO_LABEL = {
    intro: 'Introduzione o perfezionamento di una tecnica', consolidate: 'Consolidamento del movimento',
    movement: 'Tai sabaki, footwork, equilibrio e coordinazione', variant: 'Ripasso con variante',
    random: 'Richiamo casuale di tecniche precedenti', combo: 'Combinazioni e mini-verifica motoria',
    theory: 'Solo teoria e osservazione · riposo fisico'
  };

  // Focus linguistico per giorno della settimana.
  PL.LANG_FOCUS = {
    en: ['lesson', 'listening', 'grammar', 'speaking', 'dictation', 'writing', 'conversation'],
    ja: ['lesson', 'listening', 'grammar', 'speaking', 'dictation', 'reading', 'conversation']
  };
  PL.FOCUS_LABEL = {
    lesson: 'Lezione e applicazione', listening: 'Ascolto senza trascrizione', grammar: 'Grammatica applicata e lessico',
    speaking: 'Shadowing e conversazione simulata', dictation: 'Dettato e lettura', writing: 'Scrittura autonoma e mini-verifica',
    reading: 'Lettura e scrittura funzionale', conversation: 'Conversazione ramificata e ripasso'
  };

  /* Costruisce i blocchi di una missione linguistica. I ripassi dovuti hanno la precedenza
     (fino al 30% del tempo): il nuovo materiale non copre mai i vecchi errori. */
  PL.languageBlocks = (state, lang, minutes, date) => {
    date = date || U.today();
    const wd = U.weekday(date), focus = PL.LANG_FOCUS[lang][wd];
    const due = ST.cards.dueCount(state, lang, date);
    const blocks = [];
    let left = minutes;
    if (due > 0) {
      const m = Math.min(Math.round(minutes * 0.3), Math.max(3, Math.ceil(due / 4)));
      blocks.push({ kind: 'review', minutes: m, label: 'Ripasso dilazionato', detail: due + ' elementi dovuti' });
      left -= m;
    }
    if (lang === 'ja' && ST.kana.needsTraining(state)) {
      blocks.push({ kind: 'kana', minutes: 3, label: 'Kana Trainer', detail: 'riconoscimento rapido · max 3′' });
      left -= 3;
    }
    const subj = lang === 'en' ? 'eng' : 'jpn';
    const lessonT = PL.nextLesson(state, subj), pracT = PL.practiceTopic(state, subj), testT = PL.pendingTest(state, subj, date);
    const split = (x, f) => [Math.round(x * f), x - Math.round(x * f)];
    const [l1, l2] = split(left, 0.5), [g1, g2] = split(left, 0.7), [s1, s2] = split(left, 0.55), [d1, d2] = split(left, 0.6), [c1, c2] = split(left, 0.65);
    const mainFocus = {
      lesson: lessonT ? [{ kind: 'lesson', topic: lessonT.id, minutes: l1, label: lessonT.title }, { kind: 'practice', topic: lessonT.id, minutes: l2, label: 'Esercizi: ' + lessonT.title }]
        : pracT ? [{ kind: 'practice', topic: pracT.id, minutes: g1, label: 'Esercizi: ' + pracT.title }, { kind: 'cards', minutes: g2, label: 'Lessico a recupero attivo' }] : [{ kind: 'cards', minutes: left, label: 'Lessico a recupero attivo' }],
      listening: [{ kind: 'listening', minutes: Math.round(left * 0.75), label: 'Ascolto attivo' }, { kind: 'speaking', minutes: left - Math.round(left * 0.75), label: 'Risposta orale' }],
      grammar: pracT ? [{ kind: 'practice', topic: pracT.id, minutes: g1, label: 'Grammatica: ' + pracT.title }, { kind: 'cards', minutes: g2, label: 'Lessico a recupero attivo' }]
        : lessonT ? [{ kind: 'lesson', topic: lessonT.id, minutes: l1, label: lessonT.title }, { kind: 'practice', topic: lessonT.id, minutes: l2, label: 'Esercizi: ' + lessonT.title }] : [{ kind: 'cards', minutes: left, label: 'Lessico a recupero attivo' }],
      speaking: [{ kind: 'shadowing', minutes: s1, label: 'Shadowing e pronuncia' }, { kind: 'conversation', minutes: s2, label: 'Conversazione simulata (a voce)' }],
      dictation: [{ kind: 'dictation', minutes: d1, label: 'Dettato' }, { kind: 'listening', minutes: d2, label: 'Ascolto' }],
      writing: [{ kind: 'writing', minutes: s1, label: 'Scrittura autonoma' }, { kind: 'test', topic: testT ? testT.id : undefined, minutes: s2, label: testT ? (P.topicStatus(state, testT.id) === 'verified' ? 'Ritest a distanza: ' : 'Verifica: ') + testT.title : 'Mini-verifica cumulativa' }],
      reading: [{ kind: 'reading', minutes: d1, label: 'Lettura funzionale' }, { kind: 'writing', minutes: d2, label: 'Scrittura funzionale' }],
      conversation: [{ kind: 'conversation', minutes: c1, label: 'Conversazione ramificata' }, { kind: 'cards', minutes: c2, label: 'Ripasso libero' }]
    }[focus];
    mainFocus.forEach(b => { if (b.minutes > 0) blocks.push(b); });
    return { focus, blocks };
  };

  /* Selezione degli argomenti: la lezione successiva non attende la verifica (che richiede ≥1 giorno),
     ma richiede i prerequisiti «esercitati». La verifica e i ritest hanno una coda a parte. */
  PL.unlocked = (state, topic) => (topic.prereq || []).every(id => P.atLeast(P.topicStatus(state, id), 'practiced'));
  PL.nextLesson = (state, subjectId) => ST.content.topicsOf(subjectId).find(t => P.topicStatus(state, t.id) === 'new' && PL.unlocked(state, t)) || null;
  PL.practiceTopic = (state, subjectId) => {
    const ts = ST.content.topicsOf(subjectId);
    return ts.find(t => P.topicStatus(state, t.id) === 'studied') || ts.slice().reverse().find(t => P.topicStatus(state, t.id) === 'practiced') || null;
  };
  PL.pendingTest = (state, subjectId, date) => {
    date = date || U.today();
    const due = P.retestDue(state, subjectId, date);
    const ts = ST.content.topicsOf(subjectId).filter(t => { const r = state.topics[t.id]; return r && r.studied && U.diffDays(r.studied, date) >= 1 && P.topicStatus(state, t.id) === 'practiced'; });
    return ts[0] || (due.length ? ST.content.topic(due[0]) : null);
  };
  PL.currentTopic = (state, subjectId) => PL.nextLesson(state, subjectId) || PL.pendingTest(state, subjectId) || PL.practiceTopic(state, subjectId);
})(window.ST = window.ST || {});
