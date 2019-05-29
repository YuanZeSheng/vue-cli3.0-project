import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store/store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 公共样式表
import './assets/css/commen.less'
import './assets/css/base.less'
import "./registerServiceWorker";
import api from './api/api.js'  

Vue.config.productionTip = false;

Vue.prototype.api = api

Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
