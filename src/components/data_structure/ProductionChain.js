/**
 * Contains one full production chain.
 */
class ProductionChain {

  /**
   * TODO Doc me!
   *
   * @param {string} productName The name of the product this chain produces.
   */
  constructor(productName) {
    this._productName = productName || null;

    // TODO Think of a way to store (read/write) production chains.

    // Create a Bin-Tree structure. TODO Are all production chains <= Binary???
    this.nextTop = null;
    this.nextBottom = null;
  }

  /**
   * The name of this building.
   */
  get productName() {
    return this._productName;
  }

  /**
   * The time of producing one product in seconds.
   */
  get productionDurationInSec() {
    // TODO Implement me!
  }

  /**
   * The upkeep of this building
   */
  get upkeepCosts() {
    // TODO Implement me!
  }

  /**
   * The amount of farmers this building requires to operate.
   */
  get numFarmers() {
    // TODO Implement me!
  }

  /**
   * The amount of workers this building requires to operate.
   */
  get numWorkers() {
    // TODO Implement me!
  }

  /**
   * The amount of artisans this building requires to operate.
   */
  get numArtisans() {
    // TODO Implement me!
  }

  /**
   * The amount of engineers this building requires to operate.
   */
  get numEngineers() {
    // TODO Implement me!
  }

  /**
   * The amount of investors this building requires to operate.
   */
  get numInvestors() {
    // TODO Implement me!
  }

  /**
   * The amount of jornaleros this building requires to operate.
   */
  get numJornaleros() {
    // TODO Implement me!
  }

  /**
   * The amount of obreros this building requires to operate.
   */
  get numObreros() {
    // TODO Implement me!
  }
}
