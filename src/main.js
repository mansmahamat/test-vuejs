// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
import Vuex from 'vuex';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line no-unused-expressions
import('@/assets/styles/index.css');

const options = {
  confirmButtonColor: '#2f855a',
};

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueSweetalert2, options);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
