<script>
	import { githubRepo } from ':stores/global.js'
	import EyeCatchingFeature from ':lib/home/EyeCatchingFeature.svelte'
</script>

<section class="mt-12 md:flex items-center gap:10 md:mt-16">
	<div class="relative grid gap-8 mx-auto w-full max-w-sm">
		<div class="text-center">
			<h1 class="text-2xl font-semibold italic">A fully featured web framework for <a class="text-brand not-italic" href="https://svelte.dev">SvelteJS</a></h1>
			<h2 class="text-lg mt-2">SvelteKIt includes everything you need to create a fully functional web app.</h2>
		</div>
		
		<div class="grid gap-4 justify-items-center">
			<!-- TODO: Shadow on hover, focus -->
			<a id="go-to-docs-btn" class="btn btn--brand w-full h-12 px-6 text-white text-opacity-70 font-medium" href="/docs">Get Started</a>
			<div class="flex gap-4 w-full">
				<a class="btn w-full h-12 px-6 bg-darker text-white text-opacity-70 border-white border-opacity-10 hover:border-opacity-20 focus:border-opacity-20" href="/chat">
					<i class="sk-discord opacity-80"></i>
					<span>Discord</span>
				</a>
				<a class="btn w-full h-12 px-6 bg-darker text-white text-opacity-70 border-white border-opacity-10 hover:border-opacity-20 focus:border-opacity-20" href={$githubRepo}>
					<i class="sk-github opacity-80"></i>
					<span>Github</span>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="mt-12 md:mt-16 md:px-10">
	<div class="max-w-sm mx-auto md:max-w-5xl">
		<ul class="grid gap-4 md:grid-cols-2">
			<EyeCatchingFeature
				borderColor="border-blue-600"
				title="All in one 📦"
				description="Hit the ground running with advanced routing, server-side rendering, code-splitting, offline support, and more."
			/>
			<EyeCatchingFeature
				borderColor="border-green-600"
				title="Best of both worlds"
				description="All the SEO and progressive enhancement of a server-rendered app, with the slick navigation of an SPA."
			/>
			<EyeCatchingFeature
				borderColor="border-svelte"
				title="Powered by <span class='italic'>SvelteJS</span>"
				description="Cybernetically enhanced web apps. Build big (even bigger) apps with small (even smaller) footprints."
				href="https://svelte.dev"
			/>
			<!-- <a class='text-brand text-opacity-70 transition duration-300 hover:text-opacity-90' href='https://svelte.dev'>Learn more about SvelteJS here.</a> -->
			<EyeCatchingFeature
				borderColor="border-vite"
				title="Powered by <span class='italic'>ViteJS</span>"
				description="💡 Instant server start, ⚡️ Lightning fast <span title='Hot Module Replacement'>HMR</span>, 🛠️ Rich features, 📦 Optimized build, 🔌 Universal plugins, 🔑 Fully typed APIs."
				href="https://vitejs.dev"
			/>
			<!-- <a class='text-brand text-opacity-70 transition duration-300 hover:text-opacity-90' href='https://vitejs.dev'>Learn more about SvelteJS here.</a> -->
		</ul>
	</div>
</section>

<!-- <section class="max-w-sm mt-12 mx-auto md:max-w-5xl md:px-10 md:mt-16">
	{#await $highlighter}
		<p>...waiting</p>
	{:then result}
		{result}
	{:catch error}
		Something went wrong.
		<br>
		<p>{error.message}</p>
	{/await}
</section> -->

<style lang="sass">
	#go-to-docs-btn
		box-shadow: 0 0 20px rgb(145 71 255 / 50%)
		&:hover,
		&:focus
			transform: translateY(-4px)
			box-shadow: 0 8px 20px rgb(145 71 255 / 60%)
			transition: 200ms
</style>
