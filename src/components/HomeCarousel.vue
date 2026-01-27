<template>
    <!-- 輪播圖 -->
    <div class="flex justify-center items-center">
        <div class="relative">
            <div class="absolute left-4 bottom-4 bg-black/20 text-white px-3 py-1 text-sm">
                {{ carouselImages[currentIndex].caption }}
            </div>
            <img :src="carouselImages[currentIndex].img" class="max-h-[500px] w-auto" :alt="carouselImages[currentIndex].caption">
        </div>
        <div class="flex flex-col gap-16 px-6">
            <button class="cursor-pointer" @click="carouselPrev"><i
                    class="fa-solid fa-arrow-up fa-lg  text-gray-400 hover:text-gray-300 active:text-gray-500"></i></button>
            <button class="cursor-pointer" @click="carouselNext"><i
                    class="fa-solid fa-arrow-down fa-lg text-gray-400 hover:text-gray-300 active:text-gray-500"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppHome',
    data() {
        return {
            currentIndex: 0,
            carouselImages: [
                {
                    img: require('@/assets/images/carousel-1.jpg'),
                    caption: '宮崎縣高千穗 - 天岩戶神社'
                },
                {
                    img: require('@/assets/images/carousel-2.jpg'),
                    caption: '九州 - 阿蘇火山'
                },
                {
                    img: require('@/assets/images/carousel-3.jpg'),
                    caption: '岡山縣 - 吉備津神社'
                },
                {
                    img: require('@/assets/images/carousel-4.jpg'),
                    caption: '廣島市 - 嚴島神社'
                },
                {
                    img: require('@/assets/images/carousel-5.jpg'),
                    caption: '岡山縣 - 岡山後樂園'
                },
            ]
        };
    },
    methods: {
        carouselPrev() {
            this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
        },
        carouselNext() {
            this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
        }
    }
}
</script>