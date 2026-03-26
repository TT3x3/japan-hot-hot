<template>
    <div class="flex flex-col justify-center items-center mx-auto md:gap-48 gap-16 text-base-heavy">
        <AppLoading :isLoading="isLoading" />
        <div class="block md:hidden"></div>
        <div class="rolling-title flex flex-col justify-center items-center gap-2 md:mt-0">
            <p class="font-extrabold md:text-3xl text-xl tracking-widest">日頭赤炎炎</p>
            <p class="md:text-lg text-base-light">這句話是我們對這片土地及內心最直白的問候</p>
        </div>
        <div class="bg-gray-200 flex flex-col md:gap-48 gap-16 w-full">
            <img src="../assets/images/pic-04.jpg" class="rolling-img-1 w-full md:h-96 h-64 relative object-cover"
                alt="home-banner">
            <div class="rolling-line-01 md:w-20 w-10 h-px bg-gray-400/60 mx-auto"></div>
            <div
                class="rolling-content-01 flex flex-col md:gap-8 gap-4 md:[writing-mode:vertical-rl] md:w-[80%] md:justify-start md:items-start justify-center items-center">
                <h2 class="font-bold text-xl text-base-heavy tracking-widest">影子越深的地方，光就越亮</h2>
                <p class="md:leading-6.5 tracking-widest md:text-base text-sm text-base-light">
                    旅行的意義，<br /><br />不是為了逃離這片「赤炎炎」的日常，<br /><br />而是為了在另一個國度，<br />
                    找到能與內心體溫相契合的風景。<br /><br />願這趟旅程，<br />能成為你心底那一抹曬不乾的清涼。
                </p>
            </div>
            <div class="rolling-line-01 md:w-20 w-10 h-px bg-gray-400/60 mx-auto"></div>
            <div class="flex flex-col md:gap-8 gap-4 w-[80%] mx-auto">
                <img src="../assets/images/pic-03.jpg" class="rolling-content-02 w-full h-96 relative object-cover">
                <div class="rolling-content-03 flex flex-col gap-6">
                    <h2 class=" font-bold text-xl text-base-heavy tracking-widest">不被日常打擾的拾光</h2>
                    <p class=" md:leading-6.5 tracking-widest md:text-base text-sm text-base-light md:w-[60%]">
                        我們自許為「時光的採集者」。在主流旅遊市場追求效率、拼湊熱門打卡點的時代，我們選擇慢下來，用一種近乎偏執的眼光，去採集那些容易被忽視的光影碎片。<br /><br />我們穿過熱浪，只為在喧囂世界的一隅，尋回一份久違的淡然。<br /><br />在伊根的舟屋旁，我們看見水面上粼粼的波光，那是與海共生百年的靜謐。

                        在天橋立的沙洲上，我們聽見松風拂過，那是大自然留給旅人的低語。

                        在神社褪色的墨影裡，我們讀到了時光的重量。<br /><br />
                        這些風景不需要被大聲張揚，它們只需要被安靜地看見。我們悉心將這些碎片織成一段段不被日常打擾的時光，讓每一位踏上旅途的人，都能在光影交錯的瞬間，重新找回內心的秩序。
                    </p>
                </div>
            </div>
            <div class="rolling-line-01 md:w-20 w-10 h-px bg-gray-400/60 mx-auto"></div>
            <div class="flex md:gap-8 gap-4 md:w-[60%] mr-auto md:ml-32 ml-1">
                <img src="../assets/images/pic-02.jpg" class="rolling-content-04 w-[40%] relative object-cover">
                <div class=" rolling-content-04 flex flex-col md:gap-8 gap-4">
                    <h2 class="font-bold text-xl text-base-heavy tracking-widest">從出發到抵達的溫度</h2>
                    <p class="md:leading-6.5 tracking-widest md:text-base text-sm text-base-light">
                        「日頭赤炎炎」代表的是一種真實。我們提供的行程，沒有過度的包裝與虛華的辭藻，只有我們親身走過、被陽光曬過後的真實觸感。<br /><br />從高雄出發的直飛航線，到深山裡一間能看見繁星的旅宿；從清晨第一班前往山影的列車，到深夜巷弄裡那一碗暖心的拉麵。我們挑選的每一個細節，都帶著我們對旅行的執著。<br /><br />我們希望你帶走的，不只是手機相簿裡的風景，而是那種「影子被濃縮成腳下一抹深邃」後，依然選擇前行的勇氣。無論外頭的世界如何紛擾，當你與我們一同開啟這趟旅程，你將擁有一片專屬於你的、曬不乾的清涼。
                    </p>
                </div>
            </div>
            <div class="rolling-line-01 md:w-20 w-10 h-px bg-gray-400/60 mx-auto"></div>
            <div class="flex md:flex-row flex-col-reverse mx-auto justify-center items-center md:gap-8 gap-4">
                <img src="../assets/images/about-img-2.jpg"
                    class="rolling-content-05 md:w-[50%] w-full relative object-cover">
                <p
                    class="rolling-content-06 text-base-light md:text-start text-center md:[writing-mode:vertical-rl] tracking-widest">
                    感謝你走進「日頭赤炎炎」的世界。<br /><br />願我們一起在烈日下啟程，<br />在微風中抵達，在旅行的路上，<br /><br />遇見那個最純粹、最自在的自己。</p>
                <h2
                    class=" rolling-content-07 font-bold text-xl text-base-heavy tracking-widest md:[writing-mode:vertical-rl]">
                    抵達之後</h2>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import AppLoading from '@/components/AppLoading.vue';

export default {
    name: 'AppAbout',
    data() {
        return {
            isLoading: true
        };
    },
    components: {
        AppLoading,
    },
    mounted() {
        this.isLoading = false
    }
}
</script>
<style scope>
.rolling-title,
.rolling-img-1 {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
    animation-delay: 0.3s;
}

.rolling-content-01 {
    animation: rollInY linear both;
    animation-timeline: view();
    animation-range: entry 20% entry 100%;
}

@media (max-width: 768px) {

    .rolling-content-01,
    .rolling-content-02,
    .rolling-content-03 {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
        animation-delay: 0.8s;
    }
}

.rolling-content-02 {
    animation: rollInY-03 linear both;
    animation-timeline: view();
    animation-range: entry 80% entry 150%;
}

.rolling-content-05 {
    animation: rollInY linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 140%;
}

.rolling-content-06 {
    animation: rollInY linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 120%;
    overflow: hidden;
}

.rolling-content-07 {
    animation: rollInY-02 linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 150%;
}

@media (max-width: 768px) {
    .rolling-line-01 {
        display: block;
        animation: rollInY-02 0.6s ease-out both;
        animation-timeline: view();
    }
}

.rolling-line-01 {
    display: block;
    animation: none;
}

.rolling-content-04 {
    animation: rollInX linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 100%;
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

@keyframes rollInX {
    0% {
        opacity: 0;
        transform: translate3d(-200px, 0, 0);
    }

    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes rollInY {
    0% {
        opacity: 0;
        transform: translateY(-200px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes rollInY-02 {
    0% {
        opacity: 0;
        transform: translateY(-150px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes rollInY-03 {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>