<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 2" :key="`6${i}`" xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card dark color="secondary">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 6" :key="`2${i}`" xs2>
          <v-card dark color="primary">
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 12" :key="`1${i}`" xs1>
          <v-card dark color="secondary">
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-tabs v-model="selectedTier" color="primary" dark slider-color="secondary">
            <v-tab v-for="tier in tiers" :key="tier" ripple>{{ tier }}</v-tab>
            <v-tab-item v-for="tier in tiers" :key="tier">
              <v-card flat>
                <v-flex xs-8>
                  <v-combobox
                    v-model="chainSelection"
                    :items="getChains"
                    label="Select a Production chain"
                  ></v-combobox>
                </v-flex>
                <v-flex xs-3>
                  <v-btn @click="loadChain(this.chainSelection)" color="accent">Load Chain</v-btn>
                </v-flex>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import productionChain from "../data/productionChain.json";
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
      let productionChains = this.fetchAllProductionChains();
      let tieredChains = this.getProductionChainsByTier(
        productionChains,
        this.selectedTier + 1
      );
      let productionChainsArray = this.getChainsEndProducts(tieredChains);
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
      let tieredChains = [];
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
      let endProductsArray = [];
      Object.keys(chainsCollection).forEach(chain => {
        endProductsArray.push(chainsCollection[chain].finalProduct);
      });

      return endProductsArray;
    },

    getCertainChain(chainsCollection, chainName) {
      Object.keys(chainsCollection).forEach(chain => {
        if (chainsCollection[chain].finalProduct == name) {
          return chainsCollection[chain];
        } else {
          return {};
        }
      });
    },

    loadChain(chainName, chainCollection) {
      let chains = null;
      if (chainCollection == null) {
        chains = this.fetchAllProductionChains();
      } else {
        chains = chainsCollection;
      }
      chain = this.getCertainChain(chainName, chains);
      console.log(chain);
      return chain;
    },

    getChainWidth(chain) {}
  }
};
</script>

<style>
</style>
