<template>
    <button type='button' @click.prevent="$emit('select', CategoryName)"
        class="relative bg-gray-500 flex-1 overflow-hidden cursor-pointer">
        <img :src="categoryImg" alt="" class="object-cover object-top w-full md:h-20 h-16">
        <h2 class="absolute left-5 bottom-5 font-bold text-white">{{ CategoryName }}</h2>
    </button>
</template>
<script>
export default {
    props: {
        categoryImg: {
            type: String,
            required: true,
        },
        CategoryName: {
            type: String,
            required: true,
        }

    },
    methods: {
        changeCategory(category) {
            this.selectCategory = category;
        },
    },
}
</script>