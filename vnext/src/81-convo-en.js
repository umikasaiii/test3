/* vNext M5 — English Conversation Lab: 8 scenari (A2 → C1). Inglese britannico. I campi `any` sono regex (flag i). */
(function (ST) {
  'use strict';
  const Cv = ST.sma.convo;

  /* 1 — A2: caffè */
  Cv.add({ id: 'cv-en-a2-cafe', lang: 'en', level: 'A2', area: 'Caffè e negozi', title: 'Al caffè: ordinare e pagare', setting: 'Un piccolo caffè in centro', start: 'n1', nodes: {
    n1: { npc: { t: 'Hi there! What can I get you?', tr: 'Salve! Cosa le porto?' }, task: { kind: 'choose', q: 'Ordina una bevanda.', opts: [
      { t: 'I’d like a large cappuccino, please.', q: 3, why: '«I’d like…» è la forma cortese e naturale per ordinare.', next: 'n2' },
      { t: 'Can I have a coffee, please?', q: 2, why: 'Va bene e cortese, ma non dici quale caffè: l’interlocutore dovrà chiedere ancora.', next: 'n2' },
      { t: 'Give me a big coffee.', q: 1, why: '«Give me…» suona brusco, quasi un ordine. Meglio «I’d like…» o «Can I have…, please?».', next: 'n1b' }] } },
    n1b: { npc: { t: 'Sorry, I didn’t catch that. What would you like to drink?', tr: 'Scusi, non ho capito. Cosa desidera da bere?' }, task: { kind: 'order', prompt: 'Costruisci una frase cortese per ordinare un tè piccolo.', words: ['I’d', 'like', 'a', 'small', 'tea', 'please'], accept: ['I’d like a small tea please', 'I would like a small tea please'], model: 'I’d like a small tea, please.', next: 'n2' } },
    n2: { npc: { t: 'Lovely. Is that for here or to take away?', tr: 'Benissimo. Lo prende qui o da portare via?' }, listen: true, task: { kind: 'choose', q: 'Rispondi alla domanda.', opts: [
      { t: 'To take away, please.', q: 3, why: '«To take away» (britannico) = da portare via. Risposta diretta e cortese.', next: 'n3' },
      { t: 'For here, please. I’ll sit by the window.', q: 3, why: 'Risposta corretta e naturale: scegli la prima opzione e aggiungi un dettaglio.', next: 'n3' },
      { t: 'Yes, please.', q: 1, why: 'La domanda offre due alternative («here or take away»): «yes» non risponde.', next: 'n3' }] } },
    n3: { npc: { t: 'That’s £3.80. Would you like anything else? We have fresh cake today.', tr: 'Sono 3,80 sterline. Desidera altro? Oggi abbiamo torte fresche.' }, task: { kind: 'produce', prompt: 'Ordina una fetta di torta e chiedi se puoi pagare con la carta.', must: [
      { id: 'cake', label: 'ordinare la torta', any: ['cake', 'brownie', 'muffin', 'slice', 'biscuit'] },
      { id: 'card', label: 'chiedere di pagare con carta', any: ['card', 'contactless'] }], min: 6, model: 'Yes, I’d like a slice of chocolate cake, please. Can I pay by card?', next: 'n4' } },
    n4: { npc: { t: 'Sorry, the card machine isn’t working at the moment. Do you have any cash?', tr: 'Mi dispiace, il POS al momento non funziona. Ha dei contanti?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista: come reagisci?', opts: [
      { t: 'Yes, I have some cash. Here you are.', q: 3, why: 'Risposta chiara e cortese; «Here you are» si dice porgendo qualcosa.', next: 'n5' },
      { t: 'No, I don’t. Is there a cash machine nearby?', q: 3, why: 'Spieghi il problema e chiedi aiuto: ottima strategia.', next: 'n5b' },
      { t: 'No money. Bye.', q: 0, why: 'Troppo brusco e poco informativo. Spiega il problema e chiedi una soluzione.', next: 'n5b' }] } },
    n5b: { npc: { t: 'There’s a cash machine next to the bank, just outside. Turn left.', tr: 'C’è un bancomat accanto alla banca, qui fuori. Giri a sinistra.' }, listen: true, task: { kind: 'choose', q: 'Dov’è il bancomat?', opts: [
      { t: 'Accanto alla banca, appena fuori, a sinistra.', q: 3, why: '«next to the bank, just outside, turn left».', next: 'n5' },
      { t: 'Dentro il caffè, a destra.', q: 0, why: 'Ha detto «just outside» (fuori) e «left» (sinistra).', next: 'n5' },
      { t: 'Davanti alla fermata dell’autobus.', q: 1, why: 'Non ha nominato la fermata: ha detto «next to the bank».', next: 'n5' }] } },
    n5: { npc: { t: 'Thank you. Here’s your change. Would you like a receipt?', tr: 'Grazie. Ecco il resto. Vuole lo scontrino?' }, task: { kind: 'produce', prompt: 'Di’ che non ti serve lo scontrino e chiedi dov’è il bagno.', must: [
      { id: 'no', label: 'rifiutare lo scontrino', any: ['no,? thanks', 'no,? thank you', 'don[’\']?t need', 'do not need', 'no need', 'not necessary'] },
      { id: 'wc', label: 'chiedere dov’è il bagno', any: ['toilet', 'restroom', 'bathroom', 'loo\\b', 'washroom'] }], min: 6, model: 'No, thank you, I don’t need a receipt. Where is the toilet, please?', next: 'n6' } },
    n6: { npc: { t: 'It’s at the back, on the right. Have a nice day!', tr: 'In fondo, a destra. Buona giornata!' }, end: true }
  } });

  /* 2 — A2: indicazioni */
  Cv.add({ id: 'cv-en-a2-directions', lang: 'en', level: 'A2', area: 'Viaggi e orientamento', title: 'Per strada: chiedere indicazioni', setting: 'Una cittadina inglese', start: 'n1', nodes: {
    n1: { npc: { t: 'Hello! Can I help you? You look a bit lost.', tr: 'Salve! Posso aiutarla? Sembra un po’ perso.' }, task: { kind: 'choose', q: 'Chiedi la strada per la stazione.', opts: [
      { t: 'Yes, thanks. Could you tell me the way to the station, please?', q: 3, why: '«Could you tell me the way to…?» è cortese e naturale con uno sconosciuto.', next: 'n2' },
      { t: 'Yes, is there a bank near here?', q: 2, why: 'Corretto, ma stai chiedendo un’altra cosa: la stazione.', next: 'n2' },
      { t: 'Station. Where? Quick.', q: 1, why: 'Mancano il verbo e la cortesia. Con uno sconosciuto usa «Excuse me, where is…?».', next: 'n1b' }] } },
    n1b: { npc: { t: 'Sorry? Could you say that again, please?', tr: 'Come? Può ripetere, per favore?' }, task: { kind: 'order', prompt: 'Costruisci la frase: «Potrebbe dirmi la strada per la stazione?»', words: ['Could', 'you', 'tell', 'me', 'the', 'way', 'to', 'the', 'station'], accept: ['Could you tell me the way to the station', 'Could you tell me the way to the station?'], model: 'Could you tell me the way to the station?', next: 'n2' } },
    n2: { npc: { t: 'Go straight on, take the second left, and it’s next to the post office. It’s about five minutes on foot.', tr: 'Vada dritto, prenda la seconda a sinistra ed è accanto all’ufficio postale. Sono circa cinque minuti a piedi.' }, listen: true, task: { kind: 'choose', q: 'Come si arriva alla stazione?', opts: [
      { t: 'Dritto, seconda a sinistra, accanto alla posta.', q: 3, why: '«straight on, second left, next to the post office».', next: 'n3' },
      { t: 'Prima a sinistra, poi cinque minuti.', q: 1, why: 'Ha detto «second left» (la seconda), non la prima.', next: 'n3b' },
      { t: 'Dritto, seconda a destra, accanto alla banca.', q: 0, why: '«left» = sinistra e «post office» = ufficio postale.', next: 'n3b' }] } },
    n3b: { npc: { t: 'Let me say it again. Straight on, then the SECOND road on the left.', tr: 'Glielo ripeto. Dritto, poi la SECONDA strada a sinistra.' }, listen: true, task: { kind: 'choose', q: 'Quale strada devi prendere?', opts: [
      { t: 'La seconda a sinistra.', q: 3, why: '«the second road on the left».', next: 'n3' },
      { t: 'La seconda a destra.', q: 1, why: '«left» è sinistra, «right» è destra.', next: 'n3' },
      { t: 'La prima a destra.', q: 0, why: 'Ha detto «second» e «left».', next: 'n3' }] } },
    n3: { npc: { t: 'Do you want to walk or take the bus?', tr: 'Vuole andare a piedi o prendere l’autobus?' }, task: { kind: 'produce', prompt: 'Di’ che preferisci andare a piedi e chiedi quanto ci vuole.', must: [
      { id: 'walk', label: 'preferire di andare a piedi', any: ['walk', 'on foot'] },
      { id: 'time', label: 'chiedere quanto ci vuole', any: ['how long', 'how far', 'how many minutes', 'how much time'] }], min: 5, model: 'I’d like to walk, I think. How long does it take?', next: 'n4' } },
    n4: { npc: { t: 'By the way, the main road is closed to cars today because of a street market. Is that a problem for you?', tr: 'A proposito, oggi la strada principale è chiusa alle auto per un mercato. È un problema per lei?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista: cosa rispondi?', opts: [
      { t: 'No, that’s fine. I can walk around the market.', q: 3, why: 'Hai capito: la strada è chiusa alle auto, a piedi non è un problema.', next: 'n5' },
      { t: 'Oh no! Is there another way?', q: 2, why: 'Plausibile, ma a piedi si può passare.', next: 'n5' },
      { t: 'Yes, the market is closed. I go by bus.', q: 0, why: 'È la strada a essere chiusa alle auto; il mercato è aperto.', next: 'n5b' }] } },
    n5b: { npc: { t: 'No, the market is open. It’s the road that is closed to cars. You can walk through without any problem.', tr: 'No, il mercato è aperto. È la strada a essere chiusa alle auto. A piedi si passa senza problemi.' }, listen: true, task: { kind: 'choose', q: 'Cosa è chiuso e cosa no?', opts: [
      { t: 'La strada è chiusa alle auto; a piedi si passa.', q: 3, why: '«the road is closed to cars… you can walk through».', next: 'n5' },
      { t: 'Il mercato è chiuso e non si passa.', q: 0, why: 'Ha detto il contrario: «the market is open».', next: 'n5' },
      { t: 'Tutto è chiuso oggi.', q: 1, why: 'Solo la strada è chiusa alle auto.', next: 'n5' }] } },
    n5: { npc: { t: 'Great. Is there anything else I can help you with?', tr: 'Bene. Posso aiutarla in altro modo?' }, task: { kind: 'produce', prompt: 'Ringrazia e chiedi se c’è un caffè vicino alla stazione.', must: [
      { id: 'thx', label: 'ringraziare', any: ['thank', 'thanks', 'cheers'] },
      { id: 'cafe', label: 'chiedere di un caffè', any: ['caf[eé]', 'coffee'] }], min: 6, model: 'No, thank you very much. Is there a café near the station?', next: 'n6' } },
    n6: { npc: { t: 'Yes, there’s one opposite the station. It’s called the Blue Door. Enjoy your day!', tr: 'Sì, ce n’è uno di fronte alla stazione. Si chiama Blue Door. Buona giornata!' }, listen: true, task: { kind: 'choose', q: 'Dov’è il caffè?', opts: [
      { t: 'Di fronte alla stazione.', q: 3, why: '«opposite» = di fronte.', next: 'n7' },
      { t: 'Accanto al museo.', q: 1, why: 'Non ha nominato il museo.', next: 'n7' },
      { t: 'Dietro l’ufficio postale.', q: 0, why: 'Ha detto «opposite the station».', next: 'n7' }] } },
    n7: { npc: { t: 'Bye now, and good luck!', tr: 'Arrivederci e buona fortuna!' }, end: true }
  } });

  /* 3 — B1: albergo */
  Cv.add({ id: 'cv-en-b1-hotel', lang: 'en', level: 'B1', area: 'Viaggi e alloggio', title: 'In albergo: un problema in camera', setting: 'Telefonata alla reception, sera', start: 'n1', nodes: {
    n1: { npc: { t: 'Good evening, reception. How can I help you?', tr: 'Buonasera, reception. Come posso aiutarla?' }, task: { kind: 'choose', q: 'Sei in camera: l’aria condizionata non funziona.', opts: [
      { t: 'Hello, this is room 214. I’m afraid there’s a problem with the air conditioning.', q: 3, why: '«I’m afraid there’s a problem…» è un modo cortese e formale per introdurre un reclamo.', next: 'n2' },
      { t: 'Hi, my air conditioning doesn’t work. Can you help me?', q: 2, why: 'Chiaro e cortese, ma non dici il numero della camera e il tono è informale.', next: 'n2' },
      { t: 'Fix the air conditioning. Now!', q: 1, why: 'Un ordine brusco: il reclamo è più efficace se resti cortese.', next: 'n2b' }] } },
    n2b: { npc: { t: 'I’m sorry about that. Could you tell me your room number and what exactly is wrong?', tr: 'Mi dispiace. Può dirmi il numero della camera e cosa non va esattamente?' }, task: { kind: 'produce', prompt: 'Rispondi con il numero della camera (214) e il problema (aria condizionata guasta).', must: [
      { id: 'room', label: 'numero della camera', any: ['\\b\\d{2,4}\\b', 'room (?:number )?\\w+'] },
      { id: 'prob', label: 'il problema', any: ['air.?con', 'conditioning', 'too (?:hot|cold)', 'not working', 'isn[’\']?t working', 'broken', 'doesn[’\']?t work'] }], min: 7, model: 'I’m sorry. I’m in room 214 and the air conditioning isn’t working.', next: 'n2' } },
    n2: { npc: { t: 'I’m sorry to hear that. I can send a technician, but he can’t come until after ten tonight. Or we could move you to another room. What would you prefer?', tr: 'Mi dispiace. Posso mandare un tecnico, ma non può venire prima delle dieci di stasera. Oppure possiamo spostarla in un’altra camera. Cosa preferisce?' }, listen: true, task: { kind: 'choose', q: 'Scegli una delle due soluzioni.', opts: [
      { t: 'I’d rather move to another room, if that’s possible.', q: 3, why: '«I’d rather…» esprime una preferenza; «if that’s possible» addolcisce la richiesta.', next: 'n3a' },
      { t: 'I’ll wait for the technician, but could he come a bit earlier?', q: 3, why: 'Accetti una delle opzioni e fai una richiesta cortese con «could».', next: 'n3b' },
      { t: 'I don’t know. Whatever.', q: 1, why: 'Non scegli e sembri indifferente: scegli una delle due opzioni.', next: 'n3b' }] } },
    n3a: { npc: { t: 'Certainly, I’ll arrange it. Would you like some help with your luggage?', tr: 'Certamente, provvedo subito. Vuole una mano con i bagagli?' }, task: { kind: 'produce', prompt: 'Accetta, di’ che hai due valigie pesanti e chiedi se la nuova camera è tranquilla.', must: [
      { id: 'bags', label: 'le valigie', any: ['luggage', 'bags', 'suitcases?'] },
      { id: 'quiet', label: 'chiedere se è tranquilla', any: ['quiet', 'noise', 'noisy', 'peaceful'] }], min: 8, model: 'Yes, please. I have two heavy bags. Is the new room quiet?', next: 'n4' } },
    n3b: { npc: { t: 'I’ll ask him to come as soon as possible. In the meantime, can I send up some cold water?', tr: 'Gli chiederò di venire il prima possibile. Nel frattempo posso mandarle dell’acqua fresca?' }, task: { kind: 'produce', prompt: 'Accetta con cortesia e chiedi di essere avvisato quando il tecnico sta arrivando.', must: [
      { id: 'yes', label: 'accettare con cortesia', any: ['yes', 'please', 'thank', 'that would be', 'kind'] },
      { id: 'notify', label: 'chiedere di essere avvisato', any: ['let me know', 'call me', 'phone me', 'tell me', 'knock'] }], min: 8, model: 'Yes, please, that would be kind. Could you let me know when he is on his way?', next: 'n4' } },
    n4: { npc: { t: 'Excuse me, is this the first time you’ve stayed with us?', tr: 'Mi scusi, è la prima volta che soggiorna da noi?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista: rispondi.', opts: [
      { t: 'Yes, it’s my first time here, and so far I’ve enjoyed it.', q: 3, why: 'Risposta pertinente con un dettaglio; «so far» = finora.', next: 'n5' },
      { t: 'No, I stayed here two years ago.', q: 3, why: 'Risposta corretta: passato semplice con «ago».', next: 'n5' },
      { t: 'No, thank you, I don’t want breakfast.', q: 1, why: 'Non risponde alla domanda (non si parlava di colazione).', next: 'n5' }] } },
    n5: { npc: { t: 'Thank you. We’ll bring a fan and a bottle of water to your room now, and the technician will be there at about a quarter to eleven.', tr: 'Grazie. Le portiamo subito un ventilatore e una bottiglia d’acqua e il tecnico sarà da lei verso le undici meno un quarto.' }, listen: true, task: { kind: 'choose', q: 'Cosa porteranno subito?', opts: [
      { t: 'Un ventilatore e dell’acqua.', q: 3, why: '«a fan and a bottle of water».', next: 'n6' },
      { t: 'Un tecnico e la colazione.', q: 1, why: 'Il tecnico arriverà più tardi e non si parla di colazione.', next: 'n6' },
      { t: 'Una nuova chiave.', q: 0, why: 'Non è stata nominata nessuna chiave.', next: 'n6' }] } },
    n6: { npc: { t: 'Is there anything else you need?', tr: 'Ha bisogno d’altro?' }, task: { kind: 'order', prompt: 'Costruisci la richiesta: «Potrebbe anche darmi un cuscino in più, per favore?»', words: ['Could', 'you', 'also', 'give', 'me', 'an', 'extra', 'pillow', 'please'], accept: ['Could you also give me an extra pillow please', 'Could you also give me an extra pillow please?', 'Could you give me an extra pillow as well please'], model: 'Could you also give me an extra pillow, please?', next: 'n7' } },
    n7: { npc: { t: 'Of course. Thank you for your patience, and good night.', tr: 'Certamente. Grazie per la pazienza e buonanotte.' }, end: true }
  } });

  /* 4 — B1: appuntamento (solo organizzazione) */
  Cv.add({ id: 'cv-en-b1-appointment', lang: 'en', level: 'B1', area: 'Servizi', title: 'Telefonare per prenotare un appuntamento', setting: 'Telefonata a un centro medico: solo organizzazione dell’appuntamento', start: 'n1', nodes: {
    n1: { npc: { t: 'Good morning, Riverside Health Centre. How can I help you?', tr: 'Buongiorno, Riverside Health Centre. Come posso aiutarla?' }, task: { kind: 'choose', q: 'Vuoi prenotare un appuntamento con il dottor Evans.', opts: [
      { t: 'Good morning. I’d like to make an appointment with Dr Evans, please.', q: 3, why: 'Formale e preciso: dici cosa vuoi e con chi.', next: 'n2' },
      { t: 'Hello, can I book an appointment, please?', q: 2, why: 'Cortese, ma non indichi con chi: la segretaria dovrà chiederlo.', next: 'n2' },
      { t: 'I want doctor tomorrow.', q: 0, why: 'Manca l’articolo e il verbo è troppo diretto: usa «I’d like an appointment with…».', next: 'n1b' }] } },
    n1b: { npc: { t: 'I’m sorry, could you tell me who you would like to see and which day suits you?', tr: 'Mi scusi, può dirmi con chi desidera l’appuntamento e quale giorno le va bene?' }, task: { kind: 'produce', prompt: 'Di’ che vorresti un appuntamento con il dottor Evans giovedì.', must: [
      { id: 'who', label: 'con chi (Dr Evans)', any: ['\\bDr\\b', 'doctor', 'nurse', '\\bGP\\b'] },
      { id: 'day', label: 'quale giorno', any: ['tomorrow', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'next week', 'this week'] }], min: 6, model: 'I’d like an appointment with Dr Evans on Thursday, please.', next: 'n2' } },
    n2: { npc: { t: 'Let me check. Dr Evans has a free slot on Thursday at ten past nine, or on Friday at half past two. Which would suit you better?', tr: 'Controllo. Il dottor Evans ha un posto giovedì alle nove e dieci, oppure venerdì alle due e mezza. Quale preferisce?' }, listen: true, task: { kind: 'choose', q: 'Scegli un orario realmente disponibile.', opts: [
      { t: 'Thursday at ten past nine would be perfect, thank you.', q: 3, why: 'Scegli un’opzione offerta e ringrazi.', next: 'n3' },
      { t: 'Friday at half past two, please. Is that all right?', q: 3, why: 'Anche questa è un’opzione offerta; «Is that all right?» chiede conferma.', next: 'n3' },
      { t: 'Thursday at half past two, please.', q: 0, why: 'Giovedì c’è solo alle nove e dieci; alle due e mezza è venerdì.', next: 'n3b' }] } },
    n3b: { npc: { t: 'I’m afraid there isn’t a slot on Thursday at half past two. We have Thursday at ten past nine, or Friday at half past two.', tr: 'Mi dispiace, giovedì alle due e mezza non c’è posto. Abbiamo giovedì alle nove e dieci o venerdì alle due e mezza.' }, listen: true, task: { kind: 'choose', q: 'Quali sono le due possibilità?', opts: [
      { t: 'Giovedì alle 9:10 o venerdì alle 14:30.', q: 3, why: '«Thursday at ten past nine, or Friday at half past two».', next: 'n3' },
      { t: 'Giovedì alle 14:30 o venerdì alle 9:10.', q: 0, why: 'Gli orari sono invertiti.', next: 'n3' },
      { t: 'Solo venerdì alle 14:30.', q: 1, why: 'Ci sono due possibilità, non una.', next: 'n3' }] } },
    n3: { npc: { t: 'Can I take your full name and date of birth, please?', tr: 'Posso avere nome completo e data di nascita, per favore?' }, task: { kind: 'produce', prompt: 'Di’ un nome (inventato) e una data di nascita.', must: [
      { id: 'name', label: 'nome', any: ['my name is', 'I[’\']m \\w+', 'I am \\w+', 'this is'] },
      { id: 'dob', label: 'data di nascita', any: ['\\bborn\\b', 'birth', '\\b(?:19|20)\\d\\d\\b'] }], min: 6, model: 'My name is Marco Rossi and I was born on 12 May 1990.', next: 'n4' } },
    n4: { npc: { t: 'Have you been to our centre before?', tr: 'È già stato nel nostro centro?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista: rispondi.', opts: [
      { t: 'Yes, I was here last year, so I should be on your system.', q: 3, why: 'Risposta chiara con passato semplice («was») e «last year».', next: 'n5' },
      { t: 'No, this is my first time. Do I need to bring anything?', q: 3, why: 'Rispondi e fai una domanda utile per organizzarti.', next: 'n5' },
      { t: 'I go before.', q: 1, why: 'Per un’azione conclusa nel passato serve il passato: «I was here before».', next: 'n5' }] } },
    n5: { npc: { t: 'Please arrive ten minutes early and bring a form of photo ID. If you can’t come, please call us at least twenty-four hours before.', tr: 'Arrivi dieci minuti prima e porti un documento con foto. Se non può venire, ci telefoni almeno ventiquattro ore prima.' }, listen: true, task: { kind: 'choose', q: 'Cosa devi fare?', opts: [
      { t: 'Arrivare 10 minuti prima con un documento con foto; disdire almeno 24 ore prima.', q: 3, why: 'Comprende tutte le istruzioni.', next: 'n6' },
      { t: 'Arrivare 10 minuti prima; disdire anche all’ultimo momento.', q: 1, why: 'Ha chiesto di avvisare almeno 24 ore prima.', next: 'n6' },
      { t: 'Arrivare mezz’ora dopo, senza documenti.', q: 0, why: 'Ha detto «ten minutes early» e «photo ID».', next: 'n6' }] } },
    n6: { npc: { t: 'Is there anything else I can help you with?', tr: 'Posso aiutarla in altro?' }, task: { kind: 'produce', prompt: 'Ringrazia, ripeti giorno e ora dell’appuntamento (giovedì alle nove e dieci) e saluta.', must: [
      { id: 'thx', label: 'ringraziare', any: ['thank', 'thanks'] },
      { id: 'day', label: 'ripetere il giorno', any: ['thursday', 'friday'] },
      { id: 'time', label: 'ripetere l’ora', any: ['nine', 'ten past', 'half past', '\\b9\\b', '\\b2\\b', 'two'] }], min: 8, model: 'That’s all, thank you. So that’s Thursday at ten past nine. Goodbye.', next: 'n7' } },
    n7: { npc: { t: 'That’s right. We’ll see you then. Goodbye!', tr: 'Esatto. A presto, allora. Arrivederci!' }, end: true }
  } });

  /* 5 — B1: ristorante */
  Cv.add({ id: 'cv-en-b1-restaurant', lang: 'en', level: 'B1', area: 'Ristorante', title: 'Al ristorante: allergie e preferenze', setting: 'Un ristorante, cena per due', start: 'n1', nodes: {
    n1: { npc: { t: 'Good evening. Do you have a reservation?', tr: 'Buonasera. Avete una prenotazione?' }, task: { kind: 'choose', q: 'Chiedi un tavolo per due.', opts: [
      { t: 'Yes, a table for two under the name Rossi, at eight o’clock.', q: 3, why: 'Completo: prenotazione, persone, nome e ora.', next: 'n2' },
      { t: 'No, but do you have a table for two, please?', q: 3, why: 'Onesto e cortese: «Do you have a table for…?» è la formula naturale.', next: 'n2' },
      { t: 'Table two. Now.', q: 0, why: 'Senza verbo né cortesia suona maleducato.', next: 'n1b' }] } },
    n1b: { npc: { t: 'I’m sorry, could you repeat that? How many people are you?', tr: 'Mi scusi, può ripetere? In quanti siete?' }, task: { kind: 'order', prompt: 'Costruisci: «Vorremmo un tavolo per due, per favore.»', words: ['We', 'would', 'like', 'a', 'table', 'for', 'two', 'please'], accept: ['We would like a table for two please', 'We’d like a table for two please'], model: 'We would like a table for two, please.', next: 'n2' } },
    n2: { npc: { t: 'Lovely, please follow me. Here’s the menu. Can I get you something to drink?', tr: 'Bene, mi segua. Ecco il menù. Posso portarvi qualcosa da bere?' }, task: { kind: 'produce', prompt: 'Chiedi una bottiglia d’acqua naturale e di’ che vi servono ancora alcuni minuti per scegliere.', must: [
      { id: 'water', label: 'l’acqua', any: ['water'] },
      { id: 'time', label: 'qualche minuto per decidere', any: ['minutes?', 'moment', 'bit longer', 'few more'] }], min: 8, model: 'Could we have a bottle of still water, please? We need a few minutes to decide.', next: 'n3' } },
    n3: { npc: { t: 'Of course. Are there any food allergies or dietary requirements I should know about?', tr: 'Certo. Ci sono allergie alimentari o esigenze dietetiche che dovrei conoscere?' }, task: { kind: 'produce', prompt: 'Di’ che sei allergico alle noci e che il tuo amico è vegetariano.', avoid: [{ any: ['allergic (?:of|with|at|on)\\b'], why: 'Si dice «allergic to».' }], must: [
      { id: 'nuts', label: 'allergia alle noci', any: ['nuts?\\b', 'peanuts?'] },
      { id: 'allergy', label: 'dire che sei allergico', any: ['allerg'] },
      { id: 'veg', label: 'l’amico è vegetariano', any: ['vegetarian', 'veggie'] }], min: 8, model: 'I’m allergic to nuts, and my friend is vegetarian.', next: 'n4' } },
    n4: { npc: { t: 'Thank you for telling me. The mushroom risotto is vegetarian, but I’m afraid the pesto on the pasta contains pine nuts. The sea bass is nut-free, and so is the vegetable curry.', tr: 'Grazie per avermelo detto. Il risotto ai funghi è vegetariano, ma purtroppo il pesto sulla pasta contiene pinoli. Il branzino non contiene frutta a guscio, e nemmeno il curry di verdure.' }, listen: true, task: { kind: 'choose', q: 'Cosa possono ordinare tu (allergico alle noci) e il tuo amico (vegetariano)?', opts: [
      { t: 'Io il branzino, il mio amico il risotto ai funghi.', q: 3, why: 'Il branzino è senza noci; il risotto è vegetariano.', next: 'n5' },
      { t: 'Il risotto per tutti e due.', q: 1, why: 'Ha detto che il risotto è vegetariano, ma non che sia privo di noci.', next: 'n5b' },
      { t: 'Io la pasta al pesto, il mio amico il curry.', q: 0, why: 'Il pesto contiene pinoli: pericoloso per chi è allergico.', next: 'n5b' }] } },
    n5b: { npc: { t: 'Just to be safe: are you sure about your choice? Do you have any questions about the dishes?', tr: 'Per sicurezza: è sicuro della scelta? Ha domande sui piatti?' }, listen: true, task: { kind: 'choose', q: 'Come rispondi con attenzione all’allergia?', opts: [
      { t: 'Can you check with the chef whether the risotto is nut-free?', q: 3, why: 'Con un’allergia è giusto chiedere conferma allo chef.', next: 'n5' },
      { t: 'No, thank you, I’ll have the sea bass instead.', q: 3, why: 'Scegli il piatto che sai essere sicuro.', next: 'n5' },
      { t: 'Yes, I’ll take the pesto anyway.', q: 0, why: 'Il pesto contiene pinoli: con un’allergia non è una scelta sicura.', next: 'n5' }] } },
    n5: { npc: { t: 'I’m very sorry, but the dish you chose has just run out. What would you like to do?', tr: 'Mi dispiace molto, ma il piatto che avete scelto è appena finito. Cosa volete fare?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista: reagisci.', opts: [
      { t: 'That’s a shame. What would you recommend that is nut-free?', q: 3, why: '«What would you recommend?» + il vincolo dell’allergia.', next: 'n6' },
      { t: 'Never mind. Could I have the vegetable curry instead, if it’s nut-free?', q: 3, why: 'Soluzione concreta e attenta all’allergia.', next: 'n6' },
      { t: 'Then give me my money back.', q: 0, why: 'Non hai ancora pagato e il tono è aggressivo.', next: 'n6' }] } },
    n6: { npc: { t: 'Here we are. How is everything? Are you enjoying your meal?', tr: 'Ecco a voi. Com’è tutto? Vi piace il pasto?' }, task: { kind: 'produce', prompt: 'Rispondi che è delizioso e chiedi il conto.', must: [
      { id: 'nice', label: 'dire che è buono', any: ['delicious', 'lovely', 'great', 'excellent', 'very good', 'really good', 'tasty'] },
      { id: 'bill', label: 'chiedere il conto', any: ['bill', 'check\\b'] }], min: 8, model: 'Yes, it’s delicious, thank you. Could we have the bill, please?', next: 'n7' } },
    n7: { npc: { t: 'Certainly. I’ll bring it right away. Thank you for dining with us.', tr: 'Certamente. Lo porto subito. Grazie di aver cenato da noi.' }, end: true }
  } });

  /* 6 — B2: colloquio */
  Cv.add({ id: 'cv-en-b2-interview', lang: 'en', level: 'B2', area: 'Lavoro', title: 'Colloquio di lavoro: anche una domanda scomoda', setting: 'Colloquio per un ruolo da coordinatore di progetto', start: 'n1', nodes: {
    n1: { npc: { t: 'Good morning, and thank you for coming in. Could you start by telling us a little about yourself and your current role?', tr: 'Buongiorno e grazie di essere venuto. Può iniziare parlandoci un po’ di sé e del suo ruolo attuale?' }, task: { kind: 'produce', prompt: 'Presentati: di’ che sei coordinatore di progetto da tre anni (usa «for») e cosa fai.', avoid: [{ any: ['\\bsince (?:three|3) years\\b'], why: 'Con una durata si usa «for».' }], must: [
      { id: 'role', label: 'il tuo ruolo', any: ['coordinator', 'manager', 'developer', 'analyst', 'engineer', 'designer', 'work(?:ing)? as', 'I[’\']m an? '] },
      { id: 'dur', label: 'da quanto tempo (for + durata)', any: ['\\bfor (?:about |almost |over |nearly )?\\w+ (?:years|months)\\b', '\\b(?:two|three|four|five|six|\\d+) years\\b'] },
      { id: 'what', label: 'cosa fai', any: ['manage', 'organi[sz]e', 'coordinate', 'plan', 'work with', 'responsible', 'lead', 'handle'] }], min: 12, model: 'I’m a project coordinator and I have been working in a logistics company for three years. I manage schedules and work with suppliers.', next: 'n2' } },
    n2: { npc: { t: 'That sounds like relevant experience. Our team is small, about six people, and deadlines are tight. What attracted you to this position?', tr: 'Sembra un’esperienza pertinente. Il nostro team è piccolo, circa sei persone, e le scadenze sono strette. Cosa l’ha attratta di questa posizione?' }, listen: true, task: { kind: 'choose', q: 'Scegli la risposta più efficace.', opts: [
      { t: 'I was attracted by the chance to lead a team, and your focus on sustainability matches my values.', q: 3, why: 'Specifica e collegata al ruolo e all’azienda; «matches my values» è un’espressione utile.', next: 'n3' },
      { t: 'I like your company. It is a good company.', q: 2, why: 'Cortese ma generica e ripetitiva: dai ragioni concrete.', next: 'n3' },
      { t: 'I’m interested in the salary and the holidays.', q: 1, why: 'Onesta, ma da sola dà l’impressione che conti solo il compenso. Parla anche del lavoro.', next: 'n3b' }] } },
    n3b: { npc: { t: 'I see. And beyond the benefits, what about the work itself would motivate you?', tr: 'Capisco. E oltre ai benefit, cosa del lavoro in sé la motiverebbe?' }, task: { kind: 'produce', prompt: 'Rimedia: parla di cosa ti motiva nel lavoro (progetti, team, imparare).', must: [
      { id: 'work', label: 'aspetto concreto del lavoro', any: ['team', 'project', 'challenge', 'learn', 'develop', 'grow', 'responsibilit'] },
      { id: 'motive', label: 'cosa ti motiva', any: ['motivat', 'excit', 'enjoy', 'passion', 'keen', 'love'] }], min: 12, model: 'Beyond the benefits, I’m really excited by the chance to lead projects and to learn from an experienced team.', next: 'n4' } },
    n3: { npc: { t: 'Good. Let’s talk about your strengths. Could you give me an example of a time when you solved a problem at work?', tr: 'Bene. Parliamo dei suoi punti di forza. Può farmi un esempio di una volta in cui ha risolto un problema al lavoro?' }, task: { kind: 'produce', prompt: 'Racconta un esempio: la situazione, cosa hai fatto, il risultato.', must: [
      { id: 'sit', label: 'la situazione', any: ['when', 'once', 'last (?:year|month)', 'at my', 'in my', 'a few (?:months|years) ago'] },
      { id: 'act', label: 'cosa hai fatto', any: ['I (?:decided|organi[sz]ed|solved|asked|created|talked|spoke|contacted|proposed|checked|rearranged|reorgani[sz]ed|negotiated)', 'we (?:solved|fixed|decided|agreed|changed)'] },
      { id: 'res', label: 'il risultato', any: ['result', 'in the end', 'finally', 'saved', 'improved', 'reduced', 'on time', 'successful'] }], min: 20, model: 'Last year a supplier cancelled a delivery two days before a big launch. I contacted three other suppliers, negotiated a fair price and, in the end, we delivered on time.', next: 'n4' } },
    n4: { npc: { t: 'Thank you. Now, a question that surprises many candidates: tell me about a time you failed. What happened, and what did you learn?', tr: 'Grazie. Ora una domanda che sorprende molti candidati: mi parli di una volta in cui ha fallito. Cos’è successo e cosa ha imparato?' }, unexpected: true, task: { kind: 'produce', prompt: 'Racconta un errore o un fallimento (breve) e cosa hai imparato.', must: [
      { id: 'fail', label: 'cosa è andato storto', any: ['mistake', 'fail', 'went wrong', 'missed', 'underestimat', 'overlook', 'didn[’\']t work', 'too late'] },
      { id: 'learn', label: 'cosa hai imparato', any: ['learn', 'lesson', 'next time', 'differently', 'now I'] }], min: 20, model: 'I once underestimated how long a report would take and I missed the deadline. It was a mistake, but I learned to plan more carefully, and now I always agree a realistic timeline with my manager.', next: 'n5' } },
    n5: { npc: { t: 'Thank you for being so honest. We’ll be interviewing until the end of next week, and we’ll contact all candidates by Friday the twentieth, whether successful or not. The second interview would be with our director.', tr: 'Grazie per la sincerità. Faremo colloqui fino alla fine della prossima settimana e contatteremo tutti i candidati entro venerdì venti, con esito positivo o no. Il secondo colloquio sarebbe con la nostra direttrice.' }, listen: true, task: { kind: 'choose', q: 'Cosa succede dopo?', opts: [
      { t: 'Tutti i candidati saranno contattati entro venerdì 20; il secondo colloquio è con la direttrice.', q: 3, why: '«all candidates… whether successful or not».', next: 'n6' },
      { t: 'Ti chiameranno solo se vincerai.', q: 1, why: 'Hanno detto che contatteranno tutti, «whether successful or not».', next: 'n6' },
      { t: 'Il secondo colloquio è domani.', q: 0, why: 'Non è stata indicata una data per il secondo colloquio.', next: 'n6' }] } },
    n6: { npc: { t: 'Do you have any questions for us?', tr: 'Ha domande per noi?' }, task: { kind: 'produce', prompt: 'Fai due domande: sul team con cui lavorerai e sulle opportunità di formazione.', must: [
      { id: 'team', label: 'domanda sul team', any: ['team', 'colleagues'] },
      { id: 'train', label: 'domanda sulla formazione', any: ['training', 'development', 'courses', 'learn'] }], min: 15, model: 'Yes, I do. Could you tell me more about the team I would be working with? And are there any opportunities for training?', next: 'n7' } },
    n7: { npc: { t: 'Those are good questions. Thank you again, and we’ll be in touch.', tr: 'Sono ottime domande. Grazie ancora, ci faremo sentire.' }, end: true }
  } });

  /* 7 — B2: riunione, disaccordo educato */
  Cv.add({ id: 'cv-en-b2-meeting', lang: 'en', level: 'B2', area: 'Lavoro', title: 'Riunione: dissentire con educazione', setting: 'Riunione di team sul lancio di un prodotto', start: 'n1', nodes: {
    n1: { npc: { t: 'Right, let’s get started. Priya has suggested we move the product launch from March to January to beat our competitors. Does anyone have any thoughts?', tr: 'Bene, cominciamo. Priya ha proposto di anticipare il lancio da marzo a gennaio per battere i concorrenti. Qualcuno ha qualcosa da dire?' }, task: { kind: 'choose', q: 'Non sei convinto: come lo dici?', opts: [
      { t: 'I see the point, but I’m not sure January is realistic. Could we look at the risks?', q: 3, why: 'Riconosci l’idea («I see the point»), esprimi il dubbio e proponi un passo concreto.', next: 'n2' },
      { t: 'I’m not convinced. I think we should wait.', q: 2, why: 'Educato, ma non dici perché né proponi nulla.', next: 'n2' },
      { t: 'That’s a terrible idea. It will never work.', q: 1, why: 'Critica la persona più che il problema; in riunione meglio «I’m afraid I see it differently».', next: 'n2b' }] } },
    n2b: { npc: { t: 'Let’s keep it constructive. Could you explain what worries you, and suggest an alternative?', tr: 'Manteniamo un tono costruttivo. Può spiegare cosa la preoccupa e proporre un’alternativa?' }, task: { kind: 'produce', prompt: 'Riformula con tatto: temi che non ci sia abbastanza tempo per i test e proponi febbraio.', must: [
      { id: 'concern', label: 'la preoccupazione (tempo per i test)', any: ['test', 'quality', 'not enough time', 'rush', 'worr', 'concern'] },
      { id: 'alt', label: 'un’alternativa (febbraio)', any: ['february', '\\bsuggest', '\\bpropose', 'how about', 'what about', 'could we'] }], min: 10, model: 'I’m a bit worried that we won’t have enough time for testing. What about February instead?', next: 'n2' } },
    n2: { npc: { t: 'Thanks. I understand the concern, but our main competitor is launching in February. If we wait until March, we’ll lose a lot of customers.', tr: 'Grazie. Capisco la preoccupazione, ma il nostro principale concorrente lancia a febbraio. Se aspettiamo marzo, perderemo molti clienti.' }, listen: true, task: { kind: 'choose', q: 'Qual è l’argomento di Priya?', opts: [
      { t: 'Il concorrente lancia a febbraio: aspettare marzo farebbe perdere clienti.', q: 3, why: '«competitor… February… we’ll lose customers».', next: 'n3' },
      { t: 'I clienti preferiscono marzo.', q: 1, why: 'Non ha detto questo: teme di perderli se aspettano.', next: 'n3b' },
      { t: 'Il team è troppo piccolo.', q: 0, why: 'Non parla delle dimensioni del team.', next: 'n3b' }] } },
    n3b: { npc: { t: 'Let me put it another way: the competitor will launch before us, so we need to move earlier.', tr: 'Lo dico in altro modo: il concorrente lancerà prima di noi, quindi dobbiamo muoverci prima.' }, listen: true, task: { kind: 'choose', q: 'Perché Priya vuole anticipare?', opts: [
      { t: 'Per arrivare prima del concorrente.', q: 3, why: '«the competitor will launch before us».', next: 'n3' },
      { t: 'Per risparmiare sul budget.', q: 0, why: 'Non si parla di budget.', next: 'n3' },
      { t: 'Perché il team ha più tempo a gennaio.', q: 1, why: 'Non è l’argomento portato.', next: 'n3' }] } },
    n3: { npc: { t: 'So, what do you suggest? We need to decide today.', tr: 'Allora, cosa propone? Dobbiamo decidere oggi.' }, task: { kind: 'produce', prompt: 'Concedi che Priya ha ragione sul concorrente e proponi una versione ridotta a gennaio e quella completa a marzo.', must: [
      { id: 'concede', label: 'riconoscere che ha ragione', any: ['you[’\']re right', 'you are right', 'good point', 'fair point', 'I take your point', 'I see your point', 'I understand'] },
      { id: 'small', label: 'versione ridotta a gennaio', any: ['smaller', 'basic', 'limited', 'lighter', 'first version', 'pilot', 'beta'] },
      { id: 'full', label: 'versione completa a marzo', any: ['march', 'full version', 'complete', 'second version'] }], min: 15, model: 'You’re right about the competitor, and that’s a good point. How about launching a smaller version in January and the full version in March?', next: 'n4' } },
    n4: { npc: { t: 'Interesting idea. But honestly, who would test a smaller version? Our testers are already working at full capacity.', tr: 'Idea interessante. Ma sinceramente, chi testerebbe una versione ridotta? I nostri tester sono già al massimo.' }, unexpected: true, task: { kind: 'choose', q: 'Obiezione imprevista: rispondi.', opts: [
      { t: 'That’s a fair question. We could ask two developers to help for two weeks and use a few friendly customers as beta testers.', q: 3, why: 'Riconosci l’obiezione («fair question») e offri soluzioni concrete.', next: 'n5' },
      { t: 'Maybe we could hire temporary staff, though that would cost more.', q: 2, why: 'Soluzione plausibile, e sei onesto sul costo; manca una alternativa a basso costo.', next: 'n5' },
      { t: 'I don’t know. That’s not my problem.', q: 0, why: 'Chiude la discussione e scarica la responsabilità: non è collaborativo.', next: 'n5b' }] } },
    n5b: { npc: { t: 'I see. We all share this problem, so let’s try to find a solution together. What would you need to make it work?', tr: 'Capisco. Il problema è di tutti, quindi cerchiamo una soluzione insieme. Di cosa avrebbe bisogno perché funzioni?' }, task: { kind: 'produce', prompt: 'Correggi il tiro: di’ che serve più aiuto o tempo e che ne parlerai con il responsabile.', must: [
      { id: 'need', label: 'cosa serve', any: ['help', 'time', 'resources', 'support', 'budget', 'people'] },
      { id: 'step', label: 'prossimo passo (parlarne con il responsabile)', any: ['talk', 'speak', 'ask', 'meet', 'discuss', 'check with'] }], min: 12, model: 'I’m sorry, that came out wrong. I’d need some extra help and time, so I could talk to the manager about it.', next: 'n5' } },
    n5: { npc: { t: 'OK, I like the compromise. Dev will confirm capacity by Wednesday, and we’ll vote on Thursday. Is everyone happy with that?', tr: 'Bene, mi piace il compromesso. Il team di sviluppo confermerà la capacità entro mercoledì e voteremo giovedì. Siete tutti d’accordo?' }, listen: true, task: { kind: 'choose', q: 'Conferma il piano.', opts: [
      { t: 'Yes, that works for me. I’ll send the risk list by Tuesday.', q: 3, why: 'Confermi e ti impegni su un’azione precisa.', next: 'n6' },
      { t: 'Yes, I’m agree with that.', q: 1, why: '«Agree» è un verbo: si dice «I agree», non «I am agree».', next: 'n6' },
      { t: 'No, we should decide right now.', q: 2, why: 'Legittimo, ma ignori il compromesso appena trovato.', next: 'n6' }] } },
    n6: { npc: { t: 'Great. Anything else before we finish?', tr: 'Bene. Altro prima di chiudere?' }, task: { kind: 'order', prompt: 'Costruisci: «Vorrei ringraziare tutti per la discussione costruttiva.»', words: ['I', 'would', 'like', 'to', 'thank', 'everyone', 'for', 'the', 'constructive', 'discussion'], accept: ['I would like to thank everyone for the constructive discussion', 'I’d like to thank everyone for the constructive discussion'], model: 'I would like to thank everyone for the constructive discussion.', next: 'n7' } },
    n7: { npc: { t: 'Thanks, everyone. Meeting closed.', tr: 'Grazie a tutti. La riunione è chiusa.' }, end: true }
  } });

  /* 8 — C1: negoziazione */
  Cv.add({ id: 'cv-en-c1-negotiation', lang: 'en', level: 'C1', area: 'Lavoro e negoziazione', title: 'Negoziare scadenza e compenso', setting: 'Consulente freelance e cliente (Ms Carter)', start: 'n1', nodes: {
    n1: { npc: { t: 'Thank you for making time. As I mentioned in my email, we need the full report by the end of November, not mid-December, and the budget we’ve been approved is £4,000.', tr: 'Grazie per il tempo. Come scritto nella mail, ci serve il rapporto completo entro fine novembre, non metà dicembre, e il budget approvato è di 4.000 sterline.' }, task: { kind: 'choose', q: 'Come apri la trattativa?', opts: [
      { t: 'I appreciate you being upfront. Before I respond, could I clarify what’s driving the earlier deadline?', q: 3, why: 'Prima di concedere o rifiutare, cerchi di capire le vere ragioni: base di ogni buona negoziazione.', next: 'n2' },
      { t: 'That’s impossible. The deadline is mid-December, as agreed.', q: 2, why: 'Difendi l’accordo, ma chiudi il dialogo senza esplorare i vincoli del cliente.', next: 'n2' },
      { t: 'That works for me. Whatever you need.', q: 1, why: 'Cedi subito su scadenza e compenso senza ottenere nulla in cambio.', next: 'n2b' }] } },
    n2b: { npc: { t: 'Really? Just to be sure we’re on the same page: it means about two weeks fewer, at the same fee. Are you confident that’s feasible?', tr: 'Davvero? Per essere sicuri: sono circa due settimane in meno, allo stesso compenso. È sicuro che sia fattibile?' }, task: { kind: 'produce', prompt: 'Ritira l’assenso: potrebbe essere fattibile solo a una condizione (un compenso adeguato al carico).', must: [
      { id: 'feasible', label: 'dubbio sulla fattibilità', any: ['feasible', 'realistic', 'manageable', 'possible', 'doable', 'workload', 'capacity'] },
      { id: 'cond', label: 'una condizione sul compenso', any: ['fee', 'rate', 'price', 'cost', 'extra', 'additional', 'premium', '\\bonly if\\b', 'provided'] }], min: 14, model: 'On reflection, I spoke too quickly. It might be feasible, but only if the fee reflects the extra workload.', next: 'n2' } },
    n2: { npc: { t: 'The thing is, our board meets on the third of December, and they need the findings in advance. As for the budget, £4,000 is the ceiling we were given.', tr: 'Il fatto è che il nostro consiglio si riunisce il 3 dicembre e ha bisogno dei risultati prima. Quanto al budget, 4.000 sterline è il tetto che ci hanno dato.' }, listen: true, task: { kind: 'choose', q: 'Riassumi i vincoli del cliente.', opts: [
      { t: 'So the real constraints are the board meeting on 3 December and a fixed ceiling of £4,000?', q: 3, why: 'Riformuli per verificare di aver capito: tecnica essenziale nella negoziazione.', next: 'n3' },
      { t: 'So the budget is flexible but the date isn’t?', q: 1, why: 'Ha detto che 4.000 è un tetto: il budget è il vincolo rigido.', next: 'n3b' },
      { t: 'So the board can’t meet until you pay?', q: 0, why: 'Fraintende: la riunione è fissata il 3 dicembre, non dipende dal pagamento.', next: 'n3b' }] } },
    n3b: { npc: { t: 'Not quite. The date is fixed because of the board meeting, and £4,000 is the ceiling. That’s the full picture.', tr: 'Non proprio. La data è fissa per la riunione del consiglio e 4.000 è il tetto. Questo è il quadro completo.' }, task: { kind: 'choose', q: 'Come prosegui, dopo aver chiarito i vincoli?', opts: [
      { t: 'I see. Then let’s explore what we can adjust within those limits.', q: 3, why: 'Accetti i vincoli e sposti la discussione su cosa si può modificare.', next: 'n3' },
      { t: 'Then I’ll accept both.', q: 1, why: 'Cedi su tutto: perdi ogni margine.', next: 'n3' },
      { t: 'Then there is nothing to discuss.', q: 0, why: 'Chiudi la trattativa invece di cercare una soluzione.', next: 'n3' }] } },
    n3: { npc: { t: 'So where does that leave us?', tr: 'Quindi a che punto siamo?' }, task: { kind: 'produce', prompt: 'Argomenta: consegnare due settimane prima aumenta il carico e rischia la qualità; proponi un compenso più alto (£5,200) oppure un ambito ridotto.', must: [
      { id: 'reason', label: 'la motivazione (carico/qualità)', any: ['workload', 'quality', 'pressure', 'rush', 'tight', 'compress', 'risk', 'capacity'] },
      { id: 'ask', label: 'proporre un compenso diverso', any: ['fee', 'rate', '£', 'price', 'budget'] },
      { id: 'alt', label: 'alternativa: ambito ridotto', any: ['scope', 'reduce', 'narrow', 'phase', 'priorit', 'fewer', 'smaller'] }], min: 20, model: 'Delivering two weeks earlier would put considerable pressure on the quality of the work, so I would need to propose a higher fee of £5,200. Alternatively, we could reduce the scope of the report.', next: 'n4' } },
    n4: { npc: { t: 'Frankly, £5,200 is out of the question. But let me ask you something: if we paid in full on delivery rather than in two instalments, would that change your position?', tr: 'Francamente, 5.200 sterline è fuori discussione. Ma le chiedo: se pagassimo tutto alla consegna invece che in due rate, cambierebbe la sua posizione?' }, unexpected: true, task: { kind: 'choose', q: 'Controproposta imprevista: come rispondi?', opts: [
      { t: 'That’s a useful concession, but it doesn’t address the extra workload. Could we settle on £4,600 with a phased delivery?', q: 3, why: 'Riconosci la concessione, spieghi perché non basta e fai una controproposta precisa.', next: 'n5' },
      { t: 'It might, depending on the terms. Could you put that in writing?', q: 2, why: 'Prudente, ma non avanzi una tua proposta.', next: 'n5' },
      { t: 'Fine, then £4,000 is OK.', q: 1, why: 'Rinunci a tutto quello che avevi sostenuto un attimo prima.', next: 'n5b' }] } },
    n5b: { npc: { t: 'Are you sure? Earlier you said the extra work would need to be compensated.', tr: 'Ne è sicuro? Prima ha detto che il lavoro in più andrebbe compensato.' }, task: { kind: 'produce', prompt: 'Correggi il tiro: apprezza il pagamento unico ma ribadisci che serve un adeguamento del compenso o dell’ambito.', must: [
      { id: 'concede', label: 'riconoscere il pagamento unico', any: ['payment', 'pay', 'full', 'on delivery', 'instalment', 'appreciate', 'concession'] },
      { id: 'hold', label: 'ribadire la posizione', any: ['still', 'however', 'but', 'though', 'nonetheless'] },
      { id: 'adj', label: 'adeguamento di compenso o ambito', any: ['adjust', 'fee', 'scope', 'rate', '£'] }], min: 15, model: 'I appreciate the offer of full payment on delivery, but I would still need some adjustment, either to the fee or to the scope.', next: 'n5' } },
    n5: { npc: { t: 'All right. Here’s what I can do: £4,500, with the first draft by the twentieth of November and the final version by the third of December. But the first draft would need to include the executive summary.', tr: 'D’accordo. Ecco cosa posso fare: 4.500 sterline, con la prima bozza entro il 20 novembre e la versione finale entro il 3 dicembre. Ma la prima bozza dovrebbe includere la sintesi esecutiva.' }, listen: true, task: { kind: 'choose', q: 'Cosa offre il cliente?', opts: [
      { t: '£4.500; bozza il 20 novembre con la sintesi; versione finale il 3 dicembre.', q: 3, why: 'Hai colto importo, due scadenze e la condizione sulla sintesi.', next: 'n6' },
      { t: '£5.000; versione finale il 3 dicembre.', q: 1, why: 'L’importo offerto è 4.500 e c’è anche una bozza intermedia.', next: 'n6' },
      { t: '£4.500; bozza il 3 dicembre; versione finale il 20 novembre.', q: 0, why: 'Le date sono invertite.', next: 'n6' }] } },
    n6: { npc: { t: 'So, do we have a deal?', tr: 'Dunque, abbiamo un accordo?' }, task: { kind: 'produce', prompt: 'Chiudi: accetta £4,500 a condizione di una conferma scritta e chiedi chi approverà la prima bozza.', must: [
      { id: 'accept', label: 'accettare', any: ['accept', 'agree', 'deal', 'happy with', 'works for me', 'that works'] },
      { id: 'writing', label: 'conferma scritta', any: ['in writing', 'writing', 'email', 'confirm', 'contract', 'written'] },
      { id: 'contact', label: 'chi approverà la bozza', any: ['who', 'contact', 'approve', 'sign.?off', 'person'] }], min: 18, model: 'Yes, I think we have a deal: £4,500 works for me, provided you confirm the terms in writing. Could you also tell me who will approve the first draft?', next: 'n7' } },
    n7: { npc: { t: 'Excellent. I’ll send the confirmation this afternoon. It’s been a pleasure.', tr: 'Eccellente. Invierò la conferma questo pomeriggio. È stato un piacere.' }, end: true }
  } });

  Cv.refresh();
})(window.ST = window.ST || {});
