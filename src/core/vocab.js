/* SkillTree — lessico attivo: riconoscimento → richiamo → uso in contesto → produzione → ripasso dilazionato → verifica a distanza.
   Si appoggia alle carte lessicali esistenti. La produzione di frasi è autovalutata (nessun controllo grammaticale automatico). */
(function (ST) {
  'use strict';
  const U = ST.util, C = ST.cards, V = ST.vocab = {};
  V.GAP = 21; // giorni tra il primo richiamo riuscito e la verifica a distanza
  const rec = (s, id) => ((s.vocab = s.vocab || {})[id] = s.vocab[id] || { recog: [0, 0], recall: [0, 0], ctx: [0, 0], prod: [0, 0], firstRecall: null, verified: null });
  const clozeOf = (cd) => { const w = String(cd.b), i = (cd.ex || '').toLowerCase().indexOf(w.toLowerCase()); return i < 0 ? null : cd.ex.slice(0, i) + '_____' + cd.ex.slice(i + w.length); };
  V.canCloze = cd => !!clozeOf(cd);
  /* livello raggiunto e prossima attività da fare */
  V.level = (s, id, cd) => {
    const v = (s.vocab || {})[id]; if (!v) return { lv: 0, next: 'recog' };
    const needCtx = !cd || V.canCloze(cd);
    if (v.recog[0] < 1) return { lv: 0, next: 'recog' };
    if (v.recall[0] < 2) return { lv: 1, next: 'recall' };
    if (needCtx && v.ctx[0] < 1) return { lv: 2, next: 'ctx' };
    if (v.prod[0] < 1) return { lv: 3, next: 'prod' };
    if (!v.verified) { const ready = v.firstRecall && U.diffDays(v.firstRecall, U.today()) >= V.GAP; return { lv: 4, next: ready ? 'verify' : null }; }
    return { lv: 5, next: null };
  };
  V.LABELS = ['nuova', 'riconosciuta', 'richiamata', 'usata in contesto', 'prodotta', 'verificata a distanza'];
  V.cardOf = (s, id) => { const c = s.cards[id]; const t = c && ST.content.topic(c.topic); return t && (t.cards || []).find(x => x.id === c.cid); };
  V.counts = (s, lang) => { const out = [0, 0, 0, 0, 0, 0]; Object.keys(s.cards).forEach(id => { const c = s.cards[id]; if (c.kind === 'vocab' && c.lang === lang) out[V.level(s, id, V.cardOf(s, id)).lv]++; }); return out; };
  V.record = (s, id, kind, ok) => {
    const v = rec(s, id);
    if (kind === 'verify') { if (ok) v.verified = U.today(); else v.firstRecall = null; return v; }
    v[kind][1]++; if (ok) v[kind][0]++;
    if (kind === 'recall' && ok && !v.firstRecall) v.firstRecall = U.today();
    return v;
  };
  V.item = (s, id, kind, rng) => {
    rng = rng || U.rand; const c = s.cards[id], cd = V.cardOf(s, id); if (!cd) return null;
    const topic = ST.content.topic(c.topic), keep = c.mode;
    const lbl = { recog: 'Riconoscimento', recall: 'Richiamo senza aiuti', ctx: 'Uso in contesto', prod: 'Produzione (autovalutata)', verify: 'Verifica a distanza' };
    let it;
    if (kind === 'recog' || kind === 'recall' || kind === 'verify') { c.mode = kind === 'recog' ? 'recognition' : 'recall'; it = C.question(s, id, rng); c.mode = keep; if (it) it.srcLabel = lbl[kind] + ' · ' + topic.title; }
    else if (kind === 'ctx') {
      const stem = clozeOf(cd); if (!stem) return null;
      const others = U.sample((topic.cards || []).filter(x => x.id !== cd.id && String(x.b) !== String(cd.b)), 3, rng).map(x => x.b), o = U.shuffle([cd.b].concat(others), rng);
      it = { t: 'mc', q: 'Completa la frase: «' + stem + '»', o, a: o.indexOf(cd.b), why: cd.ex + ' — «' + cd.b + '» = ' + cd.f, srcLabel: lbl.ctx + ' · ' + topic.title };
    } else {
      const o = ['Sì: la parola è usata in modo naturale', 'Quasi: ci sono piccoli errori', 'No, o non sono riuscito a scrivere la frase'];
      it = { t: 'mc', q: 'Scrivi (su carta o a mente) una frase tua con «' + cd.b + '» (' + cd.f + '). ' + (cd.ex ? 'Poi confrontala con l’esempio: «' + cd.ex + '». ' : '') + 'La tua frase la usava correttamente?', o, a: 0, why: 'Valutazione tua: l’app non controlla la grammatica. Se hai dubbi, ripeti con un esempio di un docente o di un dizionario.', srcLabel: lbl.prod + ' · ' + topic.title, selfGrade: true };
    }
    if (it) { it.vocabId = id; it.vocabKind = kind; if (kind !== 'prod') it.skill = 'voc:' + c.lang; }
    return it;
  };
  /* sessione: parole dovute prima, poi le nuove/incomplete; ogni parola riceve l'attività del suo livello */
  V.session = (s, lang, n, rng) => {
    rng = rng || U.rand; n = n || 10;
    const due = C.dueIds(s, lang), rest = Object.keys(s.cards).filter(id => s.cards[id].kind === 'vocab' && s.cards[id].lang === lang && !due.includes(id));
    const out = [];
    for (const id of due.concat(U.shuffle(rest, rng))) {
      if (out.length >= n) break;
      const lv = V.level(s, id, V.cardOf(s, id)); if (!lv.next) continue;
      const kind = lang === 'ja' && (lv.next === 'ctx') ? 'prod' : lv.next;
      const it = V.item(s, id, kind, rng); if (it) out.push(it);
    }
    return out;
  };
  /* grading: SRS per riconoscimento/richiamo/verifica; produzione autovalutata conta come riuscita solo se «Sì» */
  V.grade = (s, it, ok) => {
    if (!it.vocabId) return;
    const k = it.vocabKind;
    V.record(s, it.vocabId, k, ok);
    if (k !== 'ctx' && k !== 'prod') C.grade(s, it.vocabId, ok, false);
  };
})(window.ST = window.ST || {});
