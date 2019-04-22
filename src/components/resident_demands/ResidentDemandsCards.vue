<template>
  <v-container grid-list-md text-xs-center>

    <h2>Basic Needs:</h2>
    <v-layout justify-center row wrap>
      <v-flex
        lg2 md3 sm3
        v-for="(usage, product) in totalDemands.basic"
        v-bind:key="product"
      >
        <v-card
          v-if="usage"
          @click="isConsumable(product, usage) ? selectChain(product) : false"
          :hover="isConsumable(product, usage)"
        >
          <v-avatar>
            <img
              :src="getBuildingImage(product)"
              :alt="`{product} Image`"
            >
          </v-avatar>

          <v-card-text>
            <span class="text-md-center">
              <div v-if="!isConsumable(product, usage)"
                   class="pb-3"
              >
                <h2>{{product}}</h2>
              </div>
              <div v-else>
                <h3>{{ formatUsage(usage) }}</h3>
                <span>{{ product }}</span>
              </div>
            </span>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>

    <p>&nbsp;</p>

    <h2>Luxury Needs:</h2>
    <v-layout justify-center row wrap>
      <v-flex
        lg2 md3 sm3
        v-for="(usage, product) in totalDemands.luxury"
        v-bind:key="product"
      >
        <v-card
          v-if="usage"
          @click="isConsumable(product, usage) ? selectChain(product) : false"
          :hover="isConsumable(product, usage)"
        >
          <v-avatar>
            <img
              :src="getBuildingImage(product)"
              :alt="`{product} Image`"
            >
          </v-avatar>

          <v-card-text>
            <span class="text-md-center">
              <div v-if="!isConsumable(product, usage)"
                   class="pb-3"
              >
                <h2>{{product}}</h2>
              </div>
              <div v-else>
                <h3>{{ formatUsage(usage) }}</h3>
                <span>{{ product }}</span>
              </div>
            </span>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>


    <v-spacer></v-spacer>

  </v-container>
</template>

<script>
import residentDemandCalculatorMixin from './residentDemandCalculatorMixin.js';

export default {
  name: 'ResidentDemandsCards',
  data: function() {
    return {
    };
  },
  mixins: [residentDemandCalculatorMixin],
  computed: {
  },
  watch: {
  },
};
</script>

<style scoped>

</style>
