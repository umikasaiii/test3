/* SkillTree — allenamento mentale: generatori dei tipi aggiunti (intelligenza fluida, enigmi verificati, strategia,
   predizione/calibrazione, reattività, velocità percettiva, coppie associate) e varianti difficilissime (livelli 11–20)
   dei tipi base. Gli enigmi (cavalieri e furfanti, crittoaritmetica, sudoku, Nim, tris) sono risolti da un solver
   al momento della generazione: ogni esercizio ha soluzione unica / risposta ottima verificata. */
(function (ST) {
  'use strict';
  const U = ST.util, MN = ST.mental;
  const G = MN.gen, H = MN.hard;
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const uniq4 = (correct, cands, fmt) => { const set = [correct]; cands.forEach(c => { if (set.length < 4 && !set.includes(c)) set.push(c); }); let k = 1; while (set.length < 4) { const c = correct + k * (k % 2 ? 1 : -1); k++; if (!set.includes(c)) set.push(c); } return set.map(fmt || String); };
  const mcItem = (type, q, correctTxt, opts, rng, why, timed) => { const o = U.shuffle(opts, rng); return { t: 'mc', mtype: type, q, o, a: o.indexOf(correctTxt), why, timed }; };
  const WORDS = ['albero', 'tavolo', 'finestra', 'montagna', 'orologio', 'chitarra', 'cucchiaio', 'bicicletta', 'lampada', 'giardino', 'ponte', 'nuvola', 'scarpa', 'libro', 'cavallo', 'fiume', 'pennello', 'sedia', 'campana', 'farfalla', 'zaino', 'specchio', 'barca', 'formaggio', 'telefono', 'candela', 'tenda', 'moneta', 'ombrello', 'valigia'];

  /* ---------------- Matrici numeriche (intelligenza fluida) ---------------- */
  G.matrix = (lv, rng) => {
    let g, rule;
    const t = lv <= 4 ? 1 : lv <= 8 ? 2 : lv <= 12 ? 3 : lv <= 16 ? 4 : 5;
    if (t === 1) { const d = ri(rng, 2, 3 + lv), e = ri(rng, 2, 9), s = ri(rng, 1, 9); g = [0, 1, 2].map(r => [0, 1, 2].map(c => s + r * e + c * d)); rule = 'ogni riga cresce di ' + d + '; ogni riga parte ' + e + ' più in alto'; }
    else if (t === 2) { const op = U.pick(['+', '−', '×'], rng); g = [0, 1, 2].map(() => { const a = ri(rng, 3, 12), b = ri(rng, 2, 9); return [a, b, op === '+' ? a + b : op === '−' ? a - b : a * b]; }); rule = 'la terza colonna è la prima ' + op + ' la seconda'; }
    else if (t === 3) { const A = ri(rng, 1, 6), B = ri(rng, 1, 5), C = ri(rng, 1, 5), D = ri(rng, 1, 3); g = [0, 1, 2].map(r => [0, 1, 2].map(c => A + B * r + C * c + D * r * c)); rule = 'cella = ' + A + ' + ' + B + '·riga + ' + C + '·colonna + ' + D + '·riga·colonna (righe/colonne da 0)'; }
    else if (t === 4) { const m = ri(rng, 2, 5), a = ri(rng, 0, 9), M = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]; g = M.map(r => r.map(x => x * m + a)); const S = 15 * m + 3 * a; rule = 'ogni riga e colonna somma ' + S; }
    else { const f = U.pick([[(a, b) => a * b - a, 'a·b − a'], [(a, b) => a * a - b, 'a² − b'], [(a, b) => a + 2 * b, 'a + 2b'], [(a, b) => 2 * a * b - b, '2ab − b']], rng); g = [0, 1, 2].map(() => { const a = ri(rng, 2, 9), b = ri(rng, 2, 9); return [a, b, f[0](a, b)]; }); rule = 'terza colonna = ' + f[1] + ' (a, b = prime due colonne)'; }
    const ans = g[2][2], wrong = [ans + 1, ans - 1, ans + (t === 1 ? 2 : 10), ans - 2, ans * 2];
    const opts = uniq4(ans, wrong).filter(x => String(x) !== undefined);
    const q = 'Quale numero sostituisce «?» ' + g.map((r, i) => (i === 2 ? r.slice(0, 2).concat('?') : r).join(' · ')).join(' ⏐ ');
    return mcItem('matrix', q, String(ans), opts.map(String), rng, 'Regola: ' + rule + ' → ' + ans, 30 + t * 8);
  };

  /* ---------------- Cavalieri e furfanti (soluzione unica verificata) ---------------- */
  const NAMES = ['A', 'B', 'C', 'D', 'E'];
  const stmtDefs = n => {
    const defs = [];
    for (let j = 0; j < n; j++) {
      defs.push({ txt: x => NAMES[j] + ' è un cavaliere', f: a => a[j] }, { txt: x => NAMES[j] + ' è un furfante', f: a => !a[j] });
      for (let k = j + 1; k < n; k++) defs.push({ txt: x => NAMES[j] + ' e ' + NAMES[k] + ' sono dello stesso tipo', f: a => a[j] === a[k] }, { txt: x => NAMES[j] + ' e ' + NAMES[k] + ' sono di tipo diverso', f: a => a[j] !== a[k] }, { txt: x => 'almeno uno fra ' + NAMES[j] + ' e ' + NAMES[k] + ' è un furfante', f: a => !a[j] || !a[k] });
    }
    if (n >= 3) for (let m = 1; m < n; m++) defs.push({ txt: x => 'fra tutti noi ci sono esattamente ' + m + (m === 1 ? ' furfante' : ' furfanti'), f: a => a.filter(v => !v).length === m });
    return defs;
  };
  const solveKnights = (n, said) => { const sols = []; for (let mask = 0; mask < (1 << n); mask++) { const a = Array.from({ length: n }, (_, i) => !!(mask >> i & 1)); if (said.every(([who, d]) => d.f(a) === a[who])) sols.push(a); } return sols; };
  G.knights = (lv, rng) => {
    const n = lv <= 4 ? 2 : lv <= 9 ? 3 : lv <= 14 ? 4 : 5, defs = stmtDefs(n);
    for (let attempt = 0; attempt < 400; attempt++) {
      const truth = Array.from({ length: n }, () => rng() < 0.5), said = [];
      for (let w = 0; w < n; w++) { let tries = 0, d; do { d = U.pick(defs, rng); tries++; } while (d.f(truth) !== truth[w] && tries < 40); if (d.f(truth) !== truth[w]) break; said.push([w, d]); }
      if (said.length < n) continue;
      const sols = solveKnights(n, said); if (sols.length !== 1) continue;
      const ans = NAMES.slice(0, n).filter((_, i) => truth[i]), label = x => x.length ? x.join(' e ') : 'nessuno';
      const cands = [ans]; NAMES.slice(0, n).forEach((_, i) => { const t2 = truth.slice(); t2[i] = !t2[i]; cands.push(NAMES.slice(0, n).filter((_, k) => t2[k])); });
      const optsTxt = [...new Set(cands.map(label))].slice(0, 4); if (!optsTxt.includes(label(ans))) optsTxt[0] = label(ans);
      while (optsTxt.length < 3) optsTxt.push('tutti e ' + n);
      const q = 'Isola con cavalieri (dicono sempre il vero) e furfanti (mentono sempre). ' + said.map(([w, d]) => NAMES[w] + ' dice: «' + d.txt() + '».').join(' ') + ' Chi sono i cavalieri?';
      const it = mcItem('knights', q, label(ans), [...new Set(optsTxt)], rng, 'Unica soluzione coerente: cavalieri = ' + label(ans), 40 + n * 12); it.sol = truth; it.stmts = said.map(([w, d]) => [w, d.f]); it.n = n; return it;
    }
    return mcItem('knights', 'A dice: «io sono un furfante». Che cosa è A?', 'impossibile: nessun abitante può dirlo', ['impossibile: nessun abitante può dirlo', 'cavaliere', 'furfante'], rng, 'Né un cavaliere né un furfante può dire di essere un furfante.', 40);
  };

  /* ---------------- Crittoaritmetica (soluzione unica, solver a colonne) ---------------- */
  const countCrypt = (w1, w2, w3, limit) => {
    const L = w3.length, assign = {}, used = new Set(); let count = 0;
    const lead = new Set([w1[0], w2[0], w3[0]]);
    const dig = (w, i) => (i < w.length ? w[w.length - 1 - i] : null);
    const col = (i, carry) => {
      if (count >= limit) return;
      if (i === L) { if (carry === 0) count++; return; }
      const ls = [dig(w1, i), dig(w2, i), dig(w3, i)].filter(x => x), un = [...new Set(ls)].filter(x => !(x in assign));
      const go = k => {
        if (count >= limit) return;
        if (k === un.length) {
          const d1 = dig(w1, i) ? assign[dig(w1, i)] : 0, d2 = dig(w2, i) ? assign[dig(w2, i)] : 0, d3 = dig(w3, i) ? assign[dig(w3, i)] : 0, s = d1 + d2 + carry;
          if (s % 10 !== d3) return; col(i + 1, Math.floor(s / 10)); return;
        }
        for (let d = 0; d <= 9; d++) { if (used.has(d) || (d === 0 && lead.has(un[k]))) continue; assign[un[k]] = d; used.add(d); go(k + 1); used.delete(d); delete assign[un[k]]; }
      };
      go(0);
    };
    col(0, 0); return count;
  };
  G.crypt = (lv, rng) => {
    const la = lv <= 6 ? 2 : lv <= 12 ? 3 : 4, lb = lv <= 6 ? 2 : lv <= 12 ? 3 : ri(rng, 3, 4), maxL = lv <= 6 ? 5 : lv <= 12 ? 6 : 7;
    const LET = 'ABCDEFGHIJ'.split('');
    for (let attempt = 0; attempt < 300; attempt++) {
      const a = ri(rng, Math.pow(10, la - 1), Math.pow(10, la) - 1), b = ri(rng, Math.pow(10, lb - 1), Math.pow(10, lb) - 1), c = a + b;
      const digs = [...new Set((String(a) + String(b) + String(c)).split(''))]; if (digs.length > maxL) continue;
      const map = {}; U.shuffle(LET, rng).slice(0, digs.length).forEach((l, i) => { map[digs[i]] = l; });
      const w = x => String(x).split('').map(d => map[d]).join(''), w1 = w(a), w2 = w(b), w3 = w(c);
      if (countCrypt(w1, w2, w3, 2) !== 1) continue;
      const letters = [...new Set((w1 + w2 + w3).split(''))], target = U.pick(letters, rng), val = +Object.keys(map).find(d => map[d] === target);
      const it = { t: 'fill', mtype: 'crypt', num: true, q: w1 + ' + ' + w2 + ' = ' + w3 + ' (lettere diverse = cifre diverse, nessun numero inizia per 0). Quanto vale ' + target + '?', a: [String(val)], why: 'Soluzione unica: ' + a + ' + ' + b + ' = ' + c + ' → ' + target + ' = ' + val, timed: 50 + digs.length * 8 };
      it.puzzle = { w1, w2, w3 }; return it;
    }
    return { t: 'fill', mtype: 'crypt', num: true, q: 'A + A = B (A, B cifre diverse, A > 0, B < 10). Quanto vale B se A = 4?', a: ['8'], why: '4 + 4 = 8', timed: 20 };
  };

  /* ---------------- Sudoku 4×4 / 6×6 (cella obbligata) ---------------- */
  const sudSolve = (grid, N, bh, bw, limit) => {
    let count = 0; const g = grid.map(r => r.slice());
    const ok = (r, c, v) => { for (let i = 0; i < N; i++) if (g[r][i] === v || g[i][c] === v) return false; const r0 = r - r % bh, c0 = c - c % bw; for (let i = 0; i < bh; i++) for (let j = 0; j < bw; j++) if (g[r0 + i][c0 + j] === v) return false; return true; };
    const rec = () => {
      if (count >= limit) return;
      let br = -1, bc = -1, best = 99;
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!g[r][c]) { let n = 0; for (let v = 1; v <= N; v++) if (ok(r, c, v)) n++; if (n < best) { best = n; br = r; bc = c; } }
      if (br < 0) { count++; return; }
      for (let v = 1; v <= N; v++) if (ok(br, bc, v)) { g[br][bc] = v; rec(); g[br][bc] = 0; if (count >= limit) return; }
    };
    rec(); return count;
  };
  const sudFill = (N, bh, bw, rng) => {
    const g = Array.from({ length: N }, () => new Array(N).fill(0));
    const ok = (r, c, v) => { for (let i = 0; i < N; i++) if (g[r][i] === v || g[i][c] === v) return false; const r0 = r - r % bh, c0 = c - c % bw; for (let i = 0; i < bh; i++) for (let j = 0; j < bw; j++) if (g[r0 + i][c0 + j] === v) return false; return true; };
    const rec = (k) => { if (k === N * N) return true; const r = Math.floor(k / N), c = k % N; for (const v of U.shuffle(Array.from({ length: N }, (_, i) => i + 1), rng)) if (ok(r, c, v)) { g[r][c] = v; if (rec(k + 1)) return true; g[r][c] = 0; } return false; };
    rec(0); return g;
  };
  G.sudoku = (lv, rng) => {
    const N = lv <= 10 ? 4 : 6, bh = 2, bw = N === 4 ? 2 : 3, sol = sudFill(N, bh, bw, rng), g = sol.map(r => r.slice());
    const target = N === 4 ? Math.max(6, 11 - Math.ceil(lv / 2)) : Math.max(12, 22 - (lv - 10));
    const cells = U.shuffle(Array.from({ length: N * N }, (_, i) => i), rng);
    for (const k of cells) { if (g.flat().filter(x => x).length <= target) break; const r = Math.floor(k / N), c = k % N, keep = g[r][c]; g[r][c] = 0; if (sudSolve(g, N, bh, bw, 2) !== 1) g[r][c] = keep; }
    const empties = []; g.forEach((row, r) => row.forEach((v, c) => { if (!v) empties.push([r, c]); }));
    const [tr, tc] = U.pick(empties, rng), ans = sol[tr][tc];
    const show = g.map((row, r) => row.map((v, c) => (r === tr && c === tc ? '?' : v || '·')).join(' ')).join(' ⏐ ');
    const o = Array.from({ length: N }, (_, i) => String(i + 1)).slice(0, 4);
    if (!o.includes(String(ans))) o[0] = String(ans);
    const it = mcItem('sudoku', 'Sudoku ' + N + '×' + N + ' (ogni riga, colonna e riquadro ' + bh + '×' + bw + ' contiene 1–' + N + ' una volta). Quale numero va in «?»  ' + show, String(ans), [...new Set(o)].length >= 3 ? [...new Set(o)] : o, rng, 'Il valore di quella cella è obbligato: ' + ans, 45 + N * 8);
    it.grid = g; it.pos = [tr, tc]; it.N = N; it.bh = bh; it.bw = bw; return it;
  };

  /* ---------------- Nim e gioco della sottrazione (mossa vincente) ---------------- */
  G.nim = (lv, rng) => {
    if (lv <= 3) {
      const k = ri(rng, 3, 4), n = (k + 1) * ri(rng, 2, 4) + ri(rng, 1, k), take = n % (k + 1);
      const itS = mcItem('nim', 'Ci sono ' + n + ' fiammiferi. A turno si tolgono da 1 a ' + k + ' fiammiferi; chi prende l’ultimo vince. Tocca a te: quanti ne togli per vincere?', String(take), uniq4(take, [1, 2, 3, 4].filter(x => x <= k)).map(String), rng, 'Lascia sempre un multiplo di ' + (k + 1) + ': ' + n + ' mod ' + (k + 1) + ' = ' + take, 25); itS.sub = { n, k, take }; return itS;
    }
    const piles = lv <= 8 ? 2 : lv <= 14 ? 3 : lv <= 17 ? 4 : 5, mx = lv <= 8 ? 7 : lv <= 14 ? 10 : 15;
    for (let a = 0; a < 200; a++) {
      const p = Array.from({ length: piles }, () => ri(rng, 1, mx)), x = p.reduce((s, v) => s ^ v, 0); if (x === 0) continue;
      const good = [], bad = []; p.forEach((v, i) => { for (let k = 1; k <= v; k++) { const nx = x ^ v ^ (v - k); (nx === 0 ? good : bad).push([i, k]); } });
      if (good.length < 1) continue;
      const lab = m => 'togli ' + m[1] + ' dalla pila ' + (m[0] + 1), gm = U.pick(good, rng), opts = [lab(gm)].concat(U.sample(bad, 3, rng).map(lab)); if (new Set(opts).size < 4) continue;
      const itN = mcItem('nim', 'Nim: pile ' + p.map((v, i) => (i + 1) + '=' + v).join(', ') + '. A turno si toglie un numero qualsiasi di oggetti da UNA pila; chi prende l’ultimo oggetto vince. Quale mossa ti porta in una posizione vincente?', lab(gm), [...new Set(opts)], rng, 'XOR delle pile = ' + x + ' → dopo la mossa deve diventare 0.', 40 + piles * 6); itN.piles = p; itN.good = gm; itN.goodAll = good; return itN;
    }
    return mcItem('nim', 'Due pile uguali (3 e 3): conviene muovere per primo?', 'No: chi muove per primo perde con gioco perfetto', ['No: chi muove per primo perde con gioco perfetto', 'Sì, sempre', 'Dipende dal colore'], rng, 'XOR = 0.', 20);
  };

  /* ---------------- Tris: mossa migliore (minimax) ---------------- */
  const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const winner = b => { for (const [a, c, d] of LINES) if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a]; return null; };
  const mm = (b, turn) => { // valore dal punto di vista di X: +1 vince X, −1 vince O
    const w = winner(b); if (w) return w === 'X' ? 1 : -1; if (b.every(x => x)) return 0;
    let best = turn === 'X' ? -2 : 2;
    for (let i = 0; i < 9; i++) if (!b[i]) { b[i] = turn; const v = mm(b, turn === 'X' ? 'O' : 'X'); b[i] = null; best = turn === 'X' ? Math.max(best, v) : Math.min(best, v); }
    return best;
  };
  MN.tttValues = b => { const out = {}; for (let i = 0; i < 9; i++) if (!b[i]) { b[i] = 'X'; out[i] = mm(b, 'O'); b[i] = null; } return out; };
  G.ttt = (lv, rng) => {
    const minE = lv <= 6 ? 2 : lv <= 12 ? 3 : 4, maxE = lv <= 6 ? 4 : lv <= 12 ? 6 : 8;
    for (let a = 0; a < 800; a++) {
      const b = new Array(9).fill(null); let turn = 'X', ok = true;
      const moves = 9 - ri(rng, minE, maxE); for (let m = 0; m < moves; m++) { const em = b.map((v, i) => v ? null : i).filter(v => v !== null); if (!em.length) break; b[U.pick(em, rng)] = turn; if (winner(b)) { ok = false; break; } turn = turn === 'X' ? 'O' : 'X'; }
      if (!ok || turn !== 'X' || b.every(x => x)) continue;
      const vals = MN.tttValues(b), ks = Object.keys(vals).map(Number), best = Math.max(...ks.map(k => vals[k])), bests = ks.filter(k => vals[k] === best);
      if (bests.length !== 1 || ks.length < 3) continue; if (lv > 6 && best < 1 && rng() < 0.7) continue;
      const lab = i => 'riga ' + (Math.floor(i / 3) + 1) + ', colonna ' + (i % 3 + 1), others = U.sample(ks.filter(k => k !== bests[0]), 3, rng);
      const board = [0, 1, 2].map(r => [0, 1, 2].map(c => b[r * 3 + c] || '·').join(' ')).join(' ⏐ ');
      const it = mcItem('ttt', 'Tris, tocca a X. Tavola: ' + board + '. Quale mossa è la migliore (gioco perfetto)?', lab(bests[0]), [lab(bests[0])].concat(others.map(lab)), rng, 'Valore minimax: ' + (best === 1 ? 'vittoria forzata' : best === 0 ? 'pareggio (le altre mosse perdono)' : 'unica mossa che limita il danno') + ' → ' + lab(bests[0]), 30);
      it.board = b.slice(); it.best = bests[0]; return it;
    }
    return mcItem('ttt', 'Tris, tocca a X. Tavola: X X · ⏐ O O · ⏐ · · ·. Quale mossa vince subito?', 'riga 1, colonna 3', ['riga 1, colonna 3', 'riga 2, colonna 3', 'riga 3, colonna 1'], rng, 'Completa la riga in alto.', 15);
  };

  /* ---------------- Predizione: calibrazione della sicurezza (vero/falso verificabile) ---------------- */
  const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
  const DAYS = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'], MON = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
  const fmtN = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const claim = (lv, rng) => {
    const near = lv >= 8, kind = ri(rng, 0, 5);
    if (kind === 0) { const a = ri(rng, 12, 19 + lv * 3), b = ri(rng, 6, 9 + lv), t = a * b, shown = rng() < 0.5 ? t : t + (near ? U.pick([-10, 10, -1, 1, 20], rng) : ri(rng, 15, 90)); return { text: a + ' × ' + b + ' = ' + shown, truth: shown === t, why: a + ' × ' + b + ' = ' + t }; }
    if (kind === 1) { const n = near ? ri(rng, 80, 400) : ri(rng, 20, 200), k = Math.round(Math.sqrt(n)) + (near ? U.pick([-1, 0, 1], rng) : U.pick([-4, 4, 6], rng)); return { text: '√' + n + ' è maggiore di ' + k, truth: Math.sqrt(n) > k, why: '√' + n + ' ≈ ' + Math.sqrt(n).toFixed(2) }; }
    if (kind === 2) { const n = U.pick([51, 57, 87, 91, 119, 133, 143, 161, 169, 187, 221, 247, 253, 289, 299, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419], rng); return { text: n + ' è un numero primo', truth: isPrime(n), why: isPrime(n) ? n + ' è primo' : n + ' = ' + (() => { for (let i = 2; ; i++) if (n % i === 0) return i + ' × ' + n / i; })() }; }
    if (kind === 3) { const y = ri(rng, 2024, 2031), m = ri(rng, 0, 11), d = ri(rng, 1, 28), real = new Date(Date.UTC(y, m, d)).getUTCDay(), shown = rng() < 0.5 ? real : (real + ri(rng, 1, 6)) % 7; return { text: 'Il ' + d + ' ' + MON[m] + ' ' + y + ' è ' + (shown === 2 || shown === 3 ? 'un ' : 'un ') + DAYS[shown], truth: shown === real, why: 'Quel giorno è ' + DAYS[real] }; }
    if (kind === 4) { const k = ri(rng, 8, 20 + lv), p = Math.pow(2, k), off = near ? U.pick([-0.03, 0.03, -0.1, 0.1], rng) : U.pick([-0.4, 0.5], rng), N = Math.round(p * (1 + off)); return { text: '2^' + k + ' è maggiore di ' + fmtN(N), truth: p > N, why: '2^' + k + ' = ' + fmtN(p) }; }
    const units = [[60 * 24 * 7, 'minuti in una settimana'], [3600 * 24, 'secondi in un giorno'], [24 * 365, 'ore in un anno (non bisestile)'], [1000 * 60, 'millisecondi in un minuto']]; const [exact, nm] = U.pick(units, rng), N = Math.round(exact * (1 + (near ? U.pick([-0.05, 0.05, -0.12, 0.12], rng) : U.pick([-0.5, 0.6], rng))));
    return { text: 'Ci sono più di ' + fmtN(N) + ' ' + nm, truth: exact > N, why: 'Esatti: ' + fmtN(exact) };
  };
  const CONFS = [[0.95, 'sicuro (95%)'], [0.75, 'abbastanza sicuro (75%)'], [0.55, 'poco sicuro (55%)']];
  G.calib = (lv, rng) => {
    const c = claim(lv, rng), meta = {}, o = [];
    [true, false].forEach(side => CONFS.forEach(([conf, lab]) => { const txt = (side ? 'VERO' : 'FALSO') + ' · ' + lab; meta[txt] = { side, conf }; o.push(txt); }));
    const okSet = o.filter(t => meta[t].side === c.truth), best = o.find(t => meta[t].side === c.truth && meta[t].conf === 0.95);
    return { t: 'mc', mtype: 'calib', q: 'Vero o falso? «' + c.text + '». Scegli e dichiara quanto sei sicuro.', o, a: o.indexOf(best), okSet, meta, truth: c.truth, why: (c.truth ? 'Era VERO' : 'Era FALSO') + ' — ' + c.why + '. Se dici «sicuro (95%)» devi avere ragione 19 volte su 20.' };
  };

  /* ---------------- Memoria: coppie associate e quanti punti (flash) ---------------- */
  G.pairs = (lv, rng) => {
    const P = Math.min(9, 3 + Math.ceil(lv / 3)), ws = U.sample(WORDS, P, rng), nums = []; while (nums.length < P) { const n = ri(rng, 11, 99); if (!nums.includes(n)) nums.push(n); }
    const k = ri(rng, 0, P - 1), askNum = rng() < 0.5, show = ws.map((w, i) => nums[i] + ' = ' + w).join('   ');
    if (askNum) { const o = U.shuffle([String(nums[k])].concat(U.sample(nums.filter((_, i) => i !== k), 3, rng).map(String)), rng); return { t: 'flash', mtype: 'pairs', show, ms: P * 1500 - lv * 40, q: 'Quale numero era associato a «' + ws[k] + '»?', o, a: o.indexOf(String(nums[k])), why: show }; }
    const o = U.shuffle([ws[k]].concat(U.sample(ws.filter((_, i) => i !== k), 3, rng)), rng); return { t: 'flash', mtype: 'pairs', show, ms: P * 1500 - lv * 40, q: 'Quale parola era associata al numero ' + nums[k] + '?', o, a: o.indexOf(ws[k]), why: show };
  };
  G.subit = (lv, rng) => {
    const n = Math.min(22, 3 + lv), cells = U.sample(Array.from({ length: 35 }, (_, i) => i), n, rng), set = new Set(cells);
    const show = [0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4, 5, 6].map(c => set.has(r * 7 + c) ? '●' : '·').join(' ')).join('\n');
    const o = U.shuffle(uniq4(n, [n - 1, n + 1, n - 2, n + 2]).map(String), rng);
    return { t: 'flash', mtype: 'subit', show, ms: Math.max(300, 1100 - lv * 40), q: 'Quanti punti pieni (●) hai visto?', o, a: o.indexOf(String(n)), why: 'Erano ' + n + ' punti', timed: 6, pre: true };
  };

  /* ---------------- Reattività: blocchi di prove (semplice, go/no-go, scelta) ---------------- */
  G.react = (lv, rng) => {
    const n = 5 + Math.floor(lv / 5), choice = lv >= 11, nogo = lv >= 6 ? (lv >= 14 ? 0.4 : 0.25) : 0;
    const trials = Array.from({ length: n }, () => ({ delay: ri(rng, Math.max(400, 900 - lv * 15), 2200 + lv * 40), go: rng() >= nogo, dir: rng() < 0.5 ? 'L' : 'R' }));
    if (!trials.some(x => x.go)) trials[0].go = true;
    return { t: 'react', mtype: 'react', trials, thr: Math.max(260, 640 - lv * 17), choice, q: choice ? 'Tocca il lato indicato dalla freccia, il più in fretta possibile (rosso = non toccare)' : (nogo ? 'Tocca appena diventa VERDE; se diventa ROSSO non toccare' : 'Tocca appena lo schermo diventa verde'), why: 'Soglia ' + Math.max(260, 640 - lv * 17) + ' ms' };
  };

  /* ---------------- Varianti difficilissime (livelli 11–20) dei tipi base ---------------- */
  H.calc = (lv, rng) => {
    const t = lv - 10; let q, a;
    if (t <= 2) { const x = ri(rng, 300, 999), y = ri(rng, 120, 899); if (rng() < 0.5) { q = x + ' + ' + y; a = x + y; } else { q = (x + y) + ' − ' + y; a = x; } }
    else if (t <= 4) { const x = ri(rng, 12, 49), y = ri(rng, 12, 49); q = x + ' × ' + y; a = x * y; }
    else if (t <= 6) { const x = ri(rng, 31, 99); q = x + '²'; a = x * x; }
    else if (t === 7) { const x = ri(rng, 101, 199), y = ri(rng, 12, 19); q = x + ' × ' + y; a = x * y; }
    else if (t === 8) { const p = U.pick([3, 5, 7], rng), d = 8, base = d * ri(rng, 12, 60); q = p + '/' + d + ' di ' + base; a = base / d * p; }
    else if (t === 9) { const x = ri(rng, 13, 29), y = ri(rng, 3, 9), m = ri(rng, 12, 17), z = ri(rng, 11, 49); q = '(' + x + ' + ' + y + ') × ' + m + ' − ' + z; a = (x + y) * m - z; }
    else { const d = ri(rng, 12, 48), x = d * ri(rng, 21, 99); q = x + ' ÷ ' + d; a = x / d; }
    return { t: 'fill', mtype: 'calc', q: 'Calcola a mente: ' + q, a: [String(a)], num: true, why: q + ' = ' + a, timed: 30 };
  };
  H.seq = (lv, rng) => {
    const kinds = ['second', 'inter', 'tri', 'fibx', 'prime', 'cube', 'alt2'], k = U.pick(kinds, rng); let s = [], rule, a;
    if (k === 'second') { const d0 = ri(rng, 1, 5), dd = ri(rng, 1, 4), st = ri(rng, 1, 9); let v = st, d = d0; for (let i = 0; i < 6; i++) { s.push(v); v += d; d += dd; } rule = 'le differenze crescono di ' + dd; }
    else if (k === 'inter') { const a1 = ri(rng, 2, 9), d1 = ri(rng, 2, 5), a2 = ri(rng, 20, 40), d2 = ri(rng, 2, 6); for (let i = 0; i < 4; i++) { s.push(a1 + d1 * i); s.push(a2 - d2 * i); } s = s.slice(0, 7); rule = 'due successioni alternate: +' + d1 + ' e −' + d2; }
    else if (k === 'tri') { for (let i = 1; i <= 6; i++) s.push(i * (i + 1) / 2 + ri(rng, 0, 0)); rule = 'numeri triangolari'; }
    else if (k === 'fibx') { s = [ri(rng, 1, 3), ri(rng, 2, 5)]; for (let i = 2; i < 7; i++) s.push(s[i - 1] + 2 * s[i - 2]); rule = 'ogni numero = precedente + 2 × quello prima'; }
    else if (k === 'prime') { const P = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]; const st = ri(rng, 0, 4); s = P.slice(st, st + 6); rule = 'numeri primi consecutivi'; }
    else if (k === 'cube') { const o = ri(rng, 1, 3); for (let i = 0; i < 5; i++) s.push(Math.pow(i + o, 3)); rule = 'cubi consecutivi'; }
    else { const st = ri(rng, 2, 9); s = [st]; for (let i = 1; i < 7; i++) s.push(i % 2 ? s[i - 1] * 2 : s[i - 1] + 3); rule = 'alternanza ×2 e +3'; }
    a = s.pop(); return { t: 'fill', mtype: 'seq', q: 'Quale numero continua? ' + s.join(', ') + ', …', a: [String(a)], num: true, why: 'Regola: ' + rule + ' → ' + a, timed: 60 };
  };
  H.estimate = (lv, rng) => {
    const t = lv - 10; let x, y, sym, exact;
    if (t <= 4) { x = ri(rng, 120, 989); y = ri(rng, 21, 89); sym = '×'; exact = x * y; } else if (t <= 8) { x = ri(rng, 12000, 98000); y = ri(rng, 12, 89); sym = '÷'; exact = x / y; } else { x = ri(rng, 1200, 9800); y = ri(rng, 120, 980); sym = '×'; exact = x * y; }
    const sig = v => { const e = Math.pow(10, Math.floor(Math.log10(Math.abs(v))) - 1); return Math.round(v / e) * e; };
    const val = sig(exact), c = [...new Set([val, sig(val * 0.5), sig(val * 2), sig(val * 1.3), sig(val * 0.75)])].slice(0, 4), f = v => 'circa ' + fmtN(Math.round(v));
    const o = U.shuffle(c.map(f), rng); return { t: 'mc', mtype: 'estimate', q: 'Stima: ' + fmtN(x) + ' ' + sym + ' ' + y + ' è…', o, a: o.indexOf(f(val)), why: 'Esatto ≈ ' + (sym === '÷' ? exact.toFixed(0) : fmtN(exact)), timed: 25 };
  };
  H.span = (lv, rng) => { const n = Math.min(13, 5 + Math.ceil((lv - 10) * 0.9) + 2), back = true; let d = ''; for (let i = 0; i < n; i++) d += ri(rng, 0, 9); return { t: 'span', mtype: 'span', digits: d, back, ms: Math.max(450, 750 - (lv - 10) * 25), q: 'Ripeti le cifre in ordine INVERSO', a: [d.split('').reverse().join('')], why: 'Sequenza: ' + d }; };
  H.corsi = (lv, rng) => { const n = Math.min(11, 6 + Math.ceil((lv - 10) * 0.6)), seq = []; while (seq.length < n) { const c = ri(rng, 0, 8); if (seq[seq.length - 1] !== c) seq.push(c); } return { t: 'corsi', mtype: 'corsi', seq, q: 'Tocca le caselle nello stesso ordine in cui si sono illuminate', why: 'Ordine corretto: ' + seq.map(x => x + 1).join(' → ') }; };
  H.odd = (lv, rng) => { const sets = [['l', '1'], ['I', 'l'], ['0', 'O'], ['Q', 'O'], ['rn', 'm'], ['cl', 'd'], ['vv', 'w'], ['S', '5']], [base, odd] = U.pick(sets, rng), size = 16, idx = ri(rng, 0, size - 1); return { t: 'odd', mtype: 'odd', cells: Array.from({ length: size }, (_, i) => i === idx ? odd : base), a: idx, q: 'Tocca il simbolo diverso, il più in fretta possibile', timed: Math.max(3, 8 - Math.floor((lv - 10) / 3)), why: 'Il simbolo diverso era in posizione ' + (idx + 1) }; };
  H.stroop = (lv, rng) => { const COL = [['ROSSO', '#e5484d'], ['BLU', '#3b82f6'], ['VERDE', '#22a06b'], ['GIALLO', '#d6a40a']]; const w = U.pick(COL, rng); let c; do { c = U.pick(COL, rng); } while (c[0] === w[0]); return { t: 'stroop', mtype: 'stroop', word: w[0], color: c[1], opts: COL.map(x => x[0]), a: COL.findIndex(x => x[1] === c[1]), q: 'Tocca il COLORE dell’inchiostro, non la parola', timed: 2, why: 'Il colore dell’inchiostro era ' + c[0] }; };
  H.recall = (lv, rng) => { const N = Math.min(16, 8 + (lv - 10)), ws = U.sample(WORDS, N, rng), pos = ri(rng, 0, N - 1), others = U.sample(ws.filter((_, i) => i !== pos), 3, rng), o = U.shuffle([ws[pos]].concat(others), rng); return { t: 'flash', mtype: 'recall', show: ws.join(' · '), ms: N * 550, q: 'Quale parola era in posizione ' + (pos + 1) + '?', o, a: o.indexOf(ws[pos]), why: 'Lista: ' + ws.join(', ') }; };
  H.nback = (lv, rng) => { const n = lv <= 13 ? 3 : 4, len = 18, pool = 'BCDFGHKLMNPRSTVZ'.split(''), seq = []; for (let i = 0; i < len; i++) { if (i >= n && rng() < 0.3) seq.push(seq[i - n]); else { let c; do { c = U.pick(pool, rng); } while (i >= n && c === seq[i - n]); seq.push(c); } } const targets = seq.map((c, i) => i >= n && c === seq[i - n]); return { t: 'nback', mtype: 'nback', n, seq, targets, ms: Math.max(800, 1500 - (lv - 10) * 50), q: 'Tocca «Uguale» quando la lettera è la stessa di ' + n + ' posti fa', why: 'Bersagli: ' + targets.map((x, i) => x ? i + 1 : null).filter(Boolean).join(', ') }; };
  H.order = (lv, rng) => { const NM = ['Anna', 'Bea', 'Carlo', 'Dario', 'Elisa', 'Fabio', 'Gina', 'Hugo'], cnt = Math.min(8, 6 + Math.ceil((lv - 10) / 3)), people = U.sample(NM, cnt, rng), at = U.pick([['più forte', 'più forti'], ['più veloce', 'più veloci'], ['più giovane', 'più giovani']], rng); const rel = []; for (let i = 0; i < cnt - 1; i++) rel.push(people[i] + ' è ' + at[0] + ' di ' + people[i + 1] + '.'); const k = ri(rng, 1, cnt - 1), a = String(k), o = U.shuffle([a].concat(U.sample(['0', '1', '2', '3', '4', '5', '6', '7'].filter(x => x !== a), 3, rng)), rng); return { t: 'mc', mtype: 'order', q: U.shuffle(rel, rng).join(' ') + ' Quante persone sono ' + at[1] + ' di ' + people[k] + '?', o, a: o.indexOf(a), why: 'Ordine: ' + people.join(' > '), timed: 60 }; };
  H.switch = (lv, rng) => { const n = ri(rng, 1, 9), col = ri(rng, 0, 2), o = ['Pari', 'Dispari', 'Maggiore di 5', 'Minore di 5', 'Multiplo di 3', 'Non multiplo di 3']; const ans = col === 0 ? (n % 2 === 0 ? 'Pari' : 'Dispari') : col === 1 ? (n > 5 ? 'Maggiore di 5' : 'Minore di 5') : (n % 3 === 0 ? 'Multiplo di 3' : 'Non multiplo di 3'); return { t: 'mc', mtype: 'switch', q: 'Sfondo BLU → pari o dispari · ROSSO → maggiore o minore di 5 · VERDE → multiplo di 3 o no. Ora: numero ' + n + ' su sfondo ' + ['BLU', 'ROSSO', 'VERDE'][col] + '.', o, a: o.indexOf(ans), why: ans, timed: 5 }; };
  H.syllo = (lv, rng) => G.syllo ? G.syllo(lv, rng) : MN.make('syllo', 10, rng);
})(window.ST = window.ST || {});
