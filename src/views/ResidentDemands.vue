<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <h1>Resident Demands</h1>
      </v-col>
    </v-row>

    <!-- Resident Demands -->
    <v-row>
      <v-col>

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
          v-model="currentTab"
          centered
          background-color="secondary"
          active-class="primary"
          dark
          icons-and-text
          grow
        >
          <v-tabs-slider color="secondary"></v-tabs-slider>

          <!-- Population input -->
          <v-tab>
            Population
            <v-avatar color="grey lighten-2">
              <img src="@/assets/population/engineers.webp" alt="avatar">
            </v-avatar>
          </v-tab>
          <!-- Residence input -->
          <v-tab>
            Residence
            <v-avatar>
              <img src="@/assets/buildings/farmers/residence.webp" alt="avatar">
            </v-avatar>
          </v-tab>
        </v-tabs>

        <v-tabs-items
          v-model="currentTab"
        >
          <!-- Population input -->
          <v-tab-item key="1">
            <v-card flat>
              <v-card-text>
                <population-input></population-input>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!-- Residence input -->
          <v-tab-item key="2">
            <v-card flat>
              <v-card-text>
                <residence-input></residence-input>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-container grid-list-md text-center>

          <!-- Demands as table -->
          <resident-demands-table></resident-demands-table>

        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PopulationInput from '@/components/resident_demands/PopulationInput'
import ResidenceInput from '@/components/resident_demands/ResidenceInput'
import ResidentDemandsTable from '@/components/resident_demands/ResidentDemandsTable'
import residentDemandCalculatorMixin from '@/components/resident_demands/residentDemandCalculatorMixin.js'

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
    return {
      currentTab: null
    }
  }

}
</script>

<style scoped>
</style>
