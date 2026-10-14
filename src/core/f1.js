/* SkillTree — laboratori di Formula 1: tempi sul giro, strategia di sosta, undercut, punti, fisica della vettura.
   Modelli semplificati dichiarati nel testo; i test li ricalcolano con un metodo indipendente. */
(function (ST) {
  'use strict';
  const U = ST.util, F = ST.f1 = {}, gen = {}, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  F.gen = gen; F.MAXLV = 10;
  F.TYPES = ['time', 'points', 'gap', 'stint', 'pitstrat', 'undercut', 'fuel', 'gear', 'brake', 'corner', 'aero', 'ers'];
  F.LABEL = { time: 'Tempi · giri, distanza e velocità media', points: 'Campionato · punti e titolo matematico', gap: 'Gara · distacchi e giri per raggiungere', stint: 'Gomme · tempo di uno stint con degrado', pitstrat: 'Strategia · una sosta contro due', undercut: 'Strategia · undercut', fuel: 'Fisica · effetto del carburante sul giro', gear: 'Tecnica · velocità, giri motore e rapporti', brake: 'Fisica · frenata', corner: 'Fisica · velocità in curva', aero: 'Aerodinamica · carico e potenza assorbita', ers: 'Power unit · energia e potenza ERS' };
  F.GROUPS = { 'Regole, tempi e punti': ['time', 'points', 'gap'], 'Gomme e strategia di gara': ['stint', 'pitstrat', 'undercut', 'fuel'], 'Fisica della vettura': ['gear', 'brake', 'corner', 'aero', 'ers'] };
  F.EST = { time: 50, points: 55, gap: 50, stint: 60, pitstrat: 90, undercut: 80, fuel: 60, gear: 70, brake: 60, corner: 60, aero: 60, ers: 55 };
  const store = s => (s.f1 = s.f1 || {});
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
  const dec = (x, d) => { const s = (+x).toFixed(d); return [s, s.replace('.', ',')]; };
  const fill = (type, q, ans, why, timed, extra) => Object.assign({ t: 'fill', mtype: type, num: true, q: c(q), a: Array.isArray(ans) ? ans : [String(ans)], why: c(why), timed }, extra || {});
  const clean = (x, d) => { const f = Math.pow(10, d), y = x * f; return Math.abs(Math.abs(y - Math.trunc(y)) - 0.5) > 0.06; };
  const mmss = t => { const m = Math.floor(t / 60), s = (t - 60 * m).toFixed(3); return m + ':' + (s.length < 6 ? '0' : '') + s; };

  /* ---- tempi, distanze, velocità ---- */
  F.minLaps = len => Math.ceil(305 / len);
  gen.time = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const len = ri(rng, 3500, 7000) / 1000; return fill('time', 'Una gara deve superare 305 km (regola della distanza minima, a meno del limite di tempo). Circuito da ' + len + ' km: quanti giri servono per superare 305 km?', F.minLaps(len), '305 / ' + len + ' = ' + (305 / len).toFixed(2) + ' → ' + F.minLaps(len) + ' giri', 70); }
    if (k === 1) { const len = ri(rng, 4000, 6500) / 1000, t = ri(rng, 780, 1050) / 10, v = len / t * 3600; if (!clean(v, 0)) return gen.time(lv, rng); return fill('time', 'Giro di ' + len + ' km percorso in ' + mmss(t) + ' (min:sec). Velocità media in km/h, arrotondata all’intero?', Math.round(v), len + ' km / ' + t + ' s × 3600 = ' + v.toFixed(1) + ' km/h', 90); }
    if (k === 2) { const s1 = ri(rng, 250, 330) / 10, s2 = ri(rng, 300, 400) / 10, s3 = ri(rng, 200, 300) / 10; return fill('time', 'Tempi di settore: ' + s1 + ' s, ' + s2 + ' s e ' + s3 + ' s. Tempo del giro in secondi (un decimale)?', dec(s1 + s2 + s3, 1), s1 + ' + ' + s2 + ' + ' + s3 + ' = ' + (s1 + s2 + s3).toFixed(1), 70); }
    const laps = ri(rng, 50, 70), t = ri(rng, 880, 1050) / 10, tot = laps * t; if (!clean(tot / 60, 0)) return gen.time(lv, rng);
    return fill('time', laps + ' giri a un ritmo medio di ' + t + ' s al giro (soste escluse). Durata in minuti, arrotondata all’intero?', Math.round(tot / 60), laps + ' × ' + t + ' = ' + tot.toFixed(0) + ' s = ' + (tot / 60).toFixed(1) + ' min', 90);
  };
  /* ---- punti ---- */
  F.RACE = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; F.SPRINT = [8, 7, 6, 5, 4, 3, 2, 1];
  gen.points = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const pos = Array.from({ length: ri(rng, 3, 5) }, () => ri(rng, 1, 10)), tot = pos.reduce((a, p) => a + F.RACE[p - 1], 0); return fill('points', 'Punti gara (25-18-15-12-10-8-6-4-2-1, nessun punto per il giro veloce). Un pilota termina ' + pos.length + ' gare nelle posizioni ' + pos.join('°, ') + '° (in quest’ordine). Totale punti ottenuti?', tot, pos.map(p => F.RACE[p - 1]).join(' + ') + ' = ' + tot, 80); }
    if (k === 1) { const L = ri(rng, 200, 400), R = L - ri(rng, 20, 90), n = ri(rng, 2, 5), need = R + 25 * n - L + 1; return fill('points', 'Classifica: leader ' + L + ' punti, inseguitore ' + R + '. Restano ' + n + ' gare (solo gara, vittoria = 25). Se l’inseguitore vince tutte le gare, quanti punti minimi deve ottenere il leader nelle gare rimanenti per restare davanti (più punti dell’inseguitore)?', Math.max(0, need), 'Inseguitore massimo ' + (R + 25 * n) + '; il leader deve superarlo: ' + (R + 25 * n) + ' + 1 − ' + L + ' = ' + need, 100); }
    const w = ri(rng, 1, 8), g = F.SPRINT[w - 1], p = ri(rng, 1, 10); return fill('points', 'Weekend con sprint (8-7-6-5-4-3-2-1 nei primi otto) e gara (25-18-15-12-10-8-6-4-2-1). Un pilota è ' + w + '° nella sprint e ' + p + '° in gara. Punti totali del weekend?', g + F.RACE[p - 1], g + ' + ' + F.RACE[p - 1] + ' = ' + (g + F.RACE[p - 1]), 70);
  };
  /* ---- distacchi ---- */
  gen.gap = (lv, rng) => {
    const k = ri(rng, 0, 1);
    if (k === 0) { const g = ri(rng, 6, 30), d = U.pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.8], rng), laps = Math.ceil(g * 100 / Math.round(d * 100)); return fill('gap', 'Sei a ' + g + ' s dall’auto davanti e vai ' + d + ' s al giro più veloce. Dopo quanti giri raggiungi la scia (gap zero)? (giri interi, arrotonda per eccesso)', laps, g + ' / ' + d + ' = ' + (g / d).toFixed(2) + ' → ' + laps + ' giri', 80); }
    const g = ri(rng, 8, 25) / 10, d = U.pick([0.1, 0.2, 0.25, 0.4], rng); if (g <= 1) return gen.gap(lv, rng); const gi = Math.round(g * 100), di = Math.round(d * 100), laps = Math.floor((gi - 100) / di) + 1;
    return fill('gap', 'Il gap dall’auto davanti è ' + g + ' s. Il DRS è disponibile con distacco inferiore a 1,0 s e tu guadagni ' + d + ' s al giro. Dopo quanti giri scendi sotto 1,0 s? (giri interi, almeno quanti ne servono per essere strettamente sotto)', laps, 'Servono più di ' + ((g - 1) / d).toFixed(2) + ' giri → ' + laps, 90);
  };
  /* ---- stint con degrado ---- */
  F.stint = (n, t0, d) => n * t0 + d * n * (n - 1) / 2;
  gen.stint = (lv, rng) => {
    const t0 = ri(rng, 880, 960) / 10, d = U.pick([0.04, 0.05, 0.06, 0.08, 0.1], rng), n = ri(rng, 10, 25), tot = F.stint(n, t0, d);
    if (rng() < 0.5) return fill('stint', 'Modello lineare: il giro k (k = 0, 1, 2…) dello stint dura t0 + d·k. Con t0 = ' + t0 + ' s e d = ' + d + ' s/giro, quanto dura il giro numero ' + n + ' dello stint (k = ' + (n - 1) + ')? (secondi, 2 decimali)', dec(t0 + d * (n - 1), 2), t0 + ' + ' + d + ' × ' + (n - 1) + ' = ' + (t0 + d * (n - 1)).toFixed(2), 70);
    return fill('stint', 'Modello lineare: il giro k (k = 0, 1, 2…) dello stint dura t0 + d·k. t0 = ' + t0 + ' s, d = ' + d + ' s/giro, stint di ' + n + ' giri. Tempo totale dello stint in secondi (un decimale)?', dec(tot, 1), n + ' × ' + t0 + ' + ' + d + ' × ' + n + '×' + (n - 1) + '/2 = ' + tot.toFixed(2), 100);
  };
  /* ---- una sosta contro due ---- */
  F.pit1 = (laps, t0, d, loss, stop) => F.stint(stop, t0, d) + F.stint(laps - stop, t0, d) + loss;
  F.race = (laps, t0, d, loss, stops) => stops.reduce((a, s) => a + F.stint(s, t0, d), 0) + loss * (stops.length - 1);
  gen.pitstrat = (lv, rng) => {
    for (let t = 0; t < 100; t++) {
      const laps = 2 * ri(rng, 18, 28), t0 = ri(rng, 880, 960) / 10, d = U.pick([0.05, 0.08, 0.1, 0.12], rng), loss = ri(rng, 195, 260) / 10;
      const s1 = [laps / 2, laps / 2], s2 = [laps / 3, laps / 3, laps / 3].map(x => Math.round(x)); s2[2] = laps - s2[0] - s2[1];
      const A = F.race(laps, t0, d, loss, s1), B = F.race(laps, t0, d, loss, s2), diff = Math.abs(A - B); if (!clean(diff, 1) || diff < 0.5) continue;
      return fill('pitstrat', 'Gara di ' + laps + ' giri, giro k di uno stint = ' + t0 + ' + ' + d + '·k secondi (k riparte da 0 dopo ogni sosta), perdita per ogni sosta ' + loss + ' s. Strategia A: una sosta, stint di ' + s1.join(' e ') + ' giri. Strategia B: due soste, stint di ' + s2.join(', ') + ' giri. Di quanti secondi la migliore batte l’altra (un decimale)?', dec(diff, 1), 'A = ' + A.toFixed(2) + ' s, B = ' + B.toFixed(2) + ' s; differenza ' + diff.toFixed(2), 160);
    }
    return gen.stint(lv, rng);
  };
  /* ---- undercut ---- */
  gen.undercut = (lv, rng) => {
    for (let t = 0; t < 100; t++) {
      const G = ri(rng, 10, 30) / 10, d = U.pick([0.05, 0.08, 0.1, 0.15], rng), age = ri(rng, 10, 25), pen = ri(rng, 3, 9) / 10, gain = d * age - pen;
      if (gain <= 0 || !clean(gain, 2)) continue;
      const ok = gain > G, q = 'Rivale a ' + G + ' s davanti, entrambi con gomme vecchie di ' + age + ' giri e degrado ' + d + ' s/giro rispetto alla gomma nuova. Tu rientri ai box un giro prima e il tuo giro di uscita con gomme nuove costa ' + pen + ' s di tempo extra (traffico/box); il rivale resta fuori un altro giro con gomme vecchie. Il tuo guadagno sul giro è (degrado × età − penalità) e riduce il gap. Di quanto cambia il gap nel giro? (secondi, 2 decimali, risposta positiva se il gap si riduce)';
      return fill('undercut', q, dec(gain, 2), 'Guadagno = ' + d + ' × ' + age + ' − ' + pen + ' = ' + gain.toFixed(2) + ' s (' + (ok ? 'sufficiente' : 'insufficiente') + ' contro ' + G + ' s di gap)', 100);
    }
    return gen.stint(lv, rng);
  };
  /* ---- carburante ---- */
  gen.fuel = (lv, rng) => {
    for (let t = 0; t < 60; t++) { const f = U.pick([1.5, 1.6, 1.7, 1.8, 2.0], rng), eff = U.pick([0.03, 0.035, 0.04], rng), n = ri(rng, 10, 40), dt = eff * f * (n - 1); if (!clean(dt, 2)) continue;
      return fill('fuel', 'Ogni kg di carburante costa ' + eff + ' s al giro e l’auto ne brucia ' + f + ' kg a giro. Quanto è più veloce il giro ' + n + ' rispetto al giro 1, solo per effetto del carburante? (secondi, 2 decimali)', dec(dt, 2), eff + ' × ' + f + ' × ' + (n - 1) + ' = ' + dt.toFixed(2) + ' s', 80); }
    return gen.time(lv, rng);
  };
  /* ---- fisica ---- */
  gen.gear = (lv, rng) => {
    for (let t = 0; t < 80; t++) { const rpm = 500 * ri(rng, 16, 24), r = ri(rng, 32, 36) / 100, ratio = ri(rng, 40, 150) / 10, v = rpm * 2 * Math.PI * r / (ratio * 60) * 3.6; if (!clean(v, 0)) continue;
      return fill('gear', 'Velocità = giri/min × 2π × raggio ruota / (rapporto totale × 60), in m/s (× 3,6 per km/h). Motore a ' + rpm + ' giri/min, raggio ruota ' + r + ' m, rapporto totale (cambio × finale) ' + ratio + '. Velocità in km/h, arrotondata all’intero?', Math.round(v), rpm + ' × 2π × ' + r + ' / (' + ratio + ' × 60) = ' + (v / 3.6).toFixed(1) + ' m/s = ' + v.toFixed(1) + ' km/h', 110); }
    return gen.time(lv, rng);
  };
  gen.brake = (lv, rng) => {
    for (let t = 0; t < 80; t++) { const kmh = 10 * ri(rng, 20, 33), a = U.pick([3.5, 4, 4.5, 5, 5.5], rng), v = kmh / 3.6, d = v * v / (2 * a * 9.81); if (!clean(d, 0)) continue;
      return fill('brake', 'Frenata a decelerazione costante: d = v² / (2a). Velocità iniziale ' + kmh + ' km/h, decelerazione ' + a + ' g (g = 9,81 m/s²). Spazio di frenata fino a fermarsi, in metri (arrotonda all’intero)?', Math.round(d), 'v = ' + v.toFixed(2) + ' m/s; d = ' + d.toFixed(1) + ' m', 100); }
    return gen.time(lv, rng);
  };
  gen.corner = (lv, rng) => {
    for (let t = 0; t < 80; t++) { const a = U.pick([3, 3.5, 4, 4.5, 5], rng), r = 10 * ri(rng, 5, 25), v = Math.sqrt(a * 9.81 * r) * 3.6; if (!clean(v, 0)) continue;
      return fill('corner', 'Velocità massima in curva v = √(a_lat · r), con a_lat espressa in m/s² (1 g = 9,81 m/s²). Accelerazione laterale massima ' + a + ' g, raggio ' + r + ' m. Velocità in km/h, arrotondata all’intero?', Math.round(v), '√(' + a + ' × 9,81 × ' + r + ') = ' + (v / 3.6).toFixed(1) + ' m/s = ' + v.toFixed(1) + ' km/h', 100); }
    return gen.time(lv, rng);
  };
  gen.aero = (lv, rng) => {
    if (rng() < 0.5) { const v1 = 50 * ri(rng, 1, 3), f1 = 100 * ri(rng, 4, 20), v2 = v1 * U.pick([2, 3], rng), k = (v2 / v1) ** 2; return fill('aero', 'Il carico aerodinamico cresce con il quadrato della velocità. A ' + v1 + ' km/h una vettura genera ' + f1 + ' N di carico. Quanto a ' + v2 + ' km/h (newton)?', f1 * k, f1 + ' × (' + v2 + '/' + v1 + ')² = ' + f1 * k, 70); }
    for (let t = 0; t < 60; t++) { const cda = U.pick([0.8, 0.9, 1.0, 1.1], rng), kmh = 10 * ri(rng, 20, 33), v = kmh / 3.6, p = 0.5 * 1.2 * cda * v ** 3 / 1000; if (!clean(p, 0)) continue;
      return fill('aero', 'Potenza assorbita dalla resistenza: P = ½ · ρ · CdA · v³ con ρ = 1,2 kg/m³. CdA = ' + cda + ' m², velocità ' + kmh + ' km/h. Potenza in kW, arrotondata all’intero?', Math.round(p), '0,5 × 1,2 × ' + cda + ' × ' + v.toFixed(2) + '³ = ' + (p * 1000).toFixed(0) + ' W = ' + p.toFixed(1) + ' kW', 100); }
    return gen.time(lv, rng);
  };
  gen.ers = (lv, rng) => {
    const k = ri(rng, 0, 1);
    if (k === 0) { const E = 4, P = U.pick([100, 125, 160, 200, 250], rng); return fill('ers', 'Un sistema può rilasciare al massimo ' + E + ' MJ per giro. Con una potenza di deploy costante di ' + P + ' kW, per quanti secondi può erogare? (energia = potenza × tempo; 1 MJ = 1000 kJ)', E * 1000 / P, E + ' MJ = 4000 kJ; 4000 / ' + P + ' = ' + E * 1000 / P + ' s', 80); }
    const P = 50 * ri(rng, 2, 8), t = U.pick([5, 8, 10, 12, 15, 20], rng); return fill('ers', 'Recupero in frenata a ' + P + ' kW per ' + t + ' s. Quanti kJ di energia sono stati recuperati?', P * t, P + ' × ' + t + ' = ' + P * t + ' kJ', 60);
  };

  F.make = (type, level, rng) => { rng = rng || U.rand; const lv = U.clamp(Math.round(level), 1, F.MAXLV), it = gen[type](lv, rng); it.mtype = type; it.lv = lv; return it; };
  F.session = (s, rng) => { rng = rng || U.rand; const last = t => (store(s)[t] && store(s)[t].last) || '0000', order = F.TYPES.slice().sort((a, b) => last(a).localeCompare(last(b)) || (rng() - 0.5)), items = []; let t = 0, i = 0; while (t < 290 && items.length < 8) { const ty = order[i % 6]; i++; items.push(F.make(ty, F.pickLevel(s, ty, rng), rng)); t += F.EST[ty] || 50; } return items; };
})(window.ST = window.ST || {});
