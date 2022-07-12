import Vue from "vue";
import VueRouter from "vue-router";
import * as constants from "@/constants/constants";
const { homeRouter, aboutRouter } = constants;

Vue.use(VueRouter);

const routes = [
  {
    path: homeRouter.ROOT_PATH,
    name: homeRouter.ROOT_NAME,
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
    meta: {
      layout: "home",
    },
  },
  {
    path: aboutRouter.ROOT_PATH,
    name: aboutRouter.ROOT_NAME,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: "home",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
