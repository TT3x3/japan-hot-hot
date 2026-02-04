<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <div class=" flex flex-col gap-3">
                <h1 class="font-black text-2xl text-base-heavy">水色之際：伊根與天橋立的一日拾光</h1>
                <div class="flex gap-2">
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">半日遊</p>
                    <p class="text-sm px-2 inline-block border border-gray-300 text-gray-400">大阪京都</p>
                </div>
                <div class="h-[500px] overflow-hidden">
                    <img src="../assets/images/carousel-1.jpg" class="w-full h-full object-cover object-bottom"
                        alt="tour-detail-banner">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="flex gap-12 pl-4">
                    <div class="flex flex-col justify-center items-center gap-4 text-gray-400">
                        <i class="fa-solid fa-user fa-2xl"></i>
                        <p class="text-sm">無年齡限制</p>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-4 text-gray-400">
                        <i class="fa-regular fa-clock fa-2xl"></i>
                        <p class="text-sm">60～120分鐘</p>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-4 text-gray-400">
                        <i class="fa-solid fa-people-pulling fa-2xl"></i>
                        <p class="text-sm">1～4人</p>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center gap-4">
                    <p class="font-bold text-3xl text-hot-red">$688～</p>
                    <button class="bg-hot-red text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">立即預訂</button>
                </div>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
                <p class="font-bold text-xl">行程介紹</p>
            </div>
            <div class="bg-gray-200 flex flex-col gap-8 p-14 text-base-heavy">
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">預定行程</p>
                    <p class="font-bold">水色之際：伊根與天橋立的一日拾光</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">行程時間</p>
                    <input type="date">
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
                    <p class="text-xs text-gray-500">* 預約日前72小時可免費變更或取消行程。</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-500">總金額</p>
                    <p class="font-bold text-xl">$2,064</p>
                </div>
                <button class="bg-hot-red self-end text-white px-10 py-3 hover:bg-red-400 active:bg-red-700">確認預約</button>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
                <p class="font-bold text-xl">行前須知</p>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
                <p class="font-bold text-xl">詳細資訊</p>
                <p>map</p>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
                <p class="font-bold text-xl">注意事項</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TourDetail',
    data() {
        return {}
    },
    components: {
    },
    methods: {
    }
}
</script>