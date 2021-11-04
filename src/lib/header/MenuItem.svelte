<script>
	import { onMount } from 'svelte'
	import { browser } from '$app/env'
	import { isMMenuOpen } from ':stores/header.js'
	export let item
	let isOpen = false
	const toggleSubmenu =_=> {
		isOpen = !isOpen
		if (!item.child && item.href) {
			$isMMenuOpen = false
		}
	}
</script>

<li class="relative md:flex">
	<a class="flex items-center justify-between gap-1 py-2 px-4 text-white text-opacity-70 hover:text-opacity-90 group" href={item.child ? 'javascript:' : item.href}
		on:click={toggleSubmenu}>
		<span>{item.title}</span>
		{#if item.child}
			<i class="sk-angle-down text-white text-opacity-50"></i>
		{/if}
	</a>
	{#if item.child && (isOpen || browser && window.innerWidth > 768)}
		<ul class="md:min-w-50 md:rounded md:text-sm
			md:absolute md:transform md:-translate-y-4 md:invisible md:opacity-0 md:top-full
			md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:visible
			md:bg-darker md:whitespace-nowrap
		">
			{#each item.child as child}
				<li>
					<a class="block py-2 px-8 text-white text-opacity-70 hover:text-opacity-90 md:pr-8" href={child.href}
						on:click={_=> {
							$isMMenuOpen = false
							isOpen = false
						}}>
						{child.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</li>

<style lang="sass">
	ul li
		&:first-of-type a
			padding-top: 1rem
		&:last-of-type a
			padding-bottom: 1rem

	@media only screen and (min-width: 768px)
		li > ul
			box-shadow: 0 20px 50px 0 rgb(24, 25, 28)
			max-height: 50vh
			transition: 200ms ease-in
			display: block !important

		li:hover > ul,
		li:focus > ul,
		li:focus-within > ul
			transform: translateY(0) !important
			visibility: visible !important
			opacity: 1 !important
</style>
