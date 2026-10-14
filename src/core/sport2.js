/* SkillTree — laboratori di scienze dello sport, parte 2 (avanzati): potenza critica, allenamento per velocità, profilo F-V,
   modelli di carico, statistica dei test, altitudine, sprint, aerodinamica, carboidrati orari. */
(function (ST) {
  'use strict';
  const U = ST.util, SP = ST.sport, gen = SP.gen, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const NEW = {
    cp: ['Avanzato · potenza critica e W′', 65], vbt: ['Avanzato · velocità del bilanciere e 1RM', 70], fv: ['Avanzato · profilo forza-velocità', 60], banister: ['Avanzato · modello fitness-fatica', 80], trimp: ['Avanzato · TRIMP e TSS', 70], ewma: ['Avanzato · media mobile esponenziale', 70], stats: ['Avanzato · affidabilità dei test e statistica', 75], alt: ['Avanzato · altitudine e pressione di O₂', 60], sprint: ['Avanzato · modello della velocità di sprint', 70], aero: ['Avanzato · potenza e aerodinamica', 75], gly: ['Avanzato · carboidrati orari e gel', 65]
  };
  Object.keys(NEW).forEach(k => { SP.TYPES.push(k); SP.LABEL[k] = NEW[k][0]; SP.EST[k] = NEW[k][1]; });
  SP.GROUPS['Forza e potenza avanzate'] = ['vbt', 'fv', 'cp', 'sprint', 'aero'];
  SP.GROUPS['Dati, carico e ambiente'] = ['banister', 'trimp', 'ewma', 'stats', 'alt'];
  SP.GROUPS['Nutrizione avanzata'] = ['gly'];
  const dec = (x, d) => { const s = (+x).toFixed(d); return [s, s.replace('.', ',')]; };
  const fillN = (type, q, ans, why, timed, extra) => Object.assign({ t: 'fill', mtype: type, num: true, q, a: Array.isArray(ans) ? ans : [String(ans)], why, timed }, extra || {});
  const cleanD = (x, d) => { const f = Math.pow(10, d), y = x * f; return Math.abs(Math.abs(y - Math.trunc(y)) - 0.5) > 0.06; };

  /* ---- potenza critica ---- */
  SP.cpFit = (p1, t1, p2, t2) => { const cp = (p1 * t1 - p2 * t2) / (t1 - t2), w = (p1 - cp) * t1; return { cp, w }; };
  gen.cp = (lv, rng) => {
    const CP = 10 * ri(rng, 18, 35), Wp = 1000 * ri(rng, 12, 28) / 1000 * 1000, k = ri(rng, 0, 2);   // W′ in joule (kJ interi)
    const P1 = CP + 20 * ri(rng, 6, 12), P2 = CP + 20 * ri(rng, 2, 5), t1 = Wp / (P1 - CP), t2 = Wp / (P2 - CP);
    if (Number.isInteger(t1) && Number.isInteger(t2) && t1 !== t2) {
      const head = 'Modello di potenza critica: tempo = W′/(P − CP). Due prove a esaurimento: ' + P1 + ' W per ' + t1 + ' s e ' + P2 + ' W per ' + t2 + ' s. ';
      if (k === 0) return fillN('cp', head + 'Qual è la potenza critica CP in watt (modello lineare lavoro-tempo)?', [String(CP)], 'Lavoro = CP·t + W′: CP = (' + P1 + '×' + t1 + ' − ' + P2 + '×' + t2 + ')/(' + t1 + ' − ' + t2 + ') = ' + CP, 100);
      if (k === 1) return fillN('cp', head + 'Quanto vale W′ in kJ?', [String(Wp / 1000)], 'W′ = (P − CP)·t = (' + P1 + ' − ' + CP + ')×' + t1 + ' = ' + Wp + ' J = ' + Wp / 1000 + ' kJ', 100);
      const P3 = CP + 20 * ri(rng, 1, 4), t3 = Wp / (P3 - CP); if (Number.isInteger(t3)) return fillN('cp', head + 'Quanti secondi si resistono a ' + P3 + ' W (modello a due parametri)?', [String(t3)], 't = W′/(P − CP) = ' + Wp + '/(' + P3 + ' − ' + CP + ') = ' + t3, 100);
    }
    return gen.cp(lv, rng);
  };
  /* ---- velocità del bilanciere ---- */
  gen.vbt = (lv, rng) => {
    const M = 5 * ri(rng, 16, 44), s = U.pick([0.005, 0.008, 0.01], rng), mvt = U.pick([0.15, 0.2, 0.3], rng), a = mvt + s * M, L1 = 5 * ri(rng, 6, 10), L2 = L1 + 5 * ri(rng, 4, 8);
    const v = L => (a - s * L), f2 = x => (+x).toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
    return fillN('vbt', 'Profilo carico-velocità lineare (velocità media propulsiva): con ' + L1 + ' kg la velocità è ' + f2(v(L1)) + ' m/s, con ' + L2 + ' kg è ' + f2(v(L2)) + ' m/s. Velocità alla 1RM (velocità minima di soglia) = ' + mvt + ' m/s. Stima della 1RM in kg (numero intero)?', [String(M)], 'Pendenza = −' + s + ' m/s per kg; carico dove v = ' + mvt + ': ' + M + ' kg', 130);
  };
  /* ---- profilo F-V ---- */
  gen.fv = (lv, rng) => {
    const F0 = 40 * ri(rng, 40, 80), V0 = ri(rng, 30, 60) / 10, P = F0 * V0 / 4, k = ri(rng, 0, 2);
    if (k === 0) return fillN('fv', 'Relazione F-V lineare: F₀ = ' + F0 + ' N e V₀ = ' + V0 + ' m/s. Potenza massima Pmax = F₀·V₀/4, in watt (intero)?', [String(Math.round(P))], F0 + ' × ' + V0 + ' / 4 = ' + P, 70);
    if (k === 1) return fillN('fv', 'Relazione F-V lineare con Pmax = ' + P + ' W e V₀ = ' + V0 + ' m/s. Quanto vale F₀ in newton (intero)?', [String(F0)], 'F₀ = 4·Pmax/V₀ = ' + F0, 80);
    return fillN('fv', 'Relazione F-V lineare: F₀ = ' + F0 + ' N, V₀ = ' + V0 + ' m/s. A quale velocità (m/s, un decimale) si ha la potenza massima? (alla metà di V₀)', dec(V0 / 2, 2), 'La potenza è massima a V₀/2 = ' + V0 / 2, 90);
  };
  /* ---- Banister (discreto) ---- */
  SP.banister = (loads, k1, k2, d1, d2) => { let f = 0, g = 0; loads.forEach(w => { f = f * d1 + w; g = g * d2 + w; }); return k1 * f - k2 * g; };
  gen.banister = (lv, rng) => {
    const n = ri(rng, 3, 4), loads = Array.from({ length: n }, () => 10 * ri(rng, 3, 10)), d1 = 0.9, d2 = 0.6, k1 = 1, k2 = 2, v = SP.banister(loads, k1, k2, d1, d2);
    for (let t = 0; t < 40; t++) if (cleanD(v, 0)) return fillN('banister', 'Modello fitness-fatica discreto: a fine di ogni giorno fitness = 0,9 × fitness del giorno prima + carico del giorno; fatica = 0,6 × fatica del giorno prima + carico. Prestazione = 1 × fitness − 2 × fatica (partenza da zero). Carichi dei ' + n + ' giorni: ' + loads.join(', ') + '. Prestazione a fine ultimo giorno, arrotondata all’intero?', [String(Math.round(v))], 'Si aggiornano giorno per giorno fitness e fatica: prestazione = ' + v.toFixed(2), 130);
    return gen.trimp(lv, rng);
  };
  /* ---- TRIMP e TSS ---- */
  gen.trimp = (lv, rng) => {
    if (rng() < 0.5) { const z = [ri(rng, 5, 40), ri(rng, 5, 30), ri(rng, 0, 20), ri(rng, 0, 10), ri(rng, 0, 5)]; const tot = z.reduce((a, m, i) => a + m * (i + 1), 0); return fillN('trimp', 'TRIMP di Edwards: minuti in 5 zone cardiache (50–60%, 60–70%, 70–80%, 80–90%, 90–100% FCmax) moltiplicati per i coefficienti 1, 2, 3, 4, 5. Minuti per zona: ' + z.join(', ') + '. TRIMP totale?', [String(tot)], z.map((m, i) => m + '×' + (i + 1)).join(' + ') + ' = ' + tot, 90); }
    for (let t = 0; t < 60; t++) { const FTP = U.pick([200, 240, 250, 300], rng), IF = U.pick([0.6, 0.7, 0.8, 0.9, 1], rng), min = 15 * ri(rng, 2, 14), NP = FTP * IF, tss = min * 60 * NP * IF / (FTP * 3600) * 100; if (!cleanD(tss, 0)) continue;
      return fillN('trimp', 'TSS = durata (s) × NP × IF / (FTP × 3600) × 100, con IF = NP/FTP. Seduta di ' + min + ' minuti, FTP ' + FTP + ' W, potenza normalizzata ' + NP + ' W. TSS arrotondato all’intero?', [String(Math.round(tss))], 'IF = ' + IF + '; TSS = ' + (min / 60).toFixed(2) + ' h × ' + IF + '² × 100 = ' + tss.toFixed(1), 110); }
    return gen.fv(lv, rng);
  };
  gen.ewma = (lv, rng) => {
    for (let t = 0; t < 60; t++) { const N = U.pick([3, 7], rng), lam = 2 / (N + 1), e0 = 100 * ri(rng, 3, 8), xs = [ri(rng, 2, 9) * 100, ri(rng, 2, 9) * 100]; let e = e0; xs.forEach(x => { e = lam * x + (1 - lam) * e; }); if (!cleanD(e, 0)) continue;
      return fillN('ewma', 'Media mobile esponenziale (EWMA) del carico: nuovo valore = λ × carico del giorno + (1 − λ) × valore precedente, con λ = 2/(N + 1) e N = ' + N + '. Valore iniziale ' + e0 + ', carichi dei prossimi due giorni ' + xs.join(' e ') + '. Valore dopo il secondo giorno, arrotondato all’intero?', [String(Math.round(e))], 'λ = ' + lam + '; dopo il 1° giorno ' + (lam * xs[0] + (1 - lam) * e0).toFixed(1) + '; dopo il 2° ' + e.toFixed(1), 110); }
    return gen.banister(lv, rng);
  };
  /* ---- statistica dei test ---- */
  gen.stats = (lv, rng) => {
    const k = ri(rng, 0, 3);
    if (k === 0) { const sd = ri(rng, 4, 20) / 2, te = U.pick([1, 1.5, 2, 3], rng); const mdc = 1.96 * Math.SQRT2 * te; return fillN('stats', 'Minimo cambiamento rilevabile al 95%: MDC = 1,96 × √2 × TE. Errore tipico del test TE = ' + te + ' cm. MDC in cm (un decimale)?', dec(mdc, 1), '1,96 × 1,4142 × ' + te + ' = ' + mdc.toFixed(2), 80); }
    if (k === 1) { const mean = 10 * ri(rng, 20, 60), sd = ri(rng, 2, 9) * mean / 100; return fillN('stats', 'Coefficiente di variazione CV% = SD/media × 100. Media ' + mean + ' (u. arbitrarie), SD ' + sd + '. CV% (intero)?', [String(Math.round(sd / mean * 100))], sd + '/' + mean + ' × 100 = ' + (sd / mean * 100).toFixed(1), 60); }
    if (k === 2) { const sd = ri(rng, 2, 10), d = U.pick([0.2, 0.5, 0.8], rng); return fillN('stats', 'Dimensione d’effetto di Cohen d = differenza tra le medie / SD. SD = ' + sd + ' e differenza tra i gruppi = ' + sd * d + '. Quanto vale d (un decimale)?', dec(d, 1), sd * d + '/' + sd + ' = ' + d, 70); }
    const sd = ri(rng, 3, 15), swc = 0.2 * sd; return fillN('stats', 'Cambiamento minimo importante (SWC) = 0,2 × SD tra atleti. SD = ' + sd + ' cm. SWC in cm (un decimale)?', dec(swc, 1), '0,2 × ' + sd + ' = ' + swc.toFixed(1), 60);
  };
  /* ---- altitudine ---- */
  gen.alt = (lv, rng) => {
    const rows = [[0, 760], [1000, 674], [2000, 596], [2500, 560], [3000, 526], [4000, 462], [5000, 405]], [h, pb] = U.pick(rows, rng), pio2 = (pb - 47) * 0.2093;
    return fillN('alt', 'Pressione parziale dell’O₂ inspirato (aria umidificata) PIO₂ = (Pb − 47) × 0,2093, con Pb in mmHg e 47 mmHg di vapore acqueo. A ' + h + ' m la pressione barometrica è circa ' + pb + ' mmHg. PIO₂ in mmHg, arrotondato all’intero?', [String(Math.round(pio2))], '(' + pb + ' − 47) × 0,2093 = ' + pio2.toFixed(1), 80);
  };
  /* ---- sprint ---- */
  gen.sprint = (lv, rng) => {
    for (let t = 0; t < 60; t++) { const vmax = ri(rng, 80, 120) / 10, tau = ri(rng, 8, 15) / 10, tt = U.pick([1, 2, 3, 4], rng), v = vmax * (1 - Math.exp(-tt / tau)); if (!cleanD(v, 1)) continue;
      return fillN('sprint', 'Modello esponenziale dello sprint: v(t) = vmax × (1 − e^(−t/τ)). vmax = ' + vmax + ' m/s, τ = ' + tau + ' s. Velocità dopo ' + tt + ' s in m/s (un decimale)?', dec(v, 1), vmax + ' × (1 − e^(−' + tt + '/' + tau + ')) = ' + v.toFixed(2), 100); }
    return gen.fv(lv, rng);
  };
  /* ---- aerodinamica ---- */
  gen.aero = (lv, rng) => {
    for (let t = 0; t < 60; t++) { const v = ri(rng, 8, 14), cda = U.pick([0.25, 0.3, 0.35], rng), m = 5 * ri(rng, 14, 18), crr = 0.004, rho = 1.2, p = 0.5 * rho * cda * v * v * v + crr * m * 9.81 * v; if (!cleanD(p, 0)) continue;
      return fillN('aero', 'Ciclista in pianura senza vento: P = ½·ρ·CdA·v³ + Crr·m·g·v (ρ = 1,2 kg/m³, g = 9,81). v = ' + v + ' m/s, CdA = ' + cda + ' m², massa totale ' + m + ' kg, Crr = 0,004. Potenza in watt, arrotondata all’intero?', [String(Math.round(p))], 'Aria ' + (0.5 * rho * cda * v * v * v).toFixed(1) + ' W + rotolamento ' + (crr * m * 9.81 * v).toFixed(1) + ' W = ' + p.toFixed(1), 110); }
    return gen.fv(lv, rng);
  };
  /* ---- carboidrati orari ---- */
  gen.gly = (lv, rng) => {
    const k = ri(rng, 0, 1), h = ri(rng, 2, 6), g = U.pick([60, 90, 120], rng);
    if (k === 0) { const tot = g * h; return fillN('gly', 'Gara di ' + h + ' ore con ' + g + ' g/ora di carboidrati. Quanti gel da 30 g servono in totale?', [String(tot / 30)], g + ' × ' + h + ' = ' + tot + ' g; / 30 = ' + tot / 30, 70); }
    return fillN('gly', 'Carboidrati multi-trasportabili con rapporto glucosio:fruttosio 2:1 a ' + g + ' g/ora per ' + h + ' ore. Quanti grammi di fruttosio in totale?', [String(g * h / 3)], 'Totale ' + g * h + ' g; il fruttosio è 1/3 = ' + g * h / 3, 80);
  };
  Object.keys(NEW).forEach(k => { const g = gen[k]; gen[k] = (lv, rng) => { const it = g(lv, rng); const c = x => String(x).replace(/(\d)\.(\d)/g, '$1,$2'); it.q = c(it.q); it.why = c(it.why); return it; }; });
})(window.ST = window.ST || {});
