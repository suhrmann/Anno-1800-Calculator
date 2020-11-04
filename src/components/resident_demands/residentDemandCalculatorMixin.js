import ConsumptionPerResidence from '@/data/consumption.json'
import Producers from '@/data/producers.json'
import NonProducers from '@/data/non-producers.json'
import Population from '@/data/population.json'

import {
  chainNodeMixin
} from '../production_chains/chainNodeMixin'
import {
  helperFunctionMixin
} from '../helperFunctionMixin'

export default {
  name: 'ResidentDemandCalculator',
  mixins: [chainNodeMixin, helperFunctionMixin],
  data: function () {
    return {
      producers: Producers,
      nonProducers: NonProducers,
      consumptionPerResidence: ConsumptionPerResidence,
      population: Population
    }
  },

  computed: {

    /**
     * "The amount of goods each residence of this tier consumes every second."
     * So for this population based calculation we need to convert it to "consumption per population".
     */
    consumptionPerPopulation () {
      const consumption = JSON.parse(JSON.stringify(this.consumptionPerResidence)) // Clone consumptionPerResidence
      // Convert value per residence to per population
      Object.keys(consumption).forEach(pop => {
        Object.keys(consumption[pop]).forEach(type => {
          Object.keys(consumption[pop][type]).forEach(demand => {
            const populationPerResidence = this.population[pop].residence
            consumption[pop][type][demand] = consumption[pop][type][demand] / populationPerResidence
          })
        })
      })

      console.log('consumption: ', consumption)
      return consumption
    },

    numPopulation: function () {
      return this.$store.state.population
    },

    /**
     * Merge the various population's demands into one object.
     *
     * @return {object} The basic and luxury demands of the population.
     *         Structure: {
     *           basic: {
     *             <Product>: {number} <consumption>
     *             <Demand-Building>: {boolean}
     *           }
     *           luxury: {
     *             <Product>: {number} <consumption>
     *             <Demand-Building>: {boolean}
     *           }
     *         }
     */
    totalDemands: function () {
      // Merge all demands
      const _self = this
      const demands = Object.assign(...Object.keys(this.consumptionPerPopulation).map(
        pop => {
          const numPopStr = 'num' + pop.charAt(0).toUpperCase() + pop.slice(1) // build e.g. "numFarmers" from "farmers"
          return {
            [pop]: {
              basic: _self.calculateDemands(_self.consumptionPerPopulation[pop].basic, _self.numPopulation[numPopStr]),
              luxury: _self.calculateDemands(_self.consumptionPerPopulation[pop].luxury, _self.numPopulation[numPopStr])
            }
          }
        }
      ))

      const totalDemands = {
        basic: {},
        luxury: {}
      }
      // Iterate over all populations
      for (const [pKey, population] of Object.entries(demands)) { // eslint-disable-line no-unused-vars
        // Iterate over basic / luxury
        for (const [dtKey, demandType] of Object.entries(population)) {
          // Iterate over all demands of the current population
          for (const [dKey, demand] of Object.entries(demandType)) {
            // Init demand with 0 if it does not exist in total demands
            if (!totalDemands[dtKey][dKey]) {
              totalDemands[dtKey][dKey] = 0
            }

            // Sum up new demands
            if (typeof demand === 'number') {
              // Demand is consumable -> Add consumption to existing.
              totalDemands[dtKey][dKey] += demand
            } else {
              // Demand has area effect -> Enable / disable
              totalDemands[dtKey][dKey] = totalDemands[dtKey][dKey] || demand
            }
          }
        }
      }
      return totalDemands
    }
  },
  watch: {
    /**
     * Whenever total demands is recalculated, commit changes to Vuex store.
     * @param {object} newConsumption
     * @param {object} oldConsumption Unused.
     */
    totalDemands: function (newConsumption, oldConsumption) {
      this.$store.commit('setConsumption', newConsumption)
    }
  },
  methods: {
    /**
     * Find the image of a building by its produced product.
     *
     * @param {string} product The product name - see producers.json >> Producers.<Producer>.product
     * @return {string} The URL to the image.
     */
    getBuildingImage (product) {
      const allProducers = Object.values(this.producers)
      const producer = allProducers.filter((producer) => producer.product === product)[0]
      if (!producer) {
        const allNonProducers = Object.values(this.nonProducers)
        const nonProducer = allNonProducers.filter((nonProducer) => nonProducer.name === product)[0]
        return nonProducer ? this.getImage(nonProducer.img, 'buildings') : (product + 'Image')
      }
      return this.getImage(producer.img, 'buildings')
    },
    /**
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to "assets" AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage (image, folder) {
      return image ? require(`@/assets/${folder}/${image}`) : ''
    },
    calculateDemands: function (populationDemands, numPopulation) {
      const demands = {}
      for (const [key, demand] of Object.entries(populationDemands)) {
        if (demand) {
          demands[key] = demand * numPopulation
        } else {
          demands[key] = numPopulation > 0
        }
      }
      return demands
    },

    /**
     * Return if the product is consumable.
     *
     * @param {string} product The product
     * @param {float|boolean} usage The usage of the product.
     * @return {boolean} True if the product is consumable, otherwise false.
     */
    isConsumable (product, usage) {
      return typeof usage !== 'boolean'
    },

    /**
     * Format the float usage to pretty output (to avoid linebreaks when bin->dec conversion is not accurate).
     *
     * @param {number} usage The number of usage to format.
     * @return {string} The pretty formatted usage.
     */
    formatUsage: function (usage) {
      return Number(usage).toFixed(5)
    },

    /**
     * Set the selected chain.
     *
     * @param {string} product The selected Product.
     */
    selectChain (product) {
      const helperFunctionMixin = this
      const selectedChain = this.getProductionChainByProductName(product)
      const population = helperFunctionMixin.getPopulationByID(selectedChain.populationID)
      const region = helperFunctionMixin.getRegionByID(population.regionID)
      this.$store.commit(
        'changeSelectionIDs', {
          regionID: region.id,
          populationID: population.id,
          chainID: selectedChain.id
        })
      this.$store.commit('changeProductionChain', selectedChain)
      this.$router.push('/chains')
    }
  }
}
