import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import nuxaVueKit from "./plugins/nuxaVueKit";
import AOS from "aos";

import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false;
Vue.use(nuxaVueKit);
Vue.use(VueScrollTo, {
  duration: 600,
  easing: "ease-in",
  offset: -15,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

new Vue({
  created() {
    AOS.init({
      duration: 2000,
      delay: 300,
    });
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
