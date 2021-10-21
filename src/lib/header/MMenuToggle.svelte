<script>
	import { isMobileMenuOpen, toggleMobileMenu } from '../../stores/header.js'
</script>

<button class="group px-4 md:hidden" on:click={toggleMobileMenu}>
	<div class="w-6 grid {!$isMobileMenuOpen && 'gap-1.5'} transition-all duration-200">
		<div class="h-0.5 {$isMobileMenuOpen && '-mb-px rotate-45'} bg-white bg-opacity-70 rounded-full transition-all duration-200 transform group-hover:bg-opacity-100 group-focus:bg-opacity-100" />
		<div class="h-0.5 {$isMobileMenuOpen && '-mt-px -rotate-45'} bg-white bg-opacity-70 rounded-full transition-all duration-200 transform group-hover:bg-opacity-100 group-focus:bg-opacity-100" />
	</div>
</button>
