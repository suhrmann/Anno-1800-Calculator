<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Production Chains</h1>
      </v-flex>
      <visual-production-chain></visual-production-chain>
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from './BottomNavBar.vue';
import VisualProductionChain from './production_chains/VisualProductionChain.vue';

export default {
  name: 'ProductionChains',
  components: {
    'bottom-nav-bar': BottomNavBar,
    'visual-production-chain': VisualProductionChain,
  },
};
</script>

<style scoped>
</style>
