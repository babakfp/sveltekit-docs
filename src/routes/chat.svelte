<script>
	import { goto } from '$app/navigation'
	import { browser } from '$app/env';
	import { discordChat } from ':store/global.js'
	if (browser) goto($discordChat)
</script>

<h1 class="text-center font-bold mt-8">Redirecting...</h1>