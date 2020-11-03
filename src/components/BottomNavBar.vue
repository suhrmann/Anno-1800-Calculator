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
        v-model="selectedpopulationID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(population, i) in selectedSocialClasses"
          :key="i"
          :value="population.id"
          @click="changeSocialClass(population.id)"
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
        v-model="selectedregionID"
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
      // Init selection
      // selectedregionID: 1,
      // selectedpopulationID: 1,
      // selectedProductionChainID: 1,

      /* Store data from JSON in component */
      // TODO Load these centrally and access this data e.g. via Vuex
      regions: regions,
      populations: populations,
      productionChainsData: ProductionChains.Production_Chain
    }
  },

  computed: {
    selectedregionID: {
      get: function () {
        return this.$store.state.selectedregionID
      },
      set: function (selectedregionID) {
        this.$store.commit('changeregionID', selectedregionID)
      }
    },

    selectedpopulationID: {
      get: function () {
        return this.$store.state.selectedpopulationID
      },
      set: function (selectedpopulationID) {
        this.$store.commit('changepopulationID', selectedpopulationID)
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
      const selectedSocialClassChains = this.selectedProductionChains
      const chainID = this.selectedProductionChainID
      let productionChain = {}

      Object.keys(selectedSocialClassChains).forEach((chain) => {
        if (selectedSocialClassChains[chain].id === chainID) {
          productionChain = selectedSocialClassChains[chain]
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
    selectedSocialClasses: function () {
      const populations = Object.values(this.populations)
      return populations.filter(
        (population) => population.regionID === this.selectedregionID
      )
    },

    /**
     * Filter the production chains for the ones available in the selected social class.
     *
     * @return {array} The production chains of the selected region and social class.
     */
    selectedProductionChains: function () {
      const productionChains = Object.values(this.productionChainsData)
      return productionChains.filter(
        (chain) => chain.populationID === this.selectedpopulationID
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
      this.selectedregionID = selectedRegion.id

      const selectedSocialClass = this.getSocialClassByID(
        selectedRegion.populationIDs[0]
      )
      this.selectedpopulationID = selectedSocialClass.id

      this.changeSocialClass(selectedSocialClass.id)
      EventBus.$emit('bottomNavBarChanged')
    },

    /**
     * After changing the social class, display the first production chain.
     *
     * @param {int} populationID The id of the social class that caused this reset.
     */
    changeSocialClass: function (populationID) {
      const population = this.getSocialClassByID(populationID)
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
    getSocialClassByID (id) {
      const populations = Object.values(this.populations)
      const selectedSocialClass = populations.filter((population) => population.id === id)[0]
      return selectedSocialClass
    }
  }
}
</script>

<style scoped>
</style>
