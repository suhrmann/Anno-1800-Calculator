<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <visual-production-chain></visual-production-chain>
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from './BottomNavBar.vue';
import VisualProductionChain from './production_chains/VisualProductionChain.vue';
import store from '../store.js';

export default {
  name: 'ProductionChains',
  components: {
    'bottom-nav-bar': BottomNavBar,
    'visual-production-chain': VisualProductionChain,
  },

  beforeRouteEnter(to, from, next) {
    const chain = store.state.selectedProductionChain;
    if (chain === null) {
      store.commit('resetSelectionIDs');
    }
    next((vm) => {

      // gets executed when component is loaded. has access to component
    });
  },

};
</script>

<style scoped>
</style>
