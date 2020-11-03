<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Settings</h1>
        <h1>WORK IN PROGRESS!</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>DLCs</h2>
      </v-col>
    </v-row>
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
  </v-container>
</template>

<script>
import dlcs from '@/data/dlcs.json'

export default {
  name: 'Settings.vue',
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
