<template>

  <v-flex xs12>

    <!-- Nav Bar: TIER -->
    <v-card height="56px">
      <v-bottom-nav
        :active.sync="selectedSocialClassName"
        :value="true"
        absolute
        dark
      >
        <v-btn
          color="primary"
          flat
          v-for="(tier, i) in selectedWorld.socialClasses"
          :value="tier.name"
        >
          <span>{{ tier.name }}</span>
          <img :src="tier.img" :alt="tier.name + ' Image'">
        </v-btn>

      </v-bottom-nav>
    </v-card>

    <!-- Nav Bar: WORLD -->
    <v-card height="55px">
      <v-bottom-nav
        :active.sync="selectedWorldName"
        :value="true"
        absolute
        dark
      >
        <v-btn
          color="primary"
          flat
          v-for="(world, i) in worlds"
          :value="world.name"
        >
          <span>{{ world.name }}</span>
          <img :src="world.img" :alt="world.name + ' Image'">
        </v-btn>

      </v-bottom-nav>
    </v-card>

  </v-flex>
</template>

<script>
import Tiers from '../data/tiers.json';

export default {
  name: 'BottomNavBar',
  data() {
    return {

      // Init selection
      selectedWorldName: 'Old World',
      selectedSocialClassName: '',

      /**
       * The tiers, grouped by world (old world and new world)
       */
      worlds: Tiers,
    };
  },
  computed: {
    selectedWorld: function() {
      const worlds = Object.values(this.worlds);
      return worlds.find((world) => world.name === this.selectedWorldName);
    },
  },
};
</script>

<style scoped>

</style>
