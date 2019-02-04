import Vue from 'vue';
import Router from 'vue-router';
import ColorComponent from './components/ColorComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/colors',
    name: 'colors',
    component: ColorComponent,
  }],
});
