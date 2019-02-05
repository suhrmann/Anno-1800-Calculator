<template>

  <v-flex xs12>
    selectedWorldID: {{selectedWorldID}},
    selectedSocialClassID: {{selectedSocialClassID}},
    selectedProductionChainName: {{selectedProductionChainName}},

    <!-- Nav Bar: PRODUCTION CHAIN -->
    <v-card height="56px">
      <v-bottom-nav
        :active.sync="selectedProductionChainName"
        :value="true"
        absolute
        dark
      >
        <v-btn
          color="primary"
          flat
          v-for="(chain, i) in selectedProductionChains"
          :value="chain.id"
        >
          <span>{{ chain.name }}</span>
          <img :src="chain.img" :alt="chain.name + ' Image'">
        </v-btn>

      </v-bottom-nav>
    </v-card>

    <!-- Nav Bar: SOCIAL CLASS -->
    <v-card height="56px">
      <v-bottom-nav
        :active.sync="selectedSocialClassID"
        :value="true"
        absolute
        dark
      >
        <v-btn
          color="primary"
          flat
          v-for="(socialClass, i) in selectedSocialClasses"
          :value="socialClass.id"
        >
          <span>{{ socialClass.name }}</span>
          <img :src="socialClass.img" :alt="socialClass.name + ' Image'">
        </v-btn>

      </v-bottom-nav>
    </v-card>

    <!-- Nav Bar: WORLD -->
    <v-card height="55px">
      <v-bottom-nav
        :active.sync="selectedWorldID"
        :value="true"
        absolute
        dark
      >
        <v-btn
          color="primary"
          flat
          v-for="(world, i) in worlds"
          :value="world.id"
          @click="resetSocialClass()"
        >
          <span>{{ world.name }}</span>
          <img :src="world.img" :alt="world.name + ' Image'">
        </v-btn>

      </v-bottom-nav>
    </v-card>

  </v-flex>
</template>

<script>
import worlds from '../data/worlds.json';
import socialClasses from '../data/socialClasses.json';
import productionChains from '../data/productionChain';

export default {
  name: 'BottomNavBar',
  data() {
    return {

      // Init selection
      selectedWorldID: 1,
      selectedSocialClassID: 1,
      selectedProductionChainName: 1,

      /**
       * The socialClasses, grouped by world (old world and new world)
       */
      worlds: worlds,
      socialClasses: socialClasses,
      productionChains: productionChains.Production_Chain,
    };
  },
  computed: {
    selectedSocialClasses: function() {
      const socialClasses = Object.values(this.socialClasses);
      return socialClasses.filter((socialClass) => socialClass.worldID === this.selectedWorldID);
    },

    selectedProductionChains: function() {
      const productionChains = Object.values(this.productionChains);
      return productionChains.filter((chain) => chain.socialClassID === this.selectedSocialClassID);
    },
  },
  methods: {
    resetSocialClass: function() {
      this.selectedSocialClassID = 1;
    },
  },
};
</script>

<style scoped>

</style>
