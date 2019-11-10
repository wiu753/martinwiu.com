<template>
  <div class=" px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
    <article>
      <h1 class="text-3xl mb-4 font-semibold">Who am I?</h1>
			<p class="md:text-xl mb-4">My name is Martin Wiulsrød, I’m a {{ age }}-year old Norwegian web developer.
				I have a bachelor’s degree in information systems and a tech degree in front-end development.
			</p>
			<p class=" mb-4 md:text-xl">
				I aspire to make other peoples life easier. I love to teach and be taught.
				I’m a minimalist and a dog lover. The technology of my choice is Vue.js.
			</p>
			<p class="md:text-xl">If you want to know more send me an e-mail at <a class="me-underline" href="mailto: wiu753@gmail.com">wiu753@gmail.com</a>.</p>
    </article>
  </div>
</template>

<script>
export default {
	transition (to, from) {
		return 'slide-right'
  },
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
		monthsCoded () {
			const startedCodingDate = '01/01/2019'
			const today = new Date()
			const startedCoding = new Date(startedCodingDate)
			const miliseconds = today - startedCoding
			const milisecondsPerMonth = 2592000000
			const months = miliseconds/milisecondsPerMonth
			const monthsRounded = Math.floor(months)
			return monthsRounded
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
