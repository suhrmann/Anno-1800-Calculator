import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import ProductionChains from '@/components/ProductionChains'
import ResidentDemands from '@/components/ResidentDemands'
import ProductionLayouts from '@/components/ProductionLayouts'
import About from '@/components/About'

Vue.use(VueRouter)

const routes = [
  // ------
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // - Production ------
  {
    path: '/chains',
    name: 'production-chains',
    component: ProductionChains
  },
  {
    path: '/demands',
    name: 'resident-demands',
    component: ResidentDemands
  },
  {
    path: '/layouts',
    name: 'production-layouts',
    component: ProductionLayouts
  },
  // ------
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
