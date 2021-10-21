<script>
	export let icon
	export let href
</script>

{#if href}
	<li class="h-full items-center">
		<a class="h-full flex items-center px-2 text-white text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100"
			{href} target="_blank">
			<i class={icon} />
		</a>
	</li>
{:else}
	<li class="h-full items-center">
		<button class="h-full flex items-center px-2 text-white text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100">
			<i class={icon} />
		</button>
	</li>
{/if}
