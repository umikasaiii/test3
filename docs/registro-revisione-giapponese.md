# Registro di revisione affidabilità: campione di lezioni di giapponese

Campione: 41 argomenti `jpn-…` su 118 (circa 35%) più il motore di produzione `jprod.js`, i 5 scenari di `dialog-ja.js` e i 6 dialoghi `dl-ja-4…9` di `dialogues.js`.

- Kanji N3 (`ja-n3-kanji.js`, serie `jpn-j6-kanji-*`): tutte le 20 lezioni, tabella dei 10 kanji per lezione (letture kun/on, significato, composti con ruby), strategie, errori comuni, frasi. Lettura integrale con esercizi, verifica, ascolto, lettura per `tempo`, `direzioni`, `corpo`, `movimento`, `emozioni`; per le altre 15 sono state controllate le tabelle dei kanji, le strategie, gli errori comuni e le frasi, non ogni singola domanda generata.
- Grammatica N3 (`ja-n3-grammar.js`): le 14 lezioni `jpn-j6-gram-*`, lette per intero (pagine, esercizi, verifica, ascolti, chiavi delle risposte).
- Lettura N3: `jpn-j7-notizie`, `jpn-j7-email`, lette per intero.
- Base N5/N4: `jpn-j0-sounds`, `jpn-j0-numbers-time`, `jpn-j0-counters`, `jpn-j1-particles-wa-ga-wo-ni-de`, `jpn-j1-verbs-groups-conjugation`, lette per intero.
- Produzione e dialoghi: `src/core/jprod.js`, `src/core/dialog-ja.js` (ja-restaurant, ja-konbini, ja-station, ja-hotel, ja-lost), `src/content/dialogues.js` (dl-ja-4…9).

Controllo meccanico aggiuntivo: tutte le coppie ruby `[kanji|kana]` di tutte le lezioni giapponesi sono state raccolte e confrontate (stesso kanji, letture diverse): nessun conflitto multi-carattere; le differenze trovate sono tutte legittime (lettura on/kun o ruby spezzato). Le carte (`r`) coincidono con il kana del ruby in tutte le 1162 carte, salvo le voci in katakana/forma di grammatica senza ruby.

Classificazione: ERRORE CERTO (corretto nel sorgente) / DUBBIO (naturalezza, preferenza, completezza) / DA VERIFICARE CON MADRELINGUA O FONTE ESTERNA.

## Segnalazioni

