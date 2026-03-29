<template>
    <div>
        <BaseLoading :isLoading="isLoading" />
        <BaseModal :isModalOpen="isModalOpen" :hasError="hasError" :modalContent="modalContent"
            @close="isModalOpen = false" @confirm="handleModalClick()" />
        <div v-if="tour" class="flex flex-col gap-32w-full">
            <div class="max-w-[80%] w-full mx-auto flex flex-col md:gap-12 gap-6">
                <div class=" flex flex-col gap-4">
                    <div class="flex justify-between">
                        <h1 class="font-black text-2xl text-base-heavy">{{ tour.title }}</h1>
                        <button type="button" @click.prevent.stop="toggleLike(tour.productId)"
                            class="hidden md:block text-red-300  hover:text-red-500 transition-colors duration-200 ">
                            <i v-if="findLike(tour.productId)"
                                class="fa-solid fa-heart fa-xl text-red-500 cursor-pointer"></i>
                            <i v-else class="fa-regular fa-heart fa-xl cursor-pointer"></i>
                        </button>
                    </div>
                    <div class="flex gap-2">
                        <p v-for="tag in tour.tags" :key="tag"
                            class="font-thin text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ tag }}
                        </p>
                    </div>
                </div>
                <div class="md:h-[640px] h-80 overflow-hidden">
                    <img :src="`${apiBase}${tour.thumbnail}`" class="w-full h-full object-cover object-center"
                        alt="tour-detail-banner">
                </div>
                <div class="flex flex-col gap-6">
                    <div
                        class="flex md:flex-row flex-col md:gap-0 gap-4 md:justify-between justify-center items-center md:px-3 px-0 pt-3">
                        <div class="flex gap-4">
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-solid fa-user fa-2xl"></i>
                                <p class="text-sm">{{ tour.ageLimit ? `年滿 ${tour.ageLimit} 歲` : '無年齡限制' }}
                                </p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-regular fa-clock fa-2xl"></i>
                                <p class="text-sm">{{ tour.duration }}</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-solid fa-people-pulling fa-2xl"></i>
                                <p class="text-sm">最多 {{ tour.maxParticipants }} 人</p>
                            </div>
                        </div>
                        <div
                            class="flex md:flex-row flex-col justify-center items-center md:w-auto w-full md:gap-2 gap-4">
                            <p class="font-bold text-3xl text-hot-red w-full whitespace-nowrap">{{ tour.price |
                                dollarSign | currency }}～</p>
                            <div class="flex items-center md:gap-0 gap-3 w-full">
                                <button type="button" v-if="tour.status === 'active'" @click.prevent="scrollToBooking()"
                                    class="bg-hot-red text-white px-10 py-3 hover:bg-red-400 active:bg-red-700 cursor-pointer w-full">立即購票</button>
                                <button type="button" v-else class="bg-gray-400 text-gray-300 px-10 py-3 w-full"
                                    disabled>無法購買</button>
                                <button type="button" @click.prevent.stop="toggleLike(tour.productId)"
                                    class="md:hidden block text-red-300  hover:text-red-500 transition-colors duration-200 ">
                                    <i v-if="findLike(tour.productId)"
                                        class="fa-solid fa-heart fa-2x text-red-500 cursor-pointer"></i>
                                    <i v-else class="fa-regular fa-heart fa-2xl cursor-pointer"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="leading-6.5 text-base-heavy">
                        <p v-for="(text, key) in tour.notices" :key="key">・{{ text }}</p>
                    </div>
                </div>
                <div class="w-full h-px bg-gray-100"></div>
                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">行程介紹</p>
                    <table>
                        <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    交通
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    <p v-for="transport in tour.transportation" :key="transport">{{ transport }}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    語言
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    <p v-for="language in tour.languages" :key="language">{{ language }}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    集合時間
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ tour.scheduleTime }}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    導覽類型
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ tour.tourType }}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    餐食安排
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ tour.meals }}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    季節限定
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ tour.seasonal }}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    觀光類型
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    <p v-for="type in tour.tourismType" :key="type">{{ type }}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    當日衣著
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ tour.dressCode }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="max-w-[960px] flex flex-col gap-2 justify-center mx-auto leading-6.5 text-base-heavy">
                        <img v-for="img in tour.images" :key="img" :src="`${apiBase}${img}`">
                        <p>{{ tour.description }}</p>
                    </div>
                </div>
                <!-- 購買區 -->
                <div v-if="tour.status === 'active'" ref="bookingSection"
                    class="bg-gray-100 flex flex-col gap-8 md:p-14 p-6 border transition-colors duration-500 text-base-heavy"
                    :class="highlighted ? 'border-red-500' : 'border-red-500/0'">
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">預定行程</p>
                        <p class="font-bold">{{ tour.title }}</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">行程時間</p>
                        <div class="relative" :class="isError.date ? 'border border-red-500' : 'border-none'">
                            <v-date-picker v-model="date" :columns="1" :min-date="minDate" :max-date="maxDate"
                                color="red"
                                :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                :masks="{ input: 'YYYY / MM / DD' }">
                                <template #default="{ inputValue, togglePopover }">
                                    <input type="text" :value="inputValue" readonly @click="togglePopover"
                                        @focus="isError.date = false"
                                        class="border border-gray-300 bg-white px-8 py-6 w-[100%] cursor-pointer"
                                        placeholder="請選擇日期" />
                                </template>
                            </v-date-picker>
                        </div>
                        <p v-if="isError.date" class="text-xs text-red-700">{{ isError.dateErrMsg }}</p>
                        <p class="text-xs text-gray-500">* 僅可訂購7日後至6個月以內的行程。</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">選擇數量</p>
                        <div class="flex md:flex-row flex-col justify-between items-center md:gap-12 gap-4 bg-white md:px-8 py-6 text-base-heavy"
                            :class="isError.peopleCount ? 'border border-red-500' : 'border-none'">
                            <p class="text-base-heavy">每人<span class=" text-gray-400">（{{ tour.price | dollarSign
                                |
                                    currency }}
                                    / 人）</span>
                            </p>
                            <div class="flex flex-row gap-12 items-center">
                                <i @click="subCount()" @focus="isError.peopleCount = false"
                                    class="fa-solid fa-minus fa-lg hover:text-gray-400 active:text-gray-900 cursor-pointer"></i>
                                <p class="text-xl">{{ peopleCount }}</p>
                                <i @click="addCount()" @focus="isError.peopleCount = false"
                                    class="fa-solid fa-plus fa-lg hover:text-gray-400 active:text-gray-900 cursor-pointer"></i>
                            </div>
                        </div>
                        <p v-if="isError.peopleCount" class="text-xs text-red-700">{{ isError.countErrMsg }}</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">注意事項</p>
                        <p class="text-xs text-gray-500">* 訂購日開始30天內請使用完畢，逾期不可退費或變更方案。</p>
                        <p class="text-xs text-gray-500">* 預約日前48小時可免費變更或取消行程。</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">總金額</p>
                        <p class="font-bold text-xl">{{ peopleCount * tour.price | dollarSign | currency }} </p>
                    </div>
                    <button @click.prevent="createOrder()" type="button"
                        class="bg-hot-red self-end text-white px-10 py-3 hover:bg-red-400 active:bg-red-700 w-full cursor-pointer">確認購買</button>
                </div>
                <div v-else class=" bg-gray-100 flex flex-col gap-4 justify-center items-center p-14 text-base-heavy">
                    <i class="fa-solid fa-face-sad-tear fa-5x"></i>
                    <p>搜哩～！暫時無法購買！</p>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="font-bold text-xl">詳細資訊</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.346547411946!2d135.2801638467794!3d35.67273525606906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fff9f8db27f560b%3A0x8254ca426e5ee489!2z5LyK5qC56Iif5bGL!5e0!3m2!1szh-TW!2stw!4v1770299691278!5m2!1szh-TW!2stw"
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="w-full h-[480px]"></iframe>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">取消及變更之注意事項</p>
                    <table>
                        <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-30 text-center text-base-light bg-gray-100">
                                    不可抗因素
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    若因天災、政府政策、器械故障等不可抗力因素造成行程可能取消或變更。我們將會主動通知您並處理相關事宜。
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-30 text-center text-base-light bg-gray-100">
                                    取消或變更
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    出發前48小時可免費取消或變更行程，但48小時內取消或變更將收取原訂金額的100%作為手續費。
                                    <br /><span class="text-xs text-gray-400">* 以上變更或取消的請求將視情況而定，並視是否被接受而定</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-30 text-center text-base-light bg-gray-100">
                                    其他
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">若因個人原因中途離開或未依照規定時間集合而未完成行程，恕不退費。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" @click.prevent="$router.back(-1)"
                    class="inline-block self-center bg-gray-400 px-10 py-3 hover:bg-gray-300 active:bg-gray-500 text-white cursor-pointer">返回上頁</button>
            </div>
        </div>
        <div v-if="isNotFound === true" class="flex flex-col justify-center items-center w-full">
            <div class="flex flex-col items-center justify-center py-8">
                <p class="pb-2 font-bold md:text-3xl text-xl text-hot-red">查無此商品編號</p>
                <p class="text-xl text-gray-500">{{ seconds }} 秒後自動轉跳回商品頁面</p>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/api/http'
