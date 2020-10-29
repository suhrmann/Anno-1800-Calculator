<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Resident Demands</h1>
      </v-flex>
      <!-- Resident Demands -->

      <v-flex
        xs12
      >

<!--
        <v-alert
          :value="true"
          color="secondary"
          icon="mdi-information"
          outline
          dismissible
        >
          Enter your population either directly as number of <kbd>Population</kbd> (farmers, workers, etc.) or via the amount of
          <kbd>Residences</kbd> per population.
        </v-alert>
-->

        <v-tabs
          centered
          color="primary"
          dark
          icons-and-text
          fixed-tabs
          grow
        >
          <v-tabs-slider color="secondary"></v-tabs-slider>

          <!-- Population input -->
          <v-tab>
            Population
            <v-avatar
              color="grey lighten-2"
            >
              <img src="../assets/population/engineers.webp" alt="avatar">
            </v-avatar>
          </v-tab>
          <v-tab-item
            key="1"
          >
            <v-card flat>
              <v-card-text>
                <population-input></population-input>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <!-- Residence input -->
          <v-tab>
            Residence
            <v-avatar>
              <img src="../assets/buildings/farmers/residence.webp" alt="avatar">
            </v-avatar>
          </v-tab>
          <v-tab-item
            key="2"
          >
            <v-card flat>
              <v-card-text>
                <residence-input></residence-input>
              </v-card-text>
            </v-card>
          </v-tab-item>

        </v-tabs>
      </v-flex>

      <v-container grid-list-md text-xs-center>

        <!-- Demands as table -->
        <resident-demands-table></resident-demands-table>

      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import PopulationInput from './resident_demands/PopulationInput'
import ResidenceInput from './resident_demands/ResidenceInput'
import ResidentDemandsTable from './resident_demands/ResidentDemandsTable'
import residentDemandCalculatorMixin from './resident_demands/residentDemandCalculatorMixin.js'

export default {
  name: 'ResidentDemands',
  components: {
    'resident-demands-table': ResidentDemandsTable,

    'population-input': PopulationInput,
    'residence-input': ResidenceInput
  },

  beforeRouteEnter (to, from, next) {
    // do sth
    next((vm) => {
      if (vm.$route.query.linkedFromChains === true) {
        const newPop = vm.$route.query.populationToAdd
        vm.$store.commit('addToPopulationDemands', newPop)
      }
    })
  },

  mixins: [residentDemandCalculatorMixin],

  data: function () {
    return {}
  }

}
</script>

<style scoped>
</style>
