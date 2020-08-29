import Vue from "vue";
import Vuex from "vuex";
import customers from "./modules/customers";
import focusingCustomer from "./modules/focusingCustomer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    customers,
    focusingCustomer,
  },
});
