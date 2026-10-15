/* SkillTree — laboratori di cultura e abilità generali: fusi orari, scale e coordinate, cronologia, finanza personale,
   unità di misura, statistica, fisica, chimica, astronomia, cucina, fai da te, musica, meccanica, primo soccorso (numeri). */
(function (ST) {
  'use strict';
  const U = ST.util, F = ST.cul = {}, gen = {}, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  F.gen = gen; F.MAXLV = 10;
  F.TYPES = ['tz', 'coord', 'hist', 'fin', 'unit', 'stat', 'phys', 'chem', 'astro', 'cook', 'diy', 'music', 'mech', 'aid'];
  F.LABEL = { tz: 'Mondo · fusi orari e ora locale', coord: 'Mondo · mappe, scale e direzioni', hist: 'Storia · cronologia e secoli', fin: 'Economia · finanza personale', unit: 'Numeri · unità di misura e conversioni', stat: 'Numeri · statistica e dati', phys: 'Scienze · fisica quotidiana', chem: 'Scienze · chimica: moli e pH', astro: 'Scienze · astronomia', cook: 'Pratica · cucina e dosi', diy: 'Pratica · casa e fai da te', music: 'Arti · musica e ritmo', mech: 'Pratica · meccanica e bicicletta', aid: 'Pratica · primo soccorso: numeri da ricordare' };
  F.GROUPS = { 'Mondo, tempo e storia': ['tz', 'coord', 'hist'], 'Numeri, soldi e dati': ['fin', 'unit', 'stat'], 'Scienze': ['phys', 'chem', 'astro'], 'Abilità pratiche e arti': ['cook', 'diy', 'mech', 'music', 'aid'] };
  F.EST = { tz: 55, coord: 60, hist: 45, fin: 80, unit: 45, stat: 55, phys: 60, chem: 65, astro: 60, cook: 55, diy: 70, music: 55, mech: 65, aid: 50 };
  const store = s => (s.cul = s.cul || {});
  F.rating = (s, t) => { const m = store(s)[t]; return m ? m.r : 1; };
  F.level = (s, t) => U.clamp(Math.round(F.rating(s, t)), 1, F.MAXLV);
  F.OFFSETS = [-1, -1, 0, 0, 0, 1, 1, 2];
  F.pickLevel = (s, t, rng) => U.clamp(Math.round(F.rating(s, t) + F.OFFSETS[Math.floor((rng || U.rand)() * F.OFFSETS.length)]), 1, F.MAXLV);
  F.record = (s, t, ok, ms, limitSec, d) => {
    const m = (store(s)[t] = store(s)[t] || { r: 1, n: 0, ok: 0, hist: [] }); let o = ok ? 1 : 0; if (o && limitSec && ms && ms > limitSec * 1000) o = 0.6;
    const dd = d != null ? d : F.level(s, t), p = 1 / (1 + Math.exp(-(m.r - dd)));
    m.r = U.clamp(m.r + 0.4 * (o - p), 1, F.MAXLV); m.n++; m.ok += ok ? 1 : 0; m.max = Math.max(m.max || 1, F.level(s, t)); m.last = U.today(); m.hist.push(o); if (m.hist.length > 20) m.hist.shift();
  };
  F.accuracy = (s, t) => { const m = store(s)[t]; return m && m.hist.length ? m.hist.slice(-10).reduce((a, b) => a + b, 0) / Math.min(10, m.hist.length) : null; };

  const c = x => String(x).replace(/(\d)\.(\d)/g, '$1,$2');
  const dec = (x, d) => { const s = (+x).toFixed(d), t = s.indexOf('.') >= 0 ? s.replace(/0+$/, '').replace(/\.$/, '') : s; return Array.from(new Set([s, s.replace('.', ','), t, t.replace('.', ',')])); };
  const fill = (type, q, ans, why, timed, extra) => Object.assign({ t: 'fill', mtype: type, num: true, q: c(q), a: Array.isArray(ans) ? ans : [String(ans)], why: c(why), timed }, extra || {});
  const clean = (x, d) => { const f = Math.pow(10, d), y = x * f; return Math.abs(Math.abs(y - Math.trunc(y)) - 0.5) > 0.06; };
  const R = Math.round, pick = (a, rng) => U.pick(a, rng);

  /* ---- fusi orari ---- */
  F.CITIES = [['Roma', 1], ['Londra', 0], ['New York', -5], ['Los Angeles', -8], ['Mosca', 3], ['Dubai', 4], ['Tokyo', 9], ['Sydney', 10], ['Città del Messico', -6], ['Nuova Delhi', 5.5]];
  gen.tz = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const A = pick(F.CITIES.filter(x => Number.isInteger(x[1])), rng); let B; do B = pick(F.CITIES.filter(x => Number.isInteger(x[1])), rng); while (B[0] === A[0]); const h = ri(rng, 0, 23), out = ((h + B[1] - A[1]) % 24 + 24) % 24; return fill('tz', 'Ora standard (senza ora legale). ' + A[0] + ' è a UTC' + (A[1] >= 0 ? '+' : '−') + Math.abs(A[1]) + ', ' + B[0] + ' è a UTC' + (B[1] >= 0 ? '+' : '−') + Math.abs(B[1]) + '. Quando a ' + A[0] + ' sono le ' + h + ':00 (24 h), che ora è a ' + B[0] + '? (solo il numero dell’ora, da 0 a 23)', out, 'Differenza ' + (B[1] - A[1]) + ' h: ' + h + ' + (' + (B[1] - A[1]) + ') = ' + (h + B[1] - A[1]) + ' → ' + out, 80); }
    if (k === 1) { const dl = ri(rng, 1, 18) * 15 * (rng() < 0.5 ? 1 : -1); return fill('tz', 'La Terra ruota di 360° in 24 ore, cioè 15° all’ora. Due città distano ' + Math.abs(dl) + '° di longitudine. Quante ore di differenza solare?', Math.abs(dl) / 15, Math.abs(dl) + ' / 15 = ' + Math.abs(dl) / 15, 55); }
    const d = ri(rng, 1, 9) * 15 + (rng() < 0.5 ? 0 : 7.5); return fill('tz', 'Con 15° di longitudine all’ora, quanti minuti di differenza solare ci sono per ' + d + '° di longitudine?', dec(d / 15 * 60, 0), d + ' / 15 × 60 = ' + d / 15 * 60 + ' minuti', 70);
  };
  /* ---- mappe, scale, direzioni ---- */
  gen.coord = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const N = pick([10000, 25000, 50000, 100000], rng), cm = ri(rng, 2, 18), km = cm * N / 100000; return fill('coord', 'Su una carta in scala 1:' + N + ' due punti distano ' + cm + ' cm. Quanti km sono nella realtà?', dec(km, 2), cm + ' cm × ' + N + ' = ' + cm * N + ' cm = ' + km + ' km', 80); }
    if (k === 1) { const a = ri(rng, 1, 40), b = ri(rng, 1, 40); if (a === b) return gen.coord(lv, rng); return fill('coord', 'Un grado di latitudine misura circa 111 km lungo un meridiano. Due città sullo stesso meridiano sono a ' + Math.max(a, b) + '° N e ' + Math.min(a, b) + '° N. Distanza approssimata in km?', 111 * Math.abs(a - b), '111 × ' + Math.abs(a - b) + ' = ' + 111 * Math.abs(a - b), 70); }
    if (k === 2) { const az = ri(rng, 0, 359); return fill('coord', 'L’azimut dalla tua posizione al rifugio è ' + az + '°. Qual è l’azimut inverso (dal rifugio a te), tra 0° e 359°?', (az + 180) % 360, '(' + az + ' + 180) mod 360 = ' + (az + 180) % 360, 70); }
    const mag = ri(rng, 0, 359), decl = ri(rng, 1, 8); return fill('coord', 'Con declinazione magnetica di ' + decl + '° Est, azimut vero = azimut magnetico + declinazione. Leggi ' + mag + '° sulla bussola. Qual è l’azimut vero (0°–359°)?', (mag + decl) % 360, mag + ' + ' + decl + ' = ' + (mag + decl) + ' → ' + (mag + decl) % 360, 80);
  };
  /* ---- cronologia ---- */
  F.EVENTS = [['la caduta dell’Impero romano d’Occidente', 476], ['la scoperta dell’America da parte di Colombo', 1492], ['la Rivoluzione francese', 1789], ['l’Unità d’Italia', 1861], ['l’inizio della prima guerra mondiale', 1914], ['la fine della seconda guerra mondiale', 1945], ['il referendum Monarchia/Repubblica in Italia', 1946], ['l’entrata in vigore della Costituzione italiana', 1948], ['i Trattati di Roma (CEE)', 1957], ['lo sbarco sulla Luna', 1969], ['la caduta del Muro di Berlino', 1989], ['l’introduzione fisica dell’euro (banconote e monete)', 2002]];
  gen.hist = (lv, rng) => {
    const k = ri(rng, 0, 2), E = F.EVENTS;
    if (k === 0) { const e = pick(E, rng); return fill('hist', 'In che anno è avvenuto/a ' + e[0] + '? (scrivi l’anno)', e[1], e[0] + ': ' + e[1], 40); }
    if (k === 1) { let a, b; do { a = pick(E, rng); b = pick(E, rng); } while (a[1] >= b[1]); return fill('hist', 'Quanti anni passano tra ' + a[0] + ' (' + a[1] + ') e ' + b[0] + ' (' + b[1] + ')?', b[1] - a[1], b[1] + ' − ' + a[1] + ' = ' + (b[1] - a[1]), 60); }
    const y = ri(rng, 100, 2020); return fill('hist', 'In che secolo (numero, es. XV → 15) cade l’anno ' + y + '? Il secolo n va dall’anno ' + 'n×100 − 99 all’anno n×100.', Math.ceil(y / 100), 'ceil(' + y + ' / 100) = ' + Math.ceil(y / 100), 50);
  };
  /* ---- finanza personale ---- */
  F.loanPay = (P, annualPct, months) => { const i = annualPct / 100 / 12; return P * i / (1 - Math.pow(1 + i, -months)); };
  gen.fin = (lv, rng) => {
    const k = ri(rng, 0, 5);
    if (k === 0) { const net = 50 * ri(rng, 2, 40); return fill('fin', 'Prezzo senza IVA ' + net + ' €, IVA al 22%. Prezzo finale in euro?', dec(net * 1.22, 2), net + ' × 1,22 = ' + (net * 1.22).toFixed(2), 60); }
    if (k === 1) { const p = 10 * ri(rng, 3, 30), d = pick([10, 15, 20, 25, 30, 40], rng); return fill('fin', 'Un articolo costa ' + p + ' € ed è scontato del ' + d + '%. Quanto paghi (euro)?', dec(p * (100 - d) / 100, 2), p + ' × ' + (100 - d) + '/100 = ' + p * (100 - d) / 100, 60); }
    if (k === 2) { const P = 100 * ri(rng, 5, 50), r = pick([2, 3, 4, 5, 10], rng), n = ri(rng, 2, 3), v = P * Math.pow(1 + r / 100, n); if (!clean(v, 2)) return gen.fin(lv, rng); return fill('fin', 'Capitale ' + P + ' €, interesse composto annuo del ' + r + '%, per ' + n + ' anni (nessun prelievo). Capitale finale in euro, due decimali?', dec(v, 2), P + ' × ' + (1 + r / 100) + '^' + n + ' = ' + v.toFixed(2), 100); }
    if (k === 3) { const P = 1000 * ri(rng, 5, 30), a = pick([3, 4, 5, 6, 8], rng), m = pick([12, 24, 36, 48, 60], rng), pay = F.loanPay(P, a, m); if (!clean(pay, 0)) return gen.fin(lv, rng); return fill('fin', 'Prestito di ' + P + ' € a tasso nominale annuo del ' + a + '% con rata mensile costante per ' + m + ' mesi (i = tasso/12; rata = P·i / (1 − (1+i)^(−n))). Rata in euro, arrotondata all’intero?', R(pay), 'i = ' + (a / 1200).toFixed(5) + '; rata = ' + pay.toFixed(2), 150); }
    if (k === 4) { const P = 10 * ri(rng, 5, 50), inf = pick([2, 3, 5], rng), n = ri(rng, 2, 5), v = P * Math.pow(1 + inf / 100, n); if (!clean(v, 2)) return gen.fin(lv, rng); return fill('fin', 'Un paniere costa ' + P + ' € oggi e i prezzi salgono del ' + inf + '% l’anno. Quanto costa tra ' + n + ' anni (euro, due decimali)?', dec(v, 2), P + ' × ' + (1 + inf / 100) + '^' + n + ' = ' + v.toFixed(2), 100); }
    const inc = 100 * ri(rng, 12, 40); return fill('fin', 'Con la regola 50/30/20 un reddito netto mensile di ' + inc + ' € è diviso in 50% bisogni, 30% desideri, 20% risparmio. Quanti euro al mese vanno al risparmio?', inc * 0.2, inc + ' × 0,20 = ' + inc * 0.2, 55);
  };
  /* ---- unità ---- */
  gen.unit = (lv, rng) => {
    const k = ri(rng, 0, 4);
    if (k === 0) { const v = 18 * ri(rng, 2, 20); return fill('unit', 'Converti ' + v + ' km/h in m/s (dividi per 3,6).', v / 3.6, v + ' / 3,6 = ' + v / 3.6, 60); }
    if (k === 1) { const f = 5 * ri(rng, -4, 24); return fill('unit', 'Converti ' + f + ' °C in gradi Fahrenheit (F = C × 9/5 + 32).', f * 9 / 5 + 32, f + ' × 9/5 + 32 = ' + (f * 9 / 5 + 32), 60); }
    if (k === 2) { const m = ri(rng, 2, 40); return fill('unit', 'Un’auto percorre ' + m + ' km con 1 litro. Quanti litri per 100 km (un decimale)?', dec(100 / m, 1), '100 / ' + m + ' = ' + (100 / m).toFixed(2), 70); }
    if (k === 3) { const t = ri(rng, 15, 400) / 10, d = ri(rng, 1, 9); return fill('unit', 'Scrivi in notazione scientifica 4,5 × 10^' + d + ': quanto vale l’esponente se lo moltiplichi per 10^3 (4,5 × 10^' + d + ' × 10^3 = 4,5 × 10^x)? Scrivi x.', d + 3, 'Si sommano gli esponenti: ' + d + ' + 3 = ' + (d + 3), 50); }
    const b = pick([2, 2.2, 2.4, 2.5, 3], rng), bar = b, psi = bar * 14.5; return fill('unit', 'Pressione di ' + bar + ' bar. Quanti psi (1 bar ≈ 14,5 psi, un decimale)?', dec(psi, 1), bar + ' × 14,5 = ' + psi.toFixed(1), 60);
  };
  /* ---- statistica ---- */
  gen.stat = (lv, rng) => {
    const n = ri(rng, 5, 9), xs = Array.from({ length: n }, () => ri(rng, 1, 30)), sorted = xs.slice().sort((a, b) => a - b), k = ri(rng, 0, 3);
    const mean = xs.reduce((a, b) => a + b, 0) / n, med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    if (k === 0) return fill('stat', 'Dati: ' + xs.join(', ') + '. Media aritmetica (un decimale)?', dec(mean, 1), xs.reduce((a, b) => a + b, 0) + ' / ' + n + ' = ' + mean.toFixed(2), 80);
    if (k === 1) return fill('stat', 'Dati: ' + xs.join(', ') + '. Mediana (un decimale se serve)?', dec(med, 1), 'Ordinati: ' + sorted.join(', ') + ' → mediana ' + med, 80);
    if (k === 2) return fill('stat', 'Dati: ' + xs.join(', ') + '. Campo di variazione (massimo − minimo)?', sorted[n - 1] - sorted[0], sorted[n - 1] + ' − ' + sorted[0] + ' = ' + (sorted[n - 1] - sorted[0]), 60);
    const w = [ri(rng, 2, 4), ri(rng, 2, 4), ri(rng, 1, 3)], g = [ri(rng, 6, 10), ri(rng, 6, 10), ri(rng, 6, 10)], tot = w.reduce((a, b) => a + b, 0), avg = (w[0] * g[0] + w[1] * g[1] + w[2] * g[2]) / tot; return fill('stat', 'Voti ' + g.join(', ') + ' con pesi (crediti) ' + w.join(', ') + '. Media ponderata (due decimali)?', dec(avg, 2), '(' + g.map((x, i) => x + '×' + w[i]).join(' + ') + ') / ' + tot + ' = ' + avg.toFixed(3), 90);
  };
  /* ---- fisica quotidiana ---- */
  gen.phys = (lv, rng) => {
    const k = ri(rng, 0, 4);
    if (k === 0) { const v = ri(rng, 3, 30) * 5, t = ri(rng, 2, 8); return fill('phys', 'Un ciclista va a ' + v + ' km/h per ' + t + ' ore. Quanti km percorre?', v * t, v + ' × ' + t + ' = ' + v * t, 50); }
    if (k === 1) { const V = pick([5, 12, 24, 230], rng), I = ri(rng, 1, 10) / 2, Rr = V / I; if (!clean(Rr, 2)) return gen.phys(lv, rng); return fill('phys', 'Legge di Ohm: R = V / I. Tensione ' + V + ' V e corrente ' + I + ' A. Resistenza in ohm (due decimali)?', dec(Rr, 2), V + ' / ' + I + ' = ' + Rr.toFixed(3), 70); }
    if (k === 2) { const P = 100 * ri(rng, 5, 30), h = ri(rng, 1, 6), pr = pick([0.2, 0.25, 0.3, 0.4], rng), kwh = P / 1000 * h, cost = kwh * pr; if (!clean(cost, 2)) return gen.phys(lv, rng); return fill('phys', 'Un apparecchio da ' + P + ' W resta acceso ' + h + ' ore; l’energia costa ' + pr + ' €/kWh. Costo in euro (due decimali)?', dec(cost, 2), P / 1000 + ' kW × ' + h + ' h = ' + kwh + ' kWh; × ' + pr + ' = ' + cost.toFixed(3), 90); }
    if (k === 3) { const m = ri(rng, 1, 20) * 5, a = ri(rng, 1, 8); return fill('phys', 'Seconda legge di Newton F = m·a. Massa ' + m + ' kg, accelerazione ' + a + ' m/s². Forza in newton?', m * a, m + ' × ' + a + ' = ' + m * a, 55); }
    const mm = ri(rng, 2, 20) * 50, V = ri(rng, 2, 20) * 10; return fill('phys', 'Densità = massa / volume. Massa ' + mm + ' g, volume ' + V + ' cm³. Densità in g/cm³ (due decimali)?', dec(mm / V, 2), mm + ' / ' + V + ' = ' + (mm / V).toFixed(3), 70);
  };
  /* ---- chimica ---- */
  F.MM = { 'H₂O': 18, 'CO₂': 44, 'CH₄': 16, 'NH₃': 17, 'NaCl': 58.5, 'NaOH': 40, 'CaCO₃': 100, 'H₂SO₄': 98, 'C₆H₁₂O₆': 180, 'O₂': 32 };
  gen.chem = (lv, rng) => {
    const k = ri(rng, 0, 3), names = Object.keys(F.MM);
    if (k === 0) { const f = pick(names, rng), m = F.MM[f] * pick([0.5, 1, 2, 3, 4], rng); return fill('chem', 'Massa molare di ' + f + ' = ' + F.MM[f] + ' g/mol (H=1, C=12, N=14, O=16, Na=23, S=32, Cl=35,5, Ca=40). Quante moli sono ' + m + ' g?', dec(m / F.MM[f], 2), m + ' / ' + F.MM[f] + ' = ' + m / F.MM[f], 70); }
    if (k === 1) { const f = pick(names, rng), n = pick([0.5, 1, 2, 3, 5], rng), m = F.MM[f] * n; return fill('chem', 'Massa molare di ' + f + ' = ' + F.MM[f] + ' g/mol. Quanti grammi sono ' + n + ' mol?', dec(m, 1), n + ' × ' + F.MM[f] + ' = ' + m, 60); }
    if (k === 2) { const e = ri(rng, 1, 13); return fill('chem', 'pH = −log₁₀[H⁺]. Una soluzione ha [H⁺] = 10^(−' + e + ') mol/L. Quanto vale il pH?', e, 'pH = −log₁₀(10^(−' + e + ')) = ' + e, 55); }
    const n = pick([0.1, 0.2, 0.25, 0.5, 1, 2], rng), V = pick([0.5, 1, 2, 4], rng), M = n / V; return fill('chem', 'Molarità = moli / volume (litri). ' + n + ' mol sciolte in ' + V + ' L. Molarità in mol/L (due decimali)?', dec(M, 2), n + ' / ' + V + ' = ' + M, 70);
  };
  /* ---- astronomia ---- */
  gen.astro = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const d = pick([384400, 149600000], rng), t = d / 299792; if (!clean(t, 0) && !clean(t, 1)) return gen.astro(lv, rng); const name = d === 384400 ? 'la Luna (384 400 km)' : 'il Sole (149 600 000 km)'; return fill('astro', 'La luce viaggia a circa 299 792 km/s. Quanti secondi impiega a raggiungerci da ' + name + '? (arrotonda all’intero)', R(t), d + ' / 299 792 = ' + t.toFixed(2) + ' s', 90); }
    if (k === 1) { const a = pick([4, 9, 16, 25], rng), T = Math.pow(a, 1.5); return fill('astro', 'Terza legge di Keplero: T² = a³ (T in anni, a in unità astronomiche). Un pianeta ha semiasse maggiore a = ' + a + ' UA. Periodo orbitale in anni?', T, 'T = ' + a + '^1,5 = ' + T, 90); }
    const T = pick([8, 27, 64, 125], rng), a = Math.cbrt(T * T); return fill('astro', 'Terza legge di Keplero: T² = a³ (anni, UA). Un asteroide ha periodo ' + T + ' anni. Semiasse maggiore in UA?', R(a), 'a = (' + T + '²)^(1/3) = ' + a, 90);
  };
  /* ---- cucina ---- */
  gen.cook = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const base = pick([4, 2, 3], rng), tgt = pick([6, 8, 10, 5, 9], rng), q = 50 * ri(rng, 2, 8), v = q * tgt / base; if (!clean(v, 0)) return gen.cook(lv, rng); return fill('cook', 'Una ricetta per ' + base + ' persone usa ' + q + ' g di farina. Quanti grammi per ' + tgt + ' persone?', R(v), q + ' × ' + tgt + '/' + base + ' = ' + v, 70); }
    if (k === 1) { const f = 100 * ri(rng, 3, 8), idr = pick([60, 65, 70, 75, 80], rng), acq = f * idr / 100; return fill('cook', 'Idratazione dell’impasto = acqua / farina × 100. Con ' + f + ' g di farina e idratazione ' + idr + '%, quanti grammi d’acqua servono?', acq, f + ' × ' + idr + '/100 = ' + acq, 60); }
    if (k === 2) { const g = 100 * ri(rng, 3, 10), litri = g / 100; return fill('cook', 'Regola pratica per la pasta: 1 litro d’acqua e 10 g di sale ogni 100 g di pasta. Per ' + g + ' g di pasta quanti grammi di sale?', g / 10, g + ' / 100 × 10 = ' + g / 10, 50); }
    const c = 10 * ri(rng, 13, 25), fh = c * 9 / 5 + 32; return fill('cook', 'Il forno è a ' + c + ' °C. Quanti gradi Fahrenheit (F = C × 9/5 + 32)?', fh, c + ' × 9/5 + 32 = ' + fh, 60);
  };
  /* ---- casa e fai da te ---- */
  gen.diy = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const w = ri(rng, 20, 60) / 10, h = ri(rng, 22, 30) / 10, mani = ri(rng, 1, 3), res = pick([8, 10, 12], rng), L = Math.ceil(w * h * mani / res * 100 - 1e-9) / 100, lat = pick([2.5, 5], rng), n = Math.ceil(L / lat - 1e-9); return fill('diy', 'Parete di ' + w + ' m × ' + h + ' m, ' + mani + ' mani di pittura con resa di ' + res + ' m² per litro. Quante latte da ' + lat + ' L servono (intere, arrotondate per eccesso)?', n, 'Area × mani = ' + (w * h * mani).toFixed(2) + ' m²; litri = ' + (w * h * mani / res).toFixed(2) + '; latte = ' + n, 100); }
    if (k === 1) { const W = ri(rng, 20, 60) / 10, H = ri(rng, 20, 50) / 10, tile = pick([0.25, 0.36, 0.5, 0.09], rng), margin = 1.1, n = Math.ceil(W * H * margin / tile - 1e-9); return fill('diy', 'Pavimento di ' + W + ' m × ' + H + ' m. Piastrelle da ' + tile + ' m² ciascuna e 10% in più per tagli e scarti. Quante piastrelle ordinare (intere)?', n, 'Area ' + (W * H).toFixed(2) + ' × 1,1 / ' + tile + ' = ' + (W * H * margin / tile).toFixed(2) + ' → ' + n, 100); }
    if (k === 2) { const P = 100 * ri(rng, 5, 35), I = P / 230; if (!clean(I, 1)) return gen.diy(lv, rng); return fill('diy', 'Corrente assorbita I = P / V con V = 230 V. Un apparecchio da ' + P + ' W. Quanti ampere (un decimale)?', dec(I, 1), P + ' / 230 = ' + I.toFixed(2), 70); }
    const a = ri(rng, 1, 4), b = ri(rng, 2, 6), tot = ri(rng, 3, 10) * (1 + a + b) * 1; return fill('diy', 'Un impasto si prepara con rapporto 1 : ' + a + ' : ' + b + ' (cemento : sabbia : ghiaia) in parti. In ' + tot + ' secchi totali di miscela, quanti secchi di sabbia?', tot * a / (1 + a + b), tot + ' × ' + a + ' / ' + (1 + a + b) + ' = ' + tot * a / (1 + a + b), 80);
  };
  /* ---- musica ---- */
  gen.music = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const bpm = pick([60, 75, 80, 100, 120, 125, 150, 200], rng); return fill('music', 'Con un tempo di ' + bpm + ' BPM, quanti millisecondi dura un battito (60 000 / BPM)?', 60000 / bpm, '60 000 / ' + bpm + ' = ' + 60000 / bpm, 60); }
    if (k === 1) { const bpm = pick([60, 90, 120, 150], rng), bars = ri(rng, 2, 16), ts = pick([3, 4], rng), sec = bars * ts * 60 / bpm; return fill('music', 'In tempo ' + ts + '/4 a ' + bpm + ' BPM, quanti secondi durano ' + bars + ' battute?', dec(sec, 1), bars + ' × ' + ts + ' battiti × ' + (60 / bpm) + ' s = ' + sec, 80); }
    if (k === 2) { const n = pick([12, -12, 24, -24, 36], rng), f = 440 * Math.pow(2, n / 12); return fill('music', 'Nel temperamento equabile f = 440 · 2^(n/12) Hz, con n semitoni dal La4 (440 Hz). Per n = ' + n + ' semitoni qual è la frequenza in Hz?', R(f), '440 × 2^(' + n + '/12) = ' + f, 80); }
    const iv = pick([['una terza maggiore', 4], ['una quinta giusta', 7], ['un’ottava', 12], ['una seconda maggiore', 2], ['una quarta giusta', 5]], rng), s = ri(rng, 0, 12); return fill('music', 'Quanti semitoni ci sono in ' + iv[0] + '? (intervalli standard)', iv[1], iv[0] + ' = ' + iv[1] + ' semitoni', 45);
  };
  /* ---- meccanica e bicicletta ---- */
  gen.mech = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const ch = pick([34, 36, 42, 50], rng), co = pick([11, 14, 17, 21], rng), cad = pick([60, 70, 80, 90], rng), circ = pick([2.1, 2.15, 2.2], rng), v = cad * (ch / co) * circ * 60 / 1000; if (!clean(v, 1)) return gen.mech(lv, rng); return fill('mech', 'Bicicletta: velocità (km/h) = cadenza (giri/min) × (corona/pignone) × circonferenza (m) × 60 / 1000. Corona ' + ch + ', pignone ' + co + ', cadenza ' + cad + ', circonferenza ' + circ + ' m. Velocità in km/h, un decimale?', dec(v, 1), cad + ' × ' + ch + '/' + co + ' × ' + circ + ' × 0,06 = ' + v.toFixed(2), 120); }
    if (k === 1) { const l = ri(rng, 3, 12) / 2, kml = 100 / l; if (!clean(kml, 1)) return gen.mech(lv, rng); return fill('mech', 'Un’auto consuma ' + l + ' litri ogni 100 km. Quanti km percorre con 1 litro (un decimale)?', dec(kml, 1), '100 / ' + l + ' = ' + kml.toFixed(2), 80); }
    if (k === 2) { const T = 10 * ri(rng, 10, 40), rpm = 500 * ri(rng, 4, 12), P = T * rpm * 2 * Math.PI / 60 / 1000; if (!clean(P, 0)) return gen.mech(lv, rng); return fill('mech', 'Potenza (kW) = coppia (N·m) × giri/min × 2π / 60 / 1000. Coppia ' + T + ' N·m a ' + rpm + ' giri/min. Potenza in kW, arrotondata all’intero?', R(P), T + ' × ' + rpm + ' × 2π / 60 000 = ' + P.toFixed(1), 100); }
    const v = 10 * ri(rng, 3, 13), a = pick([5, 6, 7, 8], rng), d = (v / 3.6) ** 2 / (2 * a); if (!clean(d, 0)) return gen.mech(lv, rng); return fill('mech', 'Spazio di frenata d = v² / (2a), con v in m/s. Auto a ' + v + ' km/h con decelerazione di ' + a + ' m/s². Spazio in metri, arrotondato all’intero?', R(d), 'v = ' + (v / 3.6).toFixed(2) + ' m/s; d = ' + d.toFixed(1), 100);
  };
  /* ---- primo soccorso: numeri e calcoli ---- */
  gen.aid = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) return fill('aid', 'Qual è il numero unico di emergenza in Italia e nell’Unione europea? (scrivi il numero)', 112, 'Il 112 è il numero unico di emergenza europeo.', 30);
    if (k === 1) { const r = pick([100, 110, 120], rng), s = pick([30, 60, 120], rng); return fill('aid', 'Nella rianimazione cardiopolmonare la frequenza consigliata delle compressioni è 100–120 al minuto. A ' + r + ' compressioni/min, quante compressioni in ' + s + ' secondi?', r * s / 60, r + ' × ' + s + '/60 = ' + r * s / 60, 70); }
    if (k === 2) { const n = ri(rng, 2, 8); return fill('aid', 'Con il rapporto 30 compressioni : 2 insufflazioni, quante compressioni in ' + n + ' cicli completi?', 30 * n, '30 × ' + n + ' = ' + 30 * n, 50); }
    const r = pick([100, 120], rng); return fill('aid', 'A ' + r + ' compressioni al minuto, quanti secondi servono per 30 compressioni?', 30 * 60 / r, '30 × 60 / ' + r + ' = ' + 30 * 60 / r, 60);
  };

  F.make = (type, level, rng) => { rng = rng || U.rand; const lv = U.clamp(Math.round(level), 1, F.MAXLV), it = gen[type](lv, rng); it.mtype = type; it.lv = lv; return it; };
  F.session = (s, rng) => { rng = rng || U.rand; const last = t => (store(s)[t] && store(s)[t].last) || '0000', order = F.TYPES.slice().sort((a, b) => last(a).localeCompare(last(b)) || (rng() - 0.5)), items = []; let t = 0, i = 0; while (t < 290 && items.length < 8) { const ty = order[i % 6]; i++; items.push(F.make(ty, F.pickLevel(s, ty, rng), rng)); t += F.EST[ty] || 50; } return items; };
})(window.ST = window.ST || {});
