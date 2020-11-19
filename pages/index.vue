<template>
  <main>
    <p class="mb-6">
      Hey there! My name is Martin Wiu, I'm a {{ age }} year old Norwegian web
      developer studying software engineering. I have a passion for teaching,
      and hope to become lecturer when I get older. For now I want to focus my
      energy towards making the world and the web a better place.
    </p>
    <p class="mb-6">
      I'm a minimalist, dog lover and life long learner. I'm fascinated by a lot
      of things, and I love to read. My favorite topics are mathematics,
      physics, biology, finance, psychology and technology.
    </p>
    <p>
      I also enjoy writing
      <nuxt-link class="underline" to="/posts">posts</nuxt-link> about topics
      that interest me. If you want to contact me you can send me an email at
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
    }
  }
}
</script>
