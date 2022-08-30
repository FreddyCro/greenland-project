import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    device: '',
  },
  mutations: {
    setDevice(state, device) {
      state.device = device;
    },
  },
  actions: {
    setDevice({ commit }, device) {
      commit('setDevice', device);
    },
  },
  getters: {},
  modules: {},
});
