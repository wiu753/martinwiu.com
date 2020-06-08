<template>
  <div class="max-w-4xl px-4 mt-12 sm:px-0 sm:mx-16 lg:mx-auto">
    <header>
      <h1><slot name="title"></slot></h1>
      <span class="text-sm text-gray-400">
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
