<template>
	<div class="px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
        <h1 class="text-3xl mb-2 font-semibold">Projects</h1>
        <p class="mb-6 lg:text-lg">Here is a collection of the bigger projects that I have created. You can
        find all my other stuff on my <a class="me-underline" href="https://github.com/wiu753">GitHub</a> page.</p>

        <me-project link="https://www.typingmonster.com/" :badges="['Vue.js', 'Tailwindcss', 'Laravel', 'MySql']" underDevelopment>
        <template v-slot:title>
          Typing Monster
        </template>
        <template v-slot:description>
          Full-stack website for doing typing tests.
        </template>
      </me-project>

      <me-project link="https://github.com/wiu753/martinwiulsrod.me" :badges="['Nuxt.js', 'Tailwindcss']">
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
    if (!from) return

		if (from.path === '/' || from.path === '/uses') {
			return 'slide-left'
		}

		if (from.path === '/knowledge') {
			return 'slide-right'
		}
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
