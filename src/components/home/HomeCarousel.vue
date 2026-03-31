<template>
    <!-- 輪播圖 -->
    <div class="rolling-content-01 flex md:flex-row flex-col gap-4 justify-center items-center">
        <div class="relative md:h-[500px] h-[240px] md:w-[80%] w-full">
            <div class="absolute left-4 bottom-4 z-21 bg-black/20 text-white px-3 py-1 text-sm">
                {{ carouselImages[currentIndex].caption }}
            </div>
            <img v-for="(img, index) in carouselImages" :key="index" :src="img.img"
                class="w-full h-full object-cover transition-opacity duration-500 absolute top-0 left-0"
                :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
                :alt="img.caption">
        </div>
        <div class="hidden md:flex flex-col gap-16">
            <button type="button" class="cursor-pointer" @click="carouselPrev"><i
                    class="fa-solid fa-arrow-up fa-lg  text-gray-400 hover:text-gray-300 active:text-gray-500"></i></button>
            <button type="button" class="cursor-pointer" @click="carouselNext"><i
                    class="fa-solid fa-arrow-down fa-lg text-gray-400 hover:text-gray-300 active:text-gray-500"></i></button>
        </div>
        <div class="absolute z-21 flex md:hidden flex-row gap-16 px-2 justify-between w-full">
            <button type="button" class="cursor-pointer" @click="carouselPrev"><i
                    class="fa-solid fa-angle-left fa-2x  text-white/60 shadow-2xl"></i></button>
            <button type="button" class="cursor-pointer" @click="carouselNext"><i
                    class="fa-solid fa-angle-right fa-2x text-white/60 shadow-2xl"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppHome',
    data() {
        return {
            intervalId: null,
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
    mounted() {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
        }, 4000)
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        carouselPrev() {
            this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
        },
        carouselNext() {
            this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
        }
    },
}
</script>
<style scoped>
.rolling-content-01 {
    animation: rollY-01 1s linear both;
    animation-timeline: view();
    animation-range: entry 20% entry 100%;
}

@media (max-width: 768px) {
    .rolling-content-01 {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
        animation-delay: 0.8s;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes rollY-01 {
    0% {
        opacity: 0;
        transform: translateY(-200px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>