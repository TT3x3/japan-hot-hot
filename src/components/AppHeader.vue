<template>
  <header class="w-full">
    <div class="mx-auto max-w-[80%] h-[218px] flex justify-between items-center py-16 tracking-widest">
      <router-link to="/">
        <img src="../assets/images/logo-s.png" alt="logo-small" class="w-[160px]">
      </router-link>
      <ul class="flex flex-col gap-3 [writing-mode:vertical-rl] text-base-heavy">
        <router-link v-if="loggedIn === false" to="/login" class="hover:text-gray-400">登入 / 註冊</router-link>
        <li v-if="loggedIn === true">登出</li>
        <router-link v-if="loggedIn === true" to="/member-center" class="hover:text-gray-400">會員中心</router-link>
        <li>關於我</li>
        <router-link to="/tours" class="hover:text-gray-400">行程</router-link>
        <router-link to="/tickets" class="hover:text-gray-400">機票</router-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      loggedIn: true,
    };
  },
}
</script>

<style scoped></style>
