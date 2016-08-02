import path from 'path'
import express from 'express'

import config from './config/config'
import api from './api/api'

const app = express()
const port = process.env.PORT || config.server.port

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfigDev = require('../../webpack.config.dev')
  const compiler = webpack(webpackConfigDev)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfigDev.publicPath, // Weird: can't use the one in webpackConfigDev
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.use('/public', express.static(path.resolve(__dirname, '../../public')))
app.use('/api', api)

app.get('*', (req, res) => {
  // res.send(renderFullPage())
  res.sendFile(path.resolve(__dirname, '../../public/index.html'))
})

// function renderFullPage() {
//   return `
//     <!doctype html>
//     <html lang="en">
//       <head>
//         <title>bkgunby boilerplate</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//         <meta http-equiv="x-ua-compatible" content="ie=edge">
//         <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,300italic,300,600,700' rel='stylesheet' type='text/css'>
//       </head>
//       <body>
//         <div id="root"></div>
//         <script src="${config.jsBundlePath}"></script>
//       </body>
//     </html>
//     `
// }

// app.listen(port, config.server.hostname, () => {
//   console.log(`${process.env.NODE_ENV} server started on port ${port}.\n`)
// })

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server started on port ${port}.\n`)
})

        //<link rel="stylesheet" type="text/css" href="/public/css/normalize.css">
        //<link rel="stylesheet" type="text/css" href="/public/css/reboot.css">
        //<link rel="stylesheet" type="text/css" href="/public/css/global.css">