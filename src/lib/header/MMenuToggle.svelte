<script>
	import { isMMenuOpen, toggleMMenu } from ':stores/header.js'
</script>

<button class="mmenu-toggle group -ml-2 px-4 md:hidden" on:click={toggleMMenu}>
	<div class="w-6 grid {!$isMMenuOpen && 'gap-1.5'} transition-all duration-200">
		<div class="h-0.5 {$isMMenuOpen && '-mb-px rotate-45'} bg-white bg-opacity-70 rounded-full transition-all duration-200 transform group-hover:bg-opacity-100 group-focus:bg-opacity-100" />
		<div class="h-0.5 {$isMMenuOpen && '-mt-px -rotate-45'} bg-white bg-opacity-70 rounded-full transition-all duration-200 transform group-hover:bg-opacity-100 group-focus:bg-opacity-100" />
	</div>
</button>
