<template>
    <div v-if="orderList" class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">訂單</h1>
        </div>
        <div class="max-w-[80%] mx-auto flex flex-col gap-8">
            <div class="text-base-heavy">
                <div class="flex flex-col pb-4">
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
                </div>

                <!-- orders list -->
                <!-- md 以下 -->
                <div class="flex flex-col gap-6 justify-center text-base-heavy">
                    <div v-for="(order) in paginationPages" :key="order.id"
                        class="hover:shadow-md transition-shadow duration-200">
                        <div
                            class="bg-gray-300 flex md:flex-row flex-col justify-between md:items-center md:gap-4 gap-1 md:px-10 px-6 py-4 text-base-light">
                            <div class="flex md:flex-row flex-col justify-between md:gap-4 gap-1">
                                <p class="hidden md:block self-start bg-gray-400 text-xs text-white px-2 py-1">{{
                                    typeTranslate[order.productType] }}</p>
                                <p class="w-24 ">{{ dateToISO(order.createdAt) }}</p>
                                <p>{{ order.orderId }}</p>
                                <p class="block md:hidden truncate font-bold">{{ order.productName }}</p>
                            </div>
                            <router-link :to="`/member/orders/${order.orderId}`"
                                class="hidden md:block bg-gray-200 px-4 py-1 text-sm text-gray-500 hover:bg-gray-100 active:bg-gray-400">查看訂單</router-link>
                        </div>

                        <!-- md 以上 -->
                        <div class="bg-white flex justify-between md:items-center md:px-10 px-6 md-py-6 py-4">
                            <div class="flex md:flex-row flex-col md:gap-4 gap-1">
                                <p class="block md:hidden self-start bg-gray-400 text-white px-2 py-1">{{
                                    typeTranslate[order.productType] }}</p>
                                <p
                                    class="hidden md:block w-64 font-bold whitespace-nowrap overflow-hidden text-ellipsis line-clamp-1">
                                    {{ order.productName }}</p>
                                <p class="w-30">{{ order.price | dollarSign | currency }}</p>
                                <p :class="['w-14', order.status === 'confirmed' ? 'text-green-700' : 'text-hot-red']">
                                    {{ order.status === 'confirmed' ? '已完成' : '未完成' }}
                                </p>
                            </div>
                            <router-link :to="`/member/orders/${order.orderId}`"
                                class="z-10 inline-block self-end md:hidden bg-gray-200 md:px-4 px-6 md:py-2 py-3 md:text-xs text-base text-gray-500 hover:bg-gray-100 active:bg-gray-400">查看訂單</router-link>
                        </div>
                    </div>

                    <CustomPagination :totalPages="totalPages" :currentPage.sync="currentPage" />
                </div>
            </div>
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
            console.log(this.orderList)
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
            return Math.ceil(this.orderList.length / this.perPage);
        },
        paginationPages() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.orderList.slice(start, end);
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