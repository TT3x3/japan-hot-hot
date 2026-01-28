import Vue from "vue";
import Router from "vue-router";

// import 頁面
import AppHome from "@/pages/AppHome.vue";
import TourPage from "@/pages/TourPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
      meta: {
        title: null,
      },
    },
    {
      path: "/tour",
      name: "tour",
      component: TourPage,
      meta: {
        title: "行程",
      },
    },
  ],
});
