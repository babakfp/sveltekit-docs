<script>
	import Header from '$lib/header/Index.svelte'
	import Footer from '$lib/Footer.svelte'
</script>

<Header />

<div class="lg:bg-dark-800">
	<main class="lg:container lg:flex">
		<slot />
	</main>
</div>

<Footer />

<svelte:head>
	<style>
		/* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'); */

		#docs__content {
			@apply leading-7;
			/* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important; */
			font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
		}

		#docs__content pre code {
			@apply block p-6 rounded-md;
		}

		#docs__content > * {
			@apply mb-5;
		}

		#docs__content h2,
		#docs__content h3,
		#docs__content h4,
		#docs__content h5,
		#docs__content h6 {
			@apply font-semibold mb-4;
		}

		#docs__content * + h2,
		#docs__content * + h3,
		#docs__content * + h4,
		#docs__content * + h5,
		#docs__content * + h6 {
			@apply mt-8 pt-8;
		}

		#docs__content h3 {
			@apply text-2xl !important;
		}

		#docs__content h4 {
			@apply text-xl !important;
		}

		#docs__content table thead tr th {
			text-align: left;
		}
	</style>
</svelte:head>