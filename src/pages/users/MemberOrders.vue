<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <BaseModal :is-modal-open="isModalOpen" :has-error="hasError" :modal-content="modalContent"
            @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <!-- top -->
        <MemberHero :banner-img="require('@/assets/images/pic-04.jpg')" pageTitle="訂單總覽" />
        <div v-if="!orderList"></div>
        <div v-else-if="orderList" class="flex flex-col gap-8">
            <div class="text-base-heavy">

                <!-- orders list -->
                <div class="flex flex-col gap-6 justify-center text-base-heavy md:w-[60%] w-[80%] mx-auto">
                    <div class="flex md:justify-end">
                        <BaseRouterLink go-to-path="/member" button-name="返回會員中心" :is-red="false" />
                    </div>
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
            <CustomPagination class="w-full flex justify-center" :total-pages="totalPages"
                :current-page.sync="currentPage" />
        </div>
        <div v-else class="text-base-light flex flex-col gap-4 items-center justify-center py-20 px-10 w-full">
            <i class="fa-regular fa-face-surprise fa-5x"></i>
            <p class="font-bold text-xl">那A安捏，居然還沒有訂單？快去買東西！</p>
        </div>
        <div></div>

    </div>
</template>

<script>
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';
import MemberHero from '@/components/layout/MemberHero.vue';

import http from '@/api/http';

export default {
    name: 'MemberOrders',
    data() {
        return {
            orderList: '',
            selectNum: [5, 10, 20, 40],
            currentPage: 1,
            perPage: 10,
            totalNum: 1,
            isModalOpen: false,
            modalContent: '',
            hasError: false,
        }
    },
    created() {
        this.getOrders();
    },
    components: {
        BaseModal,
        MemberHero,
        BaseRouterLink,
    },
    methods: {
        async getOrders() {
            const loading = useLoadingStore();
            loading.showPage();
            const token = localStorage.getItem('token');
            try {
                const res = await http.get(`/members/orders`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.orderList = res.data.data;
                const pages = res.data.pagination;
                this.totalNum = parseInt(pages.total);
                this.currentPage = parseInt(pages.page);
                this.perPage = parseInt(pages.limit);
            } catch {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
            } finally {
                loading.hidePage();
            }

        },
        dateToISO(date) {
            const isoDate = new Date(date).toISOString().split('T')[0];
            return isoDate;
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            if (this.$route.path === '/') return;
            this.$router.push('/');
        },
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