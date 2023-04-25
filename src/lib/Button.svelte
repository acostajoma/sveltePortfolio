<script>
	export let onClickFunction = () => {};
</script>

<button on:click={onClickFunction} class="btn btn-ghost flex h-10 border-none mb-8 w-full">
	{#if $$slots.buttonIcon}
		<div class="w-8">
			<slot name="buttonIcon" />
		</div>
	{/if}
	<p>Change Page Color</p>
</button>
