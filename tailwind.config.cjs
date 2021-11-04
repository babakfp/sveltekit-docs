const config = {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				'base-cr': 'rgba(255, 255, 255, .9)',
				'base-bg': '#1c1e21',
				dark: '#1c1e21',
				darker: '#17191C',
				darkest: '#131416',
				brand: '#9147FF',
				brandp: '#772CE8',
				svelte: '#ff3e00',
				vite: '#646cff',
				white: {
					DEFAULT: "#fff",
					90: 'rgba(255, 255, 255, .9)',
					80: 'rgba(255, 255, 255, .8)',
					70: 'rgba(255, 255, 255, .7)',
					60: 'rgba(255, 255, 255, .6)',
					50: 'rgba(255, 255, 255, .5)',
					40: 'rgba(255, 255, 255, .4)',
					30: 'rgba(255, 255, 255, .3)',
					20: 'rgba(255, 255, 255, .2)',
					10: 'rgba(255, 255, 255, .1)',
				},
			},
			container: {
				center: true
			},
			spacing: {
				15: '3.75rem',
				50: '12.5rem',
			},
			borderRadius: {
				DEFAULT: '0.625rem',
			},
		},
	},
	variants: {
		extend: {
			translate: ['group-hover'],
			margin: ['first', 'last'],
			padding: ['last'],
			borderWidth: ['last'],
			scale: ['group-hover', 'group-focus'],
		},
	},
	plugins: [],
}

module.exports = config
