/* Strato lingua — prova: «Triade CIA, minacce e principi di difesa» tradotta pagina per pagina in inglese e in giapponese semplice. */
(function (ST) {
  'use strict';
  const ID = 'cyb-triade-cia-e-minacce', L = ST.layer;
  L.add('en', ID, {
    title: { t: 'CIA triad, threats and defence principles', it: 'Triade CIA, minacce e principi di difesa' },
    sum: [
      { t: 'Information security rests on three properties: ⟦confidentiality⟧, ⟦integrity⟧ and ⟦availability⟧.', it: 'La sicurezza delle informazioni si basa su tre proprietà: riservatezza, integrità e disponibilità.' },
      { t: 'Other properties matter in documents: ⟦authenticity⟧, ⟦non-repudiation⟧ and ⟦accountability⟧.', it: 'Altre proprietà contano nei documenti: autenticità, non ripudio e responsabilità.' },
      { t: 'An ⟦asset⟧ is anything of value; a ⟦threat⟧ can harm it; a ⟦vulnerability⟧ is the weakness it exploits.', it: 'Un asset è ciò che ha valore; una minaccia può danneggiarlo; una vulnerabilità è la debolezza che sfrutta.' },
      { t: '⟦Risk⟧ is the chance that a threat exploits a vulnerability, judged by likelihood and impact.', it: 'Il rischio è la possibilità che una minaccia sfrutti una vulnerabilità, valutata per probabilità e impatto.' },
      { t: '⟦Threat actors⟧ differ: organised crime, hacktivists, states, ⟦insiders⟧ and amateurs; most attacks go for easy targets.', it: 'Gli attori delle minacce differiscono: criminalità, hacktivisti, stati, insider e dilettanti; la maggior parte punta ai bersagli facili.' },
      { t: 'Reduce the ⟦attack surface⟧: switch off unused services and accounts, and keep an inventory.', it: 'Riduci la superficie di attacco: spegni servizi e account inutilizzati e tieni un inventario.' },
      { t: 'Use ⟦defence in depth⟧ with different layers, and ⟦least privilege⟧ to limit the damage of a mistake.', it: 'Usa la difesa in profondità con livelli diversi e il privilegio minimo per limitare i danni di un errore.' }
    ],
    gloss: [
      { w: 'confidentiality', it: 'riservatezza: solo chi è autorizzato può leggere i dati' }, { w: 'integrity', it: 'integrità: i dati non sono modificati in modo non autorizzato' }, { w: 'availability', it: 'disponibilità: sistemi e dati accessibili quando servono' },
      { w: 'authenticity', it: 'autenticità: si verifica che messaggio o utente siano chi dichiarano' }, { w: 'non-repudiation', it: 'non ripudio: chi ha agito non può negarlo' }, { w: 'accountability', it: 'responsabilità: ogni azione è riconducibile a un’identità' },
      { w: 'asset', it: 'bene da proteggere (dati, server, reputazione…)' }, { w: 'threat', it: 'minaccia' }, { w: 'vulnerability', it: 'vulnerabilità, debolezza sfruttabile' }, { w: 'risk', it: 'rischio: probabilità × impatto' },
      { w: 'ransomware', it: 'malware che blocca i dati e chiede un riscatto' }, { w: 'threat actors', it: 'attori delle minacce' }, { w: 'insiders', it: 'persone interne con accessi legittimi' },
      { w: 'attack surface', it: 'superficie di attacco' }, { w: 'defence in depth', it: 'difesa in profondità: più livelli di protezione indipendenti' }, { w: 'principle of least privilege', it: 'principio del privilegio minimo' }, { w: 'least privilege', it: 'privilegio minimo' }
    ]
  });
  L.add('ja', ID, {
    title: { t: 'CIAの[三要素|さんようそ]、[脅威|きょうい]、[防御|ぼうぎょ]の[考|かんが]え[方|かた]', it: 'Triade CIA, minacce e principi di difesa' },
    sum: [
      { t: '[情報|じょうほう]の[安全|あんぜん]は、⟦[機密性|きみつせい]⟧、⟦[完全性|かんぜんせい]⟧、⟦[可用性|かようせい]⟧の[三|みっ]つで[考|かんが]えます。', it: 'La sicurezza delle informazioni si valuta con tre proprietà: riservatezza, integrità e disponibilità.' },
      { t: '[書類|しょるい]では、⟦[真正性|しんせいせい]⟧と⟦[否認防止|ひにんぼうし]⟧も[大切|たいせつ]です。', it: 'Nei documenti contano anche autenticità e non ripudio.' },
      { t: '⟦[資産|しさん]⟧は[価値|かち]があるもの、⟦[脅威|きょうい]⟧は[害|がい]をおこすもの、⟦[脆弱性|ぜいじゃくせい]⟧は[弱|よわ]い[点|てん]です。', it: 'L’asset è ciò che ha valore, la minaccia è ciò che può danneggiare, la vulnerabilità è il punto debole.' },
      { t: '⟦リスク⟧は、[脅威|きょうい]が[弱|よわ]い[点|てん]を[使|つか]って[害|がい]を[与|あた]える[可能性|かのうせい]です。', it: 'Il rischio è la possibilità che una minaccia usi un punto debole per causare un danno.' },
      { t: '[攻撃|こうげき]する[人|ひと]には、[犯罪|はんざい]グループ、[国家|こっか]、⟦[内部|ないぶ]の[人|ひと]⟧などがいます。', it: 'Chi attacca può essere un gruppo criminale, uno Stato, una persona interna e così via.' },
      { t: '⟦[攻撃対象領域|こうげきたいしょうりょういき]⟧を[小|ちい]さくします。いらないサービスを[止|と]めます。', it: 'Riduci la superficie di attacco: spegni i servizi inutili.' },
      { t: '⟦[多層防御|たそうぼうぎょ]⟧と⟦[最小権限|さいしょうけんげん]⟧で、[被害|ひがい]を[小|ちい]さくします。', it: 'Con la difesa in profondità e il privilegio minimo riduci i danni.' }
    ],
    gloss: [
      { w: '機密性', r: 'きみつせい', it: 'riservatezza' }, { w: '完全性', r: 'かんぜんせい', it: 'integrità' }, { w: '可用性', r: 'かようせい', it: 'disponibilità' },
      { w: '真正性', r: 'しんせいせい', it: 'autenticità' }, { w: '否認防止', r: 'ひにんぼうし', it: 'non ripudio' }, { w: '責任追跡性', r: 'せきにんついせきせい', it: 'responsabilità (accountability)' },
      { w: '資産', r: 'しさん', it: 'asset, bene da proteggere' }, { w: '脅威', r: 'きょうい', it: 'minaccia' }, { w: '脆弱性', r: 'ぜいじゃくせい', it: 'vulnerabilità' }, { w: 'リスク', r: 'りすく', it: 'rischio' },
      { w: 'ランサムウェア', r: 'らんさむうぇあ', it: 'ransomware' }, { w: '脅威アクター', r: 'きょういあくたー', it: 'attori delle minacce' }, { w: '内部の人', r: 'ないぶのひと', it: 'insider (persona interna)' },
      { w: '攻撃対象領域', r: 'こうげきたいしょうりょういき', it: 'superficie di attacco' }, { w: '多層防御', r: 'たそうぼうぎょ', it: 'difesa in profondità' }, { w: '最小権限', r: 'さいしょうけんげん', it: 'privilegio minimo' }
    ]
  });
})(window.ST = window.ST || {});
