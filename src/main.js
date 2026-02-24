import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './router';
import './utils/filter';
import CustomPagination from './components/CustomPagination.vue'

Vue.config.productionTip = false
Vue.use(VCalendar)
Vue.component('CustomPagination', CustomPagination)
Vue.component('v-select', vSelect)

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