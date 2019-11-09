<template>
	<a class="hover:bg-orange-500" :href="link">
		<div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400 flex items-center">
			<img class="w-8 mr-4 lg:w-12 lg:mr-6" :src="icon" alt="">
			<p class="">{{ title }}</p>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		title: String,
		link: String,
		icon: String
	}
}
</script>

<style scoped>

</style>
