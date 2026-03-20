<template>
    <!-- Pagination -->
    <div class="flex flex-1 items-center justify-center">
        <div>
            <ul aria-label="Pagination" class="isolate flex flex-wrap gap-2 justify-center">
                <li @click="changePages(currentPage - 1)"
                    class="relative inline-flex items-center md:px-4 px-2 md:py-2 text-gray-400" :class="currentPage === 1
                        ? 'cursor-default opacity-50'
                        : 'cursor-pointer'">
                    <i class="fa-solid fa-angle-left"></i>
                </li>
                <li v-for="p in totalPages" :key="p" @click="changePages(p)"
                    class="relative inline-flex items-center px-4 py-2 text-gray-400 cursor-pointer"
                    :class="{ 'bg-hot-red text-white': currentPage === p }">{{ p }}</li>
                <li @click="changePages(currentPage + 1)"
                    class="relative inline-flex items-center px-4 py-2 text-gray-400" :class="currentPage === totalPages
                        ? 'cursor-default opacity-50'
                        : 'cursor-pointer'">
                    <i class="fa-solid fa-angle-right"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        changePages(page) {
            if (page < 1 || page > this.totalPages) return;
            this.$emit('update:currentPage', page);
        }
    },
}
</script>