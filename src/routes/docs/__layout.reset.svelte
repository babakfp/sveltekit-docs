<script>
	import Header from ':lib/header/Index.svelte'
</script>

<svelte:head>
	<style>
		/* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'); */

		#docs a {
			@apply text-brand border-b border-dashed border-brand border-opacity-75;
			@apply hover:text-brandp hover:border-brandp;
		}

		#docs a:focus {
			outline-offset: 2px;
			outline: 2px dotted rgba(255, 255, 255, .7);
		}

		#docs pre code {
			@apply block p-6 rounded-md;
		}

		#docs > * {
			@apply mb-5;
		}

		#docs h2,
		#docs h3,
		#docs h4,
		#docs h5,
		#docs h6 {
			@apply font-semibold mb-4;
		}

		#docs * + h2,
		#docs * + h3,
		#docs * + h4,
		#docs * + h5,
		#docs * + h6 {
			@apply mt-8 pt-8;
		}

		#docs h3 {
			@apply text-2xl !important;
		}

		#docs h4 {
			@apply text-xl !important;
		}

		#docs table thead tr th {
			text-align: left;
		}
	</style>
</svelte:head>

<Header />

<div class="lg:bg-darker">
	<main class="lg:flex">
		<slot />
	</main>
</div>