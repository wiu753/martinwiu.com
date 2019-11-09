<template>
  <div class="bg-white rounded-lg p-2 border border-gray-300 md:p-4">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    linkg: String
  }
}
</script>
