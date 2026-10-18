/* Giapponese — ampliamento stage J0 (suoni e sopravvivenza). */
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
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J0', minutes: 20, prereq: ['jpn-j0-sounds'] }, o));

  T({ id: 'jpn-j0-numbers-time', title: 'Numeri, ora, date e prezzi', summary: 'Contare, dire l’ora, i giorni, i mesi e i prezzi.',
    objectives: ['Leggere e dire i numeri fino a 10.000', 'Dire l’ora, i giorni della settimana, i mesi e le date', 'Chiedere e dire un prezzo'],
    pages: [
      { h: 'Obiettivo', b: 'Numeri, ora, date e prezzi servono in ogni situazione pratica: treni, negozi, appuntamenti. In giapponese molti numeri **cambiano suono** quando si combinano: la regola si impara con la pratica.' },
      { h: 'Numeri da 0 a 100', b: '0 {{ja|れい}}/{{ja|ゼロ}} · 1 {{ja|いち}} · 2 {{ja|に}} · 3 {{ja|さん}} · 4 {{ja|よん}}/{{ja|し}} · 5 {{ja|ご}} · 6 {{ja|ろく}} · 7 {{ja|なな}}/{{ja|しち}} · 8 {{ja|はち}} · 9 {{ja|きゅう}}/{{ja|く}} · 10 {{ja|じゅう}}\n\n11 = 10 + 1: {{ja|じゅういち}}; 20 = 2 × 10: {{ja|にじゅう}}; 35 = {{ja|さんじゅうご}}; 100 = {{ja|ひゃく}}.\n\nIl sistema è regolare: **decine + unità**.' },
      { h: 'Centinaia, migliaia, prezzi', b: '- 300 {{ja|さんびゃく}} · 600 {{ja|ろっぴゃく}} · 800 {{ja|はっぴゃく}}\n- 1000 {{ja|せん}} · 3000 {{ja|さんぜん}} · 8000 {{ja|はっせん}}\n- 10000 {{ja|いちまん}}\n\nPrezzo: numero + **えん** (yen): {{ja|ごひゃくえん}}. Domanda: {{ja|これは いくらですか。}} — {{ja|ろっぴゃくえんです。}}' },
      { h: 'L’ora', b: '**～じ** (ore): {{ja|いちじ}}, {{ja|にじ}}, {{ja|さんじ}}, **{{ja|よじ}}** (4), {{ja|ごじ}}, {{ja|ろくじ}}, **{{ja|しちじ}}** (7), {{ja|はちじ}}, **{{ja|くじ}}** (9), {{ja|じゅうじ}}.\n**～ふん/ぷん** (minuti): {{ja|いっぷん}}, {{ja|にふん}}, {{ja|さんぷん}}, {{ja|よんぷん}}, {{ja|ごふん}}, {{ja|ろっぷん}}, {{ja|ななふん}}, {{ja|はっぷん}}, {{ja|きゅうふん}}, {{ja|じゅっぷん}}.\n**{{ja|はん}}** = mezza. **{{ja|ごぜん}}** = mattina (AM), **{{ja|ごご}}** = pomeriggio (PM).\n\n> {{ja|いま ごご さんじ はんです。}}  Domanda: {{ja|いま なんじですか。}}' },
      { h: 'Giorni e mesi', b: '**Giorni della settimana**: {{ja|げつようび}} (lun), {{ja|かようび}}, {{ja|すいようび}}, {{ja|もくようび}}, {{ja|きんようび}}, {{ja|どようび}}, {{ja|にちようび}}. Domanda: {{ja|なんようびですか。}}\n\n**Mesi**: {{ja|いちがつ}}, {{ja|にがつ}}, {{ja|さんがつ}}, {{ja|しがつ}} (4), {{ja|ごがつ}}, {{ja|ろくがつ}}, {{ja|しちがつ}} (7), {{ja|はちがつ}}, {{ja|くがつ}} (9), {{ja|じゅうがつ}}, {{ja|じゅういちがつ}}, {{ja|じゅうにがつ}}.\n\n**Giorni del mese** (1–10): {{ja|ついたち}}, {{ja|ふつか}}, {{ja|みっか}}, {{ja|よっか}}, {{ja|いつか}}, {{ja|むいか}}, {{ja|なのか}}, {{ja|ようか}}, {{ja|ここのか}}, {{ja|とおか}}; poi {{ja|じゅういちにち}}…; il 20: {{ja|はつか}}.' },
      { h: 'Esempio guidato', b: 'Dì: *Il treno parte alle 7:30 di lunedì 4 aprile. Costa 1.800 yen.*\n\n→ {{ja|でんしゃは しがつ よっか、げつようび、ごぜん しちじ さんじゅっぷんに でます。せんはっぴゃくえんです。}}\n\nAttenzione: 30 minuti = {{ja|はん}} o {{ja|さんじゅっぷん}}; 4 aprile = {{ja|しがつ よっか}}; 1800 = {{ja|せん はっぴゃく}}.\n\nControllo: ho usato i suoni irregolari (よじ, しがつ, よっか, はっぴゃく)?' },
      { h: 'Errori comuni', b: '- *よんじ* (4:00) → {{ja|よじ}}.\n- *なながつ* → {{ja|しちがつ}}.\n- *さんひゃく* → {{ja|さんびゃく}}.\n- *ろくぷん* → {{ja|ろっぷん}}.\n- *じゅうふん* → {{ja|じゅっぷん}}.\n- Confondere 4 e 7 con le loro due letture: **よ/よん/し**, **なな/しち**.' },
      { h: 'Riepilogo', b: '- 1–10 e sistema decine+unità; 100, 1000, 10000.\n- Irregolari: さんびゃく, ろっぴゃく, はっぴゃく, さんぜん, はっせん.\n- Ora: ～じ (よじ, しちじ, くじ), ～ふん/ぷん, はん.\n- Giorni e mesi con suoni speciali.' }
    ],
    exercises: [
      mc('Come si legge 300?', ['さんひゃく', 'さんびゃく', 'さんぴゃく', 'みっひゃく'], 1),
      mc('Come si dice 4:00?', ['よんじ', 'よじ', 'しじ', 'よんふん'], 1),
      mc('Come si legge 8000?', ['はちせん', 'はっせん', 'はちぜん', 'ばっせん'], 1),
      listen('ごひゃくえんです。', 'ja', 'Quanto costa?', ['500 yen', '5000 yen', '50 yen', '800 yen'], 0),
      mc('Come si dice «10 minuti»?', ['じゅうふん', 'じゅっぷん', 'じゅうぷん', 'とおふん'], 1),
      mc('Qual è il mese 7?', ['しちがつ', 'ななつき', 'しがつ', 'くがつ'], 0),
      fillJ('Scrivi in kana: 20 (numero)', ['にじゅう'], '2 × 10 = にじゅう.')
    ],
    test: [
      mc('«いま なんじですか。» chiede…', ['Che ora è?', 'Che giorno è?', 'Quanto costa?', 'Dove sei?'], 0),
      mc('Come si dice «lunedì»?', ['げつようび', 'かようび', 'もくようび', 'どようび'], 0),
      listen('ごぜん くじ はんです。', 'ja', 'Che ora è?', ['9:30 del mattino', '9:30 del pomeriggio', '4:30', '7:30'], 0),
      mc('Come si dice «il 4 del mese»?', ['よっか', 'よんにち', 'しにち', 'よんか'], 0)
    ],
    cards: [card('c1', 'quanto costa?', 'いくらですか', '', 'いくらですか'), card('c2', 'che ora è?', 'なんじですか', '', 'なんじですか'), card('c3', 'mezza (ora)', 'はん', '', 'はん'), card('c4', 'mattina (AM)', 'ごぜん', '', 'ごぜん'),
      card('c5', 'pomeriggio (PM)', 'ごご', '', 'ごご'), card('c6', 'yen', 'えん', '', 'えん'), card('c7', 'lunedì', 'げつようび', '', 'げつようび'), card('c8', 'aprile', 'しがつ', '', 'しがつ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'In stazione', text: 'すみません、つぎの でんしゃは なんじですか。ごご さんじ じゅっぷんです。きっぷは いくらですか。せんはっぴゃくえんです。ありがとうございます。きんようびの ごご さんじは こみますか。',
      qs: [{ q: 'A che ora parte il prossimo treno?', o: ['15:10', '13:10', '3:30', '9:10'], a: 0, kind: 'explicit' }, { q: 'Quanto costa il biglietto?', o: ['1800 yen', '800 yen', '18000 yen', '180 yen'], a: 0, kind: 'explicit' }, { q: 'Che cosa chiede alla fine?', o: ['Se venerdì alle 3 è affollato', 'Se c’è sconto', 'Dov’è il binario', 'Il nome del treno'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'いま ごご さんじ はんです', lang: 'ja' }, { text: 'これは ごひゃくえんです', lang: 'ja' }, { text: 'しがつ よっかです', lang: 'ja' }],
    shadowing: [{ text: 'いま ごご さんじ はんです。', lang: 'ja', tip: 'Numeri: una mora per sillaba.' }, { text: 'これは いくらですか。', lang: 'ja', tip: 'か: intonazione ascendente.' }, { text: 'せんはっぴゃくえんです。', lang: 'ja', tip: 'はっぴゃく: っ pausa.' }],
    speaking: [{ prompt: 'Chiedi l’ora e il prezzo di un biglietto.', model: 'すみません、いま なんじですか。きっぷは いくらですか。' }, { prompt: 'Dì la data di oggi e che ora è.', model: 'きょうは じゅうがつ じゅうよっかです。いま ごご ごじです。' }] });

  T({ id: 'jpn-j0-demonstratives', title: 'Dimostrativi: これ, それ, あれ, ここ, そこ', summary: 'Indicare oggetti e luoghi; chiedere cos’è e di chi è.',
    objectives: ['Usare これ/それ/あれ/どれ e この/その/あの/どの', 'Usare ここ/そこ/あそこ/どこ', 'Chiedere «che cos’è?» e «di chi è?»'],
    pages: [
      { h: 'Obiettivo', b: 'I dimostrativi giapponesi si basano sulla **distanza dal parlante e dall’ascoltatore** e seguono la serie **ko-so-a-do**: これ (vicino a me), それ (vicino a te), あれ (lontano da entrambi), どれ (quale?).' },
      { h: 'これ, それ, あれ, どれ', b: 'Sostituiscono un nome:\n- {{ja|これは ほんです。}} — Questo è un libro (vicino a me).\n- {{ja|それは なんですか。}} — Che cos’è quello (vicino a te)?\n- {{ja|あれは えきです。}} — Quella è la stazione (lontana).\n- {{ja|どれが あなたのですか。}} — Qual è il tuo?\n\nNon possono essere seguiti da un nome: per questo c’è la serie con **この**.' },
      { h: 'この, その, あの, どの + nome', b: 'Vanno **prima di un nome**:\n- {{ja|この かばんは わたしのです。}}\n- {{ja|その くるまは だれのですか。}}\n- {{ja|あの ひとは せんせいです。}}\n- {{ja|どの ほんが いいですか。}}\n\nRegola: これ/それ/あれ da sole; この/その/あの **+ nome**.' },
      { h: 'ここ, そこ, あそこ, どこ', b: 'Indicano **luoghi**:\n- {{ja|ここは がっこうです。}}\n- {{ja|そこに ほんが あります。}}\n- {{ja|あそこに えきが あります。}}\n- {{ja|トイレは どこですか。}}\n\nVersione cortese: **こちら/そちら/あちら/どちら** (anche «quale tra due»).' },
      { h: 'Chiedere e rispondere', b: '- {{ja|これは なんですか。}} — Che cos’è?\n- {{ja|これは だれの かばんですか。}} — Di chi è questa borsa?\n- {{ja|わたしのです。}} — È mia.\n- {{ja|[田中|たなか]さんのです。}} — È del signor Tanaka.\n\nLa particella **の** indica possesso: {{ja|わたしの}}, {{ja|[先生|せんせい]の}}. Dopo の il nome può essere omesso: *わたしのです*.' },
      { h: 'Esempio guidato', b: 'Sei in un negozio: *«Quella borsa laggiù: di che colore è? E questa? Quanto costa?»*\n\n→ {{ja|あの かばんは なにいろですか。この かばんは いくらですか。}}\n\nControllo: あの + nome (lontano), この + nome (vicino), いくら per il prezzo.' },
      { h: 'Errori comuni', b: '- *これ ほん* → {{ja|この ほん / これは ほんです。}}\n- *それは だれ ですか* → {{ja|それは だれのですか。}} (di chi è)\n- Confondere **それ** (vicino a chi ascolta) con **あれ** (lontano da entrambi).\n- *ここは どこですか* è «dove siamo?», non «dov’è il bagno?».\n- *トイレは どこ* senza ですか: aggiungi です/か.' },
      { h: 'Riepilogo', b: '- これ/それ/あれ/どれ (da soli); この/その/あの/どの (+ nome).\n- ここ/そこ/あそこ/どこ per i luoghi.\n- なん = che cosa; だれ = chi; だれの = di chi.\n- の = possesso.' }
    ],
    exercises: [
      mc('«Questo è un libro» (vicino a me):', ['これは ほんです。', 'それは ほんです。', 'あれは ほんです。', 'この ほんです。'], 0),
      mc('«Quella persona laggiù è insegnante»:', ['あの ひとは せんせいです。', 'あれ ひとは せんせいです。', 'この ひとは せんせいです。', 'どの ひとは せんせいです。'], 0),
      mc('Come si chiede «Dov’è il bagno?»', ['トイレは どこですか。', 'トイレは なんですか。', 'トイレは だれですか。', 'トイレは いくらですか。'], 0),
      mc('«Di chi è questa borsa?»', ['これは だれの かばんですか。', 'これは なんの かばんですか。', 'これは どこの かばんですか。', 'これは いつの かばんですか。'], 0),
      listen('あそこに えきが あります。', 'ja', 'Dov’è la stazione?', ['Laggiù', 'Qui', 'Vicino a te', 'Non si sa'], 0),
      fillJ('Completa: ___ ほんは わたしのです。(quel, vicino a te)', ['その', 'sono'], 'その + nome.'),
      mc('どれ significa…', ['quale (tra più)', 'dove', 'chi', 'quando'], 0)
    ],
    test: [
      mc('«これ» si usa per…', ['qualcosa vicino a chi parla', 'qualcosa lontano', 'una persona', 'un luogo'], 0),
      mc('Quale frase è corretta?', ['この かばんは わたしのです。', 'これ かばんは わたしのです。', 'この は かばんです。', 'ここ かばん。'], 0),
      listen('それは わたしのです。', 'ja', 'Che cosa significa?', ['Quello è mio', 'Quello è tuo', 'Questo è tuo', 'Dov’è?'], 0),
      mc('«Qual è la tua borsa?»', ['どれが あなたの かばんですか。', 'どこが あなたの かばんですか。', 'だれが あなたの かばんですか。', 'いくらが あなたの かばんですか。'], 0)
    ],
    cards: [card('c1', 'questo', 'これ', '', 'これ'), card('c2', 'quello (vicino a te)', 'それ', '', 'それ'), card('c3', 'quello (lontano)', 'あれ', '', 'あれ'), card('c4', 'quale', 'どれ', '', 'どれ'),
      card('c5', 'qui', 'ここ', '', 'ここ'), card('c6', 'dove', 'どこ', '', 'どこ'), card('c7', 'chi', 'だれ', '', 'だれ'), card('c8', 'borsa', 'かばん', '', 'かばん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'In un negozio', text: 'すみません、これは なんですか。それは かばんです。あの あかい かばんは いくらですか。あれは せんえんです。この かばんは だれのですか。それは わたしのです。トイレは どこですか。あそこです。',
      qs: [{ q: 'Che cos’è l’oggetto vicino?', o: ['Una borsa', 'Un libro', 'Un cappello', 'Una penna'], a: 0, kind: 'explicit' }, { q: 'Quanto costa la borsa rossa?', o: ['1000 yen', '100 yen', '10000 yen', '500 yen'], a: 0, kind: 'explicit' }, { q: 'Dov’è il bagno?', o: ['Laggiù', 'Qui', 'Non c’è', 'Al piano di sopra'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'これは なんですか', lang: 'ja' }, { text: 'あの ひとは だれですか', lang: 'ja' }, { text: 'トイレは どこですか', lang: 'ja' }],
    shadowing: [{ text: 'これは なんですか。', lang: 'ja', tip: 'Intonazione ascendente su か.' }, { text: 'あの かばんは いくらですか。', lang: 'ja', tip: 'あの: breve, stress su かばん.' }, { text: 'トイレは どこですか。', lang: 'ja', tip: 'ト・イ・レ: tre more.' }],
    speaking: [{ prompt: 'Indica tre oggetti attorno a te usando これ/それ/あれ.', model: 'これは ほんです。それは かばんです。あれは えきです。' }, { prompt: 'Chiedi di chi è un oggetto e dove sono i bagni.', model: 'これは だれのですか。すみません、トイレは どこですか。' }] });

  T({ id: 'jpn-j0-family-people', title: 'Famiglia e persone', summary: 'Termini per la propria famiglia e per quella degli altri; contare le persone.',
    objectives: ['Dire e capire i termini familiari', 'Distinguere la propria famiglia da quella altrui', 'Contare le persone'],
    pages: [
      { h: 'Obiettivo', b: 'Parlare della famiglia è uno dei primi argomenti di conversazione. In giapponese si usano **parole diverse** per la propria famiglia (umile) e per quella degli altri (onorifico).' },
      { h: 'La propria famiglia', b: 'Parlando con altri della **tua** famiglia:\n- {{ja|[父|ちち]}} (padre), {{ja|[母|はは]}} (madre)\n- {{ja|[兄|あに]}} (fratello maggiore), {{ja|[姉|あね]}} (sorella maggiore)\n- {{ja|[弟|おとうと]}} (fratello minore), {{ja|[妹|いもうと]}} (sorella minore)\n- {{ja|[両親|りょうしん]}} (genitori), {{ja|[家族|かぞく]}} (famiglia)\n\n> {{ja|[父|ちち]は [会社員|かいしゃいん]です。}}' },
      { h: 'La famiglia degli altri', b: 'Parlando della famiglia **altrui** (rispetto):\n- {{ja|おとうさん}} (padre), {{ja|おかあさん}} (madre)\n- {{ja|おにいさん}}, {{ja|おねえさん}}, {{ja|おとうとさん}}, {{ja|いもうとさん}}\n- {{ja|ごかぞく}} (famiglia), {{ja|ごりょうしん}}\n\nTra familiari si usa anche おとうさん/おかあさん per rivolgersi a loro. Per i nonni: {{ja|おじいさん}}/{{ja|おばあさん}} (di tutti).' },
      { h: 'Contare le persone', b: '1 {{ja|ひとり}}, 2 {{ja|ふたり}}, 3 {{ja|さんにん}}, 4 {{ja|よにん}}, 5 {{ja|ごにん}}, 6 {{ja|ろくにん}}, 7 {{ja|ななにん}}/{{ja|しちにん}}, 8 {{ja|はちにん}}, 9 {{ja|きゅうにん}}, 10 {{ja|じゅうにん}}. Domanda: {{ja|なんにんですか。}}\n\n> {{ja|ごかぞくは なんにんですか。}} — {{ja|ごにんかぞくです。}}' },
      { h: 'Parlare della famiglia', b: 'Strutture utili:\n- {{ja|わたしの かぞくは [四人|よにん]です。}}\n- {{ja|[兄|あに]が ひとり、[妹|いもうと]が ひとり います。}}\n- {{ja|[母|はは]は [先生|せんせい]です。}}\n- {{ja|おとうさんは なにを して いますか。}} — {{ja|[医者|いしゃ]です。}}\n\nLe persone si contano con **います**: {{ja|[兄|あに]が ふたり います。}}' },
      { h: 'Esempio guidato', b: 'Presenta la tua famiglia: *Siamo in quattro: i miei genitori, mia sorella minore e io. Mia madre è insegnante, mio padre è impiegato.*\n\n→ {{ja|[家族|かぞく]は [四人|よにん]です。[両親|りょうしん]と [妹|いもうと]と わたしです。[母|はは]は [先生|せんせい]で、[父|ちち]は [会社員|かいしゃいん]です。}}\n\nControllo: ho usato ちち/はは (miei) e non おとうさん/おかあさん?' },
      { h: 'Errori comuni', b: '- Usare おとうさん per **tuo** padre parlando con altri → {{ja|ちち}}.\n- *ごにん* con 4: {{ja|よにん}} (non よんにん).\n- Dire *わたしの はは* ok, ma {{ja|わたしの ははは}} è ripetitivo: si omette わたしの.\n- Confondere あに/あね con おにいさん/おねえさん.\n- Dimenticare che **ひとり/ふたり** sono irregolari.' },
      { h: 'Riepilogo', b: '- Propria famiglia: ちち, はは, あに, あね, おとうと, いもうと.\n- Altrui: おとうさん, おかあさん, おにいさん, おねえさん.\n- Persone: ひとり, ふたり, さんにん…\n- います per le persone.' }
    ],
    exercises: [
      mc('Parlando con un collega del TUO padre, dici…', ['ちち', 'おとうさん', 'おじさん', 'ちちさん'], 0),
      mc('Parlando del padre del tuo collega, dici…', ['ちち', 'おとうさん', 'あに', 'おにいさん'], 1),
      mc('Come si dice «due persone»?', ['ふたつ', 'ふたり', 'にひと', 'ににん'], 1),
      mc('Come si dice «quattro persone»?', ['よにん', 'よんにん', 'しにん', 'よんひと'], 0),
      listen('かぞくは よにんです。', 'ja', 'Quanti sono in famiglia?', ['4', '2', '5', '6'], 0),
      fillJ('Come si dice «famiglia (propria)» in kana?', ['かぞく'], 'かぞく.'),
      mc('«ごかぞく» si usa per…', ['la famiglia di un altro', 'la mia famiglia', 'gli animali', 'gli amici'], 0)
    ],
    test: [
      mc('Mia sorella minore:', ['いもうと', 'いもうとさん', 'おねえさん', 'あに'], 0),
      mc('Come si chiede «Quante persone?»', ['なんにんですか。', 'なんひとですか。', 'なんこですか。', 'なんつですか。'], 0),
      listen('あには ひとり、いもうとは ふたり います。', 'ja', 'Quanti fratelli/sorelle ha in tutto?', ['3', '2', '1', '4'], 0),
      mc('«Genitori» (miei):', ['りょうしん', 'ごりょうしん', 'おかあさん', 'かぞくさん'], 0)
    ],
    cards: [card('c1', 'padre (mio)', '[父|ちち]', '', 'ちち'), card('c2', 'madre (mia)', '[母|はは]', '', 'はは'), card('c3', 'fratello maggiore (mio)', '[兄|あに]', '', 'あに'), card('c4', 'sorella minore (mia)', '[妹|いもうと]', '', 'いもうと'),
      card('c5', 'padre (altrui)', 'おとうさん', '', 'おとうさん'), card('c6', 'madre (altrui)', 'おかあさん', '', 'おかあさん'), card('c7', 'famiglia', '[家族|かぞく]', '', 'かぞく'), card('c8', 'quante persone', 'なんにん', '', 'なんにん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La mia famiglia', text: 'わたしの かぞくは よにんです。ちちと ははと いもうとと わたしです。ちちは かいしゃいんで、ははは せんせいです。いもうとは がくせいです。ごかぞくは なんにんですか。ごにんかぞくです。おにいさんが ひとり います。',
      qs: [{ q: 'Quante persone ci sono nella famiglia del parlante?', o: ['4', '5', '3', '6'], a: 0, kind: 'explicit' }, { q: 'Che lavoro fa la madre?', o: ['Insegnante', 'Impiegata', 'Studentessa', 'Medico'], a: 0, kind: 'explicit' }, { q: 'Quante persone ha la famiglia dell’interlocutore?', o: ['5', '4', '3', '6'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'わたしの かぞくは よにんです', lang: 'ja' }, { text: 'ちちは かいしゃいんです', lang: 'ja' }, { text: 'いもうとが ひとり います', lang: 'ja' }],
    shadowing: [{ text: 'わたしの かぞくは よにんです。', lang: 'ja', tip: 'よにん: よ・に・ん, 3 more.' }, { text: 'ちちは かいしゃいんです。', lang: 'ja', tip: 'ち・ち: due sillabe brevi.' }, { text: 'ごかぞくは なんにんですか。', lang: 'ja', tip: 'Cortese: ご + かぞく.' }],
    speaking: [{ prompt: 'Presenta la tua famiglia in 4 frasi.', model: 'わたしの かぞくは よにんです。ちちと ははと いもうとが います。ちちは かいしゃいんです。ははは せんせいです。' }, { prompt: 'Chiedi a qualcuno quante persone ci sono nella sua famiglia.', model: 'ごかぞくは なんにんですか。おにいさんが いますか。' }] });

  T({ id: 'jpn-j0-food-ordering', title: 'Cibo, bevande e ordinare al ristorante', summary: 'Vocabolario del cibo, contare con つ, ordinare e chiedere il conto.',
    objectives: ['Dire e capire i nomi dei cibi e delle bevande più comuni', 'Contare con ひとつ, ふたつ…', 'Ordinare e chiedere il conto'],
    pages: [
      { h: 'Obiettivo', b: 'Mangiare fuori è una delle situazioni più utili in Giappone. In questa lezione impari le parole base, a contare gli oggetti e le frasi per ordinare.' },
      { h: 'Cibi e bevande', b: '- {{ja|[水|みず]}} (acqua), {{ja|おちゃ}} (tè), {{ja|コーヒー}}, {{ja|ビール}}, {{ja|ジュース}}\n- {{ja|ごはん}} (riso/pasto), {{ja|パン}}, {{ja|さかな}} (pesce), {{ja|[肉|にく]}} (carne), {{ja|やさい}} (verdura), {{ja|たまご}} (uovo)\n- Piatti: {{ja|ラーメン}}, {{ja|うどん}}, {{ja|すし}}, {{ja|カレー}}, {{ja|てんぷら}}\n- Sapori: {{ja|おいしい}} (buono), {{ja|からい}} (piccante), {{ja|あまい}} (dolce)' },
      { h: 'Contare con つ', b: 'Per contare oggetti generici (fino a 10): {{ja|ひとつ}}, {{ja|ふたつ}}, {{ja|みっつ}}, {{ja|よっつ}}, {{ja|いつつ}}, {{ja|むっつ}}, {{ja|ななつ}}, {{ja|やっつ}}, {{ja|ここのつ}}, {{ja|とお}}. Domanda: {{ja|いくつですか。}}\n\nStruttura: **oggetto を + numero + ください**:\n> {{ja|ラーメンを ふたつ ください。}} — Due ramen, per favore.' },
      { h: 'Ordinare', b: '- {{ja|メニューを おねがいします。}} — Il menu, per favore.\n- {{ja|これを ください。}} — Prendo questo.\n- {{ja|[水|みず]を ひとつ おねがいします。}}\n- {{ja|おすすめは なんですか。}} — Che cosa consiglia?\n- {{ja|[注文|ちゅうもん]を おねがいします。}} — Vorrei ordinare.\n\nPreferenze: {{ja|にくは たべられません。}} (non posso mangiare carne), {{ja|[卵|たまご]アレルギーが あります。}}' },
      { h: 'Il conto e le formule', b: '- {{ja|おかんじょうを おねがいします。}} — Il conto, per favore. (anche {{ja|おあいそ}})\n- {{ja|カードは つかえますか。}} — Si può pagare con la carta?\n- {{ja|いただきます。}} (prima di mangiare) / {{ja|ごちそうさまでした。}} (dopo)\n- Per il personale: {{ja|いらっしゃいませ。}} / {{ja|ありがとうございました。}}' },
      { h: 'Esempio guidato', b: 'Ordina: *Due ramen e un’acqua. Poi chiedi il conto.*\n\n→ {{ja|すみません。ラーメンを ふたつと、[水|みず]を ひとつ ください。… おかんじょうを おねがいします。}}\n\nControllo: oggetto を numero + ください; formula finale cortese.' },
      { h: 'Errori comuni', b: '- *ラーメン ふたつ を ください* → {{ja|ラーメンを ふたつ ください。}} (を subito dopo il nome).\n- *ひとり ラーメン* (persone) → {{ja|ひとつ}} per oggetti.\n- Dire *ありがとう* al ristorante: meglio {{ja|ありがとうございます}} / {{ja|ごちそうさまでした}}.\n- Dimenticare *すみません* per chiamare il cameriere.\n- Non dire *いただきます* prima di mangiare.' },
      { h: 'Riepilogo', b: '- Cibi e bevande base; おいしい, からい, あまい.\n- Contare: ひとつ, ふたつ, みっつ…\n- Ordinare: ～を ください, おすすめは?\n- Conto: おかんじょうを おねがいします; いただきます/ごちそうさま.' }
    ],
    exercises: [
      mc('«Due ramen, per favore»:', ['ラーメンを ふたつ ください。', 'ラーメンが ふたり ください。', 'ふたり ラーメンを。', 'ラーメンを ふたい ください。'], 0),
      mc('Come si dice «tre cose»?', ['みっつ', 'さんつ', 'みつ', 'さんこ'], 0),
      mc('Che cosa significa «おすすめは なんですか»?', ['Che cosa consiglia?', 'Quanto costa?', 'Dov’è il bagno?', 'Che ora è?'], 0),
      listen('おかんじょうを おねがいします。', 'ja', 'Che cosa chiede?', ['Il conto', 'Il menu', 'L’acqua', 'Un consiglio'], 0),
      fillJ('Completa: メニューを ___ します。(per favore)', ['おねがい'], 'おねがいします.'),
      mc('Dopo aver mangiato si dice…', ['ごちそうさまでした', 'いただきます', 'いらっしゃいませ', 'すみません'], 0),
      mc('«からい» significa…', ['piccante', 'dolce', 'salato', 'freddo'], 0)
    ],
    test: [
      mc('«みず» è…', ['acqua', 'tè', 'riso', 'pesce'], 0),
      mc('«コーヒーを ひとつ ください» significa…', ['Un caffè, per favore.', 'Due caffè.', 'Dov’è il caffè?', 'Il caffè è buono.'], 0),
      listen('おちゃを みっつ ください。', 'ja', 'Quanti tè?', ['3', '2', '5', '1'], 0),
      mc('Prima di mangiare si dice…', ['いただきます', 'ごちそうさま', 'さようなら', 'おやすみ'], 0)
    ],
    cards: [card('c1', 'acqua', '[水|みず]', '', 'みず'), card('c2', 'tè', 'おちゃ', '', 'おちゃ'), card('c3', 'carne', '[肉|にく]', '', 'にく'), card('c4', 'verdura', 'やさい', '', 'やさい'),
      card('c5', 'buono (sapore)', 'おいしい', '', 'おいしい'), card('c6', 'piccante', 'からい', '', 'からい'), card('c7', 'il conto', 'おかんじょう', '', 'おかんじょう'), card('c8', 'un (oggetto)', 'ひとつ', '', 'ひとつ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al ristorante', text: 'すみません、メニューを おねがいします。ラーメンを ふたつと、みずを ひとつ ください。おすすめは なんですか。てんぷらです。じゃあ、てんぷらも ひとつ ください。いただきます。おいしいです。おかんじょうを おねがいします。ごちそうさまでした。',
      qs: [{ q: 'Quanti ramen ordina?', o: ['2', '1', '3', '4'], a: 0, kind: 'explicit' }, { q: 'Che cosa viene consigliato?', o: ['Tempura', 'Sushi', 'Curry', 'Udon'], a: 0, kind: 'explicit' }, { q: 'Che cosa chiede alla fine?', o: ['Il conto', 'Altro cibo', 'Il menu', 'Il bagno'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ラーメンを ふたつ ください', lang: 'ja' }, { text: 'おすすめは なんですか', lang: 'ja' }, { text: 'おかんじょうを おねがいします', lang: 'ja' }],
    shadowing: [{ text: 'すみません、メニューを おねがいします。', lang: 'ja', tip: 'Cortese: tono calmo.' }, { text: 'ラーメンを ふたつ ください。', lang: 'ja', tip: 'ふたつ: ふ・た・つ.' }, { text: 'ごちそうさまでした。', lang: 'ja', tip: 'Formula finale: ritmo regolare.' }],
    speaking: [{ prompt: 'Ordina due piatti e una bevanda e chiedi il conto.', model: 'すみません。ラーメンを ふたつと、みずを ひとつ ください。おかんじょうを おねがいします。' }, { prompt: 'Spiega che cosa ti piace e non ti piace mangiare.', model: 'さかなが すきです。にくは あまり たべません。からい ものは すこし にがてです。' }] });

  T({ id: 'jpn-j0-katakana-loanwords', title: 'Katakana e parole di origine straniera', summary: 'Regole di scrittura del katakana, suoni estesi e parole molto comuni.',
    objectives: ['Leggere e scrivere parole in katakana', 'Usare la barra lunga ー, っ e i kana piccoli', 'Riconoscere i prestiti più frequenti'],
    pages: [
      { h: 'Obiettivo', b: 'Il katakana si usa per **parole di origine straniera**, nomi stranieri, onomatopee e per dare enfasi. In Giappone leggere un menu, un cartello o un’app richiede di saper decifrare il katakana rapidamente.' },
      { h: 'Come si adattano le parole', b: 'Le parole straniere vengono adattate alla **fonologia giapponese**: sillabe aperte (consonante + vocale) e more regolari.\n\n- {{ja|ホテル}} (hotel), {{ja|レストラン}} (restaurant), {{ja|テレビ}} (TV), {{ja|コーヒー}}, {{ja|パソコン}} (PC), {{ja|アイスクリーム}}\n- Cambiamenti: *milk* → {{ja|ミルク}}, *strike* → {{ja|ストライク}}.\n\nPer questo le parole straniere in giapponese suonano diverse dall’originale (*hotel* → hoteru).' },
      { h: 'La barra lunga, っ e i kana piccoli', b: '- **ー** (chōonpu) = vocale lunga: {{ja|コーヒー}}, {{ja|ケーキ}}, {{ja|ビール}}\n- **ッ** = consonante doppia: {{ja|ホッチキス}}, {{ja|サッカー}}, {{ja|ベッド}}\n- **ャュョ** = suoni palatali: {{ja|ジュース}}, {{ja|シャツ}}\n- Kana piccoli per suoni nuovi: {{ja|ティ}} (ti), {{ja|ディ}} (di), {{ja|ファ}} (fa), {{ja|フィ}}, {{ja|ウィ}}, {{ja|シェ}} (she), {{ja|チェ}} (che), {{ja|ジェ}} (je)\n\n> {{ja|パーティー}}, {{ja|ファッション}}, {{ja|ウィンドウ}}, {{ja|チェック}}' },
      { h: 'Parole molto frequenti', b: '- Cibo: {{ja|ハンバーガー}}, {{ja|ピザ}}, {{ja|サラダ}}, {{ja|スープ}}, {{ja|パスタ}}\n- Tecnologia: {{ja|スマホ}}, {{ja|インターネット}}, {{ja|メール}}, {{ja|アプリ}}, {{ja|ゲーム}}\n- Vita quotidiana: {{ja|トイレ}}, {{ja|バス}}, {{ja|タクシー}}, {{ja|コンビニ}}, {{ja|スーパー}}\n- Persone/paesi: {{ja|イタリア}}, {{ja|アメリカ}}, {{ja|イギリス}}\n\nMolte sono **wasei-eigo** (inglese giapponese): *コンセント* = presa elettrica, non «consent»; *マンション* = condominio, non «mansion».' },
      { h: 'Strategie di lettura', b: '1. Leggi le sillabe ad alta voce e pensa «che parola inglese/italiana potrebbe essere?».\n2. Controlla ー e ッ: cambiano il suono.\n3. Ricorda gli adattamenti: *l* e *r* diventano ら行; *v* è spesso ブ/ヴ; *th* è サ/ス.\n4. Allena il riconoscimento rapido col Kana Trainer.\n\nEsempio: {{ja|ホテルの ロビー}} → «hoteru no robī» → hotel lobby.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|スーパーで ミルクと パンと サラダを かいます。}}\n\n→ *Al supermercato compro latte, pane e insalata.*\n\nControllo: ho riconosciuto スーパー (supermarket), ミルク (milk), パン (pane), サラダ (salad)? ー allunga la vocale.' },
      { h: 'Errori comuni', b: '- Dimenticare **ー**: ビル (edificio) vs ビール (birra).\n- Confondere ソ/ン e シ/ツ: si distinguono per l’angolo dei tratti.\n- Pronunciare all’inglese: i giapponesi non capiranno *hotel* ma *hoteru*.\n- Credere che tutti i katakana siano inglesi: molti sono portoghesi, tedeschi (*アルバイト*), francesi.\n- Usare il katakana per parole giapponesi normali.' },
      { h: 'Riepilogo', b: '- Katakana: prestiti, nomi stranieri, onomatopee.\n- ー vocale lunga; ッ consonante doppia; kana piccoli per nuovi suoni.\n- Wasei-eigo: attenzione ai falsi amici.\n- Leggi ad alta voce e indovina la parola.' }
    ],
    exercises: [
      mc('Come si legge コーヒー?', ['こーひー', 'こひ', 'こうひい', 'こおひ'], 0),
      mc('Qual è la differenza tra ビル e ビール?', ['edificio vs birra', 'nessuna', 'ristorante vs casa', 'treno vs bus'], 0),
      mc('Che cos’è un マンション in giapponese?', ['un condominio', 'una villa', 'un hotel', 'un negozio'], 0),
      listen('スーパーで ミルクと パンを かいます。', 'ja', 'Che cosa compra?', ['Latte e pane', 'Carne e riso', 'Insalata e vino', 'Acqua e tè'], 0),
      mc('Come si scrive «hotel»?', ['ホテル', 'ホテレ', 'ボテル', 'ホデル'], 0),
      mc('ッ nel katakana indica…', ['consonante doppia', 'vocale lunga', 'suono nasale', 'nulla'], 0),
      mc('Il simbolo ー indica…', ['vocale lunga', 'consonante doppia', 'punto', 'accento'], 0)
    ],
    test: [
      mc('«ティ» si legge…', ['ti', 'chi', 'tsu', 'te'], 0),
      mc('«コンセント» significa…', ['presa elettrica', 'consenso', 'concerto', 'contratto'], 0),
      mc('Quale è un prestito per «supermercato»?', ['スーパー', 'スープ', 'スポーツ', 'スマホ'], 0),
      mc('«サッカー» si legge…', ['sakkā', 'sakā', 'sakka', 'sakkaa'], 0)
    ],
    cards: [card('c1', 'caffè', 'コーヒー', '', 'こーひー'), card('c2', 'birra', 'ビール', '', 'びーる'), card('c3', 'hotel', 'ホテル', '', 'ほてる'), card('c4', 'ristorante', 'レストラン', '', 'れすとらん'),
      card('c5', 'supermercato', 'スーパー', '', 'すーぱー'), card('c6', 'smartphone', 'スマホ', '', 'すまほ'), card('c7', 'taxi', 'タクシー', '', 'たくしー'), card('c8', 'condominio', 'マンション', '', 'まんしょん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al konbini', text: 'コンビニで コーヒーと サンドイッチを かいます。スマホで メールを チェックします。ホテルは ちかいです。タクシーで いきます。レストランで ピザを たべます。パーティーは ごご ろくじからです。',
      qs: [{ q: 'Che cosa compra al konbini?', o: ['Caffè e sandwich', 'Pizza e birra', 'Latte e pane', 'Insalata'], a: 0, kind: 'explicit' }, { q: 'Come si sposta?', o: ['In taxi', 'In bus', 'A piedi', 'In treno'], a: 0, kind: 'explicit' }, { q: 'A che ora inizia la festa?', o: ['18:00', '16:00', '8:00', '20:00'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'コーヒーを ください', lang: 'ja' }, { text: 'ホテルは どこですか', lang: 'ja' }, { text: 'スマホで メールを チェックします', lang: 'ja' }],
    shadowing: [{ text: 'コーヒーを ください。', lang: 'ja', tip: 'こ・お・ひ・い: コーヒー = 4 more.' }, { text: 'レストランで ピザを たべます。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'パーティーは ごご ろくじからです。', lang: 'ja', tip: 'パーティー: pa-a-ti-i.' }],
    speaking: [{ prompt: 'Dì in giapponese tre parole in katakana che usi ogni giorno e usale in una frase.', model: 'スマホと パソコンを つかいます。コーヒーを のみます。' }, { prompt: 'Spiega che cosa compri al supermercato usando il katakana.', model: 'スーパーで ミルクと パンと サラダを かいます。' }] });
})(window.ST = window.ST || {});
