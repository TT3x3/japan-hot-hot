<template>
    <div>
        <div v-if="tour" class="flex flex-col gap-32w-full">
            <div class="max-w-[80%] w-full mx-auto flex flex-col md:gap-12 gap-6">
                <div class=" flex flex-col gap-4">
                    <h1 class="font-black text-2xl text-base-heavy">{{ tour.title }}</h1>
                    <div class="flex gap-2">
                        <p v-for="tag in tour.tags" :key="tag"
                            class="text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ tag }}</p>
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
                                <p class="md:text-xs text-sm">{{ tour.ageLimit ? `年滿 ${tour.ageLimit} 歲` : '無年齡限制' }}
                                </p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-regular fa-clock fa-2xl"></i>
                                <p class="md:text-xs text-sm">{{ tour.duration }}</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-solid fa-people-pulling fa-2xl"></i>
                                <p class="md:text-xs text-sm">最多 {{ tour.maxParticipants }} 人</p>
                            </div>
                        </div>
                        <div
                            class="flex md:flex-row flex-col justify-center items-center md:w-auto w-full md:gap-2 gap-4">
                            <p class="font-bold text-3xl text-hot-red">{{ tour.price | dollarSign | currency }} ～</p>
                            <button v-if="tour.status === 'active'" @click.prevent="scrollToBooking()"
                                class=" bg-hot-red text-white px-10 py-3 hover:bg-red-400 active:bg-red-700 w-full md:w-auto">立即預訂</button>
                            <button v-else class="bg-gray-400 text-gray-300 px-10 py-3 w-full" disabled>無法購買</button>

                        </div>
                    </div>
                    <div class="text-sm leading-6.5 text-base-heavy">
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
                            <p class="text-base-heavy">每人<span class="text-sm text-gray-400">（{{ tour.price | dollarSign
                                |
                                    currency }}
                                    / 人）</span>
                            </p>
                            <div class="flex flex-row gap-12 items-center">
                                <i @click="subCount()" @focus="isError.peopleCount = false"
                                    class="fa-solid fa-minus fa-lg hover:text-gray-400 active:text-gray-900"></i>
                                <p class="text-xl">{{ peopleCount }}</p>
                                <i @click="addCount()" @focus="isError.peopleCount = false"
                                    class="fa-solid fa-plus fa-lg hover:text-gray-400 active:text-gray-900"></i>
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
                    <button @click.prevent="confirmBooking()"
                        class="md:w-auto w-full bg-hot-red self-end text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">確認預約</button>
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

export default {
    name: 'TourDetail',
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            highlighted: false,
            date: null,
            tour: "",
            peopleCount: 1,
            isError: {
                date: false,
                dateErrMsg: '',
                peopleCount: false,
                countErrMsg: '',
            },
            isNotFound: false,
            seconds: 5,
        }
    },
    components: {
    },
    methods: {
        async findProduct(id) {
            try {
                const res = await http.get(`${this.apiBase}/product/tour/${id}`);
                this.tour = res.data;
            } catch (error) {
                this.isNotFound = true;
                const timer = setInterval(() => {
                    this.seconds--;
                    if (this.seconds === 0) {
                        clearInterval(timer);
                        this.$router.push('/tours');
                    }
                }, 1000);
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
            if (!this.date) {
                this.isError.date = true;
                this.isError.dateErrMsg = '* 請選擇日期';
                return;
            }
            if (this.peopleCount <= 0 || this.peopleCount > this.tour.maxParticipants) {
                this.isError.peopleCount = true;
                this.isError.countErrMsg = `* 人數錯誤，請選擇 1~${this.tour.maxParticipants} 人`;
                return;
            }
            if (this.isError.peopleCount || this.isError.date) {
                return;
            }
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
    created() {
        this.findProduct(this.$route.params.id);
    }
}
</script>