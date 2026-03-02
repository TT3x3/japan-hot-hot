<template>
    <!-- top -->
    <div v-show="showTopBtn" @click="backToTop()"
        class="fixed bottom-8 right-14 md:bg-white/30 bg-white/70 w-12 h-12 flex flex-col justify-center items-center hover:bg-white/60 cursor-pointer">
        <i class="fa-solid fa-angle-up fa-xl text-gray-600"></i>
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
            this.showTopBtn = window.scrollY > 300;
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