<template>
  <v-container grid-list-md text-center>

    <!-- Show alert with info about cigars appearing twice -->
    <v-row
      v-if="showDuplicatesAlert"
      class="py-6"
      justify="center"
    >
      <v-col cols="12" md="10" lg="8">
        <v-alert
          type="info"
          transition="scale-transition"
          dismissible

          v-model="cigarsInfo"
          class="md10 xs12"
        >
          Cigars are both basic demand for investors and luxury demand for obreros. Therefore cigars appear twice in the
          demands table.
        </v-alert>
      </v-col>
    </v-row>

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
                    <v-icon color="black">mdi-filter</v-icon>
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
                    <v-icon color="black">mdi-filter</v-icon>
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

    <!-- Data Table -->
    <v-data-table
      :headers="headers"
      :items="totalDemandsDatatable"
      disable-pagination
      class="elevation-1"
      multi-sort
      hide-default-footer
      show-group-by
      :group-by.sync="sort_demands_by"
    >
      <!-- Warn about no data -->
      <template slot="no-data">
        <v-alert color="warning" icon="mid-warning">
          <h3>Sorry, nothing to display here :(</h3>
          <p class="mb-0">Enter the number of your populations to start calculation of demands.</p>
        </v-alert>
      </template>

      <!-- Data: Rows . . . -->
      <template slot="item" slot-scope="props"
                v-if="(
                  (onlyBasicChkbx && props.item.isBasic)
                      || (onlyLuxuryChkbx && props.item.isLuxury)
                      || (!onlyBasicChkbx && !onlyLuxuryChkbx)
                ) &&
                (
                  (onlyConsumableChkbx && props.item.isConsumable)
                      || (onlyNonConsumableChkbx && !props.item.isConsumable)
                      || (!onlyConsumableChkbx && !onlyNonConsumableChkbx)
                )"
      >
        <tr>
          <td>
            {{ props.item.isBasic ? 'basic' : (props.item.isLuxury ? 'luxury' : 'N/A') }}
          </td>
          <!-- Is Consumable -->
          <td>
            {{ props.item.isConsumable ? '✔️️️' : '✖️️' }}
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
              <b>{{ props.item.name }}</b>
            </a>
            <span v-else><b>{{ props.item.name }}</b></span>
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
              {{ (chainEfficiency(props.item.name, props.item.consumption) * 100).toFixed(2) }} %
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
        </tr>
      </template>
    </v-data-table>

  </v-container>
</template>

<script>
import residentDemandCalculatorMixin from './residentDemandCalculatorMixin.js'

