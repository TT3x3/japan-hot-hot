import Vue from "vue";
import Router from "vue-router";

// import 頁面
import AppHome from "@/pages/AppHome.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        name: "home",
        component: AppHome,
        },
    ],
});
