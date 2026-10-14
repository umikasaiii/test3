/* SkillTree — motore di scacchi minimale (regole complete, ricerca di matti e tattiche) per verificare i problemi.
   Scacchiera: indice 0..63 = a1..h8 (rank*8+file). Pezzi: maiuscole = bianchi, minuscole = neri. */
(function (ST) {
  'use strict';
  const CH = ST.chess = {};
  const FILES = 'abcdefgh', VAL = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };
  const isW = c => c !== '.' && c === c.toUpperCase();
  const sqName = i => FILES[i & 7] + ((i >> 3) + 1), sqIdx = s => (s.charCodeAt(1) - 49) * 8 + (s.charCodeAt(0) - 97);
  CH.sqName = sqName; CH.sqIdx = sqIdx;

  CH.parse = fen => {
    const [pl, turn, cas, ep, hm, fm] = fen.trim().split(/\s+/), b = new Array(64).fill('.');
    const rows = pl.split('/'); if (rows.length !== 8) throw new Error('FEN: righe');
    rows.forEach((row, i) => { let f = 0; for (const ch of row) { if (/\d/.test(ch)) f += +ch; else { if (f > 7) throw new Error('FEN: colonne'); b[(7 - i) * 8 + f] = ch; f++; } } if (f !== 8) throw new Error('FEN: riga ' + (i + 1)); });
    return { b, turn: turn === 'b' ? 'b' : 'w', cas: cas || '-', ep: ep && ep !== '-' ? sqIdx(ep) : -1, hm: +hm || 0, fm: +fm || 1 };
  };
  CH.fen = p => { let s = ''; for (let r = 7; r >= 0; r--) { let e = 0; for (let f = 0; f < 8; f++) { const c = p.b[r * 8 + f]; if (c === '.') e++; else { if (e) s += e; e = 0; s += c; } } if (e) s += e; if (r) s += '/'; } return s + ' ' + p.turn + ' ' + (p.cas || '-') + ' ' + (p.ep >= 0 ? sqName(p.ep) : '-') + ' ' + p.hm + ' ' + p.fm; };
  CH.START = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  const KN = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]], KG = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const DIAG = [[1, 1], [1, -1], [-1, 1], [-1, -1]], ORTH = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const on = (f, r) => f >= 0 && f < 8 && r >= 0 && r < 8;

  /* la casa sq è attaccata dai pezzi del colore by? */
  CH.attacked = (p, sq, by) => {
    const f = sq & 7, r = sq >> 3, w = by === 'w', P = w ? 'P' : 'p', N = w ? 'N' : 'n', B = w ? 'B' : 'b', R = w ? 'R' : 'r', Q = w ? 'Q' : 'q', K = w ? 'K' : 'k';
    const pr = w ? r - 1 : r + 1; if (pr >= 0 && pr < 8) { if (f > 0 && p.b[pr * 8 + f - 1] === P) return true; if (f < 7 && p.b[pr * 8 + f + 1] === P) return true; }
    for (const [df, dr] of KN) if (on(f + df, r + dr) && p.b[(r + dr) * 8 + f + df] === N) return true;
    for (const [df, dr] of KG) if (on(f + df, r + dr) && p.b[(r + dr) * 8 + f + df] === K) return true;
    for (const [df, dr] of DIAG) { let x = f + df, y = r + dr; while (on(x, y)) { const c = p.b[y * 8 + x]; if (c !== '.') { if (c === B || c === Q) return true; break; } x += df; y += dr; } }
    for (const [df, dr] of ORTH) { let x = f + df, y = r + dr; while (on(x, y)) { const c = p.b[y * 8 + x]; if (c !== '.') { if (c === R || c === Q) return true; break; } x += df; y += dr; } }
    return false;
  };
  const kingSq = (p, col) => p.b.indexOf(col === 'w' ? 'K' : 'k');
  CH.inCheck = (p, col) => { col = col || p.turn; const k = kingSq(p, col); return k >= 0 && CH.attacked(p, k, col === 'w' ? 'b' : 'w'); };

  const pseudo = p => {
    const mv = [], w = p.turn === 'w', own = c => c !== '.' && isW(c) === w, enemy = c => c !== '.' && isW(c) !== w;
    for (let i = 0; i < 64; i++) {
      const c = p.b[i]; if (!own(c)) continue; const t = c.toLowerCase(), f = i & 7, r = i >> 3;
      if (t === 'p') {
        const dir = w ? 1 : -1, start = w ? 1 : 6, last = w ? 7 : 0, add = (to, ex) => { if ((to >> 3) === last) ['q', 'r', 'b', 'n'].forEach(pm => mv.push(Object.assign({ from: i, to, promo: pm }, ex || {}))); else mv.push(Object.assign({ from: i, to }, ex || {})); };
        const one = i + dir * 8; if (p.b[one] === '.') { add(one); if (r === start && p.b[one + dir * 8] === '.') mv.push({ from: i, to: one + dir * 8, dbl: true }); }
        for (const df of [-1, 1]) { const nf = f + df; if (nf < 0 || nf > 7) continue; const to = one + df; if (enemy(p.b[to])) add(to, { cap: true }); else if (to === p.ep) mv.push({ from: i, to, ep: true, cap: true }); }
      } else if (t === 'n' || t === 'k') {
        for (const [df, dr] of t === 'n' ? KN : KG) { if (!on(f + df, r + dr)) continue; const to = (r + dr) * 8 + f + df, d = p.b[to]; if (!own(d)) mv.push({ from: i, to, cap: d !== '.' }); }
        if (t === 'k') {
          const home = w ? 4 : 60, opp = w ? 'b' : 'w'; if (i === home && !CH.attacked(p, i, opp)) {
            if (p.cas.includes(w ? 'K' : 'k') && p.b[home + 1] === '.' && p.b[home + 2] === '.' && p.b[home + 3] === (w ? 'R' : 'r') && !CH.attacked(p, home + 1, opp) && !CH.attacked(p, home + 2, opp)) mv.push({ from: i, to: home + 2, castle: 'k' });
            if (p.cas.includes(w ? 'Q' : 'q') && p.b[home - 1] === '.' && p.b[home - 2] === '.' && p.b[home - 3] === '.' && p.b[home - 4] === (w ? 'R' : 'r') && !CH.attacked(p, home - 1, opp) && !CH.attacked(p, home - 2, opp)) mv.push({ from: i, to: home - 2, castle: 'q' });
          }
        }
      } else {
        const dirs = t === 'b' ? DIAG : t === 'r' ? ORTH : DIAG.concat(ORTH);
        for (const [df, dr] of dirs) { let x = f + df, y = r + dr; while (on(x, y)) { const to = y * 8 + x, d = p.b[to]; if (own(d)) break; mv.push({ from: i, to, cap: d !== '.' }); if (d !== '.') break; x += df; y += dr; } }
      }
    }
    return mv;
  };
  CH.make = (p, m) => {
    const b = p.b.slice(), w = p.turn === 'w', c = b[m.from]; let cas = p.cas, ep = -1;
    b[m.to] = m.promo ? (w ? m.promo.toUpperCase() : m.promo) : c; b[m.from] = '.';
    if (m.ep) b[m.to + (w ? -8 : 8)] = '.';
    if (m.castle) { const home = m.from; if (m.castle === 'k') { b[home + 1] = b[home + 3]; b[home + 3] = '.'; } else { b[home - 1] = b[home - 4]; b[home - 4] = '.'; } }
    if (m.dbl) ep = (m.from + m.to) / 2;
    const strip = ch => { cas = cas.replace(ch, ''); };
    if (c === 'K') { strip('K'); strip('Q'); } if (c === 'k') { strip('k'); strip('q'); }
    [[0, 'Q'], [7, 'K'], [56, 'q'], [63, 'k']].forEach(([sq, ch]) => { if (m.from === sq || m.to === sq) strip(ch); });
    return { b, turn: w ? 'b' : 'w', cas: cas || '-', ep, hm: (c.toLowerCase() === 'p' || m.cap) ? 0 : p.hm + 1, fm: p.fm + (w ? 0 : 1) };
  };
  CH.legal = p => pseudo(p).filter(m => !CH.inCheck(CH.make(p, m), p.turn));
  CH.isMate = p => CH.inCheck(p) && CH.legal(p).length === 0;
  CH.isStalemate = p => !CH.inCheck(p) && CH.legal(p).length === 0;
  CH.moveStr = m => sqName(m.from) + sqName(m.to) + (m.promo || '');
  CH.findMove = (p, s) => CH.legal(p).find(m => CH.moveStr(m) === s);
  CH.perft = (p, d) => { if (d === 0) return 1; let n = 0; for (const m of CH.legal(p)) n += CH.perft(CH.make(p, m), d - 1); return n; };

  /* Il lato che muove forza il matto in al più n mosse proprie? */
  CH.mateIn = (p, n) => {
    if (n <= 0) return false; const ms = CH.legal(p);
    for (const m of ms) {
      const q = CH.make(p, m); if (CH.isMate(q)) return true;
      if (n === 1) continue;
      const rs = CH.legal(q); if (!rs.length) continue; // stallo: non è matto
      if (rs.every(r => CH.mateIn(CH.make(q, r), n - 1))) return true;
    }
    return false;
  };
  CH.mateFirstMoves = (p, n) => CH.legal(p).filter(m => { const q = CH.make(p, m); if (CH.isMate(q)) return true; if (n === 1) return false; const rs = CH.legal(q); return rs.length > 0 && rs.every(r => CH.mateIn(CH.make(q, r), n - 1)); }).map(CH.moveStr);
  CH.material = p => { let s = 0; p.b.forEach(c => { if (c !== '.') s += (isW(c) ? 1 : -1) * VAL[c.toLowerCase()]; }); return s; };
  /* negamax con valutazione materiale (+ ricerca di quiete sulle catture) */
  const quiesce = (p, alpha, beta, side) => {
    const stand = side * CH.material(p); if (stand >= beta) return beta; if (stand > alpha) alpha = stand;
    for (const m of CH.legal(p).filter(x => x.cap)) { const sc = -quiesce(CH.make(p, m), -beta, -alpha, -side); if (sc >= beta) return beta; if (sc > alpha) alpha = sc; }
    return alpha;
  };
  const nega = (p, d, alpha, beta, side) => {
    const ms = CH.legal(p); if (!ms.length) return CH.inCheck(p) ? -100000 + (10 - d) : 0;
    if (d === 0) return quiesce(p, alpha, beta, side);
    let best = -1e9; for (const m of ms) { const sc = -nega(CH.make(p, m), d - 1, -beta, -alpha, -side); if (sc > best) best = sc; if (sc > alpha) alpha = sc; if (alpha >= beta) break; } return best;
  };
  /* valori delle mosse (dal punto di vista del lato che muove) a profondità d */
  CH.scoreMoves = (p, d) => { const side = p.turn === 'w' ? 1 : -1, out = {}; for (const m of CH.legal(p)) out[CH.moveStr(m)] = -nega(CH.make(p, m), d - 1, -1e9, 1e9, -side); return out; };
  CH.PIECE = { K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙', k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
})(window.ST = window.ST || {});
