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
import { chainNodeMixin } from './chainNodeMixin.js';
import { EventBus } from '../../EventBus.js';

export default {
  data() {
    return {
      building: {
        img: 'test',
      },

      positionTree: {
        depth: {
          root: { sibling: {} },
          parent: { sibling: {} },
          grandparent: { sibling: {} },
          greatGrandparent: { sibling: {} },
          twoGreatGrandparent: { sibling: {} },
        },
      },
    };
  },

  created() {
    EventBus.$on('bottomNavBarChanged', () => {
      this.resetPositionTree();
      const chainNodeMixin = this;

      const gridDimensions = JSON.parse(
          JSON.stringify(this.makeMatchingGrid(this.gridHeight, this.gridWidth))
      );

      const gridToRender = this.fillGridWithProductionChain(
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
      const chainNodeMixin = this;
      return chainNodeMixin.chainDepth * 2 + 1;
    },
    gridHeight() {
      const chainNodeMixin = this;
      return chainNodeMixin.chainWidth * 2 + 1;
    },
  },
  methods: {
    resetPositionTree() {
      this.positionTree = {
        depth: {
          root: { sibling: {} },
          parent: { sibling: {} },
          grandparent: { sibling: {} },
          greatGrandparent: { sibling: {} },
          twoGreatGrandparent: { sibling: {} },
        },
      };
    },
    even(rowOrColumn) {
      if (rowOrColumn % 2 === 0) return true;
    },

    /**
     * This function takes a certain width and heigth and creates a 2-dimensional array
     *
     * @param {int} height
     * @param {int} width
     * @return {array} 2D array with given height and width.
     */
    makeMatchingGrid(height, width) {
      const val = {};
      const arr = [];
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
     *
     * @param {array} grid The 2D grid to fills
     * @param {Object} productionChain
     * @return {array} The 2D Array containing the production chain grid ready to render
     */
    fillGridWithProductionChain(grid, productionChain) {
      // some attributes of the given grid
      const arrayHeight = grid[0].length;
      const arrayWidth = grid.length;

      const lastObjectPosition = { x: arrayWidth - 1, y: arrayHeight / 2 + 0.5 };
      const nextObjectPosition = { x: 0, y1: 0, y2: 0 };

      console.log('Chain: ' + productionChain.name);
      console.log('GridHeight: ' + arrayHeight);
      console.log('GridWidth: ' + arrayWidth);
      console.log(
          'Position Last: x:' +
          lastObjectPosition.x +
          ' y:' +
          lastObjectPosition.y
      );

      const chainNodeMixin = this;

      chainNodeMixin.iterateProductionChain(
          productionChain,
          (root) => {
            console.log('rootcallback');
            const chainLevel = this.getCurrentPositionLevel(
                this.chainDepthCounter
            );
            const siblingNumber = this.getCountedSiblingsUntil(
                this.chainDepthArray,
                this.chainDepthCounter
            );

            console.log(chainLevel, siblingNumber);

            this.positionTree.depth[chainLevel].sibling[siblingNumber] = root;
          },

          (element) => {
            console.log('elementcallback');

            const chainLevel = this.getCurrentPositionLevel(
                this.chainDepthCounter
            );
            const siblingNumber = this.getCountedSiblingsUntil(
                this.chainDepthArray,
                this.chainDepthCounter
            );

            console.log(chainLevel, siblingNumber);

            this.positionTree.depth[chainLevel].sibling[siblingNumber] = element;
          },
          true
      );
      console.log('');
      console.log('Visual Grid');
      console.table(grid);
      console.log('');
      console.log('Elements sorted by position');
      console.table(this.positionTree);

      return [[]];
    },

    determineElementY() {
      return 1;
    },

    determineElementX(lastObjectPosition) {
      return lastObjectPosition.x - (this.chainDepthCounter - 1) * 2;
    },

    buildWidthGrid(element) {},

    test() {
      const chainNodeMixin = this;
      const depth = chainNodeMixin.iterateProductionChain(
          this.productionChain,
          (element) => {
            console.log('root callback gets executed!');
          },
          (element) => {
            console.log('element callback gets executed!');
          },
          true
      );
    },
  },
};
</script>

<style>
</style>

