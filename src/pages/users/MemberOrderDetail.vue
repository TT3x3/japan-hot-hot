<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <BaseModal :is-modal-open="isModalOpen" :has-error="hasError" :modal-content="modalContent"
            @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <!-- top -->
        <div class="relative  md:h-80 h-40 overflow-hidden">
            <img :src="require('@/assets/images/carousel-4.jpg')" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div v-if="orderDetail" class="max-w-[80%] mx-auto w-full flex flex-col gap-8">
            <div class="text-base-heavy">
                <div class="flex justify-between items-center pb-4">
                    <div class=" flex md:flex-row flex-col gap-4 md:items-center items-start justify-between w-full">
                        <div class="flex gap-4 items-center">
                            <i class="fa-solid fa-clipboard-list"></i>
                            <p class="font-bold text-lg text-base-heavy">訂單詳情</p>
                        </div>
                    </div>
                </div>
                <div class="flex md:flex-row flex-col w-full gap-5 items-start">
                    <!-- orders -->
                    <div class="flex gap-4 flex-col justify-center text-base-heavy md:w-[85%] w-full">
                        <div
                            class="bg-gray-300 flex md:flex-row flex-col md:items-center gap-2 md:px-10 px-6 md:py-6 py-4 text-sm text-base-light">
                            <p class="text-base-light">訂單編號 {{ orderDetail.orderId }} </p>
                        </div>
                        <div class="bg-white flex justify-between md:items-center md:px-10 px-6 md:py-6 py-4">
                            <div class="flex flex-col md:gap-4 gap-2 w-full">
                                <img :src="require('@/assets/images/carousel-1.jpg')" class="h-40 object-cover">
                                <p class="hidden md:block font-bold">
                                    {{ orderDetail.product.title }}</p>
                                <p class="text-sm text-end text-base-light">{{ orderDetail.product.price | dollarSign |
                                    currency }}
                                    x {{ orderDetail.peopleCount
                                    }}</p>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">建立時間</p>
                                    <p>{{ dateToISO(orderDetail.createdAt) }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">訂單類型</p>
                                    <p>{{ typeTranslate[orderDetail.productType] }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">總金額</p>
                                    <p>{{ orderDetail.totalAmount | dollarSign | currency }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">訂單狀態</p>
                                    <p v-if="orderDetail.status === 'confirmed'" class="text-green-700">{{
                                        statusTranslate[orderDetail.status] }}</p>
                                    <p v-else class="text-hot-red">{{ statusTranslate[orderDetail.status] }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:flex flex-row gap-4 w-full">
                            <BaseRouterLink class="flex-1" v-if="orderDetail.productType === 'Flight'"
                                :go-to-path="orderDetail.productType === 'Flight' ? `/ticket-detail/${orderDetail.productId}` : `/tour-detail/${orderDetail.productId}`"
                                button-name="重新下單" is-red />
                            <BaseRouterLink class="flex-1" go-to-path="/member/orders" button-name="返回訂單總覽"
                                :is-red="false" />
                        </div>
                    </div>

                    <div class="flex flex-col justify-center text-base-heavy w-full">
                        <!-- user info -->
                        <div
                            class="bg-gray-300 flex md:flex-row flex-col md:items-center gap-2 md:px-10 px-6 md:py-6 py-4 text-sm text-base-light">
                            <p class="text-base-light">購買資訊</p>
                        </div>
                        <div v-if="orderDetail.contact"
                            class="bg-white flex flex-col justify-between md:items-center md:px-10 px-6 md:py-6 py-4 md:text-base text-sm">
                            <div class="flex flex-col md:gap-4 gap-2 w-full">
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">付款方式</p>
                                    <p>{{ typeTranslate[orderDetail.contact.paymentMethod] }}</p>
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">收件人</p>
                                    <p>{{ orderDetail.contact.name }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">聯絡電話</p>
                                    <p>{{ orderDetail.contact.phone }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">E-mail</p>
                                    <p>{{ orderDetail.contact.email }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">收件地址</p>
                                    <p>{{ orderDetail.contact.address }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">給賣家的話</p>
                                    <p>{{ orderDetail.contact.remark || '無' }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else
                            class="bg-white flex flex-col justify-between md:items-center md:px-10 px-6 md:py-6 py-4 md:text-base text-sm text-base-light">
                            尚未填寫資料
                        </div>

                        <!-- passport info -->
                        <div
                            class="mt-4 bg-gray-300 flex md:flex-row flex-col md:items-center gap-2 md:px-10 px-6 md:py-6 py-4 text-sm text-base-light">
                            <p class="text-base-light">護照資訊</p>
                        </div>
                        <div v-if="orderDetail.purchaseInfo.travelers.length !== 0"
                            class=" flex flex-col gap-2 justify-between md:items-center md:text-base text-sm">
                            <div v-for="traveler in orderDetail.purchaseInfo.travelers" :key="traveler.idNumber"
                                class="bg-white flex flex-col md:gap-4 gap-2 w-full md:px-10 px-6 md:py-6 py-4">
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">護照姓氏</p>
                                    <p>{{ traveler.lastName }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">護照名字</p>
                                    <p>{{ traveler.firstName }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">身分證字號</p>
                                    <p>{{ traveler.idNumber }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">護照號碼</p>
                                    <p>{{ traveler.passportNumber }}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="md:min-w-24 min-w-20 text-gray-400">護照效期</p>
                                    <p>{{ traveler.passportExpiry }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else
                            class="bg-white flex flex-col justify-between md:items-center md:px-10 px-6 md:py-6 py-4 md:text-base text-sm text-base-light">
                            尚未填寫資料
                        </div>

                        <!-- notice info -->
                        <div
                            class="mt-4 bg-gray-300 flex md:flex-row flex-col md:items-center gap-2 md:px-10 px-6 md:py-6 py-4 text-sm text-base-light">
                            <p class="text-base-light">注意事項 & 行前須知</p>
                        </div>
                        <div
                            class="bg-gray-200 flex flex-col justify-between md:items-center md:px-10 px-6 md:py-6 py-4 md:text-base text-sm">
                            <ul class="flex flex-col gap-5 w-full">
                                <li class="font-bold text-base-light">
                                    機票相關
                                    <ul
                                        class="flex flex-col gap-1 list-disc font-medium text-sm text-base-heavy pt-1 px-5">
                                        <li>英文姓名核對：請務必對照護照上的護照拼音，姓與名不能寫反。</li>
                                        <li>改票退票規定：廉價航空通常「不可退票」或改票費用極高。購買特價票前，先確認行程是否百分之百固定。</li>
                                        <li>行李額度：廉航通常不含托運行李，傳統航空也有可能推出「僅含手提」的經濟艙票種，下單前請確認公斤數。</li>
                                    </ul>
                                </li>
                                <li class="font-bold text-base-light">
                                    行程相關
                                    <ul
                                        class="flex flex-col gap-1 list-disc font-medium text-sm text-base-heavy pt-1 px-5">
                                        <li>使用效期：區分「預訂日期」與「開放兌換日期」。有些票券需在購買後 90 天內使用。</li>
                                        <li>預約機制：像是在日本環球影城、迪士尼或某些熱門博物館，「買了門票不等於能進場」，可能還需要額外預約「入園整理券」。</li>
                                        <li>實體券 vs 電子券：確認是否需要列印紙本（實體憑證），或是否只要出示手機 QR Code 即可</li>
                                    </ul>
                                </li>
                                <li class="font-bold text-base-light">
                                    行前確認
                                    <ul
                                        class="flex flex-col gap-1 list-disc font-medium text-sm text-base-heavy pt-1 px-5">
                                        <li>護照效期：確認護照剩餘效期是否在 6 個月以上。</li>
                                        <li>簽證與入境卡：確認是否辦妥電子簽（eVISA）或填寫好當地的入境申請（如日本的 Visit Japan Web）。</li>
                                        <li>實體券 vs 電子券：確認是否需要列印紙本（實體憑證），或是否只要出示手機 QR Code 即可。</li>
                                        <li>緩衝時間：一日券行程別排太滿。如果是搭乘機場特快車（如京成電鐵 Skyliner 或機場快線），建議預留比官網建議再多 30
                                            分鐘的緩衝，以防找不到月台。</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex md:hidden flex-col gap-4 w-full">
                <BaseRouterLink class="flex-1" v-if="orderDetail.productType === 'Flight'"
                    :go-to-path="orderDetail.productType === 'Flight' ? `/ticket-detail/${orderDetail.productId}` : `/tour-detail/${orderDetail.productId}`"
                    button-name="重新下單" is-red />
                <BaseRouterLink class="flex-1" go-to-path="/member/orders" button-name="返回訂單總覽" :is-red="false" />
            </div>
        </div>
        <div v-if="isNotFound === true" class="flex flex-col justify-center items-center w-full">
            <div class="flex flex-col items-center justify-center py-8">
                <p class="pb-2 font-bold md:text-3xl text-xl text-hot-red">查無此訂單編號</p>
                <p class="text-xl text-gray-500">{{ seconds }} 秒後自動轉跳回訂單總覽</p>
            </div>
        </div>
        <div></div>

    </div>
</template>

<script>
import http from '@/api/http'
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';

export default {
    name: 'MemberOrderDetail',
    data() {
        return {
            orderDetail: '',
            isCatchError: false,
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            isNotFound: false,
            seconds: 3,
        }
    },
    components: {
        BaseModal,
        BaseRouterLink,
    },
    created() {
        this.getOrderDetail(this.$route.params.orderId);
    },
    methods: {
        async getOrderDetail(id) {
            const loading = useLoadingStore()
            loading.showPage()
            try {
                const token = localStorage.getItem('token');
                const res = await http.get(`/members/orders/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.orderDetail = res.data;
            } catch (error) {
                this.isNotFound = true;
                const timer = setInterval(() => {
                    this.seconds--;
                    if (this.seconds === 0) {
                        clearInterval(timer);
                        this.$router.push('/member/orders');
                    }
                }, 1000);
                this.isCatchError = true;
            } finally {
                loading.hidePage()
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
                cash: '現金支付',
            }
        },
        statusTranslate() {
            return {
                confirmed: '完成訂單',
                draft: '未完成，僅建立訂單',
                contact_filled: '未完成，未填寫收件資訊',
                travelers_filled: '未完成，未填寫護照資訊',
            }
        },
    },
}
</script>