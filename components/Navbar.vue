<template>
  <nav>
    <div class="sm:mt-8 lg:mt-24">
      <div class="flex items-center mt-2 mb-2 sm:justify-start">
        <!-- Profile image. -->
        <img
          class="block w-auto h-10 rounded-full sm:h-24 lg:h-32"
          src="/martinwiu.jpeg"
          alt="Picture of Martin Wiu"
        />
        <div class="flex ml-4 sm:ml-8 sm:text-3xl">
          Martin Wiu
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  computed: {
    mobileMenu() {
      return this.$store.state.ui.mobileMenu
    }
  },

  methods: {
    toggleMobileMenu() {
      this.$store.dispatch('ui/toggleMobileMenu')
    }
  }
}
</script>

<style scoped>
a.mobile.nuxt-link-active {
  @apply border-black;
  @apply text-gray-900;
  @apply bg-gray-100;
}

a.mobile.nuxt-link-active:focus,
a.mobile.nuxt-link-active:hover {
  @apply bg-gray-200;
  @apply border-black;
}

a.desktop.nuxt-link-active {
  @apply border-black;
  @apply text-black;
}

a.desktop.nuxt-link-active:focus,
a.desktop.nuxt-link-active:hover {
  @apply border-black;
}

.desktop {
  margin-bottom: -2px;
}
</style>
