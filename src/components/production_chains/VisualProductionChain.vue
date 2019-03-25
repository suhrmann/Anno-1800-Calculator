<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>

      <v-flex xs12>
        <WorkerPanel :chain="this.treeData"></WorkerPanel>
      </v-flex>

      <v-flex xs12>
        <ResourcePanel :chain="this.treeData"></ResourcePanel>
      </v-flex>

      <v-flex xs1 shrink style="width: 60px">
        <v-text-field
          @change="changeCounter()"
          v-model="chainCount"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
      <v-flex xs9>
        <v-slider @input="changeCounter()" max="25" min="1" v-model="chainCount"></v-slider>
      </v-flex>

      <v-flex xs12>
        <TreeChart :json="this.treeData"></TreeChart>
      </v-flex>

      <v-flex
        xs6
      >Production Output: {{ outputPerMinute }} {{ productionChain.finalProduct }} per Minute</v-flex>

      <v-flex
        xs6
        v-if="isConsumable"
      >Consumption: {{ consumptionPerMinute }} {{ productionChain.finalProduct }} per Minute</v-flex>
      <v-flex
        xs6
        v-else
      >The Population does not consume {{ productionChain.finalProduct }} over time.</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { chainNodeMixin } from "./chainNodeMixin.js";
import { helperFunctionMixin } from "../helperFunctionMixin.js";
import { EventBus } from "../../EventBus.js";
import TreeChart from "../TreeChart";
import WorkerPanel from "./WorkerPanel"
import ResourcePanel from "./ResourcePanel"

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
      const chainNodeMixin = this;

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
      const helperFunctionMixin = this;
      const rootBuilding = helperFunctionMixin.getBuildingByName(
        this.productionChain.name
      );
      const output = (60 * this.chainCount) / this.spt;

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
        for (const demandType in storeConsumption) {
          const demands = storeConsumption[demandType];
          // Iterate over each demand
          for (const dmndKey in demands) {
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
        if (good == currentElement) {
          returnValue = true;
        }
      });
      return returnValue;
    },

    consumablesOverTime() {
      const listOfGoods = this.$store.state.consumption;
      let consumablesArray = [];

      for (var key in listOfGoods.basic) {
        if (listOfGoods.basic[key] !== false) {
          consumablesArray.push(key);
        }
      }

      for (var key in listOfGoods.luxury) {
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

      const building = helperFunctionMixin.getBuildingByName(element.name);
      element.relativeAmount =
        (building.productionTime / spt) * this.chainCount;
    },

    /**
     * sets initial ProductionChain to Timber
     */
    initiateProductionChain() {
      const helperFunctions = this;
      let productionChain = helperFunctions.getProductionChainById(1);
      this.$store.commit("changeProductionChain", productionChain);
    },

    /**
     * gets Current active ProductionChain
     * @return {Object} Production Chain Object
     */
    getCurrentProductionChain() {
      return JSON.parse(JSON.stringify(this.productionChain));
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

<style>
</style>

