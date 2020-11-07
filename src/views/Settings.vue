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
    <v-row>
      <v-col>
        <select-dlcs></select-dlcs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SelectDLCs from '@/components/settings/SelectDLCs'

export default {
  name: 'Settings.vue',
  components: {
    'select-dlcs': SelectDLCs
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
