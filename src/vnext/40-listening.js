/* vNext M5 — Anime/Listening Lab: ascolto di materiale LOCALE scelto dall'utente (audio/video + sottotitoli SRT/VTT/ASS).
   Nessun file viene caricato in rete né salvato dall'app: si usa un URL temporaneo del file scelto; vengono salvate soltanto le parole
   e le frasi che l'utente decide di conservare (con ripasso dilazionato). L'utente è responsabile di usare solo materiale di cui ha il diritto.
   Nessuna valutazione automatica della pronuncia: lo shadowing prevede registrazione e confronto MANUALE con autovalutazione dichiarata come tale. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const L = M.listen = { speeds: [0.5, 0.75, 1, 1.25], modes: { none: 'Senza sottotitoli', ja: 'Con sottotitoli giapponesi', reveal: 'Rivela dopo l’ascolto' } };

  /* ---- sottotitoli ---- */
  const tc = (h, m, s, ms) => (+h || 0) * 3600 + (+m) * 60 + (+s) + (+(String(ms || 0).padEnd(3, '0').slice(0, 3))) / 1000;
  L.clean = t => String(t).replace(/\{[^}]*\}/g, '').replace(/<[^>]+>/g, '').replace(/\\N/gi, '\n').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();
  L.parseSub = (text, name) => {
    text = String(text).replace(/^﻿/, '').replace(/\r/g, ''); const out = [];
    if (/^\s*\[Script Info\]/m.test(text) || /\.(ass|ssa)$/i.test(name || '')) { // ASS: Dialogue: layer,start,end,style,name,ml,mr,mv,effect,text
      text.split('\n').forEach(l => { const m = /^Dialogue:\s*[^,]*,(\d+):(\d\d):(\d\d)[.,](\d+),(\d+):(\d\d):(\d\d)[.,](\d+),(?:[^,]*,){6}(.*)$/.exec(l); if (m) { const t = L.clean(m[9]); if (t) out.push({ start: tc(m[1], m[2], m[3], m[4].padEnd(3, '0')), end: tc(m[5], m[6], m[7], m[8].padEnd(3, '0')), text: t }); } });
    } else {
      text.split(/\n{2,}/).forEach(b => {
        const ls = b.split('\n').filter(x => x.trim() !== ''), i = ls.findIndex(x => /-->/.test(x)); if (i < 0) return;
        const m = /(?:(\d+):)?(\d\d):(\d\d)[.,](\d{1,3})\s*-->\s*(?:(\d+):)?(\d\d):(\d\d)[.,](\d{1,3})/.exec(ls[i]); if (!m) return;
        const t = L.clean(ls.slice(i + 1).join('\n')); if (t) out.push({ start: tc(m[1], m[2], m[3], m[4]), end: tc(m[5], m[6], m[7], m[8]), text: t });
      });
    }
    return out.filter(c => c.end > c.start).sort((a, b) => a.start - b.start).map((c, i) => Object.assign(c, { i }));
  };
  /* segmenti brevi (<1,2 s) uniti al successivo se vicino (<0,6 s); mai oltre 12 s per segmento */
  L.segment = cues => {
    const out = [];
    cues.forEach(c => { const p = out[out.length - 1]; if (p && (p.end - p.start < 1.2) && c.start - p.end < 0.6 && c.end - p.start <= 12) { p.end = c.end; p.text += '\n' + c.text; } else out.push({ start: c.start, end: c.end, text: c.text }); });
    return out.map((c, i) => Object.assign(c, { i }));
  };
  L.fixedSegments = (dur, win) => { const o = []; for (let t = 0, i = 0; t < dur; t += win, i++) o.push({ i, start: t, end: Math.min(dur, t + win), text: '' }); return o; };

  /* ---- domande di comprensione generate dal testo (cloze a scelta multipla; distrattori della stessa scrittura) ---- */
  const KIND = w => /^[ァ-ヺー]+$/.test(w) ? 'k' : /^[぀-ゟ]+$/.test(w) ? 'h' : 'j';
  L.tokens = t => (String(t).match(/[一-龯々〆ヵヶ]+[぀-ゟ]{0,2}|[ァ-ヺー]{2,}|[ぁ-ゟ]{3,}/g) || []);
  L.cloze = (segs, idx, rng) => {
    rng = rng || U.rand; const seg = segs[idx], toks = L.tokens(seg.text).filter(w => w.length >= 2 || /[一-龯]/.test(w)); if (!toks.length) return null;
    const ans = toks[Math.floor(rng() * toks.length)], k = KIND(ans), pool = [];
    segs.forEach(s => L.tokens(s.text).forEach(w => { if (w !== ans && KIND(w) === k && pool.indexOf(w) < 0) pool.push(w); }));
    if (pool.length < 3) return null;
    const ds = U.shuffle(pool.slice(), rng).slice(0, 3), opts = U.shuffle(ds.concat(ans), rng);
    return { q: seg.text.replace(ans, '＿＿＿'), a: opts.indexOf(ans), o: opts, answer: ans };
  };

  /* ---- parole e frasi salvate con ripasso dilazionato (stesso motore SRS dell'app) ---- */
  L.S = s => { const x = M.S(s).listen = M.S(s).listen || { saved: {}, log: [] }; x.saved = x.saved || {}; x.log = x.log || []; return x; };
  L.save = (s, text, note) => { text = String(text).trim(); if (!text) return null; const id = 'L:' + text; const x = L.S(s); if (!x.saved[id]) x.saved[id] = ST.srs.newCard({ kind: 'listen', lang: 'ja', text, note: String(note || '').slice(0, 200), due: U.addDays(U.today(), 1), reps: 1, last: U.today(), interval: 1, step: 1, state: 'learning' }); return x.saved[id]; };
  L.due = s => ST.srs.dueList(L.S(s).saved, U.today()).map(c => Object.assign({ id: c.id }, L.S(s).saved[c.id]));
  L.grade = (s, id, g) => { const x = L.S(s); if (!x.saved[id]) return null; x.saved[id] = Object.assign(x.saved[id], ST.srs.review(x.saved[id], g)); return x.saved[id]; };
  L.logSession = (s, min, segs, shadow) => { const x = L.S(s); x.log.push({ d: U.today(), min: Math.round(min * 10) / 10, segs, shadow }); if (x.log.length > 200) x.log.shift(); return x.log; };

  /* ---- interfaccia: l'elemento media vive fuori dai re-render (rimuoverlo dal DOM lo metterebbe in pausa) ---- */
  const cur = { name: '', kind: '', el: null, url: null, segs: [], cues: [], i: 0, speed: 1, loops: 1, done: 0, mode: 'none', cloze: null, rec: null, mine: null, t0: 0, segsPlayed: 0, shadow: 0, msg: '' };
  L.cur = cur;
  M.registerLab({ id: 'listening', title: 'Anime / Listening Lab', view: 'sma-listen', desc: 'Ascolto di file locali con sottotitoli, ripetizione di singole battute, velocità regolabile, shadowing e parole da ripassare.', ready: true });
  const seg = () => cur.segs[cur.i];
  const fmt = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');
  const paint = () => {
    const c = document.getElementById('sma-cue'), m = document.getElementById('sma-meta'); if (!c || !m) return; const sg = seg();
    m.textContent = sg ? 'Segmento ' + (cur.i + 1) + ' di ' + cur.segs.length + ' · ' + fmt(sg.start) + '–' + fmt(sg.end) + ' · velocità ' + cur.speed + '× · ripetizioni ' + cur.done + '/' + cur.loops : '';
    const show = sg && sg.text && (cur.mode === 'ja' || (cur.mode === 'reveal' && cur.revealed));
    c.innerHTML = sg && sg.text ? (show ? E(sg.text).replace(/\n/g, '<br>') : '<span class="mute">Sottotitolo nascosto</span>') : '<span class="mute">Nessun sottotitolo per questo segmento.</span>';
    if (show) c.innerHTML += '<div class="row" style="gap:4px;flex-wrap:wrap;margin-top:6px">' + L.tokens(sg.text).map(w => '<button class="btn sm ghost" data-act="smaLiSaveW" data-w="' + E(w) + '">＋ ' + E(w) + '</button>').join('') + '<button class="btn sm ghost" data-act="smaLiSaveW" data-w="' + E(sg.text.split('\n')[0]) + '">＋ intera frase</button></div>';
  };
  let raf = 0;
  const stopLoop = () => { cancelAnimationFrame(raf); raf = 0; };
  const tick = () => {
    const el = cur.el, sg = seg(); if (!el || !sg) return stopLoop();
    if (el.currentTime >= sg.end - 0.03) { el.pause(); cur.done++; cur.segsPlayed++; if (cur.done < cur.loops) { el.currentTime = sg.start; el.play().catch(() => { }); } else { paint(); return stopLoop(); } paint(); }
    raf = requestAnimationFrame(tick);
  };
  L.playSeg = () => { const el = cur.el, sg = seg(); if (!el || !sg) return; stopLoop(); cur.done = 0; cur.revealed = false; el.currentTime = sg.start; el.playbackRate = cur.speed; try { el.preservesPitch = true; el.mozPreservesPitch = true; el.webkitPreservesPitch = true; } catch (e) { /* non supportato */ } const p = el.play(); if (p && p.catch) p.catch(() => { cur.msg = 'Il browser ha bloccato la riproduzione: tocca di nuovo «Ascolta».'; }); raf = requestAnimationFrame(tick); paint(); };
  L.load = (file, subText, subName) => {
    if (cur.url) URL.revokeObjectURL(cur.url); stopLoop();
    const isVideo = /^video\//.test(file.type) || /\.(mp4|webm|mkv|mov)$/i.test(file.name), el = document.createElement(isVideo ? 'video' : 'audio');
    el.preload = 'metadata'; el.controls = true; el.style.width = '100%'; el.setAttribute('playsinline', ''); cur.url = URL.createObjectURL(file); el.src = cur.url;
    Object.assign(cur, { name: file.name, kind: isVideo ? 'video' : 'audio', el, cues: [], segs: [], i: 0, done: 0, cloze: null, mine: null, msg: '', revealed: false });
    if (subText) { cur.cues = L.parseSub(subText, subName); cur.segs = L.segment(cur.cues); if (!cur.segs.length) cur.msg = 'Sottotitoli non riconosciuti (formati: SRT, VTT, ASS): uso segmenti da 5 secondi.'; }
    el.addEventListener('loadedmetadata', () => { if (!cur.segs.length) { cur.segs = L.fixedSegments(el.duration || 0, 5); } A.render(); });
    el.addEventListener('error', () => { cur.msg = 'Il browser non riesce a leggere questo formato (' + (file.type || 'sconosciuto') + '). Prova con MP3, M4A, OGG, MP4 o WebM.'; cur.el = null; A.render(); });
    cur.t0 = Date.now(); cur.segsPlayed = 0; cur.shadow = 0;
  };
  V['sma-listen'] = () => {
    const s = A.state, due = L.due(s), sv = Object.keys(L.S(s).saved).length;
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🎧 Anime / Listening Lab</h1><p class="small mute">Scegli un tuo file audio o video e, se li hai, i sottotitoli (SRT, VTT o ASS). Il file resta sul tuo dispositivo: non viene caricato né salvato; vengono conservate solo le parole che decidi di salvare. Usa solo materiale di cui hai il diritto di fruire. L’app non valuta la pronuncia: nello shadowing confronti tu, a orecchio.</p>';
    h += '<div class="card"><h3>1 · File</h3><p class="small">Audio/video <input id="sma-f-media" type="file" accept="audio/*,video/*"></p><p class="small">Sottotitoli (facoltativo) <input id="sma-f-sub" type="file" accept=".srt,.vtt,.ass,.ssa,text/plain"></p><button class="btn" data-act="smaLiLoad">Carica</button>' + (cur.msg ? '<p class="warn small">' + E(cur.msg) + '</p>' : '') + '</div>';
    if (cur.el) {
      h += '<div class="card"><h3>2 · Ascolto · ' + E(cur.name) + '</h3><div id="sma-media"></div><p class="small mute" id="sma-meta"></p><div id="sma-cue" class="card" style="min-height:48px"></div>' +
        '<div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn" data-act="smaLiPlay">▶ Ascolta</button><button class="btn alt sm" data-act="smaLiNav" data-d="-1">‹ Prec.</button><button class="btn alt sm" data-act="smaLiNav" data-d="1">Succ. ›</button><button class="btn sm ghost" data-act="smaLiReveal">Mostra sottotitolo</button></div>' +
        '<p class="small">Velocità ' + L.speeds.map(v => '<button class="btn sm' + (cur.speed === v ? '' : ' ghost') + '" data-act="smaLiSpeed" data-v="' + v + '">' + v + '×</button>').join(' ') + '</p>' +
        '<p class="small">Ripeti ' + [1, 3, 5].map(v => '<button class="btn sm' + (cur.loops === v ? '' : ' ghost') + '" data-act="smaLiLoops" data-v="' + v + '">' + v + '×</button>').join(' ') + '</p>' +
        '<p class="small">Modalità ' + Object.keys(L.modes).map(k => '<button class="btn sm' + (cur.mode === k ? '' : ' ghost') + '" data-act="smaLiMode" data-v="' + k + '">' + L.modes[k] + '</button>').join(' ') + '</p></div>';
      h += '<div class="card"><h3>3 · Shadowing (confronto manuale)</h3><p class="small mute">Ascolta il segmento, poi registrati mentre lo ripeti e riascolta le due voci. Non c’è un punteggio automatico: l’autovalutazione conta come autodichiarata.</p><div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn sm" data-act="smaLiRec">' + (cur.rec ? '■ Ferma' : '● Registra') + '</button>' + (cur.mine ? '<button class="btn sm alt" data-act="smaLiMine">▶ La mia voce</button>' : '') + '</div>' +
        '<p class="small">Quanto ti sembra vicina all’originale? ' + [['0', 'Lontana'], ['1', 'Così così'], ['2', 'Buona'], ['3', 'Molto']].map(r => '<button class="btn sm ghost" data-act="smaLiSelf" data-v="' + r[0] + '">' + r[1] + '</button>').join(' ') + '</p></div>';
      h += '<div class="card"><h3>4 · Domanda di comprensione</h3>' + (cur.cloze ? '<p>' + E(cur.cloze.q) + '</p><div class="list">' + cur.cloze.o.map((o, i) => '<button class="item" data-act="smaLiAns" data-i="' + i + '"><span class="tx"><b>' + E(o) + '</b></span></button>').join('') + '</div>' : '<p class="small mute">Genera una domanda con una parola mancante dal testo dei sottotitoli (servono sottotitoli giapponesi).</p>') + '<button class="btn alt sm" data-act="smaLiCloze">Nuova domanda</button></div>';
    }
    h += '<div class="card"><h3>Parole salvate</h3><p class="small mute">' + sv + ' salvate · ' + due.length + ' da ripassare oggi.</p>' + (due.length ? '<div class="list">' + due.slice(0, 5).map(c => '<div class="item"><span class="tx"><b>' + E(c.text) + '</b><span>' + E(c.note || '') + '</span></span><span class="row" style="gap:4px">' + [['0', 'No'], ['2', 'Sì']].map(r => '<button class="btn sm ghost" data-act="smaLiGrade" data-id="' + E(c.id) + '" data-g="' + r[0] + '">' + r[1] + '</button>').join('') + '</span></div>').join('') + '</div>' : '') + '</div>';
    return h;
  };
  ST.after['sma-listen'] = el => { const slot = el.querySelector('#sma-media'); if (slot && cur.el) slot.appendChild(cur.el); paint(); };
  const readText = f => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result)); r.onerror = rej; r.readAsText(f); });
  X.smaLiLoad = async () => {
    const f = (document.getElementById('sma-f-media') || {}).files && document.getElementById('sma-f-media').files[0], sf = (document.getElementById('sma-f-sub') || {}).files && document.getElementById('sma-f-sub').files[0];
    if (!f) { A.toast('Scegli un file audio o video'); return; }
    let t = null; if (sf) { try { t = await readText(sf); } catch (e) { cur.msg = 'Impossibile leggere i sottotitoli.'; } }
    L.load(f, t, sf && sf.name); A.render();
  };
  X.smaLiPlay = () => L.playSeg();
  X.smaLiNav = el => { cur.i = U.clamp(cur.i + +el.dataset.d, 0, Math.max(0, cur.segs.length - 1)); cur.done = 0; cur.revealed = false; if (cur.el) cur.el.pause(); stopLoop(); paint(); };
  X.smaLiSpeed = el => { cur.speed = +el.dataset.v; if (cur.el) cur.el.playbackRate = cur.speed; A.render(); };
  X.smaLiLoops = el => { cur.loops = +el.dataset.v; A.render(); };
  X.smaLiMode = el => { cur.mode = el.dataset.v; A.render(); };
  X.smaLiReveal = () => { cur.revealed = true; if (cur.mode === 'none') cur.mode = 'reveal'; paint(); };
  X.smaLiSaveW = el => { const sg = seg(); L.save(A.state, el.dataset.w, sg && sg.text ? sg.text.split('\n')[0] : ''); A.save(); A.toast('Salvata: ' + el.dataset.w); };
  X.smaLiGrade = el => { L.grade(A.state, el.dataset.id, +el.dataset.g); A.save(); A.render(); };
  X.smaLiCloze = () => { cur.cloze = L.cloze(cur.segs, cur.i); if (!cur.cloze) A.toast('Servono sottotitoli giapponesi con abbastanza parole'); A.render(); };
  X.smaLiAns = el => { const c = cur.cloze; if (!c) return; const ok = +el.dataset.i === c.a; A.toast(ok ? 'Corretto' : 'Era: ' + c.answer); cur.cloze = null; try { A.xp(ok ? 1 : 0, 'sma:listen:cloze'); } catch (e) { /* ignora */ } A.render(); };
  X.smaLiSelf = el => { cur.shadow++; L.logSession(A.state, (Date.now() - cur.t0) / 60000, cur.segsPlayed, +el.dataset.v); A.save(); A.toast('Registrato come autovalutazione (' + el.dataset.v + '/3)'); };
  X.smaLiRec = async () => {
    if (cur.rec) { cur.rec.stop(); return; }
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)) { A.toast('Registrazione non supportata da questo browser'); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true }), mr = new MediaRecorder(stream), ch = [];
      mr.ondataavailable = e => ch.push(e.data); mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); cur.mine = URL.createObjectURL(new Blob(ch, { type: mr.mimeType || 'audio/webm' })); cur.rec = null; A.render(); };
      cur.rec = mr; mr.start(); A.render();
    } catch (e) { A.toast('Microfono non disponibile o permesso negato'); }
  };
  X.smaLiMine = () => { if (cur.mine) new Audio(cur.mine).play().catch(() => { }); };
})(window.ST = window.ST || {});
