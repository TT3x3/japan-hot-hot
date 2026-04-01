<template>
        <router-link :to="goToPath" class="md:w-auto w-full text-center px-10 py-3 text-white transition-colors" 
        :class="isRed ? 'bg-hot-red hover:bg-red-500 active:bg-red-700'
            : 'bg-gray-400 hover:bg-gray-300 active:bg-gray-500'">
            {{ buttonName }}
        </router-link>
</template>
<script>
export default {
    name: 'BaseRouterLink',
    props: {
        goToPath: {
            type: String,
            required: true,
        },
        buttonName: {
            type: String,
            required: true,
        },
        isRed: {
            type: Boolean,
            default: false,
        },
    },
}
</script>