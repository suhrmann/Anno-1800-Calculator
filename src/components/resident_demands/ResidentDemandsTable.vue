<template>
  <v-container grid-list-md text-xs-center>

    <table width="100%" class="bordered">
      <tr>
        <th>Type</th>
        <th colspan="2">Need</th>
        <th>Consumption</th>
        <th>Required Chains</th>
        <th>Chains Efficiency</th>
        <th>Production per Chain</th>
      </tr>
      <tr
        v-for="(usage, product) in totalDemands.basic"
        v-bind:key="product"
      >
        <template v-if="usage">
          <td
            v-if="usage"
            @click="isConsumable(product, usage) ? selectChain(product) : false"
          >
            basic
          </td>
          <!-- Icon -->
          <td>
            <a v-if="isConsumable(product, usage)"
               @click="selectChain(product)"
            >
              <v-avatar>
                <img
                  :src="getBuildingImage(product)"
                  :alt="`{product} Image`"
                >
              </v-avatar>
            </a>
            <v-avatar v-else>
              <img
                :src="getBuildingImage(product)"
                :alt="`{product} Image`"
              >
            </v-avatar>
          </td>
          <!-- Consumption -->
          <td>
            <a v-if="isConsumable(product, usage)"
               @click="selectChain(product)"
            >
              <b>{{product}}</b>
            </a>
            <span v-else><b>{{product}}</b></span>
          </td>
          <td>
            <span v-if="isConsumable(product, usage)">{{ formatUsage(usage) }}</span>
            <span v-else>&mdash;</span>
          </td>
          <!-- Required Chains -->
          <td>
            <span v-if="isConsumable(product, usage)">{{ requiredChains(product, usage) }}</span>
            <span v-else>&mdash;</span>
          </td>
          <!-- Efficiency of all chains -->
          <td>
            <span v-if="isConsumable(product, usage)">{{( chainEfficiency(product, usage) * 100 ).toFixed(2) }} %</span>
            <span v-else>&mdash;</span>
          </td>
          <!-- Production per Chain -->
          <td>
            <span v-if="isConsumable(product, usage)">{{ toFixedVariable(productionPerMinute(product), 4) }}</span>
            <span v-else>&mdash;</span>
          </td>


        </template>
      </tr>

    </table>

    <p>&nbsp;</p>

    <h2>Luxury Needs:</h2>
    <b>TODO:</b> Add luxury demands here!

    <v-spacer></v-spacer>

  </v-container>
</template>

<script>
import residentDemandCalculatorMixin from './residentDemandCalculatorMixin.js';

export default {
  name: 'ResidentDemandsTable',
  data: function() {
    return {};
  },
  mixins: [residentDemandCalculatorMixin],
  computed: {},
  watch: {},
  methods: {
    /**
     * The production per minute of one production chain.
     *
     * @param {string} product The name of the product.
     * @return {number} The amount of products per minute.
     */
    productionPerMinute: function(product) {
      const building = this.getBuildingByProduct(product); // TODO Does not differ between Old and New World!!!

      // The production time (in seconds) of one production chain to produce one item
      const productionTime = building.productionTime;

      return 60 / productionTime;
    },

    /**
     * This many production chains are required to fulfill the populations' consumption.
     *
     * @param {string} product The name of the product.
     * @param {number} consumption The population consumes this much products per minute.
     * @return {int} The amount of full production chains (!) required to fulfill consumption.
     */
    requiredChains(product, consumption) {
      // The production chain produces this much
      const production = this.productionPerMinute(product);

      // Calculate the required amount of production chains (exact)
      const numChainsExact = consumption / production;

      // Only full chains are possible to build
      const numChainsRequired = Math.ceil(numChainsExact);

      return numChainsRequired;
    },

    /**
     * The efficiency of this production chain to fulfill the demands.
     *
     * @param {string} product The name of the product.
     * @param {number} consumption The population consumes this much products per minute.
     * @return {number} The efficiency of this production.
     */
    chainEfficiency(product, consumption) {
      // The production chain produces this much
      const production = this.productionPerMinute(product);

      // Calculate the required amount of production chains (exact)
      const numChainsExact = consumption / production;

      // Only full chains are possible to build
      const numChainsRequired = Math.ceil(numChainsExact);

      // Calculate the efficiency
      const efficiency = numChainsExact / numChainsRequired;

      return efficiency;
    },
  },
};
</script>

<style scoped>
  .bordered,
  .bordered th,
  .bordered td {
    border: 1px solid #cccccc;
    border-collapse: collapse;
  }

</style>
