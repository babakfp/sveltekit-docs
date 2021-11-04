<script>
	export let sections
</script>

<div class="pt-8 pb-12 text-white-70 lg:text-base">
	<div class="container px-4 max-w-2xl">
		{#each sections as section}
			<div id={section.slug} class="markdown">
				{@html section.content}
			</div>
		{/each}
	</div>
</div>
