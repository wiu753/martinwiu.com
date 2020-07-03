<template>
  <div class="flex flex-col max-w-4xl min-h-screen mx-4 lg:mx-auto sm:mx-16">
    <Navbar class="border-b sm:border-b-0 sm:shadow sm:shadow-none" />
    <nuxt class="flex-1 mt-12" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$store.getters.moo)
  }
}
</script>

<style scoped>
/* Warning, this is not scoped */
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
