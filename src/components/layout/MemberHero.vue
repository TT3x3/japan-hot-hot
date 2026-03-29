<template>
    <div class="flex flex-col md:gap-32 gap-12">
        <div class="md:h-80 h-40 overflow-hidden">
            <img :src="bannerImg" alt="tour-banner" class="fade-content-01 w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="fade-content-01 text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">{{ pageTitle }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MemberBanner',
    props: {
        bannerImg: {
            type: String,
            required: true,
        },
        pageTitle: {
            type: String,
            required: true,
        }
    }
}
</script>
<style scoped>
.fade-content-01 {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
    animation-delay: 0.3s;
}
</style>