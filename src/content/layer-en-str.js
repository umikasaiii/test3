(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A('str-pensiero-strategico', {
    title: { t: 'Strategic thinking: goals, constraints and others’ moves', it: 'Pensiero strategico: obiettivi, vincoli e mosse altrui' },
    sum: [
      { t: 'A ⟦strategy⟧ is a plan that says what to do in every circumstance that may arise, not only today.', it: 'Una strategia è un piano che dice cosa fare in ogni circostanza che può presentarsi, non solo oggi.' },
      { t: 'A good ⟦objective⟧ is specific, measurable and ranked by importance, and ⟦constraints⟧ are the limits you choose within.', it: 'Un buon obiettivo è specifico, misurabile e ordinato per importanza, e i vincoli sono i confini entro cui scegli.' },
      { t: 'Decide with incomplete information: pay for more only if it could change your choice, and always list several ⟦options⟧.', it: 'Si decide con informazione incompleta: pagane di più solo se può cambiare la scelta, ed elenca sempre più opzioni.' },
      { t: 'Reason backwards from the other side’s best reply, because a move that works if nobody reacts may fail if they do.', it: 'Ragiona all’indietro dalla migliore risposta altrui, perché una mossa che funziona se nessuno reagisce può fallire se reagiscono.' },
      { t: 'Look for ⟦second-order effects⟧, the consequences of the consequences, and count the ⟦opportunity cost⟧ of the best alternative you give up.', it: 'Cerca gli effetti di secondo ordine, le conseguenze delle conseguenze, e conta il costo opportunità della migliore alternativa a cui rinunci.' },
      { t: 'Decide fast when a choice is ⟦reversible⟧, and slow down when it is irreversible.', it: 'Decidi in fretta quando una scelta è reversibile, e rallenta quando è irreversibile.' },
      { t: '⟦Tactics⟧ decide how to move in a single step, while strategy decides where to go; a ⟦weighted score⟧ makes your priorities explicit.', it: 'La tattica decide come muoversi nel singolo passo, la strategia dove andare; un punteggio pesato rende espliciti i tuoi criteri.' }
    ],
    gloss: [
      { w: 'strategy', it: 'strategia, piano per ogni circostanza' },
      { w: 'objective', it: 'obiettivo' },
      { w: 'constraints', it: 'vincoli' },
      { w: 'options', it: 'opzioni, alternative disponibili' },
      { w: 'second-order effects', it: 'effetti di secondo ordine' },
      { w: 'opportunity cost', it: 'costo opportunità' },
      { w: 'reversible', it: 'reversibile, che si può annullare' },
      { w: 'tactics', it: 'tattica' },
      { w: 'weighted score', it: 'punteggio pesato' },
      { w: 'backwards reasoning', it: 'ragionamento a ritroso' }
    ]
  });
  A('str-decisioni-sotto-incertezza', {
    title: { t: 'Decisions under uncertainty: expected value and risk', it: 'Decisioni sotto incertezza: valore atteso e rischio' },
    sum: [
      { t: '⟦Probability⟧ is a number between 0 and 1, and for “at least one” events it is easiest to use the ⟦complement⟧.', it: 'La probabilità è un numero tra 0 e 1, e per gli eventi «almeno uno» conviene usare il complemento.' },
      { t: 'The ⟦expected value⟧ is the weighted average of the possible results, each multiplied by its probability.', it: 'Il valore atteso è la media pesata dei risultati possibili, ciascuno moltiplicato per la sua probabilità.' },
      { t: 'A positive expected value can still lose most of the time, so you must also look at ⟦variance⟧, the spread around it.', it: 'Un valore atteso positivo può comunque perdere la maggior parte delle volte, quindi si guarda anche alla varianza, la dispersione attorno ad esso.' },
      { t: 'Because of ⟦diminishing marginal utility⟧, an extra euro is not always worth the same, which explains insurance.', it: 'Per l’utilità marginale decrescente, un euro in più non vale sempre lo stesso, il che spiega l’assicurazione.' },
      { t: 'A ⟦decision tree⟧ is solved backwards: take the expected value at chance nodes and the best branch at choice nodes.', it: 'Un albero decisionale si risolve all’indietro: valore atteso nei nodi di caso e ramo migliore nei nodi di scelta.' },
      { t: 'Ignoring the ⟦base rate⟧ is a common error: a positive test for a rare disease is often a false positive.', it: 'Ignorare la frequenza di base è un errore comune: un test positivo per una malattia rara è spesso un falso positivo.' },
      { t: 'A ⟦sunk cost⟧ should not affect future choices, and after many heads in a row a fair coin is still 1/2.', it: 'Un costo irrecuperabile non deve influenzare le scelte future, e dopo molte teste di fila una moneta equa resta a 1/2.' }
    ],
    gloss: [
      { w: 'probability', it: 'probabilità' },
      { w: 'complement', it: 'complemento (1 − P)' },
      { w: 'expected value', it: 'valore atteso' },
      { w: 'variance', it: 'varianza, dispersione' },
      { w: 'diminishing marginal utility', it: 'utilità marginale decrescente' },
      { w: 'decision tree', it: 'albero decisionale' },
      { w: 'base rate', it: 'frequenza di base' },
      { w: 'sunk cost', it: 'costo irrecuperabile' },
      { w: 'risk-averse', it: 'avverso al rischio' },
      { w: 'gambler’s fallacy', it: 'fallacia del giocatore' }
    ]
  });
  A('str-giochi-a-somma-zero-e-minimax', {
    title: { t: 'Zero-sum games, trees and minimax', it: 'Giochi a somma zero, alberi e minimax' },
    sum: [
      { t: 'In a ⟦zero-sum game⟧ what one player gains is exactly what the other loses, so their interests are opposed.', it: 'In un gioco a somma zero ciò che un giocatore guadagna è esattamente ciò che l’altro perde, quindi i loro interessi sono opposti.' },
      { t: 'A ⟦game tree⟧ has nodes for positions, branches for legal moves and leaves for final values.', it: 'Un albero di gioco ha nodi per le posizioni, rami per le mosse legali e foglie per i valori finali.' },
      { t: 'In ⟦minimax⟧, MAX picks the highest value and MIN the lowest, computed from the leaves up to the root.', it: 'Nel minimax, MAX sceglie il valore più alto e MIN il più basso, calcolati dalle foglie verso la radice.' },
      { t: 'MAX does not chase the highest leaf, because MIN will steer the game elsewhere.', it: 'MAX non insegue la foglia più alta, perché MIN porterà il gioco altrove.' },
      { t: '⟦Backward induction⟧ starts from the end of the game and also works for games that are not zero-sum.', it: 'L’induzione a ritroso parte dalla fine del gioco e funziona anche per giochi che non sono a somma zero.' },
      { t: 'In the subtraction game, the losing positions are ⟦multiples of 4⟧, so you always leave such a number.', it: 'Nel gioco della sottrazione le posizioni perdenti sono i multipli di 4, quindi si lascia sempre un tale numero.' },
      { t: '⟦Alpha-beta pruning⟧ skips branches that cannot change the result and gives the same minimax value with less work.', it: 'La potatura alfa-beta salta i rami che non possono cambiare il risultato e dà lo stesso valore minimax con meno lavoro.' }
    ],
    gloss: [
      { w: 'zero-sum game', it: 'gioco a somma zero' },
      { w: 'game tree', it: 'albero di gioco' },
      { w: 'minimax', it: 'minimax, valore garantito contro il peggior avversario' },
      { w: 'backward induction', it: 'induzione a ritroso' },
      { w: 'multiples of 4', it: 'multipli di 4' },
      { w: 'alpha-beta pruning', it: 'potatura alfa-beta' },
      { w: 'leaf', it: 'foglia, posizione finale' },
      { w: 'payoff', it: 'esito, vincita' },
      { w: 'perfect information', it: 'informazione perfetta' },
      { w: 'evaluation function', it: 'funzione di valutazione' }
    ]
  });
  A('str-matrici-di-payoff-e-nash', {
    title: { t: 'Payoff matrices and Nash equilibrium', it: 'Matrici di payoff ed equilibrio di Nash' },
    sum: [
      { t: 'A game in ⟦normal form⟧ lists players, strategies and payoffs, and players choose at the same time.', it: 'Un gioco in forma normale elenca giocatori, strategie e payoff, e i giocatori scelgono simultaneamente.' },
      { t: 'A ⟦dominant strategy⟧ gives a higher payoff whatever the other player does, so a dominated strategy is never worth playing.', it: 'Una strategia dominante dà un payoff maggiore qualunque cosa faccia l’altro, quindi una strategia dominata non conviene mai.' },
      { t: '⟦Iterated elimination⟧ removes dominated strategies step by step, since each player knows the other is rational.', it: 'L’eliminazione iterata toglie le strategie dominate passo dopo passo, perché ciascuno sa che l’altro è razionale.' },
      { t: 'In a ⟦Nash equilibrium⟧ nobody can gain by changing strategy alone; each choice is a ⟦best response⟧.', it: 'In un equilibrio di Nash nessuno può guadagnare cambiando strategia da solo; ogni scelta è una risposta migliore.' },
      { t: 'To find equilibria, underline each best response and look for cells where both payoffs are underlined.', it: 'Per trovare gli equilibri si sottolinea ogni risposta migliore e si cercano le celle con entrambi i payoff sottolineati.' },
      { t: 'In the ⟦stag hunt⟧ there are two equilibria: the better one is cooperation, the safer one is hunting alone.', it: 'Nella caccia al cervo ci sono due equilibri: il migliore è la cooperazione, il più sicuro è cacciare da soli.' },
      { t: 'In ⟦chicken⟧ each player wants to be the one who goes ahead, so the conflict is about who gives way.', it: 'In chicken ciascuno vuole essere quello che prosegue, quindi il conflitto riguarda chi cede.' }
    ],
    gloss: [
      { w: 'normal form', it: 'forma normale (matrice)' },
      { w: 'dominant strategy', it: 'strategia dominante' },
      { w: 'iterated elimination', it: 'eliminazione iterata' },
      { w: 'Nash equilibrium', it: 'equilibrio di Nash' },
      { w: 'best response', it: 'risposta migliore' },
      { w: 'stag hunt', it: 'caccia al cervo' },
      { w: 'chicken', it: 'gioco del chicken (falco e colomba)' },
      { w: 'payoff matrix', it: 'matrice dei payoff' },
      { w: 'coordination game', it: 'gioco di coordinazione' },
      { w: 'simultaneous', it: 'simultaneo' }
    ]
  });
  A('str-dilemma-del-prigioniero-e-cooperazione', {
    title: { t: 'The prisoner’s dilemma and cooperation', it: 'Dilemma del prigioniero e cooperazione' },
    sum: [
      { t: 'In the ⟦prisoner’s dilemma⟧ each player can cooperate or defect, and the payoffs rank as T > R > P > S.', it: 'Nel dilemma del prigioniero ciascuno può cooperare o defezionare, e i payoff sono ordinati T > R > P > S.' },
      { t: 'Defecting is a dominant strategy, so the only Nash equilibrium is mutual defection, worse for both than cooperating.', it: 'Defezionare è una strategia dominante, quindi l’unico equilibrio di Nash è la defezione reciproca, peggiore per entrambi della cooperazione.' },
      { t: 'In ⟦repeated games⟧ the ⟦shadow of the future⟧ allows reward and punishment, and cooperation can hold if the game may continue.', it: 'Nei giochi ripetuti l’ombra del futuro permette premio e punizione, e la cooperazione può reggere se il gioco può continuare.' },
      { t: 'With a known final round, backward induction leads back to defecting every time.', it: 'Con un ultimo turno noto, l’induzione a ritroso riporta a defezionare ogni volta.' },
      { t: '⟦Tit-for-tat⟧ cooperates first and then copies the opponent’s last move; it won Axelrod’s tournaments.', it: 'Tit-for-tat coopera per primo e poi ripete l’ultima mossa dell’avversario; vinse i tornei di Axelrod.' },
      { t: 'Successful strategies were nice, reactive, forgiving and clear.', it: 'Le strategie di successo erano gentili, reattive, clementi e chiare.' },
      { t: '⟦Reputation⟧ and ⟦commitment⟧ also support cooperation, and the same structure appears in the tragedy of the commons.', it: 'Anche reputazione e impegno sostengono la cooperazione, e la stessa struttura compare nella tragedia dei beni comuni.' }
    ],
    gloss: [
      { w: 'prisoner’s dilemma', it: 'dilemma del prigioniero' },
      { w: 'defect', it: 'defezionare, tradire' },
      { w: 'cooperate', it: 'cooperare' },
      { w: 'repeated games', it: 'giochi ripetuti' },
      { w: 'shadow of the future', it: 'ombra del futuro' },
      { w: 'tit-for-tat', it: 'occhio per occhio (strategia)' },
      { w: 'reputation', it: 'reputazione' },
      { w: 'commitment', it: 'impegno vincolante' },
      { w: 'grim trigger', it: 'grilletto, punizione per sempre' },
      { w: 'tragedy of the commons', it: 'tragedia dei beni comuni' }
    ]
  });
  A('str-strategie-miste', {
    title: { t: 'Mixed strategies and unpredictability', it: 'Strategie miste e imprevedibilità' },
    sum: [
      { t: 'In ⟦matching pennies⟧ every cell has a player who wants to deviate, so there is no equilibrium in pure strategies.', it: 'In matching pennies ogni cella ha un giocatore che vuole deviare, quindi non esiste equilibrio in strategie pure.' },
      { t: 'A ⟦mixed strategy⟧ assigns a probability to each pure strategy, and its payoff is an expected value.', it: 'Una strategia mista assegna una probabilità a ciascuna strategia pura, e il suo payoff è un valore atteso.' },
      { t: 'The ⟦indifference principle⟧ says that strategies actually used must give the same expected value against the opponent.', it: 'Il principio di indifferenza dice che le strategie davvero usate devono dare lo stesso valore atteso contro l’avversario.' },
      { t: 'In matching pennies the equilibrium is 1/2 for both players and the ⟦value of the game⟧ is 0.', it: 'In matching pennies l’equilibrio è 1/2 per entrambi e il valore del gioco è 0.' },
      { t: 'In rock-paper-scissors the equilibrium is 1/3 each, and an opponent who deviates can be exploited.', it: 'In sasso, carta, forbici l’equilibrio è 1/3 ciascuno, e un avversario che devia può essere sfruttato.' },
      { t: 'The ⟦minimax theorem⟧ by von Neumann says every finite two-player zero-sum game has a value in mixed strategies.', it: 'Il teorema del minimax di von Neumann dice che ogni gioco finito a somma zero tra due giocatori ha un valore in strategie miste.' },
      { t: 'Any ⟦predictable⟧ pattern can be exploited, so use a ⟦random generator⟧ rather than your own head.', it: 'Ogni schema prevedibile può essere sfruttato, quindi usa un generatore casuale invece della tua testa.' }
    ],
    gloss: [
      { w: 'matching pennies', it: 'pari e dispari con monete' },
      { w: 'pure strategy', it: 'strategia pura' },
      { w: 'mixed strategy', it: 'strategia mista' },
      { w: 'indifference principle', it: 'principio di indifferenza' },
      { w: 'value of the game', it: 'valore del gioco' },
      { w: 'minimax theorem', it: 'teorema del minimax' },
      { w: 'predictable', it: 'prevedibile' },
      { w: 'random generator', it: 'generatore casuale' },
      { w: 'expected value', it: 'valore atteso' },
      { w: 'exploit', it: 'sfruttare' }
    ]
  });
  A('str-nim-e-sprague-grundy', {
    title: { t: 'Nim and Sprague-Grundy numbers', it: 'Nim e numeri di Sprague-Grundy' },
    sum: [
      { t: 'In an ⟦impartial game⟧ both players have the same moves, and under the normal convention whoever cannot move loses.', it: 'In un gioco imparziale i due giocatori hanno le stesse mosse, e nella convenzione normale chi non può muovere perde.' },
      { t: 'Every position is ⟦P-position⟧ or ⟦N-position⟧: the player who just moved wins in P, the player to move wins in N.', it: 'Ogni posizione è P o N: vince chi ha appena mosso in P, chi deve muovere in N.' },
      { t: 'In a subtraction game you compute a table of P and N positions, then move toward a P position.', it: 'In un gioco di sottrazione si calcola la tabella delle posizioni P e N, poi si muove verso una posizione P.' },
      { t: 'In ⟦Nim⟧ the ⟦nim-sum⟧ is the XOR of the pile sizes, and by Bouton’s theorem a position is P exactly when it is 0.', it: 'Nel Nim la nim-sum è lo XOR delle dimensioni dei mucchi, e per il teorema di Bouton una posizione è P esattamente quando vale 0.' },
      { t: 'To win from a nonzero nim-sum, reduce one pile to its size XOR the nim-sum.', it: 'Per vincere da una nim-sum diversa da zero, riduci un mucchio alla sua dimensione XOR la nim-sum.' },
      { t: 'The ⟦Grundy number⟧ of a position is the ⟦mex⟧ of the Grundy numbers of the positions it can reach.', it: 'Il numero di Grundy di una posizione è il mex dei numeri di Grundy delle posizioni raggiungibili.' },
      { t: 'In a ⟦sum of games⟧ the Grundy number is the XOR of the components, as the Sprague-Grundy theorem states.', it: 'In una somma di giochi il numero di Grundy è lo XOR dei componenti, come afferma il teorema di Sprague-Grundy.' }
    ],
    gloss: [
      { w: 'impartial game', it: 'gioco imparziale' },
      { w: 'P-position', it: 'posizione P (perde chi muove)' },
      { w: 'N-position', it: 'posizione N (vince chi muove)' },
      { w: 'Nim', it: 'Nim, gioco dei mucchi' },
      { w: 'nim-sum', it: 'nim-sum, XOR dei mucchi' },
      { w: 'Grundy number', it: 'numero di Grundy' },
      { w: 'mex', it: 'minimo escluso' },
      { w: 'sum of games', it: 'somma di giochi' },
      { w: 'subtraction game', it: 'gioco di sottrazione' },
      { w: 'XOR', it: 'OR esclusivo, bit a bit' }
    ]
  });
  A('str-alberi-di-gioco-e-valutazione', {
    title: { t: 'Game trees and evaluation functions', it: 'Alberi di gioco e funzioni di valutazione' },
    sum: [
      { t: 'The size of a game tree is estimated with the ⟦branching factor⟧ b and the depth d: there are about b^d leaves.', it: 'La dimensione di un albero di gioco si stima con il fattore di ramificazione b e la profondità d: le foglie sono circa b^d.' },
      { t: 'In ⟦minimax⟧, MAX chooses the highest value and MIN the lowest, so MAX cannot count on a leaf that MIN will not allow.', it: 'Nel minimax MAX sceglie il valore più alto e MIN il più basso, quindi MAX non può contare su una foglia che MIN non permetterà.' },
      { t: '⟦Alpha-beta pruning⟧ skips branches that cannot change the result, and good ⟦move ordering⟧ makes it much stronger.', it: 'La potatura alfa-beta salta i rami che non cambiano il risultato, e un buon ordinamento delle mosse la rende molto più forte.' },
      { t: 'Since the search stops at a limited depth, an ⟦evaluation function⟧ estimates the position as a weighted sum of features.', it: 'Poiché la ricerca si ferma a profondità limitata, una funzione di valutazione stima la posizione come somma pesata di caratteristiche.' },
      { t: 'The ⟦horizon effect⟧ hides a threat beyond the depth limit, and ⟦quiescence search⟧ keeps looking until the position is calm.', it: 'L’effetto orizzonte nasconde una minaccia oltre il limite di profondità, e la ricerca di quiescenza continua finché la posizione è calma.' },
      { t: 'A ⟦transposition table⟧ stores positions already analysed, because different move orders can reach the same position.', it: 'Una tabella di trasposizione memorizza le posizioni già analizzate, perché ordini di mosse diversi possono raggiungere la stessa posizione.' },
      { t: 'Tic-tac-toe is solved: with perfect play it is a draw, and only a ⟦fork⟧ can beat a careful defender.', it: 'Il tris è risolto: con gioco perfetto è patta, e solo un doppio attacco può battere un difensore attento.' }
    ],
    gloss: [
      { w: 'branching factor', it: 'fattore di ramificazione' },
      { w: 'minimax', it: 'minimax' },
      { w: 'alpha-beta pruning', it: 'potatura alfa-beta' },
      { w: 'move ordering', it: 'ordinamento delle mosse' },
      { w: 'evaluation function', it: 'funzione di valutazione' },
      { w: 'horizon effect', it: 'effetto orizzonte' },
      { w: 'quiescence search', it: 'ricerca di quiescenza' },
      { w: 'transposition table', it: 'tabella di trasposizione' },
      { w: 'fork', it: 'doppio attacco' },
      { w: 'ply', it: 'semimossa' }
    ]
  });
  A('str-ottimizzazione-greedy-e-dp', {
    title: { t: 'Optimisation: greedy and dynamic programming', it: 'Ottimizzazione: greedy e programmazione dinamica' },
    sum: [
      { t: 'The number of candidate solutions is often huge, so trying them all is unrealistic.', it: 'Il numero di soluzioni candidate è spesso enorme, quindi provarle tutte non è realistico.' },
      { t: 'A ⟦greedy⟧ algorithm takes the choice that looks best now and never goes back; it works only if the problem has the right structure.', it: 'Un algoritmo greedy prende la scelta che sembra migliore subito e non torna indietro; funziona solo se il problema ha la struttura adatta.' },
      { t: '⟦Dynamic programming⟧ solves smaller ⟦subproblems⟧, stores the results and combines them, using ⟦optimal substructure⟧.', it: 'La programmazione dinamica risolve sottoproblemi più piccoli, memorizza i risultati e li combina, sfruttando la sottostruttura ottima.' },
      { t: 'For ⟦interval scheduling⟧, picking the activity that finishes first is optimal, as an ⟦exchange argument⟧ shows.', it: 'Per la selezione di intervalli, scegliere l’attività che finisce prima è ottimo, come mostra l’argomento di scambio.' },
      { t: 'Other plausible greedy rules, such as the earliest start or the shortest duration, fail on small counterexamples.', it: 'Altre regole greedy plausibili, come l’inizio più presto o la durata più breve, falliscono su piccoli controesempi.' },
      { t: 'In the ⟦0/1 knapsack⟧ the table gives the optimum, while greedy by value-to-weight ratio can be wrong.', it: 'Nello zaino 0/1 la tabella dà l’ottimo, mentre il greedy per rapporto valore/peso può sbagliare.' },
      { t: 'In the coin change problem greedy fails for some coin sets, so use it only with a proof.', it: 'Nel problema del resto il greedy fallisce per alcuni tagli di monete, quindi usalo solo con una dimostrazione.' }
    ],
    gloss: [
      { w: 'greedy', it: 'goloso, scelta migliore subito' },
      { w: 'dynamic programming', it: 'programmazione dinamica' },
      { w: 'optimal substructure', it: 'sottostruttura ottima' },
      { w: 'subproblems', it: 'sottoproblemi' },
      { w: 'interval scheduling', it: 'selezione di intervalli' },
      { w: 'exchange argument', it: 'argomento di scambio' },
      { w: '0/1 knapsack', it: 'zaino 0/1' },
      { w: 'counterexample', it: 'controesempio' },
      { w: 'recurrence', it: 'ricorrenza' },
      { w: 'optimisation', it: 'ottimizzazione' }
    ]
  });
  A('str-grafi-e-cammini-minimi', {
    title: { t: 'Graphs and shortest paths', it: 'Grafi e cammini minimi' },
    sum: [
      { t: 'A ⟦graph⟧ is a set of nodes joined by edges, which may be directed or weighted, and the sum of degrees is twice the number of edges.', it: 'Un grafo è un insieme di nodi collegati da archi, orientati o pesati, e la somma dei gradi è il doppio del numero di archi.' },
      { t: '⟦BFS⟧ explores level by level with a queue and finds the path with the fewest edges in an unweighted graph.', it: 'La BFS esplora per livelli con una coda e trova il cammino con meno archi in un grafo non pesato.' },
      { t: '⟦Dijkstra’s algorithm⟧ fixes the node with the smallest estimate and ⟦relaxes⟧ its outgoing edges, with non-negative weights.', it: 'L’algoritmo di Dijkstra fissa il nodo con la stima minore e rilassa i suoi archi uscenti, con pesi non negativi.' },
      { t: 'With negative weights Dijkstra’s guarantee fails, and you need a different algorithm such as Bellman-Ford.', it: 'Con pesi negativi la garanzia di Dijkstra cade, e serve un altro algoritmo come Bellman-Ford.' },
      { t: 'A ⟦minimum spanning tree⟧ connects all nodes at least total weight; it is a different problem from shortest paths.', it: 'Un albero di copertura minimo collega tutti i nodi con il peso totale minimo; è un problema diverso dai cammini minimi.' },
      { t: 'A project is a directed acyclic graph, and its minimum duration is the length of the ⟦critical path⟧, the longest one.', it: 'Un progetto è un grafo orientato aciclico, e la sua durata minima è la lunghezza del cammino critico, il più lungo.' },
      { t: 'Non-critical activities have ⟦slack⟧, so a small delay on them does not delay the project.', it: 'Le attività non critiche hanno margine, quindi un piccolo ritardo su di esse non ritarda il progetto.' }
    ],
    gloss: [
      { w: 'graph', it: 'grafo' },
      { w: 'BFS', it: 'ricerca in ampiezza' },
      { w: 'Dijkstra’s algorithm', it: 'algoritmo di Dijkstra' },
      { w: 'relaxes', it: 'rilassare un arco' },
      { w: 'minimum spanning tree', it: 'albero di copertura minimo' },
      { w: 'critical path', it: 'cammino critico' },
      { w: 'slack', it: 'margine (scorrimento)' },
      { w: 'edge', it: 'arco' },
      { w: 'queue', it: 'coda (primo entrato, primo uscito)' },
      { w: 'negative weights', it: 'pesi negativi' }
    ]
  });
  A('str-probabilita-nei-giochi', {
    title: { t: 'Probability in games', it: 'Probabilità nei giochi' },
    sum: [
      { t: 'With equally likely outcomes, probability is favourable cases over possible cases; two dice have 36 outcomes and 7 is the most likely sum.', it: 'Con esiti equiprobabili la probabilità è casi favorevoli su casi possibili; due dadi hanno 36 esiti e la somma più probabile è 7.' },
      { t: 'The ⟦expected value⟧ of a bet is the average result weighted by probabilities, and a bet is ⟦fair⟧ when it equals 0.', it: 'Il valore atteso di una scommessa è la media dei risultati pesata con le probabilità, e la scommessa è equa quando vale 0.' },
      { t: 'Cards drawn are not put back, so events are ⟦dependent⟧ and ⟦conditional probability⟧ changes as information arrives.', it: 'Le carte estratte non si rimettono, quindi gli eventi sono dipendenti e la probabilità condizionata cambia con l’informazione.' },
      { t: 'The ⟦binomial⟧ formula gives the chance of exactly k successes, and “at least one” is easiest as 1 minus the chance of none.', it: 'La formula binomiale dà la probabilità di esattamente k successi, e «almeno uno» si calcola come 1 meno la probabilità di nessuno.' },
      { t: 'In ⟦Monty Hall⟧ switching wins 2/3 of the time, because the host’s choice carries information.', it: 'In Monty Hall cambiare porta vince 2/3 delle volte, perché la scelta del conduttore porta informazione.' },
      { t: 'The ⟦gambler’s fallacy⟧ is believing the opposite result is due; for independent events the past does not matter.', it: 'La fallacia del giocatore è credere che l’esito opposto sia dovuto; per eventi indipendenti il passato non conta.' },
      { t: 'The casino’s ⟦house edge⟧ makes the expected value negative for the player, and it cannot be beaten by luck over many bets.', it: 'Il vantaggio del banco rende negativo il valore atteso per il giocatore e non si batte con la fortuna su molte puntate.' }
    ],
    gloss: [
      { w: 'expected value', it: 'valore atteso' },
      { w: 'fair', it: 'equa (valore atteso 0)' },
      { w: 'dependent', it: 'dipendente (senza reinserimento)' },
      { w: 'conditional probability', it: 'probabilità condizionata' },
      { w: 'binomial', it: 'binomiale' },
      { w: 'Monty Hall', it: 'problema di Monty Hall' },
      { w: 'gambler’s fallacy', it: 'fallacia del giocatore' },
      { w: 'house edge', it: 'vantaggio del banco' },
      { w: 'law of large numbers', it: 'legge dei grandi numeri' },
      { w: 'card counting', it: 'conteggio delle carte' }
    ]
  });
  A('str-pianificazione-e-vincoli', {
    title: { t: 'Planning and constraints', it: 'Pianificazione e vincoli' },
    sum: [
      { t: 'A ⟦CSP⟧ is described by variables, domains and constraints, and a solution breaks no constraint.', it: 'Un CSP si descrive con variabili, domini e vincoli, e una soluzione non viola nessun vincolo.' },
      { t: '⟦Backtracking⟧ builds the solution one assignment at a time and goes back as soon as a constraint is violated.', it: 'Il backtracking costruisce la soluzione un’assegnazione alla volta e torna indietro appena un vincolo è violato.' },
      { t: 'The ⟦MRV⟧ heuristic picks the variable with the fewest possible values, so failures show up early.', it: 'L’euristica MRV sceglie la variabile con meno valori possibili, così i fallimenti emergono presto.' },
      { t: '⟦Forward checking⟧ removes incompatible values from neighbours’ domains after each assignment.', it: 'Il forward checking elimina i valori incompatibili dai domini dei vicini dopo ogni assegnazione.' },
      { t: 'A small sudoku can be solved by pure ⟦propagation⟧, using what each row, column and box already contains.', it: 'Un piccolo sudoku si risolve con la sola propagazione, usando ciò che ogni riga, colonna e riquadro contiene già.' },
      { t: 'With deadlines, ⟦earliest deadline first⟧ finds an order that meets them all whenever one exists.', it: 'Con le scadenze, earliest deadline first trova un ordine che le rispetta tutte quando esiste.' },
      { t: 'When criteria conflict, the ⟦Pareto frontier⟧ keeps the options that no other option dominates.', it: 'Quando i criteri sono in conflitto, la frontiera di Pareto tiene le opzioni che nessun’altra domina.' }
    ],
    gloss: [
      { w: 'CSP', it: 'problema di soddisfacimento di vincoli' },
      { w: 'backtracking', it: 'ricerca con ritorno indietro' },
      { w: 'MRV', it: 'valori residui minimi' },
      { w: 'forward checking', it: 'controllo in avanti' },
      { w: 'propagation', it: 'propagazione dei vincoli' },
      { w: 'earliest deadline first', it: 'prima la scadenza più vicina' },
      { w: 'Pareto frontier', it: 'frontiera di Pareto' },
      { w: 'domain', it: 'dominio, valori possibili' },
      { w: 'dominates', it: 'domina' },
      { w: 'NP-complete', it: 'NP-completo' }
    ]
  });
  A('str-scacchi-regole-e-valore-dei-pezzi', {
    title: { t: 'Chess: rules, special moves and piece values', it: 'Scacchi: regole, mosse speciali e valore dei pezzi' },
    sum: [
      { t: 'The board has 64 squares, with files named a to h and ranks numbered 1 to 8, so every square has a name like e4.', it: 'La scacchiera ha 64 caselle, con colonne a–h e traverse 1–8, quindi ogni casella ha un nome come e4.' },
      { t: 'Rooks, bishops and queens move any number of free squares but cannot jump; the knight jumps in an L shape.', it: 'Torri, alfieri e donne si muovono per quante caselle libere vogliono ma non saltano; il cavallo salta a forma di L.' },
      { t: 'The pawn moves forward, captures diagonally, and has three special rules: ⟦castling⟧, ⟦en passant⟧ and ⟦promotion⟧.', it: 'Il pedone avanza, cattura in diagonale e ha regole speciali: arrocco, presa en passant e promozione.' },
      { t: 'In ⟦check⟧ you must move the king, capture the attacker or block; with no defence it is ⟦checkmate⟧.', it: 'Sotto scacco si deve muovere il Re, catturare l’attaccante o interporsi; senza difesa è scacco matto.' },
      { t: 'If the player to move is not in check but has no legal move, it is ⟦stalemate⟧ and the game is drawn.', it: 'Se chi ha il tratto non è sotto scacco ma non ha mosse legali, è stallo e la partita è patta.' },
      { t: 'Other draws come by agreement, threefold repetition, the fifty-move rule or insufficient material.', it: 'Altre patte arrivano per accordo, triplice ripetizione, regola delle cinquanta mosse o materiale insufficiente.' },
      { t: 'The usual ⟦piece values⟧ are pawn 1, knight 3, bishop 3, rook 5 and queen 9, but they are averages, not laws.', it: 'I valori usuali dei pezzi sono pedone 1, cavallo 3, alfiere 3, torre 5 e donna 9, ma sono medie, non leggi.' }
    ],
    gloss: [
      { w: 'castling', it: 'arrocco' },
      { w: 'en passant', it: 'presa en passant' },
      { w: 'promotion', it: 'promozione del pedone' },
      { w: 'check', it: 'scacco' },
      { w: 'checkmate', it: 'scacco matto' },
      { w: 'stalemate', it: 'stallo (patta)' },
      { w: 'piece values', it: 'valore dei pezzi' },
      { w: 'file', it: 'colonna' },
      { w: 'rank', it: 'traversa' },
      { w: 'threefold repetition', it: 'triplice ripetizione' }
    ]
  });
  A('str-scacchi-principi-di-apertura', {
    title: { t: 'Chess: opening principles', it: 'Scacchi: i principi dell’apertura' },
    sum: [
      { t: 'The goal of the opening is not to win material but to bring your army into play before your opponent.', it: 'L’obiettivo dell’apertura non è vincere materiale ma portare l’esercito in campo prima dell’avversario.' },
      { t: 'You ⟦control the center⟧ by occupying it with pawns or influencing it from a distance with pieces.', it: 'Si controlla il centro occupandolo con i pedoni o influenzandolo a distanza con i pezzi.' },
      { t: '⟦Develop⟧ knights and bishops toward useful squares, and do not move the same piece twice without a reason.', it: 'Sviluppa cavalli e alfieri verso caselle utili e non muovere due volte lo stesso pezzo senza un motivo.' },
      { t: 'Every move costs a ⟦tempo⟧, so wasted moves leave your pieces closed while the opponent attacks.', it: 'Ogni mossa costa un tempo, quindi le mosse sprecate lasciano i pezzi chiusi mentre l’avversario attacca.' },
      { t: '⟦Castling⟧ brings the king to safety and a rook into play in a single move.', it: 'L’arrocco porta il Re al sicuro e una torre in gioco con una sola mossa.' },
      { t: 'Do not bring the queen out too early: it becomes a target, as the ⟦scholar’s mate⟧ shows.', it: 'Non portare fuori troppo presto la donna: diventa un bersaglio, come mostra il matto del barbiere.' },
      { t: 'Before leaving the opening, check that the king is safe, the pieces are developed and the rooks are ⟦connected⟧.', it: 'Prima di lasciare l’apertura controlla che il Re sia al sicuro, i pezzi sviluppati e le torri collegate.' }
    ],
    gloss: [
      { w: 'control the center', it: 'controllare il centro' },
      { w: 'develop', it: 'sviluppare i pezzi' },
      { w: 'tempo', it: 'tempo (una mossa)' },
      { w: 'castling', it: 'arrocco' },
      { w: 'scholar’s mate', it: 'matto del barbiere' },
      { w: 'connected', it: 'collegate (torri)' },
      { w: 'opening', it: 'apertura' },
      { w: 'middlegame', it: 'mediogioco' },
      { w: 'open file', it: 'colonna aperta' },
      { w: 'Italian Game', it: 'Giuoco Piano' }
    ]
  });
  A('str-scacchi-matti-elementari', {
    title: { t: 'Chess: elementary checkmates', it: 'Scacchi: i matti elementari' },
    sum: [
      { t: 'A mate needs the king in check with every escape square controlled, and no way to capture or block.', it: 'Un matto richiede il Re sotto scacco con ogni casella di fuga controllata, e nessuna possibilità di catturare o interporsi.' },
      { t: 'With king and queen against king, give the queen a knight’s-move distance, bring your king closer, then mate with the queen protected.', it: 'Con Re e donna contro Re, tieni la donna a un salto di cavallo, avvicina il tuo Re, poi dai matto con la donna protetta.' },
      { t: 'The great danger when you are far ahead is ⟦stalemate⟧, so check that your opponent still has a move.', it: 'Il grande pericolo quando si è molto in vantaggio è lo stallo, quindi controlla che l’avversario abbia ancora una mossa.' },
      { t: 'King and rook against king needs the ⟦opposition⟧ and a check on the edge of the board.', it: 'Re e torre contro Re richiedono l’opposizione e uno scacco sul bordo.' },
      { t: 'Two rooks mate with the ⟦ladder⟧, pushing the king toward the edge one rank at a time.', it: 'Due torri danno matto con la scala, spingendo il Re verso il bordo una traversa alla volta.' },
      { t: 'The ⟦back-rank mate⟧ hits a king hemmed in by its own pawns, and a ⟦luft⟧, a free square, prevents it.', it: 'Il matto di corridoio colpisce un Re chiuso dai propri pedoni, e una finestra, una casella libera, lo previene.' },
      { t: 'The ⟦smothered mate⟧ is given by a knight to a king surrounded by its own pieces, as in the Philidor legacy.', it: 'Il matto soffocato lo dà un cavallo a un Re circondato dai propri pezzi, come nell’eredità di Philidor.' }
    ],
    gloss: [
      { w: 'stalemate', it: 'stallo' },
      { w: 'opposition', it: 'opposizione dei Re' },
      { w: 'ladder', it: 'scala (due torri)' },
      { w: 'back-rank mate', it: 'matto di corridoio' },
      { w: 'smothered mate', it: 'matto soffocato' },
      { w: 'luft', it: 'finestra, casella libera per il Re' },
      { w: 'escape square', it: 'casella di fuga' },
      { w: 'checkmate', it: 'scacco matto' },
      { w: 'fool’s mate', it: 'matto del Pazzo' },
      { w: 'protected', it: 'protetto, difeso' }
    ]
  });
  A('str-scacchi-motivi-tattici', {
    title: { t: 'Chess: tactical motifs', it: 'Scacchi: i motivi tattici' },
    sum: [
      { t: 'A ⟦fork⟧ attacks two targets at once, so the opponent can save only one; the knight is the ideal forking piece.', it: 'La forchetta attacca due bersagli insieme, quindi l’avversario ne salva uno solo; il cavallo è il pezzo ideale.' },
      { t: 'A piece is ⟦pinned⟧ when it stands between an enemy long-range piece and a more valuable piece behind it, or the king.', it: 'Un pezzo è inchiodato quando sta tra un pezzo avversario a lunga gittata e un pezzo di maggior valore dietro di lui, o il Re.' },
      { t: 'A ⟦skewer⟧ is a reversed pin: the valuable piece is in front, must move, and the piece behind is captured.', it: 'L’infilata è un’inchiodatura rovesciata: il pezzo prezioso sta davanti, deve muoversi, e il pezzo dietro viene catturato.' },
      { t: 'A ⟦discovered attack⟧ moves a piece that hides another attacker, and a discovered check gives the moved piece a free move.', it: 'Un attacco di scoperta muove un pezzo che nasconde un altro attaccante, e uno scacco di scoperta dà una mossa libera al pezzo mosso.' },
      { t: '⟦Deflection⟧ pulls a defender away from its job, while ⟦removing the defender⟧ captures it and the target falls.', it: 'La deviazione allontana un difensore dal suo compito, mentre l’eliminazione del difensore lo cattura e il bersaglio cade.' },
      { t: '⟦Overloading⟧ exploits a piece that has two duties and cannot perform both.', it: 'Il sovraccarico sfrutta un pezzo che ha due compiti e non riesce a svolgerli entrambi.' },
      { t: 'A ⟦zwischenzug⟧ is an in-between move, usually a check, played before the expected recapture.', it: 'Lo zwischenzug è una mossa intermedia, di solito uno scacco, giocata prima della ripresa attesa.' }
    ],
    gloss: [
      { w: 'fork', it: 'forchetta, attacco doppio' },
      { w: 'pinned', it: 'inchiodato' },
      { w: 'skewer', it: 'infilata' },
      { w: 'discovered attack', it: 'attacco di scoperta' },
      { w: 'deflection', it: 'deviazione' },
      { w: 'removing the defender', it: 'eliminazione del difensore' },
      { w: 'overloading', it: 'sovraccarico' },
      { w: 'zwischenzug', it: 'mossa intermedia' },
      { w: 'decoy', it: 'attrazione' },
      { w: 'forcing move', it: 'mossa forzante' }
    ]
  });
  A('str-scacchi-finali-essenziali', {
    title: { t: 'Chess: essential endgames', it: 'Scacchi: i finali essenziali' },
    sum: [
      { t: 'In the endgame the king becomes an active piece, and an extra pawn often decides because it can promote.', it: 'Nel finale il Re diventa un pezzo attivo, e un pedone in più spesso decide perché può promuovere.' },
      { t: 'With ⟦opposition⟧ the player who does not have to move holds the stronger position in king and pawn endings.', it: 'Con l’opposizione chi non deve muovere ha la posizione migliore nei finali di Re e pedone.' },
      { t: 'If the attacking king reaches a ⟦key square⟧, the pawn promotes whatever the defender does.', it: 'Se il Re attaccante raggiunge una casella chiave, il pedone promuove qualunque cosa faccia il difensore.' },
      { t: 'The ⟦rule of the square⟧ tells you whether a defending king can catch a running pawn.', it: 'La regola del quadrato dice se un Re difensore può raggiungere un pedone che corre.' },
      { t: 'A rook pawn can draw if the defender reaches the corner, and the ⟦wrong-colored bishop⟧ gives the same drawing chance.', it: 'Un pedone di torre può dare patta se il difensore raggiunge l’angolo, e l’alfiere di colore sbagliato dà la stessa possibilità.' },
      { t: 'The ⟦Lucena position⟧ is the winning method in rook endings: the attacker builds a bridge.', it: 'La posizione di Lucena è il metodo vincente nei finali di torre: l’attaccante costruisce il ponte.' },
      { t: 'The ⟦Philidor position⟧ is the basic drawing defence, with the rook on the sixth rank and checks from behind.', it: 'La posizione di Philidor è la difesa base per la patta, con la torre sulla sesta traversa e scacchi da dietro.' }
    ],
    gloss: [
      { w: 'opposition', it: 'opposizione' },
      { w: 'key square', it: 'casella chiave' },
      { w: 'rule of the square', it: 'regola del quadrato' },
      { w: 'wrong-colored bishop', it: 'alfiere di colore sbagliato' },
      { w: 'Lucena position', it: 'posizione di Lucena' },
      { w: 'Philidor position', it: 'posizione di Philidor' },
      { w: 'passed pawn', it: 'pedone passato' },
      { w: 'rook pawn', it: 'pedone di torre' },
      { w: 'endgame', it: 'finale' },
      { w: 'promote', it: 'promuovere' }
    ]
  });
  A('str-scacchi-metodo-di-calcolo', {
    title: { t: 'Chess: a method for calculation', it: 'Scacchi: il metodo di calcolo' },
    sum: [
      { t: 'Most games between beginners are decided by ⟦blunders⟧, and a good thinking method mainly prevents them.', it: 'La maggior parte delle partite tra principianti si decide con errori grossolani, e un buon metodo di pensiero li previene soprattutto.' },
      { t: 'The method looks at the position, lists ⟦candidate moves⟧, calculates, evaluates, chooses and runs a final check.', it: 'Il metodo guarda la posizione, elenca le mosse candidate, calcola, valuta, sceglie ed esegue un controllo finale.' },
      { t: 'Do not choose the first move you see; when a move seems obvious, look for at least one alternative.', it: 'Non scegliere la prima mossa che vedi; quando una mossa sembra ovvia, cerca almeno un’alternativa.' },
      { t: 'Calculate ⟦forcing moves⟧ first, in order: checks, captures and threats, because they shrink the tree of variations.', it: 'Calcola per prime le mosse forzanti, in ordine: scacchi, catture e minacce, perché riducono l’albero delle varianti.' },
      { t: 'Calculate one ⟦variation⟧ at a time to the end, assume the opponent’s best reply, and stop in a quiet position.', it: 'Calcola una variante alla volta fino in fondo, ipotizza la migliore risposta dell’avversario e fermati in una posizione tranquilla.' },
      { t: 'The ⟦blunder check⟧ asks what you leave behind and what the opponent can do after your move.', it: 'Il controllo anti-errore chiede cosa lasci e cosa può fare l’avversario dopo la tua mossa.' },
      { t: 'When there is no tactic, evaluate ⟦material⟧, ⟦king safety⟧, piece activity and ⟦pawn structure⟧.', it: 'Quando non c’è una tattica, valuta materiale, sicurezza del Re, attività dei pezzi e struttura dei pedoni.' }
    ],
    gloss: [
      { w: 'candidate moves', it: 'mosse candidate' },
      { w: 'forcing moves', it: 'mosse forzanti' },
      { w: 'variation', it: 'variante' },
      { w: 'blunder check', it: 'controllo anti-errore' },
      { w: 'blunders', it: 'errori grossolani' },
      { w: 'evaluate', it: 'valutare' },
      { w: 'king safety', it: 'sicurezza del Re' },
      { w: 'pawn structure', it: 'struttura dei pedoni' },
      { w: 'material', it: 'materiale' },
      { w: 'quiet position', it: 'posizione tranquilla' }
    ]
  });
  A('str-scacchi-strutture-di-pedoni', {
    title: { t: 'Pawn structures: isolated, doubled, backward and passed', it: 'Strutture di pedoni: isolati, doppiati, arretrati e passati' },
    sum: [
      { t: 'Pawns cannot move backwards, so the pawn structure is the most stable part of a position and shapes the whole game.', it: 'I pedoni non tornano indietro, quindi la struttura di pedoni è la parte più stabile della posizione e plasma tutta la partita.' },
      { t: 'An ⟦isolated pawn⟧ has no friendly pawns on adjacent files, and its blockade square is the main weakness.', it: 'Un pedone isolato non ha pedoni amici sulle colonne adiacenti, e la sua casa di blocco è la debolezza principale.' },
      { t: '⟦Doubled pawns⟧ stand on the same file; they are usually a weakness, but may be worth it for compensation.', it: 'I pedoni doppiati stanno sulla stessa colonna; di solito sono una debolezza, ma possono valere per il compenso.' },
      { t: 'A ⟦backward pawn⟧ cannot be defended by pawns and cannot advance, leaving a hole in front of it.', it: 'Un pedone arretrato non può essere difeso da pedoni né avanzare, e lascia un buco davanti a sé.' },
      { t: 'A ⟦passed pawn⟧ has no enemy pawns ahead on its file or the adjacent ones, and it should first be blockaded.', it: 'Un pedone passato non ha pedoni avversari davanti sulla sua colonna e su quelle adiacenti, e va prima bloccato.' },
      { t: 'In a ⟦pawn chain⟧ you attack the base, and a ⟦majority⟧ is used to create a passed pawn.', it: 'In una catena di pedoni si attacca la base, e una maggioranza serve a creare un pedone passato.' },
      { t: 'An ⟦outpost⟧ is a hole in enemy territory occupied by a piece protected by a pawn.', it: 'Un avamposto è un buco in territorio avversario occupato da un pezzo protetto da un pedone.' }
    ],
    gloss: [
      { w: 'isolated pawn', it: 'pedone isolato' },
      { w: 'doubled pawns', it: 'pedoni doppiati' },
      { w: 'backward pawn', it: 'pedone arretrato' },
      { w: 'passed pawn', it: 'pedone passato' },
      { w: 'pawn chain', it: 'catena di pedoni' },
      { w: 'majority', it: 'maggioranza di pedoni' },
      { w: 'outpost', it: 'avamposto' },
      { w: 'hole', it: 'buco, casa non più difendibile da pedoni' },
      { w: 'blockade', it: 'blocco' },
      { w: 'pawn structure', it: 'struttura di pedoni' }
    ]
  });
  A('str-scacchi-colonne-diagonali-e-case-forti', {
    title: { t: 'Files, diagonals and strong squares', it: 'Colonne, diagonali e case forti' },
    sum: [
      { t: 'An ⟦open file⟧ has no pawns at all, and a ⟦half-open file⟧ has only enemy pawns, so rooks use it to press on a weak pawn.', it: 'Una colonna aperta non ha pedoni, una semiaperta ha solo pedoni avversari, e le torri la usano per premere su un pedone debole.' },
      { t: 'To win a file you occupy it, ⟦double⟧ the rooks, then penetrate to the seventh or eighth rank.', it: 'Per conquistare una colonna la si occupa, si raddoppiano le torri, poi si penetra in settima o ottava traversa.' },
      { t: 'A rook on the ⟦seventh rank⟧ attacks unprotected pawns and confines the enemy king.', it: 'Una torre in settima attacca i pedoni non protetti e confina il Re avversario.' },
      { t: 'A knight on an ⟦outpost⟧ is protected by a pawn and cannot be attacked by enemy pawns, so it is often stronger than a bishop.', it: 'Un cavallo su un avamposto è protetto da un pedone e non attaccabile da pedoni avversari, quindi spesso è più forte di un alfiere.' },
      { t: 'A bishop is ⟦bad⟧ when its own pawns stand on its color and block it, and good when they stand on the other color.', it: 'Un alfiere è cattivo quando i suoi pedoni stanno sul suo colore e lo bloccano, buono quando stanno sull’altro colore.' },
      { t: 'A ⟦weak square⟧ can no longer be defended by pawns, and a fianchettoed bishop presses along a long diagonal.', it: 'Una casa debole non può più essere difesa dai pedoni, e un alfiere in fianchetto preme lungo una grande diagonale.' },
      { t: 'The side with a ⟦space advantage⟧ avoids exchanges, while the cramped side seeks them.', it: 'Chi ha il vantaggio di spazio evita i cambi, mentre chi ha meno spazio li cerca.' }
    ],
    gloss: [
      { w: 'open file', it: 'colonna aperta' },
      { w: 'half-open file', it: 'colonna semiaperta' },
      { w: 'double', it: 'raddoppiare le torri' },
      { w: 'seventh rank', it: 'settima traversa' },
      { w: 'outpost', it: 'avamposto' },
      { w: 'bad', it: 'cattivo (alfiere bloccato)' },
      { w: 'weak square', it: 'casa debole' },
      { w: 'space advantage', it: 'vantaggio di spazio' },
      { w: 'fianchetto', it: 'fianchetto (alfiere in b2/g2)' },
      { w: 'long diagonal', it: 'grande diagonale' }
    ]
  });
  A('str-scacchi-scambi-e-squilibri', {
    title: { t: 'Exchanges and imbalances: when to trade, when to avoid', it: 'Scambi e squilibri: quando cambiare, quando evitare' },
    sum: [
      { t: 'Positions are rarely equal: the differences are called ⟦imbalances⟧, and the best plan turns yours into an advantage.', it: 'Le posizioni raramente sono pari: le differenze si chiamano squilibri, e il piano migliore trasforma i tuoi in vantaggio.' },
      { t: 'Piece values are averages, and the position changes them; rook against minor piece is the ⟦exchange⟧, a difference of about 2 points.', it: 'I valori dei pezzi sono medie e la posizione li modifica; torre contro pezzo minore è la qualità, una differenza di circa 2 punti.' },
      { t: 'Before trading ask which piece you give, which piece you get and what structure remains.', it: 'Prima di cambiare chiediti quale pezzo dai, quale ricevi e quale struttura resta.' },
      { t: 'The ⟦bishop pair⟧ is a small lasting advantage, strongest in open positions with pawns on both wings.', it: 'La coppia degli alfieri è un piccolo vantaggio duraturo, più forte in posizioni aperte con pedoni su entrambe le ali.' },
      { t: 'Bishops prefer open positions, while knights prefer closed positions and outposts.', it: 'Gli alfieri preferiscono le posizioni aperte, mentre i cavalli preferiscono le posizioni chiuse e gli avamposti.' },
      { t: 'An ⟦exchange sacrifice⟧ needs concrete ⟦compensation⟧, such as pawns, an ⟦outpost⟧ or a ruined enemy structure.', it: 'Un sacrificio di qualità richiede un compenso concreto, come pedoni, un avamposto o una struttura avversaria rovinata.' },
      { t: 'When ahead, ⟦simplify⟧ by trading pieces and queens rather than pawns; when behind, avoid trades and seek complications.', it: 'In vantaggio si semplifica cambiando pezzi e donne e non pedoni; in svantaggio si evitano i cambi e si cercano complicazioni.' }
    ],
    gloss: [
      { w: 'imbalances', it: 'squilibri' },
      { w: 'exchange', it: 'qualità (torre contro pezzo minore)' },
      { w: 'bishop pair', it: 'coppia degli alfieri' },
      { w: 'exchange sacrifice', it: 'sacrificio di qualità' },
      { w: 'simplify', it: 'semplificare' },
      { w: 'compensation', it: 'compenso' },
      { w: 'outpost', it: 'avamposto' },
      { w: 'open position', it: 'posizione aperta' },
      { w: 'closed position', it: 'posizione chiusa' },
      { w: 'trade', it: 'cambio di pezzi' }
    ]
  });
  A('str-scacchi-iniziativa-e-attacco', {
    title: { t: 'Initiative, development and attacking the king', it: 'Iniziativa, sviluppo e attacco al Re' },
    sum: [
      { t: 'The player with the ⟦initiative⟧ sets the rhythm: every move makes a threat and forces a reply.', it: 'Chi ha l’iniziativa detta il ritmo: ogni mossa fa una minaccia e costringe a rispondere.' },
      { t: 'A ⟦development lead⟧ means having more pieces in play, and you should use it with an active move.', it: 'Un vantaggio di sviluppo significa avere più pezzi in gioco, e va sfruttato con una mossa attiva.' },
      { t: 'To attack a castled king you need pieces near it, open lines and weaknesses in its shelter.', it: 'Per attaccare un Re arroccato servono pezzi vicini, linee aperte e debolezze nel suo riparo.' },
      { t: 'Count ⟦attackers and defenders⟧ near the king: a sacrifice usually works only with more attackers.', it: 'Conta gli attaccanti e i difensori vicino al Re: un sacrificio di solito riesce solo con più attaccanti.' },
      { t: 'A knight on f6 usually defends h7 and makes the ⟦Greek gift⟧ sacrifice fail.', it: 'Un cavallo in f6 di solito difende h7 e fa fallire il sacrificio greco.' },
      { t: 'First the center, then the wing: an attack on the wing is punished by a ⟦central counterstrike⟧ if the center is unstable.', it: 'Prima il centro, poi l’ala: un attacco sull’ala è punito da una controspinta centrale se il centro è instabile.' },
      { t: '⟦Prophylaxis⟧ means preventing the opponent’s plans by asking “what does my opponent want to do?”', it: 'La profilassi significa prevenire i piani dell’avversario chiedendosi «che cosa vuole fare il mio avversario?».' }
    ],
    gloss: [
      { w: 'initiative', it: 'iniziativa' },
      { w: 'development lead', it: 'vantaggio di sviluppo' },
      { w: 'attackers and defenders', it: 'attaccanti e difensori' },
      { w: 'central counterstrike', it: 'controspinta centrale' },
      { w: 'prophylaxis', it: 'profilassi' },
      { w: 'Greek gift', it: 'sacrificio greco (Axh7+)' },
      { w: 'castled king', it: 'Re arroccato' },
      { w: 'open line', it: 'linea aperta' },
      { w: 'sacrifice', it: 'sacrificio' },
      { w: 'gambit', it: 'gambetto' }
    ]
  });
  A('str-scacchi-analisi-delle-partite', {
    title: { t: 'Analysing your games and building a repertoire', it: 'Analizzare le proprie partite e costruire un repertorio' },
    sum: [
      { t: 'Playing many games is not enough: ⟦analysis⟧ turns experience into knowledge.', it: 'Giocare molte partite non basta: l’analisi trasforma l’esperienza in conoscenza.' },
      { t: 'First replay the game, find the turning points yourself and form a ⟦hypothesis⟧, and only afterwards check with an ⟦engine⟧.', it: 'Prima rigioca la partita e trova da solo i punti di svolta, e solo dopo controlla con un motore.' },
      { t: 'A ⟦critical moment⟧ is a position where the choice truly matters, and it deserves more time on the clock.', it: 'Un momento critico è una posizione in cui la scelta conta davvero, e merita più tempo sull’orologio.' },
      { t: 'Classify each mistake as tactical, strategic, time-related or psychological, because the cure depends on the cause.', it: 'Classifica ogni errore come tattico, strategico, di tempo o psicologico, perché la cura dipende dalla causa.' },
      { t: 'Keep a ⟦mistake log⟧ with the position, what you played, what you should have played and a rule.', it: 'Tieni un registro degli errori con la posizione, cosa hai giocato, cosa dovevi giocare e una regola.' },
      { t: 'Use the engine to verify your ideas, not to copy its moves without understanding them.', it: 'Usa il motore per verificare le tue ipotesi, non per copiarne le mosse senza capirle.' },
      { t: 'Build a small ⟦repertoire⟧ chosen by structure, learn the plans and not only the moves, and update it after each game.', it: 'Costruisci un piccolo repertorio scelto per struttura, impara i piani e non solo le mosse, e aggiornalo dopo ogni partita.' }
    ],
    gloss: [
      { w: 'engine', it: 'motore scacchistico' },
      { w: 'critical moment', it: 'momento critico' },
      { w: 'mistake log', it: 'registro degli errori' },
      { w: 'repertoire', it: 'repertorio d’apertura' },
      { w: 'analysis', it: 'analisi' },
      { w: 'tactical mistake', it: 'errore tattico' },
      { w: 'strategic mistake', it: 'errore strategico' },
      { w: 'notation', it: 'notazione della partita' },
      { w: 'hypothesis', it: 'ipotesi' },
      { w: 'plan', it: 'piano' }
    ]
  });
  A('str-scacchi-allenamento-e-torneo', {
    title: { t: 'Training, tournaments and the Elo rating', it: 'Allenamento, torneo e rating Elo' },
    sum: [
      { t: 'Improving needs ⟦deliberate practice⟧: a clear goal, hard but reachable tasks, feedback and a review of mistakes.', it: 'Migliorare richiede pratica deliberata: un obiettivo chiaro, compiti difficili ma raggiungibili, riscontro e ripasso degli errori.' },
      { t: 'Regularity matters more than length, and tactics and endgames should be trained often.', it: 'La regolarità conta più della durata, e tattica e finali vanno allenati spesso.' },
      { t: 'To learn, prefer longer ⟦time controls⟧ over ⟦blitz⟧, which trains reflexes but is not enough on its own.', it: 'Per imparare conviene preferire ritmi di gioco più lunghi del blitz, che allena i riflessi ma da solo non basta.' },
      { t: 'A tournament ⟦routine⟧ reduces stress: rest well, check threats before each move and remember ⟦touch-move⟧.', it: 'Una routine di torneo riduce lo stress: riposa bene, controlla le minacce prima di ogni mossa e ricorda mossa toccata, mossa giocata.' },
      { t: 'Nerves are normal; breathe slowly, accept mistakes and focus on the process, not the result.', it: 'Il nervosismo è normale; respira lentamente, accetta gli errori e concentrati sul processo, non sul risultato.' },
      { t: 'The ⟦Elo rating⟧ measures relative strength by giving an expected score from the rating difference.', it: 'Il rating Elo misura la forza relativa dando un punteggio atteso dalla differenza di rating.' },
      { t: 'After a game the rating changes by K times the difference between actual and ⟦expected score⟧, so beating a stronger player pays more.', it: 'Dopo la partita il rating cambia di K per la differenza tra punteggio ottenuto e atteso, quindi battere un più forte rende di più.' }
    ],
    gloss: [
      { w: 'deliberate practice', it: 'pratica deliberata' },
      { w: 'time controls', it: 'ritmi di gioco' },
      { w: 'routine', it: 'routine' },
      { w: 'Elo rating', it: 'rating Elo' },
      { w: 'expected score', it: 'punteggio atteso' },
      { w: 'blitz', it: 'blitz, partite brevi' },
      { w: 'touch-move', it: 'mossa toccata, mossa giocata' },
      { w: 'tactics', it: 'tattica' },
      { w: 'endgames', it: 'finali' },
      { w: 'feedback', it: 'riscontro, feedback' }
    ]
  });
  A('str-utilita-e-avversione-al-rischio', {
    title: { t: 'Utility and risk aversion', it: 'Utilità e avversione al rischio' },
    sum: [
      { t: 'Expected value is not enough, because the subjective value of money does not grow in proportion to the amount.', it: 'Il valore atteso non basta, perché il valore soggettivo del denaro non cresce in proporzione alla somma.' },
      { t: 'A ⟦utility function⟧ gives each amount a value, and you choose the option with the highest ⟦expected utility⟧.', it: 'Una funzione di utilità dà un valore a ogni somma, e si sceglie l’opzione con la più alta utilità attesa.' },
      { t: 'With a concave utility the person is ⟦risk-averse⟧; with a linear one, risk-neutral; with a convex one, risk-seeking.', it: 'Con utilità concava la persona è avversa al rischio; con utilità lineare è neutrale; con utilità convessa è propensa al rischio.' },
      { t: 'The ⟦certainty equivalent⟧ is the sure amount judged equal to a gamble, and expected value minus it is the ⟦risk premium⟧.', it: 'L’equivalente certo è la cifra sicura giudicata pari alla scommessa, e il valore atteso meno esso è il premio per il rischio.' },
      { t: 'The ⟦St. Petersburg paradox⟧ has infinite expected value, yet nobody pays much to play it.', it: 'Il paradosso di San Pietroburgo ha valore atteso infinito, eppure nessuno paga molto per giocare.' },
      { t: 'Insurance can make sense for a risk-averse person even when the premium exceeds the expected loss.', it: 'L’assicurazione può avere senso per chi è avverso al rischio anche se il premio supera la perdita attesa.' },
      { t: '⟦Prospect theory⟧ adds a reference point, ⟦loss aversion⟧ and diminishing sensitivity to explain real choices.', it: 'La teoria del prospetto aggiunge punto di riferimento, avversione alle perdite e sensibilità decrescente per spiegare le scelte reali.' }
    ],
    gloss: [
      { w: 'utility function', it: 'funzione di utilità' },
      { w: 'expected utility', it: 'utilità attesa' },
      { w: 'risk-averse', it: 'avverso al rischio' },
      { w: 'certainty equivalent', it: 'equivalente certo' },
      { w: 'risk premium', it: 'premio per il rischio' },
      { w: 'St. Petersburg paradox', it: 'paradosso di San Pietroburgo' },
      { w: 'prospect theory', it: 'teoria del prospetto' },
      { w: 'loss aversion', it: 'avversione alle perdite' },
      { w: 'concave', it: 'concava' },
      { w: 'insurance', it: 'assicurazione' }
    ]
  });
  A('str-bayes-nelle-decisioni', {
    title: { t: 'Bayes in decisions', it: 'Bayes nelle decisioni' },
    sum: [
      { t: '⟦Bayes’ theorem⟧ shows how to change your belief after evidence, from the ⟦prior⟧ to the ⟦posterior⟧ probability.', it: 'Il teorema di Bayes mostra come cambiare opinione davanti a una prova, dalla probabilità a priori a quella a posteriori.' },
      { t: 'The chance of a positive test given the disease is not the chance of the disease given a positive test.', it: 'La probabilità di un test positivo data la malattia non è la probabilità della malattia dato un test positivo.' },
      { t: '⟦Natural frequencies⟧, counting people in a group, make the calculation easy and avoid mistakes.', it: 'Le frequenze naturali, cioè contare le persone in un gruppo, rendono il calcolo facile ed evitano errori.' },
      { t: '⟦Base-rate neglect⟧ means ignoring how likely the hypothesis was before the evidence; the same test gives very different answers with a different prevalence.', it: 'La trascuranza della base è ignorare quanto fosse probabile l’ipotesi prima della prova; lo stesso test dà risposte molto diverse con un’altra prevalenza.' },
      { t: 'In ⟦odds⟧ form, posterior odds equal prior odds times the ⟦likelihood ratio⟧.', it: 'In forma di odds, gli odds a posteriori sono gli odds a priori per il rapporto di verosimiglianza.' },
      { t: 'Today’s posterior becomes tomorrow’s prior, but you may multiply likelihood ratios only for independent evidence.', it: 'Il posteriore di oggi diventa il prior di domani, ma si moltiplicano gli LR solo per prove indipendenti.' },
      { t: 'The decision depends on the cost of errors, and the ⟦value of information⟧ caps what you should pay to learn more.', it: 'La decisione dipende dal costo degli errori, e il valore dell’informazione limita ciò che conviene pagare per saperne di più.' }
    ],
    gloss: [
      { w: 'Bayes’ theorem', it: 'teorema di Bayes' },
      { w: 'prior', it: 'probabilità a priori' },
      { w: 'posterior', it: 'probabilità a posteriori' },
      { w: 'natural frequencies', it: 'frequenze naturali' },
      { w: 'base-rate neglect', it: 'trascuranza della probabilità di base' },
      { w: 'odds', it: 'odds, rapporto a favore/contro' },
      { w: 'likelihood ratio', it: 'rapporto di verosimiglianza' },
      { w: 'value of information', it: 'valore dell’informazione' },
      { w: 'prevalence', it: 'prevalenza' },
      { w: 'false positive', it: 'falso positivo' }
    ]
  });
  A('str-kelly-e-gestione-del-rischio', {
    title: { t: 'Kelly and risk management', it: 'Kelly e gestione del rischio' },
    sum: [
      { t: 'This lesson is a mathematical reasoning exercise, not financial or betting advice.', it: 'Questa lezione è un esercizio di ragionamento matematico, non un consiglio finanziario o di gioco.' },
      { t: 'With an ⟦edge⟧, the question is how much to risk: the ⟦Kelly criterion⟧ maximises the long-run growth rate of capital.', it: 'Con un vantaggio, la domanda è quanto rischiare: il criterio di Kelly massimizza il tasso di crescita a lungo termine del capitale.' },
      { t: 'The optimal fraction is f* = p − q/b, and if it is negative the best choice is not to bet.', it: 'La frazione ottima è f* = p − q/b, e se è negativa la scelta migliore è non puntare.' },
      { t: 'Betting twice the Kelly fraction makes growth vanish, so ⟦over-betting⟧ is worse than under-betting.', it: 'Puntare il doppio di Kelly fa sparire la crescita, quindi sovrapuntare è peggio che sottopuntare.' },
      { t: '⟦Fractional Kelly⟧ bets half or a quarter of f*, keeping most of the growth with fewer swings and a margin for error.', it: 'Il Kelly frazionato punta metà o un quarto di f*, mantenendo gran parte della crescita con meno oscillazioni e un margine di errore.' },
      { t: '⟦Risk of ruin⟧ is invisible to expected value: staking everything each time almost surely loses everything.', it: 'Il rischio di rovina è invisibile al valore atteso: puntare tutto ogni volta fa quasi certamente perdere tutto.' },
      { t: '⟦Diversification⟧ helps only if bets are truly independent, and in a competition the best sizing depends on your position.', it: 'La diversificazione aiuta solo se le scommesse sono davvero indipendenti, e in una competizione il dimensionamento dipende dalla tua posizione.' }
    ],
    gloss: [
      { w: 'Kelly criterion', it: 'criterio di Kelly' },
      { w: 'over-betting', it: 'sovrapuntare' },
      { w: 'fractional Kelly', it: 'Kelly frazionato' },
      { w: 'risk of ruin', it: 'rischio di rovina' },
      { w: 'diversification', it: 'diversificazione' },
      { w: 'edge', it: 'vantaggio (valore atteso positivo)' },
      { w: 'growth rate', it: 'tasso di crescita' },
      { w: 'drawdown', it: 'calo del capitale dal massimo' },
      { w: 'volatility', it: 'volatilità, oscillazioni' },
      { w: 'capital', it: 'capitale' }
    ]
  });
  A('str-negoziazione-e-incentivi', {
    title: { t: 'Negotiation and incentives', it: 'Negoziazione e incentivi' },
    sum: [
      { t: 'Your ⟦BATNA⟧ is the best alternative if talks fail, and it is your real bargaining power.', it: 'La tua BATNA è la migliore alternativa se la trattativa fallisce, ed è il tuo vero potere negoziale.' },
      { t: 'The ⟦reservation price⟧ is the limit beyond which you prefer no deal: a seller’s minimum, a buyer’s maximum.', it: 'Il prezzo di riserva è il limite oltre il quale preferisci non concludere: il minimo del venditore, il massimo del compratore.' },
      { t: 'The ⟦ZOPA⟧ is the range of prices both sides prefer to no agreement, and its width is the surplus to divide.', it: 'La ZOPA è l’intervallo di prezzi che entrambi preferiscono al non-accordo, e la sua ampiezza è il surplus da dividere.' },
      { t: '⟦Anchoring⟧ means the first offer pulls the final result toward itself, so a plausible ambitious offer helps.', it: 'L’ancoraggio significa che la prima offerta sposta il risultato verso di sé, quindi un’offerta ambiziosa ma plausibile aiuta.' },
      { t: 'A position is what you ask for, an ⟦interest⟧ is why; interests are often compatible, so expand the pie before dividing it.', it: 'Una posizione è ciò che chiedi, un interesse è perché lo chiedi; gli interessi spesso sono compatibili, quindi allarga la torta prima di dividerla.' },
      { t: 'In a ⟦principal-agent⟧ relation the principal cannot see everything, so incentives must align interests and handle moral hazard.', it: 'In una relazione principale-agente il principale non vede tutto, quindi gli incentivi devono allineare gli interessi e gestire l’azzardo morale.' },
      { t: 'A ⟦signal⟧ is credible only if it is costlier to imitate for low quality, and ⟦commitment⟧ makes promises and threats believable.', it: 'Un segnale è credibile solo se è più costoso da imitare per chi ha bassa qualità, e l’impegno rende credibili promesse e minacce.' }
    ],
    gloss: [
      { w: 'BATNA', it: 'miglior alternativa all’accordo' },
      { w: 'reservation price', it: 'prezzo di riserva' },
      { w: 'ZOPA', it: 'zona di possibile accordo' },
      { w: 'anchoring', it: 'ancoraggio' },
      { w: 'interest', it: 'interesse (motivo)' },
      { w: 'principal-agent', it: 'principale e agente' },
      { w: 'signal', it: 'segnale' },
      { w: 'commitment', it: 'impegno vincolante' },
      { w: 'surplus', it: 'surplus da dividere' },
      { w: 'moral hazard', it: 'azzardo morale' }
    ]
  });
  A('str-strategia-competitiva', {
    title: { t: 'Competitive strategy', it: 'Strategia competitiva' },
    sum: [
      { t: 'A strategy is a coherent set of choices against rivals who react, built from diagnosis, guiding policy and coherent actions.', it: 'Una strategia è un insieme coerente di scelte contro rivali che reagiscono, fatto di diagnosi, politica guida e azioni coerenti.' },
      { t: 'A ⟦competitive advantage⟧ lets you do better than rivals in a lasting way.', it: 'Un vantaggio competitivo permette di ottenere risultati migliori dei rivali in modo duraturo.' },
      { t: '⟦Asymmetry⟧ means choosing ground where your strengths count, and strategy also means choosing what not to do, accepting ⟦trade-offs⟧.', it: 'L’asimmetria è scegliere un terreno dove i tuoi punti di forza contano, e la strategia è anche scegliere cosa non fare, accettando i trade-off.' },
      { t: 'The ⟦OODA loop⟧ of observe, orient, decide and act rewards whoever completes it faster, and orienting matters most.', it: 'Il ciclo OODA di osservare, orientarsi, decidere e agire premia chi lo completa più in fretta, e orientarsi conta di più.' },
      { t: '⟦Concentration of force⟧ gives disproportionate results; Lanchester’s square law shows why splitting your forces is dangerous.', it: 'La concentrazione delle forze dà risultati sproporzionati; la legge quadratica di Lanchester mostra perché dividere le forze è pericoloso.' },
      { t: '⟦Deterrence⟧ needs capability, credibility and communication, and credibility often comes from commitment.', it: 'La deterrenza richiede capacità, credibilità e comunicazione, e la credibilità spesso viene dall’impegno.' },
      { t: 'Being first brings scale and network effects but also costs and uncertainty, so a ⟦fast follower⟧ can win by learning from others.', it: 'Essere i primi porta scala ed effetti di rete ma anche costi e incertezza, quindi un inseguitore rapido può vincere imparando dagli altri.' }
    ],
    gloss: [
      { w: 'competitive advantage', it: 'vantaggio competitivo' },
      { w: 'asymmetry', it: 'asimmetria' },
      { w: 'trade-offs', it: 'compromessi, rinunce' },
      { w: 'OODA loop', it: 'ciclo OODA' },
      { w: 'concentration of force', it: 'concentrazione delle forze' },
      { w: 'deterrence', it: 'deterrenza' },
      { w: 'fast follower', it: 'inseguitore rapido' },
      { w: 'first mover', it: 'primo arrivato' },
      { w: 'network effects', it: 'effetti di rete' },
      { w: 'diagnosis', it: 'diagnosi' }
    ]
  });
  A('str-errori-strategici-e-pre-mortem', {
    title: { t: 'Strategic errors and the pre-mortem', it: 'Errori strategici e pre-mortem' },
    sum: [
      { t: 'A ⟦sunk cost⟧ cannot be recovered whatever you choose, so only future costs and benefits should count.', it: 'Un costo affondato non è recuperabile qualunque scelta tu faccia, quindi contano solo costi e benefici futuri.' },
      { t: '⟦Escalation of commitment⟧ is investing more in a losing course of action to justify earlier choices.', it: 'L’escalation dell’impegno è investire ancora in una linea d’azione in perdita per giustificare le scelte precedenti.' },
      { t: '⟦Overconfidence⟧ and the ⟦planning fallacy⟧ make estimates of time and cost too optimistic.', it: 'L’eccesso di fiducia e la fallacia della pianificazione rendono le stime di tempi e costi troppo ottimistiche.' },
      { t: '⟦Confirmation bias⟧ makes us seek information that supports our belief, as in Wason’s 2-4-6 task, so test ideas that could refute you.', it: 'Il bias di conferma ci fa cercare informazioni che sostengono ciò che crediamo, come nel compito 2-4-6 di Wason, quindi prova idee che potrebbero smentirti.' },
      { t: '⟦Groupthink⟧ is a cohesive group seeking consensus over realistic judgement; let the leader speak last and name a devil’s advocate.', it: 'Il pensiero di gruppo è un gruppo coeso che cerca il consenso invece del giudizio realistico; il leader parla per ultimo e si nomina un avvocato del diavolo.' },
      { t: 'In a ⟦pre-mortem⟧ the group imagines the project has failed and writes down why, then changes the plan.', it: 'In un pre-mortem il gruppo immagina che il progetto sia fallito e scrive perché, poi modifica il piano.' },
      { t: 'Judge a decision by its process, not its outcome, because ⟦resulting⟧ confuses luck with quality.', it: 'Giudica una decisione dal processo e non dall’esito, perché il resulting confonde la fortuna con la qualità.' }
    ],
    gloss: [
      { w: 'sunk cost', it: 'costo affondato' },
      { w: 'escalation of commitment', it: 'escalation dell’impegno' },
      { w: 'overconfidence', it: 'eccesso di fiducia' },
      { w: 'planning fallacy', it: 'fallacia della pianificazione' },
      { w: 'confirmation bias', it: 'bias di conferma' },
      { w: 'groupthink', it: 'pensiero di gruppo' },
      { w: 'pre-mortem', it: 'pre-mortem' },
      { w: 'resulting', it: 'giudicare dall’esito' },
      { w: 'hindsight bias', it: 'bias del senno di poi' },
      { w: 'checklist', it: 'lista di controllo' }
    ]
  });
  A('str-eco-costi', {
    title: { t: 'Costs, margin and break-even', it: 'Costi, margine e break-even' },
    sum: [
      { t: '⟦Fixed costs⟧ do not depend on output in the short run, while ⟦variable costs⟧ grow with the pieces sold.', it: 'I costi fissi non dipendono dalla quantità prodotta nel breve periodo, mentre i costi variabili crescono con i pezzi venduti.' },
      { t: 'The ⟦contribution margin⟧ is price minus unit variable cost, and it first covers fixed costs and then creates profit.', it: 'Il margine di contribuzione è il prezzo meno il costo variabile unitario, e copre prima i costi fissi e poi crea profitto.' },
      { t: 'The ⟦break-even⟧ quantity is fixed costs divided by the contribution margin, and below it the firm makes a loss.', it: 'La quantità di break-even è i costi fissi divisi per il margine di contribuzione, e sotto di essa l’impresa è in perdita.' },
      { t: 'For a target profit, add it to fixed costs before dividing by the margin.', it: 'Per un profitto obiettivo, lo si somma ai costi fissi prima di dividere per il margine.' },
      { t: 'The ⟦margin of safety⟧ shows how far sales can fall before the firm loses money.', it: 'Il margine di sicurezza mostra di quanto possono calare le vendite prima che l’impresa vada in perdita.' },
      { t: '⟦Opportunity cost⟧ is the best alternative given up, so ⟦economic profit⟧ can be negative while accounting profit is positive.', it: 'Il costo opportunità è la migliore alternativa a cui si rinuncia, quindi il profitto economico può essere negativo mentre quello contabile è positivo.' },
      { t: 'A ⟦sunk cost⟧ is already spent and must be ignored: only future costs and benefits decide.', it: 'Un costo affondato è già speso e va ignorato: decidono solo costi e benefici futuri.' }
    ],
    gloss: [
      { w: 'fixed costs', it: 'costi fissi' },
      { w: 'variable costs', it: 'costi variabili' },
      { w: 'contribution margin', it: 'margine di contribuzione' },
      { w: 'break-even', it: 'punto di pareggio' },
      { w: 'margin of safety', it: 'margine di sicurezza' },
      { w: 'opportunity cost', it: 'costo opportunità' },
      { w: 'economic profit', it: 'profitto economico' },
      { w: 'sunk cost', it: 'costo affondato' },
      { w: 'average cost', it: 'costo medio' },
      { w: 'accounting profit', it: 'profitto contabile' }
    ]
  });
  A('str-eco-mercato', {
    title: { t: 'Demand, supply, elasticity and the optimal price', it: 'Domanda, offerta, elasticità e prezzo ottimo' },
    sum: [
      { t: 'The ⟦demand curve⟧ and the ⟦supply curve⟧ meet at the equilibrium, where the quantities wanted and offered are equal.', it: 'La curva di domanda e la curva di offerta si incontrano all’equilibrio, dove le quantità volute e offerte sono uguali.' },
      { t: 'A price change moves you along a curve, while a change in tastes, incomes or costs shifts the curve.', it: 'Un cambio di prezzo muove lungo la curva, mentre un cambio di gusti, redditi o costi sposta la curva.' },
      { t: '⟦Price elasticity⟧ is the percentage change in quantity for a 1% change in price, and it differs from point to point on a line.', it: 'L’elasticità al prezzo è la variazione percentuale della quantità per una variazione dell’1% del prezzo, e cambia da punto a punto su una retta.' },
      { t: 'If demand is elastic, raising the price lowers revenue; if inelastic, it raises revenue.', it: 'Se la domanda è elastica, alzare il prezzo riduce il ricavo; se è anelastica, lo aumenta.' },
      { t: '⟦Marginal revenue⟧ is below the price, because a discount also applies to units that would have sold anyway.', it: 'Il ricavo marginale è minore del prezzo, perché lo sconto vale anche per le unità che si sarebbero vendute comunque.' },
      { t: 'Profit is maximised where marginal revenue equals ⟦marginal cost⟧, which is not the revenue-maximising price.', it: 'Il profitto è massimo dove il ricavo marginale uguaglia il costo marginale, che non è il prezzo di ricavo massimo.' },
      { t: 'The ⟦Lerner index⟧ says the optimal margin equals 1 over the absolute elasticity, so inelastic demand allows higher margins.', it: 'L’indice di Lerner dice che il margine ottimo è pari a 1 su |ε|, quindi una domanda anelastica consente margini più alti.' }
    ],
    gloss: [
      { w: 'demand curve', it: 'curva di domanda' },
      { w: 'supply curve', it: 'curva di offerta' },
      { w: 'equilibrium', it: 'equilibrio di mercato' },
      { w: 'price elasticity', it: 'elasticità al prezzo' },
      { w: 'marginal revenue', it: 'ricavo marginale' },
      { w: 'marginal cost', it: 'costo marginale' },
      { w: 'Lerner index', it: 'indice di Lerner' },
      { w: 'inelastic', it: 'anelastica' },
      { w: 'excess supply', it: 'eccesso di offerta' },
      { w: 'total revenue', it: 'ricavo totale' }
    ]
  });
  A('str-eco-valore-attuale', {
    title: { t: 'Present value, compound interest and comparing investments', it: 'Valore attuale, interesse composto e confronto fra investimenti' },
    sum: [
      { t: 'A euro today is worth more than a euro next year, so amounts at different dates are compared with a ⟦discount rate⟧.', it: 'Un euro oggi vale più di un euro fra un anno, quindi gli importi a date diverse si confrontano con un tasso di sconto.' },
      { t: '⟦Present value⟧ is the future amount divided by one plus the rate, raised to the number of years.', it: 'Il valore attuale è l’importo futuro diviso per uno più il tasso, elevato al numero di anni.' },
      { t: 'With ⟦compound interest⟧ the interest earns interest, and the rule of 72 estimates the doubling time.', it: 'Con l’interesse composto gli interessi producono interessi, e la regola del 72 stima il tempo di raddoppio.' },
      { t: 'For a project with several cash flows, discount each flow and add them up.', it: 'Per un progetto con più flussi, si attualizza ogni flusso e si somma.' },
      { t: 'The ⟦net present value⟧ is the present value of inflows minus the investment, and you accept a project when it is positive.', it: 'Il valore attuale netto è il valore attuale degli incassi meno l’investimento, e si accetta un progetto quando è positivo.' },
      { t: 'The ⟦internal rate of return⟧ is the rate that makes the net present value zero, but between projects the NPV is more reliable.', it: 'Il tasso interno di rendimento è il tasso che rende il VAN zero, ma tra progetti il VAN è più affidabile.' },
      { t: 'A ⟦perpetuity⟧ is worth the payment divided by the rate, and the method depends on uncertain estimates, so test several rates.', it: 'Una perpetuità vale la cedola divisa per il tasso, e il metodo dipende da stime incerte, quindi prova più tassi.' }
    ],
    gloss: [
      { w: 'discount rate', it: 'tasso di sconto' },
      { w: 'present value', it: 'valore attuale' },
      { w: 'compound interest', it: 'interesse composto' },
      { w: 'net present value', it: 'valore attuale netto (VAN)' },
      { w: 'internal rate of return', it: 'tasso interno di rendimento (TIR)' },
      { w: 'perpetuity', it: 'rendita perpetua' },
      { w: 'annuity', it: 'annuità' },
      { w: 'cash flow', it: 'flusso di cassa' },
      { w: 'rule of 72', it: 'regola del 72' },
      { w: 'simple interest', it: 'interesse semplice' }
    ]
  });
  A('str-eco-scambio', {
    title: { t: 'Comparative advantage and gains from trade', it: 'Vantaggio comparato e guadagni dallo scambio' },
    sum: [
      { t: 'A country can have an ⟦absolute advantage⟧ in both goods, yet trade can still help both sides.', it: 'Un paese può avere un vantaggio assoluto in entrambi i beni, eppure lo scambio può comunque giovare a entrambi.' },
      { t: 'The ⟦opportunity cost⟧ of a good is how much of the other good you give up to make one more unit.', it: 'Il costo opportunità di un bene è quanto dell’altro bene si rinuncia per produrne un’unità in più.' },
      { t: '⟦Comparative advantage⟧ belongs to whoever has the lower opportunity cost, and nobody has it in both goods.', it: 'Il vantaggio comparato appartiene a chi ha il costo opportunità più basso, e nessuno lo ha in entrambi i beni.' },
      { t: 'With ⟦specialisation⟧ each side produces the good it makes at the lower opportunity cost, and the total output grows.', it: 'Con la specializzazione ciascuno produce il bene che fa a costo opportunità minore, e la produzione totale cresce.' },
      { t: 'The ⟦terms of trade⟧ must lie between the two opportunity costs, or one side refuses.', it: 'I termini di scambio devono stare tra i due costi opportunità, altrimenti una parte rifiuta.' },
      { t: 'Within that range both sides end up better off, because what matters is relative cost, not absolute skill.', it: 'Dentro quell’intervallo entrambe le parti stanno meglio, perché conta il costo relativo, non la bravura assoluta.' },
      { t: 'The model is simplified, but it explains ⟦outsourcing⟧ and why a busy professional delegates tasks.', it: 'Il modello è semplificato, ma spiega l’esternalizzazione e perché un professionista molto impegnato delega.' }
    ],
    gloss: [
      { w: 'absolute advantage', it: 'vantaggio assoluto' },
      { w: 'opportunity cost', it: 'costo opportunità' },
      { w: 'comparative advantage', it: 'vantaggio comparato' },
      { w: 'specialisation', it: 'specializzazione' },
      { w: 'terms of trade', it: 'termini di scambio' },
      { w: 'gains from trade', it: 'guadagni dallo scambio' },
      { w: 'outsourcing', it: 'esternalizzazione' },
      { w: 'production frontier', it: 'frontiera di produzione' },
      { w: 'Ricardo', it: 'David Ricardo' },
      { w: 'delegate', it: 'delegare' }
    ]
  });
  A('str-eco-oligopolio', {
    title: { t: 'Oligopoly: Cournot, Bertrand and collusion', it: 'Oligopolio: Cournot, Bertrand e collusione' },
    sum: [
      { t: 'In an ⟦oligopoly⟧ a few firms share the market and each one’s profit depends on the others’ choices, so game theory is needed.', it: 'In un oligopolio poche imprese condividono il mercato e il profitto di ciascuna dipende dalle scelte altrui, quindi serve la teoria dei giochi.' },
      { t: 'In ⟦Cournot⟧ competition firms choose quantities, and each ⟦reaction function⟧ gives the best output against the rival’s.', it: 'Nella concorrenza di Cournot le imprese scelgono le quantità, e ogni funzione di reazione dà la quantità migliore contro quella del rivale.' },
      { t: 'The Cournot equilibrium lies between monopoly and perfect competition, with a lower price than monopoly.', it: 'L’equilibrio di Cournot sta tra monopolio e concorrenza perfetta, con un prezzo più basso del monopolio.' },
      { t: 'In ⟦Bertrand⟧ competition firms choose prices, undercutting pushes the price down to cost, and profits vanish.', it: 'Nella concorrenza di Bertrand le imprese scelgono i prezzi, il sottotaglio spinge il prezzo al costo e i profitti si annullano.' },
      { t: 'Differentiated products, capacity limits or switching costs can keep prices above cost.', it: 'Prodotti differenziati, limiti di capacità o costi di cambio possono tenere i prezzi sopra il costo.' },
      { t: '⟦Collusion⟧ gives both firms more than Cournot, but each is tempted to deviate, so a cartel is a prisoner’s dilemma.', it: 'La collusione dà a entrambe più del Cournot, ma ciascuna è tentata di deviare, quindi un cartello è un dilemma del prigioniero.' },
      { t: 'In repeated play a ⟦grim trigger⟧ can sustain collusion if firms are patient enough, but cartels are illegal under antitrust law.', it: 'Nel gioco ripetuto un grilletto può sostenere la collusione se le imprese sono abbastanza pazienti, ma i cartelli sono illeciti per l’antitrust.' }
    ],
    gloss: [
      { w: 'oligopoly', it: 'oligopolio' },
      { w: 'Cournot', it: 'Cournot, concorrenza sulle quantità' },
      { w: 'reaction function', it: 'funzione di reazione' },
      { w: 'Bertrand', it: 'Bertrand, concorrenza sui prezzi' },
      { w: 'collusion', it: 'collusione' },
      { w: 'grim trigger', it: 'grilletto, punizione per sempre' },
      { w: 'cartel', it: 'cartello' },
      { w: 'discount factor', it: 'fattore di sconto' },
      { w: 'strategic substitutes', it: 'sostituti strategici' },
      { w: 'undercutting', it: 'sottotaglio dei prezzi' }
    ]
  });
  A('str-eco-aste-incentivi', {
    title: { t: 'Auctions, incentives and the principal-agent problem', it: 'Aste, incentivi e principale-agente' },
    sum: [
      { t: 'An auction assigns a good to whoever values it most; the main forms are first-price, second-price (Vickrey), English and Dutch.', it: 'Un’asta assegna un bene a chi lo valuta di più; le forme principali sono prima offerta, seconda offerta (Vickrey), inglese e olandese.' },
      { t: 'In a ⟦Vickrey auction⟧ bidding your true value is a ⟦dominant strategy⟧, because the price paid does not depend on your own bid.', it: 'In un’asta di Vickrey offrire il proprio vero valore è una strategia dominante, perché il prezzo pagato non dipende dalla propria offerta.' },
      { t: 'In a first-price auction you practise ⟦bid shading⟧, bidding below your value, since winning at your value gives zero surplus.', it: 'In un’asta a prima offerta si fa bid shading, offrendo meno del proprio valore, perché vincere al proprio valore dà surplus zero.' },
      { t: 'The ⟦revenue equivalence⟧ theorem says both formats give the seller the same expected revenue under private values.', it: 'Il teorema dell’equivalenza dei ricavi dice che entrambe le forme danno al venditore lo stesso ricavo atteso con valori privati.' },
      { t: 'A ⟦reserve price⟧ raises revenue in favourable cases but risks leaving the good unsold.', it: 'Un prezzo di riserva aumenta il ricavo nei casi favorevoli ma rischia di lasciare il bene invenduto.' },
      { t: 'With a common value, the winner tends to be the one who overestimated most: the ⟦winner’s curse⟧.', it: 'Con un valore comune, chi vince tende a essere chi ha sovrastimato di più: la maledizione del vincitore.' },
      { t: 'In the ⟦principal-agent⟧ problem effort cannot be observed, so a bonus tied to the result can induce high effort.', it: 'Nel problema principale-agente lo sforzo non è osservabile, quindi un bonus legato al risultato può indurre uno sforzo alto.' }
    ],
    gloss: [
      { w: 'Vickrey auction', it: 'asta di Vickrey (seconda offerta)' },
      { w: 'dominant strategy', it: 'strategia dominante' },
      { w: 'bid shading', it: 'offrire meno del proprio valore' },
      { w: 'revenue equivalence', it: 'equivalenza dei ricavi' },
      { w: 'reserve price', it: 'prezzo di riserva' },
      { w: 'winner’s curse', it: 'maledizione del vincitore' },
      { w: 'principal-agent', it: 'principale e agente' },
      { w: 'moral hazard', it: 'azzardo morale' },
      { w: 'surplus', it: 'surplus del vincitore' },
      { w: 'bonus', it: 'bonus legato al risultato' }
    ]
  });
  A('str-eco-strategia-impresa', {
    title: { t: 'Business strategy: competitive advantage and real options', it: 'Strategia d’impresa: vantaggio competitivo e opzioni reali' },
    sum: [
      { t: 'A ⟦competitive advantage⟧ is a defensible above-average profit, coming from cost leadership or differentiation, and it must be hard to imitate.', it: 'Un vantaggio competitivo è un profitto superiore alla media difendibile, che nasce da leadership di costo o differenziazione, e deve essere difficile da imitare.' },
      { t: 'With the ⟦experience curve⟧ unit cost falls by a fixed percentage each time cumulative output doubles.', it: 'Con la curva d’esperienza il costo unitario cala di una percentuale fissa a ogni raddoppio della produzione cumulata.' },
      { t: '⟦Network effects⟧ make a good more valuable as users grow, which favours fast growth and winner-takes-most markets.', it: 'Gli effetti di rete fanno crescere il valore del bene con gli utenti, il che favorisce la crescita rapida e i mercati dove il vincitore prende quasi tutto.' },
      { t: '⟦Switching costs⟧ let an incumbent raise the price without losing customers, as long as the saving offered stays below them.', it: 'I costi di cambio permettono all’incumbent di alzare il prezzo senza perdere clienti, finché il risparmio offerto resta inferiore.' },
      { t: '⟦Barriers to entry⟧ protect profits, and a commitment to more capacity can make entry unprofitable.', it: 'Le barriere all’ingresso proteggono i profitti, e l’impegno ad aumentare la capacità può rendere l’ingresso non redditizio.' },
      { t: 'A ⟦real option⟧ is the right, not the obligation, to decide later, and ordinary NPV ignores its value.', it: 'Un’opzione reale è il diritto, non l’obbligo, di decidere in seguito, e il VAN classico ne ignora il valore.' },
      { t: 'The value of these tools lies in the reasoning, which forces you to state assumptions.', it: 'Il valore di questi strumenti sta nel ragionamento, che obbliga a esplicitare le ipotesi.' }
    ],
    gloss: [
      { w: 'competitive advantage', it: 'vantaggio competitivo' },
      { w: 'experience curve', it: 'curva d’esperienza' },
      { w: 'network effects', it: 'effetti di rete' },
      { w: 'switching costs', it: 'costi di cambio' },
      { w: 'barriers to entry', it: 'barriere all’ingresso' },
      { w: 'real option', it: 'opzione reale' },
      { w: 'cost leadership', it: 'leadership di costo' },
      { w: 'differentiation', it: 'differenziazione' },
      { w: 'incumbent', it: 'impresa già presente' },
      { w: 'Metcalfe’s law', it: 'legge di Metcalfe' }
    ]
  });
  A('str-mil-sun-tzu', {
    title: { t: 'Sun Tzu, The Art of War', it: 'Sun Tzu, L’arte della guerra' },
    sum: [
      { t: 'The Art of War is a treatise of 13 chapters, attributed to Sun Wu, and it deals with strategy and politics, not only battle.', it: 'L’arte della guerra è un trattato di 13 capitoli, attribuito a Sun Wu, che tratta di strategia e politica, non solo di battaglia.' },
      { t: 'Chapter 1 asks you to weigh five factors and compare them with the enemy’s: the ⟦calculation⟧ comes before the battle.', it: 'Il capitolo 1 chiede di valutare cinque fattori e confrontarli con quelli del nemico: il calcolo viene prima della battaglia.' },
      { t: '⟦Deception⟧ aims to make the enemy misjudge the situation, and it also means hiding your own form.', it: 'L’inganno mira a far sbagliare il nemico nelle sue valutazioni, e significa anche nascondere la propria forma.' },
      { t: '“Know the enemy and know yourself” is a three-case argument about ⟦information⟧, and spies cost less than war.', it: '«Conosci il nemico e te stesso» è un ragionamento a tre casi sull’informazione, e le spie costano meno della guerra.' },
      { t: 'The best course is to attack the enemy’s strategy, then alliances, then the army; ⟦besieging cities⟧ is the worst.', it: 'La cosa migliore è attaccare la strategia del nemico, poi le alleanze, poi l’esercito; assediare le città è la peggiore.' },
      { t: 'A long war drains the treasury, so the text values ⟦speed⟧ and a quick victory.', it: 'Una guerra lunga svuota le casse, quindi il testo apprezza la rapidità e una vittoria veloce.' },
      { t: 'The ratios are rules of thumb, not laws: ⟦local superiority⟧ matters, and the weaker side should avoid a frontal clash.', it: 'I rapporti sono regole empiriche, non leggi: conta la superiorità locale, e il più debole deve evitare lo scontro frontale.' }
    ],
    gloss: [
      { w: 'calculation', it: 'calcolo preliminare' },
      { w: 'deception', it: 'inganno' },
      { w: 'information', it: 'informazione, intelligence' },
      { w: 'besieging cities', it: 'assediare le città' },
      { w: 'speed', it: 'rapidità' },
      { w: 'local superiority', it: 'superiorità locale' },
      { w: 'spies', it: 'spie' },
      { w: 'treatise', it: 'trattato' },
      { w: 'rules of thumb', it: 'regole empiriche' },
      { w: 'logistics', it: 'logistica, rifornimenti' }
    ]
  });
  A('str-mil-clausewitz', {
    title: { t: 'Clausewitz: war and politics', it: 'Clausewitz: guerra e politica' },
    sum: [
      { t: 'Carl von Clausewitz was a Prussian officer, and his book On War appeared after his death in an unfinished form.', it: 'Carl von Clausewitz fu un ufficiale prussiano, e il suo libro Della guerra uscì dopo la morte in forma incompiuta.' },
      { t: 'War is the continuation of politics by other means: politics sets the aim, and war is the instrument.', it: 'La guerra è la continuazione della politica con altri mezzi: la politica determina lo scopo e la guerra è lo strumento.' },
      { t: '⟦Absolute war⟧ is a logical ideal of endless escalation, while ⟦real war⟧ is limited by time, imperfect information and politics.', it: 'La guerra assoluta è un ideale logico di escalation senza limiti, mentre la guerra reale è limitata da tempo, informazione imperfetta e politica.' },
      { t: '⟦Friction⟧ is the accumulation of small difficulties, and the ⟦fog of war⟧ is the uncertainty about what is happening.', it: 'L’attrito è l’accumulo di piccole difficoltà, e la nebbia della guerra è l’incertezza su ciò che sta accadendo.' },
      { t: 'The ⟦trinity⟧ combines violence, chance and reason, associated with the people, the army and the government.', it: 'La trinità combina violenza, caso e ragione, associati al popolo, all’esercito e al governo.' },
      { t: 'The ⟦center of gravity⟧ is the center of all power and movement on which everything depends, so you direct your main effort at it.', it: 'Il centro di gravità è il centro di tutta la potenza e il movimento da cui tutto dipende, quindi vi si dirige lo sforzo principale.' },
      { t: 'The ⟦culminating point⟧ is where the attacker’s superiority fades, so beyond it the defender is stronger.', it: 'Il punto culminante è dove la superiorità dell’attaccante svanisce, quindi oltre di esso il difensore è più forte.' }
    ],
    gloss: [
      { w: 'absolute war', it: 'guerra assoluta' },
      { w: 'real war', it: 'guerra reale' },
      { w: 'friction', it: 'attrito' },
      { w: 'fog of war', it: 'nebbia della guerra' },
      { w: 'trinity', it: 'trinità (violenza, caso, ragione)' },
      { w: 'center of gravity', it: 'centro di gravità' },
      { w: 'culminating point', it: 'punto culminante' },
      { w: 'escalation', it: 'escalation' },
      { w: 'politics', it: 'politica' },
      { w: 'unfinished', it: 'incompiuta' }
    ]
  });
  A('str-mil-principi-guerra', {
    title: { t: 'Principles of war and concentration', it: 'Principi della guerra e concentrazione' },
    sum: [
      { t: 'The ⟦principles of war⟧ are general criteria from historical experience, useful as a checklist and not infallible laws.', it: 'I principi della guerra sono criteri generali tratti dall’esperienza storica, utili come lista di controllo e non leggi infallibili.' },
      { t: 'The ⟦objective⟧ must be clear and serve the political aim, and ⟦unity of command⟧ gives one person authority over all forces.', it: 'L’obiettivo deve essere chiaro e servire lo scopo politico, e l’unità di comando dà a una persona l’autorità su tutte le forze.' },
      { t: '⟦Mass⟧ concentrates effects at the decisive place and time, while ⟦economy of force⟧ gives secondary sectors the minimum.', it: 'La massa concentra gli effetti nel luogo e nel momento decisivi, mentre l’economia di forza assegna ai settori secondari il minimo.' },
      { t: '⟦Maneuver⟧ puts the enemy at a disadvantage without necessarily fighting, and ⟦surprise⟧ strikes where he is not ready.', it: 'La manovra mette il nemico in svantaggio senza necessariamente combattere, e la sorpresa colpisce dove non è pronto.' },
      { t: '⟦Simplicity⟧ reduces errors, since every extra step in a plan is a possible failure.', it: 'La semplicità riduce gli errori, perché ogni passaggio in più in un piano è un possibile guasto.' },
      { t: '⟦Interior lines⟧ let a central force defeat separated enemies one at a time, and the aim is to prevent their union.', it: 'Le linee interne permettono a una forza centrale di battere nemici separati uno alla volta, e lo scopo è impedirne l’unione.' },
      { t: 'Cannae and the 1940 campaign in France are classic examples of concentration and surprise.', it: 'Cannae e la campagna di Francia del 1940 sono esempi classici di concentrazione e sorpresa.' }
    ],
    gloss: [
      { w: 'principles of war', it: 'principi della guerra' },
      { w: 'objective', it: 'obiettivo' },
      { w: 'unity of command', it: 'unità di comando' },
      { w: 'mass', it: 'massa (concentrazione)' },
      { w: 'economy of force', it: 'economia di forza' },
      { w: 'maneuver', it: 'manovra' },
      { w: 'surprise', it: 'sorpresa' },
      { w: 'simplicity', it: 'semplicità' },
      { w: 'interior lines', it: 'linee interne' },
      { w: 'security', it: 'sicurezza' }
    ]
  });
  A('str-mil-lanchester', {
    title: { t: 'Lanchester’s laws', it: 'Le leggi di Lanchester' },
    sum: [
      { t: 'Frederick Lanchester published in 1916 a mathematical model of attrition, where each side’s losses depend on the other side’s strength.', it: 'Frederick Lanchester pubblicò nel 1916 un modello matematico del logoramento, in cui le perdite di ciascuna parte dipendono dalla forza dell’altra.' },
      { t: 'In the ⟦linear law⟧ units fight roughly one against one, and with equal efficacy the survivors are the difference A − B.', it: 'Nella legge lineare le unità si affrontano circa uno contro uno, e con efficacia uguale i superstiti sono la differenza A − B.' },
      { t: 'In the ⟦square law⟧ every unit can hit any enemy, and the winner keeps the square root of A² − B².', it: 'Nella legge quadratica ogni unità può colpire qualsiasi nemico, e il vincitore conserva la radice quadrata di A² − B².' },
      { t: 'Under the square law, combat strength is efficacy times the number squared, so ⟦quality versus quantity⟧ follows a square rule.', it: 'Con la legge quadratica la forza di combattimento è l’efficacia per il numero al quadrato, quindi qualità contro quantità segue una regola quadratica.' },
      { t: '⟦Divide and conquer⟧: a smaller force can beat a larger one that arrives split into groups, one at a time.', it: 'Dividere e vincere: una forza più piccola può battere una più grande che si presenta divisa in gruppi, uno alla volta.' },
      { t: 'The models are only useful if you remember their ⟦assumptions⟧, such as homogeneous forces and a fight to the end.', it: 'I modelli sono utili solo se si ricordano le ipotesi, come forze omogenee e combattimento fino alla fine.' },
      { t: 'The same ⟦cumulative advantage⟧ logic appears outside war: size gives a more than proportional edge, and the ratio matters more than the difference.', it: 'La stessa logica del vantaggio cumulativo compare fuori dalla guerra: la dimensione dà un vantaggio più che proporzionale, e il rapporto conta più della differenza.' }
    ],
    gloss: [
      { w: 'attrition', it: 'logoramento' },
      { w: 'linear law', it: 'legge lineare' },
      { w: 'square law', it: 'legge quadratica' },
      { w: 'quality versus quantity', it: 'qualità contro quantità' },
      { w: 'divide and conquer', it: 'dividere per vincere' },
      { w: 'assumptions', it: 'ipotesi del modello' },
      { w: 'cumulative advantage', it: 'vantaggio cumulativo' },
      { w: 'efficacy', it: 'efficacia di un’unità' },
      { w: 'survivors', it: 'superstiti' },
      { w: 'concentration', it: 'concentrazione' }
    ]
  });
  A('str-mil-logistica', {
    title: { t: 'Logistics and supply', it: 'Logistica e rifornimenti' },
    sum: [
      { t: '⟦Logistics⟧ brings a force what it needs, where and when it is needed, along a supply chain whose every link has a limited capacity.', it: 'La logistica porta a una forza ciò che serve, dove e quando serve, lungo una catena di rifornimento in cui ogni anello ha capacità limitata.' },
      { t: 'The chain is as strong as its weakest link, so the ⟦bottleneck⟧ sets the useful supply.', it: 'La catena è forte quanto l’anello più debole, quindi il collo di bottiglia fissa il rifornimento utile.' },
      { t: 'Start from daily consumption: ⟦endurance⟧ equals available stock divided by daily consumption.', it: 'Si parte dal consumo giornaliero: l’autonomia è la scorta disponibile divisa per il consumo giornaliero.' },
      { t: 'Fodder for horses can weigh far more than food for men, which strains transport.', it: 'Il foraggio per i cavalli può pesare molto più dei viveri per gli uomini, il che mette sotto sforzo il trasporto.' },
      { t: 'Transport uses part of its own load, so the farther from the base, the smaller the ⟦useful payload⟧ and the ⟦operational radius⟧.', it: 'Il trasporto consuma parte del proprio carico, quindi più si è lontani dalla base, minori sono il carico utile e il raggio d’azione.' },
      { t: 'Napoleon’s 1812 campaign and Operation Barbarossa in 1941 show how distance, roads, fodder, railways, mud and winter wore down supply.', it: 'La campagna di Napoleone del 1812 e l’operazione Barbarossa del 1941 mostrano come distanza, strade, foraggio, ferrovie, fango e inverno logorarono il rifornimento.' },
      { t: 'Plan with a ⟦safety margin⟧, because plans run at the limit collapse at the first surprise.', it: 'Pianifica con un margine di sicurezza, perché i piani al limite crollano alla prima sorpresa.' }
    ],
    gloss: [
      { w: 'logistics', it: 'logistica' },
      { w: 'bottleneck', it: 'collo di bottiglia' },
      { w: 'endurance', it: 'autonomia' },
      { w: 'useful payload', it: 'carico utile' },
      { w: 'operational radius', it: 'raggio d’azione' },
      { w: 'safety margin', it: 'margine di sicurezza' },
      { w: 'supply chain', it: 'catena di rifornimento' },
      { w: 'fodder', it: 'foraggio' },
      { w: 'forward depot', it: 'deposito avanzato' },
      { w: 'railway gauge', it: 'scartamento ferroviario' }
    ]
  });
  A('str-mil-ooda-asimmetria', {
    title: { t: 'OODA, maneuver and asymmetry', it: 'OODA, manovra e asimmetria' },
    sum: [
      { t: 'John Boyd described the ⟦OODA loop⟧: observe, orient, decide and act, repeated as the action changes the situation.', it: 'John Boyd descrisse il ciclo OODA: osservare, orientarsi, decidere e agire, ripetuto mentre l’azione cambia la situazione.' },
      { t: '⟦Orientation⟧ is the decisive phase, where data gets meaning, so the aim is better understanding and also to disorient the enemy.', it: 'L’orientamento è la fase decisiva, dove i dati ricevono significato, quindi l’obiettivo è capire meglio e anche disorientare il nemico.' },
      { t: 'A faster cycle gives a ⟦tempo advantage⟧, because the slower side keeps acting on an outdated picture and its error accumulates.', it: 'Un ciclo più rapido dà un vantaggio di ritmo, perché il più lento continua ad agire su un quadro superato e il suo errore si accumula.' },
      { t: '⟦Attrition⟧ warfare wears down resources, while ⟦maneuver warfare⟧ breaks the enemy’s cohesion.', it: 'La guerra di logoramento consuma le risorse, mentre la guerra di manovra spezza la coesione del nemico.' },
      { t: '⟦Mission command⟧ gives the intent and leaves freedom on the means, so decisions are taken where the information is.', it: 'Il comando per missione dà l’intento e lascia libertà sui modi, così le decisioni si prendono dove sono le informazioni.' },
      { t: 'In an ⟦asymmetric⟧ conflict the weaker side chooses another ground, using time, space, information and legitimacy.', it: 'In un conflitto asimmetrico il più debole sceglie un altro terreno, usando tempo, spazio, informazione e legittimità.' },
      { t: 'Weaker sides can win through asymmetry of interests and by adopting a different strategy from the strong one, as in ⟦guerrilla⟧ war.', it: 'I più deboli possono vincere grazie all’asimmetria di interessi e adottando una strategia diversa da quella del forte, come nella guerriglia.' }
    ],
    gloss: [
      { w: 'OODA loop', it: 'ciclo OODA' },
      { w: 'orientation', it: 'orientamento' },
      { w: 'tempo advantage', it: 'vantaggio di ritmo' },
      { w: 'attrition', it: 'logoramento' },
      { w: 'maneuver warfare', it: 'guerra di manovra' },
      { w: 'mission command', it: 'comando per missione' },
      { w: 'asymmetric', it: 'asimmetrico' },
      { w: 'guerrilla', it: 'guerriglia' },
      { w: 'intent', it: 'intento del comandante' },
      { w: 'legitimacy', it: 'legittimità' }
    ]
  });
  A('str-mil-deterrenza-giochi', {
    title: { t: 'Deterrence and the game theory of conflict', it: 'Deterrenza e teoria dei giochi del conflitto' },
    sum: [
      { t: '⟦Deterrence⟧ dissuades someone from acting by making them believe the cost exceeds the benefit, by punishment or by denial.', it: 'La deterrenza dissuade qualcuno dall’agire facendogli credere che il costo superi il beneficio, per punizione o per negazione.' },
      { t: 'It works only with capability, credibility and communication, and a threat is credible only if it is believed.', it: 'Funziona solo con capacità, credibilità e comunicazione, e una minaccia è credibile solo se è creduta.' },
      { t: '⟦Commitment⟧ makes threats credible by reducing your own freedom of choice, as in burning bridges.', it: 'L’impegno rende credibili le minacce riducendo la propria libertà di scelta, come bruciare i ponti.' },
      { t: 'In ⟦chicken⟧ nobody wants to give way but a head-on crash is a disaster, and there are two pure equilibria and one mixed.', it: 'In chicken nessuno vuole cedere ma lo scontro frontale è un disastro, e ci sono due equilibri puri e uno misto.' },
      { t: '⟦Escalation⟧ is the gradual rise in intensity of a conflict, either deliberate or accidental.', it: 'L’escalation è l’aumento progressivo dell’intensità di un conflitto, deliberato o involontario.' },
      { t: 'The ⟦security dilemma⟧ is a prisoner’s dilemma: measures taken for safety are seen as threats, and both end up less safe.', it: 'Il dilemma della sicurezza è un dilemma del prigioniero: misure prese per sicurezza sono viste come minacce, ed entrambi finiscono meno sicuri.' },
      { t: '⟦Mutual assured destruction⟧ rests on a second-strike capability, and the 1962 Cuban crisis shows deterrence and bargaining in action.', it: 'La distruzione reciproca assicurata si fonda sulla capacità di secondo colpo, e la crisi di Cuba del 1962 mostra deterrenza e negoziazione in azione.' }
    ],
    gloss: [
      { w: 'deterrence', it: 'deterrenza' },
      { w: 'commitment', it: 'impegno vincolante' },
      { w: 'chicken', it: 'gioco del chicken' },
      { w: 'escalation', it: 'escalation' },
      { w: 'security dilemma', it: 'dilemma della sicurezza' },
      { w: 'mutual assured destruction', it: 'distruzione reciproca assicurata (MAD)' },
      { w: 'second strike', it: 'capacità di secondo colpo' },
      { w: 'credibility', it: 'credibilità' },
      { w: 'denial', it: 'negazione' },
      { w: 'bargaining model of war', it: 'modello di negoziazione della guerra' }
    ]
  });
  A('str-opt-programmazione-lineare', {
    title: { t: 'Linear programming', it: 'Programmazione lineare' },
    sum: [
      { t: '⟦Linear programming⟧ chooses the best option under limits when the objective and all constraints are linear expressions.', it: 'La programmazione lineare sceglie l’opzione migliore entro dei limiti quando obiettivo e vincoli sono tutti espressioni lineari.' },
      { t: 'To model a problem you define ⟦decision variables⟧, an ⟦objective function⟧ and ⟦constraints⟧, including non-negativity.', it: 'Per modellare un problema si definiscono variabili di decisione, funzione obiettivo e vincoli, compresa la non negatività.' },
      { t: 'The ⟦feasible region⟧ is a convex polygon whose vertices come from intersecting constraint lines, discarding points that break another constraint.', it: 'La regione ammissibile è un poligono convesso i cui vertici nascono dall’intersezione delle rette dei vincoli, scartando i punti che violano un altro vincolo.' },
      { t: 'If an optimum exists, one lies at a vertex, so you only need to evaluate the objective at the vertices.', it: 'Se esiste un ottimo, ce n’è uno in un vertice, quindi basta calcolare l’obiettivo nei vertici.' },
      { t: 'A constraint is ⟦active⟧ when it holds as an equality, and a non-active one leaves ⟦slack⟧.', it: 'Un vincolo è attivo quando vale come uguaglianza, e uno non attivo lascia uno slack.' },
      { t: 'The ⟦shadow price⟧ of a constraint is the gain in the objective per extra unit of that resource, and it is the most worth paying for it.', it: 'Il prezzo ombra di un vincolo è il miglioramento dell’obiettivo per ogni unità in più di quella risorsa, ed è il massimo che conviene pagare.' },
      { t: 'The ⟦simplex⟧ method handles many variables, but if quantities must be whole numbers the problem becomes integer programming and is much harder.', it: 'Il metodo del simplesso gestisce molte variabili, ma se le quantità devono essere intere il problema diventa di programmazione intera ed è molto più difficile.' }
    ],
    gloss: [
      { w: 'linear programming', it: 'programmazione lineare' },
      { w: 'decision variables', it: 'variabili di decisione' },
      { w: 'objective function', it: 'funzione obiettivo' },
      { w: 'constraints', it: 'vincoli' },
      { w: 'feasible region', it: 'regione ammissibile' },
      { w: 'active', it: 'attivo (vincolante)' },
      { w: 'slack', it: 'margine non usato' },
      { w: 'shadow price', it: 'prezzo ombra' },
      { w: 'simplex', it: 'simplesso' },
      { w: 'vertex', it: 'vertice' }
    ]
  });
  A('str-opt-programmazione-dinamica', {
    title: { t: 'Advanced dynamic programming', it: 'Programmazione dinamica avanzata' },
    sum: [
      { t: '⟦Dynamic programming⟧ splits a problem into smaller subproblems, solves each once and stores the result.', it: 'La programmazione dinamica scompone un problema in sottoproblemi più piccoli, risolve ciascuno una sola volta e memorizza il risultato.' },
      { t: 'It needs ⟦optimal substructure⟧ and ⟦overlapping subproblems⟧, as with Fibonacci, where naive recursion repeats the same calls.', it: 'Richiede sottostruttura ottima e sottoproblemi sovrapposti, come in Fibonacci, dove la ricorsione ingenua ripete le stesse chiamate.' },
      { t: 'The recipe is: define the state, write the recurrence, set the base case, choose the order, then rebuild the solution.', it: 'La ricetta è: definire lo stato, scrivere la ricorrenza, fissare il caso base, scegliere l’ordine, poi ricostruire la soluzione.' },
      { t: 'For the minimum number of coins the recurrence beats the greedy rule, which gives 3 coins where 2 are enough.', it: 'Per il minimo numero di monete la ricorrenza batte la regola greedy, che dà 3 monete dove ne bastano 2.' },
      { t: 'In the ⟦0/1 knapsack⟧ each item is taken whole or not at all, and the table gives the best value.', it: 'Nello zaino 0/1 ogni oggetto è preso intero o per niente, e la tabella dà il valore migliore.' },
      { t: 'The ⟦LCS⟧ and the ⟦edit distance⟧ fill a table with n times m cells, each in constant time.', it: 'La LCS e la distanza di edit riempiono una tabella di n per m celle, ciascuna in tempo costante.' },
      { t: 'Top-down uses ⟦memoization⟧ and computes only needed states, while bottom-up is usually faster; DP fails when the state grows too large.', it: 'Il top-down usa la memoization e calcola solo gli stati necessari, mentre il bottom-up è di solito più veloce; la PD non basta quando lo stato cresce troppo.' }
    ],
    gloss: [
      { w: 'dynamic programming', it: 'programmazione dinamica' },
      { w: 'optimal substructure', it: 'sottostruttura ottima' },
      { w: 'overlapping subproblems', it: 'sottoproblemi sovrapposti' },
      { w: '0/1 knapsack', it: 'zaino 0/1' },
      { w: 'LCS', it: 'sottosequenza comune più lunga' },
      { w: 'edit distance', it: 'distanza di edit (Levenshtein)' },
      { w: 'memoization', it: 'memorizzazione dei risultati' },
      { w: 'recurrence', it: 'ricorrenza' },
      { w: 'base case', it: 'caso base' },
      { w: 'bottom-up', it: 'dal basso verso l’alto' }
    ]
  });
  A('str-opt-grafi', {
    title: { t: 'Graphs: paths, trees and flows', it: 'Grafi: cammini, alberi e flussi' },
    sum: [
      { t: 'In a weighted graph each edge carries a number, and three classic problems are shortest paths, spanning trees and maximum flow.', it: 'In un grafo pesato ogni arco ha un numero, e tre problemi classici sono cammini minimi, alberi di copertura e flusso massimo.' },
      { t: '⟦Dijkstra’s algorithm⟧ fixes the node with the smallest provisional distance and ⟦relaxes⟧ its neighbours; it needs non-negative weights.', it: 'L’algoritmo di Dijkstra fissa il nodo con la distanza provvisoria minima e rilassa i suoi vicini; richiede pesi non negativi.' },
      { t: 'To rebuild the route, store each node’s predecessor; with negative weights Dijkstra can fix a node too early.', it: 'Per ricostruire il percorso si memorizza il predecessore di ogni nodo; con pesi negativi Dijkstra può fissare un nodo troppo presto.' },
      { t: '⟦Kruskal’s algorithm⟧ sorts edges by weight and adds an edge only if it forms no cycle, building the ⟦minimum spanning tree⟧.', it: 'L’algoritmo di Kruskal ordina gli archi per peso e aggiunge un arco solo se non forma un ciclo, costruendo l’albero di copertura minimo.' },
      { t: 'Prim grows a single tree by always adding the lightest edge to a new node; a spanning tree is not a shortest-path tree.', it: 'Prim fa crescere un unico albero aggiungendo sempre l’arco più leggero verso un nodo nuovo; un albero di copertura non è un albero dei cammini minimi.' },
      { t: 'In a flow network, the method of ⟦augmenting paths⟧ pushes flow along paths with residual capacity until none remains.', it: 'In una rete di flusso, il metodo dei cammini aumentanti spinge flusso lungo cammini con capacità residua finché non ne restano.' },
      { t: 'The ⟦max-flow min-cut⟧ theorem says the maximum flow equals the capacity of the minimum cut, which shows the bottleneck.', it: 'Il teorema max-flow min-cut dice che il flusso massimo è uguale alla capacità del taglio minimo, che indica il collo di bottiglia.' }
    ],
    gloss: [
      { w: 'Dijkstra’s algorithm', it: 'algoritmo di Dijkstra' },
      { w: 'relaxes', it: 'rilassare un arco' },
      { w: 'Kruskal’s algorithm', it: 'algoritmo di Kruskal' },
      { w: 'minimum spanning tree', it: 'albero di copertura minimo' },
      { w: 'augmenting paths', it: 'cammini aumentanti' },
      { w: 'max-flow min-cut', it: 'flusso massimo e taglio minimo' },
      { w: 'predecessor', it: 'predecessore' },
      { w: 'capacity', it: 'capacità di un arco' },
      { w: 'shortest path', it: 'cammino minimo' },
      { w: 'cycle', it: 'ciclo' }
    ]
  });
  A('str-opt-pianificazione-progetto', {
    title: { t: 'Project planning', it: 'Pianificazione di progetto' },
    sum: [
      { t: 'A project is a directed graph of activities with durations and precedence constraints; CPM uses certain durations and PERT uncertain ones.', it: 'Un progetto è un grafo orientato di attività con durate e vincoli di precedenza; il CPM usa durate certe e il PERT durate incerte.' },
      { t: 'The ⟦forward pass⟧ gives the earliest start and finish, and the project length is that of the longest path, not the sum of all activities.', it: 'La passata in avanti dà inizio e fine al più presto, e la durata del progetto è quella del percorso più lungo, non la somma di tutte le attività.' },
      { t: 'The ⟦backward pass⟧ gives the latest times, and ⟦slack⟧ is the latest start minus the earliest start.', it: 'La passata all’indietro dà i tempi al più tardi, e lo slack è l’inizio al più tardi meno l’inizio al più presto.' },
      { t: 'Activities with zero slack form the ⟦critical path⟧, and any delay on them delays the whole project.', it: 'Le attività con slack zero formano il cammino critico, e ogni ritardo su di esse ritarda tutto il progetto.' },
      { t: 'Slack on activities of the same path is shared, so it must not be spent without coordination.', it: 'Lo slack di attività dello stesso percorso è condiviso, quindi non va speso senza coordinamento.' },
      { t: 'A ⟦Gantt chart⟧ shows activities as bars on a time axis, and in ⟦PERT⟧ each duration has optimistic, most likely and pessimistic estimates.', it: 'Un diagramma di Gantt mostra le attività come barre su un asse del tempo, e nel PERT ogni durata ha stime ottimistica, più probabile e pessimistica.' },
      { t: '⟦Crashing⟧ shortens the project by compressing only critical activities, choosing the cheapest per day and recomputing the critical path each time.', it: 'La compressione accorcia il progetto comprimendo solo attività critiche, scegliendo la più economica al giorno e ricalcolando ogni volta il cammino critico.' }
    ],
    gloss: [
      { w: 'forward pass', it: 'passata in avanti' },
      { w: 'backward pass', it: 'passata all’indietro' },
      { w: 'slack', it: 'margine (float)' },
      { w: 'critical path', it: 'cammino critico' },
      { w: 'Gantt chart', it: 'diagramma di Gantt' },
      { w: 'PERT', it: 'PERT (durate incerte)' },
      { w: 'crashing', it: 'compressione dei tempi' },
      { w: 'CPM', it: 'metodo del cammino critico' },
      { w: 'precedence', it: 'precedenza' },
      { w: 'float', it: 'margine di slittamento' }
    ]
  });
  A('str-opt-assegnamento-combinatori', {
    title: { t: 'Assignment and combinatorial problems', it: 'Assegnamento e problemi combinatori' },
    sum: [
      { t: 'In the ⟦assignment problem⟧ you give one task to each person at minimum total cost, and with 3 people there are 6 possibilities.', it: 'Nel problema dell’assegnamento si dà un compito a ciascuna persona al costo totale minimo, e con 3 persone ci sono 6 possibilità.' },
      { t: 'A greedy choice of the cheapest pair gives 14 where the optimum is 12, while the ⟦Hungarian method⟧ solves it exactly.', it: 'La scelta golosa della coppia più economica dà 14 dove l’ottimo è 12, mentre il metodo ungherese lo risolve esattamente.' },
      { t: 'The ⟦travelling salesman problem⟧ asks for the shortest tour visiting every city once, and the tours grow factorially with the number of cities.', it: 'Il problema del commesso viaggiatore chiede il giro più breve che visita ogni città una volta, e i giri crescono in modo fattoriale con le città.' },
      { t: 'The ⟦nearest neighbour⟧ heuristic is fast but gives no guarantee, and here it is worse than the optimum.', it: 'L’euristica della città più vicina è veloce ma senza garanzia, e qui è peggiore dell’ottimo.' },
      { t: '⟦2-opt⟧ improves a tour by reversing a segment and reaches a local optimum.', it: 'Il 2-opt migliora un giro invertendo un segmento e raggiunge un ottimo locale.' },
      { t: 'For ⟦NP-hard⟧ problems checking a solution is easy but no always-fast algorithm is known to find one.', it: 'Per i problemi NP-hard verificare una soluzione è facile ma non si conosce un algoritmo sempre veloce per trovarla.' },
      { t: 'An ⟦approximation algorithm⟧ guarantees a solution within a known factor of the optimum, and in bin packing sorting first fixes the error of simple First Fit.', it: 'Un algoritmo di approssimazione garantisce una soluzione entro un fattore noto dall’ottimo, e nel bin packing ordinare prima corregge l’errore del semplice First Fit.' }
    ],
    gloss: [
      { w: 'assignment problem', it: 'problema dell’assegnamento' },
      { w: 'Hungarian method', it: 'metodo ungherese' },
      { w: 'travelling salesman problem', it: 'problema del commesso viaggiatore' },
      { w: 'nearest neighbour', it: 'città più vicina (euristica)' },
      { w: '2-opt', it: '2-opt (inversione di segmenti)' },
      { w: 'NP-hard', it: 'NP-difficile' },
      { w: 'approximation algorithm', it: 'algoritmo di approssimazione' },
      { w: 'heuristic', it: 'euristica' },
      { w: 'bin packing', it: 'impacchettamento in contenitori' },
      { w: 'local optimum', it: 'ottimo locale' }
    ]
  });
  A('str-opt-ricerca-locale-bandit', {
    title: { t: 'Local search, metaheuristics and bandits', it: 'Ricerca locale, metaeuristiche e bandit' },
    sum: [
      { t: '⟦Local search⟧ starts from a solution and improves it with small moves, using a representation, a neighbourhood and an objective function.', it: 'La ricerca locale parte da una soluzione e la migliora con piccole mosse, usando una rappresentazione, un vicinato e una funzione obiettivo.' },
      { t: '⟦Hill climbing⟧ moves to the best neighbour and stops when none is better, so it can get stuck in a local optimum.', it: 'L’hill climbing va al vicino migliore e si ferma quando nessuno è migliore, quindi può bloccarsi in un ottimo locale.' },
      { t: '⟦Random restarts⟧ repeat the climb from many starts, and tabu search forbids recent moves to avoid going back.', it: 'I restart casuali ripetono la salita da molte partenze, e la tabu search vieta le mosse recenti per non tornare indietro.' },
      { t: '⟦Simulated annealing⟧ accepts a worse move with probability e^(−Δ/T), exploring at high temperature and exploiting at low temperature.', it: 'La ricottura simulata accetta una mossa peggiore con probabilità e^(−Δ/T), esplorando ad alta temperatura e sfruttando a bassa temperatura.' },
      { t: '⟦Genetic algorithms⟧ keep a population and use fitness, selection, crossover and mutation.', it: 'Gli algoritmi genetici mantengono una popolazione e usano fitness, selezione, crossover e mutazione.' },
      { t: 'The ⟦multi-armed bandit⟧ shows the trade-off between exploring new arms and exploiting the best one, measured by regret.', it: 'Il bandit multi-braccio mostra il compromesso tra esplorare nuovi bracci e sfruttare il migliore, misurato dal rimpianto.' },
      { t: '⟦Epsilon-greedy⟧ explores at random with probability ε, while ⟦UCB⟧ adds an uncertainty bonus to rarely tried arms.', it: 'Epsilon-greedy esplora a caso con probabilità ε, mentre UCB aggiunge un bonus di incertezza ai bracci poco provati.' }
    ],
    gloss: [
      { w: 'local search', it: 'ricerca locale' },
      { w: 'hill climbing', it: 'salita in collina' },
      { w: 'random restarts', it: 'ripartenze casuali' },
      { w: 'simulated annealing', it: 'ricottura simulata' },
      { w: 'genetic algorithms', it: 'algoritmi genetici' },
      { w: 'multi-armed bandit', it: 'bandit multi-braccio' },
      { w: 'epsilon-greedy', it: 'epsilon-greedy' },
      { w: 'UCB', it: 'limite superiore di confidenza' },
      { w: 'regret', it: 'rimpianto' },
      { w: 'neighbourhood', it: 'vicinato di soluzioni' }
    ]
  });
  A('str-opt-multiobiettivo-decisioni-reali', {
    title: { t: 'Multi-objective optimisation and real decisions', it: 'Multi-obiettivo e decisioni reali' },
    sum: [
      { t: 'Real decisions have several conflicting objectives, so there is no single best solution, only compromises.', it: 'Le decisioni reali hanno più obiettivi in conflitto, quindi non c’è una soluzione migliore in assoluto, ma solo compromessi.' },
      { t: 'An option ⟦dominates⟧ another if it is at least as good on every objective and strictly better on one; the rest form the ⟦Pareto frontier⟧.', it: 'Un’opzione domina un’altra se è almeno buona quanto essa su ogni obiettivo e strettamente migliore su uno; le restanti formano la frontiera di Pareto.' },
      { t: 'A ⟦weighted sum⟧ turns the objectives into one number, and the weights declare the decision-maker’s values.', it: 'Una somma pesata trasforma gli obiettivi in un solo numero, e i pesi dichiarano i valori del decisore.' },
      { t: 'The ⟦epsilon-constraint⟧ method keeps one objective and turns the others into constraints, such as a budget.', it: 'Il metodo ε-vincolo tiene un solo obiettivo e trasforma gli altri in vincoli, come un budget.' },
      { t: '⟦Sensitivity analysis⟧ varies the weights and data; if the decision does not change, it is robust.', it: 'L’analisi di sensibilità varia pesi e dati; se la decisione non cambia, è robusta.' },
      { t: 'The ⟦theory of constraints⟧ says performance is limited by the ⟦bottleneck⟧, so improving anything else is wasted effort.', it: 'La teoria dei vincoli dice che le prestazioni sono limitate dal collo di bottiglia, quindi migliorare altro è tempo perso.' },
      { t: 'The ⟦80/20 rule⟧ says a few factors give most effects, and an optimum is not worth it when optimising costs more than it saves or when robustness matters.', it: 'La regola 80/20 dice che pochi fattori danno la maggior parte degli effetti, e l’ottimo non conviene quando ottimizzare costa più di quanto fa risparmiare o quando conta la robustezza.' }
    ],
    gloss: [
      { w: 'dominates', it: 'domina' },
      { w: 'Pareto frontier', it: 'frontiera di Pareto' },
      { w: 'weighted sum', it: 'somma pesata' },
      { w: 'epsilon-constraint', it: 'metodo ε-vincolo' },
      { w: 'sensitivity analysis', it: 'analisi di sensibilità' },
      { w: 'theory of constraints', it: 'teoria dei vincoli' },
      { w: 'bottleneck', it: 'collo di bottiglia' },
      { w: '80/20 rule', it: 'regola 80/20' },
      { w: 'robustness', it: 'robustezza' },
      { w: 'trade-off', it: 'compromesso' }
    ]
  });
})(window.ST = window.ST || {});
