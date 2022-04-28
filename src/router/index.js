import Vue from 'vue'
import VueRouter from 'vue-router'

import ShoppingCart from '../views/ShoppingCart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'check',
    component: ShoppingCart
  },
]


const router = new VueRouter({
  routes
})

export default router

import "@/styles/main.css" 