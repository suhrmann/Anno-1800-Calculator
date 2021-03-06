<template>
  <v-flex xs12>
    <!--
      The following element is needed to trigger the initial rendering of the computed property selectedProductionChain
      The element does render but is not shown
    -->
    <p v-show="false">{{selectedProductionChain}}</p>

    <v-card height="70px" tile>
      <v-bottom-navigation
        v-model="selectedProductionChainID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(chain, i) in selectedProductionChains"
          :key="i"
          :value="chain.id"
        >
          <span>{{ chain.name }}</span>
          <v-avatar>
            <img :src="getImage(chain.img, 'buildings')" :alt="chain.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>

    <!-- Nav Bar: SOCIAL CLASS -->
    <v-card height="70px" tile>
      <v-bottom-navigation
        v-model="selectedPopulationID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(population, i) in selectedPopulations"
          :key="i"
          :value="population.id"
          @click="changePopulation(population.id)"
        >
          <span>{{ population.name }}</span>
          <v-avatar>
            <img :src="getImage(population.img, 'population')" :alt="population.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>

    <!-- Nav Bar: REGION -->
    <v-card height="70px" tile>
      <v-bottom-navigation
        v-model="selectedRegionID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(region, i) in regions"
          :key="i"
          :value="region.id"
          @click="changeRegion(region.id)"
        >
          <span>{{ region.name }}</span>
          <v-avatar>
            <img :src="getImage(region.img, 'regions')" :alt="region.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
  </v-flex>
</template>

<script>
import regions from '@/data/regions.json'
import populations from '@/data/population.json'
import ProductionChains from '@/data/production-chains.json'
import { helperFunctionMixin } from './helperFunctionMixin.js'
import { EventBus } from '@/EventBus'

export default {
  name: 'BottomNavBar',
  mixins: [helperFunctionMixin],
  data () {
    return {
      /* Store data from JSON in component */
      // TODO Load these centrally and access this data e.g. via Vuex
      regions: regions,
      populations: populations,
      productionChainsData: ProductionChains.Production_Chain
    }
  },

  computed: {
    selectedRegionID: {
      get: function () {
        return this.$store.state.selectedregionID
      },
      set: function (selectedRegionID) {
        this.$store.commit('changeRegionID', selectedRegionID)
      }
    },

    selectedPopulationID: {
      get: function () {
        return this.$store.state.selectedpopulationID
      },
      set: function (selectedPopulationID) {
        this.$store.commit('changePopulationID', selectedPopulationID)
      }
    },

    selectedProductionChainID: {
      get: function () {
        return this.$store.state.selectedProductionChainID
      },
      set: function (selectedProductionChainID) {
        this.$store.commit(
          'changeProductionChainID',
          selectedProductionChainID
        )
      }
    },

    /**
     * Search production chain by ChainID.
     *
     * @return {Object} The selected Production Chain
     */
    selectedProductionChain () {
      const selectedPopulationChains = this.selectedProductionChains
      const chainID = this.selectedProductionChainID
      let productionChain = {}

      Object.keys(selectedPopulationChains).forEach((chain) => {
        if (selectedPopulationChains[chain].id === chainID) {
          productionChain = selectedPopulationChains[chain]
        }
      })
      this.setProductionChain(productionChain)
      EventBus.$emit('bottomNavBarChanged')
      return productionChain
    },

    /**
     * Returns a deep copy of all Production Chains
     * @return {Object} A JS Object with all production chain objects init
     */
    fetchAllProductionChains () {
      return JSON.parse(JSON.stringify(this.productionChainsData))
    },

    /**
     * Filter the social classes for the ones available in the selected region.
     *
     * @return {array} The social classes of the selected region.
     */
    selectedPopulations: function () {
      const populations = Object.values(this.populations)
      const region = this.getRegionByID(this.selectedRegionID)
      return populations.filter(
        (population) => region.populationIDs.includes(population.id)
      )
    },

    /**
     * Filter the production chains for the ones available in the selected social class.
     *
     * @return {array} The production chains of the selected region and social class.
     */
    selectedProductionChains: function () {
      const productionChains = Object.values(this.productionChainsData)
      console.log(productionChains)
      return productionChains.filter(
        (chain) => chain.populationID === this.selectedPopulationID
      )
    }
  },
  methods: {
    /**
     * After changing the region, display the first social class.
     *
     * @param {int} regionID The id of the region that caused this reset.
     */
    changeRegion: function (regionID) {
      const selectedRegion = this.getRegionByID(regionID)
      this.selectedRegionID = selectedRegion.id

      const selectedPopulation = this.getPopulationByID(
        selectedRegion.populationIDs[0]
      )
      this.selectedPopulationID = selectedPopulation.id

      this.changePopulation(selectedPopulation.id)
      EventBus.$emit('bottomNavBarChanged')
    },

    /**
     * After changing the social class, display the first production chain.
     *
     * @param {int} populationID The id of the social class that caused this reset.
     */
    changePopulation: function (populationID) {
      const population = this.getPopulationByID(populationID)
      this.selectedProductionChainID = population.firstProductionChain
    },

    /**
     * Changes the VueX State so every Component can access the current productionChain
     * This updates when this.selectedProductionChainID updates
     *
     * @param {Object} productionChain
     */
    setProductionChain (productionChain) {
      this.$store.commit('changeProductionChain', productionChain)
    },

    /**
     * Searches all regions by their region id
     *
     * @param {int} id
     * @return {Object} The selected region Object
     */
    getRegionByID (id) {
      const regions = Object.values(this.regions)
      const selectedRegion = regions.filter((region) => region.id === id)[0]
      return selectedRegion
    },

    /**
     * Searches all social classes by their social class id
     *
     * @param {int} id
     * @return {Object} The selected Social Class Object
     */
    getPopulationByID (id) {
      const populations = Object.values(this.populations)
      const selectedPopulation = populations.filter((population) => population.id === id)[0]
      return selectedPopulation
    }
  }
}
</script>

<style scoped>
</style>
