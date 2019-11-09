<template>
  <nav class="py-5 md:text-xl pl-8 bg-indigo-200 md:px-32 xl:pl-64 me-gradient text-gray-500">
		<nuxt-link class="mr-4 font-medium hover:text-white" :to="{ name: 'index' }" exact>Home</nuxt-link>
		<nuxt-link class="mr-4 font-medium hover:text-white" :to="{ name: 'uses' }">Uses</nuxt-link>
		<nuxt-link class="font-medium hover:text-white" :to="{ name: 'projects' }">Projects</nuxt-link>
  </nav>
</template>

<style scoped>
  a.nuxt-link-active {
    color: white;
  }
</style>
