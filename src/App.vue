<template>
  <v-app id="anno1800calc">
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <v-list-item-group
          color="primary"
        >
          <template v-for="(item, i) in items">
            <v-subheader v-if="item.heading" :key="i">{{ item.heading }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
            <v-list-item v-else
                         :to="{path: item.route}"
                         :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="grey--text text--darken-3" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" app scroll-off-screen clipped-left>
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        {{ title }} ||&nbsp;<span class="font-weight-light subheading">{{subtitle}}</span>
      </span>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Producers from './data/producers.json'
export default {
  data: () => ({
    drawer: null,
    title: 'Anno 1800 Calculator',
    subtitle: 'a production chain cheatsheet',
    items: [
      { icon: 'mdi-home', text: 'Home', route: '/home' },
      { divider: true },
      { heading: 'Production' },
      { icon: 'mdi-call-merge', text: 'Production Chains', route: '/chains' },
      { icon: 'mdi-trending-up', text: 'Resident Demand', route: '/demands' },
      { divider: true },
      { heading: 'Information' },
      {
        icon: 'mdi-format-list-bulleted',
        text: 'Building Queue (WIP)',
        route: '/queue'
      },
      {
        icon: 'mdi-border-inside',
        text: 'Production Layouts',
        route: '/layouts'
      },
      { divider: true },
      { icon: 'mdi-information', text: 'About', route: '/about' }
    ]
  }),
  props: {
    source: String
  },

  mounted () {
    this.$nextTick(function () {
      // const productionProducts = this.buildProductObject()
      // const consumptionProducts = this.buildProductObject()
      // this.$store.commit( "buildProductObjects",productionProducts,consumptionProducts);
    })
  },

  methods: {
    buildProductObject () {
      const producerObject = {}
      const producerFile = JSON.parse(JSON.stringify(Producers.Producers))
      for (let i = 0; i < producerFile.length; i++) {
        const producerKey = producerFile[i]

        const productName = producerFile[producerKey].product
        producerObject[productName] = 0
      }
      // console.log(producerObject);
      return this.producerObject
    }
  }
}
</script>
