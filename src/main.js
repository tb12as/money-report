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

axios.defaults.baseURL = "http://47.88.57.201:5000/";

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
