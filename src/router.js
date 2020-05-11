import Vue from 'vue';
import Router from 'vue-router';
// Routes
import Home from './components/Home.vue';
import ProductionChains from './components/ProductionChains';
import ProductionLayouts from './components/ProductionLayouts';
import ResidentDemands from './components/ResidentDemands';
import About from './components/About';

Vue.use(Router);

export default new Router({
  routes: [
    // ------
    {
      path: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    // - Production ------
    {
      path: '/chains',
      name: 'production-chains',
      component: ProductionChains,
    },
    {
      path: '/demands',
      name: 'resident-demands',
      component: ResidentDemands,
    },
    {
      path: '/layouts',
      name: 'production-layouts',
      component: ProductionLayouts,
    },
    // ------
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
