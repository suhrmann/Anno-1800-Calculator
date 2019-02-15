<template>
  <v-container grid-list-md text-xs-center>

    <h2>Basic Needs:</h2>
    <v-layout justify-center row wrap>
      <v-flex
        lg2 md3 sm3
        v-for="(usage, product) in consumption.basic"
      >
        <v-card>
          <v-avatar>
            <img
              :src="getBuildingImage(product)"
              :alt="`{product} Image`"
            >
          </v-avatar>

          <v-card-text>
            <span class="text-md-center"><b>{{ product }}:</b> {{ usage }}</span>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>

    <p>&nbsp;</p>

    <h2>Luxury Needs:</h2>
    <v-layout justify-center row wrap>
      <v-flex
        lg2 md3 sm3
        v-for="(usage, product) in consumption.luxury"
      >
        <v-card>
          <v-avatar>
            <img
              :src="getBuildingImage(product)"
              :alt="`{product} Image`"
            >
          </v-avatar>

          <v-card-text>
            <span class="text-md-center"><b>{{ product }}:</b> {{ usage }}</span>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>


    <p>&nbsp;</p>


    <v-layout justify-center row wrap>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/farmers.webp"
              alt="Farmers"
            >
          </v-avatar>
          <v-text-field
            :value="population.numFarmers"
            label="Farmers"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/workers.webp"
              alt="Workers"
            >
          </v-avatar>
          <v-text-field
            :value="population.numWorkers"
            label="Workers"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/artisans.webp"
              alt="Artisans"
            >
          </v-avatar>
          <v-text-field
            :value="population.numArtisans"
            label="Artisans"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/engineers.webp"
              alt="Engineers"
            >
          </v-avatar>
          <v-text-field
            :value="population.numEngineers"
            label="Engineers"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/investors.webp"
              alt="Investors"
            >
          </v-avatar>
          <v-text-field
            :value="population.numInvestors"
            label="Investors"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/jornaleros.webp"
              alt="Jornaleros"
            >
          </v-avatar>
          <v-text-field
            :value="population.numJornaleros"
            label="Jornaleros"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex lg1 md2 sm2>
        <v-card height="105">
          <v-avatar>
            <img
              src="../../assets/population/obreros.webp"
              alt="Obreros"
            >
          </v-avatar>
          <v-text-field
            :value="population.numObreros"
            label="Obreros"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Consumption from '../../data/consumption.json';
import Producers from '../../data/producers.json';
import NonProducers from '../../data/non-producers.json';

export default {
  name: 'ResidentDemandCalculator',
  data: function() {
    return {
      producers: Producers.Producers,
      nonProducers: NonProducers.buildings,

      population: {
        numFarmers: 0,
        numWorkers: 0,
        numArtisans: 0,
        numEngineers: 0,
        numInvestors: 0,
        numJornaleros: 0,
        numObreros: 0,
      },
      consumption: {
        basic: {
          'Marketplace': '',
          'Fish': 0.0,
          'Work Clothes': 0.0,
          'Sausages': 0.0,
          'Bread': 0.0,
          'Soap': 0.0,
          'School': '',
          'Canned Food': 0.0,
          'Sewing Machines': 0.0,
          'Fur Coats': 0.0,
          'University': '',
          'Glasses': 0.0,
          'Electricity': '',
          'Coffee': 0.0,
          'Light Bulbs': 0.0,
          'Champagne': 0.0,
          'Cigars': 0.0,
          'Chocolate': 0.0,
          'Steam Carriages': 0.0,
          'Fried Plantains': 0.0,
          'Ponchos': 0.0,
          'Tortillas': 0.0,
          'Bowler Hats': 0.0,
        },
        luxury: {
          'Schnapps': 0.0,
          'Pub': '',
          'Church': '',
          'Beer': 0.0,
          'Variety Theatre': '',
          'Rum': 0.0,
          'High Wheelers': 0.0,
          'Pocket Watches': 0.0,
          'Bank': '',
          'Club House': '',
          'Jewlery': 0.0,
          'Gramophones': 0.0,
          'Chapel': '',
          'Boxing Arena': '',
          'Cigars': 0.0,
        },
      },
    };
  },
  computed: {
    /**
       * Calculate the populations' consumption.
       */
    calculateConsumption: function() {
      // TODO Implement calculation
    },
  },
  methods: {
    /**
     * Find the image of a building by its produced product.
     *
     * @param {string} product The product name - see producers.json >> Producers.<Producer>.product
     * @return {string} The URL to the image.
     */
    getBuildingImage(product) {
      const allProducers = Object.values(this.producers);
      const producer = allProducers.filter((producer) => producer.product === product)[0];
      if (!producer) {
        const allNonProducers = Object.values(this.nonProducers);
        const nonProducer = allNonProducers.filter((nonProducer) => nonProducer.name === product)[0];
        console.log(nonProducer + ' === ' + product);
        return nonProducer ? this.getImage(nonProducer.img, 'buildings') : (product + 'Image');
      }
      return this.getImage(producer.img, 'buildings');
    },
    /**
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to "assets" AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage(image, folder) {
      return image ? require(`../../assets/${folder}/${image}`) : '';
    },
  },
};
</script>

<style scoped>

</style>
