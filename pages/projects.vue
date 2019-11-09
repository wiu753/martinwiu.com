<template>
	<div class="-mt-4 md:-mt-16 xl:-mt-32 xxl:-mt-56 xxxl:-mt-64 px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
			<h1 class="text-3xl mb-4 font-semibold">Projects</h1>
      <h2 class="text-xl mb-4 font-semibold sm:text-2xl text-gray-700">Bigger</h2>
      <!-- <p class="md:text-xl pb-2">Such empty, much wow.</p> -->
			<ul v-for="(project, index) in bigProjcets" :key="'big' + index" class="list-disc ml-5 md:text-xl">
				<me-project :title="project.title" :link="project.link" :description="project.description" :projectSize="project.size" />
			</ul>
      <h2 class="text-xl mb-4 mt-4 font-semibold sm:text-2xl text-gray-700">Smaller</h2>
			<ul v-for="(project, index) in smallProjects" :key="'small' +index" class="list-disc ml-5 md:text-xl">
				<me-project :title="project.title" :link="project.link" :description="project.description" />
			</ul>
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
