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
