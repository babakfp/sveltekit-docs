<script context="module">
	import { API_BASE } from '../../_env'
	export async function load({ fetch }) {
		const sections = await fetch(`${API_BASE}/docs/kit/docs?content`).then(r => r.json())
		return {
			props: { sections },
			maxage: 60,
		}
	}
</script>

<script>
	export let sections
	import Menu from '$lib/sidemenu/Index.svelte'
	import Docs from '$lib/docs/Index.svelte'
	console.log(sections[1]);
</script>

<svelte:head>
	<title>Documentation</title>
</svelte:head>

<Menu {sections} />

<Docs {sections} />
