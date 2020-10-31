<template>

  <v-container fluid>
    <v-row>
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <v-img
                :src="require('@/assets/population/farmers.webp')"
                alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numFarmerResidences"
            class="centered-input"
            label="Farmer Residences"
            type="number"
            min="0"
            box
            :messages="'Farmers: ' + numFarmers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/workers.webp')"
              alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numFarmerResidences"
            class="centered-input"
            label="Worker Residences"
            type="number"
            min="0"
            box
            :messages="'Workers: ' + numWorkers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/artisans.webp')"
              alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numArtisanResidences"
            class="centered-input"
            label="Artisan Residences"
            type="number"
            min="0"
            box
            :messages="'Artisans: ' + numArtisans"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        pa-1
        sm4 xs6
        :class="{'offset-sm2': $vuetify.breakpoint.smAndDown}"
      >
        <v-card height="105" class="text-center">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/engineers.webp')"
              alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numEngineerResidences"
            class="centered-input"
            label="Engineer Residences"
            type="number"
            min="0"
            box
            :messages="'Engineers: ' + numEngineers"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/investors.webp')"
              alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numInvestorResidences"
            class="centered-input"
            label="Investor Residences"
            type="number"
            min="0"
            box
            :messages="'Investors: ' + numInvestors"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col
        pa-1
        sm4 xs6
        :class="{'offset-sm2': $vuetify.breakpoint.smAndDown}"
      >
        <v-card height="105" class="text-center">
          <v-avatar>
            <v-img
              :src="require('@/assets/population/obreros.webp')"
              alt="Farmers"
            />
          </v-avatar>
          <v-avatar>
            <v-img
              :src="require('@/assets/buildings/farmers/residence.webp')"
              alt="Residence"
            />
          </v-avatar>
          <v-text-field
            v-model="numObreroResidences"
            class="centered-input"
            label="Obrero Residences"
            type="number"
            min="0"
            box
            :messages="'Obreros: ' + numObreros"
          ></v-text-field>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? 6 : false" :sm="$vuetify.breakpoint.smAndDown ? 4 : false">
        <v-card height="105" class="text-center">
          <v-avatar>
            <img
              src="@/assets/population/obreros.webp"
              alt="Obreros"
            >
          </v-avatar>
          <v-text-field
            v-model="numObreros"
            class="centered-input"
            label="Obreros"
            type="number"
            min="0"
            box
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import ResidenceData from '../../data/residence.json'

export default {
  name: 'BottomPopulationInput',
  data: function () {
    return {
      farmersPerResidence: ResidenceData.farmers.residence,
      workersPerResidence: ResidenceData.workers.residence,
      artisansPerResidence: ResidenceData.artisans.residence,
      engineersPerResidence: ResidenceData.engineers.residence,
      investorsPerResidence: ResidenceData.investors.residence,

      jornalerosPerResidence: ResidenceData.jornaleros.residence,
      obrerosPerResidence: ResidenceData.obreros.residence
    }
  },
  computed: {
    numFarmers: {
      get: function () { return this.$store.state.population.numFarmers },
      set: function (numFarmers) { this.$store.commit('setNumFarmers', numFarmers) }
    },
    numWorkers: {
      get: function () { return this.$store.state.population.numWorkers },
      set: function (numWorkers) { this.$store.commit('setNumWorkers', numWorkers) }
    },
    numArtisans: {
      get: function () { return this.$store.state.population.numArtisans },
      set: function (numArtisans) { this.$store.commit('setNumArtisans', numArtisans) }
    },
    numEngineers: {
      get: function () { return this.$store.state.population.numEngineers },
      set: function (numEngineers) { this.$store.commit('setNumEngineers', numEngineers) }
    },
    numInvestors: {
      get: function () { return this.$store.state.population.numInvestors },
      set: function (numInvestors) { this.$store.commit('setNumInvestors', numInvestors) }
    },
    numJornaleros: {
      get: function () { return this.$store.state.population.numJornaleros },
      set: function (numJornaleros) { this.$store.commit('setNumJornaleros', numJornaleros) }
    },
    numObreros: {
      get: function () { return this.$store.state.population.numObreros },
      set: function (numObreros) { this.$store.commit('setNumObreros', numObreros) }
    },

    numFarmerResidences: {
      get: function () { return Math.ceil(this.numFarmers / this.farmersPerResidence) },
      set: function (numFarmerResidences) { this.numFarmers = numFarmerResidences * this.farmersPerResidence }
    },
    numWorkerResidences: {
      get: function () { return Math.ceil(this.numWorkers / this.workersPerResidence) },
      set: function (numWorkerResidences) { this.numWorkers = numWorkerResidences * this.workersPerResidence }
    },
    numArtisanResidences: {
      get: function () { return Math.ceil(this.numArtisans / this.artisansPerResidence) },
      set: function (numArtisanResidences) { this.numArtisans = numArtisanResidences * this.artisansPerResidence }
    },
    numEngineerResidences: {
      get: function () { return Math.ceil(this.numEngineers / this.engineersPerResidence) },
      set: function (numEngineerResidences) { this.numEngineers = numEngineerResidences * this.engineersPerResidence }
    },
    numInvestorResidences: {
      get: function () { return Math.ceil(this.numInvestors / this.investorsPerResidence) },
      set: function (numInvestorResidences) { this.numInvestors = numInvestorResidences * this.investorsPerResidence }
    },

    numJornaleroResidences: {
      get: function () { return Math.ceil(this.numJornaleros / this.jornalerosPerResidence) },
      set: function (numJornalerosResidences) { this.numJornaleros = numJornalerosResidences * this.jornalerosPerResidence }
    },
    numObreroResidences: {
      get: function () { return Math.ceil(this.numObreros / this.obrerosPerResidence) },
      set: function (numObreroResidences) { this.numObreros = numObreroResidences * this.obrerosPerResidence }
    }
  }
}
</script>

<style scoped>
.centered-input >>> input {
  text-align: right
}
</style>
