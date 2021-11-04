<script>
	import OutClick from 'svelte-outclick'
	import MenuItem from ':lib/header/MenuItem.svelte'
	import { isMMenuOpen, menuItems } from ':store/header.js'
</script>

<OutClick on:outclick={_=> $isMMenuOpen = false} exclude={['.mmenu-toggle']}>
	<nav class="{$isMMenuOpen ? 'h-auto' : 'h-0'} absolute top-full inset-x-0 z-10 border-t border-white border-opacity-10 bg-dark transition-all duration-300 overflow-hidden md:relative md:h-auto md:top-auto md:border-0 md:overflow-visible">
		<ul class="py-2 md:flex md:h-full">
			{#each $menuItems as item}
				<MenuItem {item} />
			{/each}
		</ul>
	</nav>
</OutClick>
