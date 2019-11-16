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
  components: {
    MeProject
  }
}
</script>
