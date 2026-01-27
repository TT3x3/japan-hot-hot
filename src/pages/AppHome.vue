<template>
  <div class="flex flex-col gap-32">
    <img src="../assets/images/home-banner.jpg" class="w-full" alt="home-banner">

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

    <!-- 輪播圖 -->
    <div class="flex justify-center items-center">
      <div class="relative">
        <div class="absolute left-4 bottom-4 bg-black/20 text-white px-3 py-1 text-sm">
          {{ carouselImages[currentIndex].caption }}
        </div>
        <img :src="carouselImages[currentIndex].img" class="h-[500px]" :alt="carouselImages[currentIndex].caption">
      </div>
      <div class="flex flex-col gap-16 px-6">
        <button class="cursor-pointer" @click="carouselPrev"><i
            class="fa-solid fa-arrow-up fa-lg  text-gray-400 hover:text-gray-300 active:text-gray-500"></i></button>
        <button class="cursor-pointer" @click="carouselNext"><i
            class="fa-solid fa-arrow-down fa-lg text-gray-400 hover:text-gray-300 active:text-gray-500"></i></button>
      </div>
    </div>

    <!-- 活動banner -->
    <div class="flex flex-col justify-center items-center bg-gradient-to-t from-white from-50% to-gray-200 to-50%">
      <div class="flex flex-col gap-10 pt-32">
        <h2 class="font-bold text-center text-2xl text-base-heavy">最新活動</h2>
        <!-- 卡片區 -->
        <div class="flex flex-row gap-8">
          <!-- 卡片 -->
          <div class="w-[320px] border-solid border-1 border-gray-300">
            <img src="../assets/images/2026-Q1event-01.jpg" alt="activities-banner">
            <div class="flex flex-col gap-4 h-[180px] bg-white p-7">
              <h4 class="font-bold text-base-heavy">2026/02/01 烏城祭</h4>
              <p class="text-sm text-base-light">當夜幕垂降，漆黑的岡山城將與萬盞燈火交織。在流動的光影與和風音樂中，感受這座城獨有的幽默與靜謐。一場關於光、歷史與在地文化的深夜對話。</p>
            </div>
          </div>
          <!-- 卡片 -->
          <div class="w-[320px] border-solid border-1 border-gray-300">
            <img src="../assets/images/2026-Q1event-02.jpg" alt="activities-banner">
            <div class="flex flex-col gap-4 h-[180px] p-7">
              <h4 class="font-bold text-base-heavy">2026/01/10 伊根町消防隊新年遊行</h4>
              <p class="text-sm text-base-light">傳統舟屋見證一場力與美的壯觀噴水儀式，不僅象徵祈求全年的平安與防火，更是漁村最純粹的新年祝禱。</p>
            </div>
          </div>
          <!-- 卡片 -->
          <div class="w-[320px] border-solid border-1 border-gray-300">
            <img src="../assets/images/2026-Q1event-03.jpg" alt="activities-banner">
            <div class="flex flex-col gap-4 h-[180px] bg-white p-7">
              <h4 class="font-bold text-base-heavy">2026/01 節分撒豆神事</h4>
              <p class="text-sm text-base-light">在太宰府天滿宮神社境內的特設舞台上，舉行撒豆神事，參與者們一邊高喊「福は内、鬼は外！」一邊撒豆，以驅除邪氣與災厄。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 關於我 -->
    <div class="bg-gray-200">
      <div class="flex items-center gap-32">
        <img src="../assets/images/about-img-2.jpg" class="w-[400px] ml-auto" alt="about-img-2">
        <div class="flex flex-col gap-8 h-[420px] [writing-mode:vertical-rl] pt-40">
          <h2 class="font-bold text-xl text-base-heavy">日頭赤炎炎</h2>
          <p class="leading-6.5 tracking-widest text-base-light">這是我們對這片土地及內心最直白的問候，「日頭赤炎炎」。<br /><br />在南國的烈日下，影子被濃縮成腳下的一抹深邃，而我們選擇在心最炙熱的時刻啟程。我們深信，旅行不只是地圖上的位移，而是一場關於溫度的記憶。像是日本神社簷下的微風、舟屋水面上粼粼的波光、或是古老城牆上褪色的墨影。我們悉心採集這些光影碎片，將它們織成一段段不被日常打擾的時光。<br /><br />我們穿過熱浪，只為在喧囂世界的一隅，尋回一份久違的淡然與純粹。</p>
        </div>
        <img src="../assets/images/about-img-1.jpg" class="w-[540px]" alt="about-img-1">
      </div>
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

<style scoped></style>