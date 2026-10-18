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
