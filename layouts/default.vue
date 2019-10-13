<template>
  <div class="py-5 px-8 wrapper">
    <me-heading />
    <me-navigation />
    <nuxt class="page-body" />
    <me-footer />
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
  .wrapper {  /* Sticky footer */
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .page-body {
	  flex: 1;
  }
</style>
