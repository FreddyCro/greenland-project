import Vue from 'vue';
import app from './app.vue';
import store from '@/assets/store';
import { rwd } from '@/assets/mixins';
import '@/assets/style/main.scss';
import VueScrollTo from 'vue-scrollto';
import VueSocialSharing from 'vue-social-sharing';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueSocialSharing);

new Vue({
  store,
  mixins: [rwd],
  render: (h) => h(app),
}).$mount('#app');
