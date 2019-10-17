<template>
  <div>
    <article>
      <h1 class="text-3xl mb-4 font-semibold">Who am I?</h1>
      <p class="md:text-xl">
				I'm Martin, a {{ age }}-year old Norwegian web developer.
				I have a bachelor's degree in information systems and a
				<a class="me-underline" href="https://www.credential.net/ur7cv6bc">front-end tech degree</a>
        from treehouse. Started coding {{ daysCoded }} days ago. Currently employed at
				<a class="me-underline" href="https://www.muniolms.com">Munio</a> as a web developer.
      </p>
			<p class="my-4 md:text-xl">
				My favorite frameworks are <a href="https://vuejs.org/" class="me-underline">Vue</a> and <a href="https://tailwindcss.com/" class="me-underline">Tailwind</a>.
				I also have experience with HTML, CSS, JavaScript, PHP, Laravel, React, SASS and MySQL.
			</p>
    </article>
  </div>
</template>

<script>
export default {
	data () {
		return {
			birthday: '06/21/1995',
			startedCoding: '01/01/2019'
		}
	},
	computed: {
		age () {
			const today = new Date()
			const birthDate = new Date(this.birthday)
			const age = today.getFullYear() - birthDate.getFullYear()
			const m = today.getMonth() - birthDate.getMonth()

			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--
			}

			return age
		},
		daysCoded () {
			const today = new Date()
			const startedCoding = new Date(this.startedCoding)
			const res = Math.abs(today - startedCoding) / 1000
			const days = Math.floor(res / 86400)
			return +days
		}
	}
}
</script>
