<template>
  <nav class="max-w-4xl px-4 shadow sm:px-0 sm:shadow-none sm:mx-16 lg:mx-auto">
    <div class="sm:mt-8 lg:mt-24">
      <div class="flex items-center justify-between sm:justify-start">
        <!-- Profile image. -->
        <img
          class="block w-auto h-10 rounded-full sm:h-24 lg:h-32"
          src="/martinwiu.jpeg"
          alt="Picture of Martin Wiu"
        />

        <div class="flex sm:ml-8 sm:text-3xl">Martin Wiu</div>

        <!-- Mobile menu button. -->
        <div class="flex items-center py-4 sm:hidden">
          <button
            class="inline-flex items-center justify-center text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500"
            aria-label="Main menu"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <!-- Icon when menu is closed. -->
            <svg
              v-show="!mobileMenu"
              class="block w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <svg
              v-show="mobileMenu"
              class="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop menu. -->
    <div class="justify-between hidden sm:mt-8 sm:flex lg:mt-24 sm:border-b">
      <!-- Pages. -->
      <div class="text-xl desktop">
        <nuxt-link
          to="/"
          class="border-b-2 border-transparent desktop hover:text-gray-500 focus:text-gray-500 focus:border-gray-300"
          exact
        >
          About</nuxt-link
        >
        <nuxt-link
          to="/blog"
          class="ml-4 border-b-2 border-transparent desktop hover:text-gray-500 focus:text-gray-500 focus:border-gray-300"
        >
          Blog
        </nuxt-link>
      </div>
    </div>

    <!-- Mobile menu. -->
    <div :class="mobileMenu ? 'block' : 'hidden'" class="sm:hidden">
      <div class="pt-2 pb-3">
        <nuxt-link
          to="/"
          class="block py-2 pl-3 pr-4 text-base text-gray-600 border-l-4 border-transparent mobile hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          exact
        >
          About
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="block py-2 pl-3 pr-4 text-base text-gray-600 border-l-4 border-transparent mobile hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
        >
          Blog
        </nuxt-link>
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
