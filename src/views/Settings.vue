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
    <select-dlcs></select-dlcs>

    <v-row>
      <v-col>
        <h2> NiHoel / Anno1800UXEnhancer </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <anno1800-ux-enhancer></anno1800-ux-enhancer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SelectDLCs from '@/components/settings/SelectDLCs'
import Anno1800UXEnhancer from '@/components/settings/Anno1800UXEnhancer'

export default {
  name: 'Settings.vue',
  components: {
    'select-dlcs': SelectDLCs,
    'anno1800-ux-enhancer': Anno1800UXEnhancer
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
