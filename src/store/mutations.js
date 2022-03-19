import { farmersGUID, oldWorldGUID } from '@/data/anno1800params'

export default {
  setSelectedDLCs (state, dlcsArray) {
    state.selectedDLCs = dlcsArray
  },
  addToPopulationNeeds (state, populationObject) {
    state.population.numFarmers =
      Number(state.population.numFarmers) + Number(populationObject.farmers)
    state.population.numWorkers =
      Number(state.population.numWorkers) + Number(populationObject.workers)
    state.population.numArtisans =
      Number(state.population.numArtisans) + Number(populationObject.artisans)
    state.population.numEngineers =
      Number(state.population.numEngineers) + Number(populationObject.engineers)
    state.population.numInvestors =
      Number(state.population.numInvestors) + Number(populationObject.investors)
    state.population.numJornaleros =
      Number(state.population.numJornaleros) + Number(populationObject.jornaleros)
    state.population.numObreros =
      Number(state.population.numObreros) + Number(populationObject.obreros)
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
   * Change the GUIDs corresponding to the selected productionChain
   * @param {object} state
   * @param {object} guidObject
   * {
   *   {integer} chainID
   *   {integer} populationGUID
   *   {integer} regionGUID
   * }
   */
  changeSelectionGUIDs (state, guidObject) {
    state.selectedProductionChainID = guidObject.chainID
    state.selectedPopulationGUID = guidObject.populationGUID
    state.selectedRegionGUID = guidObject.regionGUID
  },

  changeRegionGUID (state, regionGUID) {
    state.selectedRegionGUID = regionGUID
  },

  changePopulationGUID (state, populationGUID) {
    state.selectedPopulationGUID = populationGUID
  },

  changeProductionchainID (state, chainID) {
    state.selectedProductionChainID = chainID
  },

  resetSelectionGUIDs (state, initChain) {
    state.selectedProductionChain = initChain
    state.selectedProductionChainID = 1
    state.selectedPopulationGUID = farmersGUID
    state.selectedRegionGUID = oldWorldGUID
  },

  /**
   * Change the selected production chain from bottom navbar.
   * @param {object} state
   * @param {object} newChain The new selected production chain from production-chains.json.
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
   * Set the number of farmers for needs calculation.
   * @param {object} state
   * @param {float} numFarmers The new number of farmers
   */
  setNumFarmers (state, numFarmers) {
    state.population.numFarmers = numFarmers
  },
  /**
   * Set the number of workers for needs calculation.
   * @param {object} state
   * @param {float} numWorkers The new number of workers
   */
  setNumWorkers (state, numWorkers) {
    state.population.numWorkers = numWorkers
  },
  /**
   * Set the number of artisans for needs calculation.
   * @param {object} state
   * @param {float} numArtisans The new number of artisans
   */
  setNumArtisans (state, numArtisans) {
    state.population.numArtisans = numArtisans
  },
  /**
   * Set the number of engineers for needs calculation.
   * @param {object} state
   * @param {float} numEngineers The new number of engineers
   */
  setNumEngineers (state, numEngineers) {
    state.population.numEngineers = numEngineers
  },
  /**
   * Set the number of investors for needs calculation.
   * @param {object} state
   * @param {float} numInvestors The new number of investors
   */
  setNumInvestors (state, numInvestors) {
    state.population.numInvestors = numInvestors
  },
  /**
   * Set the number of scholars for needs calculation.
   * @param {object} state
   * @param {float} numScholars The new number of scholars
   */
  setNumScholars (state, numScholars) {
    state.population.numScholars = numScholars
  },
  /**
   * Set the number of jornaleros for needs calculation.
   * @param {object} state
   * @param {float} numJornaleros The new number of farmers
   */
  setNumJornaleros (state, numJornaleros) {
    state.population.numJornaleros = numJornaleros
  },
  /**
   * Set the number of obreros for needs calculation.
   * @param {object} state
   * @param {float} numObreros The new number of farmers
   */
  setNumObreros (state, numObreros) {
    state.population.numObreros = numObreros
  },

  /**
   * Set the number of obreros for needs calculation.
   * @param {object} state
   * @param {float} numExplorers The new number of farmers
   */
  setNumExplorers (state, numExplorers) {
    state.population.numExplorers = numExplorers
  },
  /**
   * Set the number of obreros for needs calculation.
   * @param {object} state
   * @param {float} numTechnicians The new number of farmers
   */
  setNumTechnicians (state, numTechnicians) {
    state.population.numTechnicians = numTechnicians
  },

  /**
   * Set the number of obreros for needs calculation.
   * @param {object} state
   * @param {float} numShepherds The new number of farmers
   */
  setNumShepherds (state, numShepherds) {
    state.population.numShepherds = numShepherds
  },
  /**
   * Set the number of obreros for needs calculation.
   * @param {object} state
   * @param {float} numElders The new number of farmers
   */
  setNumElders (state, numElders) {
    state.population.numElders = numElders
  },

  /**
   * Set the calculated populations' needs.
   *
   * @param {object} state
   * @param {object} consumption The calculated populations' needs.
   *          For object structure see ResidentNeedCalculator.computed.totalNeeds
   */
  setConsumption (state, consumption) {
    state.consumption = consumption
  },

  /**
   * Toggle (open / close) the workforce need of a production chain.
   * @param {object} state
   * @param {boolean} isOpen
   */
  toggle_workforce_need (state, isOpen) {
    state.config.prodcution_chains.open_workforce_need = Boolean(isOpen)
  },

  /**
   * Toggle (open / close) the construction costs of a production chain.
   * @param {object} state
   * @param {boolean} isOpen
   */
  toggle_construction_costs (state, isOpen) {
    state.config.prodcution_chains.open_construction_costs = Boolean(isOpen)
  },

  /**
   * Change the input of population for needs: Population or residence
   * @param state
   * @param newTab {string} 'population' or 'residence'
   */
  set_population_tab (state, newTab) {
    if (newTab === 'population' || newTab === 'residence') {
      state.config.needs.population_input_tab = String(newTab)
    } else {
      console.error('Unknown type of population input ' + newTab + '.')
    }
  },

  /**
   * Toggle (open / close) the construction costs of a production chain.
   * @param {object} state
   * @param {string} sortedNeedsBy
   */
  sort_needs_by (state, sortedNeedsBy) {
    state.config.needs.is_sorted_by = sortedNeedsBy
  }
}
