import { populationLevels, regions } from '@/data/anno1800params'
import anno1800icons from '@/data/anno1800icons'
import { chainNodeMixin } from './production_chains/chainNodeMixin'

// LEGACY DATA
import producers from '@/data/producers.json'
import nonProducers from '@/data/non-producers.json'
import ProductionChains from '@/data/production-chains.json'

/**
 * Fallback icon if icon could not be found.
 * @type {string}
 */
const DEFAULT_ICON_PATH = '@/assets/question-mark.png'

export const helperFunctionMixin = {
  mixins: [chainNodeMixin],
  data () {
    return {
      productionTimes: []
    }
  },
  computed: {
    producerFile () {
      return JSON.parse(JSON.stringify(producers))
    },
    nonProducerFile () {
      return JSON.parse(JSON.stringify(nonProducers))
    },
    getMarquetryWorkshopState () {
      return this.$store.state.marquetryOption
    },
    getCoalState () {
      return this.$store.state.coalOption
    }

  },
  methods: {
    /**
     * Get the image by its Anno 1800 GUID.
     * Workaround to load images dynamically in for-loop.
     *
     * @param {number} guid The image to load.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage (guid) {
      const icon = anno1800icons.find(icon => icon.guid === guid)
      const iconPath = icon ? icon.iconPath : undefined
      if (!iconPath) console.error('No ICON found for guid ', guid)
      return iconPath ? require(`@/assets/${iconPath}`) : require(DEFAULT_ICON_PATH)
    },

    /**
     * Legacy: Used to load images of Production Chains TODO Replace with GUID usage!
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to assets/ AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getDirectImage (image, folder) {
      return image ? require(`@/assets/${folder}/${image}`) : require(DEFAULT_ICON_PATH)
    },

    /**
     * Extracts all production Times of a given production chain
     *
     * @param {Object} productionChain a productionChain object as defined in production-chains.json
     * @return {Array} An Array containing all objects production times
     */

    getAllProductionTimesOfChain (productionChain) {
      this.productionTimes = []
      const chainNodeMixin = this
      chainNodeMixin.iterateProductionChain(
        productionChain,
        rootElement => {
          this.fetchProductionTime(rootElement)
        },
        element => {
          this.fetchProductionTime(element)
        },
        false
      )
      return this.productionTimes
    },

    /**
     * Calculates the Least Common Multiplier (LCM) of a given Array containing productiom times
     *
     * @param {Array} prodTimeArray an array containing all production times (numbers) for
     *  which the least common multiplier is wanted
     * @return {Number} The least common multiplier
     */
    getLCM (prodTimeArray) {
      const productionTimesArray = JSON.parse(JSON.stringify(prodTimeArray))

      const gcd = (a, b) => (a ? gcd(b % a, a) : b)

      const lcm = (a, b) => (a * b) / gcd(a, b)

      return productionTimesArray.reduce(lcm) // Returns 60
    },

    /**
     * Extracts the smalles productiom time of a given Array containing productiom times
     *
     * @param {Array} prodTimeArray an array containing all production times (numbers) for
     *  which the least common multiplier is wanted
     * @return {Number} the shortest production time
     */
    getShortestprodTime (prodTimeArray) {
      return Math.min(...prodTimeArray)
    },

    /**
     * Returns the production time property of a chain node building
     *
     * @param {Object} node a node Object which is part of a productionChain object
     * @return {void} pushes the respective production time to a v-data-property array
     */

    fetchProductionTime (node) {
      const building = this.getBuildingByName(node.name, node.regionGUID)
      this.productionTimes.push(building.productionTime)
    },

    /**
     * Search for building by its name.
     *
     * @param {String} name The buildings name.
     * @param {int} regionGUID The current regionGUID
     * @return {Object} A JS Object representing the matching producer
     */
    getBuildingByName (name, regionGUID) {
      const buildings = this.producerFile
      const helperFunctionMixin = this

      if (this.$store.state.selectedProductionChain.id === 26 || this.$store.state.selectedProductionChain.id === 37 || this.$store.state.selectedProductionChain.id === 41) {
        if (name === 'Marquetry Workshop') {
          if (helperFunctionMixin.getMarquetryWorkshopState === 'old') {
            return buildings['Marquetry Workshop Old']
          } else {
            return buildings['Marquetry Workshop']
          }
        }

        if (name === 'Lumberjack Hut') {
          if (helperFunctionMixin.getMarquetryWorkshopState === 'old') {
            return buildings['Lumberjack Hut Old']
          } else {
            return buildings['Lumberjack Hut']
          }
        }
      }

      if (name === 'Charcoal Kiln' || name === 'Coal Mine') {
        if (helperFunctionMixin.getCoalState === 'char') {
          return buildings['Charcoal Kiln']
        } else {
          return buildings['Coal Mine']
        }
      }

      for (const building in buildings) {
        if (
          buildings[building].building === name &&
          buildings[building].regionGUID === regionGUID
        ) {
          return buildings[building]
        }
      }
      console.error('Building "' + name + '" not found :(')
    },

    /**
     * Get a building / producer by the produced item.
     *
     * @param {string} productName The name of the product; Check is case-insensitive
     * @return {Object} A JS Object representing the matching producer
     *
     * TODO Distinguishe between Old and New World!
     */
    getBuildingByProduct (productName) {
      const buildings = this.producerFile
      const productNameLC = productName.toLowerCase() // To lower case

      for (const building in buildings) {
        if (buildings[building].product.toLowerCase() === productNameLC) {
          return buildings[building]
        }
      }
      console.error('Building for product "' + productName + '" not found :(')
    },

    getProductionChainById (id) {
      const productionChains = ProductionChains.Production_Chain
      let chainObject = {}
      Object.keys(productionChains).some(chain => {
        if (productionChains[chain].id === id) {
          chainObject = productionChains[chain]
          return chainObject
        }
      })
      return chainObject
    },

    /**
     * Searches all regions by their region guid
     *
     * @param {int} guid
     * @return {Object} The selected region Object
     */
    getRegionByGUID (guid) {
      const selectedRegion = regions.find(region => region.guid === guid)
      return selectedRegion
    },

    /**
     * Searches all population levels by their population level guid
     *
     * @param {int} guid
     * @return {Object} The selected population level Object
     */
    getPopulationByGUID (guid) {
      const selectedPopulation = populationLevels.find(population => population.guid === guid)
      return selectedPopulation
    },

    /**
     * Round a number to a maximum of digits.
     * If its an integer, dont change; if its a float round using toFixed
     *
     * @param {number} num The number to round.
     * @param {int} digits The number of digits to round to.
     * @return {string} The resulting, nicely rounded number.
     */
    toFixedVariable (num, digits) {
      return Number.isInteger(num) ? num : num.toFixed(digits)
    }
  }
}
