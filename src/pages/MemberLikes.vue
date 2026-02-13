<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">收藏清單</h1>
        </div>

        <!-- 活動banner -->
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-10">
            <!-- 分類 -->
            <div class="flex gap-8">
                <div @click.prevent="changeCategory('全部')" class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-5.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">不分類</h2>
                </div>
                <div @click.prevent="changeCategory('行程')" class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-5.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">行程</h2>
                </div>
                <div @click.prevent="changeCategory('機票')" class="relative bg-gray-500 flex-1 h-40 overflow-hidden">
                    <img src="../assets/images/carousel-5.jpg" alt="" class="object-cover w-full h-full">
                    <h2 class="absolute left-5 bottom-5 font-black text-white">機票</h2>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <router-link to="/member"
                    class="cursor-pointer bg-gray-400 text-white text-center px-10 py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">返回會員中心</router-link>
                <div class="flex gap-2 items-center">
                    <label for="numberSelect" class="text-base-light md:text-base text-sm">每頁顯示</label>
                    <select id="numberSelect" v-model.number="perPage"
                        class="border border-gray-300 bg-white px-3 py-1">
                        <option v-for="num in selectNum" :key="num" :value="num">{{
                            num }}</option>
                    </select>
                </div>
            </div>

            <ul class="flex flex-wrap md:justify-between justify-center gap-y-12">
                <!-- 卡片 -->
                <router-link to="/tour-detail" v-for="(item, key) in paginationPages" :key="key"
                    class="md:flex-[0_0_calc(33.333%-1rem)] flex cursor-pointer group">
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
                        <div class="flex flex-col flex-1 p-5 bg-white">
                            <div class="flex gap-2 mb-3">
                                <p
                                    class="md:text-sm text-xs md:px-2 px-0 inline-block border border-gray-300 text-gray-400">
                                    {{ item.type }}</p>
                                <p
                                    class="md:text-sm text-xs md:px-2 px-0 inline-block border border-gray-300 text-gray-400">
                                    {{ item.timeLong }}</p>
                                <p
                                    class="md:text-sm text-xs md:px-2 px-0 inline-block border border-gray-300 text-gray-400">
                                    {{ item.location }}</p>
                            </div>
                            <p class="font-bold line-clamp-1 text-base-heavy">{{ item.title }}</p>
                            <p class="font-bold text-lg text-hot-red mt-auto text-end">{{ item.price.toLocaleString() |
                                dollarSign | currency }}</p>
                        </div>
                    </div>
                </router-link>
            </ul>
            <CustomPagination :totalPages="totalPages" :currentPage.sync="currentPage" />

        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'MemberLikes',
    data() {
        return {
            currentPage: 1,
            perPage: 9,
            selectNum: [9, 18, 36, 45],
            selectCategory: '全部',
            items: [
                {
                    type: '機票',
                    timeLong: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '機票',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '機票',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '機票',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '機票',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '機票',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                }, {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                }, {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                }, {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                }, {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '大阪',
                    title: '水色之際：伊根與天橋立的一日拾光',
                    price: 12000,
                    imgSrc: require('../assets/images/carousel-2.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '二日遊',
                    location: '京都',
                    title: '京都文化深度之旅',
                    price: 25000,
                    imgSrc: require('../assets/images/carousel-3.jpg'),
                    isCollected: false,
                },
                {
                    type: '行程',
                    timeLong: '一日遊',
                    location: '東京',
                    title: '東京迪士尼樂園一日遊',
                    price: 15000,
                    imgSrc: require('../assets/images/carousel-1.jpg'),
                    isCollected: false,
                },
            ],
        };
    },
    methods: {
        changeCategory(category) {
            this.selectCategory = category;
            this.currentPage = 1;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    computed: {
        filterItems() {
            if (this.selectCategory === '全部') return this.items;
            return this.items.filter(item => item.type === this.selectCategory);
        },
        totalPages() {
            return Math.ceil(this.items.length / this.perPage);
        },
        paginationPages() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.filterItems.slice(start, end);
        },
    },
    watch: {
        currentPage() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        perPage() {
            this.currentPage = 1;
        }
    }
}
</script>