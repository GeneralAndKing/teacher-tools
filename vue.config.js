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
  assetsDir: 'common',
  pages: {
    app: {
      // entry for the page
      entry: 'src/renderer/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'app.html'
    }
    // jobServer: {
    //   // entry for the page
    //   entry: 'src/jobServerRenderer/main.js',
    //   // the source template
    //   template: 'public/index.html',
    //   // output as dist/index.html
    //   filename: 'jobServer.html'
    // },
    // shareServer: {
    //   // entry for the page
    //   entry: 'src/shareServerRenderer/main.js',
    //   // the source template
    //   template: 'public/index.html',
    //   // output as dist/index.html
    //   filename: 'shareServer.html'
    // }
  },
  configureWebpack: config => {
    console.log(config)
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
    config.resolve.alias
      .set('renderer@', resolve('src/renderer'))
      .set('_n', resolve('node_modules'))
      .set('renderer_c', resolve('src/renderer/components'))
      .set('common@', resolve('src/common/'))
  },
  // 打包时不生成.map文件，减少体积，加快速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    // proxy: 'http://localhost:4000',
    disableHostCheck: true
  }
}
