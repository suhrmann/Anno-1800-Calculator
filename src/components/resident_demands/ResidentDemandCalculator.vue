<template>
  <v-container grid-list-md text-xs-center>

    <h2>Basic Needs:</h2>
    <v-layout justify-center row wrap>
      <v-flex
        lg2 md3 sm3
        v-for="(usage, product) in totalDemands.basic"
      >
        <v-card
          v-if="usage > 0"
        >
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
        v-for="(usage, product) in totalDemands.luxury"
      >
        <v-card
          v-if="usage > 0"
        >
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
            v-model="numFarmers"
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
            v-model="numWorkers"
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
            v-model="numArtisans"
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
            v-model="numEngineers"
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
            v-model="numInvestors"
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
            v-model="numJornaleros"
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
            v-model="numObreros"
            label="Obreros"
            type="number"
            box
          ></v-text-field>
        </v-card>
      </v-flex>
    </v-layout>

    <p>
      numFarmers: {{ numFarmers }} - {{ farmersDemands }}; <br>
      numWorkers: {{ numWorkers }} - {{ workersDemands }}; <br>
      numArtisans: {{ numArtisans }} - {{ artisansDemands }}; <br>
      numEngineers: {{ numEngineers }} - {{ engineersDemands }}; <br>
      numInvestors: {{ numInvestors }} - {{ investorsDemands }}; <br>
      numJornaleros: {{ numJornaleros }} - {{ jornalerosDemands }}; <br>
      numObreros: {{ numObreros }} - {{ obrerosDemands }}; <br>
    </p>

    <p>
      TOTAL: {{ totalDemands }}; <br>
    </p>

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
      consumption: Consumption,

      numFarmers: 0,
      numWorkers: 0,
      numArtisans: 0,
      numEngineers: 0,
      numInvestors: 0,
      numJornaleros: 0,
      numObreros: 0,
    };
  },
  computed: {
    farmersDemands: function() {
      const farmersDemands = this.consumption.Consumption.farmers;
      return {
        basic: this.calculateDemands(farmersDemands.basic, this.numFarmers),
        luxury: this.calculateDemands(farmersDemands.luxury, this.numFarmers),
      };
    },
    workersDemands: function() {
      const workersDemands = this.consumption.Consumption.workers;
      return {
        basic: this.calculateDemands(workersDemands.basic, this.numWorkers),
        luxury: this.calculateDemands(workersDemands.luxury, this.numWorkers),
      };
    },
    artisansDemands: function() {
      const artisansDemands = this.consumption.Consumption.artisans;
      return {
        basic: this.calculateDemands(artisansDemands.basic, this.numArtisans),
        luxury: this.calculateDemands(artisansDemands.luxury, this.numArtisans),
      };
    },
    engineersDemands: function() {
      const engineersDemands = this.consumption.Consumption.engineers;
      return {
        basic: this.calculateDemands(engineersDemands.basic, this.numEngineers),
        luxury: this.calculateDemands(engineersDemands.luxury, this.numEngineers),
      };
    },
    investorsDemands: function() {
      const investorsDemands = this.consumption.Consumption.investors;
      return {
        basic: this.calculateDemands(investorsDemands.basic, this.numInvestors),
        luxury: this.calculateDemands(investorsDemands.luxury, this.numInvestors),
      };
    },
    jornalerosDemands: function() {
      const jornalerosDemands = this.consumption.Consumption.jornaleros;
      return {
        basic: this.calculateDemands(jornalerosDemands.basic, this.numJornaleros),
        luxury: this.calculateDemands(jornalerosDemands.luxury, this.numJornaleros),
      };
    },
    obrerosDemands: function() {
      const obrerosDemands = this.consumption.Consumption.obreros;
      return {
        basic: this.calculateDemands(obrerosDemands.basic, this.numObreros),
        luxury: this.calculateDemands(obrerosDemands.luxury, this.numObreros),
      };
    },
    totalDemands: function() {
      // Merge all demands
      const demands = {
        farmers: this.farmersDemands,
        workers: this.workersDemands,
        artisans: this.artisansDemands,
        engineers: this.engineersDemands,
        investors: this.investorsDemands,
        jornaleros: this.jornalerosDemands,
        obreros: this.obrerosDemands,
      };

      // TODO Merge (reduce and sum up) the demands together
      const basic = {};
      // Iterate over all populations
      for (const [key, population] of Object.entries(demands)) {

        // Iterate over all demands of the current population
        for (const [key, demand] of Object.entries(population.basic)) {

          // Init key if it does not exist is total demands
          if (!basic[key]) {
            basic[key] = 0;
          }

          // Sum up new demands
          basic[key] += demand;
        }
      }
      return {
        basic: basic,
      };

      const luxury = {};
      for (const [key, demand] of Object.entries(demands)) {
        basic[key] = demand;
      }

      return { basic, luxury };
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
    calculateDemands: function(populationDemands, numPopulation) {
      const demands = {};
      for (const [key, demand] of Object.entries(populationDemands)) {
        if (demand) {
          demands[key] = demand * numPopulation;
        } else {
          demands[key] = numPopulation > 0 ? 1 : null;
        }
      }
      return demands;
    },
  },
};
</script>

<style scoped>

</style>
