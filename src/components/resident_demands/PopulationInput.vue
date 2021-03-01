<template>
  <v-container fluid>
    <v-row>
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/farmers.webp" alt="Farmers" />
          </v-avatar>
          <v-text-field
            v-model="numFarmers"
            label="Farmers"
            type="number"
            min="0"
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
            <img src="@/assets/population/workers.webp" alt="Workers" />
          </v-avatar>
          <v-text-field
            v-model="numWorkers"
            label="Workers"
            type="number"
            min="0"
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
            <img src="@/assets/population/artisans.webp" alt="Artisans" />
          </v-avatar>
          <v-text-field
            v-model="numArtisans"
            label="Artisans"
            type="number"
            min="0"
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
            <img src="@/assets/population/engineers.webp" alt="Engineers" />
          </v-avatar>
          <v-text-field
            v-model="numEngineers"
            label="Engineers"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
        ><v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/investors.webp" alt="Investors" />
          </v-avatar>
          <v-text-field
            v-model="numInvestors"
            label="Investors"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/scholars.webp" alt="Scholars" />
          </v-avatar>
          <v-text-field
            v-model="numScholars"
            label="Scholars"
            type="number"
            min="0"
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
            <img src="@/assets/population/jornaleros.webp" alt="Jornaleros" />
          </v-avatar>
          <v-text-field
            v-model="numJornaleros"
            label="Jornaleros"
            type="number"
            min="0"
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
          <v-text-field
            v-model="numObreros"
            label="Obreros"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasPassage"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/explorers.webp" alt="Explorers" />
          </v-avatar>
          <v-text-field
            v-model="numExplorers"
            label="Explorers"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasPassage"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/technicians.webp" alt="Technicians" />
          </v-avatar>
          <v-text-field
            v-model="numTechnicians"
            label="Technicians"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/shepherd.webp" alt="Shepherds" />
          </v-avatar>
          <v-text-field
            v-model="numShepherds"
            label="Shepherds"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        v-if="hasLandOfLions"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : false"
        :sm="$vuetify.breakpoint.smAndDown ? 4 : false"
        :lg="$vuetify.breakpoint.lgAndDown ? 2 : false"
      >
        <v-card class="text-center pa-2">
          <v-avatar>
            <img src="@/assets/population/elders.webp" alt="Elders" />
          </v-avatar>
          <v-text-field
            v-model="numElders"
            label="Elders"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import population from '@/data/population.json'

export default {
  name: 'BottomPopulationInput',
  data () {
    return {
      population: population
    }
  },
  computed: {
    hasPassage () {
      return this.$store.getters.hasPassage
    },
    hasLandOfLions () {
      return this.$store.getters.hasLandOfLions
    },
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
    }
  }
}
</script>

<style scoped>
.centered-input >>> input {
  text-align: right;
}
</style>
