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
					':layouts': path.resolve('./src/layouts'),
					':stores': path.resolve('./src/stores'),
					':utils': path.resolve('./src/utils'),
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