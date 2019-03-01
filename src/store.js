import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProductionChain: null,

    /**
     * The user's input of number of populations - for consumption calculation.
     */
    population: {
      numFarmers: 0,
      numWorkers: 0,
      numArtisans: 0,
      numEngineers: 0,
      numInvestors: 0,
      numJornaleros: 0,
      numObreros: 0,
    },

    /**
     * The calculated production per good.
     * Unit: Production per Minute
     */
    production: null,

    /**
     * The calculated consumption per good.
     * Unit: Consumption per Minute
     */
    consumption: null,
  },
  mutations: {
    /**
     * Change the selected production chain from bottom navbar.
     * @param {object} state
     * @param {object} newChain The new selected production chain from productionChain.json.
     */
    changeProductionChain(state, newChain) {
      state.selectedProductionChain = newChain;
    },

    /**
     * Iitial building of the production and comsumption objects.
     * @param {object} state
     * @param {object} productObject An object with all possible products as keys (value 0)
     * @param {object} consumptionObject An object with all possible products as keys (value 0)
     * Two different parameters needed for two different object references
     */
    buildProductObjects(state, productObject, consumptionObject) {
      state.production = productObject;
      state.consumption = consumptionObject;
    },

    //
    // Set number of population
    //
    /**
     * Set the number of farmers for demands calculation.
     * @param {object} state
     * @param {float} numFarmers The new number of farmers
     */
    setNumFarmers(state, numFarmers) {
      state.population.numFarmers = numFarmers;
    },
    /**
     * Set the number of workers for demands calculation.
     * @param {object} state
     * @param {float} numWorkers The new number of farmers
     */
    setNumWorkers(state, numWorkers) {
      state.population.numWorkers = numWorkers;
    },
    /**
     * Set the number of artisans for demands calculation.
     * @param {object} state
     * @param {float} numArtisans The new number of farmers
     */
    setNumArtisans(state, numArtisans) {
      state.population.numArtisans = numArtisans;
    },
    /**
     * Set the number of engineers for demands calculation.
     * @param {object} state
     * @param {float} numEngineers The new number of farmers
     */
    setNumEngineers(state, numEngineers) {
      state.population.numEngineers = numEngineers;
    },
    /**
     * Set the number of investors for demands calculation.
     * @param {object} state
     * @param {float} numInvestors The new number of farmers
     */
    setNumInvestors(state, numInvestors) {
      state.population.numInvestors = numInvestors;
    },
    /**
     * Set the number of jornaleros for demands calculation.
     * @param {object} state
     * @param {float} numJornaleros The new number of farmers
     */
    setNumJornaleros(state, numJornaleros) {
      state.population.numJornaleros = numJornaleros;
    },
    /**
     * Set the number of obreros for demands calculation.
     * @param {object} state
     * @param {float} numObreros The new number of farmers
     */
    setNumObreros(state, numObreros) {
      state.population.numObreros = numObreros;
    },

    /**
     * Set the calculated populations' demands.
     *
     * @param {object} state
     * @param {object} consumption The calculated populations' demands.
     *          For object structure see ResidentDemandCalculator.computed.totalDemands
     */
    setConsumption(state, consumption) {
      state.consumption = consumption;
    },
  },
  actions: {

  },
});
