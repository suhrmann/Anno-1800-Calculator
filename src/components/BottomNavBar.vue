<template>
  <v-flex xs12>
        <!-- Nav Bar: CHAINS -->
     <v-card height="70px" tile>
      <v-bottom-navigation
        v-model="selectedChainGUID"
        absolute
        dark
        height="70"
        grow
      >
        <v-btn
          color="primary"
          text
          v-for="(chain) of chains"
          :key="chain.guid"
          :value="chain.guid"
          @click="changeChain(chain.guid)"
        >
          <span>{{ chain.name }}</span>
          <v-avatar>
            <img :src="getImage(chain.guid, 'factories')" :alt="chain.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
    <!-- Nav Bar: POPLEVELS -->
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
          v-for="(populationLevel) of populationLevels"
          :key="populationLevel.guid"
          :value="populationLevel.guid"
          @click="changePopulationLevel(populationLevel.guid)"
        >
          <span>{{ populationLevel.name }}</span>
          <v-avatar>
            <img :src="getImage(populationLevel.guid, 'populationLevels')" :alt="populationLevel.name + ' Image'">
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
          <span>{{ region.name }}</span>
          <v-avatar>
            <img :src="getImage(region.guid, 'regions')" :alt="region.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
  </v-flex>
</template>

<script>
import { getEndProductsAsTree } from '@/data/anno1800params'
import { helperFunctionMixin } from '@/components/helperFunctionMixin.js'
export default {
  mixins: [helperFunctionMixin],
  mounted () {
    this.regions = getEndProductsAsTree()
    this.changeRegion(this.selectedRegionGUID)
  },
  data () {
    return {
      regions: [],
      populationLevels: [],
      chains: []
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

    selectedChainGUID: {
      get: function () {
        return this.$store.state.selectedProductionChainID
      },
      set: function (selectedProductionChainID) {
        this.$store.commit(
          'changeProductionchainID',
          selectedProductionChainID
        )
      }
    }

  },

  methods: {

    changeRegion (toGUID) {
      console.log('change to Region ' + toGUID)
      this.selectedRegionGUID = toGUID
      const regions = JSON.parse(JSON.stringify(this.regions))
      const region = regions.find(region => region.guid === this.selectedRegionGUID)

      this.populationLevels = []

      this.populationLevels.push(...region.populationLevels)

      this.changePopulationLevel(this.populationLevels[0].guid)
    },

    changePopulationLevel (popLevelGUID) {
      console.log('change to Population ' + popLevelGUID)
      this.selectedPopulationGUID = popLevelGUID

      const popLevels = JSON.parse(JSON.stringify(this.populationLevels))
      const popLevel = popLevels.find(popLevel => popLevel.guid === this.selectedPopulationGUID)

      this.chains = []
      this.chains.push(...popLevel.factoryData)
    },
    changeChain (chainGUID) {
      console.log('change to Chain chainGUID')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
