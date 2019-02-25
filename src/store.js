import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProductionChain: null,

    population: {
      numFarmers: 0,
      numWorkers: 0,
      numArtisans: 0,
      numEngineers: 0,
      numInvestors: 0,
      numJornaleros: 0,
      numObreros: 0,
    },
    consumptionPerMinute: '(plz implement me!)',
  },
  mutations: {
    changeProductionChain(state, newChain) {
      state.selectedProductionChain = newChain;
    },


    setNumFarmers: function (state, numFarmers) {
      state.population.numFarmers = numFarmers;
    },
    setNumWorkers: function (state, numWorkers) {
      state.population.numWorkers = numWorkers;
    },
    setNumArtisans: function (state, numArtisans) {
      state.population.numArtisans = numArtisans;
    },
    setNumEngineers: function (state, numEngineers) {
      state.population.numEngineers = numEngineers;
    },
    setNumInvestors: function (state, numInvestors) {
      state.population.numInvestors = numInvestors;
    },
    setNumJornaleros: function (state, numJornaleros) {
      state.population.numJornaleros = numJornaleros;
    },
    setNumObreros: function (state, numObreros) {
      state.population.numObreros = numObreros;
    },
  },
  actions: {

  },
});
