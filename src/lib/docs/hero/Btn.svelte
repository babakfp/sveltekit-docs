<script>
	export let icon
	export let href
</script>

{#if href}
	<li>
		<a
			class="flex items-center justify-center w-8 h-8 rounded-md text-white-70 transition-all duration-200 ease-in hover:text-white focus:text-white hover:bg-white-10 focus:bg-white-10 lg:w-12 lg:h-12 lg:rounded"
			{href}
		>
			<i class="{icon} lg:text-lg" />
		</a>
	</li>
{:else}
	<li>
		<button
			class="flex items-center justify-center w-8 h-8 rounded-md text-white-70 transition-all duration-200 ease-in hover:text-white focus:text-white hover:bg-white-10 focus:bg-white-10 lg:w-12 lg:h-12 lg:rounded"
		>
			<i class="{icon} lg:text-lg" />
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
