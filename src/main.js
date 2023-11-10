import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import store from "./store";

import "vue-toastification/dist/index.css";

const toastificationOptions = {
  position: "bottom-right",
  timeout: 3000,
  closeOnClick: true,
  closeOnSwipe: true,
  pauseOnFocusLoss: true,
  newestOnTop: false,
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next("/login");
      return;
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App)
  .use(router)
  .use(store)
  .use(Toast, toastificationOptions)
  .mount("#app");
