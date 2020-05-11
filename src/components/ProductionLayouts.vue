<template>
  <v-container fluid fill-height pa-0>
    <v-layout wrap align-content-space-between fill-height>
      <v-flex xs12 id="frame">

        <!-- Load Production Layouts from Anno 1800 wiki -->
        <iframe
          id="frame"
          referrerpolicy="no-referrer"
          allowfullscreen="true"
          src="https://anno1800.fandom.com/wiki/Production_layouts"
        ></iframe>

      </v-flex>
      <!-- Production Layouts
      <bottom-nav-bar></bottom-nav-bar>
      -->
    </v-layout>
  </v-container>
</template>

<script>
import BottomNavBar from "./BottomNavBar";

export default {
  name: "ProductionLayout",
  components: {
    BottomNavBar
  }
};
</script>

<style scoped>
#frame {
  height: 100%;
  width: 100%;
}
</style>
