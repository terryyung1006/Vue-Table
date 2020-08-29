import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import "jquery-touchswipe";
window.$ = window.jQuery = jQuery;
import "jquery-touchswipe";
import "popper.js";
import "bootstrap";
import "./assets/scss/_common.scss";
import vuescroll from "vue-scroll";
//makes browser skip dubble click checking wait
import fastclick from "vue-fastclick";

fastclick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(vuescroll, { throttle: 300 });
Vue.use(vuescroll, { debounce: 300 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
