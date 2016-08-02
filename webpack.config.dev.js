const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/client/client'
  ],
  output: {
    path: path.resolve('./public/dist'),
    publicPath: '/public/dist/', // when using require(), url() or src, webpack transforms the path to /public/.
    filename: 'bundle.js'   // it may be /public/dist/img/.. as configured by loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      { test: /\.css$/,           loader: 'style!css!postcss' },
      { test: /\.json$/,          loader: 'json' },
      { test: /\.(jpg|jpeg)$/,    loader: `url?limit=10000&mimetype=image/jpeg&name=img/[name].[ext]` },
      { test: /\.png$/,           loader: `url?limit=10000&mimetype=image/png&name=img/[name].[ext]` },
      { test: /\.svg$/,           loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.woff$/,          loader: 'url?limit=10000&mimetype=application/x-font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2$/,         loader: 'url?limit=10000&mimetype=font/woff2&name=fonts/[name].[ext]' },
      { test: /\.ttf$/,           loader: 'url?limit=10000&mimetype=application/x-font-ttf&name=fonts/[name].[ext]' },
      { test: /\.eot$/,           loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
    ]
  },
  postcss: [ autoprefixer() ]
}
