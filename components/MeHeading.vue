<template>
  <div class="flex pt-6 pl-8 md:px-32 md:pt-16 me-gradient text-white">
    <nuxt-link :to="{ name: 'index' }" class="flex items-center">
      <img class="w-12 h-12 rounded-full mr-4 lg:w-20 lg:h-20" src="@/assets/img/me.jpg" alt="Profile picture of Martin Wiulsrød">
      <h1 class="text-2xl font-medium placeholder md:text-3xl lg:pl-8">Martin Wiulsrød</h1>
    </nuxt-link>
  </div>
</template>
