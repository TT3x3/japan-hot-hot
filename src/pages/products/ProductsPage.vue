<template>
    <div v-if="tours.length !== 0 || flights.length !== 0" class="flex flex-col md:gap-32 gap-12 w-full">
        <BaseModal :isModalOpen="isModalOpen" :hasError="hasError" :modalContent="modalContent"
            @close="isModalOpen = false" @confirm="handleModalClick()" />
        <div class="flex justify-center items-center pt-8">
            <h1 class="fade-content-01 text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">{{ pageTitle }}
            </h1>
        </div>

        <!-- top -->
        <div class=" relative md:h-80 h-40 overflow-hidden">
            <img :src="type === 'tickets' ? require('@/assets/images/carousel-2.jpg') : require('@/assets/images/carousel-3.jpg')"
                class="fade-content-01 w-full h-full object-cover">
        </div>

        <!-- 搜尋框 -->
        <SearchBar :placeholderType="pageTitle" :allProducts="pageList" v-model="search"
            @search-result="getSearchResult" />

        <!-- 分類 -->
        <div class="max-w-[80%] w-full mx-auto">
            <div class="flex md:gap-8 gap-2">
                <BaseCategory CategoryName="全部" :isSelected="selectCategory" @select="selectCategory = $event" />
                <BaseCategory v-if="pageType === 'tour'" CategoryName="一日遊" :isSelected="selectCategory"
                    @select="selectCategory = $event" />
                <BaseCategory v-if="pageType === 'tour'" CategoryName="半日遊" :isSelected="selectCategory"
                    @select="selectCategory = $event" />
                <BaseCategory v-if="pageType === 'ticket'" CategoryName="高雄出發" :isSelected="selectCategory"
                    @select="selectCategory = $event" />
                <BaseCategory v-if="pageType === 'ticket'" CategoryName="桃園出發" :isSelected="selectCategory"
                    @select="selectCategory = $event" />
            </div>
        </div>

        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <ul class="grid md:grid-cols-3 grid-cols-1 md:gap-x-6 md:gap-y-12 gap-4">
                <!-- 卡片 -->
                <router-link :to="`/${pageType}-detail/${item.productId}`" v-for="item in filerCategory"
                    :key="item.productId" class="relative w-full cursor-pointer group">
                    <div class="flex flex-col md:h-[450px] border border-gray-200">
                        <!-- 無庫存遮罩 -->
                        <p v-if="item.status !== 'active'"
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-3">
                            暫無庫存</p>
                        <div v-if="item.status !== 'active'" class="absolute inset-0 bg-black/30 z-2"></div>

                        <div class="relative h-72 w-full">
                            <img :src="`${apiBase}${item.thumbnail}`" alt=""
                                class="object-cover object-top w-full h-full">
                            <div
                                class="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <!-- md 以上收藏 -->
                            <button type="button" @click.prevent.stop="toggleLike(item.productId)"
                                class="hidden md:block absolute top-3 right-3 p-2  text-white/65 hover:text-red-500 transition-colors duration-200 ">
                                <i v-if="findLike(item.productId)"
                                    class="fa-solid fa-heart fa-xl text-red-500 cursor-pointer"></i>
                                <i v-else class="fa-regular fa-heart fa-xl cursor-pointer"></i>
                            </button>
                        </div>
                        <div class="flex flex-col gap-3 flex-1 p-5">
                            <div class="flex gap-2 justify-between">
                                <div class="flex gap-2 items-center">
                                    <p v-for="(tag, index) in item.tags" :key="index"
                                        class="font-thin text-sm px-1 inline-block border border-gray-300 text-gray-400">
                                        {{ tag }}
                                    </p>
                                </div>
                                <!-- md 以下收藏 -->
                                <button type="button" @click.prevent.stop="toggleLike(item.productId)"
                                    class=" block md:hidden text-red-500 hover:text-red-400 transition-colors duration-200 ">
                                    <i v-if="findLike(item.productId)"
                                        class="fa-solid fa-heart fa-lg cursor-pointer"></i>
                                    <i v-else class="fa-regular fa-heart fa-lg cursor-pointer"></i>
                                </button>
                            </div>
                            <p class="font-bold text-lg line-clamp-2 text-base-heavy md:h-14">{{ item.title }}</p>
                            <p class="font-bold text-lg text-hot-red mt-auto text-end">{{ item.price.toLocaleString() |
                                dollarSign | currency }}</p>
                        </div>
                    </div>
                </router-link>
            </ul>
            <!-- <button type="button"
                class="self-center px-10 py-3 bg-gray-400 text-white  hover:bg-gray-300 active:bg-gray-500 transition-colors md:w-auto w-full">查看更多</button> -->
        </div>
        <div></div>
    </div>
