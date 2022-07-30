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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
