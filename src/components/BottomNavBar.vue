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
