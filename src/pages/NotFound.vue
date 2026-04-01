<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col">
            <div class="flex flex-col justify-center items-center w-full">
                <div class="flex flex-col gap-6 items-center py-20">
                    <div class="flex justify-center flex-col items-center gap-2">
                        <i class="fa-solid fa-person-burst fa-7x text-gray-500 py-4"></i>
                        <p class=" font-extrabold md:text-3xl text-xl text-gray-500">挖哩咧，好像沒這個地方捏？</p>
                        <p class="text-gray-400">請點擊下方按鈕回首頁，不要再迷路囉！</p>
                    </div>
                    <BaseRouterLink goToPath="/" buttonName="回到首頁" isRed />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';

export default {
    name: 'NotFound',
    components: {
        BaseRouterLink,
    }
}
</script>