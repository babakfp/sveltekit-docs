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

	let hidden = true

	// Prevents navbar to show/hide when clicking in docs sidebar
	let hash_changed = false
	function handle_hashchange() {
		hash_changed = true
	}
	let last_scroll = 0
	function handle_scroll() {
		const scroll = window.pageYOffset
		if (!hash_changed) {
			hidden = ((scroll > 50) && (scroll > last_scroll))
		}
		last_scroll = scroll
		hash_changed = false
	}
</script>

<svelte:window on:hashchange={handle_hashchange} on:scroll={handle_scroll} />

<LoadingBar />

<svelte:component this={layout}>
	<slot />
</svelte:component>

<a class:goup--hidden={hidden} class="z-50 fixed bottom-4 right-4 flex items-center justify-center w-15 h-15 rounded-full bg-darkest text-white border-2 border-white border-opacity-5 transition duration-300 ease-in-out"
	href="#body">
	UP
</a>

<style lang="postcss">
	:global(#body #svelte .loading-bar .loading-bar__train:before),
	:global(#body #svelte .loading-bar .loading-bar__train:after) {
		@apply bg-brand;
	}
	:global(.loading-bar) {
		@apply h-1 lg:h-0.5;
	}
	:global(.goup--hidden) {
		@apply transform translate-y-20;
	}
</style>