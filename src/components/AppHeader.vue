<template>
  <header class="w-full">
    <div class="mx-auto max-w-7xl flex justify-between items-center py-16">
      <img src="../assets/images/logo-s.png" alt="logo-small" class="w-[140px]">
        <ul class="flex flex-col gap-8 [writing-mode:vertical-rl] text-base-color">
          <li v-if="signIn===false">登入 / 註冊</li>
          <li v-if="signIn===true">登出</li>
          <li v-if="signIn===true">會員中心</li>
          <li>關於我</li>
          <li>行程</li>
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
      signIn: true,
    };
  }
}
</script>

<style scoped></style>
