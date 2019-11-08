<template>
	<li>
		<div>
			<h3 class="pb-2">
				<a class="underline hover:text-gray-500" :href="link">{{ title }}</a>
			</h3>
			<slot></slot>
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
