import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import color from 'color'

import { breakpoints, colors } from '../config/style'

class Hero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css(style.hero)}>
        {/*<i className="icon-ic-mail-outline" />*/}
        <div className={css(style.backgroundImage)}>
          <div className={css(style.cover)}>
            <nav className={css(style.header)}>
              <a href="/"><div className={css(style.brand)} /></a>
              {/*<ul className={css(style.headerItems)}>
                <li><a>TOUR</a></li>
                <li><a>CUSTOMERS</a></li>
                <li><a>NEW FEATURES</a></li>
                <li><a>ENTERPRISE</a></li>
                <li><a>BLOG</a></li>
                <li><a>LOGIN</a></li>
              </ul>*/}
              {/*<div className="icon-ic-close" />*/}
            </nav>
            <div className={css(style.heroContainer)}>
              <div className={css(style.title)}>DESIGN BETTER. FASTER. TOGETHER.</div>
              <div className={css(style.subTitle)}>The world's leading prototyping, collaboration & workflow platform</div>
              <div className={css(style.heroButton)}>GET STARTED - FREE FOREVER</div>
            </div>
            <div className={css(style.logos)} />
          </div>
        </div>

      </div>
    )
  }
}

const style = StyleSheet.create({
  hero: {
    position: 'relative',
    backgroundColor: 'darkgrey',
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${require("../assets/img/hero-super-fallback.jpg")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: color('#000000').alpha(.6).rgbString(),
  },
  header: {
    margin: '0 32px',
  },
  headerItems: {

  },
  heroContainer: {
    paddingTop: '240px',
    textAlign: 'center',
  },
  title: {
    fontWeight: '300',
    fontSize: '54px',
    letterSpacing: '6.8px',
  },
  subTitle: {
    paddingTop: '30px',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: '24px',
    letterSpacing: '1.4px',
  },
  heroButton: {
    marginTop: '48px',
    display: 'inline-block',
    padding: '14px 24px',
    borderRadius: '3px',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '1.4px',
    backgroundColor: '#ff3366',
    color: 'white',
  },
  logos: {
    width: '100%',
    height: '80px',
    position: 'absolute',
    bottom: '0',
    backgroundColor: 'rgb(249, 249, 250)',
  }
})

export default Hero
