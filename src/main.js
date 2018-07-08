import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./../node_modules/bulma/css/bulma.css"

// Require the main Sass manifest file
require('../mystyles.scss');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')