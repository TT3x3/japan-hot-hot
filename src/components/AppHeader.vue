<template>
  <header class="w-full">
    <div class="mx-auto max-w-[80%] h-[218px] flex justify-between items-center py-16 tracking-widest">
      <router-link to="/">
        <img src="../assets/images/logo-s.png" alt="logo-small" class="w-[160px]">
      </router-link>
      <ul class="flex flex-col gap-3 [writing-mode:vertical-rl] text-base-heavy">
        <router-link v-if="signIn === false" to="/login" class="hover:text-gray-400">登入 / 註冊</router-link>
        <li v-if="signIn === true">登出</li>
        <li v-if="signIn === true">會員中心</li>
        <li>關於我</li>
        <router-link to="/tour" class="hover:text-gray-400">行程</router-link>
        <li>機票</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      signIn: false,
    };
  },
}
</script>

<style scoped></style>
