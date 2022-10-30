## Miaz's base Typescript Project setup
---
This is just the starting point I typically use for my Typescript (or javascript) based projects for single-page applications.

- Uses Vite as the base dev server, bundler, builder and parser.
- Uses React 18 as the Frontend Framework.
- Uses Yarn 3.2, set with node-modules as the nodeLinker - pnp still isn't fully supported and can get buggy, especially when using Typescript.
- Includes React-Router 6 for SPA navigation.
- Includes React-query for data fetching.
- Includes TailwindCSS, with some extra colours and fonts in the base file.
- Includes SASS.
- Includes a basic Dockerfile based on node-alpine 18.
- Includes a docker-compose file for local development using docker.
 
---

### Example commands:

- yarn dev 

```yarn vite dev```

- yarn dev:docker

```docker-compose up --build --force-recreate```