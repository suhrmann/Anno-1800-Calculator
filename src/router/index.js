import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ProductionChains from '@/views/ProductionChains'
import ResidentDemands from '@/views/PopulationDemands'
import ProductionLayouts from '@/views/ProductionLayouts'
import Settings from '@/views/Settings'
import About from '@/views/About'

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
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
