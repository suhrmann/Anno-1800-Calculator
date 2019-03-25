<template>
    <v-layout row wrap>
            <v-flex align-self-center xs2>
                <h2 color="primary">Resources </h2>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('icon-credits.webp', 'icons')"
                        :alt="'cash'"
                    >
                </v-flex>
                <v-flex xs12>
                    Cash: {{requiredResources.cash}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('balance.webp', 'icons')"
                        :alt="'upkeep'"
                    >
                </v-flex>
                <v-flex xs12>
                    Upkeep: {{requiredResources.cashUpkeep}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('wood.webp', 'buildings/farmers')"
                        :alt="'wood'"
                    >
                </v-flex>
                <v-flex xs12>
                    Wood: {{requiredResources.wood}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('bricks.webp', 'buildings/workers')"
                        :alt="'bricks'"
                    >
                </v-flex>
                <v-flex xs12>
                    Bricks: {{requiredResources.bricks}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('steel.webp', 'buildings/workers')"
                        :alt="'steel'"
                    >
                </v-flex>
                <v-flex xs12>
                    Steel: {{requiredResources.steel}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('windows.webp', 'buildings/artisans')"
                        :alt="'windows'"
                    >
                </v-flex>
                <v-flex xs12>
                    Windows: {{requiredResources.window}}
                </v-flex>
            </v-flex>
            <v-flex xs1>
                <v-flex xs12>            
                    <img
                        :src="getImage('reinforced-concrete.webp', 'buildings/engineers')"
                        :alt="'concrete'"
                    >
                </v-flex>
                <v-flex xs12>
                    Concrete: {{requiredResources.concrete}}
                </v-flex>
            </v-flex>
    </v-layout>
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
            requiredResources: {
                cash: 0,
                cashUpkeep: 0,
                wood: 0,
                bricks: 0,
                steel: 0,
                window: 0,
                concrete: 0,
                influence: 0
            },
        }
    },

    computed: {
    },

    watch: {
        chain(newChain) {
            const chainNodeMixin = this;
            this.resetRequiredResources();
            chainNodeMixin.iterateProductionChain(
                this.chain, 
                (rootElement) => this.getResourceReq(rootElement), 
                (element) => this.getResourceReq(element),
                false)
        }
    },

    methods: {

        getResourceReq(element) {
            const helperFunctionMixin = this
            let building = helperFunctionMixin.getBuildingByName(element.name)

            this.requiredResources.cash += (building.construction.cash * element.relativeAmount)
            this.requiredResources.cashUpkeep += (building.maintenance.cash * element.relativeAmount)
            this.requiredResources.wood += (building.construction.wood * element.relativeAmount)
            this.requiredResources.bricks += (building.construction.brick * element.relativeAmount)
            this.requiredResources.steel += (building.construction.steel * element.relativeAmount)
            this.requiredResources.window += (building.construction.window * element.relativeAmount)
            this.requiredResources.concrete += (building.construction.concrete * element.relativeAmount)
        },

        resetRequiredResources(){
            this.requiredResources = {
                cash: 0,
                cashUpkeep: 0,
                wood: 0,
                bricks: 0,
                steel: 0,
                window: 0,
                concrete: 0,
                influence: 0
            }
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
