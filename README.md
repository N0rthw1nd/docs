# docs

This is the CoderBot documentation repository.

### Deploy

Start a development server with hot reload on `localhost:8080`:
```bash
npx vuepress dev pages/
```

Production build:
```bash
npx vuepress build pages/
```

There's an npm script to deploy on GitHub pages from the `master` branch. Run 

```bash
npm run deploy
```

And be sure to have setup GitHub pages to serve the `master` branch.

### License

The codebase is available under the terms of GNU [General Public License, version 3](LICENSE.txt).

If not differently specified, blog posts, pages, documentation and contents (Text and markdown files, assets) are licensed under the [Creative Commons Attribution Share Alike 4.0 International license](LICENSE_contents.txt) (CC-BY-SA-4.0).
