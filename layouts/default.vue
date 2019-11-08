<template>
    <div class="wrapper">
      <div class="page-body">
        <me-heading />
        <me-navigation />
        <me-wave />
        <nuxt />
      </div>
      <me-footer />
    </div>
</template>

<script>
import MeHeading from '@/components/MeHeading'
import MeNavigation from '@/components/MeNavigation'
import MeFooter from '@/components/MeFooter'
import MeWave from '@/components/MeWave'

export default {
  components: {
    MeHeading,
    MeNavigation,
    MeFooter,
    MeWave
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
