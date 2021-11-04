<script>
	import Hero from ':lib/docs/hero/Index.svelte'
	export let sections
</script>

<div class="content w-full bg-darkest lg:bg-darker lg:overflow-hidden lg:mb-8">
	{#each sections as section}
		<Hero
			title={section.title}
			slug={section.slug}
			file={section.file}
		/>
		<div class="pt-8 pb-12 bg-darker rounded-tr-3xl rounded-bl-3xl text-white-70 lg:text-base">
			<div class="container px-4 max-w-2xl">
				<div id={section.slug} class="markdown">
					{@html section.content}
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="sass">
	@media (min-width: 1024px)
		.content
			max-width: calc(100% - 16rem)
			margin-left: auto
</style>
