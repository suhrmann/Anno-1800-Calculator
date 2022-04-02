<template>
  <v-container pa-0>
    <!-- Header image -->
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          position="top center"
          class="white--text"
          :src="require('@/assets/backgrounds/anno1800wallpaper@0,25x.webp')"
          :lazy-src="require('@/assets/backgrounds/anno1800wallpaper@0,1x.webp')"
          gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
        >
          <v-theme-provider dark>
            <v-layout align-end justify-center row fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >WELCOME TO</span>

                  <br />

                  <span
                    :class="[$vuetify.breakpoint.mdAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >Anno 1800 Calculator</span>
                </v-col>
                <br />

                <div class="text-center">
                  <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </div>

                <div class="mb-4">&nbsp;</div>
              </v-row>
            </v-layout>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <!-- Description -->
    <v-main>
      <!-- TODO - then enable "scroll down" button in image /\ -->
      <h1 id="about-me">Anno 1800 Calculator!</h1>

      <div class="my-4">
        <h2>Description</h2>
        <p>With Anno 1800 Calculator you can calculate your population needs for goods and build optimal production chains.</p>
        <table>
          <tr>
            <td>
              <v-icon>mdi-call-merge</v-icon>
            </td>
            <td>
              <b>
                <router-link to="/chains">Production Chains:</router-link>
              </b>
            </td>
            <td>Enter your population or their residents and calculate their resulting need for goods.</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-trending-up</v-icon>
            </td>
            <td>
              <b>
                <router-link to="/needs">Resident Need:</router-link>
              </b>
            </td>
            <td>Displays the optimal ratio of all production chains in the game in an appealing production chain tree.</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-border-inside</v-icon>
            </td>
            <td>
              <b>
                <router-link to="/layouts">Production Layouts:</router-link>
              </b>
            </td>
            <td>Look up the most efficient layouts for each Production Chain on the Anno1800 Wiki.</td>
          </tr>
        </table>
      </div>

      <div class="my-4">
        <h2>NOTE</h2>
        <i>Building Queue</i> ist still 🙄 in "work in progress"!
      </div>

      <!-- Add some space to bottom -->
      <p style="height: 10vh"></p>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    loadImg: src => {
      return require(src)
    }
  }
}
</script>

<style>
</style>
