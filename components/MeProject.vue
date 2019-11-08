<template>
	<li>
		<div>
			<h3 class="pb-2">
				<a class="underline hover:text-gray-500" :href="link">{{ title }}</a>
        <p v-if="description" class="text-gray-500" >{{ ' - ' + description }}</p>
			</h3>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		title: String,
    description: String,
    link: String
	}
}
</script>
