<template>
  <v-layout justify-space-between row wrap>
    <div>
      <v-layout row wrap justify-center>
        <v-flex>
          <div class="inline" v-for="(cost, i) in costArray" :key="i">
            <v-flex xs1>
              <v-flex xs12>
                <v-avatar size="24">
                  <img
                    class="center"
                    :src="getImage(cost.image, cost.imageFileFolder)"
                    :alt="cost.name"
                  >
                </v-avatar>
              </v-flex>
              <div align-content-center class="center">
                <v-flex xs12>
                  <p class="pb-0 mb-0">{{cost.name}}: {{cost.amount}}</p>
                </v-flex>
              </div>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
import { helperFunctionMixin } from '../helperFunctionMixin.js';
import { chainNodeMixin } from './chainNodeMixin.js';

export default {
  mixins: [chainNodeMixin, helperFunctionMixin],
  props: {
    chain: {
      type: Object,
    },
  },
  data() {
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
      },
    };
  },

  computed: {
    costArray() {
      const filteredArray = [];

      if (this.requiredResources.cash !== 0) {
        filteredArray.push({
          amount: this.requiredResources.cash,
          name: 'Cash',
          image: 'icon-credits.webp',
          imageFileFolder: 'icons',
        });
      }

      if (this.requiredResources.cashUpkeep !== 0) {
        filteredArray.push({
          amount: this.requiredResources.cashUpkeep,
          name: 'Upkeep',
          image: 'balance.webp',
          imageFileFolder: 'icons',
        });
      }
      if (this.requiredResources.wood !== 0) {
        filteredArray.push({
          amount: this.requiredResources.wood,
          name: 'Wood',
          image: 'wood.webp',
          imageFileFolder: 'buildings/farmers',
        });
      }
      if (this.requiredResources.bricks !== 0) {
        filteredArray.push({
          amount: this.requiredResources.bricks,
          name: 'Bricks',
          image: 'bricks.webp',
          imageFileFolder: 'buildings/workers',
        });
      }
      if (this.requiredResources.steel !== 0) {
        filteredArray.push({
          amount: this.requiredResources.steel,
          name: 'Steel',
          image: 'steel.webp',
          imageFileFolder: 'buildings/workers',
        });
      }
      if (this.requiredResources.window !== 0) {
        filteredArray.push({
          amount: this.requiredResources.window,
          name: 'Window',
          image: 'windows.webp',
          imageFileFolder: 'buildings/artisans',
        });
      }
      if (this.requiredResources.concrete !== 0) {
        filteredArray.push({
          amount: this.requiredResources.concrete,
          name: 'Concrete',
          image: 'reinforced-concrete.webp',
          imageFileFolder: 'buildings/engineers',
        });
      }

      if (this.requiredResources.influence !== 0) {
        filteredArray.push({
          amount: this.requiredResources.influence,
          name: 'Influence',
          image: 'influence.webp',
        });
      }

      return filteredArray;
    },
  },

  watch: {
    chain(newChain) {
      const chainNodeMixin = this;
      this.resetRequiredResources();
      chainNodeMixin.iterateProductionChain(
          this.chain,
          (rootElement) => this.getResourceReq(rootElement),
          (element) => this.getResourceReq(element),
          false
      );
    },
  },

  methods: {
    getResourceReq(element) {
      const helperFunctionMixin = this;
      const building = helperFunctionMixin.getBuildingByName(
          element.name,
          element.worldID
      );

      this.requiredResources.cash +=
        building.construction.cash * element.relativeAmount;
      this.requiredResources.cashUpkeep +=
        building.maintenance.cash * element.relativeAmount;
      this.requiredResources.wood +=
        building.construction.wood * element.relativeAmount;
      this.requiredResources.bricks +=
        building.construction.brick * element.relativeAmount;
      this.requiredResources.steel +=
        building.construction.steel * element.relativeAmount;
      this.requiredResources.window +=
        building.construction.window * element.relativeAmount;
      this.requiredResources.concrete +=
        building.construction.concrete * element.relativeAmount;
    },

    resetRequiredResources() {
      this.requiredResources = {
        cash: 0,
        cashUpkeep: 0,
        wood: 0,
        bricks: 0,
        steel: 0,
        window: 0,
        concrete: 0,
        influence: 0,
      };
    },
  },
};
</script>

<style>
img {
  height: 40%;
  width: 40%;
}
</style>
