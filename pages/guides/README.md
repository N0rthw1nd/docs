# Guide

Queste guide passo-passo ti guideranno nella composizione di un programma da zero. Per iniziare a scrivere un programma, apri la vista **Programmazione** dalla pagina principale dell'applicazione CoderBot, come [descritto](/usermanual/#programmazione) qui.

- [Muovere CoderBot](#muovere-coderbot)
- [Programmiamo con i Sensori](#programmiamo-con-i-sensori)

## Muovere CoderBot
Clicca su **Movimento** nell’elenco che trovi nella parte sinistra dello schermo.

<img :src="$withBase('/images/guides/mov1.png')">

Clicca su **muovi avanti** e, tenendo premuto il pulsante sinistro del mouse, trascina l’elemento verso destra.

<img :src="$withBase('/images/guides/mov2.png')">


Rilascia l’elemento nella parte bianca dello schermo, dove preferisci.


Adesso, ripetendo un procedimento simile a quello che hai appena eseguito, trascina l’istruzione **gira a sinistra** e collocala sotto l’altra. 

<img :src="$withBase('/images/guides/mov3.png')">


::: warning ATTENZIONE
Fai in modo che si attacchino tra di loro come i pezzi di un puzzle. Dovresti sentire un *click*.
:::

Colloca il CoderBot in terra, in uno spazio sufficientemente libero da ostacoli. Poi clicca il tasto **Esegui** per eseguire il programma.

Cosa fa il robot?


Adesso componi il programma indicato in figura.

<img :src="$withBase('/images/guides/mov4.png')">

- Cosa ti aspetti che faccia CoderBot quando avrai eseguito il programma?
- Esegui il programma. Era quello che ti aspettavi?

Adesso clicca sulla terza istruzione dall’alto, quella indicata dalla freccia.

<img :src="$withBase('/images/guides/mov5.png')">


Trascina quella istruzione verso il simbolo del cestino localizzato nella parte destra in basso dello schermo.

Quando le istruzioni saranno sovrapposte al cestino, il cestino si aprirà.

A questo punto, lasciale cadere lì dentro per eliminarle.

Clicca su **Cicli** nell’elenco a sinistra e trascina l’istruzione indicata in figura a fianco di quelle che sono rimaste sullo schermo.

<img :src="$withBase('/images/guides/mov7.png')">


Trascina le due istruzioni di movimento all’interno dell’istruzione che hai appena collocato sullo schermo, come indicato in figura.

<img :src="$withBase('/images/guides/mov8.png')">


Al posto di `10` scrivi `4`:

<img :src="$withBase('/images/guides/mov9.png')">


  - Cosa ti aspetti che faccia CoderBot quando eseguirai il programma?
  - Esegui il programma. Era quello che ti aspettavi?

## Programmiamo con i sensori

Cancella il programma che hai realizzato fin'ora.

<img :src="$withBase('/images/guides/sens1.png')">

Inserisci il blocco **se … fai**, che trovi in **Logica**.

<img :src="$withBase('/images/guides/sens2.png')">

Inserisci l’istruzione *confronto* raffigurata, che trovi ancora in **Logica**.

<img :src="$withBase('/images/guides/sens3.png')">

Inserisci **leggi distanza con sonar 1**, che trovi in **Sensori**.

<img :src="$withBase('/images/guides/sens4.png')">

Modifica il simbolo `=` in `<`, cliccandoci sopra.

<img :src="$withBase('/images/guides/sens5.png')">

Inserisci il blocco in figura, che troverai in **Matematica**.

<img :src="$withBase('/images/guides/sens6.png')">

Modifica `0` in `15`.

<img :src="$withBase('/images/guides/sens7.png')">

Inserisci un blocco **ripeti mentre**, che trovi in **Cicli**.

Posizionalo come in figura.


<img :src="$withBase('/images/guides/sens8.png')">

Adesso completa il programma come indicato in figura.

Cosa ti aspetti che faccia il robot quando eseguirai il programma?

<img :src="$withBase('/images/guides/sens9.png')">

Ora clicca sulla piccola rotellina prima del **se**. Apparirà una finestra.

Trascina **altrimenti** sotto il **se**, come indicato in figura.

Poi clicca di nuovo sulla rotellina per chiudere la finestra.

<img :src="$withBase('/images/guides/sens10.png')">

Inserisci **gira a destra** in “altrimenti”.
- Cosa ti aspetti che faccia CoderBot?
- Esegui il programma. Era quello che ti aspettavi?

<img :src="$withBase('/images/guides/sens11.png')">

::: tip PROVA A SPERIMENTARE
- Inserisci valori diversi da `15`.
- Modifica `<` in `>`.
- Modifica le istruzioni di movimento.
:::

Guarda attentamente il seguente programma. Prima di eseguirlo prova a pensare a cosa farà il CoderBot.

<img :src="$withBase('/images/guides/sens12.png')">

Ora componilo ed eseguilo. Il CoderBot si è comportato come ti aspettavi?

## Estensione Musicale

L'estensione musicale di CoderBot ti permette di creare composizioni musicali di complessità crescente in base al tipo di interfaccia che sceglierai: Base, Intermedia, Avanzata. 
Per prima cosa scegli un tipo di interfaccia e vai nella sezione programmazione come [descritto](/usermanual/#programmazione) qui. 
Il tipo di elementi che compongono l'estensione musicale è descritto nel manuale utente, nell'apposita [sezione]()

### Versione Base

Clicca sull'elemento con l'icona a forma di zampa e, tenendo premuto il pulsante sinistro del mouse, trascinalo verso destra.

<img :src="$withBase('/images/guides/animal_base.png')">

Rilascia l'elemento nella parte bianca dello schermo, dove preferisci.

Prova a selezionare un nome di animale dal menù a tendina presente sul blocco.
Esegui il programma. Che verso ha fatto coderbot?

Ora prova a cliccare l'elemento con l'icona a forma di nota e trascinalo sulla parte bianca dello schermo.

<img :src="$withBase('/images/guides/note_base.png')">

Posizionalo sotto all'elemento precedente. Esegui il programma. Ora prova a selezionare un nuovo blocco nota, giustapponoli sotto al precedente, 
seleziona una nota diversa ed esegui il programma come in figura. 

<img :src="$withBase('/images/guides/program_base.png')">


- Che suoni ti aspetti che emetta CoderBot?
- Esegui il programma. Era quello che ti aspettavi?

Di seguito trovi il programma per suonare una *scala musicale* di DO maggiore. Prova a imitarlo ed eseguirlo

<img :src="$withBase('/images/guides/scala.png')">

### Versione Avanzata

Leggi le specifiche della [versione avanzata](/usermanual/#Interfaccia-intermedia)

Con l'aiuto di un docente, dopo aver letto il manuale utente per l'interfaccia base prova a realizzare il programma in figura con tasselli disponibili nell'interfaccia.

<img :src="$withBase('/images/guides/nella_vecchia_fattoria_adv.png')">

- Sei riuscito ad eseguire il programma?. Per regolare la velocità della composizione prova a creare variabile per la durata delle note e incrementane il valore a tua piacimento.
Ricordati che se inrcementi la durata di un blocco, tutti gli altri blocchi, qualora usassero una variabile diversa per la durata delle note, deve essere aggiornata proporzionalmente.
- Cha canzone è la composizione risultante dall'esecuzione programma? 
