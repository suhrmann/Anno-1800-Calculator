<template>
  <v-row align-content="middle">
    <v-col
      v-for="dlc in dlcs"
      :key="dlc.id"
      cols="2"
      class="border"
    >
      <v-card
        elevation="2"
        tile
        class="secondary"
        dark
      >
        <v-card-text class="pa-2">
          <v-checkbox
            v-model="enabledDLCs"
            :value="dlc.id"
          >
            <template slot="label">
              <v-row><v-col>
                <v-img :src="require('@/assets/dlcs/' + dlc.img)"></v-img>
              </v-col></v-row>
              <v-row><v-col>
                Owned / Unowned
              </v-col></v-row>
            </template>
          </v-checkbox>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
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

<style scoped>

</style>
