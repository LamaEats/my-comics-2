const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let clientDir = (file) => path.resolve('src/', file);

const config = {
    entry: clientDir('index.js'),
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js'
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /\/(.?)+$/, to: 'index.html' },
            ],
        },
        host: 'localhost',
        port: 5000,
        inline: true,
        open: true,
        overlay: { warnings: true, errors: true },
        publicPath: '/dist/',
        quiet: true,
        watchOptions: {
            poll: false,
        }
    },

    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    },

    context: __dirname,
    devtool: 'eval-source-map',
    plugins: [
        new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true }),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            loader: "babel-loader",
            query: {
                presets: [['env', {
                    targets: {
                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                    }
                }], 'react', 'stage-0', 'stage-1']
            }
        }, {
            test: /\.less/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: true }
                    }
                ],
            })
        },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 8', 'last 4 version']
                                    })
                                ],
                                sourceMap: true
                            }
                        },
                    ]
                })
            }, {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[hash:7].[ext]',
            },
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        },]
    }
};

module.exports = config;