<template>
	<div class="px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
			<h1 class="text-3xl mb-4 font-semibold">Projects</h1>
      <me-project class="mb-4 md:text-xl lg:mb-5" link="https://github.com/wiu753/martinwiulsrod.me" :badges="['Nuxt.js', 'Tailwindcss']">
        <template v-slot:title>This website</template>
        <template v-slot:description>
          Read about me and what I do. Used for testing new technologies.
        </template>
      </me-project>
	</div>
</template>

<script>
import MeProject from '@/components/MeProject'

export default {
  transition (to, from) {
    return 'slide-left'
	},
  components: {
    MeProject
  }
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
