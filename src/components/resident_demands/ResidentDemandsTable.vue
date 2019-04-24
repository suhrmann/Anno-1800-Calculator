<template>
  <v-container grid-list-md text-xs-center>

    <v-data-table
      :headers="headers"
      :items="totalDemandsDatatable"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>
          {{ isBasicDemand(props.item.name) ? 'basic' : 'luxury' }}
        </td>
        <!-- Icon -->
        <td>
          <a v-if="isConsumable(props.item.name, props.item.consumption)"
             @click="selectChain(props.item.name)"
          >
            <v-avatar>
              <img
                :src="getBuildingImage(props.item.name)"
                :alt="`{props.item.name} Image`"
              >
            </v-avatar>
          </a>
          <v-avatar v-else>
            <img
              :src="getBuildingImage(props.item.name)"
              :alt="`{props.item.name} Image`"
            >
          </v-avatar>
        </td>
        <!-- Name -->
        <td>
          <a v-if="isConsumable(props.item.name, props.item.consumption)"
             @click="selectChain(props.item.name)"
          >
            <b>{{props.item.name}}</b>
          </a>
          <span v-else><b>{{props.item.name}}</b></span>
        </td>
        <!-- Consumption -->
        <td>
          <span v-if="isConsumable(props.item.name, props.item.consumption)">
            {{ formatUsage(props.item.consumption) }}
          </span>
          <span v-else>&mdash;</span>
        </td>
        <!-- Required Chains -->
        <td>
          <div v-if="isConsumable(props.item.name, props.item.consumption)">
            {{ requiredChains(props.item.name, props.item.consumption) }} &times;
            <v-avatar>
              <img
                :src="getBuildingImage(props.item.name)"
                :alt="`{props.item.name} Image`"
                class="inline-img"
              >
            </v-avatar>
          </div>
          <span v-else>&mdash;</span>
        </td>
        <!-- Efficiency of all chains -->
        <td>
          <span v-if="isConsumable(props.item.name, props.item.consumption)">
            {{( chainEfficiency(props.item.name, props.item.consumption) * 100 ).toFixed(2) }} %
          </span>
          <span v-else>&mdash;</span>
        </td>
        <!-- Production per Chain -->
        <td>
          <span v-if="isConsumable(props.item.name, props.item.consumption)">
            {{ toFixedVariable(productionPerMinute(props.item.name), 4) }}
          </span>
          <span v-else>&mdash;</span>
        </td>
      </template>
    </v-data-table>

  </v-container>
</template>

<script>
import residentDemandCalculatorMixin from './residentDemandCalculatorMixin.js';

export default {
  name: 'ResidentDemandsTable',
  data: function() {
    return {

      headers: [
        // TODO Add value for old / new world
        // TOOD Increase the number of displayed rows
        { text: 'Type', value: 'type' },
        { text: '', value: 'img', sortable: false },
        { text: 'Need', value: 'name' },
        { text: 'Consumption', value: 'consumption' },
        { text: 'Required Chains', value: 'numChains' },
        { text: 'Chains Efficiency', value: 'efficiency' },
        { text: 'Production per Chain', value: 'productionPerChain' },
      ],
    };
  },
  mixins: [residentDemandCalculatorMixin],
  computed: {
    /**
     * Flatten the basic and luxury demands into one single, flat array.
     * @return {array} Basic and luxury demands, but flattened and with additional value "type": 'basic'|'luxury'
     */
    totalDemandsFlat: function() {
      const basicNeeds = this.totalDemands.basic;
      const luxuryNeeds = this.totalDemands.luxury;

      return Object.assign({}, basicNeeds, luxuryNeeds);
    },

    /**
     * Preprocess the populations' demands for Data Table of Vuetify.
     *
     * @return {array} An array of objects of type:
     *   {
     *       name: string,
     *       need: float,
     *       ...
     *   }
     */
    totalDemandsDatatable: function() {
      const items = [];
      const allDemands = this.totalDemandsFlat;

      for (const key in allDemands) {
        const value = allDemands[key];

        // Only add demand if it is present or > 0
        if (value === true || value > 0) {
          // TODO Create data here instead of in HTML table
          items.push({
            type: this.isBasicDemand(key) ? 'basic' : 'luxury',
            name: key,
            consumption: value,
          });
        }
      }

      return items;
    },
  },
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

    isBasicDemand: function(need) {
      const basicNeeds = this.totalDemands.basic;
      return (need in basicNeeds); // Check if OBJECT contains key
    },

    isLuxuryDemand: function(need) {
      const luxuryNeeds = this.totalDemands.luxury;
      return (need in luxuryNeeds); // Check if OBJECT contains key
    },
  },
};
</script>

<style scoped>
  .inline-img {
    height: 66%;
    width: auto;
  }
</style>
