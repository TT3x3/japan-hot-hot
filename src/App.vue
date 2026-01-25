<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <div class="bg-gray-400 w-full h-[500px]"></div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
</style>
