<template>
  <main>
    <p class="mb-6">
      Hello! My name is Martin Wiu. I'm a {{ age }}-year-old Norwegian web
      developer currently studying computer engineering with a specialty in
      cybersecurity at the University of South-Eastern Norway. I have two years
      of experience as a web developer using JavaScript, TypeScript, and Vue.js.
    </p>
    <p class="mb-6">
      I'm a lifelong learner and minimalist. People around me describe me as
      curious, calm, understanding, and open-minded. I love to read books, spend
      time with my lovely girlfriend, make new friends, and play golf. When
      reading, my favorite topics are psychology, philosophy and technology.
    </p>
    <p class="mb-6">
      My current favorite books are "<a
        href="https://www.amazon.co.uk/Will-Change-Men-Masculinity-Love-ebook/dp/B00BORC1R8/"
        class="underline"
        >The Will to Change: Men, Masculinity, and Love"
      </a>
      by bell hooks and "<a
        href="https://www.amazon.com/Happiness-Hypothesis-Finding-Modern-Ancient/dp/0465028020"
        class="underline"
        >The Happiness Hypothesis: Finding Modern Truth in Ancient Wisdom"
      </a>
      by Jonathan Haidt.
    </p>
    <p class="flex flex-col">
      <span>
        <a class="underline" href="mailto:wiu753@gmail.com">Email</a>,
        <a href="https://www.twitter.com/wiu753" class="underline">Twitter</a>,
        <a href="https://www.github.com/wiu753" class="underline">GitHub</a> and
        <a href="https://www.linkedin.com/in/martinwiu" class="underline"
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
