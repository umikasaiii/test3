#!/usr/bin/env node
/* Conteggi REALI dei contenuti vNext rispetto agli obiettivi minimi del mandato (nessun numero scritto a mano). */
const fs = require('fs'), path = require('path');
const ST = require('../tests/load.js')();
const M = ST.sma, C = ST.content, bundle = fs.readdirSync(path.join(__dirname, '..', 'src', 'vnext')).filter(f => /\.js$/.test(f)).map(f => fs.readFileSync(path.join(__dirname, '..', 'src', 'vnext', f), 'utf8')).join('\n');
const T = C.topicsOf('sma'), words = t => t.pages.reduce((a, p) => a + String(p.h + ' ' + p.b).split(/\s+/).length, 0);
const rows = [
  ['Livelli strutturati', 6, M.LEVELS.length],
  ['Percorsi specialistici', 4, M.PILLAR_IDS.length],
  ['Moduli didattici sostanziali', 24, T.length],
  ['Scenari strategici distinti (casi + processi + piani F1 + duelli + opponent + missioni + cross + sim esistenti)', 60, M.deduction.cases.length + M.process.scenarios.length + M.f1lab.scenarios.length + Object.keys(M.opponent.TYPES).length + M.strategos.missions.length + M.cross.missions.length + ST.sim.templates.length],
  ['Casi investigativi (Deduction Lab)', 20, M.deduction.cases.length],
  ['Simulazioni multi-turno (vNext crisi/comunicazione + F1 + ST.sim esistenti)', 20, M.process.scenarios.length + M.f1lab.scenarios.length + ST.sim.templates.length],
  ['Missioni di transfer reale (STRATEGOS)', 20, M.strategos.missions.length],
  ['Verifiche per livello', 6, ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'].filter(l => M.levelCheck.items(l).length >= 15).length],
  ['Laboratori attivi (registrati come ready)', 18, M.labs.length]
];
console.log('Obiettivo minimo del mandato vs realizzato (conteggi dal codice):');
rows.forEach(r => console.log((r[2] >= r[1] ? '  ✓ ' : '  ✗ ') + r[0] + ': ' + r[2] + ' / ' + r[1]));
const w = T.map(words); console.log('\nModuli: parole medie per modulo ' + Math.round(w.reduce((a, b) => a + b, 0) / (w.length || 1)) + ' · esercizi ' + T.reduce((a, t) => a + t.exercises.length, 0) + ' · domande di verifica ' + T.reduce((a, t) => a + (t.test || []).length, 0));
console.log('Altro: scenari conversazione ' + M.convo.scenarios.length + ' (EN ' + M.convo.scenarios.filter(s => s.lang === 'en').length + ', JA ' + M.convo.scenarios.filter(s => s.lang === 'ja').length + '), situazioni judo ' + M.combat.situations.length + ', esercizi cyber ' + M.cyberlab.challenges.length + ', esercizi programmazione ' + M.proglab.exercises.length + ', scenari F1 ' + M.f1lab.scenarios.length + ', casi/studi sport ' + M.sportlab.STUDIES.length);
console.log('Sorgenti Strategic Mastery Academy: ' + Math.round(bundle.length / 1024) + ' KB (integrati in index.html)');
process.exit(rows.every(r => r[2] >= r[1]) ? 0 : 1);
