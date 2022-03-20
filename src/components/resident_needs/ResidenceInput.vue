<template>
  <v-container fluid>
    <v-row>
      <!-- The Old World -->
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/farmers.webp')" alt="Farmers" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numFarmerResidences"
            label="Farmers' Residences"
            type="number"
            min="0"
            :messages="'Farmers: ' + numFarmers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/workers.webp')" alt="Workers" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numWorkerResidences"
            label="Workers' Residences"
            type="number"
            min="0"
            :messages="'Workers: ' + numWorkers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/artisans.webp')" alt="Artisans" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numArtisanResidences"
            label="Artisans' Residences"
            type="number"
            min="0"
            :messages="'Artisans: ' + numArtisans"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        pa-1
        sm4
        xs6
        :class="{ 'offset-sm2': $vuetify.breakpoint.smAndDown }"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/engineers.webp')" alt="Engineers" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numEngineerResidences"
            label="Engineers' Residences"
            type="number"
            min="0"
            :messages="'Engineers: ' + numEngineers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/investors.webp')" alt="Investors" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numInvestorResidences"
            label="Investors' Residences"
            type="number"
            min="0"
            :messages="'Investors: ' + numInvestors"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/scholars.webp')" alt="Scholars" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numScholarsResidences"
            label="Scholars' Residences"
            type="number"
            min="0"
            :messages="'Scholars: ' + numScholars"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 old-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/tourists.webp')" alt="Tourists" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numTouristsResidences"
            label="Tourists' Residences"
            type="number"
            min="0"
            :messages="'Tourists: ' + numTourists"
          ></v-text-field>
        </v-card>
      </v-col>

      <!-- The New World -->
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 new-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/jornaleros.webp')" alt="Jornaleros" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numJornaleroResidences"
            label="Jornaleros' Residences"
            type="number"
            min="0"
            :messages="'Jornaleros: ' + numJornaleros"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 new-world-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/obreros.webp')" alt="Obreros" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numObreroResidences"
            label="Obreros' Residences"
            type="number"
            min="0"
            :messages="'Obreros: ' + numObreros"
          ></v-text-field>
        </v-card>
      </v-col>

      <!-- The Arctic -->
      <v-col
        v-if="hasPassage"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 arctic-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/explorers.webp')" alt="Explorers" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numExplorersResidences"
            label="Explorers' Residences"
            type="number"
            min="0"
            :messages="'Explorers: ' + numExplorers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasPassage"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 arctic-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/technicians.webp')" alt="Technicians" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numTechniciansResidences"
            label="Technicians' Residences"
            type="number"
            min="0"
            :messages="'Technicians: ' + numTechnicians"
          ></v-text-field>
        </v-card>
      </v-col>

      <!-- Enbesa -->
      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 enbesa-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/shepherd.webp')" alt="Shepherds" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numShepherdsResidences"
            label="Shepherds' Residences"
            type="number"
            min="0"
            :messages="'Shepherds: ' + numShepherds"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2 enbesa-indicator">
          <v-badge avatar overlap bordered bottom >
            <template v-slot:badge>
              <v-avatar>
                <v-img :src="require('@/assets/buildings/residence.webp')" alt="Residence" />
              </v-avatar>
            </template>
            <v-avatar>
              <v-img :src="require('@/assets/population/elders.webp')" alt="Elders" />
            </v-avatar>
          </v-badge>
          <v-text-field
            v-model="numEldersResidences"
            label="Elders' Residences"
            type="number"
            min="0"
            :messages="'Elders: ' + numElders"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  populationLevels,
  farmersGUID, workersGUID, artisansGUID, engineersGUID, investorsGUID, scholarsGUID, touristsGUID,
  jornalerosGUID, obrerosGUID,
  explorersGUID, techniciansGUID,
  shepherdsGUID, eldersGUID
} from '@/data/anno1800params'

