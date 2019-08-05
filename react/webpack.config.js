const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    "template": path.join(__dirname, './src/index.html'),             // source file
    "filename": "index.html",   // 内存中映射文件
});

module.exports = {
    "mode": "development",
    "plugins": [
        htmlPlugin
    ],

    // webpack 默认只能打包 .js 后缀类型的文件，无法主动处理 .png, .vue 文件
    // 所以要配置第三方的 loader
    module: {                   // 第三方模块的配置规则
        rules: [
            {
                "test": /\.js|jsx$/,
                "use": 'babel-loader',
                "exclude": /node_modules/
            }
        ]

    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, "./src")
        }
    }
};