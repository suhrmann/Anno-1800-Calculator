<template>

  <v-container fluid>
    <v-row>
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/farmers.webp"
              alt="Farmers"
            >
          </v-avatar>
          <v-text-field
            v-model="numFarmers"
            class="centered-input"
            label="Farmers"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/workers.webp"
              alt="Workers"
            >
          </v-avatar>
          <v-text-field
            v-model="numWorkers"
            class="centered-input"
            label="Workers"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/artisans.webp"
              alt="Artisans"
            >
          </v-avatar>
          <v-text-field
            v-model="numArtisans"
            class="centered-input"
            label="Artisans"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/engineers.webp"
              alt="Engineers"
            >
          </v-avatar>
          <v-text-field
            v-model="numEngineers"
            class="centered-input"
            label="Engineers"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/investors.webp"
              alt="Investors"
            >
          </v-avatar>
          <v-text-field
            v-model="numInvestors"
            class="centered-input"
            label="Investors"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/scholars.webp"
              alt="Scholars"
            >
          </v-avatar>
          <v-text-field
            v-model="numScholars"
            class="centered-input"
            label="Scholars"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/jornaleros.webp"
              alt="Jornaleros"
            >
          </v-avatar>
          <v-text-field
            v-model="numJornaleros"
            class="centered-input"
            label="Jornaleros"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/obreros.webp"
              alt="Obreros"
            >
          </v-avatar>
          <v-text-field
            v-model="numObreros"
            class="centered-input"
            label="Obreros"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/explorers.webp"
              alt="Explorers"
            >
          </v-avatar>
          <v-text-field
            v-model="numExplorers"
            class="centered-input"
            label="Explorers"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/technicians.webp"
              alt="Technicians"
            >
          </v-avatar>
          <v-text-field
            v-model="numTechnicians"
            class="centered-input"
            label="Technicians"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/shepherd.webp"
              alt="Shepherds"
            >
          </v-avatar>
          <v-text-field
            v-model="numShepherds"
            class="centered-input"
            label="Shepherds"
            type="number"
            min="0"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/elders.webp"
              alt="Elders"
            >
          </v-avatar>
          <v-text-field
            v-model="numElders"
            class="centered-input"
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
  text-align: right
}
</style>
