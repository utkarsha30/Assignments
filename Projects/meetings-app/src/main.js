import './init'
import Vue from 'vue'
import '@/service/configureAxios';
import store from './store/index'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
