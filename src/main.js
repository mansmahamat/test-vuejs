// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
import Vuex from 'vuex';
import VueSweetalert2 from 'vue-sweetalert2';
import VueGlide from 'vue-glide-js';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-glide-js/dist/vue-glide.css';

// eslint-disable-next-line no-unused-expressions
import('@/assets/styles/index.css');

const options = {
  confirmButtonColor: '#2f855a',
};

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueSweetalert2, options);
Vue.use(VueGlide);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
