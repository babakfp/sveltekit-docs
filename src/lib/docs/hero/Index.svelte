<script>
	export let title
	export let slug
	export let file
	import Btn from './Btn.svelte'
	// import ShareBtn from './ShareBtn.svelte'

	import { repoUrl } from ':stores/docs.js'
	const editChapterUrl = $repoUrl + '/' + file
</script>

<div id={slug} class="mt-15 first:mt-0">
	<div class="bg-darker">
		<div class="px-8 bg-darkest lg:px-14">
			<div
				class="container h-32 flex gap-12 items-center justify-between md:h-40"
			>
				<a href="/docs/#{slug}">
					<h1 class="text-2xl capitalize font-bold text-opacity-90 md:text-3xl"
						>{title}</h1
					>
				</a>

				<ul class="flex items-center gap-2">
					<!-- <ShareBtn /> -->
					<!-- <hr class="h-4 border-0 border-r-2 border-dark" /> -->
					<Btn icon="sk-edit-alt" href={editChapterUrl} title="Edit this chapter" />
				</ul>
			</div>
		</div>
	</div>
</div>
