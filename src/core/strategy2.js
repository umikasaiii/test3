/* SkillTree — laboratori di strategia, parte 2: economia, conflitto (modelli astratti) e ottimizzazione avanzata.
   Ogni generatore produce istanze con soluzione unica; i risolutori sono verificati nei test con metodi indipendenti. */
(function (ST) {
  'use strict';
  const U = ST.util, SG = ST.strategy, gen = SG.gen, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const NEW = {
    cournot: ['Economia · oligopolio di Cournot', 60], npv: ['Economia · valore attuale netto', 60], auction: ['Economia · aste', 50], adv: ['Economia · vantaggio comparato', 50], price: ['Economia · prezzo ottimo', 55],
    lanch: ['Conflitto · legge quadratica di Lanchester', 60], logi: ['Conflitto · logistica e rifornimenti', 50], mixed: ['Giochi · strategia mista 2×2', 70],
    lp: ['Ottimizzazione · programmazione lineare', 80], cpm: ['Pianificazione · cammino critico', 65], mst: ['Grafi · albero di copertura minimo', 70], assign: ['Ottimizzazione · assegnamento', 70], flow: ['Grafi · flusso massimo', 80], tsp: ['Ottimizzazione · commesso viaggiatore', 80], coin: ['Programmazione dinamica · monete', 55]
  };
  Object.keys(NEW).forEach(k => { SG.TYPES.push(k); SG.LABEL[k] = NEW[k][0]; SG.EST[k] = NEW[k][1]; });
  SG.GROUPS = { 'Teoria dei giochi e decisioni': ['payoff', 'ev', 'tree', 'grundy', 'prob', 'mixed'], 'Economia': ['cournot', 'npv', 'auction', 'adv', 'price'], 'Conflitto e logistica': ['lanch', 'logi'], 'Ottimizzazione e grafi': ['knap', 'sched', 'path', 'coin', 'lp', 'cpm', 'mst', 'assign', 'flow', 'tsp'], 'Scacchi': ['chess'] };
  const fill = (type, q, ans, why, timed, extra) => Object.assign({ t: 'fill', mtype: type, num: true, q, a: [String(ans)], why, timed }, extra || {});
  const opts4 = (right, rng, wrong) => { const o = U.shuffle([right].concat(wrong), rng); return { o, a: o.indexOf(right) }; };

  /* ---- economia ---- */
  SG.cournot = (a, c, n) => { const q = (a - c) / (n + 1); return { q, price: a - n * q, profit: q * (a - n * q - c) }; };
  gen.cournot = (lv, rng) => {
    const n = lv <= 3 ? 2 : ri(rng, 2, 4), m = ri(rng, 2, 4 + lv), c = ri(rng, 0, 20), a = c + (n + 1) * m, r = SG.cournot(a, c, n), k = ri(rng, 0, 2);
    const head = 'Domanda di mercato P = ' + a + ' − Q (Q = quantità totale). ' + n + ' imprese identiche scelgono la quantità (Cournot), costo unitario costante ' + c + ', nessun costo fisso. ';
    if (k === 0) return fill('cournot', head + 'Quanto produce ciascuna impresa all’equilibrio?', r.q, 'q = (a − c)/(n + 1) = ' + (a - c) + '/' + (n + 1) + ' = ' + r.q, 90);
    if (k === 1) return fill('cournot', head + 'Qual è il prezzo di equilibrio?', r.price, 'Q = n·q = ' + n * r.q + ', P = ' + a + ' − ' + n * r.q + ' = ' + r.price, 90);
    return fill('cournot', head + 'Qual è il profitto di ciascuna impresa?', r.profit, 'q = ' + r.q + ', P = ' + r.price + ', profitto = q·(P − c) = ' + r.profit, 100);
  };
  SG.npv = (I, flows, r) => -I + flows.reduce((s, f, i) => s + f / Math.pow(1 + r / 100, i + 1), 0);
  gen.npv = (lv, rng) => {
    const mk = () => { const r = U.pick([10, 20, 25], rng), yrs = lv <= 3 ? 2 : 3, base = { 10: 11, 20: 6, 25: 5 }[r], flows = [], pv = []; for (let i = 1; i <= yrs; i++) { const x = ri(rng, 1, 3 + lv), f = Math.pow(base, i) * x; flows.push(f); pv.push(Math.pow(base, i) * x / Math.pow(1 + r / 100, i)); } return { r, flows, pv }; };
    if (lv >= 5 && rng() < 0.5) {
      const r = U.pick([10, 20, 25], rng), yrs = 3, base = { 10: 11, 20: 6, 25: 5 }[r], proj = () => { const flows = []; for (let i = 1; i <= yrs; i++) flows.push(Math.pow(base, i) * ri(rng, 1, 5)); const pvs = flows.map((f, i) => Math.round(f / Math.pow(1 + r / 100, i + 1))), I = ri(rng, 5, 60); return { flows, I, npv: Math.round(SG.npv(I, flows, r)) }; };
      for (let a = 0; a < 80; a++) { const A = proj(), B = proj(); if (A.npv === B.npv) continue; const best = A.npv > B.npv ? 'A' : 'B', txt = (x, l) => 'Progetto ' + l + ': costo ' + x.I + ', incassi ' + x.flows.join(', ') + ' (anni 1,2,3)';
        return { t: 'mc', mtype: 'npv', q: 'Tasso di sconto ' + r + '%. ' + txt(A, 'A') + '. ' + txt(B, 'B') + '. Quale ha VAN maggiore?', o: ['Progetto A', 'Progetto B', 'Sono uguali', 'Non si può stabilire'], a: best === 'A' ? 0 : 1, why: 'VAN A = ' + A.npv + ', VAN B = ' + B.npv, timed: 130 }; }
    }
    const x = mk(), I = ri(rng, 5, 40 + lv * 5), v = Math.round(SG.npv(I, x.flows, x.r));
    return fill('npv', 'Investimento iniziale ' + I + '. Incassi a fine anno: ' + x.flows.join(', ') + ' (anni 1, 2' + (x.flows.length > 2 ? ', 3' : '') + '). Tasso di sconto ' + x.r + '%. Qual è il VAN (numero intero, negativo se perdita)?', v, 'VAN = −' + I + ' + ' + x.pv.map(z => Math.round(z)).join(' + ') + ' = ' + v, 120);
  };
  gen.auction = (lv, rng) => {
    if (lv >= 4 && rng() < 0.5) { const n = ri(rng, 2, 5), v = n * ri(rng, 3, 20); return fill('auction', 'Asta al primo prezzo con ' + n + ' offerenti. I valori sono indipendenti e uniformi tra 0 e 100. L’equilibrio simmetrico è offrire v·(n−1)/n. Se il tuo valore è ' + v + ', quanto offri?', v * (n - 1) / n, 'Offerta = ' + v + ' × ' + (n - 1) + '/' + n + ' = ' + v * (n - 1) / n, 90); }
    const n = ri(rng, 3, 5 + (lv > 5 ? 1 : 0)), vals = []; while (vals.length < n) { const x = ri(rng, 10, 99); if (!vals.includes(x)) vals.push(x); }
    const s = vals.slice().sort((a, b) => b - a), who = 'ABCDEF'; if (rng() < 0.5) return fill('auction', 'Asta a busta chiusa al secondo prezzo (Vickrey). Valori privati: ' + vals.map((x, i) => who[i] + '=' + x).join(', ') + '. Tutti offrono il proprio valore. Quanto paga il vincitore?', s[1], 'Vince il valore più alto (' + s[0] + ') e paga la seconda offerta: ' + s[1], 60);
    const sur = s[0] - s[1]; return fill('auction', 'Asta al secondo prezzo (Vickrey), tutti offrono il proprio valore. Valori: ' + vals.map((x, i) => who[i] + '=' + x).join(', ') + '. Qual è il surplus (valore − prezzo) del vincitore?', sur, 'Vince ' + s[0] + ', paga ' + s[1] + ', surplus ' + sur, 70);
  };
  gen.adv = (lv, rng) => {
    for (let a = 0; a < 200; a++) {
      const bx = ri(rng, 1, 4), by = ri(rng, 1, 4), ax = bx * ri(rng, 1, 4), ay = by * ri(rng, 1, 4), ocx = ax / bx, ocy = ay / by; if (ocx === ocy) continue;
      const head = 'Ore per produrre una unità. Paese X: grano ' + ax + ', tessuto ' + bx + '. Paese Y: grano ' + ay + ', tessuto ' + by + '. ';
      if (rng() < 0.5) return fill('adv', head + 'Quante unità di tessuto sacrifica X per produrre 1 unità di grano (costo opportunità)?', ocx, 'Costo opportunità = ' + ax + '/' + bx + ' = ' + ocx, 70);
      const w = ocx < ocy ? 'X' : 'Y', r = opts4('Paese ' + w, rng, ['Paese ' + (w === 'X' ? 'Y' : 'X'), 'Entrambi uguali', 'Nessuno']);
      return { t: 'mc', mtype: 'adv', q: head + 'Chi ha il vantaggio comparato nel grano?', o: r.o, a: r.a, why: 'Costo opportunità del grano: X = ' + ocx + ', Y = ' + ocy + ' tessuti; chi sacrifica meno ha il vantaggio comparato.', timed: 80 };
    }
  };
  gen.price = (lv, rng) => {
    for (let a = 0; a < 200; a++) {
      const b = U.pick([1, 2, 4], rng), A = ri(rng, 30, 80 + lv * 3), c = ri(rng, 4, 25); if ((A + c) % 2 || c >= A) continue;
      const P = (A + c) / 2, profit = b * (A - c) * (A - c) / 4, head = 'Un monopolista affronta la domanda Q = ' + b * A + ' − ' + b + '·P e ha costo unitario costante ' + c + ' (nessun costo fisso). ';
      return rng() < 0.5 ? fill('price', head + 'Qual è il prezzo che massimizza il profitto?', P, 'Ricavo marginale = costo marginale → P = (' + A + ' + ' + c + ')/2 = ' + P, 90) : fill('price', head + 'Qual è il profitto massimo?', profit, 'P = ' + P + ', Q = ' + b * (A - P) + ', profitto = (P − c)·Q = ' + profit, 100);
    }
  };

  /* ---- conflitto (modelli matematici astratti) e logistica ---- */
  const TRI = [[5, 3, 4], [13, 5, 12], [17, 8, 15], [25, 7, 24], [10, 6, 8], [26, 10, 24], [41, 9, 40], [29, 20, 21], [37, 12, 35], [15, 9, 12]];
  gen.lanch = (lv, rng) => {
    const [h, p, q] = U.pick(TRI, rng), m = ri(rng, 1, 3 + Math.floor(lv / 2)), k = lv >= 5 && p % 2 === 0 && rng() < 0.5 ? 4 : 1, A = h * m, B = k === 1 ? p * m : p * m / 2, left = q * m;
    const eff = k === 1 ? 'Le unità dei due schieramenti hanno la stessa efficacia individuale.' : 'Ogni unità di B ha un tasso di fuoco 4 volte maggiore di quello di una unità di A (β = 4α).';
    return fill('lanch', 'Modello di Lanchester (fuoco a distanza, legge quadratica): lo schieramento A parte con ' + A + ' unità, B con ' + B + '. ' + eff + ' Combattono fino all’annientamento di uno dei due; vince A. Quante unità restano ad A?', left, k === 1 ? 'Legge quadratica: A² − B² = R² → ' + A * A + ' − ' + B * B + ' = ' + left * left + ', R = ' + left : 'A² − (β/α)·B² = R² → ' + A * A + ' − 4·' + B * B + ' = ' + left * left + ', R = ' + left, 120);
  };
  gen.logi = (lv, rng) => {
    if (rng() < 0.5) { const u = ri(rng, 1, 4), C = u * 2 * ri(rng, 4, 20 + lv); return fill('logi', 'Un veicolo di rifornimento ha un serbatoio da ' + C + ' litri e consuma ' + u + ' litri ogni 10 km. Nessun deposito intermedio. Qual è la distanza massima a cui può spingersi per tornare alla base con il serbatoio vuoto (km, andata e ritorno)? Rispondi con la distanza massima di sola andata.', C / u * 10 / 2, 'Percorso totale = ' + C + '/' + u + '×10 = ' + C / u * 10 + ' km; sola andata = metà = ' + C / u * 10 / 2, 80); }
    const p = U.pick([10, 20, 25, 50], rng), base = { 10: 1000, 20: 125, 25: 64, 50: 8 }[p], k = ri(rng, 2, 3), Q = base * ri(rng, 1, 3 + lv), r = Q * Math.pow(1 - p / 100, k);
    return fill('logi', 'Una catena di rifornimento ha ' + k + ' tappe. A ogni tappa si perde il ' + p + '% del carico per consumi e perdite. Partono ' + Q + ' unità: quante arrivano al fronte?', r, Q + ' × ' + (100 - p) / 100 + '^' + k + ' = ' + r, 90);
  };
  SG.mixed = (a, b, c, d) => { const den = a + d - b - c; return { p: (d - c) / den, v: (a * d - b * c) / den }; };
  gen.mixed = (lv, rng) => {
    for (let t = 0; t < 4000; t++) {
      const a = ri(rng, 0, 9), b = ri(rng, 0, 9), c = ri(rng, 0, 9), d = ri(rng, 0, 9), den = a + d - b - c; if (!den) continue;
      const rowMin = [Math.min(a, b), Math.min(c, d)], colMax = [Math.max(a, c), Math.max(b, d)]; if (Math.max(...rowMin) >= Math.min(...colMax)) continue;
      const r = SG.mixed(a, b, c, d); if (!Number.isInteger(r.v) || r.p <= 0 || r.p >= 1) continue;
      return fill('mixed', 'Gioco a somma zero: il Giocatore Riga (massimizza) ha payoff [[' + a + ', ' + b + '], [' + c + ', ' + d + ']] (righe R1, R2; colonne C1, C2). Non esiste punto di sella. Qual è il valore del gioco con strategie miste ottime?', r.v, 'p = (d − c)/(a + d − b − c); valore = (ad − bc)/(a + d − b − c) = ' + r.v, 140);
    }
    return gen.payoff(lv, rng);
  };

  /* ---- ottimizzazione avanzata ---- */
  SG.lp = (cx, cy, cons) => {
    const lines = cons.concat([[-1, 0, 0], [0, -1, 0]]), pts = []; for (let i = 0; i < lines.length; i++) for (let j = i + 1; j < lines.length; j++) {
      const [a1, b1, r1] = lines[i], [a2, b2, r2] = lines[j], det = a1 * b2 - a2 * b1; if (!det) continue; const x = (r1 * b2 - r2 * b1) / det, y = (a1 * r2 - a2 * r1) / det;
      if (x >= -1e-9 && y >= -1e-9 && cons.every(([a, b, r]) => a * x + b * y <= r + 1e-9)) pts.push([x, y]);
    }
    let best = null; pts.forEach(p => { const z = cx * p[0] + cy * p[1]; if (!best || z > best.z + 1e-9) best = { x: p[0], y: p[1], z, n: 1 }; else if (Math.abs(z - best.z) < 1e-9) best.n++; });
    return best;
  };
  gen.lp = (lv, rng) => {
    for (let t = 0; t < 400; t++) {
      const cons = Array.from({ length: lv <= 4 ? 2 : 3 }, () => [ri(rng, 1, 5), ri(rng, 1, 5), ri(rng, 12, 40)]), cx = ri(rng, 1, 9), cy = ri(rng, 1, 9), b = SG.lp(cx, cy, cons);
      if (!b || b.n !== 1 || !Number.isInteger(b.x) || !Number.isInteger(b.y) || b.x === 0 || b.y === 0) continue;
      const txt = cons.map(([a, bb, r]) => a + 'x + ' + bb + 'y ≤ ' + r).join('; ');
      return fill('lp', 'Massimizza Z = ' + cx + 'x + ' + cy + 'y con i vincoli ' + txt + '; x ≥ 0, y ≥ 0. Qual è il valore massimo di Z?', b.z, 'Il massimo è su un vertice della regione ammissibile: (x, y) = (' + b.x + ', ' + b.y + '), Z = ' + b.z, 150);
    }
    return gen.knap(lv, rng);
  };
  SG.cpm = tasks => { const ef = {}; tasks.forEach(t => { ef[t.id] = Math.max(0, ...t.pre.map(p => ef[p])) + t.d; }); return Math.max(...Object.values(ef)); };
  SG.cpmFloat = (tasks, id) => { const ef = {}, es = {}; tasks.forEach(t => { es[t.id] = Math.max(0, ...t.pre.map(p => ef[p])); ef[t.id] = es[t.id] + t.d; }); const T = Math.max(...Object.values(ef)), lf = {}; for (let i = tasks.length - 1; i >= 0; i--) { const t = tasks[i], succ = tasks.filter(x => x.pre.includes(t.id)); lf[t.id] = succ.length ? Math.min(...succ.map(x => lf[x.id] - x.d)) : T; } return lf[id] - ef[id]; };
  gen.cpm = (lv, rng) => {
    const n = 5 + Math.min(3, Math.floor(lv / 3)), L = 'ABCDEFGH', tasks = []; for (let i = 0; i < n; i++) { const pre = []; if (i) { pre.push(L[ri(rng, 0, i - 1)]); if (i > 2 && rng() < 0.5) { const q = L[ri(rng, 0, i - 1)]; if (!pre.includes(q)) pre.push(q); } } tasks.push({ id: L[i], d: ri(rng, 1, 9), pre }); }
    const txt = tasks.map(t => t.id + '(' + t.d + 'gg' + (t.pre.length ? ', dopo ' + t.pre.join('+') : '') + ')').join('; '), T = SG.cpm(tasks);
    if (lv >= 5 && rng() < 0.5) { const sl = tasks.map(t => [t.id, SG.cpmFloat(tasks, t.id)]).filter(x => x[1] > 0); if (sl.length) { const [id, f] = U.pick(sl, rng); return fill('cpm', 'Attività (durata, precedenze): ' + txt + '. Di quanti giorni può ritardare l’attività ' + id + ' senza allungare il progetto?', f, 'Float = inizio massimo − inizio minimo = ' + f + ' (durata progetto ' + T + ')', 150, { tasks }); } }
    return fill('cpm', 'Attività (durata, precedenze): ' + txt + '. Attività senza precedenze partono subito, più attività in parallelo sono permesse. Qual è la durata minima del progetto in giorni?', T, 'Cammino critico = ' + T + ' giorni', 120, { tasks });
  };
  SG.mst = (n, edges) => { const par = Array.from({ length: n }, (_, i) => i), f = x => par[x] === x ? x : (par[x] = f(par[x])); let w = 0, k = 0; edges.slice().sort((a, b) => a[2] - b[2]).forEach(([a, b, c]) => { const x = f(a), y = f(b); if (x !== y) { par[x] = y; w += c; k++; } }); return k === n - 1 ? w : null; };
  gen.mst = (lv, rng) => {
    const n = 5 + Math.floor(lv / 5), NM = 'ABCDEFG'; for (let t = 0; t < 200; t++) {
      const ws = U.shuffle(Array.from({ length: 30 }, (_, i) => i + 1), rng), edges = [], seen = new Set(); for (let i = 1; i < n; i++) { const j = ri(rng, 0, i - 1); edges.push([j, i, ws.pop()]); seen.add(j + '-' + i); }
      for (let k = 0; k < n + 1; k++) { const a = ri(rng, 0, n - 1), b = ri(rng, 0, n - 1), lo = Math.min(a, b), hi = Math.max(a, b); if (lo !== hi && !seen.has(lo + '-' + hi)) { seen.add(lo + '-' + hi); edges.push([lo, hi, ws.pop()]); } }
      const w = SG.mst(n, edges); if (w == null) continue;
      return fill('mst', 'Rete di cavi da collegare: ' + edges.map(e => NM[e[0]] + '–' + NM[e[1]] + '(' + e[2] + ')').join(' ') + '. Qual è il costo minimo per collegare tutti i ' + n + ' nodi?', w, 'Kruskal: si aggiungono gli archi per costo crescente evitando cicli → ' + w, 130, { n, edges });
    }
  };
  SG.assign = M => { const n = M.length, memo = new Map(), go = (i, mask) => { if (i === n) return 0; const k = i * 64 + mask; if (memo.has(k)) return memo.get(k); let b = Infinity; for (let j = 0; j < n; j++) if (!(mask & (1 << j))) b = Math.min(b, M[i][j] + go(i + 1, mask | (1 << j))); memo.set(k, b); return b; }; return go(0, 0); };
  gen.assign = (lv, rng) => {
    const n = lv <= 4 ? 3 : 4, M = Array.from({ length: n }, () => Array.from({ length: n }, () => ri(rng, 1, 9 + lv))), best = SG.assign(M);
    return fill('assign', 'Assegna ' + n + ' compiti a ' + n + ' persone (uno ciascuno) per minimizzare il costo totale. Matrice dei costi (righe = persone, colonne = compiti): ' + M.map(r => '[' + r.join(' ') + ']').join(' ') + '. Qual è il costo minimo?', best, 'Il minimo tra tutte le ' + (n === 3 ? 6 : 24) + ' assegnazioni è ' + best, 140, { M });
  };
  SG.flow = (n, edges, s, t) => { const cap = Array.from({ length: n }, () => new Array(n).fill(0)); edges.forEach(([a, b, c]) => { cap[a][b] += c; }); let flow = 0; for (;;) { const prev = new Array(n).fill(-1); prev[s] = s; const q = [s]; while (q.length && prev[t] < 0) { const u = q.shift(); for (let v = 0; v < n; v++) if (prev[v] < 0 && cap[u][v] > 0) { prev[v] = u; q.push(v); } } if (prev[t] < 0) return flow; let b = Infinity; for (let v = t; v !== s; v = prev[v]) b = Math.min(b, cap[prev[v]][v]); for (let v = t; v !== s; v = prev[v]) { cap[prev[v]][v] -= b; cap[v][prev[v]] += b; } flow += b; } };
  gen.flow = (lv, rng) => {
    const mid = lv <= 5 ? 3 : 4, n = mid + 2, NM = ['S'].concat('ABCD'.slice(0, mid).split(''), ['T']); for (let t = 0; t < 200; t++) {
      const edges = []; for (let i = 1; i <= mid; i++) { edges.push([0, i, ri(rng, 2, 9)]); edges.push([i, n - 1, ri(rng, 2, 9)]); } for (let k = 0; k < mid; k++) { const a = ri(rng, 1, mid), b = ri(rng, 1, mid); if (a < b && !edges.some(e => e[0] === a && e[1] === b)) edges.push([a, b, ri(rng, 1, 7)]); }
      const f = SG.flow(n, edges, 0, n - 1); return fill('flow', 'Rete di condutture, capacità sugli archi orientati: ' + edges.map(e => NM[e[0]] + '→' + NM[e[1]] + '(' + e[2] + ')').join(' ') + '. Qual è il flusso massimo da S a T?', f, 'Si aumenta il flusso lungo cammini finché possibile (o si cerca il taglio minimo): ' + f, 150, { n, edges });
    }
  };
  SG.tsp = D => { const n = D.length, full = 1 << n, dp = Array.from({ length: full }, () => new Array(n).fill(Infinity)); dp[1][0] = 0; for (let m = 1; m < full; m++) for (let i = 0; i < n; i++) if (dp[m][i] < Infinity && (m & 1)) for (let j = 0; j < n; j++) if (!(m & (1 << j))) dp[m | (1 << j)][j] = Math.min(dp[m | (1 << j)][j], dp[m][i] + D[i][j]); let b = Infinity; for (let i = 1; i < n; i++) b = Math.min(b, dp[full - 1][i] + D[i][0]); return b; };
  gen.tsp = (lv, rng) => {
    const n = lv <= 6 ? 5 : 6, D = Array.from({ length: n }, () => new Array(n).fill(0)), NM = 'ABCDEF'; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) D[i][j] = D[j][i] = ri(rng, 1, 9), 0;
    const pairs = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) pairs.push(NM[i] + NM[j] + '=' + D[i][j]);
    return fill('tsp', 'Distanze (simmetriche) tra ' + n + ' città: ' + pairs.join(' ') + '. Qual è la lunghezza del giro più breve che parte da A, visita ogni città una volta e torna ad A?', SG.tsp(D), 'Tra tutti i ' + (n === 5 ? 24 : 120) + ' giri possibili il minimo è ' + SG.tsp(D), 160, { D });
  };
  SG.coins = (coins, T) => { const dp = new Array(T + 1).fill(Infinity); dp[0] = 0; for (let x = 1; x <= T; x++) coins.forEach(c => { if (c <= x) dp[x] = Math.min(dp[x], dp[x - c] + 1); }); return dp[T]; };
  gen.coin = (lv, rng) => {
    const sys = [[1, 3, 4], [1, 5, 6], [1, 4, 6], [1, 7, 10], [1, 5, 8, 9], [1, 6, 10], [1, 3, 9, 10], [2, 5, 8], [1, 15, 20]];
    for (let t = 0; t < 200; t++) {
      const coins = U.pick(sys, rng), T = ri(rng, 6, 12 + lv * 3), opt = SG.coins(coins, T); let g = 0, r = T; coins.slice().sort((a, b) => b - a).forEach(c => { const k = Math.floor(r / c); g += k; r -= k * c; }); if (r || !isFinite(opt)) continue; if (g === opt && lv >= 3 && rng() < 0.8) continue;
      return fill('coin', 'Monete di valore ' + coins.join(', ') + ' (quantità illimitate). Qual è il numero minimo di monete per comporre esattamente ' + T + '?', opt, 'Programmazione dinamica: dp[' + T + '] = ' + opt + (g > opt ? ' (la scelta golosa darebbe ' + g + ')' : ''), 90);
    }
  };
})(window.ST = window.ST || {});
