# docs

This is the CoderBot documentation repository: a [Vue.js](https://vuejs.org/) application using [VuePress].(https://vuepress.vuejs.org/) (1.x alpha)

The development is done on the dev branch, since master is hosting the production build, served by GitHub pages (automatically deployed by an npm script, see package.json).


### Deploy

Start a development server with hot reload on `localhost:8080`:
```bash
npx vuepress dev pages/
```

Production build:
```bash
npx vuepress build pages/
```

Build and deploy on GitHub Pages: 

```bash
npm run deploy
```

### License

The codebase is available under the terms of GNU [General Public License, version 3](LICENSE.txt).

If not differently specified, blog posts, pages, documentation and contents (Text and markdown files, assets) are licensed under the [Creative Commons Attribution Share Alike 4.0 International license](LICENSE_contents.txt) (CC-BY-SA-4.0).
