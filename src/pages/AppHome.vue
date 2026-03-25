<template>
  <div class="flex flex-col md:gap-56 gap-12">
    <AppLoading :isLoading="isLoading" />
    <div class="flex md:flex-col flex-col-reverse md:gap-32 gap-12">
      <!-- 搜尋框 -->
      <SearchBar :productType="productType" :placeholderType="placeholderType" :allProducts="products" :search="search"
        @update:search="val => search = val" @search-result="getSearchResult" />
      <img src="../assets/images/home-banner.jpg" class="w-full h-72 relative object-cover" alt="home-banner">
    </div>

    <!-- 輪播圖 -->
    <HomeCarousel />
    <!-- 最新活動 -->
    <HomeActivity />

    <!-- 關於我 -->
    <div class="bg-gray-200 overflow-x-hidden md:py-0 md:pb-24 md:pt-8 py-12">
      <div class="flex w-full justify-center items-center gap-8">
        <div class="flex flex-col md:items-end items-center">
          <img src="../assets/images/about-img-2.jpg" alt="about-img-2" class="md:h-72 h-96 object-cover md:pr-16">
          <div class="flex flex-col md:gap-8 gap-4 h-[45%] md:[writing-mode:vertical-rl] md:px-12 md:py-0 p-8">
            <h2 class="font-bold text-xl text-base-heavy">日頭赤炎炎</h2>
            <p class="md:leading-6.5 tracking-widest md:text-base text-sm text-base-light">
              這句話是我們對這片土地及內心最直白的問候—「日頭赤炎炎」。<br /><br />在南國的烈日下，影子被濃縮成腳下的一抹深邃，而我們選擇在心最炙熱的時刻啟程。我們深信，旅行不只是地圖上的位移，而是一場關於溫度的記憶。像是日本神社簷下的微風、舟屋水面上粼粼的波光、或是古老城牆上褪色的墨影。我們悉心採集這些光影碎片，將它們織成一段段不被日常打擾的時光。<br /><br />我們穿過熱浪，只為在喧囂世界的一隅，尋回一份久違的淡然與純粹。
            </p>
          </div>
        </div>
        <img src="../assets/images/about-img-1.jpg" alt="about-img-1"
          class="hidden md:block max-w-[30%] h-full object-cover">
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/http'
import { useResultStore } from '@/stores/search'
import HomeActivity from '@/components/HomeActivity.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
import SearchBar from '@/components/SearchBar.vue';
import AppLoading from '@/components/AppLoading.vue';

export default {
  name: 'AppHome',
  components: {
    HomeActivity,
    HomeCarousel,
    SearchBar,
    AppLoading,
  },
  data() {
    return {
      products: [],
      productType: '',
      placeholderType: '旅程',
      search: '',
      isLoading: false,
    };
  },
  methods: {
    async getProducts() {
      try {
        const res = await http.get(`/product/flight`);
        this.products = res.data.items;
        this.productType = this.typeTranslate(res.data.items[0].type);
        // console.log(this.productType)
        console.log(res.data.items[0].type)
      } catch (error) {
        this.isModalOpen = true;
        this.hasError = true;
        this.modalContent = '伺服器錯誤，將轉跳回首頁';
        this.isCatchError = true;
      }
    },
    async getSearchResult(keyword) {
      await this.store.getResult(keyword);
      this.$router.push({
        path: '/products/result',
        query: {
          search: keyword,
          page: 1
        }
      }).catch(() => { });
    },
  },
  created() {
    this.getProducts();
    this.store = useResultStore();
  },
  computed: {
    typeTranslate() {
      return {
        Flight: 'tickets',
        Tour: 'tours'
      }
    }
  }
}
</script>