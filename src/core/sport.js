/* SkillTree — laboratori di scienze dello sport: carichi di forza, energia e nutrizione, zone di allenamento, pianificazione.
   Formule standard dichiarate nel testo di ogni esercizio; i test le ricalcolano con un metodo indipendente. */
(function (ST) {
  'use strict';
  const U = ST.util, SP = ST.sport = {}, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1)), gen = {};
  SP.TYPES = ['orm', 'vol', 'plates', 'phys', 'hrz', 'pace', 'vo2', 'load', 'peri', 'tdee', 'macro', 'food', 'bal', 'hydr'];
  SP.LABEL = { orm: 'Forza · 1RM e percentuali', vol: 'Forza · volume e tonnellaggio', plates: 'Forza · carico del bilanciere', phys: 'Biomeccanica · potenza e lavoro', hrz: 'Resistenza · zone cardiache', pace: 'Resistenza · ritmi e dispendio', vo2: 'Resistenza · VO2max e previsioni', load: 'Carico · RPE di sessione', peri: 'Periodizzazione · volumi e scarico', tdee: 'Nutrizione · metabolismo ed energia', macro: 'Nutrizione · macronutrienti', food: 'Nutrizione · etichette e porzioni', bal: 'Nutrizione · bilancio e variazione di peso', hydr: 'Idratazione · sudorazione e perdite' };
  SP.GROUPS = { 'Forza e potenza': ['orm', 'vol', 'plates', 'phys'], 'Resistenza': ['hrz', 'pace', 'vo2'], 'Carico e periodizzazione': ['load', 'peri'], 'Nutrizione e idratazione': ['tdee', 'macro', 'food', 'bal', 'hydr'] };
  SP.EST = { orm: 50, vol: 45, plates: 50, phys: 55, hrz: 55, pace: 55, vo2: 60, load: 50, peri: 55, tdee: 60, macro: 50, food: 45, bal: 50, hydr: 55 };
  SP.MAXLV = 10;

  /* ---- modello di abilità (come gli altri laboratori) ---- */
  const store = s => (s.sport = s.sport || {});
  SP.rating = (s, t) => { const m = store(s)[t]; return m ? m.r : 1; };
  SP.level = (s, t) => U.clamp(Math.round(SP.rating(s, t)), 1, SP.MAXLV);
  SP.OFFSETS = [-1, -1, 0, 0, 0, 1, 1, 2];
  SP.pickLevel = (s, t, rng) => U.clamp(Math.round(SP.rating(s, t) + SP.OFFSETS[Math.floor((rng || U.rand)() * SP.OFFSETS.length)]), 1, SP.MAXLV);
  SP.record = (s, t, ok, ms, limitSec, d) => {
    const m = (store(s)[t] = store(s)[t] || { r: 1, n: 0, ok: 0, hist: [] }); let o = ok ? 1 : 0; if (o && limitSec && ms && ms > limitSec * 1000) o = 0.6;
    const dd = d != null ? d : SP.level(s, t), p = 1 / (1 + Math.exp(-(m.r - dd)));
    m.r = U.clamp(m.r + 0.4 * (o - p), 1, SP.MAXLV); m.n++; m.ok += ok ? 1 : 0; m.max = Math.max(m.max || 1, SP.level(s, t)); m.last = U.today(); m.hist.push(o); if (m.hist.length > 20) m.hist.shift();
  };
  SP.accuracy = (s, t) => { const m = store(s)[t]; return m && m.hist.length ? m.hist.slice(-10).reduce((a, b) => a + b, 0) / Math.min(10, m.hist.length) : null; };

  const fill = (type, q, ans, why, timed, extra) => Object.assign({ t: 'fill', mtype: type, num: true, q, a: [String(ans)], why, timed }, extra || {});
  const clean = x => Math.abs(x - Math.round(x)) < 1e-9 || Math.abs(Math.abs(x - Math.trunc(x)) - 0.5) > 0.08;   // evita arrotondamenti ambigui
  const R = x => Math.round(x);

  /* ---- 1RM e percentuali ---- */
  SP.epley = (w, r) => w * (1 + r / 30); SP.brzycki = (w, r) => w * 36 / (37 - r);
  gen.orm = (lv, rng) => {
    const k = ri(rng, 0, lv >= 4 ? 3 : 1);
    if (k === 0) { const r = U.pick([3, 6, 9, 12, 15], rng), w = 10 * ri(rng, 5, 12 + lv), v = SP.epley(w, r); return fill('orm', 'Con la formula di Epley (1RM = carico × (1 + ripetizioni/30)), hai sollevato ' + w + ' kg per ' + r + ' ripetizioni. Stima della 1RM in kg (numero intero)?', R(v), 'Epley: ' + w + ' × (1 + ' + r + '/30) = ' + R(v), 70); }
    if (k === 1) { const p = U.pick([60, 65, 70, 75, 80, 85, 90], rng), m = 20 * ri(rng, 4, 8 + lv); return fill('orm', 'La tua 1RM nello squat è ' + m + ' kg. Quanti kg corrispondono al ' + p + '% (numero intero)?', R(m * p / 100), m + ' × ' + p + '/100 = ' + R(m * p / 100), 60); }
    if (k === 2) { const r = U.pick([10, 13, 19], rng), mult = { 10: 3, 13: 2, 19: 1 }[r], w = mult * ri(rng, 15, 40); return fill('orm', 'Con la formula di Brzycki (1RM = carico × 36/(37 − ripetizioni)), hai sollevato ' + w + ' kg per ' + r + ' ripetizioni. Stima della 1RM in kg?', R(SP.brzycki(w, r)), 'Brzycki: ' + w + ' × 36/' + (37 - r) + ' = ' + R(SP.brzycki(w, r)), 80); }
    const m = 20 * ri(rng, 5, 10 + lv), pa = U.pick([60, 70, 80], rng), pb = U.pick([85, 90, 95], rng); return fill('orm', '1RM = ' + m + ' kg. Una serie a ' + pa + '% e una a ' + pb + '%: di quanti kg è più pesante la seconda (numero intero)?', R(m * (pb - pa) / 100), m + ' × (' + pb + ' − ' + pa + ')/100 = ' + R(m * (pb - pa) / 100), 80);
  };
  /* ---- volume ---- */
  gen.vol = (lv, rng) => {
    const k = ri(rng, 0, lv >= 3 ? 2 : 1);
    if (k === 0) { const s = ri(rng, 3, 5), r = ri(rng, 5, 12), w = 5 * ri(rng, 8, 30 + lv * 2); return fill('vol', 'Tonnellaggio = serie × ripetizioni × carico. ' + s + ' serie da ' + r + ' ripetizioni con ' + w + ' kg. Tonnellaggio in kg?', s * r * w, s + ' × ' + r + ' × ' + w + ' = ' + s * r * w, 55); }
    if (k === 1) { const ex = ri(rng, 2, 4), s = ri(rng, 3, 4), f = ri(rng, 2, 3); return fill('vol', 'Un gruppo muscolare riceve ' + ex + ' esercizi da ' + s + ' serie effettive ciascuno per sessione, ' + f + ' sessioni a settimana. Serie settimanali per quel gruppo?', ex * s * f, ex + ' × ' + s + ' × ' + f + ' = ' + ex * s * f, 55); }
    const a = ri(rng, 4, 8) * 1000, p = U.pick([5, 10, 15, 20], rng); return fill('vol', 'Il tonnellaggio settimanale è ' + a + ' kg. Aumentandolo del ' + p + ', quanti kg diventa (numero intero)?', R(a * (100 + p) / 100), a + ' × ' + (100 + p) + '/100 = ' + R(a * (100 + p) / 100), 70);
  };
  /* ---- carico del bilanciere ---- */
  SP.minPlates = (perSide, set) => { const T = Math.round(perSide * 100), P = set.map(x => Math.round(x * 100)), dp = new Array(T + 1).fill(Infinity); dp[0] = 0; for (let x = 1; x <= T; x++) P.forEach(p => { if (p <= x) dp[x] = Math.min(dp[x], dp[x - p] + 1); }); return dp[T]; };
  gen.plates = (lv, rng) => {
    const sets = [[25, 20, 15, 10, 5, 2.5, 1.25], [20, 10, 5, 2.5, 1.25], [25, 15, 10, 5, 2.5], [20, 15, 10, 5, 2.5, 1.25]], set = U.pick(sets, rng);
    for (let t = 0; t < 100; t++) { const parts = ri(rng, 1, 3 + Math.floor(lv / 3)), per = Array.from({ length: parts }, () => U.pick(set, rng)).reduce((a, b) => a + b, 0), total = 20 + 2 * per, m = SP.minPlates(per, set); if (!isFinite(m) || per < 10) continue;
      return fill('plates', 'Bilanciere da 20 kg, dischi disponibili (kg): ' + set.join(', ') + ' (quantità illimitate, stesso carico su entrambi i lati). Qual è il numero minimo di dischi totali (entrambi i lati) per caricare ' + total + ' kg?', 2 * m, 'Per lato servono ' + per + ' kg: minimo ' + m + ' dischi, in totale ' + 2 * m, 80); }
    return gen.orm(lv, rng);
  };
  /* ---- fisica del movimento ---- */
  gen.phys = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const F = 50 * ri(rng, 6, 24), v = U.pick([0.5, 1, 1.5, 2], rng); return fill('phys', 'Potenza = forza × velocità. Una forza media di ' + F + ' N a ' + v + ' m/s. Quanti watt (numero intero)?', R(F * v), F + ' × ' + v + ' = ' + R(F * v), 55); }
    if (k === 1) { const F = 100 * ri(rng, 3, 20), d = U.pick([0.5, 1, 2, 3], rng); return fill('phys', 'Lavoro = forza × spostamento. Spingi con ' + F + ' N per ' + d + ' m. Quanti joule (numero intero)?', R(F * d), F + ' × ' + d + ' = ' + R(F * d), 55); }
    if (k === 2) { for (let t = 0; t < 100; t++) { const tf = ri(rng, 40, 80) / 100, h = 9.81 * tf * tf / 8 * 100; if (!clean(h)) continue; return fill('phys', 'Salto verticale: tempo di volo ' + tf + ' s. Altezza h = g·t²/8 (g = 9,81 m/s²). Quanti cm (arrotonda all’intero)?', R(h), 'h = 9,81 × ' + tf + '² / 8 = ' + (h / 100).toFixed(3) + ' m = ' + R(h) + ' cm', 90); } }
    const m = 5 * ri(rng, 12, 20), P = m * ri(rng, 10, 20 + lv); return fill('phys', 'Potenza relativa = potenza / massa corporea. ' + P + ' W prodotti da un atleta di ' + m + ' kg. Quanti W/kg (numero intero)?', P / m, P + '/' + m + ' = ' + P / m, 70);
  };
  /* ---- zone cardiache ---- */
  gen.hrz = (lv, rng) => {
    const k = ri(rng, 0, lv >= 3 ? 3 : 1);
    if (k === 0) { const age = 10 * ri(rng, 2, 6); return fill('hrz', 'Stima della frequenza cardiaca massima con la formula di Tanaka: FCmax = 208 − 0,7 × età. Età ' + age + ' anni. FCmax in battiti/min (numero intero)?', R(208 - 0.7 * age), '208 − 0,7 × ' + age + ' = ' + R(208 - 0.7 * age), 55); }
    if (k === 1) { const age = ri(rng, 18, 60); return fill('hrz', 'Con la formula FCmax = 220 − età, un atleta di ' + age + ' anni. Qual è il 70% della FCmax, arrotondato all’intero?', R((220 - age) * 0.7), '(220 − ' + age + ') × 0,7 = ' + R((220 - age) * 0.7), 65); }
    const rest = 5 * ri(rng, 8, 14), res = 20 * ri(rng, 6, 8), mx = rest + res, p = U.pick([60, 65, 70, 75, 80, 85, 90], rng), v = res * p / 100 + rest;
    if (k === 2 || lv < 6) return fill('hrz', 'Metodo di Karvonen: FC target = (FCmax − FCriposo) × intensità + FCriposo. FCmax ' + mx + ', FCriposo ' + rest + ', intensità ' + p + '%. FC target (battiti/min)?', R(v), '(' + mx + ' − ' + rest + ') × ' + p + '% + ' + rest + ' = ' + R(v), 75);
    const lo = U.pick([60, 65, 70], rng), hi = lo + 10, a = res * lo / 100 + rest, b = res * hi / 100 + rest; return fill('hrz', 'Karvonen con FCmax ' + mx + ' e FCriposo ' + rest + '. Quanto è ampia (in battiti) la zona compresa fra il ' + lo + '% e il ' + hi + '% della riserva cardiaca?', R(b - a), (hi - lo) + '% di ' + res + ' = ' + R(b - a), 80);
  };
  /* ---- ritmi e dispendio ---- */
  gen.pace = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const p = U.pick([3, 4, 5, 6, 10, 12], rng); return fill('pace', 'Un ritmo di ' + p + ' min/km. Qual è la velocità in km/h (numero intero)?', 60 / p, '60/' + p + ' = ' + 60 / p, 55); }
    if (k === 1) { const p = U.pick([4, 5, 6, 7], rng), d = ri(rng, 3, 15 + lv); return fill('pace', 'Corri ' + d + ' km a ritmo costante di ' + p + ' min/km. Quanti minuti totali?', p * d, d + ' × ' + p + ' = ' + p * d, 55); }
    const met = U.pick([4, 6, 8, 10, 12], rng), kg = 5 * ri(rng, 12, 20), h = U.pick([0.5, 1, 1.5, 2], rng); return fill('pace', 'Dispendio stimato = MET × peso (kg) × ore. Attività da ' + met + ' MET, ' + kg + ' kg, ' + h + ' h. Quante kcal (numero intero)?', R(met * kg * h), met + ' × ' + kg + ' × ' + h + ' = ' + R(met * kg * h), 70);
  };
  gen.vo2 = (lv, rng) => {
    for (let t = 0; t < 100; t++) {
      if (rng() < 0.5) { const d = 50 * ri(rng, 40, 62), v = (d - 504.9) / 44.73; if (!clean(v)) continue; return fill('vo2', 'Test di Cooper (12 minuti): VO2max (ml/kg/min) = (distanza in m − 504,9) / 44,73. Percorsi ' + d + ' m. Stima arrotondata all’intero?', R(v), '(' + d + ' − 504,9)/44,73 = ' + v.toFixed(1), 90); }
      const D1 = U.pick([5, 10], rng), T1 = ri(rng, 20, 55), D2 = D1 * 2, T2 = T1 * Math.pow(D2 / D1, 1.06); if (!clean(T2)) continue;
      return fill('vo2', 'Formula di Riegel: T2 = T1 × (D2/D1)^1,06. Tempo sui ' + D1 + ' km: ' + T1 + ' min. Tempo previsto sui ' + D2 + ' km, in minuti arrotondati all’intero? (è una stima: peggiora su distanze molto diverse)', R(T2), T1 + ' × 2^1,06 = ' + T2.toFixed(1), 100);
    }
    return gen.pace(lv, rng);
  };
  /* ---- carico interno ---- */
  gen.load = (lv, rng) => {
    const n = ri(rng, 3, 5), ses = Array.from({ length: n }, () => [ri(rng, 3, 9), 5 * ri(rng, 6, 18)]), tot = ses.reduce((a, x) => a + x[0] * x[1], 0);
    if (lv >= 4 && rng() < 0.5) { for (let t = 0; t < 60; t++) { const wk = Array.from({ length: 4 }, () => 100 * ri(rng, 20, 45)); if (wk.reduce((a, b) => a + b, 0) % 4) continue; const ch = wk.reduce((a, b) => a + b, 0) / 4; return fill('load', 'Carichi settimanali (unità arbitrarie, AU) delle ultime 4 settimane: ' + wk.join(', ') + '. Carico cronico = media delle 4 settimane. Quanto vale?', ch, 'Somma ' + wk.reduce((a, b) => a + b, 0) + ' / 4 = ' + ch, 80); } }
    return fill('load', 'RPE di sessione: carico = RPE (0–10) × durata (min). Sessioni della settimana (RPE × minuti): ' + ses.map(x => x[0] + '×' + x[1]).join(', ') + '. Carico settimanale in AU?', tot, ses.map(x => x[0] * x[1]).join(' + ') + ' = ' + tot, 85, { ses });
  };
  /* ---- periodizzazione ---- */
  gen.peri = (lv, rng) => {
    if (rng() < 0.5) { const B = 20 * ri(rng, 1, 3), wks = [B, B * 1.1, B * 1.2, B * 1.3], de = wks[3] / 2, tot = wks.reduce((a, b) => a + b, 0) + de; return fill('peri', 'Blocco di 4 settimane: la settimana 1 ha ' + B + ' serie; ogni settimana successiva aggiunge il 10% del volume della settimana 1 (+' + B / 10 + ' serie). Segue una settimana di scarico al 50% della settimana 4. Totale serie delle 5 settimane?', R(tot), wks.map(R).join(' + ') + ' + ' + R(de) + ' = ' + R(tot), 100); }
    const V = 50 * ri(rng, 2, 6), tot = V * (0.8 + 0.6 + 0.4); return fill('peri', 'Tapering a 3 settimane prima della gara: volumi al 80%, 60% e 40% di un volume abituale di ' + V + ' km/settimana. Totale km delle 3 settimane (numero intero)?', R(tot), V + ' × (0,8 + 0,6 + 0,4) = ' + R(tot), 80);
  };
  /* ---- energia ---- */
  SP.bmr = (sex, kg, cm, age) => 10 * kg + 6.25 * cm - 5 * age + (sex === 'm' ? 5 : -161);
  gen.tdee = (lv, rng) => {
    const sex = rng() < 0.5 ? 'm' : 'f', kg = 5 * ri(rng, 11, 19), cm = 4 * ri(rng, 39, 49), age = ri(rng, 18, 55), b = SP.bmr(sex, kg, cm, age), who = (sex === 'm' ? 'Uomo' : 'Donna') + ', ' + kg + ' kg, ' + cm + ' cm, ' + age + ' anni. ';
    if (lv >= 3 && rng() < 0.5) for (let t = 0; t < 60; t++) { const f = U.pick([1.2, 1.375, 1.55, 1.725], rng), v = b * f; if (!clean(v)) continue; return fill('tdee', who + 'BMR di Mifflin-St Jeor (10·kg + 6,25·cm − 5·età + 5 per uomo, − 161 per donna) × fattore di attività ' + f + '. TDEE in kcal, arrotondato all’intero?', R(v), 'BMR ' + b + ' × ' + f + ' = ' + R(v), 100); }
    return fill('tdee', who + 'BMR con Mifflin-St Jeor: 10·kg + 6,25·cm − 5·età, più 5 per uomo o meno 161 per donna. Quante kcal/giorno?', b, '10×' + kg + ' + 6,25×' + cm + ' − 5×' + age + (sex === 'm' ? ' + 5' : ' − 161') + ' = ' + b, 85);
  };
  gen.macro = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const P = 5 * ri(rng, 12, 40), C = 5 * ri(rng, 30, 80), F = 5 * ri(rng, 8, 24); return fill('macro', 'Energia = 4 kcal/g (proteine) + 4 kcal/g (carboidrati) + 9 kcal/g (grassi). ' + P + ' g di proteine, ' + C + ' g di carboidrati, ' + F + ' g di grassi. Quante kcal?', 4 * P + 4 * C + 9 * F, '4×' + P + ' + 4×' + C + ' + 9×' + F + ' = ' + (4 * P + 4 * C + 9 * F), 70); }
    if (k === 1) { const kg = 5 * ri(rng, 12, 20), g = U.pick([1.2, 1.4, 1.6, 1.8, 2], rng); return fill('macro', 'Un obiettivo di ' + g + ' g di proteine per kg di peso (valore dentro gli intervalli usati per atleti). Peso ' + kg + ' kg: quanti grammi di proteine al giorno?', R(kg * g), kg + ' × ' + g + ' = ' + R(kg * g), 65); }
    const kc = 100 * ri(rng, 20, 35), pc = U.pick([10, 20, 25, 30], rng); return fill('macro', 'Dieta da ' + kc + ' kcal con il ' + pc + '% dell’energia dalle proteine (4 kcal/g). Quanti grammi di proteine?', R(kc * pc / 100 / 4), kc + ' × ' + pc + '% / 4 = ' + R(kc * pc / 100 / 4), 80);
  };
  gen.food = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const p = 2 * ri(rng, 5, 15), g = 50 * ri(rng, 2, 8); return fill('food', 'Etichetta: ' + p + ' g di proteine per 100 g di alimento. Quanti grammi di proteine in una porzione da ' + g + ' g?', p * g / 100, p + ' × ' + g + '/100 = ' + p * g / 100, 50); }
    if (k === 1) { const p = U.pick([10, 12, 15, 20, 24, 25, 30], rng); return fill('food', 'Un alimento contiene ' + p + ' g di proteine per 100 g. Quanti grammi di alimento servono per ottenere 30 g di proteine?', 3000 / p, '30 / ' + p + ' × 100 = ' + 3000 / p, 70); }
    const kc = 50 * ri(rng, 3, 12), g = 50 * ri(rng, 1, 6); return fill('food', 'Un alimento fornisce ' + kc + ' kcal per 100 g. Quante kcal in ' + g + ' g?', kc * g / 100, kc + ' × ' + g + '/100 = ' + kc * g / 100, 50);
  };
  gen.bal = (lv, rng) => {
    const d = U.pick([275, 550, 1100], rng), X = ri(rng, 1, 4 + Math.floor(lv / 3)), w = 7700 * X / (7 * d);
    return fill('bal', 'Regola approssimata: 7700 kcal ≈ 1 kg di massa corporea (è una stima che trascura l’adattamento metabolico). Deficit medio di ' + d + ' kcal/giorno. In quante settimane si perdono ' + X + ' kg secondo la regola?', w, '7700 × ' + X + ' / (7 × ' + d + ') = ' + w, 85);
  };
  gen.hydr = (lv, rng) => {
    const k = ri(rng, 0, 1);
    if (k === 0) { const pre = U.pick([50, 100], rng), pct = U.pick([1, 2, 3], rng), loss = pre * pct / 100; return fill('hydr', 'Peso prima dell’allenamento ' + pre + ' kg, dopo ' + (pre - loss) + ' kg (nessun liquido assunto). Perdita di peso in percentuale?', pct, loss + '/' + pre + ' × 100 = ' + pct + '%', 60); }
    const pre = 70, loss = ri(rng, 3, 15) / 10, fluid = 100 * ri(rng, 2, 8), t = U.pick([1, 2], rng), sw = (loss * 1000 + fluid) / t;
    return fill('hydr', 'Tasso di sudore (ml/h) = (peso prima − peso dopo) in grammi + liquidi bevuti in ml, diviso le ore (diuresi trascurata). Prima ' + pre + ' kg, dopo ' + (pre - loss).toFixed(1) + ' kg, bevuti ' + fluid + ' ml in ' + t + ' h. Tasso di sudore in ml/h?', R(sw), '(' + loss * 1000 + ' + ' + fluid + ')/' + t + ' = ' + R(sw), 90);
  };

  SP.gen = gen;
  SP.make = (type, level, rng) => { rng = rng || U.rand; const lv = U.clamp(Math.round(level), 1, SP.MAXLV), it = gen[type](lv, rng); it.mtype = type; it.lv = lv; return it; };
  SP.session = (s, rng) => { rng = rng || U.rand; const last = t => (store(s)[t] && store(s)[t].last) || '0000', order = SP.TYPES.slice().sort((a, b) => last(a).localeCompare(last(b)) || (rng() - 0.5)), items = []; let t = 0, i = 0; while (t < 290 && items.length < 8) { const ty = order[i % 6]; i++; items.push(SP.make(ty, SP.pickLevel(s, ty, rng), rng)); t += SP.EST[ty] || 50; } return items; };
})(window.ST = window.ST || {});
