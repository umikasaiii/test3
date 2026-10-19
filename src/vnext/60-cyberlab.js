/* vNext M7a — Cybersecurity Practical Lab: terminale SIMULATO con filesystem virtuale in memoria. Nessun comando viene eseguito sul
   dispositivo: ogni «comando» è una funzione JavaScript che opera su dati sintetici. Bersagli inventati (rete di test .test/192.0.2.0/24
   e 203.0.113.0/24, documentazione RFC 5737), solo attività difensive e di analisi: lettura di log, permessi, hardening, DNS/HTTP didattici. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const Y = M.cyberlab = { challenges: [] };
  Y.add = c => { Y.challenges.push(c); return c; };
  Y.byId = id => Y.challenges.find(c => c.id === id);

  /* ---- filesystem virtuale ---- */
  const dir = (kids, mode) => ({ t: 'd', mode: mode || 0o755, owner: 'user', kids: kids || {} });
  const file = (content, mode, owner) => ({ t: 'f', mode: mode == null ? 0o644 : mode, owner: owner || 'user', content: String(content) });
  Y.dir = dir; Y.file = file;
  const norm = (cwd, p) => { const parts = (p[0] === '/' ? p : cwd + '/' + p).split('/'), out = []; parts.forEach(x => { if (!x || x === '.') return; if (x === '..') out.pop(); else out.push(x); }); return '/' + out.join('/'); };
  const get = (fs, path) => { let n = fs; for (const p of path.split('/').filter(Boolean)) { if (!n || n.t !== 'd' || !(p in n.kids)) return null; n = n.kids[p]; } return n; };
  const parent = (fs, path) => { const i = path.lastIndexOf('/'), pp = path.slice(0, i) || '/', n = get(fs, pp); return { dir: n && n.t === 'd' ? n : null, name: path.slice(i + 1) }; };
  const modeStr = (n) => (n.t === 'd' ? 'd' : '-') + [6, 3, 0].map(s => ['r', 'w', 'x'].map((c, i) => (n.mode >> s & (4 >> i)) ? c : '-').join('')).join('');
  const clone = n => JSON.parse(JSON.stringify(n));

  /* ---- sessione ---- */
  Y.session = ch => ({ fs: clone(ch.fs), cwd: ch.cwd || '/home/user', env: ch.env || {}, hist: [], out: [], solved: false, hints: 0, tries: 0, cmds: 0 });

  const words = line => { const out = []; let cur = '', q = null, has = false; for (const c of line) { if (q) { if (c === q) q = null; else cur += c; } else if (c === '"' || c === "'") { q = c; has = true; } else if (/\s/.test(c)) { if (cur || has) out.push(cur); cur = ''; has = false; } else cur += c; } if (cur || has) out.push(cur); return out; };
  /* separa su | e redirezioni, rispettando le virgolette */
  const split = line => { const segs = []; let cur = '', q = null; for (const c of line) { if (q) { cur += c; if (c === q) q = null; } else if (c === '"' || c === "'") { q = c; cur += c; } else if (c === '|') { segs.push(cur); cur = ''; } else cur += c; } segs.push(cur); return segs.map(s => s.trim()); };
  const rx = (pat, flags) => { try { return new RegExp(pat, flags); } catch (e) { return null; } };
  /* espansione minima di * e ? nell'ultimo componente del percorso */
  const glob = (st, args) => { const out = []; args.forEach(a => { if (a[0] === '-' || !/[*?]/.test(a)) { out.push(a); return; } const i = a.lastIndexOf('/'), d = i >= 0 ? a.slice(0, i + 1) : '', pat = a.slice(i + 1), n = get(st.fs, norm(st.cwd, d || '.')); if (!n || n.t !== 'd') { out.push(a); return; } const re = new RegExp('^' + pat.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$'); const m = Object.keys(n.kids).sort().filter(k => re.test(k) && k[0] !== '.'); if (m.length) m.forEach(k => out.push(d + k)); else out.push(a); }); return out; };
  const lines = t => { const l = String(t).split('\n'); if (l.length && l[l.length - 1] === '') l.pop(); return l; };

  const CMDS = {
    pwd: (st) => st.cwd,
    whoami: () => 'user', id: () => 'uid=1000(user) gid=1000(user) groups=1000(user)', hostname: (st) => st.env.host || 'lab-host', date: () => 'Mon Jan  8 10:15:00 UTC 2024', uname: () => 'Linux lab-host 6.1.0 #1 SMP x86_64 GNU/Linux',
    echo: (st, a) => a.join(' '),
    help: () => 'Comandi: pwd ls cd cat head tail wc grep sort uniq cut find echo touch mkdir rm chmod sed stat ps ss curl dig ping history clear whoami id answer <testo>\nPipe (|) e redirezioni (> >>) funzionano. Tutto è simulato: nessun comando tocca il tuo dispositivo.',
    clear: (st) => { st.out = []; return null; },
    history: (st) => st.hist.map((h, i) => (i + 1) + '  ' + h).join('\n'),
    cd: (st, a) => { const p = norm(st.cwd, a[0] || '/home/user'), n = get(st.fs, p); if (!n) return 'cd: ' + (a[0] || '') + ': nessun file o directory'; if (n.t !== 'd') return 'cd: ' + a[0] + ': non è una directory'; st.cwd = p; return ''; },
    ls: (st, a) => {
      const fl = a.filter(x => x[0] === '-').join(''), ps = a.filter(x => x[0] !== '-'), res = [];
      (ps.length ? ps : ['.']).forEach(p => { const path = norm(st.cwd, p), n = get(st.fs, path); if (!n) { res.push('ls: impossibile accedere a ' + p + ': nessun file o directory'); return; }
        const ents = n.t === 'd' ? Object.keys(n.kids).filter(k => fl.includes('a') || k[0] !== '.').sort().map(k => [k, n.kids[k]]) : [[p.split('/').pop(), n]];
        if (ps.length > 1) res.push(p + ':'); ents.forEach(([k, x]) => res.push(fl.includes('l') ? modeStr(x) + ' ' + x.owner + ' ' + String(x.t === 'f' ? x.content.length : 4096).padStart(6) + ' ' + k : k)); });
      return fl.includes('l') ? res.join('\n') : res.join(fl.includes('1') ? '\n' : '  ');
    },
    cat: (st, a, inp) => { if (!a.length) return inp || ''; return a.map(p => { const n = get(st.fs, norm(st.cwd, p)); return !n ? 'cat: ' + p + ': nessun file o directory' : n.t === 'd' ? 'cat: ' + p + ': è una directory' : (n.mode & 0o400) || n.owner === 'user' ? n.content.replace(/\n$/, '') : 'cat: ' + p + ': permesso negato'; }).join('\n'); },
    head: (st, a, inp) => { let n = 10; const rest = []; for (let i = 0; i < a.length; i++) { if (a[i] === '-n') n = +a[++i]; else if (/^-\d+$/.test(a[i])) n = -a[i]; else rest.push(a[i]); } const t = rest.length ? CMDS.cat(st, rest) : inp || ''; return lines(t).slice(0, n).join('\n'); },
    tail: (st, a, inp) => { let n = 10; const rest = []; for (let i = 0; i < a.length; i++) { if (a[i] === '-n') n = +a[++i]; else if (/^-\d+$/.test(a[i])) n = -a[i]; else rest.push(a[i]); } const t = rest.length ? CMDS.cat(st, rest) : inp || ''; return lines(t).slice(-n).join('\n'); },
    wc: (st, a, inp) => { const fl = a.filter(x => x[0] === '-').join(''), ps = a.filter(x => x[0] !== '-'), t = ps.length ? CMDS.cat(st, ps) : inp || '', l = lines(t).length, w = t.split(/\s+/).filter(Boolean).length, c = t.length; return fl.includes('l') ? String(l) : fl.includes('w') ? String(w) : fl.includes('c') ? String(c) : l + ' ' + w + ' ' + c; },
    grep: (st, a, inp) => {
      let ic = false, cnt = false, inv = false, ln = false, only = false, i = 0; for (; i < a.length && a[i][0] === '-' && a[i].length > 1; i++) { if (a[i].includes('o')) only = true; if (a[i].includes('i')) ic = true; if (a[i].includes('c')) cnt = true; if (a[i].includes('v')) inv = true; if (a[i].includes('n')) ln = true; }
      const pat = a[i++]; if (pat == null) return 'grep: manca il modello'; const re = rx(pat, ic ? 'i' : ''), reg = rx(pat, ic ? 'gi' : 'g'); if (!re) return 'grep: espressione non valida'; const fs = a.slice(i), multi = fs.length > 1;
      const src = fs.length ? fs.map(p => { const n = get(st.fs, norm(st.cwd, p)); return { p, t: n && n.t === 'f' ? n.content : null }; }) : [{ p: '', t: inp || '' }], out = []; let total = 0;
      src.forEach(s => { if (s.t == null) { out.push('grep: ' + s.p + ': nessun file o directory'); return; } let c = 0; lines(s.t).forEach((l, k) => { if (re.test(l) !== inv) { c++; if (!cnt) { if (only && !inv) (l.match(reg) || []).forEach(x => out.push((multi ? s.p + ':' : '') + x)); else out.push((multi ? s.p + ':' : '') + (ln ? (k + 1) + ':' : '') + l); } } }); total += c; if (cnt) out.push((multi ? s.p + ':' : '') + c); });
      return out.join('\n');
    },
    sort: (st, a, inp) => { const l = lines(inp || ''), n = a.includes('-n'), r = a.includes('-r'); l.sort((x, y) => n ? (parseFloat(x) || 0) - (parseFloat(y) || 0) : x < y ? -1 : x > y ? 1 : 0); if (r) l.reverse(); return l.join('\n'); },
    uniq: (st, a, inp) => { const l = lines(inp || ''), out = []; l.forEach(x => { const p = out[out.length - 1]; if (p && p.x === x) p.n++; else out.push({ x, n: 1 }); }); return out.map(o => a.includes('-c') ? String(o.n).padStart(7) + ' ' + o.x : o.x).join('\n'); },
    cut: (st, a, inp) => { let d = '\t', f = 1; for (let i = 0; i < a.length; i++) { if (a[i] === '-d') d = a[++i]; else if (/^-d./.test(a[i])) d = a[i].slice(2); else if (a[i] === '-f') f = +a[++i]; else if (/^-f\d+$/.test(a[i])) f = +a[i].slice(2); } return lines(inp || '').map(l => l.split(d)[f - 1] || '').join('\n'); },
    find: (st, a) => { const start = a[0] && a[0][0] !== '-' ? a[0] : '.', base = norm(st.cwd, start); let name = null, type = null; for (let i = 0; i < a.length; i++) { if (a[i] === '-name') name = a[++i]; if (a[i] === '-type') type = a[++i]; } const re = name ? rx('^' + name.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$') : null, out = []; const walk = (n, p) => { if ((!type || (type === 'f' && n.t === 'f') || (type === 'd' && n.t === 'd')) && (!re || re.test(p.split('/').pop()))) out.push(p); if (n.t === 'd') Object.keys(n.kids).sort().forEach(k => walk(n.kids[k], (p === '/' ? '' : p) + '/' + k)); }; const n = get(st.fs, base); if (!n) return 'find: ' + start + ': nessun file o directory'; walk(n, base); return out.join('\n'); },
    touch: (st, a) => { a.forEach(p => { const path = norm(st.cwd, p), pr = parent(st.fs, path); if (pr.dir && !pr.dir.kids[pr.name]) pr.dir.kids[pr.name] = file(''); }); return ''; },
    mkdir: (st, a) => { a.forEach(p => { const path = norm(st.cwd, p), pr = parent(st.fs, path); if (pr.dir && !pr.dir.kids[pr.name]) pr.dir.kids[pr.name] = dir(); }); return ''; },
    rm: (st, a) => { const rec = a.some(x => /^-.*r/.test(x)); const out = []; a.filter(x => x[0] !== '-').forEach(p => { const path = norm(st.cwd, p), pr = parent(st.fs, path), n = pr.dir && pr.dir.kids[pr.name]; if (!n) out.push('rm: impossibile rimuovere ' + p + ': nessun file o directory'); else if (n.t === 'd' && !rec) out.push('rm: ' + p + ' è una directory'); else delete pr.dir.kids[pr.name]; }); return out.join('\n'); },
    chmod: (st, a) => { const m = a[0], out = []; if (!/^[0-7]{3,4}$/.test(m)) return 'chmod: modo non supportato (usa un numero ottale, es. 600)'; a.slice(1).forEach(p => { const n = get(st.fs, norm(st.cwd, p)); if (!n) out.push('chmod: impossibile accedere a ' + p); else n.mode = parseInt(m, 8) & 0o777; }); return out.join('\n'); },
    stat: (st, a) => a.map(p => { const n = get(st.fs, norm(st.cwd, p)); return n ? 'File: ' + p + '\nAccess: (' + n.mode.toString(8).padStart(4, '0') + '/' + modeStr(n) + ')  Owner: ' + n.owner : 'stat: ' + p + ': nessun file o directory'; }).join('\n'),
    sed: (st, a) => { const inplace = a.includes('-i'), rest = a.filter(x => x !== '-i'), m = /^s(.)(.*?)\1(.*?)\1(g?)$/.exec(rest[0] || ''); if (!m) return 'sed: supportato solo s/vecchio/nuovo/[g]'; const n = get(st.fs, norm(st.cwd, rest[1] || '')); if (!n || n.t !== 'f') return 'sed: ' + rest[1] + ': nessun file'; const re = rx(m[2], m[4] ? 'g' : ''); if (!re) return 'sed: espressione non valida'; const res = n.content.split('\n').map(l => l.replace(re, m[3])).join('\n'); if (inplace) { n.content = res; return ''; } return res.replace(/\n$/, ''); },
    ps: (st) => (st.env.ps || 'PID  USER  COMMAND\n1    root  /sbin/init\n412  root  /usr/sbin/sshd -D\n980  user  -bash'),
    ss: (st) => st.env.ss || 'State   Local Address:Port\nLISTEN  127.0.0.1:631',
    netstat: (st) => CMDS.ss(st),
    curl: (st, a) => { const h = a.includes('-I'), u = a.find(x => x[0] !== '-'); const r = (st.env.http || {})[u]; if (!r) return 'curl: (6) Impossibile risolvere l’host (rete simulata: solo bersagli del laboratorio)'; return h ? r.headers : r.body; },
    dig: (st, a) => { const i = a.findIndex(x => ['MX', 'A', 'TXT', 'NS', 'CNAME'].includes(x.toUpperCase())), type = i >= 0 ? a[i].toUpperCase() : 'A', name = a.find((x, k) => x[0] !== '-' && k !== i), z = (st.env.dns || {})[name + '/' + type]; return z ? z : ';; ' + (name || '') + ' ' + type + ': nessun record (zona simulata)'; },
    nslookup: (st, a) => CMDS.dig(st, [a[0], 'A']),
    ping: (st, a) => { const h = (st.env.hosts || {})[a[a.length - 1]]; return h ? h : 'ping: ' + a[a.length - 1] + ': host sconosciuto (rete simulata)'; }
  };
  CMDS.ll = (st, a) => CMDS.ls(st, ['-l'].concat(a));

  /* esegue una riga completa: pipe e redirezioni; restituisce {out} e aggiorna lo stato */
  Y.run = (st, line, ch) => {
    st.hist.push(line); st.cmds++; const segs = split(line); let inp = null, text = '';
    for (let k = 0; k < segs.length; k++) {
      let seg = segs[k], redirect = null; const m = /^(.*?)\s*(>>|>)\s*(\S+)\s*$/.exec(seg); if (m) { seg = m[1]; redirect = { op: m[2], path: m[3] }; }
      const w = words(seg); if (!w.length) continue; const name = w[0], args = w.slice(1);
      if (name === 'answer') { const r = Y.answer(st, ch, args.join(' ')); text = r; inp = null; continue; }
      if (!CMDS[name]) { text = name + ': comando non trovato (digita help)'; inp = null; continue; }
      let r = CMDS[name](st, glob(st, args), inp); r = r == null ? '' : String(r);
      if (redirect) { const path = norm(st.cwd, redirect.path), pr = parent(st.fs, path); if (!pr.dir) { text = 'bash: ' + redirect.path + ': nessun file o directory'; } else { const ex = pr.dir.kids[pr.name]; if (ex && ex.t === 'f') ex.content = redirect.op === '>>' ? ex.content + r + '\n' : r + '\n'; else if (!ex) pr.dir.kids[pr.name] = file(r + '\n'); text = ''; } inp = null; }
      else { inp = r; text = r; }
    }
    st.out.push({ cmd: line, text }); if (ch && ch.check && !st.solved && ch.check(st)) { st.solved = true; st.out.push({ cmd: null, text: '✔ Obiettivo raggiunto.' }); }
    return text;
  };
  Y.answer = (st, ch, txt) => {
    if (!ch.answers) return 'Questo esercizio non richiede una risposta testuale: raggiungi l’obiettivo con i comandi.'; st.tries++;
    const t = String(txt).trim().toLowerCase(); if (!t) return 'Uso: answer <testo>';
    if (ch.answers.some(a => String(a).toLowerCase() === t)) { st.solved = true; return '✔ Risposta corretta.'; } return '✘ Non è la risposta attesa. Rileggi i dati.';
  };
  Y.hint = (st, ch) => { if (st.hints >= (ch.hints || []).length) return null; return ch.hints[st.hints++]; };
  Y.validate = ch => { const er = []; if (!ch.id || !ch.title || !ch.goal || !ch.fs || !(ch.answers || ch.check)) er.push('campi obbligatori'); if (!(ch.hints && ch.hints.length >= 2)) er.push('servono almeno 2 indizi'); if (!ch.explain) er.push('manca la spiegazione difensiva'); if (ch.solution && !Array.isArray(ch.solution)) er.push('solution deve essere una lista di comandi');
    if (!er.length && ch.solution) { const st = Y.session(ch); ch.solution.forEach(c => Y.run(st, c, ch)); if (!st.solved) er.push('la soluzione dichiarata non risolve l’esercizio'); }
    return { ok: !er.length, errors: er }; };
  Y.CMDS = Object.keys(CMDS);
  M.registerLab({ id: 'cyberlab', title: 'Cybersecurity Practical Lab', view: 'sma-cyber', desc: 'Terminale simulato con filesystem virtuale: log, permessi, hardening, DNS e HTTP su bersagli sintetici. Solo analisi e difesa.', ready: true });

  /* ---- interfaccia ---- */
  const sess = {};
  V['sma-cyber'] = () => { const S = (M.S(A.state).tech = M.S(A.state).tech || {}).cyber = (M.S(A.state).tech.cyber || {}); return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>💻 Cybersecurity Practical Lab</h1><p class="warn small">Ambiente simulato e isolato: nessun comando viene eseguito sul dispositivo e non c’è accesso alla rete. I bersagli sono inventati; gli esercizi riguardano analisi e difesa.</p><div class="list">' + Y.challenges.map(c => '<button class="item" data-act="smaCybOpen" data-id="' + E(c.id) + '"><span class="tx"><b>' + E(c.title) + '</b><span>' + E(c.level) + ' · ' + E(c.goal) + '</span></span>' + (S[c.id] && S[c.id].solved ? '<span class="tag good">risolto</span>' : '') + '</button>').join('') + '</div>'; };
  V['sma-cyber-play'] = p => {
    const ch = Y.byId(p.id), st = sess[ch.id] || (sess[ch.id] = Y.session(ch));
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(ch.title) + '</h1><div class="card"><p>' + E(ch.goal) + '</p><p class="small mute">Directory: <code>' + E(st.cwd) + '</code> · indizi usati ' + st.hints + ' · comandi ' + st.cmds + '</p></div>' +
      '<div id="sma-term" style="background:#070b1a;border:1px solid #2a3560;border-radius:10px;padding:8px;font-family:monospace;font-size:13px;max-height:340px;overflow:auto;white-space:pre-wrap">' + st.out.map(o => (o.cmd != null ? '<span style="color:#7aa2ff">$ ' + E(o.cmd) + '</span>\n' : '') + E(o.text) + '\n').join('') + '</div>' +
      '<div class="row" style="gap:6px;margin-top:8px"><input id="sma-cmd" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="digita un comando (help)" style="flex:1;font-family:monospace"><button class="btn" data-act="smaCybRun">Invia</button></div>' +
      (st.solved ? '<div class="card glow"><h3>Risolto</h3><p class="small">' + E(ch.explain) + '</p></div>' : '<p class="small"><button class="btn sm ghost" data-act="smaCybHint" data-id="' + E(ch.id) + '">Indizio (' + st.hints + '/' + (ch.hints || []).length + ')</button> <button class="btn sm ghost" data-act="smaCybReset" data-id="' + E(ch.id) + '">Ricomincia</button></p>');
  };
  ST.after['sma-cyber-play'] = (el, p) => { const i = el.querySelector('#sma-cmd'), t = el.querySelector('#sma-term'); if (t) t.scrollTop = t.scrollHeight; if (i) { i.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); X.smaCybRun(); } }); } };
  const cur = () => A.view().p.id;
  X.smaCybOpen = el => { A.go('sma-cyber-play', { id: el.dataset.id }); };
  X.smaCybRun = () => {
    const ch = Y.byId(cur()), st = sess[ch.id], i = document.getElementById('sma-cmd'); if (!i || !i.value.trim()) return; const was = st.solved; Y.run(st, i.value.trim(), ch);
    if (st.solved && !was) { const S = (M.S(A.state).tech = M.S(A.state).tech || {}).cyber = (M.S(A.state).tech.cyber || {}); S[ch.id] = { solved: true, d: U.today(), hints: st.hints, cmds: st.cmds }; try { A.xp(st.hints ? 2 : 3, 'sma:cyb:' + ch.id); } catch (e) { /* ignora */ } A.save(); }
    A.render();
    const n = document.getElementById('sma-cmd'); if (n) n.focus();
  };
  X.smaCybHint = el => { const ch = Y.byId(el.dataset.id), st = sess[ch.id], h = Y.hint(st, ch); if (h) st.out.push({ cmd: null, text: 'Indizio: ' + h }); A.render(); };
  X.smaCybReset = el => { delete sess[el.dataset.id]; A.render(); };
})(window.ST = window.ST || {});