</template>

<script>
import http from '@/api/http'
import { useResultStore } from '@/stores/search'
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import BaseCategory from '@/components/base/BaseCategory.vue';
import SearchBar from '@/components/common/SearchBar.vue';

export default {
    name: 'ProductsPage',
    props: {
        type: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            flights: [],
            tours: [],
            likesList: [],
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            isCatchError: false,
            search: '',
            selectCategory: '全部',
        };
    },
    components: {
        BaseModal,
        SearchBar,
        BaseCategory,
    },
    mounted() {
        const loading = useLoadingStore()
        loading.hideData()
    },
    methods: {
        async getFlights() {
            try {
                const res = await http.get(`/product/flight`);
                this.flights = res.data.items;
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        async getTours() {
            try {
                const res = await http.get(`/product/tour`);
                this.tours = res.data.items;
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        async getLikes() {
            const token = localStorage.getItem('token');
            if (!token) return;
            try {
                const res = await http.get(`/cart`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.likesList = res.data.items;
                if (this.likesList.length === 0) {
                    return;
                }
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        findLike(id) {
            const token = localStorage.getItem('token');
            if (token) {
                return this.likesList.find(item => item.productId === id)
            }
        },
        async addToLikes(id) {
            const loading = useLoadingStore()
            loading.showData()
            const token = localStorage.getItem('token');
            if (!token) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '修但幾咧！登入才能使用收藏功能！';
                loading.hideData()
                return;
            }
            try {
                await http.post(`/cart/items`, {
                    productId: id,
                    quantity: 1
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.getLikes();
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            } finally {
                loading.hideData()
            }
        },
        async delLike(id) {
            const token = localStorage.getItem('token');
            if (!token) return;
            if (this.findLike(id)) {
                const loading = useLoadingStore()
                loading.showData()
                try {
                    await http.delete(`/cart/items`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        data: {
                            productId: id
                        }
                    });
                } catch (error) {
                    this.isModalOpen = true;
                    this.hasError = true;
                    this.modalContent = '伺服器錯誤，將轉跳回首頁';
                    this.isCatchError = true;
                } finally {
                    loading.hideData()
                }
                this.getLikes();
            }
        },
        toggleLike(id) {
            if (this.findLike(id)) {
                this.delLike(id);
            } else {
                this.addToLikes(id);
            }
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
        },
        async fetchType() {
            const loading = useLoadingStore()
            loading.showPage()

            try {
                if (this.type === 'tickets') {
                    await this.getFlights();
                } else if (this.type === 'tours') {
                    await this.getTours();
                }
            } finally {
                loading.hidePage()
            }
        },
        async getSearchResult(keyword) {
            const loading = useLoadingStore()
            loading.showData()
            try {
                await this.store.getResult(keyword);
                this.$router.push({
                    path: '/products/result',
                    query: {
                        search: keyword,
                        page: 1
                    }
                }).catch(() => { });

            } finally {
                loading.hideData()
            }
        },
    },
    created() {
        this.fetchType();
        this.getLikes();
        this.store = useResultStore();
    },
    computed: {
        pageList() {
            return this.type === 'tickets' ? this.flights : this.tours;
        },
        pageType() {
            return this.type === 'tickets' ? 'ticket' : 'tour';
        },
        pageTitle() {
            return this.type === 'tickets' ? '機票' : '行程';
        },
        showType() {
            return this.type;
        },
        filerCategory() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            let findType = (this.type === 'tickets' ? this.flights : this.tours);
            if (!findType) return [];
            if (this.selectCategory === '全部') return findType
            return findType.filter(item => {
                return item.tags.some(tag => tag.includes(this.selectCategory))
            })
        }
    },
    watch: {
        $route(to, from) {
            if (to.path !== from.path) {
                this.selectCategory = '全部'
            }
        },
        type() {
            this.fetchType();
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