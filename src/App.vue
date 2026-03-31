<template>
  <div id="app">
    <BaseLoading />
    <AppHeader />
    <router-view />
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import BackToTop from './components/common/BackToTop.vue';
import BaseLoading from './components/base/BaseLoading.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    BackToTop,
    BaseLoading
  }
}
</script>

<style>
#app {
  font-family: 'GenRyuMin2TW', sans-serif;
}
</style>
