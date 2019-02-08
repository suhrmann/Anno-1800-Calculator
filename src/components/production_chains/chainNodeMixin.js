export const chainNodeMixin = {
  name: 'ProductionChainNode',

  data() {
    return {
      chainDepth: 0,
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
     * @return {int} depth of the Production Chain
     * Returns a number which represents the number of levels in the production hierarchy
     */

    getChainDepth(productionChain) {
      const element = productionChain;
      console.log('Root: ' + element.building);
      console.log('Leaf? ' + this.isLeaf(element));

      if (!this.isLeaf(element)) {
        let leftPrecursor = null;
        let rightPrecursor = null;

        console.log(element.precursorBuildings)


        if (this.isLeaf(element.precursorBuildings[1])) {
          leftPrecursor = element.precursorBuildings[1];
        }

        if (this.isLeaf(element.precursorBuildings[2])) {
          rightPrecursor = element.precursorBuildings[2];
        }

        if (leftPrecursor !== null) {
          this.getChainDepth(leftPrecursor);
        } else {
          console.log('end');
        }
        if (rightPrecursor !== null) {
          this.getChainDepth(rightPrecursor);
        } else {
          console.log('end');
        }
      }
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
