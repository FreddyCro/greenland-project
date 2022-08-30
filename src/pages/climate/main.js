import Vue from 'vue';
import app from './app.vue';
import store from '@/assets/store';
import { rwd } from '@/assets/mixins';
import '@/assets/style/main.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  mixins: [rwd],
  render: (h) => h(app),
}).$mount('#app');
