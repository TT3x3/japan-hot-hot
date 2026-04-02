<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <!-- 進度條 -->
            <CheckoutStepBar :step-num="4" />

            <div v-if="isSuccessful === true" class="flex flex-col justify-center items-center w-full">
                <div class="flex flex-col items-center md:py-20 py-8">
                    <i class="fa-solid fa-circle-check fa-7x text-hot-red"></i>
                    <p class="py-8 font-extrabold md:text-3xl text-xl text-hot-red">訂購完成！</p>
                </div>
                <div class="flex md:flex-row flex-col gap-4 md:w-[70%] w-full">
                    <BaseRouterLink class="flex-1" go-to-path="/" button-name="繼續尋寶" is-red />
                    <BaseRouterLink class="flex-1" go-to-path="/member/orders" button-name="查看訂單" :is-red="false" />
                </div>
            </div>
            <div v-else class="flex flex-col justify-center items-center w-full">
                <div class="flex flex-col items-center md:py-20 py-8">
                    <i class="fa-solid fa-heart-crack fa-7x text-gray-500"></i>
                    <div class="flex justify-center flex-col items-center">
                        <p class="pt-8 pb-2 font-extrabold md:text-3xl text-xl text-gray-500">挖咧，訂購失敗</p>
                        <p class="text-gray-400 pb-8">請洽管理員或稍後嘗試重新訂購。</p>
                    </div>
                </div>
                <div class="flex md:flex-row flex-col gap-4 md:w-[70%] w-full">
                    <BaseRouterLink class="flex-1" go-to-path="/" button-name="繼續尋寶" is-red />
                    <BaseRouterLink class="flex-1" go-to-path="/member/orders" button-name="查看訂單" :is-red="false" />
                </div>
            </div>

            <div></div>
        </div>
    </div>
</template>

<script>
import CheckoutStepBar from '@/components/ui/CheckoutStepBar.vue'
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';

export default {
    name: 'CheckoutFinished',
    data() {
        return {
            isSuccessful: true,
        }
    },
    components: {
        CheckoutStepBar,
        BaseRouterLink,
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