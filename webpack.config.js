const path = require('path')

module.exports = {
    entry: {
        fsm: path.resolve(__dirname, 'src/fsm.js'),
        test: path.resolve(__dirname, 'src/test.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        port: 9080,
        inline: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules/'),
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['env']
            }
        }]
    },
}