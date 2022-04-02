<template>
<v-row>
          <v-col cols="4">
        <v-card class="mb-3" color="secondary" dark tile>
          <v-card-title primary class="pb-0 title">Options</v-card-title>
          <v-card-text class="mb-0 pb-0 pt-0">
            <!-- Option: Charcoal or Coal -->
            <v-radio-group class="pb-0 mb-0" v-model="coalOption" row>
              <div style="width: 35px">&nbsp;</div>
              <v-radio label="Charcoal" value="char" >
                <template v-slot:label>
                  <v-img src="@/assets/buildings/workers/charcoal-kiln.webp" contain width="32px"/> &nbsp;
                  Charcoal
                </template>
              </v-radio>
              <v-radio label="Coal" value="rock">
                <template v-slot:label><v-img src="@/assets/buildings/artisans/coal.webp" contain width="32px"/>&nbsp;
                  Coal
                </template>
              </v-radio>
            </v-radio-group>
            <!-- Option: New World or Old World Marquetry -->
            <v-radio-group class="mb-0 pt-0 pt-0 mt-0" v-model="marquetryOption" row>
              <div style="width: 35px"><v-img src="@/assets/buildings/investors/wood-veneers.webp" contain width="32px" height="32px" /></div>
              <v-radio label="Old World Marquetry" value="old"></v-radio>
              <v-radio label="New World Marquetry" value ="new"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-col>
</v-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
