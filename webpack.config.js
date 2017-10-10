const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let clientDir = (file) => path.resolve('src/', file);

const config = {
    entry: {
        app: clientDir('index.js'),
        style: clientDir('main.less')
    },
    output: {
        path: __dirname + '/dist/build/',
        filename: '[name].js'
    },
    context: __dirname,
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react', 'stage-0', 'stage-1']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'postcss-loader'
                ]
            })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'less-loader',
                ]
            })
        }]
    }
};

module.exports = config;