<script>
	import { page } from '$app/stores';
	import '../app.css'

	// Layouts
	import Default from ':layouts/Default.svelte'
	import Home from ':layouts/Home.svelte'
	import Docs from ':layouts/Docs.svelte'
	import Page from ':layouts/Page.svelte'
	
	const layouts = {
		'/': Home,
		'/docs': Docs,
		'/migration': Page,
		'/faq': Page,
	}
	$: layout = layouts[$page.path] ?? Default
</script>

<svelte:component this={layout}>
	<slot />
</svelte:component>