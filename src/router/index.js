import Vue from "vue";
import Router from "vue-router";

// import 頁面
import AppHome from "@/pages/AppHome.vue";
import TourPage from "@/pages/TourPage.vue";
import AppLogin from "@/pages/AppLogin.vue";
import AppSignup from "@/pages/AppSignup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/tour",
      name: "tour",
      component: TourPage,
    },
    {
      path: "/login",
      name: "login",
      component: AppLogin,
    },
    {
      path: "/signup",
      name: "signup",
      component: AppSignup,
    }
  ],
});
