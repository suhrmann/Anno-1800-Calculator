<template>

  <v-layout justify-center row wrap>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex lg1 md2 sm2>
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
          box
        ></v-text-field>
      </v-card>
    </v-flex>

  </v-layout>

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
