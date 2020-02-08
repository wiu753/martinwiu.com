<template>
    <div @click="$emit('expand', title)" class="mb-2 lg:mb-3 cursor-pointer">
        <div class="rounded-lg bg-white p-2 border border-gray-300 md:p-4 lg:p-6 me-transition hover:shadow-lg">
            <div class="flex flex-row items-center">
                <svg class="w-8 lg:w-12 mr-2 lg:mr-6" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox"><path v-if="optionalPathOne" :d="optionalPathOne"/><path v-if="optionalPathTwo" :d="optionalPathTwo"/><path :d="path"/></svg>
                <h3 class="text-lg xl:text-2xl text-center md:ml-2">{{ title }}</h3>
            </div>
            <div v-if="expand" class="ml-12 lg:ml-20">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        viewBox: { type: String, default: "0 0 24 24" },
        optionalPathOne: { type: String },
        optionalPathTwo: { type: String },
        path: { type: String, required: true },
        title: { type: String, required: true },
        expandedCard: { type: String, required: true },
        description: { type: String }
    },

    computed: {
      expand() {
          return this.expandedCard === this.title;
      }
    }
}
</script>
