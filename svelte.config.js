import path from 'path'
import vercel from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'

const API_BASE = 'https://api.svelte.dev'

const config = {
	kit: {
		target: '#svelte',
		adapter: vercel(),
		vite: () => ({
			define: {
				'process.env.API_BASE': JSON.stringify(API_BASE)
			},
			resolve: {
				alias: {
					':lib': path.resolve('./src/lib'),
					':store': path.resolve('./src/store'),
					':util': path.resolve('./src/util')
				}
			}
		})
	},
	preprocess: [
		sveltePreprocess({
			postcss: true
		})
	]
}

export default config