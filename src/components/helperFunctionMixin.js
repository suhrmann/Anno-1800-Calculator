import producers from '../data/producers.json';
import nonProducers from '../data/non-producers.json';

export const helperFunctionMixin = {
  computed: {
    producers() {
      return JSON.parse(JSON.stringify(producers));
    },
    nonProducers() {
      return JSON.parse(JSON.stringify(nonProducers));
    },
  },
  methods: {
    /**
     * Workaround to load images dynamically in for-loop.
     *
     * @param {string} image The image to load.
     * @param {string} folder The folder that contains the image
     *                        NOTE: Relative to assets/ AND WITHOUT "/" at start and end.
     * @return {string} The URL of the image (e.g. for use as img src).
     */
    getImage(image, folder) {
      return image ? require(`../assets/${folder}/${image}`) : '';
    },

    getBuildingByName(name) {
      const buildings = this.producers.Producers;
      for (const building in buildings) {
        if (buildings[building].building === name) {
          console.log(buildings[building]);
          return buildings[building];
        }
      }
    },
  },
};
