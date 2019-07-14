// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from './store'
Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.$axios = axios
window.axios = axios
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  loading: '/static/timg.gif',
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
