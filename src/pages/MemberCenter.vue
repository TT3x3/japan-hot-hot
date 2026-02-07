<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/carousel-3.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">會員中心</h1>
        </div>
        <div class="max-w-[80%] w-full mx-auto">
            <div class="flex items-center gap-4 ps-2 pb-4 text-base-heavy">
                <i class="fa-solid fa-basket-shopping"></i>
                <p class="font-bold text-lg ">購物資訊</p>
            </div>
            <div class="bg-white flex flex-row flex-wrap gap-2 justify-center p-2">
                <router-link to="/"
                    class="flex flex-col gap-4 cursor-pointer px-2 py-8 hover:bg-gray-50 active:bg-gray-100 w-1/2 md:w-1/5">
                    <p class="font-bold text-lg text-base-heavy pl-0 md:px-3">會員資料</p>
                    <div class="w-full h-px bg-gray-100"></div>
                    <p class="text-sm text-gray-400 pl-0 md:px-3 ">可查看並變更會員資料，包含暱稱、電話及地址。</p>
                </router-link>
                <router-link to="" class="flex flex-col gap-4 cursor-pointer px-2 py-8 hover:bg-gray-50 active:bg-gray-100 w-1/2 md:w-1/5">
                    <p class="font-bold text-lg text-base-heavy pl-0 md:px-3">變更密碼</p>
                    <div class="w-full h-px bg-gray-100 "></div>
                    <p class="text-sm text-gray-400 pl-0 md:px-3">可變更目前使用的密碼。</p>
                </router-link>
                <router-link to="" class="flex flex-col gap-4 cursor-pointer px-2 py-8 hover:bg-gray-50 active:bg-gray-100 w-1/2 md:w-1/5">
                    <p class="font-bold text-lg text-base-heavy pl-0 md:px-3">查看訂單</p>
                    <div class="w-full h-px bg-gray-100"></div>
                    <p class="text-sm text-gray-400 pl-0 md:px-3">可查看目前訂單及歷史訂單。</p>
                </router-link>
                <router-link to="" class="flex flex-col gap-4 cursor-pointer px-2 py-8 hover:bg-gray-50 active:bg-gray-100 w-1/2 md:w-1/5">
                    <p class="font-bold text-lg text-base-heavy pl-0 md:px-3">我的收藏</p>
                    <div class="w-full h-px bg-gray-100"></div>
                    <p class="text-sm text-gray-400 pl-0 md:px-3">可查看收藏的商品，可進行刪除或管理。</p>
                </router-link>
            </div>
        </div>
        <div></div>

    </div>
</template>

<script>
export default {
    name: 'MemberCenter',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>