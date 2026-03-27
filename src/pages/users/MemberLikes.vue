<template>
    <div>
        <AppLoading :isLoading="isLoading" />
        <CustomModal :isModalOpen="isModalOpen" :hasError="hasError" :modalContent="modalContent"
            @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <div v-if="items" class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
            <MemberBanner :bannerImg="bannerImg" :pageTitle="pageTitle" />
            <div v-if="items.length > 0" class="max-w-[80%] w-full mx-auto flex flex-col gap-10">
                <!-- 分類 -->
                <div class="flex md:gap-8 gap-4">
                    <div @click.prevent="changeCategory('全部')"
                        class="relative flex-1 h-24 overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1678294076595-dc322d298943?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" class="object-cover object-top w-full h-full">
                        <h2 class="absolute left-5 bottom-5 md:font-black font-bold text-white">不分類</h2>
                    </div>
                    <div @click.prevent="changeCategory('Tour')"
                        class="relative flex-1 h-24 overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1678294076595-dc322d298943?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" class="object-cover object-center w-full h-full">
                        <h2 class="absolute left-5 bottom-5 md:font-black font-bold text-white">行程</h2>
                    </div>
                    <div @click.prevent="changeCategory('Flight')"
                        class="relative flex-1 h-24 overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1678294076595-dc322d298943?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" class="object-cover object-bottom w-full h-full">
                        <h2 class="absolute left-5 bottom-5 md:font-black font-bold text-white">機票</h2>
                    </div>
                </div>
                <router-link to="/member"
                    class="inline-block self-end cursor-pointer bg-gray-400 text-white text-center px-10 py-3 hover:bg-gray-300 active:bg-gray-500 transition-colors">返回會員中心</router-link>
                <!-- <div class="flex items-center justify-between">
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
                </div> -->

                <ul class="flex flex-wrap md:justify-between justify-center gap-x-2 gap-y-12">
                    <!-- 卡片 -->
                    <router-link :to="`/${typeTranslate[item.type]}-detail/${item.productId}`" target="_blank"
                        rel="noopener noreferrer" v-for="(item, key) in paginationPages" :key="key"
                        class="md:flex-[0_0_calc(33.333%-1rem)] h-[240px] flex cursor-pointer group ">
                        <div class="flex flex-col border border-gray-200">
                            <div class="relative h-72 overflow-hidden">
                                <img :src="`${apiBase}${item.thumbnail}`" alt="" class="object-cover w-full">
                                <div
                                    class="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                </div>
                                <!-- md 以上移除收藏 -->
                                <button type="button" @click.prevent.stop="delLike(item.productId)"
                                    class="hidden md:block absolute top-3 right-3 p-2  text-white/65 hover:text-red-500 active:text-red-700 transition-colors duration-200 cursor-pointer">
                                    <i class="fa-solid fa-trash fa-xl"></i>
                                </button>
                            </div>
                            <div class="flex flex-col flex-1 gap-4 p-5 bg-white">
                                <div class="flex justify-between">
                                    <p class="font-bold md:text-md text-lg line-clamp-1 text-base-heavy">{{ item.title
                                        }}</p>
                                    <!-- md 以下移除收藏 -->
                                    <button type="button" @click.prevent.stop="delLike(item.productId)"
                                        class="block md:hidden text-gray-400 transition-colors duration-200 cursor-pointer">
                                        <i class="fa-solid fa-trash fa-xl"></i>
                                    </button>
                                </div>
                                <p class="font-bold text-lg text-hot-red mt-auto text-end">{{
                                    item.price.toLocaleString() |
                                    dollarSign | currency }}</p>
                            </div>
                        </div>
                    </router-link>
                </ul>
                <CustomPagination :totalPages="totalPages" :currentPage.sync="currentPage" />
                <div></div>
            </div>
        </div>
        <div v-else class=" text-base-light bg-white py-20 md:w-[480px] md:mx-auto w-full">
            <div v-if="isLoading === false" class="flex flex-col gap-4 items-center justify-center">
                <i class="fa-regular fa-face-surprise fa-5x"></i>
                <p class="font-bold text-xl">收藏清單空空如也捏！快去尋寶！</p>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
import http from '@/api/http'
import CustomModal from '@/components/CustomModal.vue';
import AppLoading from '@/components/AppLoading.vue';
import MemberBanner from '@/components/MemberBanner.vue';

export default {
    name: 'MemberLikes',
    data() {
        return {
            isLoading: false,
            apiBase: process.env.VUE_APP_API_PATH,
            pageTitle: '收藏清單',
            bannerImg: require('@/assets/images/pic-03.jpg'),
            currentPage: 1,
            perPage: 9,
            selectNum: [9, 18, 36, 45],
            selectCategory: '全部',
            items: '',
            deleteId: '',
            isCatchError: false,
            isModalOpen: false,
            hasError: false,
            modalContent: '',
        };
    },
    components: {
        CustomModal,
        AppLoading,
        MemberBanner,
    },
    methods: {
        async getLikes() {
            this.isLoading = true;
            const token = localStorage.getItem('token');
            if (!token) return;
            try {
                const res = await http.get(`/cart`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.items = res.data.items;
                // console.log(res)
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            } finally {
                this.isLoading = false;
            }
        },
        async delLike(id) {
            this.deleteId = id;
            const token = localStorage.getItem('token');
            if (!token || !id) return;
            try {
                await http.delete(`/cart/items`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: {
                        productId: this.deleteId
                    }
                });
                this.getLikes();
                this.deleteId = '';
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        changeCategory(category) {
            this.selectCategory = category;
            this.currentPage = 1;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
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