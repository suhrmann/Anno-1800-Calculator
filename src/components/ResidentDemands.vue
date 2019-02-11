<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Resident Demands</h1>
      </v-flex>
      <!-- Resident Demands -->
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from './BottomNavBar';

export default {
  name: 'ResidentDemands',
  components: {
    BottomNavBar,
  },
};
</script>

<style scoped>

</style>
