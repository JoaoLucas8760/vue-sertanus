import { createWebHistory, createRouter } from "vue-router";
import Inventory from "../views/Inventory.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
