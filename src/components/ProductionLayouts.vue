<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-space-between>
      <v-flex xs12>
        <h1>Production Layouts</h1>
      </v-flex>
      <!-- Production Layouts -->
      <bottom-nav-bar></bottom-nav-bar>
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from './BottomNavBar';

export default {
  name: 'ProductionLayout',
  components: {
    BottomNavBar,
  },
};
</script>

<style scoped>

</style>
