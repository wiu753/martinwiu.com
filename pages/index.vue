<template>
  <main>
    <p class="mb-6">
      Hello! My name is Martin Wiu. I'm a {{ age }}-year-old Norwegian web
      developer currently studying software engineering at the University of
      South-Eastern Norway.
    </p>
    <p class="mb-6">
      I'm a minimalist, lifelong learner, and dog lover. People around me describe me 
      as calm, understanding, structured, and open-minded. I love to read books,
      hang out with friends, and play golf in my free time. When reading, my
      favorite topics are psychology, philosophy and technology.
    </p>
    <p class="flex flex-col">
      <span>
        <a class="underline" href="mailto:wiu753@gmail.com">Email</a>,
        <a href="https://www.twitter.com/wiu753" class="underline">Twitter</a>,
        <a href="https://www.github.com/wiu753" class="underline">GitHub</a> and
        <a
          href="https://www.linkedin.com/in/martinwiu"
          class="underline"
          >LinkedIn</a
        >
      </span>
    </p>
  </main>
</template>

<script>
export default {
  computed: {
    age() {
      return this.$store.getters.age
    }
  }
}
</script>