export default {
  name: 'ResidentDemandsTable',
  data: function () {
    return {
      // The values of the radio buttons to filter table
      radios1: 'all',
      radios2: 'all',

      // Show an info about cigars appearing twice in the data table
      cigarsInfo: true,

      headers: [
        // TODO Add value for old / new region
        {
          text: 'Type',
          value: 'type',
          align: 'center'
        },
        {
          text: 'Is Consumable',
          value: 'isConsumable',
          align: 'center'
        },
        {
          // Icon
          text: '',
          value: 'img',
          sortable: false,
          groupable: false,
          align: 'center'
        },
        {
          text: 'Need',
          value: 'name',
          groupable: false,
          align: 'left'
        },
        {
          text: 'Consumption',
          value: 'consumption',
          groupable: false,
          align: 'center'
        },
        {
          text: 'Required Chains',
          value: 'numChains',
          groupable: false,
          align: 'center'
        },
        {
          text: 'Chains Efficiency',
          value: 'efficiency',
          groupable: false,
          align: 'center'
        },
        {
          text: 'Production per Chain',
          value: 'productionPerChain',
          groupable: false,
          align: 'center'
        }
      ]
    }
  },
  mixins: [residentDemandCalculatorMixin],
  computed: {

    /**
     * Display an alert to info about duplicate items in the table.
     */
    showDuplicatesAlert: function () {
      return this.numInvestors > 0 || this.numObreros > 0 // Duplicate cigars (Inv: Mandatory, Obr: Luxury)
    },

    FILTER_VALUES: function () {
      return {
        // Filter values for demand type
        TYPE_ALL: 'all',
        TYPE_BASIC: 'basic',
        TYPE_LUXURY: 'luxury',

        // Filter values for consumable
        CONSUMABLE_ALL: 'all',
        CONSUMABLE: 'consumable',
        CONSUMABLE_NON: 'non-consumable'
      }
    },

    onlyBasicChkbx: function () {
      return this.radios1 === this.FILTER_VALUES.TYPE_BASIC
    },
    onlyLuxuryChkbx: function () {
      return this.radios1 === this.FILTER_VALUES.TYPE_LUXURY
    },

    onlyConsumableChkbx: function () {
      return this.radios2 === this.FILTER_VALUES.CONSUMABLE
    },
    onlyNonConsumableChkbx: function () {
      return this.radios2 === this.FILTER_VALUES.CONSUMABLE_NON
    },

    sort_demands_by: {
      get () {
        return this.$store.state.config.demands.is_sorted_by
      },
      set (value) {
        this.$store.commit('sort_demands_by', value)
      }
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
    totalDemandsDatatable: function () {
      const basicNeeds = this.totalDemands.basic
      const luxuryNeeds = this.totalDemands.luxury

      const items = []

      // Iterate over demands of basic / luxury
      for (const demands of [basicNeeds, luxuryNeeds]) { // eslint-disable-line guard-for-in
        const isBasic = demands === basicNeeds
        const isLuxury = demands === luxuryNeeds

        // Iterate over all demands of the current population
        for (const [dKey, demand] of Object.entries(demands)) {
          // Only add demand if it is present or > 0
          if (demand === true || demand > 0) {
            // TODO Create data here instead of in HTML table
            items.push({
              type: isBasic ? 'basic' : (isLuxury ? 'luxury' : 'N/A'),
              isBasic: demands === basicNeeds,
              isLuxury: demands === luxuryNeeds,
              name: dKey,
              consumption: demand,
              isConsumable: this.isConsumable(dKey, demand)
            })
          }
        }
      }

      return items
    }
  },
  watch: {},
  methods: {
    /**
     * The production per minute of one production chain.
     *
     * @param {string} product The name of the product.
     * @return {number} The amount of products per minute.
     */
    productionPerMinute: function (product) {
      const building = this.getBuildingByProduct(product) // TODO Does not differ between Old and New World!!!

      // The production time (in seconds) of one production chain to produce one item
      const productionTime = building.productionTime

      return 60 / productionTime
    },

    /**
     * This many production chains are required to fulfill the populations' consumption.
     *
     * @param {string} product The name of the product.
     * @param {number} consumption The population consumes this much products per minute.
     * @return {int} The amount of full production chains (!) required to fulfill consumption.
     */
    requiredChains (product, consumption) {
      // The production chain produces this much
      const production = this.productionPerMinute(product)

      // Calculate the required amount of production chains (exact)
      const numChainsExact = consumption / production

      // Only full chains are possible to build
      const numChainsRequired = Math.ceil(numChainsExact)

      return numChainsRequired
    },

    /**
     * The efficiency of this production chain to fulfill the demands.
     *
     * @param {string} product The name of the product.
     * @param {number} consumption The population consumes this much products per minute.
     * @return {number} The efficiency of this production.
     */
    chainEfficiency (product, consumption) {
      // The production chain produces this much
      const production = this.productionPerMinute(product)

      // Calculate the required amount of production chains (exact)
      const numChainsExact = consumption / production

      // Only full chains are possible to build
      const numChainsRequired = Math.ceil(numChainsExact)

      // Calculate the efficiency
      const efficiency = numChainsExact / numChainsRequired

      return efficiency
    },

    isBasicDemand: function (need) {
      const basicNeeds = this.totalDemands.basic
      return (need in basicNeeds) // Check if OBJECT contains key
    },

    isLuxuryDemand: function (need) {
      const luxuryNeeds = this.totalDemands.luxury
      return (need in luxuryNeeds) // Check if OBJECT contains key
    }
  }
}
</script>

<style scoped>
.inline-img {
  height: 66%;
  width: auto;
}
</style>
