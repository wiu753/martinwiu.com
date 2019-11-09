<template>
	<a class="hover:bg-orange-500" :href="link">
		<me-card>
			<div class="flex items-center">
				<img class="w-8 mr-4" :src="icon" alt="">
				<p>{{ title }}</p>
			</div>
		</me-card>
	</a>
</template>

<script>
import MeCard from '@/components/MeCard'

export default {
	components: {
		MeCard
	},
	props: {
		title: String,
		link: String,
		icon: String
	}
}
</script>

<style scoped>

</style>
