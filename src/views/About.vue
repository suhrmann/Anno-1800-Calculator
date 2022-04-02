<template>
  <v-container>
    <!-- Thank you -->
    <v-alert color="secondary" class="text-sm-center" dark>
      <h1>THANK YOU Anno 1800 Wiki!</h1>
      This App is based on the content, information and images provided by volunteers to the Anno 1800 Wiki.
      If you want to improve this App contribute to the
      <a
        href="https://anno1800.fandom.com/wiki/Anno_1800_Wiki"
        target="_blank"
      >Anno 1800 Wiki</a>!
    </v-alert>

    <!-- Buy Anno 1800 card -->
    <v-flex xs12 sm8 offset-sm2 lg6 offset-lg3>
      <v-card>
        <a href="https://www.ubisoft.com/en-gb/game/anno-1800/" target="_blank">
          <v-img
            :src="require('@/assets/backgrounds/anno1800wallpaper@0,1x.webp')"
            position="top center"
            aspect-ratio="3"
          ></v-img>
        </a>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Buy Anno 1800!</h3>
            <div>
              If you haven't already, buy Anno 1800 - it's awesome! <br>
              <span class="grey--text">These are no affiliate links</span>
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn
                color="primary"
                large
                block
                href="https://store.ubi.com/en/anno-1800/5b647010ef3aa548048c5958.html"
                target="_blank"
              >
                <span class="pr-5">
                  <v-icon>mdi-cart</v-icon>&nbsp;
                  Buy Anno 1800 &nbsp;
                </span>
                <img src="@/assets/logos/uplay.png" alt="UPLay Logo" height="30px"/>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn
                color="primary"
                large
                block
                href="https://www.epicgames.com/store/en-US/product/anno-1800/home"
                target="_blank"
              >
                <span class="pr-5">
                  <v-icon>mdi-cart</v-icon>&nbsp;
                  Buy Anno 1800 &nbsp;
                </span>
                <img src="@/assets/logos/epic_games.svg" alt="Epic Games Logo" height="30px" />
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-flex>

    <p>&nbsp;</p>

    <!-- Legal / Ubisoft stuff -->
    <v-alert type="info" color="secondary" outlined>
      <h2>Legal</h2>
      <p>
        All the assets from
        <strong>Anno 1800</strong> game are &copy; by Ubsioft.
        <br>These are especially but not exclusively the Anno 1800 logo,
        all the icons of population, goods, items and ships
        and the data of production chains and the consumptions values of population.
      </p>
      <p>
        This software is licensed under
        <a
          href="https://github.com/suhrmann/Anno-1800-Calculator/blob/master/README.md#legal"
          target="_blank"
        >MIT License</a>
      </p>
    </v-alert>

    <p>&nbsp;</p>

    <!-- About -->
    <h2>🤓 Authors</h2>
    <ul>
      <li>
        Simon Uhrmann
        <a href="https://github.com/suhrmann" target="_blank">@suhrmann</a>
      </li>
      <li>
        Tobias Fürst
        <a href="https://github.com/tfuerst">@tfuerst</a>
      </li>
    </ul>

    <p>&nbsp;</p>

    <h2>📜 Information</h2>
    <ul>
      <li>
        <strong>English Anno 1800 Wiki</strong>:
        <a
          href="http://de.anno1800.wikia.com/wiki/Anno_1800_Wiki"
          target="_blank"
        >Anno 1800 Wiki [en]</a>
      </li>
      <li>
        German Anno 1800 Wiki:
        <a
          href="http://anno1800.wikia.com/wiki/Anno_1800_Wiki"
          target="_blank"
        >Anno 1800 Wiki [de]</a>
      </li>
    </ul>

    <p>&nbsp;</p>

    <h2>🖼️ Images and Icons</h2>
    <ul>
      <li>
        ALL Icons (buildings, population, items, etc.) &copy; Ubisoft
        <br>(Crawled form
        <a
          href="http://anno1800.wikia.com/wiki/Anno_1800_Wiki"
          target="_blank"
        >Anno 1800 Wiki [en]</a> )
      </li>
      <li>
        Wallpapers:
        <a
          href="https://www.ubisoft.com/en-gb/game/anno-1800/"
          target="_blank"
        >Official Anno 1800 page</a> and
        <a
          href="https://store.ubi.com/de/anno-1800/5b647010ef3aa548048c5958.html"
          target="_blank"
        >Anno 1800 in the Ubisoft Store</a>
      </li>
    </ul>

    <p>&nbsp;</p>

    <h2>🎨️ Design</h2>
    <ul>
      <li>
        Color scheme (based on):
        <a
          href="https://www.ubisoft.com/en-gb/game/anno-1800/"
        >The official Anno 1800 page</a>
      </li>
    </ul>

    <p>&nbsp;</p>

    <h2>📣 Shout Out</h2>
    <ul>
      <li>
        <h3>Nico Höllerich <a href="https://github.com/NiHoel">@NiHoel <small>[GitHub.com]</small></a></h3>
        We are using his <code>params.js</code> that contains all the Anno 1800 information directly from the game. <br>
        Check out his awesome <a href="https://nihoel.github.io/Anno1800Calculator/">Anno 1800 Calculator</a> together with his
        <a href="https://github.com/NiHoel/Anno1800UXEnhancer">Anno1800UXEnhancer</a> if you want to calculate needs with production and
        population modifiers!
      </li>
      <li>
        <b>Banan1996.1996</b> an admin of Anno 1800 Wiki. Thank you for your help and the tons of work, spent  the
        awesome <a href="">Anno 1800 Wiki</a>!
      </li>
      <li>
        <b>Schwubbe</b> for his awesome <a href="https://schwubbe.de/">Anno 1800 Warenrechner [Anno 1800 Calculator]</a> <br>
        Its more focused on functions that just a nice facade - so if this calculator lacks some features (again) head over to Schwube's calculator
      </li>
    </ul>

    <p>&nbsp;</p>

    <pre>Version: {{ version }}</pre>

    <p> </p>

    <v-alert color="secondary" type="error" outlined>
      <h3>Bugs and improvements</h3>
      If you encounter any bugs or inconveniences or if you want to suggest improvements, create an
      <a
        href="https://github.com/suhrmann/Anno-1800-Calculator/issues"
        target="_blank"
      >Issue on Github</a>
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => {
    return {
      version: 'v' + process.env.VUE_APP_VERSION + '-' + process.env.NODE_ENV
    }
  },
  methods: {
    /**
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to "assets" AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage (image, folder) {
      return image ? require(`@/assets/${folder}/${image}`) : ''
    }
  }
}
</script>

<style scoped>
</style>
