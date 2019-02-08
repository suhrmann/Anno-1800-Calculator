<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs12>
        <h2>Dynamic Grid TODO1</h2>
        <v-btn @click="test">test</v-btn>
        <p>Selected Chain: {{productionChain.name}}</p>
        <p>Grid Width: {{gridWidth}}</p>
        <p>Grid Height: {{gridHeight}}</p>
      </v-flex>
    </v-layout>
    <v-layout v-for="i in gridHeight" :key="i" justify-center row wrap>
      <v-flex v-for="i in gridWidth" :key="i" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { chainNodeMixin } from "./chainNodeMixin.js";

export default {
  data() {
    return {};
  },

  mixins: [chainNodeMixin],
  computed: {
    productionChain() {
      return this.$store.state.selectedProductionChain;
    },
    gridWidth() {
      return this.chainDepth * 2 + 1;
    },
    gridHeight() {
      return this.chainWidth * 2 + 1;
    }
  },
  methods: {
    test() {
      let chainNodeMixin = this;
      let depth = chainNodeMixin.iterateProductionChain(
        this.productionChain,
        () => {
          console.log("callback gets executed!");
        },
        true
      );
    }
  }
};
</script>

<style>
</style>
