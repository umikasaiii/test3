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
    b.innerHTML = flag(r.lang === 'ja' ? 'ja' : r.lang === 'en' ? 'en' : 'it', 'f');
    b.classList.toggle('nolayer', !L.has(t.id)); b.title = L.has(t.id) ? '' : 'Testo in lingua non ancora disponibile per questo argomento';
    b.setAttribute('aria-label', 'Lingua del testo: ' + (r.lang === 'ja' ? '日本語' : r.lang === 'en' ? 'English' : 'Italiano') + ' (tocca per cambiare)');
  };
  /* l'icona si attenua mentre scorri, per non coprire il testo */
  let fadeT = null;
  window.addEventListener('scroll', () => { const b = document.getElementById('lang-fab'); if (!b) return; b.classList.add('fade'); clearTimeout(fadeT); fadeT = setTimeout(() => b.classList.remove('fade'), 900); }, { passive: true });
  const closePop = () => { const p = document.getElementById('lang-pop'); if (p) p.remove(); };
  const closeGl = () => { const p = document.getElementById('gl-pop'); if (p) p.remove(); };
  X.langHome = () => { const t = curTopic(); if (!t) return; const r = res(t); L.set(A.state.settings, r.level === 'default' ? 'lesson' : r.level, r.level === 'lesson' ? t.id : r.level === 'subject' ? t.subject : 'x', 'it', 'A', id => (C.topic(id) || {}).subject); A.save(); closePop(); closeGl(); A.render(); };
  X.langFab = () => {
    const t = curTopic(); if (!t) return;
    if (document.getElementById('lang-pop')) return closePop();
    const r = res(t), last = ((A.state.settings.lang || {}).last) || { lang: 'en', mode: 'A' }, has = L.has(t.id), cur = r.lang;
    const p = document.createElement('div'); p.id = 'lang-pop'; p.className = 'lang-pop'; p.dataset.lang = cur;
    const modeSel = cur === 'it' ? (last.mode || 'A') : r.mode;
    p.innerHTML = '<h4>Lingua del testo</h4><div class="tabs2">' + [['it', 'Italiano'], ['en', 'English'], ['ja', '日本語']].map(x => '<button data-act="langPickLang" data-l="' + x[0] + '" class="' + (cur === x[0] ? 'on' : '') + '">' + flag(x[0], 'p' + x[0]) + x[1] + '</button>').join('') + '</div>' +
      '<div id="lg-modes">' + Object.keys(L.MODES).map(k => '<label><input type="radio" name="lg-m" value="' + k + '"' + (k === modeSel ? ' checked' : '') + '> <b>' + k + '</b> · ' + E(L.MODES[k]) + '</label>').join('') + '</div>' +
      '<h4 style="margin-top:10px">Applica a…</h4><label><input type="radio" name="lg-s" value="lesson" checked> solo questa lezione</label><label><input type="radio" name="lg-s" value="subject"> tutta la materia</label><label><input type="radio" name="lg-s" value="all"> tutte le materie</label>' +
      (has ? '' : '<p class="small mute">Per questo argomento il testo in lingua non è ancora disponibile (disponibili: Moto in città e Cybersecurity «Triade CIA»). Potrai attivare la modalità, ma vedrai solo un avviso.</p>') +
      '<div class="row" style="gap:8px;margin-top:8px"><button class="btn" data-act="langApply">Applica</button><button class="btn alt" data-act="langCancel">Annulla</button></div>';
    document.body.appendChild(p); X.langPickLang({ dataset: { l: cur } });
  };
  X.langPickLang = el => { const p = document.getElementById('lang-pop'); if (!p) return; p.dataset.lang = el.dataset.l; p.querySelectorAll('.tabs2 button').forEach(b => b.classList.toggle('on', b.dataset.l === el.dataset.l)); const m = document.getElementById('lg-modes'); if (m) m.style.display = el.dataset.l === 'it' ? 'none' : ''; };
  X.langCancel = () => closePop();
  X.langApply = () => {
    const p = document.getElementById('lang-pop'), t = curTopic(); if (!p || !t) return;
    const mode = (p.querySelector('input[name=lg-m]:checked') || {}).value || 'A', scope = (p.querySelector('input[name=lg-s]:checked') || {}).value || 'lesson', lang = p.dataset.lang;
    L.set(A.state.settings, scope, scope === 'lesson' ? t.id : scope === 'subject' ? t.subject : 'x', lang, mode, id => (C.topic(id) || {}).subject); A.save(); closePop(); A.render();
  };
  /* ---- strato nelle pagine ---- */
  const MODE_T = { en: { A: 'Italian with key terms', B: 'Bilingual', C: 'English only, with support on request' }, ja: { A: 'イタリア[語|ご]とキーワード', B: 'バイリンガル', C: '[日本語|にほんご]だけ（[必要|ひつよう]なときサポート）' } };
  const modeLab = (lang, m) => (MODE_T[lang] && MODE_T[lang][m]) || L.MODES[m];
  const say = (txt, lang) => '<button class="say" data-act="say" data-lang="' + (lang === 'ja' ? 'ja' : 'en-GB') + '" data-text="' + E(U.speechText(txt)) + '" aria-label="Ascolta">🔊</button>';
  const render = (text, lang, topicId, tappable) => L.segments(text).map(sg => {
    const inner = lang === 'ja' ? U.ruby(sg.raw) : E(sg.raw);
    return sg.g && tappable ? '<span class="gl" data-act="glTap" data-l="' + lang + '" data-t="' + topicId + '" data-g="' + E(sg.plain) + '">' + inner + '</span>' : inner;
  }).join('');
  ST.layerHtml = (t, compact) => {
    const r = res(t); if (r.lang === 'it') return '';
    const lay = L.get(r.lang, t.id), name = r.lang === 'ja' ? '日本語' : 'English';
    if (!lay) return '<p class="small mute" style="margin:6px 0">' + name + ' · testo in lingua non ancora disponibile per questo argomento . Resta l’italiano. <button class="btn alt sm" data-act="langHome">Torna all’italiano</button></p>';
    if (compact) return '<details class="card layer-card"><summary class="small">' + name + ' · ' + E(L.MODES[r.mode]) + '</summary>' + body(lay, r, t) + '</details>';
    return '<div class="card layer-card"><h3>' + (r.lang === 'ja' ? U.ruby(lay.title.t) : E(lay.title.t)) + ' <span class="mute small">· ' + name + ' · ' + (r.lang === 'ja' ? U.ruby(modeLab('ja', r.mode)) : E(modeLab('en', r.mode))) + '</span></h3>' + body(lay, r, t) + '</div>';
  };
  const body = (lay, r, t) => {
    const ja = r.lang === 'ja', m = r.mode;
    const gloss = '<div class="ln"><b>' + (ja ? 'Parole chiave' : 'Key terms') + '</b><ul>' + lay.gloss.map(g => '<li>' + (ja ? U.ruby('[' + g.w + '|' + g.r + ']') : E(g.w)) + ' ' + say(ja ? g.r : g.w, r.lang) + (ja ? ' <span class="ro">' + E(L.romaji(g.r)) + '</span>' : '') + ' — <span class="it">' + E(g.it) + '</span></li>').join('') + '</ul></div>';
    if (lay.pages && m !== 'A') return '<details><summary class="small">' + (ja ? U.ruby('[言葉|ことば]のリスト') : 'Key terms') + '</summary>' + gloss + '</details><p class="small mute">' + (ja ? U.ruby('[翻訳|ほんやく]されたページは、レッスンにあります。') : 'The translated pages are in the lesson.') + '</p>';
    if (m === 'A') return gloss + '<p class="small mute">Il testo della lezione resta in italiano: qui trovi i termini chiave.</p>';
    const note = ja ? '<p class="small mute">Romaji automatico: separazione delle parole approssimativa.</p>' : '';
    if (m === 'B') return lay.sum.map(s => '<div class="ln">' + say(s.t, r.lang) + ' ' + render(s.t, r.lang, t.id, false) + (ja ? '<div class="ro">' + E(L.romajiOf(s.t)) + '</div>' : '') + '<div class="it">' + E(s.it) + '</div></div>').join('') + note + gloss;
    return '<p class="small mute">Tocca una parola sottolineata, oppure seleziona un pezzo di testo, per vedere traduzione' + (ja ? ' e romaji' : '') + '. Le parole non presenti nel glossario non hanno traduzione.</p>' +
      lay.sum.map(s => '<div class="ln">' + say(s.t, r.lang) + ' ' + render(s.t, r.lang, t.id, true) + '<details><summary class="small mute">' + (ja ? 'romaji e italiano' : 'italiano') + '</summary>' + (ja ? '<div class="ro">' + E(L.romajiOf(s.t)) + '</div>' : '') + '<div class="it">' + E(s.it) + '</div></details></div>').join('') + note;
  };

  /* pagina tradotta: stesso markup dell'italiano; ⟦termine⟧ diventa toccabile in modalità C; romaji a richiesta in giapponese */
  const pageHtml = (pg, lang, topicId, tappable) => {
    const ja = lang === 'ja';
    let html = U.markup(pg.b).replace(/⟦([^⟧]+)⟧/g, (_, inner) => { const plain = inner.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]+>/g, ''); return tappable ? '<span class="gl" data-act="glTap" data-l="' + lang + '" data-t="' + topicId + '" data-g="' + E(plain) + '">' + inner + '</span>' : inner; });
    const romaji = ja ? '<details><summary class="small mute">Romaji</summary><div class="ro">' + pg.b.split('\n').map(l => l.replace(/^\s*(?:[-*>]\s+)/, '').replace(/\*\*/g, '').trim()).filter(Boolean).map(l => E(L.romajiOf(l))).join('<br>') + '</div><p class="small mute">Romaji automatico: separazione delle parole approssimativa.</p></details>' : '';
    return '<h2>' + (ja ? U.ruby(pg.h) : E(pg.h)) + '</h2>' + html + romaji;
  };
  /* pagina di lezione secondo lingua e modalità: A = italiano + parole chiave, B = lingua e italiano, C = solo lingua (italiano a richiesta) */
  ST.layerLesson = (t, i, art) => {
    const r = res(t); if (r.lang === 'it') return art;
    const lay = L.get(r.lang, t.id);
    if (!lay || !lay.pages || !lay.pages[i]) return ST.layerHtml(t, i > 0) + art;
    const name = r.lang === 'ja' ? '日本語' : 'English';
    if (r.mode === 'A') return '<details class="card layer-card"><summary class="small">' + name + ' · parole chiave</summary>' + body(lay, r, t) + '</details>' + art;
    const card = '<div class="card layer-card"><span class="mute small">' + name + ' · ' + E(L.MODES[r.mode]) + '</span> <button class="btn alt sm" data-act="layerSpeak" data-i="' + i + '">🔊 Ascolta la pagina</button>' + pageHtml(lay.pages[i], r.lang, t.id, r.mode === 'C') + '</div>';
    if (r.mode === 'B') return card + '<p class="mute small" style="margin:4px 0">Testo italiano</p>' + art;
    return card + '<details class="card"><summary class="small mute">Mostra il testo italiano</summary>' + art + '</details>';
  };

  /* ---- esercizi e verifica nella lingua scelta (B: lingua + italiano, C: solo lingua) ---- */
  ST.layerItem = (t, kind, idx, it) => {
    const r = res(t); if (r.lang === 'it' || r.mode === 'A') return it;
    const lay = L.get(r.lang, t.id), ov = lay && lay[kind] && lay[kind][idx]; if (!ov) return it;
    const out = Object.assign({}, it), both = r.mode === 'B';
    out.q = both ? ov.q + ' (' + it.q + ')' : ov.q;
    if (ov.why) out.why = both && it.why ? ov.why + ' (' + it.why + ')' : ov.why;
    if (ov.o) out.o = ov.o.slice();
    if (ov.words) out.words = ov.words.slice();
    if (ov.a) { out.a = both && Array.isArray(it.a) ? ov.a.concat(it.a) : ov.a.slice(); if (r.lang === 'ja') out.ja = true; }
    out._tr = r.lang;
    return out;
  };
  /* ---- pagina dell'argomento tradotta (titolo, riepilogo, obiettivi, etichette) ---- */
  const UI = {
    en: { back: '← Back', obj: 'Objectives', lesson: 'Lesson', ex: 'Applied exercises', test: 'Topic test', pre: 'Prerequisites',
      pages: (n, studied, page) => n + ' pages' + (studied ? ' · read' : page ? ' · resume from page ' + (page + 1) : ''), exSub: (d, n) => d + '/' + n + ' answered correctly',
      testSub: (n, last, canTest) => n + ' questions · ' + (last ? 'last: ' + Math.round(last.score * 100) + '% (' + last.date + ')' : 'not taken yet') + (canTest ? '' : ' · counts as a test from tomorrow') },
    ja: { back: '← [戻|もど]る', obj: '[目標|もくひょう]', lesson: 'レッスン', ex: '[練習問題|れんしゅうもんだい]', test: '[確認|かくにん]テスト', pre: '[先|さき]に[学|まな]ぶこと',
      pages: (n, studied, page) => n + 'ページ' + (studied ? ' · [読|よ]みました' : page ? ' · ' + (page + 1) + 'ページ[目|め]から' : ''), exSub: (d, n) => n + '[問|もん]のうち' + d + '[問|もん][正解|せいかい]',
      testSub: (n, last, canTest) => n + '[問|もん] · ' + (last ? '[前回|ぜんかい]: ' + Math.round(last.score * 100) + '%' : 'まだ[受|う]けていません') + (canTest ? '' : ' · [明日|あした]から[確認|かくにん]として[数|かぞ]えます') }
  };
  ST.layerUI = t => {
    const r = res(t); if (r.lang === 'it' || r.mode === 'A') return null;
    const lay = L.get(r.lang, t.id); if (!lay || !lay.summary) return null;
    const ja = r.lang === 'ja', fmt = x => ja ? U.ruby(x) : E(x), both = r.mode === 'B';
    const ui = UI[r.lang], lab = x => ja ? U.ruby(x) : E(x);
    return { ui, lab, title: fmt(lay.title.t) + (both ? '<br><small class="mute">' + E(t.title) + '</small>' : ''), summary: fmt(lay.summary) + (both ? '<br><small class="mute">' + E(t.summary) + '</small>' : ''),
      objectives: (lay.objectives || []).map((o, i) => fmt(o) + (both ? ' <span class="mute small">(' + E((t.objectives || [])[i] || '') + ')</span>' : '')) };
  };
  /* ---- lettura ad alta voce della pagina tradotta ---- */
  let speaking = false;
  X.layerSpeak = el => {
    if (speaking) { speaking = false; ST.audio.stop(); return A.render(); }
    const t = curTopic(); if (!t) return; const r = res(t), lay = L.get(r.lang, t.id), pg = lay && lay.pages && lay.pages[+el.dataset.i]; if (!pg) return;
    const lines = pg.b.split('\n').map(l => U.speechText(l.replace(/^\s*(?:[-*>]\s+)/, '').replace(/\*\*/g, '').replace(/⟦|⟧/g, '').trim())).filter(Boolean);
    speaking = true; el.textContent = '⏹ Ferma';
    const lang = r.lang === 'ja' ? 'ja-JP' : A.state.profile.accents.en || 'en-GB';
    ST.audio.speakSeq(lines.map(x => ({ text: x, lang })), { lang, cancelled: () => !speaking, gap: 250 }).then(res2 => { speaking = false; if (!res2.ok && res2.reason !== 'cancelled') A.toast(ST.audio.explain(res2.reason), 6000); const b = document.querySelector('[data-act="layerSpeak"]'); if (b) b.textContent = '🔊 Ascolta la pagina'; });
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
