module.exports = {
  locales:{
  '/': {
      lang: 'it-IT', // this will be set as the lang attribute on <html>
      title: 'Documentazione di CoderBot',
      description: 'Guide e istruzioni per l\'utilizzo di CoderBot'
    }
  },
  plugins: [
    //require('./markdown/index.js')
    //require('./plugin-last-updated/index.js')
  ],
  // We are serving on coderbot.org/docs, so set the baseURL accordingly
  // This variable is exposed on MD, HTML and Vue components as $withBase
  // E.g. <img :src="$withBase('/foo.png')" alt="foo">
  base: '/docs/',
  themeConfig: {
    sidebar: [
      ['/', 'Indice'],
      ['/kit/', 'Montaggio'],
      ['/description/', 'Descrizione'],
      ['/manual/', 'Configurazione'],
      ['/guides/', 'Guide']
    ],
    // Based on last git commit, offered by @vuepress/plugin-last-updated
    lastUpdated: 'Ultimo aggiornamento', // string | boolean
  }
}
