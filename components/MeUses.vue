<template>
	<div class="mb-2 md:text-xl lg:mb-3">
		<a :href="link">
			<div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400 flex items-center">
				<slot name="icon"></slot>
				<slot name="title"></slot>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		link: { type: String, required: true }
	}
}
</script>
