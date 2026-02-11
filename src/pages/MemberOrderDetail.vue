<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">訂單</h1>
        </div>
        <div class="max-w-[80%] mx-auto w-full flex flex-col gap-8">
            <div class="text-base-heavy">
                <div class="flex justify-between items-center pb-4">
                    <div class=" flex md:flex-row flex-col gap-4 md:items-center items-start justify-between w-full">
                        <div class="flex gap-4 items-center">
                            <i class="fa-solid fa-clipboard-list"></i>
                            <p class="font-bold text-lg text-base-heavy">訂單詳情</p>
                        </div>
                        <router-link to="/member/orders"
                            class="cursor-pointer bg-gray-400 text-white text-center px-10 py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">返回訂單總覽</router-link>
                    </div>
                </div>
                <div class="flex md:flex-row flex-col w-full gap-5 items-start">
                    <!-- orders -->
                    <div class="flex flex-col justify-center text-base-heavy md:w-[85%] w-full">
                        <div
                            class="bg-gray-300 flex md:flex-row flex-col md:items-center gap-2 md:px-10 px-6 md:py-6 py-4 text-sm text-base-light">
                            <p class="text-base-light">訂單編號 {{ orders.id }} </p>
                        </div>
                        <div class="bg-white flex justify-between md:items-center md:px-10 px-6 md:py-6 py-4">
                            <div class="flex flex-col md:gap-4 gap-2 w-full">
                                <img src="../assets/images/carousel-1.jpg" class="h-40 object-cover">
                                <p class="hidden md:block font-bold">
                                    {{ orders.title }}</p>
                                <p class="text-sm text-end text-base-light">{{ orders.singlePrice | dollarSign |
                                    currency }}
                                    x {{ orders.num
                                    }}</p>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">建立時間</p>
                                    <p>{{ orders.date }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">訂單類型</p>
                                    <p>{{ typeTranslate[orders.type] }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">總金額</p>
                                    <p>{{ orders.singlePrice * orders.num | dollarSign | currency }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">付款狀態</p>
                                    <p class=" text-green-700" :class="{ 'text-hot-red': orders.isPaid === false }">{{
                                        orders.isPaid ?
                                            '已付款' : '未付款' }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">出貨狀態</p>
                                    <p class=" text-green-700" :class="{ 'text-hot-red': orders.isShipped === false }">{{
                                        orders.isShipped ?
                                            '已出貨' : '未出貨' }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex gap-4 pt-4">
                            <button class="cursor-pointer bg-hot-red text-white text-center px-10 py-3 w-full  hover:bg-gray-300 active:bg-gray-500 transition-colors">點我付款</button>
                            <button class="cursor-pointer bg-gray-400 text-white text-center px-10 py-3 w-full  hover:bg-gray-300 active:bg-gray-500 transition-colors">取消訂單</button>
                        </div>
                    </div>

                    <!-- user info -->
                    <div class="flex flex-col justify-center text-base-heavy w-full">
                        <div
                            class="bg-gray-300 flex md:flex-row flex-col md:items-center gap-2 md:px-10 px-6 md:py-6 py-4 text-sm text-base-light">
                            <p class="text-base-light">購買資訊 & 收件資訊</p>
                        </div>
                        <div
                            class="bg-white flex flex-col justify-between md:items-center md:px-10 px-6 md:py-6 py-4 md:text-base text-sm">
                            <div class="flex flex-col md:gap-4 gap-2 w-full">
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">付款方式</p>
                                    <p>{{ purchaseInfo.payment }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">收件方式</p>
                                    <p>{{ purchaseInfo.receive }}</p>
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">收件人</p>
                                    <p>{{ purchaseInfo.name }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-400">聯絡電話</p>
                                    <p>{{ purchaseInfo.phone }}</p>
                                </div>
                                <div class="flex flex-col">
                                    <p class="text-gray-400">E-mail</p>
                                    <p>{{ purchaseInfo.email }}</p>
                                </div>
                                <div class="flex flex-col">
                                    <p class="text-gray-400">收件地址</p>
                                    <p>{{ purchaseInfo.address }}</p>
                                </div>
                                <div class="flex flex-col">
                                    <p class="text-gray-400">給賣家的話</p>
                                    <p>{{ purchaseInfo.note }}</p>
                                </div>
                            </div>
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
        </div>
        <div></div>

    </div>
</template>

<script>
export default {
    name: 'MemberOrderDetail',
    data() {
        return {
            orders:
            {
                id: 'AK123456788',
                date: ' 2026/12/25',
                type: 'tour',
                title: '水色之際：伊根與天橋立的一日拾光伊根水色之際：伊根與天橋立的一日拾光伊根水色之際：伊根與天橋立的一日拾光伊根',
                num: 12,
                singlePrice: 2433,
                isPaid: false,
                isShipped: false,
            },
            purchaseInfo: {
                name: '黃飛貓',
                phone: '0912345678',
                email: 'fly_dragon2000@gmail.com',
                address: '飛天市昇龍區雲海里飛龍大道999號',
                note: '請小心保護好票券，我不喜歡被折到的票券，如果折到我會退貨，最好是保護好。',
                receive: '貨到付款',
                payment: '貨到付款',
            }
        }
    },
    methods: {
    },
    computed: {
        typeTranslate() {
            return {
                tour: '行程',
                ticket: '機票',
            }
        },
    },
}
</script>