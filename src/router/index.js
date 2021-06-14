import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat/:channel",
    name: "Chat",
    component: () => import("../components/Chat/Channel.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Auth/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Auth/Login.vue"),
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes,
});

export default router;
