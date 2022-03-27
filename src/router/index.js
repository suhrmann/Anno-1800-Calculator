import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ProductionChains from '@/views/ProductionChains'
import ResidentNeeds from '@/views/PopulationNeeds'
import ProductionLayouts from '@/views/ProductionLayouts'
import Settings from '@/views/Settings'
import About from '@/views/About'
import Test from '@/views/Test'

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
    path: '/needs',
    name: 'resident-needs',
    component: ResidentNeeds
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
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
