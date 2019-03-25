<template>
<div>
    <v-layout row wrap v-if="!newWorld">
            <v-flex align-self-center xs2>
                <h2 color="primary">Required Workers </h2>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.requiredFarmers !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-farmers.webp', 'icons')"
                        :alt="'farmers'"
                    >
                </v-flex>
                <v-flex xs12>
                    Farmers: {{requiredPopulation.requiredFarmers}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.requiredWorkers !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-workers.webp', 'icons')"
                        :alt="'workers'"
                    >
                </v-flex>
                <v-flex xs12>
                    Workers: {{requiredPopulation.requiredWorkers}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.requiredArtisans !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-artisans.webp', 'icons')"
                        :alt="'artisans'"
                    >
                </v-flex>
                <v-flex xs12 >
                    Artisans: {{requiredPopulation.requiredArtisans}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.requiredEngineers !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-engineers.webp', 'icons')"
                        :alt="'Engineers'"
                    >
                </v-flex>
                <v-flex xs12>
                    Engineers: {{requiredPopulation.requiredEngineers}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.requiredInvestors !== 0">
                <v-flex xs12>            
                    <img
                        
                        :alt="'Investors'"
                    >
                </v-flex>
                <v-flex xs12>
                    Investors: {{requiredPopulation.requiredInvestors}}
                </v-flex>
            </v-flex>
            <v-flex align-self-center xs2>
                <v-btn @click="showDemands()">
                    Show Demands
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-if="newWorld">
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-jornaleros.webp', 'icons')"
                        :alt="'Jornaleros'"
                    >
                </v-flex>
                <v-flex xs12>
                    Jornaleros: {{requiredPopulation.requiredJornaleros}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-obreros.webp', 'icons')"
                        :alt="'Obreros'"
                    >
                </v-flex >
                <v-flex xs12>
                    Obreros: {{requiredPopulation.requiredObreros}}
                </v-flex>
            </v-flex>
            <v-flex align-self-center>
                <v-btn>
                    Show Demands
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { helperFunctionMixin } from "../helperFunctionMixin.js"
import { chainNodeMixin } from "./chainNodeMixin.js";

export default {
    mixins: [chainNodeMixin, helperFunctionMixin],
    props: {
        chain: {
            type: Object,
        },
    },
    data() {
        return {
            requiredPopulation: {
                requiredFarmers: 0, 
                requiredWorkers: 0, 
                requiredArtisans: 0, 
                requiredEngineers: 0, 
                requiredInvestors: 0, 
                requiredJornaleros: 0, 
                requiredObreros: 0
                },
        }
    },

    computed: {
        newWorld() {
            return false 
        }
    },

    watch: {
        chain(newChain) {
            const chainNodeMixin = this;
            this.resetRequiredPopulation();
            chainNodeMixin.iterateProductionChain(
                this.chain, 
                (rootElement) => this.getPopulationReq(rootElement), 
                (element) => this.getPopulationReq(element),
                false)
        }
    },

    methods: {

        getPopulationReq(element) {
            const helperFunctionMixin = this
            let building = helperFunctionMixin.getBuildingByName(element.name)

            this.requiredPopulation.requiredFarmers += (building.maintenance.farmer * element.relativeAmount)
            this.requiredPopulation.requiredWorkers += (building.maintenance.worker * element.relativeAmount)
            this.requiredPopulation.requiredArtisans += (building.maintenance.artisan * element.relativeAmount)
            this.requiredPopulation.requiredEngineers += (building.maintenance.engineer * element.relativeAmount)
            this.requiredPopulation.requiredInvestors += (building.maintenance.investor * element.relativeAmount)
            this.requiredPopulation.requiredJornaleros += (building.maintenance.jornaleros * element.relativeAmount)
            this.requiredPopulation.requiredObreros += (building.maintenance.obreros * element.relativeAmount)
        },

        resetRequiredPopulation(){
            this.requiredPopulation = {
                requiredFarmers: 0, 
                requiredWorkers: 0, 
                requiredArtisans: 0, 
                requiredEngineers: 0, 
                requiredInvestors: 0, 
                requiredJornaleros: 0, 
                requiredObreros: 0
            }
        },

        showDemands(){
            alert('this button should show the residental Demands for these specific numbers in future versions')
        },
    },
}
</script>

<style>
img {
    height: 40%;
    width: 40%;
}
</style>
