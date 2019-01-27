# docs

This is the CoderBot documentation repository: a [Vue.js](https://vuejs.org/) application using [VuePress](https://vuepress.vuejs.org/) (1.x alpha).

The development is done on the dev branch, since master is hosting the production build, served by GitHub pages (automatically deployed by an npm script, see package.json).

Image assets are hosted using Git LFS. Before cloning this repository, be sure you have it [installed](https://git-lfs.github.com/).

```bash
git clone https://github.com/CoderBotOrg/docs.git
npm install
```

### Deploy

Start a development server with hot reload on `localhost:8080/docs/`:
```bash
npx vuepress dev pages/
```

Production build (destionation: `pages/.vuepress/dist`):
```bash
npx vuepress build pages/
```

Build and deploy on GitHub Pages: 

```bash
npm run deploy
```

### Development

```
.
├── pages
│   ├── .vuepress (Optional)
│   │   ├── components (Optional)
│   │   ├── theme (Optional)
│   │   │   └── Layout.vue
│   │   ├── public (Optional)
│   │   ├── styles (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (Optional, Danger Zone)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (Optional)
│   │   └── enhanceApp.js (Optional)
│   │ 
│   ├── README.md
│   ├── manual
│   │   └── README.md
│   └── anotherpage.md
│ 
└── package.json
```

- `pages/.vuepress`: It is used to store global configuration, components, static resources, etc.
- `pages/.vuepress/components`: The Vue components in this directory will be automatically registered as global components.
- `pages/.vuepress/theme`: Used to store local theme.
- `pages/.vuepress/styles`: Stores style related files.
- `pages/.vuepress/styles/index.styl`: Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.
- `pages/.vuepress/styles/palette.styl`: The palette is used to override the default color constants and to set the color constants of Stylus.
- `pages/.vuepress/public`: Static resource directory.
- `pages/.vuepress/templates`: Store HTML template files.
- `pages/.vuepress/templates/dev.html`: HTML template file for development environment.
- `pages/.vuepress/templates/ssr.html`: Vue SSR based HTML template file in the built time.
- `pages/.vuepress/config.js`: Entry file of configuration, can also be yml or toml.
- `pages/.vuepress/enhanceApp.js`: App level enhancement.

Image assets using the $baseURL helper
```html
<img :src="$withBase('/foo.png')" alt="foo">
```

### License

The codebase is available under the terms of GNU [General Public License, version 3](LICENSE.txt).

If not differently specified, blog posts, pages, documentation and contents (Text and markdown files, assets) are licensed under the [Creative Commons Attribution Share Alike 4.0 International license](LICENSE_contents.txt) (CC-BY-SA-4.0).
