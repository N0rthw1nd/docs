# Configurazione

## Messa in funzione

Assicurarsi che la MicroSD sia inserita nell'apposito alloggiamento. Su uno dei due lati del CoderBot troverai un foto circolare con il **tasto di accensione**. Tienilo premuto per qualche secondo per davviare CoderBot. Un paio di led sulla scheda principale inizierano a lampeggiare.

<img :src="$withBase('/images/powerbutton.jpg')">

Nel caso in cui la batteria sia completamente scarica, il display nella parte inferiore di CoderBot, accessibile capovolgendolo, inizierà a lampeggiare visualizzando uno `0`. In questo caso, dovrai [ricaricare la batteria](#ricarica-della-batteria) prima di continuare. Altrimenti, il display visualizza la percentuale di carica rimanente.

<img :src="$withBase('/images/batterypercentage.jpg')">

Dopo circa 30 secondi, sarà disponibile una rete WiFi a cui connettersi.
Da un PC o tablet, fate click sull'icona WiFi

<img :src="$withBase('/images/wifi1.png')">


Apparirà un elenco di possibili connessioni WiFi. Il nome di una di esse sarà “coderbot” seguito dal numero che trovi nella parte inferiore del CoderBot.

Se non la vedi aspetta qualche secondo e torna al passo precedente.

<img :src="$withBase('/images/wifi2.png')">

Clicca sul nome della rete WiFi creata dal tuo CoderBot e poi sul tasto *Connetti*.

Ti verrà richiesta una chiave di sicurezza. Scrivi “coderbot” e clicca sul tasto “Avanti”.

<img :src="$withBase('/images/wifi3.png')">

Adesso il tuo PC è connesso a CoderBot!
::: warning ATTENZIONE
La rete WiFi di CoderBot **non** ti permette di accedere ad internet, ma alla sola applicazione di CoderBot. Questo vuol dire che nessun sito funzionerà e se hai bisogno di cercare qualcosa o di navigare su internet dovrai disconnetterti e tornare sulla tua rete WiFi. Quando hai concluso e vuoi tornare ad usare CoderBot, ripeti i passi appena mostrati.
:::

Per accedere, apri un browser (Mozilla Firefox o Google Chrome) e digita il seguente indirizzo: `10.0.0.1:8080`. Premi Invio e potrai iniziare ad utilizzare CoderBot!

## Ricarica della batteria

La batteria può essere ricaricata con un qualsiasi caricatore USB per cellulari, ed un cavo Micro USB. Spegnere il CoderBot tenendo premuto il tasto di accensione e collegare il cavo Micro USB all'apposito alloggiamento laterale della batteria (è il foro opposto a quello che ospita il tasto di accensione).

La ricarica è possibile anche collegando direttamente il cavo Micro USB ad un PC, ma sarà più lenta.

## Aggiornamento

::: warning ATTENZIONE
Prima di continuare, assicuratevi che la batteria sia carica almeno al **50%**.
:::

Per aggiornare, disconnettersi dalla rete WiFi di CoderBot e ritornare a quella standard. Scaricate un pacchetto di aggiornamento dal [sito ufficiale](https://www.coderbot.org/repo). Una volta completato il download, riconnettetevi alla rete WiFi `coderbot` e tornate sull'applicazione di CoderBot. Dal menu laterale, scegliete *Impostazioni*. In basso, troverete la sezione *Aggiornamento*, dove potrete selezionare il pacchetto appena scaricato, attendere l'upload e lasciare che CoderBot faccia tutto il resto.

Seguite le istruzioni a schermo dopo aver confermato l'aggiornamento.