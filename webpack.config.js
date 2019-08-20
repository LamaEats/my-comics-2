const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { NODE_ENV } = process.env


module.exports = {
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '@@Components': path.posix.join(__dirname, 'src/components/'),
    },
  },
  entry: './src/index.js',
  output: {
    path: path.posix.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {
          from: /\/(.?)+$/,
          to: 'index.html',
        },
      ],
    },
    hot: true,
    open: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    watchOptions: {
      poll: false,
    },
    port: 5000,
    publicPath: '/',
    contentBase: 'static',
  },
  context: __dirname,
  devtool: 'eval-source-map',
  mode: NODE_ENV || 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: '/',
        ignore: ['.*'],
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-Loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'css-Loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'less-Loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-Loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'css-Loader',
            options: {
              name: '/styles.css',
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|svg)$/,
        loader: 'file-Loader',
        options: {
          name: '[name].[ext]',
        },
      }, {
        test: /\.(png|jpg|gif|svg)(\?.*)?$/,
        loader: 'url-Loader',
        options: {
          limit: Math.pow(2, 32),
          name: '[name].[ext]',
        },
      },
    ],
  },
}
