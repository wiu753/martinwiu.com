<template>
	<article>
		<h1 class="text-3xl mb-4 font-semibold">Projects</h1>
		<p class="mb-4">
			I haven't worked on any big projects yet, only small ones that helped me
			learn. I'll link to some of them below.
		</p>
		<MeProject class="mb-6" title="This Website" githubLink="https://github.com/wiu753/martinwiulsrod.me">
			This website is my latest project. I used a Vue.js
			framework called <a class="me-underline" href="https://nuxtjs.org/">nuxt</a>.
		</MeProject>
		<MeProject class="mb-6" title="Web Dashboard" githubLink="https://github.com/wiu753/web-dashboard">
			The very last project of my tech degree was to create
			a web dashboard from a given mockup. I used it to learn
			how to use CSS grid and flexbox together.
		</MeProject>
		<MeProject class="mb-6" title="Phrase Guesser" githubLink="https://github.com/wiu753/phrase-guesser">
			This project is my first game. You have to guess
			the phrase, if you guess the wrong letter you lose a life.
		</MeProject>
		<MeProject class="mb-6" title="Random Quote Generator" githubLink="https://github.com/wiu753/random-quote-generator">
			One of my first projects when I got in to coding was this one.
			It randomly displays some funny programming related quotes.
		</MeProject>
	</article>
</template>

<script>
import MeProject from '@/components/MeProject'
export default {
	components: {
		MeProject,
	},
}
</script>
