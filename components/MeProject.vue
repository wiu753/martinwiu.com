<template>
	<div class="mb-2 md:text-xl lg:mb-3">
		<a :href="link">
			<div class="rounded-lg bg-white border border-gray-300 p-2 me-transition hover:bg-gray-300 active:bg-gray-400 md:p-4">
				<h1 class="text-xl mb-2"><slot name="title"></slot></h1>
				<p class="text-gray-700"><slot name="description"></slot></p>
				<div class="flex text-sm flex-wrap mt-3">
					<span v-for="(badge, index) in badges" :key="index"  class=" bg-gray-200 border border-gray-300 rounded-full px-2 mr-1 mt-1">
						{{ badge }}
					</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		link: { type: String, required: true },
		badges: { type: Array, required: true }
	}
}
</script>
