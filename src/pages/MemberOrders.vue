<template>
    <div v-if="orderList" class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <!-- top -->
        <div class="relative  md:h-80 h-40 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">訂單</h1>
        </div>
        <div class="flex flex-col gap-8">
            <div class="text-base-heavy">
                <!-- <div class="flex flex-col pb-4"> -->
                    <!-- <div class="flex items-center justify-center"> -->
                    <!-- <router-link to="/member"
                                class="cursor-pointer bg-gray-400 text-white text-center px-10 py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">返回會員中心</router-link> -->
                    <!-- <div class="flex gap-2 items-center">
                                <label for="numberSelect" class="text-base-light md:text-base text-sm">每頁顯示</label>
                                <select id="numberSelect" v-model.number="perPage"
                                    class="border border-gray-300 bg-white px-3 py-1">
                                    <option v-for="num in perPage" :key="num" :value="num">{{
                                        num }}</option>
                                </select>
                            </div> -->
                    <!-- </div> -->
                <!-- </div> -->

                <!-- orders list -->
                <div class="flex flex-col gap-6 justify-center text-base-heavy md:w-[60%] w-[80%] mx-auto">
                    <router-link to="/member"
                        class="cursor-pointer md:self-end self-start bg-gray-400 text-white text-center px-10 py-3 hover:bg-gray-300 active:bg-gray-500 transition-colors">返回會員中心</router-link>
                    <!-- md 以上 -->
                    <router-link :to="`/member/orders/${order.orderId}`" v-for="(order) in paginationPages"
                        :key="order.orderId"
                        class="hidden md:block hover:shadow-md transition-shadow duration-200 w-full">
                        <div class=" flex md:flex-col items-center bg-white text-base-light">
                            <div class="md:flex md:flex-row gap-4 w-full px-16 py-4">
                                <div class="md:flex gap-2 items-center justify-between">
                                    <p
                                        :class="['px-2 py-1 text-sm text-white', order.status === 'confirmed' ? 'bg-green-700' : 'bg-hot-red']">
                                        {{ order.status === 'confirmed' ? '已完成' : '未完成' }}
                                    </p>
                                    <p class="bg-gray-400 text-sm text-white px-2 py-1">{{
                                        typeTranslate[order.productType] }}</p>
                                </div>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="md:flex flex-col gap-2 md:px-16 px-6 py-4 w-full">
                                <div class="md:flex gap-2 items-center">
                                    <p class="text-gray-400 min-w-16">訂單編號</p>
                                    <p>{{ order.orderId }}</p>
                                </div>
                                <div class="md:flex gap-2 items-center">
                                    <p class="text-gray-400 min-w-16">建立日期</p>
                                    <p>{{ dateToISO(order.createdAt) }}</p>
                                </div>
                                <div class="md:flex gap-2 items-center">
                                    <p class="text-gray-400 min-w-16">商品名稱</p>
                                    <p class="truncate font-bold">{{ order.productName }}</p>
                                </div>
                                <div class="md:flex gap-2 items-center">
                                    <p class="text-gray-400 min-w-16">訂單總價</p>
                                    <p>{{ order.totalAmount | dollarSign | currency }}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>

                    <!-- md 以下 -->
                    <router-link :to="`/member/orders/${order.orderId}`"
                        class="flex md:hidden bg-white justify-between px-6 py-6 w-full"
                        v-for="order in paginationPages" :key="order.id">
                        <div class="flex flex-col gap-3 w-full">
                            <div class="flex gap-2">
                                <p class="inline-block bg-gray-400 text-white text-sm px-2 py-1">{{
                                    typeTranslate[order.productType] }}</p>
                                <p
                                    :class="['px-2 py-1 inline-block text-sm text-white', order.status === 'confirmed' ? 'bg-green-700' : 'bg-hot-red']">
                                    {{ order.status === 'confirmed' ? '已完成' : '未完成' }}
                                </p>
                            </div>
                            <p>{{ dateToISO(order.createdAt) }}</p>
                            <p class="font-bold overflow-hidden text-ellipsis line-clamp-1 truncate">
                                {{ order.productName }}</p>
                            <p>{{ order.totalAmount | dollarSign | currency }}</p>
                        </div>
                    </router-link>

                </div>
            </div>
            <CustomPagination class="w-full flex justify-center" :totalPages="totalPages"
                :currentPage.sync="currentPage" />
        </div>
        <div></div>

    </div>
</template>

<script>
import http from '@/api/http'

export default {
    name: 'MemberOrders',
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            orderList: '',
            selectNum: [5, 10, 20, 40],
            currentPage: 1,
            perPage: 10,
            totalNum: 1,
        }
    },
    methods: {
        async getOrders() {
            const token = localStorage.getItem('token');
            const res = await http.get(`${this.apiBase}/members/orders`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.orderList = res.data.data;
            const pages = res.data.pagination;
            this.totalNum = parseInt(pages.total);
            this.currentPage = parseInt(pages.page);
            this.perPage = parseInt(pages.limit);
        },
        dateToISO(date) {
            const isoDate = new Date(date).toISOString().split('T')[0];
            return isoDate;
        },
    },
    created() {
        this.getOrders();
    },
    computed: {
        typeTranslate() {
            return {
                Tour: '行程',
                Flight: '機票',
            }
        },
        totalPages() {
            return Math.ceil(this.totalNum / this.perPage);
        },
        paginationPages() {
            return this.orderList;
        }
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