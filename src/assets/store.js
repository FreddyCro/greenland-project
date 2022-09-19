import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    device: '',
    sound: false,
    fullVideoHeight: '100vh',
  },
  mutations: {
    setDevice(state, device) {
      state.device = device;
    },
    setSound(state, sound) {
      state.sound = sound;
    },
    setFullVideoHeight(state, height) {
      state.fullVideoHeight = height;
    },
  },
  actions: {
    setDevice({ commit }, device) {
      commit('setDevice', device);
    },
    setSound({ commit }, sound) {
      commit('setSound', sound);
    },
  },
  getters: {},
  modules: {},
});
