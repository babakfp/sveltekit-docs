<script>
	export let title
	export let description
	export let borderColor = 'border-gray-600'
	export let href = null
</script>

{#if href}
	<li class="h-full">
		<a class="block h-full bg-dark-800 p-4 rounded md:p-6 transition duration-200 border-b-2 border-dashed {borderColor} border-opacity-30 hover:border-opacity-40" {href}>
			<h3 class="text-lg font-medium md:mb-1">{@html title}</h3>
			<p class="text-sm text-white text-opacity-70 md:leading-6">{@html description}</p>
		</a>
	</li>
{:else}
	<li class="h-full bg-dark-800 p-4 rounded md:p-6 transition duration-200 border-b-2 border-dashed {borderColor} border-opacity-30 hover:border-opacity-40">
		<h3 class="text-lg font-medium md:mb-1">{@html title}</h3>
		<p class="text-sm text-white text-opacity-70 md:leading-6">{@html description}</p>
	</li>
{/if}
