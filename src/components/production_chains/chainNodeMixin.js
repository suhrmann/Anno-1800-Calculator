import productionChains from '../../data/production-chain.json';

export const chainNodeMixin = {
  name: 'ProductionChainNode',

  data() {
    return {
      chainDepth: 0,
      chainDepthCounter: 0,
      chainDepthArray: [],

    };
  },
  computed: {
    productionChains() {
      return JSON.parse(JSON.stringify(productionChains));
    },
  },

  methods: {

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
      this.chainDepth = 1;
      this.chainDepthArray = [1];
      const root = productionChain; // naming reasons

      if (debugOutput) {
        console.log('');
        console.log('---------------------------------');
        console.log('Chain: ' + productionChain.chain);
      }

      // if the root element is already a leaf, execute callback function and return depth 1
      // if not, recursively iterate through the tree

      if (this.isLeaf(root)) {
        // needs to be incremented and set to ensure that the correct data is given when the root function is exevuted
        if (rootCallbackFunction) rootCallbackFunction(root);
      } else {
        this.iterateTreeElements(root, rootCallbackFunction, elementCallbackFunction, debugOutput);
      }

      // determine the highest number in chainDepthArray, which is the tree height
      this.chainDepth = Math.max(...this.chainDepthArray);

      if (debugOutput) {
        console.log('');
        console.log('Chain Depth: ' + this.chainDepth);
      }
    },

    /**
     * @param {Object} element a variable containing an element of the production chain
     * @param {function} rootCallbackFunction a function which only gets execeuted on the root element
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
    iterateTreeElements(element, rootCallbackFunction, elementCallbackFunction, debugOutput) {
      if (debugOutput) {
        console.log('');
        console.log('Element: "' + element.name + '", Leaf: ' + this.isLeaf(element));
      }
      if (!this.isLeaf(element)) {
        // if element is root or node
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);

        if (this.chainDepthCounter === 1) {
          if (rootCallbackFunction) rootCallbackFunction(element);
        } else {
          if (elementCallbackFunction) elementCallbackFunction(element);
        }

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }

        // recursively iterate switch(this.chainDepthCounter)e on precursors
        element.children.forEach((child) => {
          if (child) {
            this.iterateTreeElements(child, rootCallbackFunction, elementCallbackFunction, debugOutput);
          }
        });
      } else {
        // if element is a leaf
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);
        // only execute callback function when element != root
        if (this.chainDepthCounter === 1) {
          if (rootCallbackFunction) rootCallbackFunction(element);
        } else {
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
     * Is this node a leaf (= this node has no next nodes)?
     * @param {Object} element Root, node or leaf object
     * @return {boolean} true if this node has no next nodes.
     */
    isLeaf(element) {
      if (element.children === null) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Get the production by the product it produces.
     * @param {string} product The product name.
     * @return {object|null} The production chain that produces this product,
     *                       or null if it were not found.
     */
    getProductionChainByProductName(product) {
      console.log('--- getProductionChainByProductName(', product, ') ---');

      const chains = this.productionChains.Production_Chain;
      for (const chainKey in chains) {
        if (chains.hasOwnProperty(chainKey)) {
          const chain = chains[chainKey];
          if (chain.finalProduct === product) {
            return chain;
          }
        }
      }

      return null;
    },
  },
};
