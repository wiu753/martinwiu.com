<template>
  <div>
    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Personal</h2>
      <ul>
        <li>
          <a class="hover:underline" href="mailto:wiu753@gmail.com"
            >wiu753@gmail.com</a
          >
        </li>
        <li>Martin Wiulsrød</li>
        <li>{{ age }}</li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Links</h2>
      <ul>
        <li>
          <a href="https://www.twitter.com/wiu753" class="hover:underline"
            >Twitter</a
          >
        </li>
        <li>
          <a href="https://www.github.com/wiu753" class="hover:underline"
            >GitHub</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/martin-wiulsr%C3%B8d-3a1412161/"
            class="hover:underline"
            >LinkedIn</a
          >
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Education</h2>
      <ul>
        <li>Bachelors degree in Computer Science (current)</li>

        <li>
          Bachelors degree in Information Systems and IT-management
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Work</h2>
      <ul>
        <li>
          Web developer at Munio AS
        </li>
        <li>
          Logistics staff at Sensonor AS
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Certifications</h2>
      <ul>
        <li>
          <a href="https://www.credential.net/ur7cv6bc" class="hover:underline"
            >Frontend tech Degree at Treehouse</a
          >
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/wiu753/javascript-algorithms-and-data-structures"
            class="hover:underline"
            >JavaScript Algorithms and Data Structures</a
          >
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Languages and Frameworks</h2>
      <div class="flex mb-4">
        <ul class="mr-14">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul class="mr-14">
          <li>Vue</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        <ul class="mr-14">
          <li>PHP</li>
          <li>Laravel</li>
          <li>MySQL</li>
        </ul>
        <ul class="mr-14">
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
        <ul>
          <li>Nuxt</li>
        </ul>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Software and Hardware</h2>
      <div class="flex">
        <ul class="mr-14">
          <li>VS Code</li>
          <li>iTerm2</li>
          <li>Chrome</li>
          <li>GitKraken</li>
          <li>Figma</li>
        </ul>
        <ul>
          <li>MacBook Pro 15</li>
          <li>Samsung 34" Curved</li>
          <li>Apple Magic 2</li>
          <li>Razer Mamba</li>
          <li>AirPods Pro</li>
          <li>IKEA Bekant</li>
        </ul>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Programming Books</h2>
      <ul>
        <li>Clean Code</li>
        <li>The Pragmatic Programmer</li>
        <li>Refactoring UI</li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold">Conferences</h2>
      <ul>
        <li>Vueconf Austin Texas</li>
        <li>Laracon New York</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    age() {
      return this.$store.getters.age
    }
  }
}
</script>
