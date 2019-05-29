import Vue from "vue";
import Router from "vue-router";

const homeContainer = () => import( /* webpackChunkName: "homeContainer" */ './components/home/homeContainer.vue')
const loginContainer = () => import( /* webpackChunkName: "loginContainer" */ './components/login/loginContainer.vue')

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: homeContainer
    },
    {
      path: "/login",
      name: "login",
      component: loginContainer
    }
  ]
});
