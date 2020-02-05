<template>
  <div class=" px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
    <article>
      <h1 class="text-3xl mb-4 font-semibold">Who am I?</h1>
			<p class="md:text-xl mb-4">My name is Martin Wiulsrød, I’m a {{ age }}-year old Norwegian web developer.
				I have a bachelor’s degree in information systems and a tech degree in front end web development.
			</p>
			<p class=" mb-4 md:text-xl">
				I aspire to make other peoples life easier. I love to teach and be taught.
				I’m a minimalist and a dog lover. My favorite frameworks are Vue.js, Tailwindcss and Laravel.
			</p>
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
			let age = today.getFullYear() - birthDate.getFullYear()
			const m = today.getMonth() - birthDate.getMonth()

			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--
			}

			return age
		}
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
