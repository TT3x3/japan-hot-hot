<template>
    <div>
        <div v-if="items" class="flex flex-col gap-32 w-full bg-gray-100">
            <!-- top -->
            <div class="relative h-80 overflow-hidden">
                <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
            </div>
            <div class="flex justify-center items-center ">
                <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">收藏清單</h1>
            </div>

            <div v-if="items.length > 0" class="max-w-[80%] w-full mx-auto flex flex-col gap-10">
                <!-- 分類 -->
                <div class="flex gap-8">
                    <div @click.prevent="changeCategory('全部')"
                        class="relative flex-1 h-40 overflow-hidden cursor-pointer">
                        <img src="../assets/images/carousel-5.jpg" alt="" class="object-cover w-full h-full">
                        <h2 class="absolute left-5 bottom-5 font-black text-white">不分類</h2>
                    </div>
                    <div @click.prevent="changeCategory('Tour')"
                        class="relative flex-1 h-40 overflow-hidden cursor-pointer">
                        <img src="../assets/images/carousel-5.jpg" alt="" class="object-cover w-full h-full">
                        <h2 class="absolute left-5 bottom-5 font-black text-white">行程</h2>
                    </div>
                    <div @click.prevent="changeCategory('Flight')"
                        class="relative flex-1 h-40 overflow-hidden cursor-pointer">
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
                    <router-link :to="`/${typeTranslate[item.type]}-detail/${item.productId}`" target="_blank"
                        rel="noopener noreferrer" v-for="(item, key) in paginationPages" :key="key"
                        class="md:flex-[0_0_calc(33.333%-1rem)] h-[240px] flex cursor-pointer group">
                        <div class="flex flex-col border border-gray-200">
                            <div class="relative h-72 overflow-hidden">
                                <img :src="`${apiBase}${item.thumbnail}`" alt="" class="object-cover w-full">
                                <div
                                    class="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                </div>
                                <!-- 移除收藏 -->
                                <button @click.prevent.stop="delLike(item.productId)"
                                    class="absolute top-3 right-3 p-2  text-white/65 hover:text-red-500 active:text-red-700 transition-colors duration-200 cursor-pointer">
                                    <i class="fa-solid fa-trash fa-xl"></i>
                                </button>
                            </div>
                            <div class="flex flex-col flex-1 gap-4 p-5 bg-white">
                                <p class="font-bold line-clamp-2 text-base-heavy">{{ item.title }}</p>
                                <p class="font-bold text-lg text-hot-red mt-auto text-end">{{
                                    item.price.toLocaleString() |
                                    dollarSign | currency }}</p>
                            </div>
                        </div>
                    </router-link>
                </ul>
                <CustomPagination :totalPages="totalPages" :currentPage.sync="currentPage" />

            </div>
            <div v-else
                class=" text-base-light flex flex-col gap-4 items-center justify-center bg-white py-20 md:w-[480px] md:mx-auto w-full">
                <i class="fa-regular fa-face-laugh-squint fa-5x"></i>
                <p>收藏清單空空如也捏！快去尋寶！</p>
            </div>
            <div></div>
        </div>
        <div v-else class="text-base-light flex justify-center items-center gap-2">
            <i class="fa-solid fa-spinner fa-lg"></i>
            <p>loading…</p>
        </div>
    </div>
</template>

<script>
import http from '@/api/http'

export default {
    name: 'MemberLikes',
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            currentPage: 1,
            perPage: 9,
            selectNum: [9, 18, 36, 45],
            selectCategory: '全部',
            items: '',
            deleteId: '',
        };
    },
    methods: {
        async getLikes() {
            const token = localStorage.getItem('token');
            const res = await http.get(`${this.apiBase}/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.items = res.data.items;
        },
        async delLike(id) {
            this.deleteId = id;
            const token = localStorage.getItem('token');
            await http.delete(`${this.apiBase}/cart/items`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    productId: this.deleteId
                }
            });
            this.getLikes();
            this.deleteId = '';
        },
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
        typeTranslate() {
            return {
                Tour: 'tour',
                Flight: 'ticket',
            }
        },
    },
    watch: {
        currentPage() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        perPage() {
            this.currentPage = 1;
        }
    },
    mounted() {
        this.getLikes();
    }
}
</script>