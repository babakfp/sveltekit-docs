<script>
	import { githubRepo } from ':store/global.js'
</script>

<footer class="mt-12 px-4 pt-8 pb-12 bg-darker md:mt-16 md:py-12 md:px-10">
	<div class="grid justify-center justify-items-center gap-10 max-w-sm mx-auto md:max-w-5xl md:flex md:items-center md:justify-between md:gap-8">
		<h2 class="text-2xl font-medium lg:text-4xl">Build. Ship. Repeat.</h2>

		<ul class="grid grid-cols-2 gap-y-1 gap-x-8 text-sm">
			<li><a class="text-white-70 hover:text-white-90" href="/what-is-sveltekit">What is SvelteKit?</a></li>
			<li><a class="text-white-70 hover:text-white-90" href="/sveltekit-vs-sapper">SvelteKit vs Sapper</a></li>
			<li><a class="text-white-70 hover:text-white-90" href="/faq">FAQ</a></li>
			<li><a class="text-white-70 hover:text-white-90" href="/docs">Documentation</a></li>
			<li><a class="text-white-70 hover:text-white-90" href="/chat">Discord comunity</a></li>
			<li><a class="text-white-70 hover:text-white-90" href={$githubRepo}>Github</a></li>
		</ul>
	</div>
</footer>
