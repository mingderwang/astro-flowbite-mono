# astro-flowbit

## Quick Install

```shell
# Using NPM
npx astro add flowbite
# Using Yarn
yarn astro add flowbite
# Using PNPM
pnpm astro add flowbite
```
astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import flowbite from 'astro-flowbite';

export default defineConfig({
  // ...
  integrations: [flowbite()],
  //             ^^^^^^^^^^
});
```


## manually

```bash
npm install flowbite astro-flowbite
```




# Astro Starter Kit: Plugin

```shell
npm init astro -- --template astro-community/plugin-template
```

[![Open in StackBlitz][open-img]][open-url]



## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── demo/
│   ├── public/
│   └── src/
│       └── pages/
│           └── index.astro
└── packages/
    └── my-plugin/
        ├── index.js
        └── package.json
```

This project uses **workspaces** to develop a single package, `@example/my-plugin`.

It also includes a minimal Astro project, `demo`, for developing and demonstrating the plugin.



## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
|:----------------|:---------------------------------------------|
| `npm install`   | Installs dependencies                        |
| `npm run start` | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run serve` | Preview your build locally, before deploying |

Want to learn more?
Read [our documentation][docs-url] or jump into our [Discord server][chat-url].



[chat-url]: https://astro.build/chat
[docs-url]: https://github.com/withastro/astro
[open-img]: https://developer.stackblitz.com/img/open_in_stackblitz.svg
[open-url]: https://stackblitz.com/github/withastro/astro/tree/latest/examples/plugin
