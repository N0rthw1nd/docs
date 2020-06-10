# Manuale d'Uso

Questa parte copre l'utilizzo vero e proprio dell'applicazione. [Accendi CoderBot](/manual/#messa-in-funzione), connettiti alla rete WiFi e accedi a [coder.bot](http://coder.bot). Dovresti essere di fronte alla schermata principale di CoderBot:

<img :src="$withBase('/images/usermanual/landing.png')">


## Programmazione

Un *Programma* è un insieme di blocchi che definiscono quali azioni che CoderBot dovrà eseguire e in che modo.

Il modo più semplice di scrivere un programma, è cliccare sul bottone Programma nella schermata principale, oppure nel menù laterale. 


Questo ti farà accedere alla visuale Programmazione, composta da questa vista:

<img :src="$withBase('/images/usermanual/program_view.png')">


A sinistra, trovi il *Pannello degli strumenti* di Blockly. In base all'impostazione **Livello Pannello degli strumenti Blockly**, accessibile nelle [impostazioni globali](/manual/#impostazioni) di CoderBot, ti verranno visualizzati pià o meno gruppi di comandi, contenenti più o meno blocchi. Questa impostazione modifica anche come vengono visualizzati i singoli blocchi.

Ad esempio, questo è il Pannelo degli strumenti **movimento**:

<img :src="$withBase('/images/usermanual/toolbox_mov.png')">

Mentre questa è quella **base**:

<img :src="$withBase('/images/usermanual/toolbox_base.png')">


La parte destra, inizialmente vuota, è dove trascinerai i blocchi per comporre il tuo programma.

### Salvare e caricare programmi

Utilizzando il pulsante **Salva** puoi salvare il lavoro fatto fin'ora su CoderBot. Utilizzando **Salva con Nome** creerai un'altra copia del programma, salvandolo con un altro nome.

<img :src="$withBase('/images/usermanual/save1.png')">

Dopo il primo salvataggio, dove ti verrà chiesto come chiamare il programma, il pulsante **Salva** aggiorna quel salvataggio alle ultime modifiche che hai fatto.

<img :src="$withBase('/images/usermanual/load1.png')">

Quando vuoi riprendere il tuo lavoro, apri la vista Programmazione e premi **Carica**. Un elenco ti mostrerà tutti i programmi salvati sul tuo CoderBot, permettendoti di caricarne uno.

### Esportare ed importare programmi

La funziona Salva ti permette di salvare localmente sul tuo CoderBot. Se invece vuoi copiare un programma su un altro CoderBot puoi usare la funzione **Esporta**.

TODO ADDPIC

Verrà creato un file che potrai salvare sul tuo PC. Verrà aperta una finestra di dialogo dal tuo browser, che ti chiederà dove effettuare il download.

Il file appena esportato, può essere importato su qualsiasi CoderBot usando la funzione **Importa**. Cliccandoci, ti verrà chiesto di selezionare un file dal tuo PC, ed esso verrà aperto nella visuale Programmazione di Blockly. Se vuoi mantenerlo e continuare a lavorarci, puoi salvarlo sul CoderBot con la funzione **Salva**.

TODO ADDPIC


## Attività

Le attività di permettono di personalizzare molti aspetti della visuale Programmazione. Ogni attività è un'ambiente contenuto e limitato. Ogni modifica e personalizzazione rimarrà sempre e solo in quell'attività.

Per iniziare, **crea** un'attività dal menù Attività. Questo è l'editor Attività:

TODO ADDPIC

Qui, puoi modificare e personalizzare molti aspetti di quello che verrà presentato **avviando** l'Attività.

::: warning Attenzione
La visuale Programmazione generale rimarrà inalterata e ti verrà sempre presentata allo stesso modo, indipendentemente dalle Attività. Per visualizzare l'ambiente creato in una attività, devi **avviarla**, dal menù **Attività** > **Carica**.
:::

La prima scheda, ti permette di personalizzare la barra degli strumenti. Una piccola anteprima, in alto, ti anticipa come verrà visualizzata.

Quando sei soddisfatto, salva l'Attività e avviala, per vedere se è tutto come ti aspettavi.


::: tip Suggerimento
Analogamente ai programmi, le attività possono essere salvate e caricate sul tuo CoderBot con i pulsanti Salva e Carica, ma anche condivise e copiate su altri CoderBot con le funzioni Esporta e Importa.
:::

## Estensione Musicale

L'estensione musicale di CoderBot consiste in un insieme di blocchi che ti permettono di creare composizioni musicali di complessità crescente rispetto al tipo di livello scelto. Vi è perciò un insieme di blocchi differente per ogni tipo di interfaccia (Base, Intermedia, Avanzata). 

In ogni interfaccia è possibile utilizzare le stesse tipologie di suono, suddivise in due classi: **Strumenti musicali** e **Versi Animali**. Inoltre, come viene spiegato in seguito è possibile aggiungere ed eliminare scuoni, scaricandoli dal [sito dedicato](https://www.coderbotsoundmarketplace.org) le cui caratteristiche sono trattate nel capitolo [suond marketplace](/#_sound-marketplace).

Vengono di seguito illustrate le funzionalità dell'estensione rispetto ai tre tipi di interfaccie. 

### Interfaccia Base

Seleziona **Base** dal menù **Livello Pannello degli strumenti Blockly** presente nella sezione [impostazioni globali](/manual/#impostazioni). Successivamente vai nella sezione [Programma](/usermanual/#Programma), puoi distinguere gli elementi dell'estensione musicale, ovvero il blocco nota:

<img :src="$withBase('/images/guides/note_base.png')">

e il blocco animale:


<img :src="$withBase('/images/guides/animal_base.png')">

Per il blocco nota puoi selezionare una nota da riprodurre, nello specifico sono presenti le 8 note musicali a partire dal DO in altezza crescente fino al DO dell'ottava superiore.
Lo strumento predefinito per il blocco nota è il piano. 
Per il blocco animale è possibile invece selezionare il verso dell'animale da riprodurre tramite il blocco, non è invece possibile assegnarli una nota.
È possibile intervallare i blocchi nota e animale con qualsiasi altro blocco dell'interfaccia, permettendo ad esempio a CoderBot di muoversi ed emettere suoni in successione.

### Interfaccia Intermedia

Seleziona **Intermedio** dal menù **Livello Pannello degli strumenti Blockly** Base dalla sezione  [impostazioni globali](/manual/#impostazioni). Successivamente vai nella sezione [Programma](/usermanual/#Programma), gli elementi dell'estensione musicale sono il blocco nota:
Clicca su **Musica** nell'elenco che trovi nella parte sinistra dello schermo

<img :src="$withBase('/images/guides/blocchi_standard.png')">

Puoi vedere tre tipi di blocchi, ognuno dei quali presenta la possibilità di selezionare una nota e la sua alterazione seleziona il blocco nota e, tenendo premuto il pulsante sinistro del mouse, trascina l'elemento verso destra.
 scegli 


### Interfaccia Avanzata

Clicca sulla sezione "Musica", puoi vedere quattro tipi di blocchi: il primo si riferisce ad una nota generica ed è così composto:

- Un campo con menù a tendina per la selezione della nota
- Un campo con menù a tendina per scegliere se alterare la nota con un bemolle o un diesis 
- Un campo per inserire il suono di uno strumento o il verso di un animale per riprodurre la nota
- Un campo per inserire la durata di una nota

<img :src="$withBase('/images/guides/blocchi_adv.png')">

Il secondo e il terzo blocco ti permettono di scegliere rispettivamento il tipo di strumento musicale o il verso animale con cui riprodurre una nota ed è il seguente:

<img :src="$withBase('/images/guides/sens12.png')">

Il quarto blocco rappresenta una pausa che puoi inserire nelle tue composizioni. Esso è formato un campo che permette di inserire la duarata della pausa :

<img :src="$withBase('/images/guides/sens12.png')">



Nella sezione successiva viene illustrato il procedimento per il download di un pacchetto

## Sound Marketplace

## Gestione Dei Pacchetti

CoderBot offre la possibilità di aggiungere e rimuovere i suoni utilizzabili nei blocchi dell'estensione musicale. Per gestire i suoni già presenti su coderbot accedi al menù *Impostazioni* , successivamente clicca sulla sezione **Gesstione dei pacchetti** , che compare come ultima voce, in fondo a destra tra le sezioni disponibili.  
Puoi visualizzare direttamente nella sezione i pacchetti installati nel sistema, per ognuno di essi è presente un pulsante rosso **Rimuovi** per la rimozione dei pacchetto associato. 

<img :src="$withBase('/images/guides/gestione-pacchetti.png')">

Inoltre a fondo pagina è presente una voca per l'installazione di un nuovo pacchetto.

<img :src="$withBase('/images/guides/gestione-pacchetti.png')">

Seleziona un pacchetto tenendo conto che: 
- Il pacchetto deve essere in formato .zip
- Il nome del pacchetto deve essere composto nel seguente modo: nomepacchetto_x.y.zip dove "x.y" è 



