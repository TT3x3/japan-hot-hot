<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <div class=" flex flex-col gap-4">
                <h1 class="font-black text-2xl text-base-heavy">水色之際：伊根與天橋立的一日拾光</h1>
                <div class="flex gap-2">
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">半日遊</p>
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">大阪京都</p>
                </div>
            </div>
            <div class="h-[500px] overflow-hidden">
                <img src="../assets/images/carousel-1.jpg" class="w-full h-full object-cover object-bottom"
                    alt="tour-detail-banner">
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-row justify-between pl-3 pt-2">
                    <div class="flex md:gap-12 gap-4">
                        <div class="flex flex-col justify-center items-center gap-4 text-gray-400">
                            <i class="fa-solid fa-user fa-2xl"></i>
                            <p class="text-sm">無年齡限制</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-4 text-gray-400">
                            <i class="fa-regular fa-clock fa-2xl"></i>
                            <p class="text-sm">120～240分鐘</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-4 text-gray-400">
                            <i class="fa-solid fa-people-pulling fa-2xl"></i>
                            <p class="text-sm">1～4人</p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-4">
                        <p class="font-bold text-3xl text-hot-red">$1,688～</p>
                        <button @click.prevent="scrollToBooking()"
                            class="bg-hot-red text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">立即預訂</button>
                    </div>
                </div>
                <div class="text-sm leading-6.5 text-base-heavy">
                    <p>・漫步於天橋立的神祕沙洲，親身體驗日本三景之一的壯闊景致。</p>
                    <p>・搭乘觀光船進入伊根灣，從海上視角近距離感受 230 棟舟屋構成的寧靜聚落。</p>
                    <p>・冬季限定的出初式與噴水慶典，在冷冽空氣中捕捉最純粹的漁村祝禱。</p>
                    <p>・無論春夏秋冬，都有他們獨特的風景。</p>
                </div>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl">行程介紹</p>
                <table>
                    <tbody class="border border-gray-200 divide-y divide-gray-200 text-sm">
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">交通</td>
                            <td class="pl-4 py-4 text-base-heavy">接駁巴士、輪船</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">語言</td>
                            <td class="pl-4 py-4  text-base-heavy">日語、簡單英文會話</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">集合時間</td>
                            <td class="pl-4 py-4 text-base-heavy">07:30AM</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">導覽類型</td>
                            <td class="pl-4 py-4 text-base-heavy">私人導覽</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">餐食安排</td>
                            <td class="pl-4 py-4 text-base-heavy">無</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">季節限定</td>
                            <td class="pl-4 py-4 text-base-heavy">伊根冬季限定的出初式與噴水慶典</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">觀光類型</td>
                            <td class="pl-4 py-4 text-base-heavy">文化歷史、自然風光</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">當日衣著</td>
                            <td class="pl-4 py-4 text-base-heavy">輕便為主，冬日請攜帶禦寒衣物</td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-base-heavy leading-6.5 flex flex-col gap-2">
                    <p class="font-black">【 海之京都 】天橋立與伊根：被時光溫柔留下的藍</p>
                    <div class="w-full">
                        <img src="../assets/images/tour-detail-01.jpg" alt="" class="w-[70%]">
                    </div>
                    <p>在京都往北的盡頭，行政區劃的邊界逐漸模糊，取而代之的是一片深邃而沈靜的「丹後之藍」。這裡沒有古都熱鬧的祇園祭，也沒有堆疊的紅柱金瓦，只有純粹的風、長青的松，以及與海共生百年的木造建築。</p><br />
                    <p class="font-black">1.天橋立：橫跨海天的綠色絲帶</p>
                    <div class="w-full">
                        <img src="../assets/images/tour-detail-02.jpg" alt="" class="w-[70%]">
                    </div>
                    <p>天橋立不僅是「日本三景」之一，更像是一件大自然隨手揮灑的藝術品。這條全長約 3.6 公里 的沙洲，在宮津灣中劃出一道優雅的弧線。<br />
                        天鏡之美：當你登上傘松公園，嘗試日本傳承百年的「股のぞき（倒著看）」，原本平臥海上的沙洲將化作一條直衝雲霄的青龍，連結著人間與彼岸的雲端。</p><br />
                    <p class="font-black">2.伊根舟屋：海上漂浮的極簡生活</p>
                    <div class="w-full">
                        <img src="../assets/images/tour-detail-03.jpg" alt="" class="w-[70%]">
                    </div>
                    <p>白砂青松的禪意：八千棵松樹在海風中挺拔，一側是湛藍的宮津灣，另一側是波光粼粼的阿蘇海。漫步其中，除了松針落地的聲響，剩下的只有遠處海浪拍打沙灘的規律脈動。</p><br />
                    <div class="w-full">
                        <img src="../assets/images/tour-detail-04.jpg" alt="" class="w-[70%]">
                    </div>
                    <p>若天橋立是壯闊的景致，伊根則是溫潤的生活。這座被群山環抱的小漁村，沿著海灣構築了 230 棟 獨特的「舟屋」。<br />
                        與海共生的建築哲學：舟屋的一樓是讓船舶棲息的港口與整理漁網的工作場，二樓則是日常起居。這種建築消弭了陸地與海洋的邊界，讓屋主一睜眼，看見的就是海水的起伏。</p><br />
                    <div class="w-full">
                        <img src="../assets/images/tour-detail-05.jpg" alt="" class="w-[70%]">
                    </div>
                    <p>寂靜的藍調：這裡的海水幾乎沒有浪花，平靜得像是一面深藍色的鏡子。墨褐色的木造牆面與海面的倒影交織出一種「侘寂」（Wabi-sabi）的美感。在伊根，時間的流速被刻意調慢了，甚至能聽見水流鑽進舟屋下方的迴響。
                    </p>
                </div>
            </div>
            <div ref="bookingSection"
                class="bg-gray-100 flex flex-col gap-8 p-14 border transition-colors duration-500 text-base-heavy"
                :class="highlighted ? 'border-red-500' : 'border-red-500/0'">
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">預定行程</p>
                    <p class="font-bold">水色之際：伊根與天橋立的一日拾光</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">行程時間</p>
                    <div class="relative">
                        <v-date-picker v-model="date" :columns="2" :min-date="minDate" :max-date="maxDate" color="red"
                            :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                            :masks="{ input: 'YYYY / MM / DD' }">
                            <template #default="{ inputValue, togglePopover }">
                                <input type="text" :value="inputValue" readonly @click="togglePopover"
                                    class="border border-gray-300 bg-white px-8 py-6 w-[100%] cursor-pointer"
                                    placeholder="請選擇日期" />
                            </template>
                        </v-date-picker>
                    </div>
                    <p class="text-xs text-gray-500">* 僅可訂購7日後至6個月以內的行程。</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">選擇數量</p>
                    <div class="flex flex-row justify-between items-center gap-12 bg-white px-8 py-6 text-base-heavy">
                        <p class="text-base-heavy">每人<span class="text-sm text-gray-400">（NT$ 789/人）</span></p>
                        <div class="flex flex-row gap-12 items-center">
                            <i class="fa-solid fa-minus fa-lg hover:text-gray-400 active:text-gray-900"></i>
                            <p class="text-xl">3</p>
                            <i class="fa-solid fa-plus fa-lg hover:text-gray-400 active:text-gray-900"></i>

                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">注意事項</p>
                    <p class="text-xs text-gray-500">* 訂購日開始30天內請使用完畢，逾期不可退費或變更方案。</p>
                    <p class="text-xs text-gray-500">* 預約日前48小時可免費變更或取消行程。</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">總金額</p>
                    <p class="font-bold text-xl">$2,064</p>
                </div>
                <button
                    class="bg-hot-red self-end text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">確認預約</button>
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
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">不可抗因素</td>
                            <td class="pl-4 py-4 text-base-heavy">若因天災、政府政策、器械故障等不可抗力因素造成行程可能取消或變更。我們將會主動通知您並處理相關事宜。
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">取消或變更</td>
                            <td class="pl-4 py-4 text-base-heavy">出發前48小時可免費取消或變更行程，但48小時內取消或變更將收取原訂金額的100%作為手續費。
                                <br /><span class="text-xs text-gray-400">* 以上變更或取消的請求將視情況而定，並視是否被接受而定</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 table-fixed w-36 text-base-light bg-gray-100">其他</td>
                            <td class="pl-4 py-4 text-base-heavy">若因個人原因中途離開或未依照規定時間集合而未完成行程，恕不退費。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TourDetail',
    data() {
        return {
            highlighted: false,
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
        }
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
    }
}
</script>