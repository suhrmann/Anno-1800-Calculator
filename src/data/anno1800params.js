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
export const productFilter = params.productFilter
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
