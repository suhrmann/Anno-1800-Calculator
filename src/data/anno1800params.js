import { params } from './params'

/**
 * Wrapper for params.js
 * Provides the Anno 1800 data from NiHoel's params.js for this calculator.
 */

export const factories = params.factories
export const goodConsumptionUpgrades = params.goodConsumptionUpgrades
export const icons = params.icons
export const items = params.items
export const languages = params.languages
export const modules = params.modules
export const newspaper = params.newspaper
export const palaceBuffs = params.palaceBuffs
export const populationGroups = params.populationGroups
export const populationLevels = params.populationLevels
export const powerPlants = params.powerPlants
export const productFilters = params.productFilter
export const products = params.products
export const publicRecipeBuildings = params.publicRecipeBuildings
export const recipeLists = params.recipeLists
export const regions = params.regions
export const residenceBuildings = params.residenceBuildings
export const sessions = params.sessions
export const tradeContracts = params.tradeContracts
export const traders = params.traders
export const workforce = params.workforce

// Regions
export const oldWorldGUID = 5000000
export const newWorldGUID = 5000001
export const arcticGUID = 160001
export const enbesaGUID = 114327

// Populations
export const farmersGUID = 15000000
export const workersGUID = 15000001
export const artisansGUID = 15000002
export const engineersGUID = 15000003
export const investorsGUID = 15000004
export const jornalerosGUID = 15000005
export const obrerosGUID = 15000006
export const touristsGUID = 601379
export const explorersGUID = 112642
export const techniciansGUID = 112643
export const shepherdsGUID = 114329
export const eldersGUID = 114330
export const scholarsGUID = 118745

export const populationGUIDs = new Set()
populationGUIDs.add(farmersGUID)
populationGUIDs.add(workersGUID)
populationGUIDs.add(artisansGUID)
populationGUIDs.add(engineersGUID)
populationGUIDs.add(investorsGUID)
populationGUIDs.add(jornalerosGUID)
populationGUIDs.add(obrerosGUID)
populationGUIDs.add(touristsGUID)
populationGUIDs.add(explorersGUID)
populationGUIDs.add(techniciansGUID)
populationGUIDs.add(shepherdsGUID)
populationGUIDs.add(eldersGUID)
populationGUIDs.add(scholarsGUID)

// Needs Types
export const LuxuryNeed = Symbol('LuxuryNeedType')
export const BasicNeed = Symbol('BasicNeedType')

/**
 * Get the population from its GUID.
 *
 * @param guid
 * @returns {*}
 */
export const getRegionByGUID = guid => {
  return regions.find(region => region.guid === guid)
}

/**
 * Get the population from its GUID.
 *
 * @param guid
 * @returns {*}
 */
export const getPopulationByGUID = guid => {
  return populationLevels.find(popLevel => popLevel.guid === guid)
}

/**
 * Check the Type of need (basic / luxury) of a Product for a given Population Level
 * Returns an enum like Symbol
 *
 * @param productGUID
 * @param popLevelGUID
 * @returns {Symbol}
 */

export const checkNeedType = (productGUID, popLevelGUID) => {
  const popLevel = populationLevels.find(
    popLevel => popLevel.guid === popLevelGUID
  )
  return popLevel.needs.find(need => need.guid === productGUID).residents === 0
    ? LuxuryNeed
    : BasicNeed
}

/**
 * Returns an Array containing of all relevant final products.
 *
 * @returns {Array}
 */
export const getRelevantProducts = (withNames = false) => {
  const relevantProducts = []

  const constructionProducts = productFilters.find(productFilter => productFilter.guid === 501957).products

  relevantProducts.push(...productFilters.find(productFilter => productFilter.guid === 502031).products)
  relevantProducts.push(...constructionProducts.filter(productGUID => ![112518, 112520, 112523].includes(productGUID)))

  if (withNames) {
    return relevantProducts.map(relevantProduct => ({ guid: relevantProduct, name: products.find(product => { console.log(product.guid); console.log(relevantProduct); return product.guid === relevantProduct }).locaText.english }))
  }

  return relevantProducts
}

/**
 * Returns an Array of product information and production chain Information for a given ProductID.
 * Since a product can be produced in more than one region, this function returns every factory.
 *
 * @param productID
 * @returns {Array}
 */

export const getProductInformation = (productID) => {
  const productData = products.find(product => product.guid === productID)
  const factoryData = factories.filter(factory => factory.outputs[0].Product === productID)

  const productInformation = []

  factoryData.forEach(factory => {
    productInformation.push({
      firstLevel: _getFirstPopulationLevelOfProduct(productID),
      name: productData.name,
      factoryID: factory.guid,
      factoryName: factory.name,
      region: factory.region
    })
  })

  return productInformation
}

/**
 * Returns the GUID PopulationLevel where a Product Production Chain is first available to build.
 * TODO: Construction Material needs to be entered manually :/
 *
 * @param productID
 * @returns {number}
 */
const _getFirstPopulationLevelOfProduct = (productID) => {
  const popLevelsWithProductNeed = populationLevels.filter(populationLevel => populationLevel.needs.find(need => need.guid === parseInt(productID)) !== undefined)
  const popLevelGUIDs = popLevelsWithProductNeed.map(popLevel => popLevel.guid)
  let firstPopLevel = 0
  if (popLevelGUIDs.length !== 0) { firstPopLevel = popLevelGUIDs.reduce((prev, current) => prev < current ? prev : current) }
  return firstPopLevel
}
