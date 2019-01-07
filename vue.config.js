const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    //
  },
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
      },
      mainProcessFile: 'src/main/background.js'
    }
  },
  chainWebpack: config => {
    config.entry('app').clear().add('./src/render/main.js')
    config.resolve.alias
      .set('@', resolve('src/render'))
      .set('_n', resolve('node_modules'))
      .set('_c', resolve('src/render/components'))
  },
  // 打包时不生成.map文件，减少体积，加快速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    // proxy: 'http://localhost:4000',
    disableHostCheck: true
  }
}
