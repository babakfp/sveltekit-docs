<script>
	import Hero from ':lib/docs/hero/Index.svelte'
	export let data
</script>

<div class="content w-full bg-darkest lg:bg-darker lg:overflow-hidden lg:mb-8">
	<Hero
		title={data.title}
		slug={data.slug}
		file={data.file}
	/>
	<div class="pt-8 pb-12 bg-darker rounded-tr-3xl rounded-bl-3xl text-white-70 lg:text-base">
		<div class="container px-4 max-w-2xl markdown overflow-x-auto">
			<div id="docs">
				{@html data.content}
			</div>
		</div>
	</div>
</div>

<style lang="sass">
	.content
		max-width: calc(100% - 16rem)
		margin-left: auto
	:global(#docs h2),
	:global(#docs h3),
	:global(#docs h4),
	:global(#docs h5),
	:global(#docs h6)
		color: rgb(white, .9) !important
</style>
