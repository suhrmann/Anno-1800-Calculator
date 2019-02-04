<template>
  <v-app id="anno1800calc">
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <!-- <v-btn small flat>edit</v-btn> -->
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
          <v-list-tile v-else :key="i" :to="{path: item.route}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">
        {{ title }} ||&nbsp;
        <span class="font-weight-light subheading">{{subtitle}}</span>
      </span>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout row wrap justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    title: "Anno 1800 Calculator",
    subtitle: "a production chain cheatsheet",
    items: [
      { icon: "lightbulb_outline", text: "Colors", route: "/colors" },
      { divider: true },
      { heading: "Production" },
      {
        icon: "lightbulb_outline",
        text: "Production Chains",
        route: "/prodchains"
      },
      { icon: "touch_app", text: "Production Layouts", route: "/prodlayouts" },
      { divider: true },
      { heading: "sonstiger Schaas" },
      { icon: "add", text: "hepp" },
      { divider: true },
      { icon: "archive", text: "About" },
      { icon: "delete", text: "Close" }
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>