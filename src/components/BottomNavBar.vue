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
          v-for="(chain) of selectedProductionChains"
          :key="chain.id"
          :value="chain.id"
        >
          <span>{{ chain.name }}</span>
          <v-avatar>
            <img :src="getDirectImage(chain.img, 'buildings')" :alt="chain.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>

    <!-- Nav Bar: POPULATION LEVEL -->
    <v-card height="70px" tile>
      <v-bottom-navigation
        v-model="selectedPopulationGUID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(population) of selectedPopulations"
          :key="population.guid"
          :value="population.guid"
          @click="changePopulation(population.guid)"
        >
          <span>{{ population.locaText.english }}</span>
          <v-avatar>
            <img :src="getImage(population.guid)" :alt="population.locaText.english + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>

    <!-- Nav Bar: REGION -->
    <v-card height="70px" tile>
      <v-bottom-navigation
        v-model="selectedRegionGUID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(region) of regions"
          :key="region.guid"
          :value="region.guid"
          @click="changeRegion(region.guid)"
        >
          <span>{{ region.locaText.english }}</span>
          <v-avatar>
            <img :src="getImage(region.guid)" :alt="region.locaText.english + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
  </v-flex>
</template>

<script>
import { regions, populationLevels } from '@/data/anno1800params'
import legacyPopulations from '@/data/population'
import ProductionChains from '@/data/production-chains.json'
import { helperFunctionMixin } from './helperFunctionMixin.js'
import { EventBus } from '@/EventBus'

export default {
  name: 'BottomNavBar',
  mixins: [helperFunctionMixin],
  data () {
    return {
      /* Store data from JSON in component */
      regions: regions,
      populations: populationLevels,
      productionChainsData: ProductionChains.Production_Chain
    }
  },

  computed: {
    selectedRegionGUID: {
      get: function () {
        return this.$store.state.selectedRegionGUID
      },
      set: function (selectedRegionGUID) {
        this.$store.commit('changeRegionGUID', selectedRegionGUID)
      }
    },

    selectedPopulationGUID: {
      get: function () {
        return this.$store.state.selectedPopulationGUID
      },
      set: function (selectedPopulationGUID) {
        this.$store.commit('changePopulationGUID', selectedPopulationGUID)
      }
    },

    selectedProductionChainID: {
      get: function () {
        return this.$store.state.selectedProductionChainID
      },
      set: function (selectedProductionChainID) {
        this.$store.commit(
          'changeProductionchainID',
          selectedProductionChainID
        )
      }
    },

    /**
     * Search production chain by chainID.
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
     * Filter the population levels for the ones available in the selected region.
     *
     * @return {array} The population levels of the selected region.
     */
    selectedPopulations: function () {
      // const populationGroup = populationGroups.find(popGroup => popGroup.region === this.selectedRegionGUID)
      return populationLevels.filter(popLevel => popLevel.region === this.selectedRegionGUID)
    },

    /**
     * Filter the production chains for the ones available in the selected population level.
     *
     * @return {array} The production chains of the selected region and population level.
     */
    selectedProductionChains: function () {
      const productionChains = Object.values(this.productionChainsData)
      return productionChains.filter((chain) => chain.populationGUID === this.selectedPopulationGUID)
    }
  },
  methods: {
    /**
     * After changing the region, display the first population level.
     *
     * @param {int} regionGUID The id of the region that caused this reset.
     */
    changeRegion: function (regionGUID) {
      this.selectedRegionGUID = regionGUID

      const selectedPopulation = populationLevels.find(popLevel => popLevel.region === this.selectedRegionGUID)
      this.selectedPopulationGUID = selectedPopulation.guid

      this.changePopulation(selectedPopulation.guid)
      EventBus.$emit('bottomNavBarChanged')
    },

    /**
     * After changing the population level, display the first production chain.
     *
     * @param {int} populationGUID The id of the population level that caused this reset.
     */
    changePopulation: function (populationGUID) {
      const legacyPopulation = Object.values(legacyPopulations).filter((pop) => pop.guid === populationGUID)
      const firstProductionChainID = legacyPopulation[0].firstProductionChain
      this.selectedProductionChainID = firstProductionChainID
    },

    /**
     * Changes the VueX State so every Component can access the current productionChain
     * This updates when this.selectedProductionChainID updates
     *
     * @param {Object} productionChain
     */
    setProductionChain (productionChain) {
      this.$store.commit('changeProductionChain', productionChain)
    }
  }
}
</script>

<style scoped>
</style>
