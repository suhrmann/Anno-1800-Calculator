import { params } from './params'
// import { hierarchy } from './anno1800hierarchy'
import icons from './anno1800icons'

/**
 * Wrapper for params.js
 * Provides the Anno 1800 data from NiHoel's params.js for this calculator.
 */

export const factories = params.factories
export const goodConsumptionUpgrades = params.goodConsumptionUpgrades
// export const icons = params.icons
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
  /*   const constructionProducts = hierarchy.regions.forEach(region => {
    region.populationLevels.forEach(populationLevel => {
      populationLevel.factories = populationLevel.factories.forEach(factoryGUID => {
        const output = params.factories.find(paramFactory => paramFactory.guid === factoryGUID).outputs[0]

      })
    })
  }) */

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
      // firstLevel: _getFirstPopulationLevelOfProduct(productID),
      name: productData.name,
      factoryID: factory.guid,
      factoryName: factory.name,
      region: factory.region
    })
  })

  return productInformation
}

export const testmethod = () => {
  // this method iterates over every element in icons.product.data and
  // builds a new json to use as data
  // this is just a helper script to make data entry easier

  // get product filter guid for each product
  let found = false
  icons.products.data.forEach(currentData => {
    if (found === false) {
      params.productFilter.forEach(filter => {
        if (filter.products.includes(currentData.guid)) {
          currentData.productFilter = filter.guid
          found = true
        }
      })
    }
    if (found === false) {
      currentData.productFilter = 0
    }
    found = false
  })

  // get data for each product
  icons.products.data.forEach(currentData => {
    const searchArray = []
    searchArray.push(...params.products)
    searchArray.push(...params.publicRecipeBuildings)
    searchArray.push(...params.recipeLists)
    searchArray.push(...params.residenceBuildings)
    searchArray.push(...params.tradeContracts.piers)
    searchArray.push(...params.traders)
    const productData = searchArray.find(product => currentData.guid === product.guid)
    console.log(productData)
    console.log(currentData.guid)
    if (productData.name === undefined) {
      currentData.name = 'unknown'
    } else {
      currentData.name = productData.name
    }
  })

  // get icon file for each product
  icons.products.data.forEach(currentData => { })

  // output data into stringified json
  console.log(JSON.stringify(icons.products.data))
}
