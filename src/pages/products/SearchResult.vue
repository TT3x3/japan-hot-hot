<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full">
        <BaseModal :is-modal-open="isModalOpen" :has-error="hasError" :modal-content="modalContent"
            @close="isModalOpen = false" @confirm="handleModalClick()" />

        <!-- 搜尋框 -->
        <SearchBar :placeholder-type="pageTitle" :all-products="products" v-model="search"
            @search-result="getSearchResult" />

        <div class="bg-gray-200 py-12 flex flex-col justify-center items-center gap-12">
            <div class="max-w-[80%] w-full mx-auto flex flex-col gap-4">

                <p v-if="store.isSearch" class="text-xl text-base-light">以下是 <span class="font-bold text-hot-red">{{
                    store.isSearch
                        }}</span> 相關</p>

                <div class="flex md:flex-row flex-col gap-8 w-full h-full flex-1">
                    <!-- sidebar -->
                    <div
                        class="bg-white h-full md:w-[32%] w-full py-6 md:px-8 px-6 text-base-heavy flex md:flex-col flex-col md:gap-8 gap-2">
                        <div class="flex md:flex-col gap-4">
                            <p class="font-bold text-gray-400 min-w-16">嘿皮類型</p>
                            <div class="flex md:flex-col gap-2 flex-wrap">
                                <label for="tourInput" class="flex items-center gap-2 min-w-8"><input
                                        v-model="checkList" value="Tour" type="checkbox" id="tourInput">行程</label>
                                <label for="flightInput" class="flex items-center gap-2 min-w-8"><input
                                        v-model="checkList" value="Flight" type="checkbox" id="flightInput">機票</label>
                            </div>
                        </div>
                        <div class="hidden md:block bg-gray-100 w-full h-px"></div>
                        <div class="flex md:flex-col gap-4">
                            <p class="font-bold text-gray-400 min-w-16">標籤類型</p>
                            <div class="flex md:flex-col gap-2 flex-wrap">
                                <label for="dayInput" class="flex items-center gap-2  min-w-16"><input
                                        v-model="checkList" value="一日遊" type="checkbox" id="dayInput">一日遊</label>
                                <label for="halfInput" class="flex items-center gap-2  min-w-16"><input
                                        v-model="checkList" value="半日遊" type="checkbox" id="halfInput">半日遊</label>
                                <label for="kaoInput" class="flex items-center gap-2  min-w-16"><input
                                        v-model="checkList" value="高雄出發" type="checkbox" id="kaoInput">高雄出發</label>
                                <label for="taoInput" class="flex items-center gap-2  min-w-16"><input
                                        v-model="checkList" value="桃園出發" type="checkbox" id="taoInput">桃園出發</label>
                            </div>
                        </div>
                        <button type="button" @click.prevent="handleCheckTags()"
                            class="border border-gray-300 py-2 text-gray-400 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                            :class="{ 'opacity-50 pointer-events-none': checkList.length === 0 }"
                            :disabled="checkList.length === 0">清除選取項目</button>
                    </div>

                    <!-- result -->
                    <div v-if="filterCheckbox.length > 0" class="w-full h-full flex flex-1 flex-col gap-5">
                        <router-link :to="`/${routerTypeTranslate[product.type]}-detail/${product.productId}`"
                            v-for="product in filterCheckbox" :key="product.id" class="flex bg-white">
                            <img :src="`${apiBase}/${product.thumbnail}`" alt=""
                                class="md:h-56 h-36 md:w-96 w-60 object-cover overflow-hidden">
                            <div class="md:p-6 p-2 w-full flex flex-col justify-between text-base-heavy">
                                <div class="flex flex-col gap-2">
                                    <div class="flex gap-1 justify-between items-center">
                                        <p class="font-bold md:text-xl line-clamp-2">{{ product.title }}</p>
                                        <button type="button" @click.prevent.stop="toggleLike(product.productId)"
                                            class=" text-red-300 hover:text-red-500 transition-colors duration-200 ">
                                            <i v-if="findLike(product.productId)"
                                                class="fa-solid fa-heart fa-xl text-red-500 cursor-pointer"></i>
                                            <i v-else class="fa-regular fa-heart fa-xl cursor-pointer"></i>
                                        </button>
                                    </div>
                                    <div class="flex flex-row gap-2 items-center">
                                        <p class="font-thin text-sm px-1 inline-block bg-gray-400 text-white">
                                            {{ typeTranslate[product.type] }}</p>
                                        <p v-for="(tag, index) in product.tags" :key="index"
                                            class="hidden md:inline-block font-thin text-sm px-1 border border-gray-300 text-gray-400">
                                            {{ tag }}</p>

                                    </div>
                                </div>
                                <p class="font-bold text-end text-xl text-hot-red">$ 22,230 NTD</p>
                            </div>
                        </router-link>
                    </div>

                    <div v-else class="flex justify-center items-center w-full flex-1 h-96">
                        <div v-if="isLoading === false"
                            class="flex flex-col justify-center items-center text-base-light">
                            <i class="fa-solid fa-heart-crack fa-5x"></i>
                            <p class="text-xl">糟糕！沒有符合的內容！</p>
                        </div>
                    </div>

                </div>
            </div>
            <CustomPagination class="w-full flex justify-center" :total-pages="totalPages"
                :current-page.sync="currentPage" />
        </div>
    </div>
