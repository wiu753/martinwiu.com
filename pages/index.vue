<template>
  <main>
    <p class="mb-6">
      Hello! My name is Martin Wiu. I'm a {{ age }}-year-old Norwegian web
      developer currently studying software engineering at the University of
      South-Eastern Norway.
    </p>
    <p class="mb-6">
      I'm a minimalist, lifelong learner, and dog lover. People usually describe
      me as a pretty calm, collected, and accepting guy. I love to read books,
      hang out with friends, and play golf in my free time. When reading, my
      favorite topics are mental health, psychology, and technology.
    </p>
    <p class="flex flex-col">
      <span>
        <a
          class="underline"
          href="https://wiu.notion.site/54f303fec6344fdf945bdf7dcb510add?v=f34189ff94f340d69640a3869f0123f5"
          >Projects</a
        >
        and
        <a
          class="underline"
          href="https://wiu.notion.site/5e0b9db08c7f4ef69deffb8114db309e"
          >book reports</a
        >.
      </span>
      <span>
        <a class="underline" href="mailto:wiu753@gmail.com">Email</a>,
        <a href="https://www.twitter.com/wiu753" class="underline">Twitter</a>,
        <a href="https://www.github.com/wiu753" class="underline">GitHub</a> and
        <a
          href="https://www.linkedin.com/in/martin-wiulsr%C3%B8d-3a1412161/"
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