const farmersPerResidence = populationLevels.find(popLevel => popLevel.guid === farmersGUID).fullHouse
const workersPerResidence = populationLevels.find(popLevel => popLevel.guid === workersGUID).fullHouse
const artisansPerResidence = populationLevels.find(popLevel => popLevel.guid === artisansGUID).fullHouse
const engineersPerResidence = populationLevels.find(popLevel => popLevel.guid === engineersGUID).fullHouse
const investorsPerResidence = populationLevels.find(popLevel => popLevel.guid === investorsGUID).fullHouse
const scholarsPerResidence = populationLevels.find(popLevel => popLevel.guid === scholarsGUID).fullHouse
const touristsPerResidence = populationLevels.find(popLevel => popLevel.guid === touristsGUID).fullHouse

const jornalerosPerResidence = populationLevels.find(popLevel => popLevel.guid === jornalerosGUID).fullHouse
const obrerosPerResidence = populationLevels.find(popLevel => popLevel.guid === obrerosGUID).fullHouse

const explorersPerResidence = populationLevels.find(popLevel => popLevel.guid === explorersGUID).fullHouse
const techniciansPerResidence = populationLevels.find(popLevel => popLevel.guid === techniciansGUID).fullHouse

const shepherdsPerResidence = populationLevels.find(popLevel => popLevel.guid === shepherdsGUID).fullHouse
const eldersPerResidence = populationLevels.find(popLevel => popLevel.guid === eldersGUID).fullHouse

