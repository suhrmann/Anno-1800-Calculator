import producers from '@/data/producers.json'
import nonProducers from '@/data/non-producers.json'
import ProductionChains from '@/data/production-chains.json'
import Worlds from '@/data/regions.json'
import SocialClasses from '@/data/population.json'
import {
  chainNodeMixin
} from './production_chains/chainNodeMixin'

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
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to assets/ AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage (image, folder) {
      return image ? require(`@/assets/${folder}/${image}`) : ''
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

      const lcmOfArray = productionTimesArray.reduce(lcm) // Returns 60
      // console.log(lcmOfArray);
      return lcmOfArray
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
      const building = this.getBuildingByName(node.name, node.worldID)
      this.productionTimes.push(building.productionTime)
    },

    /**
     * Search for building by its name.
     *
     * @param {String} name The buildings name.
     * @param {int} worldID The current worldID
     * @return {Object} A JS Object representing the matching producer
     */
    getBuildingByName (name, worldID) {
      const buildings = this.producerFile
      const helperFunctionMixin = this

      if (this.$store.state.selectedProductionChain.id === 26 || this.$store.state.selectedProductionChain.id === 37) {
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
          buildings[building].worldID === worldID
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
     * Searches all worlds by their world id
     *
     * @param {int} id
     * @return {Object} The selected World Object
     */
    getWorldByID (id) {
      const worlds = Object.values(Worlds)
      const selectedWorld = worlds.filter(world => world.id === id)[0]
      return selectedWorld
    },

    /**
     * Searches all social classes by their social class id
     *
     * @param {int} id
     * @return {Object} The selected Social Class Object
     */
    getSocialClassByID (id) {
      const populations = Object.values(SocialClasses)
      const selectedSocialClass = populations.filter(
        population => population.id === id
      )[0]
      return selectedSocialClass
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
