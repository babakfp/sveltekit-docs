<script>
	export let title
	export let href
</script>

<li>
	<a
		class="py-1.5 px-5 flex gap-3 items-center text-white-70 transition-all duration-200 ease-in hover:text-white focus:text-white lg:px-2"
		{href}
	>
		<img src="/svg/menu/{title.toLowerCase()}.svg" alt={title} />
		<span>{title}</span>
	</a>
</li>
