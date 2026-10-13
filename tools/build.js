#!/usr/bin/env node
/* Costruisce index.html: un unico file autonomo (CSS + JS + contenuti inline), offline-first. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const ORDER = [
  'core/util', 'core/version', 'core/srs', 'core/progress', 'core/plan', 'core/kana', 'core/cards', 'core/motor', 'core/storage', 'core/audio', 'core/mental',
  'content/registry', 'content/subjects', 'content/judo', 'content/en-l0-l1', 'content/en-l2-l3', 'content/en-l4-l5', 'content/en-gate',
  'content/ja-j0-j1', 'content/ja-j2-j3', 'content/ja-j4-j5', 'content/pills', 'content/extras',
  'ui/app', 'ui/views-home', 'ui/runner', 'ui/topic', 'ui/labs', 'ui/mission', 'ui/views-other', 'ui/boot'
];
exports.ORDER = ORDER;
exports.sources = () => ORDER.map(f => ({ name: f, code: fs.readFileSync(path.join(root, 'src', f + '.js'), 'utf8') }));
if (require.main === module) {
  const css = fs.readFileSync(path.join(root, 'src/ui/style.css'), 'utf8');
  const js = exports.sources().map(s => '/* ---- ' + s.name + ' ---- */\n' + s.code).join('\n').replace(/<\/script/gi, '<\\/script');
  const html = '<!doctype html>\n<html lang="it" data-theme="neon">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="theme-color" content="#070b1a">\n<meta name="description" content="SkillTree Academy — accademia personale offline: lingue, judo, mente e cultura generale.">\n<link rel="manifest" href="manifest.webmanifest">\n<link rel="icon" href="icon.svg" type="image/svg+xml">\n<title>SkillTree Academy</title>\n<style>\n' + css + '\n</style>\n</head>\n<body>\n<header id="top" aria-live="polite"></header>\n<main id="app"></main>\n<nav class="tabs" id="tabs" aria-label="Navigazione principale"></nav>\n<noscript>SkillTree richiede JavaScript.</noscript>\n<script>\n' + js + '\n</script>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(root, 'index.html'), html);
  console.log('index.html scritto: ' + Math.round(html.length / 1024) + ' KB');
}
