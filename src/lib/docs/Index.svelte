<script>
	import Hero from '$lib/docs/hero/Index.svelte'
	export let sections
</script>

<div
	class="w-full bg-dark-900 lg:bg-dark-800 lg:rounded-3xl lg:overflow-hidden lg:mb-8"
>
	{#each sections as section}
		<Hero
			title={section.title}
			slug={section.slug}
			file={section.file}
		/>
		<div
			class="pt-8 pb-12 bg-dark-800 rounded-tr-3xl rounded-bl-3xl text-gray-200 text-opacity-70 lg:text-base"
		>
			<div class="container max-w-2xl markdown overflow-x-auto">
				<div id="docs__content">
					{@html section.content}
				</div>
			</div>
		</div>
	{/each}
</div>
