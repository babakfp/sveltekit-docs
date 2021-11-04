<script>
	import MMenuToggle from './MMenuToggle.svelte'
	import Logo from './Logo.svelte'
	import Menu from './Menu.svelte'
	import { githubRepo } from ':store/global.js'
</script>

<header class="z-40 sticky top-0 inset-x-0 flex justify-between h-15 px-4 bg-dark border-b border-white-10">
	<div class="flex">
		<MMenuToggle />
		<Logo />
	</div>
	<Menu />
	<div class="flex">
		<span class="h-full flex items-center px-2 text-sm text-white text-opacity-70">
			v1.x
		</span>

		<ul class="flex">
			<li>
				<button class="widget">
					<i class="sk-lang" />
				</button>
			<li>
				<a class="widget" href="/chat" target="_blank">
					<i class="sk-discord" />
				</a>
			</li>
			<li>
				<a class="widget" href={$githubRepo} target="_blank">
					<i class="sk-github" />
				</a>
			</li>
		</ul>
	</div>
</header>

<style lang="postcss">
	.widget {
		@apply h-full flex items-center px-2 text-white-70 transition-all duration-200 ease-in hover:text-white-90 focus:text-white-90;
	}
</style>