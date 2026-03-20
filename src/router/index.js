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
import MemberCenter from "@/pages/MemberCenter.vue";
import MemberProfile from "@/pages/MemberProfile.vue";
import MemberPassword from "@/pages/MemberPassword.vue";
import MemberOrders from "@/pages/MemberOrders.vue";
import MemberOrderDetail from "@/pages/MemberOrderDetail.vue";
import MemberLikes from "@/pages/MemberLikes.vue";
import CheckoutPage from "@/pages/Checkout.vue";
import CheckoutPassport from "@/pages/CheckoutPassport.vue";
import CheckoutChecked from "@/pages/CheckoutChecked.vue";
import CheckoutFinished from "@/pages/CheckoutFinished.vue";

Vue.use(Router);

const router = new Router({
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
      path: "/member",
      name: "member",
      component: MemberCenter,
      meta: { requiresAuth: true },
    },
    {
      path: "/member/profile",
      name: "profile",
      component: MemberProfile,
      meta: { requiresAuth: true },
    },
    {
      path: "/member/password",
      name: "password]",
      component: MemberPassword,
      meta: { requiresAuth: true },
    },
    {
      path: "/member/orders",
      name: "orders",
      component: MemberOrders,
      meta: { requiresAuth: true },
    },
    {
      path: "/member/orders/:orderId",
      name: "orders-detail",
      component: MemberOrderDetail,
      meta: { requiresAuth: true },
    },
    {
      path: "/member/likes",
      name: "likes",
      component: MemberLikes,
      meta: { requiresAuth: true },
    },
    {
      path: "/tours",
      name: "tours",
      component: ToursPage,
    },
    {
      path: "/tour-detail/:id",
      name: "tour-detail",
      component: TourDetail,
    },
    {
      path: "/tickets",
      name: "tickets",
      component: TicketsPage,
    },
    {
      path: "/ticket-detail/:id",
      name: "ticket-detail",
      component: TicketDetail,
    },
    {
      path: "/checkout/:id",
      name: "checkout",
      component: CheckoutPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/checkout/passport/:id",
      name: "checkoutPassport/:id",
      component: CheckoutPassport,
      meta: { requiresAuth: true },
    },
    {
      path: "/checkout/checked/:id",
      name: "checkoutChecked",
      component: CheckoutChecked,
      meta: { requiresAuth: true },
    },
    {
      path: "/checkout/finished/:id",
      name: "checkoutFinished",
      component: CheckoutFinished,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem("token");
  if (to.meta.requiresAuth && !isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
