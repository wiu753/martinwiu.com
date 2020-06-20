<template>
  <div>
    <header>
      <h1><slot name="title"></slot></h1>
      <span class="mt-0 text-sm text-gray-400">
        <slot name="info"></slot>
      </span>
    </header>
    <main>
      <slot name="body"></slot>
    </main>
  </div>
</template>

<style scoped>
h1 {
  @apply text-2xl;
}
p {
  @apply mt-6;
}
</style>
