module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './build/icons/icon.ico'
        },
        productName: 'CV',
        publish: ['github']
      },
      chainWebpackRendererProcess: config => {
        if (process.env.NODE_ENV === 'development') {
          config.plugins.delete('prefetch')
        }
      }
    }
  }
}