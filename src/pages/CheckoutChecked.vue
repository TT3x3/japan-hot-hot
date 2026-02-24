<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <!-- 進度條 -->
            <div class=" flex flex-row md:gap-4 gap-1">
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 1</p>
                        <p class="text-sm text-base-light">結帳</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 2</p>
                        <p class="text-sm text-gray-400">填寫護照</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 3</p>
                        <p class="text-sm text-gray-400">訂單確認</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-gray-400"></div>
                    <div class="p-1">
                        <p class="font-bold text-gray-400">Step 4</p>
                        <p class="text-sm text-gray-400">完成！</p>
                    </div>
                </div>
            </div>

            <!-- 購買資訊 -->
            <div class="flex flex-col gap-2">
                <p class="font-bold text-xl text-base-heavy">確認訂單內容</p>
                <div class="bg-gray-100">
                    <div class=" md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">方案名稱</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">高雄往返關西，極簡商務選航</p>
                    </div>
                    <div class="flex flex-row">
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-base-light">出發日期</p>
                            <p class="font-bold md:text-xl text-md text-base-heavy">2026/12/25</p>
                        </div>
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-base-light">出發時間</p>
                            <p class="font-bold md:text-xl text-md text-base-heavy">07:30 AM</p>
                        </div>
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-base-light">購買數量</p>
                            <p class="font-bold md:text-xl text-md text-base-heavy">3 <span class="text-sm">人</span></p>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-base-light">回程日期</p>
                            <p class="font-bold md:text-xl text-md text-base-heavy">2026/12/30</p>
                        </div>
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-base-light">回程時間</p>
                            <p class="font-bold md:text-xl text-md text-base-heavy">06:30 PM</p>
                        </div>
                        <div class=" md:px-8 px-2 py-4 w-full">
                            <p class="text-sm text-base-light">購買天數</p>
                            <p class="font-bold md:text-xl text-md text-base-heavy">5 <span class="text-sm">天</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 資訊欄 -->
            <div class="flex md:flex-row flex-col justify-between gap-4 text-base-heavy">
                <div class="flex flex-col gap-2 md:w-[150%] w-full">
                    <p class="font-bold text-xl ">收件資訊</p>
                    <div class="flex flex-col gap-4 border border-gray-100 px-6 md:py-6 py-4">
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">姓名</p>
                                <p>{{ userInfo.name }}</p>
                            </div>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">Email</p>
                                <p>{{ userInfo.email }}</p>
                            </div>

                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">聯絡電話</p>
                                <p>{{ userInfo.phone }}</p>
                            </div>

                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-2 px-4">
                            <div class="flex md:flex-row flex-col w-full items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">地址</p>
                                <p>{{ userInfo.address }}</p>
                            </div>

                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full items-start">
                                <p class="w-24 font-bold text-base-light md:text-base text-sm">備註</p>
                                <p>{{ userInfo.note }}</p>
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
                        <p>{{ typeTranslate[userInfo.payment] }}</p>
                    </div>
                    <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                        <p class="w-24 font-bold text-base-light md:text-base text-sm">總金額</p>
                        <p class="font-bold text-xl text-hot-red">{{ userInfo.totalPrice | dollarSign | currency }}</p>
                    </div>
                </div>
            </div>

            <!-- 護照資訊 -->
            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl text-base-heavy">護照資料</p>
                <div v-for="passport in passportInfo" :key="passport.idCard" class="flex flex-row gap-2">
                    <div class="flex flex-col gap-1 bg-gray-100 px-8 py-4 w-full">
                        <div class="flex items-center gap-1">
                            <p class="w-24 font-bold text-base-light md:text-base text-sm">姓氏</p>
                            <p class="font-bold text-base-heavy">{{ passport.firstName }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <p class="w-24 font-bold text-base-light md:text-base text-sm">名稱</p>
                            <p class="font-bold text-base-heavy">{{ passport.secondName }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <p class="w-24 font-bold text-base-light md:text-base text-sm">身分證字號</p>
                            <p class="font-bold text-base-heavy">{{ passport.idCard }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <p class="w-24 font-bold text-base-light md:text-base text-sm">護照號碼</p>
                            <p class="font-bold text-base-heavy">{{ passport.passportCode }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <p class="w-24 font-bold text-base-light md:text-base text-sm">護照到期日</p>
                            <p class="font-bold text-base-heavy">{{ passport.exp }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-row gap-4">
                <button @click.prevent="submitBtn()"
                    class="bg-hot-red hover:bg-red-500 active:bg-red-700 px-10 py-3 w-full font-bold text-center text-white">確認</button>
                <button
                    class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 px-10 py-3 w-full text-center text-white">返回</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutChecked',
    data() {
        return {
            selectCity: null,
            selectArea: null,
            date: null,
            userInfo: {
                name: '黃飛貓',
                email: 'fly_dragon2000@gmail.com',
                phone: '0912345678',
                address: '飛天市昇龍區雲海里飛龍大道999號',
                note: '趕快出貨',
                payment: 'cash',
                totalPrice: '280000'

            },
            passportInfo: [
                {
                    firstName: 'HUANG',
                    secondName: 'FEI-MAO',
                    idCard: 'A123456789',
                    passportCode: '888800123',
                    exp: '2028-2-30',
                },
                {
                    firstName: 'LEE',
                    secondName: 'CHEN',
                    idCard: 'Y123450071',
                    passportCode: '888800666',
                    exp: '2028-2-30',
                },
                {
                    firstName: 'WANG',
                    secondName: 'WU-WU',
                    idCard: 'Q123456710',
                    passportCode: '887790909',
                    exp: '2028-2-30',
                }
            ]
        }
    },
    computed: {
        typeTranslate() {
            return {
                cash: '現金',
            }
        },
    },
}
</script>