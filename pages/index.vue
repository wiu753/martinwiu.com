<template>
  <main>
    <p class="mb-6">
      Hello! My name is Martin Wiu. I'm a {{ age }}-year-old Norwegian software engineer with Bachelor of Science
      degrees in Information Systems and IT Leadership as well as Computer Engineering. I am currently working
      as a software engineer at Kongsberg Norcontrol.
    </p>
    <p class="mb-6">
      I'm a lifelong learner and minimalist. I love to read books, play games
      with friends, and play golf. When reading, my favorite topics besides tech
      are psychology and philosophy.
    </p>
    <p class="flex flex-col">
      <span>
        <a class="underline" href="mailto:wiu753@gmail.com">Email</a>,
        <a href="https://www.twitter.com/wiu753" class="underline">Twitter</a>,
        <a href="https://www.github.com/wiu753" class="underline">GitHub</a> and
        <a href="https://www.linkedin.com/in/martinwiu" class="underline">LinkedIn</a>
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
