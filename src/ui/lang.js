/* SkillTree — riepilogo di fine lezione in inglese e giapponese, con traduzione al tocco e alla selezione.
   Il riepilogo è un testo breve (6–7 frasi) con glossario: non sostituisce la lezione italiana. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, L = ST.layer;
  const flag = (k, id) => {
    const cp = '<clipPath id="c' + id + '"><circle cx="12" cy="12" r="12"/></clipPath><g clip-path="url(#c' + id + ')">';
    if (k === 'en') return '<svg viewBox="0 0 24 24" role="img" aria-label="English">' + cp + '<rect width="24" height="24" fill="#012169"/><path d="M0 0L24 24M24 0L0 24" stroke="#fff" stroke-width="4.5"/><path d="M0 0L24 24M24 0L0 24" stroke="#c8102e" stroke-width="2"/><path d="M12 0V24M0 12H24" stroke="#fff" stroke-width="8"/><path d="M12 0V24M0 12H24" stroke="#c8102e" stroke-width="4.5"/></g></svg>';
    return '<svg viewBox="0 0 24 24" role="img" aria-label="日本語">' + cp + '<rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="6" fill="#bc002d"/></g></svg>';
  };
  const say = (txt, lang) => '<button class="say" data-act="say" data-lang="' + (lang === 'ja' ? 'ja' : 'en-GB') + '" data-text="' + E(U.speechText(txt)) + '" aria-label="Ascolta">🔊</button>';
  const render = (text, lang, topicId) => L.segments(text).map(sg => {
    const inner = lang === 'ja' ? U.ruby(sg.raw) : E(sg.raw);
    return sg.g ? '<span class="gl" data-act="glTap" data-l="' + lang + '" data-t="' + topicId + '" data-g="' + E(sg.plain) + '">' + inner + '</span>' : inner;
  }).join('');
  ST.summaryHtml = t => {
    const langs = ['en', 'ja'].filter(l => L.get(l, t.id)); if (!langs.length) return '';
    const cur = langs.indexOf(A.sumLang) >= 0 ? A.sumLang : langs[0], lay = L.get(cur, t.id), ja = cur === 'ja';
    return '<div class="card layer-card" id="summary-card"><h3 style="margin:0 0 6px">Riepilogo · Summary' + (ja ? ' · 要約' : '') + '</h3>' +
      '<div class="tabs2" style="display:flex;gap:8px;margin-bottom:8px">' + langs.map(l => '<button class="btn alt sm' + (l === cur ? ' on' : '') + '" data-act="sumLang" data-l="' + l + '" style="display:flex;gap:6px;align-items:center;' + (l === cur ? 'border-color:var(--acc)' : '') + '"><span style="width:20px;height:20px;display:inline-block">' + flag(l, 's' + l) + '</span>' + (l === 'en' ? 'English' : '日本語') + '</button>').join('') + '</div>' +
      '<p><b>' + (ja ? U.ruby(lay.title.t) : E(lay.title.t)) + '</b></p>' +
      lay.sum.map(s => '<div class="ln">' + say(s.t, cur) + ' ' + render(s.t, cur, t.id) + '<details><summary class="small mute">' + (ja ? 'romaji e italiano' : 'italiano') + '</summary>' + (ja ? '<div class="ro">' + E(L.romajiOf(s.t)) + '</div>' : '') + '<div class="it">' + E(s.it) + '</div></details></div>').join('') +
      '<p class="small mute">Tocca una parola sottolineata, oppure seleziona un pezzo di testo, per la traduzione.' + (ja ? ' Il romaji è automatico: la separazione delle parole è approssimativa.' : '') + ' Se la parola non è nel glossario o nel vocabolario dell’app non c’è traduzione: non uso un traduttore.</p>' +
      '<details><summary class="small">' + (ja ? 'Parole chiave' : 'Key terms') + '</summary><ul>' + lay.gloss.map(g => '<li>' + (ja ? U.ruby('[' + g.w + '|' + g.r + ']') : E(g.w)) + ' ' + say(ja ? g.r : g.w, cur) + (ja ? ' <span class="ro">' + E(L.romaji(g.r)) + '</span>' : '') + ' — <span class="it">' + E(g.it) + '</span></li>').join('') + '</ul></details></div>';
  };
  X.sumLang = el => { A.sumLang = el.dataset.l; A.render(); };
  /* ---- traduzione al tocco e alla selezione ---- */
  const closeGl = () => { const p = document.getElementById('gl-pop'); if (p) p.remove(); };
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
      const v = A.view(); if (v.name !== 'lesson' || !v.p) return;
      const g = card.querySelector('.gl'); const lang = A.sumLang && L.get(A.sumLang, v.p.id) ? A.sumLang : (L.get('en', v.p.id) ? 'en' : 'ja');
      popFor(lang, v.p.id, txt);
    }, 450);
  });
})(window.ST = window.ST || {});
