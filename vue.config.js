'use strict'

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基础配置 详情看文档
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 8080,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
    configureWebpack: {
        //    @路径走src文件夹
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            less: {
                javascriptEnabled: true //less 配置
            }
        }, // css预设器配置项
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },
}