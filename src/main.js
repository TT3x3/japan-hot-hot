import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VCalendar from "v-calendar";
import vSelect from "vue-select";
import { createPinia, PiniaVuePlugin } from "pinia";
import "vue-select/dist/vue-select.css";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./filters/dollarFilter";
import CustomPagination from "./components/base/BasePagination.vue";
import { auth } from "@/utils/auth";
import "@/assets/font.css";

Vue.config.productionTip = false;
Vue.use(VCalendar);
Vue.use(PiniaVuePlugin);
Vue.component("CustomPagination", CustomPagination);
Vue.component("v-select", vSelect);
Vue.prototype.$auth = auth;
const pinia = createPinia();
Vue.use(pinia);

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.pageYOffset = 0;
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
