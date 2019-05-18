import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store';
import router from './router';
import VTooltip from 'v-tooltip';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(VTooltip);
Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
