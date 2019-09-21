<template>
  <nav class="py-5">
		<nuxt-link class="mr-4 text-gray-600 font-medium hover:text-black" :to="{ name: 'index' }" exact>Home</nuxt-link>
		<nuxt-link class="mr-4 text-gray-600 font-medium hover:text-black" :to="{ name: 'projects' }">Projects</nuxt-link>
		<nuxt-link class="text-gray-600 font-medium hover:text-black" :to="{ name: 'uses' }">Uses</nuxt-link>
  </nav>
</template>

<style scoped>
  a.nuxt-link-active {
    color: black;
  }
</style>
