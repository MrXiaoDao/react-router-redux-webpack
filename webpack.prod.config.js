var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');
var commonWebpack = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var CopyWebpackPlugin = require('copy-webpack-plugin');

const METADATA = {
    host: '.'
};

module.exports = Object.assign({}, commonWebpack, {
    //供html使用的变量
    metadata: METADATA,
    plugins: [
        //commonsPlugin 可以用于分析模块的共用代码, 单独打一个包出来
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new webpack.HotModuleReplacementPlugin(),
        //将图片拷贝到指定位置
        // new CopyWebpackPlugin([{
        //     from: 'src/assets/images',
        //     to: 'images'
        // }]),
        // 提取css为单文件
        //new ExtractTextPlugin("css/[name].css"),
        //压缩js代码
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        //React 官方提供的代码是已经合并的, 这个是 Webpack 不推荐的用法,
        //在合并话的代码上进行定制有点麻烦, Webpack 提供了设置环境变量来优化代码的方案:
        new webpack.DefinePlugin({
            //配置组件中使用的变量,组件中可以直接使用{metadata.host}
            metadata:JSON.stringify(METADATA),
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
        //concat进行数组合并
    ].concat(helpers.getHtmlPlugin())
});