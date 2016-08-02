let config

if (process.env.NODE_ENV === 'production') {
  config = {
    api: {
      endpoint: '/api'
    }
  }
} else {
  config = {
    api: {
      endpoint: '/api'
    }
  }
}

export default config
