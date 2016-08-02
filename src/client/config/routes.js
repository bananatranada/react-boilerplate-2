import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/App'
import IndexPage from '../components/IndexPage'

// Always make route components containers in case you need
// to fetch items needed for multiple containers in order for them
// to do their thing
function routes(getState) {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      {/*<Route path="*" component={NotFound} />*/}
    </Route>
  )
}

export default routes
