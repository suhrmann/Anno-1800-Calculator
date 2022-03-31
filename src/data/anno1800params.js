import { params } from './params'
import hierarchy from './anno1800hierarchy'
import icons from './anno1800icons'
import { processProductInformation } from './devhelpers'

/**
 * Wrapper for params.js
 * Provides the Anno 1800 data from NiHoel's params.js for this calculator.
 */

export const defaultLang = 'english'

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
 * Returns an Object with all final Producers as a Tree
 * This tree ist organized in a hierarchical order
 * The hierarchy follows the building unlock chronology ingame
 *
 * @returns {*}
 */
export const getEndProductsAsTree = () => {
  return hierarchy.regions.map(region => {
    const regionName = regions.find(paramsRegion => paramsRegion.guid === region.guid).locaText[defaultLang]
    const regionIcon = (icons.regions.data.find(regionIcon => regionIcon.guid === region.guid)).iconPath
    if (region.name === undefined) region.name = regionName
    region.icon = regionIcon

    region.populationLevels.map(populationLevel => {
      const populationName = populationLevels.find(paramsPopulationLevel => paramsPopulationLevel.guid === populationLevel.guid).locaText[defaultLang]
      const populationIcon = (icons.populationLevels.data.find(popIcon => popIcon.guid === populationLevel.guid)).iconPath
      if (populationLevel.name === undefined) populationLevel.name = populationName
      populationLevel.icon = populationIcon
      populationLevel.factoryData = []

      populationLevel.factories.map(factory => {
        const factoryName = factories.find(paramsFactory => paramsFactory.guid === factory).locaText[defaultLang]
        const factoryIcon = (icons.factories.data.find(factoryIcon => factoryIcon.guid === factory)).iconPath
        populationLevel.factoryData.push({ guid: factory, name: factoryName, icon: factoryIcon })
        return factory
      })
      return populationLevel
    })
    return region
  })
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
  processProductInformation(icons, params)
}
