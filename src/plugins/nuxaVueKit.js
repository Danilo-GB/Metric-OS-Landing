/**============== BootstrapVue ===================***/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

/**============== Popper JS ===================***/
import "popper.js/dist/popper.min";

/**============== Font Awesome ===================***/
import "../assets/css/font-awesome.min.css";

/**============== Flaticon ===================***/
import "../assets/flaticon/flaticon.css";

/**============== Custom Style ===================***/
import "../assets/css/style.css";
import "../assets/css/responsive.css";

/**============== jQuery ===================***/
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

/**============== Magnific Popup ===================***/
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";

/**============== Vue Carousel ===================***/
import VueCarousel from "vue-carousel";

/**============== AOS ===================***/
import "aos/dist/aos.css";

export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    Vue.use(VueCarousel);
  },
};
