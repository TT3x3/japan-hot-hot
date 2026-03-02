<template>
    <div class="flex flex-col justify-center items-center bg-gradient-to-t from-white from-50% to-gray-200 to-50%">
        <div class="flex flex-col gap-10 pt-32">
            <h2 class="font-bold text-center text-2xl text-base-heavy">最新活動</h2>
            <!-- 卡片區 -->
            <div class="flex md:flex-row flex-col justify-center items-center gap-8 w-full md:px-0 px-8">
                <!-- 卡片 -->
                <div v-for="(activity, index) in activities" :key="index" class="md:w-[20%] border-solid border-1 border-gray-300">
                    <img class="w-full" :src="activity.img" alt="activities-banner">
                    <div class="flex flex-col gap-4 h-[180px] justify-between bg-white p-7">
                        <h4 class="font-bold text-base-heavy line-clamp-2 ">{{ activity.title }}</h4>
                        <p class="text-sm text-base-light line-clamp-3">
                            {{ activity.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeActivityBanner',
    data() {
        return {
            activities: [
                {
                    img: require('@/assets/images/2026-Q1event-01.jpg'),
                    title: '2026/02/01 烏城祭',
                    description: '當夜幕垂降，漆黑的岡山城將與萬盞燈火交織。在流動的光影與和風音樂中，感受這座城獨有的幽默與靜謐。一場關於光、歷史與在地文化的深夜對話。'
                },
                {
                    img: require('@/assets/images/2026-Q1event-02.jpg'),
                    title: '2026/01/10 伊根町消防隊新年遊行',
                    description: '傳統舟屋見證一場力與美的壯觀噴水儀式，不僅象徵祈求全年的平安與防火，更是漁村最純粹的新年祝禱。'
                },
                {
                    img: require('@/assets/images/2026-Q1event-03.jpg'),
                    title: '2026/01 節分撒豆神事',
                    description: '太宰府天滿宮神社境內的特設舞台上，舉行撒豆神事，參與者們一邊高喊「福は内、鬼は外！」一邊撒豆，以驅除邪氣與災厄。'
                }
            ]
        };
    },
}
</script>