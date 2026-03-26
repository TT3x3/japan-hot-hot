import Vue from "vue";
import Router from "vue-router";
import { useOrderStore } from "@/stores/order";

// import 頁面
import AppHome from "@/pages/AppHome.vue";
import AppAbout from "@/pages/AppAbout.vue";
import AppLogin from "@/pages/AppLogin.vue";
import AppSignup from "@/pages/AppSignup.vue";
import ProductsPage from "@/pages/products/ProductsPage.vue";
import SearchResult from "@/pages/products/SearchResult.vue";
import TourDetail from "@/pages/products/TourDetail.vue";
import TicketDetail from "@/pages/products/TicketDetail.vue";
import MemberCenter from "@/pages/users/MemberCenter.vue";
import MemberProfile from "@/pages/users/MemberProfile.vue";
import MemberPassword from "@/pages/users/MemberPassword.vue";
import MemberOrders from "@/pages/users/MemberOrders.vue";
import MemberOrderDetail from "@/pages/users/MemberOrderDetail.vue";
import MemberLikes from "@/pages/users/MemberLikes.vue";
import CheckoutPage from "@/pages/payment/Checkout.vue";
import CheckoutPassport from "@/pages/payment/CheckoutPassport.vue";
import CheckoutChecked from "@/pages/payment/CheckoutChecked.vue";
import CheckoutFinished from "@/pages/payment/CheckoutFinished.vue";

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
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/login",
      name: "login",
      component: AppLogin,
      meta: { requiresGuest: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: AppSignup,
      meta: { requiresGuest: true },
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
      path: "/products/:type(tours|tickets)",
      name: "ProductsPage",
      component: ProductsPage,
      props: (route) => ({ type: route.params.type }),
    },
    {
      path: "/products/result",
      name: "searchResult",
      component: SearchResult,
    },
    {
      path: "/tour-detail/:id",
      name: "tour-detail",
      component: TourDetail,
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
  const orderStore = useOrderStore();

  if (to.meta.requiresAuth && !isLogin) {
    next("/");
  } else if (to.path.includes("/checkout") && !orderStore.isCheckoutStarted) {
    next("/");
  } else if (to.meta.requiresGuest && isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
