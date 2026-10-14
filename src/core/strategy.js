/* SkillTree — laboratori di strategia generati e verificati: equilibri di Nash, valore atteso, minimax e alpha-beta,
   numeri di Grundy, zaino, intervalli, cammini minimi, probabilità e problemi di scacchi controllati dal motore. */
(function (ST) {
  'use strict';
  const U = ST.util, SG = ST.strategy = {};
  SG.TYPES = ['payoff', 'ev', 'tree', 'grundy', 'knap', 'sched', 'path', 'prob', 'chess'];
  SG.LABEL = { payoff: 'Teoria dei giochi · equilibri di Nash', ev: 'Decisioni · valore atteso', tree: 'Giochi · minimax e alpha-beta', grundy: 'Giochi · numeri di Grundy', knap: 'Ottimizzazione · zaino', sched: 'Ottimizzazione · intervalli', path: 'Grafi · cammini minimi', prob: 'Probabilità nei giochi', chess: 'Scacchi · problemi verificati' };
  SG.MAXLV = 10;
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1)), gen = {};

  /* ---- modello di abilità (come i laboratori cyber) ---- */
  const store = s => (s.strategy = s.strategy || {});
  SG.rating = (s, t) => { const m = store(s)[t]; return m ? m.r : 1; };
  SG.level = (s, t) => U.clamp(Math.round(SG.rating(s, t)), 1, SG.MAXLV);
  SG.OFFSETS = [-1, -1, 0, 0, 0, 1, 1, 2];
  SG.pickLevel = (s, t, rng) => U.clamp(Math.round(SG.rating(s, t) + SG.OFFSETS[Math.floor((rng || U.rand)() * SG.OFFSETS.length)]), 1, SG.MAXLV);
  SG.record = (s, t, ok, ms, limitSec, d) => {
    const m = (store(s)[t] = store(s)[t] || { r: 1, n: 0, ok: 0, hist: [] }); let o = ok ? 1 : 0; if (o && limitSec && ms && ms > limitSec * 1000) o = 0.6;
    const dd = d != null ? d : SG.level(s, t), p = 1 / (1 + Math.exp(-(m.r - dd)));
    m.r = U.clamp(m.r + 0.4 * (o - p), 1, SG.MAXLV); m.n++; m.ok += ok ? 1 : 0; m.max = Math.max(m.max || 1, SG.level(s, t)); m.last = U.today(); m.hist.push(o); if (m.hist.length > 20) m.hist.shift();
  };
  SG.accuracy = (s, t) => { const m = store(s)[t]; return m && m.hist.length ? m.hist.slice(-10).reduce((a, b) => a + b, 0) / Math.min(10, m.hist.length) : null; };

  /* ---- Nash in strategie pure ---- */
  SG.pureNash = (A, B) => { const r = A.length, c = A[0].length, out = []; for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) { let ok = true; for (let k = 0; k < r; k++) if (A[k][j] > A[i][j]) ok = false; for (let k = 0; k < c; k++) if (B[i][k] > B[i][j]) ok = false; if (ok) out.push([i, j]); } return out; };
  gen.payoff = (lv, rng) => {
    const n = lv <= 4 ? 2 : 3, rn = ['A', 'B', 'C'], cn = ['X', 'Y', 'Z'];
    for (let a = 0; a < 200; a++) {
      const A = Array.from({ length: n }, () => Array.from({ length: n }, () => ri(rng, 0, 9))), B = Array.from({ length: n }, () => Array.from({ length: n }, () => ri(rng, 0, 9))), ne = SG.pureNash(A, B);
      const show = A.map((row, i) => rn[i] + ': ' + row.map((v, j) => '(' + v + ',' + B[i][j] + ')').join(' ')).join(' ⏐ ');
      const head = 'Giocatore 1 sceglie la riga, Giocatore 2 la colonna (' + cn.slice(0, n).join(', ') + '); in ogni cella (payoff G1, payoff G2). ' + show + '. ';
      if (ne.length === 1 && rng() < 0.6) { const lab = x => rn[x[0]] + cn[x[1]], correct = lab(ne[0]), pool = []; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i !== ne[0][0] || j !== ne[0][1]) pool.push(lab([i, j])); const o = U.shuffle([correct].concat(U.sample(pool, 3, rng)), rng); return { t: 'mc', mtype: 'payoff', q: head + 'Quale cella è l’unico equilibrio di Nash in strategie pure?', o, a: o.indexOf(correct), why: 'Equilibrio: nessuno dei due può migliorare cambiando da solo → ' + correct, timed: 90 }; }
      return { t: 'fill', mtype: 'payoff', num: true, q: head + 'Quanti equilibri di Nash in strategie pure ci sono? (0 se nessuno)', a: [String(ne.length)], why: 'Equilibri: ' + (ne.length ? ne.map(x => rn[x[0]] + cn[x[1]]).join(', ') : 'nessuno'), timed: 90, ne };
    }
  };

  /* ---- valore atteso ---- */
  gen.ev = (lv, rng) => {
    for (let a = 0; a < 200; a++) {
      const opts = Array.from({ length: 3 }, () => { const p = U.pick([10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90], rng), hi = ri(rng, 20, 60 + lv * 20), lo = ri(rng, -20, 30); return { p, hi, lo, ev: (p * hi + (100 - p) * lo) / 100 }; });
      const evs = opts.map(o => o.ev), mx = Math.max(...evs); if (evs.filter(x => Math.abs(x - mx) < 1e-9).length !== 1) continue;
      const txt = (o, i) => 'Opzione ' + 'ABC'[i] + ': ' + o.p + '% di ' + o.hi + ', altrimenti ' + o.lo, best = 'ABC'[evs.indexOf(mx)];
      if (lv >= 4 && rng() < 0.4) { const o = opts[0]; return { t: 'fill', mtype: 'ev', q: 'Valore atteso di: ' + o.p + '% di ' + o.hi + ', altrimenti ' + o.lo + ' (scrivi il numero, anche con decimali)', a: [String(o.ev), String(o.ev).replace('.', ',')], why: o.p / 100 + ' × ' + o.hi + ' + ' + (100 - o.p) / 100 + ' × ' + o.lo + ' = ' + o.ev, timed: 80 }; }
      return { t: 'mc', mtype: 'ev', q: 'Quale scelta ha il valore atteso più alto? ' + opts.map(txt).join(' ⏐ '), o: ['Opzione A', 'Opzione B', 'Opzione C', 'Sono equivalenti'], a: ['A', 'B', 'C'].indexOf(best), why: 'Valori attesi: ' + opts.map((o, i) => 'ABC'[i] + ' = ' + o.ev).join(', '), timed: 90, opts };
    }
  };

  /* ---- minimax e alpha-beta ---- */
  const mkTree = (depth, branch, rng) => depth === 0 ? ri(rng, 1, 9) : Array.from({ length: branch }, () => mkTree(depth - 1, branch, rng));
  const mm = (t, max) => Array.isArray(t) ? (max ? Math.max : Math.min)(...t.map(x => mm(x, !max))) : t;
  const abCount = (t, max, alpha, beta, ctr) => { if (!Array.isArray(t)) { ctr.n++; return t; } let v = max ? -1e9 : 1e9; for (const c of t) { const x = abCount(c, !max, alpha, beta, ctr); if (max) { v = Math.max(v, x); alpha = Math.max(alpha, v); } else { v = Math.min(v, x); beta = Math.min(beta, v); } if (alpha >= beta) break; } return v; };
  SG.minimax = mm; SG.alphaBeta = (t, max) => { const ctr = { n: 0 }, v = abCount(t, max, -1e9, 1e9, ctr); return { v, n: ctr.n }; };
  const fmtT = (t, max) => Array.isArray(t) ? (max ? 'Max' : 'Min') + '[' + t.map(x => fmtT(x, !max)).join(', ') + ']' : String(t);
  gen.tree = (lv, rng) => {
    const depth = lv <= 3 ? 2 : 3, branch = lv <= 6 ? 2 : 3, t = mkTree(depth, branch, rng), s = fmtT(t, true);
    if (lv >= 5 && rng() < 0.5) { const r = SG.alphaBeta(t, true); return { t: 'fill', mtype: 'tree', num: true, q: 'Albero di gioco (Max muove per primo; i figli si esplorano da sinistra a destra): ' + s + '. Con la potatura alpha-beta quante FOGLIE vengono valutate?', a: [String(r.n)], why: 'Valore della radice ' + r.v + '; foglie valutate: ' + r.n + ' (le altre sono potate)', timed: 150, tree: t }; }
    return { t: 'fill', mtype: 'tree', num: true, q: 'Albero di gioco (Max muove per primo): ' + s + '. Qual è il valore minimax della radice?', a: [String(mm(t, true))], why: 'Si risale dalle foglie: Min prende il minimo, Max il massimo → ' + mm(t, true), timed: 100, tree: t };
  };

  /* ---- numeri di Grundy per giochi di sottrazione ---- */
  SG.grundy = (S, n) => { const g = [0]; for (let i = 1; i <= n; i++) { const seen = new Set(S.filter(x => x <= i).map(x => g[i - x])); let m = 0; while (seen.has(m)) m++; g[i] = m; } return g; };
  gen.grundy = (lv, rng) => {
    const S = U.pick([[1, 2], [1, 3], [1, 2, 3], [2, 3], [1, 3, 4], [1, 4], [2, 5], [1, 2, 4]], rng), n = ri(rng, 6, 8 + lv * 2), g = SG.grundy(S, n);
    if (rng() < 0.5) return { t: 'fill', mtype: 'grundy', num: true, q: 'Gioco di sottrazione: da un mucchio di n oggetti si tolgono k oggetti con k in {' + S.join(', ') + '}; chi non può muovere perde. Qual è il numero di Grundy di n = ' + n + '?', a: [String(g[n])], why: 'g(0..' + n + ') = ' + g.join(', '), timed: 120 };
    const o = U.shuffle(['Posizione perdente (P): chi muove perde', 'Posizione vincente (N): chi muove vince', 'Dipende dal giocatore', 'Non si può stabilire'], rng), ans = g[n] === 0 ? o.indexOf('Posizione perdente (P): chi muove perde') : o.indexOf('Posizione vincente (N): chi muove vince');
    return { t: 'mc', mtype: 'grundy', q: 'Sottrazione {' + S.join(', ') + '}, n = ' + n + ', normal play. Chi muove per primo con gioco perfetto?', o, a: ans, why: 'g(n) = ' + g[n] + (g[n] === 0 ? ' → P' : ' → N'), timed: 100 };
  };

  /* ---- zaino 0/1, intervalli, cammini minimi ---- */
  SG.knap = (items, cap) => { const dp = new Array(cap + 1).fill(0); items.forEach(([w, v]) => { for (let c = cap; c >= w; c--) dp[c] = Math.max(dp[c], dp[c - w] + v); }); return dp[cap]; };
  gen.knap = (lv, rng) => { const n = 4 + Math.floor(lv / 3), items = Array.from({ length: n }, () => [ri(rng, 1, 6), ri(rng, 2, 15)]), cap = ri(rng, 8, 14), best = SG.knap(items, cap); return { t: 'fill', mtype: 'knap', num: true, q: 'Zaino di capacità ' + cap + '. Oggetti (peso, valore): ' + items.map(x => '(' + x[0] + ',' + x[1] + ')').join(' ') + '. Qual è il valore massimo trasportabile (ogni oggetto al più una volta)?', a: [String(best)], why: 'Programmazione dinamica: valore massimo = ' + best, timed: 150, items, cap }; };
  SG.sched = iv => { const s = iv.slice().sort((a, b) => a[1] - b[1]); let end = -1e9, n = 0; s.forEach(([a, b]) => { if (a >= end) { n++; end = b; } }); return n; };
  gen.sched = (lv, rng) => { const n = 5 + Math.floor(lv / 2), iv = Array.from({ length: n }, () => { const a = ri(rng, 0, 12), l = ri(rng, 1, 5); return [a, a + l]; }); return { t: 'fill', mtype: 'sched', num: true, q: 'Attività (inizio, fine): ' + iv.map(x => '[' + x[0] + ',' + x[1] + ')').join(' ') + '. Quante attività NON sovrapposte si possono svolgere al massimo? (intervalli semiaperti: una può iniziare quando un’altra finisce)', a: [String(SG.sched(iv))], why: 'Si ordina per fine e si prende sempre la prima compatibile → ' + SG.sched(iv), timed: 120, iv }; };
  SG.dijkstra = (n, edges, s, t) => { const d = new Array(n).fill(Infinity); d[s] = 0; const done = new Array(n).fill(false); for (let k = 0; k < n; k++) { let u = -1; for (let i = 0; i < n; i++) if (!done[i] && (u < 0 || d[i] < d[u])) u = i; if (u < 0 || d[u] === Infinity) break; done[u] = true; edges.forEach(([a, b, w]) => { if (a === u && d[u] + w < d[b]) d[b] = d[u] + w; if (b === u && d[u] + w < d[a]) d[a] = d[u] + w; }); } return d[t]; };
  gen.path = (lv, rng) => {
    const n = 5 + Math.floor(lv / 4), NM = 'ABCDEFG'; for (let a = 0; a < 100; a++) {
      const edges = []; for (let i = 1; i < n; i++) edges.push([ri(rng, 0, i - 1), i, ri(rng, 1, 9)]); for (let k = 0; k < n; k++) { const a1 = ri(rng, 0, n - 1), b1 = ri(rng, 0, n - 1); if (a1 !== b1 && !edges.some(e => (e[0] === a1 && e[1] === b1) || (e[0] === b1 && e[1] === a1))) edges.push([a1, b1, ri(rng, 1, 9)]); }
      const d = SG.dijkstra(n, edges, 0, n - 1); if (!isFinite(d)) continue;
      return { t: 'fill', mtype: 'path', num: true, q: 'Grafo non orientato, archi (peso): ' + edges.map(e => NM[e[0]] + '–' + NM[e[1]] + '(' + e[2] + ')').join(' ') + '. Qual è la lunghezza del cammino minimo da A a ' + NM[n - 1] + '?', a: [String(d)], why: 'Algoritmo di Dijkstra: distanza minima = ' + d, timed: 150, n, edges };
    }
  };

  /* ---- probabilità nei giochi ---- */
  gen.prob = (lv, rng) => {
    const kind = ri(rng, 0, lv >= 4 ? 2 : 1);
    if (kind === 0) { const k = ri(rng, 2, 12); let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === k) c++; return { t: 'fill', mtype: 'prob', num: true, q: 'Lanci due dadi a 6 facce. In quanti dei 36 esiti equiprobabili la somma è ' + k + '?', a: [String(c)], why: 'Si contano le coppie con somma ' + k + ': ' + c, timed: 60 }; }
    if (kind === 1) { const k = ri(rng, 4, 11); let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b >= k) c++; return { t: 'fill', mtype: 'prob', num: true, q: 'Due dadi: in quanti dei 36 esiti la somma è almeno ' + k + '?', a: [String(c)], why: 'Esiti con somma ≥ ' + k + ': ' + c, timed: 70 }; }
    const n = ri(rng, 3, 5), p = U.pick([20, 25, 50], rng); const binom = (N, K) => { let r = 1; for (let i = 1; i <= K; i++) r = r * (N - K + i) / i; return Math.round(r); };
    if (p === 50) { const k = ri(rng, 1, n - 1), c = binom(n, k); return { t: 'fill', mtype: 'prob', num: true, q: 'Lanci una moneta equa ' + n + ' volte. Quante sequenze diverse (su ' + Math.pow(2, n) + ') hanno esattamente ' + k + ' teste?', a: [String(c)], why: 'C(' + n + ',' + k + ') = ' + c, timed: 70 }; }
    const pr = Math.pow((100 - p) / 100, n); return { t: 'fill', mtype: 'prob', q: 'Un evento ha probabilità ' + p + '% a ogni tentativo (indipendenti). Probabilità che NON accada mai in ' + n + ' tentativi, in percentuale con una cifra decimale (scrivi il numero)?', a: [(pr * 100).toFixed(1), (pr * 100).toFixed(1).replace('.', ',')], why: '(1 − ' + p / 100 + ')^' + n + ' = ' + (pr * 100).toFixed(1) + '%', timed: 90 };
  };

  /* ---- scacchi: problemi controllati dal motore ---- */
  const CH = () => ST.chess, cache = {};
  SG.checkPuzzle = pz => {
    if (pz.id in cache) return cache[pz.id];
    let res = null; try {
      const c = CH(), p = c.parse(pz.fen), bk = p.b.filter(x => x === 'K').length, wk = p.b.filter(x => x === 'k').length;
      if (bk !== 1 || wk !== 1 || p.b.some((x, i) => (x === 'P' || x === 'p') && (i < 8 || i > 55)) || c.inCheck(p, p.turn === 'w' ? 'b' : 'w')) throw new Error('posizione illegale');
      const mv = c.findMove(p, pz.move); if (!mv) throw new Error('mossa illegale');
      const legal = c.legal(p).map(c.moveStr);
      if (pz.kind === 'mate1') { const mates = legal.filter(m => c.isMate(c.make(p, c.findMove(p, m)))); if (!mates.includes(pz.move)) throw new Error('non è matto in 1'); res = { legal, good: mates }; }
      else if (pz.kind === 'mate2') { if (c.mateIn(p, 1)) throw new Error('matto in 1 esistente'); const f = c.mateFirstMoves(p, 2); if (!f.includes(pz.move)) throw new Error('non è matto in 2'); res = { legal, good: f }; }
      else { const sc = c.scoreMoves(p, 3), base = (p.turn === 'w' ? 1 : -1) * c.material(p), best = Math.max(...Object.values(sc)), second = Math.max(...legal.filter(m => m !== pz.move).map(m => sc[m])); if (sc[pz.move] !== best || best - base < 200 || best - second < 150) throw new Error('tattica non univoca'); res = { legal, good: legal.filter(m => sc[m] >= best - 100) }; }
    } catch (e) { res = null; }
    return (cache[pz.id] = res);
  };
  SG.puzzles = () => (ST.content.chessPuzzles || []);
  gen.chess = (lv, rng) => {
    const all = SG.puzzles(), lvl = U.clamp(Math.ceil(lv / 2), 1, 5);
    if (!all.length) return gen.ev(lv, rng);
    for (let a = 0; a < 60; a++) {
      const cand = all.filter(x => Math.abs(x.level - lvl) <= 1), pz = U.pick(cand.length ? cand : all, rng), ok = SG.checkPuzzle(pz); if (!ok) continue;
      const bad = ok.legal.filter(m => !ok.good.includes(m)); if (bad.length < 3) continue;
      const lab = m => m.slice(0, 2) + '→' + m.slice(2, 4) + (m[4] ? '=' + m[4].toUpperCase() : ''), side = pz.fen.split(' ')[1] === 'w' ? 'Bianco' : 'Nero';
      const q = pz.kind === 'mate1' ? 'Tocca a ' + side + '. Trova il MATTO IN UNA mossa.' : pz.kind === 'mate2' ? 'Tocca a ' + side + '. Quale prima mossa forza il matto in DUE mosse?' : 'Tocca a ' + side + '. Quale mossa vince materiale?';
      const o = U.shuffle([lab(pz.move)].concat(U.sample(bad, 3, rng).map(lab)), rng);
      return { t: 'mc', mtype: 'chess', q, o, a: o.indexOf(lab(pz.move)), why: (pz.theme ? pz.theme + ': ' : '') + pz.why, timed: 120, fen: pz.fen };
    }
    return gen.ev(lv, rng);
  };

  SG.make = (type, level, rng) => { rng = rng || U.rand; const lv = U.clamp(Math.round(level), 1, SG.MAXLV), it = gen[type](lv, rng); it.mtype = type; it.lv = lv; return it; };
  SG.EST = { payoff: 60, ev: 45, tree: 55, grundy: 50, knap: 60, sched: 45, path: 60, prob: 35, chess: 60 };
  SG.session = (s, rng) => { rng = rng || U.rand; const last = t => (store(s)[t] && store(s)[t].last) || '0000', order = SG.TYPES.slice().sort((a, b) => last(a).localeCompare(last(b)) || (rng() - 0.5)), items = []; let t = 0, i = 0; while (t < 290 && items.length < 8) { const ty = order[i % 6]; i++; items.push(SG.make(ty, SG.pickLevel(s, ty, rng), rng)); t += SG.EST[ty] || 50; } return items; };
})(window.ST = window.ST || {});
