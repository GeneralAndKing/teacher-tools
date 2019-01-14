import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import router from './route'
import store from './store'
import 'normalize.css'
import 'common@/plugins/iview.js'

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
