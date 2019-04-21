<template>
  <v-container grid-list-md text-xs-center>

    <table width="100%" class="bordered">
      <tr>
        <th>Type</th>
        <th colspan="2">Need</th>
        <th>Consumption</th>
        <th>Production per Chain</th>
        <th>Required Chains</th>
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
              {{product}}
            </a>
            <span v-else>{{product}}</span>
          </td>
          <td>
            <span v-if="isConsumable(product, usage)">{{ formatUsage(usage) }}</span>
            <span v-else>&mdash;</span>
          </td>
          <!-- Production per Chain -->
          <td>
            <span v-if="isConsumable(product, usage)">{{ productionPerMinute(product) }}</span>
            <span v-else>&mdash;</span>
          </td>
          <!-- Required Chains -->
          <td>
            TODO
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
    productionPerMinute: function(product) {
      const building = this.getBuildingByProduct(product); // TODO Does not differ between Old and New World!!!

      // The production time (in seconds) of one production chain to produce one item
      const productionTime = building.productionTime;

      return 60 / productionTime;
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
