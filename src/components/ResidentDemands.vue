<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Resident Demands</h1>
      </v-flex>
      <!-- Resident Demands -->
      <resident-demand-calculator></resident-demand-calculator>
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from './BottomNavBar';
import ResidentDemandCalculator from './resident_demands/ResidentDemandCalculator';

export default {
  name: 'ResidentDemands',
  components: {
    'bottom-nav-bar': BottomNavBar,
    'resident-demand-calculator': ResidentDemandCalculator,
  },
};
</script>

<style scoped>

</style>
