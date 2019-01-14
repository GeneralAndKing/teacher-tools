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
  pages: getPages(),
  assetsDir: 'common',
  configureWebpack: config => {
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        files: [
          {
            'filter': ['**/*']
          }
        ],
        extraFiles: ['./extensions/'],
        asar: false
      },
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
      .set('app@', resolve('src/app'))
      .set('_n', resolve('node_modules'))
      .set('common@', resolve('src/common/'))
      .set('communication@', resolve('src/communication/'))
      .set('form@', resolve('src/form/'))
      .set('client@', resolve('src/client/'))
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  // 打包时不生成.map文件，减少体积，加快速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    // proxy: 'http://localhost:4000',
    disableHostCheck: true
  }
}

/**
 * 全局 less 引入
 * @param {*} rule 传递规则
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/common/theme/iview-variables.less')
      ]
    })
}
/**
 * 根据MODE选择对应的pages进行打包
 */
function getPages () {
  if (process.env.MODE === 'web') {
    return {
      client: {
        // entry for the page
        entry: 'src/clinet/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html'
      }
    }
  } else {
    return {
      app: {
        entry: 'src/app/main.js',
        template: 'public/index.html',
        filename: 'app.html'
      },
      communication: {
        entry: 'src/communication/main.js',
        template: 'public/index.html',
        filename: 'communication.html'
      },
      forms: {
        entry: 'src/forms/main.js',
        template: 'public/index.html',
        filename: 'forms.html'
      }
    }
  }
}
