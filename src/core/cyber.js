/* SkillTree — laboratori di cybersecurity generati (difensivi, didattici, verificabili).
   Ogni esercizio ha risposta calcolata dal programma stesso: sottoreti, permessi, conversioni, cifrari classici,
   entropia, CVSS 3.1, analisi di log, ACL di firewall, RSA «giocattolo». Nessun contenuto offensivo:
   niente exploit, niente payload, niente strumenti contro sistemi reali (indirizzi solo da blocchi di documentazione). */
(function (ST) {
  'use strict';
  const U = ST.util, CY = ST.cyber = {};
  CY.TYPES = ['subnet', 'chmod', 'conv', 'classic', 'entropy', 'cvss', 'log', 'acl', 'rsa', 'ports', 'code', 'stride', 'attack'];
  CY.LABEL = { subnet: 'Reti · sottoreti (CIDR)', chmod: 'Linux · permessi e umask', conv: 'Basi numeriche e codifiche', classic: 'Crittografia · cifrari classici', entropy: 'Password · entropia', cvss: 'Vulnerabilità · punteggio CVSS 3.1', log: 'Difesa · analisi di log', acl: 'Firewall · valutazione ACL', rsa: 'Crittografia · RSA «giocattolo»', ports: 'Reti · porte e servizi', code: 'Sviluppo sicuro · code review', stride: 'Threat modeling · STRIDE', attack: 'Difesa · tattiche ATT&CK' };
  CY.MAXLV = 10;
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));

  /* ---- abilità (stesso modello logistico dell'allenamento mentale, livelli 1–10) ---- */
  const store = s => (s.cyber = s.cyber || {});
  CY.rating = (s, t) => { const m = store(s)[t]; return m ? m.r : 1; };
  CY.level = (s, t) => U.clamp(Math.round(CY.rating(s, t)), 1, CY.MAXLV);
  CY.OFFSETS = [-1, -1, 0, 0, 0, 1, 1, 2];
  CY.pickLevel = (s, t, rng) => U.clamp(Math.round(CY.rating(s, t) + CY.OFFSETS[Math.floor((rng || U.rand)() * CY.OFFSETS.length)]), 1, CY.MAXLV);
  CY.record = (s, t, ok, ms, limitSec, d) => {
    const m = (store(s)[t] = store(s)[t] || { r: 1, n: 0, ok: 0, hist: [] });
    let o = ok ? 1 : 0; if (o && limitSec && ms && ms > limitSec * 1000) o = 0.6;
    const dd = d != null ? d : CY.level(s, t), p = 1 / (1 + Math.exp(-(m.r - dd)));
    m.r = U.clamp(m.r + 0.4 * (o - p), 1, CY.MAXLV); m.n++; m.ok += ok ? 1 : 0; m.max = Math.max(m.max || 1, CY.level(s, t)); m.last = U.today();
    m.hist.push(o); if (m.hist.length > 20) m.hist.shift();
  };
  CY.accuracy = (s, t) => { const m = store(s)[t]; return m && m.hist.length ? m.hist.slice(-10).reduce((a, b) => a + b, 0) / Math.min(10, m.hist.length) : null; };

  /* ---- sottoreti ---- */
  const toInt = (a, b, c, d) => ((a << 24) >>> 0) + (b << 16) + (c << 8) + d;
  const toIp = n => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
  CY.subnet = (ipInt, pre) => { const mask = pre === 0 ? 0 : (0xFFFFFFFF << (32 - pre)) >>> 0, net = (ipInt & mask) >>> 0, bc = (net | (~mask >>> 0)) >>> 0; return { mask, net, bc, hosts: pre >= 31 ? 0 : Math.pow(2, 32 - pre) - 2, first: net + 1, last: bc - 1 }; };
  const gen = {};
  gen.subnet = (lv, rng) => {
    const pre = lv <= 3 ? U.pick([24, 25, 26], rng) : lv <= 6 ? ri(rng, 20, 28) : ri(rng, 17, 30);
    const base = U.pick([[10, ri(rng, 0, 255), ri(rng, 0, 255)], [172, ri(rng, 16, 31), ri(rng, 0, 255)], [192, 168, ri(rng, 0, 255)]], rng);
    const ipInt = toInt(base[0], base[1], base[2], ri(rng, 1, 254)), S = CY.subnet(ipInt, pre), ip = toIp(ipInt);
    const kind = lv <= 2 ? ri(rng, 0, 1) : ri(rng, 0, 4);
    const maskTxt = toIp(S.mask);
    if (kind === 0) return { t: 'fill', mtype: 'subnet', q: 'Host ' + ip + '/' + pre + ' (maschera ' + maskTxt + '). Qual è l’indirizzo di RETE?', a: [toIp(S.net)], why: 'AND bit a bit fra IP e maschera = ' + toIp(S.net), timed: 60 };
    if (kind === 1) return { t: 'fill', mtype: 'subnet', q: 'Host ' + ip + '/' + pre + '. Qual è l’indirizzo di BROADCAST?', a: [toIp(S.bc)], why: 'Rete ' + toIp(S.net) + ' con tutti i bit host a 1 = ' + toIp(S.bc), timed: 60 };
    if (kind === 2) return { t: 'fill', mtype: 'subnet', num: true, q: 'Quanti host utilizzabili ha una rete /' + pre + '?', a: [String(S.hosts)], why: '2^(32−' + pre + ') − 2 = ' + S.hosts, timed: 40 };
    if (kind === 3) return { t: 'fill', mtype: 'subnet', q: 'Rete ' + ip + '/' + pre + ': qual è l’ULTIMO indirizzo host utilizzabile?', a: [toIp(S.last)], why: 'Broadcast ' + toIp(S.bc) + ' − 1 = ' + toIp(S.last), timed: 70 };
    const inside = S.net + ri(rng, 1, Math.max(1, S.hosts)), outsides = [S.net - ri(rng, 1, 60), S.bc + ri(rng, 1, 60), S.bc + ri(rng, 61, 400)].map(x => x >>> 0), o = U.shuffle([toIp(inside)].concat(outsides.map(toIp)), rng);
    return { t: 'mc', mtype: 'subnet', q: 'Quale di questi indirizzi appartiene alla stessa rete di ' + ip + '/' + pre + '?', o, a: o.indexOf(toIp(inside)), why: 'Rete ' + toIp(S.net) + ' – ' + toIp(S.bc), timed: 60 };
  };

  /* ---- permessi Linux ---- */
  const BITS = 'rwxrwxrwx';
  CY.symbolic = oct => { const d = String(oct).padStart(4, '0').split('').map(Number); let s = ''; for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) { const on = !!(d[i + 1] & (4 >> j)); let c = on ? BITS[i * 3 + j] : '-'; const sp = (i === 0 && j === 2 && (d[0] & 4)) || (i === 1 && j === 2 && (d[0] & 2)) || (i === 2 && j === 2 && (d[0] & 1)); if (sp) c = i < 2 ? (on ? 's' : 'S') : (on ? 't' : 'T'); s += c; } } return s; };
  CY.octal = sym => { let sp = 0, o = [0, 0, 0]; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { const c = sym[i * 3 + j]; if (c !== '-' && c !== 'S' && c !== 'T') o[i] += 4 >> j; if (j === 2 && (c === 's' || c === 'S')) sp += i === 0 ? 4 : 2; if (j === 2 && (c === 't' || c === 'T')) sp += 1; } return (sp ? sp : '') + o.join(''); };
  gen.chmod = (lv, rng) => {
    const common = ['600', '640', '644', '700', '750', '755', '664', '775', '440', '400', '660', '711'], kind = lv <= 2 ? 0 : ri(rng, 0, lv >= 6 ? 4 : 2);
    if (kind === 0) { const o = U.pick(common, rng); return { t: 'fill', mtype: 'chmod', q: 'chmod ' + o + ': scrivi i permessi simbolici (9 caratteri, es. rwxr-xr--)', a: [CY.symbolic(o)], why: o + ' → ' + CY.symbolic(o), timed: 40 }; }
    if (kind === 1) { const o = U.pick(common, rng); return { t: 'fill', mtype: 'chmod', num: true, q: 'Permessi ' + CY.symbolic(o) + ': qual è la notazione ottale (3 cifre)?', a: [o], why: CY.symbolic(o) + ' → ' + o, timed: 40 }; }
    if (kind === 2) { const um = U.pick(['022', '027', '077', '002', '037'], rng), isDir = rng() < 0.5, base = isDir ? 0o777 : 0o666, res = (base & ~parseInt(um, 8)).toString(8).padStart(3, '0'); return { t: 'fill', mtype: 'chmod', num: true, q: 'umask ' + um + ': permessi (ottali) di un nuovo ' + (isDir ? 'DIRECTORY (base 777)' : 'FILE (base 666)') + '?', a: [res], why: (isDir ? '777' : '666') + ' AND NOT ' + um + ' = ' + res, timed: 50 }; }
    const sp = U.pick(['4755', '2755', '1777', '4750', '2770'], rng);
    if (kind === 3) return { t: 'fill', mtype: 'chmod', q: 'chmod ' + sp + ': permessi simbolici (con s/t se presenti)?', a: [CY.symbolic(sp)], why: sp + ' → ' + CY.symbolic(sp), timed: 60 };
    const fns = { 4: 'setuid (esegue con i privilegi del proprietario)', 2: 'setgid', 1: 'sticky bit (solo il proprietario può cancellare)' }, d0 = +sp[0], o = [fns[d0]].concat(Object.values(fns).filter(x => x !== fns[d0])).concat(['bit di sola lettura globale']), opts = U.shuffle(o.slice(0, 4), rng);
    return { t: 'mc', mtype: 'chmod', q: 'Nella modalità ' + sp + ' la prima cifra ' + d0 + ' attiva…', o: opts, a: opts.indexOf(fns[d0]), why: 'Cifra speciale ' + d0 + ' = ' + fns[d0], timed: 50 };
  };

  /* ---- basi numeriche e codifiche ---- */
  const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  CY.b64 = str => { let out = ''; for (let i = 0; i < str.length; i += 3) { const a = str.charCodeAt(i), b = i + 1 < str.length ? str.charCodeAt(i + 1) : NaN, c = i + 2 < str.length ? str.charCodeAt(i + 2) : NaN, n = (a << 16) | ((b || 0) << 8) | (c || 0); out += B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + (isNaN(b) ? '=' : B64[(n >> 6) & 63]) + (isNaN(c) ? '=' : B64[n & 63]); } return out; };
  gen.conv = (lv, rng) => {
    const kind = lv <= 2 ? ri(rng, 0, 1) : ri(rng, 0, 5);
    if (kind === 0) { const n = ri(rng, 10, Math.pow(2, 4 + lv)), b = n.toString(2); return { t: 'fill', mtype: 'conv', num: true, q: 'Converti in decimale il binario ' + b, a: [String(n)], why: b + ' = ' + n, timed: 40 }; }
    if (kind === 1) { const n = ri(rng, 16, 255), h = n.toString(16).toUpperCase(); return { t: 'fill', mtype: 'conv', num: true, q: 'Converti in decimale l’esadecimale 0x' + h, a: [String(n)], why: '0x' + h + ' = ' + n, timed: 40 }; }
    if (kind === 2) { const n = ri(rng, 32, 255); return { t: 'fill', mtype: 'conv', q: 'Converti in esadecimale (maiuscolo, senza 0x) il decimale ' + n, a: [n.toString(16).toUpperCase()], why: n + ' = 0x' + n.toString(16).toUpperCase(), timed: 40 }; }
    if (kind === 3) { const n = ri(rng, 65, 90); return { t: 'fill', mtype: 'conv', q: 'Quale lettera ha codice ASCII ' + n + '?', a: [String.fromCharCode(n), String.fromCharCode(n).toLowerCase()], why: 'ASCII ' + n + ' = ' + String.fromCharCode(n), timed: 30 }; }
    const words = ['Cyber', 'Man', 'Hash', 'Salt', 'Key', 'Port', 'Root', 'Admin', 'Patch', 'Logs'], w = U.pick(words, rng);
    if (kind === 4) return { t: 'fill', mtype: 'conv', q: 'Codifica in Base64 la stringa «' + w + '»', a: [CY.b64(w)], why: '«' + w + '» → ' + CY.b64(w), timed: 80 };
    const o = U.shuffle([CY.b64(w), CY.b64(w + 'x'), CY.b64(w.toLowerCase()), CY.b64(w.slice(0, -1))].filter((x, i, arr) => arr.indexOf(x) === i), rng);
    return { t: 'mc', mtype: 'conv', q: 'Quale stringa Base64 corrisponde a «' + w + '»? (Base64 NON è cifratura: è solo una codifica)', o, a: o.indexOf(CY.b64(w)), why: CY.b64(w) + ' decodificata dà «' + w + '»', timed: 60 };
  };

  /* ---- cifrari classici (solo didattica: tutti rotti) ---- */
  const PHRASES = ['DEFENSE IN DEPTH', 'LEAST PRIVILEGE', 'PATCH EARLY PATCH OFTEN', 'ENABLE MULTI FACTOR AUTH', 'BACKUP THEN VERIFY', 'NEVER REUSE PASSWORDS', 'ZERO TRUST ARCHITECTURE', 'KEEP SYSTEMS UPDATED', 'LOG EVERYTHING IMPORTANT'];
  CY.caesar = (t, k) => t.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + k + 26) % 26 + 65));
  CY.vigenere = (t, key, dec) => { let j = 0; return t.replace(/[A-Z]/g, c => { const k = key.charCodeAt(j++ % key.length) - 65; return String.fromCharCode((c.charCodeAt(0) - 65 + (dec ? -k : k) + 26) % 26 + 65); }); };
  CY.xorHex = (t, key) => Array.from(t).map(c => (c.charCodeAt(0) ^ key).toString(16).padStart(2, '0')).join('');
  gen.classic = (lv, rng) => {
    const p = U.pick(PHRASES, rng), kind = lv <= 3 ? 0 : lv <= 6 ? ri(rng, 0, 1) : ri(rng, 0, 3);
    if (kind === 0) { const k = ri(rng, 1, 25); return { t: 'fill', mtype: 'classic', q: 'Cifrario di Cesare, chiave ' + k + ' (spostamento in avanti). Decifra: ' + CY.caesar(p, k), a: [p], why: 'Sposta ogni lettera indietro di ' + k + ' → ' + p, timed: 120 }; }
    if (kind === 1) { const k = ri(rng, 3, 23), first = p.split(' ')[0]; return { t: 'fill', mtype: 'classic', q: 'Cesare, chiave ignota. Il testo in chiaro inizia con «' + first + '». Decifra tutto: ' + CY.caesar(p, k), a: [p], why: 'Dalla prima parola ricavi lo spostamento (' + k + '): ' + p, timed: 150 }; }
    if (kind === 2) { const key = U.pick(['KEY', 'SALT', 'HASH', 'CODE', 'LOCK'], rng); return { t: 'fill', mtype: 'classic', q: 'Vigenère con chiave «' + key + '». Decifra: ' + CY.vigenere(p, key), a: [p], why: 'Sottrai le lettere della chiave ripetuta → ' + p, timed: 220 }; }
    const k = ri(rng, 17, 120), w = U.pick(['ROOT', 'ADMIN', 'PATCH', 'LOGS', 'SALT'], rng);
    return { t: 'fill', mtype: 'classic', q: 'XOR byte per byte con la chiave 0x' + k.toString(16).toUpperCase() + '. Decodifica (testo ASCII): ' + CY.xorHex(w, k), a: [w, w.toLowerCase()], why: 'Ogni byte XOR 0x' + k.toString(16).toUpperCase() + ' → ' + w + ' (XOR è reversibile con la stessa chiave)', timed: 200 };
  };

  /* ---- entropia delle password ---- */
  gen.entropy = (lv, rng) => {
    const sets = [[10, 'cifre (0–9)'], [26, 'lettere minuscole'], [62, 'lettere e cifre'], [94, 'caratteri ASCII stampabili']], kind = lv <= 3 ? 0 : ri(rng, 0, 2);
    if (kind === 0) { const [n, nm] = U.pick(sets, rng), L = ri(rng, 6, 14), bits = Math.round(L * Math.log2(n)); return { t: 'fill', mtype: 'entropy', num: true, q: 'Password casuale di ' + L + ' caratteri scelti fra ' + n + ' simboli (' + nm + '). Quanti bit di entropia (arrotonda all’intero)?', a: [String(bits)], why: L + ' × log2(' + n + ') = ' + (L * Math.log2(n)).toFixed(1) + ' ≈ ' + bits, timed: 90 }; }
    if (kind === 1) { const W = ri(rng, 4, 8), bits = Math.round(W * Math.log2(7776)); return { t: 'fill', mtype: 'entropy', num: true, q: 'Passphrase di ' + W + ' parole scelte a caso da un elenco di 7.776 (diceware). Quanti bit di entropia (arrotonda)?', a: [String(bits)], why: W + ' × log2(7776) = ' + (W * Math.log2(7776)).toFixed(1) + ' ≈ ' + bits, timed: 90 }; }
    const bits = ri(rng, 36, 80), rate = 1e10, secs = Math.pow(2, bits) / rate, units = [[3600 * 24 * 365, 'anni'], [3600 * 24, 'giorni'], [3600, 'ore'], [60, 'minuti'], [1, 'secondi']], u = units.find(x => secs >= x[0]) || units[4], val = secs / u[0];
    const fmt = v => v >= 100 ? String(Math.round(v)) : v.toFixed(1), cands = [val, val * 1000, val / 1000, val * 60].map(fmt), o = U.shuffle([...new Set(cands)].slice(0, 4), rng);
    return { t: 'mc', mtype: 'entropy', q: 'Spazio di ricerca di ' + bits + ' bit, 10 miliardi di tentativi al secondo (attacco offline di rete di GPU). In media, quanto serve per ESAURIRE tutto lo spazio? Unità: ' + u[1] + '.', o, a: o.indexOf(fmt(val)), why: '2^' + bits + ' / 1e10 s ≈ ' + fmt(val) + ' ' + u[1], timed: 120 };
  };

  /* ---- CVSS v3.1 (formula ufficiale) ---- */
  const W = { AV: { N: 0.85, A: 0.62, L: 0.55, P: 0.2 }, AC: { L: 0.77, H: 0.44 }, UI: { N: 0.85, R: 0.62 }, CIA: { H: 0.56, L: 0.22, N: 0 }, PRu: { N: 0.85, L: 0.62, H: 0.27 }, PRc: { N: 0.85, L: 0.68, H: 0.5 } };
  const roundup = x => { const i = Math.round(x * 100000); return i % 10000 === 0 ? i / 100000 : (Math.floor(i / 10000) + 1) / 10; };
  CY.cvss = v => {
    const iss = 1 - (1 - W.CIA[v.C]) * (1 - W.CIA[v.I]) * (1 - W.CIA[v.A]), ch = v.S === 'C';
    const impact = ch ? 7.52 * (iss - 0.029) - 3.25 * Math.pow(iss - 0.02, 15) : 6.42 * iss;
    const expl = 8.22 * W.AV[v.AV] * W.AC[v.AC] * (ch ? W.PRc : W.PRu)[v.PR] * W.UI[v.UI];
    if (impact <= 0) return 0;
    return ch ? roundup(Math.min(1.08 * (impact + expl), 10)) : roundup(Math.min(impact + expl, 10));
  };
  CY.cvssVector = v => 'AV:' + v.AV + '/AC:' + v.AC + '/PR:' + v.PR + '/UI:' + v.UI + '/S:' + v.S + '/C:' + v.C + '/I:' + v.I + '/A:' + v.A;
  CY.cvssSeverity = s => s === 0 ? 'Nessuna' : s < 4 ? 'Bassa' : s < 7 ? 'Media' : s < 9 ? 'Alta' : 'Critica';
  gen.cvss = (lv, rng) => {
    const pick = a => U.pick(a, rng), v = { AV: pick(lv <= 3 ? ['N', 'L'] : ['N', 'A', 'L', 'P']), AC: pick(['L', 'H']), PR: pick(['N', 'L', 'H']), UI: pick(['N', 'R']), S: lv <= 3 ? 'U' : pick(['U', 'C']), C: pick(['H', 'L', 'N']), I: pick(['H', 'L', 'N']), A: pick(['H', 'L', 'N']) };
    if (v.C === 'N' && v.I === 'N' && v.A === 'N') v.C = 'H';
    const sc = CY.cvss(v), txt = sc.toFixed(1);
    if (lv >= 6 && rng() < 0.4) { const sev = CY.cvssSeverity(sc), o = U.shuffle(['Bassa', 'Media', 'Alta', 'Critica'], rng); return { t: 'mc', mtype: 'cvss', q: 'Vettore CVSS 3.1: ' + CY.cvssVector(v) + '. Quale severità ha (Bassa <4, Media 4–6,9, Alta 7–8,9, Critica ≥9)?', o, a: o.indexOf(sev), why: 'Punteggio base ' + txt + ' → ' + sev, timed: 150 }; }
    return { t: 'fill', mtype: 'cvss', q: 'Calcola il punteggio base CVSS 3.1 (una cifra decimale) del vettore ' + CY.cvssVector(v), a: [txt, txt.replace('.', ',')], why: 'Punteggio base = ' + txt + ' (' + CY.cvssSeverity(sc) + ')', timed: 240 };
  };

  /* ---- analisi di log (indirizzi di documentazione RFC 5737) ---- */
  CY.makeLog = (lv, rng) => {
    const users = ['root', 'admin', 'deploy', 'alice', 'bob', 'carol', 'dave', 'backup'], atk = '203.0.113.' + ri(rng, 10, 99), noise = ['198.51.100.' + ri(rng, 10, 99), '192.0.2.' + ri(rng, 10, 99), '198.51.100.' + ri(rng, 100, 199)];
    const fails = ri(rng, 5 + lv, 9 + lv * 2), victim = U.pick(users.slice(0, 5), rng), lines = []; let t = ri(rng, 2 * 3600, 5 * 3600);
    const fmt = s => String(Math.floor(s / 3600)).padStart(2, '0') + ':' + String(Math.floor(s / 60) % 60).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    const add = (res, user, ip) => { lines.push({ s: t, txt: fmt(t) + ' ' + res + ' ' + user + ' ' + ip }); t += ri(rng, 3, 40); };
    for (let i = 0; i < fails; i++) { add('FAIL', rng() < 0.5 ? U.pick(users, rng) : victim, atk); if (rng() < 0.3 + lv * 0.04) add(rng() < 0.6 ? 'FAIL' : 'OK', U.pick(users.slice(3), rng), U.pick(noise, rng)); }
    const compromised = rng() < 0.7; if (compromised) { t += 2; add('OK', victim, atk); }
    noise.forEach(ip => { const n = ri(rng, 1, 3); for (let i = 0; i < n; i++) { t += ri(rng, 5, 120); add(rng() < 0.7 ? 'FAIL' : 'OK', U.pick(users.slice(3), rng), ip); } });
    lines.sort((a, b) => a.s - b.s);
    const failBy = {}; lines.forEach(l => { const m = /FAIL (\S+) (\S+)/.exec(l.txt); if (m) failBy[m[2]] = (failBy[m[2]] || 0) + 1; });
    return { lines: lines.map(l => l.txt), atk, victim, compromised, failBy, fails: failBy[atk], noise };
  };
  gen.log = (lv, rng) => {
    const L = CY.makeLog(lv, rng), q0 = 'Accessi SSH (ora, esito, utente, IP): ' + L.lines.join(' ⏐ ') + '. ', kind = ri(rng, 0, 2);
    if (kind === 0) { const ips = Object.keys(L.failBy), top = ips.sort((a, b) => L.failBy[b] - L.failBy[a])[0], o = U.shuffle([...new Set([top].concat(L.noise, [L.atk]))].slice(0, 4), rng); return { t: 'mc', mtype: 'log', q: q0 + 'Quale IP ha il maggior numero di accessi FALLITI?', o, a: o.indexOf(top), why: 'Fallimenti per IP: ' + ips.map(i => i + '=' + L.failBy[i]).join(', '), timed: 90 + lv * 6 }; }
    if (kind === 1) return { t: 'fill', mtype: 'log', num: true, q: q0 + 'Quanti accessi FALLITI provengono da ' + L.atk + '?', a: [String(L.failBy[L.atk])], why: 'Conteggio righe FAIL con IP ' + L.atk + ' = ' + L.failBy[L.atk], timed: 90 + lv * 6 };
    const okAtk = L.lines.filter(l => l.includes('OK') && l.endsWith(L.atk)), ans = okAtk.length ? okAtk[0].split(' ')[2] : 'nessuno';
    const o = U.shuffle([...new Set([ans, 'root', 'admin', 'alice', 'nessuno'])].slice(0, 4), rng); if (!o.includes(ans)) o[0] = ans;
    return { t: 'mc', mtype: 'log', q: q0 + 'Quale account ha avuto un accesso RIUSCITO dall’IP ' + L.atk + '? (rispondi «nessuno» se non c’è)', o, a: o.indexOf(ans), why: okAtk.length ? 'Riga OK dall’IP ' + L.atk + ': ' + okAtk[0] : 'Nessuna riga OK da ' + L.atk, timed: 90 + lv * 6 };
  };

  /* ---- ACL (prima regola che corrisponde; deny implicito) ---- */
  const ipNum = x => x.split('.').reduce((a, o) => ((a << 8) >>> 0) + +o, 0) >>> 0;
  const inCidr = (ip, cidr) => { if (cidr === 'any') return true; const [b, p] = cidr.split('/'), pre = +p, m = pre === 0 ? 0 : (0xFFFFFFFF << (32 - pre)) >>> 0; return ((ipNum(ip) & m) >>> 0) === ((ipNum(b) & m) >>> 0); };
  CY.aclEval = (rules, pk) => { for (let i = 0; i < rules.length; i++) { const r = rules[i]; if ((r.proto === 'any' || r.proto === pk.proto) && inCidr(pk.src, r.src) && inCidr(pk.dst, r.dst) && (r.port === 'any' || r.port === pk.port)) return { act: r.act, idx: i + 1 }; } return { act: 'deny', idx: 0 }; };
  gen.acl = (lv, rng) => {
    const n = 3 + Math.min(4, Math.floor(lv / 2)), nets = ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24', '172.16.0.0/16', 'any'], ports = [22, 53, 80, 443, 3389], protos = ['tcp', 'udp'];
    for (let attempt = 0; attempt < 200; attempt++) {
      const rules = Array.from({ length: n }, () => { const pr = U.pick(protos, rng); return { act: rng() < 0.55 ? 'permit' : 'deny', proto: pr, src: U.pick(nets, rng), dst: U.pick(['10.0.2.0/24', '172.16.0.0/16', 'any', '10.0.3.0/24'], rng), port: pr === 'udp' ? 53 : U.pick(ports, rng) }; });
      const base = U.pick(['10.0.1.', '10.0.2.', '10.0.3.', '172.16.5.'], rng), dstB = U.pick(['10.0.2.', '10.0.3.', '172.16.9.', '8.8.8.'], rng), pr = U.pick(protos, rng);
      const pk = { proto: pr, src: base + ri(rng, 2, 200), dst: dstB + ri(rng, 2, 200), port: pr === 'udp' ? 53 : U.pick(ports, rng) }, res = CY.aclEval(rules, pk);
      if (lv >= 4 && res.idx === 0 && rng() < 0.7) continue;
      const txt = (r, i) => (i + 1) + ') ' + r.act + ' ' + r.proto + ' ' + r.src + ' → ' + r.dst + ' porta ' + r.port, lab = (a, i) => a + (i ? ' (regola ' + i + ')' : ' (deny implicito)');
      const correct = lab(res.act, res.idx), opts = [correct, lab(res.act === 'permit' ? 'deny' : 'permit', res.idx), lab('permit', Math.max(1, ((res.idx || 1) % n) + 1)), 'deny (deny implicito)'].filter((x, i, arr) => arr.indexOf(x) === i);
      while (opts.length < 4) opts.push(lab('deny', opts.length + 1));
      const o = U.shuffle(opts.slice(0, 4), rng); if (!o.includes(correct)) o[0] = correct;
      return { t: 'mc', mtype: 'acl', q: 'ACL valutata dall’alto, prima corrispondenza vince, altrimenti deny implicito. Regole: ' + rules.map(txt).join(' ⏐ ') + '. Pacchetto: ' + pk.proto + ' ' + pk.src + ' → ' + pk.dst + ' porta ' + pk.port + '. Esito?', o, a: o.indexOf(correct), why: 'Esito corretto: ' + correct, timed: 90, rules, pk };
    }
    return { t: 'mc', mtype: 'acl', q: 'Con ACL vuota e deny implicito, un pacchetto tcp 10.0.1.5 → 10.0.2.9 porta 443 è…', o: ['deny (deny implicito)', 'permit', 'dipende dall’ora'], a: 0, why: 'Senza regole vale il deny implicito.', timed: 30 };
  };

  /* ---- RSA didattico (numeri piccoli: MAI in produzione) ---- */
  const gcd = (a, b) => b ? gcd(b, a % b) : a, modPow = (b, e, m) => { let r = 1; b %= m; while (e > 0) { if (e & 1) r = (r * b) % m; b = (b * b) % m; e >>= 1; } return r; };
  CY.modInv = (e, phi) => { for (let d = 1; d < phi; d++) if ((e * d) % phi === 1) return d; return null; };
  gen.rsa = (lv, rng) => {
    const P = lv <= 3 ? [5, 7, 11, 13] : lv <= 6 ? [11, 13, 17, 19, 23] : [17, 19, 23, 29, 31, 37, 41, 43];
    for (let a = 0; a < 100; a++) {
      const p = U.pick(P, rng); let q = U.pick(P, rng); if (p === q) continue;
      const n = p * q, phi = (p - 1) * (q - 1), es = [3, 5, 7, 11, 13, 17].filter(e => gcd(e, phi) === 1 && e < phi); if (!es.length) continue;
      const e = U.pick(es, rng), d = CY.modInv(e, phi), m = ri(rng, 2, Math.min(n - 1, 40)), c = modPow(m, e, n), kind = lv <= 2 ? ri(rng, 0, 1) : ri(rng, 0, 3);
      const head = 'RSA didattico: p = ' + p + ', q = ' + q + ', e = ' + e + '. ';
      if (kind === 0) return { t: 'fill', mtype: 'rsa', num: true, q: head + 'Calcola n = p·q.', a: [String(n)], why: 'n = ' + p + ' × ' + q + ' = ' + n, timed: 40 };
      if (kind === 1) return { t: 'fill', mtype: 'rsa', num: true, q: head + 'Calcola φ(n) = (p−1)(q−1).', a: [String(phi)], why: 'φ = ' + (p - 1) + ' × ' + (q - 1) + ' = ' + phi, timed: 40 };
      if (kind === 2) return { t: 'fill', mtype: 'rsa', num: true, q: head + 'Trova la chiave privata d tale che e·d ≡ 1 (mod φ(n)), con φ(n) = ' + phi + '.', a: [String(d)], why: e + ' × ' + d + ' = ' + e * d + ' ≡ 1 (mod ' + phi + ')', timed: 120 };
      return { t: 'fill', mtype: 'rsa', num: true, q: head + 'Cifra il messaggio m = ' + m + ' (c = m^e mod n, con n = ' + n + ').', a: [String(c)], why: m + '^' + e + ' mod ' + n + ' = ' + c, timed: 120 };
    }
    return { t: 'fill', mtype: 'rsa', num: true, q: 'RSA didattico: p = 3, q = 11. Calcola n.', a: ['33'], why: '3 × 11 = 33', timed: 20 };
  };

  /* ---- porte e servizi ---- */
  CY.SERVICES = [['SSH', 22, 'TCP'], ['Telnet', 23, 'TCP'], ['SMTP', 25, 'TCP'], ['DNS', 53, 'UDP/TCP'], ['HTTP', 80, 'TCP'], ['POP3', 110, 'TCP'], ['NTP', 123, 'UDP'], ['IMAP', 143, 'TCP'], ['SNMP', 161, 'UDP'], ['LDAP', 389, 'TCP'], ['HTTPS', 443, 'TCP'], ['SMB', 445, 'TCP'], ['SMTP submission', 587, 'TCP'], ['LDAPS', 636, 'TCP'], ['IMAPS', 993, 'TCP'], ['MSSQL', 1433, 'TCP'], ['MySQL', 3306, 'TCP'], ['RDP', 3389, 'TCP'], ['PostgreSQL', 5432, 'TCP']];
  gen.ports = (lv, rng) => {
    const pool = lv <= 3 ? CY.SERVICES.filter(x => [22, 25, 53, 80, 110, 443, 3389].includes(x[1])) : CY.SERVICES, s = U.pick(pool, rng), others = U.sample(pool.filter(x => x !== s), 3, rng);
    if (rng() < 0.5) { const o = U.shuffle([String(s[1])].concat(others.map(x => String(x[1]))), rng); return { t: 'mc', mtype: 'ports', q: 'Su quale porta ascolta di default ' + s[0] + '?', o, a: o.indexOf(String(s[1])), why: s[0] + ' → ' + s[1] + '/' + s[2], timed: 25 }; }
    const o = U.shuffle([s[0]].concat(others.map(x => x[0])), rng); return { t: 'mc', mtype: 'ports', q: 'Quale servizio usa di default la porta ' + s[1] + '/' + s[2] + '?', o, a: o.indexOf(s[0]), why: s[1] + ' → ' + s[0], timed: 25 };
  };

  /* ---- banche di domande (code review, STRIDE, ATT&CK) ---- */
  const fromBank = (key, mt) => (lv, rng) => {
    const bank = (ST.content.cyberBank && ST.content.cyberBank[key]) || [];
    if (!bank.length) return gen.ports(lv, rng);
    const lvl = U.clamp(Math.ceil(lv / 2), 1, 5), cand = bank.filter(x => Math.abs((x.level || 3) - lvl) <= 1), it = U.pick(cand.length ? cand : bank, rng);
    return { t: 'mc', mtype: mt, q: it.q, o: it.o.slice(), a: it.a, why: it.why || '', timed: 90 };
  };
  gen.code = fromBank('code', 'code'); gen.stride = fromBank('stride', 'stride'); gen.attack = fromBank('attack', 'attack');

  CY.make = (type, level, rng) => { rng = rng || U.rand; const lv = U.clamp(Math.round(level), 1, CY.MAXLV); const it = gen[type](lv, rng); it.mtype = type; it.lv = lv; return it; };
  CY.EST = { subnet: 45, chmod: 35, conv: 35, classic: 70, entropy: 50, cvss: 90, log: 70, acl: 60, rsa: 55, ports: 20, code: 50, stride: 35, attack: 35 };
  /* Sessione da ~5 minuti: i tipi meno allenati di recente, difficoltà variabile attorno al livello. */
  CY.session = (s, date, rng) => {
    rng = rng || U.rand; const last = t => (store(s)[t] && store(s)[t].last) || '0000';
    const order = CY.TYPES.slice().sort((a, b) => last(a).localeCompare(last(b)) || (rng() - 0.5)), items = []; let t = 0, i = 0;
    while (t < 290 && items.length < 10) { const ty = order[i % 6]; i++; items.push(CY.make(ty, CY.pickLevel(s, ty, rng), rng)); t += CY.EST[ty] || 40; }
    return items;
  };
})(window.ST = window.ST || {});
