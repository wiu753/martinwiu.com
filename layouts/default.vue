<template>
  <div
    class="flex flex-col max-w-3xl min-h-screen mx-4 sm:mx-16 lg:text-2xl md:text-xl"
  >
    <Navbar class="border-b sm:border-b-0 sm:shadow sm:shadow-none" />
    <nuxt class="flex-1 mt-12" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
