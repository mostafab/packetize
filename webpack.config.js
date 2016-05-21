const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
    content: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './lib/public/javascript/main.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        path: __dirname + '/lib/public/javascript',
        filename: 'main.min.js'
    }
}