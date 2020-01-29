<template>
    <div class="mb-2 md:text-xl lg:mb-3">
        <a :href="link">
            <div
                    class="rounded-lg p-2 me-transition md:p-4"
                    :class="!underDevelopment ? projectCard : projectCardDev"
            >
                <h1 class="text-xl xl:text-2xl mb-2">
                    <slot name="title"></slot>
                </h1>
                <p class="description" :class="!underDevelopment ? description : descriptionDev">
                    <slot name="description"></slot>
                </p>
                <div class="flex text-sm flex-wrap mt-3">
					<span v-if="underDevelopment"
                          class="badge bg-red-200 border border-gray-300 rounded-full px-2 mr-1 mt-1 text-black">
						Under Development
					</span>
                    <span v-for="(badge, index) in badges" :key="index"
                          class="badge bg-gray-200 border border-gray-300 rounded-full px-2 mr-1 mt-1">
						{{ badge }}
					</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            link: {type: String, required: true},
            badges: {type: Array, required: true},
            underDevelopment: {type: Boolean, default: false}
        },

        data: () => ({
            projectCard: [
                'project-card',
                'bg-white',
                'hover:shadow-lg',
                'border',
                'border-grey-300'
            ],
            projectCardDev: [
                'bg-gray-200',
                'text-gray-500'
            ],
            description: [
                'text-gray-700'
            ],
            descriptionDev: [
                'text-gray-500'
            ]
        })
    }
</script>
