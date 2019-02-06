/**
 * Contains all the data and requirements of a building of the production chain.
 */
class Building {
  /**
   * Represents the data of one building of the production chain.
   *
   * @param {string} name The name of this building.
   * @param {int} productionDurationInSec The time of producing one product.
   * @param {int} upkeepCosts The upkeep of this building
   *
   * @param {int} numFarmers The amount of farmers this building requires to operate.
   * @param {int} numWorkers The amount of workers this building requires to operate.
   * @param {int} numArtisans The amount of artisans this building requires to operate.
   * @param {int} numEngineers The amount of engineers this building requires to operate.
   * @param {int} numInvestors The amount of investors this building requires to operate.
   *
   * @param {int} numJornaleros The amount of jornaleros this building requires to operate.
   * @param {int} numObreros The amount of obreros this building requires to operate.
   */
  constructor(name, productionDurationInSec, upkeepCosts,
      numFarmers, numWorkers, numArtisans, numEngineers, numInvestors,
      numJornaleros, numObreros) {
    // Meta information about
    this._name = name || null;
    this._productionDurationInSec = productionDurationInSec || null;
    this._upkeepCosts = upkeepCosts || null;

    // Operators of the Old World
    this._numFarmers = numFarmers || 0;
    this._numWorkers = numWorkers || 0;
    this._numArtisans = numArtisans || 0;
    this._numEngineers = numEngineers || 0;
    this._numInvestors = numInvestors || 0;

    // Operators of the New World
    this._numJornaleros = numJornaleros || 0;
    this._numObreros = numObreros || 0;
  }

  /**
   * The name of this building.
   */
  get name() {
    return this._name;
  }

  /**
   * The time of producing one product in seconds.
   */
  get productionDurationInSec() {
    return this._productionDurationInSec;
  }

  /**
   * The upkeep of this building
   */
  get upkeepCosts() {
    return this._upkeepCosts;
  }

  /**
   * The amount of farmers this building requires to operate.
   */
  get numFarmers() {
    return this._numFarmers;
  }

  /**
   * The amount of workers this building requires to operate.
   */
  get numWorkers() {
    return this._numWorkers;
  }

  /**
   * The amount of artisans this building requires to operate.
   */
  get numArtisans() {
    return this._numArtisans;
  }

  /**
   * The amount of engineers this building requires to operate.
   */
  get numEngineers() {
    return this._numEngineers;
  }

  /**
   * The amount of investors this building requires to operate.
   */
  get numInvestors() {
    return this._numInvestors;
  }

  /**
   * The amount of jornaleros this building requires to operate.
   */
  get numJornaleros() {
    return this._numJornaleros;
  }

  /**
   * The amount of obreros this building requires to operate.
   */
  get numObreros() {
    return this._numObreros;
  }
}
