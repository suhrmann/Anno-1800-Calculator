import Consumption from '../../data/consumption.json';
import Producers from '../../data/producers.json';
import NonProducers from '../../data/non-producers.json';
import {
  chainNodeMixin
} from '../production_chains/chainNodeMixin';
import {
  helperFunctionMixin
} from '../helperFunctionMixin';

export default {
  name: 'ResidentDemandCalculator',
  mixins: [chainNodeMixin, helperFunctionMixin],
  data: function () {
    return {
      producers: Producers.Producers,
      nonProducers: NonProducers.buildings,
      consumption: Consumption,
    };
  },
  computed: {
    // Computed properties for Vuex values
    numFarmers: function () {
      return this.$store.state.population.numFarmers;
    },
    numWorkers: function () {
      return this.$store.state.population.numWorkers;
    },
    numArtisans: function () {
      return this.$store.state.population.numArtisans;
    },
    numEngineers: function () {
      return this.$store.state.population.numEngineers;
    },
    numInvestors: function () {
      return this.$store.state.population.numInvestors;
    },
    numJornaleros: function () {
      return this.$store.state.population.numJornaleros;
    },
    numObreros: function () {
      return this.$store.state.population.numObreros;
    },


    // Compute population demands
    farmersDemands: function () {
      const farmersDemands = this.consumption.Consumption.farmers;
      return {
        basic: this.calculateDemands(farmersDemands.basic, this.numFarmers),
        luxury: this.calculateDemands(farmersDemands.luxury, this.numFarmers),
      };
    },
    workersDemands: function () {
      const workersDemands = this.consumption.Consumption.workers;
      return {
        basic: this.calculateDemands(workersDemands.basic, this.numWorkers),
        luxury: this.calculateDemands(workersDemands.luxury, this.numWorkers),
      };
    },
    artisansDemands: function () {
      const artisansDemands = this.consumption.Consumption.artisans;
      return {
        basic: this.calculateDemands(artisansDemands.basic, this.numArtisans),
        luxury: this.calculateDemands(artisansDemands.luxury, this.numArtisans),
      };
    },
    engineersDemands: function () {
      const engineersDemands = this.consumption.Consumption.engineers;
      return {
        basic: this.calculateDemands(engineersDemands.basic, this.numEngineers),
        luxury: this.calculateDemands(engineersDemands.luxury, this.numEngineers),
      };
    },
    investorsDemands: function () {
      const investorsDemands = this.consumption.Consumption.investors;
      return {
        basic: this.calculateDemands(investorsDemands.basic, this.numInvestors),
        luxury: this.calculateDemands(investorsDemands.luxury, this.numInvestors),
      };
    },
    jornalerosDemands: function () {
      const jornalerosDemands = this.consumption.Consumption.jornaleros;
      return {
        basic: this.calculateDemands(jornalerosDemands.basic, this.numJornaleros),
        luxury: this.calculateDemands(jornalerosDemands.luxury, this.numJornaleros),
      };
    },
    obrerosDemands: function () {
      const obrerosDemands = this.consumption.Consumption.obreros;
      return {
        basic: this.calculateDemands(obrerosDemands.basic, this.numObreros),
        luxury: this.calculateDemands(obrerosDemands.luxury, this.numObreros),
      };
    },

    /**
     * Merge the various population's demands into one object.
     *
     * @return {object} The basic and luxury demands of the popuation.
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
      const demands = {
        farmers: this.farmersDemands,
        workers: this.workersDemands,
        artisans: this.artisansDemands,
        engineers: this.engineersDemands,
        investors: this.investorsDemands,
        jornaleros: this.jornalerosDemands,
        obreros: this.obrerosDemands,
      };

      const totalDemands = {
        basic: {},
        luxury: {}
      };
      // Iterate over all populations
      for (const [pKey, population] of Object.entries(demands)) { // eslint-disable-line no-unused-vars
        // Iterate over basic / luxury
        for (const [dtKey, demandType] of Object.entries(population)) {
          // Iterate over all demands of the current population
          for (const [dKey, demand] of Object.entries(demandType)) {
            // Init demand with 0 if it does not exist in total demands
            if (!totalDemands[dtKey][dKey]) {
              totalDemands[dtKey][dKey] = 0;
            }

            // Sum up new demands
            if (typeof demand === 'number') {
              // Demand is consumable -> Add consumption to existing.
              totalDemands[dtKey][dKey] += demand;
            } else {
              // Demand has area effect -> Enable / disable
              totalDemands[dtKey][dKey] = totalDemands[dtKey][dKey] || demand;
            }
          }
        }
      }
      return totalDemands;
    },
  },
  watch: {
    /**
     * Whenever total demands is recalculated, commit changes to Vuex store.
     * @param {object} newConsumption
     * @param {object} oldConsumption Unused.
     */
    totalDemands: function (newConsumption, oldConsumption) {
      this.$store.commit('setConsumption', newConsumption);
    },
  },
  methods: {
    /**
     * Find the image of a building by its produced product.
     *
     * @param {string} product The product name - see producers.json >> Producers.<Producer>.product
     * @return {string} The URL to the image.
     */
    getBuildingImage(product) {
      const allProducers = Object.values(this.producers);
      const producer = allProducers.filter((producer) => producer.product === product)[0];
      if (!producer) {
        const allNonProducers = Object.values(this.nonProducers);
        const nonProducer = allNonProducers.filter((nonProducer) => nonProducer.name === product)[0];
        return nonProducer ? this.getImage(nonProducer.img, 'buildings') : (product + 'Image');
      }
      return this.getImage(producer.img, 'buildings');
    },
    /**
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to "assets" AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage(image, folder) {
      return image ? require(`../../assets/${folder}/${image}`) : '';
    },
    calculateDemands: function (populationDemands, numPopulation) {
      const demands = {};
      for (const [key, demand] of Object.entries(populationDemands)) {
        if (demand) {
          demands[key] = demand * numPopulation;
        } else {
          demands[key] = numPopulation > 0;
        }
      }
      return demands;
    },

    /**
     * Return if the product is consumable.
     *
     * @param {string} product The product
     * @param {float|boolean} usage The usage of the product.
     * @return {boolean} True if the product is consumable, otherwise false.
     */
    isConsumable(product, usage) {
      return typeof usage !== 'boolean';
    },

    /**
     * Format the float usage to pretty output (to avoid linebreaks when bin->dec conversion is not accurate).
     *
     * @param {float} usage The number of usage to format.
     * @return {string} The pretty formatted usage.
     */
    formatUsage: function (usage) {
      return Math.round(usage * 100000) / 100000;
    },

    /**
     * Set the selected chain.
     *
     * @param {string} product The selected Product.
     */
    selectChain(product) {
      const helperFunctionMixin = this;
      const selectedChain = this.getProductionChainByProductName(product);
      const socialClass = helperFunctionMixin.getSocialClassByID(selectedChain.socialClassID);
      const world = helperFunctionMixin.getWorldByID(socialClass.worldID);
      this.$store.commit(
        'changeSelectionIDs', {
          worldID: world.id,
          socialClassID: socialClass.id,
          chainID: selectedChain.id,
        });
      this.$store.commit('changeProductionChain', selectedChain);
      this.$router.push('/chains');
    },
  },
};
