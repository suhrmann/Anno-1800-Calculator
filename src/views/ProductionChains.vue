<template>
  <v-container fluid fill-height>
    <v-layout row>
      <visual-production-chain></visual-production-chain>
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from '@/components/BottomNavBar.vue'
import VisualProductionChain from '@/components/production_chains/VisualProductionChain.vue'
import { helperFunctionMixin } from '@/components/helperFunctionMixin'

export default {
  name: 'ProductionChains',
  mixins: [helperFunctionMixin],
  components: {
    'bottom-nav-bar': BottomNavBar,
    'visual-production-chain': VisualProductionChain
  }
}
</script>

<style scoped>
</style>
