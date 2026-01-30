<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="flex justify-center items-center pt-8">
            <h1 class="text-3xl text-center tracking-[2rem]">行程</h1>
        </div>


        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/tour-banner.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <!-- <h1 class="text-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 px-10 py-4 tracking-widest text-center text-base-heavy bg-white">行程</h1> -->


        <!-- 搜尋框 -->
        <div class="flex justify-center items-center">
            <div class="flex flex-row gap-2 justify-center items-center">
                <h3 class="text-3xl text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>
                <div class="flex justify-center items-center">
                    <input type="text" placeholder="赤穗市"
                        class="outline-solid outline-1 outline-gray-300 py-2 px-4 w-[348px]" />
                    <button class="cursor-pointer px-3">
                        <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- 行程分類 -->
        <div class="flex justify-center">
            <div class="max-w-[80%] w-full flex gap-8">
                <div class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-1.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">日本本州</h2>
                </div>
                <div class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-2.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">四國/九州</h2>
                </div>
                <div class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-3.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">北海道</h2>
                </div>
                <div class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-4.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">沖繩</h2>
                </div>
            </div>
        </div>

        <!-- 活動banner -->
        <div class="flex justify-center">
            <div class="max-w-[80%] w-full flex flex-wrap">

                <!-- 卡片 -->
                <div v-for=" (item,index) in new Array(6)" :key="index" class="w-1/3 px-2 py-3">
                    <div class="flex flex-col gap-2 h-[450px] border border-gray-300">
                        <div class="flex-1 h-10 overflow-hidden">
                            <img src="../assets/images/carousel-1.jpg" alt="" class="object-cover w-full h-full">
                        </div>
                        <div class="p-4">
                            <div class="flex gap-2 mb-3">
                                <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">一日遊</p>
                                <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">大阪</p>
                            </div>
                            <p class="font-bold text-base-heavy">水色之際：伊根與天橋立的一日拾光 | 舟屋、海色、天之橋</p>
                            <div class="flex justify-end items-center">
                                <p class="font-bold text-lg text-hot-red">$ 12,000</p>
                            </div>
    
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'TourPage',
    data() {
        return {
        };
    },
    methods: {
    }
}
</script>