<script context="module">
	import { API_BASE } from '../_env'
	export async function load({ fetch }) {
		const sections = await fetch(`${API_BASE}/docs/kit/faq?content`).then(r => r.json())
		return {
			props: { sections },
			maxage: 60,
		}
	}
</script>

<script>
	export let sections
	import Page from ':lib/page/Index.svelte'
</script>

<svelte:head>
	<title>Migration</title>
</svelte:head>

<Page {sections} />
