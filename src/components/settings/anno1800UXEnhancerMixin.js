import axios from 'axios'

export const anno1800UXEnhancerMixin = {
  data () {
    return {
    }
  },
  computed: {
    /**
     *  The URL of Anno1800UXEnhancer - Use the fixed english URL
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
