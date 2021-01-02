<template>
  <v-container>
    <v-row>
      <v-col class="col-1 pa-1" v-for="(cost, i) in costArray" :key="i">
        <v-row class="col-border">
          <v-col>
            <v-flex class="text-center">
              <v-avatar size="32">
                <img class="center" :src="getImage(cost.image, cost.imageFileFolder)" :alt="cost.name">
              </v-avatar>
              <p class="pb-0 mb-0">{{cost.name}}</p>
            </v-flex>
          </v-col>
        </v-row>
        <v-row class="col-border">
          <v-col class="pt-0 text-right font-weight-black">
            <b> {{cost.amount}} </b>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { helperFunctionMixin } from '../helperFunctionMixin.js'
import { chainNodeMixin } from './chainNodeMixin.js'

export default {
  mixins: [chainNodeMixin, helperFunctionMixin],
  props: {
    chain: {
      type: Object
    }
  },
  data () {
    return {
      requiredResources: {
        cash: 0,
        cashUpkeep: 0,
        wood: 0,
        bricks: 0,
        steel: 0,
        window: 0,
        concrete: 0,
        influence: 0,
        wanza_timber: 0,
        mud_bricks: 0
      }
    }
  },

  computed: {
    costArray () {
      const filteredArray = []

      if (this.requiredResources.cash !== 0 && this.requiredResources.cash !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.cash,
          name: 'Cash',
          image: 'icon-credits.webp',
          imageFileFolder: 'icons'
        })
      }

      if (this.requiredResources.cashUpkeep !== 0 && this.requiredResources.cashUpkeep !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.cashUpkeep,
          name: 'Upkeep',
          image: 'balance.webp',
          imageFileFolder: 'icons'
        })
      }
      if (this.requiredResources.wood !== 0 && this.requiredResources.wood !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.wood,
          name: 'Wood',
          image: 'wood.webp',
          imageFileFolder: 'buildings/farmers'
        })
      }
      if (this.requiredResources.bricks !== 0 && this.requiredResources.bricks !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.bricks,
          name: 'Bricks',
          image: 'bricks.webp',
          imageFileFolder: 'buildings/workers'
        })
      }
      if (this.requiredResources.steel !== 0 && this.requiredResources.steel !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.steel,
          name: 'Steel',
          image: 'steel.webp',
          imageFileFolder: 'buildings/workers'
        })
      }
      if (this.requiredResources.window !== 0 && this.requiredResources.window !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.window,
          name: 'Window',
          image: 'windows.webp',
          imageFileFolder: 'buildings/artisans'
        })
      }
      if (this.requiredResources.concrete !== 0 && this.requiredResources.concrete !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.concrete,
          name: 'Concrete',
          image: 'reinforced-concrete.webp',
          imageFileFolder: 'buildings/engineers'
        })
      }

      if (this.requiredResources.wanza_timber !== 0 && this.requiredResources.wanza_timber !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.wanza_timber,
          name: 'Wanza',
          image: 'wansa-wood.webp',
          imageFileFolder: 'buildings/shepherds'
        })
      }

      if (this.requiredResources.mud_bricks !== 0 && this.requiredResources.mud_bricks !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.mud_bricks,
          name: 'Mud Bricks',
          image: 'mud-bricks.webp',
          imageFileFolder: 'buildings/elders'
        })
      }

      if (this.requiredResources.influence !== 0 && this.requiredResources.influence !== undefined) {
        filteredArray.push({
          amount: this.requiredResources.influence,
          name: 'Influence',
          image: 'influence.webp'
        })
      }

      return filteredArray
    }
  },

  watch: {
    chain (newChain) {
      const chainNodeMixin = this
      this.resetRequiredResources()
      chainNodeMixin.iterateProductionChain(
        this.chain,
        (rootElement) => this.getResourceReq(rootElement),
        (element) => this.getResourceReq(element),
        false
      )
    }
  },

  methods: {
    getResourceReq (element) {
      const helperFunctionMixin = this
      const building = helperFunctionMixin.getBuildingByName(
        element.name,
        element.regionID
      )

      this.requiredResources.cash +=
        (building.construction.cash ?? 0) * element.relativeAmount
      this.requiredResources.cashUpkeep +=
        (building.maintenance.cash ?? 0) * element.relativeAmount
      this.requiredResources.wood +=
        (building.construction.wood ?? 0) * element.relativeAmount
      this.requiredResources.bricks +=
        (building.construction.brick ?? 0) * element.relativeAmount
      this.requiredResources.steel +=
        (building.construction.steel ?? 0) * element.relativeAmount
      this.requiredResources.window +=
        (building.construction.window ?? 0) * element.relativeAmount
      this.requiredResources.concrete +=
        (building.construction.concrete ?? 0) * element.relativeAmount
      this.requiredResources.wanza_timber +=
        (building.construction.wanza_timber ?? 0) * element.relativeAmount
      this.requiredResources.mud_bricks +=
        (building.construction.mud_bricks ?? 0) * element.relativeAmount
    },

    resetRequiredResources () {
      this.requiredResources = {
        cash: 0,
        cashUpkeep: 0,
        wood: 0,
        bricks: 0,
        steel: 0,
        window: 0,
        concrete: 0,
        influence: 0,
        wanza_timber: 0,
        mud_bricks: 0
      }
    }
  }
}
</script>

<style scoped>
.col-border {
  border-right: 1px solid #777777;
}
</style>
