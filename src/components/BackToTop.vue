<template>
    <!-- top -->
    <div v-show="showTopBtn" @click="backToTop()"
        class="fixed bottom-[10%] right-14 md:bg-white/30 bg-white/90 p-3 flex flex-col gap-1 justify-center items-center hover:bg-white/80 cursor-pointer shadow-md">
        <i class="pt-2 pb-1 fa-solid fa-angle-up fa-xl text-gray-600"></i>
        <p class="text-xs text-gray-400">TOP</p>
    </div>
</template>
<script>
export default {
    name: 'BackToTop',
    data() {
        return {
            showTopBtn: false,
        };
    },
    methods: {
        backToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        handleTopBtn() {
            this.showTopBtn = window.scrollY > 160;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleTopBtn);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>