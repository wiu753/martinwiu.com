<template>
	<div>
		<h2 class="text-xl mb-1 font-medium">
			<a class="hover:underline" :href="githubLink">{{ title }}</a>
		</h2>
		<p class="mb-4">
			<slot></slot>
		</p>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		githubLink: String,
	},
}
</script>
