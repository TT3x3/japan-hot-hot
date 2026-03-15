<template>
    <div>
        <div v-if="ticket" class="flex flex-col gap-32 w-full">
            <div class="max-w-[80%] w-full mx-auto flex flex-col md:gap-12 gap-6">
                <div class=" flex flex-col gap-4">
                    <h1 class="font-black text-2xl text-base-heavy">{{ ticket.title }}</h1>
                    <div class="flex gap-2">
                        <p class="text-sm px-2 inline-block bg-gray-400 text-white">{{ ticket.airline }}</p>
                        <p v-for="tag in ticket.tags" :key="tag"
                            class="text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ tag }}</p>
                    </div>
                </div>
                <div class="md:h-[640px] h-80 overflow-hidden">
                    <img :src="`${apiBase}${ticket.thumbnail}`" class="w-full h-full object-cover object-center"
                        alt="ticket-detail-banner">
                </div>
                <div class="flex flex-col gap-6">
                    <div
                        class="flex md:flex-row flex-col md:gap-0 gap-4 md:justify-between justify-center items-center px-3 pt-3">
                        <div class="flex gap-4">
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-solid fa-plane fa-2xl"></i>
                                <p class="text-sm">{{ ticket.flightDuration }}</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                                <i class="fa-solid fa-suitcase fa-2xl"></i>
                                <p class="text-sm">{{ ticket.baggage ? '含行李重量' : '不含行李重量' }}</p>
                            </div>
                        </div>
                        <div
                            class="flex md:flex-row flex-col justify-center items-center md:w-auto w-full md:gap-2 gap-4">
                            <p class="font-bold text-3xl text-hot-red">{{ ticket.price | dollarSign | currency }}～</p>
                            <button v-if="ticket.status === 'active'" @click.prevent="scrollToBooking()"
                                class="bg-hot-red text-white px-10 py-3 hover:bg-red-400 active:bg-red-700 w-full md:w-auto">立即購票</button>
                            <button v-else class="bg-gray-400 text-gray-300 px-10 py-3 w-full" disabled>無法購買</button>
                        </div>
                    </div>
                    <div class="text-sm leading-6.5 text-base-heavy">
                        <p v-for="(text, index) in ticket.notices" :key="index">・{{ text }}</p>
                    </div>
                </div>
                <div class="w-full h-px bg-gray-100"></div>
                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">機票介紹</p>
                    <table>
                        <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    旅程天數
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.fixedDays }} 日</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    出發機場
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.departure.airportName }}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    出發時間
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.departure.time }}<br />
                                    <span class="text-xs text-gray-400">*航空公司保有航班異動時間，正確航班時間請依航空公司官網公告為準</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    到達機場
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.arrival.airportName }}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    到達時間
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.arrival.time }}<br />
                                    <span class="text-xs text-gray-400">*航空公司保有航班異動時間，正確航班時間請依航空公司官網公告為準</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    航行時長
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.flightDuration }}<br />
                                    <span class="text-xs text-gray-400">*以實際航行時間為準</span>
                                </td>
                            </tr>
                            <tr v-if="!ticket.baggage">
                                <td
                                    class="px-6 md:py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    行李相關</td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">不含行李重量，如有需求請額外加購<br />
                                    <span class="text-xs text-gray-400">* 請留意各家航空公司對行李重量、尺寸及內容物的規定</span>
                                </td>
                            </tr>
                            <tr v-else>
                                <td
                                    class="px-6 md:py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    行李相關</td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">隨身行李 {{ ticket.baggage &&
                                    ticket.baggage.carryon }}，
                                    托運行李 {{ ticket.baggage && ticket.baggage.checked }}<br />
                                    <span class="text-xs text-gray-400">* 請留意各家航空公司對行李重量、尺寸及內容物的規定</span>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="px-6 md:py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    提供住宿</td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.accommodation }}</td>
                            </tr>
                            <tr>
                                <td
                                    class="px-6 md:py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    機場接駁</td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">{{ ticket.airportTransfer }}</td>
                            </tr>
                            <tr>
                                <td
                                    class="px-6 md:py-4 table-fixed md:w-36 w-28 text-center text-base-light bg-gray-100">
                                    重要須知</td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    請務必填寫與護照相同之資料並攜帶有效護照，確保護照在行程結束後至少還有6個月的有效期限。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="max-w-[960px] flex flex-col gap-2 justify-center mx-auto leading-6.5 text-base-heavy">
                        <img v-for="img in ticket.images" :key="img" :src="`${apiBase}${img}`" alt="">
                        <p>{{ ticket.description }}</p>
                    </div>
                </div>

                <!-- 購買區 -->
                <div v-if="ticket.status === 'active'" ref="bookingSection"
                    class="bg-gray-100 flex flex-col gap-8 md:p-14 p-6 border transition-colors duration-500 text-base-heavy"
                    :class="highlighted ? 'border-red-500' : 'border-red-500/0'">
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">購買機票</p>
                        <p class="font-bold">{{ ticket.title }}</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">旅途天數</p>
                        <div
                            class="flex md:flex-row flex-col justify-between items-center md:gap-12 gap-4 bg-white md:px-8 py-6 text-base-heavy">
                            <p class="font-bold text-base-heavy">{{ ticket.fixedDays }} 日</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">去程日期</p>
                        <div class="relative border" :class="isError.date ? 'border-red-500' : 'border-none'">
                            <v-date-picker v-model="date" :columns="1" :min-date="minDate" :max-date="maxDate"
                                color="red"
                                :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                :masks="{ input: 'YYYY / MM / DD' }">
                                <template #default="{ inputValue, togglePopover }">
                                    <input type="text" :value="inputValue" readonly @click="togglePopover"
                                        @focus="isError.date = false"
                                        class="md:text-start text-center border border-gray-300 bg-white px-8 py-6 w-[100%] cursor-pointer"
                                        placeholder="請選擇日期" />
                                </template>
                            </v-date-picker>
                        </div>
                        <p v-if="isError.date" class="text-xs text-red-700">{{ isError.dateErrMsg }}</p>
                        <p class="text-xs text-gray-500">* 僅可訂購1個月後至6個月以內的機票。</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">回程日期</p>
                        <div
                            class="flex md:flex-row flex-col justify-between items-center md:gap-12 gap-4 bg-white md:px-8 px-2 py-6 text-base-heavy">
                            <div v-if="!date" class="flex flex-col">
                                <p class="md:text-start text-center font-bold text-hot-red">尚未選擇去程日期</p>
                                <span class="md:text-sm text-xs text-gray-400">*選擇去程日期後系統將自動計算回程日期。</span>
                            </div>
                            <p v-if="returnDate" class="font-bold text-base-heavy">{{ returnDate }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">選擇數量</p>
                        <div class="flex md:flex-row flex-col justify-between items-center md:gap-12 gap-4 bg-white md:px-8 py-6 text-base-heavy"
                            :class="isError.ticketCount ? 'border border-red-500' : 'border-none'">
                            <p class="text-base-heavy">每張<span class="text-sm text-gray-400">（{{ ticket.price |
                                dollarSign | currency }} / 張）</span>
                            </p>
                            <div class="flex flex-row gap-12 items-center">
                                <i class="fa-solid fa-minus fa-lg hover:text-gray-400 active:text-gray-900"
                                    @click="subCount()"></i>
                                <p class="text-xl">{{ ticketCount }}</p>
                                <i class="fa-solid fa-plus fa-lg hover:text-gray-400 active:text-gray-900"
                                    @click="addCount()"></i>
                            </div>
                        </div>
                        <p v-if="isError.ticketCount" class="text-xs text-red-700">{{ isError.countErrMsg }}</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">注意事項</p>
                        <p class="text-xs text-gray-500">* 請留意去程及回程日期，逾期不可退費或變更方案。</p>
                        <p class="text-xs text-gray-500">* 取消或變更機票將收取100%費用。</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-500">總金額</p>
                        <p class="font-bold text-xl">{{ ticket.price * ticketCount | dollarSign | currency }}</p>
                    </div>
                    <button @click.prevent="createOrder()"
                        class="bg-hot-red self-end text-white px-10 py-3 hover:bg-red-400 active:bg-red-700 w-full">確認購買</button>
                </div>
                <div v-else class=" bg-gray-100 flex flex-col gap-4 justify-center items-center p-14 text-base-heavy">
                    <i class="fa-solid fa-face-sad-tear fa-5x"></i>
                    <p>搜哩～！暫時無法購買！</p>
                </div>

                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">注意事項</p>
                    <table>
                        <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-30 text-center text-base-light bg-gray-100">
                                    不可抗因素
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    若因天災、政府政策、器械故障等不可抗力因素造成航班可能取消或變更。我們將會主動通知您並處理相關事宜。
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-30 text-center text-base-light bg-gray-100">
                                    取消或變更
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">
                                    不可取消或變更，請務必確認您的行程安排後再進行預訂。如有特殊情況需要協助，請聯繫客服，我們將盡力提供協助。
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 table-fixed md:w-36 w-30 text-center text-base-light bg-gray-100">
                                    其他
                                </td>
                                <td class="md:px-4 px-2 py-4 text-base-heavy">若因個人原因或未依照規定時間集合而錯過航班，恕不退費。</td>
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
import { useOrderStore } from '@/stores/order';

export default {
    name: 'TicketDetail',
    data() {
        return {
            store: useOrderStore(),
            apiBase: process.env.VUE_APP_API_PATH,
            ticket: "",
            highlighted: false,
            range: {
                rangeDate: null,
                maxRange: 30,
                outOfRange: false,
                errorMessage: '',
            },
            date: '',
            returnDate: '',
            ticketCount: 1,
            isError: {
                date: false,
                dateErrMsg: '',
                ticketCount: false,
                countErrMsg: '',
            },
            isFormValid: false,
            isNotFound: false,
            seconds: 5,
        }
    },
    methods: {
        async findProduct(id) {
            try {
                const res = await http.get(`${this.apiBase}/product/flight/${id}`);
                this.ticket = res.data;
            } catch (error) {
                this.isNotFound = true;
                const timer = setInterval(() => {
                    this.seconds--;
                    if (this.seconds === 0) {
                        clearInterval(timer);
                        this.$router.push('/tickets');
                    }
                }, 1000);
            }
        },
        async createOrder() {
            this.confirmBooking();
            if (!this.isFormValid) return;
            await this.store.createOrder({
                productId: this.$route.params.id,
                startDate: new Date(this.date).toISOString().split("T")[0],
                endDate: new Date(this.returnDate).toISOString().split("T")[0],
                peopleCount: this.ticketCount,
                apiBase: this.apiBase,
                router: this.$router,
            })
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
            if (this.ticketCount >= this.ticket.stock) {
                this.isError.ticketCount = true;
                this.isError.countErrMsg = `* 最多只能選擇 ${this.ticket.stock} 張`;
            } else {
                this.ticketCount++;
                this.isError.ticketCount = false;
            }
        },
        subCount() {
            if (this.ticketCount < 1) {
                this.isError.ticketCount = true;
                this.isError.countErrMsg = `* 最少需選擇 1 張`;
            } else {
                this.ticketCount--;
                this.isError.ticketCount = false;
            }
        },
        confirmBooking() {
            this.isFormValid = true;
            if (!this.date) {
                this.isError.date = true;
                this.isError.dateErrMsg = '* 請選擇日期';
                this.isFormValid = false;
            }
            if (this.ticket.ticketCount <= 0 || this.ticket.ticketCount > this.ticket.stock) {
                this.isError.ticketCount = true;
                this.isError.countErrMsg = `* 張數錯誤，請選擇 1~ ${this.ticket.stock} 張`;
                this.isFormValid = false;
            }
            if (!this.isFormValid) return;
        },
    },
    computed: {
        minDate() {
            const today = new Date();
            today.setMonth(today.getMonth() + 1);
            return today;
        },
        maxDate() {
            const maxMonth = new Date();
            maxMonth.setMonth(maxMonth.getMonth() + 6);
            return maxMonth;
        },
    },
    created() {
        this.findProduct(this.$route.params.id);
    },
    watch: {
        date(newDate) {
            // console.log(new Date(newDate).toISOString().split('T')[0]);
            if (!newDate) {
                this.returnDate = '';
                return;
            }
            const returnDate = new Date(newDate);
            returnDate.setDate(returnDate.getDate() + 7);

            const year = returnDate.getFullYear();
            const month = String(returnDate.getMonth() + 1).padStart(2, '0');
            const day = String(returnDate.getDate()).padStart(2, '0');
            this.returnDate = `${year} / ${month} / ${day}`;
        },
    }
}
</script>