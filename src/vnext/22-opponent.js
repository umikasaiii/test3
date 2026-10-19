/* vNext M3 — Adaptive Opponent: gioco ripetuto (dilemma del prigioniero iterato, 10 round noti) contro cinque avversari con
   strategie ESPLICITE e deterministiche (macchine a stati sulla storia delle mosse). Nessuna casualità, nessuna «IA»: ogni reazione
   è una regola verificabile, mostrata a fine partita. Il massimo ottenibile contro ciascun avversario è calcolato per forza bruta
   (2^10 sequenze), così il giudizio è sul processo (quanto del massimo possibile è stato raggiunto), non sulla fortuna. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const O = M.opponent = { ROUNDS: 10, PAY: { CC: [3, 3], CD: [0, 5], DC: [5, 0], DD: [1, 1] } }; // [tuo, avversario]
  const C = 'C', D = 'D';
  const cnt = (h, who, m) => h.filter(r => r[who] === m).length;
  /* ogni strategia: (storia di [mia, tua]) → 'C' | 'D'; la «mia» mossa è dell'avversario, la «tua» è del giocatore */
  O.TYPES = {
    cons: { name: 'Conservativo', rule: 'Coopera finché non vieni tradito una volta: dopo la prima tua defezione defeziona sempre (rancore permanente).',
      play: h => (cnt(h, 1, D) ? D : C) },
    aggr: { name: 'Aggressivo', rule: 'Defeziona sempre, qualunque cosa tu faccia.',
      play: () => D },
    coop: { name: 'Cooperativo', rule: 'Copia la tua ultima mossa, ma perdona una tua defezione ogni cinque round (round 5 e 10 contano come perdono se la tua ultima mossa era D).',
      play: h => { const r = h.length; if (!r) return C; const last = h[r - 1][1]; return last === D && (r + 1) % 5 === 0 ? C : last; } },
    opp: { name: 'Opportunista', rule: 'Coopera nei primi due round; poi ti sfrutta (defeziona) se hai cooperato nelle ultime due mosse, ti punisce se hai appena defezionato e coopera solo se hai ripreso a cooperare dopo una defezione.',
      play: h => { const r = h.length; if (r < 2) return C; const a = h[r - 1][1], b = h[r - 2][1]; if (a === C && b === C) return D; if (a === D) return D; return C; } },
    ada: { name: 'Adattivo', rule: 'Gioca la mossa che hai giocato più spesso nelle ultime tre (maggioranza); al primo round coopera.',
      play: h => { if (!h.length) return C; const w = h.slice(-3), c = w.filter(r => r[1] === C).length; return c * 2 > w.length ? C : D; } }
  };
  O.TYPE_IDS = Object.keys(O.TYPES);
  O.payoff = (me, you) => O.PAY[me + you]; // me = giocatore
  O.step = (type, hist, mine) => { const opp = O.TYPES[type].play(hist.map(r => [r[1], r[0]])); const p = O.PAY[mine + opp]; return { opp, you: p[0], them: p[1] }; };
  /* punteggio di una sequenza completa di mosse del giocatore */
  O.run = (type, seq) => { let h = [], s = 0, t = 0; seq.forEach(m => { const r = O.step(type, h, m); h.push([m, r.opp]); s += r.you; t += r.them; }); return { score: s, theirs: t, hist: h }; };
  O.best = type => { let b = -1, bs = null; for (let m = 0; m < (1 << O.ROUNDS); m++) { const seq = []; for (let i = 0; i < O.ROUNDS; i++) seq.push(m >> i & 1 ? D : C); const r = O.run(type, seq); if (r.score > b) { b = r.score; bs = seq; } } return { score: b, seq: bs }; };
  const bestCache = {}; O.bestOf = type => bestCache[type] || (bestCache[type] = O.best(type));
  O.start = type => ({ type, hist: [], you: 0, them: 0, guess: null });
  O.play = (st, mine) => { if (st.hist.length >= O.ROUNDS) return null; const r = O.step(st.type, st.hist, mine); st.hist.push([mine, r.opp]); st.you += r.you; st.them += r.them; return r; };
  O.done = st => st.hist.length >= O.ROUNDS;
  O.result = st => { const b = O.bestOf(st.type), eff = b.score ? st.you / b.score : 0, allD = O.run(st.type, Array(O.ROUNDS).fill(D)).score; const guessOk = st.guess ? st.guess.type === st.type : null; return { you: st.you, them: st.them, best: b.score, eff, allD, guessOk, bestSeq: b.seq.join('') }; };

  M.registerLab({ id: 'opponent', title: 'Adaptive Opponent', view: 'sma-opponent', desc: 'Dieci round contro avversari con strategie diverse: leggi le loro reazioni, adattati, poi confronta il tuo punteggio con il massimo possibile.', ready: true });
  const games = {};
  const label = i => 'Avversario ' + (i + 1);
  V['sma-opponent'] = () => '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🧭 Adaptive Opponent</h1>' +
    '<p class="small mute">Dieci round di un gioco di cooperazione/tradimento (cooperare insieme: 3 a testa; tradire chi coopera: 5 a te e 0 a lui; tradirsi a vicenda: 1 a testa). L’avversario segue una regola esplicita che scoprirai alla fine: non è casuale e non è un’«intelligenza»; devi dedurla dalle sue reazioni. Fra i round puoi provare a indovinare il tipo.</p>' +
    '<div class="list">' + O.TYPE_IDS.map((t, i) => { const s = M.S(A.state).sims['opp:' + t]; return '<button class="item" data-act="smaOppOpen" data-t="' + t + '"><span class="tx"><b>' + label(i) + '</b><span>' + (s ? s.tries + ' partite · miglior risultato ' + Math.round(100 * s.bestEff) + '% del massimo' : 'mai giocato') + '</span></span></button>'; }).join('') + '</div>';
  const g = t => games[t] || (games[t] = O.start(t));
  V['sma-opponent-game'] = p => {
    const t = p.t, st = g(t), i = O.TYPE_IDS.indexOf(t), done = O.done(st);
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + label(i) + '</h1><p class="small">Round ' + Math.min(st.hist.length + 1, O.ROUNDS) + ' di ' + O.ROUNDS + ' · tu <b>' + st.you + '</b> · avversario <b>' + st.them + '</b></p>';
    h += '<div class="card"><h3>Storia</h3>' + (st.hist.length ? '<p class="small" style="font-family:monospace">' + st.hist.map((r, k) => (k + 1) + ': tu ' + r[0] + ' · lui ' + r[1]).join('<br>') + '</p>' : '<p class="small mute">Nessun round ancora.</p>') + '</div>';
    if (!done) {
      h += '<div class="card"><h3>La tua mossa</h3><div class="row" style="gap:8px"><button class="btn" data-act="smaOppMove" data-t="' + t + '" data-m="C">Coopero</button><button class="btn alt" data-act="smaOppMove" data-t="' + t + '" data-m="D">Tradisco</button></div></div>';
      if (st.hist.length >= 4) h += '<div class="card"><h3>Che tipo è?</h3><p class="small mute">Facoltativo: se indovini senza l’ultima mossa… non cambia il punteggio, ma conta come previsione.</p><div class="list">' + O.TYPE_IDS.map(x => '<button class="item' + (st.guess && st.guess.type === x ? ' done' : '') + '" data-act="smaOppGuess" data-t="' + t + '" data-g="' + x + '"><span class="tx"><b>' + E(O.TYPES[x].name) + '</b></span></button>').join('') + '</div></div>';
    } else {
      const r = O.result(st);
      h += '<div class="card glow"><h2 style="margin:0">' + E(O.TYPES[t].name) + '</h2><p class="small">' + E(O.TYPES[t].rule) + '</p></div>' +
        '<div class="card"><h3>Il tuo risultato</h3><p>Hai ottenuto <b>' + r.you + '</b> punti; il massimo possibile contro questo avversario era <b>' + r.best + '</b> (' + Math.round(100 * r.eff) + '%). Tradire sempre avrebbe dato ' + r.allD + '.</p>' +
        '<p class="small mute">Sequenza ottimale (C = coopera, D = tradisci): <span style="font-family:monospace">' + r.bestSeq + '</span>' + (r.guessOk == null ? '' : ' · la tua ipotesi era ' + (r.guessOk ? 'corretta' : 'sbagliata')) + '</p>' +
        '<p class="small">' + (r.eff >= 0.85 ? 'Ottimo adattamento: hai letto la regola e ne hai approfittato nel modo giusto.' : r.eff >= 0.6 ? 'Buon risultato, ma una lettura più rapida della regola avrebbe reso di più.' : 'Hai lasciato molto sul tavolo: osserva come l’avversario reagisce a una tua defezione e a una tua cooperazione prolungata prima di scegliere una linea.') + '</p></div>' +
        '<div class="row"><button class="btn" data-act="smaOppAgain" data-t="' + t + '">Rigioca</button></div>';
    }
    return h;
  };
  X.smaOppOpen = el => { A.go('sma-opponent-game', { t: el.dataset.t }); };
  X.smaOppMove = el => {
    const t = el.dataset.t, st = g(t); O.play(st, el.dataset.m);
    if (O.done(st) && !st.saved) {
      st.saved = true; const r = O.result(st), s = A.state, S = M.S(s), e = (S.sims['opp:' + t] = S.sims['opp:' + t] || { tries: 0, bestEff: 0 });
      e.tries++; e.bestEff = Math.max(e.bestEff, r.eff);
      ST.act.record(s, 'opponent', { item: t, ok: r.eff >= 0.75, score: r.eff });
      M.record(s, 'adaptability', 'opp:' + t, 'auto', r.eff >= 0.75, {});
      if (st.guess) M.record(s, 'deduction', 'opp:' + t, 'auto', r.guessOk, { conf: null });
      try { A.xp(r.eff >= 0.75 ? 3 : 1, 'sma:opp:' + t + ':' + e.tries); } catch (err) { /* ignora */ }
      A.save();
    }
    A.render();
  };
  X.smaOppGuess = el => { const st = g(el.dataset.t); st.guess = { type: el.dataset.g, at: st.hist.length }; A.render(); };
  X.smaOppAgain = el => { delete games[el.dataset.t]; A.render(); };
})(window.ST = window.ST || {});
