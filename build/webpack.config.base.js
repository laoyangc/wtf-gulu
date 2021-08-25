const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'development',
    entry: './lib/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        library: {
            name: "wtf-gulu",
            type: "umd"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    refSugar: true,
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
