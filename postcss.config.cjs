const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	plugins: [
		// Some plugins like tailwindcss and nesting, need to run before Tailwind,
		tailwindcss(),
		// ...but others like autoprefixer, need to run after,
		!dev && autoprefixer(),
		!dev && cssnano({ preset: 'default' }),
	]
}

module.exports = config