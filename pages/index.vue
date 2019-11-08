<template>
  <div class="-mt-4 md:-mt-16 xl:-mt-32 xxl:-mt-56 xxxl:-mt-64 px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
    <article>
      <h1 class="text-3xl mb-4 font-semibold">Who am I?</h1>
      <p class="md:text-xl">
				I'm Martin, a {{ age }}-year old Norwegian web developer.
				I have a bachelor's degree in information systems and a
				<a class="me-underline" href="https://www.credential.net/ur7cv6bc">front-end tech degree</a>
        from treehouse. Got introduced to coding {{ introducedToCoding }} years back but started
				actively {{ daysCoded }} days ago. Currently employed at
				<a class="me-underline" href="https://www.muniolms.com">Munio</a> as a web developer.
      </p>
			<p class="mt-4 md:text-xl">
				My favorite frameworks are <a href="https://vuejs.org/" class="me-underline">Vue</a> and <a href="https://tailwindcss.com/" class="me-underline">Tailwind</a>.
				I also have experience with HTML, CSS, JavaScript, PHP, Laravel, React, SASS and MySQL.
			</p>
    </article>
  </div>
</template>

<script>
export default {
	computed: {
		age () {
			const birthday = '06/21/1995'
			const today = new Date()
			const birthDate = new Date(birthday)
			const age = today.getFullYear() - birthDate.getFullYear()
			const m = today.getMonth() - birthDate.getMonth()

			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--
			}

			return age
		},
		daysCoded () {
			const startedCodingDate = '01/01/2019'
			const today = new Date()
			const startedCoding = new Date(startedCodingDate)
			const res = Math.abs(today - startedCoding) / 1000
			const days = Math.floor(res / 86400)
			return days
		},
		introducedToCoding () {
			const dateIntroducedToCoding = '01/06/2015'
			const today = new Date()
			const introducedToCoding = new Date(dateIntroducedToCoding)
			const yearsSinceIntroduced = today.getFullYear() - introducedToCoding.getFullYear()
			const m = today.getMonth() - introducedToCoding.getMonth()

			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				yearsSinceIntroduced--
			}

			return yearsSinceIntroduced
		}
	}
}
</script>
