import axios from 'axios'

export const anno1800UXEnhancerMixin = {
  data () {
    return {
    }
  },
  computed: {
    /**
     *  The URL of Anno1800UXEnhancer population server - use the fixed english URL
     *  See  NiHoel/Anno1800Calculator  > PopulationReader.handleResponse()
     *       https://github.com/NiHoel/Anno1800Calculator/blob/master/AnnoCalculator.js#L1062
     * @returns {string}
     */
    anno1800UXEnhancerURL: {
      get: function () {
        return 'http://localhost:8000/AnnoServer/Population?lang=english'
      }
    }
  },
  methods: {
    readPopulation: () => {
      return axios
        .get(this.anno1800UXEnhancerURL)
        .then(function (response) {
          // handle success
          console.log('Received population:', response)
        })
        .catch(function (error) {
          // handle error
          console.error('Error:', error)
        })
        .then(function () {
          // always executed
        })
    }
  }
}
