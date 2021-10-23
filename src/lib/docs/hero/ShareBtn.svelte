<script>
	import Btn from './Btn.svelte'
</script>

<div class="share-btn relative">
	<Btn icon="sk-share-alt" />
	<ul>
		<li>
			<a
				class="flex items-center justify-center transition-all duration-200 ease-in"
				href="/"
				target="_blank"><i class="bx bxl-twitter" /></a
			>
		</li>
		<li>
			<a
				class="flex items-center justify-center transition-all duration-200 ease-in"
				href="/"
				target="_blank"><i class="fab fa-facebook-f" /></a
			>
		</li>
		<li>
			<a
				class="flex items-center justify-center transition-all duration-200 ease-in"
				href="/"
				target="_blank"><i class="fab fa-linkedin-in" /></a
			>
		</li>
		<li>
			<a
				class="flex items-center justify-center transition-all duration-200 ease-in"
				href="/"
				target="_blank"><i class="fab fa-reddit-alien" /></a
			>
		</li>
	</ul>
</div>

<style>
	.share-btn {
		border-radius: 7px;
	}
	.share-btn:hover ul {
		opacity: 1;
		visibility: visible;
		transform: translateY(calc(100% - 34px));
	}
	.share-btn > ul {
		list-style: none;
		padding: 0;
		bottom: 0;
		position: absolute;
		transform: translateY(calc(100% - 15px));
		background: #1e2023;
		border-radius: 10px;
		opacity: 0;
		visibility: hidden;
		transition: all 0.25s ease;
	}
	.share-btn ul li a:hover {
		opacity: 1;
	}
	.share-btn ul li a {
		display: flex;
		padding: 0.5rem;
		opacity: 0.7;
	}
</style>
