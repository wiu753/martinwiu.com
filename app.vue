<script setup lang="ts">
const dateString = '1995/06/21'
const today = new Date()
const birthDate = new Date(dateString)
let age = today.getFullYear() - birthDate.getFullYear()
const m = today.getMonth() - birthDate.getMonth()
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="flex flex-col max-w-3xl min-h-screen mx-4 sm:mx-16 lg:text-2xl md:text-xl">
    <Navbar class="border-b sm:border-b-0 sm:shadow sm:shadow-none" />
    <div class="flex-1 mt-12">
      <main>
        <p class="mb-6">
          Hello! My name is Martin Wiu. I'm a {{ age }}-year-old Norwegian software engineer with two Bachelor of Science degrees: one in Information Systems and IT Leadership, and the other in Computer Engineering. I am currently working
          as a software engineer in Kongsberg Gruppen.
        </p>
        <p class="mb-6">
          I'm a lifelong learner and minimalist. I love to read books and play golf. When reading, my favorite topics besides tech
          are psychology and philosophy.
        </p>
        <p class="flex flex-col">
          <span>
            <a class="underline" href="mailto:martinwiu@proton.me">Email</a>,
            <a href="https://www.github.com/wiu753" class="underline">GitHub</a> and
          </span>
        </p>
      </main>
    </div>
  </div>
</template>
