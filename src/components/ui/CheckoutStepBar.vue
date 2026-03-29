<template>
    <!-- 進度條 -->
    <div class=" flex flex-row md:gap-4 gap-1">
        <div class="flex flex-col gap-2 w-full">
            <div class="w-full h-1 bg-gray-400" :class="{ 'bg-hot-red font-extrabold': StepNum === 1 }"></div>
            <div class="p-1">
                <p class="font-bold text-gray-400" :class="{ 'text-hot-red font-extrabold': StepNum === 1 }">Step 1</p>
                <p class="text-sm text-gray-400" :class="{ 'text-hot-red': StepNum === 1 }">結帳</p>
            </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="w-full h-1 bg-gray-400" :class="{ 'bg-hot-red': StepNum === 2 }"></div>
            <div class="p-1">
                <p class="font-bold text-gray-400" :class="{ 'text-hot-red font-extrabold': StepNum === 2 }">Step 2</p>
                <p class="text-sm text-gray-400" :class="{ 'text-hot-red': StepNum === 2 }">填寫護照</p>
            </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="w-full h-1 bg-gray-400" :class="{ 'bg-hot-red': StepNum === 3 }"></div>
            <div class="p-1">
                <p class="font-bold text-gray-400" :class="{ 'text-hot-red font-extrabold': StepNum === 3 }">Step 3</p>
                <p class="text-sm text-gray-400" :class="{ 'text-hot-red': StepNum === 3 }">訂單確認</p>
            </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="w-full h-1 bg-gray-400" :class="{ 'bg-hot-red': StepNum === 4 }"></div>
            <div class="p-1">
                <p class="font-bold text-gray-400" :class="{ 'text-hot-red font-extrabold': StepNum === 4 }">Step 4</p>
                <p class="text-sm text-gray-400" :class="{ 'text-hot-red': StepNum === 4 }">完成！</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        StepNum: {
            type: Number,
            required: true,
        },
    },
    name: 'CheckoutStepBar',
}
</script>
