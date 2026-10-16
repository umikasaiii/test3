/* SkillTree — icona della lingua (bandiere), finestra di scelta modalità/ambito, strato lingua nelle lezioni, traduzione al tocco/selezione. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, L = ST.layer, C = ST.content;
  const flag = (k, id) => {
    const cp = '<clipPath id="c' + id + '"><circle cx="12" cy="12" r="12"/></clipPath><g clip-path="url(#c' + id + ')">';
    if (k === 'it') return '<svg viewBox="0 0 24 24" role="img" aria-label="Italiano">' + cp + '<rect width="8" height="24" fill="#009246"/><rect x="8" width="8" height="24" fill="#fff"/><rect x="16" width="8" height="24" fill="#ce2b37"/></g></svg>';
    if (k === 'en') return '<svg viewBox="0 0 24 24" role="img" aria-label="English">' + cp + '<rect width="24" height="24" fill="#012169"/><path d="M0 0L24 24M24 0L0 24" stroke="#fff" stroke-width="4.5"/><path d="M0 0L24 24M24 0L0 24" stroke="#c8102e" stroke-width="2"/><path d="M12 0V24M0 12H24" stroke="#fff" stroke-width="8"/><path d="M12 0V24M0 12H24" stroke="#c8102e" stroke-width="4.5"/></g></svg>';
    return '<svg viewBox="0 0 24 24" role="img" aria-label="日本語">' + cp + '<rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="6" fill="#bc002d"/></g></svg>';
  };
  const curTopic = () => { const v = A.view(); return (v.name === 'topic' || v.name === 'lesson') && v.p && v.p.id ? C.topic(v.p.id) : null; };
  const res = t => L.resolve(A.state.settings, t);
  /* ---- icona fissa ---- */
  ST.langFab = () => {
    let b = document.getElementById('lang-fab'); const t = curTopic();
    if (!t) { if (b) b.remove(); closePop(); return; }
    if (!b) { b = document.createElement('button'); b.id = 'lang-fab'; b.className = 'lang-fab'; b.setAttribute('data-act', 'langFab'); document.body.appendChild(b); }
    const r = res(t), last = ((A.state.settings.lang || {}).last) || { lang: 'en' };
    b.innerHTML = r.lang === 'it' ? flag(last.lang === 'ja' ? 'ja' : 'en', 'f') : flag('it', 'f');
    b.classList.toggle('nolayer', !L.has(t.id)); b.title = L.has(t.id) ? '' : 'Testo in lingua non ancora disponibile per questo argomento';
    b.setAttribute('aria-label', r.lang === 'it' ? 'Scegli la lingua del testo' : 'Torna all’italiano');
  };
  /* l'icona si attenua mentre scorri, per non coprire il testo */
  let fadeT = null;
  window.addEventListener('scroll', () => { const b = document.getElementById('lang-fab'); if (!b) return; b.classList.add('fade'); clearTimeout(fadeT); fadeT = setTimeout(() => b.classList.remove('fade'), 900); }, { passive: true });
  const closePop = () => { const p = document.getElementById('lang-pop'); if (p) p.remove(); };
  const closeGl = () => { const p = document.getElementById('gl-pop'); if (p) p.remove(); };
  X.langFab = () => {
    const t = curTopic(); if (!t) return; const r = res(t);
    if (r.lang !== 'it') { L.set(A.state.settings, r.level === 'default' ? 'lesson' : r.level, r.level === 'lesson' ? t.id : r.level === 'subject' ? t.subject : 'x', 'it', 'A'); A.save(); closePop(); closeGl(); A.render(); return; }
    if (document.getElementById('lang-pop')) return closePop();
    const last = ((A.state.settings.lang || {}).last) || { lang: 'en', mode: 'A' }, has = L.has(t.id);
    const p = document.createElement('div'); p.id = 'lang-pop'; p.className = 'lang-pop'; p.dataset.lang = last.lang === 'ja' ? 'ja' : 'en';
    p.innerHTML = '<h4>Lingua del testo</h4><div class="tabs2"><button data-act="langPickLang" data-l="en" class="' + (p.dataset.lang === 'en' ? 'on' : '') + '">' + flag('en', 'p1') + 'English</button><button data-act="langPickLang" data-l="ja" class="' + (p.dataset.lang === 'ja' ? 'on' : '') + '">' + flag('ja', 'p2') + '日本語</button></div>' +
      Object.keys(L.MODES).map(k => '<label><input type="radio" name="lg-m" value="' + k + '"' + (k === (last.mode || 'A') ? ' checked' : '') + '> <b>' + k + '</b> · ' + E(L.MODES[k]) + '</label>').join('') +
      '<h4 style="margin-top:10px">Applica a…</h4><label><input type="radio" name="lg-s" value="lesson" checked> solo questa lezione</label><label><input type="radio" name="lg-s" value="subject"> tutta la materia</label><label><input type="radio" name="lg-s" value="all"> tutte le materie</label>' +
      (has ? '' : '<p class="small mute">Per questo argomento il testo in lingua non è ancora disponibile (pilota: Moto in città). Potrai attivare la modalità, ma vedrai solo un avviso.</p>') +
      '<div class="row" style="gap:8px;margin-top:8px"><button class="btn" data-act="langApply">Applica</button><button class="btn alt" data-act="langCancel">Annulla</button></div>';
    document.body.appendChild(p);
  };
  X.langPickLang = el => { const p = document.getElementById('lang-pop'); if (!p) return; p.dataset.lang = el.dataset.l; p.querySelectorAll('.tabs2 button').forEach(b => b.classList.toggle('on', b === el)); };
  X.langCancel = () => closePop();
  X.langApply = () => {
    const p = document.getElementById('lang-pop'), t = curTopic(); if (!p || !t) return;
    const mode = (p.querySelector('input[name=lg-m]:checked') || {}).value || 'A', scope = (p.querySelector('input[name=lg-s]:checked') || {}).value || 'lesson', lang = p.dataset.lang;
    L.set(A.state.settings, scope, scope === 'lesson' ? t.id : scope === 'subject' ? t.subject : 'x', lang, mode, id => (C.topic(id) || {}).subject); A.save(); closePop(); A.render();
  };
  /* ---- strato nelle pagine ---- */
  const say = (txt, lang) => '<button class="say" data-act="say" data-lang="' + (lang === 'ja' ? 'ja' : 'en-GB') + '" data-text="' + E(U.speechText(txt)) + '" aria-label="Ascolta">🔊</button>';
  const render = (text, lang, topicId, tappable) => L.segments(text).map(sg => {
    const inner = lang === 'ja' ? U.ruby(sg.raw) : E(sg.raw);
    return sg.g && tappable ? '<span class="gl" data-act="glTap" data-l="' + lang + '" data-t="' + topicId + '" data-g="' + E(sg.plain) + '">' + inner + '</span>' : inner;
  }).join('');
  ST.layerHtml = (t, compact) => {
    const r = res(t); if (r.lang === 'it') return '';
    const lay = L.get(r.lang, t.id), name = r.lang === 'ja' ? '日本語' : 'English';
    if (!lay) return '<p class="small mute" style="margin:6px 0">' + name + ' · testo in lingua non ancora disponibile per questo argomento (pilota: Moto in città). Resta l’italiano. <button class="btn alt sm" data-act="langFab">Torna all’italiano</button></p>';
    if (compact) return '<details class="card layer-card"><summary class="small">' + name + ' · ' + E(L.MODES[r.mode]) + '</summary>' + body(lay, r, t) + '</details>';
    return '<div class="card layer-card"><h3>' + (r.lang === 'ja' ? U.ruby(lay.title.t) : E(lay.title.t)) + ' <span class="mute small">· ' + name + ' · ' + E(L.MODES[r.mode]) + '</span></h3>' + body(lay, r, t) + '</div>';
  };
  const body = (lay, r, t) => {
    const ja = r.lang === 'ja', m = r.mode;
    const gloss = '<div class="ln"><b>' + (ja ? 'Parole chiave' : 'Key terms') + '</b><ul>' + lay.gloss.map(g => '<li>' + (ja ? U.ruby('[' + g.w + '|' + g.r + ']') : E(g.w)) + ' ' + say(ja ? g.r : g.w, r.lang) + (ja ? ' <span class="ro">' + E(L.romaji(g.r)) + '</span>' : '') + ' — <span class="it">' + E(g.it) + '</span></li>').join('') + '</ul></div>';
    if (m === 'A') return gloss + '<p class="small mute">Il testo della lezione resta in italiano: qui trovi i termini chiave.</p>';
    const note = ja ? '<p class="small mute">Romaji automatico: separazione delle parole approssimativa.</p>' : '';
    if (m === 'B') return lay.sum.map(s => '<div class="ln">' + say(s.t, r.lang) + ' ' + render(s.t, r.lang, t.id, false) + (ja ? '<div class="ro">' + E(L.romajiOf(s.t)) + '</div>' : '') + '<div class="it">' + E(s.it) + '</div></div>').join('') + note + gloss;
    return '<p class="small mute">Tocca una parola sottolineata, oppure seleziona un pezzo di testo, per vedere traduzione' + (ja ? ' e romaji' : '') + '. Le parole non presenti nel glossario non hanno traduzione.</p>' +
      lay.sum.map(s => '<div class="ln">' + say(s.t, r.lang) + ' ' + render(s.t, r.lang, t.id, true) + '<details><summary class="small mute">' + (ja ? 'romaji e italiano' : 'italiano') + '</summary>' + (ja ? '<div class="ro">' + E(L.romajiOf(s.t)) + '</div>' : '') + '<div class="it">' + E(s.it) + '</div></details></div>').join('') + note;
  };
  /* ---- traduzione al tocco e alla selezione ---- */
  const popFor = (lang, topicId, q) => {
    const list = L.lookup(lang, topicId, q); closeGl();
    const p = document.createElement('div'); p.id = 'gl-pop'; p.className = 'gl-pop';
    p.innerHTML = '<div class="row"><b>«' + E(q.length > 40 ? q.slice(0, 40) + '…' : q) + '»</b><span class="sp"></span><button class="btn alt sm" data-act="glClose">✕</button></div>' + (list.length ? list.map(e => '<div class="ln"><b>' + (lang === 'ja' && e.r ? U.ruby('[' + e.w + '|' + e.r + ']') : E(e.w)) + '</b> ' + say(e.r || e.w, lang) + (e.ro ? ' <span class="ro">' + E(e.ro) + '</span>' : '') + '<div class="it">' + E(e.it) + ' <span class="mute small">(' + e.src + ')</span></div></div>').join('') : '<p class="small">Nessuna traduzione disponibile per questa selezione: non ho un traduttore, solo il glossario della lezione e il vocabolario già presente nell’app.</p>');
    document.body.appendChild(p);
  };
  X.glTap = el => popFor(el.dataset.l, el.dataset.t, el.dataset.g);
  X.glClose = () => closeGl();
  let selTimer = null;
  document.addEventListener('selectionchange', () => {
    clearTimeout(selTimer); selTimer = setTimeout(() => {
      const sel = window.getSelection && window.getSelection(); if (!sel || sel.isCollapsed) return;
      const txt = sel.toString().trim(); if (!txt || txt.length > 400) return;
      const n = sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement), card = n && n.closest && n.closest('.layer-card'); if (!card) return;
      const t = curTopic(); if (!t) return; const r = res(t); if (r.lang === 'it') return;
      popFor(r.lang, t.id, txt);
    }, 450);
  });
})(window.ST = window.ST || {});
