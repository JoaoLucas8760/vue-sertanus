import { createStore } from "vuex";
import { readItems } from "../services/apifaker/itemsCrud";

export default createStore({
  state: {
    user: null,

    items: readItems(),
  },
  mutations: {
    deleteItem(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },

  actions: {},
  getters: {},
});
