<template>
	<li class="mb-4 sm:mb-8">
		<div>
			<h3 class="mb-2">
				<a class="underline hover:underline" :href="link">{{ title }}</a>
			</h3>
			<slot></slot>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		title: String,
		link: String,
	},
}
</script>
