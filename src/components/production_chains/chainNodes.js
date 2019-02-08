import Producer from './Producer';
import ProductionChainNode from './ProductionChainNode';

export default {
  name: 'ProductionChainNode',
  data: function () {
    return {
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
  computed: {
    /**
     * If this node is linear, return this single next node.
     *
     * @return {ProductionChainNode|null} Iff this chain is linear return the single next node,
     *                                    otherwise (if this node has none or multiple next nodes) return null.
     */
    next: function () {
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
    isLinear: function () {
      // nextTop XOR nextBottom (but NOT both)
      return (this.nextTop && !this.nextBottom) || (!this.nextTop && this.nextBottom);
    },

    /**
     * Is this node a leaf (= this node has no next nodes)?
     *
     * @return {boolean} true if this node has no next nodes.
     */
    isLeaf: function () {
      return this.nextTop == null && this.nextBottom == null;
    },
  },
};
