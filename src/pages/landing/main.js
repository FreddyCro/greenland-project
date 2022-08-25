import Vue from 'vue';
import app from './app.vue';
import '@/assets/style/main.scss'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(app),
}).$mount('#app');
