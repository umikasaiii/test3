/* vNext M7b — Programming & AI Lab. Il codice dell'utente gira in un Web Worker isolato (nessun DOM, rete disattivata, timeout di 2,5 s;
   in mancanza di Worker il laboratorio lo dichiara e non esegue nulla). Solo JavaScript: Python NON è disponibile perché nel file non c'è un
   runtime Python e il laboratorio non lo simula. I test sono automatici; i test nascosti verificano che non si stia solo adattando il codice
   agli esempi visibili. L'AI è rappresentata da esperimenti piccoli e veri (perceptron, discesa del gradiente, k-NN), non da un modello linguistico. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const P = M.proglab = { exercises: [], TIMEOUT: 2500, LANGS: { js: true, python: false } };
  P.add = x => { P.exercises.push(x); return x; };
  P.byId = id => P.exercises.find(x => x.id === id);

  /* ---- esecutore: stessa funzione nel Worker e (solo per i test di Node) in locale ---- */
  const RUNNER = `function runTests(msg){
    var logs=[],traces=[],stringify=function(x){try{return typeof x==='string'?x:JSON.stringify(x)}catch(e){return String(x)}};
    var con={log:function(){if(logs.length<60)logs.push(Array.prototype.map.call(arguments,stringify).join(' '))}};
    var trace=function(l,v){if(traces.length<400)traces.push({l:String(l),v:stringify(v)})};
    var norm=function(v){if(Array.isArray(v))return v.map(norm);if(v&&typeof v==='object'){var o={};Object.keys(v).sort().forEach(function(k){o[k]=norm(v[k])});return o}return v};
    var res={ok:false,error:null,logs:logs,traces:traces,tests:[],ms:0},t0=Date.now(),fn;
    try{fn=new Function('console','trace','"use strict";\\n'+msg.code+'\\n;return typeof '+msg.fn+"==='function'?"+msg.fn+':undefined;')(con,trace);}
    catch(e){res.error=(e&&e.name?e.name+': ':'')+(e&&e.message||e);res.ms=Date.now()-t0;return res}
    if(!fn){res.error='Non trovo la funzione '+msg.fn+'. Definiscila con questo nome.';res.ms=Date.now()-t0;return res}
    msg.tests.forEach(function(t,i){var r={i:i,hidden:!!t.hidden,pass:false,got:null,error:null};
      try{var out=fn.apply(null,JSON.parse(JSON.stringify(t.args)));r.got=norm(out);r.pass=JSON.stringify(r.got)===JSON.stringify(norm(t.expect));if(r.got===undefined)r.got=null}
      catch(e){r.error=(e&&e.name?e.name+': ':'')+(e&&e.message||e)}
      res.tests.push(r)});
    res.ok=res.tests.every(function(t){return t.pass});res.ms=Date.now()-t0;return res}`;
  P.RUNNER = RUNNER;
  P.runLocal = (code, fn, tests) => new Function(RUNNER + '; return runTests;')()({ code, fn, tests }); // solo test automatici in Node: nessuna isolazione
  P.workerSupported = () => typeof Worker !== 'undefined' && typeof Blob !== 'undefined' && typeof URL !== 'undefined' && !!URL.createObjectURL;
  P.run = (code, fn, tests) => new Promise(resolve => {
    if (!P.workerSupported()) return resolve({ ok: false, error: 'Questo browser non supporta l’esecuzione isolata (Web Worker): per sicurezza il codice non viene eseguito.', tests: [], logs: [], traces: [], ms: 0 });
    const src = 'self.fetch=undefined;self.XMLHttpRequest=undefined;self.WebSocket=undefined;self.importScripts=undefined;' + RUNNER + ';onmessage=function(e){postMessage(runTests(e.data))};', url = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
    let w; try { w = new Worker(url); } catch (e) { URL.revokeObjectURL(url); return resolve({ ok: false, error: 'Impossibile avviare l’ambiente isolato.', tests: [], logs: [], traces: [], ms: 0 }); }
    const done = r => { clearTimeout(tm); w.terminate(); URL.revokeObjectURL(url); resolve(r); };
    const tm = setTimeout(() => done({ ok: false, error: 'Tempo scaduto (' + P.TIMEOUT / 1000 + ' s): il codice è in un ciclo infinito o è troppo lento.', tests: [], logs: [], traces: [], ms: P.TIMEOUT }), P.TIMEOUT);
    w.onmessage = e => done(e.data); w.onerror = e => done({ ok: false, error: 'Errore: ' + (e.message || 'sconosciuto'), tests: [], logs: [], traces: [], ms: 0 });
    w.postMessage({ code, fn, tests: tests });
  });
  P.validate = x => { const er = []; if (!x.id || !x.title || !x.fn || !x.prompt || !x.starter || !x.solution) er.push('campi obbligatori'); if (!(x.tests || []).length || x.tests.filter(t => !t.hidden).length < 2 || x.tests.filter(t => t.hidden).length < 1) er.push('servono almeno 2 test visibili e 1 nascosto'); if (!(x.hints || []).length) er.push('indizi mancanti');
    if (!er.length) { const s = P.runLocal(x.solution, x.fn, x.tests); if (!s.ok) er.push('la soluzione di riferimento non supera i test'); const t = P.runLocal(x.starter, x.fn, x.tests); if (t.ok) er.push('il codice iniziale supera già tutti i test'); } return { ok: !er.length, errors: er }; };

  /* ---- visualizzazione dell'esecuzione: algoritmi con frame (ordinamento a bolle, ricerca binaria) ---- */
  P.viz = {
    bubble: arr => { const a = arr.slice(), fr = [{ arr: a.slice(), note: 'Inizio' }]; for (let i = 0; i < a.length - 1; i++) for (let j = 0; j < a.length - 1 - i; j++) { const sw = a[j] > a[j + 1]; if (sw) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; } fr.push({ arr: a.slice(), i: j, note: 'Confronto posizioni ' + j + ' e ' + (j + 1) + (sw ? ': scambio' : ': nessuno scambio') }); } return fr; },
    bsearch: (arr, x) => { const fr = []; let lo = 0, hi = arr.length - 1; while (lo <= hi) { const mid = (lo + hi) >> 1; fr.push({ arr, lo, hi, mid, note: 'Cerco ' + x + ': intervallo [' + lo + ',' + hi + '], centro ' + mid + ' (valore ' + arr[mid] + ')' }); if (arr[mid] === x) { fr.push({ arr, lo, hi, mid, note: 'Trovato in posizione ' + mid }); return fr; } if (arr[mid] < x) lo = mid + 1; else hi = mid - 1; } fr.push({ arr, lo, hi, mid: -1, note: 'Non presente' }); return fr; }
  };
  /* ---- esperimenti introduttivi di AI (veri, piccoli, deterministici) ---- */
  const AI = M.ai = {};
  AI.DATA = { and: [[[0, 0], 0], [[0, 1], 0], [[1, 0], 0], [[1, 1], 1]], or: [[[0, 0], 0], [[0, 1], 1], [[1, 0], 1], [[1, 1], 1]], xor: [[[0, 0], 0], [[0, 1], 1], [[1, 0], 1], [[1, 1], 0]] };
  AI.perceptron = (data, o) => { o = Object.assign({ epochs: 25, lr: 0.1 }, o); let w = [0, 0], b = 0; const hist = []; for (let e = 0; e < o.epochs; e++) { data.forEach(([x, y]) => { const p = (w[0] * x[0] + w[1] * x[1] + b) > 0 ? 1 : 0, er = y - p; w = [w[0] + o.lr * er * x[0], w[1] + o.lr * er * x[1]]; b += o.lr * er; }); hist.push(data.filter(([x, y]) => ((w[0] * x[0] + w[1] * x[1] + b) > 0 ? 1 : 0) === y).length / data.length); } return { w, b, hist, acc: hist[hist.length - 1] }; };
  AI.gd = (pts, lr, steps) => { let m = 0, c = 0; const loss = []; const n = pts.length; for (let s = 0; s < steps; s++) { let gm = 0, gc = 0, L = 0; pts.forEach(([x, y]) => { const e = m * x + c - y; L += e * e; gm += 2 * e * x; gc += 2 * e; }); loss.push(L / n); m -= lr * gm / n; c -= lr * gc / n; if (!isFinite(m) || !isFinite(c)) break; } return { m, c, loss, diverged: !isFinite(loss[loss.length - 1]) || loss[loss.length - 1] > loss[0] * 10 }; };
  AI.knn = (train, x, k) => { const d = train.map(([p, y]) => ({ d: Math.hypot(p[0] - x[0], p[1] - x[1]), y })).sort((a, b) => a.d - b.d).slice(0, k), v = {}; d.forEach(o => { v[o.y] = (v[o.y] || 0) + 1; }); return Object.keys(v).sort((a, b) => v[b] - v[a] || (a < b ? -1 : 1))[0]; };
  AI.POINTS = [[1, 3.1], [2, 4.9], [3, 7.2], [4, 8.8], [5, 11.1]]; // ~ y = 2x + 1
  AI.KNN = [[[1, 1], 'A'], [[1, 2], 'A'], [[2, 1], 'A'], [[6, 6], 'B'], [[6, 7], 'B'], [[7, 6], 'B'], [[4, 4], 'A'], [[5, 4], 'B']];

  M.registerLab({ id: 'proglab', title: 'Programming & AI Lab', view: 'sma-prog', desc: 'Editor, esecuzione isolata in JavaScript con test automatici (anche nascosti), debugging, tracce e tre esperimenti di AI. Python non disponibile.', ready: true });

  /* ---- interfaccia ---- */
  const st = {};
  const stat = () => ((M.S(A.state).tech = M.S(A.state).tech || {}).prog = (M.S(A.state).tech.prog || {}));
  V['sma-prog'] = () => '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>⌨️ Programming &amp; AI Lab</h1><p class="warn small">Esecuzione solo in JavaScript, in un ambiente isolato (Web Worker, senza rete, con tempo massimo). Python non è disponibile: il file non contiene un runtime Python e non lo simula. ' + (P.workerSupported() ? '' : '<b>Questo browser non supporta l’esecuzione isolata: gli esercizi si possono leggere ma non eseguire.</b>') + '</p>' +
    '<div class="card"><h3>Esercizi</h3><div class="list">' + P.exercises.map(x => '<button class="item" data-act="smaProgOpen" data-id="' + E(x.id) + '"><span class="tx"><b>' + E(x.title) + '</b><span>' + E(x.level) + ' · ' + E(x.topic) + '</span></span>' + (stat()[x.id] && stat()[x.id].solved ? '<span class="tag good">risolto</span>' : '') + '</button>').join('') + '</div></div>' +
    '<div class="card"><h3>Visualizza l’esecuzione</h3><div class="row" style="gap:6px"><button class="btn alt" data-act="smaProgViz" data-k="bubble">Ordinamento a bolle</button><button class="btn alt" data-act="smaProgViz" data-k="bsearch">Ricerca binaria</button></div></div>' +
    '<div class="card"><h3>Esperimenti di AI</h3><div class="list"><button class="item" data-act="go" data-view="sma-ai"><span class="tx"><b>Perceptron, discesa del gradiente, k-NN</b><span>Tre piccoli algoritmi di apprendimento, con i loro limiti</span></span></button></div></div>';
  V['sma-prog-play'] = p => {
    const x = P.byId(p.id), s = st[x.id] || (st[x.id] = { code: x.starter, res: null, runs: 0, hint: 0, shown: false });
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(x.title) + '</h1><div class="card"><p>' + E(x.prompt) + '</p><p class="small mute">Funzione richiesta: <code>' + E(x.fn) + '</code> · ' + E(x.level) + ' · <code>console.log(...)</code> e <code>trace(etichetta, valore)</code> mostrano i valori durante l’esecuzione.</p></div>' +
      '<textarea id="sma-code" spellcheck="false" autocapitalize="off" rows="14" style="width:100%;font-family:monospace;font-size:13px;background:#070b1a;color:#dfe6ff;border:1px solid #2a3560;border-radius:10px;padding:8px;tab-size:2">' + E(s.code) + '</textarea>' +
      '<div class="row" style="gap:6px;margin:8px 0"><button class="btn" data-act="smaProgRun" data-id="' + E(x.id) + '">▶ Esegui i test</button><button class="btn sm ghost" data-act="smaProgHint" data-id="' + E(x.id) + '">Indizio (' + s.hint + '/' + x.hints.length + ')</button><button class="btn sm ghost" data-act="smaProgReset" data-id="' + E(x.id) + '">Codice iniziale</button>' + (s.runs >= 3 ? '<button class="btn sm ghost" data-act="smaProgSol" data-id="' + E(x.id) + '">Mostra una soluzione</button>' : '') + '</div>';
    if (s.hint) h += '<div class="card"><b class="small">Indizi</b><ul class="small">' + x.hints.slice(0, s.hint).map(t => '<li>' + E(t) + '</li>').join('') + '</ul></div>';
    if (s.shown) h += '<div class="card"><b class="small">Una soluzione (usarla conta come aiuto)</b><pre class="small" style="white-space:pre-wrap">' + E(x.solution) + '</pre></div>';
    if (s.res) { const r = s.res; h += '<div class="card ' + (r.ok ? 'glow' : '') + '"><h3>' + (r.ok ? '✔ Tutti i test superati' : r.error ? '✘ ' + E(r.error) : '✘ Alcuni test non passano') + '</h3>' + (r.tests.length ? r.tests.map(t => '<p class="small" style="margin:3px 0">' + (t.pass ? '✔' : '✘') + ' test ' + (t.i + 1) + (t.hidden ? ' (nascosto)' : '') + (t.pass || t.hidden ? '' : ': ' + (t.error ? E(t.error) : 'atteso ' + E(JSON.stringify(x.tests[t.i].expect)) + ', ottenuto ' + E(JSON.stringify(t.got)))) + '</p>').join('') : '') + (r.logs.length ? '<p class="small mute">Output:</p><pre class="small">' + E(r.logs.join('\n')) + '</pre>' : '') + (r.traces.length ? '<p class="small mute">Tracce:</p><pre class="small">' + E(r.traces.slice(0, 40).map(t => t.l + ' = ' + t.v).join('\n')) + '</pre>' : '') + '<p class="small mute">' + r.ms + ' ms</p>' + (r.ok ? '<p class="small">' + E(x.explain) + '</p>' : '') + '</div>'; }
    return h;
  };
  ST.after['sma-prog-play'] = el => { const t = el.querySelector('#sma-code'); if (!t) return; t.addEventListener('input', () => { const s = st[A.view().p.id]; if (s) s.code = t.value; }); t.addEventListener('keydown', e => { if (e.key === 'Tab') { e.preventDefault(); const a = t.selectionStart; t.value = t.value.slice(0, a) + '  ' + t.value.slice(t.selectionEnd); t.selectionStart = t.selectionEnd = a + 2; t.dispatchEvent(new Event('input')); } }); };
  X.smaProgOpen = el => { A.go('sma-prog-play', { id: el.dataset.id }); };
  X.smaProgRun = async el => {
    const x = P.byId(el.dataset.id), s = st[x.id], t = document.getElementById('sma-code'); if (t) s.code = t.value; s.runs++; s.res = await P.run(s.code, x.fn, x.tests);
    if (s.res.ok) { const S = stat(); if (!S[x.id] || !S[x.id].solved) { S[x.id] = { solved: true, d: U.today(), runs: s.runs, hints: s.hint, solution: s.shown }; try { A.xp(s.hint || s.shown ? 2 : 3, 'sma:prog:' + x.id); } catch (e) { /* ignora */ } A.save(); } } A.render();
  };
  X.smaProgHint = el => { const x = P.byId(el.dataset.id), s = st[x.id]; if (s.hint < x.hints.length) s.hint++; const t = document.getElementById('sma-code'); if (t) s.code = t.value; A.render(); };
  X.smaProgReset = el => { const x = P.byId(el.dataset.id); st[x.id].code = x.starter; st[x.id].res = null; A.render(); };
  X.smaProgSol = el => { const s = st[el.dataset.id]; s.shown = true; const t = document.getElementById('sma-code'); if (t) s.code = t.value; A.render(); };
  let vz = null;
  V['sma-viz'] = () => { const f = vz.frames[vz.i]; return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + (vz.k === 'bubble' ? 'Ordinamento a bolle' : 'Ricerca binaria') + '</h1><div class="card"><p class="small mute">Passo ' + (vz.i + 1) + ' di ' + vz.frames.length + '</p><div class="row" style="gap:4px;flex-wrap:wrap">' + f.arr.map((v, k) => '<span class="tag' + ((f.i === k || f.i + 1 === k) && vz.k === 'bubble' ? ' acc' : '') + (vz.k === 'bsearch' && k === f.mid ? ' good' : '') + '" style="' + (vz.k === 'bsearch' && (k < f.lo || k > f.hi) ? 'opacity:.35' : '') + '">' + v + '</span>').join('') + '</div><p>' + E(f.note) + '</p><div class="row" style="gap:6px"><button class="btn alt sm" data-act="smaVizGo" data-d="-1">‹</button><button class="btn alt sm" data-act="smaVizGo" data-d="1">›</button></div></div>'; };
  X.smaProgViz = el => { vz = { k: el.dataset.k, i: 0, frames: el.dataset.k === 'bubble' ? P.viz.bubble([5, 2, 4, 1, 3]) : P.viz.bsearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23) }; A.go('sma-viz', {}); };
  X.smaVizGo = el => { vz.i = U.clamp(vz.i + +el.dataset.d, 0, vz.frames.length - 1); A.render(); };
  V['sma-ai'] = () => {
    const rows = ['and', 'or', 'xor'].map(k => { const r = AI.perceptron(AI.DATA[k], { epochs: 25 }); return '<p class="small"><b>' + k.toUpperCase() + '</b>: accuratezza dopo 25 passaggi <b>' + Math.round(100 * r.acc) + '%</b>' + (r.acc < 1 ? ' — un perceptron singolo non può imparare questa funzione (non è separabile con una retta).' : '') + '</p>'; }).join('');
    const g = [0.001, 0.03, 0.1].map(lr => { const r = AI.gd(AI.POINTS, lr, 60); return '<p class="small">lr <b>' + lr + '</b>: ' + (r.diverged ? '<b>diverge</b> (l’errore cresce invece di diminuire)' : 'm = ' + r.m.toFixed(2) + ', c = ' + r.c.toFixed(2) + ', errore finale ' + r.loss[r.loss.length - 1].toExponential(1)) + '</p>'; }).join('');
    const kk = [1, 3, 5].map(k => '<p class="small">k = ' + k + ': il punto (4,5) è classificato <b>' + AI.knn(AI.KNN, [4, 5], k) + '</b></p>').join('');
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>Esperimenti di AI</h1><p class="small mute">Algoritmi veri e minuscoli, calcolati qui sul dispositivo: non sono modelli linguistici e non «capiscono» nulla. Servono a vedere come si apprende dai dati e dove si rompe.</p>' +
      '<div class="card"><h3>1 · Perceptron</h3>' + rows + '<p class="small mute">Cambia la funzione: AND e OR si imparano, XOR no. È il limite storico che portò alle reti a più strati.</p></div><div class="card"><h3>2 · Regressione con discesa del gradiente</h3><p class="small mute">Dati vicini a y = 2x + 1. Il passo (lr) conta: troppo piccolo è lento, troppo grande diverge.</p>' + g + '</div><div class="card"><h3>3 · k-NN</h3><p class="small mute">Il vicino più vicino può essere un caso isolato; con k più grande vota la maggioranza.</p>' + kk + '</div>';
  };
})(window.ST = window.ST || {});
