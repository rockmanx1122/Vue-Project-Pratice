import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const views = [
  {
    path: '/',
    //component: () => import('@/views/index/index')
  }

]

const createRouter = () => new Router({
  routes: views
})

const router = createRouter()

export default router
