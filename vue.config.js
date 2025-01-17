/*
 * @Author: hyq_bob bob.he@autech.one
 * @Date: 2024-03-19 17:27:28
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2024-03-26 22:43:25
 * @FilePath: /ozfund-vue/vue.config.js
 * @Description: 项目配置文件
 */
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Ozfund_官网";
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: './pdf', to: './static' },
          {from:'./public/favicon.png', to:'./static'}
          // { from: './pdf-file/pdfjs', to: './static' },
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@views': path.join(__dirname, './src/views'),
        '@components': path.join(__dirname, './src/components'),
        '@utils': path.join(__dirname, './src/utils'),
      }
    }
  },
  pwa: {
    name: "Ozfund",
    themeColor: "#FFFFFF",
    msTileColor: '#FFFFFF',
    manifestPath:path.join(__dirname, './public/"manifest.json"'),
    manifestOptions: {
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
      msTile_color: '#FFFFFF',
      name: 'Ozfund',
    },
    iconPaths: {
      favicon32: 'static/favicon.png',
      favicon16: 'static/favicon.png',
      appleTouchIcon: 'static/favicon.png',
      maskIcon: 'static/favicon.png',
      msTileImage: 'static/favicon.png'
    },
    // manifestPath: 'static/ozfund/manifest.json',
  },
  assetsDir: 'static/ozfund',
  // axios.defaults.baseURL
  devServer: {
    historyApiFallback:true,
    // host: "192.168.5.109",
    proxy: {
      "/apiCount": {
        target: "http://ozfund.one",
        ws: true,
        changeOrigin: true,
        withCredentials: true,
        pathRewrite: {
          '^/apiCount': ''
        }
      },
      "/ethereumApi": {
        target: "https://ethereum-api.xyz",
        ws: true,
        changeOrigin: true,
        withCredentials: true,
        pathRewrite: {
          '^/ethereumApi': ''
        }
      }
    },
    https: false
  }
};
