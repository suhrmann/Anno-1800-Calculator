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
      >Production Output: {{ outputPerMinute }} {{ productionChain.finalProduct }} per Minute (times final Building - To Implement!)</v-flex>
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
      lcm: 0,
      spt: 0
    };
  },

  created() {
    this.treeData = JSON.parse(JSON.stringify(this.productionChain));
    EventBus.$on("bottomNavBarChanged", () => {
      this.treeData = JSON.parse(JSON.stringify(this.productionChain));

      let helperFunctionMixin = this;
      let productionTimes = helperFunctionMixin.getProductionTimes(
        this.productionChain
      );
      let shortestProductionTime = helperFunctionMixin.getShortestprodTime(
        productionTimes
      );
      let lcm = helperFunctionMixin.getLCM(productionTimes);
      // console.log(productionTimes);
      // console.log("lcm: " + lcm);
      // console.log("shortest: " + shortestProductionTime);
      this.lcm = lcm;
      this.spt = shortestProductionTime;
      EventBus.$emit("setLCMforChain", lcm, shortestProductionTime);
    });
  },

  mixins: [chainNodeMixin, helperFunctionMixin],
  computed: {
    productionChain() {
      return this.$store.state.selectedProductionChain;
    },

    // TO DO: get number of final building and multiply with output!
    outputPerMinute() {
      let helperFunctionMixin = this;
      let rootBuilding = helperFunctionMixin.getBuildingByName(
        this.productionChain.name
      );
      let output = (60 / rootBuilding.productionTime) * this.counter;

      if (output % 1 === 0) {
        return output;
      } else {
        return output.toFixed(2);
      }
    }
  },

  methods: {
    changeCounter() {
      EventBus.$emit("changeSlider", this.counter);
    }
  }
};
</script>

<style>
</style>

