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
                <div v-if="isSuccessful === true" class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 4</p>
                        <p class="text-sm text-gray-400">完成！</p>
                    </div>
                </div>
                <div v-else class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-gray-400"></div>
                    <div class="p-1">
                        <p class="font-bold text-gray-400">Step 4</p>
                        <p class="text-sm text-gray-400">失敗Q_Q</p>
                    </div>
                </div>
            </div>
            <div v-if="isSuccessful === true" class="flex flex-col justify-center items-center w-full">
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
            <div v-else class="flex flex-col justify-center items-center w-full">
                <div class="flex flex-col items-center py-8">
                    <i class="fa-solid fa-heart-crack fa-8x text-gray-500"></i>
                    <div class="flex justify-center flex-col items-center">
                        <p class="pt-8 pb-2 font-bold md:text-3xl text-xl text-gray-500">挖咧，訂購失敗</p>
                        <p class="text-gray-400 pb-8">請洽管理員或稍後嘗試重新訂購。</p>
                    </div>
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
            isSuccessful: true,
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