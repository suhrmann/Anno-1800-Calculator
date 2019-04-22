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
      <template
        v-for="(usage, product) in totalDemands.basic"
      >
        <tr
          v-if="usage"
          v-bind:key="product"
        >
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
            <div v-if="isConsumable(product, usage)">
              {{ requiredChains(product, usage) }} &times;
              <v-avatar>
                <img
                  :src="getBuildingImage(product)"
                  :alt="`{product} Image`"
                  class="inline-img"
                >
              </v-avatar>
            </div>
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


        </tr>
      </template>

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
  .inline-img {
    height: 66%;
    width: auto;
  }


  /**
   * Table style
   * Source: http://johnsardine.com/freebies/dl-html-css/simple-little-tab/
   * Author: JohnSardine, 09 Dez 2010
   */
  table a:link {
    color: #666;
    font-weight: bold;
    text-decoration:none;
  }
  table a:visited {
    color: #999999;
    font-weight:bold;
    text-decoration:none;
  }
  table a:active,
  table a:hover {
    color: #bd5a35;
    text-decoration:underline;
  }
  table {
    color:#666;
    text-shadow: 1px 1px 0px #fff;
    background:#eaebec;
    border:#ccc 1px solid;

    -moz-border-radius:3px;
    -webkit-border-radius:3px;
    border-radius:3px;

    -moz-box-shadow: 0 1px 2px #d1d1d1;
    -webkit-box-shadow: 0 1px 2px #d1d1d1;
    box-shadow: 0 1px 2px #d1d1d1;
  }
  table th {
    padding:21px 25px 22px 25px;
    border-top:1px solid #fafafa;
    border-bottom:1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;

    background: #ededed;
    background: -webkit-gradient(linear, left top, left bottom, from(#ededed), to(#ebebeb));
    background: -moz-linear-gradient(top,  #ededed,  #ebebeb);
  }
  table th:first-child {
    border-left: 0;
  }
  table tr:first-child th:first-child {
    -moz-border-radius-topleft:3px;
    -webkit-border-top-left-radius:3px;
    border-top-left-radius:3px;
  }
  table tr:first-child th:last-child {
    -moz-border-radius-topright:3px;
    -webkit-border-top-right-radius:3px;
    border-top-right-radius:3px;
    border-right: 0;
  }
  table tr {
    text-align: center;
    padding-left:20px;
  }
  table td:first-child {
    border-left: 0;
  }
  table td {
    border-top: 1px solid #ffffff;
    border-bottom:1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;

    background: #fafafa;
    background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#fafafa));
    background: -moz-linear-gradient(top,  #fbfbfb,  #fafafa);
  }
  table tr.even td {
    background: #f6f6f6;
    background: -webkit-gradient(linear, left top, left bottom, from(#f8f8f8), to(#f6f6f6));
    background: -moz-linear-gradient(top,  #f8f8f8,  #f6f6f6);
  }
  table tr:last-child td {
    border-bottom:0;
  }
  table tr:last-child td:first-child {
    -moz-border-radius-bottomleft:3px;
    -webkit-border-bottom-left-radius:3px;
    border-bottom-left-radius:3px;
  }
  table tr:last-child td:last-child {
    -moz-border-radius-bottomright:3px;
    -webkit-border-bottom-right-radius:3px;
    border-bottom-right-radius:3px;
  }
  table tr:hover td {
    background: #f2f2f2;
    background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#f0f0f0));
    background: -moz-linear-gradient(top,  #f2f2f2,  #f0f0f0);
  }
</style>
