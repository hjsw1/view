const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/test/index.ts',
    output: {
        path: __dirname + '/build',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.ts$/,
                loader: ['ts-loader', 'tslint-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: __dirname + '/test/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        contentBase: './build',
        inline: true,
        port: 3000
    }
}