<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <visual-production-chain></visual-production-chain>
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from "./BottomNavBar.vue";
import VisualProductionChain from "./production_chains/VisualProductionChain.vue";
import { helperFunctionMixin } from "./helperFunctionMixin.js";

export default {
  name: "ProductionChains",
  mixins: [helperFunctionMixin],
  components: {
    "bottom-nav-bar": BottomNavBar,
    "visual-production-chain": VisualProductionChain
  }
};
</script>

<style scoped>
</style>
