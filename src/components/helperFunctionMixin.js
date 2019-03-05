import producers from '../data/producers.json';
import nonProducers from '../data/non-producers.json';
import { chainNodeMixin } from './production_chains/chainNodeMixin';

export const helperFunctionMixin = {
  mixins: [chainNodeMixin],
  data() {
    return {
      productionTimes: [],
    };
  },
  computed: {
    producers() {
      return JSON.parse(JSON.stringify(producers));
    },
    nonProducers() {
      return JSON.parse(JSON.stringify(nonProducers));
    },
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
    getImage(image, folder) {
      return image ? require(`../assets/${folder}/${image}`) : '';
    },

    /**
     * Extracts all production Times of a given production chain
     *
     * @param {Object} productionChain a productionChain object as defined in productionChain.json
     * @return {Array} An Array containing all objects production times
     */

    getProductionTimes(productionChain) {
      this.productionTimes = [];
      const chainNodeMixin = this;
      chainNodeMixin.iterateProductionChain(
          productionChain,
          (rootElement) => {
            this.fetchProductionTime(rootElement);
          },
          (element) => {
            this.fetchProductionTime(element);
          },
          false);
      return this.productionTimes;
    },

    /**
     * Calculates the Least Common Multiplier (LCM) of a given Array containing productiom times
     *
     * @param {Array} prodTimeArray an array containing all production times (numbers) for which the least common multiplier is wanted
     * @return {Number} The least common multiplier
     */
    getLCM(prodTimeArray) {
      const productionTimesArray = JSON.parse(JSON.stringify(prodTimeArray));

      const gcd = (a, b) => a ? gcd(b % a, a) : b;

      const lcm = (a, b) => a * b / gcd(a, b);


      const lcmOfArray = productionTimesArray.reduce(lcm); // Returns 60
      // console.log(lcmOfArray);
      return lcmOfArray;
    },

    /**
     * Extracts the smalles productiom time of a given Array containing productiom times
     *
     * @param {Array} prodTimeArray an array containing all production times (numbers) for which the least common multiplier is wanted
     * @return {Number} the shortest production time
     */
    getShortestprodTime(prodTimeArray) {
      return Math.min(...prodTimeArray);
    },

    /**
     * Returns the production time property of a chain node building
     *
     * @param {Object} node a node Object which is part of a productionChain object
     * @return {void} pushes the respective production time to a v-data-property array
     */

    fetchProductionTime(node) {
      const building = this.getBuildingByName(node.name);
      this.productionTimes.push(building.productionTime);
    },

    /**
     * Search for building by its name.
     *
     * @param {String} name The buildings name.
     * @return {Object} A JS Object representing the matching producer
     */
    getBuildingByName(name) {
      const buildings = this.producers.Producers;
      for (const building in buildings) {
        if (buildings[building].building === name) {
          return buildings[building];
        }
      }
      console.log('building not found :(');
    },
  },
};
