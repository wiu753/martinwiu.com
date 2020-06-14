<template>
  <main>
    <div v-for="post in blog" :key="post.slug" class="mb-10">
      <nuxt-link :to="'/blog/' + post.slug">
        <h1 class="text-2xl">{{ post.title }}</h1>
        <span class="text-sm text-gray-400"
          >{{ post.datePublished }} - {{ post.minutesToRead }} min read</span
        >
      </nuxt-link>
      <p class="mt-2">{{ post.description }}</p>
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
    </div>
  </main>
</template>

<script>
import blog from '@/blog'

export default {
  data() {
    return {
      index: 5
    }
  },

  computed: {
    blog() {
      const arr = []
      for (let i = this.index - 5; i < blog.length; i++) {
        if (i < this.index) {
          arr.push(blog[i])
        }
      }
      return arr
    },
    amountOfPosts() {
      return blog.length
    }
  },

  methods: {
    paginate(num) {
      this.index += num
    }
  }
}
</script>
