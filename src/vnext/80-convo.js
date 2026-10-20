/* vNext M5 — English Conversation Lab e Japanese Immersion Lab: motore comune di scenari ramificati con tre tipi di compito:
   RICONOSCIMENTO/COMPRENSIONE (scelta), PRODUZIONE (testo libero con controlli automatici LIMITATI) e COSTRUZIONE di frasi (ordina).
   Onestà tecnica: le correzioni sono regole fisse su errori tipici (un elenco finito); l'assenza di segnalazioni NON prova che la frase sia
   corretta. Nessuna valutazione della pronuncia. Il giapponese si può scrivere in kana, kanji o romaji (convertito con il motore romaji
   dell'app). Gli errori trovati vengono salvati per un ripasso dilazionato. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const Cv = M.convo = { scenarios: [] };
  Cv.add = s => { Cv.scenarios.push(s); return s; };
  Cv.byId = id => Cv.scenarios.find(s => s.id === id);
  Cv.LIMIT = 'Controlli automatici limitati: riconosco le informazioni richieste e un elenco finito di errori tipici. Se non segnalo nulla non significa che la frase sia perfetta; confrontala sempre con la risposta modello.';

  /* ---- inglese: errori tipici di chi parla italiano (regole fisse) ---- */
  Cv.EN_RULES = [
    [/\bi(?: am|'m) agree\b/i, '«I am agree»', 'In inglese si dice «I agree» (agree è un verbo).'],
    [/\bdepends? of\b/i, '«depend of»', 'Si dice «depend on».'],
    [/\bi have (\d+) years?(?! of| in| working)\b/i, '«I have N years»', 'L’età si dice «I am 25» o «I’m 25 years old».'],
    [/\bsince (?:\d+|a|an|one|two|three|four|five|six|several|many) (?:years?|months?|weeks?|days?|hours?)\b/i, '«since + durata»', 'Con una durata si usa «for» (for three years); «since» vuole un punto di partenza (since 2020).'],
    [/\bexplain me\b/i, '«explain me»', 'Si dice «explain to me».'],
    [/\b(?:he|she|it) (?:don't|doesn't have to) have\b/i, '', ''],
    [/\b(?:he|she|it) don't\b/i, '«he/she/it don’t»', 'Con he/she/it si usa «doesn’t».'],
    [/\b(?:he|she|it) have\b(?! to)/i, '«he/she/it have»', 'Con he/she/it si usa «has».'],
    [/\bmore better\b|\bmost best\b/i, '«more better»', 'Si dice «better» (già comparativo).'],
    [/\binformations\b|\badvices\b|\bfurnitures\b/i, 'sostantivo non numerabile al plurale', '«information», «advice», «furniture» non hanno il plurale.'],
    [/\bpeople is\b/i, '«people is»', 'People vuole il plurale: «people are».'],
    [/\bdo you can\b|\bdoes he can\b/i, '«do you can»', 'Con i modali non serve «do»: «can you…?».'],
    [/\binterested (?:on|at|to)\b/i, '«interested on/at/to»', 'Si dice «interested in».'],
    [/\bmarried with\b/i, '«married with»', 'Si dice «married to» una persona.'],
    [/\bmake(?:ing)? a (?:photo|picture of)\b|\bmade a photo\b/i, '«make a photo»', 'Si dice «take a photo/picture».'],
    [/\blook(?:ing)? forward to (?:see|meet|hear|work|talk)\b/i, '«look forward to + verbo base»', 'Dopo «look forward to» si usa la forma in -ing: «look forward to seeing you».'],
    [/\bhow many time\b/i, '«how many time»', 'Si dice «how many times» o «how often».'],
    [/\bhe said me\b|\bshe said me\b|\bI said him\b/i, '«said me»', 'Si dice «told me» (told + persona) oppure «said to me».'],
    [/\bin the (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b|\bat the morning\b|\bin the weekend\b/i, 'preposizione di tempo', 'Giorni: «on Monday»; parti del giorno: «in the morning»; fine settimana: «at/on the weekend».'],
    [/\bi am (?:work|study|live) /i, '«I am + verbo base»', 'Con un verbo d’azione: «I work» (abitudine) o «I am working» (ora).'],
    [/\bI(?:'m| am) here since\b/i, '«I am here since»', 'Per una situazione che dura fino a ora si usa il present perfect: «I’ve been here since…».'],
    [/\bI(?:'m| am) (?:very )?much (?:happy|tired|busy)\b/i, '«very much + aggettivo»', 'Con gli aggettivi si usa «very»: «very happy».']
  ].filter(r => r[1]);
  Cv.enFlags = text => { const out = []; Cv.EN_RULES.forEach(([re, bad, why]) => { const m = re.exec(text); if (m) out.push({ k: 'en', bad: m[0], msg: bad + ': ' + why }); }); return out; };

  /* ---- giapponese: normalizzazione per confrontare kana, katakana e romaji ---- */
  const k2h = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  Cv.jaKey = s => {
    s = String(s).toLowerCase().replace(/[\s　。、！？!?.,'’\-・「」『』]/g, ''); let r = /[ぁ-ゟ゠-ヿ]/.test(s) ? ST.layer.romaji(k2h(s)) : s; r = r.replace(/[^a-z]/g, '');
    [['shi', 'si'], ['chi', 'ti'], ['tsu', 'tu'], ['fu', 'hu'], ['ji', 'zi'], ['sha', 'sya'], ['shu', 'syu'], ['sho', 'syo'], ['cha', 'tya'], ['chu', 'tyu'], ['cho', 'tyo'], ['ja', 'zya'], ['ju', 'zyu'], ['jo', 'zyo']].forEach(([h, k]) => { r = r.split(k).join(h); });
    return r.replace(/ou/g, 'oo').replace(/ei/g, 'ee').replace(/aa+/g, 'aa').replace(/ii+/g, 'ii').replace(/uu+/g, 'uu').replace(/ee+/g, 'ee').replace(/oo+/g, 'oo');
  };
  const POLITE = /です|ます|ました|ません|でした|ください|くださ|おねがい|お願い|ありがとうございます|ごめんなさい|すみません|desu|masu|mashita|masen|deshita|kudasai|onegai|arigatougozaimasu|arigatoogozaimasu|sumimasen/i;
  Cv.jaFlags = (text, task) => { const out = []; if (task.register === 'polite' && !POLITE.test(text.replace(/\s/g, '')) && !POLITE.test(Cv.jaKey(text))) out.push({ k: 'ja', bad: '', msg: 'Registro: qui serve un tono cortese (です/ます, ください, お願いします…).' }); if (/^[\x00-\x7f\s]+$/.test(text) && text.trim()) out.push({ k: 'info', bad: '', msg: 'Hai scritto in romaji: va bene per esercitarti, ma abituati anche a kana.' }); return out; };

  /* ---- valutazione di una produzione ---- */
  const KANJI = /[一-龯々〆]/;
  /* giapponese: un'alternativa con kanji si cerca come testo letterale (la chiave in romaji scarta i kanji); le altre anche in romaji/kana */
  const has = (lang, text, any) => any.some(a => { if (lang !== 'ja') return new RegExp(a, 'i').test(text); a = String(a); if (!a) return false; if (text.toLowerCase().indexOf(a.toLowerCase()) >= 0) return true; if (KANJI.test(a)) return false; const k = Cv.jaKey(a); return !!k && Cv.jaKey(text).indexOf(k) >= 0; });
  Cv.evalProduce = (lang, task, text) => {
    text = String(text || '').trim(); const must = task.must || [], got = must.filter(m => has(lang, text, m.any)), miss = must.filter(m => got.indexOf(m) < 0), cov = must.length ? got.length / must.length : 1;
    const flags = (lang === 'en' ? Cv.enFlags(text) : Cv.jaFlags(text, task)).concat((task.avoid || []).filter(a => has(lang, text, a.any)).map(a => ({ k: 'avoid', bad: '', msg: a.why })));
    const size = lang === 'en' ? text.split(/\s+/).filter(Boolean).length : text.replace(/\s/g, '').length, min = task.min || 0, short = size < min;
    const errs = flags.filter(f => f.k !== 'info'); let score = cov >= 1 ? 3 : cov >= 0.67 ? 2 : cov >= 0.34 ? 1 : 0; if (errs.length >= 2) score = Math.max(0, score - 1); if (short && score > 1) score = 1; if (!text) score = 0;
    return { score, coverage: cov, missing: miss.map(m => m.label), flags, short, size };
  };
  Cv.evalOrder = (lang, task, built) => { const j = lang === 'ja' ? built.join('') : built.join(' '); const norm = x => lang === 'ja' ? Cv.jaKey(x) : x.toLowerCase().replace(/[^a-z0-9' ]/g, '').replace(/\s+/g, ' ').trim(); return { ok: (task.accept || []).some(a => norm(a) === norm(j)), built: j }; };

  /* ---- validatore degli scenari (e verifica che la risposta modello superi i propri controlli) ---- */
  Cv.validate = s => {
    const er = [], ns = s.nodes || {}, ids = Object.keys(ns); if (!s.id || !s.title || !['en', 'ja'].includes(s.lang) || !s.level || !s.area || !ns[s.start]) return { ok: false, errors: ['campi obbligatori'] };
    if (ids.length < 6) er.push('servono almeno 6 nodi'); let prod = 0, unexp = 0;
    ids.forEach(id => { const n = ns[id]; if (!n.npc || !n.npc.t || !n.npc.tr) er.push(id + ': npc/traduzione'); if (n.unexpected) unexp++; const t = n.task; if (!t) { if (!n.end) er.push(id + ': né compito né fine'); return; }
      const nx = x => { if (x != null && !ns[x]) er.push(id + ': next inesistente ' + x); };
      if (t.kind === 'choose') { (t.opts || []).forEach(o => { if (!o.t || !o.why || !(o.q >= 0 && o.q <= 3)) er.push(id + ': opzione malformata'); nx(o.next); }); if ((t.opts || []).length < 3 || !t.opts.some(o => o.q === 3) || !t.opts.some(o => o.q <= 1)) er.push(id + ': opzioni insufficienti'); }
      else if (t.kind === 'produce') { prod++; nx(t.next); if (!t.prompt || !t.model || (t.must || []).length < 2 || t.must.some(m => !m.label || !(m.any || []).length)) er.push(id + ': produzione malformata'); else { const r = Cv.evalProduce(s.lang, t, t.model); if (r.coverage < 1 || r.flags.some(f => f.k !== 'info')) er.push(id + ': la risposta modello non supera i propri controlli (' + r.missing.concat(r.flags.map(f => f.msg)).join('; ') + ')'); } }
      else if (t.kind === 'order') { nx(t.next); if (!(t.words || []).length || !(t.accept || []).length || !t.model) er.push(id + ': ordine malformato'); else if (!Cv.evalOrder(s.lang, t, s.lang === 'ja' ? t.accept[0].split('') : t.accept[0].split(' ')).ok && !t.words.length) er.push(id + ': accept'); else { const ws = t.words.slice().sort(), as = (s.lang === 'ja' ? t.accept[0].replace(/\s/g, '') : t.accept[0]).toString(); if (s.lang === 'en' && ws.join(' ') !== t.accept[0].split(' ').sort().join(' ')) er.push(id + ': le parole non corrispondono alla frase'); if (s.lang === 'ja' && t.words.join('').length !== as.length) er.push(id + ': le parole non corrispondono alla frase'); } }
      else er.push(id + ': tipo di compito sconosciuto'); });
    if (prod < 2) er.push('servono almeno 2 compiti di produzione'); if (!unexp) er.push('serve almeno una domanda imprevista (unexpected)');
    if (!er.length) { const seen = new Set(), stack = new Set(); let cyc = false; const nexts = n => n.task ? (n.task.kind === 'choose' ? n.task.opts.map(o => o.next) : [n.task.next]) : []; const dfs = id => { if (stack.has(id)) { cyc = true; return; } if (seen.has(id)) return; seen.add(id); stack.add(id); nexts(ns[id]).forEach(x => { if (x != null) dfs(x); }); stack.delete(id); }; dfs(s.start); if (cyc) er.push('ciclo'); ids.filter(i => !seen.has(i)).forEach(i => er.push('irraggiungibile ' + i)); }
    return { ok: !er.length, errors: er };
  };

  /* ---- errori salvati con ripasso dilazionato ---- */
  Cv.S = s => { const x = M.S(s).convo = M.S(s).convo || { runs: {}, errs: {} }; x.runs = x.runs || {}; x.errs = x.errs || {}; return x; };
  Cv.saveErr = (s, lang, bad, msg) => { const x = Cv.S(s), id = lang + ':' + bad.toLowerCase(); if (!x.errs[id]) x.errs[id] = ST.srs.newCard({ kind: 'convo', lang, bad, msg, due: U.addDays(U.today(), 1), reps: 1, last: U.today(), interval: 1, step: 1, state: 'learning' }); return x.errs[id]; };
  Cv.dueErrs = s => ST.srs.dueList(Cv.S(s).errs, U.today()).map(c => Object.assign({ id: c.id }, Cv.S(s).errs[c.id]));
  Cv.gradeErr = (s, id, g) => { const x = Cv.S(s); if (x.errs[id]) x.errs[id] = Object.assign(x.errs[id], ST.srs.review(x.errs[id], g)); };
  Cv.finish = (s, sc, answers) => { const x = Cv.S(s), q = answers.reduce((a, r) => a + r.q, 0), max = answers.length * 3, e = (x.runs[sc.id] = x.runs[sc.id] || { tries: 0, best: 0 }); e.tries++; e.best = Math.max(e.best, max ? q / max : 0); ST.act.record(s, sc.lang === 'en' ? 'convoEn' : 'convoJa', { item: sc.id, ok: (max ? q / max : 0) >= 0.67, score: max ? q / max : 0 }); return { pct: max ? q / max : 0, e }; };

  const LABS = [['en', 'convoEn', 'English Conversation Lab', 'sma-conv-en', 'Dialoghi ramificati, domande impreviste, produzione scritta con controlli limitati sugli errori tipici e ripasso degli errori. Livello CEFR come riferimento didattico.'], ['ja', 'convoJa', 'Japanese Immersion Lab', 'sma-conv-ja', 'Scenari quotidiani (konbini, stazione, ristorante…) con riconoscimento, comprensione e produzione separati; scrittura in kana, kanji o romaji. Livello JLPT come riferimento didattico.']];
  LABS.forEach(([lang, id, title]) => { if (!M.pendingLabs.some(p => p.id === id)) M.pendingLabs.push({ id, title, milestone: 'M5' }); });
  /* un laboratorio compare come disponibile solo se ha davvero scenari validi (almeno 6) */
  Cv.refresh = () => LABS.forEach(([lang, id, title, view, desc]) => { if (Cv.scenarios.filter(s => s.lang === lang && Cv.validate(s).ok).length >= 6) M.registerLab({ id, title, view, desc, ready: true }); });
  LABS.forEach(([lang, id, title, view, desc]) => {
    V[view] = () => { const L = Cv.scenarios.filter(s => s.lang === lang), x = Cv.S(A.state), due = Cv.dueErrs(A.state).filter(e => e.lang === lang);
      return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + (lang === 'en' ? '💬 ' : '🗾 ') + E(title) + '</h1>' + (L.length ? '<div class="list">' + L.map(s => '<button class="item" data-act="smaCvOpen" data-id="' + E(s.id) + '"><span class="tx"><b>' + E(s.title) + '</b><span>' + E(s.level) + ' · ' + E(s.area) + (x.runs[s.id] ? ' · miglior risultato ' + Math.round(100 * x.runs[s.id].best) + '%' : '') + '</span></span></button>').join('') + '</div>' : '<p class="small mute">Nessuno scenario disponibile in questa versione.</p>') +
        (due.length ? '<div class="card"><h3>Ripasso errori (' + due.length + ')</h3>' + due.slice(0, 5).map(e => '<div class="item"><span class="tx"><b>' + E(e.bad) + '</b><span>' + E(e.msg) + '</span></span><span class="row" style="gap:4px"><button class="btn sm ghost" data-act="smaCvErr" data-id="' + E(e.id) + '" data-g="0">Non ricordo</button><button class="btn sm ghost" data-act="smaCvErr" data-id="' + E(e.id) + '" data-g="2">Ricordo</button></span></div>').join('') + '</div>' : ''); };
  });
  const games = {};
  V['sma-conv-play'] = p => {
    const s = Cv.byId(p.id), g = games[s.id] || (games[s.id] = { node: s.start, ans: [], res: null, built: [], showTr: false, showText: false, done: false }), n = s.nodes[g.node];
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(s.title) + '</h1><p class="small mute">' + E(s.level) + ' · ' + E(s.area) + (s.setting ? ' · ' + E(s.setting) : '') + '</p>';
    if (g.done) { return h + '<div class="card glow"><h2 style="margin:0">Risultato: ' + Math.round(100 * g.pct) + '%</h2><p class="small">' + E(Cv.LIMIT) + '</p></div><div class="row"><button class="btn" data-act="smaCvAgain" data-id="' + E(s.id) + '">Rigioca</button></div>'; }
    const hidden = n.listen && !g.showText;
    h += '<div class="card"><p class="small mute">Interlocutore' + (n.unexpected ? ' · domanda imprevista' : '') + '</p>' + (hidden ? '<p class="mute">Testo nascosto: ascolta, poi rispondi.</p>' : '<p><b' + (s.lang === 'ja' ? ' lang="ja"' : '') + '>' + (s.lang === 'ja' ? U.ruby(n.npc.t) : E(n.npc.t)) + '</b></p>') + '<div class="row" style="gap:6px"><button class="btn sm alt" data-act="smaCvSay" data-id="' + E(s.id) + '">🔊 Ascolta</button>' + (n.listen ? '<button class="btn sm ghost" data-act="smaCvText" data-id="' + E(s.id) + '">Mostra testo</button>' : '') + '<button class="btn sm ghost" data-act="smaCvTr" data-id="' + E(s.id) + '">Traduzione</button></div>' + (g.showTr ? '<p class="small mute">' + E(n.npc.tr) + '</p>' : '') + '</div>';
    if (n.end || !n.task) return h + '<div class="card"><button class="btn" data-act="smaCvFinish" data-id="' + E(s.id) + '">Concludi</button></div>';
    const t = n.task;
    if (g.res) { h += resHtml(s, n, g.res) + '<div class="row"><button class="btn" data-act="smaCvNext" data-id="' + E(s.id) + '">Continua</button></div>'; return h; }
    if (t.kind === 'choose') h += '<div class="card">' + (t.q ? '<p>' + E(t.q) + '</p>' : '') + '<div class="list">' + t.opts.map((o, i) => '<button class="item" data-act="smaCvPick" data-id="' + E(s.id) + '" data-o="' + i + '"><span class="tx"><b>' + (s.lang === 'ja' ? U.ruby(o.t) : E(o.t)) + '</b></span></button>').join('') + '</div></div>';
    else if (t.kind === 'produce') h += '<div class="card"><p>' + E(t.prompt) + '</p><textarea id="sma-cv-text" rows="3" style="width:100%" lang="' + s.lang + '" placeholder="' + (s.lang === 'ja' ? 'Scrivi in kana, kanji o romaji' : 'Write your answer') + '"></textarea><button class="btn" data-act="smaCvProduce" data-id="' + E(s.id) + '">Controlla</button></div>';
    else h += '<div class="card"><p>' + E(t.prompt || 'Costruisci la frase') + '</p><p class="small" style="min-height:28px"><b>' + E(g.built.join(s.lang === 'ja' ? '' : ' ')) + '</b></p><div class="row" style="gap:6px;flex-wrap:wrap">' + t.words.map((w, i) => '<button class="btn sm' + (g.used && g.used.indexOf(i) >= 0 ? ' ghost' : ' alt') + '" data-act="smaCvWord" data-id="' + E(s.id) + '" data-i="' + i + '">' + E(w) + '</button>').join('') + '</div><div class="row" style="gap:6px;margin-top:6px"><button class="btn sm ghost" data-act="smaCvUndo" data-id="' + E(s.id) + '">Annulla</button><button class="btn" data-act="smaCvOrder" data-id="' + E(s.id) + '">Controlla</button></div></div>';
    return h;
  };
  const resHtml = (s, n, r) => '<div class="card glow"><h3>' + ['Da rivedere', 'Parziale', 'Buona', 'Molto buona'][r.q] + '</h3>' + (r.why ? '<p class="small">' + E(r.why) + '</p>' : '') + (r.missing && r.missing.length ? '<p class="small">Mancava: ' + r.missing.map(E).join('; ') + '</p>' : '') + (r.flags && r.flags.length ? '<ul class="small">' + r.flags.map(f => '<li>' + E(f.msg) + '</li>').join('') + '</ul>' : '') + (r.model ? '<p class="small"><b>Risposta modello:</b> ' + E(r.model) + '</p>' : '') + (r.note ? '<p class="small mute">' + E(r.note) + '</p>' : '') + '</div>';
  X.smaCvOpen = el => { delete games[el.dataset.id]; A.go('sma-conv-play', { id: el.dataset.id }); };
  X.smaCvAgain = el => { delete games[el.dataset.id]; A.render(); };
  X.smaCvTr = el => { const g = games[el.dataset.id]; g.showTr = !g.showTr; A.render(); };
  X.smaCvText = el => { games[el.dataset.id].showText = true; A.render(); };
  X.smaCvSay = el => { const s = Cv.byId(el.dataset.id), n = s.nodes[games[s.id].node]; try { if (ST.audio && ST.audio.speak) ST.audio.speak(n.npc.t.replace(/\[([^|\]]+)\|[^\]]+\]/g, '$1'), { lang: s.lang === 'ja' ? 'ja-JP' : (A.state.profile.accents && A.state.profile.accents.en) || 'en-GB' }); else A.toast('Sintesi vocale non disponibile qui'); } catch (e) { A.toast('Sintesi vocale non disponibile qui'); } };
  const advance = (s, g, res, next) => { g.res = Object.assign(res, { next }); g.ans.push({ q: res.q }); A.render(); };
  X.smaCvPick = el => { const s = Cv.byId(el.dataset.id), g = games[s.id], o = s.nodes[g.node].task.opts[+el.dataset.o]; advance(s, g, { q: o.q, why: o.why }, o.next); };
  X.smaCvProduce = el => { const s = Cv.byId(el.dataset.id), g = games[s.id], t = s.nodes[g.node].task, txt = (document.getElementById('sma-cv-text') || {}).value || '', r = Cv.evalProduce(s.lang, t, txt); r.flags.filter(f => f.k !== 'info' && f.bad).forEach(f => Cv.saveErr(A.state, s.lang, f.bad, f.msg)); A.save(); advance(s, g, { q: r.score, missing: r.missing, flags: r.flags, model: t.model, note: r.short ? 'Risposta più breve del previsto.' : '' }, t.next); };
  X.smaCvWord = el => { const g = games[el.dataset.id]; g.used = g.used || []; if (g.used.indexOf(+el.dataset.i) < 0) { g.used.push(+el.dataset.i); g.built.push(Cv.byId(el.dataset.id).nodes[g.node].task.words[+el.dataset.i]); } A.render(); };
  X.smaCvUndo = el => { const g = games[el.dataset.id]; g.built.pop(); g.used.pop(); A.render(); };
  X.smaCvOrder = el => { const s = Cv.byId(el.dataset.id), g = games[s.id], t = s.nodes[g.node].task, r = Cv.evalOrder(s.lang, t, g.built); advance(s, g, { q: r.ok ? 3 : 0, why: r.ok ? 'Frase corretta.' : 'Non è fra le forme accettate.', model: t.model }, t.next); };
  X.smaCvNext = el => { const g = games[el.dataset.id], nx = g.res.next; g.node = nx; g.res = null; g.built = []; g.used = []; g.showTr = false; g.showText = false; if (nx == null) { g.done = true; g.pct = g.ans.reduce((a, r) => a + r.q, 0) / (g.ans.length * 3 || 1); Cv.finish(A.state, Cv.byId(el.dataset.id), g.ans); A.save(); } A.render(); };
  X.smaCvFinish = el => { const g = games[el.dataset.id]; g.done = true; g.pct = g.ans.reduce((a, r) => a + r.q, 0) / (g.ans.length * 3 || 1); Cv.finish(A.state, Cv.byId(el.dataset.id), g.ans); A.save(); A.render(); };
  X.smaCvErr = el => { Cv.gradeErr(A.state, el.dataset.id, +el.dataset.g); A.save(); A.render(); };
})(window.ST = window.ST || {});
