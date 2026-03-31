<template>
    <button type='button' @click.prevent="$emit('select', CategoryName)"
        class="flex-1 text-start pt-5 pb-1 md:pl-5 pl-2 cursor-pointer border-b-3 border-gray-300 hover:border-gray-300 text-gray-400 hover:bg-gray-100 duration-200"
        :class="{ 'bg-gray-200 border-gray-500 text-gray-500': isSelected === CategoryName }">
        <h2 class="font-bold md:text-lg ">{{ CategoryName }}</h2>
    </button>
</template>
<script>
export default {
    props: {
        CategoryName: {
            type: String,
            required: true,
        },
        isSelected: {
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