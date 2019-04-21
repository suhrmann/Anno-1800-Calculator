<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Resident Demands</h1>
      </v-flex>
      <!-- Resident Demands -->
      <bottom-population-input></bottom-population-input>

      <v-container grid-list-md text-xs-center>

        <!-- Alert if no population was entered -->
        <div v-if="isPopulationEmpty">
          <v-alert
            class="my-5"
            :value="true"
            type="warning"
            transition="scale-transition"
          >
            <h3>No population set</h3>
            Enter the number of at least one populations to start calculation of demands.
          </v-alert>
        </div>

        <!-- Demands calculaiton -->
        <v-tabs fixed-tabs>
          <!-- TAB: Demands as cards -->
          <v-tab
            :key="1"
          >
            Demand Cards
          </v-tab>
          <v-tab-item
            :key="1"
          >
            <v-card flat>
              <resident-demands-cards></resident-demands-cards>
            </v-card>
          </v-tab-item>

          <!-- TAB: Demands as table -->
          <v-tab
            :key="2"
          >
            Demands Table
          </v-tab>
          <v-tab-item
            :key="2"
          >
            <v-card flat>
              <resident-demands-table></resident-demands-table>
            </v-card>
          </v-tab-item>

        </v-tabs>

      </v-container>

    </v-layout>
  </v-container>
</template>

<script>
import BottomPopulationInput from './resident_demands/BottomPopulationInput';
import ResidentDemandsCards from './resident_demands/ResidentDemandsCards';
import ResidentDemandsTable from './resident_demands/ResidentDemandsTable';

import residentDemandCalculatorMixin from './resident_demands/residentDemandCalculatorMixin.js';
import store from '../store.js';

export default {
  name: 'ResidentDemands',
  components: {
    'resident-demands-cards': ResidentDemandsCards,
    'resident-demands-table': ResidentDemandsTable,

    'bottom-population-input': BottomPopulationInput,
  },

  beforeRouteEnter(to, from, next) {
    // do sth
    next((vm) => {
      // gets executed when component is loaded. has access to component
    });
  },

  mixins: [residentDemandCalculatorMixin],

  computed: {
    /**
       * Check if any population was entered.
       *
       * @return {boolean} true if no population is set.
       */
    isPopulationEmpty: function() {
      return !(this.$store.state.population.numFarmers > 0 ||
          this.$store.state.population.numWorkers > 0 ||
          this.$store.state.population.numArtisans > 0 ||
          this.$store.state.population.numEngineers > 0 ||
          this.$store.state.population.numInvestors > 0 ||
          this.$store.state.population.numJornaleros > 0 ||
          this.$store.state.population.numObreros > 0);
    },
  },
};
</script>

<style scoped>

</style>
