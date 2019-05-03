<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Resident Demands</h1>
      </v-flex>
      <!-- Resident Demands -->
      <bottom-population-input></bottom-population-input>

      <v-container grid-list-md text-xs-center>

        <!-- Demands as table -->
        <resident-demands-table></resident-demands-table>

      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import BottomPopulationInput from './resident_demands/BottomPopulationInput';
import ResidentDemandsTable from './resident_demands/ResidentDemandsTable';
import residentDemandCalculatorMixin from './resident_demands/residentDemandCalculatorMixin.js';

export default {
  name: 'ResidentDemands',
  components: {
    'resident-demands-table': ResidentDemandsTable,

    'bottom-population-input': BottomPopulationInput,
  },

  beforeRouteEnter(to, from, next) {
    // do sth
    next((vm) => {
      if (vm.$route.query.linkedFromChains === true) {
        const newPop = vm.$route.query.populationToAdd;
        vm.$store.commit('addToPopulationDemands', newPop);
      }
    });
  },

  mixins: [residentDemandCalculatorMixin],

  data: function() {
    return {};
  },

};
</script>

<style scoped>
</style>
