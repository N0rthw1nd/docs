module.exports = {
  // We are serving on coderbot.org/docs, so set the baseURL accordingly
  // This variable is exposed on MD, HTML and Vue components as $withBase
  // E.g. <img :src="$withBase('/foo.png')" alt="foo">
  base: '/docs/',
  themeConfig: {
    // Based on last git commit, offered by @vuepress/plugin-last-updated
    lastUpdated: 'Ultimo aggiornamento', // string | boolean
  }
}
