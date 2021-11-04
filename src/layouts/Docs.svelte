<script>
	import Header from ':lib/header/Index.svelte'
</script>

<Header />

<div class="lg:bg-darker">
	<main class="lg:flex">
		<slot />
	</main>
</div>