<script context="module">
	import { API_BASE } from '../../_env'
	export async function load({ page, fetch }) {
		const data = await fetch(`${API_BASE}/docs/kit/docs/${page.params.slug}`).then(r => r.json())
		return {
			props: { data },
			maxage: 60,
		}
	}
</script>

<script>
	export let data
	import Menu from ':lib/sidemenu/Index.svelte'
	import Docs from ':lib/docs/Index.svelte'
</script>

<svelte:head>
	<title>Documentation</title>
</svelte:head>
<!-- 
<Menu {sections} />

 -->
<Docs {data} />