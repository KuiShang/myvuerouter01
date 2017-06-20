var path = require('path')

module.exports = {
    entry: {
        index: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port:5000
    },
    devtool: '#eval-source-map',
    resolve: {alias: {'vue': 'vue/dist/vue.js'}}
}
