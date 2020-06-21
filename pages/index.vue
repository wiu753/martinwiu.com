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
      <a
        class="underline"
        href="https://www.notion.so/Info-Tech-Overview-533cdb1e8fe74ea3bece9fd564bfbee6"
        rel="external"
        >here</a
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