</template>

<script>
import http from '@/api/http';
import { useResultStore } from '@/stores/search';
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import SearchBar from '@/components/common/SearchBar.vue';

export default {
    name: 'ProductsPage',
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            flights: [],
            tours: [],
            products: [],
            likesList: [],
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            isCatchError: false,
            search: '',
            pageTitle: '歡樂',
            totalPages: 1,
            currentPage: 1,
            checkList: [],
        };
    },
    created() {
        this.getLikes();
        const keyword = this.$route.query.search;
        if (keyword) {
            this.search = keyword;
            this.getSearchResult(keyword, parseInt(this.$route.query.page) || 1);
        }
    },
    components: {
        BaseModal,
        SearchBar,
    },
    methods: {
        async getSearchResult(keyword, page) {
            const loading = useLoadingStore();
            loading.showPage();
            try {
                await this.store.getResult(keyword, page = 1);
                this.products = this.store.products;
                this.$router.push({
                    path: '/products/result',
                    query: {
                        search: keyword,
                        page,
                    }
                }).catch(() => { });
                this.search = '';
                this.totalPages = this.store.totalPages;
                this.currentPage = page;
            } finally {
                loading.hidePage();
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
            const loading = useLoadingStore();
            loading.showData();
            const token = localStorage.getItem('token');
            if (!token) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '修但幾咧！登入才能使用收藏功能！';
                loading.hideData();
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
                loading.hideData();
            }
        },
        async delLike(id) {
            const token = localStorage.getItem('token');
            if (!token) return;
            if (this.findLike(id)) {
                const loading = useLoadingStore();
                loading.showData();
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
                    loading.hideData();
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
        handleCheckTags() {
            if (this.checkList.length > 0) {
                this.checkList = [];
            }
        }
    },
    computed: {
        store() {
            return useResultStore();
        },
        filterCheckbox() {
            return this.products.filter(product => {
                if (!product) return [];
                if (this.checkList.length === 0) return product;
                const matchType = product.type && this.checkList.includes(product.type);
                const matchTitle = product.title && this.checkList.includes(product.title);
                const matchNotice = product.notices && product.notices.some(list => this.checkList.includes(list));
                const matchTag = product.tags && product.tags.some(tag => this.checkList.includes(tag))
                return matchType || matchTitle || matchNotice || matchTag;
            })
        },
        typeTranslate() {
            return {
                Flight: '機票',
                Tour: '行程'
            }
        },
        routerTypeTranslate() {
            return {
                Flight: 'ticket',
                Tour: 'tour'
            }
        },
        paginationPages() {
            return this.products;
        },
        isLoading() {
            const store = useLoadingStore();
            return store.pageLoading;
        }
    },
    watch: {
        async currentPage(newPage) {
            await this.store.getResult(this.store.isSearch, newPage)
            this.products = this.store.products;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        '$route.query': {
            immediate: true,
            handler(query) {
                const keyword = query.search || '';
                const page = parseInt(query.page) || 1;
                this.getSearchResult(keyword, page);
            }
        },
    }
}
</script>