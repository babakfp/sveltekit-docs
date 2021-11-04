<script>
	import MMenuToggle from './MMenuToggle.svelte'
	import Logo from './Logo.svelte'
	import VersionNumber from './VersionNumber.svelte'
	import SocialIcon from './Widget.svelte'
	import Menu from './Menu.svelte'
	import { githubRepo } from ':store/global.js'

	// let hidden = true

	// Prevents navbar to show/hide when clicking in docs sidebar
	// let hash_changed = false
	// function handle_hashchange() {
	// 	hash_changed = true
	// }
	// let last_scroll = 0
	// function handle_scroll() {
	// 	const scroll = window.pageYOffset
	// 	if (!hash_changed) {
	// 		hidden = ((scroll > 50) && (scroll > last_scroll))
	// 	}
	// 	last_scroll = scroll
	// 	hash_changed = false
	// }
</script>

<!-- <svelte:window on:hashchange={handle_hashchange} on:scroll={handle_scroll} /> -->

<!-- class:header--hidden={hidden} -->
<header class="z-40 sticky top-0 inset-x-0 flex justify-between h-15 px-4 bg-dark">
	<div class="flex">
		<MMenuToggle />
		<Logo />
	</div>
	<Menu />
	<div class="flex">
		<VersionNumber />

		<ul class="h-full flex">
			<SocialIcon icon="sk-lang" />
			<SocialIcon icon="sk-discord" href="/chat" />
			<SocialIcon icon="sk-github" href={$githubRepo} />
		</ul>
	</div>
</header>

<!-- <style>
	:global(.header--hidden) {
		transform: translateY(-60px)
	}
</style> -->