<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */

import productionChain from "../data/production-chain.json";
import nonProducers from "../data/non-producers.json";
import producers from "../data/producers.json";
export default {
  data() {
    return {
      selectedTier: 0,
      tiers: [
        "Farmer",
        "Worker",
        "Artisan",
        "New World",
        "Engineer",
        "Investor"
      ],

      prodChain: productionChain,
      nonproducers: nonProducers,
      producers: producers,
      chainSelection: null,
      tierObjects: null
    };
  },

  computed: {
    /**
     * Returns an array of Production Chain Endproduct names for a certain Tier
     * @return {String[]} An Array containing all Production Chain names
     */
    getChains() {
      const productionChains = this.fetchAllProductionChains();
      const tieredChains = this.getProductionChainsByTier(
        productionChains,
        this.selectedTier + 1
      );
      const productionChainsArray = this.getChainsEndProducts(tieredChains);
      this.tierObjects = tieredChains;

      return productionChainsArray;
    }
  },

  methods: {
    print(string) {
      console.log(string);
    },

    /**
     * Returns a deep copy of all Production Chains
     * @return {Object} A JS Object with all production chain objects init
     */
    fetchAllProductionChains() {
      return JSON.parse(JSON.stringify(this.prodChain.Production_Chain));
    },

    /**
     *
     * @param {Object} allProductionChains A JS Object containing all Production Chains
     * @param {int} tier The tier, by which the production chains get filtered
     * @return {Object} A JS Object with all production chain objects init
     */
    getProductionChainsByTier(allProductionChains, tier) {
      const tieredChains = [];
      Object.keys(allProductionChains).forEach(chain => {
        if (allProductionChains[chain].tier == tier) {
          tieredChains.push(allProductionChains[chain]);
        }
      });
      return tieredChains;
    },

    /**
     *
     * @param {Object} chainsCollection A JS Object containing one or more Production Chains
     * @return {Array} An Array with all the Products' names of the given Production Chains
     */
    getChainsEndProducts(chainsCollection) {
      const endProductsArray = [];
      Object.keys(chainsCollection).forEach(chain => {
        endProductsArray.push(chainsCollection[chain].finalProduct);
      });

      return endProductsArray;
    },

    /**
     *
     * @todo DOC
     */
    getCertainChain(chainsCollection, chainName) {
      const test = [];
      console.log(chainsCollection);
      Object.keys(chainsCollection).forEach(chain => {
        if (chainsCollection[chain].finalProduct == chainName) {
          test.push(chainsCollection[chain]);
          console.log(test[0]);
        } else {
          return {};
        }
      });
    },

    /**
     *
     * @todo DOC
     */
    loadChain(chainName, chainCollection) {
      chainName = this.chainSelection;
      let chains = null;
      if (chainCollection == null) {
        chains = this.fetchAllProductionChains();
      } else {
        chains = chainsCollection;
      }
      const chain = this.getCertainChain(chains, chainName);
      console.log(chain);
      return chain;
    },

    getChainWidth(chain) {}
  }
};
</script>

<style>
</style>
