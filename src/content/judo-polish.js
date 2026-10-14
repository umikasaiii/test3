/* SkillTree — rifinitura delle lezioni judo: (1) unisce le pagine brevi adiacenti (meno tocchi, più testo per pagina),
   (2) toglie le frasi di riempimento ripetute in molte lezioni. Le regole di sicurezza restano (ripetute di proposito),
   e le pagine «Sicurezza» non vengono mai fuse con altre. */
(function (ST) {
  'use strict';
  const C = ST.content;
  const words = s => String(s).replace(/[*>#]|\{\{[^|]*\||\}\}/g, ' ').split(/\s+/).filter(Boolean).length;
  const topics = C.topicsOf('grp').filter(t => /^jud-/.test(t.id));
  const SAFE = /(pavimento duro|solo tu|ukemi|Costanti di ogni caduta|dal basso verso l’alto|tatami|istruttore|a vuoto|mento sul petto|testa non tocca|dolore|giramenti)/i;

  // (2) frasi lunghe ripetute ≥ 5 volte che non sono di sicurezza
  const count = {};
  topics.forEach(t => t.pages.forEach(p => String(p.b).split(/(?<=[.!?])\s+/).forEach(s => { const k = s.trim(); if (k.length > 40) count[k] = (count[k] || 0) + 1; })));
  const filler = Object.keys(count).filter(k => count[k] >= 5 && !SAFE.test(k));
  topics.forEach(t => t.pages.forEach(p => {
    let b = String(p.b);
    filler.forEach(f => { b = b.split(f).join(''); });
    b = b.split('\n').filter(l => !/^\s*(- |> |\d+\. )?\s*$/.test(l) || l.trim() === '').join('\n').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/ {2,}/g, ' ').trim();
    p.b = b;
  }));

  // (1) fusione di pagine brevi
  const STANDALONE = /^(Sicurezza|Riepilogo|Ricapitolando)/i;
  topics.forEach(t => {
    const out = []; let cur = null;
    const flush = () => { if (cur) { out.push(cur); cur = null; } };
    t.pages.forEach(p => {
      if (!p.b) return;
      if (STANDALONE.test(p.h)) { flush(); out.push(p); return; }
      if (!cur) { cur = { h: p.h, b: p.b, _w: words(p.b) }; return; }
      if (cur._w >= 110 || cur._w + words(p.b) > 230) { flush(); cur = { h: p.h, b: p.b, _w: words(p.b) }; return; }
      cur.b += '\n\n**' + p.h + '**\n' + p.b; cur._w += words(p.b);
    });
    flush();
    out.forEach(p => { delete p._w; });
    if (out.length >= 3) t.pages = out;
  });
})(window.ST = window.ST || {});
