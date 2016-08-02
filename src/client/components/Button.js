import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import { breakpoints, colors } from '../config/style'

const propTypes = {
  href: PropTypes.string.isRequired,
  filled: PropTypes.bool.isRequired,
  allCaps: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string.isRequired,
}

const defaultProps = {
  href: '#',
  filled: true,
  allCaps: true,
  backgroundColor: '#ff3366',
  color: 'white',
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: 'normal',
}

const Button = (props) => {
  const { 
    children,
    href,
  } = props

  const s = style(props)

  return (
    <a href={href}>
      <div className={css(s.button)}>{children}</div>
    </a>
  )
}

const style = (props) => StyleSheet.create({
  button: {
    display: 'inline-block',
    padding: '14px 24px',
    borderRadius: '3px',
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    letterSpacing: props.letterSpacing,
    backgroundColor: props.backgroundColor,
    color: props.color,
  }
})

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button