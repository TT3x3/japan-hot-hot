import Vue from "vue";
import Router from "vue-router";

// import 頁面
import AppHome from "@/pages/AppHome.vue";
import AppLogin from "@/pages/AppLogin.vue";
import AppSignup from "@/pages/AppSignup.vue";
import TourPage from "@/pages/TourPage.vue";
import TourDetail from "@/pages/TourDetail.vue";

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
      path: "/login",
      name: "login",
      component: AppLogin,
    },
    {
      path: "/signup",
      name: "signup",
      component: AppSignup,
    },
    {
      path: "/tour",
      name: "tour",
      component: TourPage,
    },
    {
      path:"/tour-detail",
      name:"tour-detail",
      component: TourDetail,
    }
  ],
});
