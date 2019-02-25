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
          @input="setNumFarmers()"
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
          @input="setNumWorkers()"
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
          @input="setNumArtisans()"
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
          @input="setNumEngineers()"
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
          @input="setNumInvestors()"
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
          @input="setNumJornaleros()"
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
          @input="setNumObreros()"
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
  data: function() {
    return {
      numFarmers: 0,
      numWorkers: 0,
      numArtisans: 0,
      numEngineers: 0,
      numInvestors: 0,
      numJornaleros: 0,
      numObreros: 0,
    };
  },
  methods: {
    setNumFarmers: function() {
      this.$store.commit('setNumFarmers', this.numFarmers);

      console.log('numFarmers: ', this.numFarmers, ' - numFarmers (Vuex): ', this.$store.state.population.numFarmers);
    },
    setNumWorkers: function() {
      this.$store.commit('setNumWorkers', this.numWorkers);
    },
    setNumArtisans: function() {
      this.$store.commit('setNumArtisans', this.numArtisans);
    },
    setNumEngineers: function() {
      this.$store.commit('setNumEngineers', this.numEngineers);
    },
    setNumInvestors: function() {
      this.$store.commit('setNumInvestors', this.numInvestors);
    },
    setNumJornaleros: function() {
      this.$store.commit('setNumJornaleros', this.numJornaleros);
    },
    setNumObreros: function() {
      this.$store.commit('setNumObreros', this.numObreros);
    },
  },

  created() {
    this.numFarmers = this.$store.state.population.numFarmers;
    this.numWorkers = this.$store.state.population.numWorkers;
    this.numEngineers = this.$store.state.population.numEngineers;
    this.numInvestors = this.$store.state.population.numInvestors;
    this.numJornaleros = this.$store.state.population.numJornaleros;
    this.numObreros = this.$store.state.population.numObreros;
  },
};
</script>

<style scoped>

</style>
