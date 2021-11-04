<script>
	export let title
	export let icon
	export let href
</script>

<li>
	<a
		class="py-2 px-5 flex gap-3 items-center font-semibold text-sm text-white-70 transition-all duration-200 ease-in-out hover:text-white focus:text-white lg:px-6"
		{href}
		target="_blank"
	>
		<img class="w-7 h-7" src="/svg/prim/{icon}.svg" alt />
		<span>{title}</span>
	</a>
</li>
