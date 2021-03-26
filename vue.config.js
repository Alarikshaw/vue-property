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
}