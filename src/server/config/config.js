let config

if (process.env.NODE_ENV === 'production') {
  config = {
    server: {
      hostname: 'localhost',
      port: 3000
    },
    jsBundlePath: '/public/dist/bundle.js',
  }
} else {
  config = {
    server: {
      hostname: 'localhost',
      port: 3000
    },
    jsBundlePath: '/public/dist/bundle.js',
  }
}

export default config
