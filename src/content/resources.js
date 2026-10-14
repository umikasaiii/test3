/* Contenuti graduati: materiali reali da consumare fuori dall'app, divisi per livello.
   Indicati per NOME (non per URL, che possono cambiare): verifica disponibilità e licenze la prima volta. */
(function (ST) {
  'use strict';
  const C = ST.content;
  const r = (lang, band, type, title, where, subs, how, accent) => ({ lang, band, type, title, where, subs, how, accent: accent || '' });
  C.resources = {
    method: {
      en: ['Scegli UNA fonte per accento (britannico, americano, australiano) e restaci per settimane.', 'Primo ascolto senza sottotitoli: solo il senso generale. Secondo ascolto: dettagli.', 'Sottotitoli in INGLESE (non in italiano) solo dopo; poi riascolta senza.', 'Scegli un frammento di 2–3 minuti e fai shadowing: ripeti a mezza frase di distanza.', 'Ripeti lo stesso frammento dopo 1, 3 e 7 giorni: la ripetizione consolida.'],
      ja: ['Prima di guardare: leggi la trama in italiano, così il testo italiano non serve durante la visione.', 'Scena di 2–3 minuti: 1° ascolto senza sottotitoli, 2° con sottotitoli giapponesi (se li leggi), 3° senza.', 'I sottotitoli italiani durante la visione tolgono allenamento all’orecchio: usali solo per controllare dopo.', 'Scegli serie con parlato quotidiano e chiaro; evita all’inizio fantasy e dialetti marcati.', 'Fai shadowing su 5–10 battute al giorno e riascolta la stessa scena più volte.']
    },
    items: [
      r('en', 'B1', 'Podcast', '6 Minute English (BBC Learning English)', 'App o sito BBC Learning English', 'Trascrizione inglese sul sito', 'Ascolta senza testo, poi con la trascrizione; ripeti 3 frasi in shadowing.', 'BrE'),
      r('en', 'B1', 'Notizie lente', 'Learning English (VOA)', 'Sito / YouTube VOA Learning English', 'Sottotitoli inglesi', 'Notizie con lessico controllato e ritmo lento: ottimo per iniziare a sentire l’americano.', 'AmE'),
      r('en', 'B1', 'Video', 'ELLLO (Easy Listening)', 'Sito ELLLO', 'Trascrizione e quiz', 'Interviste brevi con molti accenti, tra cui australiano.', 'misti'),
      r('en', 'B1', 'Video', 'Easy English (YouTube)', 'YouTube', 'Sottotitoli inglesi', 'Interviste per strada con sottotitoli doppi: allena l’ascolto del parlato reale.', 'misti'),
      r('en', 'B1', 'Lettura', 'Graded readers (Oxford Bookworms, Cambridge Readers, Penguin Readers)', 'Biblioteca / libreria', '—', 'Leggi libri del tuo livello (B1) in sequenza; con l’audiolibro abbinato ascolti e leggi insieme.', ''),
      r('en', 'B1+', 'Video / TV', 'Bluey', 'Streaming', 'Sottotitoli inglesi', 'Cartone animato australiano di 7 minuti: lessico quotidiano familiare, ottimo per l’orecchio all’accento australiano.', 'AusE'),
      r('en', 'B1+', 'Podcast', 'The English We Speak (BBC)', 'App BBC Learning English', 'Trascrizione', 'Espressioni idiomatiche in 3 minuti: aggiungile alle carte lessicali.', 'BrE'),
      r('en', 'B1+', 'Video', 'TED-Ed', 'YouTube', 'Sottotitoli inglesi', 'Spiegazioni brevi di 5 minuti su argomenti vari.', 'misti'),
      r('en', 'B2', 'Podcast', 'BBC Learning English News Review', 'App BBC Learning English', 'Trascrizione', 'Notizie discusse con lessico B2 e commenti; ascolta una puntata a settimana.', 'BrE'),
      r('en', 'B2', 'Video', 'TED Talks', 'ted.com / YouTube', 'Sottotitoli inglesi', 'Scegli talk di 8–12 minuti su argomenti che ti interessano.', 'misti'),
      r('en', 'B2', 'Podcast', 'Planet Money (NPR)', 'App podcast', 'Trascrizioni sul sito NPR', 'Economia raccontata con storie; parlato americano naturale.', 'AmE'),
      r('en', 'B2', 'Podcast', 'ABC Radio National (Australia)', 'ABC listen', 'Trascrizioni per alcuni programmi', 'Accento australiano in contesti informativi.', 'AusE'),
      r('en', 'B2', 'Serie', 'Serie comedy o drammatiche in inglese con sottotitoli inglesi', 'Streaming', 'Inglesi', 'Una puntata, una scena alla volta; non guardare più di 20 minuti: riguarda le scene.', 'misti'),
      r('en', 'B2+', 'Podcast', 'In Our Time (BBC Radio 4)', 'App BBC Sounds', '—', 'Discussioni accademiche di 40 minuti: allena comprensione prolungata e lessico astratto.', 'BrE'),
      r('en', 'B2+', 'Lettura', 'Giornali e saggi (The Guardian, BBC News, The Economist)', 'Siti', '—', 'Un articolo al giorno; sottolinea collocazioni e connettori.', 'misti'),

      r('ja', 'J0–J1', 'Podcast', 'Nihongo con Teppei (livello principiante)', 'App podcast / YouTube', 'Trascrizione sul sito', 'Giapponese lento e comprensibile; ascolta una puntata, poi rifai la prima metà in shadowing.', ''),
      r('ja', 'J0–J1', 'Video', 'Japanese Ammo with Misa (principianti)', 'YouTube', 'Sottotitoli', 'Lezioni di frasi quotidiane con pronuncia chiara.', ''),
      r('ja', 'J0–J1', 'Lettura', 'Graded readers di Tadoku (livello 0–1)', 'Sito Tadoku (gratuiti)', 'Con furigana', 'Racconti brevi con vocabolario controllato.', ''),
      r('ja', 'J0–J1', 'TV', 'NHK World-JAPAN: Easy Japanese', 'Sito NHK WORLD', 'Sottotitoli giapponesi/inglesi', 'Brevi dialoghi di situazioni quotidiane con spiegazioni.', ''),
      r('ja', 'J1–J2', 'Anime', 'Doraemon', 'Streaming / TV', 'Giapponesi se disponibili', 'Linguaggio semplice, frasi brevi: scene da 3 minuti.', ''),
      r('ja', 'J1–J2', 'Anime', 'Shirokuma Cafe / Chibi Maruko-chan', 'Streaming', 'Giapponesi se disponibili', 'Vita quotidiana, parlato lento: ottimo per riconoscere formule ricorrenti.', ''),
      r('ja', 'J2–J3', 'Anime', 'Yuru Camp△ (campeggio)', 'Streaming', 'Giapponesi se disponibili', 'Dialoghi tranquilli e chiari; vocabolario ripetuto.', ''),
      r('ja', 'J2–J3', 'Video', 'NHK for School (clip brevi)', 'Sito NHK', 'Giapponesi', 'Spiegazioni per ragazzi con linguaggio semplice.', ''),
      r('ja', 'J3–J4', 'Dorama', 'Midnight Diner (Shinya Shokudō)', 'Streaming', 'Giapponesi', 'Episodi brevi, dialoghi calmi e quotidiani, molti ripetuti.', ''),
      r('ja', 'J3–J4', 'Lettura', 'NHK News Web Easy', 'Sito NHK', 'Con furigana', 'Notizie in giapponese semplificato: una notizia al giorno.', ''),
      r('ja', 'J4–J5', 'Anime', 'Slice of life moderni (es. serie scolastiche o di lavoro)', 'Streaming', 'Giapponesi', 'Parlato informale e contrazioni (てる, ちゃう): usa le scene brevi e rivedile.', ''),
      r('ja', 'J4–J5', 'Podcast', 'Podcast di conversazione per livello intermedio', 'App podcast', 'Trascrizioni se presenti', 'Dialoghi naturali; prima un ascolto senza testo, poi controllo.', ''),
      r('ja', 'J5', 'TV', 'Notiziari e programmi di cucina/viaggio NHK', 'Sito NHK', 'Giapponesi', 'Parlato più veloce ma con supporto visivo.', '')
    ]
  };
})(window.ST = window.ST || {});
