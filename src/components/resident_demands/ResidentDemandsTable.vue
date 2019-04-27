<template>
  <v-container grid-list-md text-xs-center>

    <!-- Filter by demand type -->

    <v-container fluid class="ma-0 py-1">
      <v-layout row wrap>
        <v-flex xs12>
          <h3 class="left">Show. . . </h3>
        </v-flex>
      </v-layout>
    </v-container>


    <!-- TODO Fix padding & margin -_- -->
    <v-card>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <!-- Basic / Luxury demands -->
            <!-- TODO Make this Chkbx XOR: None or only one! -->
            <v-flex xs12 sm4 md4>
              <v-switch
                v-model="onlyBasicChkbx"
                label="Only basic"
                value=""
                hide-details
              ></v-switch>
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-switch
                v-model="onlyLuxuryChkbx"
                label="Only luxury"
                value=""
                hide-details
              ></v-switch>
            </v-flex>
            <!--
            <v-flex xs12 sm4 md4>
              <v-switch
                v-model="ex11"
                label="All"
                value="indigo"
                hide-details
              ></v-switch>
            </v-flex>
            -->
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>


    <v-card>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <!-- Consumable / Non-Consumable -->
            <!-- TODO Make this Chkbx XOR: None or only one! -->
            <v-flex xs12 sm4 md4>
              <v-switch
                v-model="onlyConsumableChkbx"
                label="Only consumable"
                value=""
                hide-details
              ></v-switch>
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-switch
                v-model="onlyNonConsumableChkbx"
                label="Only non-consumable"
                value=""
                hide-details
              ></v-switch>
            </v-flex>
            <!--
            <v-flex xs12 sm4 md4>
              <v-switch
                v-model="ex11"
                label="All"
                value="indigo"
                hide-details
              ></v-switch>
            </v-flex>
            -->

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

      onlyBasicChkbx: false,
      onlyLuxuryChkbx: true,
      onlyConsumableChkbx: false,
      onlyNonConsumableChkbx: false,

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
