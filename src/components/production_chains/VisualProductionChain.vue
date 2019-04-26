<template>
  <v-container grid-list-md text-xs-center mt-0 pt-0>
    <v-layout justify-center row wrap>
      <v-flex xs12>
        <v-expansion-panel>
          <v-expansion-panel-content class="secondary cmp-expansion-panel-borders">
            <template slot="actions">
              <v-icon color="white">$vuetify.icons.expand</v-icon>
            </template>
            <template slot="header">
              <h4 color="accent">Workforce Demand</h4>
            </template>
            <v-card class="pb-1">
              <WorkerPanel :chain="this.treeData"></WorkerPanel>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

      <v-flex xs12 class="mb-3">
        <v-expansion-panel>
          <v-expansion-panel-content class="secondary cmp-expansion-panel-borders">
            <template slot="actions">
              <v-icon color="white">$vuetify.icons.expand</v-icon>
            </template>
            <template slot="header">
              <h4>Construction Costs</h4>
            </template>
            <v-card class="pb-1">
              <ResourcePanel :chain="this.treeData"></ResourcePanel>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

      <v-flex xs12>
        <TreeChart :json="this.treeData"></TreeChart>
      </v-flex>

      <v-flex xs12>
        <v-layout>
          <v-flex align-self-center md2 xs12>
            <h2 color="primary">Production / Consumption:</h2>
          </v-flex>

          <v-flex xs3 align-self-center>
            <v-container fill-height>
              <v-flex align-self-center class="text-xs-right" xs12>
                <h1>{{ outputPerMinute }}</h1>Production Output (per Minute)
              </v-flex>
            </v-container>
          </v-flex>

          <v-flex xs2>
            <v-container fill-height>
              <v-btn fab color="green lighten-4" depressed class="disable-events">
                <v-icon large color="green">arrow_upward</v-icon>
              </v-btn>
              <v-img
                :src="require('../../assets/buildings/farmers/warehouse.webp')"
                max-height="100px"
                min-height="33px"
                contain
              ></v-img>
              <v-btn fab color="deep-orange lighten-4" depressed class="disable-events">
                <v-icon large color="deep-orange">arrow_downward</v-icon>
              </v-btn>
            </v-container>
          </v-flex>

          <v-flex xs3 align-self-center>
            <v-container fill-height>
              <v-flex class="text-xs-left">
                <div v-if="isConsumable">
                  <h1>{{ consumptionPerMinute }}</h1>Consumption (per Minute)
                </div>
                <div v-else>
                  <h1>-</h1>
                  The Population does not consume {{ productionChain.finalProduct }} over time.
                </div>
              </v-flex>
            </v-container>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs1 mr-5 style="width: 60px" shrink>
        <v-text-field label="Quantity" @change="changeCounter()" v-model="chainCount" outline></v-text-field>
      </v-flex>
      <v-flex xs9 mr-5 pr-5>
        <v-slider @input="changeCounter()" max="25" min="1" v-model="chainCount"></v-slider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { chainNodeMixin } from "./chainNodeMixin.js";
import { helperFunctionMixin } from "../helperFunctionMixin.js";
import { EventBus } from "../../EventBus.js";
import TreeChart from "../TreeChart";
import WorkerPanel from "./WorkerPanel";
import ResourcePanel from "./ResourcePanel";

