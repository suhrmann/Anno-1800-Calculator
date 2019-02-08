export const chainNodeMixin = {
  name: 'ProductionChainNode',

  data() {
    return {
      chainDepth: 0,
      chainDepthCounter: 0,
      chainDepthArray: [],
      /**
       * The producer / building stored in this node.
       * @var {Producer}
       */
      building: null,

      // Store the following nodes of the tree
      nextTop: null,
      nextBottom: null,
    };
  },

  methods: {

    /**
     * @param {Object} productionChain an variable containing a ProductionChain Object
     * @param {function} callbackFunction a function which gets executed on every tree element
     * @return {void} the depth of the Production Chain and the callback function's
     * result can be accessed by a vdata property
     * -
     * Iterates through all tree objects and executes a function at every element.
     * Determines the Production Chain's depth.
     */

    iterateProductionChain(productionChain, callbackFunction, debugOutput) {
      this.chainDepthArray = [];
      const root = productionChain;

      if (!this.isLeaf(root)) {
        this.iterateTreeElements(root, callbackFunction, debugOutput);
      } else {
        this.chainDepth = 1;
        if (callbackFunction) callbackFunction();
      }

      this.chainDepth = Math.max(...this.chainDepthArray);

      if (debugOutput) {
        console.log('');
        console.log('Array: ' + this.chainDepthArray);
        console.log('Chain Depth: ' + this.chainDepth);
      }
    },

    iterateTreeElements(element, callbackFunction, debugOutput) {
      if (debugOutput) {
        console.log('');
        console.log('New Element:');
        console.log('Element: "' + element.building + '", Leaf: ' + this.isLeaf(element));
      }

      if (!this.isLeaf(element)) {
        if (callbackFunction) callbackFunction();
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }

        for (const precursors in element.precursorBuildings) {
          const precursor = element.precursorBuildings[precursors];
          this.iterateTreeElements(precursor, callbackFunction, debugOutput);
        }
      } else {
        if (callbackFunction) callbackFunction();

        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }
      }
      this.chainDepthCounter--;
    },

    countPrecursors(element) {
      return Object.keys(element.precursorBuildings).length;
    },


    /**
     * If this node is linear, return this single next node.
     *
     * @return {ProductionChainNode|null} Iff this chain is linear return the single next node,
     *                                    otherwise (if this node has none or multiple next nodes) return null.
     */
    next() {
      // Error handling
      if (!this.isLinear()) {
        throw Error('This node is not linear. Use either nextTop() or nextBottom().');
      }

      // Return the next node that is set.
      return this.nextTop || this.nextBottom;
    },

    /**
     * Is this node linear (has only one next node).
     *
     * @return {boolean} true if this node has exactly one next node.
     */
    isLinear() {
      // nextTop XOR nextBottom (but NOT both)
      return (this.nextTop && !this.nextBottom) || (!this.nextTop && this.nextBottom);
    },

    /**
     * Is this node a leaf (= this node has no next nodes)?
     * @param {Object} element Root, node or leaf object
     * @return {boolean} true if this node has no next nodes.
     */
    isLeaf(element) {
      if (Object.keys(element.precursorBuildings).length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
