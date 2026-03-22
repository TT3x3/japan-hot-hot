<template>
  <header class="w-full">
    <div
      class="mx-auto max-w-[80%] md:pt-16 md:pb-28 py-3 flex justify-between items-center gap-4 tracking-widest md:min-h-[200px]">
      <router-link to="/" class="z-51">
        <img src="../assets/images/logo-s.png" alt="logo-small" class="hidden md:block md:w-[160px]">
        <img src="../assets/images/logo-2-s.png" class="block md:hidden w-48">
      </router-link>

      <!-- md 以下菜單 -->
      <!-- button -->
      <div @click="toggleMenu()" class="flex flex-col md:hidden py-5 px-3">
        <div class=" flex flex-col justify-between min-w-8 h-[24px] cursor-pointer z-51">
          <div class="h-1 w-full bg-hot-red"></div>
          <div class="h-1 w-full bg-hot-red"></div>
          <div class="h-1 w-full bg-hot-red"></div>
        </div>
      </div>

      <!-- 遮罩 -->
      <div v-if="isOpen" @click="isOpen = false" class="md:hidden fixed top-22 left-0 z-20 w-full h-full bg-black/60">
      </div>

      <div @click.stop
        class="md:hidden fixed top-22 right-0 z-50 w-full h-full transform transition-transform duration-200 pointer-events-none"
        :class="isOpen ? 'translate-y-0' : '-translate-y-full'">
        <ul class="pointer-events-auto absolute flex flex-col items-center gap-4 w-full py-16 bg-gray-400 text-lg text-white">
          <img src="../assets/images/logo-pic.png" alt="" class="w-10">
          <router-link to="/products/tickets" class="hover:text-gray-300 py-2 w-full text-center">機票</router-link>
          <router-link to="/products/tours" class="hover:text-gray-300 py-2 w-full text-center">行程</router-link>
          <router-link v-if="$auth.isLoggedIn" to="/member"
            class="hover:text-gray-300 py-2 w-full text-center">會員中心</router-link>
          <li class="py-2 w-full text-center">關於我</li>
          <router-link v-if="!$auth.isLoggedIn" to="/login" class="hover:text-gray-300 py-2 w-full text-center">登入 /
            註冊</router-link>
          <button type="button" v-if="$auth.isLoggedIn" @click="handleLogout()"
            class="hover:text-gray-300 py-2 w-full text-center cursor-pointer">登出</button>
        </ul>
      </div>

      <!-- md 以上菜單 -->
      <ul class="hidden md:flex flex-col md:gap-3 gap-1 [writing-mode:vertical-rl] text-base-heavy">
        <router-link v-if="!$auth.isLoggedIn" to="/login" class="hover:text-gray-400">登入 / 註冊</router-link>
        <li v-if="$auth.isLoggedIn" @click="handleLogout()" class="hover:text-gray-400 cursor-pointer">登出</li>
        <router-link v-if="$auth.isLoggedIn" to="/member" class="hover:text-gray-400">會員中心</router-link>
        <li>關於我</li>
        <router-link to="/products/tours" class="hover:text-gray-400">行程</router-link>
        <router-link to="/products/tickets" class="hover:text-gray-400">機票</router-link>
      </ul>
    </div>
  </header>
</template>

<script>
import { logout } from '@/utils/auth';

export default {
  name: 'AppHeader',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleLogout() {
      logout();
      this.isOpen = false;
      this.$router.push('/login');
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    },
    isOpen(val) {
      document.body.style.overflow = val ? 'hidden' : ''
    },
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  },
  created() {

  }
}
</script>

<style scoped></style>
