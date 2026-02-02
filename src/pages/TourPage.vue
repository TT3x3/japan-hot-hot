<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="flex justify-center items-center pt-8">
            <h1 class="text-3xl text-center tracking-[2rem] text-base-heavy">行程</h1>
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
        <div class="max-w-[80%] w-full mx-auto">
            <div class="flex gap-8">
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
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <ul class="flex flex-wrap gap-x-6 gap-y-12">
                <!-- 卡片 -->
                <li v-for="(item, key) in journey.slice(0, 9)" :key="key"
                    class="flex-[0_0_calc(33.333%-1rem)] cursor-pointer group">
                    <div class="flex flex-col h-[450px] border border-gray-200">
                        <div class="relative h-72 overflow-hidden">
                            <img :src="item.imgSrc" alt="" class="object-cover w-full h-full">
                            <div
                                class="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                            </div>
                            <!-- 收藏 -->
                            <button @click="item.isCollected = !item.isCollected"
                                class="absolute top-3 right-3 p-2  text-white/65 hover:text-red-500 transition-colors duration-200 ">
                                <i v-if="item.isCollected" class="fa-solid fa-heart fa-xl text-red-500"></i>
                                <i v-else class="fa-regular fa-heart fa-xl"></i>
                            </button>
                        </div>
                        <div class="flex flex-col flex-1 p-5">
                            <div class="flex gap-2 mb-3">
                                <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ item.type }}</p>
                                <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ item.location }}</p>
                            </div>
                            <p class="font-bold line-clamp-2 text-base-heavy">{{ item.title }}</p>
                            <p class="font-bold text-lg text-hot-red mt-auto text-end">$ {{ item.price.toLocaleString() }}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <button
                class="self-center px-10 py-3 bg-gray-300 text-white  hover:bg-gray-200 transition-colors">查看更多</button>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'TourPage',
    data() {
        return {
            journey: [
                {
                    type: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
            ],
        };
    },
    methods: {
    }
}
</script>