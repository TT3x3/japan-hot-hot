<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <div class=" flex flex-col gap-4">
                <h1 class="font-black text-2xl text-base-heavy">{{ detail.title }}</h1>
                <div class="flex gap-2">
                    <p class="text-sm px-2 inline-block bg-gray-400 text-white">{{ detail.airplane }}</p>
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ detail.timeType }}</p>
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">{{ detail.location }}</p>
                </div>
            </div>
            <div class="h-[720px] overflow-hidden">
                <img :src="detail.thumbnail" class="w-full h-full object-cover object-center"
                    alt="ticket-detail-banner">
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-row justify-between pl-3 pt-3">
                    <div class="flex md:gap-12 gap-4">
                        <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                            <i class="fa-solid fa-plane fa-2xl"></i>
                            <p class="text-sm">{{ detail.timeLong }}</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                            <i class="fa-solid fa-suitcase fa-2xl"></i>
                            <p class="text-sm">{{ detail.hasLuggage ? '含行李重量' : '不含行李重量' }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-4">
                        <p class="font-bold text-3xl text-hot-red">{{ detail.price | dollarSign | currency }}～</p>
                        <button @click.prevent="scrollToBooking()"
                            class="bg-hot-red text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">立即購票</button>
                    </div>
                </div>
                <div class="text-sm leading-6.5 text-base-heavy">
                    <p>・精選高雄直飛關西航線，以極簡、高效的步調開啟您的商務或探尋之旅。</p>
                    <p>・採用早去午回的優質時段，完美平衡工作行程與抵達京都後的舒緩時光。</p>
                    <p>・專為講究效率的旅人設計，減少不必要的候機繁冗，直達大和文化的中心。</p>
                </div>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl">機票介紹</p>
                <table>
                    <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">出發機場</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.departureAirport }}</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">出發時間</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.departureTime }}<br />
                                <span class="text-xs text-gray-400">*航空公司保有航班異動時間，正確航班時間請依航空公司官網公告為準</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">到達機場</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.arrivedAirport }}</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">到達時間</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.arrivedTime }}<br />
                                <span class="text-xs text-gray-400">*航空公司保有航班異動時間，正確航班時間請依航空公司官網公告為準</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">航行時長</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.timeLong }}<br />
                                <span class="text-xs text-gray-400">*以實際航行時間為準</span>
                            </td>
                        </tr>
                        <tr v-if="!detail.hasLuggage">
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">行李相關</td>
                            <td class="pl-4 py-4 text-base-heavy">不含行李重量，如有需求請額外加購<br />
                                <span class="text-xs text-gray-400">* 請留意各家航空公司對行李重量、尺寸及內容物的規定</span>
                            </td>
                        </tr>
                        <tr v-else>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">行李相關</td>
                            <td class="pl-4 py-4 text-base-heavy">隨身行李 {{ detail.luggageInfo?.carryon }}，
                                托運行李 {{ detail.luggageInfo?.checked }}<br />
                                <span class="text-xs text-gray-400">* 請留意各家航空公司對行李重量、尺寸及內容物的規定</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">提供住宿</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.stayInfo }}</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">機場接駁</td>
                            <td class="pl-4 py-4 text-base-heavy">{{ detail.connect }}</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">重要須知</td>
                            <td class="pl-4 py-4 text-base-heavy">請務必填寫與護照相同之資料並攜帶有效護照，確保護照在行程結束後至少還有6個月的有效期限。
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="max-w-[960px] flex flex-col gap-2 justify-center mx-auto leading-6.5 text-base-heavy">
                    <p class="font-black">【 航向關西 】高雄直飛：連結南國暖陽與京都之藍</p>
                    <img :src="detail.images" alt="">
                    <p>{{ detail.description }}</p>

                </div>
            </div>
            <div ref="bookingSection"
                class="bg-gray-100 flex flex-col gap-8 p-14 border transition-colors duration-500 text-base-heavy"
                :class="highlighted ? 'border-red-500' : 'border-red-500/0'">
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">購買機票</p>
                    <p class="font-bold">{{ detail.title }}</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">去回程時間</p>
                    <div class="relative border" :class="isError.date ? 'border-red-500' : 'border-none'">
                        <v-date-picker v-model="range.rangeDate" @focus.prevent="range.outOfRange = false" :columns="2"
                            :min-date="minDate" :max-date="maxDate" is-range color="red"
                            :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                            :masks="{ input: 'YYYY / MM / DD' }">
                            <template #default="{ togglePopover }">
                                <input type="text" :value="rangeText" readonly @click="togglePopover"
                                    @focus="isError.date = false"
                                    class="border border-gray-300 bg-white px-8 py-6 w-[100%] cursor-pointer"
                                    placeholder="請選擇日期" />
                            </template>
                        </v-date-picker>
                    </div>
                    <p v-if="isError.date" class="text-xs text-red-700">{{ isError.dateErrMsg }}</p>
                    <p class="text-xs text-gray-500">* 僅可訂購1個月後至6個月以內的機票。</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">選擇數量</p>
                    <div class="flex flex-row justify-between items-center gap-12 bg-white px-8 py-6 text-base-heavy"
                        :class="isError.ticketCount ? 'border border-red-500' : 'border-none'">
                        <p class="text-base-heavy">每張<span class="text-sm text-gray-400">（{{ detail.price |
                            dollarSign | currency }} / 張）</span>
                        </p>
                        <div class="flex flex-row gap-12 items-center">
                            <i class="fa-solid fa-minus fa-lg hover:text-gray-400 active:text-gray-900"
                                @click="subCount()"></i>
                            <p class="text-xl">{{ detail.ticketCount }}</p>
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
                    <p class="font-bold text-xl">{{ detail.price * detail.ticketCount | dollarSign | currency }}</p>
                </div>
                <button @click.prevent="confirmBooking()"
                    class="bg-hot-red self-end text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">確認購買</button>
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl">注意事項</p>
                <table>
                    <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">不可抗因素</td>
                            <td class="pl-4 py-4 text-base-heavy">若因天災、政府政策、器械故障等不可抗力因素造成航班可能取消或變更。我們將會主動通知您並處理相關事宜。
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">取消或變更</td>
                            <td class="pl-4 py-4 text-base-heavy">不可取消或變更，請務必確認您的行程安排後再進行預訂。如有特殊情況需要協助，請聯繫客服，我們將盡力提供協助。
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">其他</td>
                            <td class="pl-4 py-4 text-base-heavy">若因個人原因或未依照規定時間集合而錯過航班，恕不退費。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TicketDetail',
    data() {
        return {
            highlighted: false,
            range: {
                rangeDate: null,
                maxRange: 30,
                outOfRange: false,
                errorMessage: '',
            },
            date: null,
            ticketCount: 1,
            isError: {
                date: false,
                dateErrMsg: '',
                ticketCount: false,
                countErrMsg: '',
            },
            detail: {
                title: '高雄往返關西，極簡商務選航',
                airplane: '快桃航空',
                timeType: '早去午回',
                location: '高雄出發',
                departureTime: '07:30 AM',
                departureAirport: '高雄機場',
                arrivedTime: '10:30 AM',
                timeLong: '2小時45分～3小時10分',
                arrivedAirport: '關西機場',
                hasLuggage: true,
                luggageInfo: {
                    "checked": "23KG",
                    "carryon": "10KG"
                },
                price: 16888,
                stayInfo: '提供住宿，關西大飯店',
                connect: '有機場專車接駁至飯店，如欲自行前往請搭乘JR至「你給我站」',
                description: '【 航向關西 】高雄直飛：連結南國暖陽與京都之藍在高雄的日光裡啟程，飛往另一片被海環抱的淨土。這是一條專為追求純粹與效率的旅人所設計的航路，讓起飛成為一種優雅的儀式。',
                thumbnail: require('@/assets/images/tour-detail-03.jpg'),
                images: require('@/assets/images/tour-detail-02.jpg'),
                ticketCount: 1,
                maxQuantity: 10,
            },
        }
    },
    components: {
    },
    methods: {
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
        handleRange() {
            const r = this.range.rangeDate;
            if (!r?.start || !r?.end) return;
            const start = new Date(r.start)
            const end = new Date(r.end)
            const diffDays =
                Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1

            if (diffDays > this.range.maxRange) {
                this.range.errorMessage = `只能選擇最多 ${this.range.maxRange} 天`
                this.range.outOfRange = true
                this.range.rangeDate = null
            }
        },
        addCount() {
            if (this.detail.ticketCount >= this.detail.maxQuantity) {
                this.isError.ticketCount = true;
                this.isError.countErrMsg = `* 最多只能選擇 ${this.detail.maxQuantity} 張`;
            } else {
                this.detail.ticketCount++;
                this.isError.ticketCount = false;
            }
        },
        subCount() {
            if (this.detail.ticketCount <= 1) {
                this.isError.ticketCount = true;
                this.isError.countErrMsg = `* 最少需選擇 1 張`;
            } else {
                this.detail.ticketCount--;
                this.isError.ticketCount = false;
            }
        },
        confirmBooking() {
            if (!this.date) {
                this.isError.date = true;
                this.isError.dateErrMsg = '* 請選擇日期';
                return;
            }
            if (this.detail.ticketCount <= 0 || this.detail.ticketCount > this.detail.maxQuantity) {
                this.isError.ticketCount = true;
                this.isError.countErrMsg = `* 張數錯誤，請選擇 1~ ${this.detail.maxQuantity} 張`;
                return;
            }
            if (this.isError.ticketCount || this.isError.date) {
                return;
            }
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
        rangeText() {
            const r = this.range.rangeDate;
            if (!r?.start || !r?.end) return '';

            const format = (d) =>
                `${d.getFullYear()} / ${String(d.getMonth() + 1).padStart(2, '0')} / ${String(d.getDate()).padStart(2, '0')}`

            return `${format(new Date(r.start))} - ${format(new Date(r.end))}`
        },
    }
}
</script>