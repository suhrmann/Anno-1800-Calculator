<template>

  <v-flex xs12>
    selectedWorldID: {{selectedWorldID}},
    selectedSocialClassID: {{selectedSocialClassID}},
    selectedProductionChainID: {{selectedProductionChainID}},

    <v-card height="56px">
      <v-bottom-nav
        :active.sync="selectedProductionChainID"
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
          @click="resetProductionChain()"
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
      selectedProductionChainID: 1,

      /* Store data from JSON in component */
      // TODO Load these centrally and access this data e.g. via Vuex
      worlds: worlds,
      socialClasses: socialClasses,
      productionChains: productionChains.Production_Chain,
    };
  },
  computed: {
    /**
     * Filter the social classes for the ones available in the selected world.
     *
     * @return {array} The social classes of the selected world.
     */
    selectedSocialClasses: function() {
      const socialClasses = Object.values(this.socialClasses);
      return socialClasses.filter((socialClass) => socialClass.worldID === this.selectedWorldID);
    },

    /**
     * Filter the production chains for the ones available in the selected social class.
     *
     * @return {array} The production chains of the selected world and social class.
     */
    selectedProductionChains: function() {
      const productionChains = Object.values(this.productionChains);
      return productionChains.filter((chain) => chain.socialClassID === this.selectedSocialClassID);
    },
  },
  methods: {
    /**
     * After changing the world, display the first social class.
     */
    resetSocialClass: function() {
      this.selectedSocialClassID = this.selectedSocialClasses ? this.selectedSocialClasses[0].id : [];
      this.resetProductionChain();
    },
    /**
     * After changing the social class, display the first production chain.
     */
    resetProductionChain: function() {
      this.selectedProductionChainID = this.selectedProductionChains ? this.selectedProductionChains[0].id : [];
    },
  },
};
</script>

<style scoped>

</style>