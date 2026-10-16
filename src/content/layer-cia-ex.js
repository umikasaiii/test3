/* Strato lingua — prova «Triade CIA»: riepilogo, obiettivi, esercizi e verifica tradotti (stesso ordine e stesse opzioni dell'italiano). */
(function (ST) {
  'use strict';
  const L = ST.layer, ID = 'cyb-triade-cia-e-minacce';
  const mc = (q, o, why) => ({ q, o, why });
  Object.assign(L.get('en', ID), {
    summary: 'Confidentiality, integrity, availability; assets, threats, vulnerabilities and risk; defence in depth and least privilege.',
    objectives: ['Explain the CIA triad and link it to concrete examples', 'Tell assets, threats, vulnerabilities and risk apart', 'Apply defence in depth and least privilege'],
    ex: [
      mc('An attacker secretly changes the amount of a bank transfer in the archive. Which property is violated?', ['Integrity', 'Confidentiality', 'Availability', 'Non-repudiation'], 'The data was altered without authorisation.'),
      mc('An attack that makes a website unreachable mainly affects:', ['Availability', 'Confidentiality', 'Integrity', 'Authenticity'], 'The service is no longer accessible when needed.'),
      mc('Which element is a vulnerability?', ['A server without security updates', 'A criminal group', 'The customer database', 'The financial loss'], 'It is an exploitable weakness; the others are a threat, an asset and an impact.'),
      mc('The property that prevents someone from denying they performed an action is:', ['Non-repudiation', 'Confidentiality', 'Availability', 'Least privilege'], 'It relies on reliable evidence such as signatures and logs.'),
      { q: 'The principle of granting only the essential permissions is called ... privilege.', a: ['least', 'minimum'], why: 'Least privilege.' },
      { q: 'Put the logical chain of risk in order', words: ['a threat', 'exploits', 'a vulnerability', 'of an', 'asset', 'causing harm'], why: 'A threat exploits a vulnerability of an asset, causing harm.' },
      mc('Why is an “admin” account shared by several people a problem?', ['Individual accountability is lost in the logs', 'It makes the system slower', 'It prevents encryption', 'It increases availability'], 'The action cannot be attributed to a person.'),
      mc('Which example is an insider?', ['A disgruntled employee with legitimate access', 'An external hacktivist group', 'A virus spread by email', 'A power failure'], 'An insider already has legitimate access.'),
      mc('Which action reduces the attack surface?', ['Switching off an exposed service that is no longer needed', 'Adding test accounts', 'Opening more ports in the firewall', 'Sharing passwords'], 'Fewer entry points, fewer opportunities.'),
      { q: 'Several independent layers of protection form defence in ...', a: ['depth'], why: 'Defence in depth.' },
      mc('Which choice respects separation of duties?', ['The person who requests a payment does not approve it', 'One person both requests and approves', 'Everyone knows the account password', 'Approval is automatic'], 'A second, independent check is needed.')
    ],
    test: [
      mc('A hospital cannot access medical records because malware has encrypted its systems. Which property is hit first?', ['Availability', 'Confidentiality', 'Authenticity', 'Non-repudiation'], 'The records are not accessible when needed.'),
      mc('Personal data published online by an outsider violates:', ['Confidentiality', 'Availability', 'Integrity', 'Separation of duties'], 'Unauthorised access to information.'),
      mc('Which pair is correct?', ['Threat: ransomware; vulnerability: no backups', 'Threat: weak password; vulnerability: criminal', 'Asset: phishing; threat: server', 'Risk: firewall; asset: hacker'], 'Ransomware is the agent, the lack of backups is the weakness.'),
      mc('Attackers with mainly financial motives are typically:', ['Organised crime', 'Hacktivists', 'Internal auditors', 'Antivirus vendors'], 'Ransomware and fraud aim at profit.'),
      mc('Why do two controls based on the same cause of failure count as one?', ['They fail together, so they are not independent layers', 'They cost twice as much', 'They slow down the network', 'They are not allowed'], 'Defence in depth requires different layers.'),
      { q: 'Put an example of layered defence in order', words: ['email filter', 'MFA', 'EDR on the PC', 'backup'], why: 'From the first obstacle to recovery.' },
      { q: 'The set of points from which an entry can be attempted is the attack ...', a: ['surface'], why: 'Attack surface.' }
    ]
  });
  Object.assign(L.get('ja', ID), {
    summary: '[機密性|きみつせい]、[完全性|かんぜんせい]、[可用性|かようせい]。[資産|しさん]、[脅威|きょうい]、[脆弱性|ぜいじゃくせい]、リスク。[多層防御|たそうぼうぎょ]と[最小権限|さいしょうけんげん]。',
    objectives: ['CIAの[三要素|さんようそ]を、[具体的|ぐたいてき]な[例|れい]で[説明|せつめい]する', '[資産|しさん]、[脅威|きょうい]、[脆弱性|ぜいじゃくせい]、リスクを[区別|くべつ]する', '[多層防御|たそうぼうぎょ]と[最小権限|さいしょうけんげん]を[使|つか]う'],
    ex: [
      mc('[攻撃者|こうげきしゃ]が、[保管|ほかん]されている[振込|ふりこみ]の[金額|きんがく]をこっそり[変|か]えました。どの[性質|せいしつ]が[破|やぶ]られましたか。', ['[完全性|かんぜんせい]', '[機密性|きみつせい]', '[可用性|かようせい]', '[否認防止|ひにんぼうし]'], '[許可|きょか]なくデータが[変|か]えられたからです。'),
      mc('サイトに[入|はい]れなくなる[攻撃|こうげき]は、おもに[何|なに]に[影響|えいきょう]しますか。', ['[可用性|かようせい]', '[機密性|きみつせい]', '[完全性|かんぜんせい]', '[真正性|しんせいせい]'], '[必要|ひつよう]なときにサービスを[使|つか]えないからです。'),
      mc('[脆弱性|ぜいじゃくせい]は、どれですか。', ['セキュリティの[更新|こうしん]をしていないサーバー', '[犯罪|はんざい]グループ', '[顧客|こきゃく]データベース', '[経済的|けいざいてき]な[損失|そんしつ]'], '[使|つか]われる[弱|よわ]い[点|てん]です。ほかは、[脅威|きょうい]、[資産|しさん]、[影響|えいきょう]です。'),
      mc('[自分|じぶん]がした[行動|こうどう]を「していない」と[言|い]えないようにする[性質|せいしつ]は[何|なん]ですか。', ['[否認防止|ひにんぼうし]', '[機密性|きみつせい]', '[可用性|かようせい]', '[最小権限|さいしょうけんげん]'], '[署名|しょめい]やログなどの[信頼|しんらい]できる[証拠|しょうこ]に[基|もと]づきます。'),
      { q: '[仕事|しごと]に[必要|ひつよう]な[許可|きょか]だけを[与|あた]える[考|かんが]え[方|かた]を、[最小|さいしょう]（　）の[原則|げんそく]と[言|い]います。', a: ['権限', 'けんげん', 'kengen'], why: '[最小権限|さいしょうけんげん]（least privilege）です。' },
      { q: 'リスクの[流|なが]れを、[正|ただ]しい[順|じゅん]に[並|なら]べてください。', words: ['[脅威|きょうい]が', '[脆弱性|ぜいじゃくせい]を', '[使|つか]って', '[資産|しさん]に', '[害|がい]を', '[与|あた]える'], why: '[脅威|きょうい]が[脆弱性|ぜいじゃくせい]を[使|つか]って、[資産|しさん]に[害|がい]を[与|あた]えます。' },
      mc('「admin」のアカウントを[何人|なんにん]かで[使|つか]うと、なぜ[問題|もんだい]ですか。', ['ログで[個人|こじん]の[責任|せきにん]がわからなくなる', 'システムが[遅|おそ]くなる', '[暗号化|あんごうか]ができなくなる', '[可用性|かようせい]が[上|あ]がる'], '[誰|だれ]の[行動|こうどう]か[決|き]められないからです。'),
      mc('「[内部|ないぶ]の[人|ひと]」（insider）の[例|れい]は、どれですか。', ['[不満|ふまん]がある[社員|しゃいん]（[正|ただ]しいアクセスを[持|も]つ）', '[外|そと]のハクティビスト', 'メールで[広|ひろ]がるウイルス', '[停電|ていでん]'], '[内部|ないぶ]の[人|ひと]は、もう[正|ただ]しいアクセスを[持|も]っています。'),
      mc('[攻撃対象領域|こうげきたいしょうりょういき]を[小|ちい]さくするのは、どれですか。', ['もういらない、[外|そと]に[出|で]ているサービスを[止|と]める', 'テスト[用|よう]のアカウントを[増|ふ]やす', 'ファイアウォールのポートを[多|おお]く[開|あ]ける', 'パスワードを[共有|きょうゆう]する'], '[入|はい]り[口|ぐち]が[少|すく]ないほど、チャンスも[少|すく]なくなります。'),
      { q: '[別々|べつべつ]の[守|まも]りを[何|なん][層|そう]も[重|かさ]ねる[考|かんが]え[方|かた]を、（　）[防御|ぼうぎょ]と[言|い]います。', a: ['多層', 'たそう', 'tasou'], why: '[多層防御|たそうぼうぎょ]（defence in depth）です。' },
      mc('[役割|やくわり]の[分|わ]け[方|かた]（[職務分離|しょくむぶんり]）に[合|あ]うのは、どれですか。', ['[支払|しはら]いを[頼|たの]む[人|ひと]は、[承認|しょうにん]しない', '[一人|ひとり]が[頼|たの]んで、[承認|しょうにん]もする', 'みんなが[口座|こうざ]のパスワードを[知|し]っている', '[承認|しょうにん]が[自動|じどう]で[行|おこな]われる'], '[別|べつ]の[人|ひと]による、[二|ふた]つ[目|め]のチェックが[必要|ひつよう]です。')
    ],
    test: [
      mc('[病院|びょういん]のシステムがマルウェアで[暗号化|あんごうか]され、カルテに[入|はい]れません。[最初|さいしょ]に[傷|きず]つくのは、どの[性質|せいしつ]ですか。', ['[可用性|かようせい]', '[機密性|きみつせい]', '[真正性|しんせいせい]', '[否認防止|ひにんぼうし]'], 'カルテが[必要|ひつよう]なときに[使|つか]えないからです。'),
      mc('[知|し]らない[人|ひと]が[個人|こじん]データをネットに[出|だ]しました。[破|やぶ]られるのは、どれですか。', ['[機密性|きみつせい]', '[可用性|かようせい]', '[完全性|かんぜんせい]', '[職務分離|しょくむぶんり]'], '[許可|きょか]のない[人|ひと]が[情報|じょうほう]を[見|み]たからです。'),
      mc('[正|ただ]しい[組|く]み[合|あ]わせは、どれですか。', ['[脅威|きょうい]: ランサムウェア、[脆弱性|ぜいじゃくせい]: バックアップがないこと', '[脅威|きょうい]: [弱|よわ]いパスワード、[脆弱性|ぜいじゃくせい]: [犯罪者|はんざいしゃ]', '[資産|しさん]: フィッシング、[脅威|きょうい]: サーバー', 'リスク: ファイアウォール、[資産|しさん]: ハッカー'], 'ランサムウェアが[原因|げんいん]で、バックアップがないことが[弱|よわ]い[点|てん]です。'),
      mc('おもにお[金|かね]が[目的|もくてき]の[攻撃者|こうげきしゃ]は、ふつう[誰|だれ]ですか。', ['[組織犯罪|そしきはんざい]', 'ハクティビスト', '[内部|ないぶ]の[監査人|かんさにん]', 'ウイルス[対策|たいさく]ソフトの[会社|かいしゃ]'], 'ランサムウェアや[詐欺|さぎ]は、お[金|かね]が[目的|もくてき]です。'),
      mc('[同|おな]じ[理由|りゆう]で[止|と]まる[二|ふた]つの[対策|たいさく]が、なぜ[一|ひと]つと[同|おな]じですか。', ['いっしょに[止|と]まるので、[別々|べつべつ]の[層|そう]ではないから', '[費用|ひよう]が[二倍|にばい]だから', 'ネットワークが[遅|おそ]くなるから', '[許可|きょか]されていないから'], '[多層防御|たそうぼうぎょ]には、[違|ちが]う[層|そう]が[必要|ひつよう]です。'),
      { q: '[層|そう]になった[守|まも]りの[例|れい]を、[順|じゅん]に[並|なら]べてください。', words: ['メールフィルター', 'MFA', 'パソコンのEDR', 'バックアップ'], why: '[最初|さいしょ]の[壁|かべ]から、[元|もと]に[戻|もど]すまでの[順|じゅん]です。' },
      { q: '[入|はい]ろうとできる[場所|ばしょ]のすべては、[攻撃対象|こうげきたいしょう]（　）です。', a: ['領域', 'りょういき', 'ryouiki'], why: '[攻撃対象領域|こうげきたいしょうりょういき]（attack surface）です。' }
    ]
  });
})(window.ST = window.ST || {});
