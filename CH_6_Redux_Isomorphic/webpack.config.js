var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './www',
        port: 7000
    },
    entry: './client.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: './www',
        filename: 'scripts/bundle.min.js'
    }
};
