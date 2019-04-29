<template>
  <v-container grid-list-md text-xs-center>

    <v-card class="mb-2">

      <v-card-title primary-title class="pb-0">
        <div>
          <h3>Filter Table . . .</h3>
        </div>
      </v-card-title>


      <v-card-text class="ma-0 py-0">
        <v-container fluid>
          <v-layout row wrap class="my-0 py-0">

            <!-- Filter by demand type -->
            <v-flex xs12 sm6 md4>
              <v-radio-group v-model="radios1" class="my-0">
                <template slot="label">
                  <div>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" />
                    </svg>
                    <strong>Filter Demand Type</strong>
                  </div>
                </template>
                <v-radio
                  label="All"
                  :value="FILTER_VALUES.TYPE_ALL"
                ></v-radio>
                <v-radio
                  label="Only Basic"
                  :value="FILTER_VALUES.TYPE_BASIC"
                ></v-radio>
                <v-radio
                  label="Only Luxury"
                  :value="FILTER_VALUES.TYPE_LUXURY"
                ></v-radio>
              </v-radio-group>
            </v-flex>


            <!-- Filter by Consumable / Non-Consumable -->
            <v-flex xs12 sm6 md4>
              <v-radio-group v-model="radios2" class="my-0">
                <template slot="label">
                  <div>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="" d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" />
                    </svg>
                    <strong>Filter Consumable</strong>
                  </div>
                </template>
                <v-radio
                  label="All"
                  value="all"
                ></v-radio>
                <v-radio
                  label="Only Consumable"
                  value="consumable"
                ></v-radio>
                <v-radio
                  label="Only Non-Consumable"
                  value="non-consumable"
                ></v-radio>
              </v-radio-group>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>


    <v-data-table
      :headers="headers"
      :items="totalDemandsDatatable"
      class="elevation-1"
      hide-actions
    >
      <!-- Warn about no data -->
      <template slot="no-data">
        <v-alert :value="true" color="warning" icon="warning">
          <h3>Sorry, nothing to display here :(</h3>
          <p class="mb-0">Enter the number of your populations to start calculation of demands.</p>
        </v-alert>
      </template>

      <!-- Data: Rows . . . -->
      <template slot="items" slot-scope="props"
                v-if="(
                  (onlyBasicChkbx && isBasicDemand(props.item.name))
                      || (onlyLuxuryChkbx && !isBasicDemand(props.item.name))
                      || (!onlyBasicChkbx && !onlyLuxuryChkbx)
                ) &&
                (
                  (onlyConsumableChkbx && props.item.isConsumable)
                      || (onlyNonConsumableChkbx && !props.item.isConsumable)
                      || (!onlyConsumableChkbx && !onlyNonConsumableChkbx)
                )"
      >
        <td>
          {{ isBasicDemand(props.item.name) ? 'basic' : 'luxury' }}
        </td>
        <!-- Is Consumable -->
        <td>
          {{ props.item.isConsumable }}
        </td>
        <!-- Icon -->
        <td>
          <a v-if="props.item.isConsumable"
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
          <a v-if="props.item.isConsumable"
             @click="selectChain(props.item.name)"
          >
            <b>{{props.item.name}}</b>
          </a>
          <span v-else><b>{{props.item.name}}</b></span>
        </td>
        <!-- Consumption -->
        <td>
          <span v-if="props.item.isConsumable">
            {{ formatUsage(props.item.consumption) }}
          </span>
          <span v-else>&mdash;</span>
        </td>
        <!-- Required Chains -->
        <td>
          <div v-if="props.item.isConsumable">
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
          <span v-if="props.item.isConsumable">
            {{( chainEfficiency(props.item.name, props.item.consumption) * 100 ).toFixed(2) }} %
          </span>
          <span v-else>&mdash;</span>
        </td>
        <!-- Production per Chain -->
        <td>
          <span v-if="props.item.isConsumable">
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
      radios1: 'all',
      radios2: 'all',

      headers: [
        // TODO Add value for old / new world
        { text: 'Type', value: 'type' },
        { text: 'Is Consumable', value: 'isConsumable' }, // TODO Width: Narrow (width should fit content)
        { text: '', value: 'img', sortable: false }, // TODO Width: Narrow (width should fit content)
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

    FILTER_VALUES: function() {
      return {
        // Filter values for demand type
        TYPE_ALL: 'all',
        TYPE_BASIC: 'basic',
        TYPE_LUXURY: 'luxury',

        // Filter values for consumable
        CONSUMABLE_ALL: 'all',
        CONSUMABLE: 'consumable',
        CONSUMABLE_NON: 'non-consumable',
      };
    },

    onlyBasicChkbx: function() {
      return this.radios1 === this.FILTER_VALUES.TYPE_BASIC;
    },
    onlyLuxuryChkbx: function() {
      return this.radios1 === this.FILTER_VALUES.TYPE_LUXURY;
    },

    onlyConsumableChkbx: function() {
      return this.radios2 === this.FILTER_VALUES.CONSUMABLE;
    },
    onlyNonConsumableChkbx: function() {
      return this.radios2 === this.FILTER_VALUES.CONSUMABLE_NON;
    },


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
            isConsumable: this.isConsumable(key, value),
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
