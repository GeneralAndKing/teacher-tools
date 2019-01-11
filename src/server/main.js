import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import './plugins/iview.js'
Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
