module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: '/Anno-1800-Calculator/',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Anno 1800 Calculator'
        return args
      })
  }
}
