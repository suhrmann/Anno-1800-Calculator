<template>
  <v-container>
    <h3>Production Chain {{ productionChain ? productionChain.name : '???' }}</h3>
    <p>Upkeep Costs: {{ totalUpkeepCosts }}</p>
    <p>Farmers:      {{ totalNumFarmers }}</p>
    <p>Workers:      {{ totalNumWorkers }}</p>
    <p>Artisans:     {{ totalNumArtisans }}</p>
    <p>Engineers:    {{ totalNumEngineers }}</p>
    <p>Investors:    {{ totalNumInvestors }}</p>
    <p>Jornaleros:   {{ totalNumJornaleros }}</p>
    <p>Obreros:      {{ totalNumObreros }}</p>
  </v-container>
</template>

<script>
// import ProductionChain from './ProductionChain';

export default {
  name: 'ProductionChain',
  computed: {
    /**
     * Calculate the upkeep of this production chain.
     *
     * @return {int} The number of workers.
     */
    totalUpkeepCosts: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of farmers this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumFarmers: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of workers this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumWorkers: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of artisans this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumArtisans: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of engineers this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumEngineers: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of investors this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumInvestors: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of jornaleros this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumJornaleros: function() {
      // TODO Implement me!
      return -1;
    },

    /**
     * Calculate the amount of obreros this production chain requires to operate.
     *
     * @return {int} The number of workers.
     */
    totalNumObreros: function() {
      // TODO Implement me!
      return -1;
    },
  },
  data: function() {
    return {
      /**
       * The name of this production chain.
       * @var {string}
       */
      productName: null,
      /**
       * The trunk of this production chain; aka the final / last production.
       * @var {Producer}
       */
      trunk: null,
    };
  },
};
</script>

<style scoped>

</style>
