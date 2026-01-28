<template>
    <div class="flex flex-col gap-32">
        <div class="flex flex-col gap-12">
            <!-- 搜尋框 -->
            <div class="flex justify-center items-center">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h3 class="text-3xl text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>
                    <div class="flex justify-center items-center">
                        <input type="text" placeholder="赤穗市"
                            class="outline-solid outline-1 outline-gray-300 py-2 px-4 w-[348px]" />
                        <button class="cursor-pointer px-2">
                            <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </div>
            <img src="../assets/images/tour-banner.jpg" class="w-full relative" alt="tour-banner">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TourPage',
    data() {
        return {
        };
    },
    methods: {
    }
}
</script>