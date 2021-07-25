import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Auth/Login.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/chat/:channel",
    name: "Chat",
    component: () => import("../components/Nav/Chat.vue"),
  },
  {
    path: "/chat",
    name: "MetaChat",
    component: () => import("../components/Nav/Chat.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Auth/Register.vue"),
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import("../components/Feed/Feed.vue"),
  },
  {
    path: "/newchannel",
    name: "New Channel",
    component: () => import("../components/Chat/NewChannel.vue"),
  },
  {
    path: "/spaces",
    name: "Spaces Home",
    component: () => import("../views/Spaces.vue"),
  },
  {
    path: "/git",
    name: "Git Home",
    component: () => import("../views/Git.vue"),
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes,
});

export default router;
