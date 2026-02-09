<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">訂單</h1>
        </div>
        <div class="max-w-[80%] mx-auto flex flex-col gap-8">
            <div class="text-base-heavy">
                <div class="flex flex-row gap-4 ps-2 pb-4 items-center">
                    <i class="fa-solid fa-clipboard-list"></i>
                    <p class="font-bold text-lg text-base-heavy">訂單總覽</p>
                </div>
                <div class="flex flex-col gap-6 justify-center text-base-heavy">
                    <div v-for="(order) in orders" :key="order.id"
                        class="hover:shadow-md transition-shadow duration-200">
                        <div
                            class="bg-gray-300 flex md:flex-row flex-col justify-between md:items-center md:gap-4 gap-1 md:px-10 px-6 py-4 text-base-light">
                            <div class="flex md:flex-row flex-col justify-between md:gap-4 gap-1">
                                <p class="hidden md:block self-start bg-gray-400 text-xs text-white px-2 py-1">{{
                                    typeTranslate[order.type] }}</p>
                                <p class="w-24 ">{{ order.date }}</p>
                                <p>{{ order.id }}</p>
                                <p class="block md:hidden truncate font-bold">{{ order.title }}</p>
                            </div>
                            <button type="button"
                                class="hidden md:block bg-gray-200 px-4 py-1 text-sm text-gray-500 hover:bg-gray-100 active:bg-gray-400">查看訂單</button>
                        </div>
                        <div class="bg-white flex justify-between md:items-center md:px-10 px-6 md-py-6 py-4">
                            <div class="flex md:flex-row flex-col md:gap-4 gap-1">
                                <p class="block md:hidden self-start bg-gray-400 text-white px-2 py-1">{{
                                    typeTranslate[order.type] }}</p>
                                <p class="hidden md:block w-64 line-clamp-1 font-bold">{{ order.title }}</p>
                                <p class="w-30">{{ order.price | dollarSign | currency }}</p>
                                <p class="w-14" :class="{ 'text-hot-red': order.isPaid === false }">{{ order.isPaid ?
                                    '已付款' : '未付款' }}</p>
                                <p class="w-14" :class="{ 'text-hot-red': order.isUsed === false }">{{ order.isUsed ?
                                    '已使用' : '未使用' }}</p>
                            </div>
                            <button type="button"
                                class="inline-block self-end md:hidden bg-gray-200 md:px-4 px-6 md:py-2 py-3 md:text-xs text-base text-gray-500 hover:bg-gray-100 active:bg-gray-400">查看訂單</button>
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
    name: 'MemberOrders',
    data() {
        return {
            orders: [
                {
                    id: 123456788,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456789,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                },
                {
                    id: 123456787,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456786,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456785,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456784,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456783,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456782,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456781,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456780,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456799,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456798,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456797,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456796,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456795,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456794,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                }, {
                    id: 123456793,
                    date: ' 2026/12/25',
                    type: 'tour',
                    title: '水色之際：伊根與天橋立的一日拾光伊根',
                    price: 4866,
                    isPaid: false,
                    isUsed: false,
                },
                {
                    id: 123456792,
                    date: '2026/2/5',
                    type: 'ticket',
                    title: '高雄往返關西，極簡商務選航',
                    price: 444866,
                    isPaid: true,
                    isUsed: true,
                },
            ]
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
        }
    }
}
</script>