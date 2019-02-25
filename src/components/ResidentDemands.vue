<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Resident Demands</h1>
      </v-flex>
      <!-- Resident Demands -->
      <resident-demand-calculator></resident-demand-calculator>
      <bottom-population-input></bottom-population-input>
    </v-layout>
  </v-container>
</template>

<script>
import BottomPopulationInput from './resident_demands/BottomPopulationInput';
import ResidentDemandCalculator from './resident_demands/ResidentDemandCalculator';

export default {
  name: 'ResidentDemands',
  components: {
    'resident-demand-calculator': ResidentDemandCalculator,
    'bottom-population-input': BottomPopulationInput,
  },
};
</script>

<style scoped>

</style>
