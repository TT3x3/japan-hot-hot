import Vue from "vue";
import Router from "vue-router";

// import 頁面
import AppHome from "@/pages/AppHome.vue";
import AppLogin from "@/pages/AppLogin.vue";
import AppSignup from "@/pages/AppSignup.vue";
import ToursPage from "@/pages/ToursPage.vue";
import TourDetail from "@/pages/TourDetail.vue";
import TicketsPage from "@/pages/TicketsPage.vue";
import TicketDetail from "@/pages/TicketDetail.vue";

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
      path: "/tours",
      name: "tours",
      component: ToursPage,
    },
    {
      path:"/tour-detail",
      name:"tour-detail",
      component: TourDetail,
    },
    {
      path:"/tickets",
      name:"tickets",
      component: TicketsPage, 
    },
    {
      path:"/ticket-detail",
      name:"ticket-detail",
      component: TicketDetail,
    }
  ],
});
