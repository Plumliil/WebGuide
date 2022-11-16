import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signin from "./views/Signin.vue";
import Column from "./views/ColumnDetail.vue";
import Classify from "./views/SiteClassify.vue";
import store from "./store";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/classify/:name",
      name: "classify",
      // component: () => import("./views/SiteClassify.vue"),
      component: Classify,
    },
    {
      path: "/sitesMenu",
      name: "sitesMenu",
      component: () => import("./views/SitesMenu.vue"),
      // component:  Classify ,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        redirectiveAlreadyLogin: true,
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin,
      meta: {
        redirectiveAlreadyLogin: true,
      },
    },
    {
      path: "/column/:id",
      name: "column",
      component: Column,
    },
    {
      path: "/createPost",
      name: "createPost",
      component: () => import("./views/CreatePost.vue"),
      meta: {
        requireLogin: true,
      },
    },
    {
      path: "/userCollect",
      name: "userCollect",
      component: () => import("./views/UserCollect.vue"),
      meta: {
        requireLogin: true,
      },
    },
    {
      path: "/userContribute",
      name: "userContribute",
      component: () => import("./views/UserContribute.vue"),
      meta: {
        requireLogin: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin && !store.state.user?.isLogin) {
    next({ name: "login" });
  } else if (to.meta.redirectiveAlreadyLogin && store.state.user?.isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