export default {
  components: {
    TreeChart,
    WorkerPanel,
    ResourcePanel
  },
  data() {
    return {
      treeData: {},
      temporaryProductionChain: {},
      chainCount: 1,
      spt: 0
    };
  },

  created() {
    if (this.productionChain == null) {
      this.initiateProductionChain();
    }

    EventBus.$on("setSPTforChain", spt => {});
    EventBus.$on("changeSlider", value => {});

    EventBus.$on("bottomNavBarChanged", () => {
      this.temporaryProductionChain = this.getCurrentProductionChain();
      const helperFunctionMixin = this;

      const productionTimes = helperFunctionMixin.getAllProductionTimesOfChain(
        this.temporaryProductionChain
      );
      const shortestProductionTime = helperFunctionMixin.getShortestprodTime(
        productionTimes
      );

      this.addBuildingRelationdToChain(shortestProductionTime);
      this.treeData = this.getNewProductionChain();
      this.spt = shortestProductionTime;
    });
  },

  mixins: [chainNodeMixin, helperFunctionMixin],
  computed: {
    productionChain() {
      return this.$store.state.selectedProductionChain;
    },

    consumption() {
      return this.$store.state.consumption;
    },

    /**
     * The consumption per minute, calculated in view Resident Demands calculator.
     *
     * @return {number|null} Number >= 0 if product is consumable, otherwise null.
     */
    consumptionPerMinute() {
      // Find consumption of currently selected product.
      const currentProduct = this.productionChain.finalProduct;
      // Search for currently selected product in demands
      const consumption = this.demands[currentProduct];

      // Return consumption of product, or null.
      return isNaN(consumption) ? null : consumption;
    },

    outputPerMinute() {
      // Calculate the production of one chain
      const productionPerMinute = 60 / this.spt; // Shortest Production Time

      // Calculate the output of all chains
      const output = productionPerMinute * this.chainCount;

      if (output % 1 === 0) {
        return output;
      } else {
        return output.toFixed(2);
      }
    },

    demands: {
      get() {
        const storeConsumption = this.$store.state.consumption;

        // Check if consumption is set
        if (!storeConsumption) {
          return null;
        }

        // Flatten consumption
        const flatConsumption = {};
        // Iterate over basic / luxury
        for (let i = 0; i < storeConsumption.length; i++) {
          const demandType = storeConsumption[i];

          const demands = storeConsumption[demandType];
          // Iterate over each demand
          for (let i = 0; i < demands.length; i++) {
            const dmndKey = demands[i];
            flatConsumption[dmndKey] = demands[dmndKey];
          }
        }

        return flatConsumption;
      }
    },

    /**
     * checks if current ProductionChain produces a good which is consumed by population over time
     * @return {boolean} true if consumable good
     */
    isConsumable() {
      let returnValue = false;
      const good = this.treeData.finalProduct;
      const consumables = this.consumablesOverTime;
      consumables.find(currentElement => {
        if (good === currentElement) {
          returnValue = true;
        }
      });
      return returnValue;
    },

    consumablesOverTime() {
      let key;
      const listOfGoods = this.$store.state.consumption;
      const consumablesArray = [];

      for (key in listOfGoods.basic) {
        if (listOfGoods.basic[key] !== false) {
          consumablesArray.push(key);
        }
      }

      for (key in listOfGoods.luxury) {
        if (listOfGoods.luxury[key] !== false) {
          consumablesArray.push(key);
        }
      }
      return consumablesArray;
    }
  },

  methods: {
    changeCounter() {
      EventBus.$emit("changeSlider", this.chainCount);
    },

    /**
     * function to add a value with the amount of buildings to the tree Data property
     * @param {number} spt The shortest production time in the chain
     * @param {Object} element The current element in the production Chain tree
     * @return {void}
     */

    addBuildingsAmount(spt, element) {
      const helperFunctionMixin = this;

      const building = helperFunctionMixin.getBuildingByName(
        element.name,
        element.worldID
      );
      element.relativeAmount =
        (building.productionTime / spt) * this.chainCount;
    },

    /**
     * sets initial ProductionChain to Timber
     */
    initiateProductionChain() {
      const helperFunctions = this;
      const productionChain = helperFunctions.getProductionChainById(1);
      this.$store.commit("changeProductionChain", productionChain);
    },

    /**
     * gets Current active ProductionChain
     * @return {Object} Production Chain Object
     */
    getCurrentProductionChain() {
      const chain = JSON.parse(JSON.stringify(this.productionChain));
      return chain;
    },

    /**
     * modifies the given ProductionChain to add the relation between each buildings
     * production time divided by the shortest production time.
     * This value represents the required number of buildings to keep up the production rate
     * with the fastest producing building
     * @param {number} spt the shortest production time of a building in a certain production Chain
     * @return {void} the function just modifies the productionChain
     */
    addBuildingRelationdToChain(spt) {
      const chainNodeMixin = this;
      const vpc = this;
      chainNodeMixin.iterateProductionChain(
        vpc.temporaryProductionChain,
        rootElement => {
          vpc.addBuildingsAmount(spt, rootElement);
        },
        element => {
          vpc.addBuildingsAmount(spt, element);
        },
        false
      );
    },

    /**
     * when a productionChain gets modified, the new productionChain can be accessed via
     * the newProductionChain property found in chainNodeMixin
     * @return {object} the new, maybe modified productionChain
     */
    getNewProductionChain() {
      const chainNodeMixin = this;
      return JSON.parse(JSON.stringify(chainNodeMixin.newProductionChain));
    }
  }
};
</script>

<style scoped>
.disable-events {
  pointer-events: none;
}
h4 {
  color: whitesmoke;
}

.cmp-expansion-panel-borders {
  border-style: solid;
}
</style>

