// version of package.json
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: '.',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Anno 1800 Calculator'
        return args
      })
  },

  pluginOptions: {
    /**
     * Vue CLI Plugin Electron Builder
     * See: https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/configuration.html#configuration
     */
    electronBuilder: {
      builderOptions: {
        appId: 'com.github.anno-1800-calculator',
        productName: 'Anno 1800 Calculator',
        mac: {
          category: 'public.app-category.games'
        },
        dmg: {
          icon: false
        },
        linux: {
          target: ['AppImage'],
          category: 'Game'
        }
      }
    }
  }
}
