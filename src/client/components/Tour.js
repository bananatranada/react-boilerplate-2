import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import color from 'color'

import { breakpoints, colors } from '../config/style'

class Tour extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css(style.tour)}>
        <div className={css(style.left)}>
          <div className={css(style.text)}>
            <div className={css(style.textHeader)}>Powerful design prototyping tools</div>

          </div>
        </div>
        <div className={css(style.right)}>
          <img className={css(style.image)} src={require('../assets/img/mockup-1.png')} />
        </div>
      </div>
    )
  }
}

const style = StyleSheet.create({
  tour: {
    display: 'flex',
    alignItems: 'center',
    padding: '64px 0',
    overflow: 'hidden',
    width: '100%',
  },
  left: {
    flexGrow: '.9',
    flexBasis: '0',
    // display: 'inline-block',
  },
  right: {
    position: 'relative',
    backgroundColor: 'pink',
    flexGrow: '1',
    flexBasis: '0',
    height: '800px',
    // display: 'inline-block',
    // position: 'relative',
    // left: '450px',
  },
  image: {
    position: 'absolute',
  },
  text: {
    margin: '100px',
  },
  textHeader: {
    fontSize: '38px',
    fontWeight: '300',
  }
})

export default Tour
