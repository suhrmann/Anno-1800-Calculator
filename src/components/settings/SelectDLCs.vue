<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" xs="1" lg="4" xl="3" v-for="dlc in dlcs" :key="dlc.id">
          <v-card elevation="2" tile class="secondary card justify-center" dark>
            <v-img class="card__image" :src="require('@/assets/dlcs/' + dlc.img)"></v-img>
         <v-card-actions>
            <v-checkbox
              v-model="enabledDLCs"
              :value="dlc.id"
              :label="dlc.name"
            >
            </v-checkbox>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import dlcs from '@/data/dlcs.json'

export default {
  name: 'dlcs',
  data: function () {
    return {
      dlcs: dlcs,
      enabledDLCs: []
    }
  }
}
</script>

<style lang="scss">
.card {
  height: auto;
   padding:0.5rem;
  &__image {
    height: auto;
  }
}
</style>
