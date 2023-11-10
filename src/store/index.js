import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id: null,
      name: null,
      email: null,
    },

    userToken: null,

    items: [],
  },
  mutations: {},

  actions: {},
  getters: {},
});
