<script>
	import Header from ':lib/header/Index.svelte'
	import Footer from ':lib/Footer.svelte'
</script>

<Header />

<main class="px-4">
	<slot />
</main>

<Footer />
