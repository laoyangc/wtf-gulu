const baseConfig = require("./webpack.config.base")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        static: './dist',
        hot: true,
    }
}
