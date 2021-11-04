import { writable, readable } from 'svelte/store'
import { browser } from '$app/env'

export const isMMenuOpen = writable(false)
export const isSideMenuOpen = writable(false)

if (browser) {
	if (window.innerWidth >= 768) isMMenuOpen.set(true)
	if (window.innerWidth >= 1024) isSideMenuOpen.set(true)
	window.addEventListener('resize', _=> {
		if (window.innerWidth >= 768) {
			isMMenuOpen.set(true)
		} else {
			isMMenuOpen.set(false)
		}
		if (window.innerWidth >= 1024) {
			isSideMenuOpen.set(true)
		} else {
			isSideMenuOpen.set(false)
		}
	})
}

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
				href: '/docs#introduction-what-is-sveltekit',
			},
			{
				title: 'Getting Started',
				href: '/docs#introduction-getting-started',
			},
		],
	},
	{
		title: 'Docs',
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
