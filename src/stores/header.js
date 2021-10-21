import { writable, readable } from 'svelte/store'
import { browser } from '$app/env'

export const isMobileMenuOpen = writable(false)

export const toggleMobileMenu = _ => {
	isMobileMenuOpen.update(isMobileMenuOpen => !isMobileMenuOpen)
}

export const mainMenuItems = readable([
	{
		title: 'Guide',
		child: [
			{
				title: 'What is SvelteKit?',
				href: '/what-is-sveltekit',
			},
			{
				title: 'Getting Started',
				href: '/getting-started',
			},
		],
	},
	{
		title: 'Documentation',
		href: '/docs',
	},
	{
		title: 'Migration',
		href: '/migration',
	},
	{
		title: 'FAQ',
		href: '/faq',
	},
])
