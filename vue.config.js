module.exports = {
  transpileDependencies: ["vuetify"],
};

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'two penguins'
        return args
      })
  }
}
