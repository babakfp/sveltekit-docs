<script>
	import { page } from '$app/stores';
	import '../app.css'

	import LoadingBar from ':lib/LoadingBar.svelte'

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

<LoadingBar />

<svelte:component this={layout}>
	<slot />
</svelte:component>

<style lang="postcss">
	:global(#body #svelte .loading-bar .loading-bar__train:before),
	:global(#body #svelte .loading-bar .loading-bar__train:after) {
		@apply bg-brand;
	}
	:global(.loading-bar) {
		height: 2px !important;
	}
</style>