<script>
	import { githubRepo } from ':stores/global.js'
	import EyeCatchingFeature from ':lib/home/EyeCatchingFeature.svelte'
	import InstallationCodeBlock from ':lib/home/InstallationCodeBlock.svelte'
</script>

<svelte:head>
	<title>SvelteKit Documentation</title>
</svelte:head>

<section class="mt-12 md:flex items-center gap:10 md:mt-16">
	<div class="relative grid gap-8 mx-auto w-full max-w-sm">
		<div class="text-center">
			<h1 class="text-2xl font-semibold italic">A fully featured web framework for <a class="text-brand not-italic" href="https://svelte.dev" target="_blank">SvelteJS</a></h1>
			<h2 class="text-lg mt-2">SvelteKIt includes everything you need to create a fully functional web app.</h2>
		</div>
		
		<div class="grid gap-4 justify-items-center">
			<!-- TODO: Shadow on hover, focus -->
			<a id="go-to-docs-btn" class="btn btn--brand w-full h-12 px-6 text-white-70 font-medium" href="/docs">Get Started</a>
			<div class="flex gap-4 w-full">
				<a class="btn w-full h-12 px-6 bg-darker text-white-70 border-white border-opacity-10 hover:border-opacity-20 focus:border-opacity-20" href="/chat">
					<i class="sk-discord opacity-80"></i>
					<span>Discord</span>
				</a>
				<a class="btn w-full h-12 px-6 bg-darker text-white-70 border-white border-opacity-10 hover:border-opacity-20 focus:border-opacity-20" href={$githubRepo}>
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
			<EyeCatchingFeature
				borderColor="border-vite"
				title="Powered by <span class='italic'>ViteJS</span>"
				description="💡 Instant server start, ⚡️ Lightning fast <span title='Hot Module Replacement'>HMR</span>, 🛠️ Rich features, 📦 Optimized build, 🔌 Universal plugins, 🔑 Fully typed APIs."
				href="https://vitejs.dev"
			/>
		</ul>
	</div>
</section>

<section class="markdown mt-12 md:mt-16 md:px-10 lg:pt-16 lg:border-t lg:border-white-10">
	<div class="max-w-sm mx-auto md:grid md:grid-cols-2 md:gap-12 md:max-w-5xl">
		<div>
			<p>SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.</p>
			<p>Unlike single-page apps, SvelteKit doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.</p>
		</div>
		<div>
			<InstallationCodeBlock />
			<a class="btn btn--brand h-12 px-6 text-white-70 font-medium" href="/docs#introduction-getting-started">Documentation</a>
		</div>
	</div>
</section>

<style lang="sass">
	#go-to-docs-btn
		box-shadow: 0 0 20px rgb(145 71 255 / 50%)
		&:hover,
		&:focus
			transform: translateY(-4px)
			box-shadow: 0 4px 20px rgb(145 71 255 / 60%)
</style>
