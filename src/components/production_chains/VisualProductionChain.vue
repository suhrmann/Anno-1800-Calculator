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

    <v-layout v-for="j in gridHeight" :key="j" justify-center row wrap>
      <v-flex v-for="i in gridWidth" :key="i" xs1>
        <v-card dark color="secondary">
          <v-tooltip bottom>
            <img slot="activator" :src="building.img" :alt="'building'">
            <span>Building name</span>
          </v-tooltip>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { chainNodeMixin } from "./chainNodeMixin.js";

export default {
  data() {
    return {
      building: {
        img: "test"
      }
    };
  },

  mounted() {
    let chainNodeMixin = this;
    chainNodeMixin.iterateProductionChain(
      this.productionChain,
      () => {},
      false
    );
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
    even(rowOrColumn) {
      if (rowOrColumn % 2 == 0) return true;
    },

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
