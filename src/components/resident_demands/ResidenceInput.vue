<template>
  <v-container fluid>
    <v-row>
      <!-- The Old World -->
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/farmers.webp')"
              alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/workers.webp')"
              alt="Workers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/artisans.webp')"
              alt="Artisans"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/engineers.webp')"
              alt="Engineers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/investors.webp')"
              alt="Investors"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        v-if="selectedDLCs.includes(9)"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/scholars.webp')"
              alt="Scholars"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numScholarsResidences"
            label="Scholars' Residences"
            type="number"
            min="0"
            :messages="'Scholars: ' + numScholars"
          ></v-text-field>
        </v-card>
      </v-col>

      <!-- The New World -->
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/jornaleros.webp')"
              alt="Jornaleros"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/obreros.webp" alt="Obreros" />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        v-if="selectedDLCs.includes(4)"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/explorers.webp" alt="Explorers" />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        v-if="selectedDLCs.includes(4)"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/technicians.webp" alt="Technicians" />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        v-if="selectedDLCs.includes(9)"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/shepherd.webp" alt="Shepherds" />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
        v-if="selectedDLCs.includes(9)"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/elders.webp" alt="Elders" />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
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
import Population from '@/data/population.json'

export default {
  name: 'BottomPopulationInput',
  data: function () {
    return {
      farmersPerResidence: Population.farmers.residence,
      workersPerResidence: Population.workers.residence,
      artisansPerResidence: Population.artisans.residence,
      engineersPerResidence: Population.engineers.residence,
      investorsPerResidence: Population.investors.residence,
      scholarsPerResidence: Population.scholars.residence, // TODO VALIDATE! Unknown by now

      jornalerosPerResidence: Population.jornaleros.residence,
      obrerosPerResidence: Population.obreros.residence,

      explorersPerResidence: Population.explorers.residence,
      techniciansPerResidence: Population.technicians.residence,

      shepherdsPerResidence: Population.shepherds.residence, // TODO VALIDATE! Unknown by now
      eldersPerResidence: Population.elders.residence // TODO VALIDATE! Unknown by now
    }
  },
  computed: {
    selectedDLCs () {
      return this.$store.state.selectedDLCs
    },
    // Get/Set population
    numFarmers: {
      get: function () {
        return this.$store.state.population.numFarmers
      },
      set: function (numFarmers) {
        this.$store.commit('setNumFarmers', numFarmers)
      }
    },
    numWorkers: {
      get: function () {
        return this.$store.state.population.numWorkers
      },
      set: function (numWorkers) {
        this.$store.commit('setNumWorkers', numWorkers)
      }
    },
    numArtisans: {
      get: function () {
        return this.$store.state.population.numArtisans
      },
      set: function (numArtisans) {
        this.$store.commit('setNumArtisans', numArtisans)
      }
    },
    numEngineers: {
      get: function () {
        return this.$store.state.population.numEngineers
      },
      set: function (numEngineers) {
        this.$store.commit('setNumEngineers', numEngineers)
      }
    },
    numInvestors: {
      get: function () {
        return this.$store.state.population.numInvestors
      },
      set: function (numInvestors) {
        this.$store.commit('setNumInvestors', numInvestors)
      }
    },
    numScholars: {
      get: function () {
        return this.$store.state.population.numScholars
      },
      set: function (numScholars) {
        this.$store.commit('setNumScholars', numScholars)
      }
    },

    numJornaleros: {
      get: function () {
        return this.$store.state.population.numJornaleros
      },
      set: function (numJornaleros) {
        this.$store.commit('setNumJornaleros', numJornaleros)
      }
    },
    numObreros: {
      get: function () {
        return this.$store.state.population.numObreros
      },
      set: function (numObreros) {
        this.$store.commit('setNumObreros', numObreros)
      }
    },

    numExplorers: {
      get: function () {
        return this.$store.state.population.numExplorers
      },
      set: function (numExplorers) {
        this.$store.commit('setNumExplorers', numExplorers)
      }
    },
    numTechnicians: {
      get: function () {
        return this.$store.state.population.numTechnicians
      },
      set: function (numTechnicians) {
        this.$store.commit('setNumTechnicians', numTechnicians)
      }
    },

    numShepherds: {
      get: function () {
        return this.$store.state.population.numShepherds
      },
      set: function (numShepherds) {
        this.$store.commit('setNumShepherds', numShepherds)
      }
    },
    numElders: {
      get: function () {
        return this.$store.state.population.numElders
      },
      set: function (numElders) {
        this.$store.commit('setNumElders', numElders)
      }
    },

    // Get/Set Residences
    numFarmerResidences: {
      get: function () {
        return Math.ceil(this.numFarmers / this.farmersPerResidence)
      },
      set: function (numFarmerResidences) {
        this.numFarmers = numFarmerResidences * this.farmersPerResidence
      }
    },
    numWorkerResidences: {
      get: function () {
        return Math.ceil(this.numWorkers / this.workersPerResidence)
      },
      set: function (numWorkerResidences) {
        this.numWorkers = numWorkerResidences * this.workersPerResidence
      }
    },
    numArtisanResidences: {
      get: function () {
        return Math.ceil(this.numArtisans / this.artisansPerResidence)
      },
      set: function (numArtisanResidences) {
        this.numArtisans = numArtisanResidences * this.artisansPerResidence
      }
    },
    numEngineerResidences: {
      get: function () {
        return Math.ceil(this.numEngineers / this.engineersPerResidence)
      },
      set: function (numEngineerResidences) {
        this.numEngineers = numEngineerResidences * this.engineersPerResidence
      }
    },
    numInvestorResidences: {
      get: function () {
        return Math.ceil(this.numInvestors / this.investorsPerResidence)
      },
      set: function (numInvestorResidences) {
        this.numInvestors = numInvestorResidences * this.investorsPerResidence
      }
    },
    numScholarsResidences: {
      get: function () {
        return Math.ceil(this.numScholars / this.scholarsPerResidence)
      },
      set: function (numScholarsResidences) {
        this.numScholars = numScholarsResidences * this.scholarsPerResidence
      }
    },

    numJornaleroResidences: {
      get: function () {
        return Math.ceil(this.numJornaleros / this.jornalerosPerResidence)
      },
      set: function (numJornalerosResidences) {
        this.numJornaleros =
          numJornalerosResidences * this.jornalerosPerResidence
      }
    },
    numObreroResidences: {
      get: function () {
        return Math.ceil(this.numObreros / this.obrerosPerResidence)
      },
      set: function (numObreroResidences) {
        this.numObreros = numObreroResidences * this.obrerosPerResidence
      }
    },

    numExplorersResidences: {
      get: function () {
        return Math.ceil(this.numExplorers / this.explorersPerResidence)
      },
      set: function (numExplorersResidences) {
        this.numExplorers = numExplorersResidences * this.explorersPerResidence
      }
    },
    numTechniciansResidences: {
      get: function () {
        return Math.ceil(this.numTechnicians / this.techniciansPerResidence)
      },
      set: function (numTechniciansResidences) {
        this.numTechnicians =
          numTechniciansResidences * this.techniciansPerResidence
      }
    },

    numShepherdsResidences: {
      get: function () {
        return Math.ceil(this.numShepherds / this.shepherdsPerResidence)
      },
      set: function (numShepherdsResidences) {
        this.numShepherds = numShepherdsResidences * this.shepherdsPerResidence
      }
    },
    numEldersResidences: {
      get: function () {
        return Math.ceil(this.numElders / this.eldersPerResidence)
      },
      set: function (numEldersResidences) {
        this.numElders = numEldersResidences * this.eldersPerResidence
      }
    }
  }
}
</script>

<style scoped></style>
