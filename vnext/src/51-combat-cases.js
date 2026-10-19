/* vNext M6 — situazioni tattiche pilota (principi, non istruzioni di esecuzione). Scritte senza revisione di un istruttore: vedi docs/vnext/CHANGELOG.md. */
(function (ST) {
  'use strict';
  const K = ST.sma.combat;
  const T = (x, y, a) => ({ x, y, a }), O = (label, q, why) => ({ label, q, why });
  const face = { tori: T(50, 47, 0), uke: T(50, 26, 180) }; // tori in basso verso l’alto, uke in alto verso il basso

  K.add({ id: 'cmb-l0-postura', level: 'L0', title: 'Posture: eretta o raccolta', steps: [{
    fig: { tori: T(50, 47, 0), uke: T(50, 26, 180) },
    prompt: 'Uke ha le gambe larghe, il busto piegato in avanti e il baricentro basso (posizione difensiva, «jigotai»). Che cosa implica per te?',
    opts: [O('È più difficile sbilanciarlo con una spinta o trazione secca: conviene prima fargli rialzare il busto o farlo muovere', 3, 'Una base larga e il baricentro basso rendono stabile il corpo: prima si modifica la sua postura, poi si cerca lo squilibrio.'), O('Mi avvicino e cerco di controllare la presa prima di muovermi, per capire come reagisce', 2, 'Raccogliere informazioni con la presa è ragionevole, ma da solo non cambia la sua postura.'), O('Attacco subito in avanti con tutta la forza', 1, 'Contro una base larga e bassa la forza bruta spesso fallisce e ti espone a un contrattacco.'), O('Mi irrigidisco e aspetto che sia lui a muoversi', 0, 'Restare passivi regala l’iniziativa e non cambia nulla.')],
    depends: 'Dalla distanza, dalla presa che hai già e dal suo comportamento: più opzioni possono essere sensate.',
    bio: 'Il corpo è stabile finché la proiezione verticale del baricentro cade dentro la base d’appoggio. Una base larga e un baricentro basso la rendono ampia e difficile da portare fuori; per questo serve prima modificare postura e appoggi.' }] });

  K.add({ id: 'cmb-l0-distanza', level: 'L0', title: 'Distanza: troppo vicino, troppo lontano', steps: [{
    fig: { tori: T(50, 38, 0), uke: T(50, 31, 180) },
    prompt: 'Tori e uke sono a meno di un braccio di distanza, senza una presa stabile. Quale rischio è più concreto?',
    opts: [O('Uke può afferrarmi e controllarmi prima che io riesca a muovermi: devo gestire la distanza', 3, 'A distanza troppo breve il tempo di reazione si riduce e chi prende per primo la presa guadagna controllo.'), O('Nessun rischio: più vicino sono, meglio è', 0, 'Vicinanza senza controllo della presa è un rischio, non un vantaggio.'), O('Posso essere sbilanciato ma ho più forza di leva', 1, 'La leva dipende da presa e posizione, non dalla sola vicinanza.')],
    bio: 'La distanza determina il tempo disponibile per reagire e lo spazio per i passi; se è troppo ridotta, il contatto avviene prima che tu possa organizzare appoggi e presa.' }] });

  K.add({ id: 'cmb-l1-kumikata', level: 'L1', title: 'La presa classica', steps: [{
    fig: Object.assign({ grips: [{ w: 1.2 }, { w: 1.2 }] }, face),
    prompt: 'Sei destrorso e uke è destrorso. Quale presa «classica» di partenza è la più comune?',
    opts: [O('Sinistra sulla manica di uke all’altezza del gomito, destra sul bavero all’altezza della clavicola', 3, 'È la presa di riferimento: la mano della manica controlla distanza e direzione, quella del bavero guida il busto.'), O('Presa incrociata: destra sul bavero opposto, sinistra sulla manica', 2, 'È una variante usata in contesti precisi, ma espone a contro-prese e non è la presa base.'), O('Entrambe le mani sul bavero alto dietro il collo', 1, 'Può essere forte ma limita la mobilità e non è la presa base.'), O('Nessuna presa: aspetto che uke prenda', 0, 'Rinunciare alla presa significa rinunciare al controllo.')],
    depends: 'Dalle regole di gara, dal vantaggio in altezza e dalla presa dell’avversario.',
    bio: 'La presa trasmette la forza al corpo dell’avversario: la manica controlla distanza e direzione, il bavero guida il busto. Senza una presa efficace il kuzushi non si trasmette.' }] });

  K.add({ id: 'cmb-l1-ritmo', level: 'L1', title: 'Il momento del passo', steps: [{
    fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'f' },
    prompt: 'Uke sta avanzando e sta per appoggiare il piede davanti. In quale momento il suo equilibrio è più vulnerabile?',
    opts: [O('Mentre il piede sta per toccare terra e il peso passa da un appoggio all’altro', 3, 'Nel passaggio del peso l’appoggio è breve e il corpo ha meno possibilità di correggersi.'), O('Quando è fermo, con i piedi larghi e il baricentro basso', 1, 'È il momento di massima stabilità.'), O('Quando ha appena finito il passo e ha ripreso equilibrio', 1, 'Dopo il passo l’equilibrio è già stato ripreso.'), O('Non esiste un momento più vulnerabile di altri', 0, 'Il movimento crea istanti di maggiore e minore stabilità: il tempismo conta.')],
    bio: 'Durante la camminata il corpo è in equilibrio dinamico: nel passaggio da un appoggio all’altro la base si riduce e l’energia già in movimento può essere sfruttata, non contrastata.' }] });

  K.add({ id: 'cmb-l2-kuzushi', level: 'L2', title: 'Leggere la direzione dello squilibrio', steps: [
    { fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'f' }, prompt: 'Uke ti spinge e il suo peso è tutto sulle punte dei piedi. In quale direzione è diretto il suo peso (rispetto a dove guarda lui)?',
      opts: [O('Avanti', 3, 'La spinta porta il peso verso l’avanti, sulle punte.'), O('Indietro', 0, 'Il peso sulle punte non va indietro.'), O('Di lato', 1, 'Un appoggio laterale non spiega la spinta in avanti.')], bio: 'La direzione dello squilibrio è quella in cui si sposta la proiezione del baricentro rispetto alla base d’appoggio; leggerla guida la scelta dell’attacco.' },
    { fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'b' }, prompt: 'Tiri e uke arretra rapidamente, con il peso sui talloni. Dove va il suo squilibrio?',
      opts: [O('Indietro', 3, 'Il peso sui talloni indica uno squilibrio all’indietro.'), O('Avanti', 0, 'È il contrario di quanto descritto.'), O('A sinistra', 1, 'Nulla indica uno spostamento laterale.')], bio: 'Il peso sui talloni sposta la proiezione del baricentro verso la parte posteriore della base: è la direzione sfruttata dalle proiezioni all’indietro.' },
    { fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'fr' }, prompt: 'Uke avanza con il piede destro e il suo peso scivola in diagonale. Quale direzione descrive meglio lo squilibrio?',
      opts: [O('Avanti a destra (angolo anteriore destro di uke)', 3, 'Descrive il peso che cade verso il piede avanzato.'), O('Indietro a sinistra', 0, 'È la direzione opposta.'), O('Esattamente di lato', 1, 'Non corrisponde alla diagonale del passo.')], bio: 'Gli squilibri di base sono otto: quattro lungo gli assi e quattro in diagonale (gli angoli della base d’appoggio).' }] });

  K.add({ id: 'cmb-l3-combinazione', level: 'L3', title: 'Combinare e continuare', steps: [
    { fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'b' }, prompt: 'Hai provato un attacco in avanti ma uke ha resistito piegandosi e spostando il peso sui talloni. Che cosa fai?',
      opts: [O('Sfrutto la sua reazione e cambio direzione, attaccando mentre il peso sta tornando indietro', 3, 'Una reazione prevedibile è un’opportunità: l’avversario ha già spostato il peso nella direzione utile.'), O('Mi allontano e ricomincio per riorganizzare presa e distanza', 2, 'È una scelta prudente e a volte giusta.'), O('Insisto con più forza nella stessa direzione', 1, 'Contro una resistenza già organizzata la forza bruta rende poco.'), O('Mi fermo e aspetto', 0, 'Si perde il momento favorevole.')],
      depends: 'Dal tempo disponibile, dal rischio di contrattacco e dalla distanza.', bio: 'Quando l’avversario resiste a una trazione spostando il peso all’indietro, la sua base si è già ridotta in quella direzione: per questo le combinazioni che invertono la direzione sono comuni.' },
    { fig: { tori: T(40, 40, 20), uke: T(52, 30, 200) }, prompt: 'Dopo il tuo attacco, uke è sbilanciato e in ginocchio ma non è stato assegnato punteggio. Che cosa fa un judoka che vuole continuare?',
      opts: [O('Valuta subito se può controllarlo e proseguire a terra, rispettando i tempi e le regole dell’incontro', 3, 'La transizione dalla posizione in piedi a quella a terra è un’opportunità se avviene con controllo e nei tempi consentiti.'), O('Si allontana e riprende la presa in piedi', 2, 'Può essere corretto se il rischio a terra è alto o l’arbitro ha già fermato l’azione.'), O('Si ferma ad aspettare l’arbitro', 1, 'Aspettare passivamente fa perdere l’iniziativa.'), O('Si getta a terra senza controllo', 0, 'È una scelta rischiosa che può regalare l’iniziativa all’avversario.')],
      depends: 'Dal regolamento in vigore (tempo concesso a terra), dal punteggio e dalla posizione di uke.', bio: 'La transizione efficace conserva il controllo del corpo dell’avversario: senza controllo, il passaggio al suolo cede l’iniziativa.' }] });

  K.add({ id: 'cmb-l4-lettura', level: 'L4', title: 'Leggere il comportamento dell’avversario', steps: [{
    fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'b' },
    prompt: 'Hai notato che ogni volta che lo tiri in avanti, uke reagisce con una spinta all’indietro. Come puoi usare questa regolarità?',
    opts: [O('Provoco la spinta con una trazione dimostrativa e attacco nella direzione verso cui si è già mosso', 3, 'Sfrutti la reazione prevedibile in cui il suo peso va verso la direzione utile.'), O('Cambio spesso i ritmi e le direzioni per non diventare prevedibile io stesso', 2, 'È una buona regola generale, anche se non usa direttamente la regolarità osservata.'), O('Tiro più forte sempre nello stesso modo', 1, 'Rende l’avversario più capace di anticipare.'), O('Ignoro la regolarità', 0, 'Si perde un’informazione utile.')],
    depends: 'Da quanto la reazione è davvero costante e da quanto costa provocarla (rischio di contrattacco).',
    bio: 'La reazione a una forza è una risposta del corpo: se è costante, permette di anticipare dove sarà il suo peso. Più una reazione è prevedibile, più può essere sfruttata, ma anche più facilmente può essere una trappola.' }] });

  K.add({ id: 'cmb-l5-sequenza', level: 'L5', title: 'Analizzare una sequenza di incontro', steps: [
    { fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'f' }, prompt: 'In un incontro descritto, l’atleta A attacca tre volte nella stessa direzione e il suo avversario B evita con lo stesso arretramento e rientra in guardia. Quale lettura è la più solida?',
      opts: [O('A è diventato prevedibile: B ha identificato la sequenza e la neutralizza con la stessa risposta', 3, 'Tre ripetizioni identiche con la stessa risposta indicano una regolarità riconosciuta da B.'), O('A sta solo sfortunato', 1, 'Tre eventi uguali non si spiegano meglio con la sfortuna che con la prevedibilità.'), O('B è semplicemente più forte', 1, 'La forza non spiega la ripetizione della stessa risposta.'), O('L’incontro non ha informazioni utili', 0, 'Una sequenza ripetuta è un’informazione preziosa.')], bio: 'Una sequenza ripetuta con la stessa risposta è un indizio di regolarità: l’avversario ha costruito un modello della tua azione.' },
    { fig: { tori: T(50, 47, 0), uke: T(50, 26, 180), kuzushi: 'b' }, prompt: 'Quale cambiamento tattico ha più senso per A al quarto attacco?',
      opts: [O('Variare direzione o tempo, sfruttando l’arretramento prevedibile di B', 3, 'Rompe la regolarità e usa a proprio favore la risposta di B.'), O('Attaccare di nuovo identico, più forte', 1, 'Aumenta la prevedibilità.'), O('Rinunciare ad attaccare per tutto l’incontro', 0, 'Si perde l’iniziativa senza guadagni.'), O('Cambiare presa senza cambiare nulla nell’azione', 2, 'Può avere senso se la presa è parte del problema.')], depends: 'Dal punteggio, dal tempo rimasto e dall’attitudine dell’avversario a contrattaccare.', bio: 'Per rompere una neutralizzazione si cambiano le variabili (direzione, tempo, presa, distanza) o si usa la risposta dell’avversario come parte dell’attacco.' }] });
})(window.ST = window.ST || {});
