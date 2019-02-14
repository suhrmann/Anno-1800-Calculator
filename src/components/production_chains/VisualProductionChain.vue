<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs12>
        <h2>Dynamic Grid TODO1</h2>
        <p>Selected Chain: {{productionChain.name}}</p>
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
    this.$on("hover-node", () => {
      alert("asd");
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

