<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Production Chains</h1>
      </v-flex>
      <v-flex xs12>
        <BottomNavBar></BottomNavBar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from "./BottomNavBar";

export default {
  name: "ProductionChains",
  components: {
    BottomNavBar
  }
};
</script>

<style scoped>
</style>
