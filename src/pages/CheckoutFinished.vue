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
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 4</p>
                        <p class="text-sm text-gray-400">完成！</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center w-full">

                <div class="flex flex-col items-center py-8">
                    <img src="../assets/images/logo-pic.png" alt="" class="md:w-[50%] w-[60px] h-full">
                    <p class="py-8 font-bold md:text-3xl text-xl text-hot-red">訂購完成！</p>
                </div>
                <div class="flex md:flex-row flex-col gap-4 md:w-[70%] w-full">
                    <button
                        class="bg-hot-red hover:bg-red-500 active:bg-red-700 md:px-10 px-4 py-3 w-full font-bold text-center text-white">查看訂單</button>
                    <button
                        class=" border border-hot-red hover:bg-red-100 active:bg-red-300 md:px-10 px-4 py-3 w-full font-bold text-center text-hot-red">繼續尋寶</button>
                </div>
            </div>

            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutFinished',
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