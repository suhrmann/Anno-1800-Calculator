<template>
  <v-container pa-0>

    <!-- Header image -->
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          position="top center"

          class="white--text"
          :src="require('../assets/backgrounds/anno1800wallpaper@0,25x.jpg')"
          :lazy-src="require('../assets/backgrounds/anno1800wallpaper@0,1x.jpg')"
          gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
        >
          <v-theme-provider dark>
            <v-layout align-end justify-center row fill-height >
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >
                    WELCOME TO
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.mdAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                    Anno 1800 Calculator
                  </span>

                </v-col> <br>

                <!--
                <div class="text-xs-center">
                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </div>
                -->

                <div class="mb-3">&nbsp;</div>

              </v-row>
            </v-layout>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <!-- Description -->
    <v-content>
      <!-- TODO - then enable "scroll down" button in image /\ -->
      <h1>Anno 1800 Calculator!</h1>

      <div class="my-3">
        <h2>Description</h2>
        <p>
          With Anno 1800 Calculator you can calculate your population demands for goods and build optimal production chains.
        </p>
        <table>
          <tr>
            <td><v-icon>mdi-call-merge</v-icon></td>
            <td><b>Production Chains:</b></td>
            <td>Enter your population or their residents and calculate their resulting demand for goods.</td>
          </tr>
          <tr>
            <td><v-icon>mdi-trending-up</v-icon></td>
            <td><b>Resident Demand:</b></td>
            <td>Displays the optimal ratio of all production chains in the game in an appealing production chain tree.</td>
          </tr>
        </table>
      </div>


      <div class="my-3">
        <h2>NOTE</h2>
        <i>Building Queue</i> and <i>Production Layouts</i> are still 🙄 in "work in progress"!
      </div>

      <!-- Add some space to bottom -->
      <p style="height: 10vh"></p>
    </v-content>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      loadImg: (src) => {
        return require(src);
      },
    },
  };
</script>

<style>
</style>
