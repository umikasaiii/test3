# 🌳 SkillTree Academy

Accademia personale **offline-first** per Android (Chrome): inglese, giapponese, judo/lotta (pratica solitaria e sicura), allenamento mentale, cultura generale. Un solo file `index.html` autonomo, nessuna dipendenza esterna.

> **Principio guida:** XP e livelli misurano la *partecipazione*. La *padronanza* si dichiara solo con verifiche a distanza di tempo e, per parlato/scrittura/judo, con evidenze esterne.

## Uso

- **Aprire:** `index.html` nel browser, oppure servire la cartella via https (consigliato: origine stabile, service worker, persistenza affidabile — ad es. GitHub Pages).
- **Dati:** nel dispositivo (IndexedDB, con fallback localStorage). Esporta spesso il backup da *Altro → Backup*.
- **Audio:** *Altro → Audio → Diagnostica* mostra voci TTS e microfono disponibili sul tuo telefono.

## Struttura

```
src/core      motore: SRS, progresso/XP, piano 60′, scheduler motorio, kana, carte, mentale, storage, audio
src/content   contenuti: registro, materie, inglese (L0–L5), giapponese (J0–J5), judo, pillole, pool B2, dialoghi
src/ui        viste e attività: home, percorsi, lezione a pagine, runner esercizi, laboratori, missioni, progresso
tools/        build.js (→ index.html), validate-content.js
tests/        engine.test.js (unit + simulazione 24 mesi), e2e.js, e2e-smoke.js (Chromium headless)
docs/         AUDIT.md (audit + stato), ROADMAP.md (piano contenuti)
```

## Sviluppo

```bash
node tools/build.js            # rigenera index.html dai sorgenti
node tools/validate-content.js # valida i contenuti
node --test tests/engine.test.js
node tests/e2e.js && node tests/e2e-smoke.js   # richiede Playwright + Chromium
```

`index.html` è un artefatto di build **versionato**: dopo ogni modifica ai sorgenti, rigeneralo (la CI verifica che sia aggiornato).

## Aggiungere contenuti

Un argomento è un oggetto registrato con `ST.content.addTopic({...})` (vedi `src/content/en-l0-l1.js`): pagine di lezione, esercizi (`mc`, `fill`, `order`, `listen`), domande di verifica distinte, carte lessicali, brani d'ascolto con domande esplicite/implicite, dettati, frasi di shadowing, consegne di parlato. Il validatore segnala errori strutturali. Per il giapponese ogni kanji nei testi da ascoltare va scritto come `[漢字|かんじ]`.

## Sicurezza del judo

Il modulo propone **solo** esercizi solitari a vuoto. Nessuna proiezione, nessuna caduta nuova, nessuna tecnica su partner senza istruttore. Vedi `src/content/judo.js`.

Stato dell'audit e limiti noti: [`docs/AUDIT.md`](docs/AUDIT.md).
