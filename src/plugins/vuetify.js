import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#C68D5C',
    secondary: '#8E6B49',
    accent: '#C66F1B',
    complementary: '#3f6696',
  },
  customProperties: true,
})
