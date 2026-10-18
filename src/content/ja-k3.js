/* Giapponese — kanji in contesto (3): lavoro e scuola, società, concetti astratti, tempo, quantità e azioni. */
(function (ST) {
  'use strict';
  const C = ST.content, { order, card } = C;
  // Posizione della risposta corretta variata in modo deterministico (solo quando la chiave è scritta per prima; opzioni tipo «Tutte/Nessuna» restano ferme).
  let rot = 0;
  const rotOpt = (o, a) => { const n = o.length; if (a !== 0 || n < 3 || o.some(x => /^(Tutt|Entramb|Nessun|Non si sa)/.test(String(x)))) return [o, a]; const k = (rot++ * 3 + 1) % n, rest = o.slice(1); rest.splice(k, 0, o[0]); return [rest, k]; };
  const mc = (q, o, a, why) => { const r = rotOpt(o, a); return C.mc(q, r[0], r[1], why); };
  const listen = (say, lang, q, o, a, why) => { const r = rotOpt(o, a); return C.listen(say, lang, q, r[0], r[1], why); };
  const addTopic = (t) => { [].concat(t.listening || [], t.reading || []).forEach(g => (g.qs || []).forEach(x => { const r = rotOpt(x.o, x.a); x.o = r[0]; x.a = r[1]; })); return C.addTopic(t); };
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const M = (q, right, wrong, idx) => { const o = wrong.slice(); o.splice(idx, 0, right); return mc(q, o, idx); };
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J0', minutes: 20, prereq: ['jpn-j0-numbers-time'] }, o));

  /* ---------------------------------------------------------------- J2 */
  T({ id: 'jpn-j2-kanji-c1', stage: 'J2', prereq: ['jpn-j2-kanji-2b'], title: 'Kanji c1: lavoro, scuola e studio', summary: '12 kanji N4: 勤 職 務 卒 科 数 授 欠 練 記 暗 留.',
    objectives: ['Leggere 12 kanji N4 legati a lavoro, scuola e studio', 'Capire parole come 勤務, 職場, 授業, 練習, 留学', 'Leggere una breve presentazione di sé con ruby'],
    pages: [
      { h: 'Obiettivo', b: 'Questi kanji compaiono nei moduli di iscrizione, negli annunci di lavoro e nei programmi dei corsi. Li impari in **tre gruppi**: lavoro, scuola, studio. Ogni kanji è collegato a parole che incontrerai davvero.' },
      { h: 'Lavoro e carriera', b: '- **勤** (きん; つとめる): {{ja|[会社|かいしゃ]に [勤|つと]めて います。}} lavoro in un’azienda; {{ja|[出勤|しゅっきん]}} andare al lavoro\n- **職** (しょく): {{ja|[職場|しょくば]}} luogo di lavoro, {{ja|[職業|しょくぎょう]}} professione, {{ja|[職員|しょくいん]}} personale\n- **務** (む; つとめる): {{ja|[事務|じむ]}} lavoro d’ufficio, {{ja|[勤務|きんむ]}} servizio\n- **卒** (そつ): {{ja|[卒業|そつぎょう]}} diploma, laurea: {{ja|[大学|だいがく]を [卒業|そつぎょう]しました。}}\n\nAttenzione: 勤める (lavorare presso) è diverso da {{ja|[働|はたら]く}} (lavorare in generale).' },
      { h: 'Scuola', b: '- **科** (か): {{ja|[科学|かがく]}} scienza, {{ja|[教科書|きょうかしょ]}} libro di testo, {{ja|[科目|かもく]}} materia\n- **数** (すう; かず; かぞえる): {{ja|[数学|すうがく]}} matematica, {{ja|[人数|にんずう]}} numero di persone, {{ja|[数|かぞ]えます。}} contare\n- **授** (じゅ): {{ja|[授業|じゅぎょう]}} lezione, {{ja|[教授|きょうじゅ]}} professore universitario\n- **欠** (けつ; かける): {{ja|[欠席|けっせき]}} assenza, {{ja|[欠点|けってん]}} difetto\n\nFrase: {{ja|[今日|きょう]は [授業|じゅぎょう]を [欠席|けっせき]します。}}' },
      { h: 'Studio e esperienza all’estero', b: '- **練** (れん; ねる): {{ja|[練習|れんしゅう]}} esercizio, allenamento\n- **記** (き): {{ja|[日記|にっき]}} diario, {{ja|[記事|きじ]}} articolo, {{ja|[暗記|あんき]}} imparare a memoria\n- **暗** (あん; くらい): {{ja|[暗|くら]い}} buio, {{ja|[暗記|あんき]}}\n- **留** (りゅう; る; とめる): {{ja|[留学|りゅうがく]}} studio all’estero, {{ja|[留学生|りゅうがくせい]}}, {{ja|[留守|るす]}} assenza da casa\n\nFrase: {{ja|[毎日|まいにち] [日記|にっき]を [書|か]いて、[漢字|かんじ]を [暗記|あんき]します。}}' },
      { h: 'Strategie di studio', b: '- Impara i kanji **dentro le parole**: 勤 → 出勤, 勤務; 授 → 授業.\n- Raggruppa per tema: 勤・職・務 (lavoro), 科・数・授 (corsi).\n- 暗記 non significa copiare: ripeti ad alta voce e scrivi a mano.\n- Collega i suoni: **ぎょう** in 卒業, 授業, 職業 (tutti con 業, già studiato).\n- Tieni un 日記 breve in giapponese: tre righe al giorno bastano.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[私|わたし]は [大学|だいがく]を [卒業|そつぎょう]して、[会社|かいしゃ]に [勤|つと]めて います。[職場|しょくば]では [事務|じむ]の [仕事|しごと]を して います。}}\n\n→ *Mi sono laureato e lavoro in un’azienda. Sul posto di lavoro faccio lavoro d’ufficio.*\n\nControllo: 卒業 そつぎょう; 勤めて つとめて; 職場 しょくば; 事務 じむ.' },
      { h: 'Errori comuni', b: '- Leggere 勤務 *ごんむ*: è きんむ.\n- 授業 è じゅぎょう (non *しゅぎょう*).\n- Confondere 数 con 教: 数 ha 米 e 女 a sinistra, 教 ha 孝.\n- 留守 si legge るす (lettura speciale), non *りゅうしゅ*.\n- 暗い (くらい) e 暗記 (あんき) condividono 暗, ma la lettura cambia.\n- 欠席 è けっせき, con una pausa (っ) dopo けっ.' },
      { h: 'Riepilogo', b: '- 勤務 きんむ, 職場 しょくば, 事務 じむ, 卒業 そつぎょう.\n- 科学 かがく, 数学 すうがく, 授業 じゅぎょう, 欠席 けっせき.\n- 練習 れんしゅう, 日記 にっき, 暗記 あんき, 留学 りゅうがく.' }
    ],
    exercises: [
      M('Come si legge 卒業?', 'そつぎょう', ['そつぎょ', 'しゅつぎょう', 'おわりぎょう'], 0),
      M('Come si legge 授業?', 'じゅぎょう', ['じゅぎょ', 'しゅぎょう', 'さずぎょう'], 2),
      M('Che cosa significa 欠席?', 'assenza', ['presenza', 'sedia', 'ritardo'], 1),
      M('Come si legge 数学?', 'すうがく', ['かずがく', 'すがく', 'すうかく'], 3),
      M('Come si legge 練習?', 'れんしゅう', ['ねりしゅう', 'れんしゅ', 'れんじゅう'], 1),
      listen('りゅうがくせいが にっきを かきます。', 'ja', 'Che cosa dice?', ['Lo studente straniero scrive un diario', 'Lo studente legge un articolo', 'Il professore è assente', 'Lo studente fa matematica'], 0),
      order('Metti in ordine: «Lavoro in un’azienda»', ['かいしゃに', 'つとめて', 'います'], 'Luogo + に + つとめて います.'),
      fillJ('Come si legge 日記?', ['にっき'], 'にっき (con っ).')
    ],
    test: [
      M('Come si legge 職場?', 'しょくば', ['しょくじょう', 'しきば', 'しょくにわ'], 2),
      M('Che cosa significa 留学?', 'studiare all’estero', ['imparare a memoria', 'lasciare la scuola', 'prendere appunti'], 1),
      M('Come si legge 暗い?', 'くらい', ['あかるい', 'あんい', 'ぐらい'], 0),
      M('Quale parola indica «laurearsi»?', '卒業', ['授業', '勤務', '科学'], 3)
    ],
    cards: [card('c1', 'lavorare presso, servizio', '[勤務|きんむ]', '', 'きんむ'), card('c2', 'posto di lavoro', '[職場|しょくば]', '', 'しょくば'), card('c3', 'lavoro d’ufficio', '[事務|じむ]', '', 'じむ'), card('c4', 'diploma, laurea', '[卒業|そつぎょう]', '', 'そつぎょう'),
      card('c5', 'scienza', '[科学|かがく]', '', 'かがく'), card('c6', 'matematica', '[数学|すうがく]', '', 'すうがく'), card('c7', 'lezione', '[授業|じゅぎょう]', '', 'じゅぎょう'), card('c8', 'assenza', '[欠席|けっせき]', '', 'けっせき'),
      card('c9', 'esercizio', '[練習|れんしゅう]', '', 'れんしゅう'), card('c10', 'diario', '[日記|にっき]', '', 'にっき'), card('c11', 'buio', '[暗|くら]い', '', 'くらい'), card('c12', 'studio all’estero', '[留学|りゅうがく]', '', 'りゅうがく')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Dopo la laurea', text: 'わたしは だいがくを そつぎょうして、かいしゃに つとめて います。しょくばでは じむの しごとを して います。まいにち にっきを かいて、れんしゅうします。',
      qs: [{ q: 'Che cosa ha fatto prima?', o: ['Si è laureato', 'Ha studiato all’estero', 'Ha cambiato lavoro', 'Ha fatto un viaggio'], a: 0, kind: 'explicit' }, { q: 'Che lavoro fa?', o: ['Insegna matematica', 'Lavoro d’ufficio', 'Fa il medico', 'Cucina'], a: 1, kind: 'explicit' }, { q: 'Che cosa fa ogni giorno?', o: ['Va in palestra', 'Guarda la TV', 'Scrive un diario', 'Impara a memoria'], a: 2, kind: 'explicit' }] }],
    dictation: [{ text: 'かいしゃに つとめて います', lang: 'ja' }, { text: 'じゅぎょうを けっせきしました', lang: 'ja' }, { text: 'まいにち にっきを かきます', lang: 'ja' }],
    shadowing: [{ text: 'そつぎょうしました。', lang: 'ja', tip: 'そつぎょう: so・tsu・gyo・o.' }, { text: 'じゅぎょうに でます。', lang: 'ja', tip: 'じゅぎょう: ju・gyo・o.' }, { text: 'りゅうがくを したいです。', lang: 'ja', tip: 'りゅうがく: ryu・u・ga・ku.' }],
    speaking: [{ prompt: 'Presentati: dove lavori o che cosa studi.', model: 'わたしは かいしゃに つとめて います。しごとは じむです。' }, { prompt: 'Racconta come ti eserciti nello studio.', model: 'まいにち にっきを かいて、かんじを れんしゅうします。' }],
    reading: [{ id: 'r1', title: 'Una presentazione', text: '[私|わたし]は [大学|だいがく]を [卒業|そつぎょう]して、[会社|かいしゃ]に [勤|つと]めて います。[職場|しょくば]では [事務|じむ]の [仕事|しごと]を して います。[毎日|まいにち] [日記|にっき]を [書|か]いて、[漢字|かんじ]を [練習|れんしゅう]します。[来年|らいねん]は [留学|りゅうがく]したいです。',
      qs: [{ q: 'Dove lavora?', o: ['In ospedale', 'In una scuola', 'In un’azienda', 'In un negozio'], a: 2 }, { q: 'Che lavoro fa?', o: ['Lavoro d’ufficio', 'Insegna', 'Guida il treno', 'Programma computer'], a: 0 }, { q: 'Che cosa vuole fare l’anno prossimo?', o: ['Cambiare casa', 'Studiare all’estero', 'Laurearsi', 'Fare un viaggio'], a: 1 }] }] });

  /* ---------------------------------------------------------------- J3 */
  T({ id: 'jpn-j3-kanji-c2', stage: 'J3', prereq: ['jpn-j3-kanji-3b'], title: 'Kanji c2: società, regole e pace', summary: '12 kanji N3: 法 律 守 保 共 参 加 団 組 平 戦 争.',
    objectives: ['Leggere 12 kanji N3 legati a società, leggi e collettività', 'Capire parole come 法律, 参加, 団体, 平和', 'Leggere un breve testo di cronaca sociale'],
    pages: [
      { h: 'Obiettivo', b: 'Nei giornali e nei notiziari si parla di leggi, associazioni, eventi comuni e pace. Questi dodici kanji ti aprono la **lingua della società**. Li studi in quattro gruppi.' },
      { h: 'Leggi e regole', b: '- **法** (ほう; ぽう, ぱ): {{ja|[法律|ほうりつ]}} legge, {{ja|[方法|ほうほう]}} metodo, {{ja|[文法|ぶんぽう]}} grammatica\n- **律** (りつ): {{ja|[法律|ほうりつ]}}; da solo si incontra poco\n- **守** (しゅ; まもる): {{ja|[約束|やくそく]を [守|まも]ります。}} mantenere la promessa; {{ja|[留守|るす]}}\n- **保** (ほ; たもつ): {{ja|[保|たも]つ}} mantenere, conservare; nei composti {{ja|[保育園|ほいくえん]}} asilo nido\n\nFrase: {{ja|[法律|ほうりつ]を [守|まも]らなければ なりません。}}' },
      { h: 'Partecipare e fare gruppo', b: '- **共** (きょう; とも): {{ja|[共通|きょうつう]}} comune, {{ja|[共同|きょうどう]}} collaborazione\n- **参** (さん; まいる): {{ja|[参加|さんか]}} partecipazione, {{ja|[参考|さんこう]}} riferimento\n- **加** (か; くわえる): {{ja|[加|くわ]えます。}} aggiungere, {{ja|[参加|さんか]}}\n- **団** (だん; とん): {{ja|[団体|だんたい]}} gruppo, organizzazione, {{ja|[布団|ふとん]}} futon\n- **組** (そ; くむ; くみ): {{ja|[組|く]みます。}} unire, {{ja|[番組|ばんぐみ]}} programma TV, {{ja|[組|くみ]}} classe, squadra\n\nFrase: {{ja|[会議|かいぎ]に [参加|さんか]します。}}' },
      { h: 'Pace e conflitto', b: '- **平** (へい; びょう; たいら; ひら): {{ja|[平和|へいわ]}} pace, {{ja|[平日|へいじつ]}} giorno feriale, {{ja|[平気|へいき]}} tranquillo, non importa\n- **戦** (せん; たたかう): {{ja|[戦争|せんそう]}} guerra, {{ja|[戦|たたか]います。}} combattere\n- **争** (そう; あらそう): {{ja|[戦争|せんそう]}}, {{ja|[争|あらそ]います。}} contendere\n\nFrase: {{ja|[平和|へいわ]な [世界|せかい]を [願|ねが]います。}}' },
      { h: 'Strategie', b: '- Leggi **ほう** in 法律, 方法, 文法: dopo っ・ん diventa **ぽう** (ぶんぽう).\n- 参加 e 加える condividono 加: pensa a «aggiungersi al gruppo».\n- 戦争 sono due kanji molto simili nel senso: 戦 «battaglia», 争 «contesa».\n- Cerca 団体 e 番組 nelle notizie: ricorrono ogni giorno.\n- Ricorda 平 come «piano»: 平日 giorno piano = feriale.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[町|まち]の [団体|だんたい]が [平和|へいわ]の [会|かい]に [参加|さんか]しました。[法律|ほうりつ]を [守|まも]って、[方法|ほうほう]を [考|かんが]えます。}}\n\n→ *Un’associazione della città ha partecipato a un incontro per la pace. Rispettando la legge, pensiamo ai metodi.*\n\nControllo: 団体 だんたい; 平和 へいわ; 参加 さんか; 法律 ほうりつ; 守って まもって; 方法 ほうほう.' },
      { h: 'Errori comuni', b: '- 戦争 è せんそう, non *せんそ*: la そう è lunga.\n- Confondere 参 (さん) con 三 nei composti: 参加 è さんか, non *さんんか*.\n- 文法 si legge ぶんぽう (ぽ), non *ぶんほう*.\n- 布団 è ふとん: eccezione di lettura (団 → とん).\n- 守る (まもる) è diverso da 守 in 留守 (る・す).\n- Confondere 平 con 午: 平 ha il tratto centrale più alto.' },
      { h: 'Riepilogo', b: '- 法律 ほうりつ, 方法 ほうほう, 守る まもる, 保つ たもつ.\n- 共通 きょうつう, 参加 さんか, 加える くわえる, 団体 だんたい, 番組 ばんぐみ.\n- 平和 へいわ, 平日 へいじつ, 戦争 せんそう, 戦う たたかう, 争う あらそう.' }
    ],
    exercises: [
      M('Come si legge 法律?', 'ほうりつ', ['ほうりち', 'はつりつ', 'ほうれつ'], 0),
      M('Come si legge 参加?', 'さんか', ['まいか', 'さんが', 'さんかい'], 2),
      M('Che cosa significa 平和?', 'pace', ['guerra', 'giorno feriale', 'uguaglianza'], 1),
      M('Come si legge 約束を 守る?', 'まもる', ['もる', 'まもうる', 'まぼる'], 3),
      M('Come si legge 団体?', 'だんたい', ['だんだい', 'とんたい', 'だんてい'], 1),
      listen('へいわの かいに さんかします。', 'ja', 'Che cosa dice?', ['Partecipa a un incontro per la pace', 'Dichiara guerra', 'Legge una legge', 'Organizza una festa'], 0),
      order('Metti in ordine: «Rispetto la legge»', ['ほうりつを', 'まもります'], 'Oggetto + を + verbo.'),
      fillJ('Come si legge 戦争?', ['せんそう'], 'せんそう.')
    ],
    test: [
      M('Come si legge 方法?', 'ほうほう', ['かたほう', 'ほうぼう', 'ほほう'], 2),
      M('Che cosa significa 平日?', 'giorno feriale', ['giorno di pace', 'weekend', 'giorno di festa'], 0),
      M('Come si legge 番組?', 'ばんぐみ', ['ばんそ', 'ばんくみ', 'ばんしみ'], 1),
      M('«Partecipare alla riunione»:', 'かいぎに さんかします', ['かいぎを さんかします', 'かいぎで せんそうします', 'かいぎに へいわします'], 3)
    ],
    cards: [card('c1', 'legge', '[法律|ほうりつ]', '', 'ほうりつ'), card('c2', 'metodo', '[方法|ほうほう]', '', 'ほうほう'), card('c3', 'grammatica', '[文法|ぶんぽう]', '', 'ぶんぽう'), card('c4', 'rispettare, proteggere', '[守|まも]る', '', 'まもる'),
      card('c5', 'comune, condiviso', '[共通|きょうつう]', '', 'きょうつう'), card('c6', 'partecipazione', '[参加|さんか]', '', 'さんか'), card('c7', 'aggiungere', '[加|くわ]える', '', 'くわえる'), card('c8', 'gruppo, organizzazione', '[団体|だんたい]', '', 'だんたい'),
      card('c9', 'programma TV', '[番組|ばんぐみ]', '', 'ばんぐみ'), card('c10', 'pace', '[平和|へいわ]', '', 'へいわ'), card('c11', 'guerra', '[戦争|せんそう]', '', 'せんそう'), card('c12', 'giorno feriale', '[平日|へいじつ]', '', 'へいじつ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una notizia', text: 'まちの だんたいが へいわの かいに さんかしました。ほうりつを まもって、みんなで ほうほうを かんがえます。あしたの ばんぐみで ほうそうします。',
      qs: [{ q: 'Chi ha partecipato?', o: ['Un gruppo della città', 'Il governo', 'Una scuola', 'Una famiglia'], a: 0, kind: 'explicit' }, { q: 'A che tipo di incontro?', o: ['Per lo sport', 'Per la pace', 'Per un matrimonio', 'Per il lavoro'], a: 1, kind: 'explicit' }, { q: 'Quando sarà trasmesso?', o: ['Oggi', 'Ieri', 'Domani', 'Stasera tardi'], a: 2, kind: 'explicit' }] }],
    dictation: [{ text: 'ほうりつを まもります', lang: 'ja' }, { text: 'へいわの かいに さんかします', lang: 'ja' }, { text: 'だんたいで かんがえます', lang: 'ja' }],
    shadowing: [{ text: 'ほうりつを まもります。', lang: 'ja', tip: 'ほうりつ: ho・o・ri・tsu.' }, { text: 'さんかしたいです。', lang: 'ja', tip: 'さんか: san・ka.' }, { text: 'へいわを ねがいます。', lang: 'ja', tip: 'へいわ: he・i・wa.' }],
    speaking: [{ prompt: 'Di’ che vuoi partecipare a un evento della città.', model: 'まちの かいに さんかしたいです。みんなで かんがえたいです。' }, { prompt: 'Esprimi un desiderio per il mondo.', model: 'せかいが へいわに なって ほしいです。せんそうは きらいです。' }],
    reading: [{ id: 'r1', title: 'Un incontro per la pace', text: '[町|まち]の [団体|だんたい]が [平和|へいわ]の [会|かい]に [参加|さんか]しました。[法律|ほうりつ]を [守|まも]って、[方法|ほうほう]を [考|かんが]えます。[戦争|せんそう]は いけません。[平日|へいじつ]の [夜|よる]に [番組|ばんぐみ]で [話|はな]します。',
      qs: [{ q: 'Chi ha partecipato?', o: ['Un’associazione della città', 'Una scuola', 'Un’azienda', 'Una famiglia'], a: 0 }, { q: 'Che cosa dice della guerra?', o: ['È utile', 'Non va bene', 'È necessaria', 'Non ne parla'], a: 1 }, { q: 'Quando ne parlano in TV?', o: ['Nel fine settimana', 'Un giorno feriale sera', 'Di mattina', 'A mezzogiorno'], a: 1 }] }] });

  /* ---------------------------------------------------------------- J4 */
  T({ id: 'jpn-j4-kanji-c3', stage: 'J4', prereq: ['jpn-j4-kanji-4b'], title: 'Kanji c3: sentimenti, valori e capacità', summary: '12 kanji N3: 愛 悲 幸 美 正 実 特 能 可 解 想 原.',
    objectives: ['Leggere 12 kanji N3 per sentimenti, valori e concetti astratti', 'Capire parole come 幸せ, 美しい, 可能, 理解, 想像', 'Usare questi kanji in brevi opinioni'],
    pages: [
      { h: 'Obiettivo', b: 'Per esprimere **opinioni e sentimenti** servono parole astratte. Questi kanji N3 compaiono in articoli, canzoni e conversazioni più mature. Tre gruppi: sentimenti, valori, capacità e pensiero.' },
      { h: 'Sentimenti', b: '- **愛** (あい): {{ja|[愛|あい]}} amore, {{ja|[愛|あい]する}} amare, {{ja|[愛情|あいじょう]}} affetto\n- **悲** (ひ; かなしい): {{ja|[悲|かな]しい}} triste, {{ja|[悲|かな]しみ}} tristezza\n- **幸** (こう; しあわせ; さいわい): {{ja|[幸|しあわ]せ}} felicità, {{ja|[不幸|ふこう]}} sfortuna\n- **美** (び; うつくしい): {{ja|[美|うつく]しい}} bello, {{ja|[美術|びじゅつ]}} arte, {{ja|[美人|びじん]}} bella persona\n\nFrase: {{ja|[家族|かぞく]と いっしょに [幸|しあわ]せです。}}' },
      { h: 'Verità e valori', b: '- **正** (せい; しょう; ただしい): {{ja|[正|ただ]しい}} corretto, {{ja|[正月|しょうがつ]}} Capodanno, {{ja|[正直|しょうじき]}} onesto\n- **実** (じつ; み): {{ja|[実|じつ]は}} in realtà, {{ja|[現実|げんじつ]}} realtà, {{ja|[事実|じじつ]}} fatto\n- **特** (とく): {{ja|[特|とく]に}} in particolare, {{ja|[特別|とくべつ]}} speciale\n\nFrase: {{ja|[実|じつ]は [特別|とくべつ]な [話|はなし]が あります。}}' },
      { h: 'Capacità e pensiero', b: '- **能** (のう): {{ja|[能力|のうりょく]}} capacità, {{ja|[才能|さいのう]}} talento\n- **可** (か): {{ja|[可能|かのう]}} possibile, {{ja|[不可能|ふかのう]}} impossibile\n- **解** (かい; げ; とく): {{ja|[理解|りかい]}} comprensione, {{ja|[解|と]く}} risolvere, {{ja|[解決|かいけつ]}} soluzione\n- **想** (そう): {{ja|[想像|そうぞう]}} immaginazione, {{ja|[予想|よそう]}} previsione\n- **原** (げん; はら): {{ja|[原因|げんいん]}} causa, {{ja|[原料|げんりょう]}} materia prima, {{ja|[原|はら]}} prato\n\nFrase: {{ja|[問題|もんだい]の [原因|げんいん]を [理解|りかい]します。}}' },
      { h: 'Strategie', b: '- Associa ogni kanji a **una parola base**: 愛 → 愛情; 美 → 美しい; 解 → 理解.\n- Impara le coppie opposte: 幸 vs 不幸, 可能 vs 不可能, 正しい vs 正しくない.\n- 実 si legge じつ in 実は, **じっ** in 実際 (じっさい).\n- Usa le parole in frasi d’opinione: 私は〜が可能だと思います.\n- Ripeti le letture lunghe con ritmo: り・か・い, げ・ん・い・ん.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[特|とく]に [美|うつく]しい [絵|え]を [見|み]て、[幸|しあわ]せに なりました。[実|じつ]は [美術|びじゅつ]の [勉強|べんきょう]が [好|す]きです。}}\n\n→ *Guardando un quadro particolarmente bello, mi sono sentito felice. In realtà mi piace studiare arte.*\n\nControllo: 特に とくに; 美しい うつくしい; 幸せ しあわせ; 実は じつは; 美術 びじゅつ.' },
      { h: 'Errori comuni', b: '- Leggere 幸せ *こうせ*: è しあわせ (lettura speciale).\n- 正月 è しょうがつ, non *せいげつ*.\n- Confondere 悲 (かなしい) con 非 (note: 非常 già studiato): 悲 ha 心 sotto.\n- 可能 è かのう, non *かのお* né *かのうう*.\n- 想像 è そうぞう (そう lungo).' },
      { h: 'Riepilogo', b: '- 愛 あい, 悲しい かなしい, 幸せ しあわせ, 美しい うつくしい.\n- 正しい ただしい, 実は じつは, 特に とくに.\n- 能力 のうりょく, 可能 かのう, 理解 りかい, 想像 そうぞう, 原因 げんいん.' }
    ],
    exercises: [
      M('Come si legge 幸せ?', 'しあわせ', ['こうせ', 'さいわせ', 'しあせ'], 1),
      M('Come si legge 美しい?', 'うつくしい', ['びしい', 'うつぐしい', 'みしい'], 0),
      M('Che cosa significa 悲しい?', 'triste', ['felice', 'bello', 'difficile'], 2),
      M('Come si legge 可能?', 'かのう', ['かのお', 'かのく', 'こうのう'], 3),
      M('Come si legge 理解?', 'りかい', ['りげ', 'りかえ', 'りがい'], 0),
      listen('じつは とくべつな はなしが あります。', 'ja', 'Che cosa dice?', ['Ha una cosa particolare da dire', 'È triste', 'Vuole mangiare', 'Non capisce'], 0),
      order('Metti in ordine: «È una persona onesta»', ['しょうじきな', 'ひとです'], 'Aggettivo + な + sostantivo.'),
      fillJ('Come si legge 原因?', ['げんいん'], 'げんいん.')
    ],
    test: [
      M('Come si legge 想像?', 'そうぞう', ['おもいぞう', 'そうじょう', 'そぞう'], 1),
      M('Che cosa significa 能力?', 'capacità', ['felicità', 'verità', 'amore'], 2),
      M('Come si legge 正月?', 'しょうがつ', ['せいがつ', 'ただしづき', 'しょうげつ'], 0),
      M('Come si dice «È impossibile»?', 'ふかのうです', ['ふじつです', 'ふへいです', 'ふげんです'], 3)
    ],
    cards: [card('c1', 'amore, affetto', '[愛情|あいじょう]', '', 'あいじょう'), card('c2', 'triste', '[悲|かな]しい', '', 'かなしい'), card('c3', 'felicità', '[幸|しあわ]せ', '', 'しあわせ'), card('c4', 'bello', '[美|うつく]しい', '', 'うつくしい'),
      card('c5', 'corretto', '[正|ただ]しい', '', 'ただしい'), card('c6', 'in realtà', '[実|じつ]は', '', 'じつは'), card('c7', 'in particolare', '[特|とく]に', '', 'とくに'), card('c8', 'capacità', '[能力|のうりょく]', '', 'のうりょく'),
      card('c9', 'possibile', '[可能|かのう]', '', 'かのう'), card('c10', 'comprensione', '[理解|りかい]', '', 'りかい'), card('c11', 'immaginazione', '[想像|そうぞう]', '', 'そうぞう'), card('c12', 'causa', '[原因|げんいん]', '', 'げんいん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un’opinione', text: 'じつは びじゅつの べんきょうが すきです。うつくしい えを みて、しあわせに なりました。のうりょくは まだ ないですが、れんしゅうします。',
      qs: [{ q: 'Che cosa gli piace studiare?', o: ['La musica', 'L’arte', 'La scienza', 'La storia'], a: 1, kind: 'explicit' }, { q: 'Come si è sentito guardando un quadro?', o: ['Triste', 'Arrabbiato', 'Felice', 'Stanco'], a: 2, kind: 'explicit' }, { q: 'Che cosa farà?', o: ['Si eserciterà', 'Smetterà', 'Viaggerà', 'Venderà quadri'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'じつは しあわせです', lang: 'ja' }, { text: 'うつくしい えを みます', lang: 'ja' }, { text: 'げんいんを りかいします', lang: 'ja' }],
    shadowing: [{ text: 'しあわせです。', lang: 'ja', tip: 'しあわせ: shi・a・wa・se.' }, { text: 'うつくしい はなです。', lang: 'ja', tip: 'うつくしい: u・tsu・ku・shi・i.' }, { text: 'のうりょくが あります。', lang: 'ja', tip: 'のうりょく: no・o・ryo・ku.' }],
    speaking: [{ prompt: 'Di’ che cosa ti rende felice.', model: 'かぞくと いっしょに いる とき、しあわせです。' }, { prompt: 'Esprimi un’opinione su un problema.', model: 'げんいんを りかいすれば、かいけつは かのうだと おもいます。' }],
    reading: [{ id: 'r1', title: 'Pensieri su un quadro', text: '[特|とく]に [美|うつく]しい [絵|え]を [見|み]て、[幸|しあわ]せに なりました。[実|じつ]は [美術|びじゅつ]の [勉強|べんきょう]が [好|す]きです。[能力|のうりょく]は まだ ありませんが、[想像|そうぞう]する [力|ちから]は [大切|たいせつ]だと [思|おも]います。',
      qs: [{ q: 'Come si è sentito guardando il quadro?', o: ['Triste', 'Felice', 'Arrabbiato', 'Annoiato'], a: 1 }, { q: 'Che cosa gli piace in realtà?', o: ['Lo sport', 'La musica', 'Studiare arte', 'Cucinare'], a: 2 }, { q: 'Che cosa ritiene importante?', o: ['Il denaro', 'La forza di immaginare', 'La velocità', 'Il talento già acquisito'], a: 1 }] }] });

  /* ---------------------------------------------------------------- J5 */
  T({ id: 'jpn-j5-kanji-c4', stage: 'J5', prereq: ['jpn-j5-kanji-5b'], title: 'Kanji c4: tempo, quantità e azioni', summary: '12 kanji N4/N3: 初 最 末 以 久 取 使 始 集 受 貸 借.',
    objectives: ['Leggere 12 kanji per tempo, limiti e azioni comuni', 'Capire parole come 最初, 週末, 以上, 受付, 貸す, 借りる', 'Usare i verbi di scambio (貸す / 借りる, 受ける / 取る)'],
    pages: [
      { h: 'Obiettivo', b: 'Questi dodici kanji servono per **ordinare il tempo** (inizio, fine, limiti) e per i **verbi di azione** di ogni giorno: prendere, usare, iniziare, raccogliere, ricevere, prestare. Due gruppi.' },
      { h: 'Tempo e limiti', b: '- **初** (しょ; はじめ, はじめて, はつ): {{ja|[初|はじ]めて}} per la prima volta, {{ja|[最初|さいしょ]}} il primo, {{ja|[初|はつ]こい}} primo amore\n- **最** (さい; もっとも): {{ja|[最近|さいきん]}} di recente, {{ja|[最後|さいご]}} alla fine, {{ja|[最|もっと]も}} il più\n- **末** (まつ; すえ): {{ja|[週末|しゅうまつ]}} fine settimana, {{ja|[月末|げつまつ]}} fine mese, {{ja|[年末|ねんまつ]}} fine anno\n- **以** (い): {{ja|[以上|いじょう]}} più di / sopra, {{ja|[以下|いか]}} meno di, {{ja|[以前|いぜん]}} prima, {{ja|[以外|いがい]}} eccetto\n- **久** (きゅう; く; ひさしい): {{ja|[久|ひさ]しぶり}} dopo tanto tempo\n\nFrase: {{ja|[最近|さいきん]、[週末|しゅうまつ]は [忙|いそが]しいです。}}' },
      { h: 'Azioni quotidiane', b: '- **取** (しゅ; とる): {{ja|[取|と]ります。}} prendere, {{ja|[受|う]け[取|と]ります。}} ricevere\n- **使** (し; つかう): {{ja|[使|つか]います。}} usare, {{ja|[使|つか]い[方|かた]}} modo d’uso\n- **始** (し; はじめる, はじまる): {{ja|[始|はじ]めます。}} iniziare, {{ja|[始|はじ]まります。}} iniziare (intr.), {{ja|[開始|かいし]}} inizio\n- **集** (しゅう; あつまる, あつめる): {{ja|[集|あつ]まります。}} radunarsi, {{ja|[集|あつ]めます。}} raccogliere, {{ja|[集合|しゅうごう]}} ritrovo\n- **受** (じゅ; うける): {{ja|[受|う]けます。}} ricevere, sostenere, {{ja|[受付|うけつけ]}} accettazione\n- **貸** (たい; かす): {{ja|[貸|か]します。}} prestare, affittare\n- **借** (しゃく; かりる): {{ja|[借|か]ります。}} prendere in prestito\n\nFrase: {{ja|[友達|ともだち]に [本|ほん]を [貸|か]して、[彼|かれ]から [辞書|じしょ]を [借|か]りました。}}' },
      { h: 'Strategie', b: '- Impara **coppie**: 貸す (do in prestito) / 借りる (prendo in prestito); 始める / 始まる; 集める / 集まる.\n- 以 delimita un punto di riferimento: 以上 (sopra incluso), 以下 (sotto incluso), 以内 (entro).\n- 週末, 月末, 年末: **末** = «fine», sempre letto まつ (しゅうまつ).\n- Ricorda 受付 (うけつけ) dai cartelli di uffici e ospedali.\n- Metti つかいかた dopo qualsiasi oggetto nuovo: «come si usa».' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[最近|さいきん]、[友達|ともだち]に [本|ほん]を [貸|か]して、[私|わたし]は [辞書|じしょ]を [借|か]りました。[週末|しゅうまつ]に [集|あつ]まって、[新|あたら]しい [勉強|べんきょう]を [始|はじ]めます。}}\n\n→ *Di recente ho prestato un libro a un amico e ho preso in prestito un dizionario. Nel fine settimana ci ritroviamo e iniziamo un nuovo studio.*' },
      { h: 'Errori comuni', b: '- Scambiare 貸す e 借りる: il verbo con 貸 è sempre «io do».\n- 久しぶり è ひさしぶり, non *きゅうしぶり*.\n- Leggere 最近 *さいちか*: è さいきん.\n- 以外 è いがい (non *いそと*).\n- 始まる e 始める hanno la stessa radice: usa に・を con il giusto transitivo.\n- 受 ha 又 sotto; 愛 e 受 sono simili: attenzione.' },
      { h: 'Riepilogo', b: '- 初めて はじめて, 最初 さいしょ, 最近 さいきん, 週末 しゅうまつ, 以上 いじょう, 久しぶり ひさしぶり.\n- 取る とる, 使う つかう, 始める はじめる, 集まる あつまる, 受ける うける.\n- 貸す かす / 借りる かりる.' }
    ],
    exercises: [
      M('Come si legge 最近?', 'さいきん', ['さいちか', 'もっとも', 'さいこん'], 2),
      M('Come si legge 週末?', 'しゅうまつ', ['しゅうまつり', 'しゅうすえ', 'しゅうべつ'], 1),
      M('Che cosa significa 貸す?', 'prestare', ['prendere in prestito', 'comprare', 'restituire'], 0),
      M('Come si legge 集まる?', 'あつまる', ['しゅうまる', 'あつめる', 'つどまる'], 3),
      M('Come si legge 久しぶり?', 'ひさしぶり', ['きゅうしぶり', 'くしぶり', 'ひさぶり'], 1),
      listen('ともだちに ほんを かして、じしょを かりました。', 'ja', 'Che cosa dice?', ['Ha prestato un libro e preso in prestito un dizionario', 'Ha comprato due libri', 'Ha restituito il dizionario', 'Ha perso il libro'], 0),
      order('Metti in ordine: «Uso un dizionario»', ['じしょを', 'つかいます'], 'Oggetto + を + verbo.'),
      fillJ('Come si legge 借りる?', ['かりる'], 'かりる.')
    ],
    test: [
      M('Come si legge 初めて?', 'はじめて', ['ういめて', 'しょめて', 'はつめて'], 2),
      M('Che cosa significa 以上?', 'più di / sopra', ['meno di', 'prima', 'eccetto'], 0),
      M('Come si legge 受付?', 'うけつけ', ['じゅふ', 'うけふ', 'うけつき'], 0),
      M('Quale verbo vuol dire «prendere in prestito»?', '借りる', ['貸す', '取る', '使う'], 3)
    ],
    cards: [card('c1', 'per la prima volta', '[初|はじ]めて', '', 'はじめて'), card('c2', 'il primo, all’inizio', '[最初|さいしょ]', '', 'さいしょ'), card('c3', 'di recente', '[最近|さいきん]', '', 'さいきん'), card('c4', 'fine settimana', '[週末|しゅうまつ]', '', 'しゅうまつ'),
      card('c5', 'più di, sopra', '[以上|いじょう]', '', 'いじょう'), card('c6', 'dopo tanto tempo', '[久|ひさ]しぶり', '', 'ひさしぶり'), card('c7', 'prendere', '[取|と]る', '', 'とる'), card('c8', 'usare', '[使|つか]う', '', 'つかう'),
      card('c9', 'iniziare (tr.)', '[始|はじ]める', '', 'はじめる'), card('c10', 'radunarsi', '[集|あつ]まる', '', 'あつまる'), card('c11', 'ricevere, accettazione', '[受付|うけつけ]', '', 'うけつけ'), card('c12', 'prestare', '[貸|か]す', '', 'かす'), card('c13', 'prendere in prestito', '[借|か]りる', '', 'かりる')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Nel fine settimana', text: 'さいきん ともだちに ほんを かして、わたしは じしょを かりました。しゅうまつに あつまって、あたらしい べんきょうを はじめます。ひさしぶりに あいます。',
      qs: [{ q: 'Che cosa ha preso in prestito?', o: ['Un libro', 'Un ombrello', 'Un dizionario', 'Un computer'], a: 2, kind: 'explicit' }, { q: 'Quando si ritrovano?', o: ['Nel fine settimana', 'Domani mattina', 'A fine mese', 'Ogni sera'], a: 0, kind: 'explicit' }, { q: 'Che cosa inizieranno?', o: ['Un lavoro', 'Un viaggio', 'Una gara', 'Un nuovo studio'], a: 3, kind: 'explicit' }] }],
    dictation: [{ text: 'しゅうまつに あつまります', lang: 'ja' }, { text: 'ほんを かして ください', lang: 'ja' }, { text: 'じしょを つかいます', lang: 'ja' }],
    shadowing: [{ text: 'しゅうまつに あつまります。', lang: 'ja', tip: 'しゅうまつ: shu・u・ma・tsu.' }, { text: 'ほんを かりました。', lang: 'ja', tip: 'かりました: ka・ri・ma・shi・ta.' }, { text: 'さいきん いそがしいです。', lang: 'ja', tip: 'さいきん: sa・i・ki・n.' }],
    speaking: [{ prompt: 'Chiedi a un amico di prestarti qualcosa.', model: 'じしょを かして もらえますか。あした かえします。' }, { prompt: 'Racconta che cosa fai nel fine settimana.', model: 'しゅうまつに ともだちと あつまって、べんきょうを はじめます。' }],
    reading: [{ id: 'r1', title: 'Libri e amici', text: '[最近|さいきん]、[友達|ともだち]に [本|ほん]を [貸|か]して、[私|わたし]は [辞書|じしょ]を [借|か]りました。[週末|しゅうまつ]に [集|あつ]まって、[新|あたら]しい [勉強|べんきょう]を [始|はじ]めます。[久|ひさ]しぶりに [会|あ]うので、[楽|たの]しみです。',
      qs: [{ q: 'Che cosa ha prestato all’amico?', o: ['Un dizionario', 'Un libro', 'Una penna', 'Un biglietto'], a: 1 }, { q: 'Quando si ritrovano?', o: ['Nel fine settimana', 'A fine mese', 'Ieri', 'A fine anno'], a: 0 }, { q: 'Perché è contento?', o: ['Ha vinto', 'Vede l’amico dopo tanto tempo', 'Ha finito il lavoro', 'Ha comprato un libro'], a: 1 }] }] });
})(window.ST = window.ST || {});
