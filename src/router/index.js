import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/instance/TableView.vue";

Vue.use(VueRouter);

const otherRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const customerRoutes = [
  {
    path: "/CustomerDetails",
    name: "CustomerDetails",
    component: () => import("@/views/instance/customer/CustomerDetails")
  },
];


const routes = [
  ...otherRoutes,
  ...customerRoutes,
]

const router = new VueRouter(
  {
    routes
  }
);

export default router;
