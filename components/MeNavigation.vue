<template>
  <nav class="py-5 md:text-xl pl-8 xl:pl-32 bg-indigo-200">
		<nuxt-link class="mr-4 text-gray-600 font-medium hover:text-black" :to="{ name: 'index' }" exact>Home</nuxt-link>
		<nuxt-link class="text-gray-600 font-medium hover:text-black" :to="{ name: 'uses' }">Uses</nuxt-link>
  </nav>
</template>

<style scoped>
  a.nuxt-link-active {
    color: black;
  }
</style>
