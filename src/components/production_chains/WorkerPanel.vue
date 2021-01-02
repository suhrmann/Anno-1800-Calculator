<template>
  <v-container>
    <v-row>
      <v-col class="col-1 pa-1" v-for="(soClass, i) in reqPopArray" :key="i">
        <v-row class="col-border">
          <v-col>
            <v-flex class="text-center">
              <v-avatar size="32">
                <img class="center" :src="getImage(soClass.image, 'icons')" :alt="soClass.name">
              </v-avatar>
              <p class="pb-0 mb-0">{{soClass.name}}</p>
            </v-flex>
          </v-col>
        </v-row>
        <v-row class="col-border">
          <v-col class="pt-0 text-right font-weight-black">
            {{soClass.population}}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { helperFunctionMixin } from '../helperFunctionMixin.js'
import { chainNodeMixin } from './chainNodeMixin.js'
import { EventBus } from '@/EventBus'

export default {
  mixins: [chainNodeMixin, helperFunctionMixin],
  props: {
    chain: {
      type: Object
    }
  },
  data () {
    return {
      buildingQueue: [],
      requiredPopulation: {
        farmers: 0,
        workers: 0,
        artisans: 0,
        engineers: 0,
        investors: 0,
        scholars: 0,
        jornaleros: 0,
        obreros: 0,
        explorers: 0,
        technicians: 0,
        shepherds: 0,
        elders: 0
      }
    }
  },

  created () {
    // Event get emitted when clicking on Add to Demands Button in Visual Production Chain
    EventBus.$on('addToDemands', () => {
      this.$store.commit('addBuildings', this.buildingQueue)
      this.$router.push({
        name: 'resident-demands',
        query: {
          linkedFromChains: true,
          populationToAdd: this.requiredPopulation
        }
      })
    })
  },

  computed: {
    reqPopArray () {
      const filteredArray = []

      if (this.requiredPopulation.farmers !== 0 && this.requiredPopulation.farmers !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.farmers,
          name: 'Farmer',
          image: 'workforce-farmers.webp'
        })
      }

      if (this.requiredPopulation.workers !== 0 && this.requiredPopulation.workers !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.workers,
          name: 'Worker',
          image: 'workforce-workers.webp'
        })
      }
      if (this.requiredPopulation.artisans !== 0 && this.requiredPopulation.artisans !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.artisans,
          name: 'Artisans',
          image: 'workforce-artisans.webp'
        })
      }
      if (this.requiredPopulation.engineers !== 0 && this.requiredPopulation.engineers !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.engineers,
          name: 'Engineers',
          image: 'workforce-engineers.webp'
        })
      }
      if (this.requiredPopulation.jornaleros !== 0 && this.requiredPopulation.jornaleros !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.jornaleros,
          name: 'Jornaleros',
          image: 'workforce-jornaleros.webp'
        })
      }
      if (this.requiredPopulation.obreros !== 0 && this.requiredPopulation.obreros !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.obreros,
          name: 'Obreros',
          image: 'workforce-obreros.webp'
        })
      }

      if (this.requiredPopulation.explorers !== 0 && this.requiredPopulation.explorers !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.explorers,
          name: 'Explorers',
          image: 'workforce-explorers.webp'
        })
      }
      if (this.requiredPopulation.technicians !== 0 && this.requiredPopulation.technicians !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.technicians,
          name: 'Technicians',
          image: 'workforce-technicians.webp'
        })
      }
      if (this.requiredPopulation.shepherds !== 0 && this.requiredPopulation.shepherds !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.shepherds,
          name: 'Shepherds',
          image: 'workforce-shepherds.webp'
        })
      }
      if (this.requiredPopulation.elders !== 0 && this.requiredPopulation.shepherds !== undefined) {
        filteredArray.push({
          population: this.requiredPopulation.elders,
          name: 'Elders',
          image: 'workforce-elders.webp'
        })
      }

      return filteredArray
    }

  },

  watch: {
    chain (newChain) {
      const chainNodeMixin = this
      this.resetRequiredPopulation()
      this.buildingQueue = {}
      chainNodeMixin.iterateProductionChain(
        this.chain,
        (rootElement) => this.getPopulationReq(rootElement),
        (element) => this.getPopulationReq(element),
        false
      )
    }
  },

  methods: {
    getPopulationReq (element) {
      const helperFunctionMixin = this
      const building = helperFunctionMixin.getBuildingByName(
        element.name,
        element.regionID
      )
      this.requiredPopulation.farmers +=
        (building.maintenance.farmer ?? 0) * element.relativeAmount
      this.requiredPopulation.workers +=
        (building.maintenance.worker ?? 0) * element.relativeAmount
      this.requiredPopulation.artisans +=
        (building.maintenance.artisan ?? 0) * element.relativeAmount
      this.requiredPopulation.engineers +=
        (building.maintenance.engineer ?? 0) * element.relativeAmount
      this.requiredPopulation.investors +=
        (building.maintenance.investor ?? 0) * element.relativeAmount
      this.requiredPopulation.jornaleros +=
        (building.maintenance.jornaleros ?? 0) * element.relativeAmount
      this.requiredPopulation.obreros +=
        (building.maintenance.obreros ?? 0) * element.relativeAmount
      this.requiredPopulation.explorers +=
        (building.maintenance.explorer ?? 0) * element.relativeAmount
      this.requiredPopulation.technicians +=
        (building.maintenance.technicians ?? 0) * element.relativeAmount
      this.requiredPopulation.shepherds +=
        (building.maintenance.shepherds ?? 0) * element.relativeAmount
      this.requiredPopulation.elders +=
        (building.maintenance.elders ?? 0) * element.relativeAmount

      // this.addBuildingToQueue(element.name);
    },

    resetRequiredPopulation () {
      this.requiredPopulation = {
        farmers: 0,
        workers: 0,
        artisans: 0,
        engineers: 0,
        investors: 0,
        jornaleros: 0,
        obreros: 0,
        explorers: 0,
        technicians: 0,
        shepherds: 0,
        elders: 0
      }
    },

    addBuildingToQueue (building) {
      this.buildingQueue.push(building)
    }
  }
}
</script>

<style scoped>
.col-border {
  border-right: 1px solid #777777;
}
</style>
