<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs12 mb-5>
        <h2 color="primary">Selected Chain: {{productionChain.finalProduct}}</h2>
      </v-flex>
      <v-flex xs1 shrink style="width: 60px">
        <v-text-field
          @change="changeCounter()"
          v-model="counter"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
      <v-flex xs9>
        <v-slider @input="changeCounter()" max="25" min="1" v-model="counter"></v-slider>
      </v-flex>

      <v-flex xs12>
        <TreeChart :json="this.treeData"></TreeChart>
      </v-flex>
      <v-flex
        xs12
      >Production Output: {{ outputPerMinute }} {{ productionChain.finalProduct }} per Minute</v-flex>
      <v-flex
        xs12
        v-if="consumptionPerMinute !== null"
      >Consumption: {{ consumptionPerMinute }} {{ productionChain.finalProduct }} per Minute</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { chainNodeMixin } from "./chainNodeMixin.js";
import { helperFunctionMixin } from "../helperFunctionMixin.js";
import { EventBus } from "../../EventBus.js";
import TreeChart from "../TreeChart";

export default {
  components: {
    TreeChart
  },
  data() {
    return {
      treeData: {},
      counter: 1,
      spt: 0
    };
  },

  created() {
    if (this.productionChain == null) {
      this.initiateProductionChain();
    }

    this.treeData = JSON.parse(JSON.stringify(this.productionChain));
    EventBus.$on("bottomNavBarChanged", () => {
      this.treeData = JSON.parse(JSON.stringify(this.productionChain));

      const helperFunctionMixin = this;
      const productionTimes = helperFunctionMixin.getProductionTimes(
        this.productionChain
      );
      const shortestProductionTime = helperFunctionMixin.getShortestprodTime(
        productionTimes
      );
      this.spt = shortestProductionTime;
      EventBus.$emit("setSPTforChain", shortestProductionTime);
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
      const output = (60 * this.counter) / this.spt;

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
    }
  },

  methods: {
    changeCounter() {
      EventBus.$emit("changeSlider", this.counter);
    },

    /**
     * sets initial ProductionChain to Timber
     */
    initiateProductionChain() {
      let helperFunctions = this;
      let productionChain = helperFunctions.getProductionChainById(1);
      this.$store.commit("changeProductionChain", productionChain);
    }
  }
};
</script>

<style>
</style>

