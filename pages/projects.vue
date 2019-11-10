<template>
	<div class="px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
			<h1 class="text-3xl mb-4 font-semibold">Projects</h1>

      <me-project class="mb-4 md:text-xl lg:mb-5" link="https://github.com/wiu753/martinwiulsrod.me" :badges="['Nuxt.js', 'Tailwindcss']">
        <template v-slot:title>This website</template>

        <template v-slot:description>
          My website where you can read a little about me and what I do. Also used for testing out new technologies and other fun stuff.
        </template>
      </me-project>

      <div class="bg-white border border-gray-300 rounded-lg p-2 text-gray-700 md:p-4">
        <h1 class="text-xl mb-2 text-black">Small projects</h1>
        <ul>
          <li v-for="(project, index) in smallProjects" :key="index" class="py-1 md:text-xl">
            <!-- <span class="text-gray-500">-</span> -->
            <a :href="project.link" class="underline me-transition hover:text-black">{{ project.title }}</a>
          </li>
        </ul>
      </div>

	</div>
</template>

<script>
import MeProject from '@/components/MeProject'

export default {
  components: {
    MeProject
  },
  data () {
    return {
      bigProjcets: [
        { title: 'This website', description: 'Built with Nuxt and Tailwind', link: 'https://github.com/wiu753/martinwiulsrod.me' }
      ],
      smallProjects: [
        { title: 'Responsive web dashboard', description: '', link: 'https://wiu753.github.io/web-dashboard/' },
        { title: 'Guess the phrase game', description: '', link: 'https://wiu753.github.io/phrase-guesser/' },
        { title: 'Random quote generator', description: '', link: 'https://wiu753.github.io/random-quote-generator/' },
        { title: 'Employee directory', description: '', link: 'https://wiu753.github.io/employee-directory/' },
        { title: 'Photo gallery', description: '', link: 'https://wiu753.github.io/photo-gallery/' },
        { title: 'Registration form', description: '', link: 'https://wiu753.github.io/registration-form/' },
        { title: 'Portfolio', description: '', link: 'https://wiu753.github.io/responsive-portfolio/' },
      ]
    }
  }
}
</script>
