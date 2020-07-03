<template>
  <main>
    <p class="mb-6">
      Hey there! My name is Martin Wiu, I'm a {{ age }} year old Norwegian web
      developer studying software engineering. I'm a minimalist, dog lover and
      life long learner. I like to read books about finance, productivity and
      self-improvement.
    </p>
    <p class="mt">
      I write posts about different technologies, web development, software
      engineering and productivity. If you want to know some more details about
      me I have a document that I frequently update
      <a class="underline" href="/me">here</a>.
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
