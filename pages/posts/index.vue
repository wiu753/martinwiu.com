<template>
  <main>
    <p>In the works.</p>
    <!-- <div v-for="post in posts" :key="post.slug" class="mb-10">
      <nuxt-link
        class="block text-2xl focus:text-gray-500 hover:text-gray-500"
        :to="'/posts/' + post.slug"
      >
        <h1 class="">{{ post.title }}</h1>
      </nuxt-link>
      <span class="text-sm text-gray-400">
        {{ post.datePublished }} - {{ post.minutesToRead }} min read
      </span>
      <p class="mt-3">{{ post.description }}</p>
    </div>

    <div class="flex justify-between text-2xl">
      <button
        class="p-4 mr-4 border-transparent start hover:text-gray-500 focus:text-gray-500 focus:border-gray-300"
        :class="index === 5 ? 'invisible' : ''"
        @click="paginate(-5)"
      >
        &lt;
      </button>

      <button
        class="p-4 border-transparent hover:text-gray-500 focus:text-gray-500 focus:border-gray-300"
        :class="index >= amountOfPosts ? 'invisible' : ''"
        @click="paginate(5)"
      >
        &gt;
      </button>
    </div>  -->
  </main>
</template>

<script>
import posts from '@/posts'

export default {
  transition(to, from) {
    if (!from) return

    if (from.path === '/') {
      return 'slide-left'
    }

    return 'slide-right'
  },

  data() {
    return {
      index: 5
    }
  },

  computed: {
    posts() {
      const arr = []
      for (let i = this.index - 5; i < posts.length; i++) {
        if (i < this.index) {
          arr.push(posts[i])
        }
      }
      return arr
    },
    amountOfPosts() {
      return posts.length
    }
  },

  methods: {
    paginate(num) {
      this.index += num
    }
  }
}
</script>
