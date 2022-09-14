const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: 'style-loader', options: { injectType: 'linkTag' } },
                    { loader: 'file-loader', options: { name: 'css/[name].css' } },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: false
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "assets/js/script.es5.js",
                    to: "js"
                },
                {
                    from: "assets/js/script.es6.js",
                    to: "js"
                }
            ],
        }),
    ]
}
