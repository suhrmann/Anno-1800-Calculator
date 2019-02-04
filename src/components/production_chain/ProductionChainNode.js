/**
 * This is one end node of a production chain.
 */
class ProductionChainNode {
  /**
   * Create a node of a production chain. May contain further {@see ProductionChainNode}s.
   *
   * @param {Building} building
   * @param {ProductionChain|ProductionChainNode|null} nextChainElement
   */
  constructor(building, nextChainElement) {
    this._building = building;

    // Store the following nodes of the tree
    this.nextTop = null;
    this.nextBottom = null;
  }

  /**
   * Get the stored building of this node.
   *
   * @return {*}
   */
  get building() {
    return this._building;
  }

  /**
   * If this node is linear, return this single next node.
   *
   * @return {ProductionChainNode|null} Iff this chain is linear return the single next node,
   *                                    otherwise (if this node has none or multiple next nodes) return null.
   */
  next() {
    if (this.isLinear()) {
      // Return the next node that is set.
      return this.nextTop || this.nextBottom;
    }
  }

  /**
   * Is this node linear (has only one next node).
   *
   * @return {boolean} true if this node has exactly one next node.
   */
  isLinear() {
    // nextTop XOR nextBottom
    return (this.nextTop && !this.nextBottom) || (!this.nextTop && this.nextBottom);
  }

  /**
   * Is this node a leaf (= this node has no next nodes)?
   *
   * @return {boolean} true if this node has no next nodes.
   */
  isLeaf() {
    return this.nextTop == null && this.nextBottom == null;
  }
}
