<script>
	import IoIosColorFill from 'svelte-icons/io/IoIosColorFill.svelte';
	import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte';

	import '../app.css';
	import Socials from '$lib/Socials.svelte';
	import Button from '$lib/Button.svelte';

	let isDarkMode = true;

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
	}
</script>

<div class="drawer drawer-mobile max-lg:drawer-end" data-theme={isDarkMode ? 'night' : 'winter'}>
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<slot />
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden fixed top-4 right-4">
			<div class="w-8">
				<TiThMenu />
			</div>
		</label>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<div class="menu p-4 w-64 bg-base-100 text-base-content relative">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Contact</a></li>
			</ul>

			<div class="absolute bottom-0">
				<Socials />
				<Button onClickFunction={toggleDarkMode}>
					<IoIosColorFill slot="buttonIcon" />
				</Button>
			</div>
		</div>
	</div>
</div>
