import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AppHeader from "../layouts/AppHeader";
import AppFooter from "../layouts/AppFooter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header: AppHeader,
      default: Home,
      footer: AppFooter,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
