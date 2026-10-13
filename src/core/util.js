/* SkillTree — utilità comuni (nessuna dipendenza). */
(function (ST) {
  'use strict';

  // Orologio sostituibile: i test e le simulazioni sui 24 mesi lo sovrascrivono.
  ST.clock = { now: () => new Date() };

  const pad = n => String(n).padStart(2, '0');
  const dstr = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const U = ST.util = {};

  U.today = () => dstr(ST.clock.now());
  U.dstr = dstr;
  U.parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d, 12); };
  U.addDays = (s, n) => { const d = U.parse(s); d.setDate(d.getDate() + n); return dstr(d); };
  U.diffDays = (a, b) => Math.round((U.parse(b) - U.parse(a)) / 864e5);
  // 0 = lunedì … 6 = domenica
  U.weekday = (s) => (U.parse(s || U.today()).getDay() + 6) % 7;
  // Mese di corso (1-based) rispetto alla data di inizio.
  U.monthIndex = (start, s) => {
    const a = U.parse(start), b = U.parse(s || U.today());
    let m = (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth();
    if (b.getDate() < a.getDate()) m -= 1;
    return Math.max(1, m + 1);
  };

  U.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  U.clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  U.uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  U.clone = o => JSON.parse(JSON.stringify(o));

  // PRNG deterministico (mulberry32) per esercizi riproducibili nei test.
  U.rng = seed => {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  U.rand = Math.random;
  U.shuffle = (arr, r) => {
    r = r || U.rand;
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  U.pick = (arr, r) => arr[Math.floor((r || U.rand)() * arr.length)];
  U.sample = (arr, n, r) => U.shuffle(arr, r).slice(0, n);

  /* Testo con ruby: [漢字|かんじ]. display → <ruby>, speech → lettura (per la TTS), plain → base. */
  const RUBY = /\[([^\]|]+)\|([^\]]+)\]/g;
  const SAY = /\{\{[a-zA-Z-]+\|([^}]+)\}\}/g;
  U.unsay = s => String(s).replace(SAY, '$1');
  U.ruby = s => U.esc(U.unsay(s)).replace(RUBY, (_, b, r) => '<ruby>' + b + '<rt>' + r + '</rt></ruby>');
  U.speechText = s => U.unsay(s).replace(RUBY, (_, b, r) => r);
  U.plainText = s => U.unsay(s).replace(RUBY, (_, b) => b);

  /* Mini-markup per le lezioni: paragrafi, **grassetto**, "- " elenchi, "> " esempi,
     {{lang|testo}} = frase con pulsante audio, [漢字|かな] = ruby. */
  U.markup = src => {
    const inline = t => {
      let s = U.esc(t);
      s = s.replace(/\{\{([a-zA-Z-]+)\|([^}]+)\}\}/g, (_, lang, txt) =>
        '<button class="say" data-act="say" data-lang="' + lang + '" data-text="' + U.esc(U.speechText(txt.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'))) + '" aria-label="Ascolta">🔊</button><span class="sayt">' + txt.replace(RUBY, (_, b, r) => '<ruby>' + b + '<rt>' + r + '</rt></ruby>') + '</span>');
      s = s.replace(RUBY, (_, b, r) => '<ruby>' + b + '<rt>' + r + '</rt></ruby>');
      s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
      return s;
    };
    const out = [];
    let list = null, quote = null;
    const flush = () => {
      if (list) { out.push('<ul>' + list.map(x => '<li>' + inline(x) + '</li>').join('') + '</ul>'); list = null; }
      if (quote) { out.push('<div class="ex">' + quote.map(x => '<p>' + inline(x) + '</p>').join('') + '</div>'); quote = null; }
    };
    String(src).split('\n').forEach(line => {
      const l = line.trim();
      if (!l) { flush(); return; }
      if (l.startsWith('- ')) { if (quote) flush(); (list = list || []).push(l.slice(2)); return; }
      if (l.startsWith('> ')) { if (list) flush(); (quote = quote || []).push(l.slice(2)); return; }
      flush();
      out.push('<p>' + inline(l) + '</p>');
    });
    flush();
    return out.join('');
  };

  // Normalizzazione per confronto di risposte digitate.
  U.norm = s => String(s).toLowerCase().normalize('NFKC')
    .replace(/[’‘`]/g, "'").replace(/[“”]/g, '"')
    .replace(/[.,!?;:。、！？「」]/g, ' ').replace(/\s+/g, ' ').trim();

  // Distanza di edit su parole, per il dettato (restituisce anche il diff).
  U.wordDiff = (ref, got) => {
    const a = U.norm(ref).split(' ').filter(Boolean), b = U.norm(got).split(' ').filter(Boolean);
    const n = a.length, m = b.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    const ops = [];
    let i = n, j = m;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) { ops.push({ w: a[i - 1], ok: true }); i--; j--; }
      else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) { ops.push({ w: b[j - 1], extra: true }); j--; }
      else { ops.push({ w: a[i - 1], missing: true }); i--; }
    }
    ops.reverse();
    const hit = dp[n][m];
    return { ops, score: n ? hit / Math.max(n, m) : 0, total: n };
  };
  // Dettato giapponese: confronto per caratteri (nessuno spazio tra le parole).
  U.charDiff = (ref, got) => {
    const a = Array.from(U.norm(U.speechText(ref)).replace(/\s/g, '')), b = Array.from(U.norm(got).replace(/\s/g, ''));
    const n = a.length, m = b.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    return { score: n ? dp[n][m] / Math.max(n, m) : 0, total: n };
  };
})(window.ST = window.ST || {});
