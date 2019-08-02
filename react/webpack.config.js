const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    "template": path.join(__dirname, './src/index.html'),             // source file
    "filename": "index.html",   // 内存中映射文件
})

module.exports = {
    "mode": "development",
    "plugins": [
        htmlPlugin
    ]
}