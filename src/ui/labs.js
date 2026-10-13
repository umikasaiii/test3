/* SkillTree — laboratori linguistici: ripasso, ascolto, dettato, shadowing, risposta spontanea,
   conversazione ramificata, lettura, scrittura, Kana Trainer, mini-esami e prove B2 (ascolto/lettura). */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan, C = ST.content, A = ST.app, E = U.esc, V = ST.views, X = ST.acts, R = ST.runner, K = ST.kana;
  const L = ST.labs = {};

  const subjOf = lang => lang === 'en' ? 'eng' : 'jpn';
  const ttsLang = (lang, accent) => lang === 'ja' ? 'ja-JP' : (accent || A.state.profile.accents.en || 'en-GB');
  const cleanSpeech = t => U.speechText(t).replace(/(^|[.!?。]\s+|— )([A-Z][a-z]+(?: [A-Za-z]+)?): /g, '$1');
  /* Argomenti già studiati (lezione letta); se nessuno, il primo argomento sbloccato come anteprima. */
  L.studied = lang => {
    const ts = C.topicsOf(subjOf(lang)), s = A.state;
    const st = ts.filter(t => P.atLeast(P.topicStatus(s, t.id), 'studied'));
    return st.length ? st : ts.slice(0, 1);
  };
  const leastUsed = (arr, key, map) => {
    const m = map || {};
    const sorted = U.shuffle(arr).sort((a, b) => ((m[a[key]] || {}).n || 0) - ((m[b[key]] || {}).n || 0));
    return sorted[0];
  };
  const done = opts => { if (opts && opts.onDone) opts.onDone(); };
  const langOpt = (p) => p && p.lang ? p.lang : 'en';

  /* ---------- Ripasso dilazionato ---------- */
  X.startReview = (lang, opts) => {
    const s = A.state;
    let ids = ST.cards.dueIds(s, lang || '').slice(0, (opts && opts.max) || 20);
    if (!ids.length) { A.toast('Nessun elemento dovuto: ottimo!'); done(opts); return; }
    const items = ids.map(id => ST.cards.question(s, id)).filter(Boolean);
    R.start({
      title: 'Ripasso dilazionato', kind: 'review', items, ctx: lang || 'en',
      onAnswer: (it, ok) => { if (it.cardId) ST.cards.grade(s, it.cardId, ok, false); A.xp(ok ? 3 : 0, 'rev'); },
      onFinish: res => { A.save(); const ok = res.filter(x => x.ok).length; return '<p>I ripassi riusciti allungano l’intervallo (1→3→7→14→30 giorni…); gli errori tornano domani.</p><p class="mute small">Richiamo corretto: ' + ok + '/' + res.length + '.</p>'; },
      after: () => done(opts)
    });
  };
  V.review = p => { setTimeout(() => { A.stack.pop(); X.startReview(p.lang); }, 0); return '<p class="mute center">Preparazione…</p>'; };
  X.startCardsFree = (lang, opts) => {  // ripasso libero quando nulla è dovuto: non modifica le scadenze
    const ts = L.studied(lang), pool = ts.flatMap(t => (t.cards || []).map(c => ({ t, c })));
    if (!pool.length) { A.toast('Completa prima una lezione.'); return; }
    const pick = U.sample(pool, Math.min(10, pool.length));
    const isJa = lang === 'ja';
    R.start({ title: 'Lessico a recupero attivo', kind: 'free', ctx: lang, items: pick.map(x => ({ t: 'fill', ja: isJa, srcLabel: 'Richiamo libero (non modifica le scadenze)', q: 'Scrivi in ' + (isJa ? 'giapponese (kana o romaji)' : 'inglese') + ': «' + x.c.f + '»', a: [isJa ? (x.c.r || U.speechText(x.c.b)) : x.c.b], why: (isJa ? U.plainText(x.c.b) : x.c.b) + (x.c.ex ? ' — ' + x.c.ex : '') })), onAnswer: (it, ok) => A.xp(ok ? 1 : 0, 'free'), onFinish: () => '', after: () => done(opts) });
  };

  /* ---------- Ascolto senza testo ---------- */
  const speakPassage = (text, lang, accent, cancelled) => {
    const sents = cleanSpeech(text).split(/(?<=[.!?。！？])\s*/).filter(Boolean);
    return ST.audio.speakSeq(sents.map(t => ({ text: t, lang: ttsLang(lang, accent) })), { gap: 450, cancelled });
  };
  X.startListening = (lang, opts) => {
    const ts = (opts && opts.topic) ? [C.topic(opts.topic)] : L.studied(lang);
    const pool = ts.flatMap(t => (t.listening || []).map(x => Object.assign({ topic: t }, x)));
    if (!pool.length) { A.toast('Nessun brano disponibile.'); return; }
    const heard = A.state.heard = A.state.heard || {};
    const ps = leastUsed(pool, 'id', Object.fromEntries(Object.keys(heard).map(k => [k.split('|')[1], heard[k]])));
    A.act = { kind: 'listen', passage: ps, plays: 0, lang, opts, gate: false };
    A.go('listen');
  };
  V.listen = () => {
    const a = A.act, ps = a.passage;
    return '<div class="row"><button class="btn alt sm" data-act="listen-quit">← Esci</button></div><h1>🎧 Ascolto attivo</h1><div class="card"><p class="mute">' + E(ps.title) + (a.gate ? ' · prova B2' : '') + ' · accento ' + E(ps.lang) + '</p>' +
      '<p>Ascolta <b>senza testo</b>: prima il senso generale, poi i dettagli. Massimo 3 ascolti.</p>' +
      '<div class="row"><button class="btn" data-act="listen-play" id="lp">▶ Ascolta (' + a.plays + '/3)</button><button class="btn alt" data-act="listen-stop">■ Stop</button></div><p id="lmsg" class="mute small"></p></div>' +
      '<button class="btn block" data-act="listen-go"' + (a.plays < 1 ? ' disabled' : '') + ' id="lg">Rispondi alle domande →</button>';
  };
  X['listen-quit'] = () => { ST.audio.stop(); A.back(); };
  X['listen-stop'] = () => ST.audio.stop();
  X['listen-play'] = () => {
    const a = A.act; if (a.plays >= 3) { A.toast('Hai usato i 3 ascolti.'); return; }
    a.plays++; const msg = A.$('#lmsg'); A.$('#lp').textContent = '▶ Ascolta (' + a.plays + '/3)'; A.$('#lg').disabled = false;
    if (msg) msg.textContent = 'Riproduzione…';
    speakPassage(a.passage.text, a.lang, a.passage.lang).then(r => { if (msg) msg.textContent = r.ok ? 'Riproduzione completata.' : ST.audio.explain(r.reason); if (!r.ok) A.toast(ST.audio.explain(r.reason), 5000); });
  };
  X['listen-go'] = () => {
    ST.audio.stop();
    const a = A.act, ps = a.passage;
    A.stack.pop();
    R.start({
      title: 'Comprensione · ' + ps.title, kind: 'listen', ctx: a.lang, items: ps.qs.map(q => ({ t: 'mc', q: q.q, o: q.o, a: q.a, why: q.why || '', srcLabel: q.kind === 'implicit' ? 'Informazione implicita (inferenza)' : 'Informazione esplicita' })),
      onAnswer: (it, ok) => A.xp(ok ? 5 : 1, 'lis'),
      onFinish: res => {
        const score = res.filter(x => x.ok).length / res.length;
        if (a.gate) {
          A.state.exams.push({ lang: 'en', level: 'B2', skill: 'listening', kind: 'gate', item: ps.id, date: U.today(), score });
        } else {
          const h = A.state.heard; const k = a.lang + '|' + ps.id; h[k] = { n: ((h[k] || {}).n || 0) + 1, last: U.today(), score };
        }
        A.subjectTouch(subjOf(a.lang)); A.save();
        const verdict = a.gate ? '<p class="mute small">Prova B2 registrata come indicatore (in-app), non come certificazione.</p>' : '';
        return '<div class="card" style="text-align:left"><h3>Trascrizione</h3><p>' + U.ruby(ps.text) + '</p><p><button class="btn alt sm" data-act="say" data-lang="' + (a.lang === 'ja' ? 'ja-JP' : ps.lang) + '" data-text="' + E(cleanSpeech(ps.text)) + '">🔊 Riascolta con il testo</button></p></div>' + verdict;
      },
      after: () => done(a.opts)
    });
  };

  /* ---------- Dettato ---------- */
  X.startDictation = (lang, opts) => {
    const ts = (opts && opts.topic) ? [C.topic(opts.topic)] : L.studied(lang);
    const pool = ts.flatMap(t => (t.dictation || []).map(d => Object.assign({ topic: t.id }, d)));
    if (!pool.length) { A.toast('Nessun dettato disponibile.'); return; }
    const pick = U.sample(pool, Math.min(5, pool.length));
    R.start({ title: 'Dettato', kind: 'dict', ctx: lang, items: pick.map(d => ({ t: 'dict', q: 'Scrivi ciò che senti', text: d.text, lang: d.lang === 'ja' ? 'ja' : d.lang })),
      onAnswer: (it, ok) => A.xp(ok ? 5 : 1, 'dict'),
      onFinish: res => { A.subjectTouch(subjOf(lang)); A.save(); return '<p class="mute small">Il dettato verifica ascolto + ortografia. Riascolta le frasi sbagliate con il testo e ripetile in shadowing.</p>'; },
      after: () => done(opts) });
  };

  /* ---------- Shadowing, registrazione e autovalutazione ---------- */
  X.startShadow = (lang, opts) => {
    const ts = (opts && opts.topic) ? [C.topic(opts.topic)] : L.studied(lang);
    const pool = ts.flatMap(t => (t.shadowing || []).map(s => Object.assign({ topic: t.id }, s)));
    if (!pool.length) { A.toast('Nessuna frase disponibile.'); return; }
    A.act = { kind: 'shadow', items: U.sample(pool, Math.min(3, pool.length)), i: 0, step: 'model', lang, opts, blob: null, ratings: {} };
    A.go('shadow');
  };
  const rubric = [['rhythm', 'Ritmo e fluidità'], ['sounds', 'Suoni e pronuncia'], ['intonation', 'Intonazione']];
  V.shadow = () => {
    const a = A.act, it = a.items[a.i], tl = ttsLang(a.lang, it.lang);
    let h = '<div class="row"><button class="btn alt sm" data-act="shadow-quit">← Esci</button><span class="sp"></span><span class="mute small">' + (a.i + 1) + '/' + a.items.length + '</span></div><h1>🗣️ Shadowing</h1><div class="card"><p class="big" style="font-size:1.3rem">' + U.ruby(it.text) + '</p><p class="mute small">💡 ' + E(it.tip || '') + '</p>' +
      '<div class="row wrap"><button class="btn alt sm" data-act="shadow-say">🔊 Modello</button><button class="btn alt sm" data-act="shadow-slow">🐢 Lento</button></div></div>';
    if (a.step === 'model') h += '<div class="card"><h3>1 · Ascolta e ripeti a mezza frase di distanza</h3><p class="mute small">Copia ritmo e intonazione, non solo le parole. Poi registra la tua versione (facoltativo: serve il permesso del microfono).</p><div class="row wrap"><button class="btn" data-act="shadow-rec">🎙️ Registra</button><button class="btn alt" data-act="shadow-skip">Ho ripetuto senza registrare</button></div></div>';
    if (a.step === 'rec') h += '<div class="card"><h3>Registrazione in corso…</h3><p class="timer" id="rt">0:00</p><button class="btn block" data-act="shadow-stop">■ Stop</button></div>';
    if (a.step === 'compare') h += '<div class="card"><h3>2 · Confronta con il modello</h3>' + (a.blob ? '<div class="row wrap"><button class="btn alt sm" data-act="shadow-say">🔊 Modello</button><button class="btn alt sm" data-act="shadow-mine">▶ La mia voce</button></div>' : '<p class="mute small">Nessuna registrazione: valuta comunque la ripetizione ad alta voce.</p>') +
      '<p class="mute small">Autovalutazione (1 = lontano dal modello, 5 = molto vicino):</p>' + rubric.map(r => '<label class="small">' + r[1] + '</label><input type="range" min="1" max="5" value="3" data-r="' + r[0] + '" class="rg" style="width:100%">').join('') +
      '<p class="warn small">Il confronto autonomo <b>non equivale</b> a una valutazione di pronuncia da parte di un docente.</p><button class="btn block" data-act="shadow-next">' + (a.i + 1 >= a.items.length ? 'Concludi' : 'Salva e avanti') + '</button></div>';
    return h;
  };
  X['shadow-quit'] = () => { ST.audio.stop(); A.back(); };
  const shadowSay = rate => { const a = A.act, it = a.items[a.i]; ST.audio.speak(it.text, { lang: ttsLang(a.lang, it.lang), rate }).then(r => { if (!r.ok) A.toast(ST.audio.explain(r.reason), 4500); }); };
  X['shadow-say'] = () => shadowSay(); X['shadow-slow'] = () => shadowSay(0.6);
  let recTimer = null;
  X['shadow-rec'] = async () => {
    const a = A.act;
    try { await ST.audio.rec.start(); } catch (e) { A.toast(e.message, 5000); a.step = 'compare'; A.render(); return; }
    a.step = 'rec'; a.t0 = Date.now(); A.render();
    recTimer = setInterval(() => { const el = A.$('#rt'); if (!el) { clearInterval(recTimer); return; } const s = Math.floor((Date.now() - a.t0) / 1000); el.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); if (s >= 60) X['shadow-stop'](); }, 400);
  };
  X['shadow-stop'] = async () => { clearInterval(recTimer); const a = A.act; a.blob = await ST.audio.rec.stop(); a.step = 'compare'; A.render(); };
  X['shadow-skip'] = () => { A.act.blob = null; A.act.step = 'compare'; A.render(); };
  X['shadow-mine'] = () => { const a = A.act; if (a.blob) ST.audio.playBlob(a.blob).then(r => { if (!r.ok) A.toast('Riproduzione non riuscita.'); }); };
  X['shadow-next'] = async () => {
    const a = A.act, it = a.items[a.i], s = A.state, ratings = {};
    document.querySelectorAll('.rg').forEach(r => { ratings[r.dataset.r] = +r.value; });
    const entry = { id: 'rec-' + Date.now().toString(36), lang: a.lang, text: U.plainText(it.text), date: U.today(), self: ratings, recorded: !!a.blob };
    if (a.blob) {
      const ok = await ST.storage.putRec(entry.id, a.blob); entry.recorded = ok;
      s.rec.push(entry); while (s.rec.length > 40) { const old = s.rec.shift(); ST.storage.delRec(old.id); }
    } else { s.rec.push(entry); if (s.rec.length > 40) s.rec.shift(); }
    A.xp(6, 'shadow');
    a.i++; a.step = 'model'; a.blob = null;
    if (a.i >= a.items.length) { A.subjectTouch(subjOf(a.lang)); A.save(); const o = a.opts; ST.audio.stop(); A.back(); A.toast('Shadowing completato (autovalutato)'); done(o); return; }
    A.render();
  };

  /* ---------- Risposta spontanea ---------- */
  X.startSpeak = (lang, opts) => {
    const ts = (opts && opts.topic) ? [C.topic(opts.topic)] : L.studied(lang);
    const pool = ts.flatMap(t => (t.speaking || []).map(s => Object.assign({ topic: t.id }, s)));
    if (!pool.length) { A.toast('Nessuna consegna disponibile.'); return; }
    A.act = { kind: 'speak', item: U.pick(pool), lang, opts, step: 'prompt', blob: null };
    A.go('speak');
  };
  V.speak = () => {
    const a = A.act, it = a.item;
    let h = '<div class="row"><button class="btn alt sm" data-act="speak-quit">← Esci</button></div><h1>💬 Risposta spontanea</h1><div class="card"><p class="big" style="font-size:1.2rem">' + U.ruby(it.prompt) + '</p><p class="mute small">Rispondi ad alta voce senza leggere. 30–60 secondi. Se ti blocchi, continua con parole più semplici.</p></div>';
    if (a.step === 'prompt') h += '<button class="btn block" data-act="speak-rec">🎙️ Inizia (registra)</button><button class="btn alt block" style="margin-top:8px" data-act="speak-norec">Rispondo senza registrare</button>';
    if (a.step === 'rec') h += '<div class="card"><p class="timer" id="rt">0:00</p><button class="btn block" data-act="speak-stop">■ Ho finito</button></div>';
    if (a.step === 'review') h += (a.blob ? '<div class="card"><button class="btn alt" data-act="speak-mine">▶ Riascolta la tua risposta</button></div>' : '') +
      '<div class="card"><h3>Risposta modello (confronto)</h3><p>' + U.ruby(it.model) + '</p><button class="btn alt sm" data-act="say" data-lang="' + (a.lang === 'ja' ? 'ja-JP' : 'en') + '" data-text="' + E(U.speechText(it.model)) + '">🔊 Ascolta il modello</button></div>' +
      '<div class="card"><h3>Autovalutazione</h3>' + ['Ho risposto alla consegna', 'Ho usato le strutture della lezione', 'Ho parlato senza lunghe pause (>3 s)', 'Mi sono corretto quando sbagliavo'].map((t, i) => '<label class="row" style="margin:6px 0"><input type="checkbox" class="chk" data-i="' + i + '" style="width:22px;height:22px"> <span>' + t + '</span></label>').join('') +
      '<p class="warn small">Parlato e pronuncia vanno verificati periodicamente con un docente o un madrelingua: questa è solo autovalutazione.</p><button class="btn block" data-act="speak-done">Salva</button></div>';
    return h;
  };
  X['speak-quit'] = () => { ST.audio.stop(); A.back(); };
  X['speak-rec'] = async () => { const a = A.act; try { await ST.audio.rec.start(); } catch (e) { A.toast(e.message, 5000); a.step = 'review'; A.render(); return; } a.step = 'rec'; a.t0 = Date.now(); A.render(); recTimer = setInterval(() => { const el = A.$('#rt'); if (!el) { clearInterval(recTimer); return; } const s = Math.floor((Date.now() - a.t0) / 1000); el.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); if (s >= 90) X['speak-stop'](); }, 400); };
  X['speak-norec'] = () => { A.act.step = 'review'; A.render(); };
  X['speak-stop'] = async () => { clearInterval(recTimer); A.act.blob = await ST.audio.rec.stop(); A.act.step = 'review'; A.render(); };
  X['speak-mine'] = () => { if (A.act.blob) ST.audio.playBlob(A.act.blob); };
  X['speak-done'] = async () => {
    const a = A.act, s = A.state, checks = [...document.querySelectorAll('.chk')].map(c => c.checked);
    const entry = { id: 'rec-' + Date.now().toString(36), lang: a.lang, text: U.plainText(a.item.prompt), date: U.today(), self: { checks }, recorded: !!a.blob, kind: 'speak' };
    if (a.blob) { entry.recorded = await ST.storage.putRec(entry.id, a.blob); }
    s.rec.push(entry); while (s.rec.length > 40) { const old = s.rec.shift(); if (old.recorded) ST.storage.delRec(old.id); }
    A.xp(8, 'speak'); A.subjectTouch(subjOf(a.lang)); A.save();
    const o = a.opts; A.back(); A.toast('Risposta salvata (autovalutata)'); done(o);
  };

  /* ---------- Scrittura e lettura ---------- */
  X.startWrite = (lang, opts) => {
    const ts = (opts && opts.topic) ? [C.topic(opts.topic)] : L.studied(lang);
    const pool = ts.flatMap(t => (t.speaking || []).map(s => Object.assign({ topic: t.id }, s)));
    if (!pool.length) { A.toast('Nessuna consegna disponibile.'); return; }
    A.act = { kind: 'write', item: U.pick(pool), lang, opts };
    A.go('write');
  };
  V.write = () => {
    const a = A.act, it = a.item;
    return '<div class="row"><button class="btn alt sm" data-act="back">← Esci</button></div><h1>✏️ Scrittura autonoma</h1><div class="card"><p>' + U.ruby(it.prompt) + '</p><p class="mute small">Scrivi 6–10 frasi, senza tradurre da un testo. Poi confronta con il modello.</p></div>' +
      '<textarea id="wtxt" placeholder="Scrivi qui…"></textarea><p class="mute small" id="wcount">0 parole</p>' +
      '<div class="card"><h3>Lista di controllo</h3>' + ['Ho risposto alla consegna', 'Ho controllato tempi verbali e accordi', 'Ho usato almeno due connettori/strutture della lezione', 'Ho riletto e corretto'].map((t, i) => '<label class="row" style="margin:6px 0"><input type="checkbox" class="chk" style="width:22px;height:22px"> <span>' + t + '</span></label>').join('') + '</div>' +
      '<div class="card"><button class="btn alt sm" data-act="write-model">Mostra testo modello</button><div id="wmodel"></div></div>' +
      '<p class="warn small">Per dichiarare un B2 scritto serve la correzione di un docente o un esame: l’app non corregge da sola la scrittura libera.</p><button class="btn block" data-act="write-save">Salva</button>';
  };
  ST.after.write = () => { const t = A.$('#wtxt'); if (t) t.addEventListener('input', () => { A.$('#wcount').textContent = (t.value.trim() ? t.value.trim().split(/\s+/).length : 0) + ' parole'; }); };
  X['write-model'] = () => { A.$('#wmodel').innerHTML = '<p>' + U.ruby(A.act.item.model) + '</p>'; };
  X['write-save'] = () => {
    const a = A.act, txt = (A.$('#wtxt').value || '').trim();
    if (txt.split(/\s+/).length < 15) { A.toast('Scrivi almeno 15 parole.'); return; }
    const s = A.state; s.writing = s.writing || [];
    s.writing.push({ date: U.today(), lang: a.lang, prompt: U.plainText(a.item.prompt), text: txt, checks: [...document.querySelectorAll('.chk')].map(c => c.checked) });
    if (s.writing.length > 30) s.writing.shift();
    A.xp(8, 'write'); A.subjectTouch(subjOf(a.lang)); A.save();
    const o = a.opts; A.back(); A.toast('Testo salvato (autovalutato)'); done(o);
  };
  X.startReading = (lang, opts) => {
    let pool = [];
    if (lang === 'ja') pool = C.topicsOf('jpn').filter(t => t.reading).flatMap(t => t.reading.map(r => Object.assign({ topic: t.id }, r)));
    else pool = C.readingPractice.en.map(x => Object.assign({}, x));
    if (!pool.length) { A.toast('Nessun testo disponibile per questo livello.'); return; }
    const m = A.state.readSeen = A.state.readSeen || {};
    const ps = leastUsed(pool, 'id', m);
    A.act = { kind: 'read', passage: ps, lang, opts };
    A.go('read');
  };
  V.read = () => {
    const a = A.act, ps = a.passage;
    return '<div class="row"><button class="btn alt sm" data-act="back">← Esci</button><span class="sp"></span>' + (a.lang === 'ja' ? '<button class="btn alt sm" data-act="furi">あ furigana</button>' : '') + '</div><h1>📰 Lettura</h1><div class="card"><h3>' + E(ps.title) + (ps.level ? ' · ' + E(ps.level) : '') + '</h3><p style="font-size:1.1rem;line-height:1.8">' + U.ruby(ps.text) + '</p></div>' +
      '<button class="btn block" data-act="read-go">Rispondi alle domande →</button>';
  };
  X['read-go'] = () => {
    const a = A.act, ps = a.passage; A.stack.pop();
    R.start({ title: 'Lettura · ' + ps.title, kind: 'read', ctx: a.lang, items: ps.qs.map(q => ({ t: 'mc', q: q.q, o: q.o, a: q.a, why: q.why || '', srcLabel: q.kind === 'implicit' ? 'Informazione implicita (inferenza)' : 'Informazione esplicita' })),
      onAnswer: (it, ok) => A.xp(ok ? 5 : 1, 'read'),
      onFinish: res => { const m = A.state.readSeen; m[ps.id] = { n: ((m[ps.id] || {}).n || 0) + 1, last: U.today() }; A.subjectTouch(subjOf(a.lang)); A.save(); return ''; },
      after: () => done(a.opts) });
  };

  /* ---------- Conversazione ramificata ---------- */
  X.startConvo = (lang, opts) => {
    const pool = C.dialogues.filter(d => d.lang === lang);
    const seen = A.state.convoSeen = A.state.convoSeen || {};
    const d = leastUsed(pool, 'id', seen);
    A.act = { kind: 'convo', d, node: d.start, score: 0, max: 0, lang, opts, fb: null, log: [] };
    A.go('convo');
  };
  V.convo = () => {
    const a = A.act, n = a.d.nodes[a.node];
    if (a.node === 'end') {
      const pct = Math.round(100 * a.score / Math.max(1, a.max));
      return '<div class="card glow center"><h1>' + E(a.d.title) + '</h1><div class="big">' + pct + '%</div><p class="mute">Autovalutazione guidata sulle tue scelte (2 = naturale, 1 = accettabile, 0 = da migliorare)</p></div><div class="card">' + a.log.map(l => '<p><b>' + U.ruby(l.t) + '</b><br><span class="mute small">' + E(l.fb) + '</span></p>').join('') + '</div><button class="btn block" data-act="convo-close">Fine</button>';
    }
    return '<div class="row"><button class="btn alt sm" data-act="back">← Esci</button></div><h1>🗨️ ' + E(a.d.title) + '</h1><p class="mute small">Livello ' + E(a.d.level) + ' · scegli la risposta migliore e poi <b>pronunciala ad alta voce</b>.</p>' +
      '<div class="card"><p><button class="btn alt sm" data-act="convo-say">🔊</button> <b>' + U.ruby(n.p) + '</b></p></div>' +
      (a.fb ? '<div class="fb info">' + E(a.fb) + '</div><button class="btn block" style="margin-top:10px" data-act="convo-next">Continua →</button>' : n.c.map((c, i) => '<button class="opt" data-act="convo-pick" data-i="' + i + '">' + U.ruby(c.t) + '</button>').join(''));
  };
  X['convo-say'] = () => { const a = A.act; if (!a || a.kind !== 'convo' || A.view().name !== 'convo') return; const n = a.d.nodes[a.node]; if (!n) return; ST.audio.speak(n.p, { lang: ttsLang(a.lang, a.d.accent) }).then(r => { if (!r.ok) A.toast(ST.audio.explain(r.reason), 4500); }); };
  ST.after.convo = () => { const a = A.act; if (a && a.node !== 'end' && !a.fb) setTimeout(() => X['convo-say'](), 300); };
  X['convo-pick'] = el => { const a = A.act, n = a.d.nodes[a.node], c = n.c[+el.dataset.i]; a.score += c.q; a.max += 2; a.fb = '(' + c.q + '/2) ' + c.fb; a.pending = c.next; a.log.push({ t: c.t, fb: c.fb }); A.render(); };
  X['convo-next'] = () => { const a = A.act; a.node = a.pending; a.fb = null; A.render(); };
  X['convo-close'] = () => {
    const a = A.act, m = A.state.convoSeen; m[a.d.id] = { n: ((m[a.d.id] || {}).n || 0) + 1, last: U.today() };
    A.xp(10, 'convo'); A.subjectTouch(subjOf(a.lang)); A.save(); const o = a.opts; A.back(); done(o);
  };

  /* ---------- Kana Trainer ---------- */
  X.startKana = opts => {
    const s = A.state, first = !s.kana.placed;
    const groups = s.kana.accGroupDak ? ['base', 'dakuten'] : ['base'];
    const n = first ? 30 : 15;
    const set = K.pickSet(s, n, first ? ['base'] : (K.accuracy(s, 'base') >= 0.92 && s.kana.placed ? ['base', 'dakuten', 'yoon'] : groups));
    const items = set.map(k => { const q = K.question(s, k); return { t: 'mc', q: k.ch, o: q.options, a: q.answer, say: { text: k.ch, lang: 'ja' }, noauto: true, kid: k.id, srcLabel: first ? 'Test di posizionamento' : 'Kana Trainer · errori riproposti più spesso', why: k.ch + ' = ' + k.ro }; });
    R.start({ title: 'Kana Trainer', kind: 'kana', items, ctx: 'ja',
      onAnswer: (it, ok) => { K.record(s, it.kid, ok); A.xp(ok ? 1 : 0, 'kana'); },
      onFinish: res => { s.kana.placed = true; s.kana.lastSession = U.today(); A.save(); return '<p class="mute small">I kana sbagliati compaiono più spesso nelle prossime sessioni. Accuratezza complessiva (base): ' + Math.round(100 * K.accuracy(s, 'base')) + '%. Il trainer non va oltre 3 minuti al giorno: la priorità è capire e parlare.</p>'; },
      after: () => done(opts) });
  };

  /* ---------- Mini-esami cumulativi e prove B2 ---------- */
  X.startMini = (lang, opts) => {
    const ts = L.studied(lang).filter(t => P.atLeast(P.topicStatus(A.state, t.id), 'studied'));
    const pool = ts.flatMap(t => (t.test || []).concat(t.exercises.filter(e => e.t === 'mc' || e.t === 'fill')).map(x => Object.assign({}, x)));
    if (pool.length < 6) { A.toast('Studia almeno una lezione prima del mini-esame.'); return; }
    const items = U.sample(pool, Math.min(12, pool.length));
    R.start({ title: 'Mini-esame cumulativo', kind: 'mini', items, ctx: lang, onAnswer: (it, ok) => A.xp(ok ? 5 : 0, 'mini'),
      onFinish: res => { const score = res.filter(x => x.ok).length / res.length; A.state.exams.push({ lang, level: 'mini', skill: 'mixed', kind: 'mini', date: U.today(), score }); A.subjectTouch(subjOf(lang)); A.save(); return '<p class="mute small">Il mini-esame mescola argomenti diversi: misura il richiamo, non la competenza comunicativa.</p>'; },
      after: () => done(opts) });
  };
  V.gateRead = () => { const ps = A.act.passage; return '<div class="row"><button class="btn alt sm" data-act="back">← Esci</button></div><h1>📰 Prova B2 · lettura</h1><div class="card"><h3>' + E(ps.title) + '</h3><p style="font-size:1.08rem;line-height:1.8">' + E(ps.text) + '</p></div><button class="btn block" data-act="gate-go">Rispondi alle domande →</button>'; };
  X['gate-go'] = () => { const ps = A.act.passage; A.stack.pop(); R.start({ title: 'Prova B2 · lettura', kind: 'gate', ctx: 'en', items: ps.qs.map(q => ({ t: 'mc', q: q.q, o: q.o, a: q.a, why: q.why || '', srcLabel: q.kind === 'implicit' ? 'Inferenza' : 'Informazione esplicita' })), onFinish: res => { const score = res.filter(x => x.ok).length / res.length; A.state.exams.push({ lang: 'en', level: 'B2', skill: 'reading', kind: 'gate', item: ps.id, date: U.today(), score }); A.save(); return '<p class="mute small">Prova B2 di lettura registrata come indicatore in-app.</p>'; } }); };
  // La lettura B2 mostra prima il testo, poi le domande.
  X.startGate = (skill) => {
    const g = C.gate[skill], used = new Set(A.state.exams.filter(e => e.kind === 'gate' && e.skill === skill).map(e => e.item));
    const left = g.filter(x => !used.has(x.id));
    if (!left.length) { A.toast('Hai già svolto tutte le prove di ' + (skill === 'listening' ? 'ascolto' : 'lettura') + ' disponibili. Servono nuovi materiali o una prova esterna.', 5500); return; }
    const ps = U.pick(left);
    if (skill === 'listening') { A.act = { kind: 'listen', passage: ps, plays: 0, lang: 'en', opts: null, gate: true }; A.go('listen'); }
    else { A.act = { kind: 'gate', passage: ps }; A.go('gateRead'); }
  };
})(window.ST = window.ST || {});
