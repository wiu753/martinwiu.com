<template>
    <div class="py-6 px-8 wrapper md:max-w-3xl md:px-32 md:py-16 xl:max-w-5xl">
      <me-heading />
      <me-navigation class="xl:pl-32" />
      <nuxt class="page-body xl:pl-32" />
      <me-footer class="xl:pl-32" />
    </div>
</template>

<script>
import MeHeading from '@/components/MeHeading'
import MeNavigation from '@/components/MeNavigation'
import MeFooter from '@/components/MeFooter'

export default {
  components: {
    MeHeading,
    MeNavigation,
    MeFooter
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.page-body {
  flex: 1;
}
</style>
