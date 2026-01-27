<template>
  <div class="flex flex-col gap-32">
    <div class="flex flex-col gap-12">
      <!-- 搜尋框 -->
      <div class="flex justify-center items-center">
        <div class="flex flex-col gap-4 justify-center items-center">
          <h3 class="text-3xl text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>
          <div class="flex justify-center items-center">
            <input type="text" placeholder="赤穗市" class="outline-solid outline-1 outline-gray-300 py-2 px-4 w-[348px]" />
            <button class="cursor-pointer px-2">
              <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
      <img src="../assets/images/home-banner.jpg" class="w-full relative" alt="home-banner">
    </div>


    <!-- 輪播圖 -->
    <HomeCarousel />
    <!-- 最新活動 -->
    <HomeActivity />

    <!-- 關於我 -->
    <div class="bg-gray-200 overflow-x-hidden">
      <div class="flex w-full justify-between items-center gap-20">
        <div class="flex flex-row justify-end gap-20">
          <img src="../assets/images/about-img-2.jpg" alt="about-img-2" class="max-w-[34%] h-auto">
          <div class="flex flex-col gap-8 h-[45%] [writing-mode:vertical-rl] pt-40">
            <h2 class="font-bold text-xl text-base-heavy">日頭赤炎炎</h2>
            <p class="leading-6.5 tracking-widest text-base-light">
              這句話是我們對這片土地及內心最直白的問候—「日頭赤炎炎」。<br /><br />在南國的烈日下，影子被濃縮成腳下的一抹深邃，而我們選擇在心最炙熱的時刻啟程。我們深信，旅行不只是地圖上的位移，而是一場關於溫度的記憶。像是日本神社簷下的微風、舟屋水面上粼粼的波光、或是古老城牆上褪色的墨影。我們悉心採集這些光影碎片，將它們織成一段段不被日常打擾的時光。<br /><br />我們穿過熱浪，只為在喧囂世界的一隅，尋回一份久違的淡然與純粹。
            </p>
          </div>
        </div>
        <img src="../assets/images/about-img-1.jpg" alt="about-img-1" class="max-w-[30%] w-full h-auto">
      </div>
    </div>
  </div>
</template>

<script>
import HomeActivity from '@/components/HomeActivity.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';

export default {
  name: 'AppHome',
  components: {
    HomeActivity,
    HomeCarousel
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped></style>