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
                  <v-btn color="accent">Load Chain</v-btn>
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
        "Engineer",
        "Investor",
        "New World"
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
     * Returns Production Chains for a certain Tier
     * @return {String[]} An Array containing all Production Chain names
     */
    getChains() {
      this.tierSelection = [];
      let tieredChains = [];
      let productionChainsArray = [];

      let productionChains = JSON.parse(
        JSON.stringify(this.prodChain.Production_Chain)
      );

      Object.keys(productionChains).forEach(chain => {
        if (productionChains[chain].tier == this.selectedTier + 1) {
          tieredChains.push(productionChains[chain]);
        }
      });

      console.log(tieredChains);

      Object.keys(tieredChains).forEach(chain => {
        productionChainsArray.push(tieredChains[chain].finalProduct);
      });

      this.tierObjects = tieredChains;

      return productionChainsArray;
    }
  },

  methods: {
    print(string) {
      console.log(string);
    },

    searchForChain(chainname) {
      let rawData = JSON.parse(JSON.stringify(this.prodChain));
    },

    analyzeChain(chain) {}
  }
};
</script>

<style>
</style>
