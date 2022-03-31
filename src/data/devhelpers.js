// dev
import Fuse from 'fuse.js'
import assetlist from '../assets/assetlist'

export const processProductInformation = (icons, params) => {
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
    if (productData.name === undefined) {
      currentData.name = 'unknown'
    } else {
      currentData.name = productData.name
    }
  })

  // get icon file for each product
  const fuseOptions = {
    includeScore: true,
    threshold: 0.3
  }
  const fuse = new Fuse(assetlist.assets, fuseOptions)

  icons.products.data.forEach(currentData => {
    const searchResult = fuse.search(currentData.name)
    if (searchResult.length === 1) {
      currentData.iconPath = searchResult[0].item
    } else if (searchResult.length === 0) {
      currentData.iconPath = 'not_found'
    } else {
      currentData.iconPath = searchResult.map(result => result.item)
    }
  })

  // output data into stringified json
  // console.log(icons.products.data)
  console.log(JSON.stringify(icons.products.data))
}
