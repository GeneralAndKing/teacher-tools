import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import 'normalize.css'
import 'common@/plugins/iview.js'
<<<<<<< HEAD
import $socket from './lib/socket-instance'
import VueSocketio from 'vue-socket.io-extended'

=======
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:33333',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))
>>>>>>> 5edec91e1aa7a23e7dcaa5c6cb232679a8d026d7
Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(VueSocketio, $socket, { store })

new Vue({
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
