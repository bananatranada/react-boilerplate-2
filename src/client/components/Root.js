import React from 'react'
import { Router, browserHistory } from 'react-router'

import routes from '../config/routes'

let Root

if (process.env.NODE_ENV === 'production') {
  function RootProd(props) {
    return (
      <Router routes={routes()} history={browserHistory} />
    )
  }
  Root = RootProd
} else {
  function RootDev(props) {
    return (
        <Router routes={routes()} history={browserHistory} />
    )
  }
  Root = RootDev
}

export default Root
