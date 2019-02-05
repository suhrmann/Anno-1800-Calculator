import Vue from 'vue';
import Router from 'vue-router';
// Routes
import ColorComponent from './components/ColorComponent.vue';
import ProductionChains from './components/ProductionChains';
import ProductionLayouts from './components/ProductionLayouts';
import ResidentDemands from './components/ResidentDemands';
import About from './components/About';

Vue.use(Router);

export default new Router({
  routes: [
    // ------
    {
      path: '/colors',
      name: 'colors',
      component: ColorComponent,
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
