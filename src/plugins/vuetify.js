import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#C68D5C',
        secondary: '#8E6B49',
        accent: '#C66F1B',
        complementary: '#3f6696'
      }
    }
  }
})
