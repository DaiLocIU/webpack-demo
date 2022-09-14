const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    mode: 'development',
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
                    context: "assets/js/",
                    from: "script.*.js",
                    to: "js"
                },
                {
                    context: "assets/images/",
                    from: "*",
                    to: "images"
                },
            ],
        }),
    ]
}
