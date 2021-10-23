<script>
	export let title
	export let slug
	export let file
	import Btn from './Btn.svelte'
	// import ShareBtn from './ShareBtn.svelte'

	import {
		owner,
		project,
		path,
		dir,
		edit_title,
	} from '../../../stores/docs.js'
	const githubEditUrl = `https://github.com/${$owner}/${$project}/edit/master${$path}/${$dir}/${file}`
</script>

<div id={slug} class="mt-15 first:mt-0">
	<div class="bg-dark-850">
		<div class=" bg-dark-900 rounded-bl-3xl lg:px-14 lg:rounded-3xl">
			<div
				class="container h-28 flex gap-12 items-center justify-between lg:h-40"
			>
				<a href="/docs/#{slug}">
					<h1 class="text-2xl capitalize font-bold text-opacity-90 lg:text-3xl"
						>{title}</h1
					>
				</a>

				<ul class="flex items-center gap-2">
					<!-- <ShareBtn /> -->
					<!-- <hr class="h-4 border-0 border-r-2 border-dark-700" /> -->
					<Btn icon="sk-edit-alt" href={githubEditUrl} />
				</ul>
			</div>
		</div>
	</div>
</div>
