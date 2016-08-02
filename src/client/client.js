import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

function render() {
  const Root = require('./components/Root').default
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render()
  })
}
