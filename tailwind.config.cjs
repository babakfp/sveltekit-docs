const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: {
					700: '#212327', // hsl(216, 8%, 14%)
					800: '#17191C', // hsl(216, 8%, 10%)
					900: '#131416', // hsl(216, 8%, 8%)
				},
				brand: {
					DEFAULT: '#9147FF',
					dp: '#772CE8',
				},
				white: {
					DEFAULT: "#fff",
					900: 'rgba(255, 255, 255, 0.9)',
					800: 'rgba(255, 255, 255, 0.8)',
					700: 'rgba(255, 255, 255, 0.7)',
					600: 'rgba(255, 255, 255, 0.6)',
					500: 'rgba(255, 255, 255, 0.5)',
					400: 'rgba(255, 255, 255, 0.4)',
					300: 'rgba(255, 255, 255, 0.3)',
					200: 'rgba(255, 255, 255, 0.2)',
					100: 'rgba(255, 255, 255, 0.1)',
				},
				body: {
					text: `rgba(255, 255, 255, .9)`,
					bg: `#212327`,
				},
				svelte: '#ff3e00',
				vite: '#646cff',
			},
			spacing: {
				// 9.5: '2.375rem',
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
