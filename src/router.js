import Vue from 'vue';
import Router from 'vue-router';
// Routes
import Tester from './components/Tester.vue';
import ProductionChains from './components/production_chains/ProductionChains';
import ProductionLayouts from './components/ProductionLayouts';
import ResidentDemands from './components/ResidentDemands';
import About from './components/About';

Vue.use(Router);

export default new Router({
  routes: [
    // ------
    {
      path: '/tester',
      name: 'tester',
      component: Tester,
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
