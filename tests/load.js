/* Carica i sorgenti dell'app in un contesto Node (senza DOM reale) per i test. */
const vm = require('vm');
const { sources } = require('../tools/build.js');
process.env.NO_ASSETS = process.env.NO_ASSETS || '1';
module.exports = function load(opts) {
  const noop = () => {};
  const ctx = { console, setTimeout, clearTimeout, setInterval, clearInterval, Date, Math, JSON, Promise, URL, Blob: class {}, FileReader: class {} };
  ctx.window = ctx;
  ctx.document = { addEventListener: noop, readyState: 'loading', hidden: false, createElement: () => ({}), querySelector: () => null };
  ctx.addEventListener = noop;
  ctx.localStorage = (() => { const m = {}; return { getItem: k => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = String(v); }, removeItem: k => { delete m[k]; } }; })();
  ctx.navigator = { storage: {} };
  ctx.location = { protocol: 'file:' };
  ctx.history = { pushState: noop, back: noop, state: null };
  vm.createContext(ctx);
  sources().concat((opts && opts.extra) || []).forEach(s => vm.runInContext(s.code, ctx, { filename: s.name + '.js' }));
  ctx.ST.content.finalize();
  return ctx.ST;
};
