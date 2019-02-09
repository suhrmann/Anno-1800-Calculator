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
import { EventBus } from "../../EventBus.js";

export default {
  data() {
    return {
      building: {
        img: "test"
      }
    };
  },

  created() {
    EventBus.$on("bottomNavBarChanged", () => {
      let chainNodeMixin = this;
      chainNodeMixin.iterateProductionChain(
        this.productionChain,
        element => {},
        element => {},
        false
      );

      let gridDimensions = JSON.parse(
        JSON.stringify(this.makeMatchingGrid(this.gridHeight, this.gridWidth))
      );

      let gridToRender = this.fillGridWithProductionChain(
        gridDimensions,
        this.productionChain
      );
    });
  },

  mixins: [chainNodeMixin],
  computed: {
    productionChain() {
      return this.$store.state.selectedProductionChain;
    },
    gridWidth() {
      let chainNodeMixin = this;
      return chainNodeMixin.chainDepth * 2 + 1;
    },
    gridHeight() {
      let chainNodeMixin = this;
      return chainNodeMixin.chainWidth * 2 + 1;
    }
  },
  methods: {
    even(rowOrColumn) {
      if (rowOrColumn % 2 == 0) return true;
    },

    /**
     * This function takes a certain width and heigth and creates a 2-dimensional array
     * @param {int} height
     * @param {int} width
     * @return {Array[height][width]}
     */
    makeMatchingGrid(height, width) {
      let val = {};
      let arr = [];
      for (let i = 0; i < width; i++) {
        arr[i] = [];
        for (let j = 0; j < height; j++) {
          arr[i][j] = val;
        }
      }

      return arr;
    },

    /**
     * This function takes a proper grid and integrates the production chain in the way it should be rendered
     * @param {Array [][] } grid
     * @param {Object} productionChain
     * @return {Array [][] } An Array containing the production chain grid ready to render
     */
    fillGridWithProductionChain(grid, productionChain) {
      // some attributes of the given grid
      let arrayHeight = grid[0].length;
      let arrayWidth = grid.length;

      let lastObjectPosition = { x: arrayWidth - 1, y: arrayHeight / 2 + 0.5 };
      let nextObjectPosition = { x: 0, y1: 0, y2: 0 };

      console.log("Chain: " + productionChain.name);
      console.log("GridHeight: " + arrayHeight);
      console.log("GridWidth: " + arrayWidth);
      console.log(
        "Position Last: x:" +
          lastObjectPosition.x +
          " y:" +
          lastObjectPosition.y
      );

      grid[lastObjectPosition.x - 1][lastObjectPosition.y - 1] = root.building;
      let chainNodeMixin = this;

      chainNodeMixin.iterateProductionChain(
        productionChain,
        root => {
          console.log("rootcallback");
        },
        element => {
          console.log("elementcallback");
          let elementPositionX = this.determineElementX();

          let elementPositionY = this.determineElementY();

          grid[elementPositionX][elementPositionY] = element;
          numberOfPrecursors = this.countPrecursors(root);
        },
        true
      );
      console.table(grid);
    },

    determineElementY() {
      return 1;
    },

    determineElementX() {
      return 2;
    },

    test() {
      let chainNodeMixin = this;
      let depth = chainNodeMixin.iterateProductionChain(
        this.productionChain,
        element => {
          console.log("root callback gets executed!");
        },
        element => {
          console.log("element callback gets executed!");
        },
        true
      );
    }
  }
};
</script>

<style>
</style>

     