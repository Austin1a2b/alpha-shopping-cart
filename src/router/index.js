import Vue from 'vue'
import VueRouter from 'vue-router'

import check from '../views/check'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'check',
    component: check
  },
]


const router = new VueRouter({
  routes
})

export default router
