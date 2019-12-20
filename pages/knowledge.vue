<template>
  <div class="px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
    <h1 class="text-3xl mb-4 font-semibold">Knowledge</h1>

    <h2 class="text-xl sm:text-2xl mb-4 text-gray-700">Education</h2>

    <div class="mb-2 lg:mb-3">
      <a href="https://www.usn.no/english/">
        <div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400">
          <div class="flex items-center">
            <div class="mr-2"><svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M948.6 367.7v162.1l34.1 34.1-71.1 74.1-72-71.9 49.3-44.9v-128C679.5 479.6 612.4 506.4 566 527.4s-79.9 20.8-125.9 3.5c-46-17.4-265.2-97.3-374.1-149.4-72.6-34.8-77.3-56.8 1.2-86.3 102.5-38.9 271.9-101.3 361.7-135.3 53.2-21.5 81.3-33.2 130.1-8.7 87.1 36 286.2 110.7 385.2 151.6 86.3 37.5 28.4 49.8 4.4 64.9zM576.1 591.6c50.6-20.9 118.9-55.4 193.3-87.3v256S673.2 862.7 504 862.7c-182.2 0-280.6-102.4-280.6-102.4v-239c57.4 23.4 121.9 43.5 200 70.3 48 17.1 109.1 23 152.7 0z"/></svg></div>
            <h3 class="text-lg xl:text-2xl">University of South-Eastern Norway</h3>
          </div>
          <p class="lg:text-lg mt-2 ml-2 text-gray-600">Bachelors degree in information systems. Thesis was about the role of knowledge management and artificial intelligence.</p>
          <div class="flex flex-row flex-wrap mt-4">
            <span v-for="(skill, index) in usnSkills" :key="index" class=" text-xs lg:text-sm bg-gray-100 text-gray-800 border border-gray-300 px-2 mr-1 mb-1 rounded-full">{{ skill }}</span>
          </div>
        </div>
      </a>
    </div>

    <div class="mb-2 lg:mb-3">
      <a href="https://www.credential.net/9a6b440d-caf7-4377-b1cc-1274ffcc2ce3">
        <div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400">
          <div class="flex items-center">
            <div class="mr-2"><svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"/></svg></div>
            <h3 class="text-lg xl:text-2xl">Treehouse</h3>
          </div>
          <p class="lg:text-lg mt-2 ml-2 text-gray-600">Front-end tech degree over the course of 6 months. Total of 12 real-world projects.</p>
          <div class="flex flex-row flex-wrap mt-4">
            <span v-for="(skill, index) in treehouseSkills" :key="index" class=" text-xs lg:text-sm bg-gray-100 text-gray-800 border border-gray-300 px-2 mr-1 mb-1 rounded-full">{{ skill }}</span>
          </div>
        </div>
      </a>
    </div>

    <h2 class="text-xl sm:text-2xl mb-4 mt-8 text-gray-700">Online Courses</h2>

    <div class="mb-2 lg:mb-3">
      <a href="https://www.udemy.com/course/advanced-javascript-concepts/">
        <div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400">
          <div class="flex items-center">
            <div class="mr-2"><svg class="w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg></div>
            <h3 class="text-lg xl:text-2xl">Advanced JavaScript Concepts</h3>
          </div>
          <div class="flex flex-row flex-wrap mt-4">
            <span v-for="(skill, index) in jsSkills" :key="index" class=" text-xs lg:text-sm bg-gray-100 text-gray-800 border border-gray-300 px-2 mr-1 mb-1 rounded-full">{{ skill }}</span>
          </div>
        </div>
      </a>
    </div>

    <div class="mb-2 lg:mb-3">
      <a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/">
        <div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400">
          <div class="flex items-center">
            <div class="mr-2"><svg class="w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z"/></svg></div>
            <h3 class="text-lg xl:text-2xl">The Complete Guide Vue 2</h3>
          </div>
          <div class="flex flex-row flex-wrap mt-4">
            <span v-for="(skill, index) in vueSkills" :key="index" class=" text-xs lg:text-sm bg-gray-100 text-gray-800 border border-gray-300 px-2 mr-1 mb-1 rounded-full">{{ skill }}</span>
          </div>
        </div>
      </a>
    </div>

    <div class="mb-2 lg:mb-3">
      <a href="https://www.vuemastery.com/courses">
        <div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:bg-gray-300 active:bg-gray-400">
          <div class="flex items-center">
            <div class="mr-2"><svg class="w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z"/></svg></div>
            <h3 class="text-lg xl:text-2xl">Vue Mastery</h3>
          </div>
          <div class="flex flex-row flex-wrap mt-4">
            <span v-for="(skill, index) in vuemasterySkills" :key="index" class=" text-xs lg:text-sm bg-gray-100 text-gray-800 border border-gray-300 px-2 mr-1 mb-1 rounded-full">{{ skill }}</span>
          </div>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  transition (to, from) {
    return 'slide-left'
  },
  data() {
    return {
      usnSkills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql', 'Java', 'C#', 'Git', 'OOP', 'UI/UX'],
      treehouseSkills: ['HTML', 'SASS', 'JavScript', 'Universal Design', 'API'],
      vueSkills: ['Vue.js', 'Vue Router', 'Vuex', 'Vue Test Utils'],
      vuemasterySkills: ['Real World Vue', 'Mastering Vuex', 'Next-Level Vue', 'Animating Vue', 'Scaling Vue with Nuxt', 'Advanced Components'],
      jsSkills: ['JavaSript Engine', 'Prototype', 'Inheritance', 'Async', 'Scope', 'OOP', 'Composition', 'Compiler', 'Garbage Collection']
    }
  }
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
