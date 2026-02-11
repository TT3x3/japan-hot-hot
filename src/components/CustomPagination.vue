<template>
    <!-- Pagination -->
    <div class="flex flex-1 items-center justify-center">
        <div>
            <ul aria-label="Pagination" class="isolate inline-flex gap-2 -space-x-px">
                <li @click="changePages(currentPage - 1)"
                    class="relative inline-flex items-center px-4 py-2 text-gray-400"
                    :class="{ disabled: currentPage === 1 }">
                    <i class="fa-solid fa-angle-left"></i>
                </li>
                <li @click="changePages(page)" v-for="p in totalPages" :key="p" aria-current="page"
                    class="relative inline-flex items-center px-4 py-2 text-gray-400"
                    :class="{ 'bg-hot-red text-white': currentPage === p }">{{ p }}</li>
                <li @click="changePages(currentPage + 1)"
                    class="relative inline-flex items-center px-4 py-2 text-gray-400"
                    :class="{ disabled: currentPage === totalPages }">
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