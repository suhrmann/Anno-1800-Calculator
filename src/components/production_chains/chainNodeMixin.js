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
     * @param {Object} productionChain a variable containing a ProductionChain Object
     * @param {function} callbackFunction a function which gets executed on every tree element
     * @param {boolean} debugOutput if true, debug output gets written in the console
     * @return {void} the depth of the Production Chain and the callback function's
     * result can be accessed by a vdata property
     * -
     * Iterates through all tree objects and executes a function at every element.
     * Determines the Production Chain's depth.
     */
    iterateProductionChain(productionChain, callbackFunction, debugOutput) {
      this.chainDepthArray = []; // this array stores the depth levels on every element
      const root = productionChain; // naming reasons

      // if the root element is already a leaf, execute callback function and return depth 1
      // if not, recursively iterate through the tree
      if (!this.isLeaf(root)) {
        this.iterateTreeElements(root, callbackFunction, debugOutput);
      } else {
        this.chainDepth = 1;
        if (callbackFunction) callbackFunction();
      }

      // determine the highest number in chainDepthArray, which is the tree height
      this.chainDepth = Math.max(...this.chainDepthArray);

      if (debugOutput) {
        console.log('');
        console.log('Array: ' + this.chainDepthArray);
        console.log('Chain Depth: ' + this.chainDepth);
      }
    },

    /**
     * @param {Object} element a variable containing an element of the production chain
     * @param {function} callbackFunction a function which gets executed on every tree element
     * @param {boolean} debugOutput if true, debug output gets written in the console
     * ---
     * If the given element is the root or a node:
     * raise the depth counter by 1
     * push the current depth to chainDepthArray
     * call iteration on all precursors
     * ---
     * If the given element is a leaf:
     * raise the depth counter by 1
     * push the current depth to chainDepthArray
     * ---
     * If the procedure has reached a leaf, the depth counter
     * gets decremented by 1 at each ndde "on its way back"
     * if the procedure reaches a node on its way back,
     * the iteration continues on the other precursors incrementing the counter again
     */
    iterateTreeElements(element, callbackFunction, debugOutput) {
      if (debugOutput) {
        console.log('');
        console.log('New Element:');
        console.log('Element: "' + element.building + '", Leaf: ' + this.isLeaf(element));
      }
      if (!this.isLeaf(element)) {
        // if element is root or node
        if (callbackFunction) callbackFunction();
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }

        // recursively iterate on precursors
        for (const precursors in element.precursorBuildings) {
          if (precursors) {
            const precursor = element.precursorBuildings[precursors];
            this.iterateTreeElements(precursor, callbackFunction, debugOutput);
          }
        }
      } else {
        // if element is a leaf
        if (callbackFunction) callbackFunction();
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }
      }
      // execute when going "up" the tree
      this.chainDepthCounter--;
    },



    /**
     * @param {Object} element a production chain element
     * @return {int} the number of precursors of the given lement
     */
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
