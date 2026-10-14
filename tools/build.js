#!/usr/bin/env node
/* Costruisce index.html: un unico file autonomo (CSS + JS + contenuti inline), offline-first. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const ORDER = [
  'core/util', 'core/version', 'core/srs', 'core/progress', 'core/plan', 'core/kana', 'core/cards', 'core/motor', 'core/storage', 'core/audio', 'core/mental', 'core/mental-extra', 'core/drills', 'core/cyber', 'core/chess', 'core/strategy', 'core/strategy2', 'core/sport', 'core/sport2', 'core/sim',
  'content/registry', 'content/subjects', 'content/judo', 'content/judo-more', 'content/judo-nage', 'content/judo-nogi', 'content/judo-l-base', 'content/judo-l-ukemi', 'content/judo-l-nage1', 'content/judo-l-nage2', 'content/judo-l-clinch', 'content/judo-l-lotta', 'content/judo-l-theory', 'content/judo-polish', 'content/mnt-l-memoria', 'content/mnt-l-calcolo', 'content/mnt-l-strategia', 'content/cyb-l-fondamenti', 'content/cyb-l-reti', 'content/cyb-l-sistemi', 'content/cyb-l-crypto', 'content/cyb-l-web', 'content/cyb-l-difesa', 'content/cyb-l-avanzato', 'content/cyb-l-governance', 'content/cyb-banks', 'content/str-l-pensiero', 'content/str-l-giochi', 'content/str-l-scacchi1', 'content/str-l-scacchi2', 'content/str-l-decisioni', 'content/str-l-economia', 'content/str-l-militare', 'content/str-l-ottimizzazione', 'content/spo-l-fisiologia', 'content/spo-l-forza', 'content/spo-l-resistenza', 'content/spo-l-nutrizione', 'content/spo-l-fisiologia2', 'content/spo-l-forza2', 'content/spo-l-prestazione2', 'content/spo-l-nutrizione2', 'content/spo-l-popolazioni', 'content/str-puzzles', 'content/sim-proc', 'content/sim-a', 'content/sim-b', 'content/sim-c', 'content/sim-d', 'content/sim-e', 'content/sim-f', 'content/en-l0-l1', 'content/en-l2-l3', 'content/en-l4-l5', 'content/en-gate', 'content/en-x-l0', 'content/en-x-l1', 'content/en-x-l2', 'content/en-x-l3', 'content/en-x-l4', 'content/en-x-l5',
  'content/ja-j0-j1', 'content/ja-x-j0', 'content/ja-x-j1', 'content/ja-x-j2', 'content/ja-x-j3', 'content/ja-x-j4', 'content/ja-x-j5', 'content/ja-j2-j3', 'content/ja-j4-j5', 'content/pills', 'content/extras', 'content/dialogues', 'content/gate-more', 'content/reading-more', 'content/en-y', 'content/ja-y', 'content/gate-more2', 'content/gate-more3', 'content/en-z1', 'content/en-z2', 'content/ja-z1', 'content/ja-k1', 'content/ja-k2', 'content/ja-k3', 'content/gate-more4', 'content/gate-more5', 'content/resources',
  'ui/app', 'ui/views-home', 'ui/runner', 'ui/topic', 'ui/labs', 'ui/mission', 'ui/cyber', 'ui/strategy', 'ui/sim', 'ui/sport', 'ui/views-other', 'ui/boot'
];
exports.ORDER = ORDER;
const MIME = { webp: 'image/webp', jpg: 'image/jpeg', png: 'image/png' };
/* Immagini originali della V11.2 (cartella assets/) incorporate come data URI: ST.assets[nome]. */
const assetsModule = () => {
  const dir = path.join(root, 'assets'), out = {};
  fs.readdirSync(dir).filter(f => /\.(webp|jpg|png)$/.test(f)).sort().forEach(f => { const ext = f.split('.').pop(); out[f.replace(/\.[a-z]+$/, '')] = 'data:' + MIME[ext] + ';base64,' + fs.readFileSync(path.join(dir, f)).toString('base64'); });
  return '(function (ST) { ST.assets = ' + JSON.stringify(out) + '; })(window.ST = window.ST || {});\n';
};
exports.sources = () => [{ name: 'assets', code: process.env.NO_ASSETS ? '(function (ST) { ST.assets = {}; })(window.ST = window.ST || {});' : assetsModule() }].concat(ORDER.map(f => ({ name: f, code: fs.readFileSync(path.join(root, 'src', f + '.js'), 'utf8') })));
if (require.main === module) {
  const css = fs.readFileSync(path.join(root, 'src/ui/style.css'), 'utf8');
  const js = exports.sources().map(s => '/* ---- ' + s.name + ' ---- */\n' + s.code).join('\n').replace(/<\/script/gi, '<\\/script');
  const html = '<!doctype html>\n<html lang="it" data-theme="neon">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="theme-color" content="#070b1a">\n<meta name="description" content="SkillTree Academy — accademia personale offline: lingue, judo, mente e cultura generale.">\n<link rel="manifest" href="manifest.webmanifest">\n<link rel="icon" href="icon.svg" type="image/svg+xml">\n<title>SkillTree Academy</title>\n<style>\n' + css + '\n</style>\n</head>\n<body>\n<header id="top" aria-live="polite"></header>\n<main id="app"></main>\n<nav class="tabs" id="tabs" aria-label="Navigazione principale"></nav>\n<noscript>SkillTree richiede JavaScript.</noscript>\n<script>\n' + js + '\n</script>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(root, 'index.html'), html);
  console.log('index.html scritto: ' + Math.round(html.length / 1024) + ' KB');
}
