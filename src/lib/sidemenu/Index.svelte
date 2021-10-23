<script>
	export let sections
	import { onMount } from 'svelte'
	import { browser } from '$app/env'

	import { isSideMenuOpen, closeSideMenu } from '../../stores/header'

	// import { stores } from '@sapper/app'
	// const { preloading } = stores()
	// if ($preloading) $isSideMenuOpen = false

	$: if (windowWidth <= 1024) {
		if ($isSideMenuOpen) {
			if (browser) document.body.classList.add('overflow-y-hidden')
		} else {
			if (browser) document.body.classList.remove('overflow-y-hidden')
		}
	} else {
		if (browser) document.body.classList.remove('overflow-y-hidden')
	}

	let windowWidth = 0
	let y = 0
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY={y} />
<div
	class="
		{$isSideMenuOpen || windowWidth >= 1024 ? '' : 'hidden'}
		z-40 fixed left-0 right-0 bottom-0 lg:z-0 lg:sticky lg:inset-auto lg:top-4 lg:w-64"
		on:click|self={() => closeSideMenu()}
		>
	<nav
		class="py-4 relative w-64 h-full bg-gradient-to-b from-dark-900 to-dark-700 lg:w-60 lg:sticky lg:top-4 lg:px-0 lg:pb-8 lg:shadow-none lg:from-dark-700"
	>
		<div
			class="h-full overflow-y-auto pb-2
			{windowWidth >= 1024 ? 'desktop-scrollbar' : 'mobile-scrollbar'}"
		>
			<ul class="space-y-8">
				{#each sections as section}
					<li>
						<a
							class="block py-1 px-5 font-medium lg:px-6"
							href="docs/#{section.slug}"
							>{section.title}</a
						>
						<ul class="text-sm">
							{#each section.sections as subsection}
								<li>
									<!-- {#if subsection.level === 3} -->
									<a
										class="block py-1 px-5 text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100 lg:px-6"
										href="docs/#{section.slug}__{subsection.slug}"
										>{subsection.title}</a
									>
									{#if subsection.sections}
										{#each subsection.sections as subsubsection}
											<a
												class="relative block py-1 px-9 text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100 lg:px-8"
												href="docs/#{section.slug}__{subsubsection.slug}"
												>{subsubsection.title}
											</a>
										{/each}
									{/if}
									<!-- {:else}
										<a
											class="relative block py-1 px-9 text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100 lg:px-6"
											href="docs/#{section.slug}__{subsection.slug}"
											>{subsection.title}
										</a>
									{/if} -->
									<!-- <ul>
										<li>
											<a
												class="relative block py-1 px-9 text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100 lg:px-6"
												href="/"
												>Introduction
												<div
													class="absolute left-0 inset-y-center w-0.75 h-4.5 bg-white rounded-r-full"
												/>
											</a>
										</li>
									</ul> -->
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<button class="z-50 fixed bottom-4 right-4 flex items-center justify-center w-15 h-15 rounded-full bg-dark-900 text-white border-2 border-white border-opacity-5"
on:click={_=> $isSideMenuOpen = !$isSideMenuOpen}>
	<i class="sk-menu"></i>
</button>

<style>
	/* nav {
		box-shadow: 999px 999px 0px 999px rgb(20, 20, 23, 0.7);
	} */
</style>
