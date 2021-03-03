import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      calculations: [],
    };
  },
  mutations: {
    SET_CALCULATIONS(state, calculations) {
      state.calculations = calculations;
    },
  },
});

export default store;
