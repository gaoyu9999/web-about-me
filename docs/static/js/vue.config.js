const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
// const merge = require('lodash.merge')
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const taregt = TARGET_NODE ? 'server' : 'client'
module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 构建时的输出目录
  assetsDir: "static", // 放置静态资源的目录
  indexPath: "index.html", // html 的输出路径
  filenameHashing: true, // 文件名哈希值
  lintOnSave: false, // 是否在保存的时候使用 `eslint-loader` 进行检查。

  // 组件是如何被渲染到页面中的？ （ast：抽象语法树；vDom：虚拟DOM）
  // template ---> ast ---> render ---> vDom ---> 真实的Dom ---> 页面
  // runtime-only：将template在打包的时候，就已经编译为render函数
  // runtime-compiler：在运行的时候才去编译template
  runtimeCompiler: false,
  transpileDependencies: [], // babel-loader 默认会跳过 node_modules 依赖。
  productionSourceMap: false, // 是否为生产环境构建生成 source map

  //调整内部的 webpack 配置

  chainWebpack: () => {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    //   open: true, // 编译后默认打开浏览器
    //   host: 'localhost',  // 域名
    port: 8888, // 端口
    https: false, // 是否https
    // 显示警告和错误
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "http://43.143.27.129:5050",
        changeOrigin: true, // 是否跨域
        // ws: false, // 是否支持 websocket
        // secure: false, // 如果是 https 接口，需要配置这个参数
        pathRewrite: {
          // 可以理解为一个重定向或者重新赋值的功能
          "^/api": "", // '^/api': '/'    这种接口配置出来     http://127.0.0.1:10001/login
        }, // '^/api': '/api'  这种接口配置出来     http://127.0.0.1:10001/api/login
      },
    },
  },
  outputDir: './dist/'+taregt,
  // 取消eslint校验
  lintOnSave: false,
  configureWebpack: () => ({
    // 将entry指向应用程序的server / client文件
    entry: `./src/entry-${taregt}.js`,
    devtool: 'source-map',
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    output: {
      // 此处告知 server bundle 使用 Node 风格到处模版
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
    },
    // 外置化应用程序模块化依赖，可以使服务器构建速度更快，并生成较小的bundle文件
    externals: TARGET_NODE ?
      nodeExternals({
        allowlist: [/\.css$/]
      }) : undefined,
    optimization: {
      splitChunks: TARGET_NODE ? false : undefined
    },
    // 将服务器的整个输出构建为单个JSON文件的插件
    // 服务端默认文件名为： vue-ssr-server-bundle.json
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  })
  // rules: [
  //   {
  //     test: /\.less$/,
  //     loader: "style-loader!css-loader!less-loader",
  //   },
  // ],
};
