import { writable, readable } from 'svelte/store'
import { browser } from '$app/env'

export const isMMenuOpen = writable((browser && (window.innerWidth >= 768)) ? true : false)
export const isSideMenuOpen = writable((browser && (window.innerWidth >= 1024)) ? true : false)

export const toggleMMenu =_=> {
	if (!browser) return
	if (window.innerWidth >= 768) return
	isMMenuOpen.update(isMMenuOpen => !isMMenuOpen)
}

export const closeSideMenu =_=> {
	if (!browser) return
	if (window.innerWidth >= 1024) return
	isSideMenuOpen.set(false)
}

export const menuItems = readable([
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
