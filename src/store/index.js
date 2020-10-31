import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    // Configure the plugin "vuex-persistedstate" (key and what to store)
    createPersistedState({
      /**
       * The key to store the persisted state under. (default: vuex)
       */
      key: 'anno-1800-caluclator',
      /**
       * reducer?: (state: any, paths: string[]) => object;
       *
       * A function that will be called to reduce the state to persist based on the given paths.
       * Defaults to include the values.
       */
      reducer (state, paths) {
        return {
          // Store selected production chain
          selectedWorldID: state.selectedWorldID,
          selectedSocialClassID: state.selectedSocialClassID,
          selectedProductionChainID: state.selectedProductionChainID,

          // Store entered population
          population: state.population
        }
      }
    })
  ],

  state: {
    selectedProductionChain: {
      id: 1,
      worldID: 1,
      chain: 'Timber',
      socialClassID: 1,
      finalProduct: 'Timber',
      name: 'Sawmill',
      img: 'farmers/timber.webp',
      alternative: '',
      children: [{
        name: 'Lumberjack Hut',
        worldID: 1,
        alternative: '',
        children: null
      }]
    },
    selectedWorldID: 1,
    selectedSocialClassID: 1,
    selectedProductionChainID: 1,

    /**
     * The following 2 properties are linked to the options in VisualProductionChain.vue
     * these 2 determine, if the chain is calculated using the alternate building
     */
    coalOption: 'char',
    marquetryOption: 'old',

    buildingQueue: [],

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
      numObreros: 0
    },

    /**
     * The calculated production per good.
     * Unit: Production per Minute
     */
    production: null,

    /**
     * The calculated consumption per good. Inited with no demands / consumption.
     * Unit: Consumption per Minute
     */
    consumption: {
      basic: {
        Marketplace: false,
        Fish: 0,
        'Work Clothes': 0,
        Sausages: 0,
        Bread: 0,
        Soap: 0,
        School: false,
        'Canned Food': 0,
        'Sewing Machines': 0,
        'Fur Coats': 0,
        University: false,
        Glasses: 0,
        Electricity: false,
        Coffee: 0,
        'Light Bulbs': 0,
        Champagne: 0,
        Cigars: 0,
        Chocolate: 0,
        'Steam Carriages': 0,
        'Fried Plantains': 0,
        Ponchos: 0,
        Tortillas: 0,
        'Bowler Hats': 0
      }, // eslint-disable-line max-len
      luxury: {
        Schnapps: 0,
        Pub: false,
        Church: false,
        Beer: 0,
        'Variety Theatre': false,
        Rum: 0,
        'High Wheelers': 0,
        'Pocket Watches': 0,
        Bank: false,
        'Members Club': false,
        Jewelry: 0,
        Gramophones: 0,
        Chapel: false,
        'Boxing Arena': false,
        Cigars: 0
      } // eslint-disable-line max-len
    },

    /**
     * Configuration values and page settings
     */
    config: {
      prodcution_chains: {
        open_workforce_demand: 0,
        open_construction_costs: 0
      }
    }
  },
  mutations: {
    addToPopulationDemands (state, populationObject) {
      state.population.numFarmers = Number(state.population.numFarmers) + Number(populationObject.farmers)
      state.population.numWorkers = Number(state.population.numWorkers) + Number(populationObject.workers)
      state.population.numArtisans = Number(state.population.numArtisans) + Number(populationObject.artisans)
      state.population.numEngineers = Number(state.population.numEngineers) + Number(populationObject.engineers)
      state.population.numInvestors = Number(state.population.numInvestors) + Number(populationObject.investors)
      state.population.numJornaleros = Number(state.population.numJornaleros) + Number(populationObject.jornaleros)
      state.population.numObreros = Number(state.population.numObreros) + Number(populationObject.obreros)
    },

    addBuildings (state, buildings) {
      state.buildingQueue = buildings
    },

    setCoalOption (state, value) {
      state.coalOption = value
    },

    setMarquetryOption (state, value) {
      state.marquetryOption = value
    },

    /**
     * Change the IDs corresponding to the selected productionChain
     * @param {object} state
     * @param {object} idObject
     * {
     *   {integer} chainID
     *   {integer} socialClassID
     *   {integer} worldID
     * }
     */
    changeSelectionIDs (state, idObject) {
      state.selectedProductionChainID = idObject.chainID
      state.selectedSocialClassID = idObject.socialClassID
      state.selectedWorldID = idObject.worldID
    },

    changeWorldID (state, worldID) {
      state.selectedWorldID = worldID
    },

    changeSocialClassID (state, socialClassID) {
      state.selectedSocialClassID = socialClassID
    },

    changeProductionChainID (state, chainID) {
      state.selectedProductionChainID = chainID
    },

    resetSelectionIDs (state, initChain) {
      state.selectedProductionChain = initChain
      state.selectedProductionChainID = 1
      state.selectedSocialClassID = 1
      state.selectedWorldID = 1
    },

    /**
     * Change the selected production chain from bottom navbar.
     * @param {object} state
     * @param {object} newChain The new selected production chain from production-chain.json.
     */
    changeProductionChain (state, newChain) {
      state.selectedProductionChain = newChain
    },

    /**
     * Iitial building of the production and comsumption objects.
     * @param {object} state
     * @param {object} productObject An object with all possible products as keys (value 0)
     * @param {object} consumptionObject An object with all possible products as keys (value 0)
     * Two different parameters needed for two different object references
     */
    buildProductObjects (state, productObject, consumptionObject) {
      state.production = productObject
      state.consumption = consumptionObject
    },

    //
    // Set number of population
    //
    /**
     * Set the number of farmers for demands calculation.
     * @param {object} state
     * @param {float} numFarmers The new number of farmers
     */
    setNumFarmers (state, numFarmers) {
      state.population.numFarmers = numFarmers
    },
    /**
     * Set the number of workers for demands calculation.
     * @param {object} state
     * @param {float} numWorkers The new number of farmers
     */
    setNumWorkers (state, numWorkers) {
      state.population.numWorkers = numWorkers
    },
    /**
     * Set the number of artisans for demands calculation.
     * @param {object} state
     * @param {float} numArtisans The new number of farmers
     */
    setNumArtisans (state, numArtisans) {
      state.population.numArtisans = numArtisans
    },
    /**
     * Set the number of engineers for demands calculation.
     * @param {object} state
     * @param {float} numEngineers The new number of farmers
     */
    setNumEngineers (state, numEngineers) {
      state.population.numEngineers = numEngineers
    },
    /**
     * Set the number of investors for demands calculation.
     * @param {object} state
     * @param {float} numInvestors The new number of farmers
     */
    setNumInvestors (state, numInvestors) {
      state.population.numInvestors = numInvestors
    },
    /**
     * Set the number of jornaleros for demands calculation.
     * @param {object} state
     * @param {float} numJornaleros The new number of farmers
     */
    setNumJornaleros (state, numJornaleros) {
      state.population.numJornaleros = numJornaleros
    },
    /**
     * Set the number of obreros for demands calculation.
     * @param {object} state
     * @param {float} numObreros The new number of farmers
     */
    setNumObreros (state, numObreros) {
      state.population.numObreros = numObreros
    },

    /**
     * Set the calculated populations' demands.
     *
     * @param {object} state
     * @param {object} consumption The calculated populations' demands.
     *          For object structure see ResidentDemandCalculator.computed.totalDemands
     */
    setConsumption (state, consumption) {
      state.consumption = consumption
    },

    /**
     * Toggle (open / close) the workforce demand of a production chain.
     * @param {object} state
     * @param {boolean} isOpen
     */
    toggle_workforce_demand (state, isOpen) {
      state.config.prodcution_chains.open_workforce_demand = Boolean(isOpen)
    },

    /**
     * Toggle (open / close) the construction costs of a production chain.
     * @param {object} state
     * @param {boolean} isOpen
     */
    toggle_construction_costs (state, isOpen) {
      state.config.prodcution_chains.open_construction_costs = Boolean(isOpen)
    }
  },
  actions: {

  }
})
