<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <div class=" flex flex-col gap-4">
                <h1 class="font-black text-2xl text-base-heavy">高雄往返關西，極簡商務選航</h1>
                <div class="flex gap-2">
                    <p class="text-sm px-2 inline-block bg-gray-400 text-white">快桃航空</p>
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">早去午回</p>
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">高雄出發</p>
                </div>
            </div>
            <div class="h-[720px] overflow-hidden">
                <img src="../assets/images/carousel-4.jpg" class="w-full h-full object-cover object-center"
                    alt="ticket-detail-banner">
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-row justify-between pl-3 pt-3">
                    <div class="flex md:gap-12 gap-4">
                        <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                            <i class="fa-solid fa-plane fa-2xl"></i>
                            <p class="text-sm">2小時45分～3小時10分</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-6 text-gray-400">
                            <i class="fa-solid fa-suitcase fa-2xl"></i>
                            <p class="text-sm">不含行李重量</p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-4">
                        <p class="font-bold text-3xl text-hot-red">$1,688～</p>
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
                            <td class="pl-4 py-4 text-base-heavy">高雄機場</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">出發時間</td>
                            <td class="pl-4 py-4 text-base-heavy">07:30AM<br />
                                <span class="text-xs text-gray-400">*航空公司保有航班異動時間，正確航班時間請依航空公司官網公告為準</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">到達機場</td>
                            <td class="pl-4 py-4  text-base-heavy">關西機場</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">航行時長</td>
                            <td class="pl-4 py-4 text-base-heavy">約2小時45分～3小時10分<br />
                                <span class="text-xs text-gray-400">*以實際航行時間為準</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">行李重量</td>
                            <td class="pl-4 py-4 text-base-heavy">不含行李重量，需額外加購</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">提供住宿</td>
                            <td class="pl-4 py-4 text-base-heavy">提供住宿，關西大飯店</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">機場接駁</td>
                            <td class="pl-4 py-4 text-base-heavy">有機場專車接駁至飯店，如欲自行前往請搭乘JR至「你給我站」</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">護照相關</td>
                            <td class="pl-4 py-4 text-base-heavy">請務必填寫與護照相同之資料並攜帶有效護照，確保護照在行程結束後至少還有6個月的有效期限。
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="max-w-[960px] flex flex-col gap-2 justify-center mx-auto leading-6.5 text-base-heavy">
                    <p class="font-black">【 航向關西 】高雄直飛：連結南國暖陽與京都之藍</p>
                    <img src="../assets/images/tour-detail-01.jpg" alt="">
                    <p>在高雄的日光裡啟程，飛往另一片被海環抱的淨土。這是一條專為追求純粹與效率的旅人所設計的航路，讓起飛成為一種優雅的儀式。</p>
                    <br />
                    <p class="font-black">南國直達，商務嚴選</p>
                    <img src="../assets/images/tour-detail-02.jpg" alt="">
                    <p>專屬高雄出發的直飛班次，省去北上的奔波，讓旅行的起點回歸自家門口的便利與自在。<br />
                        採用「早去午回」的時段配置，精準切換生活場域，讓您在抵達關西的第一時間，便能從容步入京都的街道。</p><br />
                </div>
            </div>
            <div ref="bookingSection"
                class="bg-gray-100 flex flex-col gap-8 p-14 border transition-colors duration-500 text-base-heavy"
                :class="highlighted ? 'border-red-500' : 'border-red-500/0'">
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">購買機票</p>
                    <p class="font-bold">高雄往返關西，極簡商務選航</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">去回程時間</p>
                    <div class="relative border" :class="range.outOfRange ? 'border-red-500' : 'border-none'">
                        <v-date-picker v-model="range.rangeDate" @focus.prevent="range.outOfRange = false" :columns="2"
                            :min-date="minDate" :max-date="maxDate" is-range color="red" 
                            :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                            :masks="{ input: 'YYYY / MM / DD' }">
                            <template #default="{ togglePopover }">
                                <input type="text" :value="rangeText" readonly @click="togglePopover"
                                    class="border border-gray-300 bg-white px-8 py-6 w-[100%] cursor-pointer"
                                    placeholder="請選擇日期" />
                            </template>
                        </v-date-picker>
                    </div>
                    <p v-if="range.outOfRange" class="text-xs text-red-700">{{ range.errorMessage }}</p>
                    <p class="text-xs text-gray-500">* 僅可訂購1個月後至6個月以內的機票。</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">選擇數量</p>
                    <div class="flex flex-row justify-between items-center gap-12 bg-white px-8 py-6 text-base-heavy">
                        <p class="text-base-heavy">每人<span class="text-sm text-gray-400">（NT$ 16,888/人）</span></p>
                        <div class="flex flex-row gap-12 items-center">
                            <i class="fa-solid fa-minus fa-lg hover:text-gray-400 active:text-gray-900"></i>
                            <p class="text-xl">2</p>
                            <i class="fa-solid fa-plus fa-lg hover:text-gray-400 active:text-gray-900"></i>

                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">注意事項</p>
                    <p class="text-xs text-gray-500">* 請留意去程及回程日期，逾期不可退費或變更方案。</p>
                    <p class="text-xs text-gray-500">* 取消或變更機票將收取100%費用。</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">總金額</p>
                    <p class="font-bold text-xl">$16,888</p>
                </div>
                <button
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
            }
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
        }
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