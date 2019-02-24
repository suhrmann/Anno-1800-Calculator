<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs12 mb-5>
        <h2 color="primary">Selected Chain: {{productionChain.finalProduct}}</h2>
      </v-flex>
      <v-flex xs12>
        <TreeChart :json="this.treeData"></TreeChart>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { chainNodeMixin } from "./chainNodeMixin.js";
import { EventBus } from "../../EventBus.js";
import TreeChart from "../TreeChart";

export default {
  components: {
    TreeChart
  },
  data() {
    return {
      treeData: {}
    };
  },

  created() {
    this.treeData = JSON.parse(JSON.stringify(this.productionChain));
    EventBus.$on("bottomNavBarChanged", () => {
      this.treeData = JSON.parse(JSON.stringify(this.productionChain));
    });
  },

  mixins: [chainNodeMixin],
  computed: {
    productionChain() {
      return this.$store.state.selectedProductionChain;
    }
  },
  methods: {}
};
</script>

<style>
</style>

