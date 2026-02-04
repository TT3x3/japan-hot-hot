<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import BackToTop from './components/BackToTop.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    BackToTop
  }
}
</script>

<style>
</style>
