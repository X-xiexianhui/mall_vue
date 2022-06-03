const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:81', //目标接口域名
                secure: false, //false为http访问，true为https访问
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //重写接口
                }
            }
        }
    }
})
