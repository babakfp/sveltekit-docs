<script>
	export let navItems
	import { onMount } from 'svelte'
	import { browser } from '$app/env'
	import PrimItem from './PrimItem.svelte'

	import { isSideMenuOpen, closeSideMenu } from ':stores/header'

	let windowWidth = 0
	let y = 0
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY={y} />
<div
	class="nav-container
		{$isSideMenuOpen || windowWidth >= 1024 ? '' : 'hidden'}
		z-40 fixed left-0 right-0 bottom-0 h-full bg-darkest bg-opacity-50 lg:z-0 lg:inset-auto lg:w-64"
		on:click|self={() => closeSideMenu()}
		>
	<nav
		class="relative w-64 h-full bg-gradient-to-b from-darkest to-dark lg:from-dark"
	>
		<div class="h-full overflow-y-auto py-4 pb-2 scrollable-box lg:border-r lg:border-white-10">
			
			<ul>
				<PrimItem title="Svelte Docs" icon="documentation" href="https://svelte.dev/docs" />
				<PrimItem title="Playground" icon="playground" href="https://svelte.dev/repl" />
				<PrimItem title="Blog" icon="news" href="https://svelte.dev/blog" />
				<PrimItem title="Resources" icon="resources" href="https://www.google.com/search?q=SvelteJS+resources&sxsrf=AOaemvK5pHaKWj8Oaqe--GLnvV8be6VTsg%3A1635999522537&ei=Il-DYY6lIIKTkwWOma-QBg&oq=SvelteJS+resources&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BwgAEEcQsAM6BwgjEOoCECdKBAhBGABQ0ZABWJygAWDiogFoAnACeACAAdsDiAG0BZIBBzItMS4wLjGYAQCgAQGgAQKwAQrIAQbAAQE&sclient=gws-wiz&ved=0ahUKEwiOvpKT7f3zAhWCyaQKHY7MC2IQ4dUDCA4&uact=5" />
				<PrimItem title="Radio" icon="screencasts" href="https://svelteradio.com" />
			</ul>

			<ul class="space-y-8 mt-8">
				{#each navItems as dlvl1}
					<li>
						<a
							class="block py-2 px-5 font-semibold lg:px-6 hover:bg-brand hover:bg-opacity-20"
							href="docs#{dlvl1.slug}"
							>{dlvl1.title}</a
						>
						<ul class="text-sm">
							{#if dlvl1.sections.length > 0}
								{#each dlvl1.sections as subsection}
									<li>
										<a
											class="block py-2 px-5 text-white-70 transition-all duration-200 ease-in-out hover:text-white focus:text-white lg:px-6 hover:bg-brand hover:bg-opacity-20"
											href="docs#{subsection.slug}"
											>{subsection.title}</a
										>
										{#if subsection.sections.length > 0}
											{#each subsection.sections as subsubsection}
												<a
													class="relative block py-2 px-9 text-white-70 transition-all duration-200 ease-in-out hover:text-white focus:text-white lg:px-8 hover:bg-brand hover:bg-opacity-20"
													href="docs#{subsubsection.slug}"
													>{subsubsection.title}
												</a>
											{/each}
										{/if}
									</li>
								{/each}
							{/if}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<button
	class="z-50 fixed bottom-4 right-4 flex items-center justify-center w-15 h-15 rounded-full bg-darkest text-white border-2 border-white border-opacity-5 lg:hidden"
	on:click={_=> $isSideMenuOpen = !$isSideMenuOpen}
>
	<i class="sk-menu"></i>
</button>

<style lang="sass">
	@media (min-width: 1024px)
		.nav-container
			height: calc(100vh - 60px)
	.scrollable-box
		&::-webkit-scrollbar
			&-track
				background: transparent
			&-thumb
				background: rgba(white, .0) !important
				&:hover
					background: rgba(145, 71, 255, .0) !important
		&:hover::-webkit-scrollbar-thumb
			background: rgba(white, .1) !important
			&:hover
				background: rgba(145, 71, 255, .8) !important
</style>