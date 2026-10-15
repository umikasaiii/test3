/* SkillTree — laboratori di moto e guida sportiva: angolo di piega, frenata, trasferimenti di carico, rapporti, motore,
   potenza, pneumatici, sospensioni, giri di pista, giroscopio ed energia. Modelli semplificati dichiarati nel testo. */
(function (ST) {
  'use strict';
  const U = ST.util, F = ST.moto = {}, gen = {}, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  F.gen = gen; F.MAXLV = 10;
  F.TYPES = ['lean', 'brake', 'xfer', 'gear', 'engine', 'power', 'tyre', 'susp', 'lap', 'gyro', 'energy'];
  F.LABEL = { lean: 'Dinamica · angolo di piega e velocità in curva', brake: 'Dinamica · frenata e spazio di arresto', xfer: 'Dinamica · trasferimento di carico, impennata', gear: 'Meccanica · rapporti e velocità', engine: 'Meccanica · cilindrata e compressione', power: 'Meccanica · coppia, potenza, CV e kW', tyre: 'Pneumatici · misure e pressioni', susp: 'Sospensioni · SAG e molle', lap: 'Pista · tempi, velocità media e autonomia', gyro: 'Fisica · giroscopio delle ruote', energy: 'Sicurezza · energia cinetica e urti' };
  F.GROUPS = { 'Dinamica e guida': ['lean', 'brake', 'xfer', 'gyro'], 'Meccanica': ['gear', 'engine', 'power', 'tyre', 'susp'], 'Pista e sicurezza': ['lap', 'energy'] };
  F.EST = { lean: 70, brake: 70, xfer: 80, gear: 80, engine: 70, power: 65, tyre: 65, susp: 70, lap: 60, gyro: 60, energy: 55 };
  const store = s => (s.moto = s.moto || {});
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
  const R = Math.round, pick = (a, rng) => U.pick(a, rng), G = 9.81;

  gen.lean = (lv, rng) => {
    for (let t = 0; t < 80; t++) {
      const th = pick([30, 35, 40, 45, 50, 55], rng), r = pick([50, 60, 80, 100, 120, 150], rng), k = ri(rng, 0, 2), tn = Math.tan(th * Math.PI / 180);
      if (k === 0) { const v = Math.sqrt(G * r * tn) * 3.6; if (!clean(v, 0)) continue; return fill('lean', 'In curva stazionaria v² = g·r·tan θ (g = 9,81 m/s²). Raggio ' + r + ' m e angolo di piega ' + th + '° (rispetto alla verticale). Velocità in km/h, arrotondata all’intero?', R(v), 'v = √(9,81 × ' + r + ' × tan ' + th + '°) = ' + (v / 3.6).toFixed(2) + ' m/s = ' + v.toFixed(1) + ' km/h', 110); }
      if (k === 1) { const v = 10 * ri(rng, 6, 14), th2 = Math.atan((v / 3.6) ** 2 / (G * r)) * 180 / Math.PI; if (!clean(th2, 0)) continue; return fill('lean', 'Curva di raggio ' + r + ' m percorsa a ' + v + ' km/h. Angolo di piega necessario tan θ = v² / (g·r), con g = 9,81 m/s². Angolo in gradi, arrotondato all’intero?', R(th2), 'v = ' + (v / 3.6).toFixed(2) + ' m/s; tan θ = ' + ((v / 3.6) ** 2 / (G * r)).toFixed(3) + '; θ = ' + th2.toFixed(1) + '°', 110); }
      return fill('lean', 'Con angolo di piega ' + th + ' l’accelerazione laterale in unità di g vale tan θ. Quanto vale a_lat in g (due decimali)?', dec(tn, 2), 'tan ' + th + '° = ' + tn.toFixed(3), 70);
    }
    return gen.brake(lv, rng);
  };
  gen.brake = (lv, rng) => {
    for (let t = 0; t < 80; t++) {
      const kmh = 10 * ri(rng, 6, 20), a = pick([0.7, 0.8, 0.9, 1, 1.1, 1.2], rng), v = kmh / 3.6, d = v * v / (2 * a * G);
      if (rng() < 0.5) { if (!clean(d, 0)) continue; return fill('brake', 'Frenata a decelerazione costante d = v² / (2a). Velocità ' + kmh + ' km/h, decelerazione ' + a + ' g (g = 9,81 m/s²). Spazio di frenata in metri, arrotondato all’intero?', R(d), 'v = ' + v.toFixed(2) + ' m/s; d = ' + d.toFixed(1) + ' m', 90); }
      const tr = pick([0.8, 1, 1.2, 1.5], rng), tot = v * tr + d; if (!clean(tot, 0)) continue;
      return fill('brake', 'Spazio di arresto totale = spazio nel tempo di reazione (v·t) + spazio di frenata (v²/(2a)). Velocità ' + kmh + ' km/h, tempo di reazione ' + tr + ' s, decelerazione ' + a + ' g. Spazio totale in metri, arrotondato all’intero?', R(tot), 'Reazione ' + (v * tr).toFixed(1) + ' m + frenata ' + d.toFixed(1) + ' m = ' + tot.toFixed(1) + ' m', 110);
    }
    return gen.lean(lv, rng);
  };
  gen.xfer = (lv, rng) => {
    const m = 5 * ri(rng, 36, 50), L = ri(rng, 135, 160) / 100, h = ri(rng, 55, 70) / 100, b = ri(rng, 62, 80) / 100 * L, k = ri(rng, 0, 2);
    if (k === 0) { const a = ri(rng, 4, 11), dW = m * a * h / L; if (!clean(dW, 0)) return gen.xfer(lv, rng); return fill('xfer', 'Trasferimento di carico in frenata ΔW = m·a·h / L. Massa totale (moto + pilota) ' + m + ' kg, decelerazione ' + a + ' m/s², altezza del baricentro ' + h + ' m, interasse ' + L + ' m. Quanti newton si spostano sull’anteriore (arrotonda all’intero)?', R(dW), m + ' × ' + a + ' × ' + h + ' / ' + L + ' = ' + dW.toFixed(1) + ' N', 110); }
    if (k === 1) { const bb = Math.round(b * 100) / 100, a = G * bb / h; if (!clean(a / G, 2)) return gen.xfer(lv, rng); return fill('xfer', 'Limite di impennata (anteriore che si alza) a = g·b / h, con b = distanza del baricentro dall’asse posteriore. b = ' + bb + ' m, h = ' + h + ' m. Accelerazione limite in unità di g (due decimali)?', dec(bb / h, 2), 'a/g = ' + bb + ' / ' + h + ' = ' + (bb / h).toFixed(3), 100); }
    const bb = Math.round(b * 100) / 100, lim = (L - bb) / h; if (!clean(lim, 2)) return gen.xfer(lv, rng); return fill('xfer', 'Limite di stoppie (posteriore che si alza in frenata) a/g = (L − b) / h. Interasse L = ' + L + ' m, b = ' + bb + ' m, h = ' + h + ' m. Decelerazione limite in g (due decimali)?', dec(lim, 2), '(' + L + ' − ' + bb + ') / ' + h + ' = ' + lim.toFixed(3), 100);
  };
  gen.gear = (lv, rng) => {
    for (let t = 0; t < 80; t++) {
      const cor = ri(rng, 40, 48), pin = ri(rng, 14, 17), gearR = pick([2.0, 1.6, 1.3, 1.1, 0.95, 0.85], rng), prim = pick([1.5, 1.8, 2.0], rng), rpm = 500 * ri(rng, 10, 26), r = pick([0.30, 0.31, 0.32, 0.33], rng), total = prim * gearR * cor / pin, v = rpm * 2 * Math.PI * r / (60 * total) * 3.6;
      if (rng() < 0.5) { if (!clean(v, 0)) continue; return fill('gear', 'Rapporto totale = primario × marcia × (corona/pignone). Primario ' + prim + ', marcia ' + gearR + ', corona ' + cor + ', pignone ' + pin + '. Raggio ruota ' + r + ' m, motore a ' + rpm + ' giri/min. Velocità in km/h (v = giri·2π·r / (60·rapporto totale) × 3,6), arrotondata all’intero?', R(v), 'Rapporto totale ' + total.toFixed(3) + '; v = ' + v.toFixed(1) + ' km/h', 130); }
      const vk = 10 * ri(rng, 6, 24), rp = vk / 3.6 * 60 * total / (2 * Math.PI * r); if (!clean(rp, 0)) continue; return fill('gear', 'Rapporto totale (primario × marcia × corona/pignone) = ' + total.toFixed(3) + ', raggio ruota ' + r + ' m. A ' + vk + ' km/h, a quanti giri/min gira il motore? (arrotonda all’intero; rpm = v·60·rapporto / (2π·r))', R(rp), 'v = ' + (vk / 3.6).toFixed(2) + ' m/s; rpm = ' + rp.toFixed(0), 130, { ratio: total });
    }
    return gen.lean(lv, rng);
  };
  gen.engine = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { for (let t = 0; t < 40; t++) { const bore = ri(rng, 56, 100), st = ri(rng, 40, 80), n = pick([1, 2, 3, 4], rng), V = Math.PI / 4 * bore * bore * st * n / 1000; if (!clean(V, 0)) continue; return fill('engine', 'Cilindrata = π/4 · alesaggio² · corsa · numero di cilindri. Alesaggio ' + bore + ' mm, corsa ' + st + ' mm, ' + n + ' cilindri. Cilindrata in cm³ (arrotonda all’intero)?', R(V), 'π/4 × ' + bore + '² × ' + st + ' × ' + n + ' / 1000 = ' + V.toFixed(1) + ' cm³', 100); } }
    if (k === 1) { const CR = ri(rng, 9, 14), Vc = pick([5, 6, 8, 10], rng), Vd = (CR - 1) * Vc; return fill('engine', 'Rapporto di compressione CR = (Vd + Vc) / Vc. Cilindrata unitaria Vd = ' + Vd + ' cm³, volume della camera Vc = ' + Vc + ' cm³. Quanto vale CR?', CR, '(' + Vd + ' + ' + Vc + ') / ' + Vc + ' = ' + CR, 70); }
    for (let t = 0; t < 40; t++) { const st = ri(rng, 40, 80), rpm = 500 * ri(rng, 12, 28), vp = 2 * st / 1000 * rpm / 60; if (!clean(vp, 1)) continue; return fill('engine', 'Velocità media del pistone = 2 · corsa · giri/min / 60. Corsa ' + st + ' mm a ' + rpm + ' giri/min. Valore in m/s (un decimale)?', dec(vp, 1), '2 × ' + st / 1000 + ' × ' + rpm + ' / 60 = ' + vp.toFixed(2), 90); }
    return gen.power(lv, rng);
  };
  gen.power = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { for (let t = 0; t < 40; t++) { const T = ri(rng, 60, 130), rpm = 500 * ri(rng, 10, 24), P = T * rpm * 2 * Math.PI / 60000; if (!clean(P, 0)) continue; return fill('power', 'Potenza (kW) = coppia (N·m) · giri/min · 2π / 60 / 1000. Coppia ' + T + ' N·m a ' + rpm + ' giri/min. Potenza in kW, arrotondata all’intero?', R(P), T + ' × ' + rpm + ' × 2π / 60 000 = ' + P.toFixed(1) + ' kW', 90); } }
    if (k === 1) { for (let t = 0; t < 40; t++) { const kW = ri(rng, 20, 160), cv = kW / 0.7355; if (!clean(cv, 0)) continue; return fill('power', 'Converti ' + kW + ' kW in cavalli vapore metrici (1 CV = 0,7355 kW), arrotondando all’intero.', R(cv), kW + ' / 0,7355 = ' + cv.toFixed(1) + ' CV', 80); } }
    for (let t = 0; t < 40; t++) { const kW = ri(rng, 20, 150), rpm = 500 * ri(rng, 8, 24), T = kW * 9549 / rpm; if (!clean(T, 0)) continue; return fill('power', 'Coppia (N·m) ≈ 9549 · potenza (kW) / giri/min. Potenza ' + kW + ' kW a ' + rpm + ' giri/min. Coppia in N·m, arrotondata all’intero?', R(T), '9549 × ' + kW + ' / ' + rpm + ' = ' + T.toFixed(1), 90); }
    return gen.gear(lv, rng);
  };
  gen.tyre = (lv, rng) => {
    const w = pick([110, 120, 150, 160, 180, 190, 200], rng), ar = pick([50, 55, 60, 70, 80], rng), rim = pick([17, 17, 18, 19, 16], rng), side = w * ar / 100, k = ri(rng, 0, 2);
    if (k === 0) return fill('tyre', 'Misura ' + w + '/' + ar + ' ZR' + rim + ': larghezza ' + w + ' mm, profilo (fianco/larghezza) ' + ar + '%. Quanto è alto il fianco in mm?', dec(side, 1), w + ' × ' + ar + '% = ' + side + ' mm', 70);
    if (k === 1) { const d = rim * 25.4 + 2 * side; if (!clean(d, 0)) return gen.tyre(lv, rng); return fill('tyre', 'Pneumatico ' + w + '/' + ar + ' ZR' + rim + ' (1 pollice = 25,4 mm). Diametro esterno = cerchio + 2 · fianco. Diametro in mm, arrotondato all’intero?', R(d), rim + ' × 25,4 + 2 × ' + side + ' = ' + d.toFixed(1) + ' mm', 100); }
    const P1 = pick([1.8, 2.0, 2.2, 2.5], rng), T1 = pick([10, 15, 20], rng), T2 = T1 + pick([20, 30, 40, 50], rng), P2 = P1 * (T2 + 273) / (T1 + 273); if (!clean(P2, 2)) return gen.tyre(lv, rng);
    return fill('tyre', 'A volume costante P1/T1 = P2/T2 (T in kelvin = °C + 273). Pressione ' + P1 + ' bar a ' + T1 + ' °C. Quanti bar a ' + T2 + ' °C (due decimali)?', dec(P2, 2), P1 + ' × ' + (T2 + 273) + ' / ' + (T1 + 273) + ' = ' + P2.toFixed(3), 100);
  };
  gen.susp = (lv, rng) => {
    const k = ri(rng, 0, 2);
    if (k === 0) { const trav = pick([120, 130, 140, 150], rng), sag = pick([25, 30, 33, 35], rng), mm = trav * sag / 100; if (!clean(mm, 1)) return gen.susp(lv, rng); return fill('susp', 'Il SAG è la compressione della sospensione sotto il carico, in % della corsa. Corsa totale ' + trav + ' mm e SAG del ' + sag + '%. Compressione in mm (un decimale)?', dec(mm, 1), trav + ' × ' + sag + '% = ' + mm.toFixed(2), 70); }
    if (k === 1) { const F0 = 100 * ri(rng, 6, 20), x = ri(rng, 20, 60), kk = F0 / x; if (!clean(kk, 1)) return gen.susp(lv, rng); return fill('susp', 'Una molla si comprime di ' + x + ' mm sotto una forza di ' + F0 + ' N. Rigidezza k = F/x in N/mm (un decimale)?', dec(kk, 1), F0 + ' / ' + x + ' = ' + kk.toFixed(2), 80); }
    for (let t = 0; t < 40; t++) { const kk = 10 * ri(rng, 6, 12) * 1000, m = ri(rng, 40, 80), f = Math.sqrt(kk / m) / (2 * Math.PI); if (!clean(f, 1)) continue; return fill('susp', 'Frequenza propria f = (1/2π)·√(k/m). Molla con k = ' + kk + ' N/m che sostiene una massa di ' + m + ' kg. Frequenza in Hz (un decimale)?', dec(f, 1), '√(' + kk + ' / ' + m + ') / 2π = ' + f.toFixed(2) + ' Hz', 100); }
    return gen.gear(lv, rng);
  };
  gen.lap = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const len = ri(rng, 20, 55) / 10, tm = ri(rng, 780, 1300) / 10, v = len / tm * 3600; if (!clean(v, 0)) return gen.lap(lv, rng); return fill('lap', 'Giro di pista lungo ' + len + ' km percorso in ' + tm + ' secondi. Velocità media in km/h, arrotondata all’intero?', R(v), len + ' / ' + tm + ' × 3600 = ' + v.toFixed(1) + ' km/h', 80); }
    if (k === 1) { const n = ri(rng, 8, 25), t1 = ri(rng, 880, 1100) / 10, d = pick([0.1, 0.2, 0.3, 0.5], rng), tot = n * d; return fill('lap', 'In ogni giro guadagni ' + d + ' s sul tempo di riferimento. Quanti secondi hai guadagnato in totale su ' + n + ' giri?', dec(tot, 1), n + ' × ' + d + ' = ' + tot.toFixed(1) + ' s', 70); }
    if (k === 2) { const tank = pick([12, 14, 16, 18, 20], rng), cons = pick([4, 4.5, 5, 5.5, 6, 7], rng), rg = tank / cons * 100; if (!clean(rg, 0)) return gen.lap(lv, rng); return fill('lap', 'Serbatoio da ' + tank + ' litri e consumo di ' + cons + ' L/100 km. Autonomia in km, arrotondata all’intero?', R(rg), tank + ' / ' + cons + ' × 100 = ' + rg.toFixed(1) + ' km', 80); }
    const s1 = ri(rng, 250, 350) / 10, s2 = ri(rng, 300, 420) / 10, s3 = ri(rng, 220, 320) / 10; return fill('lap', 'Tempi di settore di un giro: ' + s1 + ' s, ' + s2 + ' s e ' + s3 + ' s. Tempo del giro in secondi (un decimale)?', dec(s1 + s2 + s3, 1), s1 + ' + ' + s2 + ' + ' + s3 + ' = ' + (s1 + s2 + s3).toFixed(1), 70);
  };
  gen.gyro = (lv, rng) => {
    const m = pick([5, 6, 7, 8], rng), r = pick([0.3, 0.32, 0.34], rng), v = 36 * ri(rng, 1, 6), L = m * r * (v / 3.6);
    if (!clean(L, 1)) return gen.gyro(lv, rng);
    return fill('gyro', 'Una ruota (anello sottile di massa m e raggio r) ha momento d’inerzia I = m·r² e velocità angolare ω = v/r, quindi L = I·ω = m·r·v. Massa ' + m + ' kg, raggio ' + r + ' m, velocità ' + v + ' km/h. Momento angolare L in kg·m²/s (un decimale)?', dec(L, 1), m + ' × ' + r + ' × ' + v / 3.6 + ' = ' + L.toFixed(2), 100);
  };
  gen.energy = (lv, rng) => {
    const k = ri(rng, 0, 1);
    if (k === 0) { const m = 5 * ri(rng, 36, 50), v = 10 * ri(rng, 3, 14), E = 0.5 * m * (v / 3.6) ** 2 / 1000; if (!clean(E, 0)) return gen.energy(lv, rng); return fill('energy', 'Energia cinetica E = ½·m·v². Massa totale (moto + pilota) ' + m + ' kg a ' + v + ' km/h. Energia in kJ, arrotondata all’intero?', R(E), '½ × ' + m + ' × ' + (v / 3.6).toFixed(2) + '² = ' + (E * 1000).toFixed(0) + ' J = ' + E.toFixed(1) + ' kJ', 90); }
    const v = 10 * ri(rng, 3, 8), f = pick([2, 3], rng); return fill('energy', 'L’energia cinetica cresce con il quadrato della velocità. Se la velocità passa da ' + v + ' km/h a ' + v * f + ' km/h, di quante volte cresce l’energia?', f * f, '(' + v * f + '/' + v + ')² = ' + f * f, 60);
  };

  F.make = (type, level, rng) => { rng = rng || U.rand; const lv = U.clamp(Math.round(level), 1, F.MAXLV), it = gen[type](lv, rng); it.mtype = type; it.lv = lv; return it; };
  F.session = (s, rng) => { rng = rng || U.rand; const last = t => (store(s)[t] && store(s)[t].last) || '0000', order = F.TYPES.slice().sort((a, b) => last(a).localeCompare(last(b)) || (rng() - 0.5)), items = []; let t = 0, i = 0; while (t < 290 && items.length < 8) { const ty = order[i % 6]; i++; items.push(F.make(ty, F.pickLevel(s, ty, rng), rng)); t += F.EST[ty] || 50; } return items; };
})(window.ST = window.ST || {});
