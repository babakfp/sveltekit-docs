<script>
	import MMenuToggle from '$lib/header/MMenuToggle.svelte'
	import Logo from '$lib/header/Logo.svelte'
	import VersionNumber from '$lib/header/VersionNumber.svelte'
	import SocialIcon from '$lib/header/SocialIcon.svelte'
	import Menu from '$lib/header/Menu.svelte'

	import { discordChat, githubRepo } from '../../stores/global.js'
</script>

<header class="relative h-15 flex justify-between pl-2 pr-4 bg-dark-700 md:pl-4">
	<div class="flex">
		<MMenuToggle />
		<Logo />
	</div>
	<Menu />
	<div class="flex">
		<VersionNumber />

		<ul class="h-full flex">
			<SocialIcon icon="sk-lang" />
			<SocialIcon icon="sk-discord" href={$discordChat} />
			<SocialIcon icon="sk-github" href={$githubRepo} />
		</ul>
	</div>
</header>
