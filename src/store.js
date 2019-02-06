import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProductionChain: null,

  },
  mutations: {
    changeProductionChain(state, newChain) {
      state.selectedProductionChain = newChain;
    },

  },
  actions: {

  },
});
