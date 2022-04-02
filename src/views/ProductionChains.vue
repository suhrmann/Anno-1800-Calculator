<template>
  <v-container fluid fill-height class="pb-0">
    <v-row>
      <v-col>
        <WorkerPanel :chain="this.treeData"></WorkerPanel>
      </v-col>
      <v-col>
        <ResourcePanel :chain="this.treeData"></ResourcePanel>
      </v-col>
    </v-row>
    <OptionPanel></OptionPanel>
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
import WorkerPanel from '../components/production_chains/WorkerPanel'
import ResourcePanel from '../components/production_chains/ResourcePanel'
import OptionPanel from '../components/production_chains/Options.vue'

export default {
  name: 'ProductionChains',
  mixins: [helperFunctionMixin],
  components: {
    'bottom-nav-bar': BottomNavBar,
    WorkerPanel,
    ResourcePanel,
    OptionPanel,
    'visual-production-chain': VisualProductionChain
  },

  computed: {
    open_workforce_need: {
      get () {
        return this.$store.state.config.prodcution_chains.open_workforce_need
      },
      set (value) {
        this.$store.commit('toggle_workforce_need', value)
      }
    },
    open_construction_costs: {
      get () {
        return this.$store.state.config.prodcution_chains.open_construction_costs
      },
      set (value) {
        this.$store.commit('toggle_construction_costs', value)
      }
    }
  }
}
</script>

<style scoped>

h3,h4 {
  color: whitesmoke;
}

/* Narrow $expansion-panel-active-margin 16px !default */
.v-expansion-panel-header {
  padding: 8px 24px;
}
.v-expansion-panel-content > :first-child {
  padding: 0;
}

</style>
