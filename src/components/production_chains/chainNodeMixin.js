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

      currentPosition: {
        root: 0,
        parent: 0,
        grandparent: 0,
        greatGrandparent: 0,
        twoGreatGrandparent: 0,
      },
    };
  },

  methods: {

    /**
     * @param {int} to A Number to which the position is set
     * @param {string} level The key of the currentPosition property to change
     * @return {void} changes this.currentPosition.root
     */
    changePosition(to, level) {
      this.currentPosition[level] = to;
    },

    /**
     * @param {boolean} all Set true if you want to reset all keys to 0
     * @param {string} level Set this key of the currentPosition property to 0
     * @return {void} changes this.currentPosition.root
     */
    resetPosition(all, level) {
      if (all) {
        this.currentPosition = {
          root: 0,
          parent: 0,
          grandparent: 0,
          greatGrandparent: 0,
          twoGreatGrandparent: 0,
        };
      } else if (level) {
        this.currentPosition[level] = 0;
      }
    },


    /**
     * @param {int} chainDepth The element's level in the tree
     * @return {String} the corresponding position key name
     * Returns the key name of current depth Position
     */
    getCurrentPositionLevel(chainDepth) {
      switch (chainDepth) {
        case 1:
          return 'root';
        case 2:
          return 'parent';
        case 3:
          return 'grandparent';
        case 4:
          return 'greatGrandparent';
        case 5:
          return 'twoGreatGrandparent';
      }
    },

    /**
     * @param {Array} chainDepthArray An Array filled with all objects so far stored tree level
     * @param {int} chainDepth The element 's level in the tree
     * @return {int} The current number of objects already in the given level
     * -
     * Counts the number of elements already stored for this depth level.
     * Think: There are already 2 elements stored on this depth, so this must be sibling three
     */
    getCountedSiblingsUntil(chainDepthArray, chainDepth) {
      let count = 0;
      const arr = chainDepthArray;
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === chainDepth) {
          count++;
        }
      }
      return count;
    },


    /**
     * Determines the maximum width of the chain
     * @return {int} the tree width
     */
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
      this.resetPosition(true);
      const root = productionChain; // naming reasons

      this.changePosition(1, 'root');

      if (debugOutput) {
        console.log('Chain: ' + productionChain.name);
        console.log('Position: ');
        console.log(this.currentPosition);
      }


      // if the root element is already a leaf, execute callback function and return depth 1
      // if not, recursively iterate through the tree
      if (!this.isLeaf(root)) {
        // needs to be incremented and set to ensure that the correct data is given when the root function is exevuted
        this.chainDepthCounter++;
        this.chainDepthArray.push(this.chainDepthCounter);
        if (rootCallbackFunction) rootCallbackFunction(root, this.currentPosition);
        this.chainDepthCounter--;
        this.chainDepthArray = [];


        this.iterateTreeElements(root, elementCallbackFunction, debugOutput);
      } else {
        this.chainDepth = 1;
        this.chainWidth = 1;
        this.chainDepthArray = [1];
        if (rootCallbackFunction) rootCallbackFunction(root, this.currentPosition);
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

        const chainLevel = this.getCurrentPositionLevel(this.chainDepthCounter);
        const siblingNumber = this.getCountedSiblingsUntil(this.chainDepthArray, this.chainDepthCounter);

        if (debugOutput) {
          console.log('DepthPosition: ' + chainLevel);
          console.log('Sibling Number: ' + siblingNumber);
        }

        this.changePosition(siblingNumber.chainLevel);


        // only execute callback function when element != root
        if (this.chainDepthCounter !== 1) {
          if (elementCallbackFunction) elementCallbackFunction(element, this.currentPosition);
        }

        if (debugOutput) {
          console.log('Element Depth: ' + this.chainDepthCounter);
        }

        // recursively iterat        switch(this.chainDepthCounter)e on precursors
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

        const chainLevel = this.getCurrentPositionLevel(this.chainDepthCounter);
        const siblingNumber = this.getCountedSiblingsUntil(this.chainDepthArray, this.chainDepthCounter);

        if (debugOutput) {
          console.log('DepthPosition: ' + chainLevel);
          console.log('Sibling Number: ' + siblingNumber);
        }

        this.changePosition(siblingNumber.chainLevel);

        // only execute callback function when element != root
        if (this.chainDepthCounter !== 1) {
          if (elementCallbackFunction) elementCallbackFunction(element, this.currentPosition);
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
