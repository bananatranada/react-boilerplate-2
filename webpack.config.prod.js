const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/client/client'
  ],
  output: {
    path: path.resolve('./public/dist'), // not just for bundle.js, but for outputs of loaders as well
    publicPath: '/public/dist/', // it's NOT the public dir. it's just to prefix when require(), url(), src
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
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
      { test: /\.svg$/,           loader: 'url?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]' },
      { test: /\.woff$/,          loader: 'url?limit=10000&mimetype=application/x-font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2$/,         loader: 'url?limit=10000&mimetype=font/woff2&name=fonts/[name].[ext]' },
      { test: /\.ttf$/,           loader: 'url?limit=10000&mimetype=application/x-font-ttf&name=fonts/[name].[ext]' },
      { test: /\.eot$/,           loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
    ]
  },
  postcss: [ autoprefixer() ]
}
// importing images in react can be done from anywhere. the loader creates a map that uses the
// original imported path as the key, and the `name=<path>` as the value. In other words, whenever
// you import from X, webpack looks at its map and fetches the appropriate file

// TODO: extract text for separate CSS file. this allows it to be cached on the browser.
// ehh not doing this. the file will be fairly small, and we can't extract aphrodite stuff

// When you require(), url(), src, webpack will transform those into `publicPath/<optional-loader-path>`.
// However, loaders use `path` to output files. In other words, don't rely on it. To keep things simple,
// just use the same `path` and `publicPath`.
// For example `publicPath: /public/` will fail because although the require(), url() stuff are
// being transformed correcty to <publicPath>/<optional loader path>, those loaders are outputting files
// to <path>/optional loader path>!.