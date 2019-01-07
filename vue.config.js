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
      mainProcessFile: 'src/main/main.js',
      mainProcessWatch: ['src/main'],
      // [1.0.0-rc.4+] Provide a list of arguments that Electron will be launched with during "electron:serve",
      // which can be accessed from the main process (src/background.js).
      // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
      mainProcessArgs: []
    }
  },
  chainWebpack: config => {
    config.entry('app').clear().add('./src/renderer/main.js')
    config.entry('web').clear().add('./src/web/main.js')
    config.resolve.alias
      .set('renderer@', resolve('src/renderer'))
      .set('web@', resolve('src/web'))
      .set('_n', resolve('node_modules'))
      .set('renderer_c', resolve('src/renderer/components'))
      .set('web_c', resolve('src/web/components'))
  },
  // 打包时不生成.map文件，减少体积，加快速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    // proxy: 'http://localhost:4000',
    disableHostCheck: true
  }
}
