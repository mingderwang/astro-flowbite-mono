// @ts-check

import { astroflowbite } from '@muzamint/astro-flowbite'

/** @type {import('astro').AstroUserConfig} */
const config = {
	vite: {
		plugins: [
			astroflowbite()
		]
	}
}

export default config
