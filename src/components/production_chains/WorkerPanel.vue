<template>
<div>
    <v-layout row wrap v-if="!newWorld">
            <v-flex align-self-center xs2>
                <h2 color="primary">Population</h2>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.farmers !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-farmers.webp', 'icons')"
                        :alt="'farmers'"
                    >
                </v-flex>
                <v-flex xs12>
                    Farmers: {{requiredPopulation.farmers}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.workers !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-workers.webp', 'icons')"
                        :alt="'workers'"
                    >
                </v-flex>
                <v-flex xs12>
                    Workers: {{requiredPopulation.workers}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.artisans !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-artisans.webp', 'icons')"
                        :alt="'artisans'"
                    >
                </v-flex>
                <v-flex xs12 >
                    Artisans: {{requiredPopulation.artisans}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.engineers !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-engineers.webp', 'icons')"
                        :alt="'Engineers'"
                    >
                </v-flex>
                <v-flex xs12>
                    Engineers: {{requiredPopulation.engineers}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.investors !== 0">
                <v-flex xs12>            
                    <img
                        
                        :alt="'Investors'"
                    >
                </v-flex>
                <v-flex xs12>
                    Investors: {{requiredPopulation.investors}}
                </v-flex>
            </v-flex>
            <v-flex align-self-center xs2>
                <v-btn @click="changeResidents()">
                    Add to Demands
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-if="newWorld">
            <v-flex align-self-center xs2>
                <h2 color="primary">Population</h2>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.jornaleros !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-jornaleros.webp', 'icons')"
                        :alt="'Jornaleros'"
                    >
                </v-flex>
                <v-flex xs12>
                    Jornaleros: {{requiredPopulation.jornaleros}}
                </v-flex>
            </v-flex>
            <v-flex xs1 v-if="requiredPopulation.obreros !== 0">
                <v-flex xs12>            
                    <img
                        :src="getImage('workforce-obreros.webp', 'icons')"
                        :alt="'Obreros'"
                    >
                </v-flex >
                <v-flex xs12>
                    Obreros: {{requiredPopulation.obreros}}
                </v-flex>
            </v-flex>
            <v-flex align-self-center>
                <v-btn @click="changeResidents()">
                    Add to Demands
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
                farmers: 0, 
                workers: 0, 
                artisans: 0, 
                engineers: 0, 
                investors: 0, 
                jornaleros: 0, 
                obreros: 0
                },
        }
    },

    computed: {
        newWorld() {
            const worldID = this.$store.state.selectedWorldID
            if (worldID === 1)
            {
                return false
            } else {
                return true
            }
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
            console.log(building)
            this.requiredPopulation.farmers += (building.maintenance.farmer * element.relativeAmount)
            this.requiredPopulation.qorkers += (building.maintenance.worker * element.relativeAmount)
            this.requiredPopulation.artisans += (building.maintenance.artisan * element.relativeAmount)
            this.requiredPopulation.engineers += (building.maintenance.engineer * element.relativeAmount)
            this.requiredPopulation.investors += (building.maintenance.investor * element.relativeAmount)
            this.requiredPopulation.jornaleros += (building.maintenance.jornaleros * element.relativeAmount)
            this.requiredPopulation.obreros += (building.maintenance.obreros * element.relativeAmount)
        },

        resetRequiredPopulation(){
            this.requiredPopulation = {
                farmers: 0, 
                workers: 0, 
                artisans: 0, 
                engineers: 0, 
                investors: 0, 
                jornaleros: 0, 
                obreros: 0
            }
        },

        changeResidents(){
            this.$store.commit('addToPopulationDemands', this.requiredPopulation)
            this.$router.push('/demands')
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
