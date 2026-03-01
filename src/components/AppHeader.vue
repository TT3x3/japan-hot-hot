<template>
  <header class="w-full">
    <div
      class="mx-auto max-w-[80%] pt-16 md:pb-28 pb-16 flex justify-between items-center tracking-widest min-h-[200px]">
      <router-link to="/" class="z-51">
        <img src="../assets/images/logo-s.png" alt="logo-small" class="w-[160px] max-[400px]:w-[60%]">
      </router-link>

      <!-- md 以下菜單 -->
      <!-- button -->
      <div @click="toggleMenu()" class=" flex flex-col md:hidden justify-between min-w-8 h-[28px] cursor-pointer z-51">
        <div class="h-1 w-full bg-hot-red"></div>
        <div class="h-1 w-full bg-hot-red"></div>
        <div class="h-1 w-full bg-hot-red"></div>
      </div>
      <div v-if="isOpen"
        class="md:hidden fixed top-52 left-0 z-20 w-full h-full bg-black/60 transition-opacity duration-300">
      </div>

      <div class="md:hidden fixed top-48 right-0 z-50 w-full h-full transform transition-transform duration-300"
        :class="isOpen ? 'translate-y-0' : '-translate-y-full'">
        <ul class="absolute flex flex-col items-center gap-4 w-full py-16 bg-gray-400 text-white">
          <img src="../assets/images/logo-pic.png" alt="" class="w-10">
          <router-link to="/tickets" class="hover:text-gray-400 py-2 w-full text-center">機票</router-link>
          <router-link to="/tours" class="hover:text-gray-400 py-2 w-full text-center">行程</router-link>
          <router-link v-if="!$auth.isLoggedIn" to="/member"
            class="hover:text-gray-400 py-2 w-full text-center">會員中心</router-link>
          <li class="py-2 w-full text-center">關於我</li>
          <router-link v-if="!$auth.isLoggedIn" to="/login" class="hover:text-gray-400 py-2 w-full text-center">登入 /
            註冊</router-link>
          <button type="button" v-if="$auth.isLoggedIn" @click="handleLogout()"
            class="hover:text-gray-400 py-2 w-full text-center cursor-pointer">登出</button>
        </ul>
      </div>

      <!-- md 以上菜單 -->
      <ul class="hidden md:flex flex-col md:gap-3 gap-1 [writing-mode:vertical-rl] text-base-heavy">
        <router-link v-if="!$auth.isLoggedIn" to="/login" class="hover:text-gray-400">登入 / 註冊</router-link>
        <li v-if="$auth.isLoggedIn" @click="handleLogout()" class="hover:text-gray-400 cursor-pointer">登出</li>
        <router-link v-if="$auth.isLoggedIn" to="/member" class="hover:text-gray-400">會員中心</router-link>
        <li>關於我</li>
        <router-link to="/tours" class="hover:text-gray-400">行程</router-link>
        <router-link to="/tickets" class="hover:text-gray-400">機票</router-link>
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
      apiBase: process.env.VUE_APP_API_PATH,
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
      if (this.$route.path === '/members/login') {
        this.$router.push('/members/login');
      }
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
