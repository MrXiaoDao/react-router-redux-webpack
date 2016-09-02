# react-router-redux-webpack配置 #

这里的webpack配置是针对多页面开发， 单页面中进行路由跳转这里需要5个相关配置文件。

1. package.json  定义项目依赖模块 以及 定义开启服务器和打包命令
2. helpers.js  获取入口文件和html文件
3. webpack.base.config.js  定义webpack基础配置
4. webpack.dev.config.js  定义webpack开发配置
5. webpack.prod.config.js  定义webpack生产配置

改项目中包含了
  路由跳转，
  数据请求模块封装，
  webview与js交互模块封装，
  配置文件分离，
  自动打包多个html文件，
  以一个简单的例子实现 dispatch->action->reducer->state->view流程，
  定义共用sass文件，
  定义第三方字体库
  