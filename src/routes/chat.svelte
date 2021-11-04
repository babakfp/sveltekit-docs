<script>
	import { goto } from '$app/navigation'
	import { browser } from '$app/env';
	import { discordChat } from ':stores/global.js'
	if (browser) goto($discordChat)
</script>

<svelte:head>
	<title>Chat</title>
</svelte:head>

<h1 class="text-center font-bold mt-8">Redirecting...</h1>