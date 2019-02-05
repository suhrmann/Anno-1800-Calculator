<template>
  <v-card height="400px" flat>
    <span>{{ this.worlds.oldWorld.name }}</span>

    <v-bottom-nav
      :active.sync="selectedWorld"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
      >
        <span>{{ worlds.oldWorld.name }}</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>

  </v-card>
</template>

<script>
export default {
  name: 'BottomNavBar',
  data() {
    return {
      // Init selection
      selectedWorld: null,
      selectedSocialClass: null,

      // TODO Extract this into a JSON
      worlds: {
        oldWorld: {
          name: 'Old World',
          img: 'old-world.png',

          /**
           * The social classes of the OLD word
           */
          socialClasses: {
            farmers: {
              name: 'Farmers',
              img: 'farmers.png',
            },
            workers: {
              name: 'Workers',
              img: 'workers.png',
            },
            artisans: {
              name: 'Artisans',
              img: 'artisans.png',
            },
            engineers: {
              name: 'Engineers',
              img: 'engineers.png',
            },
            investors: {
              name: 'Investors',
              img: 'investors.png',
            },
          },
        },

        newWorld: {
          name: 'New World',
          img: 'new-world',

          /**
           * The social classes of the NEW word
           */
          socialClasses: {
            jornaleros: {
              name: 'Jornaleros',
              img: 'jornaleros.png',
            },
            obreros: {
              name: 'Obreros',
              img: 'obreros.png',
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>

</style>