export default {
  name: 'BottomPopulationInput',
  computed: {
    hasPassage () {
      return true || this.$store.getters.hasPassage // TODO
    },
    hasLandOfLions () {
      return true || this.$store.getters.hasLandOfLions // TODO
    },
    // Get/Set population
    numFarmers: {
      get: function () { return this.$store.state.population.numFarmers },
      set: function (numFarmers) { this.$store.commit('setNumFarmers', numFarmers) }
    },
    numWorkers: {
      get: function () { return this.$store.state.population.numWorkers },
      set: function (numWorkers) { this.$store.commit('setNumWorkers', numWorkers) }
    },
    numArtisans: {
      get: function () { return this.$store.state.population.numArtisans },
      set: function (numArtisans) { this.$store.commit('setNumArtisans', numArtisans) }
    },
    numEngineers: {
      get: function () { return this.$store.state.population.numEngineers },
      set: function (numEngineers) { this.$store.commit('setNumEngineers', numEngineers) }
    },
    numInvestors: {
      get: function () { return this.$store.state.population.numInvestors },
      set: function (numInvestors) { this.$store.commit('setNumInvestors', numInvestors) }
    },
    numScholars: {
      get: function () { return this.$store.state.population.numScholars },
      set: function (numScholars) { this.$store.commit('setNumScholars', numScholars) }
    },
    numTourists: {
      get: function () { return this.$store.state.population.numTourists },
      set: function (numTourists) { this.$store.commit('setNumTourists', numTourists) }
    },

    numJornaleros: {
      get: function () { return this.$store.state.population.numJornaleros },
      set: function (numJornaleros) { this.$store.commit('setNumJornaleros', numJornaleros) }
    },
    numObreros: {
      get: function () { return this.$store.state.population.numObreros },
      set: function (numObreros) { this.$store.commit('setNumObreros', numObreros) }
    },

    numExplorers: {
      get: function () { return this.$store.state.population.numExplorers },
      set: function (numExplorers) { this.$store.commit('setNumExplorers', numExplorers) }
    },
    numTechnicians: {
      get: function () { return this.$store.state.population.numTechnicians },
      set: function (numTechnicians) { this.$store.commit('setNumTechnicians', numTechnicians) }
    },

    numShepherds: {
      get: function () { return this.$store.state.population.numShepherds },
      set: function (numShepherds) { this.$store.commit('setNumShepherds', numShepherds) }
    },
    numElders: {
      get: function () { return this.$store.state.population.numElders },
      set: function (numElders) { this.$store.commit('setNumElders', numElders) }
    },

    // Get/Set Residences
    // Old World
    numFarmerResidences: {
      get: function () { return Math.ceil(this.numFarmers / farmersPerResidence) },
      set: function (numFarmerResidences) { this.numFarmers = numFarmerResidences * farmersPerResidence }
    },
    numWorkerResidences: {
      get: function () { return Math.ceil(this.numWorkers / workersPerResidence) },
      set: function (numWorkerResidences) { this.numWorkers = numWorkerResidences * workersPerResidence }
    },
    numArtisanResidences: {
      get: function () { return Math.ceil(this.numArtisans / artisansPerResidence) },
      set: function (numArtisanResidences) { this.numArtisans = numArtisanResidences * artisansPerResidence }
    },
    numEngineerResidences: {
      get: function () { return Math.ceil(this.numEngineers / engineersPerResidence) },
      set: function (numEngineerResidences) { this.numEngineers = numEngineerResidences * engineersPerResidence }
    },
    numInvestorResidences: {
      get: function () { return Math.ceil(this.numInvestors / investorsPerResidence) },
      set: function (numInvestorResidences) { this.numInvestors = numInvestorResidences * investorsPerResidence }
    },
    numScholarsResidences: {
      get: function () { return Math.ceil(this.numScholars / scholarsPerResidence) },
      set: function (numScholarsResidences) { this.numScholars = numScholarsResidences * scholarsPerResidence }
    },
    numTouristsResidences: {
      get: function () { return Math.ceil(this.numTourists / touristsPerResidence) },
      set: function (numTouristsResidences) { this.numTourists = numTouristsResidences * touristsPerResidence }
    },

    // New World
    numJornaleroResidences: {
      get: function () { return Math.ceil(this.numJornaleros / jornalerosPerResidence) },
      set: function (numJornalerosResidences) { this.numJornaleros = numJornalerosResidences * jornalerosPerResidence }
    },
    numObreroResidences: {
      get: function () { return Math.ceil(this.numObreros / obrerosPerResidence) },
      set: function (numObreroResidences) { this.numObreros = numObreroResidences * obrerosPerResidence }
    },

    // Arctic
    numExplorersResidences: {
      get: function () { return Math.ceil(this.numExplorers / explorersPerResidence) },
      set: function (numExplorersResidences) { this.numExplorers = numExplorersResidences * explorersPerResidence }
    },
    numTechniciansResidences: {
      get: function () { return Math.ceil(this.numTechnicians / techniciansPerResidence) },
      set: function (numTechniciansResidences) { this.numTechnicians = numTechniciansResidences * techniciansPerResidence }
    },

    // Enbesa
    numShepherdsResidences: {
      get: function () { return Math.ceil(this.numShepherds / shepherdsPerResidence) },
      set: function (numShepherdsResidences) { this.numShepherds = numShepherdsResidences * shepherdsPerResidence }
    },
    numEldersResidences: {
      get: function () { return Math.ceil(this.numElders / eldersPerResidence) },
      set: function (numEldersResidences) { this.numElders = numEldersResidences * eldersPerResidence }
    }
  }
}
</script>

<style scoped>
.redidenceIndicator {
  background-image: url('~@/assets/buildings/residence.webp');
}
.old-world-indicator {
  background-image: url('~@/assets/regions/the-old-world.webp');
  background-size: 30px 30px;
  background-position: right 5px top 5px;
}
.new-world-indicator {
  background-image: url('~@/assets/regions/the-new-world.webp');
  background-size: 30px 30px;
  background-position: right 5px top 5px;
}
.arctic-indicator {
  background-image: url('~@/assets/regions/the-arctic.webp');
  background-size: 30px 30px;
  background-position: right 5px top 5px;
}
.enbesa-indicator {
  background-image: url('~@/assets/regions/enbesa.webp');
  background-size: 30px 30px;
  background-position: right 5px top 5px;
}
</style>
