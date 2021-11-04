<script context="module">
	import { API_BASE } from '../_env'
	export async function load({ fetch }) {
		const sections = await fetch(`${API_BASE}/docs/kit/docs?content`).then(r => r.json())
		const sidebarNavItems = await fetch(`${API_BASE}/docs/kit/docs`).then(r => r.json())
		return {
			props: { sections, sidebarNavItems },
			maxage: 60,
		}
	}
</script>

<script>
	export let sections
	export let sidebarNavItems
	import Sidebar from ':lib/sidemenu/Index.svelte'
	import Docs from ':lib/docs/Index.svelte'
</script>

<svelte:head>
	<title>Documentation</title>
</svelte:head>

<Sidebar navItems={sidebarNavItems} />

<Docs {sections} />