import { useOrderStore } from '@/stores/order.js';
import BaseModal from '@/components/base/BaseModal.vue';
import BaseLoading from '@/components/base/BaseLoading.vue';

export default {
    name: 'TourDetail',
    data() {
        return {
            isLoading: false,
            apiBase: process.env.VUE_APP_API_PATH,
            store: '',
            token: '',
            highlighted: false,
            date: null,
            tour: '',
            peopleCount: 1,
            isError: {
                date: false,
                dateErrMsg: '',
                peopleCount: false,
                countErrMsg: '',
            },
            isFormValid: false,
            isNotFound: false,
            seconds: 5,
            likesList: [],
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            isCatchError: false,
        }
    },
    components: {
        BaseModal,
        BaseLoading,
    },
    created() {
        this.token = localStorage.getItem('token');
        this.findProduct(this.$route.params.id);
        this.getLikes();
        this.store = useOrderStore();
    },
    methods: {
        async findProduct(id) {
            this.isLoading = true;
            try {
                const res = await http.get(`/product/tour/${id}`);
                this.tour = res.data;
            } catch (error) {
                this.isNotFound = true;
                const timer = setInterval(() => {
                    this.seconds--;
                    if (this.seconds === 0) {
                        clearInterval(timer);
                        this.$router.push('/products/tours');
                    }
                }, 1000);
            } finally {
                this.isLoading = false;
            }
        },
        async createOrder() {
            this.confirmBooking();
            if (!this.isFormValid) return;
            this.isLoading = true;
            if (!this.token) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '此功能僅限會員使用，請先登入';
                return;
            }
            try {
                await this.store.createTourOrder({
                    productId: this.$route.params.id,
                    startDate: this.date,
                    peopleCount: this.peopleCount,
                    router: this.$router,
                })
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            } finally {
                this.isLoading = false;
            }
        },
        async getLikes() {
            this.isLoading = true;
            if (!this.token) return;
            try {
                const res = await http.get(`/cart`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
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
            } finally {
                this.isLoading = false;
            }
        },
        findLike(id) {
            if (this.token) {
                return this.likesList.find(item => item.productId === id)
            }
        },
        async addToLikes(id) {
            if (!this.token) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '哇！登入才能使用收藏功能唷！';
                return;
            }
            try {
                await http.post(`/cart/items`, {
                    productId: id,
                    quantity: 1
                }, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                });
                this.getLikes();
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        async delLike(id) {
            if (!this.token) return;
            if (this.findLike(id)) {
                try {
                    await http.delete(`/cart/items`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`
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
        scrollToBooking() {
            const bookingSection = this.$refs.bookingSection;
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                this.highlighted = true;
                setTimeout(() => {
                    this.highlighted = false;
                }, 3000);
            }
        },
        addCount() {
            if (this.peopleCount >= this.tour.maxParticipants) {
                this.isError.peopleCount = true;
                this.isError.countErrMsg = `* 最多只能選擇 ${this.tour.maxParticipants} 人`;
            } else {
                this.peopleCount++;
                this.isError.peopleCount = false;
            }
        },
        subCount() {
            if (this.peopleCount <= 1) {
                this.isError.peopleCount = true;
                this.isError.countErrMsg = `* 最少需選擇 1 人`;
            } else {
                this.peopleCount--;
                this.isError.peopleCount = false;
            }
        },
        confirmBooking() {
            this.isFormValid = true;
            if (!this.date) {
                this.isError.date = true;
                this.isError.dateErrMsg = '* 請選擇日期';
                this.isFormValid = false;
            }
            if (this.peopleCount <= 0 || this.peopleCount > this.tour.maxParticipants) {
                this.isError.peopleCount = true;
                this.isError.countErrMsg = `* 人數錯誤，請選擇 1~${this.tour.maxParticipants} 人`;
                this.isFormValid = false;
            }
            if (!this.isFormValid || this.isError.peopleCount || this.isError.date) {
                return;
            }
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
        },
    },
    computed: {
        minDate() {
            const today = new Date();
            today.setDate(today.getDate() + 7);
            return today;
        },
        maxDate() {
            const maxMonth = new Date();
            maxMonth.setMonth(maxMonth.getMonth() + 6);
            return maxMonth;
        }
    },
}
</script>