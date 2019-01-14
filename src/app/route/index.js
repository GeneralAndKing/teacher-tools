import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((to, from) => {
  iView.LoadingBar.finish()
})

export default router
