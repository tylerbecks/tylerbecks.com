import React from 'react'
import injectSheet from 'react-jss'

import { darkGray } from '../utils/styles'

const styles = {
  root: {
    background: darkGray,
    color: 'white',
    textAlign: 'center',
  },
}

const Footer = ({ classes }) => (
  <footer className={classes.root}>I'm a footer!</footer>
)

export default injectSheet(styles)(Footer)
