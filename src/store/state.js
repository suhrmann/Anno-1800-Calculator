import { farmersGUID, oldWorldGUID } from '@/data/anno1800params'

export default {
  selectedDLCs: [0],
  selectedProductionChain: {
    id: 1,
    regionGUID: 5000000,
    chain: 'Timber',
    populationID: 1,
    finalProduct: 'Timber',
    name: 'Sawmill',
    img: 'farmers/timber.webp',
    alternative: '',
    children: [
      {
        name: 'Lumberjack Hut',
        regionGUID: 5000000,
        alternative: '',
        children: null
      }
    ]
  },
  selectedRegionGUID: oldWorldGUID,
  selectedPopulationGUID: farmersGUID,
  selectedProductionChainID: 1, // TODO GUID of TODO

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
    numScholars: 0,

    numJornaleros: 0,
    numObreros: 0,

    numExplorers: 0,
    numTechnicians: 0,

    numShepherds: 0,
    numElders: 0
  },

  /**
   * The calculated production per good.
   * Unit: Production per Minute
   */
  production: null,

  /**
   * The calculated consumption per good. Inited with no needs / consumption.
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
      'Penny Farthingss': 0,
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
      open_workforce_need: 0,
      open_construction_costs: 0
    },
    needs: {
      population_input_tab: 'population',
      is_sorted_by: 'isConsumable'
    }
  }
}
