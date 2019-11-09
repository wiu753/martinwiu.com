<template>
	<li>
		<div>
			<h3 class="pb-2">
				<a class="underline" :href="link">{{ title }}</a>
			</h3>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		title: String,
		link: String
	}
}
</script>

<style scoped>
	a:hover {
		color: rgba(33,141,150,1);
	}
</style>
