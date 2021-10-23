<script>
	export let title
	export let href
</script>

<li>
	<a
		class="py-1.5 px-5 flex gap-3 items-center text-gray-200 text-opacity-70 transition-all duration-200 ease-in hover:text-opacity-100 focus:text-opacity-100 lg:px-2"
		{href}
	>
		<img src="/svg/menu/{title.toLowerCase()}.svg" alt={title} />
		<span>{title}</span>
	</a>
</li>
