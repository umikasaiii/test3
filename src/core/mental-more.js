/* SkillTree — allenamento mentale: cinque nuovi tipi con risposta calcolata dal generatore (stime di Fermi, aggiornamento bayesiano,
   pianificazione: Torre di Hanoi e ordine dei compiti, aggiornamento della memoria di lavoro). Ogni elemento porta i dati grezzi in `chk`. */
(function (ST) {
  'use strict';
  const U = ST.util, MN = ST.mental, G = MN.gen;
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const mc = (type, q, correct, wrongs, why, chk, timed) => { const o = U.shuffle([correct].concat(wrongs), U.rand); return { t: 'mc', mtype: type, q, o, a: o.indexOf(correct), why, chk, timed }; };
  const uniqWrong = (correct, cands, fmt, n) => { const out = []; for (const c of cands) { const f = fmt(c); if (f !== correct && !out.includes(f)) out.push(f); if (out.length >= n) break; } let k = 1; while (out.length < n) { const f = fmt(k++ * 7 + 3); if (f !== correct && !out.includes(f)) out.push(f); } return out; };
  /* ---- Fermi: ordine di grandezza di un prodotto di tre fattori ---- */
  const FERMI = [
    ['Una città ha {a} abitanti; ognuno beve in media {b} decilitri d’acqua al giorno e i giorni considerati sono {c}. Quanti decilitri in totale?', [[2e5, 5e6], [10, 30], [30, 365]]],
    ['Un negozio vende {a} articoli al giorno a {b} € di media, per {c} giorni di apertura. Quanti euro incassa?', [[80, 900], [5, 60], [200, 320]]],
    ['Un treno regionale ha {a} posti, fa {b} corse al giorno e viaggia {c} giorni l’anno. Quanti posti-corsa offre in un anno?', [[200, 600], [6, 40], [300, 365]]],
    ['Una rete di {a} sensori invia {b} byte ogni minuto per {c} minuti. Quanti byte in tutto?', [[500, 80000], [40, 900], [600, 90000]]],
    ['Una fabbrica produce {a} pezzi l’ora, {b} ore al giorno per {c} giorni. Quanti pezzi?', [[120, 4000], [8, 24], [20, 300]]]
  ];
  const nearPow10 = x => Math.round(Math.log10(x));
  G.fermi = (lv, rng) => {
    rng = rng || U.rand; let a, b, c, tpl, x, frac;
    do { tpl = U.pick(FERMI, rng); const [A, B, C] = tpl[1]; const f = r => Math.round(Math.exp(Math.log(r[0]) + rng() * (Math.log(r[1]) - Math.log(r[0])))); a = f(A); b = f(B); c = f(C); x = a * b * c; frac = Math.log10(x) % 1; } while (frac > 0.4 && frac < 0.6);
    const k = nearPow10(x), fmt = e => '10^' + e;
    return mc('fermi', tpl[0].replace('{a}', a).replace('{b}', b).replace('{c}', c) + ' Qual è l’ordine di grandezza (la potenza di 10 più vicina)?', fmt(k), uniqWrong(fmt(k), [k + 1, k - 1, k + 2, k - 2], fmt, 3),
      a + ' × ' + b + ' × ' + c + ' = ' + x + ' ≈ 10^' + (Math.log10(x)).toFixed(2) + ' → la potenza di 10 più vicina è 10^' + k + '. Stimare gli ordini di grandezza evita errori di fattore 10.', { a, b, c }, 60);
  };
  /* ---- Bayes: probabilità a posteriori ---- */
  G.bayes = (lv, rng) => {
    rng = rng || U.rand; let p, s, f, post;
    do { p = ri(rng, 1, 25); s = ri(rng, 70, 99); f = ri(rng, 1, 20); post = Math.round(100 * s * p / (s * p + f * (100 - p))); } while (post === s || post === p || post === 100 - f || post < 2);
    const fmt = v => v + '%';
    return mc('bayes', 'Una condizione riguarda il ' + p + '% delle persone. Un test la rileva nel ' + s + '% dei casi veri e dà un falso positivo nel ' + f + '% dei sani. Un test positivo: quanto è probabile la condizione?', fmt(post), uniqWrong(fmt(post), [s, p, 100 - f, Math.round((s + p) / 2)], fmt, 3),
      'P = ' + s + '·' + p + ' / (' + s + '·' + p + ' + ' + f + '·' + (100 - p) + ') ≈ ' + post + '%. Ignorare la probabilità di base porta a stimare ' + s + '%.', { p, s, f }, 70);
  };
  /* ---- Torre di Hanoi: pianificazione ---- */
  G.hanoi = (lv, rng) => {
    rng = rng || U.rand; const n = Math.min(9, 3 + Math.floor(lv / 3) + ri(rng, 0, 1));
    if (rng() < 0.5) { const m = Math.pow(2, n) - 1, fmt = v => String(v); return mc('hanoi', 'Torre di Hanoi con ' + n + ' dischi: quante mosse servono al minimo per spostare la torre da un piolo a un altro?', fmt(m), uniqWrong(fmt(m), [Math.pow(2, n), n * n, 2 * n - 1, Math.pow(2, n - 1)], fmt, 3), 'Il numero minimo è 2^' + n + ' − 1 = ' + m + ': ogni disco in più raddoppia le mosse e aggiunge una.', { n }, 40); }
    const first = n % 2 === 1 ? 'C' : 'B';
    return mc('hanoi', 'Torre di Hanoi con ' + n + ' dischi su A, da portare su C (B è il piolo di appoggio). Dove va per primo il disco più piccolo nella soluzione più breve?', first, ['A', 'B', 'C'].filter(x => x !== first).concat(['Non si sposta']), 'Con un numero ' + (n % 2 ? 'dispari' : 'pari') + ' di dischi il disco più piccolo va prima su ' + first + ': le mosse seguono il ciclo del disco piccolo.', { n }, 40);
  };
  /* ---- Pianificazione: ordine dei compiti (più corto prima) ---- */
  G.sched = (lv, rng) => {
    rng = rng || U.rand; const n = Math.min(6, 3 + Math.floor(lv / 5)); let d;
    do { d = Array.from({ length: n }, () => ri(rng, 1, 9)); } while (new Set(d).size !== n);
    const sorted = d.slice().sort((x, y) => x - y); let t = 0, sum = 0; sorted.forEach(x => { t += x; sum += t; });
    let tIn = 0, sumIn = 0; d.forEach(x => { tIn += x; sumIn += tIn; });
    const fmt = v => String(v);
    return mc('sched', 'Hai ' + n + ' compiti da svolgere uno dopo l’altro, durate (minuti): ' + d.join(', ') + '. Se li fai nell’ordine più corto-prima, qual è la somma dei tempi di completamento di tutti i compiti (utile per minimizzare l’attesa media)?', fmt(sum), uniqWrong(fmt(sum), [sumIn, sum + ri(rng, 3, 9), sum - ri(rng, 2, 6), d.reduce((a, x) => a + x, 0)], fmt, 3),
      'Ordine ottimo: ' + sorted.join(', ') + '; completamenti cumulati e somma = ' + sum + ' (nell’ordine dato sarebbe ' + sumIn + '). La regola «più breve prima» minimizza il tempo medio di completamento.', { d }, 70);
  };
  /* ---- Memoria di lavoro: aggiornamento di due registri ---- */
  const runOps = (a0, b0, ops) => { let A = a0, B = b0; ops.forEach(o => { const m = /^(A|B) \+ (\d+)$/.exec(o); if (m) { if (m[1] === 'A') A += +m[2]; else B += +m[2]; } else if (o === 'scambia A e B') { const t = A; A = B; B = t; } else A = A + B; }); return [A, B]; };
  G.update = (lv, rng) => {
    rng = rng || U.rand; const a0 = ri(rng, 2, 9), b0 = ri(rng, 2, 9), steps = Math.min(8, 3 + Math.floor(lv / 3)), ops = [];
    for (let i = 0; i < steps; i++) { const k = ri(rng, 1, 4), x = ri(rng, 1, 9); ops.push(k === 1 ? 'A + ' + x : k === 2 ? 'B + ' + x : k === 3 ? 'scambia A e B' : 'A diventa A + B'); }
    const [A, B] = runOps(a0, b0, ops), r = A - B, fmt = v => String(v), o = U.shuffle([fmt(r)].concat(uniqWrong(fmt(r), [r + 1, r - 1, A + B, r + 2, r - 2], fmt, 3)), U.rand);
    return { t: 'flash', mtype: 'update', show: 'Parti con A = ' + a0 + ' e B = ' + b0 + '. Operazioni: ' + ops.join('; ') + '.', ms: 2500 + steps * 1100, q: 'Dopo tutte le operazioni, quanto vale A − B?', o, a: o.indexOf(fmt(r)), why: 'A = ' + A + ' e B = ' + B + ': A − B = ' + r + '. Tenere due valori e aggiornarli a ogni passo è memoria di lavoro in azione.', chk: { a0, b0, ops }, timed: 60 };
  };
  MN.runOps = runOps;
  const LAB = { fermi: 'Stima di Fermi · ordini di grandezza', bayes: 'Aggiornamento bayesiano', hanoi: 'Pianificazione · Torre di Hanoi', sched: 'Pianificazione · ordine dei compiti', update: 'Memoria di lavoro · aggiornamento' };
  Object.keys(LAB).forEach(t => { MN.LABEL[t] = LAB[t]; MN.EST[t] = t === 'update' ? 24 : 26; MN.TYPES.push(t); });
  MN.DOMAINS[2].types = MN.DOMAINS[2].types.concat(['fermi']);        // mercoledì: calcolo e stima
  MN.DOMAINS[4].types = MN.DOMAINS[4].types.concat(['bayes', 'hanoi']); // venerdì: strategia e predizione
  MN.DOMAINS[5].types = MN.DOMAINS[5].types.concat(['sched']);        // sabato: enigmi e ragionamento
  MN.DOMAINS[1].types = MN.DOMAINS[1].types.concat(['update']);       // martedì: memoria
  MN.WEEK = MN.DOMAINS.map(d => d.types.slice(0, 3));
})(window.ST = window.ST || {});
