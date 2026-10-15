/* SkillTree — Real-World Decision Lab: scenari a informazioni incomplete con conseguenze simulate. */
(function (ST) {
  'use strict';
  const R = ST.rwd = {};
  /* o: [{p, v, t}] esiti con probabilità; v = costo/valore secondo scenario.dir ('min' = costo da minimizzare, 'max' = valore da massimizzare). best: id opzione o null se la scelta dipende da preferenze/informazioni. */
  R.SCENARIOS = [
    { id: 'laptop', area: 'Acquisti', principle: 'ev', dir: 'min', unit: '€ in 3 anni',
      sit: 'Ti serve un portatile per i prossimi 3 anni. Hai trovato un usato a 450 € (senza garanzia) e un nuovo a 700 € (garanzia 3 anni).', goal: 'Spendere il meno possibile in 3 anni avendo un portatile funzionante.',
      cons: 'Budget massimo disponibile 800 €. Non puoi restare senza portatile più di una settimana.',
      known: 'Gli usati di questo tipo si guastano, in media, nel 20% dei casi con riparazione da circa 250 €. Esiste una garanzia estesa sull’usato da 60 €, che copre le riparazioni.',
      info: [['Quanto costa davvero una riparazione e quanto spesso serve', 1], ['Che cosa copre esattamente la garanzia estesa', 1], ['Il colore del portatile', 0], ['Quanti mesi di uso ha già l’usato', 1]],
      opts: [
        { id: 'a', t: 'Compro l’usato a 450 €', o: [{ p: 0.8, v: 450, t: 'Funziona: spendi 450 €.' }, { p: 0.2, v: 700, t: 'Si guasta: 450 € + 250 € di riparazione = 700 €.' }] },
        { id: 'b', t: 'Compro il nuovo a 700 €', o: [{ p: 1, v: 700, t: 'Spendi 700 € con garanzia.' }] },
        { id: 'c', t: 'Usato + garanzia estesa (510 €)', o: [{ p: 1, v: 510, t: 'Spendi 510 €; le riparazioni sono coperte.' }] }],
      best: 'a', why: 'Il costo atteso dell’usato è 0,8·450 + 0,2·700 = 500 €: meno di 510 € e di 700 €. Ma nel caso peggio spendi 700 € e resti senza portatile per giorni: se non puoi permetterti il rischio, la garanzia (510 €) è una scelta ragionevole. La differenza di 10 € è piccola: con altri numeri la risposta cambierebbe.',
      refl: 'Quale numero, se fosse diverso, ti farebbe cambiare scelta (probabilità di guasto, costo di riparazione)? Quanto pesa per te il rischio, non solo la media?' },
    { id: 'salary', area: 'Lavoro e negoziazione', principle: 'incentives', dir: 'max', unit: 'k€ all’anno',
      sit: 'Ti offrono un lavoro a 30 000 € l’anno. Sai che c’è margine ma non quanto. Se rifiuti hai un’altra offerta a 27 000 €.', goal: 'Ottenere il migliore stipendio senza perdere l’opportunità.',
      cons: 'Devi rispondere entro domani. La negoziazione può irritare l’azienda.',
      known: 'In casi simili: il 60% accetta una richiesta di 33 000 €, il 30% propone 31 500 €, il 10% ritira l’offerta.',
      info: [['Lo stipendio medio per quel ruolo nella tua zona', 1], ['Quanto l’azienda ha bisogno di assumere', 1], ['Il nome del direttore', 0], ['La tua alternativa reale se l’offerta sparisce', 1]],
      opts: [
        { id: 'a', t: 'Accetto 30 000 €', o: [{ p: 1, v: 30, t: '30 k€ garantiti.' }] },
        { id: 'b', t: 'Chiedo 33 000 €', o: [{ p: 0.6, v: 33, t: 'Accettano: 33 k€.' }, { p: 0.3, v: 31.5, t: 'Controfferta: 31,5 k€.' }, { p: 0.1, v: 27, t: 'Ritirano l’offerta: ripieghi su 27 k€.' }] }],
      best: 'b', why: 'Valore atteso della richiesta: 0,6·33 + 0,3·31,5 + 0,1·27 = 31,95 k€ contro 30. Il caso peggiore (27) costa 3 k€, il migliore ne guadagna 3. Contano la tua alternativa (27) e quanto tolleri il rischio: senza un’alternativa il quadro sarebbe diverso.',
      refl: 'Che cosa cambia se la tua alternativa fosse 0 €? Che informazioni avresti raccolto per stimare quelle probabilità?' },
    { id: 'invest', area: 'Gestione del denaro', principle: 'ev', dir: 'max', unit: '€ dopo 1 anno',
      sit: 'Hai 1 000 € che non ti servono per l’anno. Puoi lasciarli in un deposito (+3% sicuro) o investirli in un titolo volatile.', goal: 'Far crescere i soldi senza rischiare ciò che serve alle emergenze.',
      cons: 'Hai già un fondo emergenze separato. Non puoi controllare i prezzi giorno per giorno.',
      known: 'Il titolo, in uno scenario semplificato: 50% di salire del 20%, 50% di scendere del 15%.',
      info: [['Orizzonte temporale e necessità di liquidità', 1], ['Costi e tasse dell’investimento', 1], ['Da dove vengono le probabilità del 50/50', 1], ['Il nome del titolo di moda', 0]],
      opts: [
        { id: 'a', t: 'Tutto nel titolo volatile', o: [{ p: 0.5, v: 1200, t: 'Sale del 20%: 1 200 €.' }, { p: 0.5, v: 850, t: 'Scende del 15%: 850 €.' }] },
        { id: 'b', t: 'Tutto nel deposito (+3%)', o: [{ p: 1, v: 1030, t: '1 030 €.' }] },
        { id: 'c', t: 'Metà e metà', o: [{ p: 0.5, v: 1115, t: '500 al 3% + 500 sale: 515 + 600 = 1 115 €.' }, { p: 0.5, v: 940, t: '515 + 425 = 940 €.' }] }],
      best: 'b', why: 'Valori attesi: titolo 0,5·1200 + 0,5·850 = 1 025 €; deposito 1 030 €; metà-metà 1 027,5 €. Il titolo ha media più bassa e molta più variabilità, quindi in questo scenario il deposito domina. Le probabilità reali dei mercati non sono note: qui sono dichiarate per l’esercizio.',
      refl: 'Se le probabilità fossero 60/40, cambierebbe la risposta? Come puoi sapere se le probabilità che ti propongono sono credibili?' },
    { id: 'taxi', area: 'Imprevisti', principle: 'ev', dir: 'min', unit: '€ equivalenti',
      sit: 'La tua auto non parte e hai un appuntamento importante tra 40 minuti. Ogni minuto di ritardo ti costa, per te, circa 2 € di danno (credibilità, stress).', goal: 'Arrivare il più puntuale possibile spendendo poco.',
      cons: 'Sei a 8 km dal luogo. Non puoi rimandare l’appuntamento.',
      known: 'Un amico potrebbe passare a prendere (50%: arriva in 20 min di ritardo; 50%: 50 min). Il taxi costa 25 € e arriva in orario. Con i mezzi: 60% in orario, 40% con 15 minuti di ritardo.',
      info: [['Se il taxi è davvero disponibile subito', 1], ['Quanto sono affidabili i mezzi a quell’ora', 1], ['Il modello dell’auto', 0]],
      opts: [
        { id: 'a', t: 'Aspetto l’amico', o: [{ p: 0.5, v: 40, t: '20 min di ritardo: 40 € equivalenti.' }, { p: 0.5, v: 100, t: '50 min di ritardo: 100 € equivalenti.' }] },
        { id: 'b', t: 'Prendo il taxi', o: [{ p: 1, v: 25, t: '25 €, puntuale.' }] },
        { id: 'c', t: 'Uso i mezzi', o: [{ p: 0.6, v: 0, t: 'Puntuale: 0 €.' }, { p: 0.4, v: 30, t: '15 min di ritardo: 30 € equivalenti.' }] }],
      best: 'c', why: 'Costi attesi: amico 70; taxi 25; mezzi 0,4·30 = 12. I mezzi vincono in media, ma il taxi elimina il rischio. Con più peso al danno del ritardo (es. 5 € al minuto) il taxi diventerebbe preferibile: la risposta dipende da un valore che solo tu puoi stimare.',
      refl: 'Quanto vale per te un minuto di ritardo? Quella stima cambia la scelta?' },
    { id: 'claim', area: 'Valutare informazioni', principle: 'causation', dir: null, unit: '',
      sit: 'Un articolo afferma: «Il 70% di chi prende l’integratore X ha migliorato la prestazione». Un amico lo vuole comprare.', goal: 'Decidere se fidarsi dell’affermazione prima di spendere.',
      cons: 'Hai 10 minuti. Non hai accesso a una biblioteca scientifica.',
      known: 'L’articolo non cita lo studio, non dice quanti partecipanti c’erano né se esisteva un gruppo senza integratore.',
      info: [['Se c’era un gruppo di controllo senza integratore', 1], ['Quanti partecipanti e come sono stati scelti', 1], ['Chi ha finanziato lo studio', 1], ['Quanto migliora in media il gruppo senza integratore', 1], ['Il prezzo dell’integratore', 0]],
      opts: [
        { id: 'a', t: 'Condivido: sembra convincente', o: [{ p: 1, v: 0, t: 'Hai diffuso un dato che non sai valutare.' }] },
        { id: 'b', t: 'Cerco lo studio e controllo gruppo di controllo, campione e finanziatore', o: [{ p: 1, v: 0, t: 'Puoi stimare quanto il 70% sia dovuto all’integratore e quanto a placebo o regressione alla media.' }] },
        { id: 'c', t: 'Lo scarto perché «non funziona di sicuro»', o: [{ p: 1, v: 0, t: 'Hai ignorato l’informazione senza prove contrarie.' }] }],
      best: null, why: 'Qui non c’è una risposta unica calcolabile, ma un metodo: «il 70% migliora» non dice nulla senza confronto (anche chi prende un placebo migliora spesso), né sul campione. Verificare (B) è più prudente di credere (A) o di rifiutare per partito preso (C), ma costa tempo: con 10 minuti puoi fare solo una verifica parziale.',
      refl: 'Che cosa ti manca per passare da «correlazione» a «causa»? Quale informazione cercheresti per prima?' },
    { id: 'study', area: 'Organizzazione del tempo', principle: 'opportunity', dir: null, unit: '',
      sit: 'Hai 10 ore per preparare un esame. Il programma ha 5 argomenti: due pesano il 60% dei punti, tre il 40%.', goal: 'Massimizzare il punteggio atteso senza arrivare esausto.',
      cons: 'Domani alle 9 sei in aula; le ultime due ore tue sono di sera tardi.',
      known: 'Non sai quali parti usciranno in modo preciso: solo la distribuzione dei punti.',
      info: [['Quali argomenti sono più deboli per te', 1], ['Quanto sei già solido sui due argomenti pesanti', 1], ['Quante ore puoi dormire', 1], ['La marca dei tuoi quaderni', 0]],
      opts: [
        { id: 'a', t: 'Ripasso uniforme: 2 ore per argomento', o: [{ p: 1, v: 0, t: 'Copertura ampia, ma i due argomenti pesanti hanno solo 4 ore su 10.' }] },
        { id: 'b', t: '6 ore sui due argomenti pesanti, 4 sugli altri', o: [{ p: 1, v: 0, t: 'Più tempo dove ci sono più punti, con copertura ancora ragionevole.' }] },
        { id: 'c', t: '8 ore di studio e 2 di sonno in più', o: [{ p: 1, v: 0, t: 'Meno materiale, ma più lucidità e memoria al mattino.' }] }],
      best: null, why: 'Non esiste una soluzione universale: dipende da quanto sei già forte negli argomenti pesanti, dalla tua curva di fatica e dal rischio di una domanda inattesa. Un criterio utile: assegnare il tempo in proporzione ai punti guadagnabili per ora (non ai punti totali) e proteggere il sonno.',
      refl: 'Qual è il costo opportunità di un’ora in più su un argomento già solido? Come sapresti dopo l’esame se la scelta era buona?' }
  ];
  R.ev = o => o.reduce((a, x) => a + x.p * x.v, 0);
  R.evs = sc => sc.opts.map(op => ({ id: op.id, ev: sc.dir ? +R.ev(op.o).toFixed(3) : null }));
  /* estrae un esito secondo le probabilità; rnd in [0,1) */
  R.sample = (op, rnd) => { let c = 0; for (const x of op.o) { c += x.p; if (rnd < c) return x; } return op.o[op.o.length - 1]; };
  /* informazioni rilevanti identificate (per l'evidenza di processo): {hit, miss, wrong} */
  R.infoScore = (sc, picked) => { const key = sc.info.filter(i => i[1]).map(i => i[0]); const hit = picked.filter(x => key.includes(x)).length; return { hit, total: key.length, wrong: picked.length - hit }; };
})(window.ST = window.ST || {});
