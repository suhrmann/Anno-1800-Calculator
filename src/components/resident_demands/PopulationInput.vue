<template>

  <v-container fluid>
    <v-layout row :class="{wrap: $vuetify.breakpoint.smAndDown}">

      <v-flex
        pa-1
        sm4 xs6
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/farmers.webp"
              alt="Farmers"
            >
          </v-avatar>
          <v-text-field
            v-model="numFarmers"
            label="Farmers"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex
        pa-1
        sm4 xs6
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/workers.webp"
              alt="Workers"
            >
          </v-avatar>
          <v-text-field
            v-model="numWorkers"
            label="Workers"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex
        pa-1
        sm4 xs6
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/artisans.webp"
              alt="Artisans"
            >
          </v-avatar>
          <v-text-field
            v-model="numArtisans"
            label="Artisans"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex
        pa-1
        sm4 xs6
        :class="{'offset-sm2': $vuetify.breakpoint.smAndDown}"
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/engineers.webp"
              alt="Engineers"
            >
          </v-avatar>
          <v-text-field
            v-model="numEngineers"
            label="Engineers"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex
        pa-1
        sm4 xs6
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/investors.webp"
              alt="Investors"
            >
          </v-avatar>
          <v-text-field
            v-model="numInvestors"
            label="Investors"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex
        pa-1
        sm4 xs6
        :class="{'offset-sm2': $vuetify.breakpoint.smAndDown}"
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/jornaleros.webp"
              alt="Jornaleros"
            >
          </v-avatar>
          <v-text-field
            v-model="numJornaleros"
            label="Jornaleros"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex
        pa-1
        sm4 xs6
      >
        <v-card height="105" class="text-xs-center">
          <v-avatar>
            <img
              src="../../assets/population/obreros.webp"
              alt="Obreros"
            >
          </v-avatar>
          <v-text-field
            v-model="numObreros"
            label="Obreros"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'BottomPopulationInput',
  computed: {
    numFarmers: {
      get: function() {return this.$store.state.population.numFarmers;},
      set: function(numFarmers) {this.$store.commit('setNumFarmers', numFarmers);},
    },
    numWorkers: {
      get: function() {return this.$store.state.population.numWorkers;},
      set: function(numWorkers) {this.$store.commit('setNumWorkers', numWorkers);},
    },
    numArtisans: {
      get: function() {return this.$store.state.population.numArtisans;},
      set: function(numArtisans) {this.$store.commit('setNumArtisans', numArtisans);},
    },
    numEngineers: {
      get: function() {return this.$store.state.population.numEngineers;},
      set: function(numEngineers) {this.$store.commit('setNumEngineers', numEngineers);},
    },
    numInvestors: {
      get: function() {return this.$store.state.population.numInvestors;},
      set: function(numInvestors) {this.$store.commit('setNumInvestors', numInvestors);},
    },
    numJornaleros: {
      get: function() {return this.$store.state.population.numJornaleros;},
      set: function(numJornaleros) {this.$store.commit('setNumJornaleros', numJornaleros);},
    },
    numObreros: {
      get: function() {return this.$store.state.population.numObreros;},
      set: function(numObreros) {this.$store.commit('setNumObreros', numObreros);},
    },
  },
};
</script>

<style scoped>

</style>
