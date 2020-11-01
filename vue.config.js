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
  }
}
