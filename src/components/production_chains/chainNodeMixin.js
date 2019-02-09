export const chainNodeMixin = {
  name: 'ProductionChainNode',

  data() {
    return {
      chainDepth: 0,
      chainDepthCounter: 0,
      chainDepthArray: [],

      chainWidth: 0,
      chainWidthCounter: 0,
      chainWidthArray: [],
    };
  },

  methods: {

    determineChainWidth() {
      const depthArray = JSON.parse(JSON.stringify(this.chainDepthArray));
      const counts = {};
      const countsArray = [];

      for (let i = 0; i < depthArray.length; i++) {
        counts[depthArray[i]] = (counts[depthArray[i]] + 1) || 1;
      }

      Object.keys(counts).forEach((depthLevel) => {
        countsArray.push(counts[depthLevel]);
      });

      const treeWidth = Math.max(...countsArray);
      return treeWidth;
    },

    /**
     * @param {Object} productionChain a variable containing a ProductionChain Object
     * @param {function} rootCallbackFunction a function which only gets execeuted on the root element
     * @param {function} elementCallbackFunction a function which gets executed on every tree element
     * which is not the root. The element is given to the callback function as a parameter
     * @param {boolean} debugOutput if true, debug output gets written in the console
     * @return {void} the depth of the Production Chain and the callback function's
     * result can be accessed by a vdata property. Recommendation: populate an Object or Array with the results
     * ---
     * Iterates through all tree objects and executes a function at every element.
     * Determines the Production Chain's depth.
     */
    iterateProductionChain(productionChain, rootCallbackFunction, elementCallbackFunction, debugOutput) {
      this.chainDepthArray = []; // this array stores the depth levels on every element
      this.chainDepthCounter = 0;
      const root = productionChain; // naming reasons

      if (debugOutput) {
        console.log('Chain: ' + productionChain.name);
      }

      // if the root element is already a leaf, execute callback function and return depth 1
      // if not, recursively iterate through the tree
      if (!this.isLeaf(root)) {
        if (rootCallbackFunction) rootCallbackFunction(root);
        this.iterateTreeElements(root, elementCallbackFunction, debugOutput);
      } else {
        this.chainDepth = 1;
        this.chainWidth = 1;
        this.chainDepthArray = [1];
        if (rootCallbackFunction) rootCallbackFunction(root);
      }

      // determine the highest number in chainDepthArray, which is the tree height
      this.chainDepth = Math.max(...this.chainDepthArray);
      this.chainWidth = this.determineChainWidth();

      if (debugOutput) {
        console.log('');
        console.log('Array: ' + this.chainDepthArray);
        console.log('Chain Depth: ' + this.chainDepth);
        console.log('Chain Width: ' + this.chainWidth);
      }
    },

    /**
     * @param {Object} element a variable containing an element of the production chain
     * @param {function} elementCallbackFunction a function which gets executed on every tree element
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
    iterateTreeElements(element, elementCallbackFunction, debugOutput) {
      if (debugOutput) {
        console.log('');
        console.log('Element: "' + element.building + '", Leaf: ' + this.isLeaf(element));
      }
      if (!this.isLeaf(element)) {
        // if element is root or node
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        // only execute callback function when element != root
        if (this.chainDepthCounter !== 1) {
          if (elementCallbackFunction) elementCallbackFunction(element);
        }

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }

        // recursively iterate on precursors
        for (const precursors in element.precursorBuildings) {
          if (precursors) {
            const precursor = element.precursorBuildings[precursors];
            this.iterateTreeElements(precursor, elementCallbackFunction, debugOutput);
          }
        }
      } else {
        // if element is a leaf
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        // only execute callback function when element != root
        if (this.chainDepthCounter !== 1) {
          if (elementCallbackFunction) elementCallbackFunction(element);
        }

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
