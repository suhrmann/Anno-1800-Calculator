<template>
  <div>
    <p>Load population from  NiHoel / Anno1800UXEnhancer</p>
    <p><a href="https://github.com/NiHoel/Anno1800UXEnhancer">https://github.com/NiHoel/Anno1800UXEnhancer</a></p>
    <pre>receivedPopulation: {{ JSON.stringify(receivedPopulation, null, 2) }}</pre>
  </div>
</template>

<script>
import { anno1800UXEnhancerMixin } from './anno1800UXEnhancerMixin.js'

export default {
  name: 'Settings.vue',
  mixins: [anno1800UXEnhancerMixin],
  components: {
  },
  data: function () {
    return {
      receivedPopulation: { a: 1, b: 2 }
    }
  },
  mounted: async () => {
    this.receivedPopulation = await anno1800UXEnhancerMixin.readPopulation()
  }
}
</script>

<style scoped>

</style>
