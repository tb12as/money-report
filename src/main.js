import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "./styles/app.css"; // Tailwind
Vue.use(Vuesax, {
  // options here
});

import axios from "axios";
import VueAxios from "vue-axios";

if (
  process.env.VUE_APP_AXIOS_BASE_URL &&
  process.env.VUE_APP_PRODUCTION == "false"
) {
  axios.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL;
}

if (process.env.VUE_APP_PRODUCTION == "true") {
  // console.log(process.env.VUE_APP_PRODUCTION)
  axios.defaults.baseURL = "http://47.88.57.201:5000/";
}

const token = localStorage.token;
if (token != undefined && token != "") {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
}

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
