<template>
  <v-flex xs12>
    <!--
      The following element is needed to trigger the initial rendering of the computed property selectedProductionChain
      The element does render but is not shown
    -->
    <p v-show="false">{{selectedProductionChain}}</p>

    <v-card height="70px" tile>
      <v-bottom-nav
        :active.sync="selectedProductionChainID"
        :value="true"
        absolute
        dark
        height="70"
      >
        <v-btn
          color="primary"
          flat
          v-for="(chain, i) in selectedProductionChains"
          :key="i"
          :value="chain.id"
        >
          <span>{{ chain.name }}</span>
          <v-avatar>
            <img :src="getImage(chain.img, 'buildings')" :alt="chain.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-nav>
    </v-card>

    <!-- Nav Bar: SOCIAL CLASS -->
    <v-card height="70px" tile>
      <v-bottom-nav :active.sync="selectedSocialClassID" :value="true" absolute dark height="70">
        <v-btn
          color="primary"
          flat
          v-for="(socialClass, i) in selectedSocialClasses"
          :key="i"
          :value="socialClass.id"
          @click="changeSocialClass(socialClass.id)"
        >
          <span>{{ socialClass.name }}</span>
          <v-avatar>
            <img :src="getImage(socialClass.img, 'population')" :alt="socialClass.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-nav>
    </v-card>

    <!-- Nav Bar: WORLD -->
    <v-card height="70px" tile>
      <v-bottom-nav :active.sync="selectedWorldID" :value="true" absolute dark height="70">
        <v-btn
          color="primary"
          flat
          v-for="(world, i) in worlds"
          :key="i"
          :value="world.id"
          @click="changeWorld(world.id)"
        >
          <span>{{ world.name }}</span>
          <v-avatar>
            <img :src="getImage(world.img, 'worlds')" :alt="world.name + ' Image'">
          </v-avatar>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-flex>
</template>

<script>
import worlds from '../data/worlds.json';
import socialClasses from '../data/social-classes.json';
import ProductionChains from '../data/production-chain';
import { helperFunctionMixin } from './helperFunctionMixin.js';
import { EventBus } from '../EventBus.js';

export default {
  name: 'BottomNavBar',
  mixins: [helperFunctionMixin],
  data() {
    return {
      // Init selection
      // selectedWorldID: 1,
      // selectedSocialClassID: 1,
      // selectedProductionChainID: 1,

      /* Store data from JSON in component */
      // TODO Load these centrally and access this data e.g. via Vuex
      worlds: worlds,
      socialClasses: socialClasses,
      productionChainsData: ProductionChains.Production_Chain,
    };
  },

  computed: {
    selectedWorldID: {
      get: function() {
        return this.$store.state.selectedWorldID;
      },
      set: function(selectedWorldID) {
        this.$store.commit('changeWorldID', selectedWorldID);
      },
    },

    selectedSocialClassID: {
      get: function() {
        return this.$store.state.selectedSocialClassID;
      },
      set: function(selectedSocialClassID) {
        this.$store.commit('changeSocialClassID', selectedSocialClassID);
      },
    },

    selectedProductionChainID: {
      get: function() {
        return this.$store.state.selectedProductionChainID;
      },
      set: function(selectedProductionChainID) {
        this.$store.commit(
            'changeProductionChainID',
            selectedProductionChainID
        );
      },
    },

    /**
     * Search production chain by ChainID.
     *
     * @return {Object} The selected Production Chain
     */
    selectedProductionChain() {
      const selectedSocialClassChains = this.selectedProductionChains;
      const chainID = this.selectedProductionChainID;
      let productionChain = {};

      Object.keys(selectedSocialClassChains).forEach((chain) => {
        if (selectedSocialClassChains[chain].id === chainID) {
          productionChain = selectedSocialClassChains[chain];
        }
      });
      this.setProductionChain(productionChain);
      EventBus.$emit('bottomNavBarChanged');
      return productionChain;
    },

    /**
     * Returns a deep copy of all Production Chains
     * @return {Object} A JS Object with all production chain objects init
     */
    fetchAllProductionChains() {
      return JSON.parse(JSON.stringify(this.productionChainsData));
    },

    /**
     * Filter the social classes for the ones available in the selected world.
     *
     * @return {array} The social classes of the selected world.
     */
    selectedSocialClasses: function() {
      const socialClasses = Object.values(this.socialClasses);
      return socialClasses.filter(
          (socialClass) => socialClass.worldID === this.selectedWorldID
      );
    },

    /**
     * Filter the production chains for the ones available in the selected social class.
     *
     * @return {array} The production chains of the selected world and social class.
     */
    selectedProductionChains: function() {
      const productionChains = Object.values(this.productionChainsData);
      return productionChains.filter(
          (chain) => chain.socialClassID === this.selectedSocialClassID
      );
    },
  },
  methods: {
    /**
     * After changing the world, display the first social class.
     *
     * @param {int} worldID The id of the world that caused this reset.
     */
    changeWorld: function(worldID) {
      const selectedWorld = this.getWorldByID(worldID);
      this.selectedWorldID = selectedWorld.id;

      const selectedSocialClass = this.getSocialClassByID(
          selectedWorld.socialClassIDs[0]
      );
      this.selectedSocialClassID = selectedSocialClass.id;

      this.changeSocialClass(selectedSocialClass.id);
      EventBus.$emit('bottomNavBarChanged');
    },

    /**
     * After changing the social class, display the first production chain.
     *
     * @param {int} socialClassID The id of the social class that caused this reset.
     */
    changeSocialClass: function(socialClassID) {
      const socialClass = this.getSocialClassByID(socialClassID);
      this.selectedProductionChainID = socialClass.firstProductionChain;
    },

    /**
     * Changes the VueX State so every Component can access the current productionChain
     * This updates when this.selectedProductionChainID updates
     *
     * @param {Object} productionChain
     */
    setProductionChain(productionChain) {
      this.$store.commit('changeProductionChain', productionChain);
    },

    /**
     * Searches all worlds by their world id
     *
     * @param {int} id
     * @return {Object} The selected World Object
     */
    getWorldByID(id) {
      const worlds = Object.values(this.worlds);
      const selectedWorld = worlds.filter((world) => world.id === id)[0];
      return selectedWorld;
    },

    /**
     * Searches all social classes by their social class id
     *
     * @param {int} id
     * @return {Object} The selected Social Class Object
     */
    getSocialClassByID(id) {
      const socialClasses = Object.values(this.socialClasses);
      const selectedSocialClass = socialClasses.filter(
          (socialClass) => socialClass.id === id
      )[0];
      return selectedSocialClass;
    },
  },
};
</script>

<style scoped>
</style>
