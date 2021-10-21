// @type {import('@sveltejs/kit').Config}

import vercel from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'

const API_BASE = 'https://api.svelte.dev'

const config = {
	preprocess: [
		sveltePreprocess({
			postcss: true,
			sass: {
				includePaths: ['static/sass'],
				prependData: '@import global'
			},
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		vite: () => ({
			define: {
				'process.env.API_BASE': JSON.stringify(API_BASE)
			}
		})
	}
}

export default config