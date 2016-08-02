import React, { Component } from 'react'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import '../assets/css/global.css'

const propTypes = {

}

const defaultProps = {

}

class App extends Component {
  constructor(props) {
    super(props)

    
  }

  // Style body, head, title, etc. here
  componentWillMount() {
  }


  componentDidMount() {

  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

App.defaultProps = defaultProps

export default App
