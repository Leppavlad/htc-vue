import { createRouter, createWebHistory } from "vue-router";
import FilmsPage from "@/pages/Films.vue";
import TvPage from "@/pages/TV.vue";

const routes = [
  {
    path: "/",
    redirect: "/films",
  },
  {
    path: "/films",
    name: "films",
    components: {
      nav: () => import("../components/layout/CategoryNav.vue"),
      default: FilmsPage,
    },
  },
  {
    path: "/films/:id",
    name: "filmItem",
    component: () => import("../pages/Film"),
    props: true,
  },
  {
    path: "/tv",
    name: "tv",
    components: {
      nav: () => import("../components//layout/CategoryNav.vue"),
      default: TvPage,
    },
  },
  // linkExactActiveClass: "exactActive"
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "wrong" */ "../pages/PageNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
});

export default router;
