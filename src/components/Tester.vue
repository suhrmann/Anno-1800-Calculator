<template>
  <div></div>
</template>

<script>
import productionChain from "../data/productionChain.json";
import nonProducers from "../data/non-producers.json";
import producers from "../data/producers.json";
export default {
  data() {
    return {
      prodChain: productionChain,
      nonproducers: nonProducers,
      producers: producers
    };
  },

  mounted() {
    console.log(this.prodChain);
    console.log(this.nonproducers);
    console.log(this.producers);
  }
};
</script>

<style>
</style>
