<template>
    <div class="flex flex-col gap-32 w-full">
        <BaseModal :is-modal-open="isModalOpen" :has-error="hasError" :modal-content="modalContent"
            @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <div v-if="orderDetail" class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <!-- 進度條 -->
            <CheckoutStepBar :step-num="3" />

            <!-- 購買資訊 -->
            <div class="flex flex-col gap-2">
                <p class="font-bold text-xl text-base-heavy">確認訂單內容</p>
                <div class="bg-gray-100">
                    <div class=" md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-gray-400">方案名稱</p>
                        <p class="md:font-extrabold font-bold md:text-xl text-md text-base-heavy">{{
                            orderDetail.productName }}</p>
                    </div>
                    <div class="flex flex-row">
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-gray-400">出發日期</p>
                            <p class="md:font-extrabold font-bold md:text-xl text-md text-base-heavy">{{
                                orderDetail.startDate || orderDetail.date }}</p>
                        </div>
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-gray-400">出發時間</p>
                            <p class="md:font-extrabold font-bold md:text-xl text-md text-base-heavy">{{
                                orderDetail.departureTime }}</p>
                        </div>
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-gray-400">購買數量</p>
                            <p class="md:font-extrabold font-bold md:text-xl text-md text-base-heavy">{{
                                orderDetail.peopleCount }} <span class="text-sm">人</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 資訊欄 -->
            <div class="flex md:flex-row flex-col justify-between gap-4 text-base-heavy">
                <div class="flex flex-col gap-2 md:w-[150%] w-full">
                    <p class="font-bold text-xl ">收件資訊</p>
                    <div class="flex flex-col gap-4 border border-gray-100 md:px-6 px-2 md:py-6 py-4">
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">姓名</p>
                                <p>{{ orderDetail.contact.name }}</p>
                            </div>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">Email</p>
                                <p class="break-all">{{ orderDetail.contact.email }}</p>
                            </div>

                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">聯絡電話</p>
                                <p>{{ orderDetail.contact.phone }}</p>
                            </div>

                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-2 px-4">
                            <div class="flex md:flex-row flex-col w-full items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">地址</p>
                                <p>{{ orderDetail.contact.address }}</p>
                            </div>

                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">備註</p>
                                <p>{{ orderDetail.contact.remark }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 付款資訊 -->
            <div class="flex flex-col gap-2 w-full">
                <p class="font-bold text-xl ">價格資訊</p>
                <div class="flex flex-col gap-4 bg-gray-100 p-6">
                    <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                        <p class="w-24 font-bold text-base-light md:text-base text-sm">支付方式</p>
                        <p>{{ typeTranslate[orderDetail.contact.paymentMethod] }}</p>
                    </div>
                    <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                        <p class="w-24 font-bold text-base-light md:text-base text-sm">總金額</p>
                        <p class="font-bold text-xl text-hot-red">{{ orderDetail.totalAmount | dollarSign | currency }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- 護照資訊 -->
            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl text-base-heavy">護照資料</p>
                <div v-for="(passport, index) in orderDetail.travelers" :key="passport.passportNumber"
                    class="flex flex-row gap-2">
                    <div class="flex flex-row md:gap-8 gap-2 bg-gray-100 md:px-8 px-4 py-4 w-full">
                        <div class="text-gray-400 flex flex-col gap-1">
                            <i class="fa-solid fa-user"></i>
                            <p class="[writing-mode:vertical-rl] font-bold text-sm">旅客 {{ index + 1 }}</p>
                        </div>
                        <div class="hidden md:flex h-full w-2 bg-gray-300"></div>
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-1">
                                <p class="w-24 font-bold text-base-light ">姓氏</p>
                                <p class="font-bold text-base-heavy">{{ passport.firstName }}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <p class="w-24 font-bold text-base-light ">名稱</p>
                                <p class=" font-bold text-base-heavy">{{ passport.lastName }}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <p class="w-24 font-bold text-base-light ">身分證字號</p>
                                <p class=" font-bold text-base-heavy">{{ passport.idNumber }}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <p class="w-24 font-bold text-base-light ">護照號碼</p>
                                <p class=" font-bold text-base-heavy">{{ passport.passportNumber }}
                                </p>
                            </div>
                            <div class="flex items-center gap-1">
                                <p class="w-24 font-bold text-base-light ">護照到期日</p>
                                <p class=" font-bold text-base-heavy">{{ passport.passportExpiry }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex md:flex-row flex-col gap-4 w-full">
                <BaseButton class="flex-1" @click="submitOrder" button-name="確認" is-red />
                <BaseButton class="flex-1" @click="$router.back(-1)" button-name="返回" :is-red="false" />
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/api/http';
import { useOrderStore } from '@/stores/order';
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import CheckoutStepBar from '@/components/ui/CheckoutStepBar.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
    name: 'CheckoutChecked',
    data() {
        return {
            store: '',
            selectCity: null,
            selectArea: null,
            date: null,
            isCatchError: false,
            isModalOpen: false,
            hasError: false,
            modalContent: '',
        }
    },
    components: {
        BaseModal,
        CheckoutStepBar,
        BaseButton,
    },
    created() {
        this.store = useOrderStore();
    },
    methods: {
        async submitOrder() {
            const loading = useLoadingStore();
            loading.showPage();
            try {
                const token = localStorage.getItem('token');
                await http.post(`/orders/${this.orderId}/submit`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })

                this.$router.push(`/checkout/finished/${this.orderId}`)
                this.store.isCheckoutStarted = false;
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            } finally {
                loading.hidePage();
            }
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
        },
    },
    computed: {
        orderDetail() {
            return this.store.checkedInfo;
        },
        orderId() {
            return this.store.orderInit.orderId;
        },
        typeTranslate() {
            return {
                cash: '現金',
            }
        },
    },
}
</script>