| id | Punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| jpn-j6-kanji-corpo | Lettura kun di 熱 | «熱 (ねつ, あつ-い; ネツ)» | ERRORE CERTO | ねつ è la lettura on (ネツ) scritta in hiragana, non una lettura kun; la kun è あつ-い | Kun ridotta a «あつ-い» (ja-n3-kanji.js) |
| jpn-j6-kanji-direzioni | Lettura kun di 辺 | «辺 (あた-り, へん; ヘン)» | ERRORE CERTO | へん è la lettura on (ヘン) già indicata; la kun è あた-り | Kun ridotta a «あた-り» (ja-n3-kanji.js) |
| jpn-j6-kanji-tempo | Lettura on di 歳 | «歳 (サイ)» ma esempio «お歳暮 せいぼ» | ERRORE CERTO | La riga cita un composto con la lettura セイ, assente dall'elenco delle letture; 歳 ha on サイ e セイ | On portata a «サイ, セイ» (ja-n3-kanji.js) |
| jpn-j6-kanji-movimento | Regola transitivo/intransitivo | «Transitivo/intransitivo: 降る (piovere) / 降りる (scendere), 渡る / 渡す, 戻る / 戻す» | ERRORE CERTO | 降る e 降りる sono due verbi intransitivi diversi, non una coppia transitivo/intransitivo (la differenza è già trattata nel punto «降る vs 降りる») | Rimossa la coppia 降る/降りる dall'elenco (ja-n3-kanji.js) |
| jpn-j6-kanji-animali | Esempio di rendaku | «Rendaku: 焼き + 魚 → やきざかな; 子 + 馬 → こうま» | ERRORE CERTO | こうま non è rendaku (nessuna sonorizzazione, c'è una vocale lunga) | Rimosso «子 + 馬 → こうま» (ja-n3-kanji.js) |
| jpn-j6-gram-hazu-beki | Chiave del quiz «Quale frase è sbagliata?» | risposta segnata «やすみに ちがいない。» | ERRORE CERTO | 休みに違いない è corretto (la lezione stessa dice «N: senza だ»); la frase davvero sbagliata, «やすみ はずです», era tra i distrattori e la lezione la indica come errore tipico | Scambiate le due opzioni: ora la risposta è «やすみ はずです。» (ja-n3-grammar.js) |
| jpn-j6-gram-ukemi-shieki-uso | Esercizio a completamento | «こどもに ないて ___ こまりました» (risposte: られて, れて) | ERRORE CERTO | Il tema «ないて» è la forma て di 泣く: «ないて+れて» non esiste; la spiegazione dell'esercizio dice 泣かれて | Testo ridotto a «こどもに なか___ こまりました», risposta «れて» (ja-n3-grammar.js) |
| jpn-j6-gram-fukugoudoushi | Esempio con かける | «電車が 出かけて いた。» | ERRORE CERTO | 出かける è «uscire» (di una persona), non «il treno stava per partire»; la costruzione V-ます+かける non vale con quel verbo | Sostituito con «ドアが 閉まりかけて いた。» (ja-n3-grammar.js) |
| jpn-j6-gram-fukugoudoushi | Errore tipico su 始める | «Usare 始める con verbi non controllabili … ma 雨が降り始まる no» | ERRORE CERTO | La regola è falsa: la lezione stessa usa 降り始めました; l'esempio sbagliato è 始まる usato come secondo verbo | Riformulato: «Usare 始まる come secondo verbo … 降り始めました, non 降り始まる» (ja-n3-grammar.js) |
| jpn-j6-gram-uchi-aida-mama | Errore tipico su まま | «Dire «食べたままで出かけます» (presente): まま richiede forma た» | ERRORE CERTO | L'«errore» citato è già in forma た: l'esempio contraddice la regola enunciata | Sostituito con «窓を開けるまま寝ます» (forma del dizionario) → 開けたまま (ja-n3-grammar.js) |
| jpn-j6-gram-toiu | Obiettivo | «una delle strutture più comuni dell'italiano giapponese» | ERRORE CERTO | Svista: dovrebbe essere «del giapponese» | Corretto (ja-n3-grammar.js) |
| jpn-j0-sounds | Esercizio a completamento | «Scrivi in kana: «buonanotte» (è una frase di 5 more + なさい)» | ERRORE CERTO | おやすみ ha 4 more (お・や・す・み) | Testo: «おやすみ = 4 more, più なさい» (ja-j0-j1.js) |
| jpn-j0-numbers-time | Errori comuni | «*しちがつ* si legge **しちがつ**, non *ななガツ*» | ERRORE CERTO | La forma contrassegnata come errata (*しちがつ*) coincide con quella corretta; ななガツ mescola scritture | Sostituito con «*なながつ* → しちがつ» (ja-x-j0.js) |
| serie jpn-j6-kanji-* | Completezza delle letture | es. 昔 (セキ; manca シャク), 立 (リツ; manca リュウ), 色 (ショク; manca シキ), 青 (セイ; manca ショウ), 命 (メイ; manca ミョウ) | DUBBIO | Le lezioni danno le letture principali, non tutte: quelle omesse sono valide ma non necessarie per il livello. Se «TUTTE le letture» è un requisito, i kanji vanno integrati | Nessuna |
| jpn-j6-kanji-direzioni | Kanji simili | «Confondere 西 (にし) con 酒 (さけ): quest'ultimo ha 氵» | DUBBIO | La coppia di forma simile è di norma 西/酉 (酒 contiene 酉); il confronto proposto è poco utile | Nessuna |
| jpn-j6-kanji-animali | Contatore 羽 e radicali | «さんば … (non *さんわ*)»; «犬, 猫 (犭 = animale)» | DUBBIO | I dizionari danno sia さんば sia さんわ; 犬 non contiene 犭 (solo 猫) | Nessuna |
| jpn-j6-kanji-cibo | Natura di 砂糖 | «砂糖 = さとう … lettura speciale» | DUBBIO | È lettura on regolare (サ+トウ), non speciale | Nessuna |
| jpn-j6-kanji-lavoro | Lettura di 工場 | «こうじょう … non こうば (che è un'altra parola)» | DUBBIO | こうば è una lettura registrata di 工場 (piccola officina); la frase è troppo netta | Nessuna |
| jpn-j6-kanji-scuola | Raddoppio | «筆 → ひつ ma 万年筆 → まんねんひつ» come esempio di raddoppio | DUBBIO | Nessuna geminazione negli esempi citati (ひつ resta ひつ) | Nessuna |
| jpn-j6-kanji-societa | Errori comuni | «義務 … non *ぎむう*»; «責任 … そ-きにん è sbagliato» | DUBBIO | Errori inventati poco plausibili e spiegazione poco chiara | Nessuna |
| jpn-j6-gram-bakari-tokoro | Testo dell'ascolto | «えきを でた ところです … いま むかえに いきます» | DUBBIO | Dialogo con due voci non distinte: non è chiaro chi va a prendere chi | Nessuna |
| jpn-j7-notizie | Naturalezza | «市は市民に注意しています» | DUBBIO | In un notiziario è più naturale 注意を呼びかけています; 注意する con に suona come un rimprovero | Nessuna |
| jpn-j6-gram-baai-kagiri | Errore tipico su 次第 | «Dire «天気次第で» con particelle sbagliate: 天気次第です / 天気次第で» | DUBBIO | Voce circolare: le due forme date sono entrambe corrette | Nessuna |
| jpn-j6-gram-irai-kyoka | Etichetta | «お + radice + ください: ご記入ください» | DUBBIO | Con parole di origine cinese si usa ご, non お | Nessuna |
| src/core/jprod.js (FORMS) | Risposte accettate | «おおきいです → negativa: おおきくないです», «がくせいです → negativa: …ではありません / …じゃありません» | DUBBIO | Forme equivalenti e corrette (おおきくありません, …ではないです, …じゃないです) non sono accettate; la correzione automatica può rifiutare risposte giuste | Nessuna |
| jpn-j6-gram-hazu-beki | Scala di certezza | «でしょう» prima di «はず» nella scala di certezza | DUBBIO | Ordinamento discutibile ma difendibile | Nessuna |
| jpn-j6-kanji-animali, jpn-j6-kanji-direzioni | Letture con più varianti | 子馬 こうま (anche こま); 十分 じゅっぷん (anche じっぷん); 三羽 さんば/さんわ | DA VERIFICARE CON MADRELINGUA O FONTE ESTERNA | Varianti ammesse o regionali: andrebbero controllate su un dizionario (NHK/Daijisen) | Nessuna |
| jpn-j0-sounds | Pitch accent | «あめ 雨 (alto-basso) / あめ 飴 (basso-alto)» (Tokyo) | DA VERIFICARE CON MADRELINGUA O FONTE ESTERNA | Coincide con la forma standard (雨 あ↓め; 飴 あめ), ma andrebbe confermato su un dizionario di accenti (OJAD) | Nessuna |

## Id modificati

- jpn-j6-kanji-corpo, jpn-j6-kanji-direzioni, jpn-j6-kanji-tempo, jpn-j6-kanji-movimento, jpn-j6-kanji-animali (ja-n3-kanji.js)
- jpn-j6-gram-hazu-beki, jpn-j6-gram-ukemi-shieki-uso, jpn-j6-gram-fukugoudoushi, jpn-j6-gram-uchi-aida-mama, jpn-j6-gram-toiu (ja-n3-grammar.js)
- jpn-j0-sounds (ja-j0-j1.js)
- jpn-j0-numbers-time (ja-x-j0.js)

L'indice dei kanji in `src/core/kanji.js` non è stato toccato (nessun kanji aggiunto o rimosso: le modifiche riguardano solo l'elenco delle letture e il testo).

## Id senza problemi riscontrati

jpn-j6-kanji-numeri, jpn-j6-kanji-colori, jpn-j6-kanji-dimensioni, jpn-j6-kanji-qualita, jpn-j6-kanji-casa, jpn-j6-kanji-citta, jpn-j6-kanji-lingua, jpn-j6-kanji-mani, jpn-j6-kanji-emozioni (con i soli dubbi di completezza delle letture sopra), jpn-j6-gram-naru-suru, jpn-j6-gram-bakari-tokoro (solo dubbio sull'ascolto), jpn-j6-gram-rashii-ppoi-gachi, jpn-j6-gram-noda-wake, jpn-j6-gram-concessione, jpn-j6-gram-okage-sei, jpn-j6-gram-sae-koso, jpn-j7-email, jpn-j7-notizie (solo dubbio di naturalezza), jpn-j0-counters, jpn-j1-particles-wa-ga-wo-ni-de, jpn-j1-verbs-groups-conjugation, `dialog-ja.js` (ja-restaurant, ja-konbini, ja-station, ja-hotel, ja-lost), `dialogues.js` (dl-ja-4…9), `jprod.js` (salvo il dubbio sulle risposte accettate).

## Limiti

- Revisione a memoria: nessun madrelingua, nessun dizionario consultato. Si segnala come ERRORE CERTO solo ciò che è dimostrabile dalla lingua o dall'incoerenza interna del testo (lettura on scritta come kun, chiave di quiz sbagliata, frase che contraddice la regola, conteggio di more).
- Per i kanji ho verificato le letture e i significati dei 200 kanji e dei loro composti con ruby; non ho confrontato i composti con un dizionario. Le letture rare o varianti sono state classificate DUBBIO / DA VERIFICARE.
- Per le 15 lezioni di kanji non lette integralmente, esercizi e domande generate dal modello comune sono stati controllati per costruzione (stesso generatore delle 5 lette integralmente), non uno per uno.
- Il quiz di grammatica N3 usa spesso opzioni scritte a mano con chiave nella prima posizione: errori di chiave come quello di `jpn-j6-gram-hazu-beki` potrebbero esistere nelle altre lezioni non campionate (da cercare con una passata dedicata sulle domande «Quale frase è sbagliata/NON»).
- Non esaminati: le altre ~80 lezioni giapponesi, i file `layer-*.js`, `kana.js`, `dialog.js`.
- Il campione non permette di concludere sull'affidabilità dell'intero corso: l'assenza di errori in una lezione significa solo «nessun errore trovato a memoria».

## Passata mirata esercizi

Passata sistematica (non a campione) su tutti gli esercizi, le domande di verifica, le domande dei brani di ascolto/lettura e i testi a completamento dei contenuti giapponesi: `ja-n3-grammar.js`, `ja-n3-kanji.js`, `ja-n3-lettura.js`, tutti gli altri `ja-*.js` (j0-j5, x-j0…x-j5, k1-k3, y, z1) più `src/core/jprod.js` e `src/core/dialog-ja.js`. Metodo: script Node che stampa tutte le domande con la chiave marcata (118 lezioni), ricerca automatica di pattern sospetti (domande «sbagliata/NON/non è», risposta ripetuta accanto al blank, fill senza blank, opzioni equivalenti, chiave in prima posizione) e lettura di ogni voce. Controllati: chiave unica, senso delle domande «frase sbagliata», integrità dei fill e risposte accettate, ruby/letture, spiegazione ↔ risposta, lezione ↔ esercizio. Nessun uso di git; i `layer-*.js` non sono stati toccati.

Esercizi controllati: 1.836 domande a scelta (esercizi, verifiche, ascolti, letture), 221 fill, 115 order, di cui 26 domande del tipo «quale è sbagliata/NON»; in `jprod.js` 14 frasi da tradurre, 24 trasformazioni, 6 dialoghi e 8 situazioni; in `dialog-ja.js` 5 scenari.

### Errori corretti

| Id | Dove | Motivo | Correzione |
|---|---|---|---|
| jpn-j1-time-routine (ex4) | ja-x-j1.js | Completamento corrotto: il suggerimento «(nuoto) およぎ» conteneva la risposta e il blank era seguito da testo spurio | Ora «(nuotare: およぐ)», risposta accettata invariata (およぎ) |
| jpn-j2-travel-situations (ex6) | ja-x-j2.js | Il suggerimento «(aiuto: たすけて)» rivelava la risposta | «(aiutare: たすける)» |
| jpn-j7-dialoghi (ex5) | ja-n3-lettura.js | Fill «おごらせて___ ください» con risposta accettata «ください»: la frase accettata sarebbe «…ください ください» e «いただけませんか» non è grammaticale lì | «おごら___ ください», risposta «せて» |
| jpn-j7-notizie (ex8, ex9) | ja-n3-lettura.js | «あした も» con spazio spurio tra nome e particella (altrove «あしたも») | «あしたも» |
| jpn-j3-kanji-a2 (ex3) | ja-k1.js | «Come si legge 角 (da solo)?»: il distrattore つの è una lettura corretta di 角 (corno) → due risposte giuste | Distrattore sostituito, domanda precisata («angolo») |
| jpn-j4-kanji-b3 (test2) | ja-k2.js | «Che cosa significa 健?»: il distrattore «tranquillo, sano» (significato di 康) era quasi sinonimo della risposta «sano, robusto» | «tranquillo, in pace» |
| jpn-j4-conditionals-potential (ex5) | ja-j4-j5.js | Refuso nel distrattore «Ci siamo perso» | «Abbiamo perso il treno» |
| jpn-j6-kanji-mani (lq «Che cosa ha scritto…», testo it) | ja-n3-kanji.js | La traduzione («ho scritto il mio nome davanti all'agente») contraddiceva il giapponese (警察の人が名前を書きました: lo scrive l'agente) | Traduzione e domanda allineate al giapponese |
| jpn-j6-kanji-movimento (ord 0) | ja-n3-kanji.js | L'esercizio di ordinamento conteneva きのう ma la consegna italiana no | «Ieri ho attraversato il ponte» |
| jpn-j6-kanji-societa (errori comuni) | ja-n3-kanji.js | Avvertenza incomprensibile («lunga/nasale: そ-きにん è sbagliato») | Sostituita con 責=せき, 任=にん (non せいにん) |
| jpn-j6-kanji-scuola (strategie) | ja-n3-kanji.js | Sotto «Raddoppio in on» era elencato 筆→ひつ / 万年筆→まんねんひつ, che non contiene alcun raddoppio | Tolto l'esempio incoerente |
| jpn-j6-kanji-corpo (test2) | ja-n3-kanji.js | Nelle opzioni solo la risposta «あせを かく» aveva lo spazio (indizio) | «あせをかく» (lemma e opzioni coerenti) |
| ja-n3-grammar.js (riga 6) | ja-n3-grammar.js | Commento danneggiato `/« … »/` (letto come espressione regolare, non come commento) | Commento `/* … */` |

Nessun errore di chiave certo è stato trovato nelle domande «Quale frase è sbagliata / contiene un errore / NON»: tutte (jpn-j6-gram-bakari-tokoro ex10, concessione ex9, baai-kagiri ex9, hazu-beki test4; jpn-j5-grammar-review-n4-n3 ex0-ex4; jpn-j4-formal-vs-casual-speech test3; jpn-j0-sounds ex6; jpn-j1-particles test3; jpn-j2-nai-form-uses test3; jpn-j3-connectors-reasoning test1; jpn-j3-conditionals-basic ex4; jpn-j5-casual test1) hanno la chiave coerente con il senso della domanda.

### Posizione della risposta corretta

Nelle lezioni j0-j5 (14 file) la chiave era quasi sempre la prima opzione (circa 70 % in posizione 0). Ho aggiunto in quei file lo stesso meccanismo già presente in `ja-n3-grammar.js`/`ja-n3-lettura.js`: un rimescolamento deterministico applicato solo quando la chiave è la prima (mc, ascolti e brani di lettura), con esenzione per le opzioni tipo «Tutte/Nessuna/Entrambi/Non si sa». Verificato con confronto automatico prima/dopo: stessi insiemi di opzioni e stessa risposta testuale in tutte le 1.833 domande presenti prima delle correzioni (le uniche differenze sono le correzioni sopra). Nuova distribuzione della chiave nelle posizioni 0-3 per j0-j5: circa 14 % / 33 % / 28 % / 25 %.

### Dubbi (non modificati)

| Id | Punto | Motivo del dubbio |
|---|---|---|
| jpn-j3-purpose-ni-tame-youni (test3) | «Quale non è mai possibile? わすれないために» | «Mai» è troppo assoluto: 忘れないために compare nell'uso reale; la regola didattica (verbo non volitivo → ように) è però quella dell'esercizio ex2 |
| jpn-j6-gram-concessione (ex5) | «ひまな___ てつだって くれません。(eppure)» accetta solo のに | くせに è ugualmente grammaticale; la scelta dipende dal tono (non indicato nella consegna) |
| jpn-j6-gram-rashii-ppoi-gachi (ex0) | «tipico di primavera»: distrattore はるっぽい | 春っぽい esiste ed è attestato; resta sbagliato per «tipico» ma non è assurdo |
| jpn-j3-kanji-a2, jpn-j5-kanji-b4 | Convenzione dei piani | 二階 = «secondo piano» (ja-k1.js, schede) ma «primo piano» in ja-k2.js (lezione b4, dichiarato nel testo); 三階 = «terzo piano» ovunque. Due convenzioni diverse, entrambe spiegate; andrebbe scelta una |
| jpn-j0-desu (ex3) | Fill sulla particella は accetta anche «ha» | «ha» non è la lettura della particella; accettato probabilmente per indulgenza |
| j2-adjectives-forms test1/test2, j3-obligation-permission test1, j3-phone-appointments test1, j4-causative test2 | Kanji non annotati nel testo della domanda («静かに話してください», «席を外しております»…) | Stile del corso: negli esercizi di grammatica il lemma/frase è dato a volte in kanji senza ruby; non è un errore, ma contraddice il resto delle domande di quelle lezioni, scritte in kana. Non modificato |
| jpn-j2-travel-situations (test2), jpn-j5-news-reading (test2) | Warning del validatore «ripete un esercizio» | Stessa consegna dell'esercizio ma audio diverso: non è un errore di contenuto |
| jpn-j1-kanji-1 (read) | «九[時|じ]», «五[時|じ]»: numeri kanji senza ruby | Numeri semplici del livello; coerente con la lezione |
| jpn-j3-noun-modification (ex6) | «Nella relativa il soggetto si marca con が» | Anche の è possibile (私の作った料理); la lezione insegna が |
| jpn-j6-kanji-corpo (errori comuni) | «頭痛 ずつう, non とうつう» | とうつう è lettura rara ma esistente |

### File toccati

ja-n3-grammar.js, ja-n3-kanji.js, ja-n3-lettura.js, ja-j0-j1.js, ja-j2-j3.js, ja-j4-j5.js, ja-k1.js, ja-k2.js, ja-k3.js, ja-x-j0.js … ja-x-j5.js, ja-y.js, ja-z1.js. Dopo le modifiche: `node tools/validate-content.js` → «Contenuti validi»; `node --check` OK su tutti i file toccati; `node tests/engine.test.js` senza fallimenti. `index.html` (bundle) non è stato rigenerato (`node tools/build.js` da eseguire a parte).
