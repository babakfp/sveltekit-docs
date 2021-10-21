<script>
	import MenuItem from '$lib/header/MenuItem.svelte'
	import { isMobileMenuOpen, mainMenuItems } from '../../stores/header.js'
</script>

<nav class="{!$isMobileMenuOpen && 'h-0'} absolute top-full inset-x-0 z-10 border-t border-white border-opacity-10 bg-dark-700 transition duration-300 overflow-hidden md:relative md:h-auto md:top-auto md:border-0">
	<ul class="py-2 md:flex md:h-full">
		{#each $mainMenuItems as item}
			<MenuItem {item} />
		{/each}
	</ul>
</nav>
