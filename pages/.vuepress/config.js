module.exports = {
  locales: {
    "/": {
      lang: "it-IT", // this will be set as the lang attribute on <html>
      title: "Documentazione di CoderBot",
      description: "Guide e istruzioni per l'utilizzo di CoderBot"
    }
  },
  plugins: [
    //require('./markdown/index.js')
    //require('./plugin-last-updated/index.js')
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-52649755-1"
      }
    ]
  ],
  // We are serving on coderbot.org/docs, so set the baseURL accordingly
  // This variable is exposed on MD, HTML and Vue components as $withBase
  // E.g. <img :src="$withBase('/foo.png')" alt="foo">
  base: "/",
  themeConfig: {
    sidebar: [
      ["/", "Indice"],
      ["/kit/", "Montaggio"],
      ["/description/", "Elenco delle parti"],
      ["/manual/", "Configurazione"],
      ["/usermanual/", "Manuale d'uso"],
      ["/guides/", "Guide"]
    ],
    // Based on last git commit, offered by @vuepress/plugin-last-updated
    lastUpdated: "Ultimo aggiornamento" // string | boolean
  }
};
