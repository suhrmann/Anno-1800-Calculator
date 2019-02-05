<template>

  <v-flex xs12>

    <v-bottom-nav
      :active.sync="selectedWorld"
      :value="true"
      absolute
      dark
    >
      <v-btn
        color="primary"
        flat
        v-for="(world, i) in worlds"
        :value="world"
      >
        <span>{{ world.name }}</span>
        <v-icon>history</v-icon>
      </v-btn>

    </v-bottom-nav>

  </v-flex>
</template>

<script>
import Tiers from '../data/tiers.json';

export default {
  name: 'BottomNavBar',
  data() {
    return {
      // Init selection
      selectedWorld: null,
      selectedSocialClass: null,

      /**
       * The tiers, grouped by world (old world and new world)
       */
      worlds: Tiers,
    };
  },
};
</script>

<style scoped>

</style>
