<template>
  <v-container fluid fill-height class="pb-0">
    <v-row>
      <v-col>
        <visual-production-chain></visual-production-chain>
      </v-col>
    </v-row>
    <v-row class="grey darken-3">
      <v-col class="pa-0 mb-3">
        <bottom-nav-bar></bottom-nav-bar>
      </v-col>
    </v-row>
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
