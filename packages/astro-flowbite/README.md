# astro-flowbite Plugin

astro-flowbite lets you easly plugin flowbite in Astro.

```astro
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>Astro + flowbite</title>
	</head>
	<body>
		<script
			is:inline
			src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"
		></script>
		<div class="container mx-auto p-4">
			<h1>Hello, Astro + Flowbite!</h1>
			<p>This is a simple test.</p>
		</div>
	</body>
</html>
```



## Usage

Install astro-flowbite to your project.

```shell
# Using NPM
npm i astro-flowbite
# Using Bun
bun add astro-flowbite
# Using Yarn
yarn add astro-flowbite
# Using PNPM
pnpm add astro-flowbite
```

Add astro-flowbite to your Tailwind configuration.

* tailwind.config.js
```js
import flowbite from 'astro-flowbite'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [flowbite()],
}
```

Enjoy!
