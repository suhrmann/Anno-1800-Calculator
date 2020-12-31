import createPersistedState from 'vuex-persistedstate'

export default [
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
        selectedregionID: state.selectedregionID,
        selectedpopulationID: state.selectedpopulationID,
        selectedProductionChainID: state.selectedProductionChainID,

        // Store entered population
        population: state.population,

        // Store config value
        config: state.config
      }
    }
  })
]
