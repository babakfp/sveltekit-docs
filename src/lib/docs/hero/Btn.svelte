<script>
	export let icon
	export let href
</script>

{#if href}
	<li>
		<a
			class="flex items-center justify-center w-8 h-8 text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100"
			{href}
		>
			<i class={icon} />
		</a>
	</li>
{:else}
	<li>
		<button
			class="flex items-center justify-center w-8 h-8 text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100"
		>
			<i class={icon} />
		</button>
	</li>
{/if}

<style>
	/* a, button {
		border-radius: 7px;
		transition: all 0.25s ease;
	}
	a:hover,
	button:hover
	 {
		background: #1e2023;
		transform: translateY(-2px);
		box-shadow: 0 5px 10px -5px rgb(0 0 0 / 10%);
	} */
</style>
