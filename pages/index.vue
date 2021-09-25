<template>
  <main>
    <p class="mb-6">
      Hello! My name is Martin Wiu. I'm a {{ age }}-year-old Norwegian web
      developer currently studying software engineering at the University of
      South-Eastern Norway.
    </p>
    <p class="mb-6">
      I'm a minimalist, lifelong learner, and dog lover. People usually describe
      me as a pretty calm, collected, and accepting guy. In my free time, I love
      to read books hang out with friends and play golf. Some of my favorite
      topics when reading is mental health, technology, and finance.
      Occasionally I
      <nuxt-link class="underline" to="/posts">write</nuxt-link> about the
      subjects that I find the most interesting.
    </p>
    <p>
      If you want to contact me you can send me an email at
      <a class="underline" href="mailto:wiu753@gmail.com">wiu753@gmail.com</a>.
      I'm also on
      <a href="https://www.twitter.com/wiu753" class="underline">Twitter</a>,
      <a href="https://www.github.com/wiu753" class="underline">GitHub</a>
      and
      <a
        href="https://www.linkedin.com/in/martin-wiulsr%C3%B8d-3a1412161/"
        class="underline"
        >LinkedIn</a
      >.
    </p>
  </main>
</template>

<script>
export default {
  transition(to, from) {
    return 'slide-right'
  },

  computed: {
    age() {
      return this.$store.getters.age
    },
  },
}
</script>
