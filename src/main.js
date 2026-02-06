import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './router';
import './utils/filter';

Vue.config.productionTip = false
Vue.use(VCalendar)

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.pageYOffset=0;
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')